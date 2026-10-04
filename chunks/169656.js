n.d(t, { A: () => w });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    u = n(847374),
    d = n(320448),
    o = n(939249),
    c = n(256905),
    m = n(177446),
    f = n(597331),
    h = n(763426),
    x = n(370609),
    p = n(17928),
    g = n(866665),
    k = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(248675),
    y = n(375708),
    S = n(508769);
function N(e) {
    let { userId: t } = e,
        n = (0, p.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = y.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(g.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(165320),
    T = n(946753);
function w(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        g = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        w = c && b ? "none" : f && b ? "currentColor" : j,
        M = r()(S.iq, { [T.Hz]: c && b }),
        I = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        F = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === F.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: I,
                color: w,
                selectable: !0,
                className: M,
                children: (0, l.jsx)(A.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let z = f ? u.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: S.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: g,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: I,
                        color: w,
                        className: M,
                        children: (0, l.jsx)(A.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(z, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
                hidden: !f,
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
                                        className: r()({ [T.Hz]: c && b }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: E.map((e) => (0, l.jsx)(C, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && F.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: F }) : null,
                ],
            }),
        ],
    });
}
function M() {}
function C(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, r] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, n).then(
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
    let d = y.intl.string(_.default["3Hq9pQ"]),
        o = a.useCallback(() => {
            (0, f.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, M);
        }, [t, n, d]);
    return s ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: i, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
