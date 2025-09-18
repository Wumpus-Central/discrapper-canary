n.d(t, {
    Cg: () => R,
    Y0: () => D,
    YA: () => U,
    fM: () => w,
    hz: () => j,
    mz: () => M,
    ol: () => k,
    xB: () => x,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
    l = n(990547),
    c = n(748780),
    u = n(197723),
    d = n(793030),
    f = n(693789),
    _ = n(507274),
    p = n(742746),
    h = n(147479),
    m = n(481060),
    g = n(793903),
    E = n(600164),
    b = n(602091),
    y = n(231338),
    O = n(388032),
    v = n(818033);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var R = (function (e) {
    return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
})({});
let P = Object.freeze({
    small: v.small,
    medium: v.medium,
    large: v.large,
    dynamic: null,
});
var w = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function D(e) {
    var t,
        {
            transitionState: n,
            children: a,
            size: u = "small",
            role: f = "dialog",
            className: p,
            fullscreenOnMobile: h = !0,
            hideShadow: m = !1,
            onAnimationEnd: E = y.dG,
            returnRef: O,
            animation: I = "default",
            parentComponent: S,
        } = e,
        N = C(e, [
            "transitionState",
            "children",
            "size",
            "role",
            "className",
            "fullscreenOnMobile",
            "hideShadow",
            "onAnimationEnd",
            "returnRef",
            "animation",
            "parentComponent",
        ]);
    let R = n === b.Dv.ENTERING || n === b.Dv.ENTERED;
    i.useContext(g.Z)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: w } = i.useContext(d.Sfi),
        D = (0, d.q_F)(
            {
                opacity: +!!R,
                transform: R || w.enabled || "subtle" === I ? "scale(1)" : "scale(0.7)",
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0,
                },
                onRest: E,
            },
            "animate-always",
        ),
        x = i.useRef(null),
        L = null != N["aria-label"],
        j = null != N["aria-labelledby"],
        M = i.useId(),
        k = null != (t = N["aria-labelledby"]) ? t : M,
        U = i.useMemo(
            () => ({
                headerId: k,
                headerIdIsManaged: j,
            }),
            [k, j],
        );
    return (0, r.jsx)(b.zM.Provider, {
        value: U,
        children: (0, r.jsx)(
            _.V,
            A(
                T(
                    {
                        className: v.focusLock,
                        role: f,
                        returnRef: O,
                        impressionType: l.ImpressionTypes.MODAL,
                        "aria-labelledby": L ? void 0 : U.headerId,
                    },
                    N,
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(p, v.root, P[u], {
                            [v.fullscreenOnMobile]: h,
                            [v.rootWithShadow]: !m,
                        }),
                        ref: x,
                        style: D,
                        children: (0, r.jsx)(d.JcV, {
                            containerRef: x,
                            children: a,
                        }),
                    }),
                },
            ),
        ),
    });
}
function x(e) {
    var t, n, a, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(b.zM);
    return (0, r.jsx)(E.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : E.Z.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : E.Z.Justify.START,
        align: null != (a = e.align) ? a : E.Z.Align.CENTER,
        wrap: null != (s = e.wrap) ? s : E.Z.Wrap.NO_WRAP,
        className: o()(v.header, e.className, { [v.separator]: null == (l = e.separator) || l }),
        id: u ? void 0 : c,
        children: e.children,
    });
}
function L(e) {
    switch (null != e ? e : "thin") {
        case "auto":
            return h.yW;
        case "none":
            return h.xV;
        default:
            return h.h2;
    }
}
function j(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a } = e,
        s = C(e, ["className", "children", "scrollerRef", "scrollbarType"]),
        l = L(a);
    return (0, r.jsx)(
        l,
        A(
            T(
                {
                    className: o()(v.content, t),
                    ref: i,
                },
                s,
            ),
            { children: (0, r.jsx)(m.y5t, { children: n }) },
        ),
    );
}
function M(e) {
    var t, n, i, a, s;
    return (0, r.jsx)(E.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : E.Z.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : E.Z.Justify.START,
        align: null != (i = e.align) ? i : E.Z.Align.STRETCH,
        wrap: null != (a = e.wrap) ? a : E.Z.Wrap.NO_WRAP,
        className: o()(v.footer, e.className, { [v.footerSeparator]: null == (s = e.separator) || s }),
        children: (0, r.jsx)(m.y5t, { children: e.children }),
    });
}
function k(e) {
    return (0, r.jsx)(f.zx, {
        focusProps: e.focusProps,
        "aria-label": O.intl.string(O.t.cpT0Cg),
        look: f.zx.Looks.BLANK,
        size: f.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [v.closeWithCircleBackground]: e.withCircleBackground }),
        className: o()(e.className, {
            [v.hideOnFullscreen]: e.hideOnFullscreen,
            [v.close]: !e.withCircleBackground,
        }),
        children: (0, r.jsx)(u.D, {
            size: "md",
            color: "currentColor",
            className: o()(e.innerClassName, v.closeIcon),
        }),
    });
}
function U(e) {
    var { className: t, scrollerRef: n } = e,
        i = C(e, ["className", "scrollerRef"]);
    return (0, r.jsx)(
        p.Tv,
        T(
            {
                className: t,
                ref: n,
            },
            i,
        ),
    );
}
