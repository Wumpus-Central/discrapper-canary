(n.d(t, {
    Wt: () => _,
    mc: () => h,
    q$: () => E
}),
    n(415506),
    n(997841),
    n(35282));
var i = n(570140),
    r = n(566620),
    l = n(728345),
    o = n(812206),
    s = n(973616),
    a = n(630388),
    c = n(591759),
    u = n(978085),
    d = n(981631);
async function _(e, t) {
    i.Z.dispatch({
        applicationId: e,
        type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
    });
    try {
        if (!(await (0, r.W5)(e))) throw Error('Do not have access!');
        let n = o.Z.getApplication(e);
        null == n && (n = s.ZP.createFromServer(await l.ZP.fetchApplication(e)));
        let _ = (0, a.yE)(n.flags, d.udG.EMBEDDED);
        if (_ && (null == t || !c.Z.URL_REGEX.test(t))) throw Error('Invalid Origin URL for embedded application');
        return (
            _ || u.GR(n),
            i.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
                applicationId: e,
                originURL: _ ? t : null
            }),
            n
        );
    } catch (t) {
        return (
            i.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL',
                applicationId: e,
                error: t.message
            }),
            null
        );
    }
}
function h() {
    i.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET' });
}
function E() {
    i.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET_ERROR' });
}
