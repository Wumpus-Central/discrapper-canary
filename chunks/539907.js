n.d(t, {
    j: () => D,
    t: () => I
}),
    n(388685),
    n(415506);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(84735),
    d = n(710260),
    f = n(472558),
    _ = n(585483),
    p = n(872801),
    h = n(302901),
    m = n(981631),
    g = n(36344);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = new WeakMap();
function I(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, p.Z)(t, g.layer);
    for (; null != n; ) {
        let t = v.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = (0, p.Z)(t, g.layer);
    }
    return !1;
}
let S = 12;
function T(e) {
    let { positionKey: t, position: n, align: r } = e;
    return null != t ? t : ''.concat(n, ':').concat(r);
}
function A(e, t, n, r) {
    switch (e) {
        case 'top':
            return c()(null != t.bottom, 'Missing bottom'), r.offsetHeight - (t.bottom + n.offsetHeight);
        case 'bottom':
            return c()(null != t.top, 'Missing top'), r.offsetHeight - (t.top + n.offsetHeight);
        case 'left':
            return c()(null != t.right, 'Missing right'), r.offsetWidth - (t.right + n.offsetWidth);
        case 'right':
            return c()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth);
        case 'center':
        case 'window_center':
            return c()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error('Unexpected position: '.concat(e));
    }
}
function N(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height
    };
}
function C(e) {
    switch (e) {
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'center':
            return 'center';
        case 'window_center':
            return 'window_center';
        default:
            throw Error();
    }
}
function R(e, t, n) {
    if (null != e && e < 0 && ('top' === n.position || 'bottom' === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
        let t = 'top' === n.position ? 'bottom' : 'top',
            r = n.style[t];
        return O(b({}, n), { style: O(b({}, n.style), { [t]: (null == r ? 0 : r) + e }) });
    }
    return n;
}
function P(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (c()(null != t.current, 'Invalid ref'), t.current.getBoundingClientRect());
}
function w(e, t) {
    let n = P(e),
        r = P(t);
    return n.top === r.top && n.left === r.left;
}
class D extends (r = o.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            o = e + t.offsetWidth - i + S;
        return o > 0 ? Math.max(S, e - o) : Math.max(S, e);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'left': {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    o = this.formatDimension(e.left) - i;
                return {
                    style: O(b({}, r), { left: i }),
                    nudge: o
                };
            }
            case 'right': {
                let t = this.formatDimension(n.offsetWidth - e.right);
                return {
                    style: O(b({}, r), { right: t }),
                    nudge: 0
                };
            }
            case 'center': {
                let i = e.left + (e.width - t.offsetWidth) / 2,
                    o = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    a = this.formatDimension(i) - o;
                return {
                    style: O(b({}, r), { left: o }),
                    nudge: a
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        if (e < 0) return 0;
        let i = t.getBoundingClientRect().height,
            o = e + i - n.offsetHeight + S;
        return o > 0 ? Math.max(S, e - o) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            o = i - e;
        if (!r) return o;
        let a = o + t.offsetHeight - i + S;
        return a > 0 ? Math.max(S, o - a) : o;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'top': {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    o = this.formatDimension(e.top) - i;
                return {
                    style: O(b({}, r), { top: i }),
                    nudge: o
                };
            }
            case 'bottom': {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    o = this.formatDimension(e.bottom) - i;
                return {
                    style: O(b({}, r), { bottom: i }),
                    nudge: o
                };
            }
            case 'center': {
                let i = e.top + (e.height - t.offsetHeight) / 2,
                    o = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    a = this.formatDimension(i) - o;
                return {
                    style: O(b({}, r), { top: o }),
                    nudge: a
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    calculatePositionStyle(e, t, n) {
        let { spacing: r = 0 } = this.props,
            i = P(this.props),
            o = n.getBoundingClientRect(),
            a = N(i, o.left, o.top);
        switch (e) {
            case 'top':
                return this.getHorizontalAlignmentStyle(a, t, n, { bottom: n.offsetHeight - a.top + r });
            case 'bottom':
                return this.getHorizontalAlignmentStyle(a, t, n, { top: a.bottom + r });
            case 'left':
                return this.getVerticalAlignmentStyle(a, t, n, { right: n.offsetWidth - a.left + r });
            case 'right':
                return this.getVerticalAlignmentStyle(a, t, n, { left: a.right + r });
            case 'center':
                return this.getVerticalAlignmentStyle(a, t, n, { left: a.left + a.width / 2 - t.offsetWidth / 2 + r });
            case 'window_center':
                return this.getVerticalAlignmentStyle(a, t, n, { left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0) });
            default:
                throw Error('Unexpected position: '.concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        c()(null != n, 'Unexpected null element');
        let r = (0, h.wL)(n),
            { style: i, nudge: o } = this.calculatePositionStyle(e, n, r),
            a = null,
            s = null;
        if (t && (a = A(e, i, n, r)) < 0) {
            let t = C(e),
                { style: i, nudge: o } = this.calculatePositionStyle(t, n, r);
            if ((s = A(t, i, n, r)) > a)
                return R(s, n, {
                    position: t,
                    nudge: o,
                    style: i
                });
        }
        return R(a, n, {
            position: e,
            nudge: o,
            style: i
        });
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(b({ isPositioned: !0 }, this.calculateState()));
        let i = this.elementRef.current;
        c()(null != i, 'Missing elementRef'), null != n.current && v.set(i, n.current), _.S.subscribe(m.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.subscribe(m.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.addEventListener('resize', this.handleLayerPopComplete), null == r || r();
    }
    componentDidUpdate(e, t) {
        if (((T(e) === T(this.props) && w(e, this.props)) || this.updatePosition(), t.position !== this.state.position)) {
            var n, r;
            null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, r;
        let i = this.elementRef.current;
        c()(null != i, 'Missing elementRef'), v.delete(i), _.S.unsubscribe(m.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.unsubscribe(m.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.removeEventListener('resize', this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || n.call(r);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: o, clickTrap: a = !1 } = this.props,
            { position: l, isPositioned: c, isSettingsLayerTransitioning: _, nudge: p } = this.state;
        return (0, i.jsx)('div', {
            className: s()({
                [g.clickTrapContainer]: !0,
                [g.trapClicks]: a
            }),
            children: (0, i.jsx)(d.C1, {
                children: (a) => {
                    let { theme: d, disableAdaptiveTheme: h } = a;
                    return (0, i.jsx)('div', {
                        id: e,
                        className: s()(t, (0, f.Q)(d), g.layer, {
                            [g.emptyError]: !1,
                            [g.layerHidden]: _,
                            [g.disabledPointerEvents]: o,
                            'disable-adaptive-theme': h
                        }),
                        style: b({ position: r ? 'fixed' : 'absolute' }, this.state.style),
                        ref: this.elementRef,
                        children: (0, i.jsx)(u.J, {
                            containerRef: this.elementRef,
                            children: n(
                                {
                                    position: l,
                                    nudge: p,
                                    isPositioned: c
                                },
                                this.updatePosition
                            )
                        })
                    });
                }
            })
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'elementRef', o.createRef()),
            E(this, 'state', {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }),
            E(this, 'handleLayerPopStart', () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            E(this, 'handleLayerPopComplete', () => {
                let e = this.calculateState();
                this.setState(O(b({}, e), { isSettingsLayerTransitioning: !1 }));
            }),
            E(this, 'updatePosition', () => {
                this.setState(this.calculateState());
            });
    }
}
E(D, 'defaultProps', {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1
});
