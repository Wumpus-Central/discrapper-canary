"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(785651),
    c = n(621466),
    d = n(452027),
    _ = n(187322),
    f = n(717421),
    h = n(990078),
    p = n(775602),
    E = n(160671);
function m(e, t) {
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
function g(e, t) {
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
            let l = m(n, (a = t.sort((e, t) => e - t))),
                u = a[0],
                c = a[a.length - 1],
                d = c - u;
            if (s) {
                let e = 100 / (a.length - 1);
                o = a.map((t, n) => n * e);
            } else o = a.map((e) => (100 * (e - u)) / d);
            return { min: u, max: c, range: d, sortedMarkers: a, markerPositions: o, closestMarkerIndex: l };
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
        super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...g(e, e.initialValue) });
    }
    static getDerivedStateFromProps(e, t) {
        if (null != e.value && e.value !== t.value) {
            let n = { ...g(e, e.value), active: t.active };
            if (e.stickToMarkers && n.sortedMarkers.length > 0) {
                let t = m(e.value, n.sortedMarkers);
                null != t && (n.closestMarkerIndex = t);
            }
            return n;
        }
        return e.initialValue !== t.initialValueProp ? { ...g(e, t.value), active: t.active } : null;
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
                min: c,
                max: f,
            } = this.state,
            {
                disabled: m,
                stickToMarkers: g,
                className: A,
                children: T,
                barStyles: S,
                fillStyles: N,
                mini: y,
                hideBubble: C,
                defaultValue: v,
                orientation: O,
                onValueRender: R,
                renderMarker: b,
                getAriaValueText: D,
                barClassName: L,
                grabberClassName: w,
                grabberStyles: M = {},
                markerPosition: P = 0,
                "aria-hidden": x,
                "aria-label": U,
                "aria-labelledby": k,
                "aria-describedby": G,
            } = this.props,
            { fieldProps: F } = (0, d.n)(this.props),
            V = 0;
        g ? null != s && (null != l ? (V = s[l]) : null != o && (V = s[o])) : (V = this.scaleValue(e)),
            (V = Math.min(Math.max(V, 0), 100));
        let B = `${V}%`,
            H =
                null != s && null != r
                    ? s.map((e, t) => {
                          let n = r[t],
                              s = null != v && v === n,
                              o = this.renderMark(n);
                          return (0, i.jsx)(
                              "div",
                              {
                                  className: a()(E.mark, {
                                      [E.defaultValue]: s,
                                      [E.markAbove]: 0 === P,
                                      [E.markBelow]: 1 === P,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != b
                                          ? b(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("div", { className: E.markValue, children: o }),
                                                    (0, i.jsx)("div", {
                                                        className: E[`markDash${null == o ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            j = null != R ? R(e) : `${V.toFixed(0)}%`,
            Y = D?.(e) ?? void 0;
        return (0, i.jsx)(d.D, {
            ...F,
            children: (r) =>
                (0, i.jsx)(I, {
                    active: t,
                    keyboardFocused: n && p.A.keyboardModeEnabled,
                    children: (s) =>
                        (0, i.jsx)(_.vN, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, i.jsxs)(u.animated.div, {
                                className: a()(E.slider, A, {
                                    [E.hasMarks]: (H?.length ?? 0) > 0,
                                    [E.disabled]: m,
                                    [E.mini]: y,
                                }),
                                style: s?.sliderStyles,
                                id: r.controlId,
                                "aria-valuemin": c,
                                "aria-valuemax": f,
                                "aria-valuenow": e,
                                "aria-disabled": m,
                                "aria-orientation": O,
                                "aria-hidden": x,
                                "aria-label": U,
                                "aria-labelledby": k,
                                "aria-describedby": G ?? r.describedById,
                                "aria-errormessage": r.errorMessageId,
                                "aria-invalid": null != r.errorMessageId,
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
                                onMouseEnter: () => s?.setHovered(!0),
                                onMouseLeave: () => s?.setHovered(!1),
                                ref: this.containerRef,
                                children: [
                                    (0, i.jsx)("div", { className: E.track, children: H }),
                                    (0, i.jsx)("div", {
                                        className: a()(E.bar, L),
                                        style: S,
                                        children: (0, i.jsx)("div", {
                                            className: E.barFill,
                                            style: { ...N, width: B },
                                        }),
                                    }),
                                    T,
                                    (0, i.jsx)("div", {
                                        className: E.track,
                                        children: (0, i.jsx)(h.m, {
                                            __unsupportedReactNodeAsText: C || g ? null : j,
                                            forceOpen: t || (n && p.A.keyboardModeEnabled),
                                            positionKey: B,
                                            children: (0, i.jsx)("div", {
                                                className: a()(E.grabber, w),
                                                style: { ...M, left: B },
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
            { asValueChanges: a, onValueChange: o, stickToMarkers: u } = this.props,
            c = {};
        if (u) {
            let i = s ?? t.indexOf(n);
            if (i < 0) return;
            let r = i + e,
                a = t[r];
            if (null == a) return;
            (c.value = a), (c.closestMarkerIndex = r), (c.newClosestIndex = r);
        } else c.value = l().clamp(n + e, i, r);
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
                maxValue: i,
                minValue: r,
                asValueChanges: s,
                onValueChange: a,
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
                    let i = Math.abs(t / 100 - p);
                    return i <= e.smallestDelta ? { smallestDelta: i, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === e) return;
            (t = l[e]), this.setState({ closestMarkerIndex: e, value: t, newClosestIndex: null });
        } else (t = r + (i - r) * p), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
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
            !(0, c.vq)(t))
        )
            throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
        this.setState({
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
            { boundingRect: n, markerPositions: i, sortedMarkers: r } = this.state,
            { asValueChanges: s } = this.props;
        if (null == n) return;
        let { left: a, right: o } = n,
            l = o - a;
        if (l <= 0) return;
        let u = 100 * Math.min(Math.max((e.clientX - a) / l, 0), 1);
        null != (t = this.props.equidistant ? m(u, i) : m(this.unscaleValue(u), r)) && s?.(r[t]),
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
        sliderStyles: (0, f.z)({
            "--grabber-size": n || t || s ? "20px" : "16px",
            "--bar-size": n || t || s ? "6px" : "4px",
            config: { ...u.config.stiff, duration: 100 },
        }),
        setHovered: a,
    });
}
