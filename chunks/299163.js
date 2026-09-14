n.d(t, { A: () => T });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(404144),
    o = n.n(l),
    d = n(479669),
    c = n(621466),
    u = n(717421),
    _ = n(844222),
    E = n(259678),
    A = n(452027),
    h = n(866665),
    I = n(9761);
function f(e, t) {
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
            let { markers: t, initialValue: n, minValue: i, maxValue: r, equidistant: a } = e,
                s = [],
                l = [];
            if (null == t) return { min: i, max: r, range: r - i, sortedMarkers: s, markerPositions: l };
            let o = f(n, (s = t.sort((e, t) => e - t))),
                d = s[0],
                c = s[s.length - 1],
                u = c - d;
            if (a) {
                let e = 100 / (s.length - 1);
                l = s.map((t, n) => n * e);
            } else l = s.map((e) => (100 * (e - d)) / u);
            return { min: d, max: c, range: u, sortedMarkers: s, markerPositions: l, closestMarkerIndex: o };
        })(e),
    };
}
class T extends r.PureComponent {
    static contextType = _.C;
    static defaultProps = {
        initialValue: 10,
        minValue: 0,
        maxValue: 100,
        keyboardStep: 1,
        handleSize: 10,
        tabIndex: 0,
        disabled: !1,
        stickToMarkers: !1,
        fillStyles: {},
    };
    containerRef = r.createRef();
    grabberRef = r.createRef();
    constructor(e) {
        (super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...p(e, e.initialValue) }));
    }
    static getDerivedStateFromProps(e, t) {
        if (null != e.value && e.value !== t.value) {
            let n = { ...p(e, e.value), active: t.active };
            if (e.stickToMarkers && n.sortedMarkers.length > 0) {
                let t = f(e.value, n.sortedMarkers);
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
                markerPositions: a,
                closestMarkerIndex: l,
                newClosestIndex: o,
                min: c,
                max: u,
            } = this.state,
            {
                disabled: _,
                stickToMarkers: f,
                className: p,
                children: T,
                barStyles: g,
                fillStyles: S,
                mini: N,
                hideBubble: C,
                defaultValue: O,
                orientation: R,
                onValueRender: L,
                renderMarker: y,
                getAriaValueText: D,
                barClassName: v,
                grabberClassName: b,
                grabberStyles: M = {},
                markerPosition: P = 0,
                tabIndex: U,
                "aria-hidden": w,
                "aria-label": G,
                "aria-labelledby": x,
                "aria-describedby": k,
            } = this.props,
            { fieldProps: F } = (0, A.n)(this.props),
            B = 0;
        (f ? null != a && (null != o ? (B = a[o]) : null != l && (B = a[l])) : (B = this.scaleValue(e)),
            (B = Math.min(Math.max(B, 0), 100)));
        let V = `${B}%`,
            H =
                null != a && null != r
                    ? a.map((e, t) => {
                          let n = r[t],
                              a = null != O && O === n,
                              l = this.renderMark(n);
                          return (0, i.jsx)(
                              "div",
                              {
                                  className: s()(I.mark, {
                                      [I.defaultValue]: a,
                                      [I.markAbove]: 0 === P,
                                      [I.markBelow]: 1 === P,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != y
                                          ? y(n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)("div", { className: I.markValue, children: l }),
                                                    (0, i.jsx)("div", {
                                                        className: I[`markDash${null == l ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            j = null != L ? L(e) : `${B.toFixed(0)}%`,
            W = D?.(e) ?? void 0;
        return (0, i.jsx)(A.D, {
            ...F,
            children: (r) =>
                (0, i.jsx)(m, {
                    active: t,
                    keyboardFocused: n && this.context.keyboardModeEnabled,
                    children: (a) =>
                        (0, i.jsx)(E.vN, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, i.jsxs)(d.animated.div, {
                                className: s()(I.slider, p, {
                                    [I.hasMarks]: (H?.length ?? 0) > 0,
                                    [I.disabled]: _,
                                    [I.mini]: N,
                                }),
                                style: a?.sliderStyles,
                                id: r.controlId,
                                "aria-valuemin": c,
                                "aria-valuemax": u,
                                "aria-valuenow": e,
                                "aria-disabled": _,
                                "aria-orientation": R,
                                "aria-hidden": w,
                                "aria-label": G,
                                "aria-labelledby": x ?? r.labelId,
                                "aria-describedby": k ?? r.describedById,
                                "aria-errormessage": r.errorMessageId,
                                "aria-invalid": null != r.errorMessageId,
                                "aria-valuetext": W,
                                role: "slider",
                                tabIndex: U,
                                onKeyDown: this.handleKeyDown,
                                onPointerDown: this.handlePointerDown,
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
                                    (0, i.jsx)("div", { className: I.track, children: H }),
                                    (0, i.jsx)("div", {
                                        className: s()(I.bar, v),
                                        style: g,
                                        children: (0, i.jsx)("div", {
                                            className: I.barFill,
                                            style: { ...S, width: V },
                                        }),
                                    }),
                                    T,
                                    (0, i.jsx)("div", {
                                        className: I.track,
                                        children: (0, i.jsx)(h.m, {
                                            __unsupportedReactNodeAsText: C || f ? null : j,
                                            forceOpen: t || (n && this.context.keyboardModeEnabled),
                                            positionKey: V,
                                            children: (0, i.jsx)("div", {
                                                className: s()(I.grabber, b),
                                                style: { ...M, left: V },
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
        (this.containerRef.current?.ownerDocument?.removeEventListener("mousemove", this.handleMouseMove, !0),
            this.containerRef.current?.ownerDocument?.removeEventListener("mouseup", this.handleMouseUp, !0));
    }
    scaleValue(e) {
        return (100 * (e - this.state.min)) / this.state.range;
    }
    unscaleValue(e) {
        return (e * this.state.range) / 100 + this.state.min;
    }
    commitValue = (e, t) => {
        let { asValueChanges: n, onValueChange: i } = this.props,
            r = {};
        ((r.value = e),
            null != t && ((r.closestMarkerIndex = t), (r.newClosestIndex = t)),
            this.setState(r),
            e !== this.state.value && (n?.(e), i?.(e)));
    };
    moveGrabber = (e) => {
        let { sortedMarkers: t, value: n, min: i, max: r, closestMarkerIndex: a } = this.state,
            { stickToMarkers: s } = this.props;
        if (s) {
            let i = a ?? t.indexOf(n);
            if (i < 0) return;
            let r = o()(i + e, 0, t.length - 1),
                s = t[r];
            if (null == s) return;
            this.commitValue(s, r);
        } else this.commitValue(o()(n + e, i, r));
    };
    moveGrabberToEdge = (e) => {
        let { sortedMarkers: t, min: n, max: i } = this.state,
            { stickToMarkers: r } = this.props;
        if (r) {
            if (0 === t.length) return;
            let n = "min" === e ? 0 : t.length - 1,
                i = t[n];
            if (null == i) return;
            this.commitValue(i, n);
        } else this.commitValue("min" === e ? n : i);
    };
    getKeyboardPageStep() {
        let { keyboardPageStep: e, stickToMarkers: t, keyboardStep: n = 1 } = this.props;
        if (t) return e ?? Math.max(1, Math.round(this.state.sortedMarkers.length / 10));
        let { min: i, max: r } = this.state;
        return e ?? Math.max(n, (r - i) / 10);
    }
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
                asValueChanges: a,
                onValueChange: s,
                stickToMarkers: l,
            } = this.props,
            { sortedMarkers: o, markerPositions: d } = this.state;
        if (n) return;
        let { clientX: u, currentTarget: _ } = e;
        if (!(0, c.vq)(_)) return;
        let { left: E, width: A } = _.getBoundingClientRect(),
            h = (u - E) / A;
        if (l) {
            let { nextClosestMarkerIndex: n } = d.reduce(
                (e, t, n) => {
                    let i = Math.abs(t / 100 - h);
                    return i <= e.smallestDelta ? { smallestDelta: i, nextClosestMarkerIndex: n } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === n) return;
            ((t = o[n]),
                this.handleMouseDown(e),
                this.setState({ closestMarkerIndex: n, value: t, newClosestIndex: n }));
        } else ((t = r + (i - r) * h), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e));
        (null != s && s(t), null != a && a(t));
    };
    handleKeyDown = (e) => {
        let { disabled: t, orientation: n, consumeAxisOnly: i, keyboardStep: r = 1 } = this.props;
        if (t) return;
        let { key: a } = e,
            s = [],
            l = [];
        switch (n) {
            case "horizontal":
            default:
                ((s = i ? ["ArrowRight"] : ["ArrowRight", "ArrowUp"]),
                    (l = i ? ["ArrowLeft"] : ["ArrowLeft", "ArrowDown"]));
                break;
            case "vertical":
                ((s = i ? ["ArrowUp"] : ["ArrowUp", "ArrowRight"]),
                    (l = i ? ["ArrowDown"] : ["ArrowDown", "ArrowLeft"]));
        }
        l.includes(a)
            ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r))
            : s.includes(a)
              ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r))
              : "Home" === a
                ? (e.preventDefault(), e.stopPropagation(), this.moveGrabberToEdge("min"))
                : "End" === a
                  ? (e.preventDefault(), e.stopPropagation(), this.moveGrabberToEdge("max"))
                  : "PageUp" === a
                    ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(this.getKeyboardPageStep()))
                    : "PageDown" === a &&
                      (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-this.getKeyboardPageStep()));
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
        (e.stopPropagation(), this.reset());
        let { onValueChange: t, stickToMarkers: n } = this.props,
            { newClosestIndex: i } = this.state;
        if (n && null != i) {
            let e = this.state.sortedMarkers[i];
            (t?.(e), this.setState({ newClosestIndex: null, closestMarkerIndex: i, value: e }));
        } else
            (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) &&
                t?.(this.state.value);
        this.setState({ active: !1, dragStartValue: void 0 });
    };
    handleMouseMove = (e) => {
        (e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e));
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
            { asValueChanges: a } = this.props;
        if (null == n) return;
        let { left: s, right: l } = n,
            o = l - s;
        if (o <= 0) return;
        let d = 100 * Math.min(Math.max((e.clientX - s) / o, 0), 1);
        (null != (t = this.props.equidistant ? f(d, i) : f(this.unscaleValue(d), r)) && a?.(r[t]),
            this.setState({ newClosestIndex: t }));
    }
    moveSmoothly = (e) => {
        let { minValue: t, maxValue: n, asValueChanges: i } = this.props,
            { boundingRect: r } = this.state;
        if (null == r) return;
        let { left: a, right: s } = r,
            l = n - t,
            o = Math.min(Math.max(t + ((e.clientX - a) / (s - a)) * l, t), n);
        (i?.(o), this.setState({ value: o }));
    };
}
function m(e) {
    let { active: t, keyboardFocused: n, children: i } = e,
        [a, s] = r.useState(!1);
    return i({
        sliderStyles: (0, u.z)({
            "--grabber-size": n || t || a ? "20px" : "16px",
            "--bar-size": n || t || a ? "6px" : "4px",
            config: { ...d.config.stiff, duration: 100 },
        }),
        setHovered: s,
    });
}
