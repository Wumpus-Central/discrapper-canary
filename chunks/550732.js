n.d(t, { C: () => S });
var a = n(627968);
n(64700);
var l = n(991660),
    r = n(189213),
    i = n(224640),
    s = n(20742),
    o = n(364840),
    d = n(311907),
    c = n(834730),
    u = n(408278),
    m = n(173936),
    _ = n(691540),
    p = n(857250),
    h = n(97483),
    A = n(587895),
    C = n(212534),
    x = n(272859),
    f = n(957565),
    E = n(943775),
    I = n(997997),
    N = n(816709),
    g = n(652215),
    v = n(985018),
    T = n(150171),
    b = n(967744);
function S(e) {
    let { appId: t, skuId: n, transitionState: S, onClose: j, children: O, footer: y } = e,
        R = (0, d.bG)([A.A, C.A], () => A.A.getApplication(t) ?? C.A.getApplicationRecord(t), [t]),
        { data: P } = (0, x.d)(n);
    if (null == R) return null;
    let L = (0, E.A)(R, 25),
        { termsOfServiceUrl: D, privacyPolicyUrl: k } = R;
    if (P?.applicationId !== t)
        return (0, a.jsx)(r.Modal, {
            actions: [{ onClick: j, text: v.intl.string(v.t.BddRzS), variant: "primary" }],
            onClose: j,
            size: "sm",
            transitionState: S,
            title: v.intl.string(v.t["0Bf80I"]),
            children: (0, a.jsx)(c.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: T.$r,
                children: v.intl.string(v.t.omH3bq),
            }),
        });
    let w = null != L ? (0, a.jsx)("img", { src: L.href, alt: "", className: T.Z2 }) : void 0;
    return (0, a.jsxs)(i.d, {
        onClose: j,
        size: "lg",
        transitionState: S,
        children: [
            (0, a.jsx)(s.rQ, { leading: w, title: R.name }),
            (0, a.jsx)(l.A, { children: (0, a.jsx)("main", { className: b.bodyInner, children: O }) }),
            (0, a.jsx)(o.j, {
                children: (0, a.jsxs)("div", {
                    className: T.qr,
                    children: [
                        null != D || null != k
                            ? (0, a.jsx)(c.E, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, a.jsx)(N.A, { termsOfServiceUrl: D, privacyPolicyUrl: k }),
                              })
                            : (0, a.jsx)(c.E, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: v.intl.string(v.t["3ZY+0D"]),
                              }),
                        (0, a.jsxs)("div", {
                            className: T.Hq,
                            children: [
                                f.p5 &&
                                    (0, a.jsx)(u.K, {
                                        "aria-label": v.intl.string(v.t.WqhZss),
                                        icon: () => (0, a.jsx)(m.q, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let e = `${location.protocol}//${location.host}${g.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n)}`;
                                            (0, f.C)(e, () =>
                                                (0, _.P0)((0, p.o)(v.intl.string(v.t["L/PwZf"]), h.Ck.SUCCESS)),
                                            ),
                                                (0, I.K)(t, I.C.DETAILS_MODAL, n);
                                        },
                                        variant: "icon-only",
                                    }),
                                y,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
