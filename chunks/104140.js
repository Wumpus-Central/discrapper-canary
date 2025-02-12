n.d(t, { a: () => Z }), n(411104), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(96355),
    u = n(47759),
    c = n.n(u),
    d = n(642128),
    f = n(772848),
    _ = n(722770),
    p = n(846519),
    h = n(215569),
    m = n(481060),
    g = n(540059),
    E = n(304564);
function v(e, t, n) {
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
let y = 10800000,
    I = 18000000,
    T = 16,
    b = 2,
    S = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    A = {
        duration: 150,
        friction: 3
    },
    N = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    C = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    R = (e) => {
        let t = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
            n = (0, m.dQu)(m.TVs.modules.guildbar.FOLDER_SIZE);
        return e ? n : t;
    },
    O = (e) => e / 2,
    D = (e) => (e ? 2 : 4),
    L = (e) => {
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
    x = (e) => {
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
    P = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null,
    w = new Map();
function M(e, t) {
    let n = ''.concat(e, '-').concat(t);
    if (w.has(n)) return w.get(n);
    let i = k(e, t);
    return w.set(n, i), i;
}
function k(e, t) {
    return P ? (0, l.interpolate)(x(e), L(t), { maxSegmentLength: 1.5 }) : U;
}
function U(e) {
    return e.toString();
}
class G extends a.Component {
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
        let { children: e, className: t, animatedStyle: n } = this.props;
        return (0, r.jsx)(d.animated.div, {
            className: t,
            style: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e), v(this, 'timeoutId', void 0);
    }
}
function B(e) {
    let { selected: t, upperBadge: n, lowerBadge: i, highlight: r } = e;
    return t || null != n || null != i || !!r;
}
function Z(e) {
    let {
            selected: t = !1,
            lowerBadgeSize: n = {
                width: T,
                height: T
            },
            highlight: i = !1,
            ...a
        } = e,
        s = (0, g.Q3)('BlobMask'),
        o = !!a.isFolder,
        l = R(!1),
        u = R(o),
        c = O(u),
        d = D(s);
    return (0, r.jsx)(F, {
        ...a,
        selected: t,
        lowerBadgeSize: n,
        highlight: i,
        isVisualRefreshEnabled: s,
        baseViewBoxSize: l,
        viewBoxSize: u,
        badgeMaskSize: c,
        badgeMaskStroke: d
    });
}
class F extends a.Component {
    static getDerivedStateFromProps(e, t) {
        let { hasRenderedBadge: n, upperBadgeMask: i, lowerBadgeMask: r, borderRadiusMask: a, renderComplex: s } = t,
            { upperBadge: o, lowerBadge: l } = e,
            u = !1;
        return (
            ((null != o && null == i) || (null != l && null == r)) && ((u = !0), (n = !0), (i = new d.Controller({ spring: 0 })), (r = new d.Controller({ spring: 0 }))),
            B(e) && null == a && ((u = !0), (a = new d.Controller({ spring: 0 }))),
            !s && B(e) && ((u = !0), (s = !0)),
            u
                ? {
                      hasRenderedBadge: n,
                      lowerBadgeMask: r,
                      upperBadgeMask: i,
                      borderRadiusMask: a,
                      renderComplex: s
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: t, upperBadge: n } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: r, upperBadgeMask: a } = this.state;
        null == i ||
            i
                .update({
                    spring: e ? 1 : 0,
                    immediate: !0
                })
                .start(),
            null == r ||
                r
                    .update({
                        spring: null != t ? 1 : 0,
                        immediate: !0
                    })
                    .start(),
            null == a ||
                a
                    .update({
                        spring: null != n ? 1 : 0,
                        immediate: !0
                    })
                    .start();
    }
    componentWillUnmount() {
        let { borderRadiusMask: e, lowerBadgeMask: t, upperBadgeMask: n } = this.state;
        this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose();
    }
    componentDidUpdate(e) {
        let { selected: t, lowerBadge: n, upperBadge: i } = this.props,
            { borderRadiusMask: r, lowerBadgeMask: a, upperBadgeMask: s, renderComplex: o } = this.state;
        t && !e.selected
            ? null == r ||
              r
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: S
                  })
                  .start()
            : !t &&
              e.selected &&
              (null == r ||
                  r
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: A
                      })
                      .start()),
            null != n && null == e.lowerBadge
                ? null == a ||
                  a
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: N
                      })
                      .start()
                : null == n &&
                  null != e.lowerBadge &&
                  (null == a ||
                      a
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: C
                          })
                          .start()),
            null != i && null == e.upperBadge
                ? null == s ||
                  s
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: N
                      })
                      .start()
                : null == i &&
                  null != e.upperBadge &&
                  (null == s ||
                      s
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: C
                          })
                          .start()),
            !o || B(this.props) || this.timeout.isStarted() ? B(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(c()(y, I), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T + D(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: i } = e.springs;
        return i.to([0, 1], [n, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * t, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: t } = this.props;
        if (null == e) return;
        let { spring: n } = e.springs,
            i = (null == t ? void 0 : t.width) != null ? t.width : T,
            r = (null == t ? void 0 : t.height) != null ? t.height : T;
        return {
            opacity: n.to([0, 0.5, 1], [0, 0, 1]),
            transform: n.to((e) => 'translate('.concat(i - e * i, 'px, ').concat(r - e * r, 'px)'))
        };
    }
    getUpperBadgeStyles() {
        let { upperBadgeMask: e } = this.state;
        if (null == e) return;
        let { spring: t } = e.springs;
        return {
            opacity: t.to([0, 0.5, 1], [0, 0, 1]),
            transform: t.to((e) => 'translate('.concat(16 - 16 * e, 'px, ').concat(-1 * (16 - 16 * e), 'px)'))
        };
    }
    getPathInterpolation() {
        var e;
        return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(this.interpolator);
    }
    render() {
        let { children: e, className: t, innerClassName: n, lowerBadge: i, lowerBadgeSize: s, style: l, upperBadge: u, highlight: c, viewBoxSize: f, badgeMaskSize: p, badgeMaskStroke: m, isVisualRefreshEnabled: g, isFolder: v } = this.props,
            { maskId: y, lowerBadgeMask: I, upperBadgeMask: S, focused: A, hasRenderedBadge: N, renderComplex: C } = this.state;
        if (!C)
            return (0, r.jsx)(
                'div',
                {
                    className: o()(t, {
                        [E.wrapperSimple]: !0,
                        [E.simpleFocused]: A
                    }),
                    style: l,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, r.jsx)(
                        'svg',
                        {
                            width: f,
                            height: f,
                            viewBox: '0 0 '.concat(f, ' ').concat(f),
                            className: E.svg,
                            overflow: 'visible',
                            children: (0, r.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: n,
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
        let R = ''.concat(y, '-upper_badge_masks'),
            O = ''.concat(y, '-lower_badge_masks'),
            D = ''.concat(y, '-blob_mask'),
            L = ''.concat(y, '-stroke_mask'),
            x = ''.concat(y, '-highlight_mask'),
            P = (null == s ? void 0 : s.width) != null ? s.width : T,
            w = (null == s ? void 0 : s.height) != null ? s.height : T,
            M = {
                width: g ? f + 8 : f,
                height: g ? f + 8 : f,
                x: g ? -4 : 0,
                y: g ? -4 : 0
            },
            k = g && v ? 20 : p;
        return (0, r.jsxs)(
            'div',
            {
                className: o()(t, E.wrapper),
                style: l,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, r.jsxs)(
                        'svg',
                        {
                            width: M.width,
                            height: M.height,
                            viewBox: ''.concat(M.x, ' ').concat(M.y, ' ').concat(M.width, ' ').concat(M.height),
                            className: o()(E.svg, { [E.noContain]: c }),
                            overflow: 'visible',
                            children: [
                                (0, r.jsxs)('defs', {
                                    children: [
                                        c &&
                                            (0, r.jsx)(d.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: x
                                            }),
                                        (0, r.jsx)(d.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: D
                                        }),
                                        N
                                            ? (0, r.jsx)(d.animated.rect, {
                                                  id: R,
                                                  x: f - k + m,
                                                  y: -m,
                                                  width: k,
                                                  height: k,
                                                  rx: k / 2,
                                                  ry: k / 2,
                                                  transform: this.getBadgePositionInterpolation(S, -1)
                                              })
                                            : null,
                                        N
                                            ? (0, r.jsx)(d.animated.rect, {
                                                  id: O,
                                                  x: f - (P + 2 * m) + m,
                                                  y: f - (w + 2 * m) + m,
                                                  width: P + 2 * m,
                                                  height: w + 2 * m,
                                                  rx: p / 2,
                                                  ry: p / 2,
                                                  transform: this.getBadgePositionInterpolation(I, 1, P + m)
                                              })
                                            : null
                                    ]
                                }),
                                (0, r.jsxs)('mask', {
                                    id: y,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: f,
                                    height: f,
                                    children: [
                                        c &&
                                            (0, r.jsx)('use', {
                                                href: '#'.concat(x),
                                                fill: 'black'
                                            }),
                                        (0, r.jsx)('use', {
                                            href: '#'.concat(D),
                                            fill: 'white',
                                            className: o()({ [E.isHighlighted]: c })
                                        }),
                                        N
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)('use', {
                                                          href: '#'.concat(R),
                                                          fill: 'black'
                                                      }),
                                                      (0, r.jsx)('use', {
                                                          href: '#'.concat(O),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                N
                                    ? (0, r.jsxs)('mask', {
                                          id: L,
                                          children: [
                                              (0, r.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, r.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              }),
                                              (0, r.jsx)('use', {
                                                  href: '#'.concat(O),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                A
                                    ? (0, r.jsxs)(a.Fragment, {
                                          children: [
                                              (0, r.jsx)('g', {
                                                  className: E.focusStroke,
                                                  mask: 'url(#'.concat(L, ')'),
                                                  children: (0, r.jsx)('use', { href: '#'.concat(D) })
                                              }),
                                              (0, r.jsxs)('g', {
                                                  className: E.focusFill,
                                                  children: [null != u ? (0, r.jsx)('use', { href: '#'.concat(R) }) : null, null != i ? (0, r.jsx)('use', { href: '#'.concat(O) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                c &&
                                    (0, r.jsx)(d.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: _.Z.BRAND_500,
                                        'stroke-width': b,
                                        className: E.highlight,
                                        mask: 'url(#'.concat(L, ')')
                                    }),
                                (0, r.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(y, ')'),
                                        x: 0,
                                        y: 0,
                                        className: n,
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
                    (0, r.jsxs)(h.W, {
                        component: a.Fragment,
                        children: [
                            null != i
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          className: E.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: i
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != u
                                ? (0, r.jsx)(
                                      G,
                                      {
                                          className: E.upperBadge,
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
            v(this, 'timeout', new p.V7()),
            v(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, f.Z)(),
                focused: !1
            }),
            v(this, 'interpolator', M(this.props.baseViewBoxSize, this.props.viewBoxSize)),
            v(this, 'handleTimeout', () => {
                this.timeout.stop(), this.setState({ renderComplex: !1 });
            }),
            v(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            v(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            });
    }
}
