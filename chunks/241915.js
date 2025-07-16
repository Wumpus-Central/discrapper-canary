(n.d(t, {
    Z: () => S,
    _: () => I
}),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n(347469),
    u = n(689425),
    d = n(981631),
    f = n(354459),
    _ = n(189152);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
let m = 200,
    g = 40,
    E = {
        top: 80,
        bottom: 132,
        left: 80
    },
    b = {
        [d.VD2.TOP_RIGHT]: _.resizeHandleTopRight,
        [d.VD2.TOP_LEFT]: _.resizeHandleTopLeft,
        [d.VD2.BOTTOM_LEFT]: _.resizeHandleBottomLeft,
        [d.VD2.BOTTOM_RIGHT]: _.resizeHandleBottomRight
    },
    y = {
        [d.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [d.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [d.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [d.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT
    };
function O(e, t) {
    let n = Math.round(e / g) * g;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function v(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: o, position: l } = e,
        u = (0, c.Z)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + g / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: y[l],
            usePointerEvents: !0
        }),
        d = a.useCallback(
            (e) => {
                (e.stopPropagation(), u(e));
            },
            [u]
        );
    return (0, i.jsx)('div', {
        onMouseDown: d,
        className: s()(_.resizeHandle, b[l])
    });
}
class I extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null != (n = null != (t = this._width) ? t : e.width) ? n : this.props.width;
            ((this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(r - this._width) > g && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px'))));
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
            ((this._boundWidth = e.width), (this._boundHeight = e.height));
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: a, maxX: o, maxY: s, dockedRect: l, getDockedRectPositionY: c } = this.props,
            u = Math.round(n),
            f = Math.round(s - i - this._boundHeight),
            _ = Math.round(r),
            p = Math.round(o - a - this._boundWidth);
        if (null != l) {
            var h, m, g;
            return {
                y: null != (m = null != (h = null == c ? void 0 : c(l.y)) ? h : l.y) ? m : 0,
                x: null != (g = null == l ? void 0 : l.x) ? g : 0
            };
        }
        switch (e) {
            case d.VD2.TOP_LEFT:
                return {
                    y: u,
                    x: _
                };
            case d.VD2.BOTTOM_LEFT:
                return {
                    y: f,
                    x: _
                };
            case d.VD2.TOP_RIGHT:
                return {
                    y: u,
                    x: p
                };
            default:
                return {
                    y: f,
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
            x: e + n * m,
            y: t + r * m
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case d.VD2.TOP_LEFT:
            case d.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case d.VD2.TOP_LEFT:
            case d.VD2.TOP_RIGHT:
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
        return this.props.appContext === d.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: a, className: o, position: l, resizeConfig: c } = this.props,
            d = this.getWidth(),
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
                      width: d,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, i.jsxs)(u.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(_.pictureInPictureWindow, o, {
                    [_.hidden]: r,
                    [_.borderRadius]: a
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
                        ? (0, i.jsx)(v, {
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
        (super(...e),
            p(this, 'state', { isResizing: !1 }),
            p(this, '_draggable', void 0),
            p(this, '_innerDivRef', a.createRef()),
            p(this, '_resizeObserver', void 0),
            p(this, '_width', null),
            p(this, '_boundWidth', 0),
            p(this, '_boundHeight', 0),
            p(this, '_velocityX', 0),
            p(this, '_velocityY', 0),
            p(this, '_lastMoveTime', void 0),
            p(this, '_lastMoveX', 0),
            p(this, '_lastMoveY', 0),
            p(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            p(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let a = O(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            p(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    ((this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null == (n = this._resizeObserver) || n.observe(e));
                }
            }),
            p(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            p(this, 'handleResize', (e) => {
                ((this._width = e), this.state.isResizing || this.setState({ isResizing: !0 }));
            }),
            p(this, 'handleResizeEnd', (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = O(e, n);
                ((this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth());
            }),
            p(this, 'handleDragStart', (e, t) => {
                var n, r;
                ((this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date()), null == (n = (r = this.props).onDragStart) || n.call(r, e, t));
            }),
            p(this, 'handleDrag', (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r && ((this._velocityX = (e - this._lastMoveX) / r), (this._velocityY = (t - this._lastMoveY) / r), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = n));
            }),
            p(this, 'handleDragEnd', (e, t) => {
                var n, r;
                let i,
                    { maxX: a, maxY: o } = this.props,
                    s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    l = !0,
                    c = !0;
                if ((s.x > a / 2 && (c = !1), s.y > o / 2 && (l = !1), (i = l && c ? d.VD2.TOP_LEFT : l && !c ? d.VD2.TOP_RIGHT : !l && c ? d.VD2.BOTTOM_LEFT : d.VD2.BOTTOM_RIGHT), this.animateToPosition(i, this.ensureIsInPosition), i !== this.props.position)) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, i);
                }
                null == (n = (r = this.props).onDragEnd) || n.call(r, e, t);
            }));
    }
}
p(I, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
let T = (e) => {
        let { selectedPIPWindow: t, pipWindows: n, pipWidth: r, maxX: o, maxY: l, onWindowMove: c, onWindowResize: u, dockedRect: f, pictureInPictureComponents: p, appContext: m, roundCorners: g, resizeConfig: b, className: y, getDockedRectPositionY: O } = e,
            [v, T] = a.useState(!1),
            S = a.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== d.NYg.ACTIVITY && e.component !== d.NYg.FRAME) return null;
                              let n = 'string' == typeof e.component ? p[e.component] : e.component;
                              return (0, i.jsx)(n, h({ width: r }, e.props), e.id);
                          }),
                [n, t, r, p]
            ),
            A = a.useCallback(() => {
                T(!0);
            }, []),
            N = a.useCallback(() => {
                T(!1);
            }, []),
            C = a.useMemo(() => n.some((e) => e.component === d.NYg.ACTIVITY), [n]),
            R = a.useMemo(() => n.some((e) => e.component === d.NYg.FRAME), [n]);
        return null == t
            ? (0, i.jsx)('div', { className: _.pictureInPicture })
            : (0, i.jsx)('div', {
                  className: s()(_.pictureInPicture, { [_.dragging]: v }, y),
                  children: (0, i.jsx)(I, {
                      appContext: m,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: c,
                      onResize: u,
                      onDragStart: A,
                      onDragEnd: N,
                      maxX: o,
                      maxY: l,
                      width: r,
                      dockedRect: f,
                      getDockedRectPositionY: O,
                      edgeOffsetTop: E.top,
                      edgeOffsetBottom: E.bottom,
                      edgeOffsetLeft: E.left,
                      edgeOffsetRight: E.top,
                      roundCorners: g,
                      resizeConfig: C || R ? void 0 : b,
                      children: S
                  })
              });
    },
    S = a.memo(T);
