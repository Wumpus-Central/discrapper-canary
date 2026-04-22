t.d(n, { A: () => x, j: () => h });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(964892),
    o = t(208756),
    d = t(135564),
    u = t(916845),
    c = t(534514),
    m = t(834730),
    p = t(608250),
    f = t(989108);
function g(e) {
    let { title: n, body: t } = e;
    return (0, l.jsxs)("div", {
        className: f.header,
        children: [
            (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: f.title, children: n }),
            (0, l.jsx)("div", {
                className: f.headerBody,
                children: (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "none", children: t }),
            }),
        ],
    });
}
function h(e) {
    let {
            title: n,
            body: t,
            graphic: i,
            size: c = "md",
            actions: m,
            gradientColor: h,
            onRequestClose: x,
            position: A,
            caretConfig: E,
            scrollBehavior: j,
            showCloseButton: v = !0,
            isCaretHoverable: C = !1,
            shouldTrapFocus: b = !1,
            returnRef: R,
            onNudgeChange: _,
            ...y
        } = e,
        [k, N] = r.useState(A ?? "top");
    r.useEffect(() => {
        null != A && N(A);
    }, [A]);
    let I = r.useMemo(() => ({ align: E?.align ?? "center", customOffset: E?.customOffset }), [E]),
        S = r.useCallback(() => {
            x?.();
        }, [x]),
        T = r.useCallback(
            (e) => {
                x?.(e);
            },
            [x],
        ),
        D = r.useCallback((e) => {
            N(e);
        }, []),
        O = C ? f.caretHoverable : void 0,
        w = {
            targetElementRef: y.targetElementRef,
            shouldShow: y.shouldShow,
            hasVideo: y.hasVideo,
            position: k,
            caretConfig: I,
            onRequestClose: S,
            gradientColor: h,
            onPositionChange: D,
            onNudgeChange: _,
            scrollBehavior: j,
            modal: b,
            returnRef: R,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === y.alignmentStrategy
                ? { alignmentStrategy: "edge", align: y.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, l.jsx)(s.x, {
        ...w,
        children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                v && (0, l.jsx)(u.q, { onClick: T, variant: null != h ? "color-mix" : void 0 }),
                null != i &&
                    (0, l.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${c}`]]: null != c }),
                        children: (0, l.jsx)(p.v, {
                            ...i,
                            aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                        }),
                    }),
                (0, l.jsx)(g, { title: n, body: t }),
                null != m && m.length > 0 ? (0, l.jsx)(o.Z, { actions: m, className: f.actionBar }) : null,
                null != I && (0, l.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let x = h;
