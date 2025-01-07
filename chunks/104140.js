r.d(n, {
    a: function () {
        return V;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(96355);
var d = r(47759),
    f = r.n(d),
    _ = r(666912),
    h = r(772848),
    p = r(722770),
    m = r(846519),
    g = r(215569),
    E = r(540059),
    v = r(11868);
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
    b = 18000000,
    y = 16,
    S = 2,
    A = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    N = {
        duration: 150,
        friction: 3
    },
    C = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    R = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    O = (e, n) => (e ? (n ? 52 : 44) : 48),
    D = (e) => (e ? 20 : 24),
    L = (e) => (e ? 2 : 4),
    x = (e, n) => (e ? (n ? 'M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z' : 'M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z') : 'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z'),
    w = (e) => (e ? 'M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z' : 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z'),
    P = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null,
    M = (e, n) => ''.concat(e, '-').concat(n),
    k = new Map();
function U(e, n) {
    if (k.has(M(e, n))) return k.get(M(e, n));
    let r = B(e, n);
    return k.set(M(e, n), r), r;
}
function B(e, n) {
    return P ? (0, c.interpolate)(w(e), x(e, n), { maxSegmentLength: 1.5 }) : G;
}
function G(e) {
    return e.toString();
}
class Z extends o.Component {
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
        return (0, s.jsx)(_.animated.div, {
            className: n,
            style: r,
            children: e
        });
    }
    constructor(...e) {
        super(...e), I(this, 'timeoutId', void 0);
    }
}
function F(e) {
    let { selected: n, upperBadge: r, lowerBadge: i, highlight: a } = e;
    return n || null != r || null != i || !!a;
}
function V(e) {
    let {
            selected: n = !1,
            lowerBadgeSize: r = {
                width: y,
                height: y
            },
            highlight: i = !1,
            ...a
        } = e,
        o = (0, E.Q3)('BlobMask');
    return (0, s.jsx)(j, {
        ...a,
        selected: n,
        lowerBadgeSize: r,
        highlight: i,
        isVisualRefreshEnabled: o
    });
}
class j extends o.Component {
    static getDerivedStateFromProps(e, n) {
        let { hasRenderedBadge: r, upperBadgeMask: i, lowerBadgeMask: a, borderRadiusMask: s, renderComplex: o } = n,
            { upperBadge: l, lowerBadge: u } = e,
            c = !1;
        return (
            ((null != l && null == i) || (null != u && null == a)) && ((c = !0), (r = !0), (i = new _.Controller({ spring: 0 })), (a = new _.Controller({ spring: 0 }))),
            F(e) && null == s && ((c = !0), (s = new _.Controller({ spring: 0 }))),
            !o && F(e) && ((c = !0), (o = !0)),
            c
                ? {
                      hasRenderedBadge: r,
                      lowerBadgeMask: a,
                      upperBadgeMask: i,
                      borderRadiusMask: s,
                      renderComplex: o
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: n, upperBadge: r } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: s } = this.state;
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
            null == s ||
                s
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
            { borderRadiusMask: a, lowerBadgeMask: s, upperBadgeMask: o, renderComplex: l } = this.state;
        n && !e.selected
            ? null == a ||
              a
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: A
                  })
                  .start()
            : !n &&
              e.selected &&
              (null == a ||
                  a
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: N
                      })
                      .start()),
            null != r && null == e.lowerBadge
                ? null == s ||
                  s
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: C
                      })
                      .start()
                : null == r &&
                  null != e.lowerBadge &&
                  (null == s ||
                      s
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: R
                          })
                          .start()),
            null != i && null == e.upperBadge
                ? null == o ||
                  o
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: C
                      })
                      .start()
                : null == i &&
                  null != e.upperBadge &&
                  (null == o ||
                      o
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: R
                          })
                          .start()),
            !l || F(this.props) || this.timeout.isStarted() ? F(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(f()(T, b), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y + L(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: i } = e.springs;
        return i.to([0, 1], [r, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * n, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: n } = this.props;
        if (null == e) return;
        let { spring: r } = e.springs,
            i = (null == n ? void 0 : n.width) != null ? n.width : y,
            a = (null == n ? void 0 : n.height) != null ? n.height : y;
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
        let { children: e, className: n, innerClassName: r, lowerBadge: i, lowerBadgeSize: a, style: l, upperBadge: c, highlight: d } = this.props,
            { maskId: f, lowerBadgeMask: h, upperBadgeMask: m, focused: E, hasRenderedBadge: I, renderComplex: T } = this.state,
            b = O(this.props.isVisualRefreshEnabled, !!this.props.isFolder),
            A = D(this.props.isVisualRefreshEnabled),
            N = L(this.props.isVisualRefreshEnabled);
        if (!T)
            return (0, s.jsx)(
                'div',
                {
                    className: u()(n, {
                        [v.wrapperSimple]: !0,
                        [v.simpleFocused]: E
                    }),
                    style: l,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, s.jsx)(
                        'svg',
                        {
                            width: b,
                            height: b,
                            viewBox: '0 0 '.concat(b, ' ').concat(b),
                            className: v.svg,
                            overflow: 'visible',
                            children: (0, s.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: r,
                                    width: b,
                                    height: b,
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
        let C = ''.concat(f, '-upper_badge_masks'),
            R = ''.concat(f, '-lower_badge_masks'),
            x = ''.concat(f, '-blob_mask'),
            w = ''.concat(f, '-stroke_mask'),
            P = ''.concat(f, '-highlight_mask'),
            M = (null == a ? void 0 : a.width) != null ? a.width : y,
            k = (null == a ? void 0 : a.height) != null ? a.height : y;
        return (0, s.jsxs)(
            'div',
            {
                className: u()(n, v.wrapper),
                style: l,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, s.jsxs)(
                        'svg',
                        {
                            width: b,
                            height: b,
                            viewBox: '0 0 '.concat(b, ' ').concat(b),
                            className: u()(v.svg, { [v.noContain]: d }),
                            overflow: 'visible',
                            children: [
                                (0, s.jsxs)('defs', {
                                    children: [
                                        d &&
                                            (0, s.jsx)(_.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: P
                                            }),
                                        (0, s.jsx)(_.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: x
                                        }),
                                        I
                                            ? (0, s.jsx)(_.animated.rect, {
                                                  id: C,
                                                  x: b - A + N,
                                                  y: -N,
                                                  width: A,
                                                  height: A,
                                                  rx: A / 2,
                                                  ry: A / 2,
                                                  transform: this.getBadgePositionInterpolation(m, -1)
                                              })
                                            : null,
                                        I
                                            ? (0, s.jsx)(_.animated.rect, {
                                                  id: R,
                                                  x: b - (M + 2 * N) + N,
                                                  y: b - (k + 2 * N) + N,
                                                  width: M + 2 * N,
                                                  height: k + 2 * N,
                                                  rx: A / 2,
                                                  ry: A / 2,
                                                  transform: this.getBadgePositionInterpolation(h, 1, M + N)
                                              })
                                            : null
                                    ]
                                }),
                                (0, s.jsxs)('mask', {
                                    id: f,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: b,
                                    height: b,
                                    children: [
                                        d &&
                                            (0, s.jsx)('use', {
                                                href: '#'.concat(P),
                                                fill: 'black'
                                            }),
                                        (0, s.jsx)('use', {
                                            href: '#'.concat(x),
                                            fill: 'white',
                                            className: u()({ [v.isHighlighted]: d })
                                        }),
                                        I
                                            ? (0, s.jsxs)(s.Fragment, {
                                                  children: [
                                                      (0, s.jsx)('use', {
                                                          href: '#'.concat(C),
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
                                I
                                    ? (0, s.jsxs)('mask', {
                                          id: w,
                                          children: [
                                              (0, s.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, s.jsx)('use', {
                                                  href: '#'.concat(C),
                                                  fill: 'black'
                                              }),
                                              (0, s.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                E
                                    ? (0, s.jsxs)(o.Fragment, {
                                          children: [
                                              (0, s.jsx)('g', {
                                                  className: v.focusStroke,
                                                  mask: 'url(#'.concat(w, ')'),
                                                  children: (0, s.jsx)('use', { href: '#'.concat(x) })
                                              }),
                                              (0, s.jsxs)('g', {
                                                  className: v.focusFill,
                                                  children: [null != c ? (0, s.jsx)('use', { href: '#'.concat(C) }) : null, null != i ? (0, s.jsx)('use', { href: '#'.concat(R) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                d &&
                                    (0, s.jsx)(_.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: p.Z.BRAND_500,
                                        'stroke-width': S,
                                        className: v.highlight,
                                        mask: 'url(#'.concat(w, ')')
                                    }),
                                (0, s.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(f, ')'),
                                        x: 0,
                                        y: 0,
                                        className: r,
                                        width: b,
                                        height: b,
                                        children: e
                                    },
                                    'foreign-object'
                                )
                            ]
                        },
                        'svg'
                    ),
                    (0, s.jsxs)(g.W, {
                        component: o.Fragment,
                        children: [
                            null != i
                                ? (0, s.jsx)(
                                      Z,
                                      {
                                          className: v.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: i
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != c
                                ? (0, s.jsx)(
                                      Z,
                                      {
                                          className: v.upperBadge,
                                          animatedStyle: this.getUpperBadgeStyles(),
                                          children: c
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
            I(this, 'timeout', new m.V7()),
            I(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, h.Z)(),
                focused: !1
            }),
            I(this, 'interpolator', U(!!this.props.isVisualRefreshEnabled, !!this.props.isFolder)),
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
