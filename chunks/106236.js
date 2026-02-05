"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(563495),
    c = n(621466),
    d = n(158954),
    _ = n(990078),
    f = n(775602),
    p = n(785294);
function h(e, t) {
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
function m(e) {
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: a } = e,
        s = [],
        o = [];
    if (null == t) return { min: r, max: i, range: i - r, sortedMarkers: s, markerPositions: o };
    let l = h(n, (s = t.sort((e, t) => e - t))),
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
    return { min: u, max: c, range: d, sortedMarkers: s, markerPositions: o, closestMarkerIndex: l };
}
function g(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return { value: t ?? n, initialValueProp: e.initialValue, newClosestIndex: null, ...m(e) };
}
class E extends i.PureComponent {
    static defaultProps = {
        initialValue: 10,
        minValue: 0,
        maxValue: 100,
        keyboardStep: 1,
        handleSize: 10,
        disabled: !1,
        stickToMarkers: !1,
        fillStyles: {},
    };
    containerRef = i.createRef();
    grabberRef = i.createRef();
    constructor(e) {
        super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...g(e, e.initialValue) });
    }
    static getDerivedStateFromProps(e, t) {
        return null != e.value && e.value !== t.value
            ? { ...g(e, e.value), active: t.active }
            : e.initialValue !== t.initialValueProp
              ? { ...g(e, t.value), active: t.active }
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
        let {
                value: e,
                active: t,
                focused: n,
                sortedMarkers: i,
                markerPositions: a,
                closestMarkerIndex: o,
                newClosestIndex: l,
                min: c,
                max: h,
            } = this.state,
            {
                disabled: m,
                stickToMarkers: g,
                className: E,
                children: I,
                barStyles: T,
                fillStyles: y,
                mini: S,
                hideBubble: v,
                defaultValue: C,
                orientation: b,
                onValueRender: N,
                renderMarker: R,
                getAriaValueText: O,
                barClassName: D,
                grabberClassName: L,
                grabberStyles: w = {},
                markerPosition: x = 0,
                "aria-hidden": P,
                "aria-label": M,
                "aria-labelledby": k,
                "aria-describedby": U,
            } = this.props,
            { fieldProps: G } = (0, d.ndh)(this.props),
            V = 0;
        g ? null != a && (null != l ? (V = a[l]) : null != o && (V = a[o])) : (V = this.scaleValue(e)),
            (V = Math.min(Math.max(V, 0), 100));
        let F = `${V}%`,
            B =
                null != a && null != i
                    ? a.map((e, t) => {
                          let n = i[t],
                              a = null != C && C === n,
                              o = this.renderMark(n);
                          return (0, r.jsx)(
                              "div",
                              {
                                  className: s()(p.mark, {
                                      [p.defaultValue]: a,
                                      [p.markAbove]: 0 === x,
                                      [p.markBelow]: 1 === x,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != R
                                          ? R(n)
                                          : (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)("div", { className: p.markValue, children: o }),
                                                    (0, r.jsx)("div", {
                                                        className: p[`markDash${null == o ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            j = null != N ? N(e) : `${V.toFixed(0)}%`,
            H = O?.(e) ?? void 0;
        return (0, r.jsx)(d.D0$, {
            ...G,
            children: (i) =>
                (0, r.jsx)(A, {
                    active: t,
                    keyboardFocused: n && f.A.keyboardModeEnabled,
                    children: (a) =>
                        (0, r.jsx)(d.vN3, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, r.jsxs)(u.animated.div, {
                                className: s()(p.slider, E, {
                                    [p.hasMarks]: (B?.length ?? 0) > 0,
                                    [p.disabled]: m,
                                    [p.mini]: S,
                                }),
                                style: a?.sliderStyles,
                                id: i.controlId,
                                "aria-valuemin": c,
                                "aria-valuemax": h,
                                "aria-valuenow": e,
                                "aria-disabled": m,
                                "aria-orientation": b,
                                "aria-hidden": P,
                                "aria-label": M,
                                "aria-labelledby": k,
                                "aria-describedby": U ?? i.describedById,
                                "aria-errormessage": i.errorMessageId,
                                "aria-invalid": null != i.errorMessageId,
                                "aria-valuetext": H,
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
                                onMouseEnter: () => a?.setHovered(!0),
                                onMouseLeave: () => a?.setHovered(!1),
                                ref: this.containerRef,
                                children: [
                                    (0, r.jsx)("div", { className: p.track, children: B }),
                                    (0, r.jsx)("div", {
                                        className: s()(p.bar, D),
                                        style: T,
                                        children: (0, r.jsx)("div", {
                                            className: p.barFill,
                                            style: { ...y, width: F },
                                        }),
                                    }),
                                    I,
                                    (0, r.jsx)("div", {
                                        className: p.track,
                                        children: (0, r.jsx)(_.m, {
                                            __unsupportedReactNodeAsText: v || g ? null : j,
                                            forceOpen: t || (n && f.A.keyboardModeEnabled),
                                            children: (0, r.jsx)("div", {
                                                className: s()(p.grabber, L),
                                                style: { ...w, left: F },
                                                onMouseDown: this.handleMouseDown,
                                                ref: this.grabberRef,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                }),
        });
    }
    reset() {
        this.containerRef.current?.ownerDocument?.removeEventListener("mousemove", this.handleMouseMove, !0),
            this.containerRef.current?.ownerDocument?.removeEventListener("mouseup", this.handleMouseUp, !0);
    }
    scaleValue(e) {
        return (100 * (e - this.state.min)) / this.state.range;
    }
    unscaleValue(e) {
        return (e * this.state.range) / 100 + this.state.min;
    }
    moveGrabber = (e) => {
        let { sortedMarkers: t, value: n, min: r, max: i } = this.state,
            { asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
            u = {};
        if (o) {
            let r = t.indexOf(n);
            if (r < 0) return;
            let i = r + e,
                a = t[i];
            if (null == a) return;
            (u.value = a), (u.closestMarkerIndex = i), (u.newClosestIndex = i);
        } else u.value = l().clamp(n + e, r, i);
        this.setState(u), u.value !== this.state.value && (a?.(u.value), s?.(u.value));
    };
    focus() {
        this.containerRef.current?.focus();
    }
    blur() {
        this.containerRef.current?.blur();
    }
    handleContainerMouseDown = (e) => {
        let t,
            {
                disabled: n,
                maxValue: r,
                minValue: i,
                asValueChanges: a,
                onValueChange: s,
                stickToMarkers: o,
            } = this.props,
            { sortedMarkers: l, markerPositions: u } = this.state;
        if (n) return;
        let { clientX: d, currentTarget: _ } = e;
        if (!(0, c.vq)(_)) return;
        let { left: f, width: p } = _.getBoundingClientRect(),
            h = (d - f) / p;
        if (o) {
            let { nextClosestMarkerIndex: e } = u.reduce(
                (e, t, n) => {
                    let r = Math.abs(t / 100 - h);
                    return r <= e.smallestDelta ? { smallestDelta: r, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === e) return;
            this.setState({ closestMarkerIndex: e }), (t = l[e]);
        } else {
            let n = r - i;
            (t = i + n * h), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
        }
        null != s && s(t), null != a && a(t);
    };
    handleKeyDown = (e) => {
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
    };
    handleMouseDown = (e) => {
        if (this.props.disabled) return;
        e.stopPropagation();
        let { current: t } = this.containerRef;
        if (
            (t?.ownerDocument?.addEventListener("mousemove", this.handleMouseMove, !0),
            t?.ownerDocument?.addEventListener("mouseup", this.handleMouseUp, !0),
            !(0, c.vq)(t))
        )
            throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
        this.setState({
            x: e.clientX,
            active: !0,
            boundingRect: t.getBoundingClientRect(),
            newClosestIndex: this.state.closestMarkerIndex,
        });
    };
    handleMouseUp = (e) => {
        e.stopPropagation(), this.reset();
        let { onValueChange: t, stickToMarkers: n } = this.props,
            { newClosestIndex: r } = this.state;
        n && null != r
            ? (t?.(this.state.sortedMarkers[r]), this.setState({ newClosestIndex: null, closestMarkerIndex: r }))
            : (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) &&
              t?.(this.state.value),
            this.setState({ active: !1, dragStartValue: void 0 });
    };
    handleMouseMove = (e) => {
        e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
    };
    onFocus = () => {
        this.setState({ focused: !0 });
    };
    onBlur = () => {
        this.setState({ focused: !1 });
    };
    moveStaggered(e) {
        let t,
            { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: a, sortedMarkers: s } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: u } = n;
        if (e.clientX <= l || e.clientX >= u) return;
        let c = u - l,
            d = (e.clientX - r) / c,
            _ = a[i] + 100 * d;
        null != (t = this.props.equidistant ? h(_, a) : h(this.unscaleValue(_), s)) && o?.(s[t]),
            this.setState({ newClosestIndex: t });
    }
    moveSmoothly = (e) => {
        let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
            { boundingRect: i } = this.state;
        if (null == i) return;
        let { left: a, right: s } = i,
            o = n - t,
            l = s - a,
            u = Math.min(Math.max(t + ((e.clientX - a) / l) * o, t), n);
        r?.(u), this.setState({ value: u });
    };
}
function A(e) {
    let { active: t, keyboardFocused: n, children: r } = e,
        [a, s] = i.useState(!1);
    return r({
        sliderStyles: (0, d.zhh)({
            "--grabber-size": n || t || a ? "20px" : "16px",
            "--bar-size": n || t || a ? "6px" : "4px",
            config: { ...u.config.stiff, duration: 100 },
        }),
        setHovered: s,
    });
}
