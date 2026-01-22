n.d(t, {
    H: () => v,
    Q: () => D,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(284009),
    c = n.n(l),
    u = n(621466),
    d = n(426333),
    f = n(38021),
    p = n(43990),
    _ = n(508382),
    h = n(365912),
    m = n(992910);

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

function A(e) {
    let t = (0, u.p3)(e, m.qd);
    return null == t && (t = (0, u.wB)(e, _.IP)), null != t ? t : null;
}

function v(e, t) {
    if (e.contains(t)) return !0;
    let n = A(t);
    for (; null != n; ) {
        let t = O.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = A(t);
    }
    return !1;
}
let S = 12;

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
        return y(E({}, n), {
            style: y(E({}, n.style), {
                [t]: (null == r ? 0 : r) + e,
            }),
        });
    }
    return n;
}

function w(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (c()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect());
}

function P(e, t) {
    let n = w(e),
        r = w(t);
    return n.top === r.top && n.left === r.left;
}
class D extends (r = a.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            a = e + t.offsetWidth - i + S;
        return a > 0 ? Math.max(S, e - a) : Math.max(S, e);
    }
    nudgeRightAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return 0;
        let i = t.offsetWidth;
        return Math.min(n.offsetWidth - e - i - S, 0);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "left": {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left + a, t, n)),
                    s = this.formatDimension(e.left + a) - i;
                return {
                    style: y(E({}, r), {
                        left: i,
                    }),
                    nudge: s,
                };
            }
            case "right": {
                let i = this.formatDimension(n.offsetWidth - e.right - a),
                    s = this.nudgeRightAlignment(i, t, n);
                return {
                    style: y(E({}, r), {
                        right: i + s,
                    }),
                    nudge: 0,
                };
            }
            case "center": {
                let i = e.left + (e.width - t.offsetWidth) / 2 + a,
                    s = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    o = this.formatDimension(i) - s;
                return {
                    style: y(E({}, r), {
                        left: s,
                    }),
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
        let i = e + t.getBoundingClientRect().height - n.offsetHeight + S;
        return i > 0 ? Math.max(S, e - i) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let s = a + t.offsetHeight - i + S;
        return s > 0 ? Math.max(S, a - s) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i, offset: a = 0 } = this.props;
        switch (i) {
            case "top": {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top + a, t, n)),
                    s = this.formatDimension(e.top + a) - i;
                return {
                    style: y(E({}, r), {
                        top: i,
                    }),
                    nudge: s,
                };
            }
            case "bottom": {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom + a, t, n)),
                    s = this.formatDimension(e.bottom + a) - i;
                return {
                    style: y(E({}, r), {
                        bottom: i,
                    }),
                    nudge: s,
                };
            }
            case "center": {
                let i = e.top + (e.height - t.offsetHeight) / 2 + a,
                    s = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    o = this.formatDimension(i) - s;
                return {
                    style: y(E({}, r), {
                        top: s,
                    }),
                    nudge: o,
                };
            }
            default:
                throw Error("Unsupported align: ".concat(i));
        }
    }
    calculatePositionStyle(e, t, n, r) {
        let { spacing: i = 0 } = this.props,
            a = w(this.props),
            s = n.getBoundingClientRect(),
            o = C(a, s.left, s.top);
        switch (e) {
            case "top":
                return this.getHorizontalAlignmentStyle(o, t, n, {
                    bottom: n.offsetHeight - o.top + i,
                });
            case "bottom":
                return this.getHorizontalAlignmentStyle(o, t, n, {
                    top: o.bottom + i,
                });
            case "left":
                return this.getVerticalAlignmentStyle(o, t, n, {
                    right: n.offsetWidth - o.left + i,
                });
            case "right":
                return this.getVerticalAlignmentStyle(o, t, n, {
                    left: o.right + i,
                });
            case "overlap_vertical":
                return this.getHorizontalAlignmentStyle(o, t, n, {
                    [r]: 0,
                });
            case "overlap_horizontal":
                return this.getVerticalAlignmentStyle(o, t, n, {
                    [r]: S,
                });
            case "center":
                return this.getVerticalAlignmentStyle(o, t, n, {
                    left: o.left + o.width / 2 - t.offsetWidth / 2 + i,
                });
            case "window_center":
                return this.getVerticalAlignmentStyle(o, t, n, {
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
        let r = (0, h.J$)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            s = {
                position: e,
                style: i,
                nudge: a,
            },
            o = T(e, i, n, r),
            l = o,
            u = null,
            d = 0;
        if (t && o < 0) {
            let t = N(e),
                i = this.calculatePositionStyle(t, n, r);
            (u = i.style), (d = i.nudge);
            let a = T(t, u, n, r);
            if (
                (a > o &&
                    ((s = {
                        position: t,
                        style: u,
                        nudge: d,
                    }),
                    (l = a)),
                o < 0 && a < 0)
            ) {
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
                        t = T(N(a), e.style, n, r);
                    t > l &&
                        ((s = E(
                            {
                                position: a,
                            },
                            e,
                        )),
                        (l = t));
                }
            }
        }
        return R(l, n, s);
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(
            E(
                {
                    isPositioned: !0,
                },
                this.calculateState(),
            ),
        );
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
            ((I(e) === I(this.props) && P(e, this.props)) || this.updatePosition(), t.position !== this.state.position)
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
    calculateMaxHeight() {
        let e = this.elementRef.current;
        if (null == e) return;
        let t = (0, h.J$)(e),
            n = this.state.style;
        return null != n.top
            ? Math.max(0, t.offsetHeight - n.top - S)
            : null != n.bottom
              ? Math.max(0, t.offsetHeight - n.bottom - S)
              : Math.max(0, t.offsetHeight - 2 * S);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: s = !1 } = this.props,
            { position: l, isPositioned: c, nudge: u } = this.state,
            _ = this.calculateMaxHeight();
        return (0, i.jsx)("div", {
            className: o()({
                [m.ld]: !0,
                [m.x7]: s,
            }),
            children: (0, i.jsx)(f.aS, {
                children: (s) => {
                    let { disableAdaptiveTheme: f } = s;
                    return (0, i.jsx)(p.N, {
                        disableAdaptiveTheme: f,
                        children: (s) =>
                            (0, i.jsx)("div", {
                                id: e,
                                className: o()(t, s, m.qd, {
                                    [m.CA]: !1,
                                    [m.Hc]: a,
                                }),
                                style: y(
                                    E(
                                        {
                                            position: r ? "fixed" : "absolute",
                                        },
                                        this.state.style,
                                    ),
                                    {
                                        "--reference-position-layer-max-height":
                                            null != _ ? "".concat(_, "px") : void 0,
                                    },
                                ),
                                ref: this.elementRef,
                                children: (0, i.jsx)(d.xp, {
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
g(D, "defaultProps", {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1,
});
