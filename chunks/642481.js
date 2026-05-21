n.d(t, { A: () => _, j: () => h });
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
function h(e) {
    let {
            title: t,
            body: n,
            graphic: i,
            size: c = "md",
            actions: m,
            gradientColor: h,
            onRequestClose: _,
            position: E,
            caretConfig: x,
            scrollBehavior: v,
            showCloseButton: R = !0,
            isCaretHoverable: b = !1,
            shouldTrapFocus: j = !1,
            returnRef: C,
            onNudgeChange: A,
            ...y
        } = e,
        [I, O] = l.useState(E ?? "top");
    l.useEffect(() => {
        null != E && O(E);
    }, [E]);
    let T = l.useMemo(() => ({ align: x?.align ?? "center", customOffset: x?.customOffset }), [x]),
        S = l.useCallback(() => {
            _?.();
        }, [_]),
        N = l.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        D = l.useCallback((e) => {
            O(e);
        }, []),
        U = b ? p.caretHoverable : void 0,
        B = {
            targetElementRef: y.targetElementRef,
            shouldShow: y.shouldShow,
            hasVideo: y.hasVideo,
            position: I,
            caretConfig: T,
            onRequestClose: S,
            gradientColor: h,
            onPositionChange: D,
            onNudgeChange: A,
            scrollBehavior: v,
            modal: j,
            returnRef: C,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === y.alignmentStrategy
                ? { alignmentStrategy: "edge", align: y.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(s.x, {
        ...B,
        children: (0, r.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                R && (0, r.jsx)(u.q, { onClick: N, variant: null != h ? "color-mix" : void 0 }),
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
                null != T && (0, r.jsx)(d.F, { className: U }),
            ],
        }),
    });
}
let _ = h;
