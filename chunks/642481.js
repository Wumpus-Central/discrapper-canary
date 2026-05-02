n.d(t, { A: () => f, j: () => p });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(312640),
    o = n(208756),
    d = n(798618),
    u = n(916845),
    c = n(534514),
    E = n(834730),
    _ = n(353795),
    m = n(989108);
function g(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: m.header,
        children: [
            (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: m.title, children: t }),
            (0, l.jsx)("div", {
                className: m.headerBody,
                children: (0, l.jsx)(E.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function p(e) {
    let {
            title: t,
            body: n,
            graphic: i,
            size: c = "md",
            actions: E,
            gradientColor: p,
            onRequestClose: f,
            position: h,
            caretConfig: R,
            scrollBehavior: v,
            showCloseButton: x = !0,
            isCaretHoverable: A = !1,
            shouldTrapFocus: O = !1,
            returnRef: I,
            onNudgeChange: b,
            ...U
        } = e,
        [C, T] = r.useState(h ?? "top");
    r.useEffect(() => {
        null != h && T(h);
    }, [h]);
    let S = r.useMemo(() => ({ align: R?.align ?? "center", customOffset: R?.customOffset }), [R]),
        j = r.useCallback(() => {
            f?.();
        }, [f]),
        D = r.useCallback(
            (e) => {
                f?.(e);
            },
            [f],
        ),
        L = r.useCallback((e) => {
            T(e);
        }, []),
        y = A ? m.caretHoverable : void 0,
        N = {
            targetElementRef: U.targetElementRef,
            shouldShow: U.shouldShow,
            hasVideo: U.hasVideo,
            position: C,
            caretConfig: S,
            onRequestClose: j,
            gradientColor: p,
            onPositionChange: L,
            onNudgeChange: b,
            scrollBehavior: v,
            modal: O,
            returnRef: I,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === U.alignmentStrategy
                ? { alignmentStrategy: "edge", align: U.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, l.jsx)(s.x, {
        ...N,
        children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                x && (0, l.jsx)(u.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != i &&
                    (0, l.jsx)("div", {
                        className: a()(m.graphic, { [m[`graphic--${c}`]]: null != c }),
                        children: (0, l.jsx)(_.v, {
                            ...i,
                            aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                        }),
                    }),
                (0, l.jsx)(g, { title: t, body: n }),
                null != E && E.length > 0 ? (0, l.jsx)(o.Z, { actions: E, className: m.actionBar }) : null,
                null != S && (0, l.jsx)(d.F, { className: y }),
            ],
        }),
    });
}
let f = p;
