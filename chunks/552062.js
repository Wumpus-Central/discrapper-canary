n.d(t, {
    B: () => f,
    Z: () => C
}),
    n(47120),
    n(411104);
var i,
    s,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    d = n(902704),
    c = n(434529),
    u = n(981631),
    h = n(739858);
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
let g = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
var f = (((s = {}).MOVE = 'MOVE'), (s.RESIZE_NORTH = 'RESIZE_NORTH'), (s.RESIZE_WEST = 'RESIZE_WEST'), (s.RESIZE_EAST = 'RESIZE_EAST'), (s.RESIZE_SOUTH = 'RESIZE_SOUTH'), (s.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (s.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (s.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (s.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), s);
let m = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function _(e, t, n) {
    let { width: i, height: s } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === s ? 'auto' : Math.max(n, s)
    };
}
function v(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0),
        null != n && null != s && (s = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: s
        }
    );
}
function x(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function S(e, t) {
    let n = 0,
        i = 0;
    return {
        width: (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height
    };
}
function Z(e, t) {
    let { top: n, left: i, bottom: s, right: l } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: s,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: s,
                right: l,
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
                right: l,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
class E extends (i = a.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container);
    }
    componentDidUpdate(e, t) {
        null != t.operation || ((0, d.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(v(this.props.anchor)), (0, d.Z)(this.props.size, e.size) || this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)));
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
                container: { maxX: s, maxY: l, minX: a, minY: r },
                onDragStart: o,
                onDrag: d,
                snapOrientation: u
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: g }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), r));
        let { width: f, height: m } = S(n, this.size),
            _ = t - p,
            v = e - h,
            x = (0, c.ou)(
                (0, c.PY)(
                    {
                        top: _,
                        left: v,
                        bottom: void 0,
                        right: void 0
                    },
                    s,
                    l,
                    f,
                    m
                )
            ),
            E = u ? (0, c.R)(x) : Z('RESIZE_SOUTH_EAST', x);
        this.setDOMPositions(E), g || (null != o && o(), this.setState({ operationStarted: !0 })), null != d && d(i, 'MOVE', this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: s, maxY: l, minX: a, minY: r },
                    onDragStart: o,
                    onDrag: d
                },
                state: { operation: c, operationStarted: u }
            } = this,
            { startX: h, startY: p, offsetWidth: g, offsetHeight: f } = this.dragState,
            m = 0,
            _ = 0;
        if (null != c) {
            switch (((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(l, t), r)), c)) {
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
            switch (c) {
                case 'RESIZE_SOUTH':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_SOUTH_EAST':
                    _ -= p - t;
                    break;
                case 'RESIZE_NORTH':
                case 'RESIZE_NORTH_WEST':
                case 'RESIZE_NORTH_EAST':
                    _ += p - t;
            }
            (g = Math.max(g + m, i.width)),
                (f = Math.max(f + _, i.height)),
                this.setDOMSize({
                    width: g,
                    height: f
                }),
                u || (null != o && o(), this.setState({ operationStarted: !0 })),
                null != d && d(n, c, this.anchor, this.size);
        }
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: l } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: s
        }),
            null != l && ((l.style.top = x(t)), (l.style.bottom = x(i)), (l.style.left = x(n)), (l.style.right = x(s)));
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
            null != i && ((i.style.width = x(t)), (i.style.height = x(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeNorth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeSouth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeEast, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeWest, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeNorthWest, { [h.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeNorthEast, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeSouthWest, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: o()(h.resizeSouthEast, { [h.resizeNWSECursor]: n }),
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
            props: { children: e, hidden: t, onClick: n, id: i, style: s },
            size: a,
            anchor: r,
            state: { operation: d, operationStarted: c }
        } = this;
        return (0, l.jsxs)('div', {
            ref: this.ref,
            style: {
                ...r,
                ...a,
                ...s,
                ...(null != d ? { zIndex: 1000 } : void 0),
                ...(t ? { visibility: 'hidden' } : void 0)
            },
            className: o()({
                [h.wrapper]: !0,
                [h.operation]: c
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
            p(this, 'ref', a.createRef()),
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
                        dragState: { startX: i, startY: s },
                        state: { operation: l, operationStarted: a }
                    } = this;
                !(null == l || (!a && 3 > g(i, s, t, n))) && ('MOVE' === l ? this.handleDragMove(t, n) : m.has(l) && this.handleResizeMove(t, n));
            }),
            p(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: s,
                        active: l,
                        container: { maxX: a, maxY: r }
                    }
                } = this;
                if (null == i || !l) return;
                let { width: o, height: d } = S(i, this.size),
                    u = (0, c.PY)(this.anchor, a, r, o, d);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(u);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    };
                } else {
                    let i = Z(e, u);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: o,
                            offsetHeight: d
                        });
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        s.addEventListener('mousemove', this.handleMouseMove), s.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            p(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let s = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, S(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: s } = S(this.ref.current, this.size),
                        l = (0, c.PY)(this.anchor, e, t, n, s),
                        a = (0, c.R)(l);
                    this.setDOMPositions(a),
                        this.setDOMSize({
                            width: n,
                            height: s
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    s
                );
            }),
            (this.anchor = v(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
    }
}
p(E, 'Operations', f),
    p(E, 'defaultProps', {
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
let C = E;
