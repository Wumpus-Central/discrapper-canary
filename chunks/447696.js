n.d(t, { Fy: () => s, Vv: () => E, Xx: () => u, i4: () => c, oZ: () => o, ry: () => i });
var l = n(562465),
    r = n(73153),
    a = n(652215);
let i = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    s = async (e) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await l.Bo.get({ url: a.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    o = () => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    E = () => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    u = (e) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    c = async (e, t) => {
        r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let n = await l.Bo.patch({
                url: a.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
        } catch (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
