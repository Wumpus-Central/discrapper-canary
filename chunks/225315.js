var i = n(620632),
    r = n(73153),
    l = n(652215);
n.d(
    t,
    {},
    {
        Fy: async function (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
            try {
                let t = await i.Bo.get({ url: l.Rsh.GUILD_WELCOME_SCREEN(e), oldFormErrors: !0, rejectWithError: !0 });
                return (
                    r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: e, welcomeScreen: t.body }), t.body
                );
            } catch (e) {
                r.h.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
            }
        },
        Vv: function () {
            r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
        },
        Xx: function (e) {
            r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings: e });
        },
        i4: async function (e, t) {
            r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
            try {
                let n = await i.Bo.patch({
                    url: l.Rsh.GUILD_WELCOME_SCREEN(e),
                    body: { description: t.description, welcome_channels: t.channels, enabled: t.enabled },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: e, welcomeScreen: n.body });
            } catch (e) {
                r.h.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
            }
        },
        oZ: function () {
            r.h.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
        },
        ry: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.h.dispatch({ type: "WELCOME_SCREEN_VIEW", guildId: e, isLurking: t });
        },
    },
);
