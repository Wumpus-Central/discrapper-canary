(n.d(t, {
    Z: () => A,
    _: () => T
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
    d = n(522501),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
let g = 200,
    E = 40,
    b = {
        top: 80,
        bottom: 132,
        left: 80
    },
    y = {
        [_.VD2.TOP_RIGHT]: p.resizeHandleTopRight,
        [_.VD2.TOP_LEFT]: p.resizeHandleTopLeft,
        [_.VD2.BOTTOM_LEFT]: p.resizeHandleBottomLeft,
        [_.VD2.BOTTOM_RIGHT]: p.resizeHandleBottomRight
    },
    O = {
        [_.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [_.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT
    };
function v(e, t) {
    let n = Math.round(e / E) * E;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function I(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: o, position: l } = e,
        u = (0, c.Z)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + E / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: O[l],
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
        className: s()(p.resizeHandle, y[l])
    });
}
class T extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null != (n = null != (t = this._width) ? t : e.width) ? n : this.props.width;
            ((this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(r - this._width) > E && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px'))));
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
            d = Math.round(s - i - this._boundHeight),
            f = Math.round(r),
            p = Math.round(o - a - this._boundWidth);
        if (null != l) {
            var h, m, g;
            return {
                y: null != (m = null != (h = null == c ? void 0 : c(l.y)) ? h : l.y) ? m : 0,
                x: null != (g = null == l ? void 0 : l.x) ? g : 0
            };
        }
        switch (e) {
            case _.VD2.TOP_LEFT:
                return {
                    y: u,
                    x: f
                };
            case _.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: f
                };
            case _.VD2.TOP_RIGHT:
                return {
                    y: u,
                    x: p
                };
            default:
                return {
                    y: d,
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
                        ? (0, i.jsx)(I, {
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
                let a = v(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            h(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    ((this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null == (n = this._resizeObserver) || n.observe(e));
                }
            }),
            h(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            h(this, 'handleResize', (e) => {
                ((this._width = e), this.state.isResizing || this.setState({ isResizing: !0 }));
            }),
            h(this, 'handleResizeEnd', (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = v(e, n);
                ((this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth());
            }),
            h(this, 'handleDragStart', (e, t) => {
                var n, r;
                ((this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date()), null == (n = (r = this.props).onDragStart) || n.call(r, e, t));
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
            }));
    }
}
h(T, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
let S = (e) => {
        let { selectedPIPWindow: t, pipWindows: n, pipWidth: r, maxX: o, maxY: l, onWindowMove: c, onWindowResize: u, dockedRect: f, pictureInPictureComponents: h, appContext: g, roundCorners: E, resizeConfig: y, className: O, getDockedRectPositionY: v } = e,
            [I, S] = a.useState(!1),
            A = a.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== _.NYg.ACTIVITY && e.component !== _.NYg.FRAME) return null;
                              let n = 'string' == typeof e.component ? h[e.component] : e.component;
                              return (0, i.jsx)(n, m({ width: r }, e.props), e.id);
                          }),
                [n, t, r, h]
            ),
            N = a.useCallback(() => {
                S(!0);
            }, []),
            C = a.useCallback(() => {
                S(!1);
            }, []),
            R = a.useMemo(() => n.some((e) => e.component === _.NYg.ACTIVITY), [n]),
            P = a.useMemo(() => n.some((e) => e.component === _.NYg.FRAME), [n]);
        return null == t
            ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)('div', { className: p.pictureInPicture }) })
            : (0, i.jsx)(d.ZP, {
                  children: (0, i.jsx)('div', {
                      className: s()(p.pictureInPicture, { [p.dragging]: I }, O),
                      children: (0, i.jsx)(T, {
                          appContext: g,
                          position: t.position,
                          id: t.id,
                          hidden: t.hidden,
                          onMove: c,
                          onResize: u,
                          onDragStart: N,
                          onDragEnd: C,
                          maxX: o,
                          maxY: l,
                          width: r,
                          dockedRect: f,
                          getDockedRectPositionY: v,
                          edgeOffsetTop: b.top,
                          edgeOffsetBottom: b.bottom,
                          edgeOffsetLeft: b.left,
                          edgeOffsetRight: b.top,
                          roundCorners: E,
                          resizeConfig: R || P ? void 0 : y,
                          children: A
                      })
                  })
              });
    },
    A = a.memo(S);
