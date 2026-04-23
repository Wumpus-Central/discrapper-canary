n.d(t, { A: () => I, S: () => g });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n(761929),
    d = n(483517),
    u = n(699426),
    c = n(652215),
    h = n(806931),
    E = n(201181);
let _ = { [c.CUs.TOP_RIGHT]: E.En, [c.CUs.TOP_LEFT]: E.rG, [c.CUs.BOTTOM_LEFT]: E.j$, [c.CUs.BOTTOM_RIGHT]: E.Ue },
    p = {
        [c.CUs.TOP_RIGHT]: o.R.HORIZONTAL_LEFT,
        [c.CUs.TOP_LEFT]: o.R.HORIZONTAL_RIGHT,
        [c.CUs.BOTTOM_LEFT]: o.R.HORIZONTAL_RIGHT,
        [c.CUs.BOTTOM_RIGHT]: o.R.HORIZONTAL_LEFT,
    };
function A(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, s.clamp)(n, t.minWidth, t.maxWidth);
}
function f(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l, resizeConfig: s, position: d } = e,
        u = (0, o.A)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: p[d],
            usePointerEvents: !0,
        }),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u],
        );
    return (0, i.jsx)("div", { onMouseDown: c, className: a()(E.Di, _[d]) });
}
class g extends r.PureComponent {
    static defaultProps = { hidden: !1, roundCorners: !0 };
    state = { isResizing: !1 };
    _draggable;
    _innerDivRef = r.createRef();
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
                edgeOffsetLeft: i,
                edgeOffsetBottom: r,
                edgeOffsetRight: l,
                maxX: a,
                maxY: s,
                dockedRect: o,
                getDockedRectPositionY: d,
            } = this.props,
            u = Math.round(n),
            h = Math.round(s - r - this._boundHeight),
            E = Math.round(i),
            _ = Math.round(a - l - this._boundWidth);
        if (null != o) return { y: d?.(o.y) ?? o.y ?? 0, x: o?.x ?? 0 };
        switch (e) {
            case c.CUs.TOP_LEFT:
                return { y: u, x: E };
            case c.CUs.BOTTOM_LEFT:
                return { y: h, x: E };
            case c.CUs.TOP_RIGHT:
                return { y: u, x: _ };
            default:
                return { y: h, x: _ };
        }
    }
    setPosition(e) {
        let { x: t, y: n } = this.getPosition(e);
        this._draggable?.setPosition(t, n);
    }
    animateToPosition(e, t) {
        let { x: n, y: i } = this.getPosition(e);
        this._draggable?.animateToPosition(n, i, {}, t);
    }
    ensureIsInPosition = () => {
        this.setPosition(this.props.position);
    };
    ensureWidth = () => {
        let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: i, resizeConfig: r } = this.props;
        if (null == r) return;
        let l = A(i - (t + n), r);
        this.getWidth() > l && ((this._width = l), e?.(l));
    };
    calculateDecayingPosition(e, t, n, i) {
        return { x: e + 200 * n, y: t + 200 * i };
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
        return this._width ?? e ?? h.fG[h.R8.VIDEO];
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
        let i = A(e, n);
        (this._width = i), t?.(i), this.setState({ isResizing: !1 }), this.ensureWidth();
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
            i = Number(n) - Number(this._lastMoveTime);
        0 !== i &&
            ((this._velocityX = (e - this._lastMoveX) / i),
            (this._velocityY = (t - this._lastMoveY) / i),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = n));
    };
    handleDragEnd = (e, t) => {
        let n,
            { maxX: i, maxY: r } = this.props,
            l = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            a = !0,
            s = !0;
        if (
            (l.x > i / 2 && (s = !1),
            l.y > r / 2 && (a = !1),
            (n =
                a && s ? c.CUs.TOP_LEFT : a && !s ? c.CUs.TOP_RIGHT : !a && s ? c.CUs.BOTTOM_LEFT : c.CUs.BOTTOM_RIGHT),
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
                hidden: r,
                roundCorners: l,
                className: s,
                position: o,
                resizeConfig: u,
            } = this.props,
            c = this.getWidth(),
            h = {};
        return (
            null != n
                ? (h = { transform: `translate3d(${n.x}, ${n.y}, 0)`, width: n.width, height: n.height })
                : null != u &&
                  (h = { width: c, transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out" }),
            (0, i.jsxs)(d.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: a()(E.GE, s, { [E.R]: r, [E.Vq]: l }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)("div", { ref: this.handleSetInnerDivRef, style: h, children: this.props.children }),
                    null != u
                        ? (0, i.jsx)(f, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: u,
                              position: o,
                          })
                        : null,
                ],
            })
        );
    }
}
let I = r.memo((e) => {
    let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: l,
            maxX: s,
            maxY: o,
            onWindowMove: d,
            onWindowResize: h,
            dockedRect: _,
            pictureInPictureComponents: p,
            appContext: A,
            roundCorners: f,
            resizeConfig: I,
            className: T,
            getDockedRectPositionY: S,
        } = e,
        [m, O] = r.useState(!1),
        C = r.useMemo(
            () =>
                null == t
                    ? null
                    : n.map((e) => {
                          if (e.id !== t.id && e.component !== c.o1q.ACTIVITY && e.component !== c.o1q.FRAME)
                              return null;
                          let n = "string" == typeof e.component ? p[e.component] : e.component;
                          return (0, i.jsx)(n, { width: l, ...e.props }, e.id);
                      }),
            [n, t, l, p],
        ),
        N = r.useCallback(() => {
            O(!0);
        }, []),
        y = r.useCallback(() => {
            O(!1);
        }, []),
        R = r.useMemo(() => n.some((e) => e.component === c.o1q.ACTIVITY), [n]),
        L = r.useMemo(() => n.some((e) => e.component === c.o1q.FRAME), [n]);
    return null == t
        ? (0, i.jsx)(u.Ay, { children: (0, i.jsx)("div", { className: E._I }) })
        : (0, i.jsx)(u.Ay, {
              children: (0, i.jsx)("div", {
                  className: a()(E._I, { [E.cB]: m }, T),
                  children: (0, i.jsx)(g, {
                      appContext: A,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: d,
                      onResize: h,
                      onDragStart: N,
                      onDragEnd: y,
                      maxX: s,
                      maxY: o,
                      width: l,
                      dockedRect: _,
                      getDockedRectPositionY: S,
                      edgeOffsetTop: 80,
                      edgeOffsetBottom: 132,
                      edgeOffsetLeft: 80,
                      edgeOffsetRight: 80,
                      roundCorners: f,
                      resizeConfig: R || L ? void 0 : I,
                      children: C,
                  }),
              }),
          });
});
