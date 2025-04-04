n.d(t, {
    j: () => L,
    t: () => S
}),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(84735),
    d = n(710260),
    f = n(472558),
    _ = n(540059),
    p = n(585483),
    h = n(872801),
    m = n(302901),
    g = n(981631),
    E = n(36344);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = new WeakMap();
function S(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, h.Z)(t, E.layer);
    for (; null != n; ) {
        let t = I.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = (0, h.Z)(t, E.layer);
    }
    return !1;
}
let T = 12;
function N(e) {
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
function C(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height
    };
}
function R(e) {
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
function P(e, t, n) {
    if (null != e && e < 0 && ('top' === n.position || 'bottom' === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
        let t = 'top' === n.position ? 'bottom' : 'top',
            r = n.style[t];
        return O(y({}, n), { style: O(y({}, n.style), { [t]: (null == r ? 0 : r) + e }) });
    }
    return n;
}
function w(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (c()(null != t.current, 'Invalid ref'), t.current.getBoundingClientRect());
}
function D(e, t) {
    let n = w(e),
        r = w(t);
    return n.top === r.top && n.left === r.left;
}
class L extends (r = o.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            o = e + t.offsetWidth - i + T;
        return o > 0 ? Math.max(T, e - o) : Math.max(T, e);
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'left': {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    o = this.formatDimension(e.left) - i;
                return {
                    style: O(y({}, r), { left: i }),
                    nudge: o
                };
            }
            case 'right': {
                let t = this.formatDimension(n.offsetWidth - e.right);
                return {
                    style: O(y({}, r), { right: t }),
                    nudge: 0
                };
            }
            case 'center': {
                let i = e.left + (e.width - t.offsetWidth) / 2,
                    o = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    a = this.formatDimension(i) - o;
                return {
                    style: O(y({}, r), { left: o }),
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
            o = e + i - n.offsetHeight + T;
        return o > 0 ? Math.max(T, e - o) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            o = i - e;
        if (!r) return o;
        let a = o + t.offsetHeight - i + T;
        return a > 0 ? Math.max(T, o - a) : o;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'top': {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    o = this.formatDimension(e.top) - i;
                return {
                    style: O(y({}, r), { top: i }),
                    nudge: o
                };
            }
            case 'bottom': {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    o = this.formatDimension(e.bottom) - i;
                return {
                    style: O(y({}, r), { bottom: i }),
                    nudge: o
                };
            }
            case 'center': {
                let i = e.top + (e.height - t.offsetHeight) / 2,
                    o = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    a = this.formatDimension(i) - o;
                return {
                    style: O(y({}, r), { top: o }),
                    nudge: a
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    calculatePositionStyle(e, t, n) {
        let { spacing: r = 0 } = this.props,
            i = w(this.props),
            o = n.getBoundingClientRect(),
            a = C(i, o.left, o.top);
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
        let r = (0, m.wL)(n),
            { style: i, nudge: o } = this.calculatePositionStyle(e, n, r),
            a = null,
            s = null;
        if (t && (a = A(e, i, n, r)) < 0) {
            let t = R(e),
                { style: i, nudge: o } = this.calculatePositionStyle(t, n, r);
            if ((s = A(t, i, n, r)) > a)
                return P(s, n, {
                    position: t,
                    nudge: o,
                    style: i
                });
        }
        return P(a, n, {
            position: e,
            nudge: o,
            style: i
        });
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState(y({ isPositioned: !0 }, this.calculateState()));
        let i = this.elementRef.current;
        c()(null != i, 'Missing elementRef'), null != n.current && I.set(i, n.current), p.S.subscribe(g.CkL.LAYER_POP_START, this.handleLayerPopStart), p.S.subscribe(g.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null == (t = i.ownerDocument) || null == (e = t.defaultView) || e.addEventListener('resize', this.handleLayerPopComplete), (this.unsubscribeDesktopVisualRefreshExperiment = (0, _.yl)('ReferencePositionLayer', this.handleDesktopVisualRefreshExperimentChange)), null == r || r();
    }
    componentDidUpdate(e, t) {
        if (((N(e) === N(this.props) && D(e, this.props)) || this.updatePosition(), t.position !== this.state.position)) {
            var n, r;
            null == (n = (r = this.props).onPositionChange) || n.call(r, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, r, i, o;
        let a = this.elementRef.current;
        c()(null != a, 'Missing elementRef'), I.delete(a), p.S.unsubscribe(g.CkL.LAYER_POP_START, this.handleLayerPopStart), p.S.unsubscribe(g.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == a || null == (t = a.ownerDocument) || null == (e = t.defaultView) || e.removeEventListener('resize', this.handleLayerPopComplete), null == (n = (r = this).unsubscribeDesktopVisualRefreshExperiment) || n.call(r), null == (i = (o = this.props).onUnmount) || i.call(o);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: o, clickTrap: a = !1 } = this.props,
            { position: l, isPositioned: c, isSettingsLayerTransitioning: _, nudge: p } = this.state;
        return (0, i.jsx)('div', {
            className: s()({
                [E.clickTrapContainer]: !0,
                [E.trapClicks]: a
            }),
            children: (0, i.jsx)(d.C1, {
                children: (a) => {
                    let { theme: d, disableAdaptiveTheme: h } = a;
                    return (0, i.jsx)('div', {
                        id: e,
                        className: s()(t, (0, f.Q)(d), E.layer, {
                            [E.emptyError]: !1,
                            [E.layerHidden]: _,
                            [E.disabledPointerEvents]: o,
                            'disable-adaptive-theme': h
                        }),
                        style: y({ position: r ? 'fixed' : 'absolute' }, this.state.style),
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
            b(this, 'elementRef', o.createRef()),
            b(this, 'unsubscribeDesktopVisualRefreshExperiment', null),
            b(this, 'state', {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1,
                isRefreshEnabled: (0, _.i9)('ReferencePositionLayer')
            }),
            b(this, 'handleLayerPopStart', () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            b(this, 'handleLayerPopComplete', () => {
                let e = this.calculateState();
                this.setState(O(y({}, e), { isSettingsLayerTransitioning: !1 }));
            }),
            b(this, 'handleDesktopVisualRefreshExperimentChange', (e) => {
                let { enabled: t } = e;
                this.setState({ isRefreshEnabled: t });
            }),
            b(this, 'updatePosition', () => {
                this.setState(this.calculateState());
            });
    }
}
b(L, 'defaultProps', {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1
});
