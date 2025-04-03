n.d(t, { l: () => g });
var r = n(544891),
    i = n(379649),
    o = n(846519),
    a = n(570140),
    s = n(706454),
    l = n(283595),
    c = n(129542),
    u = n(70956),
    d = n(981631);
let f = 10 * u.Z.Millis.MINUTE,
    _ = 10 * u.Z.Millis.MINUTE,
    p = +u.Z.Millis.MINUTE,
    h = {};
function m(e, t) {
    null == h[t] && (h[t] = new o.V7()),
        h[t].start(f + Math.random() * _, () => {
            null != l.Z.getLibraryApplication(e, t) && g(e, t);
        });
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = s.default.locale;
    return (
        a.Z.dispatch({
            type: 'APPLICATION_BUILD_FETCH_START',
            applicationId: e,
            branchId: t,
            locale: o
        }),
        n && (await (0, i._v)(Math.random() * p)),
        r.tn
            .get({
                url: d.ANM.APPLICATION_LIVE_BUILD(e, t),
                query: {
                    platform: (0, c.D)(),
                    locale: o
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (n) => {
                    let r = n.body;
                    if (0 === r.manifests.length)
                        return void a.Z.dispatch({
                            type: 'APPLICATION_BUILD_NOT_FOUND',
                            applicationId: e,
                            branchId: t
                        });
                    a.Z.dispatch({
                        type: 'APPLICATION_BUILD_FETCH_SUCCESS',
                        applicationId: e,
                        branchId: t,
                        locale: o,
                        build: r
                    });
                },
                (n) => {
                    let { status: r } = n;
                    404 === r
                        ? a.Z.dispatch({
                              type: 'APPLICATION_BUILD_NOT_FOUND',
                              applicationId: e,
                              branchId: t
                          })
                        : m(e, t);
                }
            )
    );
}
