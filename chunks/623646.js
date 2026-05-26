"use strict";
n.d(t, { H: () => g, Q: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(621466),
    c = n(187322),
    d = n(38021),
    _ = n(43990),
    f = n(508382),
    h = n(83379),
    p = n(56553);
let E = new WeakMap();
function m(e) {
    let t = (0, u.p3)(e, p.qd);
    return null == t && (t = (0, u.wB)(e, f.IP)), t ?? null;
}
function g(e, t) {
    if (e.contains(t)) return !0;
    let n = m(t);
    for (; null != n; ) {
        let t = E.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = m(t);
    }
    return !1;
}
function A(e) {
    let { positionKey: t, position: n, align: i } = e;
    return null != t ? t : `${n}:${i}`;
}
function I(e, t, n, i, r) {
    switch (e) {
        case "top":
            return (
                l()(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight) - (r?.top ?? 0)
            );
        case "bottom":
            return l()(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight) - (r?.bottom ?? 0);
        case "left":
            return l()(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth) - (r?.left ?? 0);
        case "right":
            return l()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth) - (r?.right ?? 0);
        case "center":
        case "window_center":
            return l()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error(`Unexpected position: ${e}`);
    }
}
function T(e) {
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
function S(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (l()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}
class N extends r.Component {
    static defaultProps = { nudgeAlignIntoViewport: !1, spacing: 0, autoInvert: !1, disablePointerEvents: !1 };
    elementRef = r.createRef();
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
            s = e + t.offsetWidth - r + 12;
        return s > 0 ? Math.max(12, e - s) : Math.max(12, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return 0;
        let r = t.offsetWidth;
        return Math.min(n.offsetWidth - e - r - 12, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, i) {
        let { align: r, offset: s = 0 } = this.props;
        switch (r) {
            case "left": {
                let r = this.formatDimension(this.nudgeLeftAlignment(e.left + s, t, n)),
                    a = this.formatDimension(e.left + s) - r;
                return { style: { ...i, left: r }, nudge: a };
            }
            case "right": {
                let r = this.formatDimension(n.offsetWidth - e.right - s),
                    a = this.nudgeRightAlignment(r, t, n);
                return { style: { ...i, right: r + a }, nudge: 0 };
            }
            case "center": {
                let r = e.left + (e.width - t.offsetWidth) / 2 + s,
                    a = this.formatDimension(this.nudgeLeftAlignment(r, t, n)),
                    o = this.formatDimension(r) - a;
                return { style: { ...i, left: a }, nudge: o };
            }
            default:
                throw Error(`Unsupported align: ${r}`);
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        if (e < 0) return 0;
        let r = e + t.getBoundingClientRect().height - n.offsetHeight + 12;
        return r > 0 ? Math.max(12, e - r) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props,
            r = n.offsetHeight,
            s = r - e;
        if (!i) return s;
        let a = s + t.offsetHeight - r + 12;
        return a > 0 ? Math.max(12, s - a) : s;
    }
    getVerticalAlignmentStyle(e, t, n, i) {
        let { align: r, offset: s = 0 } = this.props;
        switch (r) {
            case "top": {
                let r = this.formatDimension(this.nudgeTopAlignment(e.top + s, t, n)),
                    a = this.formatDimension(e.top + s) - r;
                return { style: { ...i, top: r }, nudge: a };
            }
            case "bottom": {
                let r = this.formatDimension(this.nudgeBottomAlignment(e.bottom + s, t, n)),
                    a = this.formatDimension(e.bottom + s) - r;
                return { style: { ...i, bottom: r }, nudge: a };
            }
            case "center": {
                let r = e.top + (e.height - t.offsetHeight) / 2 + s,
                    a = this.formatDimension(this.nudgeTopAlignment(r, t, n)),
                    o = this.formatDimension(r) - a;
                return { style: { ...i, top: a }, nudge: o };
            }
            default:
                throw Error(`Unsupported align: ${r}`);
        }
    }
    calculatePositionStyle(e, t, n, i) {
        var r, s;
        let { spacing: a = 0 } = this.props,
            o = S(this.props),
            l = n.getBoundingClientRect(),
            u =
                ((r = l.left),
                (s = l.top),
                {
                    top: o.top - s,
                    left: o.left - r,
                    bottom: o.bottom - s,
                    right: o.right - r,
                    width: o.width,
                    height: o.height,
                });
        switch (e) {
            case "top":
                return this.getHorizontalAlignmentStyle(u, t, n, { bottom: n.offsetHeight - u.top + a });
            case "bottom":
                return this.getHorizontalAlignmentStyle(u, t, n, { top: u.bottom + a });
            case "left":
                return this.getVerticalAlignmentStyle(u, t, n, { right: n.offsetWidth - u.left + a });
            case "right":
                return this.getVerticalAlignmentStyle(u, t, n, { left: u.right + a });
            case "overlap_vertical":
                return this.getHorizontalAlignmentStyle(u, t, n, { [i]: 0 });
            case "overlap_horizontal":
                return this.getVerticalAlignmentStyle(u, t, n, { [i]: 12 });
            case "center":
                return this.getVerticalAlignmentStyle(u, t, n, { left: u.left + u.width / 2 - t.offsetWidth / 2 + a });
            case "window_center":
                return this.getVerticalAlignmentStyle(u, t, n, {
                    left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0),
                });
            default:
                throw Error(`Unexpected position: ${e}`);
        }
    }
    calculateState() {
        let { position: e, autoInvert: t, avoidancePadding: n } = this.props,
            i = this.elementRef.current;
        l()(null != i, "Unexpected null element");
        let r = (0, h.J$)(i),
            { style: s, nudge: a } = this.calculatePositionStyle(e, i, r),
            o = { position: e, style: s, nudge: a },
            u = I(e, s, i, r, n),
            c = u,
            d = null,
            _ = 0;
        if (t && u < 0) {
            let t = T(e),
                s = this.calculatePositionStyle(t, i, r);
            (d = s.style), (_ = s.nudge);
            let a = I(t, d, i, r, n);
            if ((a > u && ((o = { position: t, style: d, nudge: _ }), (c = a)), u < 0 && a < 0)) {
                let s,
                    a = o.position;
                if (
                    (s =
                        "top" === a || "bottom" === a
                            ? "overlap_vertical"
                            : "left" === a || "right" === a
                              ? "overlap_horizontal"
                              : a) !== e &&
                    s !== t
                ) {
                    let e = this.calculatePositionStyle(s, i, r, a),
                        t = I(T(a), e.style, i, r, n);
                    t > c && ((o = { position: a, ...e }), (c = t));
                }
            }
        }
        var f = c,
            p = o;
        if (
            null != f &&
            f < 0 &&
            ("top" === p.position || "bottom" === p.position) &&
            null != i &&
            Math.abs(f) < i?.offsetHeight &&
            null != p.style
        ) {
            let e = "top" === p.position ? "bottom" : "top",
                t = p.style[e];
            return { ...p, style: { ...p.style, [e]: (null == t ? 0 : t) + f } };
        }
        return p;
    }
    componentDidMount() {
        let { targetRef: e, onMount: t } = this.props;
        this.setState({ isPositioned: !0, ...this.calculateState() });
        let n = this.elementRef.current;
        l()(null != n, "Missing elementRef"),
            null != e.current && E.set(n, e.current),
            n?.ownerDocument?.defaultView?.addEventListener("resize", this.updatePosition),
            t?.();
    }
    componentDidUpdate(e, t) {
        var n;
        let i, r;
        (A(e) !== A(this.props) || ((n = this.props), (i = S(e)), (r = S(n)), i.top !== r.top || i.left !== r.left)) &&
            this.updatePosition(),
            t.position !== this.state.position && this.props.onPositionChange?.(this.state.position);
    }
    componentWillUnmount() {
        let e = this.elementRef.current;
        l()(null != e, "Missing elementRef"),
            E.delete(e),
            e?.ownerDocument?.defaultView?.removeEventListener("resize", this.updatePosition),
            this.props.onUnmount?.();
    }
    updatePosition = () => {
        this.setState(this.calculateState());
    };
    calculateMaxHeight() {
        let e = this.elementRef.current;
        if (null == e) return;
        let t = (0, h.J$)(e),
            n = this.state.style;
        return null != n.top
            ? Math.max(0, t.offsetHeight - n.top - 12)
            : null != n.bottom
              ? Math.max(0, t.offsetHeight - n.bottom - 12)
              : Math.max(0, t.offsetHeight - 24);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: s, clickTrap: o = !1 } = this.props,
            { position: l, isPositioned: u, nudge: f } = this.state,
            h = this.calculateMaxHeight();
        return (0, i.jsx)("div", {
            className: a()({ [p.ld]: !0, [p.x7]: o }),
            children: (0, i.jsx)(d.aS, {
                children: (o) => {
                    let { disableAdaptiveTheme: d } = o;
                    return (0, i.jsx)(_.N, {
                        disableAdaptiveTheme: d,
                        children: (o) =>
                            (0, i.jsx)("div", {
                                id: e,
                                className: a()(t, o, p.qd, { [p.CA]: !1, [p.Hc]: s }),
                                style: {
                                    position: r ? "fixed" : "absolute",
                                    ...this.state.style,
                                    "--reference-position-layer-max-height": null != h ? `${h}px` : void 0,
                                },
                                ref: this.elementRef,
                                children: (0, i.jsx)(c.xp, {
                                    containerRef: this.elementRef,
                                    children: n({ position: l, nudge: f, isPositioned: u }, this.updatePosition),
                                }),
                            }),
                    });
                },
            }),
        });
    }
}
