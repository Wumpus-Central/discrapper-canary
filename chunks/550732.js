s.d(l, { C: () => p });
var e = s(627968);
s(64700);
var i = s(991660),
    r = s(189213),
    n = s(224640),
    a = s(20742),
    o = s(364840),
    c = s(17928),
    d = s(834730),
    x = s(408278),
    u = s(173936),
    m = s(691540),
    h = s(857250),
    j = s(97483),
    v = s(587895),
    E = s(212534),
    g = s(272859),
    A = s(957565),
    S = s(943775),
    _ = s(997997),
    T = s(816709),
    N = s(652215),
    R = s(375708),
    I = s(150171),
    C = s(967744);
function p(t) {
    let { appId: l, skuId: s, transitionState: p, onClose: f, children: O, footer: P } = t,
        U = (0, c.bG)([v.A, E.A], () => v.A.getApplication(l) ?? E.A.getApplicationRecord(l), [l]),
        { data: k } = (0, g.d)(s);
    if (null == U) return null;
    let D = (0, S.A)(U, 25),
        { termsOfServiceUrl: L, privacyPolicyUrl: F } = U;
    if (k?.applicationId !== l)
        return (0, e.jsx)(r.Modal, {
            actions: [{ onClick: f, text: R.intl.string(R.t.BddRzS), variant: "primary" }],
            onClose: f,
            size: "sm",
            transitionState: p,
            title: R.intl.string(R.t["0Bf80I"]),
            children: (0, e.jsx)(d.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: I.$r,
                children: R.intl.string(R.t.omH3bq),
            }),
        });
    let b = null != D ? (0, e.jsx)("img", { src: D.href, alt: "", className: I.Z2 }) : void 0;
    return (0, e.jsxs)(n.d, {
        onClose: f,
        size: "lg",
        transitionState: p,
        "aria-label": U.name,
        children: [
            (0, e.jsx)(a.rQ, { leading: b, title: U.name }),
            (0, e.jsx)(i.A, { children: (0, e.jsx)("main", { className: C.bodyInner, children: O }) }),
            (0, e.jsx)(o.j, {
                children: (0, e.jsxs)("div", {
                    className: I.qr,
                    children: [
                        null != L || null != F
                            ? (0, e.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, e.jsx)(T.A, { termsOfServiceUrl: L, privacyPolicyUrl: F }),
                              })
                            : (0, e.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: R.intl.string(R.t["3ZY+0D"]),
                              }),
                        (0, e.jsxs)("div", {
                            className: I.Hq,
                            children: [
                                A.p5 &&
                                    (0, e.jsx)(x.K, {
                                        "aria-label": R.intl.string(R.t.WqhZss),
                                        icon: () => (0, e.jsx)(u.q, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let t = `${location.protocol}//${location.host}${N.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(l, s)}`;
                                            (0, A.C)(t, () =>
                                                (0, m.P0)((0, h.o)(R.intl.string(R.t["L/PwZf"]), j.Ck.SUCCESS)),
                                            ),
                                                (0, _.K)(l, _.C.DETAILS_MODAL, s);
                                        },
                                        variant: "icon-only",
                                    }),
                                P,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
