n.d(t, {
    B: () => y,
    Z: () => j,
}),
    n(388685),
    n(415506);
var i,
    r,
    a = n(54381),
    l = n(473749),
    o = n(120356),
    s = n.n(o),
    c = n(236726),
    u = n(902704),
    d = n(585483),
    f = n(434529),
    h = n(981631),
    p = n(731292);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
let O = new Set([
    "RESIZE_NORTH",
    "RESIZE_WEST",
    "RESIZE_EAST",
    "RESIZE_SOUTH",
    "RESIZE_NORTH_WEST",
    "RESIZE_NORTH_EAST",
    "RESIZE_SOUTH_WEST",
    "RESIZE_SOUTH_EAST",
]);
function v(e, t, n) {
    let { width: i, height: r, fixed: a } = e;
    return {
        width: "auto" === i ? "auto" : Math.max(t, i),
        height: "auto" === r ? "auto" : Math.max(n, r),
        fixed: a,
    };
}
function E(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        null == n && null == r && (n = 0),
        null != n && null != r && (r = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: r,
        }
    );
}
function S(e) {
    return "auto" === e || null == e ? "auto" : "".concat(e, "px");
}
function x(e, t) {
    let n = 0;
    return {
        width: (n = "auto" === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: "auto" === t.height ? (null != e ? e.clientHeight : 0) : t.height,
    };
}
function I(e, t) {
    let { top: n, left: i, bottom: r, right: a } = t;
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
                right: a,
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
                right: a,
                bottom: void 0,
                left: void 0,
            };
        default:
            throw Error("getOrientedCoords: Invalid orientation: ".concat(e));
    }
}
function C(e) {
    let { computedSize: t } = e;
    return t;
}
class j extends (i = l.Component) {
    shouldComponentUpdate(e, t) {
        return (
            !(0, u.Z)(t, this.state) ||
            !(0, u.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) ||
            !(0, u.Z)(e.anchor, this.props.anchor) ||
            !(0, u.Z)(e.size, this.props.size) ||
            !(0, u.Z)(e.minSize, this.props.minSize) ||
            !(0, u.Z)(e.container, this.props.container)
        );
    }
    componentDidMount() {
        this.setDOMPositions(E(this.props.anchor)),
            this.setDOMSize(v(this.props.size, this.props.minSize.width, this.props.minSize.height)),
            d.S.subscribe(h.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == t.operation &&
            ((0, u.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(E(this.props.anchor)),
            (0, u.Z)(this.props.size, e.size) ||
                this.setDOMSize(v(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), d.S.unsubscribe(h.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
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
                container: { maxX: r, maxY: a, minX: l, minY: o },
                onDragStart: s,
                onDrag: c,
                snapOrientation: u = !0,
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p },
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(a, t), o));
        let { width: m, height: g } = x(n, this.size),
            b = t - h,
            y = e - d,
            O = (0, f.ou)(
                (0, f.PY)(
                    {
                        top: b,
                        left: y,
                        bottom: void 0,
                        right: void 0,
                    },
                    r,
                    a,
                    m,
                    g,
                ),
            ),
            v = u ? (0, f.R)(O) : I("RESIZE_SOUTH_EAST", O);
        this.setDOMPositions(v),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != v.top,
                    anchorLeftOverride: null != v.left,
                },
                () => {
                    p || null == s || s(), null != c && c(i, "MOVE", this.anchor, this.size);
                },
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: a, minX: l, minY: o },
                    onDragStart: s,
                    onDrag: c,
                    resizeValidation: d = C,
                },
                state: { operation: h, operationStarted: p },
            } = this,
            { startX: m, startY: y } = this.dragState,
            O = 0,
            v = 0;
        if (null == h) return;
        switch (((e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(a, t), o)), h)) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                O -= m - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                O += m - e;
        }
        switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                v -= y - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                v += y - t;
        }
        let E = d({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + O, i.width),
                    height: Math.max(this.dragState.offsetHeight + v, i.height),
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight,
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords,
            }),
            S = (0, f.BL)(
                (0, f.ou)((0, f.PY)(this.dragState.dragOrientedCoords, r, a, E.width, E.height)),
                this.dragState.dragOrientedCoords,
            );
        this.setDOMSize(b(g({}, E), { fixed: this.size.fixed }), !0),
            (0, u.Z)(S, this.dragState.dragOrientedCoords) ||
                ((this.dragState.dragOrientedCoords = S), this.setDOMPositions(this.dragState.dragOrientedCoords)),
            p || (null != s && s(), this.setState({ operationStarted: !0 })),
            null != c && c(n, h, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: a } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: r,
        }),
            null != a && ((a.style.top = S(t)), (a.style.bottom = S(i)), (a.style.left = S(n)), (a.style.right = S(r)));
    }
    setDOMSize(e) {
        let { width: t, height: n, fixed: i } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: a } = this.ref;
        (t = "auto" !== this.size.width || r ? t : "auto"),
            (n = "auto" !== this.size.height || r ? n : "auto"),
            (this.size = {
                width: t,
                height: n,
                fixed: i,
            }),
            null != a && ((a.style.width = S(t)), (a.style.height = S(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeNorth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH"),
                              }),
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeSouth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH"),
                              }),
                          ],
                      })
                    : null,
                t
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeEast, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_EAST"),
                              }),
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeWest, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_WEST"),
                              }),
                          ],
                      })
                    : null,
                t && e
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeNorthWest, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST"),
                              }),
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeNorthEast, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST"),
                              }),
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeSouthWest, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST"),
                              }),
                              (0, a.jsx)("div", {
                                  className: s()(p.resizeSouthEast, { [p.resizeNWSECursor]: n }),
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
            ? (0, a.jsx)("div", {
                  className: s()({
                      [p.extras]: !0,
                      [p.extrasBottomOriented]: null != t.bottom,
                      [p.extrasRightOriented]: null != t.right,
                  }),
                  children: i,
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: r = 2, borderRadius: a = 12 },
            state: { operation: l },
        } = this;
        return g({}, t, {
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: r,
            padding: i,
            borderRadius: a + r + i,
            zIndex: null != l ? 1000 : void 0,
            visibility: e ? "hidden" : void 0,
        });
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: r },
            size: a,
            anchor: l,
            setLockExtras: o,
            state: { anchorTopOverride: s, anchorLeftOverride: c },
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != l.top,
            anchorLeft: null != c ? c : null != l.left,
            size: a,
            padding: n,
            borderWidth: i,
            setLockExtras: o,
            locked: r,
            hidden: t,
            showEmpty: this.state.lockExtras,
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i, forceShowExtras: r },
            state: { operationStarted: l, lockExtras: o },
        } = this;
        return (0, a.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: s()(
                {
                    [p.wrapper]: !0,
                    [p.operation]: l,
                    [p.unlocked]: !n,
                    [p.forceShowExtras]: r && n,
                    [p.lockExtras]: o,
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
            m(this, "anchor", void 0),
            m(this, "size", void 0),
            m(this, "ref", l.createRef()),
            m(this, "dragState", {
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
            m(this, "state", {
                lockExtras: !0,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0,
            }),
            m(this, "handleShowUI", (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            m(this, "handleMouseDown", (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === h.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY);
            }),
            m(this, "handleMouseMove", (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: a, operationStarted: l },
                    } = this;
                !(null == a || (!l && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3)) &&
                    ("MOVE" === a ? this.handleDragMove(t, n) : O.has(a) && this.handleResizeMove(t, n));
            }),
            m(this, "handleOperationStart", (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: a,
                        container: { maxX: l, maxY: o },
                    },
                } = this;
                if (null == i || !a) return;
                let { width: s, height: c } = x(i, this.size),
                    u = (0, f.PY)(this.anchor, l, o, s, c);
                if ("MOVE" === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t,
                        };
                    })(u);
                    this.dragState = b(g({}, this.dragState), {
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i,
                    });
                } else {
                    let i = I(e, u);
                    this.setDOMPositions(i),
                        (this.dragState = b(g({}, this.dragState), {
                            startX: t,
                            startY: n,
                            offsetWidth: s,
                            offsetHeight: c,
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
            m(this, "handleOperationEnd", () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener("mousemove", this.handleMouseMove),
                    n.removeEventListener("mouseup", this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, x(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = x(this.ref.current, this.size),
                        a = (0, f.PY)(this.anchor, e, t, n, r),
                        l = (0, f.R)(a);
                    this.setDOMPositions(l),
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
                    r,
                );
            }),
            m(this, "setLockExtras", (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = E(e.anchor)),
            (this.size = v(e.size, e.minSize.width, e.minSize.height));
    }
}
m(j, "Operations", y);
