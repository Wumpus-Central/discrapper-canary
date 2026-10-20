n.d(t, { H: () => m, Q: () => O });
var i = n(477900),
    r = n(582128),
    a = n(38339),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    d = n.n(o),
    c = n(333007),
    u = n(621466),
    _ = n(559106),
    E = n(38021),
    A = n(43990),
    h = n(508382),
    f = n(365912),
    I = n(38112);
let p = new WeakMap();
function T(e) {
    let t = (0, u.p3)(e, I.qd);
    return (null == t && (t = (0, u.wB)(e, h.IP)), t ?? null);
}
function m(e, t) {
    if (e.contains(t)) return !0;
    let n = T(t);
    for (; null != n;) {
        let t = p.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = T(t);
    }
    return !1;
}
function g(e) {
    let { positionKey: t, position: n, align: i } = e;
    return null != t ? t : `${n}:${i}`;
}
function S(e, t, n, i, r) {
    switch (e) {
        case "top":
            return (
                d()(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight) - (r?.top ?? 0)
            );
        case "bottom":
            return (d()(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight) - (r?.bottom ?? 0));
        case "left":
            return (d()(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth) - (r?.left ?? 0));
        case "right":
            return (d()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth) - (r?.right ?? 0));
        case "center":
        case "window_center":
            return (d()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2));
        default:
            throw Error(`Unexpected position: ${e}`);
    }
}
function N(e) {
    switch (e) {
        case "top":
            return "bottom";
        case "bottom":
            return "top";
        case "left":
            return "right";
        case "right":
            return "left";
        case "center":
            return "center";
        case "window_center":
            return "window_center";
        default:
            throw Error();
    }
}
function C(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (d()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}
class O extends r.Component {
    static defaultProps = { nudgeAlignIntoViewport: !1, spacing: 0, autoInvert: !1, disablePointerEvents: !1 };
    elementRef = r.createRef();
    resizeObserver;
    stopTrackingTargetPosition;
    state = {
        style: Object.freeze({}),
        position: this.props.autoInvert ? null : this.props.position,
        nudge: 0,
        isPositioned: !1,
    };
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        let r = n.offsetWidth,
            a = e + t.offsetWidth - r + 12;
        return a > 0 ? Math.max(12, e - a) : Math.max(12, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return 0;
        let r = t.offsetWidth;
        return Math.min(n.offsetWidth - e - r - 12, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, i) {
        let { align: r, offset: a = 0 } = this.props;
        switch (r) {
            case "left": {
                let r = this.formatDimension(this.nudgeLeftAlignment(e.left + a, t, n)),
                    s = this.formatDimension(e.left + a) - r;
                return { style: { ...i, left: r }, nudge: s };
            }
            case "right": {
                let r = this.formatDimension(n.offsetWidth - e.right - a),
                    s = this.nudgeRightAlignment(r, t, n);
                return { style: { ...i, right: r + s }, nudge: 0 };
            }
            case "center": {
                let r = e.left + (e.width - t.offsetWidth) / 2 + a,
                    s = this.formatDimension(this.nudgeLeftAlignment(r, t, n)),
                    l = this.formatDimension(r) - s;
                return { style: { ...i, left: s }, nudge: l };
            }
            default:
                throw Error(`Unsupported align: ${r}`);
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        if (e < 0) return 0;
        let r = e + Math.ceil(t.getBoundingClientRect().height) - n.offsetHeight + 12;
        return r > 0 ? Math.max(12, e - r) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props,
            r = n.offsetHeight,
            a = r - e;
        if (!i) return a;
        let s = a + t.offsetHeight - r + 12;
        return s > 0 ? Math.max(12, a - s) : a;
    }
    getVerticalAlignmentStyle(e, t, n, i) {
        let { align: r, offset: a = 0 } = this.props;
        switch (r) {
            case "top": {
                let r = this.formatDimension(this.nudgeTopAlignment(e.top + a, t, n)),
                    s = this.formatDimension(e.top + a) - r;
                return { style: { ...i, top: r }, nudge: s };
            }
            case "bottom": {
                let r = this.formatDimension(this.nudgeBottomAlignment(e.bottom + a, t, n)),
                    s = this.formatDimension(e.bottom + a) - r;
                return { style: { ...i, bottom: r }, nudge: s };
            }
            case "center": {
                let r = e.top + (e.height - t.offsetHeight) / 2 + a,
                    s = this.formatDimension(this.nudgeTopAlignment(r, t, n)),
                    l = this.formatDimension(r) - s;
                return { style: { ...i, top: s }, nudge: l };
            }
            default:
                throw Error(`Unsupported align: ${r}`);
        }
    }
    calculatePositionStyle(e, t, n, i) {
        var r, a;
        let { spacing: s = 0 } = this.props,
            l = C(this.props),
            o = n.getBoundingClientRect(),
            d =
                ((r = o.left),
                (a = o.top),
                {
                    top: l.top - a,
                    left: l.left - r,
                    bottom: l.bottom - a,
                    right: l.right - r,
                    width: l.width,
                    height: l.height,
                });
        switch (e) {
            case "top":
                return this.getHorizontalAlignmentStyle(d, t, n, { bottom: n.offsetHeight - d.top + s });
            case "bottom":
                return this.getHorizontalAlignmentStyle(d, t, n, { top: d.bottom + s });
            case "left":
                return this.getVerticalAlignmentStyle(d, t, n, { right: n.offsetWidth - d.left + s });
            case "right":
                return this.getVerticalAlignmentStyle(d, t, n, { left: d.right + s });
            case "overlap_vertical":
                return this.getHorizontalAlignmentStyle(d, t, n, { [i]: 0 });
            case "overlap_horizontal":
                return this.getVerticalAlignmentStyle(d, t, n, { [i]: 12 });
            case "center":
                return this.getVerticalAlignmentStyle(d, t, n, { left: d.left + d.width / 2 - t.offsetWidth / 2 + s });
            case "window_center":
                return this.getVerticalAlignmentStyle(d, t, n, {
                    left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0),
                });
            default:
                throw Error(`Unexpected position: ${e}`);
        }
    }
    calculateState() {
        let { position: e, autoInvert: t, avoidancePadding: n } = this.props,
            i = this.elementRef.current;
        d()(null != i, "Unexpected null element");
        let r = (0, f.J$)(i),
            { style: a, nudge: s } = this.calculatePositionStyle(e, i, r),
            l = { position: e, style: a, nudge: s },
            o = S(e, a, i, r, n),
            c = o,
            u = null,
            _ = 0;
        if (t && o < 0) {
            let t = N(e),
                a = this.calculatePositionStyle(t, i, r);
            ((u = a.style), (_ = a.nudge));
            let s = S(t, u, i, r, n);
            if ((s > o && ((l = { position: t, style: u, nudge: _ }), (c = s)), o < 0 && s < 0)) {
                let a,
                    s = l.position;
                if (
                    (a =
                        "top" === s || "bottom" === s
                            ? "overlap_vertical"
                            : "left" === s || "right" === s
                              ? "overlap_horizontal"
                              : s) !== e &&
                    a !== t
                ) {
                    let e = this.calculatePositionStyle(a, i, r, s),
                        t = S(N(s), e.style, i, r, n);
                    t > c && ((l = { position: s, ...e }), (c = t));
                }
            }
        }
        var E = c,
            A = l;
        if (
            null != E &&
            E < 0 &&
            ("top" === A.position || "bottom" === A.position) &&
            null != i &&
            Math.abs(E) < i?.offsetHeight &&
            null != A.style
        ) {
            let e = "top" === A.position ? "bottom" : "top",
                t = A.style[e];
            return { ...A, style: { ...A.style, [e]: (null == t ? 0 : t) + E } };
        }
        return A;
    }
    componentDidMount() {
        let { targetRef: e, onMount: t } = this.props;
        this.setState({ isPositioned: !0, ...this.calculateState() }, this.startTrackingTargetPosition);
        let n = this.elementRef.current;
        (d()(null != n, "Missing elementRef"),
            null != e.current && p.set(n, e.current),
            n?.ownerDocument?.defaultView?.addEventListener("resize", this.updatePosition));
        let i = n?.ownerDocument?.defaultView?.ResizeObserver;
        (null != n &&
            null != i &&
            ((this.resizeObserver = new i(this.handleResize)), this.resizeObserver.observe(n, { box: "border-box" })),
            t?.());
    }
    startTrackingTargetPosition = () => {
        let { trackTargetPosition: e, overrideTargetRect: t, targetRef: n } = this.props,
            i = this.elementRef.current;
        e &&
            null == t &&
            null != n.current &&
            null != i &&
            (this.stopTrackingTargetPosition = (0, a.ll)(n.current, i, this.handleResize, {
                ancestorScroll: !1,
                ancestorResize: !1,
                elementResize: !1,
                layoutShift: !0,
            }));
    };
    componentDidUpdate(e, t) {
        var n;
        let i, r;
        ((g(e) !== g(this.props) || ((n = this.props), (i = C(e)), (r = C(n)), i.top !== r.top || i.left !== r.left)) &&
            this.updatePosition(),
            t.position !== this.state.position && this.props.onPositionChange?.(this.state.position));
    }
    componentWillUnmount() {
        let e = this.elementRef.current;
        (d()(null != e, "Missing elementRef"),
            p.delete(e),
            e?.ownerDocument?.defaultView?.removeEventListener("resize", this.updatePosition),
            this.resizeObserver?.disconnect(),
            this.stopTrackingTargetPosition?.(),
            this.props.onUnmount?.());
    }
    updatePosition = () => {
        this.setState(this.calculateState());
    };
    handleResize = () => {
        var e;
        let t = this.calculateState();
        ((e = this.state),
            (t.position !== e.position ||
                t.nudge !== e.nudge ||
                t.style.top !== e.style.top ||
                t.style.bottom !== e.style.bottom ||
                t.style.left !== e.style.left ||
                t.style.right !== e.style.right) &&
                (0, c.flushSync)(() => this.setState(t)));
    };
    calculateMaxHeight() {
        let e = this.elementRef.current;
        if (null == e) return;
        let t = (0, f.J$)(e),
            n = this.state.style;
        return null != n.top
            ? Math.max(0, t.offsetHeight - n.top - 12)
            : null != n.bottom
              ? Math.max(0, t.offsetHeight - n.bottom - 12)
              : Math.max(0, t.offsetHeight - 24);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: s = !1 } = this.props,
            { position: o, isPositioned: d, nudge: c } = this.state,
            u = this.calculateMaxHeight();
        return (0, i.jsx)("div", {
            className: l()({ [I.ld]: !0, [I.x7]: s }),
            children: (0, i.jsx)(E.aS, {
                children: (s) => {
                    let { disableAdaptiveTheme: E } = s;
                    return (0, i.jsx)(A.N, {
                        disableAdaptiveTheme: E,
                        children: (s) =>
                            (0, i.jsx)("div", {
                                id: e,
                                className: l()(t, s, I.qd, { [I.CA]: !1, [I.Hc]: a }),
                                style: {
                                    position: r ? "fixed" : "absolute",
                                    ...this.state.style,
                                    "--reference-position-layer-max-height": null != u ? `${u}px` : void 0,
                                },
                                ref: this.elementRef,
                                children: (0, i.jsx)(_.xp, {
                                    containerRef: this.elementRef,
                                    children: n({ position: o, nudge: c, isPositioned: d }, this.updatePosition),
                                }),
                            }),
                    });
                },
            }),
        });
    }
}
