"use strict";
n.d(t, { H: () => E, Q: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(621466),
    c = n(426333),
    d = n(38021),
    _ = n(43990),
    f = n(508382),
    p = n(365912),
    h = n(992910);
let m = new WeakMap();
function g(e) {
    let t = (0, u.p3)(e, h.qd);
    return null == t && (t = (0, u.wB)(e, f.IP)), t ?? null;
}
function E(e, t) {
    if (e.contains(t)) return !0;
    let n = g(t);
    for (; null != n; ) {
        let t = m.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = g(t);
    }
    return !1;
}
let A = 12;
function I(e) {
    let { positionKey: t, position: n, align: r } = e;
    return null != t ? t : `${n}:${r}`;
}
function T(e, t, n, r) {
    switch (e) {
        case "top":
            return l()(null != t.bottom, "Missing bottom"), r.offsetHeight - (t.bottom + n.offsetHeight);
        case "bottom":
            return l()(null != t.top, "Missing top"), r.offsetHeight - (t.top + n.offsetHeight);
        case "left":
            return l()(null != t.right, "Missing right"), r.offsetWidth - (t.right + n.offsetWidth);
        case "right":
            return l()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth);
        case "center":
        case "window_center":
            return l()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error(`Unexpected position: ${e}`);
    }
}
function y(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height,
    };
}
function S(e) {
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
function v(e, t, n) {
    if (
        null != e &&
        e < 0 &&
        ("top" === n.position || "bottom" === n.position) &&
        null != t &&
        Math.abs(e) < t?.offsetHeight &&
        null != n.style
    ) {
        let t = "top" === n.position ? "bottom" : "top",
            r = n.style[t];
        return { ...n, style: { ...n.style, [t]: (null == r ? 0 : r) + e } };
    }
    return n;
}
function C(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (l()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}
function b(e, t) {
    let n = C(e),
        r = C(t);
    return n.top === r.top && n.left === r.left;
}
class N extends i.Component {
    static defaultProps = { nudgeAlignIntoViewport: !1, spacing: 0, autoInvert: !1, disablePointerEvents: !1 };
    elementRef = i.createRef();
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
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            a = e + t.offsetWidth - i + A;
        return a > 0 ? Math.max(A, e - a) : Math.max(A, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return 0;
        let i = t.offsetWidth;
        return Math.min(n.offsetWidth - e - i - A, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "left": {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left + a, t, n)),
                    s = this.formatDimension(e.left + a) - i;
                return { style: { ...r, left: i }, nudge: s };
            }
            case "right": {
                let i = this.formatDimension(n.offsetWidth - e.right - a),
                    s = this.nudgeRightAlignment(i, t, n);
                return { style: { ...r, right: i + s }, nudge: 0 };
            }
            case "center": {
                let i = e.left + (e.width - t.offsetWidth) / 2 + a,
                    s = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    o = this.formatDimension(i) - s;
                return { style: { ...r, left: s }, nudge: o };
            }
            default:
                throw Error(`Unsupported align: ${i}`);
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        if (e < 0) return 0;
        let i = e + t.getBoundingClientRect().height - n.offsetHeight + A;
        return i > 0 ? Math.max(A, e - i) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let s = a + t.offsetHeight - i + A;
        return s > 0 ? Math.max(A, a - s) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "top": {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top + a, t, n)),
                    s = this.formatDimension(e.top + a) - i;
                return { style: { ...r, top: i }, nudge: s };
            }
            case "bottom": {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom + a, t, n)),
                    s = this.formatDimension(e.bottom + a) - i;
                return { style: { ...r, bottom: i }, nudge: s };
            }
            case "center": {
                let i = e.top + (e.height - t.offsetHeight) / 2 + a,
                    s = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    o = this.formatDimension(i) - s;
                return { style: { ...r, top: s }, nudge: o };
            }
            default:
                throw Error(`Unsupported align: ${i}`);
        }
    }
    calculatePositionStyle(e, t, n, r) {
        let { spacing: i = 0 } = this.props,
            a = C(this.props),
            s = n.getBoundingClientRect(),
            o = y(a, s.left, s.top);
        switch (e) {
            case "top":
                return this.getHorizontalAlignmentStyle(o, t, n, { bottom: n.offsetHeight - o.top + i });
            case "bottom":
                return this.getHorizontalAlignmentStyle(o, t, n, { top: o.bottom + i });
            case "left":
                return this.getVerticalAlignmentStyle(o, t, n, { right: n.offsetWidth - o.left + i });
            case "right":
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.right + i });
            case "overlap_vertical":
                return this.getHorizontalAlignmentStyle(o, t, n, { [r]: 0 });
            case "overlap_horizontal":
                return this.getVerticalAlignmentStyle(o, t, n, { [r]: A });
            case "center":
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.left + o.width / 2 - t.offsetWidth / 2 + i });
            case "window_center":
                return this.getVerticalAlignmentStyle(o, t, n, {
                    left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0),
                });
            default:
                throw Error(`Unexpected position: ${e}`);
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        l()(null != n, "Unexpected null element");
        let r = (0, p.J$)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            s = { position: e, style: i, nudge: a },
            o = T(e, i, n, r),
            u = o,
            c = null,
            d = 0;
        if (t && o < 0) {
            let t = S(e),
                i = this.calculatePositionStyle(t, n, r);
            (c = i.style), (d = i.nudge);
            let a = T(t, c, n, r);
            if ((a > o && ((s = { position: t, style: c, nudge: d }), (u = a)), o < 0 && a < 0)) {
                let i,
                    a = s.position;
                if (
                    (i =
                        "top" === a || "bottom" === a
                            ? "overlap_vertical"
                            : "left" === a || "right" === a
                              ? "overlap_horizontal"
                              : a) !== e &&
                    i !== t
                ) {
                    let e = this.calculatePositionStyle(i, n, r, a),
                        t = T(S(a), e.style, n, r);
                    t > u && ((s = { position: a, ...e }), (u = t));
                }
            }
        }
        return v(u, n, s);
    }
    componentDidMount() {
        let { targetRef: e, onMount: t } = this.props;
        this.setState({ isPositioned: !0, ...this.calculateState() });
        let n = this.elementRef.current;
        l()(null != n, "Missing elementRef"),
            null != e.current && m.set(n, e.current),
            n?.ownerDocument?.defaultView?.addEventListener("resize", this.updatePosition),
            t?.();
    }
    componentDidUpdate(e, t) {
        (I(e) === I(this.props) && b(e, this.props)) || this.updatePosition(),
            t.position !== this.state.position && this.props.onPositionChange?.(this.state.position);
    }
    componentWillUnmount() {
        let e = this.elementRef.current;
        l()(null != e, "Missing elementRef"),
            m.delete(e),
            e?.ownerDocument?.defaultView?.removeEventListener("resize", this.updatePosition),
            this.props.onUnmount?.();
    }
    updatePosition = () => {
        this.setState(this.calculateState());
    };
    calculateMaxHeight() {
        let e = this.elementRef.current;
        if (null == e) return;
        let t = (0, p.J$)(e),
            n = this.state.style;
        return null != n.top
            ? Math.max(0, t.offsetHeight - n.top - A)
            : null != n.bottom
              ? Math.max(0, t.offsetHeight - n.bottom - A)
              : Math.max(0, t.offsetHeight - 2 * A);
    }
    render() {
        let { id: e, className: t, children: n, fixed: i, disablePointerEvents: a, clickTrap: o = !1 } = this.props,
            { position: l, isPositioned: u, nudge: f } = this.state,
            p = this.calculateMaxHeight();
        return (0, r.jsx)("div", {
            className: s()({ [h.ld]: !0, [h.x7]: o }),
            children: (0, r.jsx)(d.aS, {
                children: (o) => {
                    let { disableAdaptiveTheme: d } = o;
                    return (0, r.jsx)(_.N, {
                        disableAdaptiveTheme: d,
                        children: (o) =>
                            (0, r.jsx)("div", {
                                id: e,
                                className: s()(t, o, h.qd, { [h.CA]: !1, [h.Hc]: a }),
                                style: {
                                    position: i ? "fixed" : "absolute",
                                    ...this.state.style,
                                    "--reference-position-layer-max-height": null != p ? `${p}px` : void 0,
                                },
                                ref: this.elementRef,
                                children: (0, r.jsx)(c.xp, {
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
