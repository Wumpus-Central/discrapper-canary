n.d(t, { A: () => h, j: () => E });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(273875),
    o = n(208756),
    d = n(798618),
    c = n(916845),
    u = n(534514),
    f = n(834730),
    m = n(353795),
    g = n(239027);
function p(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: g.header,
        children: [
            (0, a.jsx)(u.D, { variant: "nitro-sm", className: g.titleRefresh, children: t }),
            (0, a.jsx)("div", {
                className: g.headerBody,
                children: (0, a.jsx)(f.E, { variant: "body-sm/normal", color: "none", children: n }),
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
            actions: f,
            gradientColor: E,
            onRequestClose: h,
            position: b,
            caretConfig: x,
            scrollBehavior: A,
            showCloseButton: _ = !0,
            isCaretHoverable: N = !1,
            shouldTrapFocus: R = !1,
            returnRef: v,
            onNudgeChange: j,
            ...I
        } = e,
        [y, T] = l.useState(b ?? "top");
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
        M = l.useCallback((e) => {
            T(e);
        }, []),
        O = N ? g.caretHoverable : void 0,
        P = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: y,
            caretConfig: C,
            onRequestClose: S,
            gradientColor: E,
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
                _ && (0, a.jsx)(c.q, { onClick: D, variant: null != E ? "color-mix" : void 0 }),
                null != r &&
                    (0, a.jsx)("div", {
                        className: s()(g.graphic, { [g[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...r,
                            aspectRatio: r.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(p, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(o.Z, { actions: f, className: g.actionBar }) : null,
                null != C && (0, a.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let h = E;
