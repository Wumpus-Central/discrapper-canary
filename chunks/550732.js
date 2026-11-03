t.d(l, { C: () => R });
var e = t(477900);
t(582128);
var i = t(991660),
    n = t(17928),
    r = t(189213),
    a = t(834730),
    o = t(224640),
    c = t(20742),
    d = t(364840),
    x = t(408278),
    u = t(173936),
    m = t(858899),
    h = t(587895),
    j = t(212534),
    v = t(272859),
    E = t(957565),
    g = t(943775),
    A = t(997997),
    _ = t(816709),
    T = t(652215),
    S = t(105292),
    I = t(354084),
    N = t(592551);
function R(s) {
    let { appId: l, skuId: t, transitionState: R, onClose: p, children: f, footer: C } = s,
        O = (0, n.bG)([h.A, j.A], () => h.A.getApplication(l) ?? j.A.getApplicationRecord(l), [l]),
        { data: b } = (0, v.d)(t);
    if (null == O) return null;
    let y = (0, g.A)(O, 25),
        { termsOfServiceUrl: P, privacyPolicyUrl: U } = O;
    if (b?.applicationId !== l)
        return (0, e.jsx)(r.a, {
            actions: [{ onClick: p, text: S.intl.string(S.t.BddRzS), variant: "primary" }],
            onClose: p,
            size: "sm",
            transitionState: R,
            title: S.intl.string(S.t["0Bf80I"]),
            children: (0, e.jsx)(a.E, {
                variant: "body-md/normal",
                color: "text-default",
                className: I.$r,
                children: S.intl.string(S.t.omH3bq),
            }),
        });
    let k = null != y ? (0, e.jsx)("img", { src: y.href, alt: "", className: I.Z2 }) : void 0;
    return (0, e.jsxs)(o.d, {
        onClose: p,
        size: "lg",
        transitionState: R,
        "aria-label": O.name,
        children: [
            (0, e.jsx)(c.rQ, { leading: k, title: O.name }),
            (0, e.jsx)(i.A, { children: (0, e.jsx)("main", { className: N.bodyInner, children: f }) }),
            (0, e.jsx)(d.j, {
                children: (0, e.jsxs)("div", {
                    className: I.qr,
                    children: [
                        null != P || null != U
                            ? (0, e.jsx)(a.E, {
                                  color: "text-strong",
                                  variant: "body-sm/normal",
                                  children: (0, e.jsx)(_.A, { termsOfServiceUrl: P, privacyPolicyUrl: U }),
                              })
                            : (0, e.jsx)(a.E, {
                                  color: "text-strong",
                                  variant: "body-xs/normal",
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
                                            let s = `${location.protocol}//${location.host}${T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(l, t)}`;
                                            ((0, E.C)(s, () =>
                                                (0, m.P0)({ text: S.intl.string(S.t["L/PwZf"]), variant: "success" }),
                                            ),
                                                (0, A.K)(l, A.C.DETAILS_MODAL, t));
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
