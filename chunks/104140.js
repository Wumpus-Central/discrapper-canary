r.d(n, {
    a: function () {
        return j;
    }
});
var i,
    a = r(411104);
var o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(96355);
var f = r(47759),
    p = r.n(f),
    h = r(642128),
    _ = r(772848),
    m = r(722770),
    g = r(846519),
    E = r(215569),
    v = r(481060),
    y = r(540059),
    b = r(11868);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = 10800000,
    S = 18000000,
    A = 16,
    C = 2,
    N = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    R = {
        duration: 150,
        friction: 3
    },
    O = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    D = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    x = (e) => {
        let n = (0, v.useToken)(v.tokens.modules.guildbar.AVATAR_SIZE),
            r = (0, v.useToken)(v.tokens.modules.guildbar.FOLDER_SIZE);
        return e ? r : n;
    },
    L = (e) => e / 2,
    w = (e) => (e ? 2 : 4),
    P = (e) => {
        switch (e) {
            case 52:
                return 'M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z';
            case 48:
                return 'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z';
            case 44:
                return 'M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z';
            case 40:
                return 'M0 17.4545C0 11.3449 0 8.29005 1.18902 5.95647C2.23491 3.90379 3.90379 2.23491 5.95647 1.18902C8.29005 0 11.3449 0 17.4545 0H22.5455C28.6551 0 31.71 0 34.0435 1.18902C36.0962 2.23491 37.7651 3.90379 38.811 5.95647C40 8.29005 40 11.3449 40 17.4545V22.5455C40 28.6551 40 31.71 38.811 34.0435C37.7651 36.0962 36.0962 37.7651 34.0435 38.811C31.71 40 28.6551 40 22.5455 40H17.4545C11.3449 40 8.29005 40 5.95647 38.811C3.90379 37.7651 2.23491 36.0962 1.18902 34.0435C0 31.71 0 28.6551 0 22.5455V17.4545Z';
            default:
                throw Error('Unsupported BlobMask squicle size: '.concat(e));
        }
    },
    M = (e) => {
        switch (e) {
            case 48:
                return 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z';
            case 44:
                return 'M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z';
            case 40:
                return 'M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z';
            default:
                throw Error('Unsupported BlobMask circle size: '.concat(e));
        }
    },
    k = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null,
    U = new Map();
