n.d(t, { A: () => w });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    u = n(847374),
    d = n(320448),
    o = n(939249),
    c = n(256905),
    m = n(922329),
    f = n(919790),
    h = n(712808),
    g = n(115982),
    x = n(17928),
    p = n(866665),
    k = n(778712),
    j = n(730134),
    v = n(287809),
    b = n(427262),
    _ = n(248675),
    y = n(375708),
    S = n(59678);
function N(e) {
    let { userId: t } = e,
        n = (0, x.bG)([v.default], () => v.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = y.intl.formatToPlainString(_.default["664n2O"], { name: a });
    return (0, l.jsx)(p.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(j.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    T = n(162052);
function w(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [m, h] = a.useState(!1),
        x = a.useId(),
        p = a.useCallback(() => h((e) => !e), []),
        k = (0, g.WQ)(n),
        j = n.detail,
        v = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === v,
        w = c && b ? "none" : m && b ? "currentColor" : v,
        C = r()(S.iq, { [T.Hz]: c && b }),
        M = "detail" === i ? "text-md/normal" : "text-sm/normal",
        E = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        P = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === j.length && 0 === P.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: M,
                color: w,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(A.A, { text: k, variant: M, prose: !0 }),
            }),
        });
    let D = m ? u.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: S.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": m,
                "aria-controls": x,
                "aria-label": y.intl.formatToPlainString(_.default["KE1KI+"], { step: k }),
                onClick: p,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: M,
                        color: w,
                        className: C,
                        children: (0, l.jsx)(A.A, { text: k, variant: M, prose: !0 }),
                    }),
                    (0, l.jsx)(D, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: x,
                hidden: !m,
                className: S.yJ,
                children: [
                    j.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: E,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [T.Hz]: c && b }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: E }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && P.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: P.map((e) => (0, l.jsx)(I, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(f.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function C() {}
function I(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, r] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || r(t);
                },
                () => {
                    e || u(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let d = y.intl.string(_.default["5kjnI/"]),
        o = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, C);
        }, [t, n, d]);
    return s ? null : (0, l.jsx)(m.n, { name: d, thumbSrc: i, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
