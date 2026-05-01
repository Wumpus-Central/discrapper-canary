l.d(t, { SH: () => T, cL: () => _, q1: () => h });
var n = l(228366),
    i = l(795816),
    r = l(627363),
    s = l(587895),
    a = l(20015),
    u = l(793943),
    o = l(395671),
    c = l(998218),
    d = l(110782),
    E = l(652215);
async function h(e, t) {
    n.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, i.Ir)(e))) throw Error("Do not have access!");
        let l = s.A.getApplication(e);
        null == l && (l = o.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let u = (0, a.n)(l, E.gfo.EMBEDDED);
        if (u && (null == t || !c.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            u || d.Cd(l),
            n.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: u ? t : null,
            }),
            l
        );
    } catch (t) {
        return (
            n.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: t.message }), null
        );
    }
}
function _() {
    u.fy.getState().activePanel === u.HP.APPLICATION_TEST_MODE_DEBUG && (0, u.Jp)(),
        n.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function T() {
    u.fy.getState().activePanel === u.HP.APPLICATION_TEST_MODE_DEBUG && (0, u.Jp)(),
        n.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
