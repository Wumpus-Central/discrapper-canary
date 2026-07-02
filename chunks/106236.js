"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(580929),
    d = n(621466),
    c = n(452027),
    _ = n(187322),
    h = n(717421),
    f = n(990078),
    E = n(775602),
    p = n(160671);
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
                d = a[a.length - 1],
                c = d - u;
            if (s) {
                let e = 100 / (a.length - 1);
                o = a.map((t, n) => n * e);
            } else o = a.map((e) => (100 * (e - u)) / c);
            return { min: u, max: d, range: c, sortedMarkers: a, markerPositions: o, closestMarkerIndex: l };
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
                min: d,
                max: h,
            } = this.state,
            {
                disabled: m,
                stickToMarkers: g,
                className: A,
                children: T,
                barStyles: S,
                fillStyles: N,
                mini: C,
                hideBubble: y,
                defaultValue: v,
                orientation: R,
                onValueRender: O,
                renderMarker: b,
                getAriaValueText: L,
                barClassName: D,
                grabberClassName: P,
                grabberStyles: w = {},
                markerPosition: M = 0,
                "aria-hidden": x,
                "aria-label": U,
                "aria-labelledby": k,
                "aria-describedby": G,
            } = this.props,
            { fieldProps: V } = (0, c.n)(this.props),
            F = 0;
        g ? null != s && (null != l ? (F = s[l]) : null != o && (F = s[o])) : (F = this.scaleValue(e)),
            (F = Math.min(Math.max(F, 0), 100));
        let B = `${F}%`,
            j =
                null != s && null != r
                    ? s.map((e, t) => {
                          let n = r[t],
                              s = null != v && v === n,
                              o = this.renderMark(n);
                          return (0, i.jsx)(
                              "div",
                              {
                                  className: a()(p.mark, {
                                      [p.defaultValue]: s,
                                      [p.markAbove]: 0 === M,
                                      [p.markBelow]: 1 === M,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != b
                                          ? b(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("div", { className: p.markValue, children: o }),
                                                    (0, i.jsx)("div", {
                                                        className: p[`markDash${null == o ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            H = null != O ? O(e) : `${F.toFixed(0)}%`,
            W = L?.(e) ?? void 0;
        return (0, i.jsx)(c.D, {
            ...V,
            children: (r) =>
                (0, i.jsx)(I, {
                    active: t,
                    keyboardFocused: n && E.Ay.keyboardModeEnabled,
                    children: (s) =>
                        (0, i.jsx)(_.vN, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, i.jsxs)(u.animated.div, {
                                className: a()(p.slider, A, {
                                    [p.hasMarks]: (j?.length ?? 0) > 0,
                                    [p.disabled]: m,
                                    [p.mini]: C,
                                }),
                                style: s?.sliderStyles,
                                id: r.controlId,
                                "aria-valuemin": d,
                                "aria-valuemax": h,
                                "aria-valuenow": e,
                                "aria-disabled": m,
                                "aria-orientation": R,
                                "aria-hidden": x,
                                "aria-label": U,
                                "aria-labelledby": k ?? r.labelId,
                                "aria-describedby": G ?? r.describedById,
                                "aria-errormessage": r.errorMessageId,
                                "aria-invalid": null != r.errorMessageId,
                                "aria-valuetext": W,
                                role: "slider",
                                tabIndex: 0,
                                onKeyDown: this.handleKeyDown,
                                onPointerDown: this.handlePointerDown,
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
                                    (0, i.jsx)("div", { className: p.track, children: j }),
                                    (0, i.jsx)("div", {
                                        className: a()(p.bar, D),
                                        style: S,
                                        children: (0, i.jsx)("div", {
                                            className: p.barFill,
                                            style: { ...N, width: B },
                                        }),
                                    }),
                                    T,
                                    (0, i.jsx)("div", {
                                        className: p.track,
                                        children: (0, i.jsx)(f.m, {
                                            __unsupportedReactNodeAsText: y || g ? null : H,
                                            forceOpen: t || (n && E.Ay.keyboardModeEnabled),
                                            positionKey: B,
                                            children: (0, i.jsx)("div", {
                                                className: a()(p.grabber, P),
                                                style: { ...w, left: B },
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
            d = {};
        if (u) {
            let i = s ?? t.indexOf(n);
            if (i < 0) return;
            let r = i + e,
                a = t[r];
            if (null == a) return;
            (d.value = a), (d.closestMarkerIndex = r), (d.newClosestIndex = r);
        } else d.value = l().clamp(n + e, i, r);
        this.setState(d), d.value !== this.state.value && (a?.(d.value), o?.(d.value));
    };
    focus() {
        this.containerRef.current?.focus();
    }
    blur() {
        this.containerRef.current?.blur();
    }
    handlePointerDown = (e) => {
        this.props.disabled || e.currentTarget.setPointerCapture?.(e.pointerId);
    };
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
        let { clientX: c, currentTarget: _ } = e;
        if (!(0, d.vq)(_)) return;
        let { left: h, width: f } = _.getBoundingClientRect(),
            E = (c - h) / f;
        if (o) {
            let { nextClosestMarkerIndex: n } = u.reduce(
                (e, t, n) => {
                    let i = Math.abs(t / 100 - E);
                    return i <= e.smallestDelta ? { smallestDelta: i, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === n) return;
            (t = l[n]), this.handleMouseDown(e), this.setState({ closestMarkerIndex: n, value: t, newClosestIndex: n });
        } else (t = r + (i - r) * E), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e);
        null != a && a(t), null != s && s(t);
    };
    handleKeyDown = (e) => {
        let { disabled: t, orientation: n, consumeAxisOnly: i, keyboardStep: r = 1 } = this.props;
        if (t) return;
        let { key: s } = e,
            a = [],
            o = [];
        switch (n) {
            case "horizontal":
            default:
                (a = i ? ["ArrowRight"] : ["ArrowRight", "ArrowUp"]),
                    (o = i ? ["ArrowLeft"] : ["ArrowLeft", "ArrowDown"]);
                break;
            case "vertical":
                (a = i ? ["ArrowUp"] : ["ArrowUp", "ArrowRight"]), (o = i ? ["ArrowDown"] : ["ArrowDown", "ArrowLeft"]);
        }
        o.includes(s)
            ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r))
            : a.includes(s) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
    };
    handleMouseDown = (e) => {
        if (this.props.disabled) return;
        e.stopPropagation();
        let { current: t } = this.containerRef;
        if (
            (t?.ownerDocument?.addEventListener("mousemove", this.handleMouseMove, !0),
            t?.ownerDocument?.addEventListener("mouseup", this.handleMouseUp, !0),
            !(0, d.vq)(t))
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
        sliderStyles: (0, h.z)({
            "--grabber-size": n || t || s ? "20px" : "16px",
            "--bar-size": n || t || s ? "6px" : "4px",
            config: { ...u.config.stiff, duration: 100 },
        }),
        setHovered: a,
    });
}
