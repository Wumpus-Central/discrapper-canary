n.d(t, { A: () => I });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(834730),
    o = n(847374),
    u = n(320448),
    d = n(939249),
    c = n(866665),
    f = n(738188),
    m = n(256905),
    p = n(922329),
    g = n(919790),
    h = n(463660),
    x = n(115982),
    k = n(17928),
    b = n(778712),
    j = n(730134),
    v = n(287809),
    y = n(427262),
    _ = n(809526),
    w = n(105292),
    S = n(59678);
function C(e) {
    let { userId: t } = e,
        n = (0, k.bG)([v.default], () => v.default.getUser(t), [t]),
        a = (0, y.tx)(n);
    if (null == n || null == a) return null;
    let r = w.intl.formatToPlainString(_.default["664n2O"], { name: a });
    return (0, l.jsx)(c.m, {
        text: r,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": r,
            children: (0, l.jsx)(j.A, { user: n, size: b._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var A = n(60160),
    N = n(162052);
function I(e) {
    let { projectId: t, node: n, presentation: r = "row", active: m = !1 } = e,
        [p, h] = a.useState(!1),
        k = a.useId(),
        b = a.useCallback(() => h((e) => !e), []),
        j = (0, x.WQ)(n),
        v = n.detail,
        y = "failed" === n.status ? "text-feedback-critical" : "detail" === r ? "text-muted" : "text-default",
        I = "text-muted" === y,
        P = m && I ? "none" : p && I ? "currentColor" : y,
        T = i()(S.iq, { [N.Hz]: m && I }),
        D = "detail" === r ? "text-md/normal" : "text-sm/normal",
        K = "detail" === r ? "text-sm/normal" : "text-xs/normal",
        M = null != t ? n.screenshots : [],
        B = null != t ? n.attachments : [];
    if (0 === v.length && 0 === M.length && 0 === B.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            "data-conjure-entrance": !0,
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: D,
                color: P,
                selectable: !0,
                className: T,
                children: (0, l.jsx)(A.A, { text: j, variant: D, prose: !0 }),
            }),
        });
    let z = p ? o.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        "data-conjure-entrance": !0,
        className: S.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": p,
                "aria-controls": k,
                "aria-label": w.intl.formatToPlainString(_.default["KE1KI+"], { step: j }),
                onClick: b,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: D,
                        color: P,
                        className: T,
                        children: (0, l.jsx)(A.A, { text: j, variant: D, prose: !0 }),
                    }),
                    (0, l.jsx)(z, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: k,
                hidden: !p,
                "data-conjure-entrance": !0,
                className: S.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t],
                            r = n.detailError[t] ?? null;
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: K,
                                        color: m && I ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [N.Hz]: m && I }),
                                        children: (0, l.jsx)(A.A, { text: e, variant: K }),
                                    }),
                                    null != a ? (0, l.jsx)(C, { userId: a }) : null,
                                    null != r
                                        ? (0, l.jsx)(c.m, {
                                              text: r,
                                              ariaHidden: !0,
                                              children: (0, l.jsx)("span", {
                                                  className: S.n9,
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
                    null != t && M.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: M.map((e) => (0, l.jsx)(E, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && B.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: B }) : null,
                ],
            }),
        ],
    });
}
function P() {}
function E(e) {
    let { projectId: t, screenshotId: n } = e,
        [r, i] = a.useState(null),
        [s, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let u = w.intl.string(_.default["5kjnI/"]),
        d = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, m.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "ConjureChat",
                });
            }, P);
        }, [t, n, u]);
    return s ? null : (0, l.jsx)(p.n, { name: u, thumbSrc: r, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
