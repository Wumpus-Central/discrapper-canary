n.d(t, { A: () => h, j: () => b });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(273875),
    o = n(208756),
    d = n(798618),
    c = n(916845),
    u = n(297264),
    f = n(834730),
    m = n(353795),
    g = n(37537),
    E = n(239027);
function p(e) {
    let { title: t, body: n } = e,
        l = (0, g.c)("PremiumPopoverHeader");
    return (0, a.jsxs)("div", {
        className: E.header,
        children: [
            (0, a.jsx)(u.D, {
                variant: l ? "nitro-sm" : "heading-md/semibold",
                className: l ? E.titleRefresh : E.title,
                children: t,
            }),
            (0, a.jsx)("div", {
                className: E.headerBody,
                children: (0, a.jsx)(f.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function b(e) {
    let {
            title: t,
            body: n,
            graphic: r,
            size: u = "md",
            actions: f,
            gradientColor: g,
            onRequestClose: b,
            position: h,
            caretConfig: x,
            scrollBehavior: _,
            showCloseButton: A = !0,
            isCaretHoverable: v = !1,
            shouldTrapFocus: N = !1,
            returnRef: R,
            onNudgeChange: I,
            ...j
        } = e,
        [y, C] = l.useState(h ?? "top");
    l.useEffect(() => {
        null != h && C(h);
    }, [h]);
    let T = l.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        S = l.useCallback(() => {
            b?.();
        }, [b]),
        D = l.useCallback(
            (e) => {
                b?.(e);
            },
            [b],
        ),
        P = l.useCallback((e) => {
            C(e);
        }, []),
        M = v ? E.caretHoverable : void 0,
        O = {
            targetElementRef: j.targetElementRef,
            shouldShow: j.shouldShow,
            hasVideo: j.hasVideo,
            position: y,
            caretConfig: T,
            onRequestClose: S,
            gradientColor: g,
            onPositionChange: P,
            onNudgeChange: I,
            scrollBehavior: _,
            modal: N,
            returnRef: R,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === j.alignmentStrategy
                ? { alignmentStrategy: "edge", align: j.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(i.x, {
        ...O,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                A && (0, a.jsx)(c.q, { onClick: D, variant: null != g ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(E.graphic, { [E[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(p, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(o.Z, { actions: f, className: E.actionBar }) : null,
                null != T && (0, a.jsx)(d.F, { className: M }),
            ],
        }),
    });
}
let h = b;
