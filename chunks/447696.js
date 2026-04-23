n.d(t, { Fy: () => a, Vv: () => c, Xx: () => o, i4: () => s, oZ: () => u, ry: () => E });
var l = n(636537),
    i = n(228366),
    r = n(652215);
let E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        i.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
    },
    a = async (e) => {
        i.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
        try {
            let t = await l.Bo.get({ url: r.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
            return i.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body;
        } catch (e) {
            i.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
        }
    },
    u = () => {
        i.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
    },
    c = () => {
        i.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
    },
    o = (e) => {
        i.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
    },
    s = async (e, t) => {
        i.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
        try {
            let n = await l.Bo.patch({
                url: r.Rsh.GUILD_WELCOME_SCREEN(e),
                body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            i.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
        } catch (e) {
            i.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        }
    };
