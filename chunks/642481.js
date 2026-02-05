"use strict";
n.d(t, { A: () => h, j: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(964892),
    l = n(208756),
    u = n(135564),
    c = n(916845),
    d = n(397927),
    _ = n(714657);
function f(e) {
    let { title: t, body: n } = e;
    return (0, r.jsxs)("div", {
        className: _.header,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", className: _.title, children: t }),
            (0, r.jsx)("div", {
                className: _.headerBody,
                children: (0, r.jsx)(d.Text, { variant: "text-sm/normal", color: "none", children: n }),
            }),
        ],
    });
}
function p(e) {
    let {
            title: t,
            body: n,
            graphic: a,
            size: p = "md",
            actions: h,
            gradientColor: m,
            onRequestClose: g,
            position: E,
            caretConfig: A,
            scrollBehavior: I,
            showCloseButton: T = !0,
            isCaretHoverable: y = !1,
            shouldTrapFocus: S = !1,
            returnRef: v,
            onNudgeChange: C,
            ...b
        } = e,
        [N, R] = i.useState(E ?? "top");
    i.useEffect(() => {
        null != E && R(E);
    }, [E]);
    let O = i.useMemo(() => ({ align: A?.align ?? "center", customOffset: A?.customOffset }), [A]),
        D = i.useCallback(() => {
            g?.();
        }, [g]),
        L = i.useCallback(
            (e) => {
                g?.(e);
            },
            [g],
        ),
        w = i.useCallback((e) => {
            R(e);
        }, []),
        x = y ? _.caretHoverable : void 0,
        P = {
            targetElementRef: b.targetElementRef,
            shouldShow: b.shouldShow,
            hasVideo: b.hasVideo,
            position: N,
            caretConfig: O,
            onRequestClose: D,
            gradientColor: m,
            onPositionChange: w,
            onNudgeChange: C,
            scrollBehavior: I,
            modal: S,
            returnRef: v,
            gradientOffsetBottom: 0,
            experimental_ignoreModalClicks: !1,
            ...("edge" === b.alignmentStrategy
                ? { alignmentStrategy: "edge", align: b.align }
                : { alignmentStrategy: "trigger-center" }),
        };
    return (0, r.jsx)(o.x, {
        ...P,
        children: (0, r.jsxs)("div", {
            "data-mana-component": "popover",
            children: [
                T && (0, r.jsx)(c.q, { onClick: L, variant: null != m ? "color-mix" : void 0 }),
                null != a &&
                    (0, r.jsx)("div", {
                        className: s()(_.graphic, { [_[`graphic--${p}`]]: null != p }),
                        children: (0, r.jsx)(d.vYh, {
                            ...a,
                            aspectRatio: a.aspectRatio ?? ("sm" === p ? "2/1" : "16/9"),
                        }),
                    }),
                (0, r.jsx)(f, { title: t, body: n }),
                null != h && h.length > 0 ? (0, r.jsx)(l.Z, { actions: h, className: _.actionBar }) : null,
                null != O && (0, r.jsx)(u.F, { className: x }),
            ],
        }),
    });
}
let h = p;
