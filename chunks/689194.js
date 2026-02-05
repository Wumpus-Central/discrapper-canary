"use strict";
n.d(t, { A: () => E });
var r = n(574381),
    i = n(311907),
    a = n(73153),
    s = n(156186),
    o = n(967370),
    l = n(954571),
    u = n(728458),
    c = n(837921),
    d = n(410109),
    _ = n(652215);
let f = 10,
    p = { status: "" },
    h = [],
    m = [
        "discord.com",
        "discordapp.com",
        "discordapp.net",
        "dl.discordapp.net",
        "discordcdn.com",
        "discord.gg",
        "discord.media",
    ];
class g extends i.Ay.Store {
    static displayName = "WarpClientStore";
    initialize() {
        this.updateState(), this.addListener();
    }
    logEvent(e) {
        "status" in e && "string" == typeof e.status && (p = e),
            (h = [...h.slice(h.length < f ? 0 : 1, f), e]),
            this.emitChange();
    }
    async updateState() {
        try {
            this.logEvent(await c.Ay?.getDiscordUtils?.()?.runWarpCommand?.("status"));
        } catch {}
    }
    addListener() {
        try {
            c.Ay?.getDiscordUtils?.()?.onWarpEvent?.((e) => this.logEvent(e));
        } catch {}
    }
    async runCommand(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        try {
            return await c.Ay.getDiscordUtils().runWarpCommand(e, ...n);
        } catch (e) {
            throw (this.logEvent({ commandError: e.message }), e);
        }
    }
    async configureLicense(e) {
        let { ignoreAPIError: t } = e,
            n = await this.runCommand("registration", "show");
        if (n?.code === "MissingRegistration") throw Error("MissingRegistration when configuring license");
        try {
            if ((0, o.lM)("configureLicense")) {
                let e = n,
                    r = await (0, d.R)(e?.id, t);
                if (null != r && "" !== r) {
                    if (r === e?.account?.license) return;
                    await this.runCommand("registration", "license", r);
                } else throw Error("No license key returned from API when configuring license");
            }
        } catch (e) {
            if (
                (u.A.captureException(e, { tags: { source: "PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE" } }),
                l.default.track(_.HAw.PREMIUM_FEATURE_ERROR, {
                    error_message: e instanceof Error ? e.message : JSON.stringify(e),
                    error_source: s.q.PRIVATE_BROWSING_PERK_CONFIGURE_LICENSE,
                }),
                !t)
            )
                throw e;
        }
    }
    async configureExceptions() {
        try {
            let e = await this.runCommand("tunnel", "host", "list");
            if (e?.mode === "exclude")
                for (let t of m) e?.hosts?.indexOf(t) === -1 && (await this.runCommand("tunnel", "host", "add", t));
        } catch {}
    }
    async configureMode() {
        try {
            await this.runCommand("mode", "warp+doh");
        } catch {}
    }
    get state() {
        return p;
    }
    get log() {
        return h;
    }
    get clientEnabled() {
        return (0, r.xl)() && (0, o.lM)("WarpClientStore");
    }
    get enabled() {
        return "Connected" === p.status || this.connecting;
    }
    get connecting() {
        return (
            "Configuring" === p.status ||
            "Connecting" === p.status ||
            "ConnectCommandSent" === p.status ||
            "Installing" === p.status ||
            "Installed" === p.status
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
            return (p = { status: "DisconnectCommandSent" }), await e;
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
let E = new g(a.h, {});
