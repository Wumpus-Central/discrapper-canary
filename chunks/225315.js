var i = n(620632),
    l = n(73153),
    a = n(652215);
n.d(
    t,
    {},
    {
        Fy: async function (e) {
            l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
            try {
                let t = await i.Bo.get({ url: a.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
                return (
                    l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body
                );
            } catch (e) {
                l.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
            }
        },
        Vv: function () {
            l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
        },
        Xx: function (e) {
            l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
        },
        i4: async function (e, t) {
            l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
            try {
                let n = await i.Bo.patch({
                    url: a.Rsh.GUILD_WELCOME_SCREEN(e),
                    body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
            } catch (e) {
                l.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
            }
        },
        oZ: function () {
            l.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
        },
        ry: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            l.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
        },
    },
);
