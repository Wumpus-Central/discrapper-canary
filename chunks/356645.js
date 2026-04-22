"use strict";
n.d(t, { n: () => p });
var r = n(562465),
    i = n(499979),
    s = n(451988),
    a = n(73153),
    o = n(773669),
    l = n(189081),
    u = n(645243),
    d = n(927813),
    c = n(652215);
let _ = 10 * d.A.Millis.MINUTE,
    f = 10 * d.A.Millis.MINUTE,
    E = +d.A.Millis.MINUTE,
    h = {};
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = o.default.locale;
    return (
        a.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: e, branchId: t, locale: d }),
        n && (await (0, i.yy)(Math.random() * E)),
        r.Bo.get({
            url: c.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, u.O)(), locale: d },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (n) => {
                let r = n.body;
                0 === r.manifests.length
                    ? a.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t })
                    : a.h.dispatch({
                          type: "APPLICATION_BUILD_FETCH_SUCCESS",
                          applicationId: e,
                          branchId: t,
                          locale: d,
                          build: r,
                      });
            },
            (n) => {
                let { status: r } = n;
                if (404 === r) a.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
                else
                    null == h[t] && (h[t] = new s.Ep()),
                        h[t].start(_ + Math.random() * f, () => {
                            null != l.A.getLibraryApplication(e, t) && p(e, t);
                        });
            },
        )
    );
}
