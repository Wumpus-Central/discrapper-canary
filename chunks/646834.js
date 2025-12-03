n.d(t, { Z: () => b }), n(388685), n(415506);
var r,
    i = n(990547),
    a = n(818710),
    o = n(442837),
    s = n(570140),
    l = n(299886),
    c = n(960048),
    u = n(573261),
    d = n(998502),
    f = n(981631);
function p(e, t, n) {
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
let _ = 10,
    m = { status: "" },
    h = [],
    g = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class E extends (r = o.ZP.Store) {
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (m = e),
            (h = [...h.slice(h.length < _ ? 0 : 1, _), e]),
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
                let e = (
                    await u.Z.post({
                        url: f.ANM.USER_WARP_LICENSE,
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
            if ((c.Z.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE" } }), !t)) throw e;
        }
    }
    async configureExceptions() {
        try {
            let t = await this.runCommand("tunnel", "host", "list");
            if ((null == t ? void 0 : t.mode) === "exclude")
                for (let n of g) {
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
        return h;
    }
    get clientEnabled() {
        return (0, a.nI)() && l.H.getConfig({ location: "WarpClientStore" }).enabled;
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
p(E, "displayName", "WarpClientStore");
let b = new E(s.Z, {});
