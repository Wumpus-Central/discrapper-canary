"use strict";
n.d(t, { A: () => x, P: () => h });
var i,
    s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(52133),
    d = n(5463),
    c = n(652215),
    u = n(129694),
    h =
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
function A(e, t, n) {
    let { width: i, height: s } = e;
    return { width: "auto" === i ? "auto" : Math.max(t, i), height: "auto" === s ? "auto" : Math.max(n, s) };
}
function f(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0), null == t && null == i && (t = 0), { top: t, left: n, bottom: i, right: s }
    );
}
function _(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`;
}
function g(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function m(e, t) {
    let { top: n, left: i, bottom: s, right: l } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return { bottom: s, left: i, right: void 0, top: void 0 };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return { bottom: s, right: l, left: void 0, top: void 0 };
        case "RESIZE_SOUTH_EAST":
            return { top: n, left: i, bottom: void 0, right: void 0 };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return { top: n, right: l, bottom: void 0, left: void 0 };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`);
    }
}
class E extends l.Component {
    static Operations = h;
    static defaultProps = {
        snapOrientation: !0,
        minSize: { width: 0, height: 0 },
        container: { minX: 0, minY: 0, maxX: 1 / 0, maxY: 1 / 0 },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0,
        targetWindow: window,
    };
    anchor;
    size;
    ref = l.createRef();
    dragState = { startX: 0, startY: 0, offsetX: 0, offsetY: 0, offsetWidth: 0, offsetHeight: 0 };
    state = { operation: null, operationStarted: !1 };
    constructor(e) {
        super(e), (this.anchor = f(e.anchor)), (this.size = A(e.size, e.minSize.width, e.minSize.height));
    }
    shouldComponentUpdate(e, t) {
        return (
            !(0, o.A)(t, this.state) ||
            !(0, o.A)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, o.A)(e.anchor, this.props.anchor) ||
            !(0, o.A)(e.size, this.props.size) ||
            !(0, o.A)(e.minSize, this.props.minSize) ||
            !(0, o.A)(e.container, this.props.container)
        );
    }
    componentDidUpdate(e, t) {
        null == t.operation &&
            ((0, o.A)(this.props.anchor, e.anchor) || this.setDOMPositions(f(this.props.anchor)),
            (0, o.A)(this.props.size, e.size) ||
                this.setDOMSize(A(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd();
    }
    handleMouseDown = (e) => {
        e.stopPropagation();
        let { dragAnywhere: t } = this.props,
            { current: n } = this.ref;
        null != n && e.button === c.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
    };
    handleMouseMove = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { clientX: t, clientY: n } = e,
            {
                dragState: { startX: i, startY: s },
                state: { operation: l, operationStarted: a },
            } = this;
        !(null == l || (!a && Math.pow(i - t, 2) + Math.pow(s - n, 2) < 3)) &&
            ("MOVE" === l ? this.handleDragMove(t, n) : p.has(l) && this.handleResizeMove(t, n));
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
                active: l,
                container: { maxX: a, maxY: r },
            },
        } = this;
        if (null == i || !l) return;
        let { width: o, height: c } = g(i, this.size),
            u = (0, d.Ly)(this.anchor, a, r, o, c);
        if ("MOVE" === e) {
            let { x: e, y: i } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(u);
            this.dragState = { ...this.dragState, startX: t, startY: n, offsetX: t - e, offsetY: n - i };
        } else {
            let i = m(e, u);
            this.setDOMPositions(i),
                (this.dragState = { ...this.dragState, startX: t, startY: n, offsetWidth: o, offsetHeight: c });
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
                container: { maxX: s, maxY: l, minX: a, minY: r },
                onDragStart: o,
                onDrag: c,
                snapOrientation: u,
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: A },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), r));
        let { width: f, height: _ } = g(n, this.size),
            E = t - p,
            x = e - h,
            y = (0, d.fh)((0, d.Ly)({ top: E, left: x, bottom: void 0, right: void 0 }, s, l, f, _)),
            v = u ? (0, d.h1)(y) : m("RESIZE_SOUTH_EAST", y);
        this.setDOMPositions(v),
            A || (null != o && o(), this.setState({ operationStarted: !0 })),
            null != c && c(i, "MOVE", this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: s, maxY: l, minX: a, minY: r },
                    onDragStart: o,
                    onDrag: d,
                },
                state: { operation: c, operationStarted: u },
            } = this,
            { startX: h, startY: p, offsetWidth: A, offsetHeight: f } = this.dragState,
            _ = 0,
            g = 0;
        if (null != c) {
            switch (((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), r)), c)) {
                case "RESIZE_EAST":
                case "RESIZE_SOUTH_EAST":
                case "RESIZE_NORTH_EAST":
                    _ -= h - e;
                    break;
                case "RESIZE_WEST":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_NORTH_WEST":
                    _ += h - e;
            }
            switch (c) {
                case "RESIZE_SOUTH":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_SOUTH_EAST":
                    g -= p - t;
                    break;
                case "RESIZE_NORTH":
                case "RESIZE_NORTH_WEST":
                case "RESIZE_NORTH_EAST":
                    g += p - t;
            }
            (A = Math.max(A + _, i.width)),
                (f = Math.max(f + g, i.height)),
                this.setDOMSize({ width: A, height: f }),
                u || (null != o && o(), this.setState({ operationStarted: !0 })),
                null != d && d(n, c, this.anchor, this.size);
        }
    }
    handleOperationEnd = () => {
        let { operation: e, operationStarted: t } = this.state,
            { targetWindow: n, onDragEnd: i } = this.props;
        n.removeEventListener("mousemove", this.handleMouseMove),
            n.removeEventListener("mouseup", this.handleOperationEnd);
        let s = t
            ? () => {
                  let { onUpdate: t, id: n } = this.props;
                  t(e, n, this.anchor, this.size, g(this.ref.current, this.size));
              }
            : void 0;
        if (t) {
            let { maxX: e, maxY: t } = this.props.container,
                { width: n, height: s } = g(this.ref.current, this.size),
                l = (0, d.Ly)(this.anchor, e, t, n, s),
                a = (0, d.h1)(l);
            this.setDOMPositions(a), this.setDOMSize({ width: n, height: s }), null != i && i();
        }
        this.setState({ operation: null, operationStarted: !1 }, s);
    };
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: l } = this.ref;
        (this.anchor = { top: t, left: n, bottom: i, right: s }),
            null != l && ((l.style.top = _(t)), (l.style.bottom = _(i)), (l.style.left = _(n)), (l.style.right = _(s)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        (t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = { width: t, height: n }),
            null != i && ((i.style.width = _(t)), (i.style.height = _(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, s.jsxs)(l.Fragment, {
            children: [
                e
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: r()(u.M$, { [u.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, s.jsx)("div", {
                                  className: r()(u.Q8, { [u.An]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: r()(u.cz, { [u.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: r()(u._J, { [u.zC]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: r()(u.DS, { [u.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: r()(u.Bc, { [u.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: r()(u.rL, { [u.UJ]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: r()(u.Rl, { [u.Ke]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST"),
                              }),
                          ],
                      })
                    : null,
            ],
        });
    }
    render() {
        let {
            props: { children: e, hidden: t, onClick: n, id: i, style: l },
            size: a,
            anchor: o,
            state: { operation: d, operationStarted: c },
        } = this;
        return (0, s.jsxs)("div", {
            ref: this.ref,
            style: {
                ...o,
                ...a,
                ...l,
                ...(null != d ? { zIndex: 1e3 } : void 0),
                ...(t ? { visibility: "hidden" } : void 0),
            },
            className: r()({ [u.iE]: !0, [u.MQ]: c }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()],
        });
    }
}
let x = E;
