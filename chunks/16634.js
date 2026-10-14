n.d(t, { A: () => M });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    o = n(847374),
    d = n(320448),
    u = n(939249),
    c = n(866665),
    f = n(738188),
    m = n(256905),
    h = n(922329),
    g = n(919790),
    p = n(463660),
    x = n(115982),
    k = n(17928),
    b = n(778712),
    v = n(730134),
    j = n(287809),
    y = n(427262),
    w = n(248675),
    _ = n(660183),
    N = n(59678);
function S(e) {
    let { userId: t } = e,
        n = (0, k.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, y.tx)(n);
    if (null == n || null == a) return null;
    let i = _.intl.formatToPlainString(w.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: b._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    I = n(162052);
function M(e) {
    let { projectId: t, node: n, presentation: i = "row", active: m = !1 } = e,
        [h, p] = a.useState(!1),
        k = a.useId(),
        b = a.useCallback(() => p((e) => !e), []),
        v = (0, x.WQ)(n),
        j = n.detail,
        y = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        M = "text-muted" === y,
        T = m && M ? "none" : h && M ? "currentColor" : y,
        C = r()(N.iq, { [I.Hz]: m && M }),
        P = "detail" === i ? "text-md/normal" : "text-sm/normal",
        H = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        W = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === j.length && 0 === W.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: N.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: P,
                color: T,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(A.A, { text: v, variant: P, prose: !0 }),
            }),
        });
    let D = h ? o.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: N.Dx,
        children: [
            (0, l.jsxs)(u.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": h,
                "aria-controls": k,
                "aria-label": _.intl.formatToPlainString(w.default["KE1KI+"], { step: v }),
                onClick: b,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: P,
                        color: T,
                        className: C,
                        children: (0, l.jsx)(A.A, { text: v, variant: P, prose: !0 }),
                    }),
                    (0, l.jsx)(D, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: k,
                hidden: !h,
                "data-conjure-entrance": !0,
                className: N.yJ,
                children: [
                    j.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            i = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: H,
                                        color: m && M ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [I.Hz]: m && M }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: H }),
                                    }),
                                    null != a ? (0, l.jsx)(S, { userId: a }) : null,
                                    null != i
                                        ? (0, l.jsx)(c.m, {
                                              text: i,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: N.n9,
                                                  role: "img",
                                                  "aria-label": i,
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
                    null != t && W.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
                              children: W.map((e) => (0, l.jsx)(E, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function T() {}
function E(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, r] = a.useState(null),
        [s, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, p.aF)(t, n).then(
                (t) => {
                    e || r(t);
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
    let d = _.intl.string(w.default["5kjnI/"]),
        u = a.useCallback(() => {
            (0, p.aF)(t, n).then((e) => {
                (0, m.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, T);
        }, [t, n, d]);
    return s ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: i, ariaLabel: d, onClick: u, onThumbError: () => o(!0) });
}
