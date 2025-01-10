r.d(n, {
    j: function () {
        return x;
    },
    t: function () {
        return y;
    }
});
var i,
    a = r(47120);
var s = r(411104);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    _ = r(84735),
    h = r(801787),
    p = r(663002),
    m = r(585483),
    g = r(872801),
    E = r(302901),
    v = r(981631),
    I = r(905298);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = new WeakMap();
function y(e, n) {
    if (e.contains(n)) return !0;
    let r = (0, g.Z)(n, I.layer);
    for (; null != r; ) {
        let n = b.get(r);
        if (null == n) break;
        if (e.contains(n)) return !0;
        r = (0, g.Z)(n, I.layer);
    }
    return !1;
}
let S = 12;
function A(e) {
    let { positionKey: n, position: r, align: i } = e;
    return null != n ? n : ''.concat(r, ':').concat(i);
}
function N(e, n, r, i) {
    switch (e) {
        case 'top':
            return f()(null != n.bottom, 'Missing bottom'), i.offsetHeight - (n.bottom + r.offsetHeight);
        case 'bottom':
            return f()(null != n.top, 'Missing top'), i.offsetHeight - (n.top + r.offsetHeight);
        case 'left':
            return f()(null != n.right, 'Missing right'), i.offsetWidth - (n.right + r.offsetWidth);
        case 'right':
            return f()(null != n.left, 'Missing left'), i.offsetWidth - (n.left + r.offsetWidth);
        case 'center':
        case 'window_center':
            return f()(null != n.left, 'Missing left'), i.offsetWidth - (n.left + r.offsetWidth / 2);
        default:
            throw Error('Unexpected position: '.concat(e));
    }
}
function C(e, n, r) {
    return {
        top: e.top - r,
        left: e.left - n,
        bottom: e.bottom - r,
        right: e.right - n,
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
function O(e, n, r) {
    if (null != e && e < 0 && ('top' === r.position || 'bottom' === r.position) && null != n && Math.abs(e) < (null == n ? void 0 : n.offsetHeight) && null != r.style) {
        let n = 'top' === r.position ? 'bottom' : 'top',
            i = r.style[n];
        return {
            ...r,
            style: {
                ...r.style,
                [n]: (null == i ? 0 : i) + e
            }
        };
    }
    return r;
}
function D(e) {
    let { targetRef: n, overrideTargetRect: r } = e;
    return null != r ? r : (f()(null != n.current, 'Invalid ref'), n.current.getBoundingClientRect());
}
function L(e, n) {
    let r = D(e),
        i = D(n);
    return r.top === i.top && r.left === i.left;
}
class x extends (i = l.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, n, r) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        let a = r.offsetWidth,
            s = e + n.offsetWidth - a + S;
        return s > 0 ? Math.max(S, e - s) : Math.max(S, e);
    }
    getHorizontalAlignmentStyle(e, n, r, i) {
        let { align: a } = this.props;
        switch (a) {
            case 'left': {
                let a = this.formatDimension(this.nudgeLeftAlignment(e.left, n, r)),
                    s = this.formatDimension(e.left) - a;
                return {
                    style: {
                        ...i,
                        left: a
                    },
                    nudge: s
                };
            }
            case 'right': {
                let n = this.formatDimension(r.offsetWidth - e.right);
                return {
                    style: {
                        ...i,
                        right: n
                    },
                    nudge: 0
                };
            }
            case 'center': {
                let a = e.left + (e.width - n.offsetWidth) / 2,
                    s = this.formatDimension(this.nudgeLeftAlignment(a, n, r)),
                    o = this.formatDimension(a) - s;
                return {
                    style: {
                        ...i,
                        left: s
                    },
                    nudge: o
                };
            }
            default:
                throw Error('Unsupported align: '.concat(a));
        }
    }
    nudgeTopAlignment(e, n, r) {
        let { nudgeAlignIntoViewport: i } = this.props;
        if (!i) return e;
        if (e < 0) return 0;
        let a = n.getBoundingClientRect().height,
            s = r.offsetHeight,
            o = e + a - s + S;
        return o > 0 ? Math.max(S, e - o) : e;
    }
    nudgeBottomAlignment(e, n, r) {
        let { nudgeAlignIntoViewport: i } = this.props,
            a = r.offsetHeight,
            s = a - e;
        if (!i) return s;
        let o = s + n.offsetHeight - a + S;
        return o > 0 ? Math.max(S, s - o) : s;
    }
    getVerticalAlignmentStyle(e, n, r, i) {
        let { align: a } = this.props;
        switch (a) {
            case 'top': {
                let a = this.formatDimension(this.nudgeTopAlignment(e.top, n, r)),
                    s = this.formatDimension(e.top) - a;
                return {
                    style: {
                        ...i,
                        top: a
                    },
                    nudge: s
                };
            }
            case 'bottom': {
                let a = this.formatDimension(this.nudgeBottomAlignment(e.bottom, n, r)),
                    s = this.formatDimension(e.bottom) - a;
                return {
                    style: {
                        ...i,
                        bottom: a
                    },
                    nudge: s
                };
            }
            case 'center': {
                let a = e.top + (e.height - n.offsetHeight) / 2,
                    s = this.formatDimension(this.nudgeTopAlignment(a, n, r)),
                    o = this.formatDimension(a) - s;
                return {
                    style: {
                        ...i,
                        top: s
                    },
                    nudge: o
                };
            }
            default:
                throw Error('Unsupported align: '.concat(a));
        }
    }
    calculatePositionStyle(e, n, r) {
        let { spacing: i = 0 } = this.props,
            a = D(this.props),
            s = r.getBoundingClientRect(),
            o = C(a, s.left, s.top);
        switch (e) {
            case 'top':
                return this.getHorizontalAlignmentStyle(o, n, r, { bottom: r.offsetHeight - o.top + i });
            case 'bottom':
                return this.getHorizontalAlignmentStyle(o, n, r, { top: o.bottom + i });
            case 'left':
                return this.getVerticalAlignmentStyle(o, n, r, { right: r.offsetWidth - o.left + i });
            case 'right':
                return this.getVerticalAlignmentStyle(o, n, r, { left: o.right + i });
            case 'center':
                return this.getVerticalAlignmentStyle(o, n, r, { left: o.left + o.width / 2 - n.offsetWidth / 2 + i });
            case 'window_center':
                return this.getVerticalAlignmentStyle(o, n, r, { left: Math.max((window.innerWidth - n.offsetWidth) / 2, 0) });
            default:
                throw Error('Unexpected position: '.concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: n } = this.props,
            r = this.elementRef.current;
        f()(null != r, 'Unexpected null element');
        let i = (0, E.wL)(r),
            { style: a, nudge: s } = this.calculatePositionStyle(e, r, i),
            o = null,
            l = null;
        if (n && (o = N(e, a, r, i)) < 0) {
            let n = R(e),
                { style: a, nudge: s } = this.calculatePositionStyle(n, r, i);
            if ((l = N(n, a, r, i)) > o)
                return O(l, r, {
                    position: n,
                    nudge: s,
                    style: a
                });
        }
        return O(o, r, {
            position: e,
            nudge: s,
            style: a
        });
    }
    componentDidMount() {
        var e, n;
        let { targetRef: r, onMount: i } = this.props;
        this.setState({
            isPositioned: !0,
            ...this.calculateState()
        });
        let a = this.elementRef.current;
        f()(null != a, 'Missing elementRef'), null != r.current && b.set(a, r.current), m.S.subscribe(v.CkL.LAYER_POP_START, this.handleLayerPopStart), m.S.subscribe(v.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == a || null === (n = a.ownerDocument) || void 0 === n || null === (e = n.defaultView) || void 0 === e || e.addEventListener('resize', this.handleLayerPopComplete), null == i || i();
    }
    componentDidUpdate(e, n) {
        if (((A(e) !== A(this.props) || !L(e, this.props)) && this.updatePosition(), n.position !== this.state.position)) {
            var r, i;
            null === (r = (i = this.props).onPositionChange) || void 0 === r || r.call(i, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, n, r, i;
        let a = this.elementRef.current;
        f()(null != a, 'Missing elementRef'), b.delete(a), m.S.unsubscribe(v.CkL.LAYER_POP_START, this.handleLayerPopStart), m.S.unsubscribe(v.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == a || null === (n = a.ownerDocument) || void 0 === n || null === (e = n.defaultView) || void 0 === e || e.removeEventListener('resize', this.handleLayerPopComplete), null === (r = (i = this.props).onUnmount) || void 0 === r || r.call(i);
    }
    render() {
        let { id: e, className: n, children: r, fixed: i, disablePointerEvents: a, clickTrap: s = !1 } = this.props,
            { position: l, isPositioned: u, isSettingsLayerTransitioning: d, nudge: f } = this.state;
        return (0, o.jsx)('div', {
            className: c()({
                [I.clickTrapContainer]: !0,
                [I.trapClicks]: s
            }),
            children: (0, o.jsx)(h.C1, {
                children: (s) => {
                    let { theme: h, disableAdaptiveTheme: m } = s;
                    return (0, o.jsx)('div', {
                        id: e,
                        className: c()(n, (0, p.Qe)(h), I.layer, {
                            [I.emptyError]: !1,
                            [I.layerHidden]: d,
                            [I.disabledPointerEvents]: a,
                            'disable-adaptive-theme': m
                        }),
                        style: {
                            position: i ? 'fixed' : 'absolute',
                            ...this.state.style
                        },
                        ref: this.elementRef,
                        children: (0, o.jsx)(_.J, {
                            containerRef: this.elementRef,
                            children: r(
                                {
                                    position: l,
                                    nudge: f,
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
            T(this, 'elementRef', l.createRef()),
            T(this, 'state', {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }),
            T(this, 'handleLayerPopStart', () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            T(this, 'handleLayerPopComplete', () => {
                let e = this.calculateState();
                this.setState({
                    ...e,
                    isSettingsLayerTransitioning: !1
                });
            }),
            T(this, 'updatePosition', () => {
                this.setState(this.calculateState());
            });
    }
}
T(x, 'defaultProps', {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1
});
