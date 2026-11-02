n.d(t, { A: () => I });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(866665),
    f = n(738188),
    m = n(256905),
    p = n(922329),
    x = n(919790),
    h = n(463660),
    g = n(115982),
    j = n(17928),
    v = n(778712),
    b = n(730134),
    k = n(287809),
    y = n(427262),
    _ = n(809526),
    A = n(105292),
    S = n(59678);
function N(e) {
    let { userId: t } = e,
        n = (0, j.bG)([k.default], () => k.default.getUser(t), [t]),
        a = (0, y.tx)(n);
    if (null == n || null == a) return null;
    let r = A.intl.formatToPlainString(_.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(b.A, { user: n, size: v._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var w = n(60160),
    C = n(162052);
function I(e) {
    let { projectId: t, node: n, presentation: r = "row", active: m = !1 } = e,
        [p, h] = a.useState(!1),
        j = a.useId(),
        v = a.useCallback(() => h((e) => !e), []),
        b = (0, g.WQ)(n),
        k = n.detail,
        y = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        I = "text-muted" === y,
        E = m && I ? "none" : p && I ? "currentColor" : y,
        T = i()(S.iq, { [C.Hz]: m && I }),
        D = "detail" === r ? "text-md/normal" : "text-sm/normal",
        M = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        z = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === k.length && 0 === z.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: D,
                color: E,
                selectable: !0,
                className: T,
                children: (0, l.jsx)(w.A, { text: b, variant: D, prose: !0 }),
            }),
        });
    let K = p ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: S.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": p,
                "aria-controls": j,
                "aria-label": A.intl.formatToPlainString(_.default["KE1KI+"], { step: b }),
                onClick: v,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: D,
                        color: E,
                        className: T,
                        children: (0, l.jsx)(w.A, { text: b, variant: D, prose: !0 }),
                    }),
                    (0, l.jsx)(K, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: j,
                hidden: !p,
                "data-conjure-entrance": !0,
                className: S.yJ,
                children: [
                    k.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            r = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: M,
                                        color: m && I ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [C.Hz]: m && I }),
                                        children: (0, l.jsx)(w.A, { text: e, variant: M }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                    null != r
                                        ? (0, l.jsx)(c.m, {
                                              text: r,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: S.n9,
                                                  role: "img",
                                                  "aria-label": r,
                                                  children: (0, l.jsx)(f.WarningIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && z.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: z.map((e) => (0, l.jsx)(P, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function E() {}
function P(e) {
    let { projectId: t, screenshotId: n } = e,
        [r, i] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let o = A.intl.string(_.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, m.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, E);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(p.n, { name: o, thumbSrc: r, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
