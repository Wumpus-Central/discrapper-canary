r.d(n, {
    _: function () {
        return O;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(392711);
var d = r(995295),
    f = r(347469),
    _ = r(689425),
    h = r(358085),
    p = r(981631),
    m = r(354459),
    g = r(555803);
function E(e, n, r) {
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
let v = 200,
    I = 22,
    T = 40,
    b = 80,
    y = 132,
    S = 80,
    A = {
        [p.VD2.TOP_RIGHT]: g.resizeHandleTopRight,
        [p.VD2.TOP_LEFT]: g.resizeHandleTopLeft,
        [p.VD2.BOTTOM_LEFT]: g.resizeHandleBottomLeft,
        [p.VD2.BOTTOM_RIGHT]: g.resizeHandleBottomRight
    },
    N = {
        [p.VD2.TOP_RIGHT]: f.y.HORIZONTAL_LEFT,
        [p.VD2.TOP_LEFT]: f.y.HORIZONTAL_RIGHT,
        [p.VD2.BOTTOM_LEFT]: f.y.HORIZONTAL_RIGHT,
        [p.VD2.BOTTOM_RIGHT]: f.y.HORIZONTAL_LEFT
    };
function C(e, n) {
    let r = Math.round(e / T) * T;
    return (0, c.clamp)(r, n.minWidth, n.maxWidth);
}
function R(e) {
    let { resizableNode: n, onResize: r, onResizeEnd: i, resizeConfig: a, position: l } = e,
        c = (0, f.Z)({
            minDimension: a.minWidth,
            maxDimension: a.maxWidth + T / 2,
            resizableDomNodeRef: n,
            onElementResize: r,
            onElementResizeEnd: i,
            orientation: N[l],
            usePointerEvents: !0
        }),
        d = o.useCallback(
            (e) => {
                e.stopPropagation(), c(e);
            },
            [c]
        );
    return (0, s.jsx)('div', {
        onMouseDown: d,
        className: u()(g.resizeHandle, A[l])
    });
}
class O extends (i = o.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var n, r;
            let i = null !== (r = null !== (n = this._width) && void 0 !== n ? n : e.width) && void 0 !== r ? r : this.props.width;
            (this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(i - this._width) > T && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px')));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let n = (0, d.findDOMNode)(this._innerDivRef.current);
        if (null != n) {
            let e = n.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: r, edgeOffsetLeft: i, edgeOffsetBottom: a, edgeOffsetRight: s, maxX: o, maxY: l, dockedRect: u } = this.props,
            c = Math.round(r),
            f = Math.round(l - a - this._boundHeight),
            _ = Math.round(i),
            m = Math.round(o - s - this._boundWidth),
            g = (0, h.getPlatform)() !== h.PlatformTypes.WEB && this.inPopout ? I : 0;
        if (null != u) {
            var E, v;
            return {
                y: (null !== (E = null == u ? void 0 : u.y) && void 0 !== E ? E : 0) - g,
                x: null !== (v = null == u ? void 0 : u.x) && void 0 !== v ? v : 0
            };
        }
        switch (e) {
            case p.VD2.TOP_LEFT:
                return {
                    y: c,
                    x: _
                };
            case p.VD2.BOTTOM_LEFT:
                return {
                    y: f,
                    x: _
                };
            case p.VD2.TOP_RIGHT:
                return {
                    y: c,
                    x: m
                };
            default:
                return {
                    y: f,
                    x: m
                };
        }
    }
    setPosition(e) {
        var n;
        let { x: r, y: i } = this.getPosition(e);
        null === (n = this._draggable) || void 0 === n || n.setPosition(r, i);
    }
    animateToPosition(e, n) {
        var r;
        let { x: i, y: a } = this.getPosition(e);
        null === (r = this._draggable) || void 0 === r || r.animateToPosition(i, a, {}, n);
    }
    calculateDecayingPosition(e, n, r, i) {
        return {
            x: e + r * v,
            y: n + i * v
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: n, edgeOffsetRight: r } = this.props;
        switch (e) {
            case p.VD2.TOP_LEFT:
            case p.VD2.BOTTOM_LEFT:
                return -n;
            default:
                return r;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: n, edgeOffsetBottom: r } = this.props;
        switch (e) {
            case p.VD2.TOP_LEFT:
            case p.VD2.TOP_RIGHT:
                return -n;
            default:
                return r;
        }
    }
    getWidth() {
        var e, n;
        let { width: r } = this.props;
        return null !== (n = null !== (e = this._width) && void 0 !== e ? e : r) && void 0 !== n ? n : m.l8[m.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === p.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: n, dockedRect: r, hidden: i, roundCorners: a, className: o, position: l, resizeConfig: c } = this.props,
            d = this.getWidth(),
            f = {};
        return (
            null != r
                ? (f = {
                      transform: 'translate3d('.concat(r.x, ', ').concat(r.y, ', 0)'),
                      width: r.width,
                      height: r.height
                  })
                : null != c &&
                  (f = {
                      width: d,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, s.jsxs)(_.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: u()(g.pictureInPictureWindow, o, {
                    [g.hidden]: i,
                    [g.borderRadius]: a
                }),
                maxX: e,
                maxY: n,
                disabled: null != r,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, s.jsx)('div', {
                        ref: this.handleSetInnerDivRef,
                        style: f,
                        children: this.props.children
                    }),
                    null != c
                        ? (0, s.jsx)(R, {
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
            E(this, 'state', { isResizing: !1 }),
            E(this, '_draggable', void 0),
            E(this, '_innerDivRef', o.createRef()),
            E(this, '_resizeObserver', void 0),
            E(this, '_width', null),
            E(this, '_boundWidth', 0),
            E(this, '_boundHeight', 0),
            E(this, '_velocityX', 0),
            E(this, '_velocityY', 0),
            E(this, '_lastMoveTime', void 0),
            E(this, '_lastMoveX', 0),
            E(this, '_lastMoveY', 0),
            E(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            E(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: n, edgeOffsetRight: r, maxX: i, resizeConfig: a } = this.props;
                if (null == a) return;
                let s = C(i - (n + r), a);
                this.getWidth() > s && ((this._width = s), null == e || e(s));
            }),
            E(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != n) {
                    var r;
                    (this._resizeObserver = new n.ResizeObserver(this.ensureIsInPosition)), null === (r = this._resizeObserver) || void 0 === r || r.observe(e);
                }
            }),
            E(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            E(this, 'handleResize', (e) => {
                (this._width = e), !this.state.isResizing && this.setState({ isResizing: !0 });
            }),
            E(this, 'handleResizeEnd', (e) => {
                let { onResize: n, resizeConfig: r } = this.props;
                if (null == r) return;
                let i = C(e, r);
                (this._width = i), null == n || n(i), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            E(this, 'handleDragStart', (e, n) => {
                (this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = n), (this._lastMoveTime = new Date());
            }),
            E(this, 'handleDrag', (e, n) => {
                let r = new Date(),
                    i = Number(r) - Number(this._lastMoveTime);
                0 !== i && ((this._velocityX = (e - this._lastMoveX) / i), (this._velocityY = (n - this._lastMoveY) / i), (this._lastMoveX = e), (this._lastMoveY = n), (this._lastMoveTime = r));
            }),
            E(this, 'handleDragEnd', (e, n) => {
                let r;
                let { maxX: i, maxY: a } = this.props,
                    s = this.calculateDecayingPosition(e, n, this._velocityX, this._velocityY),
                    o = !0,
                    l = !0;
                if ((s.x > i / 2 && (l = !1), s.y > a / 2 && (o = !1), (r = o && l ? p.VD2.TOP_LEFT : o && !l ? p.VD2.TOP_RIGHT : !o && l ? p.VD2.BOTTOM_LEFT : p.VD2.BOTTOM_RIGHT), this.animateToPosition(r, this.ensureIsInPosition), r !== this.props.position)) {
                    let { id: e, onMove: n } = this.props;
                    null == n || n(e, r);
                }
            });
    }
}
E(O, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
let D = (e) => {
    let { selectedPIPWindow: n, pipWindows: r, pipWidth: i, maxX: a, maxY: o, onWindowMove: l, onWindowResize: u, dockedRect: c, pictureInPictureComponents: d, appContext: f, roundCorners: _, resizeConfig: h } = e,
        m = () => {
            if (null == n) return null;
            let e = r.map((e) => {
                    if (e.id !== n.id && e.component !== p.NYg.EMBED_IFRAME) return null;
                    let r = 'string' == typeof e.component ? d[e.component] : e.component;
                    return (0, s.jsx)(
                        r,
                        {
                            width: i,
                            ...e.props
                        },
                        e.id
                    );
                }),
                m = r.some((e) => e.component === p.NYg.EMBED_IFRAME);
            return (0, s.jsx)(O, {
                appContext: f,
                position: n.position,
                id: n.id,
                hidden: n.hidden,
                onMove: l,
                onResize: u,
                maxX: a,
                maxY: o,
                width: i,
                dockedRect: c,
                edgeOffsetTop: b,
                edgeOffsetBottom: y,
                edgeOffsetLeft: S,
                edgeOffsetRight: b,
                roundCorners: _,
                resizeConfig: m ? void 0 : h,
                children: e
            });
        };
    return (0, s.jsx)('div', {
        className: g.pictureInPicture,
        children: m()
    });
};
n.Z = o.memo(D);
