n.d(t, {
    SH: () => h,
    cL: () => _,
    q1: () => p,
}),
    n(65821),
    n(938796),
    n(747238);
var r = n(665260),
    i = n(73153),
    a = n(795816),
    s = n(627363),
    o = n(587895),
    l = n(793943),
    c = n(611010),
    u = n(998218),
    d = n(110782),
    f = n(652215);
async function p(e, t) {
    i.h.dispatch({
        applicationId: e,
        type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START",
    });
    try {
        if (!(await (0, a.Ir)(e))) throw Error("Do not have access!");
        let n = o.A.getApplication(e);
        null == n && (n = c.Ay.createFromServer(await s.Ay.fetchApplication(e)));
        let l = (0, r.Lt)(n.flags, f.gfo.EMBEDDED);
        if (l && (null == t || !u.A.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
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
            i.h.dispatch({
                type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
                applicationId: e,
                error: t.message,
            }),
            null
        );
    }
}
function _() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET" });
}
function h() {
    l.fy.getState().activePanel === l.HP.APPLICATION_TEST_MODE_DEBUG && (0, l.Jp)(),
        i.h.dispatch({ type: "DEVELOPER_TEST_MODE_RESET_ERROR" });
}
