n.d(t, { A: () => _, j: () => p });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    i = n(273875),
    d = n(208756),
    o = n(798618),
    c = n(916845),
    u = n(297264),
    f = n(834730),
    E = n(353795),
    m = n(239027);
function g(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: m.header,
        children: [
            (0, a.jsx)(u.D, { variant: "heading-md/semibold", className: m.title, children: t }),
            (0, a.jsx)("div", {
                className: m.headerBody,
                children: (0, a.jsx)(f.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function p(e) {
    let {
            title: t,
            body: n,
            graphic: l,
            size: u = "md",
            actions: f,
            gradientColor: p,
            onRequestClose: _,
            position: b,
            caretConfig: h,
            scrollBehavior: A,
            showCloseButton: R = !0,
            isCaretHoverable: x = !1,
            shouldTrapFocus: I = !1,
            returnRef: N,
            onNudgeChange: v,
            ...T
        } = e,
        [S, D] = r.useState(b ?? "top");
    r.useEffect(() => {
        null != b && D(b);
    }, [b]);
    let j = r.useMemo(() => ({ align: h?.align ?? "center", customOffset: h?.customOffset }), [h]),
        C = r.useCallback(() => {
            _?.();
        }, [_]),
        y = r.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        M = r.useCallback((e) => {
            D(e);
        }, []),
        O = x ? m.caretHoverable : void 0,
        P = {
            targetElementRef: T.targetElementRef,
            shouldShow: T.shouldShow,
            hasVideo: T.hasVideo,
            position: S,
            caretConfig: j,
            onRequestClose: C,
            gradientColor: p,
            onPositionChange: M,
            onNudgeChange: v,
            scrollBehavior: A,
            modal: I,
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
                R && (0, a.jsx)(c.q, { onClick: y, variant: null != p ? "color-mix" : void 0 }),
                null != l &&
                    (0, a.jsx)("div", {
                        className: s()(m.graphic, { [m[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(E.v, {
                            ...l,
                            aspectRatio: l.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(g, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(d.Z, { actions: f, className: m.actionBar }) : null,
                null != j && (0, a.jsx)(o.F, { className: O }),
            ],
        }),
    });
}
let _ = p;
