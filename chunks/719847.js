var l = i(477900),
    a = i(582128),
    e = i(991660),
    n = i(855986),
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
    f = i(55709),
    y = i(816709),
    g = i(652215),
    O = i(435220),
    b = i(792996),
    C = i(718245),
    P = i(592551);
i.d(
    s,
    {},
    {
        default: function (t) {
            let { onClose: s, transitionState: i, appId: E, guildId: _ } = t,
                k = (0, n.bG)([j.A], () => j.A.getApplication(E), [E]),
                [I, L] = a.useState(() => (j.A.isFetchingApplication(E) ? { status: 1 } : { status: 0 }));
            a.useEffect(() => {
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
            let R = b.intl.formatToPlainString(b.t.XDRjs5, { appName: k.name }),
                N = (0, l.jsx)("div", { className: C.K, children: (0, l.jsx)(m.h, {}) }),
                T = v.p5
                    ? (0, l.jsx)(r.K, {
                          "aria-label": b.intl.string(b.t.WqhZss),
                          icon: () => (0, l.jsx)(c.LinkIcon, { size: "sm" }),
                          onClick: () => {
                              let t = `${location.protocol}//${location.host}${g.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E, O.GlobalDiscoveryAppsSections.STORE)}`;
                              ((0, v.C)(t, () => (0, o.P0)({ text: b.intl.string(b.t["L/PwZf"]), variant: "success" })),
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
                    (0, l.jsx)(e.A, {
                        children: (0, l.jsx)("main", {
                            className: P.bodyInner,
                            children: (0, l.jsx)(f.Mp, { app: k, guildId: _, subscriptions: U, otps: D }),
                        }),
                    }),
                    (0, l.jsx)(d.j, {
                        children: (0, l.jsx)(h.E, {
                            variant: "body-md/normal",
                            children:
                                null != k.termsOfServiceUrl || null != k.privacyPolicyUrl
                                    ? (0, l.jsx)(y.A, {
                                          termsOfServiceUrl: k.termsOfServiceUrl,
                                          privacyPolicyUrl: k.privacyPolicyUrl,
                                      })
                                    : b.intl.string(b.t["3ZY+0D"]),
                        }),
                    }),
                ],
            });
        },
    },
);
