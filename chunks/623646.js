"use strict";
n.d(t, { H: () => p, Q: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(621466),
    c = n(187322),
    u = n(38021),
    _ = n(43990),
    E = n(508382),
    A = n(365912),
    h = n(342505);
let I = new WeakMap();
function f(e) {
    let t = (0, d.p3)(e, h.qd);
    return null == t && (t = (0, d.wB)(e, E.IP)), t ?? null;
}
function p(e, t) {
    if (e.contains(t)) return !0;
    let n = f(t);
    for (; null != n; ) {
        let t = I.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = f(t);
    }
    return !1;
}
function T(e) {
    let { positionKey: t, position: n, align: i } = e;
    return null != t ? t : `${n}:${i}`;
}
function m(e, t, n, i, r) {
    switch (e) {
        case "top":
            return (
                o()(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight) - (r?.top ?? 0)
            );
        case "bottom":
            return o()(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight) - (r?.bottom ?? 0);
        case "left":
            return o()(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth) - (r?.left ?? 0);
        case "right":
            return o()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth) - (r?.right ?? 0);
        case "center":
        case "window_center":
            return o()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error(`Unexpected position: ${e}`);
    }
}
function g(e) {
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
    return null != n ? n : (o()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
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
        let r = e + t.getBoundingClientRect().height - n.offsetHeight + 12;
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
            l = S(this.props),
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
        o()(null != i, "Unexpected null element");
        let r = (0, A.J$)(i),
            { style: a, nudge: s } = this.calculatePositionStyle(e, i, r),
            l = { position: e, style: a, nudge: s },
            d = m(e, a, i, r, n),
            c = d,
            u = null,
            _ = 0;
        if (t && d < 0) {
            let t = g(e),
                a = this.calculatePositionStyle(t, i, r);
            (u = a.style), (_ = a.nudge);
            let s = m(t, u, i, r, n);
            if ((s > d && ((l = { position: t, style: u, nudge: _ }), (c = s)), d < 0 && s < 0)) {
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
                        t = m(g(s), e.style, i, r, n);
                    t > c && ((l = { position: s, ...e }), (c = t));
                }
            }
        }
        var E = c,
            h = l;
        if (
            null != E &&
            E < 0 &&
            ("top" === h.position || "bottom" === h.position) &&
            null != i &&
            Math.abs(E) < i?.offsetHeight &&
            null != h.style
        ) {
            let e = "top" === h.position ? "bottom" : "top",
                t = h.style[e];
            return { ...h, style: { ...h.style, [e]: (null == t ? 0 : t) + E } };
        }
        return h;
    }
    componentDidMount() {
        let { targetRef: e, onMount: t } = this.props;
        this.setState({ isPositioned: !0, ...this.calculateState() });
        let n = this.elementRef.current;
        o()(null != n, "Missing elementRef"),
            null != e.current && I.set(n, e.current),
            n?.ownerDocument?.defaultView?.addEventListener("resize", this.updatePosition),
            t?.();
    }
    componentDidUpdate(e, t) {
        var n;
        let i, r;
        (T(e) !== T(this.props) || ((n = this.props), (i = S(e)), (r = S(n)), i.top !== r.top || i.left !== r.left)) &&
            this.updatePosition(),
            t.position !== this.state.position && this.props.onPositionChange?.(this.state.position);
    }
    componentWillUnmount() {
        let e = this.elementRef.current;
        o()(null != e, "Missing elementRef"),
            I.delete(e),
            e?.ownerDocument?.defaultView?.removeEventListener("resize", this.updatePosition),
            this.props.onUnmount?.();
    }
    updatePosition = () => {
        this.setState(this.calculateState());
    };
    calculateMaxHeight() {
        let e = this.elementRef.current;
        if (null == e) return;
        let t = (0, A.J$)(e),
            n = this.state.style;
        return null != n.top
            ? Math.max(0, t.offsetHeight - n.top - 12)
            : null != n.bottom
              ? Math.max(0, t.offsetHeight - n.bottom - 12)
              : Math.max(0, t.offsetHeight - 24);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: l = !1 } = this.props,
            { position: o, isPositioned: d, nudge: E } = this.state,
            A = this.calculateMaxHeight();
        return (0, i.jsx)("div", {
            className: s()({ [h.ld]: !0, [h.x7]: l }),
            children: (0, i.jsx)(u.aS, {
                children: (l) => {
                    let { disableAdaptiveTheme: u } = l;
                    return (0, i.jsx)(_.N, {
                        disableAdaptiveTheme: u,
                        children: (l) =>
                            (0, i.jsx)("div", {
                                id: e,
                                className: s()(t, l, h.qd, { [h.CA]: !1, [h.Hc]: a }),
                                style: {
                                    position: r ? "fixed" : "absolute",
                                    ...this.state.style,
                                    "--reference-position-layer-max-height": null != A ? `${A}px` : void 0,
                                },
                                ref: this.elementRef,
                                children: (0, i.jsx)(c.xp, {
                                    containerRef: this.elementRef,
                                    children: n({ position: o, nudge: E, isPositioned: d }, this.updatePosition),
                                }),
                            }),
                    });
                },
            }),
        });
    }
}
