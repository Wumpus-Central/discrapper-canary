l.d(t, { C: () => p });
var e = l(477900);
l(582128);
var i = l(991660),
    n = l(189213),
    r = l(224640),
    a = l(20742),
    o = l(364840),
    c = l(17928),
    d = l(834730),
    x = l(408278),
    u = l(173936),
    m = l(691540),
    h = l(857250),
    j = l(97483),
    v = l(587895),
    E = l(212534),
    g = l(272859),
    A = l(957565),
    S = l(943775),
    _ = l(997997),
    T = l(816709),
    I = l(652215),
    N = l(375708),
    R = l(354084),
    C = l(592551);
function p(s) {
    let { appId: t, skuId: l, transitionState: p, onClose: f, children: O, footer: P } = s,
        U = (0, c.bG)([v.A, E.A], () => v.A.getApplication(t) ?? E.A.getApplicationRecord(t), [t]),
        { data: k } = (0, g.d)(l);
    if (null == U) return null;
    let L = (0, S.A)(U, 25),
        { termsOfServiceUrl: D, privacyPolicyUrl: F } = U;
    if (k?.applicationId !== t)
        return (0, e.jsx)(n.Modal, {
            actions: [{ onClick: f, text: N.intl.string(N.t.BddRzS), variant: "primary" }],
            onClose: f,
            size: "sm",
            transitionState: p,
            title: N.intl.string(N.t["0Bf80I"]),
            children: (0, e.jsx)(d.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: R.$r,
                children: N.intl.string(N.t.omH3bq),
            }),
        });
    let b = null != L ? (0, e.jsx)("img", { src: L.href, alt: "", className: R.Z2 }) : void 0;
    return (0, e.jsxs)(r.d, {
        onClose: f,
        size: "lg",
        transitionState: p,
        "aria-label": U.name,
        children: [
            (0, e.jsx)(a.rQ, { leading: b, title: U.name }),
            (0, e.jsx)(i.A, { children: (0, e.jsx)("main", { className: C.bodyInner, children: O }) }),
            (0, e.jsx)(o.j, {
                children: (0, e.jsxs)("div", {
                    className: R.qr,
                    children: [
                        null != D || null != F
                            ? (0, e.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, e.jsx)(T.A, { termsOfServiceUrl: D, privacyPolicyUrl: F }),
                              })
                            : (0, e.jsx)(d.E, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: N.intl.string(N.t["3ZY+0D"]),
                              }),
                        (0, e.jsxs)("div", {
                            className: R.Hq,
                            children: [
                                A.p5 &&
                                    (0, e.jsx)(x.K, {
                                        "aria-label": N.intl.string(N.t.WqhZss),
                                        icon: () => (0, e.jsx)(u.LinkIcon, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let s = `${location.protocol}//${location.host}${I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, l)}`;
                                            (0, A.C)(s, () =>
                                                (0, m.P0)((0, h.o)(N.intl.string(N.t["L/PwZf"]), j.Ck.SUCCESS)),
                                            ),
                                                (0, _.K)(t, _.C.DETAILS_MODAL, l);
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
