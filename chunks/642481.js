n.d(t, { A: () => x, j: () => h });
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
    p = n(239027);
function E(e) {
    let { title: t, body: n } = e,
        l = (0, g.c)("PremiumPopoverHeader");
    return (0, a.jsxs)("div", {
        className: p.header,
        children: [
            (0, a.jsx)(u.D, {
                variant: l ? "nitro-sm" : "heading-md/semibold",
                className: l ? p.titleRefresh : p.title,
                children: t,
            }),
            (0, a.jsx)("div", {
                className: p.headerBody,
                children: (0, a.jsx)(f.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function h(e) {
    let {
            title: t,
            body: n,
            graphic: r,
            size: u = "md",
            actions: f,
            gradientColor: g,
            onRequestClose: h,
            position: x,
            caretConfig: b,
            scrollBehavior: A,
            showCloseButton: _ = !0,
            isCaretHoverable: N = !1,
            shouldTrapFocus: R = !1,
            returnRef: v,
            onNudgeChange: j,
            ...I
        } = e,
        [T, y] = l.useState(x ?? "top");
    l.useEffect(() => {
        null != x && y(x);
    }, [x]);
    let C = l.useMemo(() => ({ align: b?.align ?? "center", customOffset: b?.customOffset }), [b]),
        S = l.useCallback(() => {
            h?.();
        }, [h]),
        D = l.useCallback(
            (e) => {
                h?.(e);
            },
            [h],
        ),
        M = l.useCallback((e) => {
            y(e);
        }, []),
        O = N ? p.caretHoverable : void 0,
        P = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: T,
            caretConfig: C,
            onRequestClose: S,
            gradientColor: g,
            onPositionChange: M,
            onNudgeChange: j,
            scrollBehavior: A,
            modal: R,
            returnRef: v,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(i.x, {
        ...P,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                _ && (0, a.jsx)(c.q, { onClick: D, variant: null != g ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(p.graphic, { [p[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(E, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(o.Z, { actions: f, className: p.actionBar }) : null,
                null != C && (0, a.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let x = h;
