n.d(t, {
    j: () => w,
    t: () => I,
}),
    n(388685),
    n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(374470),
    d = n(155127),
    f = n(70007),
    _ = n(709048),
    p = n(762328),
    h = n(168718),
    m = n(793906);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new WeakMap();
function v(e) {
    let t = (0, u.sK)(e, m.layer);
    return null == t && (t = (0, u.MD)(e, p.TA)), null != t ? t : null;
}
function I(e, t) {
    if (e.contains(t)) return !0;
    let n = v(t);
    for (; null != n; ) {
        let t = O.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = v(t);
    }
    return !1;
}
let T = 12;
function S(e) {
    let { positionKey: t, position: n, align: r } = e;
    return null != t ? t : "".concat(n, ":").concat(r);
}
function A(e, t, n, r) {
    switch (e) {
        case "top":
            return c()(null != t.bottom, "Missing bottom"), r.offsetHeight - (t.bottom + n.offsetHeight);
        case "bottom":
            return c()(null != t.top, "Missing top"), r.offsetHeight - (t.top + n.offsetHeight);
        case "left":
            return c()(null != t.right, "Missing right"), r.offsetWidth - (t.right + n.offsetWidth);
        case "right":
            return c()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth);
        case "center":
        case "window_center":
            return c()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error("Unexpected position: ".concat(e));
    }
}
function C(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height,
    };
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
function R(e, t, n) {
    if (
        null != e &&
        e < 0 &&
        ("top" === n.position || "bottom" === n.position) &&
        null != t &&
        Math.abs(e) < (null == t ? void 0 : t.offsetHeight) &&
        null != n.style
    ) {
        let t = "top" === n.position ? "bottom" : "top",
            r = n.style[t];
        return y(E({}, n), { style: y(E({}, n.style), { [t]: (null == r ? 0 : r) + e }) });
    }
    return n;
}
function P(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}
function D(e, t) {
    let n = P(e),
        r = P(t);
    return n.top === r.top && n.left === r.left;
}
class w extends (r = a.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            a = e + t.offsetWidth - i + T;
        return a > 0 ? Math.max(T, e - a) : Math.max(T, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return 0;
        let i = t.offsetWidth;
        return Math.min(n.offsetWidth - e - i - T, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "left": {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left + a, t, n)),
                    o = this.formatDimension(e.left + a) - i;
                return {
                    style: y(E({}, r), { left: i }),
                    nudge: o,
                };
            }
            case "right": {
                let i = this.formatDimension(n.offsetWidth - e.right - a),
                    o = this.nudgeRightAlignment(i, t, n);
                return {
                    style: y(E({}, r), { right: i + o }),
                    nudge: 0,
                };
            }
            case "center": {
                let i = e.left + (e.width - t.offsetWidth) / 2 + a,
                    o = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    s = this.formatDimension(i) - o;
                return {
                    style: y(E({}, r), { left: o }),
                    nudge: s,
                };
            }
            default:
                throw Error("Unsupported align: ".concat(i));
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        if (e < 0) return 0;
        let i = t.getBoundingClientRect().height,
            a = e + i - n.offsetHeight + T;
        return a > 0 ? Math.max(T, e - a) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let o = a + t.offsetHeight - i + T;
        return o > 0 ? Math.max(T, a - o) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "top": {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top + a, t, n)),
                    o = this.formatDimension(e.top + a) - i;
                return {
                    style: y(E({}, r), { top: i }),
                    nudge: o,
                };
            }
            case "bottom": {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom + a, t, n)),
                    o = this.formatDimension(e.bottom + a) - i;
                return {
                    style: y(E({}, r), { bottom: i }),
                    nudge: o,
                };
            }
            case "center": {
                let i = e.top + (e.height - t.offsetHeight) / 2 + a,
                    o = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    s = this.formatDimension(i) - o;
                return {
                    style: y(E({}, r), { top: o }),
                    nudge: s,
                };
            }
            default:
                throw Error("Unsupported align: ".concat(i));
        }
    }
    calculatePositionStyle(e, t, n, r) {
        let { spacing: i = 0 } = this.props,
            a = P(this.props),
            o = n.getBoundingClientRect(),
            s = C(a, o.left, o.top);
        switch (e) {
            case "top":
                return this.getHorizontalAlignmentStyle(s, t, n, { bottom: n.offsetHeight - s.top + i });
            case "bottom":
                return this.getHorizontalAlignmentStyle(s, t, n, { top: s.bottom + i });
            case "left":
                return this.getVerticalAlignmentStyle(s, t, n, { right: n.offsetWidth - s.left + i });
            case "right":
                return this.getVerticalAlignmentStyle(s, t, n, { left: s.right + i });
            case "overlap_vertical":
                return this.getHorizontalAlignmentStyle(s, t, n, { [r]: 0 });
            case "overlap_horizontal":
                return this.getVerticalAlignmentStyle(s, t, n, { [r]: T });
            case "center":
                return this.getVerticalAlignmentStyle(s, t, n, { left: s.left + s.width / 2 - t.offsetWidth / 2 + i });
            case "window_center":
                return this.getVerticalAlignmentStyle(s, t, n, {
                    left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0),
                });
            default:
                throw Error("Unexpected position: ".concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        c()(null != n, "Unexpected null element");
        let r = (0, h.wL)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            o = {
                position: e,
                style: i,
                nudge: a,
            },
            s = A(e, i, n, r),
            l = s,
            u = null,
            d = 0;
        if (t && s < 0) {
            let t = N(e),
                i = this.calculatePositionStyle(t, n, r);
            (u = i.style), (d = i.nudge);
            let a = A(t, u, n, r);
            if (
                (a > s &&
                    ((o = {
                        position: t,
                        style: u,
                        nudge: d,
                    }),
                    (l = a)),
                s < 0 && a < 0)
            ) {
                let i,
                    a = o.position;
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
                        t = A(N(a), e.style, n, r);
                    t > l && ((o = E({ position: a }, e)), (l = t));
                }
            }
        }
        return R(l, n, o);
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(E({ isPositioned: !0 }, this.calculateState()));
        let i = this.elementRef.current;
        c()(null != i, "Missing elementRef"),
            null != n.current && O.set(i, n.current),
            null == i ||
                null == (t = i.ownerDocument) ||
                null == (e = t.defaultView) ||
                e.addEventListener("resize", this.updatePosition),
            null == r || r();
    }
    componentDidUpdate(e, t) {
        if (
            ((S(e) === S(this.props) && D(e, this.props)) || this.updatePosition(), t.position !== this.state.position)
        ) {
            var n, r;
            null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, r;
        let i = this.elementRef.current;
        c()(null != i, "Missing elementRef"),
            O.delete(i),
            null == i ||
                null == (t = i.ownerDocument) ||
                null == (e = t.defaultView) ||
                e.removeEventListener("resize", this.updatePosition),
            null == (n = (r = this.props).onUnmount) || n.call(r);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: o = !1 } = this.props,
            { position: l, isPositioned: c, nudge: u } = this.state;
        return (0, i.jsx)("div", {
            className: s()({
                [m.clickTrapContainer]: !0,
                [m.trapClicks]: o,
            }),
            children: (0, i.jsx)(f.C1, {
                children: (o) => {
                    let { disableAdaptiveTheme: f } = o;
                    return (0, i.jsx)(_.f, {
                        disableAdaptiveTheme: f,
                        children: (o) =>
                            (0, i.jsx)("div", {
                                id: e,
                                className: s()(t, o, m.layer, {
                                    [m.emptyError]: !1,
                                    [m.disabledPointerEvents]: a,
                                }),
                                style: E({ position: r ? "fixed" : "absolute" }, this.state.style),
                                ref: this.elementRef,
                                children: (0, i.jsx)(d.Jc, {
                                    containerRef: this.elementRef,
                                    children: n(
                                        {
                                            position: l,
                                            nudge: u,
                                            isPositioned: c,
                                        },
                                        this.updatePosition,
                                    ),
                                }),
                            }),
                    });
                },
            }),
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "elementRef", a.createRef()),
            g(this, "state", {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
            }),
            g(this, "updatePosition", () => {
                this.setState(this.calculateState());
            });
    }
}
g(w, "defaultProps", {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1,
});
