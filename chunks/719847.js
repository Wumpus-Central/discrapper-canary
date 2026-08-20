s.d(i, { default: () => U });
var l = s(477900),
    e = s(582128),
    n = s(991660),
    a = s(224640),
    r = s(20742),
    c = s(364840),
    o = s(17928),
    p = s(408278),
    u = s(173936),
    d = s(691540),
    h = s(857250),
    x = s(97483),
    S = s(834730),
    j = s(627363),
    m = s(587895),
    A = s(575926),
    v = s(957565),
    C = s(997997),
    f = s(123791),
    g = s(925435),
    y = s(816709),
    O = s(652215),
    P = s(435220),
    b = s(375708),
    E = s(718245),
    k = s(592551);
function U(t) {
    let { onClose: i, transitionState: s, appId: U, guildId: _ } = t,
        I = (0, o.bG)([m.A], () => m.A.getApplication(U), [U]),
        [L, D] = e.useState(() => (m.A.isFetchingApplication(U) ? { status: 1 } : { status: 0 }));
    e.useEffect(() => {
        0 === L.status &&
            (D({ status: 1 }),
            j.Ay.fetchApplication(U)
                .then(() => {
                    D({ status: 2 });
                })
                .catch((t) => {
                    D({ status: 3, error: t.message });
                }));
    }, [U, L.status]);
    let { subscriptions: R, otps: N } = (0, f.C)(U);
    if (null == I) return null;
    let T = b.intl.formatToPlainString(b.t.XDRjs5, { appName: I.name }),
        w = (0, l.jsx)("div", { className: E.K, children: (0, l.jsx)(A.h, {}) }),
        G = v.p5
            ? (0, l.jsx)(p.K, {
                  "aria-label": b.intl.string(b.t.WqhZss),
                  icon: () => (0, l.jsx)(u.LinkIcon, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(U, P.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, v.C)(t, () => (0, d.P0)((0, h.o)(b.intl.string(b.t["L/PwZf"]), x.Ck.SUCCESS))),
                          (0, C.K)(U, C.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, l.jsxs)(a.d, {
        transitionState: s,
        "aria-label": T,
        onClose: i,
        size: "xxl",
        children: [
            (0, l.jsx)(r.rQ, { leading: w, title: T, trailing: G }),
            (0, l.jsx)(n.A, {
                children: (0, l.jsx)("main", {
                    className: k.bodyInner,
                    children: (0, l.jsx)(g.Mp, { app: I, guildId: _, subscriptions: R, otps: N }),
                }),
            }),
            (0, l.jsx)(c.j, {
                children: (0, l.jsx)(S.E, {
                    variant: "text-md/normal",
                    children:
                        null != I.termsOfServiceUrl || null != I.privacyPolicyUrl
                            ? (0, l.jsx)(y.A, {
                                  termsOfServiceUrl: I.termsOfServiceUrl,
                                  privacyPolicyUrl: I.privacyPolicyUrl,
                              })
                            : b.intl.string(b.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
