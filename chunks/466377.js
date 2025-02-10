n.d(t, {
    Cg: () => S,
    Y0: () => N,
    YA: () => x,
    hz: () => O,
    mz: () => D,
    ol: () => L,
    xB: () => C
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(990547),
    u = n(748780),
    c = n(143450),
    d = n(186325),
    f = n(693789),
    _ = n(507274),
    p = n(84735),
    h = n(261833),
    m = n(742746),
    g = n(147479),
    E = n(481060),
    v = n(600164),
    y = n(602091),
    I = n(231338),
    T = n(388032),
    b = n(968138),
    S = (function (e) {
        return (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic'), e;
    })({});
let A = Object.freeze({
    small: b.small,
    medium: b.medium,
    large: b.large,
    dynamic: null
});
function N(e) {
    var t;
    let { transitionState: n, children: a, size: f = 'small', role: h = 'dialog', className: m, fullscreenOnMobile: g = !0, hideShadow: E = !1, onAnimationEnd: v = I.dG, returnRef: T, animation: S = 'default', ...N } = e,
        C = n === y.Dv.ENTERING || n === y.Dv.ENTERED,
        { reducedMotion: R } = r.useContext(d.S),
        O = (0, c.q)(
            {
                opacity: C ? 1 : 0,
                transform: C || R.enabled || 'subtle' === S ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: C ? 300 : 100,
                    easing: C ? u.Z.Easing.inOut(u.Z.Easing.back()) : u.Z.Easing.quad,
                    clamp: !0
                },
                onRest: v
            },
            'animate-always'
        ),
        D = r.useRef(null),
        L = null != N['aria-label'],
        x = null != N['aria-labelledby'],
        P = r.useId(),
        w = null !== (t = N['aria-labelledby']) && void 0 !== t ? t : P,
        M = r.useMemo(
            () => ({
                headerId: w,
                headerIdIsManaged: x
            }),
            [w, x]
        );
    return (0, i.jsx)(y.zM.Provider, {
        value: M,
        children: (0, i.jsx)(_.V, {
            className: b.focusLock,
            role: h,
            returnRef: T,
            impressionType: l.ImpressionTypes.MODAL,
            'aria-labelledby': L ? void 0 : M.headerId,
            ...N,
            children: (0, i.jsx)(o.animated.div, {
                className: s()(m, b.root, A[f], {
                    [b.fullscreenOnMobile]: g,
                    [b.rootWithShadow]: !E
                }),
                ref: D,
                style: O,
                children: (0, i.jsx)(p.J, {
                    containerRef: D,
                    children: a
                })
            })
        })
    });
}
function C(e) {
    var t, n, a, o, l;
    let { headerId: u, headerIdIsManaged: c } = r.useContext(y.zM);
    return (0, i.jsx)(v.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : v.Z.Direction.HORIZONTAL,
        justify: null !== (n = e.justify) && void 0 !== n ? n : v.Z.Justify.START,
        align: null !== (a = e.align) && void 0 !== a ? a : v.Z.Align.CENTER,
        wrap: null !== (o = e.wrap) && void 0 !== o ? o : v.Z.Wrap.NO_WRAP,
        className: s()(b.header, e.className, { [b.separator]: null === (l = e.separator) || void 0 === l || l }),
        id: c ? void 0 : u,
        children: e.children
    });
}
function R(e) {
    switch (null != e ? e : 'thin') {
        case 'auto':
            return g.yW;
        case 'none':
            return g.xV;
        default:
            return g.h2;
    }
}
function O(e) {
    let { className: t, children: n, scrollerRef: r, scrollbarType: a, ...o } = e,
        l = R(a);
    return (0, i.jsx)(l, {
        className: s()(b.content, t),
        ref: r,
        ...o,
        children: (0, i.jsx)(E.y5t, { children: n })
    });
}
function D(e) {
    var t, n, r, a, o;
    return (0, i.jsx)(v.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (t = e.direction) && void 0 !== t ? t : v.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (n = e.justify) && void 0 !== n ? n : v.Z.Justify.START,
        align: null !== (r = e.align) && void 0 !== r ? r : v.Z.Align.STRETCH,
        wrap: null !== (a = e.wrap) && void 0 !== a ? a : v.Z.Wrap.NO_WRAP,
        className: s()(b.footer, e.className, { [b.footerSeparator]: null === (o = e.separator) || void 0 === o || o }),
        children: (0, i.jsx)(E.y5t, { children: e.children })
    });
}
function L(e) {
    return (0, i.jsx)(f.zx, {
        focusProps: e.focusProps,
        'aria-label': T.intl.string(T.t.cpT0Cg),
        look: f.zx.Looks.BLANK,
        size: f.zx.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: s()(e.innerClassName, { [b.closeWithCircleBackground]: e.withCircleBackground }),
        className: s()(e.className, {
            [b.hideOnFullscreen]: e.hideOnFullscreen,
            [b.close]: !e.withCircleBackground
        }),
        children: (0, i.jsx)(h.D, {
            size: 'md',
            color: 'currentColor',
            className: s()(e.innerClassName, b.closeIcon)
        })
    });
}
function x(e) {
    let { className: t, scrollerRef: n, ...r } = e;
    return (0, i.jsx)(m.Tv, {
        className: t,
        ref: n,
        ...r
    });
}
