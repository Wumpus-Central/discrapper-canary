n.d(t, { i: () => T }), n(230036), n(411104), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    c = n.n(l),
    u = n(642128),
    d = n(374470),
    f = n(143450),
    _ = n(84735),
    p = n(981729),
    h = n(607070),
    m = n(540059),
    g = n(251574);
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (e === i) return r;
        if (e < i) {
            if (0 === n || i - e < n) return r;
            return r - 1;
        }
        n = e - i;
    }
    return null;
}
function I(e) {
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: o } = e,
        a = [],
        s = [];
    if (null == t)
        return {
            min: r,
            max: i,
            range: i - r,
            sortedMarkers: a,
            markerPositions: s
        };
    let l = O(n, (a = t.sort((e, t) => e - t))),
        c = a[0],
        u = a[a.length - 1],
        d = u - c;
    if (o) {
        let e = 100 / (a.length - 1);
        s = a.map((t, n) => n * e);
    } else {
        let e = (e) => (100 * (e - c)) / d;
        s = a.map((t) => e(t));
    }
    return {
        min: c,
        max: u,
        range: d,
        sortedMarkers: a,
        markerPositions: s,
        closestMarkerIndex: l
    };
}
function S(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return b(
        {
            value: null != t ? t : n,
            initialValueProp: e.initialValue,
            newClosestIndex: null
        },
        I(e)
    );
}
class T extends (r = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.initialValue !== t.initialValueProp ? v(b({}, S(e, t.value)), { active: t.active }) : null;
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
        let { value: t, active: n, focused: r, sortedMarkers: o, markerPositions: a, closestMarkerIndex: l, newClosestIndex: c, min: d, max: f } = this.state,
            { disabled: m, stickToMarkers: E, className: y, children: O, barStyles: I, fillStyles: S, mini: T, hideBubble: A, defaultValue: C, orientation: R, onValueRender: P, renderMarker: w, getAriaValueText: D, barClassName: L, grabberClassName: x, grabberStyles: M = {}, markerPosition: k = 0, 'aria-hidden': j, 'aria-label': U, 'aria-labelledby': G, 'aria-describedby': B } = this.props,
            F = 0;
        E ? null != a && (null != c ? (F = a[c]) : null != l && (F = a[l])) : (F = this.scaleValue(t));
        let V = ''.concat(F, '%'),
            Z =
                null != a && null != o
                    ? a.map((e, t) => {
                          let n = o[t],
                              r = null != C && C === n,
                              a = this.renderMark(n);
                          return (0, i.jsx)(
                              'div',
                              {
                                  className: s()(g.mark, {
                                      [g.defaultValue]: r,
                                      [g.markAbove]: 0 === k,
                                      [g.markBelow]: 1 === k
                                  }),
                                  style: { left: ''.concat(e, '%') },
                                  children:
                                      null != w
                                          ? w(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)('div', {
                                                        className: g.markValue,
                                                        children: a
                                                    }),
                                                    (0, i.jsx)('div', { className: g['markDash'.concat(null == a ? 'simple' : '')] })
                                                ]
                                            })
                              },
                              t
                          );
                      })
                    : null,
            H = null != P ? P(t) : ''.concat(F.toFixed(0), '%'),
            W = null != (e = null == D ? void 0 : D(t)) ? e : void 0;
        return (0, i.jsx)(N, {
            active: n,
            keyboardFocused: r && h.Z.keyboardModeEnabled,
            children: (e) => {
                var o;
                return (0, i.jsx)(_.t, {
                    focusTarget: this.containerRef,
                    ringTarget: this.grabberRef,
                    children: (0, i.jsxs)(u.animated.div, {
                        className: s()(g.slider, y, {
                            [g.hasMarks]: (null != (o = null == Z ? void 0 : Z.length) ? o : 0) > 0,
                            [g.disabled]: m,
                            [g.mini]: T
                        }),
                        style: null == e ? void 0 : e.sliderStyles,
                        'aria-valuemin': d,
                        'aria-valuemax': f,
                        'aria-valuenow': t,
                        'aria-disabled': m,
                        'aria-orientation': R,
                        'aria-hidden': j,
                        'aria-label': U,
                        'aria-labelledby': G,
                        'aria-describedby': B,
                        'aria-valuetext': W,
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
                            (0, i.jsx)('div', {
                                className: g.track,
                                children: Z
                            }),
                            (0, i.jsx)('div', {
                                className: s()(g.bar, L),
                                style: I,
                                children: (0, i.jsx)('div', {
                                    className: g.barFill,
                                    style: v(b({}, S), { width: V })
                                })
                            }),
                            O,
                            (0, i.jsx)('div', {
                                className: g.track,
                                children: (0, i.jsx)(p.u, {
                                    color: p.u.Colors.GREY,
                                    hideOnClick: !1,
                                    text: A || E ? null : H,
                                    forceOpen: n || (r && h.Z.keyboardModeEnabled),
                                    children: (e) =>
                                        (0, i.jsx)(
                                            'div',
                                            v(b({}, e), {
                                                className: s()(g.grabber, x),
                                                style: v(b({}, M), { left: V }),
                                                onMouseDown: this.handleMouseDown,
                                                ref: this.grabberRef
                                            })
                                        )
                                })
                            })
                        ]
                    })
                });
            }
        });
    }
    reset() {
        var e, t, n, r;
        null == (t = this.containerRef.current) || null == (e = t.ownerDocument) || e.removeEventListener('mousemove', this.handleMouseMove, !0), null == (r = this.containerRef.current) || null == (n = r.ownerDocument) || n.removeEventListener('mouseup', this.handleMouseUp, !0);
    }
    scaleValue(e) {
        return (100 * (e - this.state.min)) / this.state.range;
    }
    unscaleValue(e) {
        return (e * this.state.range) / 100 + this.state.min;
    }
    focus() {
        var e;
        null == (e = this.containerRef.current) || e.focus();
    }
    blur() {
        var e;
        null == (e = this.containerRef.current) || e.blur();
    }
    moveStaggered(e) {
        let t,
            { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: o, sortedMarkers: a } = this.state,
            { asValueChanges: s } = this.props;
        if (null == n) return;
        let { left: l, right: c } = n;
        if (e.clientX <= l || e.clientX >= c) return;
        let u = c - l,
            d = (e.clientX - r) / u,
            f = o[i] + 100 * d;
        null != (t = this.props.equidistant ? O(f, o) : O(this.unscaleValue(f), a)) && (null == s || s(a[t])), this.setState({ newClosestIndex: t });
    }
    constructor(e) {
        super(e),
            E(this, 'containerRef', o.createRef()),
            E(this, 'grabberRef', o.createRef()),
            E(this, 'moveGrabber', (e) => {
                let { sortedMarkers: t, value: n, min: r, max: i } = this.state,
                    { asValueChanges: o, onValueChange: a, stickToMarkers: s } = this.props,
                    l = {};
                if (s) {
                    let r = t.indexOf(n);
                    if (r < 0) return;
                    let i = r + e,
                        o = t[i];
                    if (null == o) return;
                    (l.value = o), (l.closestMarkerIndex = i), (l.newClosestIndex = i);
                } else l.value = c().clamp(n + e, r, i);
                this.setState(l), l.value !== this.state.value && (null == o || o(l.value), null == a || a(l.value));
            }),
            E(this, 'handleContainerMouseDown', (e) => {
                let t,
                    { disabled: n, maxValue: r, minValue: i, asValueChanges: o, onValueChange: a, stickToMarkers: s } = this.props,
                    { sortedMarkers: l, markerPositions: c } = this.state;
                if (n) return;
                let { clientX: u, currentTarget: f } = e;
                if (!(0, d.k)(f)) return;
                let { left: _, width: p } = f.getBoundingClientRect(),
                    h = (u - _) / p;
                if (s) {
                    let { nextClosestMarkerIndex: e } = c.reduce(
                        (e, t, n) => {
                            let r = Math.abs(t / 100 - h);
                            return r <= e.smallestDelta
                                ? {
                                      smallestDelta: r,
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
                    let n = r - i;
                    (t = i + n * h),
                        this.setState({
                            value: t,
                            dragStartValue: t
                        }),
                        this.handleMouseDown(e);
                }
                null != a && a(t), null != o && o(t);
            }),
            E(this, 'handleKeyDown', (e) => {
                let { disabled: t, orientation: n, keyboardStep: r = 1 } = this.props;
                if (t) return;
                let { key: i } = e,
                    o = [],
                    a = [];
                switch (n) {
                    case 'horizontal':
                        (o = ['ArrowRight']), (a = ['ArrowLeft']);
                        break;
                    case 'vertical':
                        (o = ['ArrowUp']), (a = ['ArrowDown']);
                        break;
                    default:
                        (o = ['ArrowRight', 'ArrowUp']), (a = ['ArrowLeft', 'ArrowDown']);
                }
                a.includes(i) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r)) : o.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
            }),
            E(this, 'handleMouseDown', (e) => {
                var t, n;
                if (this.props.disabled) return;
                e.stopPropagation();
                let { current: r } = this.containerRef;
                if ((null == r || null == (t = r.ownerDocument) || t.addEventListener('mousemove', this.handleMouseMove, !0), null == r || null == (n = r.ownerDocument) || n.addEventListener('mouseup', this.handleMouseUp, !0), !(0, d.k)(r))) throw Error('[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element');
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: r.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex
                });
            }),
            E(this, 'handleMouseUp', (e) => {
                e.stopPropagation(), this.reset();
                let { onValueChange: t, stickToMarkers: n } = this.props,
                    { newClosestIndex: r } = this.state;
                n && null != r
                    ? (null == t || t(this.state.sortedMarkers[r]),
                      this.setState({
                          newClosestIndex: null,
                          closestMarkerIndex: r
                      }))
                    : (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) && (null == t || t(this.state.value)),
                    this.setState({
                        active: !1,
                        dragStartValue: void 0
                    });
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
                let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
                    { boundingRect: i } = this.state;
                if (null == i) return;
                let { left: o, right: a } = i,
                    s = n - t,
                    l = a - o,
                    c = Math.min(Math.max(t + ((e.clientX - o) / l) * s, t), n);
                null == r || r(c), this.setState({ value: c });
            }),
            (this.state = b(
                {
                    active: !1,
                    focused: !1,
                    dragStartValue: void 0
                },
                S(e, e.initialValue)
            ));
    }
}
function N(e) {
    let { active: t, keyboardFocused: n, children: r } = e,
        i = (0, m.Q3)('Slider'),
        [a, s] = o.useState(!1),
        l = (0, f.q)({
            '--grabber-size': n || t || a ? '20px' : '16px',
            '--bar-size': n || t || a ? '6px' : '4px',
            config: v(b({}, u.config.stiff), { duration: 100 })
        });
    return i
        ? r({
              sliderStyles: l,
              setHovered: s
          })
        : r();
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
