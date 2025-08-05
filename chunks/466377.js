n.d(t, {
    Cg: () => w,
    Y0: () => x,
    YA: () => B,
    fM: () => L,
    hz: () => j,
    mz: () => U,
    ol: () => G,
    xB: () => M
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(66546),
    l = n(990547),
    c = n(748780),
    u = n(197723),
    d = n(143450),
    f = n(186325),
    _ = n(693789),
    p = n(507274),
    h = n(84735),
    m = n(742746),
    g = n(147479),
    E = n(481060),
    b = n(793903),
    y = n(600164),
    O = n(602091),
    v = n(231338),
    I = n(388032),
    T = n(423931);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function C(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
var w = (function (e) {
    return ((e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic'), e);
})({});
let D = Object.freeze({
    small: T.small,
    medium: T.medium,
    large: T.large,
    dynamic: null
});
var L = (function (e) {
    return ((e.DEFAULT = 'default'), (e.SUBTLE = 'subtle'), e);
})({});
function x(e) {
    var t,
        { transitionState: n, children: a, size: u = 'small', role: _ = 'dialog', className: m, fullscreenOnMobile: g = !0, hideShadow: E = !1, onAnimationEnd: y = v.dG, returnRef: I, animation: S = 'default', parentComponent: N } = e,
        P = R(e, ['transitionState', 'children', 'size', 'role', 'className', 'fullscreenOnMobile', 'hideShadow', 'onAnimationEnd', 'returnRef', 'animation', 'parentComponent']);
    let w = n === O.Dv.ENTERING || n === O.Dv.ENTERED;
    i.useContext(b.Z)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: N }
    });
    let { reducedMotion: L } = i.useContext(f.S),
        x = (0, d.q)(
            {
                opacity: +!!w,
                transform: w || L.enabled || 'subtle' === S ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: 200,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0
                },
                onRest: y
            },
            'animate-always'
        ),
        M = i.useRef(null),
        k = null != P['aria-label'],
        j = null != P['aria-labelledby'],
        U = i.useId(),
        G = null != (t = P['aria-labelledby']) ? t : U,
        B = i.useMemo(
            () => ({
                headerId: G,
                headerIdIsManaged: j
            }),
            [G, j]
        );
    return (0, r.jsx)(O.zM.Provider, {
        value: B,
        children: (0, r.jsx)(
            p.V,
            C(
                A(
                    {
                        className: T.focusLock,
                        role: _,
                        returnRef: I,
                        impressionType: l.ImpressionTypes.MODAL,
                        'aria-labelledby': k ? void 0 : B.headerId
                    },
                    P
                ),
                {
                    children: (0, r.jsx)(s.animated.div, {
                        className: o()(m, T.root, D[u], {
                            [T.fullscreenOnMobile]: g,
                            [T.rootWithShadow]: !E
                        }),
                        ref: M,
                        style: x,
                        children: (0, r.jsx)(h.J, {
                            containerRef: M,
                            children: a
                        })
                    })
                }
            )
        )
    });
}
function M(e) {
    var t, n, a, s, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(O.zM);
    return (0, r.jsx)(y.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : y.Z.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : y.Z.Justify.START,
        align: null != (a = e.align) ? a : y.Z.Align.CENTER,
        wrap: null != (s = e.wrap) ? s : y.Z.Wrap.NO_WRAP,
        className: o()(T.header, e.className, { [T.separator]: null == (l = e.separator) || l }),
        id: u ? void 0 : c,
        children: e.children
    });
}
function k(e) {
    switch (null != e ? e : 'thin') {
        case 'auto':
            return g.yW;
        case 'none':
            return g.xV;
        default:
            return g.h2;
    }
}
function j(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a } = e,
        s = R(e, ['className', 'children', 'scrollerRef', 'scrollbarType']),
        l = k(a);
    return (0, r.jsx)(
        l,
        C(
            A(
                {
                    className: o()(T.content, t),
                    ref: i
                },
                s
            ),
            { children: (0, r.jsx)(E.y5t, { children: n }) }
        )
    );
}
function U(e) {
    var t, n, i, a, s;
    return (0, r.jsx)(y.Z, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : y.Z.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : y.Z.Justify.START,
        align: null != (i = e.align) ? i : y.Z.Align.STRETCH,
        wrap: null != (a = e.wrap) ? a : y.Z.Wrap.NO_WRAP,
        className: o()(T.footer, e.className, { [T.footerSeparator]: null == (s = e.separator) || s }),
        children: (0, r.jsx)(E.y5t, { children: e.children })
    });
}
function G(e) {
    return (0, r.jsx)(_.zx, {
        focusProps: e.focusProps,
        'aria-label': I.intl.string(I.t.cpT0Cg),
        look: _.zx.Looks.BLANK,
        size: _.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [T.closeWithCircleBackground]: e.withCircleBackground }),
        className: o()(e.className, {
            [T.hideOnFullscreen]: e.hideOnFullscreen,
            [T.close]: !e.withCircleBackground
        }),
        children: (0, r.jsx)(u.D, {
            size: 'md',
            color: 'currentColor',
            className: o()(e.innerClassName, T.closeIcon)
        })
    });
}
function B(e) {
    var { className: t, scrollerRef: n } = e,
        i = R(e, ['className', 'scrollerRef']);
    return (0, r.jsx)(
        m.Tv,
        A(
            {
                className: t,
                ref: n
            },
            i
        )
    );
}
