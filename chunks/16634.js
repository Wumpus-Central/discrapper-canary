n.d(t, { A: () => C });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(866665),
    m = n(738188),
    f = n(256905),
    h = n(922329),
    g = n(919790),
    p = n(463660),
    x = n(115982),
    j = n(17928),
    k = n(778712),
    v = n(730134),
    b = n(287809),
    y = n(427262),
    A = n(261425),
    _ = n(105292),
    w = n(59678);
function N(e) {
    let { userId: t } = e,
        n = (0, j.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, y.tx)(n);
    if (null == n || null == a) return null;
    let r = _.intl.formatToPlainString(A.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: w.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var S = n(60160),
    E = n(162052);
function C(e) {
    let { projectId: t, node: n, presentation: r = "row", active: f = !1 } = e,
        [h, p] = a.useState(!1),
        j = a.useId(),
        k = a.useCallback(() => p((e) => !e), []),
        v = (0, x.WQ)(n),
        b = n.detail,
        y = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        C = "text-muted" === y,
        T = f && C ? "none" : h && C ? "currentColor" : y,
        M = i()(w.iq, { [E.Hz]: f && C }),
        P = "detail" === r ? "text-md/normal" : "text-sm/normal",
        D = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        F = null != t ? n.screenshots : [],
        G = null != t ? n.attachments : [];
    if (0 === b.length && 0 === F.length && 0 === G.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: w.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: P,
                color: T,
                selectable: !0,
                className: M,
                children: (0, l.jsx)(S.A, { text: v, variant: P, prose: !0 }),
            }),
        });
    let $ = h ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: w.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: w.kG,
                "aria-expanded": h,
                "aria-controls": j,
                "aria-label": _.intl.formatToPlainString(A.default["KE1KI+"], { step: v }),
                onClick: k,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: P,
                        color: T,
                        className: M,
                        children: (0, l.jsx)(S.A, { text: v, variant: P, prose: !0 }),
                    }),
                    (0, l.jsx)($, { size: "xs", color: "currentColor", className: w.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: j,
                hidden: !h,
                "data-conjure-entrance": !0,
                className: w.yJ,
                children: [
                    b.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            r = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: w.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: D,
                                        color: f && C ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [E.Hz]: f && C }),
                                        children: (0, l.jsx)(S.A, { text: e, variant: D }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                    null != r
                                        ? (0, l.jsx)(c.m, {
                                              text: r,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: w.n9,
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
                              className: w.y8,
                              children: F.map((e) => (0, l.jsx)(I, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && G.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: G }) : null,
                ],
            }),
        ],
    });
}
function T() {}
function I(e) {
    let { projectId: t, screenshotId: n } = e,
        [r, i] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, p.aF)(t, n).then(
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
    let o = _.intl.string(A.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, p.aF)(t, n).then((e) => {
                (0, f.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, T);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(h.n, { name: o, thumbSrc: r, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
