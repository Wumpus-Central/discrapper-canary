n.d(t, {
    j: () => D,
    t: () => I
}),
    n(388685),
    n(415506);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
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
function v(e, t) {
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
let O = new WeakMap();
function I(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, p.Z)(t, g.layer);
    for (; null != n; ) {
        let t = O.get(n);
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
        return v(b({}, n), { style: v(b({}, n.style), { [t]: (null == r ? 0 : r) + e }) });
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
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'left': {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    a = this.formatDimension(e.left) - i;
                return {
                    style: v(b({}, r), { left: i }),
                    nudge: a
                };
            }
            case 'right': {
                let t = this.formatDimension(n.offsetWidth - e.right);
                return {
                    style: v(b({}, r), { right: t }),
                    nudge: 0
                };
            }
            case 'center': {
                let i = e.left + (e.width - t.offsetWidth) / 2,
                    a = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: v(b({}, r), { left: a }),
                    nudge: o
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
            a = e + i - n.offsetHeight + S;
        return a > 0 ? Math.max(S, e - a) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let o = a + t.offsetHeight - i + S;
        return o > 0 ? Math.max(S, a - o) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'top': {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    a = this.formatDimension(e.top) - i;
                return {
                    style: v(b({}, r), { top: i }),
                    nudge: a
                };
            }
            case 'bottom': {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    a = this.formatDimension(e.bottom) - i;
                return {
                    style: v(b({}, r), { bottom: i }),
                    nudge: a
                };
            }
            case 'center': {
                let i = e.top + (e.height - t.offsetHeight) / 2,
                    a = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: v(b({}, r), { top: a }),
                    nudge: o
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    calculatePositionStyle(e, t, n) {
        let { spacing: r = 0 } = this.props,
            i = P(this.props),
            a = n.getBoundingClientRect(),
            o = N(i, a.left, a.top);
        switch (e) {
            case 'top':
                return this.getHorizontalAlignmentStyle(o, t, n, { bottom: n.offsetHeight - o.top + r });
            case 'bottom':
                return this.getHorizontalAlignmentStyle(o, t, n, { top: o.bottom + r });
            case 'left':
                return this.getVerticalAlignmentStyle(o, t, n, { right: n.offsetWidth - o.left + r });
            case 'right':
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.right + r });
            case 'center':
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.left + o.width / 2 - t.offsetWidth / 2 + r });
            case 'window_center':
                return this.getVerticalAlignmentStyle(o, t, n, { left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0) });
            default:
                throw Error('Unexpected position: '.concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        c()(null != n, 'Unexpected null element');
        let r = (0, h.wL)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            o = null,
            s = null;
        if (t && (o = A(e, i, n, r)) < 0) {
            let t = C(e),
                { style: i, nudge: a } = this.calculatePositionStyle(t, n, r);
            if ((s = A(t, i, n, r)) > o)
                return R(s, n, {
                    position: t,
                    nudge: a,
                    style: i
                });
        }
        return R(o, n, {
            position: e,
            nudge: a,
            style: i
        });
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(b({ isPositioned: !0 }, this.calculateState()));
        let i = this.elementRef.current;
        c()(null != i, 'Missing elementRef'), null != n.current && O.set(i, n.current), _.S.subscribe(m.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.subscribe(m.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.addEventListener('resize', this.handleLayerPopComplete), null == r || r();
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
        c()(null != i, 'Missing elementRef'), O.delete(i), _.S.unsubscribe(m.CkL.LAYER_POP_START, this.handleLayerPopStart), _.S.unsubscribe(m.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.removeEventListener('resize', this.handleLayerPopComplete), null == (n = (r = this.props).onUnmount) || n.call(r);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: a, clickTrap: o = !1 } = this.props,
            { position: l, isPositioned: c, isSettingsLayerTransitioning: _, nudge: p } = this.state;
        return (0, i.jsx)('div', {
            className: s()({
                [g.clickTrapContainer]: !0,
                [g.trapClicks]: o
            }),
            children: (0, i.jsx)(d.C1, {
                children: (o) => {
                    let { theme: d, disableAdaptiveTheme: h } = o;
                    return (0, i.jsx)('div', {
                        id: e,
                        className: s()(t, (0, f.Q)(d), g.layer, {
                            [g.emptyError]: !1,
                            [g.layerHidden]: _,
                            [g.disabledPointerEvents]: a,
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
            E(this, 'elementRef', a.createRef()),
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
                this.setState(v(b({}, e), { isSettingsLayerTransitioning: !1 }));
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
