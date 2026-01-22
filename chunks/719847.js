e.d(a, { default: () => v }), e(896048);
var s = e(627968),
    i = e(64700),
    c = e(991660),
    l = e(158954),
    r = e(311907),
    n = e(397927),
    o = e(627363),
    d = e(587895),
    p = e(575926),
    f = e(957565),
    u = e(997997),
    b = e(123791),
    x = e(55926),
    h = e(816709),
    _ = e(652215),
    S = e(435220),
    j = e(985018),
    m = e(801059),
    A = e(22789);
function v(t) {
    let { onClose: a, transitionState: e, appId: v, guildId: C } = t,
        y = (0, r.bG)([d.A], () => d.A.getApplication(v), [v]),
        [T, g] = i.useState(() => (d.A.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    i.useEffect(() => {
        0 === T.status &&
            (g({ status: 1 }),
            o.Ay.fetchApplication(v)
                .then(() => {
                    g({ status: 2 });
                })
                .catch((t) => {
                    g({
                        status: 3,
                        error: t.message,
                    });
                }));
    }, [v, T.status]);
    let { subscriptions: E, otps: O } = (0, b.C)(v);
    if (null == y) return null;
    let P = j.intl.formatToPlainString(j.t.XDRjs5, { appName: y.name }),
        U = (0, s.jsx)("div", {
            className: m.K,
            children: (0, s.jsx)(p.h, {}),
        }),
        k = f.p5
            ? (0, s.jsx)(n.K0, {
                  "aria-label": j.intl.string(j.t.WqhZss),
                  icon: () => (0, s.jsx)(n.qYV, { size: "sm" }),
                  onClick: () => {
                      let t = ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, S.GlobalDiscoveryAppsSections.STORE));
                      (0, f.C)(t, () =>
                          (0, n.showToast)((0, n.createToast)(j.intl.string(j.t["L/PwZf"]), n.ToastType.SUCCESS)),
                      ),
                          (0, u.K)(v, u.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, s.jsxs)(l.dWK, {
        transitionState: e,
        "aria-label": P,
        onClose: a,
        size: "xxl",
        children: [
            (0, s.jsx)(l.rQ0, {
                leading: U,
                title: P,
                trailing: k,
            }),
            (0, s.jsx)(c.A, {
                children: (0, s.jsx)("main", {
                    className: A.bodyInner,
                    children: (0, s.jsx)(x.Mp, {
                        app: y,
                        guildId: C,
                        subscriptions: E,
                        otps: O,
                    }),
                }),
            }),
            (0, s.jsx)(l.jlY, {
                children: (0, s.jsx)(n.Text, {
                    variant: "text-md/normal",
                    children:
                        null != y.termsOfServiceUrl || null != y.privacyPolicyUrl
                            ? (0, s.jsx)(h.A, {
                                  termsOfServiceUrl: y.termsOfServiceUrl,
                                  privacyPolicyUrl: y.privacyPolicyUrl,
                              })
                            : j.intl.string(j.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
