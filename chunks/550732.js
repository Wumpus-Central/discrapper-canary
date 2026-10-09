l.d(t, { C: () => R });
var e = l(477900);
l(582128);
var i = l(991660),
    n = l(17928),
    r = l(189213),
    a = l(834730),
    c = l(224640),
    o = l(20742),
    d = l(364840),
    x = l(408278),
    u = l(173936),
    m = l(858899),
    h = l(587895),
    j = l(212534),
    v = l(272859),
    E = l(957565),
    g = l(943775),
    A = l(997997),
    _ = l(816709),
    T = l(652215),
    S = l(660183),
    I = l(354084),
    N = l(592551);
function R(s) {
    let { appId: t, skuId: l, transitionState: R, onClose: p, children: f, footer: C } = s,
        O = (0, n.bG)([h.A, j.A], () => h.A.getApplication(t) ?? j.A.getApplicationRecord(t), [t]),
        { data: P } = (0, v.d)(l);
    if (null == O) return null;
    let U = (0, g.A)(O, 25),
        { termsOfServiceUrl: k, privacyPolicyUrl: L } = O;
    if (P?.applicationId !== t)
        return (0, e.jsx)(r.a, {
            actions: [{ onClick: p, text: S.intl.string(S.t.BddRzS), variant: "primary" }],
            onClose: p,
            size: "sm",
            transitionState: R,
            title: S.intl.string(S.t["0Bf80I"]),
            children: (0, e.jsx)(a.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: I.$r,
                children: S.intl.string(S.t.omH3bq),
            }),
        });
    let D = null != U ? (0, e.jsx)("img", { src: U.href, alt: "", className: I.Z2 }) : void 0;
    return (0, e.jsxs)(c.d, {
        onClose: p,
        size: "lg",
        transitionState: R,
        "aria-label": O.name,
        children: [
            (0, e.jsx)(o.rQ, { leading: D, title: O.name }),
            (0, e.jsx)(i.A, { children: (0, e.jsx)("main", { className: N.bodyInner, children: f }) }),
            (0, e.jsx)(d.j, {
                children: (0, e.jsxs)("div", {
                    className: I.qr,
                    children: [
                        null != k || null != L
                            ? (0, e.jsx)(a.E, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, e.jsx)(_.A, { termsOfServiceUrl: k, privacyPolicyUrl: L }),
                              })
                            : (0, e.jsx)(a.E, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: S.intl.string(S.t["3ZY+0D"]),
                              }),
                        (0, e.jsxs)("div", {
                            className: I.Hq,
                            children: [
                                E.p5 &&
                                    (0, e.jsx)(x.K, {
                                        "aria-label": S.intl.string(S.t.WqhZss),
                                        icon: () => (0, e.jsx)(u.LinkIcon, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let s = `${location.protocol}//${location.host}${T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, l)}`;
                                            ((0, E.C)(s, () =>
                                                (0, m.P0)({ text: S.intl.string(S.t["L/PwZf"]), variant: "success" }),
                                            ),
                                                (0, A.K)(t, A.C.DETAILS_MODAL, l));
                                        },
                                        variant: "icon-only",
                                    }),
                                C,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
