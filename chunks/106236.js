"use strict";
n.d(t, { A: () => A });
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
    h = n(244984);
function p(e, t) {
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
function g(e) {
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: a } = e,
        s = [],
        o = [];
    if (null == t) return { min: r, max: i, range: i - r, sortedMarkers: s, markerPositions: o };
    let l = p(n, (s = t.sort((e, t) => e - t))),
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
function E(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return { value: t ?? n, initialValueProp: e.initialValue, newClosestIndex: null, ...g(e) };
}
class A extends i.PureComponent {
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
        super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...E(e, e.initialValue) });
    }
    static getDerivedStateFromProps(e, t) {
        return null != e.value && e.value !== t.value
            ? { ...E(e, e.value), active: t.active }
            : e.initialValue !== t.initialValueProp
              ? { ...E(e, t.value), active: t.active }
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
                max: p,
            } = this.state,
            {
                disabled: g,
                stickToMarkers: E,
                className: A,
                children: T,
                barStyles: y,
                fillStyles: S,
                mini: v,
                hideBubble: C,
                defaultValue: b,
                orientation: N,
                onValueRender: R,
                renderMarker: O,
                getAriaValueText: D,
                barClassName: L,
                grabberClassName: w,
                grabberStyles: x = {},
                markerPosition: P = 0,
                "aria-hidden": M,
                "aria-label": k,
                "aria-labelledby": U,
                "aria-describedby": G,
            } = this.props,
            { fieldProps: F } = (0, d.ndh)(this.props),
            V = 0;
        E ? null != a && (null != l ? (V = a[l]) : null != o && (V = a[o])) : (V = this.scaleValue(e)),
            (V = Math.min(Math.max(V, 0), 100));
        let B = `${V}%`,
            j =
                null != a && null != i
                    ? a.map((e, t) => {
                          let n = i[t],
                              a = null != b && b === n,
                              o = this.renderMark(n);
                          return (0, r.jsx)(
                              "div",
                              {
                                  className: s()(h.mark, {
                                      [h.defaultValue]: a,
                                      [h.markAbove]: 0 === P,
                                      [h.markBelow]: 1 === P,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != O
                                          ? O(n)
                                          : (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)("div", { className: h.markValue, children: o }),
                                                    (0, r.jsx)("div", {
                                                        className: h[`markDash${null == o ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            H = null != R ? R(e) : `${V.toFixed(0)}%`,
            Y = D?.(e) ?? void 0;
        return (0, r.jsx)(d.D0$, {
            ...F,
            children: (i) =>
                (0, r.jsx)(I, {
                    active: t,
                    keyboardFocused: n && f.A.keyboardModeEnabled,
                    children: (a) =>
                        (0, r.jsx)(d.vN3, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, r.jsxs)(u.animated.div, {
                                className: s()(h.slider, A, {
                                    [h.hasMarks]: (j?.length ?? 0) > 0,
                                    [h.disabled]: g,
                                    [h.mini]: v,
                                }),
                                style: a?.sliderStyles,
                                id: i.controlId,
                                "aria-valuemin": c,
                                "aria-valuemax": p,
                                "aria-valuenow": e,
                                "aria-disabled": g,
                                "aria-orientation": N,
                                "aria-hidden": M,
                                "aria-label": k,
                                "aria-labelledby": U,
                                "aria-describedby": G ?? i.describedById,
                                "aria-errormessage": i.errorMessageId,
                                "aria-invalid": null != i.errorMessageId,
                                "aria-valuetext": Y,
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
                                    (0, r.jsx)("div", { className: h.track, children: j }),
                                    (0, r.jsx)("div", {
                                        className: s()(h.bar, L),
                                        style: y,
                                        children: (0, r.jsx)("div", {
                                            className: h.barFill,
                                            style: { ...S, width: B },
                                        }),
                                    }),
                                    T,
                                    (0, r.jsx)("div", {
                                        className: h.track,
                                        children: (0, r.jsx)(_.m, {
                                            __unsupportedReactNodeAsText: C || E ? null : H,
                                            forceOpen: t || (n && f.A.keyboardModeEnabled),
                                            children: (0, r.jsx)("div", {
                                                className: s()(h.grabber, w),
                                                style: { ...x, left: B },
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
        let { left: f, width: h } = _.getBoundingClientRect(),
            p = (d - f) / h;
        if (o) {
            let { nextClosestMarkerIndex: e } = u.reduce(
                (e, t, n) => {
                    let r = Math.abs(t / 100 - p);
                    return r <= e.smallestDelta ? { smallestDelta: r, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === e) return;
            this.setState({ closestMarkerIndex: e }), (t = l[e]);
        } else {
            let n = r - i;
            (t = i + n * p), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
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
        null != (t = this.props.equidistant ? p(_, a) : p(this.unscaleValue(_), s)) && o?.(s[t]),
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
function I(e) {
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
