n.d(t, {
    n: () => g,
});
var r = n(562465),
    i = n(499979),
    a = n(451988),
    s = n(73153),
    o = n(773669),
    l = n(189081),
    c = n(645243),
    u = n(927813),
    d = n(652215);
let f = 10 * u.A.Millis.MINUTE,
    p = 10 * u.A.Millis.MINUTE,
    _ = +u.A.Millis.MINUTE,
    h = {};

function m(e, t) {
    null == h[t] && (h[t] = new a.Ep()),
        h[t].start(f + Math.random() * p, () => {
            null != l.A.getLibraryApplication(e, t) && g(e, t);
        });
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = o.default.locale;
    return (
        s.h.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: a,
        }),
        n && (await (0, i.yy)(Math.random() * _)),
        r.Bo.get({
            url: d.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: {
                platform: (0, c.O)(),
                locale: a,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (n) => {
                let r = n.body;
                0 === r.manifests.length
                    ? s.h.dispatch({
                          type: "APPLICATION_BUILD_NOT_FOUND",
                          applicationId: e,
                          branchId: t,
                      })
                    : s.h.dispatch({
                          type: "APPLICATION_BUILD_FETCH_SUCCESS",
                          applicationId: e,
                          branchId: t,
                          locale: a,
                          build: r,
                      });
            },
            (n) => {
                let { status: r } = n;
                404 === r
                    ? s.h.dispatch({
                          type: "APPLICATION_BUILD_NOT_FOUND",
                          applicationId: e,
                          branchId: t,
                      })
                    : m(e, t);
            },
        )
    );
}
