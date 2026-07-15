n.d(t, { A: () => b, j: () => p });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(312640),
    d = n(208756),
    o = n(798618),
    c = n(916845),
    u = n(297264),
    f = n(834730),
    E = n(353795),
    m = n(989108);
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
            graphic: r,
            size: u = "md",
            actions: f,
            gradientColor: p,
            onRequestClose: b,
            position: _,
            caretConfig: h,
            scrollBehavior: A,
            showCloseButton: R = !0,
            isCaretHoverable: x = !1,
            shouldTrapFocus: N = !1,
            returnRef: v,
            onNudgeChange: I,
            ...T
        } = e,
        [j, C] = l.useState(_ ?? "top");
    l.useEffect(() => {
        null != _ && C(_);
    }, [_]);
    let S = l.useMemo(() => ({ align: h?.align ?? "center", customOffset: h?.customOffset }), [h]),
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
        O = x ? m.caretHoverable : void 0,
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
            scrollBehavior: A,
            modal: N,
            returnRef: v,
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
                R && (0, a.jsx)(c.q, { onClick: D, variant: null != p ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(m.graphic, { [m[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(E.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(g, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(d.Z, { actions: f, className: m.actionBar }) : null,
                null != S && (0, a.jsx)(o.F, { className: O }),
            ],
        }),
    });
}
let b = p;
