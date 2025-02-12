n.d(t, {
    B: () => m,
    Z: () => b
}),
    n(47120),
    n(411104);
var i,
    o,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    d = n(642128),
    c = n(902704),
    u = n(585483),
    h = n(434529),
    _ = n(981631),
    p = n(355266);
function f(e, t, n) {
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
var m = (((o = {}).MOVE = 'MOVE'), (o.RESIZE_NORTH = 'RESIZE_NORTH'), (o.RESIZE_WEST = 'RESIZE_WEST'), (o.RESIZE_EAST = 'RESIZE_EAST'), (o.RESIZE_SOUTH = 'RESIZE_SOUTH'), (o.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (o.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (o.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (o.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), o);
let v = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function x(e, t, n) {
    let { width: i, height: o } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === o ? 'auto' : Math.max(n, o)
    };
}
function E(e) {
    let { top: t, left: n, bottom: i, right: o } = e;
    return (
        null == n && null == o && (n = 0),
        null != n && null != o && (o = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: o
        }
    );
}
function C(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function Z(e, t) {
    let n = 0,
        i = 0;
    return {
        width: (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height
    };
}
function I(e, t) {
    let { top: n, left: i, bottom: o, right: r } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: o,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: o,
                right: r,
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
                right: r,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function S(e) {
    let { computedSize: t } = e;
    return t;
}
class b extends (i = l.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(E(this.props.anchor)), this.setDOMSize(x(this.props.size, this.props.minSize.width, this.props.minSize.height)), u.S.subscribe(_.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null != t.operation || ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(E(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(x(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), u.S.unsubscribe(_.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
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
                container: { maxX: o, maxY: r, minX: l, minY: a },
                onDragStart: s,
                onDrag: d,
                snapOrientation: c = !0
            },
            dragState: { offsetX: u, offsetY: _ },
            state: { operationStarted: p }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(o, e), l)), (t = Math.max(Math.min(r, t), a));
        let { width: f, height: g } = Z(n, this.size),
            m = t - _,
            v = e - u,
            x = (0, h.ou)(
                (0, h.PY)(
                    {
                        top: m,
                        left: v,
                        bottom: void 0,
                        right: void 0
                    },
                    o,
                    r,
                    f,
                    g
                )
            ),
            E = c ? (0, h.R)(x) : I('RESIZE_SOUTH_EAST', x);
        this.setDOMPositions(E),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != E.top,
                    anchorLeftOverride: null != E.left
                },
                () => {
                    p || null == s || s(), null != d && d(i, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: o, maxY: r, minX: l, minY: a },
                    onDragStart: s,
                    onDrag: d,
                    resizeValidation: u = S
                },
                state: { operation: _, operationStarted: p }
            } = this,
            { startX: f, startY: g } = this.dragState,
            m = 0,
            v = 0;
        if (null == _) return;
        switch (((e = Math.max(Math.min(o, e), l)), (t = Math.max(Math.min(r, t), a)), _)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                m -= f - e;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                m += f - e;
        }
        switch (_) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                v -= g - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                v += g - t;
        }
        let x = u({
                padding: 8,
                borderWidth: 2,
                operation: _,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + m, i.width),
                    height: Math.max(this.dragState.offsetHeight + v, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            E = (0, h.BL)((0, h.ou)((0, h.PY)(this.dragState.dragOrientedCoords, o, r, x.width, x.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(x, !0), (0, c.Z)(E, this.dragState.dragOrientedCoords) || ((this.dragState.dragOrientedCoords = E), this.setDOMPositions(this.dragState.dragOrientedCoords)), p || (null != s && s(), this.setState({ operationStarted: !0 })), null != d && d(n, _, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: o } = e,
            { current: r } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: o
        }),
            null != r && ((r.style.top = C(t)), (r.style.bottom = C(i)), (r.style.left = C(n)), (r.style.right = C(o)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: o } = this.ref;
        (t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != o && ((o.style.width = C(t)), (o.style.height = C(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                e
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeNorth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeSouth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeEast, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeWest, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeNorthWest, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeNorthEast, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeSouthWest, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, r.jsx)('div', {
                                  className: s()(p.resizeSouthEast, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    renderExtras() {
        let {
                props: { renderExtras: e, anchor: t },
                setLockExtras: n
            } = this,
            i = null == e ? void 0 : e(n);
        return null != i
            ? (0, r.jsx)('div', {
                  className: s()({
                      [p.extras]: !0,
                      [p.extrasBottomOriented]: null != t.bottom,
                      [p.extrasRightOriented]: null != t.right
                  }),
                  children: i
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: o = 2, borderRadius: r = 12 },
            state: { operation: l }
        } = this;
        return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: o,
            padding: i,
            borderRadius: r + o + i,
            zIndex: null != l ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: o },
            size: r,
            anchor: l,
            setLockExtras: a,
            state: { anchorTopOverride: s, anchorLeftOverride: d }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != l.top,
            anchorLeft: null != d ? d : null != l.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: o,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: o, lockExtras: l }
        } = this;
        return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: s()(
                {
                    [p.wrapper]: !0,
                    [p.operation]: o,
                    [p.unlocked]: !n,
                    [p.lockExtras]: l
                },
                i
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(e) {
        super(e),
            f(this, 'anchor', void 0),
            f(this, 'size', void 0),
            f(this, 'ref', l.createRef()),
            f(this, 'dragState', {
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
            f(this, 'state', {
                lockExtras: !0,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            f(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            f(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === _.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            f(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: o },
                        state: { operation: r, operationStarted: l }
                    } = this;
                !(null == r || (!l && 3 > g(i, o, t, n))) && ('MOVE' === r ? this.handleDragMove(t, n) : v.has(r) && this.handleResizeMove(t, n));
            }),
            f(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: o,
                        active: r,
                        container: { maxX: l, maxY: a }
                    }
                } = this;
                if (null == i || !r) return;
                let { width: s, height: d } = Z(i, this.size),
                    c = (0, h.PY)(this.anchor, l, a, s, d);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(c);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    };
                } else {
                    let i = I(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: s,
                            offsetHeight: d,
                            dragOrientedCoords: i
                        });
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        o.addEventListener('mousemove', this.handleMouseMove), o.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            f(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let o = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, Z(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: o } = Z(this.ref.current, this.size),
                        r = (0, h.PY)(this.anchor, e, t, n, o),
                        l = (0, h.R)(r);
                    this.setDOMPositions(l),
                        this.setDOMSize({
                            width: n,
                            height: o
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    o
                );
            }),
            f(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = E(e.anchor)),
            (this.size = x(e.size, e.minSize.width, e.minSize.height));
    }
}
f(b, 'Operations', m);
