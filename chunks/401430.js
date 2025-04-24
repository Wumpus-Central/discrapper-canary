n.d(t, {
    Wt: () => d,
    mc: () => _,
    q$: () => I
}),
    n(415506),
    n(997841),
    n(35282);
var r = n(570140),
    i = n(566620),
    l = n(728345),
    o = n(812206),
    a = n(973616),
    s = n(630388),
    c = n(591759),
    u = n(978085),
    E = n(981631);
async function d(e, t) {
    r.Z.dispatch({
        applicationId: e,
        type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
    });
    try {
        if (!(await (0, i.W5)(e))) throw Error('Do not have access!');
        let n = o.Z.getApplication(e);
        null == n && (n = a.ZP.createFromServer(await l.ZP.fetchApplication(e)));
        let d = (0, s.yE)(n.flags, E.udG.EMBEDDED);
        if (d && (null == t || !c.Z.URL_REGEX.test(t))) throw Error('Invalid Origin URL for embedded application');
        return (
            d || u.GR(n),
            r.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
                applicationId: e,
                originURL: d ? t : null
            }),
            n
        );
    } catch (t) {
        return (
            r.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL',
                applicationId: e,
                error: t.message
            }),
            null
        );
    }
}
function _() {
    r.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET' });
}
function I() {
    r.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET_ERROR' });
}
