"use strict";
n.d(t, { SH: () => m, cL: () => A, q1: () => E });
var i = n(73153),
    r = n(795816),
    l = n(627363),
    s = n(587895),
    a = n(20015),
    o = n(793943),
    c = n(611010),
    u = n(998218),
    d = n(110782),
    _ = n(652215);
async function E(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, r.Ir)(e))) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await l.Ay.fetchApplication(e)));
        let o = (0, a.n)(n, _.gfo.EMBEDDED);
        if (o && (null == t || !u.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            o || d.Cd(n),
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
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function m() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
