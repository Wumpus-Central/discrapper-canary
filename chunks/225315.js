l.d(t, { Fy: () => E, Vv: () => h, Xx: () => r, i4: () => d, oZ: () => n, ry: () => i });
var a = l(636537),
    s = l(228366),
    c = l(652215);
let i = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        s.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    E = async (e) => {
        s.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await a.Bo.get({ url: c.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return s.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            s.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    n = () => {
        s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    h = () => {
        s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    r = (e) => {
        s.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    d = async (e, t) => {
        s.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let l = await a.Bo.patch({
                url: c.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            s.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: l.body });
        } catch (e) {
            s.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
