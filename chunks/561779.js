n.d(t, { i: () => T }), n(724458), n(411104), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    u = n.n(l),
    c = n(642128),
    d = n(374470),
    f = n(143450),
    _ = n(84735),
    p = n(981729),
    h = n(607070),
    m = n(540059),
    g = n(106850);
function E(e, t, n) {
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
function v(e, t) {
    let n = 0;
    for (let i = 0; i < t.length; i++) {
        let r = t[i];
        if (e === r) return i;
        if (e < r) {
            if (0 === n || r - e < n) return i;
            return i - 1;
        }
        n = e - r;
    }
    return null;
}
function y(e) {
    let { markers: t, initialValue: n, minValue: i, maxValue: r, equidistant: a } = e,
        s = [],
        o = [];
    if (null == t)
        return {
            min: i,
            max: r,
            range: r - i,
            sortedMarkers: s,
            markerPositions: o
        };
    let l = v(n, (s = t.sort((e, t) => e - t))),
        u = s[0],
        c = s[s.length - 1],
        d = c - u;
    if (a) {
        let e = 100 / (s.length - 1);
        o = s.map((t, n) => n * e);
    } else {
        let e = (e) => (100 * (e - u)) / d;
        o = s.map((t) => e(t));
    }
    return {
        min: u,
        max: c,
        range: d,
        sortedMarkers: s,
        markerPositions: o,
        closestMarkerIndex: l
    };
}
function I(e) {
    return {
        value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...y(e)
    };
}
class T extends (i = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.initialValue !== t.initialValueProp
            ? {
                  ...I(e),
                  active: t.active
              }
            : null;
    }
    componentWillUnmount() {
        this.reset();
    }
    renderMark(e) {
        let { onMarkerRender: t } = this.props;
        return null != t ? t(e) : e;
    }
    render() {
        var e;
        let { value: t, active: n, focused: i, sortedMarkers: a, markerPositions: s, closestMarkerIndex: l, newClosestIndex: u, min: d, max: f } = this.state,
            { disabled: m, stickToMarkers: E, className: v, children: y, barStyles: I, fillStyles: T, mini: S, hideBubble: A, defaultValue: N, orientation: C, onValueRender: R, renderMarker: O, getAriaValueText: D, barClassName: L, grabberClassName: x, grabberStyles: P = {}, markerPosition: w = 0, 'aria-hidden': M, 'aria-label': k, 'aria-labelledby': U, 'aria-describedby': G } = this.props,
            B = 0;
        E ? null != s && (null != u ? (B = s[u]) : null != l && (B = s[l])) : (B = this.scaleValue(t));
        let Z = ''.concat(B, '%'),
            F =
                null != s && null != a
                    ? s.map((e, t) => {
                          let n = a[t],
                              i = null != N && N === n,
                              s = this.renderMark(n);
                          return (0, r.jsx)(
                              'div',
                              {
                                  className: o()(g.mark, {
                                      [g.defaultValue]: i,
                                      [g.markAbove]: 0 === w,
                                      [g.markBelow]: 1 === w
                                  }),
                                  style: { left: ''.concat(e, '%') },
                                  children:
                                      null != O
                                          ? O(n)
                                          : (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)('div', {
                                                        className: g.markValue,
                                                        children: s
                                                    }),
                                                    (0, r.jsx)('div', { className: g['markDash'.concat(null == s ? 'simple' : '')] })
                                                ]
                                            })
                              },
                              t
                          );
                      })
                    : null,
            V = null != R ? R(t) : ''.concat(B.toFixed(0), '%'),
            j = null !== (e = null == D ? void 0 : D(t)) && void 0 !== e ? e : void 0;
        return (0, r.jsx)(b, {
            active: n,
            keyboardFocused: i && h.Z.keyboardModeEnabled,
            children: (e) => {
                var a;
                return (0, r.jsx)(_.t, {
                    focusTarget: this.containerRef,
                    ringTarget: this.grabberRef,
                    children: (0, r.jsxs)(c.animated.div, {
                        className: o()(g.slider, v, {
                            [g.hasMarks]: (null !== (a = null == F ? void 0 : F.length) && void 0 !== a ? a : 0) > 0,
                            [g.disabled]: m,
                            [g.mini]: S
                        }),
                        style: null == e ? void 0 : e.sliderStyles,
                        'aria-valuemin': d,
                        'aria-valuemax': f,
                        'aria-valuenow': t,
                        'aria-disabled': m,
                        'aria-orientation': C,
                        'aria-hidden': M,
                        'aria-label': k,
                        'aria-labelledby': U,
                        'aria-describedby': G,
                        'aria-valuetext': j,
                        role: 'slider',
                        tabIndex: 0,
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContainerMouseDown,
                        onFocus: () => {
                            this.onFocus();
                        },
                        onBlur: () => {
                            this.onBlur();
                        },
                        onMouseEnter: () => (null == e ? void 0 : e.setHovered(!0)),
                        onMouseLeave: () => (null == e ? void 0 : e.setHovered(!1)),
                        ref: this.containerRef,
                        children: [
                            (0, r.jsx)('div', {
                                className: g.track,
                                children: F
                            }),
                            (0, r.jsx)('div', {
                                className: o()(g.bar, L),
                                style: I,
                                children: (0, r.jsx)('div', {
                                    className: g.barFill,
                                    style: {
                                        ...T,
                                        width: Z
                                    }
                                })
                            }),
                            y,
                            (0, r.jsx)('div', {
                                className: g.track,
                                children: (0, r.jsx)(p.u, {
                                    color: p.u.Colors.GREY,
                                    hideOnClick: !1,
                                    text: A || E ? null : V,
                                    forceOpen: n || (i && h.Z.keyboardModeEnabled),
                                    children: (e) =>
                                        (0, r.jsx)('div', {
                                            ...e,
                                            className: o()(g.grabber, x),
                                            style: {
                                                ...P,
                                                left: Z
                                            },
                                            onMouseDown: this.handleMouseDown,
                                            ref: this.grabberRef
                                        })
                                })
                            })
                        ]
                    })
                });
            }
        });
    }
    reset() {
        var e, t, n, i;
        null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener('mousemove', this.handleMouseMove, !0), null === (i = this.containerRef.current) || void 0 === i || null === (n = i.ownerDocument) || void 0 === n || n.removeEventListener('mouseup', this.handleMouseUp, !0);
    }
    scaleValue(e) {
        return (100 * (e - this.state.min)) / this.state.range;
    }
    unscaleValue(e) {
        return (e * this.state.range) / 100 + this.state.min;
    }
    focus() {
        var e;
        null === (e = this.containerRef.current) || void 0 === e || e.focus();
    }
    blur() {
        var e;
        null === (e = this.containerRef.current) || void 0 === e || e.blur();
    }
    moveStaggered(e) {
        let t;
        let { boundingRect: n, x: i = 0, closestMarkerIndex: r, markerPositions: a, sortedMarkers: s } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: u } = n;
        if (e.clientX <= l || e.clientX >= u) return;
        let c = u - l,
            d = (e.clientX - i) / c,
            f = a[r] + 100 * d;
        null != (t = this.props.equidistant ? v(f, a) : v(this.unscaleValue(f), s)) && (null == o || o(s[t])), this.setState({ newClosestIndex: t });
    }
    constructor(e) {
        super(e),
            E(this, 'containerRef', a.createRef()),
            E(this, 'grabberRef', a.createRef()),
            E(this, 'moveGrabber', (e) => {
                let { sortedMarkers: t, value: n, min: i, max: r } = this.state,
                    { asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
                    l = {};
                if (o) {
                    let i = t.indexOf(n);
                    if (i < 0) return;
                    let r = i + e,
                        a = t[r];
                    if (null == a) return;
                    (l.value = a), (l.closestMarkerIndex = r), (l.newClosestIndex = r);
                } else l.value = u().clamp(n + e, i, r);
                this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == s || s(l.value));
            }),
            E(this, 'handleContainerMouseDown', (e) => {
                let t;
                let { disabled: n, maxValue: i, minValue: r, asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
                    { sortedMarkers: l, markerPositions: u } = this.state;
                if (n) return;
                let { clientX: c, currentTarget: f } = e;
                if (!(0, d.k)(f)) return;
                let { left: _, width: p } = f.getBoundingClientRect(),
                    h = (c - _) / p;
                if (o) {
                    let { nextClosestMarkerIndex: e } = u.reduce(
                        (e, t, n) => {
                            let i = Math.abs(t / 100 - h);
                            return i <= e.smallestDelta
                                ? {
                                      smallestDelta: i,
                                      nextClosestMarkerIndex: n
                                  }
                                : e;
                        },
                        {
                            smallestDelta: 1,
                            nextClosestMarkerIndex: -1
                        }
                    );
                    if (-1 === e) return;
                    this.setState({ closestMarkerIndex: e }), (t = l[e]);
                } else {
                    let n = i - r;
                    (t = r + n * h), this.setState({ value: t }), this.handleMouseDown(e);
                }
                null != s && s(t), null != a && a(t);
            }),
            E(this, 'handleKeyDown', (e) => {
                let { disabled: t, orientation: n, keyboardStep: i = 1 } = this.props;
                if (t) return;
                let { key: r } = e,
                    a = [],
                    s = [];
                switch (n) {
                    case 'horizontal':
                        (a = ['ArrowRight']), (s = ['ArrowLeft']);
                        break;
                    case 'vertical':
                        (a = ['ArrowUp']), (s = ['ArrowDown']);
                        break;
                    default:
                        (a = ['ArrowRight', 'ArrowUp']), (s = ['ArrowLeft', 'ArrowDown']);
                }
                s.includes(r) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : a.includes(r) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i));
            }),
            E(this, 'handleMouseDown', (e) => {
                var t, n;
                if (this.props.disabled) return;
                e.stopPropagation();
                let { current: i } = this.containerRef;
                if ((null == i || null === (t = i.ownerDocument) || void 0 === t || t.addEventListener('mousemove', this.handleMouseMove, !0), null == i || null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('mouseup', this.handleMouseUp, !0), !(0, d.k)(i))) throw Error('[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element');
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: i.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex
                });
            }),
            E(this, 'handleMouseUp', (e) => {
                e.stopPropagation(), this.reset();
                let { onValueChange: t, stickToMarkers: n } = this.props,
                    { newClosestIndex: i } = this.state;
                n && null != i
                    ? (null == t || t(this.state.sortedMarkers[i]),
                      this.setState({
                          newClosestIndex: null,
                          closestMarkerIndex: i
                      }))
                    : null == t || t(this.state.value),
                    this.setState({ active: !1 });
            }),
            E(this, 'handleMouseMove', (e) => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
            }),
            E(this, 'onFocus', () => {
                this.setState({ focused: !0 });
            }),
            E(this, 'onBlur', () => {
                this.setState({ focused: !1 });
            }),
            E(this, 'moveSmoothly', (e) => {
                let { minValue: t, maxValue: n, asValueChanges: i } = this.props,
                    { boundingRect: r } = this.state;
                if (null == r) return;
                let { left: a, right: s } = r,
                    o = n - t,
                    l = s - a,
                    u = Math.min(Math.max(t + ((e.clientX - a) / l) * o, t), n);
                null == i || i(u), this.setState({ value: u });
            }),
            (this.state = {
                active: !1,
                focused: !1,
                ...I(e)
            });
    }
}
function b(e) {
    let { active: t, keyboardFocused: n, children: i } = e,
        r = (0, m.Q3)('Slider'),
        [s, o] = a.useState(!1),
        l = (0, f.q)({
            '--grabber-size': n || t || s ? '20px' : '16px',
            '--bar-size': n || t || s ? '6px' : '4px',
            config: {
                ...c.config.stiff,
                duration: 100
            }
        });
    return r
        ? i({
              sliderStyles: l,
              setHovered: o
          })
        : i();
}
E(T, 'defaultProps', {
    initialValue: 10,
    minValue: 0,
    maxValue: 100,
    keyboardStep: 1,
    handleSize: 10,
    disabled: !1,
    stickToMarkers: !1,
    fillStyles: {}
});
