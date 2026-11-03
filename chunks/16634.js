n.d(t, { A: () => E });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    i = n(834730),
    u = n(847374),
    d = n(320448),
    o = n(939249),
    c = n(866665),
    m = n(738188),
    f = n(256905),
    h = n(922329),
    p = n(919790),
    k = n(463660),
    x = n(115982),
    g = n(17928),
    _ = n(778712),
    j = n(730134),
    b = n(287809),
    v = n(427262),
    y = n(809526),
    w = n(105292),
    N = n(59678);
function S(e) {
    let { userId: t } = e,
        n = (0, g.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, v.tx)(n);
    if (null == n || null == a) return null;
    let s = w.intl.formatToPlainString(y.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: s,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": s,
            children: (0, l.jsx)(j.A, { user: n, size: _._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    C = n(162052);
function E(e) {
    let { projectId: t, node: n, presentation: s = "row", active: f = !1 } = e,
        [h, k] = a.useState(!1),
        g = a.useId(),
        _ = a.useCallback(() => k((e) => !e), []),
        j = (0, x.WQ)(n),
        b = n.detail,
        v = "failed" === n.status ? "text-feedback-critical" : "detail" === s ? "text-muted" : "text-default",
        E = "text-muted" === v,
        I = f && E ? "none" : h && E ? "currentColor" : v,
        $ = r()(N.iq, { [C.Hz]: f && E }),
        M = "detail" === s ? "body-md/normal" : "body-sm/normal",
        K = "detail" === s ? "body-sm/normal" : "body-xs/normal",
        B = null != t ? n.screenshots : [],
        W = null != t ? n.attachments : [];
    if (0 === b.length && 0 === B.length && 0 === W.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: N.Dx,
            children: (0, l.jsx)(i.E, {
                tag: "div",
                variant: M,
                color: I,
                selectable: !0,
                className: $,
                children: (0, l.jsx)(A.A, { text: j, variant: M, prose: !0 }),
            }),
        });
    let z = h ? u.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: N.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": h,
                "aria-controls": g,
                "aria-label": w.intl.formatToPlainString(y.default["KE1KI+"], { step: j }),
                onClick: _,
                children: [
                    (0, l.jsx)(i.E, {
                        tag: "span",
                        variant: M,
                        color: I,
                        className: $,
                        children: (0, l.jsx)(A.A, { text: j, variant: M, prose: !0 }),
                    }),
                    (0, l.jsx)(z, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: g,
                hidden: !h,
                "data-conjure-entrance": !0,
                className: N.yJ,
                children: [
                    b.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            s = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, l.jsx)(i.E, {
                                        tag: "div",
                                        variant: K,
                                        color: f && E ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [C.Hz]: f && E }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: K }),
                                    }),
                                    null != a ? (0, l.jsx)(S, { userId: a }) : null,
                                    null != s
                                        ? (0, l.jsx)(c.m, {
                                              text: s,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: N.n9,
                                                  role: "img",
                                                  "aria-label": s,
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
                    null != t && B.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
                              children: B.map((e) => (0, l.jsx)(T, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && W.length > 0 ? (0, l.jsx)(p.A, { projectId: t, attachments: W }) : null,
                ],
            }),
        ],
    });
}
function I() {}
function T(e) {
    let { projectId: t, screenshotId: n } = e,
        [s, r] = a.useState(null),
        [i, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, k.aF)(t, n).then(
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
    let d = w.intl.string(y.default["5kjnI/"]),
        o = a.useCallback(() => {
            (0, k.aF)(t, n).then((e) => {
                (0, f.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, I);
        }, [t, n, d]);
    return i ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: s, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
