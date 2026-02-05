"use strict";
n.d(t, { VD: () => a, eh: () => s, i1: () => o });
var r = n(954571),
    i = n(652215),
    a = (function (e) {
        return (e.MUTED = "muted"), (e.UNMUTED = "unmuted"), e;
    })({}),
    s = (function (e) {
        return (
            (e.MINI_GAME_PROFILE_BELL_ICON = "mini_game_profile_bell_icon"),
            (e.GAME_CONTEXT_MENU = "game_mentions_context_menu"),
            e
        );
    })({});
let o = (e) => {
    let { gameName: t, applicationId: n, label: a, source: s } = e;
    return r.default.track(i.HAw.GAME_MENTIONS_NOTIFICATION_SETTING_UPDATED, {
        game_name: t,
        application_id: n,
        label: a,
        source: s,
    });
};
