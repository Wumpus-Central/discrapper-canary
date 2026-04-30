"use strict";
n.d(t, { A: () => A, S: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n(761929),
    u = n(483517),
    c = n(699426),
    d = n(652215),
    _ = n(806931),
    f = n(201181);
let h = { [d.CUs.TOP_RIGHT]: f.En, [d.CUs.TOP_LEFT]: f.rG, [d.CUs.BOTTOM_LEFT]: f.j$, [d.CUs.BOTTOM_RIGHT]: f.Ue },
    p = {
        [d.CUs.TOP_RIGHT]: l.R.HORIZONTAL_LEFT,
        [d.CUs.TOP_LEFT]: l.R.HORIZONTAL_RIGHT,
        [d.CUs.BOTTOM_LEFT]: l.R.HORIZONTAL_RIGHT,
        [d.CUs.BOTTOM_RIGHT]: l.R.HORIZONTAL_LEFT,
    };
function E(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, o.clamp)(n, t.minWidth, t.maxWidth);
}
function m(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s, resizeConfig: o, position: u } = e,
        c = (0, l.A)({
            minDimension: o.minWidth,
            maxDimension: o.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: s,
            orientation: p[u],
            usePointerEvents: !0,
        }),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(), c(e);
            },
            [c],
        );
    return (0, i.jsx)("div", { onMouseDown: d, className: a()(f.Di, h[u]) });
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
                edgeOffsetRight: s,
                maxX: a,
                maxY: o,
                dockedRect: l,
                getDockedRectPositionY: u,
            } = this.props,
            c = Math.round(n),
            _ = Math.round(o - r - this._boundHeight),
            f = Math.round(i),
            h = Math.round(a - s - this._boundWidth);
        if (null != l) return { y: u?.(l.y) ?? l.y ?? 0, x: l?.x ?? 0 };
        switch (e) {
            case d.CUs.TOP_LEFT:
                return { y: c, x: f };
            case d.CUs.BOTTOM_LEFT:
                return { y: _, x: f };
            case d.CUs.TOP_RIGHT:
                return { y: c, x: h };
            default:
                return { y: _, x: h };
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
        let s = E(i - (t + n), r);
        this.getWidth() > s && ((this._width = s), e?.(s));
    };
    calculateDecayingPosition(e, t, n, i) {
        return { x: e + 200 * n, y: t + 200 * i };
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
        let i = E(e, n);
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
            s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            a = !0,
            o = !0;
        if (
            (s.x > i / 2 && (o = !1),
            s.y > r / 2 && (a = !1),
            (n =
                a && o ? d.CUs.TOP_LEFT : a && !o ? d.CUs.TOP_RIGHT : !a && o ? d.CUs.BOTTOM_LEFT : d.CUs.BOTTOM_RIGHT),
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
                roundCorners: s,
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
            (0, i.jsxs)(u.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: a()(f.GE, o, { [f.R]: r, [f.Vq]: s }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)("div", { ref: this.handleSetInnerDivRef, style: _, children: this.props.children }),
                    null != c
                        ? (0, i.jsx)(m, {
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
let A = r.memo((e) => {
    let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: s,
            maxX: o,
            maxY: l,
            onWindowMove: u,
            onWindowResize: _,
            dockedRect: h,
            pictureInPictureComponents: p,
            appContext: E,
            roundCorners: m,
            resizeConfig: A,
            className: I,
            getDockedRectPositionY: T,
        } = e,
        [S, N] = r.useState(!1),
        y = r.useMemo(
            () =>
                null == t
                    ? null
                    : n.map((e) => {
                          if (e.id !== t.id && e.component !== d.o1q.ACTIVITY && e.component !== d.o1q.FRAME)
                              return null;
                          let n = "string" == typeof e.component ? p[e.component] : e.component;
                          return (0, i.jsx)(n, { width: s, ...e.props }, e.id);
                      }),
            [n, t, s, p],
        ),
        C = r.useCallback(() => {
            N(!0);
        }, []),
        v = r.useCallback(() => {
            N(!1);
        }, []),
        O = r.useMemo(() => n.some((e) => e.component === d.o1q.ACTIVITY), [n]),
        R = r.useMemo(() => n.some((e) => e.component === d.o1q.FRAME), [n]);
    return null == t
        ? (0, i.jsx)(c.Ay, { children: (0, i.jsx)("div", { className: f._I }) })
        : (0, i.jsx)(c.Ay, {
              children: (0, i.jsx)("div", {
                  className: a()(f._I, { [f.cB]: S }, I),
                  children: (0, i.jsx)(g, {
                      appContext: E,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: u,
                      onResize: _,
                      onDragStart: C,
                      onDragEnd: v,
                      maxX: o,
                      maxY: l,
                      width: s,
                      dockedRect: h,
                      getDockedRectPositionY: T,
                      edgeOffsetTop: 80,
                      edgeOffsetBottom: 132,
                      edgeOffsetLeft: 80,
                      edgeOffsetRight: 80,
                      roundCorners: m,
                      resizeConfig: O || R ? void 0 : A,
                      children: y,
                  }),
              }),
          });
});
