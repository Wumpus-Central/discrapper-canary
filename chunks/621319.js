n.d(t, {
    Gy: () => o,
    H7: () => l,
    en: () => c,
    xv: () => a
});
var r = n(544891),
    i = n(570140),
    s = n(981631);
function a() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_VANITY_URL_CLOSE' });
}
function l() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_VANITY_URL_RESET' });
}
function o(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_VANITY_URL_SET',
        code: e
    });
}
function c(e, t) {
    return r.tn
        .patch({
            url: s.ANM.GUILD_VANITY_URL(e),
            body: { code: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then(
            (e) => {
                let {
                    body: { code: t, uses: n }
                } = e;
                i.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_VANITY_URL',
                    code: t,
                    uses: n
                });
            },
            (e) => (
                i.Z.dispatch({
                    type: 'GUILD_SETTINGS_VANITY_URL_ERROR',
                    error: e.body
                }),
                e
            )
        );
}
