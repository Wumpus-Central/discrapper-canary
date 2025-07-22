(t.d(e, {
    Es: () => v,
    RM: () => s,
    VP: () => g,
    Xb: () => a,
    sm: () => o,
    y0: () => i
}),
    t(953529));
var n = t(544891),
    r = t(570140),
    l = t(981631);
let i = function (A) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.Z.dispatch({
            type: 'WELCOME_SCREEN_VIEW',
            guildId: A,
            isLurking: e
        });
    },
    s = async (A) => {
        r.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_START' });
        try {
            let e = await n.tn.get({
                url: l.ANM.GUILD_WELCOME_SCREEN(A),
                oldFormErrors: !0,
                rejectWithError: !0
            });
            return (
                r.Z.dispatch({
                    type: 'WELCOME_SCREEN_FETCH_SUCCESS',
                    guildId: A,
                    welcomeScreen: e.body
                }),
                e.body
            );
        } catch (A) {
            r.Z.dispatch({ type: 'WELCOME_SCREEN_FETCH_FAIL' });
        }
    },
    a = () => {
        r.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_RESET' });
    },
    o = () => {
        r.Z.dispatch({ type: 'WELCOME_SCREEN_SETTINGS_CLEAR' });
    },
    g = (A) => {
        r.Z.dispatch({
            type: 'WELCOME_SCREEN_SETTINGS_UPDATE',
            settings: A
        });
    },
    v = async (A, e) => {
        r.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT' });
        try {
            let t = await n.tn.patch({
                url: l.ANM.GUILD_WELCOME_SCREEN(A),
                body: {
                    description: e.description,
                    welcome_channels: e.channels,
                    enabled: e.enabled
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
            r.Z.dispatch({
                type: 'WELCOME_SCREEN_SUBMIT_SUCCESS',
                guildId: A,
                welcomeScreen: t.body
            });
        } catch (A) {
            r.Z.dispatch({ type: 'WELCOME_SCREEN_SUBMIT_FAILURE' });
        }
    };
