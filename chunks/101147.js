n.d(t, { A: () => I });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(834730),
    o = n(847374),
    d = n(320448),
    u = n(939249),
    c = n(866665),
    m = n(738188),
    f = n(256905),
    h = n(922329),
    k = n(919790),
    p = n(463660),
    x = n(115982),
    g = n(855986),
    j = n(778712),
    _ = n(730134),
    b = n(287809),
    v = n(427262),
    y = n(191850),
    w = n(792996),
    S = n(59678);
function N(e) {
    let { userId: t } = e,
        n = (0, g.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, v.tx)(n);
    if (null == n || null == a) return null;
    let r = w.intl.formatToPlainString(y.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(_.A, { user: n, size: j._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var C = n(60160),
    A = n(162052);
function I(e) {
    let { projectId: t, node: n, presentation: r = "row", active: f = !1 } = e,
        [h, p] = a.useState(!1),
        g = a.useId(),
        j = a.useCallback(() => p((e) => !e), []),
        _ = (0, x.WQ)(n),
        b = n.detail,
        v = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        I = "text-muted" === v,
        E = f && I ? "none" : h && I ? "currentColor" : v,
        M = s()(S.iq, { [A.Hz]: f && I }),
        T = "detail" === r ? "body-md/normal" : "body-sm/normal",
        B = "detail" === r ? "body-sm/normal" : "body-xs/normal",
        D = null != t ? n.screenshots : [],
        K = null != t ? n.attachments : [];
    if (0 === b.length && 0 === D.length && 0 === K.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: S.Dx,
            children: (0, l.jsx)(i.E, {
                tag: "div",
                variant: T,
                color: E,
                selectable: !0,
                className: M,
                children: (0, l.jsx)(C.A, { text: _, variant: T, prose: !0 }),
            }),
        });
    let W = h ? o.ChevronSmallDownIcon : d.ChevronSmallRightIcon;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: S.Dx,
        children: [
            (0, l.jsxs)(u.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": h,
                "aria-controls": g,
                "aria-label": w.intl.formatToPlainString(y.default["KE1KI+"], { step: _ }),
                onClick: j,
                children: [
                    (0, l.jsx)(i.E, {
                        tag: "span",
                        variant: T,
                        color: E,
                        className: M,
                        children: (0, l.jsx)(C.A, { text: _, variant: T, prose: !0 }),
                    }),
                    (0, l.jsx)(W, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: g,
                hidden: !h,
                "data-conjure-entrance": !0,
                className: S.yJ,
                children: [
                    b.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            r = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(i.E, {
                                        tag: "div",
                                        variant: B,
                                        color: f && I ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [A.Hz]: f && I }),
                                        children: (0, l.jsx)(C.A, { text: e, variant: B }),
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
                    null != t && D.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: D.map((e) => (0, l.jsx)($, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && K.length > 0 ? (0, l.jsx)(k.A, { projectId: t, attachments: K }) : null,
                ],
            }),
        ],
    });
}
function E() {}
function $(e) {
    let { projectId: t, screenshotId: n } = e,
        [r, s] = a.useState(null),
        [i, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, p.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || o(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let d = w.intl.string(y.default["5kjnI/"]),
        u = a.useCallback(() => {
            (0, p.aF)(t, n).then((e) => {
                (0, f.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, E);
        }, [t, n, d]);
    return i ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: r, ariaLabel: d, onClick: u, onThumbError: () => o(!0) });
}
