n.d(t, {
    Cg: () => C,
    Y0: () => R,
    YA: () => M,
    fM: () => P,
    hz: () => x,
    mz: () => L,
    ol: () => j,
    xB: () => w,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(990547),
    c = n(748780),
    u = n(197723),
    d = n(793030),
    f = n(693789),
    p = n(507274),
    _ = n(481060),
    m = n(793903),
    h = n(600164),
    g = n(602091),
    E = n(231338),
    b = n(388032),
    y = n(818033);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
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
function I(e, t) {
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
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var C = (function (e) {
    return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
})({});
let N = Object.freeze({
    small: y.small,
    medium: y.medium,
    large: y.large,
    dynamic: null,
});
var P = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function R(e) {
    var t,
        {
            transitionState: n,
            children: a,
            size: u = "small",
            role: f = "dialog",
            className: _,
            fullscreenOnMobile: h = !0,
            hideShadow: b = !1,
            onAnimationEnd: O = E.dG,
            returnRef: S,
            animation: A = "default",
            parentComponent: C,
        } = e,
        P = T(e, [
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
    let R = n === g.Dv.ENTERING || n === g.Dv.ENTERED;
    i.useContext(m.Z)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: C },
    });
    let { reducedMotion: w } = i.useContext(d.Sfi),
        D = (0, d.q_F)(
            {
                opacity: +!!R,
                transform: R || w.enabled || "subtle" === A ? "scale(1)" : "scale(0.7)",
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0,
                },
                onRest: O,
            },
            "animate-always",
        ),
        x = i.useRef(null),
        L = null != P["aria-label"],
        j = null != P["aria-labelledby"],
        M = i.useId(),
        k = null != (t = P["aria-labelledby"]) ? t : M,
        U = i.useMemo(
            () => ({
                headerId: k,
                headerIdIsManaged: j,
            }),
            [k, j],
        );
    return (0, r.jsx)(g.zM.Provider, {
        value: U,
        children: (0, r.jsx)(
            p.V,
            I(
                v(
                    {
                        className: y.focusLock,
                        role: f,
                        returnRef: S,
                        impressionType: l.ImpressionTypes.MODAL,
                        "aria-labelledby": L ? void 0 : U.headerId,
                    },
                    P,
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(_, y.root, N[u], {
                            [y.fullscreenOnMobile]: h,
                            [y.rootWithShadow]: !b,
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
function w(e) {
    var t, n, a, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(g.zM);
    return (0, r.jsx)(h.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : h.Z.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : h.Z.Justify.START,
        align: null != (a = e.align) ? a : h.Z.Align.CENTER,
        wrap: null != (s = e.wrap) ? s : h.Z.Wrap.NO_WRAP,
        className: o()(y.header, e.className, { [y.separator]: null == (l = e.separator) || l }),
        id: u ? void 0 : c,
        children: e.children,
    });
}
function D(e) {
    switch (null != e ? e : "thin") {
        case "auto":
            return d.yWw;
        case "none":
            return d.xVE;
        default:
            return d.h21;
    }
}
function x(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a } = e,
        s = T(e, ["className", "children", "scrollerRef", "scrollbarType"]),
        l = D(a);
    return (0, r.jsx)(
        l,
        I(
            v(
                {
                    "data-migration-pending": !0,
                    className: o()(y.content, t),
                    ref: i,
                },
                s,
            ),
            { children: (0, r.jsx)(_.y5t, { children: n }) },
        ),
    );
}
function L(e) {
    var t, n, i, a, s;
    return (0, r.jsx)(h.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : h.Z.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : h.Z.Justify.START,
        align: null != (i = e.align) ? i : h.Z.Align.STRETCH,
        wrap: null != (a = e.wrap) ? a : h.Z.Wrap.NO_WRAP,
        className: o()(y.footer, e.className, { [y.footerSeparator]: null == (s = e.separator) || s }),
        children: (0, r.jsx)(_.y5t, { children: e.children }),
    });
}
function j(e) {
    return (0, r.jsx)(f.Button, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": b.intl.string(b.t.cpT0Cq),
        look: f.Button.Looks.BLANK,
        size: f.Button.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [y.closeWithCircleBackground]: e.withCircleBackground }),
        className: o()(e.className, {
            [y.hideOnFullscreen]: e.hideOnFullscreen,
            [y.close]: !e.withCircleBackground,
        }),
        children: (0, r.jsx)(u.D, {
            size: "md",
            color: "currentColor",
            className: o()(e.innerClassName, y.closeIcon),
        }),
    });
}
function M(e) {
    var { className: t, scrollerRef: n } = e,
        i = T(e, ["className", "scrollerRef"]);
    return (0, r.jsx)(
        d.Tvr,
        v(
            {
                className: t,
                ref: n,
            },
            i,
        ),
    );
}
