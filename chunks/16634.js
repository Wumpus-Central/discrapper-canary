n.d(t, { A: () => M });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    c = n(939249),
    d = n(866665),
    f = n(738188),
    h = n(256905),
    m = n(922329),
    p = n(919790),
    g = n(463660),
    x = n(115982),
    y = n(17928),
    k = n(778712),
    b = n(730134),
    v = n(287809),
    j = n(427262),
    w = n(809526),
    _ = n(105292),
    S = n(59678);
function C(e) {
    let { userId: t } = e,
        n = (0, y.bG)([v.default], () => v.default.getUser(t), [t]),
        r = (0, j.tx)(n);
    if (null == n || null == r) return null;
    let a = _.intl.formatToPlainString(w.default["664n2O"], { name: r });
    return (0, l.jsx)(d.m, {
        text: a,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": a,
            children: (0, l.jsx)(b.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    P = n(162052);
function M(e) {
    let { projectId: t, node: n, presentation: a = "row", active: h = !1 } = e,
        [m, g] = r.useState(!1),
        y = r.useId(),
        k = r.useCallback(() => g((e) => !e), []),
        b = (0, x.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === a ? "text-muted" : "text-default",
        M = "text-muted" === j,
        I = h && M ? "none" : m && M ? "currentColor" : j,
        E = i()(S.iq, { [P.Hz]: h && M }),
        $ = "detail" === a ? "text-md/normal" : "text-sm/normal",
        D = "detail" === a ? "text-sm/normal" : "text-xs/normal",
        T = null != t ? n.screenshots : [],
        z = null != t ? n.attachments : [];
    if (0 === v.length && 0 === T.length && 0 === z.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: $,
                color: I,
                selectable: !0,
                className: E,
                children: (0, l.jsx)(A.A, { text: b, variant: $, prose: !0 }),
            }),
        });
    let B = m ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: S.Dx,
        children: [
            (0, l.jsxs)(c.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": m,
                "aria-controls": y,
                "aria-label": _.intl.formatToPlainString(w.default["KE1KI+"], { step: b }),
                onClick: k,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: $,
                        color: I,
                        className: E,
                        children: (0, l.jsx)(A.A, { text: b, variant: $, prose: !0 }),
                    }),
                    (0, l.jsx)(B, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: y,
                hidden: !m,
                "data-conjure-entrance": !0,
                className: S.yJ,
                children: [
                    v.map((e, t) => {
                        let r = n.detailDrivenBy[t],
                            a = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: D,
                                        color: h && M ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [P.Hz]: h && M }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: D }),
                                    }),
                                    null != r ? (0, l.jsx)(C, { userId: r }) : null,
                                    null != a
                                        ? (0, l.jsx)(d.m, {
                                              text: a,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: S.n9,
                                                  role: "img",
                                                  "aria-label": a,
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
                    null != t && T.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: T.map((e) => (0, l.jsx)(N, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && z.length > 0 ? (0, l.jsx)(p.A, { projectId: t, attachments: z }) : null,
                ],
            }),
        ],
    });
}
function I() {}
function N(e) {
    let { projectId: t, screenshotId: n } = e,
        [a, i] = r.useState(null),
        [s, u] = r.useState(!1);
    r.useEffect(() => {
        let e = !1;
        return (
            (0, g.aF)(t, n).then(
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
    let o = _.intl.string(w.default["5kjnI/"]),
        c = r.useCallback(() => {
            (0, g.aF)(t, n).then((e) => {
                (0, h.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, I);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(m.n, { name: o, thumbSrc: a, ariaLabel: o, onClick: c, onThumbError: () => u(!0) });
}
