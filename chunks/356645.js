"use strict";
n.d(t, { n: () => E });
var i = n(636537),
    r = n(499979),
    s = n(451988),
    a = n(228366),
    o = n(773669),
    l = n(189081),
    u = n(645243),
    c = n(927813),
    d = n(652215);
let _ = 10 * c.A.Millis.MINUTE,
    f = 10 * c.A.Millis.MINUTE,
    h = +c.A.Millis.MINUTE,
    p = {};
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = o.default.locale;
    return (
        a.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: e, branchId: t, locale: c }),
        n && (await (0, r.yy)(Math.random() * h)),
        i.Bo.get({
            url: d.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, u.O)(), locale: c },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (n) => {
                let i = n.body;
                0 === i.manifests.length
                    ? a.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t })
                    : a.h.dispatch({
                          type: "APPLICATION_BUILD_FETCH_SUCCESS",
                          applicationId: e,
                          branchId: t,
                          locale: c,
                          build: i,
                      });
            },
            (n) => {
                let { status: i } = n;
                if (404 === i) a.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
                else
                    null == p[t] && (p[t] = new s.Ep()),
                        p[t].start(_ + Math.random() * f, () => {
                            null != l.A.getLibraryApplication(e, t) && E(e, t);
                        });
            },
        )
    );
}
