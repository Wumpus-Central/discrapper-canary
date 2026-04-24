n.d(t, { Fy: () => a, Vv: () => d, Xx: () => c, i4: () => u, oZ: () => o, ry: () => r });
var i = n(636537),
    l = n(228366),
    s = n(652215);
let r = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    a = async (e) => {
        l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: s.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    o = () => {
        l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    d = () => {
        l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    c = (e) => {
        l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    u = async (e, t) => {
        l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let n = await i.Bo.patch({
                url: s.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
        } catch (e) {
            l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
