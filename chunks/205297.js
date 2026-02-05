"use strict";
n.d(t, { A: () => C, S: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(761929),
    u = n(483517),
    c = n(699426),
    d = n(652215),
    _ = n(806931),
    f = n(315253);
let p = 200,
    h = 40,
    m = 80,
    g = 132,
    E = 80,
    A = { [d.CUs.TOP_RIGHT]: f.En, [d.CUs.TOP_LEFT]: f.rG, [d.CUs.BOTTOM_LEFT]: f.j$, [d.CUs.BOTTOM_RIGHT]: f.Ue },
    I = {
        [d.CUs.TOP_RIGHT]: l.R.HORIZONTAL_LEFT,
        [d.CUs.TOP_LEFT]: l.R.HORIZONTAL_RIGHT,
        [d.CUs.BOTTOM_LEFT]: l.R.HORIZONTAL_RIGHT,
        [d.CUs.BOTTOM_RIGHT]: l.R.HORIZONTAL_LEFT,
    };
function T(e, t) {
    let n = Math.round(e / h) * h;
    return (0, o.clamp)(n, t.minWidth, t.maxWidth);
}
function y(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, resizeConfig: o, position: u } = e,
        c = (0, l.A)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + h / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: I[u],
            usePointerEvents: !0,
        }),
        d = i.useCallback(
            (e) => {
                e.stopPropagation(), c(e);
            },
            [c],
        );
    return (0, r.jsx)("div", { onMouseDown: d, className: s()(f.Di, A[u]) });
}
class S extends i.PureComponent {
    static defaultProps = { hidden: !1, roundCorners: !0 };
    state = { isResizing: !1 };
    _draggable;
    _innerDivRef = i.createRef();
    _resizeObserver;
    _width = null;
    _boundWidth = 0;
    _boundHeight = 0;
    _velocityX = 0;
    _velocityY = 0;
    _lastMoveTime;
    _lastMoveX = 0;
    _lastMoveY = 0;
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            let t = this._width ?? e.width ?? this.props.width;
            (this._width = this.props.width),
                null != this._innerDivRef.current &&
                    (Math.abs(t - this._width) > h && (this._innerDivRef.current.style.transition = "none"),
                    (this._innerDivRef.current.style.width = `${this.props.width}px`));
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
        this._resizeObserver?.disconnect();
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
                getDockedRectPositionY: u,
            } = this.props,
            c = Math.round(n),
            _ = Math.round(o - i - this._boundHeight),
            f = Math.round(r),
            p = Math.round(s - a - this._boundWidth);
        if (null != l) return { y: u?.(l.y) ?? l.y ?? 0, x: l?.x ?? 0 };
        switch (e) {
            case d.CUs.TOP_LEFT:
                return { y: c, x: f };
            case d.CUs.BOTTOM_LEFT:
                return { y: _, x: f };
            case d.CUs.TOP_RIGHT:
                return { y: c, x: p };
            default:
                return { y: _, x: p };
        }
    }
    setPosition(e) {
        let { x: t, y: n } = this.getPosition(e);
        this._draggable?.setPosition(t, n);
    }
    animateToPosition(e, t) {
        let { x: n, y: r } = this.getPosition(e);
        this._draggable?.animateToPosition(n, r, {}, t);
    }
    ensureIsInPosition = () => {
        this.setPosition(this.props.position);
    };
    ensureWidth = () => {
        let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
        if (null == i) return;
        let a = T(r - (t + n), i);
        this.getWidth() > a && ((this._width = a), e?.(a));
    };
    calculateDecayingPosition(e, t, n, r) {
        return { x: e + n * p, y: t + r * p };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case d.CUs.TOP_LEFT:
            case d.CUs.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case d.CUs.TOP_LEFT:
            case d.CUs.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return this._width ?? e ?? _.fG[_.R8.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === d.BRT.POPOUT;
    }
    handleSetInnerDivRef = (e) => {
        this._innerDivRef.current = e;
        let t = e?.ownerDocument.defaultView;
        null != e &&
            null != t &&
            ((this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), this._resizeObserver?.observe(e));
    };
    handleSetDraggableRef = (e) => {
        this._draggable = e;
    };
    handleResize = (e) => {
        (this._width = e), this.state.isResizing || this.setState({ isResizing: !0 });
    };
    handleResizeEnd = (e) => {
        let { onResize: t, resizeConfig: n } = this.props;
        if (null == n) return;
        let r = T(e, n);
        (this._width = r), t?.(r), this.setState({ isResizing: !1 }), this.ensureWidth();
    };
    handleDragStart = (e, t) => {
        (this._velocityX = 0),
            (this._velocityY = 0),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = new Date()),
            this.props.onDragStart?.(e, t);
    };
    handleDrag = (e, t) => {
        let n = new Date(),
            r = Number(n) - Number(this._lastMoveTime);
        0 !== r &&
            ((this._velocityX = (e - this._lastMoveX) / r),
            (this._velocityY = (t - this._lastMoveY) / r),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = n));
    };
    handleDragEnd = (e, t) => {
        let n,
            { maxX: r, maxY: i } = this.props,
            a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            s = !0,
            o = !0;
        if (
            (a.x > r / 2 && (o = !1),
            a.y > i / 2 && (s = !1),
            (n =
                s && o ? d.CUs.TOP_LEFT : s && !o ? d.CUs.TOP_RIGHT : !s && o ? d.CUs.BOTTOM_LEFT : d.CUs.BOTTOM_RIGHT),
            this.animateToPosition(n, this.ensureIsInPosition),
            n !== this.props.position)
        ) {
            let { id: e, onMove: t } = this.props;
            t?.(e, n);
        }
        this.props.onDragEnd?.(e, t);
    };
    render() {
        let {
                maxX: e,
                maxY: t,
                dockedRect: n,
                hidden: i,
                roundCorners: a,
                className: o,
                position: l,
                resizeConfig: c,
            } = this.props,
            d = this.getWidth(),
            _ = {};
        return (
            null != n
                ? (_ = { transform: `translate3d(${n.x}, ${n.y}, 0)`, width: n.width, height: n.height })
                : null != c &&
                  (_ = { width: d, transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out" }),
            (0, r.jsxs)(u.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(f.GE, o, { [f.R]: i, [f.Vq]: a }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, r.jsx)("div", { ref: this.handleSetInnerDivRef, style: _, children: this.props.children }),
                    null != c
                        ? (0, r.jsx)(y, {
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
}
let v = (e) => {
        let {
                selectedPIPWindow: t,
                pipWindows: n,
                pipWidth: a,
                maxX: o,
                maxY: l,
                onWindowMove: u,
                onWindowResize: _,
                dockedRect: p,
                pictureInPictureComponents: h,
                appContext: A,
                roundCorners: I,
                resizeConfig: T,
                className: y,
                getDockedRectPositionY: v,
            } = e,
            [C, b] = i.useState(!1),
            N = i.useMemo(
                () =>
                    null == t
                        ? null
                        : n.map((e) => {
                              if (e.id !== t.id && e.component !== d.o1q.ACTIVITY && e.component !== d.o1q.FRAME)
                                  return null;
                              let n = "string" == typeof e.component ? h[e.component] : e.component;
                              return (0, r.jsx)(n, { width: a, ...e.props }, e.id);
                          }),
                [n, t, a, h],
            ),
            R = i.useCallback(() => {
                b(!0);
            }, []),
            O = i.useCallback(() => {
                b(!1);
            }, []),
            D = i.useMemo(() => n.some((e) => e.component === d.o1q.ACTIVITY), [n]),
            L = i.useMemo(() => n.some((e) => e.component === d.o1q.FRAME), [n]);
        return null == t
            ? (0, r.jsx)(c.Ay, { children: (0, r.jsx)("div", { className: f._I }) })
            : (0, r.jsx)(c.Ay, {
                  children: (0, r.jsx)("div", {
                      className: s()(f._I, { [f.cB]: C }, y),
                      children: (0, r.jsx)(S, {
                          appContext: A,
                          position: t.position,
                          id: t.id,
                          hidden: t.hidden,
                          onMove: u,
                          onResize: _,
                          onDragStart: R,
                          onDragEnd: O,
                          maxX: o,
                          maxY: l,
                          width: a,
                          dockedRect: p,
                          getDockedRectPositionY: v,
                          edgeOffsetTop: m,
                          edgeOffsetBottom: g,
                          edgeOffsetLeft: E,
                          edgeOffsetRight: m,
                          roundCorners: I,
                          resizeConfig: D || L ? void 0 : T,
                          children: N,
                      }),
                  }),
              });
    },
    C = i.memo(v);
