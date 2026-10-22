n.d(t, { A: () => C });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    u = n(847374),
    d = n(320448),
    o = n(939249),
    c = n(866665),
    m = n(738188),
    f = n(256905),
    h = n(922329),
    g = n(919790),
    x = n(463660),
    p = n(115982),
    j = n(17928),
    k = n(778712),
    v = n(730134),
    b = n(287809),
    A = n(427262),
    _ = n(248675),
    y = n(105292),
    N = n(59678);
function S(e) {
    let { userId: t } = e,
        n = (0, j.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, A.tx)(n);
    if (null == n || null == a) return null;
    let r = y.intl.formatToPlainString(_.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var w = n(60160),
    E = n(162052);
function C(e) {
    let { projectId: t, node: n, presentation: r = "row", active: f = !1 } = e,
        [h, x] = a.useState(!1),
        j = a.useId(),
        k = a.useCallback(() => x((e) => !e), []),
        v = (0, p.WQ)(n),
        b = n.detail,
        A = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        C = "text-muted" === A,
        I = f && C ? "none" : h && C ? "currentColor" : A,
        P = i()(N.iq, { [E.Hz]: f && C }),
        T = "detail" === r ? "text-md/normal" : "text-sm/normal",
        D = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        F = null != t ? n.screenshots : [],
        G = null != t ? n.attachments : [];
    if (0 === b.length && 0 === F.length && 0 === G.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: N.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: T,
                color: I,
                selectable: !0,
                className: P,
                children: (0, l.jsx)(w.A, { text: v, variant: T, prose: !0 }),
            }),
        });
    let B = h ? u.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: N.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": h,
                "aria-controls": j,
                "aria-label": y.intl.formatToPlainString(_.default["KE1KI+"], { step: v }),
                onClick: k,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: T,
                        color: I,
                        className: P,
                        children: (0, l.jsx)(w.A, { text: v, variant: T, prose: !0 }),
                    }),
                    (0, l.jsx)(B, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: j,
                hidden: !h,
                "data-conjure-entrance": !0,
                className: N.yJ,
                children: [
                    b.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            r = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: D,
                                        color: f && C ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [E.Hz]: f && C }),
                                        children: (0, l.jsx)(w.A, { text: e, variant: D }),
                                    }),
                                    null != a ? (0, l.jsx)(S, { userId: a }) : null,
                                    null != r
                                        ? (0, l.jsx)(c.m, {
                                              text: r,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: N.n9,
                                                  role: "img",
                                                  "aria-label": r,
                                                  children: (0, l.jsx)(m.WarningIcon, {
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
                    null != t && F.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
                              children: F.map((e) => (0, l.jsx)(M, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && G.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: G }) : null,
                ],
            }),
        ],
    });
}
function I() {}
function M(e) {
    let { projectId: t, screenshotId: n } = e,
        [r, i] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, x.aF)(t, n).then(
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
    let d = y.intl.string(_.default["5kjnI/"]),
        o = a.useCallback(() => {
            (0, x.aF)(t, n).then((e) => {
                (0, f.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, I);
        }, [t, n, d]);
    return s ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: r, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
