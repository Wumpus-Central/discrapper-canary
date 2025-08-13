n.d(t, {
    Q: () => s,
    X: () => a,
});
var r = n(544891),
    i = n(570140),
    o = n(981631);
function a(e, t) {
    r.tn
        .patch({
            url: o.ANM.GAME_NOTIFICATION_SETTING_UPDATE(e),
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
            url: o.ANM.GAME_NOTIFICATION_SETTINGS,
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
