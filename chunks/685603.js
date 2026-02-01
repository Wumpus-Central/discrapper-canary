n.d(t, {
    A: () => x,
    P: () => y,
}),
    n(896048),
    n(65821);
var i,
    r,
    s = n(627968),
    l = n(64700),
    o = n(503698),
    a = n.n(o),
    c = n(52133),
    d = n(5463),
    u = n(652215),
    h = n(850103);

function p(e, t, n) {
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

function f(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
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
var y =
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
let A = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);

function m(e, t, n) {
    let { width: i, height: r } = e;
    return {
        width: "auto" === i ? "auto" : Math.max(t, i),
        height: "auto" === r ? "auto" : Math.max(n, r),
    };
}

function b(e) {
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

function _(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}

function v(e, t) {
    let { top: n, left: i, bottom: r, right: s } = t;
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
                right: s,
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
                right: s,
                bottom: void 0,
                left: void 0,
            };
        default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
    }
}
class E extends (i = l.Component) {
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
    componentDidUpdate(e, t) {
        null == t.operation &&
            ((0, c.A)(this.props.anchor, e.anchor) || this.setDOMPositions(b(this.props.anchor)),
            (0, c.A)(this.props.size, e.size) ||
                this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd();
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
                container: { maxX: r, maxY: s, minX: l, minY: o },
                onDragStart: a,
                onDrag: c,
                snapOrientation: u,
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(s, t), o));
        let { width: g, height: y } = _(n, this.size),
            A = t - p,
            m = e - h,
            b = (0, d.fh)(
                (0, d.Ly)(
                    {
                        top: A,
                        left: m,
                        bottom: void 0,
                        right: void 0,
                    },
                    r,
                    s,
                    g,
                    y,
                ),
            ),
            O = u ? (0, d.h1)(b) : v("RESIZE_SOUTH_EAST", b);
        this.setDOMPositions(O),
            f ||
                (null != a && a(),
                this.setState({
                    operationStarted: !0,
                })),
            null != c && c(i, "MOVE", this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: s, minX: l, minY: o },
                    onDragStart: a,
                    onDrag: c,
                },
                state: { operation: d, operationStarted: u },
            } = this,
            { startX: h, startY: p, offsetWidth: f, offsetHeight: g } = this.dragState,
            y = 0,
            A = 0;
        if (null != d) {
            switch (((e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(s, t), o)), d)) {
                case "RESIZE_EAST":
                case "RESIZE_SOUTH_EAST":
                case "RESIZE_NORTH_EAST":
                    y -= h - e;
                    break;
                case "RESIZE_WEST":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_NORTH_WEST":
                    y += h - e;
            }
            switch (d) {
                case "RESIZE_SOUTH":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_SOUTH_EAST":
                    A -= p - t;
                    break;
                case "RESIZE_NORTH":
                case "RESIZE_NORTH_WEST":
                case "RESIZE_NORTH_EAST":
                    A += p - t;
            }
            (f = Math.max(f + y, i.width)),
                (g = Math.max(g + A, i.height)),
                this.setDOMSize({
                    width: f,
                    height: g,
                }),
                u ||
                    (null != a && a(),
                    this.setState({
                        operationStarted: !0,
                    })),
                null != c && c(n, d, this.anchor, this.size);
        }
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: s } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: r,
        }),
            null != s && ((s.style.top = O(t)), (s.style.bottom = O(i)), (s.style.left = O(n)), (s.style.right = O(r)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        (t = "auto" === this.size.width ? "auto" : t),
            (n = "auto" === this.size.height ? "auto" : n),
            (this.size = {
                width: t,
                height: n,
            }),
            null != i && ((i.style.width = O(t)), (i.style.height = O(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, s.jsxs)(l.Fragment, {
            children: [
                e
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(h.M$, {
                                      [h.An]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(h.Q8, {
                                      [h.An]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(h.cz, {
                                      [h.zC]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(h._J, {
                                      [h.zC]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, s.jsxs)(l.Fragment, {
                          children: [
                              (0, s.jsx)("div", {
                                  className: a()(h.DS, {
                                      [h.Ke]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(h.Bc, {
                                      [h.UJ]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(h.rL, {
                                      [h.UJ]: n,
                                  }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, s.jsx)("div", {
                                  className: a()(h.Rl, {
                                      [h.Ke]: n,
                                  }),
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
            props: { children: e, hidden: t, onClick: n, id: i, style: r },
            size: l,
            anchor: o,
            state: { operation: c, operationStarted: d },
        } = this;
        return (0, s.jsxs)("div", {
            ref: this.ref,
            style: f(
                {},
                o,
                l,
                r,
                null != c
                    ? {
                          zIndex: 1e3,
                      }
                    : void 0,
                t
                    ? {
                          visibility: "hidden",
                      }
                    : void 0,
            ),
            className: a()({
                [h.iE]: !0,
                [h.MQ]: d,
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()],
        });
    }
    constructor(e) {
        super(e),
            p(this, "anchor", void 0),
            p(this, "size", void 0),
            p(this, "ref", l.createRef()),
            p(this, "dragState", {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0,
            }),
            p(this, "state", {
                operation: null,
                operationStarted: !1,
            }),
            p(this, "handleMouseDown", (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === u.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            p(this, "handleMouseMove", (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: s, operationStarted: l },
                    } = this;
                !(null == s || (!l && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3)) &&
                    ("MOVE" === s ? this.handleDragMove(t, n) : A.has(s) && this.handleResizeMove(t, n));
            }),
            p(this, "handleOperationStart", (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: s,
                        container: { maxX: l, maxY: o },
                    },
                } = this;
                if (null == i || !s) return;
                let { width: a, height: c } = _(i, this.size),
                    u = (0, d.Ly)(this.anchor, l, o, a, c);
                if ("MOVE" === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t,
                        };
                    })(u);
                    this.dragState = g(f({}, this.dragState), {
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i,
                    });
                } else {
                    let i = v(e, u);
                    this.setDOMPositions(i),
                        (this.dragState = g(f({}, this.dragState), {
                            startX: t,
                            startY: n,
                            offsetWidth: a,
                            offsetHeight: c,
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
            p(this, "handleOperationEnd", () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener("mousemove", this.handleMouseMove),
                    n.removeEventListener("mouseup", this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, _(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = _(this.ref.current, this.size),
                        s = (0, d.Ly)(this.anchor, e, t, n, r),
                        l = (0, d.h1)(s);
                    this.setDOMPositions(l),
                        this.setDOMSize({
                            width: n,
                            height: r,
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1,
                    },
                    r,
                );
            }),
            (this.anchor = b(e.anchor)),
            (this.size = m(e.size, e.minSize.width, e.minSize.height));
    }
}
p(E, "Operations", y),
    p(E, "defaultProps", {
        snapOrientation: !0,
        minSize: {
            width: 0,
            height: 0,
        },
        container: {
            minX: 0,
            minY: 0,
            maxX: 1 / 0,
            maxY: 1 / 0,
        },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0,
        targetWindow: window,
    });
let x = E;
