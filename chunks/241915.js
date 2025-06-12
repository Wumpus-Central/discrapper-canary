n.d(t, {
    Z: () => N,
    _: () => S
}),
    n(388685);
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n(347469),
    u = n(689425),
    d = n(358085),
    _ = n(981631),
    f = n(354459),
    p = n(189152);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 200,
    E = 22,
    b = 40,
    y = {
        top: 80,
        bottom: 132,
        left: 80
    },
    O = {
        [_.VD2.TOP_RIGHT]: p.resizeHandleTopRight,
        [_.VD2.TOP_LEFT]: p.resizeHandleTopLeft,
        [_.VD2.BOTTOM_LEFT]: p.resizeHandleBottomLeft,
        [_.VD2.BOTTOM_RIGHT]: p.resizeHandleBottomRight
    },
    v = {
        [_.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [_.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT
    };
function I(e, t) {
    let n = Math.round(e / b) * b;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function T(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: o, position: l } = e,
        u = (0, c.Z)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + b / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: v[l],
            usePointerEvents: !0
        }),
        d = a.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u]
        );
    return (0, i.jsx)('div', {
        onMouseDown: d,
        className: s()(p.resizeHandle, O[l])
    });
}
class S extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null != (n = null != (t = this._width) ? t : e.width) ? n : this.props.width;
            (this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(r - this._width) > b && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px')));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null == (e = this._resizeObserver) || e.disconnect();
    }
    getPosition(e) {
        let t = this._innerDivRef.current;
        if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: a, maxX: o, maxY: s, dockedRect: l } = this.props,
            c = Math.round(n),
            u = Math.round(s - i - this._boundHeight),
            f = Math.round(r),
            p = Math.round(o - a - this._boundWidth),
            h = (0, d.getPlatform)() !== d.PlatformTypes.WEB && this.inPopout ? E : 0;
        if (null != l) {
            var m, g;
            return {
                y: (null != (m = null == l ? void 0 : l.y) ? m : 0) - h,
                x: null != (g = null == l ? void 0 : l.x) ? g : 0
            };
        }
        switch (e) {
            case _.VD2.TOP_LEFT:
                return {
                    y: c,
                    x: f
                };
            case _.VD2.BOTTOM_LEFT:
                return {
                    y: u,
                    x: f
                };
            case _.VD2.TOP_RIGHT:
                return {
                    y: c,
                    x: p
                };
            default:
                return {
                    y: u,
                    x: p
                };
        }
    }
    setPosition(e) {
        var t;
        let { x: n, y: r } = this.getPosition(e);
        null == (t = this._draggable) || t.setPosition(n, r);
    }
    animateToPosition(e, t) {
        var n;
        let { x: r, y: i } = this.getPosition(e);
        null == (n = this._draggable) || n.animateToPosition(r, i, {}, t);
    }
    calculateDecayingPosition(e, t, n, r) {
        return {
            x: e + n * g,
            y: t + r * g
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case _.VD2.TOP_LEFT:
            case _.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case _.VD2.TOP_LEFT:
            case _.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null != (t = null != (e = this._width) ? e : n) ? t : f.l8[f.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === _.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: a, className: o, position: l, resizeConfig: c } = this.props,
            d = this.getWidth(),
            _ = {};
        return (
            null != n
                ? (_ = {
                      transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
                      width: n.width,
                      height: n.height
                  })
                : null != c &&
                  (_ = {
                      width: d,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, i.jsxs)(u.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(p.pictureInPictureWindow, o, {
                    [p.hidden]: r,
                    [p.borderRadius]: a
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
                        style: _,
                        children: this.props.children
                    }),
                    null != c
                        ? (0, i.jsx)(T, {
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
            h(this, 'state', { isResizing: !1 }),
            h(this, '_draggable', void 0),
            h(this, '_innerDivRef', a.createRef()),
            h(this, '_resizeObserver', void 0),
            h(this, '_width', null),
            h(this, '_boundWidth', 0),
            h(this, '_boundHeight', 0),
            h(this, '_velocityX', 0),
            h(this, '_velocityY', 0),
            h(this, '_lastMoveTime', void 0),
            h(this, '_lastMoveX', 0),
            h(this, '_lastMoveY', 0),
            h(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            h(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let a = I(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            h(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null == (n = this._resizeObserver) || n.observe(e);
                }
            }),
            h(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            h(this, 'handleResize', (e) => {
                (this._width = e), this.state.isResizing || this.setState({ isResizing: !0 });
            }),
            h(this, 'handleResizeEnd', (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = I(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            h(this, 'handleDragStart', (e, t) => {
                var n, r;
                (this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date()), null == (n = (r = this.props).onDragStart) || n.call(r, e, t);
            }),
            h(this, 'handleDrag', (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r && ((this._velocityX = (e - this._lastMoveX) / r), (this._velocityY = (t - this._lastMoveY) / r), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = n));
            }),
            h(this, 'handleDragEnd', (e, t) => {
                var n, r;
                let i,
                    { maxX: a, maxY: o } = this.props,
                    s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    l = !0,
                    c = !0;
                if ((s.x > a / 2 && (c = !1), s.y > o / 2 && (l = !1), (i = l && c ? _.VD2.TOP_LEFT : l && !c ? _.VD2.TOP_RIGHT : !l && c ? _.VD2.BOTTOM_LEFT : _.VD2.BOTTOM_RIGHT), this.animateToPosition(i, this.ensureIsInPosition), i !== this.props.position)) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, i);
                }
                null == (n = (r = this.props).onDragEnd) || n.call(r, e, t);
            });
    }
}
h(S, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
let A = (e) => {
        let { selectedPIPWindow: t, pipWindows: n, pipWidth: r, maxX: o, maxY: l, onWindowMove: c, onWindowResize: u, dockedRect: d, pictureInPictureComponents: f, appContext: h, roundCorners: g, resizeConfig: E } = e,
            [b, O] = a.useState(!1),
            v = a.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== _.NYg.EMBED_IFRAME) return null;
                              let n = 'string' == typeof e.component ? f[e.component] : e.component;
                              return (0, i.jsx)(n, m({ width: r }, e.props), e.id);
                          }),
                [n, t, r, f]
            ),
            I = a.useCallback(() => {
                O(!0);
            }, []),
            T = a.useCallback(() => {
                O(!1);
            }, []),
            A = a.useMemo(() => n.some((e) => e.component === _.NYg.EMBED_IFRAME), [n]);
        return null == t
            ? (0, i.jsx)('div', { className: p.pictureInPicture })
            : (0, i.jsx)('div', {
                  className: s()(p.pictureInPicture, { [p.dragging]: b }),
                  children: (0, i.jsx)(S, {
                      appContext: h,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: c,
                      onResize: u,
                      onDragStart: I,
                      onDragEnd: T,
                      maxX: o,
                      maxY: l,
                      width: r,
                      dockedRect: d,
                      edgeOffsetTop: y.top,
                      edgeOffsetBottom: y.bottom,
                      edgeOffsetLeft: y.left,
                      edgeOffsetRight: y.top,
                      roundCorners: g,
                      resizeConfig: A ? void 0 : E,
                      children: v
                  })
              });
    },
    N = a.memo(A);
