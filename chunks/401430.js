n.d(t, {
    Wt: () => _,
    mc: () => p,
    q$: () => h,
}),
    n(415506),
    n(997841),
    n(35282);
var r = n(95015),
    i = n(570140),
    a = n(566620),
    o = n(728345),
    s = n(812206),
    l = n(550385),
    c = n(973616),
    u = n(591759),
    d = n(978085),
    f = n(981631);
async function _(e, t) {
    i.Z.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START",
    });
    try {
        if (!(await (0, a.W5)(e))) throw Error("Do not have access!");
        let n = s.Z.getApplication(e);
        null == n && (n = c.ZP.createFromServer(await o.ZP.fetchApplication(e)));
        let l = (0, r.yE)(n.flags, f.udG.EMBEDDED);
        if (l && (null == t || !u.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            l || d.GR(n),
            i.Z.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: l ? t : null,
            }),
            n
        );
    } catch (t) {
        return (
            i.Z.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
                applicationId: e,
                error: t.message,
            }),
            null
        );
    }
}
function p() {
    l.oq.getState().activePanel === l.wh.APPLICATION_TEST_MODE_DEBUG && (0, l.Ll)(),
        i.Z.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function h() {
    l.oq.getState().activePanel === l.wh.APPLICATION_TEST_MODE_DEBUG && (0, l.Ll)(),
        i.Z.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
