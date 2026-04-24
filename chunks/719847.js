"use strict";
n.d(t, { default: () => P });
var i = n(627968),
    s = n(64700),
    r = n(991660),
    a = n(224640),
    l = n(20742),
    c = n(364840),
    u = n(17928),
    o = n(408278),
    d = n(173936),
    p = n(691540),
    f = n(857250),
    _ = n(97483),
    S = n(834730),
    h = n(627363),
    I = n(587895),
    E = n(575926),
    b = n(957565),
    m = n(997997),
    A = n(123791),
    g = n(925435),
    T = n(816709),
    C = n(652215),
    R = n(435220),
    L = n(985018),
    y = n(617114),
    N = n(967744);
function P(e) {
    let { onClose: t, transitionState: n, appId: P, guildId: v } = e,
        O = (0, u.bG)([I.A], () => I.A.getApplication(P), [P]),
        [F, U] = s.useState(() => (I.A.isFetchingApplication(P) ? { status: 1 } : { status: 0 }));
    s.useEffect(() => {
        0 === F.status &&
            (U({ status: 1 }),
            h.Ay.fetchApplication(P)
                .then(() => {
                    U({ status: 2 });
                })
                .catch((e) => {
                    U({ status: 3, error: e.message });
                }));
    }, [P, F.status]);
    let { subscriptions: x, otps: D } = (0, A.C)(P);
    if (null == O) return null;
    let M = L.intl.formatToPlainString(L.t.XDRjs5, { appName: O.name }),
        k = (0, i.jsx)("div", { className: y.K, children: (0, i.jsx)(E.h, {}) }),
        w = b.p5
            ? (0, i.jsx)(o.K, {
                  "aria-label": L.intl.string(L.t.WqhZss),
                  icon: () => (0, i.jsx)(d.q, { size: "sm" }),
                  onClick: () => {
                      let e = `${location.protocol}//${location.host}${C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(P, R.GlobalDiscoveryAppsSections.STORE)}`;
                      (0, b.C)(e, () => (0, p.P0)((0, f.o)(L.intl.string(L.t["L/PwZf"]), _.Ck.SUCCESS))),
                          (0, m.K)(P, m.C.STORE_MODAL);
                  },
                  variant: "icon-only",
              })
            : void 0;
    return (0, i.jsxs)(a.d, {
        transitionState: n,
        "aria-label": M,
        onClose: t,
        size: "xxl",
        children: [
            (0, i.jsx)(l.rQ, { leading: k, title: M, trailing: w }),
            (0, i.jsx)(r.A, {
                children: (0, i.jsx)("main", {
                    className: N.bodyInner,
                    children: (0, i.jsx)(g.Mp, { app: O, guildId: v, subscriptions: x, otps: D }),
                }),
            }),
            (0, i.jsx)(c.j, {
                children: (0, i.jsx)(S.E, {
                    variant: "text-md/normal",
                    children:
                        null != O.termsOfServiceUrl || null != O.privacyPolicyUrl
                            ? (0, i.jsx)(T.A, {
                                  termsOfServiceUrl: O.termsOfServiceUrl,
                                  privacyPolicyUrl: O.privacyPolicyUrl,
                              })
                            : L.intl.string(L.t["3ZY+0D"]),
                }),
            }),
        ],
    });
}
