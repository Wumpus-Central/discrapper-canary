n.d(t, { n: () => T });
var i = n(636537),
    r = n(499979),
    a = n(451988),
    l = n(228366),
    s = n(773669),
    E = n(189081),
    _ = n(645243),
    o = n(927813),
    u = n(652215);
let A = 10 * o.A.Millis.MINUTE,
    d = 10 * o.A.Millis.MINUTE,
    c = +o.A.Millis.MINUTE,
    I = {};
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = s.default.locale;
    return (
        l.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: e, branchId: t, locale: o }),
        n && (await (0, r.yy)(Math.random() * c)),
        i.Bo.get({
            url: u.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, _.O)(), locale: o },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (n) => {
                let i = n.body;
                0 === i.manifests.length
                    ? l.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t })
                    : l.h.dispatch({
                          type: "APPLICATION_BUILD_FETCH_SUCCESS",
                          applicationId: e,
                          branchId: t,
                          locale: o,
                          build: i,
                      });
            },
            (n) => {
                let { status: i } = n;
                if (404 === i) l.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
                else
                    null == I[t] && (I[t] = new a.Ep()),
                        I[t].start(A + Math.random() * d, () => {
                            null != E.A.getLibraryApplication(e, t) && T(e, t);
                        });
            },
        )
    );
}
