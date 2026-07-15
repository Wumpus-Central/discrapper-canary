"use strict";
n.d(t, { n: () => I });
var i = n(636537),
    r = n(499979),
    a = n(451988),
    s = n(228366),
    l = n(773669),
    o = n(189081),
    d = n(645243),
    c = n(927813),
    u = n(652215);
let _ = 10 * c.A.Millis.MINUTE,
    E = 10 * c.A.Millis.MINUTE,
    A = +c.A.Millis.MINUTE,
    h = {};
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = l.default.locale;
    return (
        s.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: e, branchId: t, locale: c }),
        n && (await (0, r.yy)(Math.random() * A)),
        i.Bo.get({
            url: u.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, d.O)(), locale: c },
            oldFormErrors: !0,
            rejectWithError: (0, i.fT)(),
        }).then(
            (n) => {
                let i = n.body;
                0 === i.manifests.length
                    ? s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t })
                    : s.h.dispatch({
                          type: "APPLICATION_BUILD_FETCH_SUCCESS",
                          applicationId: e,
                          branchId: t,
                          locale: c,
                          build: i,
                      });
            },
            (n) => {
                let { status: i } = n;
                if (404 === i) s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
                else
                    null == h[t] && (h[t] = new a.Ep()),
                        h[t].start(_ + Math.random() * E, () => {
                            null != o.A.getLibraryApplication(e, t) && I(e, t);
                        });
            },
        )
    );
}
