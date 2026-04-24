t.d(n, { A: () => x, j: () => h });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(312640),
    o = t(208756),
    d = t(798618),
    u = t(916845),
    c = t(534514),
    m = t(834730),
    f = t(353795),
    p = t(989108);
function g(e) {
    let { title: n, body: t } = e;
    return (0, l.jsxs)("div", {
        className: p.header,
        children: [
            (0, l.jsx)(c.D, { variant: "heading-md/semibold", className: p.title, children: n }),
            (0, l.jsx)("div", {
                className: p.headerBody,
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
            position: j,
            caretConfig: v,
            scrollBehavior: C,
            showCloseButton: E = !0,
            isCaretHoverable: b = !1,
            shouldTrapFocus: A = !1,
            returnRef: y,
            onNudgeChange: R,
            ..._
        } = e,
        [k, N] = r.useState(j ?? "top");
    r.useEffect(() => {
        null != j && N(j);
    }, [j]);
    let I = r.useMemo(() => ({ align: v?.align ?? "center", customOffset: v?.customOffset }), [v]),
        D = r.useCallback(() => {
            x?.();
        }, [x]),
        S = r.useCallback(
            (e) => {
                x?.(e);
            },
            [x],
        ),
        T = r.useCallback((e) => {
            N(e);
        }, []),
        O = b ? p.caretHoverable : void 0,
        w = {
            targetElementRef: _.targetElementRef,
            shouldShow: _.shouldShow,
            hasVideo: _.hasVideo,
            position: k,
            caretConfig: I,
            onRequestClose: D,
            gradientColor: h,
            onPositionChange: T,
            onNudgeChange: R,
            scrollBehavior: C,
            modal: A,
            returnRef: y,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === _.alignmentStrategy
                ? { alignmentStrategy: "edge", align: _.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, l.jsx)(s.x, {
        ...w,
        children: (0, l.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                E && (0, l.jsx)(u.q, { onClick: S, variant: null != h ? "color-mix" : void 0 }),
                null != i &&
                    (0, l.jsx)("div", {
                        className: a()(p.graphic, { [p[`graphic--${c}`]]: null != c }),
                        children: (0, l.jsx)(f.v, {
                            ...i,
                            aspectRatio: i.aspectRatio ?? ("sm" === c ? "2/1" : "16/9"),
                        }),
                    }),
                (0, l.jsx)(g, { title: n, body: t }),
                null != m && m.length > 0 ? (0, l.jsx)(o.Z, { actions: m, className: p.actionBar }) : null,
                null != I && (0, l.jsx)(d.F, { className: O }),
            ],
        }),
    });
}
let x = h;
