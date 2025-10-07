n.d(t, {
    j: () => P,
    t: () => O,
}),
    n(388685),
    n(415506);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(793030),
    d = n(472558),
    f = n(585483),
    _ = n(872801),
    p = n(981631),
    h = n(793906);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new WeakMap();
function O(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, _.Z)(t, h.layer);
    for (; null != n; ) {
        let t = y.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = (0, _.Z)(t, h.layer);
    }
    return !1;
}
let v = 12;
function I(e) {
    let { positionKey: t, position: n, align: r } = e;
    return null != t ? t : "".concat(n, ":").concat(r);
}
function T(e, t, n, r) {
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
function S(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height,
    };
}
function A(e) {
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
function C(e, t, n) {
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
        return b(g({}, n), { style: b(g({}, n.style), { [t]: (null == r ? 0 : r) + e }) });
    }
    return n;
}
function N(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}
function R(e, t) {
    let n = N(e),
        r = N(t);
    return n.top === r.top && n.left === r.left;
}
class P extends (r = a.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            a = e + t.offsetWidth - i + v;
        return a > 0 ? Math.max(v, e - a) : Math.max(v, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return 0;
        let i = t.offsetWidth;
        return Math.min(n.offsetWidth - e - i - v, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case "left": {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    a = this.formatDimension(e.left) - i;
                return {
                    style: b(g({}, r), { left: i }),
                    nudge: a,
                };
            }
            case "right": {
                let i = this.formatDimension(n.offsetWidth - e.right),
                    a = this.nudgeRightAlignment(i, t, n);
                return {
                    style: b(g({}, r), { right: i + a }),
                    nudge: 0,
                };
            }
            case "center": {
                let i = e.left + (e.width - t.offsetWidth) / 2,
                    a = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: b(g({}, r), { left: a }),
                    nudge: o,
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
            a = e + i - n.offsetHeight + v;
        return a > 0 ? Math.max(v, e - a) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let o = a + t.offsetHeight - i + v;
        return o > 0 ? Math.max(v, a - o) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case "top": {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    a = this.formatDimension(e.top) - i;
                return {
                    style: b(g({}, r), { top: i }),
                    nudge: a,
                };
            }
            case "bottom": {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    a = this.formatDimension(e.bottom) - i;
                return {
                    style: b(g({}, r), { bottom: i }),
                    nudge: a,
                };
            }
            case "center": {
                let i = e.top + (e.height - t.offsetHeight) / 2,
                    a = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: b(g({}, r), { top: a }),
                    nudge: o,
                };
            }
            default:
                throw Error("Unsupported align: ".concat(i));
        }
    }
    calculatePositionStyle(e, t, n, r) {
        let { spacing: i = 0 } = this.props,
            a = N(this.props),
            o = n.getBoundingClientRect(),
            s = S(a, o.left, o.top);
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
                return this.getVerticalAlignmentStyle(s, t, n, { [r]: v });
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
        let r = (0, u.wLj)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            o = {
                position: e,
                style: i,
                nudge: a,
            },
            s = T(e, i, n, r),
            l = s,
            d = null,
            f = 0;
        if (t && s < 0) {
            let t = A(e),
                i = this.calculatePositionStyle(t, n, r);
            (d = i.style), (f = i.nudge);
            let a = T(t, d, n, r);
            if (
                (a > s &&
                    ((o = {
                        position: t,
                        style: d,
                        nudge: f,
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
                        t = T(A(a), e.style, n, r);
                    t > l && ((o = g({ position: a }, e)), (l = t));
                }
            }
        }
        return C(l, n, o);
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(g({ isPositioned: !0 }, this.calculateState()));
        let i = this.elementRef.current;
        c()(null != i, "Missing elementRef"),
            null != n.current && y.set(i, n.current),
            f.S.subscribe(p.CkL.LAYER_POP_START, this.handleLayerPopStart),
            f.S.subscribe(p.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete),
            null == i ||
                null == (t = i.ownerDocument) ||
                null == (e = t.defaultView) ||
                e.addEventListener("resize", this.handleLayerPopComplete),
            null == r || r();
    }
    componentDidUpdate(e, t) {
        if (
            ((I(e) === I(this.props) && R(e, this.props)) || this.updatePosition(), t.position !== this.state.position)
        ) {
            var n, r;
            null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, r;
        let i = this.elementRef.current;
        c()(null != i, "Missing elementRef"),
            y.delete(i),
            f.S.unsubscribe(p.CkL.LAYER_POP_START, this.handleLayerPopStart),
            f.S.unsubscribe(p.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete),
            null == i ||
                null == (t = i.ownerDocument) ||
                null == (e = t.defaultView) ||
                e.removeEventListener("resize", this.handleLayerPopComplete),
            null == (n = (r = this.props).onUnmount) || n.call(r);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: o = !1 } = this.props,
            { position: l, isPositioned: c, isSettingsLayerTransitioning: f, nudge: _ } = this.state;
        return (0, i.jsx)("div", {
            className: s()({
                [h.clickTrapContainer]: !0,
                [h.trapClicks]: o,
            }),
            children: (0, i.jsx)(u.C1Q, {
                children: (o) => {
                    let { theme: p, disableAdaptiveTheme: m } = o;
                    return (0, i.jsx)("div", {
                        id: e,
                        className: s()(t, (0, d.Q)(p), h.layer, {
                            [h.emptyError]: !1,
                            [h.layerHidden]: f,
                            [h.disabledPointerEvents]: a,
                            "disable-adaptive-theme": m,
                        }),
                        style: g({ position: r ? "fixed" : "absolute" }, this.state.style),
                        ref: this.elementRef,
                        children: (0, i.jsx)(u.JcV, {
                            containerRef: this.elementRef,
                            children: n(
                                {
                                    position: l,
                                    nudge: _,
                                    isPositioned: c,
                                },
                                this.updatePosition,
                            ),
                        }),
                    });
                },
            }),
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "elementRef", a.createRef()),
            m(this, "state", {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1,
            }),
            m(this, "handleLayerPopStart", () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            m(this, "handleLayerPopComplete", () => {
                let e = this.calculateState();
                this.setState(b(g({}, e), { isSettingsLayerTransitioning: !1 }));
            }),
            m(this, "updatePosition", () => {
                this.setState(this.calculateState());
            });
    }
}
m(P, "defaultProps", {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1,
});
