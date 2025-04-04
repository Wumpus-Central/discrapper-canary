n.d(t, { a: () => W }), n(411104), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(96355),
    c = n(47759),
    u = n.n(c),
    d = n(642128),
    f = n(772848),
    _ = n(722770),
    p = n(846519),
    h = n(215569),
    m = n(481060),
    g = n(540059),
    E = n(976962);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let T = 10800000,
    N = 18000000,
    A = 16,
    C = 2,
    R = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    P = {
        duration: 150,
        friction: 3
    },
    w = {
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
    L = (e) => {
        let t = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
            n = (0, m.dQu)(m.TVs.modules.guildbar.FOLDER_SIZE);
        return e ? n : t;
    },
    x = (e) => e / 2,
    M = (e) => (e ? 2 : 4),
    k = (e) => {
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
    j = (e) => {
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
    U = (null == (r = window.SVGPathElement) ? void 0 : r.prototype.getTotalLength) != null,
    G = new Map();
function B(e, t) {
    let n = ''.concat(e, '-').concat(t);
    if (G.has(n)) return G.get(n);
    let r = F(e, t);
    return G.set(n, r), r;
}
function F(e, t) {
    return U ? (0, l.interpolate)(j(e), k(t), { maxSegmentLength: 1.5 }) : V;
}
function V(e) {
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
        let { children: e, className: t, animatedStyle: n } = this.props;
        return (0, i.jsx)(d.animated.div, {
            className: t,
            style: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e), b(this, 'timeoutId', void 0);
    }
}
function H(e) {
    let { selected: t, upperBadge: n, lowerBadge: r, highlight: i } = e;
    return t || null != n || null != r || !!i;
}
function W(e) {
    var {
            selected: t = !1,
            lowerBadgeSize: n = {
                width: A,
                height: A
            },
            highlight: r = !1,
            rounded: o = !1
        } = e,
        a = I(e, ['selected', 'lowerBadgeSize', 'highlight', 'rounded']);
    let s = (0, g.Q3)('BlobMask'),
        l = !!a.isFolder,
        c = L(!1),
        u = L(l),
        d = x(u),
        f = M(s);
    return s
        ? (0, i.jsx)(
              K,
              O(y({}, a), {
                  rounded: o,
                  isVisualRefreshEnabled: !0,
                  baseViewBoxSize: c,
                  viewBoxSize: u,
                  badgeMaskSize: d,
                  badgeMaskStroke: f,
                  selected: t,
                  lowerBadgeSize: n,
                  highlight: r
              })
          )
        : (0, i.jsx)(
              Y,
              O(y({}, a), {
                  selected: t,
                  lowerBadgeSize: n,
                  highlight: r,
                  isVisualRefreshEnabled: s,
                  baseViewBoxSize: c,
                  viewBoxSize: u,
                  badgeMaskSize: d,
                  badgeMaskStroke: f
              })
          );
}
class Y extends o.Component {
    static getDerivedStateFromProps(e, t) {
        let { hasRenderedBadge: n, upperBadgeMask: r, lowerBadgeMask: i, borderRadiusMask: o, renderComplex: a } = t,
            { upperBadge: s, lowerBadge: l } = e,
            c = !1;
        return (
            ((null != s && null == r) || (null != l && null == i)) && ((c = !0), (n = !0), (r = new d.Controller({ spring: 0 })), (i = new d.Controller({ spring: 0 }))),
            H(e) && null == o && ((c = !0), (o = new d.Controller({ spring: 0 }))),
            !a && H(e) && ((c = !0), (a = !0)),
            c
                ? {
                      hasRenderedBadge: n,
                      lowerBadgeMask: i,
                      upperBadgeMask: r,
                      borderRadiusMask: o,
                      renderComplex: a
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: t, upperBadge: n } = this.props,
            { borderRadiusMask: r, lowerBadgeMask: i, upperBadgeMask: o } = this.state;
        null == r ||
            r
                .update({
                    spring: +!!e,
                    immediate: !0
                })
                .start(),
            null == i ||
                i
                    .update({
                        spring: +(null != t),
                        immediate: !0
                    })
                    .start(),
            null == o ||
                o
                    .update({
                        spring: +(null != n),
                        immediate: !0
                    })
                    .start();
    }
    componentWillUnmount() {
        let { borderRadiusMask: e, lowerBadgeMask: t, upperBadgeMask: n } = this.state;
        this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose();
    }
    componentDidUpdate(e) {
        let { selected: t, lowerBadge: n, upperBadge: r } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: o, upperBadgeMask: a, renderComplex: s } = this.state;
        t && !e.selected
            ? null == i ||
              i
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: R
                  })
                  .start()
            : !t &&
              e.selected &&
              (null == i ||
                  i
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: P
                      })
                      .start()),
            null != n && null == e.lowerBadge
                ? null == o ||
                  o
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: w
                      })
                      .start()
                : null == n &&
                  null != e.lowerBadge &&
                  (null == o ||
                      o
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: D
                          })
                          .start()),
            null != r && null == e.upperBadge
                ? null == a ||
                  a
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: w
                      })
                      .start()
                : null == r &&
                  null != e.upperBadge &&
                  (null == a ||
                      a
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: D
                          })
                          .start()),
            !s || H(this.props) || this.timeout.isStarted() ? H(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(u()(T, N), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A + M(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: r } = e.springs;
        return r.to([0, 1], [n, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * t, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: t } = this.props;
        if (null == e) return;
        let { spring: n } = e.springs,
            r = (null == t ? void 0 : t.width) != null ? t.width : A,
            i = (null == t ? void 0 : t.height) != null ? t.height : A;
        return {
            opacity: n.to([0, 0.5, 1], [0, 0, 1]),
            transform: n.to((e) => 'translate('.concat(r - e * r, 'px, ').concat(i - e * i, 'px)'))
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
        return null == (e = this.state.borderRadiusMask) ? void 0 : e.springs.spring.to(this.interpolator);
    }
    render() {
        let { children: e, className: t, innerClassName: n, lowerBadge: r, lowerBadgeSize: a, style: l, upperBadge: c, highlight: u, viewBoxSize: f, badgeMaskSize: p, badgeMaskStroke: m, isVisualRefreshEnabled: g, isFolder: b } = this.props,
            { maskId: y, lowerBadgeMask: v, upperBadgeMask: O, focused: I, hasRenderedBadge: S, renderComplex: T } = this.state;
        if (!T)
            return (0, i.jsx)(
                'div',
                {
                    className: s()(t, {
                        [E.wrapperSimple]: !0,
                        [E.simpleFocused]: I
                    }),
                    style: l,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, i.jsx)(
                        'svg',
                        {
                            width: f,
                            height: f,
                            viewBox: '0 0 '.concat(f, ' ').concat(f),
                            className: E.svg,
                            overflow: 'visible',
                            children: (0, i.jsx)(
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
        let N = ''.concat(y, '-upper_badge_masks'),
            R = ''.concat(y, '-lower_badge_masks'),
            P = ''.concat(y, '-blob_mask'),
            w = ''.concat(y, '-stroke_mask'),
            D = ''.concat(y, '-highlight_mask'),
            L = (null == a ? void 0 : a.width) != null ? a.width : A,
            x = (null == a ? void 0 : a.height) != null ? a.height : A,
            M = {
                width: g ? f + 8 : f,
                height: g ? f + 8 : f,
                x: g ? -4 : 0,
                y: g ? -4 : 0
            },
            k = g && b ? 20 : p;
        return (0, i.jsxs)(
            'div',
            {
                className: s()(t, E.wrapper),
                style: l,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, i.jsxs)(
                        'svg',
                        {
                            width: M.width,
                            height: M.height,
                            viewBox: ''.concat(M.x, ' ').concat(M.y, ' ').concat(M.width, ' ').concat(M.height),
                            className: s()(E.svg, { [E.noContain]: u }),
                            overflow: 'visible',
                            children: [
                                (0, i.jsxs)('defs', {
                                    children: [
                                        u &&
                                            (0, i.jsx)(d.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: D
                                            }),
                                        (0, i.jsx)(d.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: P
                                        }),
                                        S
                                            ? (0, i.jsx)(d.animated.rect, {
                                                  id: N,
                                                  x: f - k + m,
                                                  y: -m,
                                                  width: k,
                                                  height: k,
                                                  rx: k / 2,
                                                  ry: k / 2,
                                                  transform: this.getBadgePositionInterpolation(O, -1)
                                              })
                                            : null,
                                        S
                                            ? (0, i.jsx)(d.animated.rect, {
                                                  id: R,
                                                  x: f - (L + 2 * m) + m,
                                                  y: f - (x + 2 * m) + m,
                                                  width: L + 2 * m,
                                                  height: x + 2 * m,
                                                  rx: p / 2,
                                                  ry: p / 2,
                                                  transform: this.getBadgePositionInterpolation(v, 1, L + m)
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsxs)('mask', {
                                    id: y,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: f,
                                    height: f,
                                    children: [
                                        u &&
                                            (0, i.jsx)('use', {
                                                href: '#'.concat(D),
                                                fill: 'black'
                                            }),
                                        (0, i.jsx)('use', {
                                            href: '#'.concat(P),
                                            fill: 'white',
                                            className: s()({ [E.isHighlighted]: u })
                                        }),
                                        S
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)('use', {
                                                          href: '#'.concat(N),
                                                          fill: 'black'
                                                      }),
                                                      (0, i.jsx)('use', {
                                                          href: '#'.concat(R),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                S
                                    ? (0, i.jsxs)('mask', {
                                          id: w,
                                          children: [
                                              (0, i.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, i.jsx)('use', {
                                                  href: '#'.concat(N),
                                                  fill: 'black'
                                              }),
                                              (0, i.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                I
                                    ? (0, i.jsxs)(o.Fragment, {
                                          children: [
                                              (0, i.jsx)('g', {
                                                  className: E.focusStroke,
                                                  mask: 'url(#'.concat(w, ')'),
                                                  children: (0, i.jsx)('use', { href: '#'.concat(P) })
                                              }),
                                              (0, i.jsxs)('g', {
                                                  className: E.focusFill,
                                                  children: [null != c ? (0, i.jsx)('use', { href: '#'.concat(N) }) : null, null != r ? (0, i.jsx)('use', { href: '#'.concat(R) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                u &&
                                    (0, i.jsx)(d.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: _.Z.BRAND_500,
                                        'stroke-width': C,
                                        className: E.highlight,
                                        mask: 'url(#'.concat(w, ')')
                                    }),
                                (0, i.jsx)(
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
                    (0, i.jsxs)(h.W, {
                        component: o.Fragment,
                        children: [
                            null != r
                                ? (0, i.jsx)(
                                      Z,
                                      {
                                          className: E.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: r
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != c
                                ? (0, i.jsx)(
                                      Z,
                                      {
                                          className: E.upperBadge,
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
            b(this, 'timeout', new p.V7()),
            b(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, f.Z)(),
                focused: !1
            }),
            b(this, 'interpolator', B(this.props.baseViewBoxSize, this.props.viewBoxSize)),
            b(this, 'handleTimeout', () => {
                this.timeout.stop(), this.setState({ renderComplex: !1 });
            }),
            b(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            b(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            });
    }
}
function K(e) {
    let { children: t, viewBoxSize: n, className: r, style: a, innerClassName: l, isFolder: c, lowerBadgeSize: u, highlight: d, badgeMaskStroke: f, badgeMaskSize: p, upperBadge: h, lowerBadge: m, rounded: g = !1 } = e,
        [b, y] = o.useState(!1),
        v = () => {
            y(!0);
        },
        O = () => {
            y(!1);
        },
        I = null != h,
        S = null != m,
        T = o.useId(),
        N = ''.concat(T, '-upper_badge_masks'),
        R = ''.concat(T, '-lower_badge_masks'),
        P = ''.concat(T, '-blob_mask'),
        w = ''.concat(T, '-stroke_mask'),
        D = ''.concat(T, '-highlight_mask'),
        L = (null == u ? void 0 : u.width) != null ? u.width : A,
        x = (null == u ? void 0 : u.height) != null ? u.height : A,
        M = {
            width: n + 8,
            height: n + 8,
            x: -4,
            y: -4
        },
        U = c ? 20 : p,
        G = g ? j(n) : k(n);
    return (0, i.jsxs)(
        'div',
        {
            className: s()(r, E.wrapper),
            style: a,
            onFocus: v,
            onBlur: O,
            children: [
                (0, i.jsxs)(
                    'svg',
                    {
                        width: M.width,
                        height: M.height,
                        viewBox: ''.concat(M.x, ' ').concat(M.y, ' ').concat(M.width, ' ').concat(M.height),
                        className: s()(E.svg, { [E.noContain]: d }),
                        overflow: 'visible',
                        children: [
                            (0, i.jsxs)('defs', {
                                children: [
                                    d &&
                                        (0, i.jsx)('path', {
                                            d: G,
                                            id: D
                                        }),
                                    (0, i.jsx)('path', {
                                        d: G,
                                        id: P
                                    }),
                                    null != h
                                        ? (0, i.jsx)('rect', {
                                              id: N,
                                              className: E.badgeStroke,
                                              x: n - U + f,
                                              y: -f,
                                              width: U,
                                              height: U,
                                              rx: U / 2,
                                              ry: U / 2
                                          })
                                        : null,
                                    null != m
                                        ? (0, i.jsx)('rect', {
                                              id: R,
                                              className: E.badgeStroke,
                                              x: n - (L + 2 * f) + f,
                                              y: n - (x + 2 * f) + f,
                                              width: L + 2 * f,
                                              height: x + 2 * f,
                                              rx: p / 2,
                                              ry: p / 2
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsxs)('mask', {
                                id: T,
                                fill: 'black',
                                x: 0,
                                y: 0,
                                width: n,
                                height: n,
                                children: [
                                    d &&
                                        (0, i.jsx)('use', {
                                            href: '#'.concat(D),
                                            fill: 'black'
                                        }),
                                    (0, i.jsx)('use', {
                                        href: '#'.concat(P),
                                        fill: 'white',
                                        className: s()({ [E.isHighlighted]: d })
                                    }),
                                    I
                                        ? (0, i.jsx)('use', {
                                              href: '#'.concat(N),
                                              fill: 'black'
                                          })
                                        : null,
                                    S
                                        ? (0, i.jsx)('use', {
                                              href: '#'.concat(R),
                                              fill: 'black'
                                          })
                                        : null
                                ]
                            }),
                            I || S
                                ? (0, i.jsxs)('mask', {
                                      id: w,
                                      children: [
                                          (0, i.jsx)('rect', {
                                              width: '150%',
                                              height: '150%',
                                              x: '-25%',
                                              y: '-25%',
                                              fill: 'white'
                                          }),
                                          I
                                              ? (0, i.jsx)('use', {
                                                    href: '#'.concat(N),
                                                    fill: 'black'
                                                })
                                              : null,
                                          S
                                              ? (0, i.jsx)('use', {
                                                    href: '#'.concat(R),
                                                    fill: 'black'
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            b
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)('g', {
                                              className: E.focusStroke,
                                              mask: 'url(#'.concat(w, ')'),
                                              children: (0, i.jsx)('use', { href: '#'.concat(P) })
                                          }),
                                          (0, i.jsxs)('g', {
                                              className: E.focusFill,
                                              children: [null != h ? (0, i.jsx)('use', { href: '#'.concat(N) }) : null, null != m ? (0, i.jsx)('use', { href: '#'.concat(R) }) : null]
                                          })
                                      ]
                                  })
                                : null,
                            d &&
                                (0, i.jsx)('path', {
                                    d: G,
                                    stroke: _.Z.BRAND_500,
                                    'stroke-width': C,
                                    className: E.highlight,
                                    mask: 'url(#'.concat(w, ')')
                                }),
                            (0, i.jsx)(
                                'foreignObject',
                                {
                                    mask: 'url(#'.concat(T, ')'),
                                    x: 0,
                                    y: 0,
                                    className: l,
                                    width: n,
                                    height: n,
                                    children: t
                                },
                                'foreign-object'
                            )
                        ]
                    },
                    'svg'
                ),
                null != m
                    ? (0, i.jsx)('div', {
                          className: E.lowerBadge,
                          children: m
                      })
                    : null,
                null != h
                    ? (0, i.jsx)('div', {
                          className: E.upperBadge,
                          children: h
                      })
                    : null
            ]
        },
        'wrapper'
    );
}
