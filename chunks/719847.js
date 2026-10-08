s.d(i, { default: () => E });
var l = s(477900),
    e = s(582128),
    n = s(991660),
    a = s(17928),
    r = s(408278),
    c = s(173936),
    o = s(376357),
    p = s(224640),
    u = s(20742),
    d = s(364840),
    h = s(834730),
    x = s(627363),
    S = s(587895),
    j = s(575926),
    m = s(957565),
    A = s(997997),
    v = s(123791),
    C = s(925435),
    f = s(816709),
    g = s(652215),
    y = s(435220),
    O = s(660183),
    P = s(718245),
    b = s(592551);
function E(t) {
    let { onClose: i, transitionState: s, appId: E, guildId: k } = t,
        U = (0, a.bG)([S.A], () => S.A.getApplication(E), [E]),
        [_, I] = e.useState(() => (S.A.isFetchingApplication(E) ? { status: 1 } : { status: 0 }));
    e.useEffect(() => {
        0 === _.status &&
            (I({ status: 1 }),
            x.Ay.fetchApplication(E)
                .then(() => {
                    I({ status: 2 });
                })
                .catch((t) => {
                    I({ status: 3, error: t.message });
                }));
    }, [E, _.status]);
    let { subscriptions: L, otps: D } = (0, v.C)(E);
    if (null == U) return null;
    let R = O.intl.formatToPlainString(O.t.XDRjs5, { appName: U.name }),
        N = (0, l.jsx)("div", { className: P.K, children: (0, l.jsx)(j.h, {}) }),
        T = m.p5
            ? (0, l.jsx)(r.K, {
                  "aria-label": O.intl.string(O.t.WqhZss),
                  icon: () => (0, l.jsx)(c.LinkIcon, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${g.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E, y.GlobalDiscoveryAppsSections.STORE)}`;
                      ((0, m.C)(t, () => (0, o.P0)((0, o.ox)(O.intl.string(O.t["L/PwZf"]), o.Ck.SUCCESS))),
                          (0, A.K)(E, A.C.STORE_MODAL));
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, l.jsxs)(p.d, {
        transitionState: s,
        "aria-label": R,
        onClose: i,
        size: "xxl",
        children: [
            (0, l.jsx)(u.rQ, { leading: N, title: R, trailing: T }),
            (0, l.jsx)(n.A, {
                children: (0, l.jsx)("main", {
                    className: b.bodyInner,
                    children: (0, l.jsx)(C.Mp, { app: U, guildId: k, subscriptions: L, otps: D }),
                }),
            }),
            (0, l.jsx)(d.j, {
                children: (0, l.jsx)(h.E, {
                    variant: "text-md/normal",
                    children:
                        null != U.termsOfServiceUrl || null != U.privacyPolicyUrl
                            ? (0, l.jsx)(f.A, {
                                  termsOfServiceUrl: U.termsOfServiceUrl,
                                  privacyPolicyUrl: U.privacyPolicyUrl,
                              })
                            : O.intl.string(O.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
