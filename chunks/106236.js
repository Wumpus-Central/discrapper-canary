n.d(t, {
    A: () => v,
}),
    n(638769),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(735438),
    c = n.n(l),
    u = n(108531),
    d = n(621466),
    f = n(158954),
    p = n(990078),
    _ = n(775602),
    h = n(785294);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
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

function O(e) {
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: a } = e,
        s = [],
        o = [];
    if (null == t)
        return {
            min: r,
            max: i,
            range: i - r,
            sortedMarkers: s,
            markerPositions: o,
        };
    let l = y(n, (s = t.sort((e, t) => e - t))),
        c = s[0],
        u = s[s.length - 1],
        d = u - c;
    if (a) {
        let e = 100 / (s.length - 1);
        o = s.map((t, n) => n * e);
    } else {
        let e = (e) => (100 * (e - c)) / d;
        o = s.map((t) => e(t));
    }
    return {
        min: c,
        max: u,
        range: d,
        sortedMarkers: s,
        markerPositions: o,
        closestMarkerIndex: l,
    };
}

function A(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return g(
        {
            value: null != t ? t : n,
            initialValueProp: e.initialValue,
            newClosestIndex: null,
        },
        O(e),
    );
}
class v extends (r = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return null != e.value && e.value !== t.value
            ? b(g({}, A(e, e.value)), {
                  active: t.active,
              })
            : e.initialValue !== t.initialValueProp
              ? b(g({}, A(e, t.value)), {
                    active: t.active,
                })
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
        let {
                value: t,
                active: n,
                focused: r,
                sortedMarkers: a,
                markerPositions: s,
                closestMarkerIndex: l,
                newClosestIndex: c,
                min: d,
                max: m,
            } = this.state,
            {
                disabled: E,
                stickToMarkers: y,
                className: O,
                children: A,
                barStyles: v,
                fillStyles: I,
                mini: T,
                hideBubble: C,
                defaultValue: N,
                orientation: R,
                onValueRender: w,
                renderMarker: P,
                getAriaValueText: D,
                barClassName: x,
                grabberClassName: L,
                grabberStyles: j = {},
                markerPosition: M = 0,
                "aria-hidden": k,
                "aria-label": U,
                "aria-labelledby": G,
                "aria-describedby": V,
            } = this.props,
            { fieldProps: F } = (0, f.ndh)(this.props),
            B = 0;
        y ? null != s && (null != c ? (B = s[c]) : null != l && (B = s[l])) : (B = this.scaleValue(t)),
            (B = Math.min(Math.max(B, 0), 100));
        let H = "".concat(B, "%"),
            Y =
                null != s && null != a
                    ? s.map((e, t) => {
                          let n = a[t],
                              r = null != N && N === n,
                              s = this.renderMark(n);
                          return (0, i.jsx)(
                              "div",
                              {
                                  className: o()(h.mark, {
                                      [h.defaultValue]: r,
                                      [h.markAbove]: 0 === M,
                                      [h.markBelow]: 1 === M,
                                  }),
                                  style: {
                                      left: "".concat(e, "%"),
                                  },
                                  children:
                                      null != P
                                          ? P(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("div", {
                                                        className: h.markValue,
                                                        children: s,
                                                    }),
                                                    (0, i.jsx)("div", {
                                                        className: h["markDash".concat(null == s ? "simple" : "")],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            W = null != w ? w(t) : "".concat(B.toFixed(0), "%"),
            K = null != (e = null == D ? void 0 : D(t)) ? e : void 0;
        return (0, i.jsx)(
            f.D0$,
            b(g({}, F), {
                children: (e) =>
                    (0, i.jsx)(S, {
                        active: n,
                        keyboardFocused: r && _.A.keyboardModeEnabled,
                        children: (a) => {
                            var s;
                            return (0, i.jsx)(f.vN3, {
                                focusTarget: this.containerRef,
                                ringTarget: this.grabberRef,
                                children: (0, i.jsxs)(u.animated.div, {
                                    className: o()(h.slider, O, {
                                        [h.hasMarks]: (null != (s = null == Y ? void 0 : Y.length) ? s : 0) > 0,
                                        [h.disabled]: E,
                                        [h.mini]: T,
                                    }),
                                    style: null == a ? void 0 : a.sliderStyles,
                                    id: e.controlId,
                                    "aria-valuemin": d,
                                    "aria-valuemax": m,
                                    "aria-valuenow": t,
                                    "aria-disabled": E,
                                    "aria-orientation": R,
                                    "aria-hidden": k,
                                    "aria-label": U,
                                    "aria-labelledby": G,
                                    "aria-describedby": null != V ? V : e.describedById,
                                    "aria-errormessage": e.errorMessageId,
                                    "aria-invalid": null != e.errorMessageId,
                                    "aria-valuetext": K,
                                    role: "slider",
                                    tabIndex: 0,
                                    onKeyDown: this.handleKeyDown,
                                    onMouseDown: this.handleContainerMouseDown,
                                    onFocus: () => {
                                        this.onFocus();
                                    },
                                    onBlur: () => {
                                        this.onBlur();
                                    },
                                    onMouseEnter: () => (null == a ? void 0 : a.setHovered(!0)),
                                    onMouseLeave: () => (null == a ? void 0 : a.setHovered(!1)),
                                    ref: this.containerRef,
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: h.track,
                                            children: Y,
                                        }),
                                        (0, i.jsx)("div", {
                                            className: o()(h.bar, x),
                                            style: v,
                                            children: (0, i.jsx)("div", {
                                                className: h.barFill,
                                                style: b(g({}, I), {
                                                    width: H,
                                                }),
                                            }),
                                        }),
                                        A,
                                        (0, i.jsx)("div", {
                                            className: h.track,
                                            children: (0, i.jsx)(p.m, {
                                                __unsupportedReactNodeAsText: C || y ? null : W,
                                                forceOpen: n || (r && _.A.keyboardModeEnabled),
                                                children: (0, i.jsx)("div", {
                                                    className: o()(h.grabber, L),
                                                    style: b(g({}, j), {
                                                        left: H,
                                                    }),
                                                    onMouseDown: this.handleMouseDown,
                                                    ref: this.grabberRef,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            });
                        },
                    }),
            }),
        );
    }
    reset() {
        var e, t, n, r;
        null == (t = this.containerRef.current) ||
            null == (e = t.ownerDocument) ||
            e.removeEventListener("mousemove", this.handleMouseMove, !0),
            null == (r = this.containerRef.current) ||
                null == (n = r.ownerDocument) ||
                n.removeEventListener("mouseup", this.handleMouseUp, !0);
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
            { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: a, sortedMarkers: s } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: c } = n;
        if (e.clientX <= l || e.clientX >= c) return;
        let u = c - l,
            d = (e.clientX - r) / u,
            f = a[i] + 100 * d;
        null != (t = this.props.equidistant ? y(f, a) : y(this.unscaleValue(f), s)) && (null == o || o(s[t])),
            this.setState({
                newClosestIndex: t,
            });
    }
    constructor(e) {
        super(e),
            m(this, "containerRef", a.createRef()),
            m(this, "grabberRef", a.createRef()),
            m(this, "moveGrabber", (e) => {
                let { sortedMarkers: t, value: n, min: r, max: i } = this.state,
                    { asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
                    l = {};
                if (o) {
                    let r = t.indexOf(n);
                    if (r < 0) return;
                    let i = r + e,
                        a = t[i];
                    if (null == a) return;
                    (l.value = a), (l.closestMarkerIndex = i), (l.newClosestIndex = i);
                } else l.value = c().clamp(n + e, r, i);
                this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == s || s(l.value));
            }),
            m(this, "handleContainerMouseDown", (e) => {
                let t,
                    {
                        disabled: n,
                        maxValue: r,
                        minValue: i,
                        asValueChanges: a,
                        onValueChange: s,
                        stickToMarkers: o,
                    } = this.props,
                    { sortedMarkers: l, markerPositions: c } = this.state;
                if (n) return;
                let { clientX: u, currentTarget: f } = e;
                if (!(0, d.vq)(f)) return;
                let { left: p, width: _ } = f.getBoundingClientRect(),
                    h = (u - p) / _;
                if (o) {
                    let { nextClosestMarkerIndex: e } = c.reduce(
                        (e, t, n) => {
                            let r = Math.abs(t / 100 - h);
                            return r <= e.smallestDelta
                                ? {
                                      smallestDelta: r,
                                      nextClosestMarkerIndex: n,
                                  }
                                : e;
                        },
                        {
                            smallestDelta: 1,
                            nextClosestMarkerIndex: -1,
                        },
                    );
                    if (-1 === e) return;
                    this.setState({
                        closestMarkerIndex: e,
                    }),
                        (t = l[e]);
                } else {
                    let n = r - i;
                    (t = i + n * h),
                        this.setState({
                            value: t,
                            dragStartValue: t,
                        }),
                        this.handleMouseDown(e);
                }
                null != s && s(t), null != a && a(t);
            }),
            m(this, "handleKeyDown", (e) => {
                let { disabled: t, orientation: n, keyboardStep: r = 1 } = this.props;
                if (t) return;
                let { key: i } = e,
                    a = [],
                    s = [];
                switch (n) {
                    case "horizontal":
                        (a = ["ArrowRight"]), (s = ["ArrowLeft"]);
                        break;
                    case "vertical":
                        (a = ["ArrowUp"]), (s = ["ArrowDown"]);
                        break;
                    default:
                        (a = ["ArrowRight", "ArrowUp"]), (s = ["ArrowLeft", "ArrowDown"]);
                }
                s.includes(i)
                    ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r))
                    : a.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
            }),
            m(this, "handleMouseDown", (e) => {
                var t, n;
                if (this.props.disabled) return;
                e.stopPropagation();
                let { current: r } = this.containerRef;
                if (
                    (null == r ||
                        null == (t = r.ownerDocument) ||
                        t.addEventListener("mousemove", this.handleMouseMove, !0),
                    null == r || null == (n = r.ownerDocument) || n.addEventListener("mouseup", this.handleMouseUp, !0),
                    !(0, d.vq)(r))
                )
                    throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: r.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex,
                });
            }),
            m(this, "handleMouseUp", (e) => {
                e.stopPropagation(), this.reset();
                let { onValueChange: t, stickToMarkers: n } = this.props,
                    { newClosestIndex: r } = this.state;
                n && null != r
                    ? (null == t || t(this.state.sortedMarkers[r]),
                      this.setState({
                          newClosestIndex: null,
                          closestMarkerIndex: r,
                      }))
                    : (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) &&
                      (null == t || t(this.state.value)),
                    this.setState({
                        active: !1,
                        dragStartValue: void 0,
                    });
            }),
            m(this, "handleMouseMove", (e) => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
            }),
            m(this, "onFocus", () => {
                this.setState({
                    focused: !0,
                });
            }),
            m(this, "onBlur", () => {
                this.setState({
                    focused: !1,
                });
            }),
            m(this, "moveSmoothly", (e) => {
                let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
                    { boundingRect: i } = this.state;
                if (null == i) return;
                let { left: a, right: s } = i,
                    o = n - t,
                    l = s - a,
                    c = Math.min(Math.max(t + ((e.clientX - a) / l) * o, t), n);
                null == r || r(c),
                    this.setState({
                        value: c,
                    });
            }),
            (this.state = g(
                {
                    active: !1,
                    focused: !1,
                    dragStartValue: void 0,
                },
                A(e, e.initialValue),
            ));
    }
}

function S(e) {
    let { active: t, keyboardFocused: n, children: r } = e,
        [i, s] = a.useState(!1);
    return r({
        sliderStyles: (0, f.zhh)({
            "--grabber-size": n || t || i ? "20px" : "16px",
            "--bar-size": n || t || i ? "6px" : "4px",
            config: b(g({}, u.config.stiff), {
                duration: 100,
            }),
        }),
        setHovered: s,
    });
}
m(v, "defaultProps", {
    initialValue: 10,
    minValue: 0,
    maxValue: 100,
    keyboardStep: 1,
    handleSize: 10,
    disabled: !1,
    stickToMarkers: !1,
    fillStyles: {},
});
