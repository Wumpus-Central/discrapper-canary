n.d(t, {
    A: () => I,
    P: () => A,
}),
    n(896048),
    n(65821);
var i,
    r,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    u = n(353709),
    c = n(52133),
    d = n(203982),
    h = n(5463),
    p = n(652215),
    f = n(18337);

function g(e, t, n) {
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var A =
    (((r = {}).MOVE = "MOVE"),
    (r.RESIZE_NORTH = "RESIZE_NORTH"),
    (r.RESIZE_WEST = "RESIZE_WEST"),
    (r.RESIZE_EAST = "RESIZE_EAST"),
    (r.RESIZE_SOUTH = "RESIZE_SOUTH"),
    (r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
    (r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
    (r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
    (r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST"),
    r);
let v = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);

function b(e, t, n) {
    let { width: i, height: r, fixed: l } = e;
    return {
        width: "auto" === i ? "auto" : Math.max(t, i),
        height: "auto" === r ? "auto" : Math.max(n, r),
        fixed: l,
    };
}

function E(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        null == n && null == r && (n = 0),
        null == t && null == i && (t = 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: r,
        }
    );
}

function O(e) {
    return "auto" === e || null == e ? "auto" : "".concat(e, "px");
}

function x(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}

function _(e, t) {
    let { top: n, left: i, bottom: r, right: l } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return {
                bottom: r,
                left: i,
                right: void 0,
                top: void 0,
            };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return {
                bottom: r,
                right: l,
                left: void 0,
                top: void 0,
            };
        case "RESIZE_SOUTH_EAST":
            return {
                top: n,
                left: i,
                bottom: void 0,
                right: void 0,
            };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return {
                top: n,
                right: l,
                bottom: void 0,
                left: void 0,
            };
        default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
    }
}

function S(e) {
    let { computedSize: t } = e;
    return t;
}
class I extends (i = a.Component) {
    shouldConstrainAutoSizeToExplicitResizeEvents() {
        let { constrainAutoSizeToExplicitResizeEvents: e } = this.props;
        return !!e && ("auto" === this.requestedSize.width || "auto" === this.requestedSize.height);
    }
    scheduleConstrainedAutoSizeUpdate() {
        let { targetWindow: e } = this.props;
        this.shouldConstrainAutoSizeToExplicitResizeEvents() &&
            (null != this.constrainedAutoSizeRaf && e.cancelAnimationFrame(this.constrainedAutoSizeRaf),
            (this.constrainedAutoSizeRaf = e.requestAnimationFrame(() => {
                (this.constrainedAutoSizeRaf = null), this.applyConstrainedAutoSizeFromDOM();
            })));
    }
    applyConstrainedAutoSizeFromDOM() {
        if (!this.shouldConstrainAutoSizeToExplicitResizeEvents()) return;
        if (null != this.state.operation) {
            this.pendingConstrainedAutoSizeUpdate = !0;
            return;
        }
        let e = this.ref.current;
        if (null == e) return;
        let { minSize: t } = this.props,
            n = Math.max(t.width, Math.round(e.offsetWidth)),
            i = Math.max(t.height, Math.round(e.offsetHeight)),
            r = "auto" === this.requestedSize.width ? n : this.requestedSize.width,
            l = "auto" === this.requestedSize.height ? i : this.requestedSize.height;
        this.setDOMSize(
            {
                width: r,
                height: l,
                fixed: this.requestedSize.fixed,
            },
            !0,
        );
    }
    shouldComponentUpdate(e, t) {
        return (
            !(0, c.A)(t, this.state) ||
            !(0, c.A)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, c.A)(e.anchor, this.props.anchor) ||
            !(0, c.A)(e.size, this.props.size) ||
            !(0, c.A)(e.minSize, this.props.minSize) ||
            !(0, c.A)(e.container, this.props.container)
        );
    }
    componentDidMount() {
        this.setDOMPositions(E(this.props.anchor)),
            (this.requestedSize = b(this.props.size, this.props.minSize.width, this.props.minSize.height)),
            this.setDOMSize(this.requestedSize),
            this.shouldConstrainAutoSizeToExplicitResizeEvents() &&
                (this.scheduleConstrainedAutoSizeUpdate(),
                this.props.targetWindow.addEventListener("resize", this.handleWindowResize)),
            d._.subscribe(p.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == this.state.operation &&
            ((0, c.A)(this.props.anchor, e.anchor) || this.setDOMPositions(E(this.props.anchor)),
            (0, c.A)(this.props.size, e.size) ||
                ((this.requestedSize = b(this.props.size, this.props.minSize.width, this.props.minSize.height)),
                this.setDOMSize(this.requestedSize),
                this.scheduleConstrainedAutoSizeUpdate()));
    }
    componentWillUnmount() {
        this.handleOperationEnd(),
            null != this.constrainedAutoSizeRaf &&
                (this.props.targetWindow.cancelAnimationFrame(this.constrainedAutoSizeRaf),
                (this.constrainedAutoSizeRaf = null)),
            this.props.targetWindow.removeEventListener("resize", this.handleWindowResize),
            d._.unsubscribe(p.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: r, maxY: l, minX: a, minY: s },
                onDragStart: o,
                onDrag: u,
                snapOrientation: c = !0,
            },
            dragState: { offsetX: d, offsetY: p },
            state: { operationStarted: f },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), a)), (t = Math.max(Math.min(l, t), s));
        let { width: g, height: m } = x(n, this.size),
            y = t - p,
            A = e - d,
            v = (0, h.fh)(
                (0, h.Ly)(
                    {
                        top: y,
                        left: A,
                        bottom: void 0,
                        right: void 0,
                    },
                    r,
                    l,
                    g,
                    m,
                ),
            ),
            b = c ? (0, h.h1)(v) : _("RESIZE_SOUTH_EAST", v);
        this.setDOMPositions(b),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != b.top,
                    anchorLeftOverride: null != b.left,
                },
                () => {
                    f || null == o || o(), null != u && u(i, "MOVE", this.anchor, this.size);
                },
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: l, minX: a, minY: s },
                    onDragStart: o,
                    onDrag: u,
                    resizeValidation: d = S,
                },
                state: { operation: p, operationStarted: f },
            } = this,
            { startX: g, startY: A } = this.dragState,
            v = 0,
            b = 0;
        if (null == p) return;
        switch (((e = Math.max(Math.min(r, e), a)), (t = Math.max(Math.min(l, t), s)), p)) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                v -= g - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                v += g - e;
        }
        switch (p) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                b -= A - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                b += A - t;
        }
        let E = d({
                padding: 8,
                borderWidth: 2,
                operation: p,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + v, i.width),
                    height: Math.max(this.dragState.offsetHeight + b, i.height),
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight,
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords,
            }),
            O = (0, h.af)(
                (0, h.fh)((0, h.Ly)(this.dragState.dragOrientedCoords, r, l, E.width, E.height)),
                this.dragState.dragOrientedCoords,
            );
        this.setDOMSize(
            y(m({}, E), {
                fixed: this.size.fixed,
            }),
            !0,
        ),
            (0, c.A)(O, this.dragState.dragOrientedCoords) ||
                ((this.dragState.dragOrientedCoords = O), this.setDOMPositions(this.dragState.dragOrientedCoords)),
            f ||
                (null != o && o(),
                this.setState({
                    operationStarted: !0,
                })),
            null != u && u(n, p, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: l } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: r,
        }),
            null != l && ((l.style.top = O(t)), (l.style.bottom = O(i)), (l.style.left = O(n)), (l.style.right = O(r)));
    }
    setDOMSize(e) {
        let { width: t, height: n, fixed: i } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        (t = "auto" !== this.size.width || r ? t : "auto"),
            (n = "auto" !== this.size.height || r ? n : "auto"),
            (this.size = {
                width: t,
                height: n,
                fixed: i,
            }),
            null != l && ((l.style.width = O(t)), (l.style.height = O(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: o()(f.M$, {
                                      [f.An]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, l.jsx)("div", {
                                  className: o()(f.Q8, {
                                      [f.An]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: o()(f.cz, {
                                      [f.zC]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: o()(f._J, {
                                      [f.zC]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: o()(f.DS, {
                                      [f.Ke]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: o()(f.Bc, {
                                      [f.UJ]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: o()(f.rL, {
                                      [f.UJ]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: o()(f.Rl, {
                                      [f.Ke]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    renderExtras() {
        let {
                props: { renderExtras: e, anchor: t },
                setLockExtras: n,
            } = this,
            i = null == e ? void 0 : e(n);
        return null != i
            ? (0, l.jsx)("div", {
                  className: o()({
                      [f.Q4]: !0,
                      [f.VO]: null != t.bottom && null == t.top,
                      [f.ao]: null != t.right && null == t.left,
                  }),
                  children: i,
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: r = 2, borderRadius: l = 12 },
            state: { operation: a },
        } = this;
        return m({}, t, {
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: r,
            padding: i,
            borderRadius: l + r + i,
            zIndex: null != a ? 1e3 : void 0,
            visibility: e ? "hidden" : void 0,
        });
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: r },
            size: l,
            anchor: a,
            setLockExtras: s,
            state: { anchorTopOverride: o, anchorLeftOverride: u },
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != o ? o : null != a.top,
            anchorLeft: null != u ? u : null != a.left,
            size: l,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: r,
            hidden: t,
            showEmpty: this.state.lockExtras,
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i, forceShowExtras: r },
            state: { operationStarted: a, lockExtras: s },
        } = this;
        return (0, l.jsxs)(u.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: o()(
                {
                    [f.iE]: !0,
                    [f.MQ]: a,
                    [f.YR]: !n,
                    [f.sG]: r && n,
                    [f.vP]: s,
                },
                i,
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()],
        });
    }
    constructor(e) {
        super(e),
            g(this, "anchor", void 0),
            g(this, "requestedSize", void 0),
            g(this, "size", void 0),
            g(this, "ref", a.createRef()),
            g(this, "constrainedAutoSizeRaf", null),
            g(this, "pendingConstrainedAutoSizeUpdate", !1),
            g(this, "dragState", {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0,
                dragOrientedCoords: {
                    top: 0,
                    left: 0,
                },
            }),
            g(this, "state", {
                lockExtras: !0,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0,
            }),
            g(this, "handleWindowResize", () => {
                this.applyConstrainedAutoSizeFromDOM();
            }),
            g(this, "handleShowUI", (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            g(this, "handleMouseDown", (e) => {
                var t;
                let n = e.target;
                if (
                    (null == n || null == (t = n.closest) ? void 0 : t.call(n, '[data-dnd-drag-handle="true"]')) != null
                )
                    return;
                let { dragAnywhere: i } = this.props,
                    { current: r } = this.ref;
                null != r && e.button === p.hE4.PRIMARY && i && this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            g(this, "handleMouseMove", (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: l, operationStarted: a },
                    } = this;
                !(null == l || (!a && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3)) &&
                    ("MOVE" === l ? this.handleDragMove(t, n) : v.has(l) && this.handleResizeMove(t, n));
            }),
            g(this, "handleOperationStart", (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: l,
                        container: { maxX: a, maxY: s },
                    },
                } = this;
                if (null == i || !l) return;
                let { width: o, height: u } = x(i, this.size),
                    c = (0, h.Ly)(this.anchor, a, s, o, u);
                if ("MOVE" === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t,
                        };
                    })(c);
                    this.dragState = y(m({}, this.dragState), {
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i,
                    });
                } else {
                    let i = _(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = y(m({}, this.dragState), {
                            startX: t,
                            startY: n,
                            offsetWidth: o,
                            offsetHeight: u,
                            dragOrientedCoords: i,
                        }));
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1,
                    },
                    () => {
                        r.addEventListener("mousemove", this.handleMouseMove),
                            r.addEventListener("mouseup", this.handleOperationEnd);
                    },
                );
            }),
            g(this, "handleOperationEnd", () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener("mousemove", this.handleMouseMove),
                    n.removeEventListener("mouseup", this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props,
                              i =
                                  this.shouldConstrainAutoSizeToExplicitResizeEvents() && "MOVE" === e
                                      ? this.requestedSize
                                      : this.size;
                          t(e, n, this.anchor, i, x(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = x(this.ref.current, this.size),
                        l = (0, h.Ly)(this.anchor, e, t, n, r),
                        a = (0, h.h1)(l);
                    this.setDOMPositions(a),
                        this.setDOMSize({
                            width: n,
                            height: r,
                            fixed: this.size.fixed,
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1,
                    },
                    () => {
                        null == r || r(),
                            this.pendingConstrainedAutoSizeUpdate &&
                                ((this.pendingConstrainedAutoSizeUpdate = !1),
                                this.scheduleConstrainedAutoSizeUpdate());
                    },
                );
            }),
            g(this, "setLockExtras", (e) => {
                this.setState({
                    lockExtras: e,
                });
            }),
            (this.anchor = E(e.anchor)),
            (this.requestedSize = b(e.size, e.minSize.width, e.minSize.height)),
            (this.size = this.requestedSize);
    }
}
g(I, "Operations", A);
