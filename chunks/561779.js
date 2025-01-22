r.d(n, {
    i: function () {
        return N;
    }
});
var i,
    a,
    o = r(724458);
var s = r(411104);
var l = r(47120);
var u = r(200651),
    c = r(192379),
    d = r(120356),
    f = r.n(d),
    p = r(392711),
    h = r.n(p),
    _ = r(642128),
    m = r(513431),
    g = r(143450),
    E = r(84735),
    v = r(981729),
    y = r(607070),
    b = r(540059),
    I = r(587987);
function T(e, n, r) {
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
function S(e, n) {
    let r = 0;
    for (let i = 0; i < n.length; i++) {
        let a = n[i];
        if (e === a) return i;
        if (e < a) {
            if (0 === r || a - e < r) return i;
            return i - 1;
        }
        r = e - a;
    }
    return null;
}
function A(e) {
    let { markers: n, initialValue: r, minValue: i, maxValue: a, equidistant: o } = e,
        s = [],
        l = [];
    if (null == n)
        return {
            min: i,
            max: a,
            range: a - i,
            sortedMarkers: s,
            markerPositions: l
        };
    let u = S(r, (s = n.sort((e, n) => e - n))),
        c = s[0],
        d = s[s.length - 1],
        f = d - c;
    if (o) {
        let e = 100 / (s.length - 1);
        l = s.map((n, r) => r * e);
    } else {
        let e = (e) => (100 * (e - c)) / f;
        l = s.map((n) => e(n));
    }
    return {
        min: c,
        max: d,
        range: f,
        sortedMarkers: s,
        markerPositions: l,
        closestMarkerIndex: u
    };
}
function C(e) {
    return {
        value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...A(e)
    };
}
!(function (e) {
    (e[(e.ABOVE = 0)] = 'ABOVE'), (e[(e.BELOW = 1)] = 'BELOW');
})(i || (i = {}));
class N extends (a = c.PureComponent) {
    static getDerivedStateFromProps(e, n) {
        return e.initialValue !== n.initialValueProp
            ? {
                  ...C(e),
                  active: n.active
              }
            : null;
    }
    componentWillUnmount() {
        this.reset();
    }
    renderMark(e) {
        let { onMarkerRender: n } = this.props;
        return null != n ? n(e) : e;
    }
    render() {
        var e;
        let { value: n, active: r, focused: i, sortedMarkers: a, markerPositions: o, closestMarkerIndex: s, newClosestIndex: l, min: c, max: d } = this.state,
            { disabled: p, stickToMarkers: h, className: m, children: g, barStyles: b, fillStyles: T, mini: S, hideBubble: A, defaultValue: C, orientation: N, onValueRender: O, renderMarker: D, getAriaValueText: L, barClassName: x, grabberClassName: w, grabberStyles: P = {}, markerPosition: M = 0, 'aria-hidden': k, 'aria-label': U, 'aria-labelledby': B, 'aria-describedby': G } = this.props,
            Z = 0;
        h ? null != o && (null != l ? (Z = o[l]) : null != s && (Z = o[s])) : (Z = this.scaleValue(n));
        let F = ''.concat(Z, '%'),
            V =
                null != o && null != a
                    ? o.map((e, n) => {
                          let r = a[n],
                              i = null != C && C === r,
                              o = this.renderMark(r);
                          return (0, u.jsx)(
                              'div',
                              {
                                  className: f()(I.mark, {
                                      [I.defaultValue]: i,
                                      [I.markAbove]: 0 === M,
                                      [I.markBelow]: 1 === M
                                  }),
                                  style: { left: ''.concat(e, '%') },
                                  children:
                                      null != D
                                          ? D(r)
                                          : (0, u.jsxs)(u.Fragment, {
                                                children: [
                                                    (0, u.jsx)('div', {
                                                        className: I.markValue,
                                                        children: o
                                                    }),
                                                    (0, u.jsx)('div', { className: I['markDash'.concat(null == o ? 'simple' : '')] })
                                                ]
                                            })
                              },
                              n
                          );
                      })
                    : null,
            j = null != O ? O(n) : ''.concat(Z.toFixed(0), '%'),
            H = null !== (e = null == L ? void 0 : L(n)) && void 0 !== e ? e : void 0;
        return (0, u.jsx)(R, {
            active: r,
            keyboardFocused: i && y.Z.keyboardModeEnabled,
            children: (e) => {
                var a;
                return (0, u.jsx)(E.t, {
                    focusTarget: this.containerRef,
                    ringTarget: this.grabberRef,
                    children: (0, u.jsxs)(_.animated.div, {
                        className: f()(I.slider, m, {
                            [I.hasMarks]: (null !== (a = null == V ? void 0 : V.length) && void 0 !== a ? a : 0) > 0,
                            [I.disabled]: p,
                            [I.mini]: S
                        }),
                        style: null == e ? void 0 : e.sliderStyles,
                        'aria-valuemin': c,
                        'aria-valuemax': d,
                        'aria-valuenow': n,
                        'aria-disabled': p,
                        'aria-orientation': N,
                        'aria-hidden': k,
                        'aria-label': U,
                        'aria-labelledby': B,
                        'aria-describedby': G,
                        'aria-valuetext': H,
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
                            (0, u.jsx)('div', {
                                className: I.track,
                                children: V
                            }),
                            (0, u.jsx)('div', {
                                className: f()(I.bar, x),
                                style: b,
                                children: (0, u.jsx)('div', {
                                    className: I.barFill,
                                    style: {
                                        ...T,
                                        width: F
                                    }
                                })
                            }),
                            g,
                            (0, u.jsx)('div', {
                                className: I.track,
                                children: (0, u.jsx)(v.u, {
                                    color: v.u.Colors.GREY,
                                    hideOnClick: !1,
                                    text: A || h ? null : j,
                                    forceOpen: r || (i && y.Z.keyboardModeEnabled),
                                    children: (e) =>
                                        (0, u.jsx)('div', {
                                            ...e,
                                            className: f()(I.grabber, w),
                                            style: {
                                                ...P,
                                                left: F
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
        var e, n, r, i;
        null === (n = this.containerRef.current) || void 0 === n || null === (e = n.ownerDocument) || void 0 === e || e.removeEventListener('mousemove', this.handleMouseMove, !0), null === (i = this.containerRef.current) || void 0 === i || null === (r = i.ownerDocument) || void 0 === r || r.removeEventListener('mouseup', this.handleMouseUp, !0);
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
        let n;
        let { boundingRect: r, x: i = 0, closestMarkerIndex: a, markerPositions: o, sortedMarkers: s } = this.state,
            { asValueChanges: l } = this.props;
        if (null == r) return;
        let { left: u, right: c } = r;
        if (e.clientX <= u || e.clientX >= c) return;
        let d = c - u,
            f = (e.clientX - i) / d,
            p = o[a] + 100 * f;
        null != (n = this.props.equidistant ? S(p, o) : S(this.unscaleValue(p), s)) && (null == l || l(s[n])), this.setState({ newClosestIndex: n });
    }
    constructor(e) {
        super(e),
            T(this, 'containerRef', c.createRef()),
            T(this, 'grabberRef', c.createRef()),
            T(this, 'moveGrabber', (e) => {
                let { sortedMarkers: n, value: r, min: i, max: a } = this.state,
                    { asValueChanges: o, onValueChange: s, stickToMarkers: l } = this.props,
                    u = {};
                if (l) {
                    let i = n.indexOf(r);
                    if (i < 0) return;
                    let a = i + e,
                        o = n[a];
                    if (null == o) return;
                    (u.value = o), (u.closestMarkerIndex = a), (u.newClosestIndex = a);
                } else u.value = h().clamp(r + e, i, a);
                this.setState(u), u.value !== this.state.value && (null == o || o(u.value), null == s || s(u.value));
            }),
            T(this, 'handleContainerMouseDown', (e) => {
                let n;
                let { disabled: r, maxValue: i, minValue: a, asValueChanges: o, onValueChange: s, stickToMarkers: l } = this.props,
                    { sortedMarkers: u, markerPositions: c } = this.state;
                if (r) return;
                let { clientX: d, currentTarget: f } = e;
                if (!(0, m.k)(f)) return;
                let { left: p, width: h } = f.getBoundingClientRect(),
                    _ = (d - p) / h;
                if (l) {
                    let { nextClosestMarkerIndex: e } = c.reduce(
                        (e, n, r) => {
                            let i = Math.abs(n / 100 - _);
                            return i <= e.smallestDelta
                                ? {
                                      smallestDelta: i,
                                      nextClosestMarkerIndex: r
                                  }
                                : e;
                        },
                        {
                            smallestDelta: 1,
                            nextClosestMarkerIndex: -1
                        }
                    );
                    if (-1 === e) return;
                    this.setState({ closestMarkerIndex: e }), (n = u[e]);
                } else {
                    let r = i - a;
                    (n = a + r * _), this.setState({ value: n }), this.handleMouseDown(e);
                }
                null != s && s(n), null != o && o(n);
            }),
            T(this, 'handleKeyDown', (e) => {
                let { disabled: n, orientation: r, keyboardStep: i = 1 } = this.props;
                if (n) return;
                let { key: a } = e,
                    o = [],
                    s = [];
                switch (r) {
                    case 'horizontal':
                        (o = ['ArrowRight']), (s = ['ArrowLeft']);
                        break;
                    case 'vertical':
                        (o = ['ArrowUp']), (s = ['ArrowDown']);
                        break;
                    default:
                        (o = ['ArrowRight', 'ArrowUp']), (s = ['ArrowLeft', 'ArrowDown']);
                }
                s.includes(a) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i)) : o.includes(a) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i));
            }),
            T(this, 'handleMouseDown', (e) => {
                var n, r;
                if (this.props.disabled) return;
                e.stopPropagation();
                let { current: i } = this.containerRef;
                if ((null == i || null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('mousemove', this.handleMouseMove, !0), null == i || null === (r = i.ownerDocument) || void 0 === r || r.addEventListener('mouseup', this.handleMouseUp, !0), !(0, m.k)(i))) throw Error('[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element');
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: i.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex
                });
            }),
            T(this, 'handleMouseUp', (e) => {
                e.stopPropagation(), this.reset();
                let { onValueChange: n, stickToMarkers: r } = this.props,
                    { newClosestIndex: i } = this.state;
                r && null != i
                    ? (null == n || n(this.state.sortedMarkers[i]),
                      this.setState({
                          newClosestIndex: null,
                          closestMarkerIndex: i
                      }))
                    : null == n || n(this.state.value),
                    this.setState({ active: !1 });
            }),
            T(this, 'handleMouseMove', (e) => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
            }),
            T(this, 'onFocus', () => {
                this.setState({ focused: !0 });
            }),
            T(this, 'onBlur', () => {
                this.setState({ focused: !1 });
            }),
            T(this, 'moveSmoothly', (e) => {
                let { minValue: n, maxValue: r, asValueChanges: i } = this.props,
                    { boundingRect: a } = this.state;
                if (null == a) return;
                let { left: o, right: s } = a,
                    l = r - n,
                    u = s - o,
                    c = Math.min(Math.max(n + ((e.clientX - o) / u) * l, n), r);
                null == i || i(c), this.setState({ value: c });
            }),
            (this.state = {
                active: !1,
                focused: !1,
                ...C(e)
            });
    }
}
function R(e) {
    let { active: n, keyboardFocused: r, children: i } = e,
        a = (0, b.Q3)('Slider'),
        [o, s] = c.useState(!1),
        l = (0, g.q)({
            '--grabber-size': r || n || o ? '20px' : '16px',
            '--bar-size': r || n || o ? '6px' : '4px',
            config: {
                ..._.config.stiff,
                duration: 100
            }
        });
    return a
        ? i({
              sliderStyles: l,
              setHovered: s
          })
        : i();
}
T(N, 'defaultProps', {
    initialValue: 10,
    minValue: 0,
    maxValue: 100,
    keyboardStep: 1,
    handleSize: 10,
    disabled: !1,
    stickToMarkers: !1,
    fillStyles: {}
});
