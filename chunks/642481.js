var a = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
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
            graphic: l,
            size: u = "md",
            actions: m,
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
        [y, T] = r.useState(b ?? "top");
    r.useEffect(() => {
        null != b && T(b);
    }, [b]);
    let C = r.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        S = r.useCallback(() => {
            h?.();
        }, [h]),
        D = r.useCallback(
            (e) => {
                h?.(e);
            },
            [h],
        ),
        M = r.useCallback((e) => {
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
                null != l &&
                    (0, a.jsx)("div", {
                        className: s()(g.graphic, { [g[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(f.v, {
                            ...l,
                            aspectRatio: l.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(p, { title: t, body: n }),
                null != m && m.length > 0 ? (0, a.jsx)(o.Z, { actions: m, className: g.actionBar }) : null,
                null != C && (0, a.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
n.d(t, {}, { A: E, j: E });
