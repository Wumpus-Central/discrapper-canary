n.d(t, {
    j: () => D,
    t: () => I
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(84735),
    d = n(801787),
    f = n(663002),
    _ = n(540059),
    p = n(585483),
    h = n(872801),
    m = n(302901),
    g = n(981631),
    E = n(905298);
function v(e, t, n) {
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
let y = new WeakMap();
function I(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, h.Z)(t, E.layer);
    for (; null != n; ) {
        let t = y.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = (0, h.Z)(t, E.layer);
    }
    return !1;
}
let b = 12;
function T(e) {
    let { positionKey: t, position: n, align: i } = e;
    return null != t ? t : ''.concat(n, ':').concat(i);
}
function S(e, t, n, i) {
    switch (e) {
        case 'top':
            return u()(null != t.bottom, 'Missing bottom'), i.offsetHeight - (t.bottom + n.offsetHeight);
        case 'bottom':
            return u()(null != t.top, 'Missing top'), i.offsetHeight - (t.top + n.offsetHeight);
        case 'left':
            return u()(null != t.right, 'Missing right'), i.offsetWidth - (t.right + n.offsetWidth);
        case 'right':
            return u()(null != t.left, 'Missing left'), i.offsetWidth - (t.left + n.offsetWidth);
        case 'center':
        case 'window_center':
            return u()(null != t.left, 'Missing left'), i.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error('Unexpected position: '.concat(e));
    }
}
function A(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height
    };
}
function N(e) {
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
function C(e, t, n) {
    if (null != e && e < 0 && ('top' === n.position || 'bottom' === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
        let t = 'top' === n.position ? 'bottom' : 'top',
            i = n.style[t];
        return {
            ...n,
            style: {
                ...n.style,
                [t]: (null == i ? 0 : i) + e
            }
        };
    }
    return n;
}
function R(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (u()(null != t.current, 'Invalid ref'), t.current.getBoundingClientRect());
}
function O(e, t) {
    let n = R(e),
        i = R(t);
    return n.top === i.top && n.left === i.left;
}
class D extends (i = a.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        let r = n.offsetWidth,
            a = e + t.offsetWidth - r + b;
        return a > 0 ? Math.max(b, e - a) : Math.max(b, e);
    }
    getHorizontalAlignmentStyle(e, t, n, i) {
        let { align: r } = this.props;
        switch (r) {
            case 'left': {
                let r = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    a = this.formatDimension(e.left) - r;
                return {
                    style: {
                        ...i,
                        left: r
                    },
                    nudge: a
                };
            }
            case 'right': {
                let t = this.formatDimension(n.offsetWidth - e.right);
                return {
                    style: {
                        ...i,
                        right: t
                    },
                    nudge: 0
                };
            }
            case 'center': {
                let r = e.left + (e.width - t.offsetWidth) / 2,
                    a = this.formatDimension(this.nudgeLeftAlignment(r, t, n)),
                    s = this.formatDimension(r) - a;
                return {
                    style: {
                        ...i,
                        left: a
                    },
                    nudge: s
                };
            }
            default:
                throw Error('Unsupported align: '.concat(r));
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        if (e < 0) return 0;
        let r = t.getBoundingClientRect().height,
            a = e + r - n.offsetHeight + b;
        return a > 0 ? Math.max(b, e - a) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: i } = this.props,
            r = n.offsetHeight,
            a = r - e;
        if (!i) return a;
        let s = a + t.offsetHeight - r + b;
        return s > 0 ? Math.max(b, a - s) : a;
    }
    getVerticalAlignmentStyle(e, t, n, i) {
        let { align: r } = this.props;
        switch (r) {
            case 'top': {
                let r = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    a = this.formatDimension(e.top) - r;
                return {
                    style: {
                        ...i,
                        top: r
                    },
                    nudge: a
                };
            }
            case 'bottom': {
                let r = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    a = this.formatDimension(e.bottom) - r;
                return {
                    style: {
                        ...i,
                        bottom: r
                    },
                    nudge: a
                };
            }
            case 'center': {
                let r = e.top + (e.height - t.offsetHeight) / 2,
                    a = this.formatDimension(this.nudgeTopAlignment(r, t, n)),
                    s = this.formatDimension(r) - a;
                return {
                    style: {
                        ...i,
                        top: a
                    },
                    nudge: s
                };
            }
            default:
                throw Error('Unsupported align: '.concat(r));
        }
    }
    calculatePositionStyle(e, t, n) {
        let { spacing: i = 0 } = this.props,
            r = R(this.props),
            a = n.getBoundingClientRect(),
            s = A(r, a.left, a.top);
        switch (e) {
            case 'top':
                return this.getHorizontalAlignmentStyle(s, t, n, { bottom: n.offsetHeight - s.top + i });
            case 'bottom':
                return this.getHorizontalAlignmentStyle(s, t, n, { top: s.bottom + i });
            case 'left':
                return this.getVerticalAlignmentStyle(s, t, n, { right: n.offsetWidth - s.left + i });
            case 'right':
                return this.getVerticalAlignmentStyle(s, t, n, { left: s.right + i });
            case 'center':
                return this.getVerticalAlignmentStyle(s, t, n, { left: s.left + s.width / 2 - t.offsetWidth / 2 + i });
            case 'window_center':
                return this.getVerticalAlignmentStyle(s, t, n, { left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0) });
            default:
                throw Error('Unexpected position: '.concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        u()(null != n, 'Unexpected null element');
        let i = (0, m.wL)(n),
            { style: r, nudge: a } = this.calculatePositionStyle(e, n, i),
            s = null,
            o = null;
        if (t && (s = S(e, r, n, i)) < 0) {
            let t = N(e),
                { style: r, nudge: a } = this.calculatePositionStyle(t, n, i);
            if ((o = S(t, r, n, i)) > s)
                return C(o, n, {
                    position: t,
                    nudge: a,
                    style: r
                });
        }
        return C(s, n, {
            position: e,
            nudge: a,
            style: r
        });
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: i } = this.props;
        this.setState({
            isPositioned: !0,
            ...this.calculateState()
        });
        let r = this.elementRef.current;
        u()(null != r, 'Missing elementRef'), null != n.current && y.set(r, n.current), p.S.subscribe(g.CkL.LAYER_POP_START, this.handleLayerPopStart), p.S.subscribe(g.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener('resize', this.handleLayerPopComplete), (this.unsubscribeDesktopVisualRefreshExperiment = (0, _.yl)('ReferencePositionLayer', this.handleDesktopVisualRefreshExperimentChange)), null == i || i();
    }
    componentDidUpdate(e, t) {
        if (((T(e) === T(this.props) && O(e, this.props)) || this.updatePosition(), t.position !== this.state.position)) {
            var n, i;
            null === (n = (i = this.props).onPositionChange) || void 0 === n || n.call(i, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, i, r, a;
        let s = this.elementRef.current;
        u()(null != s, 'Missing elementRef'), y.delete(s), p.S.unsubscribe(g.CkL.LAYER_POP_START, this.handleLayerPopStart), p.S.unsubscribe(g.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == s || null === (t = s.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener('resize', this.handleLayerPopComplete), null === (n = (i = this).unsubscribeDesktopVisualRefreshExperiment) || void 0 === n || n.call(i), null === (r = (a = this.props).onUnmount) || void 0 === r || r.call(a);
    }
    render() {
        let { id: e, className: t, children: n, fixed: i, disablePointerEvents: a, clickTrap: s = !1 } = this.props,
            { position: l, isPositioned: u, isSettingsLayerTransitioning: _, nudge: p } = this.state;
        return (0, r.jsx)('div', {
            className: o()({
                [E.clickTrapContainer]: !0,
                [E.trapClicks]: s
            }),
            children: (0, r.jsx)(d.C1, {
                children: (s) => {
                    let { theme: d, disableAdaptiveTheme: h } = s;
                    return (0, r.jsx)('div', {
                        id: e,
                        className: o()(t, (0, f.Qe)(d), E.layer, {
                            [E.emptyError]: !1,
                            [E.layerHidden]: _,
                            [E.disabledPointerEvents]: a,
                            'disable-adaptive-theme': h
                        }),
                        style: {
                            position: i ? 'fixed' : 'absolute',
                            ...this.state.style
                        },
                        ref: this.elementRef,
                        children: (0, r.jsx)(c.J, {
                            containerRef: this.elementRef,
                            children: n(
                                {
                                    position: l,
                                    nudge: p,
                                    isPositioned: u
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
            v(this, 'elementRef', a.createRef()),
            v(this, 'unsubscribeDesktopVisualRefreshExperiment', null),
            v(this, 'state', {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1,
                isRefreshEnabled: (0, _.i9)('ReferencePositionLayer')
            }),
            v(this, 'handleLayerPopStart', () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            v(this, 'handleLayerPopComplete', () => {
                let e = this.calculateState();
                this.setState({
                    ...e,
                    isSettingsLayerTransitioning: !1
                });
            }),
            v(this, 'handleDesktopVisualRefreshExperimentChange', (e) => {
                let { enabled: t } = e;
                this.setState({ isRefreshEnabled: t });
            }),
            v(this, 'updatePosition', () => {
                this.setState(this.calculateState());
            });
    }
}
v(D, 'defaultProps', {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1
});
