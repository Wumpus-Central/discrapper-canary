n.d(t, {
    Q: () => s,
    X: () => o,
});
var r = n(544891),
    i = n(570140),
    a = n(981631);
function o(e, t) {
    r.tn
        .patch({
            url: a.ANM.GAME_NOTIFICATION_SETTING_UPDATE(e),
            body: { muted: t },
            rejectWithError: !0,
        })
        .then((e) => {
            let { body: t } = e;
            i.Z.dispatch({
                type: "REPLACE_GAME_MENTION_SETTINGS",
                settings: t,
            });
        });
}
async function s() {
    await r.tn
        .get({
            url: a.ANM.GAME_NOTIFICATION_SETTINGS,
            rejectWithError: !0,
        })
        .then((e) => {
            let { body: t } = e;
            i.Z.dispatch({
                type: "REPLACE_GAME_MENTION_SETTINGS",
                settings: t,
            });
        });
}
