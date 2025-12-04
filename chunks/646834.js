n.d(t, { Z: () => y }), n(388685), n(415506), n(49124);
var r,
    i = n(818710),
    a = n(442837),
    o = n(570140),
    s = n(323183),
    l = n(299886),
    c = n(626135),
    u = n(960048),
    d = n(998502),
    f = n(669135),
    p = n(981631);
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
let m = 10,
    h = { status: "" },
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
class b extends (r = a.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (h = e),
            (g = [...g.slice(g.length < m ? 0 : 1, m), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(
                await (null === d.ZP ||
                void 0 === d.ZP ||
                null == (n = d.ZP.getDiscordUtils) ||
                null == (t = n.call(d.ZP)) ||
                null == (e = t.runWarpCommand)
                    ? void 0
                    : e.call(t, "status")),
            );
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === d.ZP ||
                void 0 === d.ZP ||
                null == (n = d.ZP.getDiscordUtils) ||
                null == (t = n.call(d.ZP)) ||
                null == (e = t.onWarpEvent) ||
                e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await d.ZP.getDiscordUtils().runWarpCommand(e, ...n);
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
            if (l.H.getConfig({ location: "configureLicense" }).enabled) {
                let e = n,
                    r = await (0, f.S)(e.id, t);
                if (null != r && "" !== r) await this.runCommand("registration", "license", r);
                else throw Error("No license key returned from API when configuring license");
            }
        } catch (e) {
            if (
                (u.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE" } }),
                c.default.track(p.rMx.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: s.D.PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE,
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
        return h;
    }
    get log() {
        return g;
    }
    get clientEnabled() {
        return (0, i.nI)() && l.H.getConfig({ location: "WarpClientStore" }).enabled;
    }
    get enabled() {
        return "Connected" === h.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === h.status ||
            "Connecting" === h.status ||
            "ConnectCommandSent" === h.status ||
            "Installing" === h.status ||
            "Installed" === h.status
        );
    }
    async connect() {
        return (
            this.clientEnabled &&
                (this.logEvent({ status: "Configuring" }),
                await this.configureLicense({ ignoreAPIError: !0 }),
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
            return (h = { status: "DisconnectCommandSent" }), await e;
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
let y = new b(o.Z, {});
