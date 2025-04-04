n.d(t, {
    Cg: () => P,
    Y0: () => L,
    YA: () => G,
    fM: () => D,
    hz: () => k,
    mz: () => j,
    ol: () => U,
    xB: () => x
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
    _ = n(507274),
    p = n(84735),
    h = n(261833),
    m = n(742746),
    g = n(147479),
    E = n(481060),
    b = n(600164),
    y = n(602091),
    v = n(231338),
    O = n(388032),
    I = n(423931);
function S(e, t, n) {
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
                S(e, t, n[t]);
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
    small: I.small,
    medium: I.medium,
    large: I.large,
    dynamic: null
});
var D = (function (e) {
    return (e.DEFAULT = 'default'), (e.SUBTLE = 'subtle'), e;
})({});
function L(e) {
    var t,
        { transitionState: n, children: o, size: f = 'small', role: h = 'dialog', className: m, fullscreenOnMobile: g = !0, hideShadow: E = !1, onAnimationEnd: b = v.dG, returnRef: O, animation: S = 'default' } = e,
        N = C(e, ['transitionState', 'children', 'size', 'role', 'className', 'fullscreenOnMobile', 'hideShadow', 'onAnimationEnd', 'returnRef', 'animation']);
    let R = n === y.Dv.ENTERING || n === y.Dv.ENTERED,
        { reducedMotion: P } = i.useContext(d.S),
        D = (0, u.q)(
            {
                opacity: +!!R,
                transform: R || P.enabled || 'subtle' === S ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0
                },
                onRest: b
            },
            'animate-always'
        ),
        L = i.useRef(null),
        x = null != N['aria-label'],
        M = null != N['aria-labelledby'],
        k = i.useId(),
        j = null != (t = N['aria-labelledby']) ? t : k,
        U = i.useMemo(
            () => ({
                headerId: j,
                headerIdIsManaged: M
            }),
            [j, M]
        );
    return (0, r.jsx)(y.zM.Provider, {
        value: U,
        children: (0, r.jsx)(
            _.V,
            A(
                T(
                    {
                        className: I.focusLock,
                        role: h,
                        returnRef: O,
                        impressionType: l.ImpressionTypes.MODAL,
                        'aria-labelledby': x ? void 0 : U.headerId
                    },
                    N
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: a()(m, I.root, w[f], {
                            [I.fullscreenOnMobile]: g,
                            [I.rootWithShadow]: !E
                        }),
                        ref: L,
                        style: D,
                        children: (0, r.jsx)(p.J, {
                            containerRef: L,
                            children: o
                        })
                    })
                }
            )
        )
    });
}
function x(e) {
    var t, n, o, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(y.zM);
    return (0, r.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : b.Z.Justify.START,
        align: null != (o = e.align) ? o : b.Z.Align.CENTER,
        wrap: null != (s = e.wrap) ? s : b.Z.Wrap.NO_WRAP,
        className: a()(I.header, e.className, { [I.separator]: null == (l = e.separator) || l }),
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
                    className: a()(I.content, t),
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
    return (0, r.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : b.Z.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : b.Z.Justify.START,
        align: null != (i = e.align) ? i : b.Z.Align.STRETCH,
        wrap: null != (o = e.wrap) ? o : b.Z.Wrap.NO_WRAP,
        className: a()(I.footer, e.className, { [I.footerSeparator]: null == (s = e.separator) || s }),
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
        innerClassName: a()(e.innerClassName, { [I.closeWithCircleBackground]: e.withCircleBackground }),
        className: a()(e.className, {
            [I.hideOnFullscreen]: e.hideOnFullscreen,
            [I.close]: !e.withCircleBackground
        }),
        children: (0, r.jsx)(h.D, {
            size: 'md',
            color: 'currentColor',
            className: a()(e.innerClassName, I.closeIcon)
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
