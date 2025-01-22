r.d(n, {
    l: function () {
        return E;
    }
});
var i = r(544891),
    a = r(379649),
    o = r(846519),
    s = r(570140),
    l = r(706454),
    u = r(283595),
    c = r(129542),
    d = r(70956),
    f = r(981631);
let p = 10 * d.Z.Millis.MINUTE,
    h = 10 * d.Z.Millis.MINUTE,
    _ = 1 * d.Z.Millis.MINUTE,
    m = {};
function g(e, n) {
    null == m[n] && (m[n] = new o.V7()),
        m[n].start(p + Math.random() * h, () => {
            null != u.Z.getLibraryApplication(e, n) && E(e, n);
        });
}
async function E(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = l.default.locale;
    return (
        s.Z.dispatch({
            type: 'APPLICATION_BUILD_FETCH_START',
            applicationId: e,
            branchId: n,
            locale: o
        }),
        r && (await (0, a._v)(Math.random() * _)),
        i.tn
            .get({
                url: f.ANM.APPLICATION_LIVE_BUILD(e, n),
                query: {
                    platform: (0, c.D)(),
                    locale: o
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (r) => {
                    let i = r.body;
                    if (0 === i.manifests.length) {
                        s.Z.dispatch({
                            type: 'APPLICATION_BUILD_NOT_FOUND',
                            applicationId: e,
                            branchId: n
                        });
                        return;
                    }
                    s.Z.dispatch({
                        type: 'APPLICATION_BUILD_FETCH_SUCCESS',
                        applicationId: e,
                        branchId: n,
                        locale: o,
                        build: i
                    });
                },
                (r) => {
                    let { status: i } = r;
                    404 === i
                        ? s.Z.dispatch({
                              type: 'APPLICATION_BUILD_NOT_FOUND',
                              applicationId: e,
                              branchId: n
                          })
                        : g(e, n);
                }
            )
    );
}
