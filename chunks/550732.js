n.d(t, {
    C: () => b,
});
var r = n(627968);
n(64700);
var i = n(991660),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(587895),
    c = n(212534),
    u = n(272859),
    d = n(957565),
    f = n(943775),
    p = n(997997),
    _ = n(816709),
    h = n(652215),
    m = n(985018),
    g = n(356426),
    E = n(22789);

function b(e) {
    let { appId: t, skuId: n, transitionState: b, onClose: y, children: O, footer: A } = e,
        v = (0, s.bG)([l.A, c.A], () => {
            var e;
            return null != (e = l.A.getApplication(t)) ? e : c.A.getApplicationRecord(t);
        }, [t]),
        { data: S } = (0, u.d)(n);
    if (null == v) return null;
    let I = (0, f.A)(v, 25),
        { termsOfServiceUrl: T, privacyPolicyUrl: C } = v;
    if ((null == S ? void 0 : S.applicationId) !== t)
        return (0, r.jsx)(a.Modal, {
            actions: [
                {
                    onClick: y,
                    text: m.intl.string(m.t.BddRzS),
                    variant: "primary",
                },
            ],
            onClose: y,
            size: "sm",
            transitionState: b,
            title: m.intl.string(m.t["0Bf80I"]),
            children: (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: g.$r,
                children: m.intl.string(m.t.omH3bq),
            }),
        });
    let N =
        null != I
            ? (0, r.jsx)("img", {
                  src: I.href,
                  alt: "",
                  className: g.Z2,
              })
            : void 0;
    return (0, r.jsxs)(a.dWK, {
        onClose: y,
        size: "lg",
        transitionState: b,
        children: [
            (0, r.jsx)(a.rQ0, {
                leading: N,
                title: v.name,
            }),
            (0, r.jsx)(i.A, {
                children: (0, r.jsx)("main", {
                    className: E.bodyInner,
                    children: O,
                }),
            }),
            (0, r.jsx)(a.jlY, {
                children: (0, r.jsxs)("div", {
                    className: g.qr,
                    children: [
                        null != T || null != C
                            ? (0, r.jsx)(o.Text, {
                                  color: "text-strong",
                                  variant: "text-sm/normal",
                                  children: (0, r.jsx)(_.A, {
                                      termsOfServiceUrl: T,
                                      privacyPolicyUrl: C,
                                  }),
                              })
                            : (0, r.jsx)(o.Text, {
                                  color: "text-strong",
                                  variant: "text-xs/normal",
                                  children: m.intl.string(m.t["3ZY+0D"]),
                              }),
                        (0, r.jsxs)("div", {
                            className: g.Hq,
                            children: [
                                d.p5 &&
                                    (0, r.jsx)(o.K0, {
                                        "aria-label": m.intl.string(m.t.WqhZss),
                                        icon: () =>
                                            (0, r.jsx)(o.qYV, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        onClick: () => {
                                            let e = ""
                                                .concat(location.protocol, "//")
                                                .concat(location.host)
                                                .concat(h.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
                                            (0, d.C)(e, () =>
                                                (0, o.showToast)(
                                                    (0, o.createToast)(
                                                        m.intl.string(m.t["L/PwZf"]),
                                                        o.ToastType.SUCCESS,
                                                    ),
                                                ),
                                            ),
                                                (0, p.K)(t, p.C.DETAILS_MODAL, n);
                                        },
                                        variant: "icon-only",
                                    }),
                                A,
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
