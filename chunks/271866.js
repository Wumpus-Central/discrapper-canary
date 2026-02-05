n.d(t, { SH: () => T, cL: () => u, q1: () => A }), n(938796);
var i = n(665260),
    l = n(73153),
    r = n(795816),
    s = n(627363),
    a = n(587895),
    o = n(793943),
    E = n(611010),
    c = n(998218),
    _ = n(110782),
    d = n(652215);
async function A(e, t) {
    l.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, r.Ir)(e))) throw Error("Do not have access!");
        let n = a.A.getApplication(e);
        null == n && (n = E.Ay.createFromServer(await s.Ay.fetchApplication(e)));
        let o = (0, i.Lt)(n.flags, d.gfo.EMBEDDED);
        if (o && (null == t || !c.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            o || _.Cd(n),
            l.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: o ? t : null,
            }),
            n
        );
    } catch (t) {
        return (
            l.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: t.message }), null
        );
    }
}
function u() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        l.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function T() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        l.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
