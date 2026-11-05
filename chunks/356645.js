var i = n(620632),
    r = n(499979),
    a = n(451988),
    s = n(73153),
    l = n(773669),
    o = n(189081),
    d = n(645243),
    c = n(927813),
    u = n(652215);
let _ = 10 * c.A.Millis.MINUTE,
    E = 10 * c.A.Millis.MINUTE,
    A = +c.A.Millis.MINUTE,
    f = {};
n.d(
    t,
    {},
    {
        n: async function e(t, n) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                h = l.default.locale;
            return (
                s.h.dispatch({ type: "APPLICATION_BUILD_FETCH_START", applicationId: t, branchId: n, locale: h }),
                c && (await (0, r.yy)(Math.random() * A)),
                i.Bo.get({
                    url: u.Rsh.APPLICATION_LIVE_BUILD(t, n),
                    query: { platform: (0, d.O)(), locale: h },
                    oldFormErrors: !0,
                    rejectWithError: (0, i.fT)(),
                }).then(
                    (e) => {
                        let i = e.body;
                        0 === i.manifests.length
                            ? s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: t, branchId: n })
                            : s.h.dispatch({
                                  type: "APPLICATION_BUILD_FETCH_SUCCESS",
                                  applicationId: t,
                                  branchId: n,
                                  locale: h,
                                  build: i,
                              });
                    },
                    (i) => {
                        let { status: r } = i;
                        if (404 === r)
                            s.h.dispatch({ type: "APPLICATION_BUILD_NOT_FOUND", applicationId: t, branchId: n });
                        else
                            (null == f[n] && (f[n] = new a.Ep()),
                                f[n].start(_ + Math.random() * E, () => {
                                    null != o.A.getLibraryApplication(t, n) && e(t, n);
                                }));
                    },
                )
            );
        },
    },
);
