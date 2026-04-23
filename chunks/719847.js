r.d(e, { default: () => g });
var s = r(627968),
    n = r(64700),
    i = r(991660),
    a = r(224640),
    o = r(20742),
    l = r(364840),
    c = r(311907),
    u = r(408278),
    _ = r(173936),
    d = r(691540),
    S = r(857250),
    p = r(97483),
    E = r(834730),
    T = r(627363),
    h = r(587895),
    A = r(575926),
    C = r(957565),
    I = r(997997),
    b = r(123791),
    f = r(55926),
    O = r(816709),
    L = r(652215),
    R = r(435220),
    m = r(985018),
    y = r(617114),
    N = r(967744);
function g(t) {
    let { onClose: e, transitionState: r, appId: g, guildId: P } = t,
        v = (0, c.bG)([h.A], () => h.A.getApplication(g), [g]),
        [x, F] = n.useState(() => (h.A.isFetchingApplication(g) ? { status: 1 } : { status: 0 }));
    n.useEffect(() => {
        0 === x.status &&
            (F({ status: 1 }),
            T.Ay.fetchApplication(g)
                .then(() => {
                    F({ status: 2 });
                })
                .catch((t) => {
                    F({ status: 3, error: t.message });
                }));
    }, [g, x.status]);
    let { subscriptions: U, otps: D } = (0, b.C)(g);
    if (null == v) return null;
    let j = m.intl.formatToPlainString(m.t.XDRjs5, { appName: v.name }),
        H = (0, s.jsx)("div", { className: y.K, children: (0, s.jsx)(A.h, {}) }),
        G = C.p5
            ? (0, s.jsx)(u.K, {
                  "aria-label": m.intl.string(m.t.WqhZss),
                  icon: () => (0, s.jsx)(_.q, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${L.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(g, R.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, C.C)(t, () => (0, d.P0)((0, S.o)(m.intl.string(m.t["L/PwZf"]), p.Ck.SUCCESS))),
                          (0, I.K)(g, I.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, s.jsxs)(a.d, {
        transitionState: r,
        "aria-label": j,
        onClose: e,
        size: "xxl",
        children: [
            (0, s.jsx)(o.rQ, { leading: H, title: j, trailing: G }),
            (0, s.jsx)(i.A, {
                children: (0, s.jsx)("main", {
                    className: N.bodyInner,
                    children: (0, s.jsx)(f.Mp, { app: v, guildId: P, subscriptions: U, otps: D }),
                }),
            }),
            (0, s.jsx)(l.j, {
                children: (0, s.jsx)(E.E, {
                    variant: "text-md/normal",
                    children:
                        null != v.termsOfServiceUrl || null != v.privacyPolicyUrl
                            ? (0, s.jsx)(O.A, {
                                  termsOfServiceUrl: v.termsOfServiceUrl,
                                  privacyPolicyUrl: v.privacyPolicyUrl,
                              })
                            : m.intl.string(m.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
