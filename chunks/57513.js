n.d(t, { l: () => g });
var i = n(544891),
    r = n(379649),
    a = n(846519),
    s = n(570140),
    o = n(706454),
    l = n(283595),
    u = n(129542),
    c = n(70956),
    d = n(981631);
let f = 10 * c.Z.Millis.MINUTE,
    _ = 10 * c.Z.Millis.MINUTE,
    p = 1 * c.Z.Millis.MINUTE,
    h = {};
function m(e, t) {
    null == h[t] && (h[t] = new a.V7()),
        h[t].start(f + Math.random() * _, () => {
            null != l.Z.getLibraryApplication(e, t) && g(e, t);
        });
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = o.default.locale;
    return (
        s.Z.dispatch({
            type: 'APPLICATION_BUILD_FETCH_START',
            applicationId: e,
            branchId: t,
            locale: a
        }),
        n && (await (0, r._v)(Math.random() * p)),
        i.tn
            .get({
                url: d.ANM.APPLICATION_LIVE_BUILD(e, t),
                query: {
                    platform: (0, u.D)(),
                    locale: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    let i = n.body;
                    if (0 === i.manifests.length) {
                        s.Z.dispatch({
                            type: 'APPLICATION_BUILD_NOT_FOUND',
                            applicationId: e,
                            branchId: t
                        });
                        return;
                    }
                    s.Z.dispatch({
                        type: 'APPLICATION_BUILD_FETCH_SUCCESS',
                        applicationId: e,
                        branchId: t,
                        locale: a,
                        build: i
                    });
                },
                (n) => {
                    let { status: i } = n;
                    404 === i
                        ? s.Z.dispatch({
                              type: 'APPLICATION_BUILD_NOT_FOUND',
                              applicationId: e,
                              branchId: t
                          })
                        : m(e, t);
                }
            )
    );
}
