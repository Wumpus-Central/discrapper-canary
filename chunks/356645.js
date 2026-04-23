n.d(t, { n: () => T });
var i = n(636537),
    r = n(499979),
    a = n(451988),
    l = n(228366),
    s = n(773669),
    o = n(189081),
    u = n(645243),
    _ = n(927813),
    E = n(652215);
let A = 10 * _.A.Millis.MINUTE,
    c = 10 * _.A.Millis.MINUTE,
    d = +_.A.Millis.MINUTE,
    I = {};
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        _ = s.default.locale;
    return (
        l.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: e, branchId: t, locale: _ }),
        n && (await (0, r.yy)(Math.random() * d)),
        i.Bo.get({
            url: E.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, u.O)(), locale: _ },
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
                          locale: _,
                          build: i,
                      });
            },
            (n) => {
                let { status: i } = n;
                if (404 === i) l.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: e, branchId: t });
                else
                    null == I[t] && (I[t] = new a.Ep()),
                        I[t].start(A + Math.random() * c, () => {
                            null != o.A.getLibraryApplication(e, t) && T(e, t);
                        });
            },
        )
    );
}
