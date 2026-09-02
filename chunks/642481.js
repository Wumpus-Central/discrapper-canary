n.d(t, { A: () => b, j: () => p });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(273875),
    o = n(208756),
    d = n(798618),
    c = n(916845),
    u = n(297264),
    m = n(834730),
    f = n(353795),
    g = n(239027);
function E(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: g.header,
        children: [
            (0, a.jsx)(u.D, { variant: "heading-md/semibold", className: g.title, children: t }),
            (0, a.jsx)("div", {
                className: g.headerBody,
                children: (0, a.jsx)(m.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function p(e) {
    let {
            title: t,
            body: n,
            graphic: r,
            size: u = "md",
            actions: m,
            gradientColor: p,
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
        [T, C] = l.useState(h ?? "top");
    l.useEffect(() => {
        null != h && C(h);
    }, [h]);
    let y = l.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        S = l.useCallback(() => {
            b?.();
        }, [b]),
        D = l.useCallback(
            (e) => {
                b?.(e);
            },
            [b],
        ),
        M = l.useCallback((e) => {
            C(e);
        }, []),
        P = v ? g.caretHoverable : void 0,
        O = {
            targetElementRef: j.targetElementRef,
            shouldShow: j.shouldShow,
            hasVideo: j.hasVideo,
            position: T,
            caretConfig: y,
            onRequestClose: S,
            gradientColor: p,
            onPositionChange: M,
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
                A && (0, a.jsx)(c.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(g.graphic, { [g[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(f.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(E, { title: t, body: n }),
                null != m && m.length > 0 ? (0, a.jsx)(o.Z, { actions: m, className: g.actionBar }) : null,
                null != y && (0, a.jsx)(d.F, { className: P }),
            ],
        }),
    });
}
let b = p;
