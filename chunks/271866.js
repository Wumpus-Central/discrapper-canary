n.d(t, { SH: () => I, cL: () => A, q1: () => _ });
var i = n(228366),
    l = n(795816),
    r = n(627363),
    a = n(587895),
    o = n(20015),
    s = n(793943),
    u = n(395671),
    d = n(998218),
    c = n(110782),
    E = n(652215);
async function _(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, l.Ir)(e))) throw Error("Do not have access!");
        let n = a.A.getApplication(e);
        null == n && (n = u.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let s = (0, o.n)(n, E.gfo.EMBEDDED);
        if (s && (null == t || !d.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            s || c.Cd(n),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: s ? t : null,
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
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function I() {
    s.fy.getState().activePanel === s.HP.APPLICATION_TEST_MODE_DEBUG && (0, s.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
