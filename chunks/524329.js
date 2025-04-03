n.d(t, {
    Es: () => u,
    RM: () => i,
    VP: () => c,
    Xb: () => o,
    sm: () => E,
    y0: () => s
}),
    n(266796);
var r = n(544891),
    l = n(570140),
    a = n(981631);
let s = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.Z.dispatch({
            type: 'WELCOME_SCREEN_VIEW',
            guildId: e,
            isLurking: t
        });
    },
    i = async (e) => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_START' });
        try {
            let t = await r.tn.get({
                url: a.ANM.GUILD_WELCOME_SCREEN(e),
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
    c = (e) => {
        l.Z.dispatch({
            type: 'WELCOME_SCREEN_SETTINGS_UPDATE',
            settings: e
        });
    },
    u = async (e, t) => {
        l.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT' });
        try {
            let n = await r.tn.patch({
                url: a.ANM.GUILD_WELCOME_SCREEN(e),
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
