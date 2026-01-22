n.d(t, { A: () => y }), n(896048), n(65821), n(457529);
var r,
    i = n(574381),
    a = n(311907),
    s = n(73153),
    o = n(156186),
    l = n(967370),
    c = n(954571),
    u = n(728458),
    d = n(837921),
    f = n(410109),
    p = n(652215);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = 10,
    m = { status: "" },
    g = [],
    E = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class b extends (r = a.Ay.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (m = e),
            (g = [...g.slice(g.length < h ? 0 : 1, h), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(
                await (null === d.Ay ||
                void 0 === d.Ay ||
                null == (n = d.Ay.getDiscordUtils) ||
                null == (t = n.call(d.Ay)) ||
                null == (e = t.runWarpCommand)
                    ? void 0
                    : e.call(t, "status")),
            );
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === d.Ay ||
                void 0 === d.Ay ||
                null == (n = d.Ay.getDiscordUtils) ||
                null == (t = n.call(d.Ay)) ||
                null == (e = t.onWarpEvent) ||
                e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await d.Ay.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async configureLicense(e) {
        let { ignoreAPIError: t } = e,
            n = await this.runCommand("registration", "show");
        if ((null == n ? void 0 : n.code) === "MissingRegistration")
            throw Error("MissingRegistration when configuring license");
        try {
            if (l.S.getConfig({ location: "configureLicense" }).enabled) {
                let e = n,
                    i = await (0, f.R)(null == e ? void 0 : e.id, t);
                if (null != i && "" !== i) {
                    var r;
                    if (i === (null == e || null == (r = e.account) ? void 0 : r.license)) return;
                    await this.runCommand("registration", "license", i);
                } else throw Error("No license key returned from API when configuring license");
            }
        } catch (e) {
            if (
                (u.A.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE" } }),
                c.default.track(p.HAw.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: o.q.PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE,
                }),
                !t)
            )
                throw e;
        }
    }
    async configureExceptions() {
        try {
            let t = await this.runCommand("tunnel", "host", "list");
            if ((null == t ? void 0 : t.mode) === "exclude")
                for (let n of E) {
                    var e;
                    (null == t || null == (e = t.hosts) ? void 0 : e.indexOf(n)) === -1 &&
                        (await this.runCommand("tunnel", "host", "add", n));
                }
        } catch (e) {}
    }
    async configureMode() {
        try {
            await this.runCommand("mode", "warp+doh");
        } catch (e) {}
    }
    get state() {
        return m;
    }
    get log() {
        return g;
    }
    get clientEnabled() {
        return (0, i.xl)() && l.S.getConfig({ location: "WarpClientStore" }).enabled;
    }
    get enabled() {
        return "Connected" === m.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === m.status ||
            "Connecting" === m.status ||
            "ConnectCommandSent" === m.status ||
            "Installing" === m.status ||
            "Installed" === m.status
        );
    }
    async connect() {
        return (
            this.clientEnabled &&
                (this.logEvent({ status: "Configuring" }),
                this.configureLicense({ ignoreAPIError: !0 }).catch(() => {}),
                await this.configureExceptions(),
                await this.configureMode(),
                this.logEvent({ status: "ConnectCommandSent" }),
                await this.runCommand("connect")),
            this.clientEnabled
        );
    }
    async disconnect() {
        if (this.clientEnabled) {
            let e = this.runCommand("disconnect");
            return (m = { status: "DisconnectCommandSent" }), await e;
        }
        return this.clientEnabled;
    }
    async finishSetup() {
        return (
            await this.configureExceptions(),
            await this.configureMode(),
            await this.configureLicense({ ignoreAPIError: !0 }),
            await this.updateState(),
            !0
        );
    }
}
_(b, "displayName", "WarpClientStore");
let y = new b(s.h, {});
