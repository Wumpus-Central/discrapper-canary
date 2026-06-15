l.d(t, { Fy: () => s, Vv: () => d, Xx: () => h, i4: () => c, oZ: () => E, ry: () => r });
var i = l(636537),
    n = l(228366),
    a = l(652215);
let r = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    s = async (e) => {
        n.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: a.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return n.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            n.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    E = () => {
        n.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    d = () => {
        n.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    h = (e) => {
        n.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    c = async (e, t) => {
        n.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let l = await i.Bo.patch({
                url: a.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            n.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: l.body });
        } catch (e) {
            n.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
