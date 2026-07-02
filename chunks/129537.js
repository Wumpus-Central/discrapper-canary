n.d(t, { A: () => v, P: () => g });
var i,
    s = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(580929),
    d = n(52133),
    u = n(625494),
    c = n(5463),
    h = n(652215),
    m = n(381822),
    g =
        (((i = {}).MOVE = "MOVE"),
        (i.RESIZE_NORTH = "RESIZE_NORTH"),
        (i.RESIZE_WEST = "RESIZE_WEST"),
        (i.RESIZE_EAST = "RESIZE_EAST"),
        (i.RESIZE_SOUTH = "RESIZE_SOUTH"),
        (i.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST"),
        (i.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST"),
        (i.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST"),
        (i.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST"),
        i);
let p = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function f(e, t, n) {
    let { width: i, height: s, fixed: r } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === s ? "auto" : Math.max(n, s), fixed: r };
}
function x(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: s }
    );
}
function A(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function E(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function S(e, t) {
    let { top: n, left: i, bottom: s, right: r } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return { bottom: s, left: i, right: void 0, top: void 0 };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return { bottom: s, right: r, left: void 0, top: void 0 };
        case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return { top: n, right: r, bottom: void 0, left: void 0 };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`);
    }
}
function I(e) {
    let { computedSize: t } = e;
    return t;
}
class v extends r.Component {
    static Operations = g;
    anchor;
    requestedSize;
    size;
    ref = r.createRef();
    constrainedAutoSizeRaf = null;
    pendingConstrainedAutoSizeUpdate = !1;
    dragState = {
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        dragOrientedCoords: { top: 0, left: 0 },
    };
    state = {
        lockExtras: !0,
        operation: null,
        operationStarted: !1,
        anchorTopOverride: void 0,
        anchorLeftOverride: void 0,
    };
    constructor(e) {
        super(e),
            (this.anchor = x(e.anchor)),
            (this.requestedSize = f(e.size, e.minSize.width, e.minSize.height)),
            (this.size = this.requestedSize);
    }
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
            s = "auto" === this.requestedSize.width ? n : this.requestedSize.width,
            r = "auto" === this.requestedSize.height ? i : this.requestedSize.height;
        this.setDOMSize({ width: s, height: r, fixed: this.requestedSize.fixed }, !0);
    }
    shouldComponentUpdate(e, t) {
        return (
            !(0, d.A)(t, this.state) ||
            !(0, d.A)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, d.A)(e.anchor, this.props.anchor) ||
            !(0, d.A)(e.size, this.props.size) ||
            !(0, d.A)(e.minSize, this.props.minSize) ||
            !(0, d.A)(e.container, this.props.container)
        );
    }
    componentDidMount() {
        this.setDOMPositions(x(this.props.anchor)),
            (this.requestedSize = f(this.props.size, this.props.minSize.width, this.props.minSize.height)),
            this.setDOMSize(this.requestedSize),
            this.shouldConstrainAutoSizeToExplicitResizeEvents() &&
                (this.scheduleConstrainedAutoSizeUpdate(),
                this.props.targetWindow.addEventListener("resize", this.handleWindowResize)),
            u._.subscribe(h.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == this.state.operation &&
            ((0, d.A)(this.props.anchor, e.anchor) || this.setDOMPositions(x(this.props.anchor)),
            (0, d.A)(this.props.size, e.size) ||
                ((this.requestedSize = f(this.props.size, this.props.minSize.width, this.props.minSize.height)),
                this.setDOMSize(this.requestedSize),
                this.scheduleConstrainedAutoSizeUpdate()));
    }
    componentWillUnmount() {
        this.handleOperationEnd(),
            null != this.constrainedAutoSizeRaf &&
                (this.props.targetWindow.cancelAnimationFrame(this.constrainedAutoSizeRaf),
                (this.constrainedAutoSizeRaf = null)),
            this.props.targetWindow.removeEventListener("resize", this.handleWindowResize),
            u._.unsubscribe(h.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleWindowResize = () => {
        this.applyConstrainedAutoSizeFromDOM();
    };
    handleShowUI = (e) => {
        let { show: t } = e;
        this.setLockExtras(t);
    };
    handleMouseDown = (e) => {
        let t = e.target;
        if (t?.closest?.('[data-dnd-drag-handle="true"]') != null) return;
        let { dragAnywhere: n } = this.props,
            { current: i } = this.ref;
        null != i && e.button === h.hE4.PRIMARY && n && this.handleOperationStart("MOVE", e.clientX, e.clientY);
    };
    handleMouseMove = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { clientX: t, clientY: n } = e,
            {
                dragState: { startX: i, startY: s },
                state: { operation: r, operationStarted: l },
            } = this;
        !(null == r || (!l && Math.pow(i - t, 2) + Math.pow(s - n, 2) < 3)) &&
            ("MOVE" === r ? this.handleDragMove(t, n) : p.has(r) && this.handleResizeMove(t, n));
    };
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleOperationStart = (e, t, n) => {
        let {
            ref: { current: i },
            props: {
                targetWindow: s,
                active: r,
                container: { maxX: l, maxY: a },
            },
        } = this;
        if (null == i || !r) return;
        let { width: o, height: d } = E(i, this.size),
            u = (0, c.Ly)(this.anchor, l, a, o, d);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(u);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = S(e, u);
            this.setDOMPositions(i),
                (this.dragState = {
                    ...this.dragState,
                    startX: t,
                    startY: n,
                    offsetWidth: o,
                    offsetHeight: d,
                    dragOrientedCoords: i,
                });
        }
        this.setState({ operation: e, operationStarted: !1 }, () => {
            s.addEventListener("mousemove", this.handleMouseMove),
                s.addEventListener("mouseup", this.handleOperationEnd);
        });
    };
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: s, maxY: r, minX: l, minY: a },
                onDragStart: o,
                onDrag: d,
                snapOrientation: u = !0,
            },
            dragState: { offsetX: h, offsetY: m },
            state: { operationStarted: g },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(s, e), l)), (t = Math.max(Math.min(r, t), a));
        let { width: p, height: f } = E(n, this.size),
            x = t - m,
            A = e - h,
            I = (0, c.fh)((0, c.Ly)({ top: x, left: A, bottom: void 0, right: void 0 }, s, r, p, f)),
            v = u ? (0, c.h1)(I) : S("RESIZE_SOUTH_EAST", I);
        this.setDOMPositions(v),
            this.setState(
                { operationStarted: !0, anchorTopOverride: null != v.top, anchorLeftOverride: null != v.left },
                () => {
                    g || null == o || o(), null != d && d(i, "MOVE", this.anchor, this.size);
                },
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: s, maxY: r, minX: l, minY: a },
                    onDragStart: o,
                    onDrag: u,
                    resizeValidation: h = I,
                },
                state: { operation: m, operationStarted: g },
            } = this,
            { startX: p, startY: f } = this.dragState,
            x = 0,
            A = 0;
        if (null == m) return;
        switch (((e = Math.max(Math.min(s, e), l)), (t = Math.max(Math.min(r, t), a)), m)) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                x -= p - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                x += p - e;
        }
        switch (m) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                A -= f - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                A += f - t;
        }
        let E = h({
                padding: 8,
                borderWidth: 2,
                operation: m,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + x, i.width),
                    height: Math.max(this.dragState.offsetHeight + A, i.height),
                },
                originSize: { width: this.dragState.offsetWidth, height: this.dragState.offsetHeight },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords,
            }),
            S = (0, c.af)(
                (0, c.fh)((0, c.Ly)(this.dragState.dragOrientedCoords, s, r, E.width, E.height)),
                this.dragState.dragOrientedCoords,
            );
        this.setDOMSize({ ...E, fixed: this.size.fixed }, !0),
            (0, d.A)(S, this.dragState.dragOrientedCoords) ||
                ((this.dragState.dragOrientedCoords = S), this.setDOMPositions(this.dragState.dragOrientedCoords)),
            g || (null != o && o(), this.setState({ operationStarted: !0 })),
            null != u && u(n, m, this.anchor, this.size);
    }
    handleOperationEnd = () => {
        let { operation: e, operationStarted: t } = this.state,
            { targetWindow: n, onDragEnd: i } = this.props;
        n.removeEventListener("mousemove", this.handleMouseMove),
            n.removeEventListener("mouseup", this.handleOperationEnd);
        let s = t
            ? () => {
                  let { onUpdate: t, id: n } = this.props,
                      i =
                          this.shouldConstrainAutoSizeToExplicitResizeEvents() && "MOVE" === e
                              ? this.requestedSize
                              : this.size;
                  t(e, n, this.anchor, i, E(this.ref.current, this.size));
              }
            : void 0;
        if (t) {
            let { maxX: e, maxY: t } = this.props.container,
                { width: n, height: s } = E(this.ref.current, this.size),
                r = (0, c.Ly)(this.anchor, e, t, n, s),
                l = (0, c.h1)(r);
            this.setDOMPositions(l), this.setDOMSize({ width: n, height: s, fixed: this.size.fixed }), null != i && i();
        }
        this.setState({ operation: null, operationStarted: !1 }, () => {
            s?.(),
                this.pendingConstrainedAutoSizeUpdate &&
                    ((this.pendingConstrainedAutoSizeUpdate = !1), this.scheduleConstrainedAutoSizeUpdate());
        });
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: r } = this.ref;
        (this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != r && ((r.style.top = A(t)), (r.style.bottom = A(i)), (r.style.left = A(n)), (r.style.right = A(s)));
    }
    setDOMSize(e) {
        let { width: t, height: n, fixed: i } = e,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: r } = this.ref;
        (t = "auto" !== this.size.width || s ? t : "auto"),
            (n = "auto" !== this.size.height || s ? n : "auto"),
            (this.size = { width: t, height: n, fixed: i }),
            null != r && ((r.style.width = A(t)), (r.style.height = A(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(m.M$, { [m.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(m.Q8, { [m.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(m.cz, { [m.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(m._J, { [m.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(m.DS, { [m.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(m.Bc, { [m.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(m.rL, { [m.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(m.Rl, { [m.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    setLockExtras = (e) => {
        this.setState({ lockExtras: e });
    };
    renderExtras() {
        let {
                props: { renderExtras: e, anchor: t },
                setLockExtras: n,
            } = this,
            i = e?.(n);
        return null != i
            ? (0, s.jsx)("div", {
                  className: a()({
                      [m.Q4]: !0,
                      [m.VO]: null != t.bottom && null == t.top,
                      [m.ao]: null != t.right && null == t.left,
                  }),
                  children: i,
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: s = 2, borderRadius: r = 12 },
            state: { operation: l },
        } = this;
        return {
            ...t,
            ...{
                minWidth: n.width,
                minHeight: n.height,
                borderWidth: s,
                padding: i,
                borderRadius: r + s + i,
                zIndex: null != l ? 1e3 : void 0,
                visibility: e ? "hidden" : void 0,
            },
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: s },
            size: r,
            anchor: l,
            setLockExtras: a,
            state: { anchorTopOverride: o, anchorLeftOverride: d },
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != o ? o : null != l.top,
            anchorLeft: null != d ? d : null != l.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: s,
            hidden: t,
            showEmpty: this.state.lockExtras,
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i, forceShowExtras: r },
            state: { operationStarted: l, lockExtras: d },
        } = this;
        return (0, s.jsxs)(o.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: a()({ [m.iE]: !0, [m.MQ]: l, [m.YR]: !n, [m.sG]: r && n, [m.vP]: d }, i),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()],
        });
    }
}
