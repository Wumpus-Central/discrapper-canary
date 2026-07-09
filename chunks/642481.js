n.d(t, { A: () => p, j: () => g });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(312640),
    d = n(208756),
    o = n(798618),
    c = n(916845),
    u = n(534514),
    f = n(834730),
    m = n(353795),
    E = n(283892);
function _(e) {
    let { title: t, body: n } = e;
    return (0, a.jsxs)("div", {
        className: E.header,
        children: [
            (0, a.jsx)(u.D, { variant: "heading-md/semibold", className: E.title, children: t }),
            (0, a.jsx)("div", {
                className: E.headerBody,
                children: (0, a.jsx)(f.E, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function g(e) {
    let {
            title: t,
            body: n,
            graphic: l,
            size: u = "md",
            actions: f,
            gradientColor: g,
            onRequestClose: p,
            position: b,
            caretConfig: h,
            scrollBehavior: A,
            showCloseButton: R = !0,
            isCaretHoverable: v = !1,
            shouldTrapFocus: x = !1,
            returnRef: I,
            onNudgeChange: N,
            ...T
        } = e,
        [j, S] = r.useState(b ?? "top");
    r.useEffect(() => {
        null != b && S(b);
    }, [b]);
    let M = r.useMemo(() => ({ align: h?.align ?? "center", customOffset: h?.customOffset }), [h]),
        C = r.useCallback(() => {
            p?.();
        }, [p]),
        y = r.useCallback(
            (e) => {
                p?.(e);
            },
            [p],
        ),
        D = r.useCallback((e) => {
            S(e);
        }, []),
        O = v ? E.caretHoverable : void 0,
        U = {
            targetElementRef: T.targetElementRef,
            shouldShow: T.shouldShow,
            hasVideo: T.hasVideo,
            position: j,
            caretConfig: M,
            onRequestClose: C,
            gradientColor: g,
            onPositionChange: D,
            onNudgeChange: N,
            scrollBehavior: A,
            modal: x,
            returnRef: I,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === T.alignmentStrategy
                ? { alignmentStrategy: "edge", align: T.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, a.jsx)(s.x, {
        ...U,
        children: (0, a.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                R && (0, a.jsx)(c.q, { onClick: y, variant: null != g ? "color-mix" : void 0 }),
                null != l &&
                    (0, a.jsx)("div", {
                        className: i()(E.graphic, { [E[`graphic--${u}`]]: null != u }),
                        children: (0, a.jsx)(m.v, {
                            ...l,
                            aspectRatio: l.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
                        }),
                    }),
                (0, a.jsx)(_, { title: t, body: n }),
                null != f && f.length > 0 ? (0, a.jsx)(d.Z, { actions: f, className: E.actionBar }) : null,
                null != M && (0, a.jsx)(o.F, { className: O }),
            ],
        }),
    });
}
let p = g;
