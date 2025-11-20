n.d(t, {
    Wt: () => f,
    mc: () => _,
    q$: () => p,
}),
    n(415506),
    n(997841),
    n(35282);
var r = n(95015),
    i = n(570140),
    a = n(566620),
    o = n(728345),
    s = n(812206),
    l = n(973616),
    c = n(591759),
    u = n(978085),
    d = n(981631);
async function f(e, t) {
    i.Z.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START",
    });
    try {
        if (!(await (0, a.W5)(e))) throw Error("Do not have access!");
        let n = s.Z.getApplication(e);
        null == n && (n = l.ZP.createFromServer(await o.ZP.fetchApplication(e)));
        let f = (0, r.yE)(n.flags, d.udG.EMBEDDED);
        if (f && (null == t || !c.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            f || u.GR(n),
            i.Z.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: f ? t : null,
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
function _() {
    i.Z.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function p() {
    i.Z.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
