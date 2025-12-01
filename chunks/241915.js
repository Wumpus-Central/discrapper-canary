n.d(t, {
    Z: () => N,
    _: () => A,
}),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    c = n(347469),
    u = n(689425),
    d = n(522501),
    f = n(981631),
    p = n(354459),
    _ = n(639965);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
let g = 200,
    E = 40,
    b = 80,
    y = 132,
    O = 80,
    v = {
        [f.VD2.TOP_RIGHT]: _.resizeHandleTopRight,
        [f.VD2.TOP_LEFT]: _.resizeHandleTopLeft,
        [f.VD2.BOTTOM_LEFT]: _.resizeHandleBottomLeft,
        [f.VD2.BOTTOM_RIGHT]: _.resizeHandleBottomRight,
    },
    S = {
        [f.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [f.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [f.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [f.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT,
    };
function I(e, t) {
    let n = Math.round(e / E) * E;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function T(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: o, position: l } = e,
        u = (0, c.Z)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + E / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: S[l],
            usePointerEvents: !0,
        }),
        d = a.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u],
        );
    return (0, i.jsx)("div", {
        onMouseDown: d,
        className: s()(_.resizeHandle, v[l]),
    });
}
class A extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null != (n = null != (t = this._width) ? t : e.width) ? n : this.props.width;
            (this._width = this.props.width),
                null != this._innerDivRef.current &&
                    (Math.abs(r - this._width) > E && (this._innerDivRef.current.style.transition = "none"),
                    (this._innerDivRef.current.style.width = "".concat(this.props.width, "px")));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop ||
            e.edgeOffsetLeft !== this.props.edgeOffsetLeft ||
            e.edgeOffsetBottom !== this.props.edgeOffsetBottom ||
            e.edgeOffsetRight !== this.props.edgeOffsetRight ||
            e.maxX !== this.props.maxX ||
            e.maxY !== this.props.maxY ||
            e.dockedRect !== this.props.dockedRect ||
            e.roundCorners !== this.props.roundCorners) &&
            (this.ensureIsInPosition(), this.ensureWidth());
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
        let {
                edgeOffsetTop: n,
                edgeOffsetLeft: r,
                edgeOffsetBottom: i,
                edgeOffsetRight: a,
                maxX: o,
                maxY: s,
                dockedRect: l,
                getDockedRectPositionY: c,
            } = this.props,
            u = Math.round(n),
            d = Math.round(s - i - this._boundHeight),
            p = Math.round(r),
            _ = Math.round(o - a - this._boundWidth);
        if (null != l) {
            var m, h, g;
            return {
                y: null != (h = null != (m = null == c ? void 0 : c(l.y)) ? m : l.y) ? h : 0,
                x: null != (g = null == l ? void 0 : l.x) ? g : 0,
            };
        }
        switch (e) {
            case f.VD2.TOP_LEFT:
                return {
                    y: u,
                    x: p,
                };
            case f.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: p,
                };
            case f.VD2.TOP_RIGHT:
                return {
                    y: u,
                    x: _,
                };
            default:
                return {
                    y: d,
                    x: _,
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
            y: t + r * g,
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case f.VD2.TOP_LEFT:
            case f.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case f.VD2.TOP_LEFT:
            case f.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null != (t = null != (e = this._width) ? e : n) ? t : p.l8[p.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === f.IlC.POPOUT;
    }
    render() {
        let {
                maxX: e,
                maxY: t,
                dockedRect: n,
                hidden: r,
                roundCorners: a,
                className: o,
                position: l,
                resizeConfig: c,
            } = this.props,
            d = this.getWidth(),
            f = {};
        return (
            null != n
                ? (f = {
                      transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
                      width: n.width,
                      height: n.height,
                  })
                : null != c &&
                  (f = {
                      width: d,
                      transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out",
                  }),
            (0, i.jsxs)(u.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(_.pictureInPictureWindow, o, {
                    [_.hidden]: r,
                    [_.borderRadius]: a,
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)("div", {
                        ref: this.handleSetInnerDivRef,
                        style: f,
                        children: this.props.children,
                    }),
                    null != c
                        ? (0, i.jsx)(T, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: c,
                              position: l,
                          })
                        : null,
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            m(this, "state", { isResizing: !1 }),
            m(this, "_draggable", void 0),
            m(this, "_innerDivRef", a.createRef()),
            m(this, "_resizeObserver", void 0),
            m(this, "_width", null),
            m(this, "_boundWidth", 0),
            m(this, "_boundHeight", 0),
            m(this, "_velocityX", 0),
            m(this, "_velocityY", 0),
            m(this, "_lastMoveTime", void 0),
            m(this, "_lastMoveX", 0),
            m(this, "_lastMoveY", 0),
            m(this, "ensureIsInPosition", () => {
                this.setPosition(this.props.position);
            }),
            m(this, "ensureWidth", () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let a = I(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            m(this, "handleSetInnerDivRef", (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)),
                        null == (n = this._resizeObserver) || n.observe(e);
                }
            }),
            m(this, "handleSetDraggableRef", (e) => {
                this._draggable = e;
            }),
            m(this, "handleResize", (e) => {
                (this._width = e), this.state.isResizing || this.setState({ isResizing: !0 });
            }),
            m(this, "handleResizeEnd", (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = I(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            m(this, "handleDragStart", (e, t) => {
                var n, r;
                (this._velocityX = 0),
                    (this._velocityY = 0),
                    (this._lastMoveX = e),
                    (this._lastMoveY = t),
                    (this._lastMoveTime = new Date()),
                    null == (n = (r = this.props).onDragStart) || n.call(r, e, t);
            }),
            m(this, "handleDrag", (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r &&
                    ((this._velocityX = (e - this._lastMoveX) / r),
                    (this._velocityY = (t - this._lastMoveY) / r),
                    (this._lastMoveX = e),
                    (this._lastMoveY = t),
                    (this._lastMoveTime = n));
            }),
            m(this, "handleDragEnd", (e, t) => {
                var n, r;
                let i,
                    { maxX: a, maxY: o } = this.props,
                    s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    l = !0,
                    c = !0;
                if (
                    (s.x > a / 2 && (c = !1),
                    s.y > o / 2 && (l = !1),
                    (i =
                        l && c
                            ? f.VD2.TOP_LEFT
                            : l && !c
                              ? f.VD2.TOP_RIGHT
                              : !l && c
                                ? f.VD2.BOTTOM_LEFT
                                : f.VD2.BOTTOM_RIGHT),
                    this.animateToPosition(i, this.ensureIsInPosition),
                    i !== this.props.position)
                ) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, i);
                }
                null == (n = (r = this.props).onDragEnd) || n.call(r, e, t);
            });
    }
}
m(A, "defaultProps", {
    hidden: !1,
    roundCorners: !0,
});
let C = (e) => {
        let {
                selectedPIPWindow: t,
                pipWindows: n,
                pipWidth: r,
                maxX: o,
                maxY: l,
                onWindowMove: c,
                onWindowResize: u,
                dockedRect: p,
                pictureInPictureComponents: m,
                appContext: g,
                roundCorners: E,
                resizeConfig: v,
                className: S,
                getDockedRectPositionY: I,
            } = e,
            [T, C] = a.useState(!1),
            N = a.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== f.NYg.ACTIVITY && e.component !== f.NYg.FRAME)
                                  return null;
                              let n = "string" == typeof e.component ? m[e.component] : e.component;
                              return (0, i.jsx)(n, h({ width: r }, e.props), e.id);
                          }),
                [n, t, r, m],
            ),
            P = a.useCallback(() => {
                C(!0);
            }, []),
            R = a.useCallback(() => {
                C(!1);
            }, []),
            w = a.useMemo(() => n.some((e) => e.component === f.NYg.ACTIVITY), [n]),
            D = a.useMemo(() => n.some((e) => e.component === f.NYg.FRAME), [n]);
        return null == t
            ? (0, i.jsx)(d.ZP, { children: (0, i.jsx)("div", { className: _.pictureInPicture }) })
            : (0, i.jsx)(d.ZP, {
                  children: (0, i.jsx)("div", {
                      className: s()(_.pictureInPicture, { [_.dragging]: T }, S),
                      children: (0, i.jsx)(A, {
                          appContext: g,
                          position: t.position,
                          id: t.id,
                          hidden: t.hidden,
                          onMove: c,
                          onResize: u,
                          onDragStart: P,
                          onDragEnd: R,
                          maxX: o,
                          maxY: l,
                          width: r,
                          dockedRect: p,
                          getDockedRectPositionY: I,
                          edgeOffsetTop: b,
                          edgeOffsetBottom: y,
                          edgeOffsetLeft: O,
                          edgeOffsetRight: b,
                          roundCorners: E,
                          resizeConfig: w || D ? void 0 : v,
                          children: N,
                      }),
                  }),
              });
    },
    N = a.memo(C);
