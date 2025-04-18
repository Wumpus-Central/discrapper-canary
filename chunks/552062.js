n.d(t, {
    B: () => y,
    Z: () => C
}),
    n(388685),
    n(415506);
var i,
    r,
    s = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    c = n(902704),
    d = n(434529),
    u = n(981631),
    h = n(795805);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let m = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
var y = (((r = {}).MOVE = 'MOVE'), (r.RESIZE_NORTH = 'RESIZE_NORTH'), (r.RESIZE_WEST = 'RESIZE_WEST'), (r.RESIZE_EAST = 'RESIZE_EAST'), (r.RESIZE_SOUTH = 'RESIZE_SOUTH'), (r.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (r.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (r.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (r.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), r);
let v = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function _(e, t, n) {
    let { width: i, height: r } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === r ? 'auto' : Math.max(n, r)
    };
}
function O(e) {
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
            right: r
        }
    );
}
function b(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function x(e, t) {
    let n = 0,
        i = 0;
    return {
        width: (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height
    };
}
function E(e, t) {
    let { top: n, left: i, bottom: r, right: s } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: r,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: r,
                right: s,
                left: void 0,
                top: void 0
            };
        case 'RESIZE_SOUTH_EAST':
            return {
                top: n,
                left: i,
                bottom: void 0,
                right: void 0
            };
        case 'RESIZE_SOUTH':
        case 'RESIZE_SOUTH_WEST':
            return {
                top: n,
                right: s,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
class S extends (i = o.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container);
    }
    componentDidUpdate(e, t) {
        null == t.operation && ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(O(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)));
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
                container: { maxX: r, maxY: s, minX: o, minY: a },
                onDragStart: l,
                onDrag: c,
                snapOrientation: u
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), o)), (t = Math.max(Math.min(s, t), a));
        let { width: g, height: m } = x(n, this.size),
            y = t - p,
            v = e - h,
            _ = (0, d.ou)(
                (0, d.PY)(
                    {
                        top: y,
                        left: v,
                        bottom: void 0,
                        right: void 0
                    },
                    r,
                    s,
                    g,
                    m
                )
            ),
            O = u ? (0, d.R)(_) : E('RESIZE_SOUTH_EAST', _);
        this.setDOMPositions(O), f || (null != l && l(), this.setState({ operationStarted: !0 })), null != c && c(i, 'MOVE', this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: s, minX: o, minY: a },
                    onDragStart: l,
                    onDrag: c
                },
                state: { operation: d, operationStarted: u }
            } = this,
            { startX: h, startY: p, offsetWidth: f, offsetHeight: g } = this.dragState,
            m = 0,
            y = 0;
        if (null != d) {
            switch (((e = Math.max(Math.min(r, e), o)), (t = Math.max(Math.min(s, t), a)), d)) {
                case 'RESIZE_EAST':
                case 'RESIZE_SOUTH_EAST':
                case 'RESIZE_NORTH_EAST':
                    m -= h - e;
                    break;
                case 'RESIZE_WEST':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_NORTH_WEST':
                    m += h - e;
            }
            switch (d) {
                case 'RESIZE_SOUTH':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_SOUTH_EAST':
                    y -= p - t;
                    break;
                case 'RESIZE_NORTH':
                case 'RESIZE_NORTH_WEST':
                case 'RESIZE_NORTH_EAST':
                    y += p - t;
            }
            (f = Math.max(f + m, i.width)),
                (g = Math.max(g + y, i.height)),
                this.setDOMSize({
                    width: f,
                    height: g
                }),
                u || (null != l && l(), this.setState({ operationStarted: !0 })),
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
            right: r
        }),
            null != s && ((s.style.top = b(t)), (s.style.bottom = b(i)), (s.style.left = b(n)), (s.style.right = b(r)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        (t = 'auto' === this.size.width ? 'auto' : t),
            (n = 'auto' === this.size.height ? 'auto' : n),
            (this.size = {
                width: t,
                height: n
            }),
            null != i && ((i.style.width = b(t)), (i.style.height = b(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, s.jsxs)(o.Fragment, {
            children: [
                e
                    ? (0, s.jsxs)(o.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeNorth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeSouth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, s.jsxs)(o.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeEast, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeWest, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, s.jsxs)(o.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeNorthWest, { [h.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeNorthEast, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeSouthWest, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: l()(h.resizeSouthEast, { [h.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    render() {
        let {
            props: { children: e, hidden: t, onClick: n, id: i, style: r },
            size: o,
            anchor: a,
            state: { operation: c, operationStarted: d }
        } = this;
        return (0, s.jsxs)('div', {
            ref: this.ref,
            style: f({}, a, o, r, null != c ? { zIndex: 1000 } : void 0, t ? { visibility: 'hidden' } : void 0),
            className: l()({
                [h.wrapper]: !0,
                [h.operation]: d
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()]
        });
    }
    constructor(e) {
        super(e),
            p(this, 'anchor', void 0),
            p(this, 'size', void 0),
            p(this, 'ref', o.createRef()),
            p(this, 'dragState', {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0
            }),
            p(this, 'state', {
                operation: null,
                operationStarted: !1
            }),
            p(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === u.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            p(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: s, operationStarted: o }
                    } = this;
                !(null == s || (!o && 3 > m(i, r, t, n))) && ('MOVE' === s ? this.handleDragMove(t, n) : v.has(s) && this.handleResizeMove(t, n));
            }),
            p(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: s,
                        container: { maxX: o, maxY: a }
                    }
                } = this;
                if (null == i || !s) return;
                let { width: l, height: c } = x(i, this.size),
                    u = (0, d.PY)(this.anchor, o, a, l, c);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(u);
                    this.dragState = g(f({}, this.dragState), {
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    });
                } else {
                    let i = E(e, u);
                    this.setDOMPositions(i),
                        (this.dragState = g(f({}, this.dragState), {
                            startX: t,
                            startY: n,
                            offsetWidth: l,
                            offsetHeight: c
                        }));
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        r.addEventListener('mousemove', this.handleMouseMove), r.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            p(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, x(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = x(this.ref.current, this.size),
                        s = (0, d.PY)(this.anchor, e, t, n, r),
                        o = (0, d.R)(s);
                    this.setDOMPositions(o),
                        this.setDOMSize({
                            width: n,
                            height: r
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    r
                );
            }),
            (this.anchor = O(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
    }
}
p(S, 'Operations', y),
    p(S, 'defaultProps', {
        snapOrientation: !0,
        minSize: {
            width: 0,
            height: 0
        },
        container: {
            minX: 0,
            minY: 0,
            maxX: 1 / 0,
            maxY: 1 / 0
        },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0,
        targetWindow: window
    });
let C = S;
