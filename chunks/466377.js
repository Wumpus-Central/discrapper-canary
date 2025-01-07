r.d(n, {
    Cg: function () {
        return i;
    },
    Y0: function () {
        return C;
    },
    YA: function () {
        return w;
    },
    hz: function () {
        return D;
    },
    mz: function () {
        return L;
    },
    ol: function () {
        return x;
    },
    xB: function () {
        return R;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(990547),
    d = r(748780),
    f = r(143450),
    _ = r(186325),
    h = r(693789),
    p = r(507274),
    m = r(84735),
    g = r(261833),
    E = r(742746),
    v = r(147479),
    I = r(481060),
    T = r(600164),
    b = r(602091),
    y = r(231338),
    S = r(388032),
    A = r(564952);
!(function (e) {
    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.LARGE = 'large'), (e.DYNAMIC = 'dynamic');
})(i || (i = {}));
let N = Object.freeze({
    small: A.small,
    medium: A.medium,
    large: A.large,
    dynamic: null
});
function C(e) {
    var n;
    let { transitionState: r, children: i, size: o = 'small', role: h = 'dialog', className: g, fullscreenOnMobile: E = !0, hideShadow: v = !1, onAnimationEnd: I = y.dG, returnRef: T, ...S } = e,
        C = r === b.Dv.ENTERING || r === b.Dv.ENTERED,
        { reducedMotion: R } = s.useContext(_.S),
        O = (0, f.q)(
            {
                opacity: C ? 1 : 0,
                transform: C || R.enabled ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: C ? 300 : 100,
                    easing: C ? d.Z.Easing.inOut(d.Z.Easing.back()) : d.Z.Easing.quad,
                    clamp: !0
                },
                onRest: I
            },
            'animate-always'
        ),
        D = s.useRef(null),
        L = null != S['aria-label'],
        x = null != S['aria-labelledby'],
        w = s.useId(),
        P = null !== (n = S['aria-labelledby']) && void 0 !== n ? n : w,
        M = s.useMemo(
            () => ({
                headerId: P,
                headerIdIsManaged: x
            }),
            [P, x]
        );
    return (0, a.jsx)(b.zM.Provider, {
        value: M,
        children: (0, a.jsx)(p.V, {
            className: A.focusLock,
            role: h,
            returnRef: T,
            impressionType: c.ImpressionTypes.MODAL,
            'aria-labelledby': L ? void 0 : M.headerId,
            ...S,
            children: (0, a.jsx)(u.animated.div, {
                className: l()(g, A.root, N[o], {
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
    var n, r, i, o, u;
    let { headerId: c, headerIdIsManaged: d } = s.useContext(b.zM);
    return (0, a.jsx)(T.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (n = e.direction) && void 0 !== n ? n : T.Z.Direction.HORIZONTAL,
        justify: null !== (r = e.justify) && void 0 !== r ? r : T.Z.Justify.START,
        align: null !== (i = e.align) && void 0 !== i ? i : T.Z.Align.CENTER,
        wrap: null !== (o = e.wrap) && void 0 !== o ? o : T.Z.Wrap.NO_WRAP,
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
    let { className: n, children: r, scrollerRef: i, scrollbarType: s, ...o } = e,
        u = O(s);
    return (0, a.jsx)(u, {
        className: l()(A.content, n),
        ref: i,
        ...o,
        children: (0, a.jsx)(I.HeadingLevel, { children: r })
    });
}
function L(e) {
    var n, r, i, s, o;
    return (0, a.jsx)(T.Z, {
        grow: 0,
        shrink: 0,
        direction: null !== (n = e.direction) && void 0 !== n ? n : T.Z.Direction.HORIZONTAL_REVERSE,
        justify: null !== (r = e.justify) && void 0 !== r ? r : T.Z.Justify.START,
        align: null !== (i = e.align) && void 0 !== i ? i : T.Z.Align.STRETCH,
        wrap: null !== (s = e.wrap) && void 0 !== s ? s : T.Z.Wrap.NO_WRAP,
        className: l()(A.footer, e.className, { [A.footerSeparator]: null === (o = e.separator) || void 0 === o || o }),
        children: (0, a.jsx)(I.HeadingLevel, { children: e.children })
    });
}
function x(e) {
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
