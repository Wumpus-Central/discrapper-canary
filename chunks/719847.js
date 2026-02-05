i.d(e, { default: () => v });
var s = i(627968),
    r = i(64700),
    l = i(991660),
    n = i(158954),
    C = i(311907),
    a = i(397927),
    c = i(627363),
    o = i(587895),
    d = i(575926),
    p = i(957565),
    _ = i(997997),
    h = i(123791),
    u = i(55926),
    L = i(816709),
    x = i(652215),
    f = i(435220),
    b = i(985018),
    S = i(801059),
    g = i(22789);
function v(t) {
    let { onClose: e, transitionState: i, appId: v, guildId: m } = t,
        j = (0, C.bG)([o.A], () => o.A.getApplication(v), [v]),
        [w, A] = r.useState(() => (o.A.isFetchingApplication(v) ? { status: 1 } : { status: 0 }));
    r.useEffect(() => {
        0 === w.status &&
            (A({ status: 1 }),
            c.Ay.fetchApplication(v)
                .then(() => {
                    A({ status: 2 });
                })
                .catch((t) => {
                    A({ status: 3, error: t.message });
                }));
    }, [v, w.status]);
    let { subscriptions: V, otps: y } = (0, h.C)(v);
    if (null == j) return null;
    let T = b.intl.formatToPlainString(b.t.XDRjs5, { appName: j.name }),
        P = (0, s.jsx)("div", { className: S.K, children: (0, s.jsx)(d.h, {}) }),
        D = p.p5
            ? (0, s.jsx)(a.K0, {
                  "aria-label": b.intl.string(b.t.WqhZss),
                  icon: () => (0, s.jsx)(a.qYV, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${x.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, f.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, p.C)(t, () =>
                          (0, a.showToast)((0, a.createToast)(b.intl.string(b.t["L/PwZf"]), a.ToastType.SUCCESS)),
                      ),
                          (0, _.K)(v, _.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, s.jsxs)(n.dWK, {
        transitionState: i,
        "aria-label": T,
        onClose: e,
        size: "xxl",
        children: [
            (0, s.jsx)(n.rQ0, { leading: P, title: T, trailing: D }),
            (0, s.jsx)(l.A, {
                children: (0, s.jsx)("main", {
                    className: g.bodyInner,
                    children: (0, s.jsx)(u.Mp, { app: j, guildId: m, subscriptions: V, otps: y }),
                }),
            }),
            (0, s.jsx)(n.jlY, {
                children: (0, s.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children:
                        null != j.termsOfServiceUrl || null != j.privacyPolicyUrl
                            ? (0, s.jsx)(L.A, {
                                  termsOfServiceUrl: j.termsOfServiceUrl,
                                  privacyPolicyUrl: j.privacyPolicyUrl,
                              })
                            : b.intl.string(b.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
