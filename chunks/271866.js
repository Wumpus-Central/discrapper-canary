n.d(t, { SH: () => A, cL: () => u, q1: () => _ });
var i = n(73153),
    l = n(795816),
    r = n(627363),
    s = n(587895),
    a = n(793943),
    E = n(395671),
    o = n(998218),
    c = n(110782);
async function _(e, t) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, l.Ir)(e))) throw Error("Do not have access!");
        let n = s.A.getApplication(e);
        null == n && (n = E.Ay.createFromServer(await r.Ay.fetchApplication(e)));
        let a = n.isEmbedded;
        if (a && (null == t || !o.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
        return (
            a || c.Cd(n),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: a ? t : null,
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
    (a.fy.getState().activePanel === a.HP.APPLICATION_TEST_MODE_DEBUG && (0, a.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" }));
}
function A() {
    (a.fy.getState().activePanel === a.HP.APPLICATION_TEST_MODE_DEBUG && (0, a.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" }));
}
