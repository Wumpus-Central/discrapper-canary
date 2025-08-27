n.d(t, {
    $_: () => a,
    Eq: () => s,
    UE: () => o,
});
var r = n(626135),
    i = n(981631),
    a = (function (e) {
        return (e.MUTED = "muted"), (e.UNMUTED = "unmuted"), e;
    })({}),
    o = (function (e) {
        return (
            (e.MINI_GAME_PROFILE_BELL_ICON = "mini_game_profile_bell_icon"),
            (e.GAME_CONTEXT_MENU = "game_mentions_context_menu"),
            e
        );
    })({});
let s = (e) => {
    let { gameName: t, applicationId: n, label: a, source: o } = e;
    return r.default.track(i.rMx.GAME_MENTIONS_NOTIFICATION_SETTING_UPDATED, {
        game_name: t,
        application_id: n,
        label: a,
        source: o,
    });
};
