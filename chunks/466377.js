r.d(n, {
    Cg: function () {
        return i;
    },
    Y0: function () {
        return N;
    },
    YA: function () {
        return w;
    },
    hz: function () {
        return D;
    },
    mz: function () {
        return x;
    },
    ol: function () {
        return L;
    },
    xB: function () {
        return R;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(990547),
    d = r(748780),
    f = r(143450),
    p = r(186325),
    h = r(693789),
    _ = r(507274),
    m = r(84735),
    g = r(261833),
    E = r(742746),
    v = r(147479),
    y = r(481060),
    b = r(600164),
    I = r(602091),
    T = r(231338),
    S = r(388032),
    A = r(564952);
!(function (e) {
    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic');
})(i || (i = {}));
let C = Object.freeze({
    small: A.small,
    medium: A.medium,
    large: A.large,
    dynamic: null
});
function N(e) {
    var n;
    let { transitionState: r, children: i, size: s = 'small', role: h = 'dialog', className: g, fullscreenOnMobile: E = !0, hideShadow: v = !1, onAnimationEnd: y = T.dG, returnRef: b, ...S } = e,
        N = r === I.Dv.ENTERING || r === I.Dv.ENTERED,
        { reducedMotion: R } = o.useContext(p.S),
        O = (0, f.q)(
            {
                opacity: N ? 1 : 0,
                transform: N || R.enabled ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: N ? 300 : 100,
                    easing: N ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
                    clamp: !0
                },
                onRest: y
            },
            'animate-always'
        ),
        D = o.useRef(null),
        x = null != S['aria-label'],
        L = null != S['aria-labelledby'],
        w = o.useId(),
        P = null !== (n = S['aria-labelledby']) && void 0 !== n ? n : w,
        M = o.useMemo(
            () => ({
                headerId: P,
                headerIdIsManaged: L
            }),
            [P, L]
        );
    return (0, a.jsx)(I.zM.Provider, {
        value: M,
        children: (0, a.jsx)(_.V, {
            className: A.focusLock,
            role: h,
            returnRef: b,
            impressionType: c.ImpressionTypes.MODAL,
            'aria-labelledby': x ? void 0 : M.headerId,
            ...S,
            children: (0, a.jsx)(u.animated.div, {
                className: l()(g, A.root, C[s], {
                    [A.fullscreenOnMobile]: E,
                    [A.rootWithShadow]: !v
                }),
                ref: D,
                style: O,
                children: (0, a.jsx)(m.J, {
                    containerRef: D,
                    children: i
                })
            })
        })
    });
}
function R(e) {
    var n, r, i, s, u;
    let { headerId: c, headerIdIsManaged: d } = o.useContext(I.zM);
    return (0, a.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (n = e.direction) && void 0 !== n ? n : b.Z.Direction.HORIZONTAL,
        justify: null !== (r = e.justify) && void 0 !== r ? r : b.Z.Justify.START,
        align: null !== (i = e.align) && void 0 !== i ? i : b.Z.Align.CENTER,
        wrap: null !== (s = e.wrap) && void 0 !== s ? s : b.Z.Wrap.NO_WRAP,
        className: l()(A.header, e.className, { [A.separator]: null === (u = e.separator) || void 0 === u || u }),
        id: d ? void 0 : c,
        children: e.children
    });
}
function O(e) {
    switch (null != e ? e : 'thin') {
        case 'auto':
            return v.yW;
        case 'none':
            return v.xV;
        default:
            return v.h2;
    }
}
function D(e) {
    let { className: n, children: r, scrollerRef: i, scrollbarType: o, ...s } = e,
        u = O(o);
    return (0, a.jsx)(u, {
        className: l()(A.content, n),
        ref: i,
        ...s,
        children: (0, a.jsx)(y.HeadingLevel, { children: r })
    });
}
function x(e) {
    var n, r, i, o, s;
    return (0, a.jsx)(b.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (n = e.direction) && void 0 !== n ? n : b.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (r = e.justify) && void 0 !== r ? r : b.Z.Justify.START,
        align: null !== (i = e.align) && void 0 !== i ? i : b.Z.Align.STRETCH,
        wrap: null !== (o = e.wrap) && void 0 !== o ? o : b.Z.Wrap.NO_WRAP,
        className: l()(A.footer, e.className, { [A.footerSeparator]: null === (s = e.separator) || void 0 === s || s }),
        children: (0, a.jsx)(y.HeadingLevel, { children: e.children })
    });
}
function L(e) {
    return (0, a.jsx)(h.zx, {
        focusProps: e.focusProps,
        'aria-label': S.intl.string(S.t.cpT0Cg),
        look: h.zx.Looks.BLANK,
        size: h.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: l()(e.innerClassName, { [A.closeWithCircleBackground]: e.withCircleBackground }),
        className: l()(e.className, {
            [A.hideOnFullscreen]: e.hideOnFullscreen,
            [A.close]: !e.withCircleBackground
        }),
        children: (0, a.jsx)(g.D, {
            size: 'md',
            color: 'currentColor',
            className: l()(e.innerClassName, A.closeIcon)
        })
    });
}
function w(e) {
    let { className: n, scrollerRef: r, ...i } = e;
    return (0, a.jsx)(E.Tv, {
        className: n,
        ref: r,
        ...i
    });
}
