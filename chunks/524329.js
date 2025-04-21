n.d(t, {
    Es: () => c,
    RM: () => a,
    VP: () => u,
    Xb: () => o,
    sm: () => E,
    y0: () => i
}),
    n(953529);
var r = n(544891),
    l = n(570140),
    s = n(981631);
let i = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.Z.dispatch({
            type: 'WELCOME_SCREEN_VIEW',
            guildId: e,
            isLurking: t
        });
    },
    a = async (e) => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_START' });
        try {
            let t = await r.tn.get({
                url: s.ANM.GUILD_WELCOME_SCREEN(e),
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return (
                l.Z.dispatch({
                    type: 'WELCOME_SCREEN_FETCH_SUCCESS',
                    guildId: e,
                    welcomeScreen: t.body
                }),
                t.body
            );
        } catch (e) {
            l.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_FAIL' });
        }
    },
    o = () => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_RESET' });
    },
    E = () => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_CLEAR' });
    },
    u = (e) => {
        l.Z.dispatch({
            type: 'WELCOME_SCREEN_SETTINGS_UPDATE',
            settings: e
        });
    },
    c = async (e, t) => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT' });
        try {
            let n = await r.tn.patch({
                url: s.ANM.GUILD_WELCOME_SCREEN(e),
                body: {
                    description: t.description,
                    welcome_channels: t.channels,
                    enabled: t.enabled
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'WELCOME_SCREEN_SUBMIT_SUCCESS',
                guildId: e,
                welcomeScreen: n.body
            });
        } catch (e) {
            l.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT_FAILURE' });
        }
    };
