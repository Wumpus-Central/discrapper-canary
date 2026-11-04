var r = a(477900),
    s = a(582128),
    n = a(503698),
    i = a.n(n),
    l = a(404144),
    o = a.n(l),
    u = a(736819),
    d = a(621466),
    h = a(717421),
    c = a(844222),
    p = a(559106),
    m = a(452027),
    v = a(866665),
    f = a(303707);
function b(e, t) {
    let a = 0;
    for (let r = 0; r < t.length; r++) {
        let s = t[r];
        if (e === s) return r;
        if (e < s) {
            if (0 === a || s - e < a) return r;
            return r - 1;
        }
        a = e - s;
    }
    return null;
}
function g(e, t) {
    let a = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
    return {
        value: t ?? a,
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...(function (e) {
            let { markers: t, initialValue: a, minValue: r, maxValue: s, equidistant: n } = e,
                i = [],
                l = [];
            if (null == t) return { min: r, max: s, range: s - r, sortedMarkers: i, markerPositions: l };
            let o = b(a, (i = t.sort((e, t) => e - t))),
                u = i[0],
                d = i[i.length - 1],
                h = d - u;
            if (n) {
                let e = 100 / (i.length - 1);
                l = i.map((t, a) => a * e);
            } else l = i.map((e) => (100 * (e - u)) / h);
            return { min: u, max: d, range: h, sortedMarkers: i, markerPositions: l, closestMarkerIndex: o };
        })(e),
    };
}
class x extends s.PureComponent {
    static contextType = c.C;
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
    containerRef = s.createRef();
    grabberRef = s.createRef();
    constructor(e) {
        (super(e), (this.state = { active: !1, focused: !1, dragStartValue: void 0, ...g(e, e.initialValue) }));
    }
    static getDerivedStateFromProps(e, t) {
        if (null != e.value && e.value !== t.value) {
            let a = { ...g(e, e.value), active: t.active };
            if (e.stickToMarkers && a.sortedMarkers.length > 0) {
                let t = b(e.value, a.sortedMarkers);
                null != t && (a.closestMarkerIndex = t);
            }
            return a;
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
                focused: a,
                sortedMarkers: s,
                markerPositions: n,
                closestMarkerIndex: l,
                newClosestIndex: o,
                min: d,
                max: h,
            } = this.state,
            {
                disabled: c,
                stickToMarkers: b,
                className: g,
                children: x,
                barStyles: w,
                fillStyles: k,
                mini: D,
                hideBubble: S,
                defaultValue: y,
                orientation: V,
                onValueRender: P,
                renderMarker: I,
                getAriaValueText: R,
                barClassName: C,
                grabberClassName: j,
                grabberStyles: A = {},
                markerPosition: E = 0,
                tabIndex: N,
                "aria-hidden": T,
                "aria-label": G,
                "aria-labelledby": U,
                "aria-describedby": F,
            } = this.props,
            { fieldProps: K } = (0, m.n)(this.props),
            L = 0;
        (b ? null != n && (null != o ? (L = n[o]) : null != l && (L = n[l])) : (L = this.scaleValue(e)),
            (L = Math.min(Math.max(L, 0), 100)));
        let B = `${L}%`,
            z =
                null != n && null != s
                    ? n.map((e, t) => {
                          let a = s[t],
                              n = null != y && y === a,
                              l = this.renderMark(a);
                          return (0, r.jsx)(
                              "div",
                              {
                                  className: i()(f.mark, {
                                      [f.defaultValue]: n,
                                      [f.markAbove]: 0 === E,
                                      [f.markBelow]: 1 === E,
                                  }),
                                  style: { left: `${e}%` },
                                  children:
                                      null != I
                                          ? I(a)
                                          : (0, r.jsxs)(r.Fragment, {
                                                children: [
                                                    (0, r.jsx)("div", { className: f.markValue, children: l }),
                                                    (0, r.jsx)("div", {
                                                        className: f[`markDash${null == l ? "simple" : ""}`],
                                                    }),
                                                ],
                                            }),
                              },
                              t,
                          );
                      })
                    : null,
            $ = null != P ? P(e) : `${L.toFixed(0)}%`,
            _ = R?.(e) ?? void 0;
        return (0, r.jsx)(m.D, {
            ...K,
            children: (s) =>
                (0, r.jsx)(M, {
                    active: t,
                    keyboardFocused: a && this.context.keyboardModeEnabled,
                    children: (n) =>
                        (0, r.jsx)(p.vN, {
                            focusTarget: this.containerRef,
                            ringTarget: this.grabberRef,
                            children: (0, r.jsxs)(u.animated.div, {
                                className: i()(f.slider, g, {
                                    [f.hasMarks]: (z?.length ?? 0) > 0,
                                    [f.disabled]: c,
                                    [f.mini]: D,
                                }),
                                style: n?.sliderStyles,
                                id: s.controlId,
                                "aria-valuemin": d,
                                "aria-valuemax": h,
                                "aria-valuenow": e,
                                "aria-disabled": c,
                                "aria-orientation": V,
                                "aria-hidden": T,
                                "aria-label": G,
                                "aria-labelledby": U ?? s.labelId,
                                "aria-describedby": F ?? s.describedById,
                                "aria-errormessage": s.errorMessageId,
                                "aria-invalid": null != s.errorMessageId,
                                "aria-valuetext": _,
                                role: "slider",
                                tabIndex: N,
                                onKeyDown: this.handleKeyDown,
                                onPointerDown: this.handlePointerDown,
                                onMouseDown: this.handleContainerMouseDown,
                                onFocus: () => {
                                    this.onFocus();
                                },
                                onBlur: () => {
                                    this.onBlur();
                                },
                                onMouseEnter: () => n?.setHovered(!0),
                                onMouseLeave: () => n?.setHovered(!1),
                                ref: this.containerRef,
                                children: [
                                    (0, r.jsx)("div", { className: f.track, children: z }),
                                    (0, r.jsx)("div", {
                                        className: i()(f.bar, C),
                                        style: w,
                                        children: (0, r.jsx)("div", {
                                            className: f.barFill,
                                            style: { ...k, width: B },
                                        }),
                                    }),
                                    x,
                                    (0, r.jsx)("div", {
                                        className: f.track,
                                        children: (0, r.jsx)(v.m, {
                                            __unsupportedReactNodeAsText: S || b ? null : $,
                                            forceOpen: t || (a && this.context.keyboardModeEnabled),
                                            positionKey: B,
                                            children: (0, r.jsx)("div", {
                                                className: i()(f.grabber, j),
                                                style: { ...A, left: B },
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
        let { asValueChanges: a, onValueChange: r } = this.props,
            s = {};
        ((s.value = e),
            null != t && ((s.closestMarkerIndex = t), (s.newClosestIndex = t)),
            this.setState(s),
            e !== this.state.value && (a?.(e), r?.(e)));
    };
    moveGrabber = (e) => {
        let { sortedMarkers: t, value: a, min: r, max: s, closestMarkerIndex: n } = this.state,
            { stickToMarkers: i } = this.props;
        if (i) {
            let r = n ?? t.indexOf(a);
            if (r < 0) return;
            let s = o()(r + e, 0, t.length - 1),
                i = t[s];
            if (null == i) return;
            this.commitValue(i, s);
        } else this.commitValue(o()(a + e, r, s));
    };
    moveGrabberToEdge = (e) => {
        let { sortedMarkers: t, min: a, max: r } = this.state,
            { stickToMarkers: s } = this.props;
        if (s) {
            if (0 === t.length) return;
            let a = "min" === e ? 0 : t.length - 1,
                r = t[a];
            if (null == r) return;
            this.commitValue(r, a);
        } else this.commitValue("min" === e ? a : r);
    };
    getKeyboardPageStep() {
        let { keyboardPageStep: e, stickToMarkers: t, keyboardStep: a = 1 } = this.props;
        if (t) return e ?? Math.max(1, Math.round(this.state.sortedMarkers.length / 10));
        let { min: r, max: s } = this.state;
        return e ?? Math.max(a, (s - r) / 10);
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
                disabled: a,
                maxValue: r,
                minValue: s,
                asValueChanges: n,
                onValueChange: i,
                stickToMarkers: l,
            } = this.props,
            { sortedMarkers: o, markerPositions: u } = this.state;
        if (a) return;
        let { clientX: h, currentTarget: c } = e;
        if (!(0, d.vq)(c)) return;
        let { left: p, width: m } = c.getBoundingClientRect(),
            v = (h - p) / m;
        if (l) {
            let { nextClosestMarkerIndex: a } = u.reduce(
                (e, t, a) => {
                    let r = Math.abs(t / 100 - v);
                    return r <= e.smallestDelta ? { smallestDelta: r, nextClosestMarkerIndex: a } : e;
                },
                { smallestDelta: 1, nextClosestMarkerIndex: -1 },
            );
            if (-1 === a) return;
            ((t = o[a]),
                this.handleMouseDown(e),
                this.setState({ closestMarkerIndex: a, value: t, newClosestIndex: a }));
        } else ((t = s + (r - s) * v), this.setState({ value: t, dragStartValue: t }), this.handleMouseDown(e));
        (null != i && i(t), null != n && n(t));
    };
    handleKeyDown = (e) => {
        let { disabled: t, orientation: a, consumeAxisOnly: r, keyboardStep: s = 1 } = this.props;
        if (t) return;
        let { key: n } = e,
            i = [],
            l = [];
        switch (a) {
            case "horizontal":
            default:
                ((i = r ? ["ArrowRight"] : ["ArrowRight", "ArrowUp"]),
                    (l = r ? ["ArrowLeft"] : ["ArrowLeft", "ArrowDown"]));
                break;
            case "vertical":
                ((i = r ? ["ArrowUp"] : ["ArrowUp", "ArrowRight"]),
                    (l = r ? ["ArrowDown"] : ["ArrowDown", "ArrowLeft"]));
        }
        l.includes(n)
            ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-s))
            : i.includes(n)
              ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(s))
              : "Home" === n
                ? (e.preventDefault(), e.stopPropagation(), this.moveGrabberToEdge("min"))
                : "End" === n
                  ? (e.preventDefault(), e.stopPropagation(), this.moveGrabberToEdge("max"))
                  : "PageUp" === n
                    ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(this.getKeyboardPageStep()))
                    : "PageDown" === n &&
                      (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-this.getKeyboardPageStep()));
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
        (e.stopPropagation(), this.reset());
        let { onValueChange: t, stickToMarkers: a } = this.props,
            { newClosestIndex: r } = this.state;
        if (a && null != r) {
            let e = this.state.sortedMarkers[r];
            (t?.(e), this.setState({ newClosestIndex: null, closestMarkerIndex: r, value: e }));
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
            { boundingRect: a, markerPositions: r, sortedMarkers: s } = this.state,
            { asValueChanges: n } = this.props;
        if (null == a) return;
        let { left: i, right: l } = a,
            o = l - i;
        if (o <= 0) return;
        let u = 100 * Math.min(Math.max((e.clientX - i) / o, 0), 1);
        (null != (t = this.props.equidistant ? b(u, r) : b(this.unscaleValue(u), s)) && n?.(s[t]),
            this.setState({ newClosestIndex: t }));
    }
    moveSmoothly = (e) => {
        let { minValue: t, maxValue: a, asValueChanges: r } = this.props,
            { boundingRect: s } = this.state;
        if (null == s) return;
        let { left: n, right: i } = s,
            l = a - t,
            o = Math.min(Math.max(t + ((e.clientX - n) / (i - n)) * l, t), a);
        (r?.(o), this.setState({ value: o }));
    };
}
function M(e) {
    let { active: t, keyboardFocused: a, children: r } = e,
        [n, i] = s.useState(!1);
    return r({
        sliderStyles: (0, h.z)({
            "--grabber-size": a || t || n ? "20px" : "16px",
            "--bar-size": a || t || n ? "6px" : "4px",
            config: { ...u.config.stiff, duration: 100 },
        }),
        setHovered: i,
    });
}
a.d(t, {}, { G: x });
