i.d(e, {
    B: () => g,
    Z: () => N
}),
    i(47120),
    i(411104);
var n,
    l,
    s = i(200651),
    o = i(192379),
    r = i(120356),
    a = i.n(r),
    d = i(642128),
    u = i(902704),
    c = i(585483),
    h = i(434529),
    E = i(981631),
    p = i(706446);
function S(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let f = (t, e, i, n) => Math.pow(t - i, 2) + Math.pow(e - n, 2);
var g = (((l = {}).MOVE = 'MOVE'), (l.RESIZE_NORTH = 'RESIZE_NORTH'), (l.RESIZE_WEST = 'RESIZE_WEST'), (l.RESIZE_EAST = 'RESIZE_EAST'), (l.RESIZE_SOUTH = 'RESIZE_SOUTH'), (l.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (l.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (l.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (l.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), l);
let _ = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function m(t, e, i) {
    let { width: n, height: l } = t;
    return {
        width: 'auto' === n ? 'auto' : Math.max(e, n),
        height: 'auto' === l ? 'auto' : Math.max(i, l)
    };
}
function v(t) {
    let { top: e, left: i, bottom: n, right: l } = t;
    return (
        null == i && null == l && (i = 0),
        null != i && null != l && (l = void 0),
        null == e && null == n && (e = 0),
        null != e && null != n && (n = void 0),
        {
            top: e,
            left: i,
            bottom: n,
            right: l
        }
    );
}
function I(t) {
    return 'auto' === t || null == t ? 'auto' : ''.concat(t, 'px');
}
function Z(t, e) {
    let i = 0,
        n = 0;
    return {
        width: (i = 'auto' === e.width ? (null != t ? t.clientWidth : 0) : e.width),
        height: 'auto' === e.height ? (null != t ? t.clientHeight : 0) : e.height
    };
}
function O(t, e) {
    let { top: i, left: n, bottom: l, right: s } = e;
    switch (t) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: l,
                left: n,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: l,
                right: s,
                left: void 0,
                top: void 0
            };
        case 'RESIZE_SOUTH_EAST':
            return {
                top: i,
                left: n,
                bottom: void 0,
                right: void 0
            };
        case 'RESIZE_SOUTH':
        case 'RESIZE_SOUTH_WEST':
            return {
                top: i,
                right: s,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(t));
    }
}
function C(t) {
    let { computedSize: e } = t;
    return e;
}
class N extends (n = o.Component) {
    shouldComponentUpdate(t, e) {
        return !(0, u.Z)(e, this.state) || !(0, u.Z)(t, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, u.Z)(t.anchor, this.props.anchor) || !(0, u.Z)(t.size, this.props.size) || !(0, u.Z)(t.minSize, this.props.minSize) || !(0, u.Z)(t.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(v(this.props.anchor)), this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)), c.S.subscribe(E.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(t, e) {
        null != e.operation || ((0, u.Z)(this.props.anchor, t.anchor) || this.setDOMPositions(v(this.props.anchor)), (0, u.Z)(this.props.size, t.size) || this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), c.S.unsubscribe(E.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleResizeMouseDown(t, e) {
        let { clientX: i, clientY: n } = t;
        t.stopPropagation(), this.handleOperationStart(e, i, n);
    }
    handleDragMove(t, e) {
        let {
            ref: { current: i },
            props: {
                id: n,
                container: { maxX: l, maxY: s, minX: o, minY: r },
                onDragStart: a,
                onDrag: d,
                snapOrientation: u = !0
            },
            dragState: { offsetX: c, offsetY: E },
            state: { operationStarted: p }
        } = this;
        if (null == i) return null;
        (t = Math.max(Math.min(l, t), o)), (e = Math.max(Math.min(s, e), r));
        let { width: S, height: f } = Z(i, this.size),
            g = e - E,
            _ = t - c,
            m = (0, h.ou)(
                (0, h.PY)(
                    {
                        top: g,
                        left: _,
                        bottom: void 0,
                        right: void 0
                    },
                    l,
                    s,
                    S,
                    f
                )
            ),
            v = u ? (0, h.R)(m) : O('RESIZE_SOUTH_EAST', m);
        this.setDOMPositions(v),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != v.top,
                    anchorLeftOverride: null != v.left
                },
                () => {
                    p || null == a || a(), null != d && d(n, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(t, e) {
        let {
                props: {
                    id: i,
                    minSize: n,
                    container: { maxX: l, maxY: s, minX: o, minY: r },
                    onDragStart: a,
                    onDrag: d,
                    resizeValidation: c = C
                },
                state: { operation: E, operationStarted: p }
            } = this,
            { startX: S, startY: f } = this.dragState,
            g = 0,
            _ = 0;
        if (null == E) return;
        switch (((t = Math.max(Math.min(l, t), o)), (e = Math.max(Math.min(s, e), r)), E)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                g -= S - t;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                g += S - t;
        }
        switch (E) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                _ -= f - e;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                _ += f - e;
        }
        let m = c({
                padding: 8,
                borderWidth: 2,
                operation: E,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + g, n.width),
                    height: Math.max(this.dragState.offsetHeight + _, n.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            v = (0, h.BL)((0, h.ou)((0, h.PY)(this.dragState.dragOrientedCoords, l, s, m.width, m.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(m, !0), (0, u.Z)(v, this.dragState.dragOrientedCoords) || ((this.dragState.dragOrientedCoords = v), this.setDOMPositions(this.dragState.dragOrientedCoords)), p || (null != a && a(), this.setState({ operationStarted: !0 })), null != d && d(i, E, this.anchor, this.size);
    }
    setDOMPositions(t) {
        let { top: e, left: i, bottom: n, right: l } = t,
            { current: s } = this.ref;
        (this.anchor = {
            top: e,
            left: i,
            bottom: n,
            right: l
        }),
            null != s && ((s.style.top = I(e)), (s.style.bottom = I(n)), (s.style.left = I(i)), (s.style.right = I(l)));
    }
    setDOMSize(t) {
        let { width: e, height: i } = t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        (e = 'auto' !== this.size.width || n ? e : 'auto'),
            (i = 'auto' !== this.size.height || n ? i : 'auto'),
            (this.size = {
                width: e,
                height: i
            }),
            null != l && ((l.style.width = I(e)), (l.style.height = I(i)));
    }
    renderResizeHandles() {
        let { resizeY: t, resizeX: e, active: i } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                t
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeNorth, { [p.resizeNSCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH')
                              }),
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeSouth, { [p.resizeNSCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeEast, { [p.resizeEWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeWest, { [p.resizeEWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                e && t
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeNorthWest, { [p.resizeNWSECursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeNorthEast, { [p.resizeNESWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeSouthWest, { [p.resizeNESWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: a()(p.resizeSouthEast, { [p.resizeNWSECursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    renderExtras() {
        let {
                props: { renderExtras: t, anchor: e },
                setLockExtras: i
            } = this,
            n = null == t ? void 0 : t(i);
        return null != n
            ? (0, s.jsx)('div', {
                  className: a()({
                      [p.extras]: !0,
                      [p.extrasBottomOriented]: null != e.bottom,
                      [p.extrasRightOriented]: null != e.right
                  }),
                  children: n
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: t, style: e, minSize: i, padding: n = 8, borderWidth: l = 2, borderRadius: s = 12 },
            state: { operation: o }
        } = this;
        return {
            ...e,
            minWidth: i.width,
            minHeight: i.height,
            borderWidth: l,
            padding: n,
            borderRadius: s + l + n,
            zIndex: null != o ? 1000 : void 0,
            visibility: t ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: t, hidden: e, padding: i = 8, borderWidth: n = 2, locked: l },
            size: s,
            anchor: o,
            setLockExtras: r,
            state: { anchorTopOverride: a, anchorLeftOverride: d }
        } = this;
        return t({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != o.top,
            anchorLeft: null != d ? d : null != o.left,
            size: s,
            padding: i,
            borderWidth: n,
            setLockExtras: r,
            locked: l,
            hidden: e
        });
    }
    render() {
        let {
            props: { onClick: t, id: e, locked: i, className: n },
            state: { operationStarted: l, lockExtras: o }
        } = this;
        return (0, s.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: a()(
                {
                    [p.wrapper]: !0,
                    [p.operation]: l,
                    [p.unlocked]: !i,
                    [p.lockExtras]: o
                },
                n
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != t ? () => t(e) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(t) {
        super(t),
            S(this, 'anchor', void 0),
            S(this, 'size', void 0),
            S(this, 'ref', o.createRef()),
            S(this, 'dragState', {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0,
                dragOrientedCoords: {
                    top: 0,
                    left: 0
                }
            }),
            S(this, 'state', {
                lockExtras: !0,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            S(this, 'handleShowUI', (t) => {
                let { show: e } = t;
                this.setLockExtras(e);
            }),
            S(this, 'handleMouseDown', (t) => {
                t.stopPropagation();
                let { dragAnywhere: e } = this.props,
                    { current: i } = this.ref;
                null != i && t.button === E.AeJ.PRIMARY && e && this.handleOperationStart('MOVE', t.clientX, t.clientY);
            }),
            S(this, 'handleMouseMove', (t) => {
                t.preventDefault(), t.stopPropagation();
                let { clientX: e, clientY: i } = t,
                    {
                        dragState: { startX: n, startY: l },
                        state: { operation: s, operationStarted: o }
                    } = this;
                !(null == s || (!o && 3 > f(n, l, e, i))) && ('MOVE' === s ? this.handleDragMove(e, i) : _.has(s) && this.handleResizeMove(e, i));
            }),
            S(this, 'handleOperationStart', (t, e, i) => {
                let {
                    ref: { current: n },
                    props: {
                        targetWindow: l,
                        active: s,
                        container: { maxX: o, maxY: r }
                    }
                } = this;
                if (null == n || !s) return;
                let { width: a, height: d } = Z(n, this.size),
                    u = (0, h.PY)(this.anchor, o, r, a, d);
                if ('MOVE' === t) {
                    let { x: t, y: n } = (function (t) {
                        let { top: e, left: i } = t;
                        return {
                            x: i,
                            y: e
                        };
                    })(u);
                    this.dragState = {
                        ...this.dragState,
                        startX: e,
                        startY: i,
                        offsetX: e - t,
                        offsetY: i - n
                    };
                } else {
                    let n = O(t, u);
                    this.setDOMPositions(n),
                        (this.dragState = {
                            ...this.dragState,
                            startX: e,
                            startY: i,
                            offsetWidth: a,
                            offsetHeight: d,
                            dragOrientedCoords: n
                        });
                }
                this.setState(
                    {
                        operation: t,
                        operationStarted: !1
                    },
                    () => {
                        l.addEventListener('mousemove', this.handleMouseMove), l.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            S(this, 'handleOperationEnd', () => {
                let { operation: t, operationStarted: e } = this.state,
                    { targetWindow: i, onDragEnd: n } = this.props;
                i.removeEventListener('mousemove', this.handleMouseMove), i.removeEventListener('mouseup', this.handleOperationEnd);
                let l = e
                    ? () => {
                          let { onUpdate: e, id: i } = this.props;
                          e(t, i, this.anchor, this.size, Z(this.ref.current, this.size));
                      }
                    : void 0;
                if (e) {
                    let { maxX: t, maxY: e } = this.props.container,
                        { width: i, height: l } = Z(this.ref.current, this.size),
                        s = (0, h.PY)(this.anchor, t, e, i, l),
                        o = (0, h.R)(s);
                    this.setDOMPositions(o),
                        this.setDOMSize({
                            width: i,
                            height: l
                        }),
                        null != n && n();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    l
                );
            }),
            S(this, 'setLockExtras', (t) => {
                this.setState({ lockExtras: t });
            }),
            (this.anchor = v(t.anchor)),
            (this.size = m(t.size, t.minSize.width, t.minSize.height));
    }
}
S(N, 'Operations', g);
