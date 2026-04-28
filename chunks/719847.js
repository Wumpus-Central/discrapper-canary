i.d(s, { default: () => _ });
var l = i(627968),
    e = i(64700),
    a = i(991660),
    n = i(224640),
    r = i(20742),
    c = i(364840),
    o = i(17928),
    p = i(408278),
    u = i(173936),
    d = i(691540),
    h = i(857250),
    x = i(97483),
    S = i(834730),
    j = i(627363),
    m = i(587895),
    A = i(575926),
    v = i(957565),
    C = i(997997),
    f = i(123791),
    g = i(925435),
    y = i(816709),
    O = i(652215),
    P = i(435220),
    b = i(985018),
    E = i(617114),
    U = i(967744);
function _(t) {
    let { onClose: s, transitionState: i, appId: _, guildId: k } = t,
        D = (0, o.bG)([m.A], () => m.A.getApplication(_), [_]),
        [I, L] = e.useState(() => (m.A.isFetchingApplication(_) ? { status: 1 } : { status: 0 }));
    e.useEffect(() => {
        0 === I.status &&
            (L({ status: 1 }),
            j.Ay.fetchApplication(_)
                .then(() => {
                    L({ status: 2 });
                })
                .catch((t) => {
                    L({ status: 3, error: t.message });
                }));
    }, [_, I.status]);
    let { subscriptions: R, otps: N } = (0, f.C)(_);
    if (null == D) return null;
    let T = b.intl.formatToPlainString(b.t.XDRjs5, { appName: D.name }),
        w = (0, l.jsx)("div", { className: E.K, children: (0, l.jsx)(A.h, {}) }),
        G = v.p5
            ? (0, l.jsx)(p.K, {
                  "aria-label": b.intl.string(b.t.WqhZss),
                  icon: () => (0, l.jsx)(u.q, { size: "sm" }),
                  onClick: () => {
                      let t = `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(_, P.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, v.C)(t, () => (0, d.P0)((0, h.o)(b.intl.string(b.t["L/PwZf"]), x.Ck.SUCCESS))),
                          (0, C.K)(_, C.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, l.jsxs)(n.d, {
        transitionState: i,
        "aria-label": T,
        onClose: s,
        size: "xxl",
        children: [
            (0, l.jsx)(r.rQ, { leading: w, title: T, trailing: G }),
            (0, l.jsx)(a.A, {
                children: (0, l.jsx)("main", {
                    className: U.bodyInner,
                    children: (0, l.jsx)(g.Mp, { app: D, guildId: k, subscriptions: R, otps: N }),
                }),
            }),
            (0, l.jsx)(c.j, {
                children: (0, l.jsx)(S.E, {
                    variant: "text-md/normal",
                    children:
                        null != D.termsOfServiceUrl || null != D.privacyPolicyUrl
                            ? (0, l.jsx)(y.A, {
                                  termsOfServiceUrl: D.termsOfServiceUrl,
                                  privacyPolicyUrl: D.privacyPolicyUrl,
                              })
                            : b.intl.string(b.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
