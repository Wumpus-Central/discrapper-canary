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
    E = n(239027);
function g(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: E.header,
        children: [
            (0, a.jsx)(u.D, { variant: "heading-md/semibold", className: E.title, children: t }),
            (0, a.jsx)("div", {
                className: E.headerBody,
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
            scrollBehavior: x,
            showCloseButton: A = !0,
            isCaretHoverable: R = !1,
            shouldTrapFocus: v = !1,
            returnRef: N,
            onNudgeChange: I,
            ...T
        } = e,
        [j, C] = l.useState(h ?? "top");
    l.useEffect(() => {
        null != h && C(h);
    }, [h]);
    let S = l.useMemo(() => ({ align: _?.align ?? "center", customOffset: _?.customOffset }), [_]),
        y = l.useCallback(() => {
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
        O = R ? E.caretHoverable : void 0,
        P = {
            targetElementRef: T.targetElementRef,
            shouldShow: T.shouldShow,
            hasVideo: T.hasVideo,
            position: j,
            caretConfig: S,
            onRequestClose: y,
            gradientColor: p,
            onPositionChange: M,
            onNudgeChange: I,
            scrollBehavior: x,
            modal: v,
            returnRef: N,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === T.alignmentStrategy
                ? { alignmentStrategy: "edge", align: T.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(i.x, {
        ...P,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                A && (0, a.jsx)(c.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(E.graphic, { [E[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(g, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(o.Z, { actions: f, className: E.actionBar }) : null,
                null != S && (0, a.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let b = p;
