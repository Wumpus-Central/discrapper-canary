n.d(t, { Z: () => O }), n(388685), n(415506), n(49124);
var r,
    i = n(990547),
    a = n(818710),
    o = n(442837),
    s = n(570140),
    l = n(323183),
    c = n(299886),
    u = n(626135),
    d = n(960048),
    f = n(573261),
    p = n(998502),
    _ = n(981631);
function m(e, t, n) {
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
    g = { status: "" },
    E = [],
    b = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class y extends (r = o.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (g = e),
            (E = [...E.slice(E.length < h ? 0 : 1, h), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            var e, t, n;
            this.logEvent(
                await (null === p.ZP ||
                void 0 === p.ZP ||
                null == (n = p.ZP.getDiscordUtils) ||
                null == (t = n.call(p.ZP)) ||
                null == (e = t.runWarpCommand)
                    ? void 0
                    : e.call(t, "status")),
            );
        } catch (e) {}
    }
    addListener() {
        try {
            var e, t, n;
            null === p.ZP ||
                void 0 === p.ZP ||
                null == (n = p.ZP.getDiscordUtils) ||
                null == (t = n.call(p.ZP)) ||
                null == (e = t.onWarpEvent) ||
                e.call(t, (e) => this.logEvent(e));
        } catch (e) {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await p.ZP.getDiscordUtils().runWarpCommand(e, ...n);
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
            if (c.H.getConfig({ location: "configureLicense" }).enabled) {
                let e = (
                    await f.Z.post({
                        url: _.ANM.USER_WARP_LICENSE,
                        retries: 3,
                        oldFormErrors: !0,
                        rejectWithError: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.NITRO_WARP_CREATE_LICENSE,
                            properties: { is_on_connect: t },
                        },
                    })
                ).body.license_key;
                if (null != e && "" !== e) await this.runCommand("registration", "license", e);
                else throw Error("No license key returned from API when configuring license");
            }
        } catch (e) {
            if (
                (d.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE" } }),
                u.default.track(_.rMx.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: l.D.PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE,
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
                for (let n of b) {
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
        return g;
    }
    get log() {
        return E;
    }
    get clientEnabled() {
        return (0, a.nI)() && c.H.getConfig({ location: "WarpClientStore" }).enabled;
    }
    get enabled() {
        return "Connected" === g.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === g.status ||
            "Connecting" === g.status ||
            "ConnectCommandSent" === g.status ||
            "Installing" === g.status ||
            "Installed" === g.status
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
            return (g = { status: "DisconnectCommandSent" }), await e;
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
m(y, "displayName", "WarpClientStore");
let O = new y(s.Z, {});
