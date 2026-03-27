"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(880013),
    c = n(621466),
    d = n(158954),
    _ = n(990078),
    f = n(775602),
    p = n(206536);
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
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: s } = e,
        a = [],
        o = [];
    if (null == t) return { min: r, max: i, range: i - r, sortedMarkers: a, markerPositions: o };
    let l = h(n, (a = t.sort((e, t) => e - t))),
        u = a[0],
        c = a[a.length - 1],
        d = c - u;
    if (s) {
        let e = 100 / (a.length - 1);
        o = a.map((t, n) => n * e);
    } else {
        let e = (e) => (100 * (e - u)) / d;
        o = a.map((t) => e(t));
    }
    return { min: u, max: c, range: d, sortedMarkers: a, markerPositions: o, closestMarkerIndex: l };
}
function E(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return { value: t ?? n, initialValueProp: e.initialValue, newClosestIndex: null, ...m(e) };
}
class g extends i.PureComponent {
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
        if (null != e.value && e.value !== t.value) {
            let n = { ...E(e, e.value), active: t.active };
            if (e.stickToMarkers && n.sortedMarkers.length > 0) {
                let t = h(e.value, n.sortedMarkers);
                null != t && (n.closestMarkerIndex = t);
            }
            return n;
        }
        return e.initialValue !== t.initialValueProp ? { ...E(e, t.value), active: t.active } : null;
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
                markerPositions: s,
                closestMarkerIndex: o,
                newClosestIndex: l,
                min: c,
                max: h,
            } = this.state,
            {
                disabled: m,
                stickToMarkers: E,
                className: g,
                children: I,
                barStyles: T,
                fillStyles: S,
                mini: y,
                hideBubble: v,
                defaultValue: N,
                orientation: C,
                onValueRender: R,
                renderMarker: O,
                getAriaValueText: b,
                barClassName: D,
                grabberClassName: L,
                grabberStyles: w = {},
                markerPosition: M = 0,
                "aria-hidden": x,
                "aria-label": P,
                "aria-labelledby": k,
                "aria-describedby": U,
            } = this.props,
            { fieldProps: G } = (0, d.ndh)(this.props),
            F = 0;
        E ? null != s && (null != l ? (F = s[l]) : null != o && (F = s[o])) : (F = this.scaleValue(e)),
            (F = Math.min(Math.max(F, 0), 100));
        let V = `${F}%`,
            B =
                null != s && null != i
                    ? s.map((e, t) => {
                          let n = i[t],
                              s = null != N && N === n,
                              o = this.renderMark(n);
                          return (0, r.jsx)(
                              "div",
                              {
                                  className: a()(p.mark, {
                                      [p.defaultValue]: s,
                                      [p.markAbove]: 0 === M,
                                      [p.markBelow]: 1 === M,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != O
                                          ? O(n)
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
            H = null != R ? R(e) : `${F.toFixed(0)}%`,
            j = b?.(e) ?? void 0;
        return (0, r.jsx)(d.D0$, {
            ...G,
            children: (i) =>
                (0, r.jsx)(A, {
                    active: t,
                    keyboardFocused: n && f.A.keyboardModeEnabled,
                    children: (s) =>
                        (0, r.jsx)(d.vN3, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, r.jsxs)(u.animated.div, {
                                className: a()(p.slider, g, {
                                    [p.hasMarks]: (B?.length ?? 0) > 0,
                                    [p.disabled]: m,
                                    [p.mini]: y,
                                }),
                                style: s?.sliderStyles,
                                id: i.controlId,
                                "aria-valuemin": c,
                                "aria-valuemax": h,
                                "aria-valuenow": e,
                                "aria-disabled": m,
                                "aria-orientation": C,
                                "aria-hidden": x,
                                "aria-label": P,
                                "aria-labelledby": k,
                                "aria-describedby": U ?? i.describedById,
                                "aria-errormessage": i.errorMessageId,
                                "aria-invalid": null != i.errorMessageId,
                                "aria-valuetext": j,
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
                                onMouseEnter: () => s?.setHovered(!0),
                                onMouseLeave: () => s?.setHovered(!1),
                                ref: this.containerRef,
                                children: [
                                    (0, r.jsx)("div", { className: p.track, children: B }),
                                    (0, r.jsx)("div", {
                                        className: a()(p.bar, D),
                                        style: T,
                                        children: (0, r.jsx)("div", {
                                            className: p.barFill,
                                            style: { ...S, width: V },
                                        }),
                                    }),
                                    I,
                                    (0, r.jsx)("div", {
                                        className: p.track,
                                        children: (0, r.jsx)(_.m, {
                                            __unsupportedReactNodeAsText: v || E ? null : H,
                                            forceOpen: t || (n && f.A.keyboardModeEnabled),
                                            children: (0, r.jsx)("div", {
                                                className: a()(p.grabber, L),
                                                style: { ...w, left: V },
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
        let { sortedMarkers: t, value: n, min: r, max: i, closestMarkerIndex: s } = this.state,
            { asValueChanges: a, onValueChange: o, stickToMarkers: u } = this.props,
            c = {};
        if (u) {
            let r = s ?? t.indexOf(n);
            if (r < 0) return;
            let i = r + e,
                a = t[i];
            if (null == a) return;
            (c.value = a), (c.closestMarkerIndex = i), (c.newClosestIndex = i);
        } else c.value = l().clamp(n + e, r, i);
        this.setState(c), c.value !== this.state.value && (a?.(c.value), o?.(c.value));
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
                asValueChanges: s,
                onValueChange: a,
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
            (t = l[e]), this.setState({ closestMarkerIndex: e, value: t, newClosestIndex: null });
        } else {
            let n = r - i;
            (t = i + n * h), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
        }
        null != a && a(t), null != s && s(t);
    };
    handleKeyDown = (e) => {
        let { disabled: t, orientation: n, keyboardStep: r = 1 } = this.props;
        if (t) return;
        let { key: i } = e,
            s = [],
            a = [];
        switch (n) {
            case "horizontal":
                (s = ["ArrowRight"]), (a = ["ArrowLeft"]);
                break;
            case "vertical":
                (s = ["ArrowUp"]), (a = ["ArrowDown"]);
                break;
            default:
                (s = ["ArrowRight", "ArrowUp"]), (a = ["ArrowLeft", "ArrowDown"]);
        }
        a.includes(i)
            ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r))
            : s.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
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
        if (n && null != r) {
            let e = this.state.sortedMarkers[r];
            t?.(e), this.setState({ newClosestIndex: null, closestMarkerIndex: r, value: e });
        } else
            (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) &&
                t?.(this.state.value);
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
            { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: s, sortedMarkers: a } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: u } = n;
        if (e.clientX <= l || e.clientX >= u) return;
        let c = u - l,
            d = (e.clientX - r) / c,
            _ = s[i] + 100 * d;
        null != (t = this.props.equidistant ? h(_, s) : h(this.unscaleValue(_), a)) && o?.(a[t]),
            this.setState({ newClosestIndex: t });
    }
    moveSmoothly = (e) => {
        let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
            { boundingRect: i } = this.state;
        if (null == i) return;
        let { left: s, right: a } = i,
            o = n - t,
            l = a - s,
            u = Math.min(Math.max(t + ((e.clientX - s) / l) * o, t), n);
        r?.(u), this.setState({ value: u });
    };
}
function A(e) {
    let { active: t, keyboardFocused: n, children: r } = e,
        [s, a] = i.useState(!1);
    return r({
        sliderStyles: (0, d.zhh)({
            "--grabber-size": n || t || s ? "20px" : "16px",
            "--bar-size": n || t || s ? "6px" : "4px",
            config: { ...u.config.stiff, duration: 100 },
        }),
        setHovered: a,
    });
}
