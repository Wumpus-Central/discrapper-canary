e.d(E, { SH: () => s, cL: () => T, q1: () => h });
var i = e(73153),
    r = e(795816),
    a = e(627363),
    c = e(587895),
    p = e(395671),
    n = e(998218),
    _ = e(110782);
async function h(t, E) {
    i.h.dispatch({ applicationId: t, type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START" });
    try {
        if (!(await (0, r.Ir)(t))) throw Error("Do not have access!");
        let e = c.A.getApplication(t);
        null == e && (e = p.Ay.createFromServer(await a.Ay.fetchApplication(t)));
        let h = e.isEmbedded;
        if (h && (null == E || !n.A.URL_REGEX.test(E))) throw Error("Invalid Origin URL for embedded application");
        return (
            h || _.Cd(e),
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
                applicationId: t,
                originURL: h ? E : null,
            }),
            e
        );
    } catch (E) {
        return (
            i.h.dispatch({ type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL", applicationId: t, error: E.message }), null
        );
    }
}
function T() {
    i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function s() {
    i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
