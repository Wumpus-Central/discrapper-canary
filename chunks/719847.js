i.d(e, { default: () => g });
var s = i(627968),
    r = i(64700),
    a = i(991660),
    n = i(158954),
    l = i(311907),
    o = i(397927),
    c = i(627363),
    p = i(587895),
    _ = i(575926),
    d = i(957565),
    b = i(997997),
    u = i(123791),
    S = i(55926),
    x = i(816709),
    f = i(652215),
    h = i(435220),
    m = i(985018),
    C = i(678378),
    A = i(110992);
function g(t) {
    let { onClose: e, transitionState: i, appId: g, guildId: T } = t,
        v = (0, l.bG)([p.A], () => p.A.getApplication(g), [g]),
        [y, D] = r.useState(() => (p.A.isFetchingApplication(g) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === y.status &&
            (D({ status: 1 }),
            c.Ay.fetchApplication(g)
                .then(() => {
                    D({ status: 2 });
                })
                .catch((t) => {
                    D({ status: 3, error: t.message });
                }));
    }, [g, y.status]);
    let { subscriptions: j, otps: I } = (0, u.C)(g);
    if (null == v) return null;
    let E = m.intl.formatToPlainString(m.t.XDRjs5, { appName: v.name }),
        N = (0, s.jsx)("div", { className: C.K, children: (0, s.jsx)(_.h, {}) }),
        O = d.p5
            ? (0, s.jsx)(o.K0, {
                  "aria-label": m.intl.string(m.t.WqhZss),
                  icon: () => (0, s.jsx)(o.qYV, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(g, h.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, d.C)(t, () =>
                          (0, o.showToast)((0, o.createToast)(m.intl.string(m.t["L/PwZf"]), o.ToastType.SUCCESS)),
                      ),
                          (0, b.K)(g, b.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, s.jsxs)(n.dWK, {
        transitionState: i,
        "aria-label": E,
        onClose: e,
        size: "xxl",
        children: [
            (0, s.jsx)(n.rQ0, { leading: N, title: E, trailing: O }),
            (0, s.jsx)(a.A, {
                children: (0, s.jsx)("main", {
                    className: A.bodyInner,
                    children: (0, s.jsx)(S.Mp, { app: v, guildId: T, subscriptions: j, otps: I }),
                }),
            }),
            (0, s.jsx)(n.jlY, {
                children: (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                        null != v.termsOfServiceUrl || null != v.privacyPolicyUrl
                            ? (0, s.jsx)(x.A, {
                                  termsOfServiceUrl: v.termsOfServiceUrl,
                                  privacyPolicyUrl: v.privacyPolicyUrl,
                              })
                            : m.intl.string(m.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
