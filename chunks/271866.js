n.d(t, { SH: () => T, cL: () => A, q1: () => _ });
var i = n(228366),
    l = n(795816),
    r = n(627363),
    s = n(587895),
    a = n(20015),
    o = n(793943),
    c = n(395671),
    E = n(998218),
    u = n(110782),
    d = n(652215);
async function _(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, l.Ir)(e))) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let o = (0, a.n)(n, d.gfo.EMBEDDED);
        if (o && (null == t || !E.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            o || u.Cd(n),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: o ? t : null,
            }),
            n
        );
    } catch (t) {
        return (
            i.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: t.message }), null
        );
    }
}
function A() {
    (o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" }));
}
function T() {
    (o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" }));
}
