n.d(t, { A: () => _, j: () => h });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(312640),
    o = n(208756),
    d = n(798618),
    u = n(916845),
    c = n(534514),
    m = n(834730),
    g = n(353795),
    f = n(989108);
function p(e) {
    let { title: t, body: n } = e;
    return (0, l.jsxs)("div", {
        className: f.header,
        children: [
            (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: f.title, children: t }),
            (0, l.jsx)("div", {
                className: f.headerBody,
                children: (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "none", children: n }),
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
            position: x,
            caretConfig: v,
            scrollBehavior: b,
            showCloseButton: E = !0,
            isCaretHoverable: j = !1,
            shouldTrapFocus: y = !1,
            returnRef: C,
            onNudgeChange: A,
            ...I
        } = e,
        [R, N] = r.useState(x ?? "top");
    r.useEffect(() => {
        null != x && N(x);
    }, [x]);
    let k = r.useMemo(() => ({ align: v?.align ?? "center", customOffset: v?.customOffset }), [v]),
        T = r.useCallback(() => {
            _?.();
        }, [_]),
        S = r.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        B = r.useCallback((e) => {
            N(e);
        }, []),
        D = j ? f.caretHoverable : void 0,
        O = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: R,
            caretConfig: k,
            onRequestClose: T,
            gradientColor: h,
            onPositionChange: B,
            onNudgeChange: A,
            scrollBehavior: b,
            modal: y,
            returnRef: C,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, l.jsx)(s.x, {
        ...O,
        children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                E && (0, l.jsx)(u.q, { onClick: S, variant: null != h ? "color-mix" : void 0 }),
                null != i &&
                    (0, l.jsx)("div", {
                        className: a()(f.graphic, { [f[`graphic--${c}`]]: null != c }),
                        children: (0, l.jsx)(g.v, {
                            ...i,
                            aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                        }),
                    }),
                (0, l.jsx)(p, { title: t, body: n }),
                null != m && m.length > 0 ? (0, l.jsx)(o.Z, { actions: m, className: f.actionBar }) : null,
                null != k && (0, l.jsx)(d.F, { className: D }),
            ],
        }),
    });
}
let _ = h;
