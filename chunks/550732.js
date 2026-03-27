n.d(t, { C: () => N });
var l = n(627968);
n(64700);
var a = n(991660),
    r = n(158954),
    s = n(311907),
    i = n(397927),
    o = n(587895),
    c = n(212534),
    d = n(272859),
    u = n(957565),
    m = n(943775),
    p = n(997997),
    A = n(816709),
    h = n(652215),
    C = n(985018),
    E = n(94024),
    x = n(277355);
function N(e) {
    let { appId: t, skuId: n, transitionState: N, onClose: I, children: f, footer: _ } = e,
        g = (0, s.bG)([o.A, c.A], () => o.A.getApplication(t) ?? c.A.getApplicationRecord(t), [t]),
        { data: T } = (0, d.d)(n);
    if (null == g) return null;
    let v = (0, m.A)(g, 25),
        { termsOfServiceUrl: j, privacyPolicyUrl: S } = g;
    if (T?.applicationId !== t)
        return (0, l.jsx)(r.Modal, {
            actions: [{ onClick: I, text: C.intl.string(C.t.BddRzS), variant: "primary" }],
            onClose: I,
            size: "sm",
            transitionState: N,
            title: C.intl.string(C.t["0Bf80I"]),
            children: (0, l.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: E.$r,
                children: C.intl.string(C.t.omH3bq),
            }),
        });
    let O = null != v ? (0, l.jsx)("img", { src: v.href, alt: "", className: E.Z2 }) : void 0;
    return (0, l.jsxs)(r.dWK, {
        onClose: I,
        size: "lg",
        transitionState: N,
        children: [
            (0, l.jsx)(r.rQ0, { leading: O, title: g.name }),
            (0, l.jsx)(a.A, { children: (0, l.jsx)("main", { className: x.bodyInner, children: f }) }),
            (0, l.jsx)(r.jlY, {
                children: (0, l.jsxs)("div", {
                    className: E.qr,
                    children: [
                        null != j || null != S
                            ? (0, l.jsx)(i.Text, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, l.jsx)(A.A, { termsOfServiceUrl: j, privacyPolicyUrl: S }),
                              })
                            : (0, l.jsx)(i.Text, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: C.intl.string(C.t["3ZY+0D"]),
                              }),
                        (0, l.jsxs)("div", {
                            className: E.Hq,
                            children: [
                                u.p5 &&
                                    (0, l.jsx)(i.K0, {
                                        "aria-label": C.intl.string(C.t.WqhZss),
                                        icon: () => (0, l.jsx)(i.qYV, { size: "xs", color: "currentColor" }),
                                        onClick: () => {
                                            let e = `${location.protocol}//${location.host}${h.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n)}`;
                                            (0, u.C)(e, () =>
                                                (0, i.showToast)(
                                                    (0, i.createToast)(
                                                        C.intl.string(C.t["L/PwZf"]),
                                                        i.ToastType.SUCCESS,
                                                    ),
                                                ),
                                            ),
                                                (0, p.K)(t, p.C.DETAILS_MODAL, n);
                                        },
                                        variant: "icon-only",
                                    }),
                                _,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
