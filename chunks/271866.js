e.d(E, { SH: () => s, cL: () => h, q1: () => O });
var a = e(73153),
    i = e(795816),
    r = e(627363),
    _ = e(587895),
    c = e(793943),
    T = e(395671),
    p = e(998218),
    n = e(110782);
async function O(t, E) {
    a.h.dispatch({ applicationId: t, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, i.Ir)(t))) throw Error("Do not have access!");
        let e = _.A.getApplication(t);
        null == e && (e = T.Ay.createFromServer(await r.Ay.fetchApplication(t)));
        let c = e.isEmbedded;
        if (c && (null == E || !p.A.URL_REGEX.test(E))) throw Error("Invalid Origin URL for embedded application");
        return (
            c || n.Cd(e),
            a.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: t,
                originURL: c ? E : null,
            }),
            e
        );
    } catch (E) {
        return (
            a.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: t, error: E.message }), null
        );
    }
}
function h() {
    (c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        a.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" }));
}
function s() {
    (c.fy.getState().activePanel === c.HP.APPLICATION_TEST_MODE_DEBUG && (0, c.Jp)(),
        a.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" }));
}
