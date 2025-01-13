n.d(t, {
    Wt: function () {
        return m;
    },
    mc: function () {
        return h;
    },
    q$: function () {
        return f;
    }
}),
    n(411104),
    n(789020);
var i = n(570140),
    r = n(566620),
    l = n(728345),
    a = n(812206),
    o = n(973616),
    s = n(630388),
    c = n(591759),
    d = n(978085),
    u = n(981631);
async function m(e, t) {
    i.Z.dispatch({
        applicationId: e,
        type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_START'
    });
    try {
        if (!(await (0, r.W5)(e))) throw Error('Do not have access!');
        let n = a.Z.getApplication(e);
        null == n && (n = o.ZP.createFromServer(await l.ZP.fetchApplication(e)));
        let m = (0, s.yE)(n.flags, u.udG.EMBEDDED);
        if (m && (null == t || !c.Z.URL_REGEX.test(t))) throw Error('Invalid Origin URL for embedded application');
        return (
            !m && d.GR(n),
            i.Z.dispatch({
                type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
                applicationId: e,
                originURL: m ? t : null
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
function f() {
    i.Z.dispatch({ type: 'DEVELOPER_TEST_MODE_RESET_ERROR' });
}
