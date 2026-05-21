n.d(t, { SH: () => T, cL: () => _, q1: () => A });
var i = n(228366),
    l = n(795816),
    r = n(627363),
    s = n(587895),
    a = n(20015),
    c = n(793943),
    o = n(395671),
    d = n(998218),
    u = n(110782),
    E = n(652215);
async function A(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, l.Ir)(e))) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = o.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let c = (0, a.n)(n, E.gfo.EMBEDDED);
        if (c && (null == t || !d.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            c || u.Cd(n),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: c ? t : null,
            }),
            n
        );
    } catch (t) {
        return (
            i.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: t.message }), null
        );
    }
}
function _() {
    c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function T() {
    c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
