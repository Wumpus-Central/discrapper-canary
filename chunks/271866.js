"use strict";
n.d(t, { SH: () => T, cL: () => u, q1: () => A });
var i = n(73153),
    r = n(795816),
    l = n(627363),
    s = n(587895),
    a = n(20015),
    o = n(793943),
    E = n(611010),
    c = n(998218),
    _ = n(110782),
    d = n(652215);
async function A(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, r.Ir)(e))) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = E.Ay.createFromServer(await l.Ay.fetchApplication(e)));
        let o = (0, a.n)(n, d.gfo.EMBEDDED);
        if (o && (null == t || !c.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            o || _.Cd(n),
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
function u() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function T() {
    o.fy.getState().activePanel === o.HP.APPLICATION_TEST_MODE_DEBUG && (0, o.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
