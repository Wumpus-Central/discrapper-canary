n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(256905),
    f = n(922329),
    m = n(919790),
    h = n(463660),
    g = n(115982),
    p = n(17928),
    x = n(866665),
    k = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    y = n(248675),
    _ = n(660183),
    S = n(59678);
function w(e) {
    let { userId: t } = e,
        n = (0, p.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let r = _.intl.formatToPlainString(y.default["664n2O"], { name: a });
    return (0, l.jsx)(x.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var N = n(60160),
    A = n(162052);
function T(e) {
    let { projectId: t, node: n, presentation: r = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        x = a.useCallback(() => h((e) => !e), []),
        k = (0, g.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        b = "text-muted" === j,
        T = c && b ? "none" : f && b ? "currentColor" : j,
        E = i()(S.iq, { [A.Hz]: c && b }),
        C = "detail" === r ? "text-md/normal" : "text-sm/normal",
        P = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        M = null != t ? n.screenshots : [],
        $ = null != t ? n.attachments : [];
    if (0 === v.length && 0 === M.length && 0 === $.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: C,
                color: T,
                selectable: !0,
                className: E,
                children: (0, l.jsx)(N.A, { text: k, variant: C, prose: !0 }),
            }),
        });
    let D = f ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: S.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": _.intl.formatToPlainString(y.default["KE1KI+"], { step: k }),
                onClick: x,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: C,
                        color: T,
                        className: E,
                        children: (0, l.jsx)(N.A, { text: k, variant: C, prose: !0 }),
                    }),
                    (0, l.jsx)(D, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
                hidden: !f,
                "data-conjure-entrance": !0,
                className: S.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [A.Hz]: c && b }),
                                        children: (0, l.jsx)(N.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(w, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && M.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: M.map((e) => (0, l.jsx)(I, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && $.length > 0 ? (0, l.jsx)(m.A, { projectId: t, attachments: $ }) : null,
                ],
            }),
        ],
    });
}
function E() {}
function I(e) {
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
    let o = _.intl.string(y.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, E);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(f.n, { name: o, thumbSrc: r, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
