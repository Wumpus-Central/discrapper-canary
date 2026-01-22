n.d(t, {
    A: () => N,
    S: () => T,
}),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(735438),
    c = n(761929),
    u = n(483517),
    d = n(699426),
    f = n(652215),
    p = n(806931),
    _ = n(315253);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 200,
    E = 40,
    b = 80,
    y = 132,
    O = 80,
    A = {
        [f.CUs.TOP_RIGHT]: _.En,
        [f.CUs.TOP_LEFT]: _.rG,
        [f.CUs.BOTTOM_LEFT]: _.j$,
        [f.CUs.BOTTOM_RIGHT]: _.Ue,
    },
    v = {
        [f.CUs.TOP_RIGHT]: c.R.HORIZONTAL_LEFT,
        [f.CUs.TOP_LEFT]: c.R.HORIZONTAL_RIGHT,
        [f.CUs.BOTTOM_LEFT]: c.R.HORIZONTAL_RIGHT,
        [f.CUs.BOTTOM_RIGHT]: c.R.HORIZONTAL_LEFT,
    };
function S(e, t) {
    let n = Math.round(e / E) * E;
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function I(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: s, position: l } = e,
        u = (0, c.A)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + E / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: v[l],
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
        className: o()(_.Di, A[l]),
    });
}
class T extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null != (t = null != (n = this._width) ? n : e.width) ? t : this.props.width;
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
                maxX: s,
                maxY: o,
                dockedRect: l,
                getDockedRectPositionY: c,
            } = this.props,
            u = Math.round(n),
            d = Math.round(o - i - this._boundHeight),
            p = Math.round(r),
            _ = Math.round(s - a - this._boundWidth);
        if (null != l) {
            var h, m, g;
            return {
                y: null != (h = null != (m = null == c ? void 0 : c(l.y)) ? m : l.y) ? h : 0,
                x: null != (g = null == l ? void 0 : l.x) ? g : 0,
            };
        }
        switch (e) {
            case f.CUs.TOP_LEFT:
                return {
                    y: u,
                    x: p,
                };
            case f.CUs.BOTTOM_LEFT:
                return {
                    y: d,
                    x: p,
                };
            case f.CUs.TOP_RIGHT:
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
            case f.CUs.TOP_LEFT:
            case f.CUs.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case f.CUs.TOP_LEFT:
            case f.CUs.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null != (e = null != (t = this._width) ? t : n) ? e : p.fG[p.R8.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === f.BRT.POPOUT;
    }
    render() {
        let {
                maxX: e,
                maxY: t,
                dockedRect: n,
                hidden: r,
                roundCorners: a,
                className: s,
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
            (0, i.jsxs)(u.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: o()(_.GE, s, {
                    [_.R]: r,
                    [_.Vq]: a,
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
                        ? (0, i.jsx)(I, {
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
            h(this, "state", { isResizing: !1 }),
            h(this, "_draggable", void 0),
            h(this, "_innerDivRef", a.createRef()),
            h(this, "_resizeObserver", void 0),
            h(this, "_width", null),
            h(this, "_boundWidth", 0),
            h(this, "_boundHeight", 0),
            h(this, "_velocityX", 0),
            h(this, "_velocityY", 0),
            h(this, "_lastMoveTime", void 0),
            h(this, "_lastMoveX", 0),
            h(this, "_lastMoveY", 0),
            h(this, "ensureIsInPosition", () => {
                this.setPosition(this.props.position);
            }),
            h(this, "ensureWidth", () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let a = S(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            h(this, "handleSetInnerDivRef", (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)),
                        null == (n = this._resizeObserver) || n.observe(e);
                }
            }),
            h(this, "handleSetDraggableRef", (e) => {
                this._draggable = e;
            }),
            h(this, "handleResize", (e) => {
                (this._width = e), this.state.isResizing || this.setState({ isResizing: !0 });
            }),
            h(this, "handleResizeEnd", (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = S(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            h(this, "handleDragStart", (e, t) => {
                var n, r;
                (this._velocityX = 0),
                    (this._velocityY = 0),
                    (this._lastMoveX = e),
                    (this._lastMoveY = t),
                    (this._lastMoveTime = new Date()),
                    null == (n = (r = this.props).onDragStart) || n.call(r, e, t);
            }),
            h(this, "handleDrag", (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r &&
                    ((this._velocityX = (e - this._lastMoveX) / r),
                    (this._velocityY = (t - this._lastMoveY) / r),
                    (this._lastMoveX = e),
                    (this._lastMoveY = t),
                    (this._lastMoveTime = n));
            }),
            h(this, "handleDragEnd", (e, t) => {
                var n, r;
                let i,
                    { maxX: a, maxY: s } = this.props,
                    o = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    l = !0,
                    c = !0;
                if (
                    (o.x > a / 2 && (c = !1),
                    o.y > s / 2 && (l = !1),
                    (i =
                        l && c
                            ? f.CUs.TOP_LEFT
                            : l && !c
                              ? f.CUs.TOP_RIGHT
                              : !l && c
                                ? f.CUs.BOTTOM_LEFT
                                : f.CUs.BOTTOM_RIGHT),
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
h(T, "defaultProps", {
    hidden: !1,
    roundCorners: !0,
});
let C = (e) => {
        let {
                selectedPIPWindow: t,
                pipWindows: n,
                pipWidth: r,
                maxX: s,
                maxY: l,
                onWindowMove: c,
                onWindowResize: u,
                dockedRect: p,
                pictureInPictureComponents: h,
                appContext: g,
                roundCorners: E,
                resizeConfig: A,
                className: v,
                getDockedRectPositionY: S,
            } = e,
            [I, C] = a.useState(!1),
            N = a.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== f.o1q.ACTIVITY && e.component !== f.o1q.FRAME)
                                  return null;
                              let n = "string" == typeof e.component ? h[e.component] : e.component;
                              return (0, i.jsx)(n, m({ width: r }, e.props), e.id);
                          }),
                [n, t, r, h],
            ),
            R = a.useCallback(() => {
                C(!0);
            }, []),
            w = a.useCallback(() => {
                C(!1);
            }, []),
            P = a.useMemo(() => n.some((e) => e.component === f.o1q.ACTIVITY), [n]),
            D = a.useMemo(() => n.some((e) => e.component === f.o1q.FRAME), [n]);
        return null == t
            ? (0, i.jsx)(d.Ay, { children: (0, i.jsx)("div", { className: _._I }) })
            : (0, i.jsx)(d.Ay, {
                  children: (0, i.jsx)("div", {
                      className: o()(_._I, { [_.cB]: I }, v),
                      children: (0, i.jsx)(T, {
                          appContext: g,
                          position: t.position,
                          id: t.id,
                          hidden: t.hidden,
                          onMove: c,
                          onResize: u,
                          onDragStart: R,
                          onDragEnd: w,
                          maxX: s,
                          maxY: l,
                          width: r,
                          dockedRect: p,
                          getDockedRectPositionY: S,
                          edgeOffsetTop: b,
                          edgeOffsetBottom: y,
                          edgeOffsetLeft: O,
                          edgeOffsetRight: b,
                          roundCorners: E,
                          resizeConfig: P || D ? void 0 : A,
                          children: N,
                      }),
                  }),
              });
    },
    N = a.memo(C);
