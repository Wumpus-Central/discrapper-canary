n.d(t, {
    Gy: () => o,
    H7: () => a,
    en: () => c,
    xv: () => s
});
var i = n(544891),
    r = n(570140),
    l = n(981631);
function s() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_VANITY_URL_CLOSE' });
}
function a() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_VANITY_URL_RESET' });
}
function o(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_VANITY_URL_SET',
        code: e
    });
}
function c(e, t) {
    return i.tn
        .patch({
            url: l.ANM.GUILD_VANITY_URL(e),
            body: { code: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let {
                    body: { code: t, uses: n }
                } = e;
                r.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_VANITY_URL',
                    code: t,
                    uses: n
                });
            },
            (e) => (
                r.Z.dispatch({
                    type: 'GUILD_SETTINGS_VANITY_URL_ERROR',
                    error: e.body
                }),
                e
            )
        );
}
