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
    f = n(834730),
    m = n(353795),
    g = n(239027);
function E(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: g.header,
        children: [
            (0, a.jsx)(u.D, { variant: "heading-md/semibold", className: g.title, children: t }),
            (0, a.jsx)("div", {
                className: g.headerBody,
                children: (0, a.jsx)(f.E, { variant: "text-sm/normal", color: "none", children: n }),
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
            actions: f,
            gradientColor: p,
            onRequestClose: b,
            position: h,
            caretConfig: _,
            scrollBehavior: A,
            showCloseButton: x = !0,
            isCaretHoverable: v = !1,
            shouldTrapFocus: R = !1,
            returnRef: N,
            onNudgeChange: I,
            ...j
        } = e,
        [T, y] = l.useState(h ?? "top");
    l.useEffect(() => {
        null != h && y(h);
    }, [h]);
    let C = l.useMemo(() => ({ align: _?.align ?? "center", customOffset: _?.customOffset }), [_]),
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
            y(e);
        }, []),
        O = v ? g.caretHoverable : void 0,
        P = {
            targetElementRef: j.targetElementRef,
            shouldShow: j.shouldShow,
            hasVideo: j.hasVideo,
            position: T,
            caretConfig: C,
            onRequestClose: S,
            gradientColor: p,
            onPositionChange: M,
            onNudgeChange: I,
            scrollBehavior: A,
            modal: R,
            returnRef: N,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === j.alignmentStrategy
                ? { alignmentStrategy: "edge", align: j.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(i.x, {
        ...P,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                x && (0, a.jsx)(c.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(g.graphic, { [g[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(E, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(o.Z, { actions: f, className: g.actionBar }) : null,
                null != C && (0, a.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let b = p;
