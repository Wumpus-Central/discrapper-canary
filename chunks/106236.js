"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    d = n(419354),
    _ = n(621466),
    u = n(452027),
    c = n(187322),
    E = n(717421),
    h = n(990078),
    m = n(775602),
    f = n(160671);
function g(e, t) {
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
function p(e, t) {
    let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return {
        value: t ?? n,
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...(function (e) {
            let { markers: t, initialValue: n, minValue: i, maxValue: r, equidistant: s } = e,
                a = [],
                o = [];
            if (null == t) return { min: i, max: r, range: r - i, sortedMarkers: a, markerPositions: o };
            let l = g(n, (a = t.sort((e, t) => e - t))),
                d = a[0],
                _ = a[a.length - 1],
                u = _ - d;
            if (s) {
                let e = 100 / (a.length - 1);
                o = a.map((t, n) => n * e);
            } else o = a.map((e) => (100 * (e - d)) / u);
            return { min: d, max: _, range: u, sortedMarkers: a, markerPositions: o, closestMarkerIndex: l };
        })(e),
    };
}
class A extends r.PureComponent {
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
    containerRef = r.createRef();
    grabberRef = r.createRef();
    constructor(e) {
        super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...p(e, e.initialValue) });
    }
    static getDerivedStateFromProps(e, t) {
        if (null != e.value && e.value !== t.value) {
            let n = { ...p(e, e.value), active: t.active };
            if (e.stickToMarkers && n.sortedMarkers.length > 0) {
                let t = g(e.value, n.sortedMarkers);
                null != t && (n.closestMarkerIndex = t);
            }
            return n;
        }
        return e.initialValue !== t.initialValueProp ? { ...p(e, t.value), active: t.active } : null;
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
                sortedMarkers: r,
                markerPositions: s,
                closestMarkerIndex: o,
                newClosestIndex: l,
                min: _,
                max: E,
            } = this.state,
            {
                disabled: g,
                stickToMarkers: p,
                className: A,
                children: T,
                barStyles: S,
                fillStyles: N,
                mini: C,
                hideBubble: R,
                defaultValue: O,
                orientation: y,
                onValueRender: v,
                renderMarker: D,
                getAriaValueText: L,
                barClassName: b,
                grabberClassName: w,
                grabberStyles: P = {},
                markerPosition: k = 0,
                "aria-hidden": M,
                "aria-label": U,
                "aria-labelledby": x,
                "aria-describedby": G,
            } = this.props,
            { fieldProps: V } = (0, u.n)(this.props),
            F = 0;
        p ? null != s && (null != l ? (F = s[l]) : null != o && (F = s[o])) : (F = this.scaleValue(e)),
            (F = Math.min(Math.max(F, 0), 100));
        let B = `${F}%`,
            H =
                null != s && null != r
                    ? s.map((e, t) => {
                          let n = r[t],
                              s = null != O && O === n,
                              o = this.renderMark(n);
                          return (0, i.jsx)(
                              "div",
                              {
                                  className: a()(f.mark, {
                                      [f.defaultValue]: s,
                                      [f.markAbove]: 0 === k,
                                      [f.markBelow]: 1 === k,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != D
                                          ? D(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("div", { className: f.markValue, children: o }),
                                                    (0, i.jsx)("div", {
                                                        className: f[`markDash${null == o ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            j = null != v ? v(e) : `${F.toFixed(0)}%`,
            W = L?.(e) ?? void 0;
        return (0, i.jsx)(u.D, {
            ...V,
            children: (r) =>
                (0, i.jsx)(I, {
                    active: t,
                    keyboardFocused: n && m.A.keyboardModeEnabled,
                    children: (s) =>
                        (0, i.jsx)(c.vN, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, i.jsxs)(d.animated.div, {
                                className: a()(f.slider, A, {
                                    [f.hasMarks]: (H?.length ?? 0) > 0,
                                    [f.disabled]: g,
                                    [f.mini]: C,
                                }),
                                style: s?.sliderStyles,
                                id: r.controlId,
                                "aria-valuemin": _,
                                "aria-valuemax": E,
                                "aria-valuenow": e,
                                "aria-disabled": g,
                                "aria-orientation": y,
                                "aria-hidden": M,
                                "aria-label": U,
                                "aria-labelledby": x,
                                "aria-describedby": G ?? r.describedById,
                                "aria-errormessage": r.errorMessageId,
                                "aria-invalid": null != r.errorMessageId,
                                "aria-valuetext": W,
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
                                    (0, i.jsx)("div", { className: f.track, children: H }),
                                    (0, i.jsx)("div", {
                                        className: a()(f.bar, b),
                                        style: S,
                                        children: (0, i.jsx)("div", {
                                            className: f.barFill,
                                            style: { ...N, width: B },
                                        }),
                                    }),
                                    T,
                                    (0, i.jsx)("div", {
                                        className: f.track,
                                        children: (0, i.jsx)(h.m, {
                                            __unsupportedReactNodeAsText: R || p ? null : j,
                                            forceOpen: t || (n && m.A.keyboardModeEnabled),
                                            positionKey: B,
                                            children: (0, i.jsx)("div", {
                                                className: a()(f.grabber, w),
                                                style: { ...P, left: B },
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
        let { sortedMarkers: t, value: n, min: i, max: r, closestMarkerIndex: s } = this.state,
            { asValueChanges: a, onValueChange: o, stickToMarkers: d } = this.props,
            _ = {};
        if (d) {
            let i = s ?? t.indexOf(n);
            if (i < 0) return;
            let r = i + e,
                a = t[r];
            if (null == a) return;
            (_.value = a), (_.closestMarkerIndex = r), (_.newClosestIndex = r);
        } else _.value = l().clamp(n + e, i, r);
        this.setState(_), _.value !== this.state.value && (a?.(_.value), o?.(_.value));
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
                maxValue: i,
                minValue: r,
                asValueChanges: s,
                onValueChange: a,
                stickToMarkers: o,
            } = this.props,
            { sortedMarkers: l, markerPositions: d } = this.state;
        if (n) return;
        let { clientX: u, currentTarget: c } = e;
        if (!(0, _.vq)(c)) return;
        let { left: E, width: h } = c.getBoundingClientRect(),
            m = (u - E) / h;
        if (o) {
            let { nextClosestMarkerIndex: e } = d.reduce(
                (e, t, n) => {
                    let i = Math.abs(t / 100 - m);
                    return i <= e.smallestDelta ? { smallestDelta: i, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === e) return;
            (t = l[e]), this.setState({ closestMarkerIndex: e, value: t, newClosestIndex: null });
        } else (t = r + (i - r) * m), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
        null != a && a(t), null != s && s(t);
    };
    handleKeyDown = (e) => {
        let { disabled: t, orientation: n, keyboardStep: i = 1 } = this.props;
        if (t) return;
        let { key: r } = e,
            s = [],
            a = [];
        switch (n) {
            case "horizontal":
            default:
                (s = ["ArrowRight", "ArrowUp"]), (a = ["ArrowLeft", "ArrowDown"]);
                break;
            case "vertical":
                (s = ["ArrowUp", "ArrowRight"]), (a = ["ArrowDown", "ArrowLeft"]);
        }
        a.includes(r)
            ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-i))
            : s.includes(r) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(i));
    };
    handleMouseDown = (e) => {
        if (this.props.disabled) return;
        e.stopPropagation();
        let { current: t } = this.containerRef;
        if (
            (t?.ownerDocument?.addEventListener("mousemove", this.handleMouseMove, !0),
            t?.ownerDocument?.addEventListener("mouseup", this.handleMouseUp, !0),
            !(0, _.vq)(t))
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
            { newClosestIndex: i } = this.state;
        if (n && null != i) {
            let e = this.state.sortedMarkers[i];
            t?.(e), this.setState({ newClosestIndex: null, closestMarkerIndex: i, value: e });
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
            { boundingRect: n, x: i = 0, closestMarkerIndex: r, markerPositions: s, sortedMarkers: a } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: d } = n;
        if (e.clientX <= l || e.clientX >= d) return;
        let _ = e.clientX - i,
            u = s[r] + (_ / (d - l)) * 100;
        null != (t = this.props.equidistant ? g(u, s) : g(this.unscaleValue(u), a)) && o?.(a[t]),
            this.setState({ newClosestIndex: t });
    }
    moveSmoothly = (e) => {
        let { minValue: t, maxValue: n, asValueChanges: i } = this.props,
            { boundingRect: r } = this.state;
        if (null == r) return;
        let { left: s, right: a } = r,
            o = n - t,
            l = Math.min(Math.max(t + ((e.clientX - s) / (a - s)) * o, t), n);
        i?.(l), this.setState({ value: l });
    };
}
function I(e) {
    let { active: t, keyboardFocused: n, children: i } = e,
        [s, a] = r.useState(!1);
    return i({
        sliderStyles: (0, E.z)({
            "--grabber-size": n || t || s ? "20px" : "16px",
            "--bar-size": n || t || s ? "6px" : "4px",
            config: { ...d.config.stiff, duration: 100 },
        }),
        setHovered: a,
    });
}
