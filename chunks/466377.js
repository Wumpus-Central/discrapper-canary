n.d(t, {
    Cg: () => P,
    Y0: () => x,
    YA: () => G,
    fM: () => D,
    hz: () => k,
    mz: () => M,
    ol: () => U,
    xB: () => L,
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
    f = n(143450),
    _ = n(693789),
    p = n(507274),
    h = n(742746),
    m = n(147479),
    g = n(481060),
    E = n(793903),
    b = n(600164),
    y = n(602091),
    O = n(231338),
    v = n(388032),
    I = n(818033);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var P = (function (e) {
    return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
})({});
let w = Object.freeze({
    small: I.small,
    medium: I.medium,
    large: I.large,
    dynamic: null,
});
var D = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function x(e) {
    var t,
        {
            transitionState: n,
            children: a,
            size: u = "small",
            role: _ = "dialog",
            className: h,
            fullscreenOnMobile: m = !0,
            hideShadow: g = !1,
            onAnimationEnd: b = O.dG,
            returnRef: v,
            animation: T = "default",
            parentComponent: A,
        } = e,
        R = N(e, [
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
    let P = n === y.Dv.ENTERING || n === y.Dv.ENTERED;
    i.useContext(E.Z)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: A },
    });
    let { reducedMotion: D } = i.useContext(d.Sfi),
        x = (0, f.q)(
            {
                opacity: +!!P,
                transform: P || D.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0,
                },
                onRest: b,
            },
            "animate-always",
        ),
        L = i.useRef(null),
        j = null != R["aria-label"],
        k = null != R["aria-labelledby"],
        M = i.useId(),
        U = null != (t = R["aria-labelledby"]) ? t : M,
        G = i.useMemo(
            () => ({
                headerId: U,
                headerIdIsManaged: k,
            }),
            [U, k],
        );
    return (0, r.jsx)(y.zM.Provider, {
        value: G,
        children: (0, r.jsx)(
            p.V,
            C(
                S(
                    {
                        className: I.focusLock,
                        role: _,
                        returnRef: v,
                        impressionType: l.ImpressionTypes.MODAL,
                        "aria-labelledby": j ? void 0 : G.headerId,
                    },
                    R,
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(h, I.root, w[u], {
                            [I.fullscreenOnMobile]: m,
                            [I.rootWithShadow]: !g,
                        }),
                        ref: L,
                        style: x,
                        children: (0, r.jsx)(d.JcV, {
                            containerRef: L,
                            children: a,
                        }),
                    }),
                },
            ),
        ),
    });
}
function L(e) {
    var t, n, a, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(y.zM);
    return (0, r.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : b.Z.Justify.START,
        align: null != (a = e.align) ? a : b.Z.Align.CENTER,
        wrap: null != (s = e.wrap) ? s : b.Z.Wrap.NO_WRAP,
        className: o()(I.header, e.className, { [I.separator]: null == (l = e.separator) || l }),
        id: u ? void 0 : c,
        children: e.children,
    });
}
function j(e) {
    switch (null != e ? e : "thin") {
        case "auto":
            return m.yW;
        case "none":
            return m.xV;
        default:
            return m.h2;
    }
}
function k(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a } = e,
        s = N(e, ["className", "children", "scrollerRef", "scrollbarType"]),
        l = j(a);
    return (0, r.jsx)(
        l,
        C(
            S(
                {
                    className: o()(I.content, t),
                    ref: i,
                },
                s,
            ),
            { children: (0, r.jsx)(g.y5t, { children: n }) },
        ),
    );
}
function M(e) {
    var t, n, i, a, s;
    return (0, r.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : b.Z.Justify.START,
        align: null != (i = e.align) ? i : b.Z.Align.STRETCH,
        wrap: null != (a = e.wrap) ? a : b.Z.Wrap.NO_WRAP,
        className: o()(I.footer, e.className, { [I.footerSeparator]: null == (s = e.separator) || s }),
        children: (0, r.jsx)(g.y5t, { children: e.children }),
    });
}
function U(e) {
    return (0, r.jsx)(_.zx, {
        focusProps: e.focusProps,
        "aria-label": v.intl.string(v.t.cpT0Cg),
        look: _.zx.Looks.BLANK,
        size: _.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [I.closeWithCircleBackground]: e.withCircleBackground }),
        className: o()(e.className, {
            [I.hideOnFullscreen]: e.hideOnFullscreen,
            [I.close]: !e.withCircleBackground,
        }),
        children: (0, r.jsx)(u.D, {
            size: "md",
            color: "currentColor",
            className: o()(e.innerClassName, I.closeIcon),
        }),
    });
}
function G(e) {
    var { className: t, scrollerRef: n } = e,
        i = N(e, ["className", "scrollerRef"]);
    return (0, r.jsx)(
        h.Tv,
        S(
            {
                className: t,
                ref: n,
            },
            i,
        ),
    );
}
