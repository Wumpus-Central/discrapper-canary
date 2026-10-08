n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(256905),
    m = n(922329),
    f = n(919790),
    h = n(712808),
    g = n(115982),
    p = n(17928),
    x = n(866665),
    k = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(248675),
    y = n(660183),
    N = n(59678);
function S(e) {
    let { userId: t } = e,
        n = (0, p.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = y.intl.formatToPlainString(_.default["664n2O"], { name: a });
    return (0, l.jsx)(x.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    w = n(162052);
function T(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [m, h] = a.useState(!1),
        p = a.useId(),
        x = a.useCallback(() => h((e) => !e), []),
        k = (0, g.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        T = c && b ? "none" : m && b ? "currentColor" : j,
        I = r()(N.iq, { [w.Hz]: c && b }),
        C = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: N.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: C,
                color: T,
                selectable: !0,
                className: I,
                children: (0, l.jsx)(A.A, { text: k, variant: C, prose: !0 }),
            }),
        });
    let D = m ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: N.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": m,
                "aria-controls": p,
                "aria-label": y.intl.formatToPlainString(_.default["KE1KI+"], { step: k }),
                onClick: x,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: C,
                        color: T,
                        className: I,
                        children: (0, l.jsx)(A.A, { text: k, variant: C, prose: !0 }),
                    }),
                    (0, l.jsx)(D, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
                hidden: !m,
                className: N.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [w.Hz]: c && b }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(S, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
                              children: E.map((e) => (0, l.jsx)(M, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(f.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function I() {}
function M(e) {
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
    let o = y.intl.string(_.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, I);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(m.n, { name: o, thumbSrc: i, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
