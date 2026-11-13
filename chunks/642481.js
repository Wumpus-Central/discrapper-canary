var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(195118),
    o = n(208756),
    d = n(31188),
    c = n(916845),
    u = n(534514),
    m = n(834730),
    f = n(566345),
    g = n(239027);
function p(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: g.header,
        children: [
            (0, a.jsx)(u.D, { variant: "nitro-sm", className: g.titleRefresh, children: t }),
            (0, a.jsx)("div", {
                className: g.headerBody,
                children: (0, a.jsx)(m.E, { variant: "body-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function E(e) {
    let {
            title: t,
            body: n,
            graphic: r,
            size: u = "md",
            actions: m,
            gradientColor: E,
            onRequestClose: h,
            position: b,
            caretConfig: x,
            scrollBehavior: A,
            showCloseButton: _ = !0,
            isCaretHoverable: R = !1,
            shouldTrapFocus: N = !1,
            returnRef: v,
            onNudgeChange: j,
            ...y
        } = e,
        [I, T] = l.useState(b ?? "top");
    l.useEffect(() => {
        null != b && T(b);
    }, [b]);
    let C = l.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        S = l.useCallback(() => {
            h?.();
        }, [h]),
        D = l.useCallback(
            (e) => {
                h?.(e);
            },
            [h],
        ),
        O = l.useCallback((e) => {
            T(e);
        }, []),
        P = R ? g.caretHoverable : void 0,
        M = {
            targetElementRef: y.targetElementRef,
            shouldShow: y.shouldShow,
            hasVideo: y.hasVideo,
            position: I,
            caretConfig: C,
            onRequestClose: S,
            gradientColor: E,
            onPositionChange: O,
            onNudgeChange: j,
            scrollBehavior: A,
            modal: N,
            returnRef: v,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === y.alignmentStrategy
                ? { alignmentStrategy: "edge", align: y.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(i.x, {
        ...M,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                _ && (0, a.jsx)(c.q, { onClick: D, variant: null != E ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(g.graphic, { [g[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(f.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(p, { title: t, body: n }),
                null != m && m.length > 0 ? (0, a.jsx)(o.Z, { actions: m, className: g.actionBar }) : null,
                null != C && (0, a.jsx)(d.F, { className: P }),
            ],
        }),
    });
}
n.d(t, {}, { A: E, j: E });
