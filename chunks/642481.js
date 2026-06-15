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
            caretConfig: b,
            scrollBehavior: v,
            showCloseButton: E = !0,
            isCaretHoverable: j = !1,
            shouldTrapFocus: y = !1,
            returnRef: A,
            onNudgeChange: C,
            ...I
        } = e,
        [R, N] = r.useState(x ?? "top");
    r.useEffect(() => {
        null != x && N(x);
    }, [x]);
    let S = r.useMemo(() => ({ align: b?.align ?? "center", customOffset: b?.customOffset }), [b]),
        T = r.useCallback(() => {
            _?.();
        }, [_]),
        k = r.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        B = r.useCallback((e) => {
            N(e);
        }, []),
        O = j ? f.caretHoverable : void 0,
        D = {
            targetElementRef: I.targetElementRef,
            shouldShow: I.shouldShow,
            hasVideo: I.hasVideo,
            position: R,
            caretConfig: S,
            onRequestClose: T,
            gradientColor: h,
            onPositionChange: B,
            onNudgeChange: C,
            scrollBehavior: v,
            modal: y,
            returnRef: A,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === I.alignmentStrategy
                ? { alignmentStrategy: "edge", align: I.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, l.jsx)(s.x, {
        ...D,
        children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                E && (0, l.jsx)(u.q, { onClick: k, variant: null != h ? "color-mix" : void 0 }),
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
                null != S && (0, l.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let _ = h;
