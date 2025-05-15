n.d(t, {
    Gy: () => l,
    H7: () => s,
    U5: () => o,
    en: () => c
});
var r = n(544891),
    i = n(570140),
    a = n(981631);
function o(e) {
    return r.tn
        .get({
            url: a.ANM.GUILD_VANITY_URL(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => {
            let {
                body: { code: t, uses: n, error: r }
            } = e;
            i.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_VANITY_URL',
                code: t,
                uses: n,
                error: r
            });
        });
}
function s() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_VANITY_URL_RESET' });
}
function l(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_VANITY_URL_SET',
        code: e
    });
}
function c(e, t, n) {
    return r.tn
        .patch({
            url: a.ANM.GUILD_VANITY_URL(e),
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
            (e) => {
                if (
                    (i.Z.dispatch({
                        type: 'GUILD_SETTINGS_VANITY_URL_ERROR',
                        error: e.body
                    }),
                    null == n ? void 0 : n.throwErr)
                )
                    throw e;
                return e;
            }
        );
}
