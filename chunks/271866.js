"use strict";
n.d(t, { SH: () => p, cL: () => h, q1: () => f });
var i = n(228366),
    r = n(795816),
    s = n(627363),
    a = n(587895),
    o = n(20015),
    l = n(793943),
    u = n(395671),
    c = n(998218),
    d = n(110782),
    _ = n(652215);
async function f(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, r.Ir)(e))) throw Error("Do not have access!");
        let n = a.A.getApplication(e);
        null == n && (n = u.Ay.createFromServer(await s.Ay.fetchApplication(e)));
        let l = (0, o.n)(n, _.gfo.EMBEDDED);
        if (l && (null == t || !c.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            l || d.Cd(n),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: l ? t : null,
            }),
            n
        );
    } catch (t) {
        return (
            i.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: t.message }), null
        );
    }
}
function h() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function p() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
