"use strict";
n.d(t, { Fy: () => o, Vv: () => u, Xx: () => c, i4: () => d, oZ: () => l, ry: () => a });
var i = n(636537),
    r = n(228366),
    s = n(652215);
let a = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    o = async (e) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: s.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    l = () => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    u = () => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    c = (e) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    d = async (e, t) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let n = await i.Bo.patch({
                url: s.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
        } catch (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
