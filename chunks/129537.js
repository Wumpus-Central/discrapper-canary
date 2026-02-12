n.d(t, { A: () => I, P: () => m });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(288720),
    d = n(52133),
    u = n(203982),
    c = n(5463),
    h = n(652215),
    A = n(18337),
    m =
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
let g = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function p(e, t, n) {
    let { width: i, height: l, fixed: a } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === l ? "auto" : Math.max(n, l), fixed: a };
}
function f(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        null == n && null == l && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: l }
    );
}
function _(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function E(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function x(e, t) {
    let { top: n, left: i, bottom: l, right: a } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return { bottom: l, left: i, right: void 0, top: void 0 };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return { bottom: l, right: a, left: void 0, top: void 0 };
        case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return { top: n, right: a, bottom: void 0, left: void 0 };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`);
    }
}
function S(e) {
    let { computedSize: t } = e;
    return t;
}
class I extends a.Component {
    static Operations = m;
    anchor;
    requestedSize;
    size;
    ref = a.createRef();
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
            (this.anchor = f(e.anchor)),
            (this.requestedSize = p(e.size, e.minSize.width, e.minSize.height)),
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
            l = "auto" === this.requestedSize.width ? n : this.requestedSize.width,
            a = "auto" === this.requestedSize.height ? i : this.requestedSize.height;
        this.setDOMSize({ width: l, height: a, fixed: this.requestedSize.fixed }, !0);
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
        this.setDOMPositions(f(this.props.anchor)),
            (this.requestedSize = p(this.props.size, this.props.minSize.width, this.props.minSize.height)),
            this.setDOMSize(this.requestedSize),
            this.shouldConstrainAutoSizeToExplicitResizeEvents() &&
                (this.scheduleConstrainedAutoSizeUpdate(),
                this.props.targetWindow.addEventListener("resize", this.handleWindowResize)),
            u._.subscribe(h.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == this.state.operation &&
            ((0, d.A)(this.props.anchor, e.anchor) || this.setDOMPositions(f(this.props.anchor)),
            (0, d.A)(this.props.size, e.size) ||
                ((this.requestedSize = p(this.props.size, this.props.minSize.width, this.props.minSize.height)),
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
                dragState: { startX: i, startY: l },
                state: { operation: a, operationStarted: s },
            } = this;
        !(null == a || (!s && Math.pow(i - t, 2) + Math.pow(l - n, 2) < 3)) &&
            ("MOVE" === a ? this.handleDragMove(t, n) : g.has(a) && this.handleResizeMove(t, n));
    };
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleOperationStart = (e, t, n) => {
        let {
            ref: { current: i },
            props: {
                targetWindow: l,
                active: a,
                container: { maxX: s, maxY: r },
            },
        } = this;
        if (null == i || !a) return;
        let { width: o, height: d } = E(i, this.size),
            u = (0, c.Ly)(this.anchor, s, r, o, d);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(u);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = x(e, u);
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
            l.addEventListener("mousemove", this.handleMouseMove),
                l.addEventListener("mouseup", this.handleOperationEnd);
        });
    };
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: l, maxY: a, minX: s, minY: r },
                onDragStart: o,
                onDrag: d,
                snapOrientation: u = !0,
            },
            dragState: { offsetX: h, offsetY: A },
            state: { operationStarted: m },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(l, e), s)), (t = Math.max(Math.min(a, t), r));
        let { width: g, height: p } = E(n, this.size),
            f = t - A,
            _ = e - h,
            S = (0, c.fh)((0, c.Ly)({ top: f, left: _, bottom: void 0, right: void 0 }, l, a, g, p)),
            I = u ? (0, c.h1)(S) : x("RESIZE_SOUTH_EAST", S);
        this.setDOMPositions(I),
            this.setState(
                { operationStarted: !0, anchorTopOverride: null != I.top, anchorLeftOverride: null != I.left },
                () => {
                    m || null == o || o(), null != d && d(i, "MOVE", this.anchor, this.size);
                },
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: l, maxY: a, minX: s, minY: r },
                    onDragStart: o,
                    onDrag: u,
                    resizeValidation: h = S,
                },
                state: { operation: A, operationStarted: m },
            } = this,
            { startX: g, startY: p } = this.dragState,
            f = 0,
            _ = 0;
        if (null == A) return;
        switch (((e = Math.max(Math.min(l, e), s)), (t = Math.max(Math.min(a, t), r)), A)) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                f -= g - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                f += g - e;
        }
        switch (A) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                _ -= p - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                _ += p - t;
        }
        let E = h({
                padding: 8,
                borderWidth: 2,
                operation: A,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + f, i.width),
                    height: Math.max(this.dragState.offsetHeight + _, i.height),
                },
                originSize: { width: this.dragState.offsetWidth, height: this.dragState.offsetHeight },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords,
            }),
            x = (0, c.af)(
                (0, c.fh)((0, c.Ly)(this.dragState.dragOrientedCoords, l, a, E.width, E.height)),
                this.dragState.dragOrientedCoords,
            );
        this.setDOMSize({ ...E, fixed: this.size.fixed }, !0),
            (0, d.A)(x, this.dragState.dragOrientedCoords) ||
                ((this.dragState.dragOrientedCoords = x), this.setDOMPositions(this.dragState.dragOrientedCoords)),
            m || (null != o && o(), this.setState({ operationStarted: !0 })),
            null != u && u(n, A, this.anchor, this.size);
    }
    handleOperationEnd = () => {
        let { operation: e, operationStarted: t } = this.state,
            { targetWindow: n, onDragEnd: i } = this.props;
        n.removeEventListener("mousemove", this.handleMouseMove),
            n.removeEventListener("mouseup", this.handleOperationEnd);
        let l = t
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
                { width: n, height: l } = E(this.ref.current, this.size),
                a = (0, c.Ly)(this.anchor, e, t, n, l),
                s = (0, c.h1)(a);
            this.setDOMPositions(s), this.setDOMSize({ width: n, height: l, fixed: this.size.fixed }), null != i && i();
        }
        this.setState({ operation: null, operationStarted: !1 }, () => {
            l?.(),
                this.pendingConstrainedAutoSizeUpdate &&
                    ((this.pendingConstrainedAutoSizeUpdate = !1), this.scheduleConstrainedAutoSizeUpdate());
        });
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            { current: a } = this.ref;
        (this.anchor = { top: t, left: n, bottom: i, right: l }),
            null != a && ((a.style.top = _(t)), (a.style.bottom = _(i)), (a.style.left = _(n)), (a.style.right = _(l)));
    }
    setDOMSize(e) {
        let { width: t, height: n, fixed: i } = e,
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: a } = this.ref;
        (t = "auto" !== this.size.width || l ? t : "auto"),
            (n = "auto" !== this.size.height || l ? n : "auto"),
            (this.size = { width: t, height: n, fixed: i }),
            null != a && ((a.style.width = _(t)), (a.style.height = _(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: r()(A.M$, { [A.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, l.jsx)("div", {
                                  className: r()(A.Q8, { [A.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: r()(A.cz, { [A.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: r()(A._J, { [A.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: r()(A.DS, { [A.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: r()(A.Bc, { [A.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: r()(A.rL, { [A.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, l.jsx)("div", {
                                  className: r()(A.Rl, { [A.Ke]: n }),
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
            ? (0, l.jsx)("div", {
                  className: r()({
                      [A.Q4]: !0,
                      [A.VO]: null != t.bottom && null == t.top,
                      [A.ao]: null != t.right && null == t.left,
                  }),
                  children: i,
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: l = 2, borderRadius: a = 12 },
            state: { operation: s },
        } = this;
        return {
            ...t,
            ...{
                minWidth: n.width,
                minHeight: n.height,
                borderWidth: l,
                padding: i,
                borderRadius: a + l + i,
                zIndex: null != s ? 1e3 : void 0,
                visibility: e ? "hidden" : void 0,
            },
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: l },
            size: a,
            anchor: s,
            setLockExtras: r,
            state: { anchorTopOverride: o, anchorLeftOverride: d },
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != o ? o : null != s.top,
            anchorLeft: null != d ? d : null != s.left,
            size: a,
            padding: n,
            borderWidth: i,
            setLockExtras: r,
            locked: l,
            hidden: t,
            showEmpty: this.state.lockExtras,
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i, forceShowExtras: a },
            state: { operationStarted: s, lockExtras: d },
        } = this;
        return (0, l.jsxs)(o.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: r()({ [A.iE]: !0, [A.MQ]: s, [A.YR]: !n, [A.sG]: a && n, [A.vP]: d }, i),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()],
        });
    }
}
