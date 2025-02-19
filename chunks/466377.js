n.d(t, {
    Cg: () => P,
    Y0: () => x,
    YA: () => G,
    fM: () => D,
    hz: () => k,
    mz: () => j,
    ol: () => U,
    xB: () => L
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(990547),
    c = n(748780),
    u = n(143450),
    d = n(186325),
    f = n(693789),
    p = n(507274),
    _ = n(84735),
    h = n(261833),
    m = n(742746),
    g = n(147479),
    E = n(481060),
    v = n(600164),
    b = n(602091),
    y = n(231338),
    O = n(388032),
    S = n(639211);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var P = (function (e) {
    return (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic'), e;
})({});
let w = Object.freeze({
    small: S.small,
    medium: S.medium,
    large: S.large,
    dynamic: null
});
var D = (function (e) {
    return (e.DEFAULT = 'default'), (e.SUBTLE = 'subtle'), e;
})({});
function x(e) {
    var t,
        { transitionState: n, children: o, size: f = 'small', role: h = 'dialog', className: m, fullscreenOnMobile: g = !0, hideShadow: E = !1, onAnimationEnd: v = y.dG, returnRef: O, animation: I = 'default' } = e,
        N = C(e, ['transitionState', 'children', 'size', 'role', 'className', 'fullscreenOnMobile', 'hideShadow', 'onAnimationEnd', 'returnRef', 'animation']);
    let R = n === b.Dv.ENTERING || n === b.Dv.ENTERED,
        { reducedMotion: P } = i.useContext(d.S),
        D = (0, u.q)(
            {
                opacity: +!!R,
                transform: R || P.enabled || 'subtle' === I ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0
                },
                onRest: v
            },
            'animate-always'
        ),
        x = i.useRef(null),
        L = null != N['aria-label'],
        M = null != N['aria-labelledby'],
        k = i.useId(),
        j = null !== (t = N['aria-labelledby']) && void 0 !== t ? t : k,
        U = i.useMemo(
            () => ({
                headerId: j,
                headerIdIsManaged: M
            }),
            [j, M]
        );
    return (0, r.jsx)(b.zM.Provider, {
        value: U,
        children: (0, r.jsx)(
            p.V,
            A(
                T(
                    {
                        className: S.focusLock,
                        role: h,
                        returnRef: O,
                        impressionType: l.ImpressionTypes.MODAL,
                        'aria-labelledby': L ? void 0 : U.headerId
                    },
                    N
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: a()(m, S.root, w[f], {
                            [S.fullscreenOnMobile]: g,
                            [S.rootWithShadow]: !E
                        }),
                        ref: x,
                        style: D,
                        children: (0, r.jsx)(_.J, {
                            containerRef: x,
                            children: o
                        })
                    })
                }
            )
        )
    });
}
function L(e) {
    var t, n, o, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(b.zM);
    return (0, r.jsx)(v.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : v.Z.Direction.HORIZONTAL,
        justify: null !== (n = e.justify) && void 0 !== n ? n : v.Z.Justify.START,
        align: null !== (o = e.align) && void 0 !== o ? o : v.Z.Align.CENTER,
        wrap: null !== (s = e.wrap) && void 0 !== s ? s : v.Z.Wrap.NO_WRAP,
        className: a()(S.header, e.className, { [S.separator]: null === (l = e.separator) || void 0 === l || l }),
        id: u ? void 0 : c,
        children: e.children
    });
}
function M(e) {
    switch (null != e ? e : 'thin') {
        case 'auto':
            return g.yW;
        case 'none':
            return g.xV;
        default:
            return g.h2;
    }
}
function k(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: o } = e,
        s = C(e, ['className', 'children', 'scrollerRef', 'scrollbarType']),
        l = M(o);
    return (0, r.jsx)(
        l,
        A(
            T(
                {
                    className: a()(S.content, t),
                    ref: i
                },
                s
            ),
            { children: (0, r.jsx)(E.y5t, { children: n }) }
        )
    );
}
function j(e) {
    var t, n, i, o, s;
    return (0, r.jsx)(v.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : v.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (n = e.justify) && void 0 !== n ? n : v.Z.Justify.START,
        align: null !== (i = e.align) && void 0 !== i ? i : v.Z.Align.STRETCH,
        wrap: null !== (o = e.wrap) && void 0 !== o ? o : v.Z.Wrap.NO_WRAP,
        className: a()(S.footer, e.className, { [S.footerSeparator]: null === (s = e.separator) || void 0 === s || s }),
        children: (0, r.jsx)(E.y5t, { children: e.children })
    });
}
function U(e) {
    return (0, r.jsx)(f.zx, {
        focusProps: e.focusProps,
        'aria-label': O.NW.string(O.t.cpT0Cg),
        look: f.zx.Looks.BLANK,
        size: f.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: a()(e.innerClassName, { [S.closeWithCircleBackground]: e.withCircleBackground }),
        className: a()(e.className, {
            [S.hideOnFullscreen]: e.hideOnFullscreen,
            [S.close]: !e.withCircleBackground
        }),
        children: (0, r.jsx)(h.D, {
            size: 'md',
            color: 'currentColor',
            className: a()(e.innerClassName, S.closeIcon)
        })
    });
}
function G(e) {
    var { className: t, scrollerRef: n } = e,
        i = C(e, ['className', 'scrollerRef']);
    return (0, r.jsx)(
        m.Tv,
        T(
            {
                className: t,
                ref: n
            },
            i
        )
    );
}
