n.d(t, { A: () => T });
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
    h = n(922329),
    g = n(919790),
    p = n(463660),
    x = n(115982),
    k = n(17928),
    v = n(778712),
    j = n(730134),
    b = n(287809),
    _ = n(427262),
    y = n(248675),
    S = n(660183),
    w = n(59678);
function N(e) {
    let { userId: t } = e,
        n = (0, k.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, _.tx)(n);
    if (null == n || null == a) return null;
    let r = S.intl.formatToPlainString(y.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: w.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(j.A, { user: n, size: v._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    E = n(162052);
function T(e) {
    let { projectId: t, node: n, presentation: r = "row", active: m = !1 } = e,
        [h, p] = a.useState(!1),
        k = a.useId(),
        v = a.useCallback(() => p((e) => !e), []),
        j = (0, x.WQ)(n),
        b = n.detail,
        _ = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        T = "text-muted" === _,
        I = m && T ? "none" : h && T ? "currentColor" : _,
        P = i()(w.iq, { [E.Hz]: m && T }),
        M = "detail" === r ? "text-md/normal" : "text-sm/normal",
        $ = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        D = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === b.length && 0 === D.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: w.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: M,
                color: I,
                selectable: !0,
                className: P,
                children: (0, l.jsx)(A.A, { text: j, variant: M, prose: !0 }),
            }),
        });
    let F = h ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: w.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: w.kG,
                "aria-expanded": h,
                "aria-controls": k,
                "aria-label": S.intl.formatToPlainString(y.default["KE1KI+"], { step: j }),
                onClick: v,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: M,
                        color: I,
                        className: P,
                        children: (0, l.jsx)(A.A, { text: j, variant: M, prose: !0 }),
                    }),
                    (0, l.jsx)(F, { size: "xs", color: "currentColor", className: w.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: k,
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
                                        variant: $,
                                        color: m && T ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [E.Hz]: m && T }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: $ }),
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
                    null != t && D.length > 0
                        ? (0, l.jsx)("div", {
                              className: w.y8,
                              children: D.map((e) => (0, l.jsx)(C, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function I() {}
function C(e) {
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
    let o = S.intl.string(y.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, p.aF)(t, n).then((e) => {
                (0, m.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, I);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(h.n, { name: o, thumbSrc: r, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
