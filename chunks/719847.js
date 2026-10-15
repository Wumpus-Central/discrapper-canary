i.d(s, { default: () => E });
var l = i(477900),
    e = i(582128),
    a = i(991660),
    n = i(17928),
    r = i(408278),
    c = i(173936),
    o = i(858899),
    p = i(224640),
    u = i(20742),
    d = i(364840),
    h = i(834730),
    x = i(627363),
    j = i(587895),
    m = i(575926),
    v = i(957565),
    A = i(997997),
    S = i(123791),
    f = i(925435),
    g = i(816709),
    y = i(652215),
    O = i(435220),
    C = i(105292),
    P = i(718245),
    b = i(592551);
function E(t) {
    let { onClose: s, transitionState: i, appId: E, guildId: _ } = t,
        k = (0, n.bG)([j.A], () => j.A.getApplication(E), [E]),
        [I, L] = e.useState(() => (j.A.isFetchingApplication(E) ? { status: 1 } : { status: 0 }));
    e.useEffect(() => {
        0 === I.status &&
            (L({ status: 1 }),
            x.Ay.fetchApplication(E)
                .then(() => {
                    L({ status: 2 });
                })
                .catch((t) => {
                    L({ status: 3, error: t.message });
                }));
    }, [E, I.status]);
    let { subscriptions: U, otps: D } = (0, S.C)(E);
    if (null == k) return null;
    let R = C.intl.formatToPlainString(C.t.XDRjs5, { appName: k.name }),
        N = (0, l.jsx)("div", { className: P.K, children: (0, l.jsx)(m.h, {}) }),
        T = v.p5
            ? (0, l.jsx)(r.K, {
                  "aria-label": C.intl.string(C.t.WqhZss),
                  icon: () => (0, l.jsx)(c.LinkIcon, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${y.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E, O.GlobalDiscoveryAppsSections.STORE)}`;
                      ((0, v.C)(t, () => (0, o.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" })),
                          (0, A.K)(E, A.C.STORE_MODAL));
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, l.jsxs)(p.d, {
        transitionState: i,
        "aria-label": R,
        onClose: s,
        size: "xxl",
        children: [
            (0, l.jsx)(u.rQ, { leading: N, title: R, trailing: T }),
            (0, l.jsx)(a.A, {
                children: (0, l.jsx)("main", {
                    className: b.bodyInner,
                    children: (0, l.jsx)(f.Mp, { app: k, guildId: _, subscriptions: U, otps: D }),
                }),
            }),
            (0, l.jsx)(d.j, {
                children: (0, l.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        null != k.termsOfServiceUrl || null != k.privacyPolicyUrl
                            ? (0, l.jsx)(g.A, {
                                  termsOfServiceUrl: k.termsOfServiceUrl,
                                  privacyPolicyUrl: k.privacyPolicyUrl,
                              })
                            : C.intl.string(C.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
