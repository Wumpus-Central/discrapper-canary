l.d(e, { C: () => R });
var n = l(627968);
l(64700);
var r = l(991660),
    s = l(189213),
    i = l(224640),
    a = l(20742),
    o = l(364840),
    c = l(17928),
    d = l(834730),
    u = l(408278),
    x = l(173936),
    _ = l(691540),
    h = l(857250),
    m = l(97483),
    v = l(587895),
    j = l(212534),
    E = l(272859),
    A = l(957565),
    g = l(943775),
    p = l(997997),
    S = l(816709),
    f = l(652215),
    I = l(985018),
    T = l(150171),
    C = l(967744);
function R(t) {
    let { appId: e, skuId: l, transitionState: R, onClose: k, children: N, footer: D } = t,
        O = (0, c.bG)([v.A, j.A], () => v.A.getApplication(e) ?? j.A.getApplicationRecord(e), [e]),
        { data: L } = (0, E.d)(l);
    if (null == O) return null;
    let b = (0, g.A)(O, 25),
        { termsOfServiceUrl: P, privacyPolicyUrl: U } = O;
    if (L?.applicationId !== e)
        return (0, n.jsx)(s.Modal, {
            actions: [{ onClick: k, text: I.intl.string(I.t.BddRzS), variant: "primary" }],
            onClose: k,
            size: "sm",
            transitionState: R,
            title: I.intl.string(I.t["0Bf80I"]),
            children: (0, n.jsx)(d.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: T.$r,
                children: I.intl.string(I.t.omH3bq),
            }),
        });
    let B = null != b ? (0, n.jsx)("img", { src: b.href, alt: "", className: T.Z2 }) : void 0;
    return (0, n.jsxs)(i.d, {
        onClose: k,
        size: "lg",
        transitionState: R,
        children: [
            (0, n.jsx)(a.rQ, { leading: B, title: O.name }),
            (0, n.jsx)(r.A, { children: (0, n.jsx)("main", { className: C.bodyInner, children: N }) }),
            (0, n.jsx)(o.j, {
                children: (0, n.jsxs)("div", {
                    className: T.qr,
                    children: [
                        null != P || null != U
                            ? (0, n.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, n.jsx)(S.A, { termsOfServiceUrl: P, privacyPolicyUrl: U }),
                              })
                            : (0, n.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: I.intl.string(I.t["3ZY+0D"]),
                              }),
                        (0, n.jsxs)("div", {
                            className: T.Hq,
                            children: [
                                A.p5 &&
                                    (0, n.jsx)(u.K, {
                                        "aria-label": I.intl.string(I.t.WqhZss),
                                        icon: () => (0, n.jsx)(x.q, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let t = `${location.protocol}//${location.host}${f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, l)}`;
                                            (0, A.C)(t, () =>
                                                (0, _.P0)((0, h.o)(I.intl.string(I.t["L/PwZf"]), m.Ck.SUCCESS)),
                                            ),
                                                (0, p.K)(e, p.C.DETAILS_MODAL, l);
                                        },
                                        variant: "icon-only",
                                    }),
                                D,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
