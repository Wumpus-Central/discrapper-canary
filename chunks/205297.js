"use strict";
n.d(t, { A: () => T, S: () => p });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n(761929),
    d = n(483517),
    c = n(699426),
    u = n(652215),
    _ = n(806931),
    E = n(155819);
let A = { [u.CUs.TOP_RIGHT]: E.En, [u.CUs.TOP_LEFT]: E.rG, [u.CUs.BOTTOM_LEFT]: E.j$, [u.CUs.BOTTOM_RIGHT]: E.Ue },
    h = {
        [u.CUs.TOP_RIGHT]: o.R.HORIZONTAL_LEFT,
        [u.CUs.TOP_LEFT]: o.R.HORIZONTAL_RIGHT,
        [u.CUs.BOTTOM_LEFT]: o.R.HORIZONTAL_RIGHT,
        [u.CUs.BOTTOM_RIGHT]: o.R.HORIZONTAL_LEFT,
    };
function I(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function f(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, resizeConfig: l, position: d } = e,
        c = (0, o.A)({
            minDimension: l.minWidth,
            maxDimension: l.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: h[d],
            usePointerEvents: !0,
        }),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), c(e);
            },
            [c],
        );
    return (0, i.jsx)("div", { onMouseDown: u, className: s()(E.Di, A[d]) });
}
class p extends r.PureComponent {
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
                edgeOffsetRight: a,
                maxX: s,
                maxY: l,
                dockedRect: o,
                getDockedRectPositionY: d,
            } = this.props,
            c = Math.round(n),
            _ = Math.round(l - r - this._boundHeight),
            E = Math.round(i),
            A = Math.round(s - a - this._boundWidth);
        if (null != o) return { y: d?.(o.y) ?? o.y ?? 0, x: o?.x ?? 0 };
        switch (e) {
            case u.CUs.TOP_LEFT:
                return { y: c, x: E };
            case u.CUs.BOTTOM_LEFT:
                return { y: _, x: E };
            case u.CUs.TOP_RIGHT:
                return { y: c, x: A };
            default:
                return { y: _, x: A };
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
        let a = I(i - (t + n), r);
        this.getWidth() > a && ((this._width = a), e?.(a));
    };
    calculateDecayingPosition(e, t, n, i) {
        return { x: e + 200 * n, y: t + 200 * i };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case u.CUs.TOP_LEFT:
            case u.CUs.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case u.CUs.TOP_LEFT:
            case u.CUs.TOP_RIGHT:
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
        return this.props.appContext === u.BRT.POPOUT;
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
        let i = I(e, n);
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
            a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            s = !0,
            l = !0;
        if (
            (a.x > i / 2 && (l = !1),
            a.y > r / 2 && (s = !1),
            (n =
                s && l ? u.CUs.TOP_LEFT : s && !l ? u.CUs.TOP_RIGHT : !s && l ? u.CUs.BOTTOM_LEFT : u.CUs.BOTTOM_RIGHT),
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
                roundCorners: a,
                className: l,
                position: o,
                resizeConfig: c,
            } = this.props,
            u = this.getWidth(),
            _ = {};
        return (
            null != n
                ? (_ = { transform: `translate3d(${n.x}, ${n.y}, 0)`, width: n.width, height: n.height })
                : null != c &&
                  (_ = { width: u, transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out" }),
            (0, i.jsxs)(d.A, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(E.GE, l, { [E.R]: r, [E.Vq]: a }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)("div", { ref: this.handleSetInnerDivRef, style: _, children: this.props.children }),
                    null != c
                        ? (0, i.jsx)(f, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: c,
                              position: o,
                          })
                        : null,
                ],
            })
        );
    }
}
let T = r.memo(function (e) {
    let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: a,
            maxX: l,
            maxY: o,
            onWindowMove: d,
            onWindowResize: _,
            dockedRect: A,
            pictureInPictureComponents: h,
            appContext: I,
            roundCorners: f,
            resizeConfig: T,
            className: m,
            getDockedRectPositionY: g,
        } = e,
        [S, N] = r.useState(!1),
        C = r.useMemo(
            () =>
                null == t
                    ? null
                    : n.map((e) => {
                          if (e.id !== t.id && e.component !== u.o1q.ACTIVITY && e.component !== u.o1q.FRAME)
                              return null;
                          let n = "string" == typeof e.component ? h[e.component] : e.component;
                          return (0, i.jsx)(n, { width: a, ...e.props }, e.id);
                      }),
            [n, t, a, h],
        ),
        R = r.useCallback(() => {
            N(!0);
        }, []),
        O = r.useCallback(() => {
            N(!1);
        }, []),
        L = r.useMemo(() => n.some((e) => e.component === u.o1q.ACTIVITY), [n]),
        y = r.useMemo(() => n.some((e) => e.component === u.o1q.FRAME), [n]);
    return null == t
        ? (0, i.jsx)(c.Ay, { children: (0, i.jsx)("div", { className: E._I }) })
        : (0, i.jsx)(c.Ay, {
              children: (0, i.jsx)("div", {
                  className: s()(E._I, { [E.cB]: S }, m),
                  children: (0, i.jsx)(p, {
                      appContext: I,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: d,
                      onResize: _,
                      onDragStart: R,
                      onDragEnd: O,
                      maxX: l,
                      maxY: o,
                      width: a,
                      dockedRect: A,
                      getDockedRectPositionY: g,
                      edgeOffsetTop: 80,
                      edgeOffsetBottom: 132,
                      edgeOffsetLeft: 80,
                      edgeOffsetRight: 80,
                      roundCorners: f,
                      resizeConfig: L || y ? void 0 : T,
                      children: C,
                  }),
              }),
          });
});
