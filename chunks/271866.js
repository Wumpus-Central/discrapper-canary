l.d(a, { SH: () => p, cL: () => u, q1: () => E });
var i = l(73153),
    t = l(795816),
    n = l(627363),
    r = l(587895),
    c = l(793943),
    s = l(395671),
    o = l(998218),
    d = l(110782);
async function E(e, a) {
    i.h.dispatch({ applicationId: e, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, t.Ir)(e))) throw Error("Do not have access!");
        let l = r.A.getApplication(e);
        null == l && (l = s.Ay.createFromServer(await n.Ay.fetchApplication(e)));
        let c = l.isEmbedded;
        if (c && (null == a || !o.A.URL_REGEX.test(a))) throw Error("Invalid Origin URL for embedded application");
        return (
            c || d.Cd(l),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: e,
                originURL: c ? a : null,
            }),
            l
        );
    } catch (a) {
        return (
            i.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: e, error: a.message }), null
        );
    }
}
function u() {
    (c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" }));
}
function p() {
    (c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" }));
}
