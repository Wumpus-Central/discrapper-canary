n.d(t, {
    Wt: () => d,
    mc: () => _,
    q$: () => I
}),
    n(411104),
    n(789020);
var i = n(570140),
    l = n(566620),
    r = n(728345),
    a = n(812206),
    s = n(973616),
    o = n(630388),
    c = n(591759),
    u = n(978085),
    E = n(981631);
async function d(e, t) {
    i.Z.dispatch({
        applicationId: e,
        type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
    });
    try {
        if (!(await (0, l.W5)(e))) throw Error('Do not have access!');
        let n = a.Z.getApplication(e);
        null == n && (n = s.ZP.createFromServer(await r.ZP.fetchApplication(e)));
        let d = (0, o.yE)(n.flags, E.udG.EMBEDDED);
        if (d && (null == t || !c.Z.URL_REGEX.test(t))) throw Error('Invalid Origin URL for embedded application');
        return (
            d || u.GR(n),
            i.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
                applicationId: e,
                originURL: d ? t : null
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
function _() {
    i.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET' });
}
function I() {
    i.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET_ERROR' });
}
