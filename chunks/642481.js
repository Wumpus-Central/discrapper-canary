n.d(t, { A: () => h, j: () => _ });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(312640),
    o = n(208756),
    d = n(798618),
    u = n(916845),
    c = n(534514),
    m = n(834730),
    g = n(353795),
    p = n(989108);
function f(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: p.header,
        children: [
            (0, r.jsx)(c.D, { variant: "heading-md/semibold", className: p.title, children: t }),
            (0, r.jsx)("div", {
                className: p.headerBody,
                children: (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function _(e) {
    let {
            title: t,
            body: n,
            graphic: i,
            size: c = "md",
            actions: m,
            gradientColor: _,
            onRequestClose: h,
            position: E,
            caretConfig: x,
            scrollBehavior: v,
            showCloseButton: R = !0,
            isCaretHoverable: b = !1,
            shouldTrapFocus: C = !1,
            returnRef: y,
            onNudgeChange: A,
            ...I
        } = e,
        [j, T] = l.useState(E ?? "top");
    l.useEffect(() => {
        null != E && T(E);
    }, [E]);
    let S = l.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        O = l.useCallback(() => {
            h?.();
        }, [h]),
        N = l.useCallback(
            (e) => {
                h?.(e);
            },
            [h],
        ),
        U = l.useCallback((e) => {
            T(e);
        }, []),
        B = b ? p.caretHoverable : void 0,
        D = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: j,
            caretConfig: S,
            onRequestClose: O,
            gradientColor: _,
            onPositionChange: U,
            onNudgeChange: A,
            scrollBehavior: v,
            modal: C,
            returnRef: y,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(s.x, {
        ...D,
        children: (0, r.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                R && (0, r.jsx)(u.q, { onClick: N, variant: null != _ ? "color-mix" : void 0 }),
                null != i &&
                    (0, r.jsx)("div", {
                        className: a()(p.graphic, { [p[`graphic--${c}`]]: null != c }),
                        children: (0, r.jsx)(g.v, {
                            ...i,
                            aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(f, { title: t, body: n }),
                null != m && m.length > 0 ? (0, r.jsx)(o.Z, { actions: m, className: p.actionBar }) : null,
                null != S && (0, r.jsx)(d.F, { className: B }),
            ],
        }),
    });
}
let h = _;
