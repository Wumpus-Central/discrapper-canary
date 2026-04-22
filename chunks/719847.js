a.d(t, { default: () => O });
var n = a(627968),
    r = a(64700),
    i = a(991660),
    d = a(224640),
    l = a(20742),
    s = a(364840),
    o = a(311907),
    c = a(408278),
    _ = a(173936),
    b = a(691540),
    u = a(857250),
    p = a(97483),
    h = a(834730),
    m = a(627363),
    f = a(587895),
    g = a(575926),
    A = a(957565),
    x = a(997997),
    E = a(123791),
    C = a(55926),
    S = a(816709),
    T = a(652215),
    v = a(435220),
    I = a(985018),
    R = a(617114),
    y = a(967744);
function O(e) {
    let { onClose: t, transitionState: a, appId: O, guildId: L } = e,
        N = (0, o.bG)([f.A], () => f.A.getApplication(O), [O]),
        [M, U] = r.useState(() => (f.A.isFetchingApplication(O) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === M.status &&
            (U({ status: 1 }),
            m.Ay.fetchApplication(O)
                .then(() => {
                    U({ status: 2 });
                })
                .catch((e) => {
                    U({ status: 3, error: e.message });
                }));
    }, [O, M.status]);
    let { subscriptions: P, otps: w } = (0, E.C)(O);
    if (null == N) return null;
    let F = I.intl.formatToPlainString(I.t.XDRjs5, { appName: N.name }),
        B = (0, n.jsx)("div", { className: R.K, children: (0, n.jsx)(g.h, {}) }),
        D = A.p5
            ? (0, n.jsx)(c.K, {
                  "aria-label": I.intl.string(I.t.WqhZss),
                  icon: () => (0, n.jsx)(_.q, { size: "sm" }),
                  onClick: () => {
                      let e = `${location.protocol}//${location.host}${T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(O, v.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, A.C)(e, () => (0, b.P0)((0, u.o)(I.intl.string(I.t["L/PwZf"]), p.Ck.SUCCESS))),
                          (0, x.K)(O, x.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, n.jsxs)(d.d, {
        transitionState: a,
        "aria-label": F,
        onClose: t,
        size: "xxl",
        children: [
            (0, n.jsx)(l.rQ, { leading: B, title: F, trailing: D }),
            (0, n.jsx)(i.A, {
                children: (0, n.jsx)("main", {
                    className: y.bodyInner,
                    children: (0, n.jsx)(C.Mp, { app: N, guildId: L, subscriptions: P, otps: w }),
                }),
            }),
            (0, n.jsx)(s.j, {
                children: (0, n.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        null != N.termsOfServiceUrl || null != N.privacyPolicyUrl
                            ? (0, n.jsx)(S.A, {
                                  termsOfServiceUrl: N.termsOfServiceUrl,
                                  privacyPolicyUrl: N.privacyPolicyUrl,
                              })
                            : I.intl.string(I.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
