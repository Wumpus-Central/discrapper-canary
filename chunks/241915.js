n.d(t, {
    Z: () => P,
    _: () => C
}),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    c = n(995295),
    u = n(347469),
    d = n(689425),
    f = n(358085),
    p = n(981631),
    _ = n(354459),
    h = n(854216);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = 200,
    v = 22,
    b = 40,
    y = 80,
    O = 132,
    S = 80,
    I = {
        [p.VD2.TOP_RIGHT]: h.resizeHandleTopRight,
        [p.VD2.TOP_LEFT]: h.resizeHandleTopLeft,
        [p.VD2.BOTTOM_LEFT]: h.resizeHandleBottomLeft,
        [p.VD2.BOTTOM_RIGHT]: h.resizeHandleBottomRight
    },
    T = {
        [p.VD2.TOP_RIGHT]: u.y.HORIZONTAL_LEFT,
        [p.VD2.TOP_LEFT]: u.y.HORIZONTAL_RIGHT,
        [p.VD2.BOTTOM_LEFT]: u.y.HORIZONTAL_RIGHT,
        [p.VD2.BOTTOM_RIGHT]: u.y.HORIZONTAL_LEFT
    };
function N(e, t) {
    let n = Math.round(e / b) * b;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function A(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: a, position: l } = e,
        c = (0, u.Z)({
            minDimension: a.minWidth,
            maxDimension: a.maxWidth + b / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: T[l],
            usePointerEvents: !0
        }),
        d = o.useCallback(
            (e) => {
                e.stopPropagation(), c(e);
            },
            [c]
        );
    return (0, i.jsx)('div', {
        onMouseDown: d,
        className: s()(h.resizeHandle, I[l])
    });
}
class C extends (r = o.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null !== (n = null !== (t = this._width) && void 0 !== t ? t : e.width) && void 0 !== n ? n : this.props.width;
            (this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(r - this._width) > b && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px')));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let t = (0, c.findDOMNode)(this._innerDivRef.current);
        if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: o, maxX: a, maxY: s, dockedRect: l } = this.props,
            u = Math.round(n),
            d = Math.round(s - i - this._boundHeight),
            _ = Math.round(r),
            h = Math.round(a - o - this._boundWidth),
            m = (0, f.getPlatform)() !== f.PlatformTypes.WEB && this.inPopout ? v : 0;
        if (null != l) {
            var g, E;
            return {
                y: (null !== (g = null == l ? void 0 : l.y) && void 0 !== g ? g : 0) - m,
                x: null !== (E = null == l ? void 0 : l.x) && void 0 !== E ? E : 0
            };
        }
        switch (e) {
            case p.VD2.TOP_LEFT:
                return {
                    y: u,
                    x: _
                };
            case p.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: _
                };
            case p.VD2.TOP_RIGHT:
                return {
                    y: u,
                    x: h
                };
            default:
                return {
                    y: d,
                    x: h
                };
        }
    }
    setPosition(e) {
        var t;
        let { x: n, y: r } = this.getPosition(e);
        null === (t = this._draggable) || void 0 === t || t.setPosition(n, r);
    }
    animateToPosition(e, t) {
        var n;
        let { x: r, y: i } = this.getPosition(e);
        null === (n = this._draggable) || void 0 === n || n.animateToPosition(r, i, {}, t);
    }
    calculateDecayingPosition(e, t, n, r) {
        return {
            x: e + n * E,
            y: t + r * E
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case p.VD2.TOP_LEFT:
            case p.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case p.VD2.TOP_LEFT:
            case p.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null !== (t = null !== (e = this._width) && void 0 !== e ? e : n) && void 0 !== t ? t : _.l8[_.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === p.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: o, className: a, position: l, resizeConfig: c } = this.props,
            u = this.getWidth(),
            f = {};
        return (
            null != n
                ? (f = {
                      transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
                      width: n.width,
                      height: n.height
                  })
                : null != c &&
                  (f = {
                      width: u,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, i.jsxs)(d.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(h.pictureInPictureWindow, a, {
                    [h.hidden]: r,
                    [h.borderRadius]: o
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)('div', {
                        ref: this.handleSetInnerDivRef,
                        style: f,
                        children: this.props.children
                    }),
                    null != c
                        ? (0, i.jsx)(A, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: c,
                              position: l
                          })
                        : null
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { isResizing: !1 }),
            m(this, '_draggable', void 0),
            m(this, '_innerDivRef', o.createRef()),
            m(this, '_resizeObserver', void 0),
            m(this, '_width', null),
            m(this, '_boundWidth', 0),
            m(this, '_boundHeight', 0),
            m(this, '_velocityX', 0),
            m(this, '_velocityY', 0),
            m(this, '_lastMoveTime', void 0),
            m(this, '_lastMoveX', 0),
            m(this, '_lastMoveY', 0),
            m(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            m(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let o = N(r - (t + n), i);
                this.getWidth() > o && ((this._width = o), null == e || e(o));
            }),
            m(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null === (n = this._resizeObserver) || void 0 === n || n.observe(e);
                }
            }),
            m(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            m(this, 'handleResize', (e) => {
                (this._width = e), this.state.isResizing || this.setState({ isResizing: !0 });
            }),
            m(this, 'handleResizeEnd', (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = N(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            m(this, 'handleDragStart', (e, t) => {
                (this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date());
            }),
            m(this, 'handleDrag', (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r && ((this._velocityX = (e - this._lastMoveX) / r), (this._velocityY = (t - this._lastMoveY) / r), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = n));
            }),
            m(this, 'handleDragEnd', (e, t) => {
                let n;
                let { maxX: r, maxY: i } = this.props,
                    o = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    a = !0,
                    s = !0;
                if ((o.x > r / 2 && (s = !1), o.y > i / 2 && (a = !1), (n = a && s ? p.VD2.TOP_LEFT : a && !s ? p.VD2.TOP_RIGHT : !a && s ? p.VD2.BOTTOM_LEFT : p.VD2.BOTTOM_RIGHT), this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position)) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, n);
                }
            });
    }
}
m(C, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
let R = (e) => {
        let { selectedPIPWindow: t, pipWindows: n, pipWidth: r, maxX: o, maxY: a, onWindowMove: s, onWindowResize: l, dockedRect: c, pictureInPictureComponents: u, appContext: d, roundCorners: f, resizeConfig: _ } = e,
            m = () => {
                if (null == t) return null;
                let e = n.map((e) => {
                        if (e.id !== t.id && e.component !== p.NYg.EMBED_IFRAME) return null;
                        let n = 'string' == typeof e.component ? u[e.component] : e.component;
                        return (0, i.jsx)(n, g({ width: r }, e.props), e.id);
                    }),
                    h = n.some((e) => e.component === p.NYg.EMBED_IFRAME);
                return (0, i.jsx)(C, {
                    appContext: d,
                    position: t.position,
                    id: t.id,
                    hidden: t.hidden,
                    onMove: s,
                    onResize: l,
                    maxX: o,
                    maxY: a,
                    width: r,
                    dockedRect: c,
                    edgeOffsetTop: y,
                    edgeOffsetBottom: O,
                    edgeOffsetLeft: S,
                    edgeOffsetRight: y,
                    roundCorners: f,
                    resizeConfig: h ? void 0 : _,
                    children: e
                });
            };
        return (0, i.jsx)('div', {
            className: h.pictureInPicture,
            children: m()
        });
    },
    P = o.memo(R);