function B(e, n) {
    let r = ''.concat(e, '-').concat(n);
    if (U.has(r)) return U.get(r);
    let i = G(e, n);
    return U.set(r, i), i;
}
function G(e, n) {
    return k ? (0, d.interpolate)(M(e), P(n), { maxSegmentLength: 1.5 }) : Z;
}
function Z(e) {
    return e.toString();
}
class F extends l.Component {
    componentDidMount() {
        this.forceUpdate();
    }
    componentWillAppear(e) {
        e();
    }
    componentWillEnter(e) {
        e();
    }
    componentWillLeave(e) {
        this.timeoutId = setTimeout(e, 300);
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }
    render() {
        let { children: e, className: n, animatedStyle: r } = this.props;
        return (0, s.jsx)(h.animated.div, {
            className: n,
            style: r,
            children: e
        });
    }
    constructor(...e) {
        super(...e), I(this, 'timeoutId', void 0);
    }
}
function V(e) {
    let { selected: n, upperBadge: r, lowerBadge: i, highlight: a } = e;
    return n || null != r || null != i || !!a;
}
function j(e) {
    let {
            selected: n = !1,
            lowerBadgeSize: r = {
                width: A,
                height: A
            },
            highlight: i = !1,
            ...a
        } = e,
        o = (0, y.Q3)('BlobMask'),
        l = !!a.isFolder,
        u = x(!1),
        c = x(l),
        d = L(c),
        f = w(o);
    return (0, s.jsx)(H, {
        ...a,
        selected: n,
        lowerBadgeSize: r,
        highlight: i,
        isVisualRefreshEnabled: o,
        baseViewBoxSize: u,
        viewBoxSize: c,
        badgeMaskSize: d,
        badgeMaskStroke: f
    });
}
class H extends l.Component {
    static getDerivedStateFromProps(e, n) {
        let { hasRenderedBadge: r, upperBadgeMask: i, lowerBadgeMask: a, borderRadiusMask: o, renderComplex: s } = n,
            { upperBadge: l, lowerBadge: u } = e,
            c = !1;
        return (
            ((null != l && null == i) || (null != u && null == a)) && ((c = !0), (r = !0), (i = new h.Controller({ spring: 0 })), (a = new h.Controller({ spring: 0 }))),
            V(e) && null == o && ((c = !0), (o = new h.Controller({ spring: 0 }))),
            !s && V(e) && ((c = !0), (s = !0)),
            c
                ? {
                      hasRenderedBadge: r,
                      lowerBadgeMask: a,
                      upperBadgeMask: i,
                      borderRadiusMask: o,
                      renderComplex: s
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: n, upperBadge: r } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: o } = this.state;
        null == i ||
            i
                .update({
                    spring: e ? 1 : 0,
                    immediate: !0
                })
                .start(),
            null == a ||
                a
                    .update({
                        spring: null != n ? 1 : 0,
                        immediate: !0
                    })
                    .start(),
            null == o ||
                o
                    .update({
                        spring: null != r ? 1 : 0,
                        immediate: !0
                    })
                    .start();
    }
    componentWillUnmount() {
        let { borderRadiusMask: e, lowerBadgeMask: n, upperBadgeMask: r } = this.state;
        this.timeout.stop(), null == e || e.dispose(), null == n || n.dispose(), null == r || r.dispose();
    }
    componentDidUpdate(e) {
        let { selected: n, lowerBadge: r, upperBadge: i } = this.props,
            { borderRadiusMask: a, lowerBadgeMask: o, upperBadgeMask: s, renderComplex: l } = this.state;
        n && !e.selected
            ? null == a ||
              a
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: N
                  })
                  .start()
            : !n &&
              e.selected &&
              (null == a ||
                  a
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: R
                      })
                      .start()),
            null != r && null == e.lowerBadge
                ? null == o ||
                  o
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: O
                      })
                      .start()
                : null == r &&
                  null != e.lowerBadge &&
                  (null == o ||
                      o
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: D
                          })
                          .start()),
            null != i && null == e.upperBadge
                ? null == s ||
                  s
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: O
                      })
                      .start()
                : null == i &&
                  null != e.upperBadge &&
                  (null == s ||
                      s
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: D
                          })
                          .start()),
            !l || V(this.props) || this.timeout.isStarted() ? V(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(p()(T, S), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A + w(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: i } = e.springs;
        return i.to([0, 1], [r, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * n, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: n } = this.props;
        if (null == e) return;
        let { spring: r } = e.springs,
            i = (null == n ? void 0 : n.width) != null ? n.width : A,
            a = (null == n ? void 0 : n.height) != null ? n.height : A;
        return {
            opacity: r.to([0, 0.5, 1], [0, 0, 1]),
            transform: r.to((e) => 'translate('.concat(i - e * i, 'px, ').concat(a - e * a, 'px)'))
        };
    }
    getUpperBadgeStyles() {
        let { upperBadgeMask: e } = this.state;
        if (null == e) return;
        let { spring: n } = e.springs;
        return {
            opacity: n.to([0, 0.5, 1], [0, 0, 1]),
            transform: n.to((e) => 'translate('.concat(16 - 16 * e, 'px, ').concat(-1 * (16 - 16 * e), 'px)'))
        };
    }
    getPathInterpolation() {
        var e;
        return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(this.interpolator);
    }
    render() {
        let { children: e, className: n, innerClassName: r, lowerBadge: i, lowerBadgeSize: a, style: o, upperBadge: u, highlight: d, viewBoxSize: f, badgeMaskSize: p, badgeMaskStroke: _ } = this.props,
            { maskId: g, lowerBadgeMask: v, upperBadgeMask: y, focused: I, hasRenderedBadge: T, renderComplex: S } = this.state;
        if (!S)
            return (0, s.jsx)(
                'div',
                {
                    className: c()(n, {
                        [b.wrapperSimple]: !0,
                        [b.simpleFocused]: I
                    }),
                    style: o,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, s.jsx)(
                        'svg',
                        {
                            width: f,
                            height: f,
                            viewBox: '0 0 '.concat(f, ' ').concat(f),
                            className: b.svg,
                            overflow: 'visible',
                            children: (0, s.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: r,
                                    width: f,
                                    height: f,
                                    children: e
                                },
                                'foreign-object'
                            )
                        },
                        'svg'
                    )
                },
                'wrapper'
            );
        let N = ''.concat(g, '-upper_badge_masks'),
            R = ''.concat(g, '-lower_badge_masks'),
            O = ''.concat(g, '-blob_mask'),
            D = ''.concat(g, '-stroke_mask'),
            x = ''.concat(g, '-highlight_mask'),
            L = (null == a ? void 0 : a.width) != null ? a.width : A,
            w = (null == a ? void 0 : a.height) != null ? a.height : A;
        return (0, s.jsxs)(
            'div',
            {
                className: c()(n, b.wrapper),
                style: o,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, s.jsxs)(
                        'svg',
                        {
                            width: f,
                            height: f,
                            viewBox: '0 0 '.concat(f, ' ').concat(f),
                            className: c()(b.svg, { [b.noContain]: d }),
                            overflow: 'visible',
                            children: [
                                (0, s.jsxs)('defs', {
                                    children: [
                                        d &&
                                            (0, s.jsx)(h.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: x
                                            }),
                                        (0, s.jsx)(h.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: O
                                        }),
                                        T
                                            ? (0, s.jsx)(h.animated.rect, {
                                                  id: N,
                                                  x: f - p + _,
                                                  y: -_,
                                                  width: p,
                                                  height: p,
                                                  rx: p / 2,
                                                  ry: p / 2,
                                                  transform: this.getBadgePositionInterpolation(y, -1)
                                              })
                                            : null,
                                        T
                                            ? (0, s.jsx)(h.animated.rect, {
                                                  id: R,
                                                  x: f - (L + 2 * _) + _,
                                                  y: f - (w + 2 * _) + _,
                                                  width: L + 2 * _,
                                                  height: w + 2 * _,
                                                  rx: p / 2,
                                                  ry: p / 2,
                                                  transform: this.getBadgePositionInterpolation(v, 1, L + _)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsxs)('mask', {
                                    id: g,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: f,
                                    height: f,
                                    children: [
                                        d &&
                                            (0, s.jsx)('use', {
                                                href: '#'.concat(x),
                                                fill: 'black'
                                            }),
                                        (0, s.jsx)('use', {
                                            href: '#'.concat(O),
                                            fill: 'white',
                                            className: c()({ [b.isHighlighted]: d })
                                        }),
                                        T
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)('use', {
                                                          href: '#'.concat(N),
                                                          fill: 'black'
                                                      }),
                                                      (0, s.jsx)('use', {
                                                          href: '#'.concat(R),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                T
                                    ? (0, s.jsxs)('mask', {
                                          id: D,
                                          children: [
                                              (0, s.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, s.jsx)('use', {
                                                  href: '#'.concat(N),
                                                  fill: 'black'
                                              }),
                                              (0, s.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                I
                                    ? (0, s.jsxs)(l.Fragment, {
                                          children: [
                                              (0, s.jsx)('g', {
                                                  className: b.focusStroke,
                                                  mask: 'url(#'.concat(D, ')'),
                                                  children: (0, s.jsx)('use', { href: '#'.concat(O) })
                                              }),
                                              (0, s.jsxs)('g', {
                                                  className: b.focusFill,
                                                  children: [null != u ? (0, s.jsx)('use', { href: '#'.concat(N) }) : null, null != i ? (0, s.jsx)('use', { href: '#'.concat(R) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                d &&
                                    (0, s.jsx)(h.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: m.Z.BRAND_500,
                                        'stroke-width': C,
                                        className: b.highlight,
                                        mask: 'url(#'.concat(D, ')')
                                    }),
                                (0, s.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(g, ')'),
                                        x: 0,
                                        y: 0,
                                        className: r,
                                        width: f,
                                        height: f,
                                        children: e
                                    },
                                    'foreign-object'
                                )
                            ]
                        },
                        'svg'
                    ),
                    (0, s.jsxs)(E.W, {
                        component: l.Fragment,
                        children: [
                            null != i
                                ? (0, s.jsx)(
                                      F,
                                      {
                                          className: b.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: i
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != u
                                ? (0, s.jsx)(
                                      F,
                                      {
                                          className: b.upperBadge,
                                          animatedStyle: this.getUpperBadgeStyles(),
                                          children: u
                                      },
                                      'upper-badge'
                                  )
                                : null
                        ]
                    })
                ]
            },
            'wrapper'
        );
    }
    constructor(...e) {
        super(...e),
            I(this, 'timeout', new g.V7()),
            I(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, _.Z)(),
                focused: !1
            }),
            I(this, 'interpolator', B(this.props.baseViewBoxSize, this.props.viewBoxSize)),
            I(this, 'handleTimeout', () => {
                this.timeout.stop(), this.setState({ renderComplex: !1 });
            }),
            I(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            I(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            });
    }
}
