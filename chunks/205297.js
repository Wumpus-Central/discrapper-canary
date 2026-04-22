"use strict";
n.d(t, { A: () => A, S: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(761929),
    u = n(483517),
    d = n(699426),
    c = n(652215),
    _ = n(806931),
    f = n(423562);
let E = { [c.CUs.TOP_RIGHT]: f.En, [c.CUs.TOP_LEFT]: f.rG, [c.CUs.BOTTOM_LEFT]: f.j$, [c.CUs.BOTTOM_RIGHT]: f.Ue },
    h = {
        [c.CUs.TOP_RIGHT]: l.R.HORIZONTAL_LEFT,
        [c.CUs.TOP_LEFT]: l.R.HORIZONTAL_RIGHT,
        [c.CUs.BOTTOM_LEFT]: l.R.HORIZONTAL_RIGHT,
        [c.CUs.BOTTOM_RIGHT]: l.R.HORIZONTAL_LEFT,
    };
function p(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, o.clamp)(n, t.minWidth, t.maxWidth);
}
function m(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, resizeConfig: o, position: u } = e,
        d = (0, l.A)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: s,
            orientation: h[u],
            usePointerEvents: !0,
        }),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), d(e);
            },
            [d],
        );
    return (0, r.jsx)("div", { onMouseDown: c, className: a()(f.Di, E[u]) });
}
class g extends i.PureComponent {
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
                    (Math.abs(t - this._width) > 40 && (this._innerDivRef.current.style.transition = "none"),
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
                edgeOffsetRight: s,
                maxX: a,
                maxY: o,
                dockedRect: l,
                getDockedRectPositionY: u,
            } = this.props,
            d = Math.round(n),
            _ = Math.round(o - i - this._boundHeight),
            f = Math.round(r),
            E = Math.round(a - s - this._boundWidth);
        if (null != l) return { y: u?.(l.y) ?? l.y ?? 0, x: l?.x ?? 0 };
        switch (e) {
            case c.CUs.TOP_LEFT:
                return { y: d, x: f };
            case c.CUs.BOTTOM_LEFT:
                return { y: _, x: f };
            case c.CUs.TOP_RIGHT:
                return { y: d, x: E };
            default:
                return { y: _, x: E };
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
        let s = p(r - (t + n), i);
        this.getWidth() > s && ((this._width = s), e?.(s));
    };
    calculateDecayingPosition(e, t, n, r) {
        return { x: e + 200 * n, y: t + 200 * r };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case c.CUs.TOP_LEFT:
            case c.CUs.TOP_RIGHT:
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
        return this.props.appContext === c.BRT.POPOUT;
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
        let r = p(e, n);
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
            s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            a = !0,
            o = !0;
        if (
            (s.x > r / 2 && (o = !1),
            s.y > i / 2 && (a = !1),
            (n =
                a && o ? c.CUs.TOP_LEFT : a && !o ? c.CUs.TOP_RIGHT : !a && o ? c.CUs.BOTTOM_LEFT : c.CUs.BOTTOM_RIGHT),
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
                roundCorners: s,
                className: o,
                position: l,
                resizeConfig: d,
            } = this.props,
            c = this.getWidth(),
            _ = {};
        return (
            null != n
                ? (_ = { transform: `translate3d(${n.x}, ${n.y}, 0)`, width: n.width, height: n.height })
                : null != d &&
                  (_ = { width: c, transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out" }),
            (0, r.jsxs)(u.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: a()(f.GE, o, { [f.R]: i, [f.Vq]: s }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, r.jsx)("div", { ref: this.handleSetInnerDivRef, style: _, children: this.props.children }),
                    null != d
                        ? (0, r.jsx)(m, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: d,
                              position: l,
                          })
                        : null,
                ],
            })
        );
    }
}
let A = i.memo((e) => {
    let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: s,
            maxX: o,
            maxY: l,
            onWindowMove: u,
            onWindowResize: _,
            dockedRect: E,
            pictureInPictureComponents: h,
            appContext: p,
            roundCorners: m,
            resizeConfig: A,
            className: I,
            getDockedRectPositionY: T,
        } = e,
        [S, y] = i.useState(!1),
        N = i.useMemo(
            () =>
                null == t
                    ? null
                    : n.map((e) => {
                          if (e.id !== t.id && e.component !== c.o1q.ACTIVITY && e.component !== c.o1q.FRAME)
                              return null;
                          let n = "string" == typeof e.component ? h[e.component] : e.component;
                          return (0, r.jsx)(n, { width: s, ...e.props }, e.id);
                      }),
            [n, t, s, h],
        ),
        O = i.useCallback(() => {
            y(!0);
        }, []),
        R = i.useCallback(() => {
            y(!1);
        }, []),
        v = i.useMemo(() => n.some((e) => e.component === c.o1q.ACTIVITY), [n]),
        C = i.useMemo(() => n.some((e) => e.component === c.o1q.FRAME), [n]);
    return null == t
        ? (0, r.jsx)(d.Ay, { children: (0, r.jsx)("div", { className: f._I }) })
        : (0, r.jsx)(d.Ay, {
              children: (0, r.jsx)("div", {
                  className: a()(f._I, { [f.cB]: S }, I),
                  children: (0, r.jsx)(g, {
                      appContext: p,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: u,
                      onResize: _,
                      onDragStart: O,
                      onDragEnd: R,
                      maxX: o,
                      maxY: l,
                      width: s,
                      dockedRect: E,
                      getDockedRectPositionY: T,
                      edgeOffsetTop: 80,
                      edgeOffsetBottom: 132,
                      edgeOffsetLeft: 80,
                      edgeOffsetRight: 80,
                      roundCorners: m,
                      resizeConfig: v || C ? void 0 : A,
                      children: N,
                  }),
              }),
          });
});
