n.d(t, {
    B: () => m,
    Z: () => y
}),
    n(47120),
    n(411104);
var i,
    l,
    r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    d = n(642128),
    u = n(902704),
    c = n(585483),
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
var m = (((l = {}).MOVE = 'MOVE'), (l.RESIZE_NORTH = 'RESIZE_NORTH'), (l.RESIZE_WEST = 'RESIZE_WEST'), (l.RESIZE_EAST = 'RESIZE_EAST'), (l.RESIZE_SOUTH = 'RESIZE_SOUTH'), (l.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (l.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (l.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (l.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), l);
let v = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function E(e, t, n) {
    let { width: i, height: l } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === l ? 'auto' : Math.max(n, l)
    };
}
function I(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        null == n && null == l && (n = 0),
        null != n && null != l && (l = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: l
        }
    );
}
function x(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function C(e, t) {
    let n = 0,
        i = 0;
    return {
        width: (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        height: 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height
    };
}
function S(e, t) {
    let { top: n, left: i, bottom: l, right: r } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: l,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: l,
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
function Z(e) {
    let { computedSize: t } = e;
    return t;
}
class y extends (i = o.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, u.Z)(t, this.state) || !(0, u.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, u.Z)(e.anchor, this.props.anchor) || !(0, u.Z)(e.size, this.props.size) || !(0, u.Z)(e.minSize, this.props.minSize) || !(0, u.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(I(this.props.anchor)), this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)), c.S.subscribe(_.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null != t.operation || ((0, u.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(I(this.props.anchor)), (0, u.Z)(this.props.size, e.size) || this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), c.S.unsubscribe(_.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
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
                container: { maxX: l, maxY: r, minX: o, minY: a },
                onDragStart: s,
                onDrag: d,
                snapOrientation: u = !0
            },
            dragState: { offsetX: c, offsetY: _ },
            state: { operationStarted: p }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(l, e), o)), (t = Math.max(Math.min(r, t), a));
        let { width: f, height: g } = C(n, this.size),
            m = t - _,
            v = e - c,
            E = (0, h.ou)(
                (0, h.PY)(
                    {
                        top: m,
                        left: v,
                        bottom: void 0,
                        right: void 0
                    },
                    l,
                    r,
                    f,
                    g
                )
            ),
            I = u ? (0, h.R)(E) : S('RESIZE_SOUTH_EAST', E);
        this.setDOMPositions(I),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != I.top,
                    anchorLeftOverride: null != I.left
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
                    container: { maxX: l, maxY: r, minX: o, minY: a },
                    onDragStart: s,
                    onDrag: d,
                    resizeValidation: c = Z
                },
                state: { operation: _, operationStarted: p }
            } = this,
            { startX: f, startY: g } = this.dragState,
            m = 0,
            v = 0;
        if (null == _) return;
        switch (((e = Math.max(Math.min(l, e), o)), (t = Math.max(Math.min(r, t), a)), _)) {
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
        let E = c({
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
            I = (0, h.BL)((0, h.ou)((0, h.PY)(this.dragState.dragOrientedCoords, l, r, E.width, E.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(E, !0), (0, u.Z)(I, this.dragState.dragOrientedCoords) || ((this.dragState.dragOrientedCoords = I), this.setDOMPositions(this.dragState.dragOrientedCoords)), p || (null != s && s(), this.setState({ operationStarted: !0 })), null != d && d(n, _, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            { current: r } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: l
        }),
            null != r && ((r.style.top = x(t)), (r.style.bottom = x(i)), (r.style.left = x(n)), (r.style.right = x(l)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        (t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != l && ((l.style.width = x(t)), (l.style.height = x(n)));
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
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: l = 2, borderRadius: r = 12 },
            state: { operation: o }
        } = this;
        return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: l,
            padding: i,
            borderRadius: r + l + i,
            zIndex: null != o ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: l },
            size: r,
            anchor: o,
            setLockExtras: a,
            state: { anchorTopOverride: s, anchorLeftOverride: d }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != o.top,
            anchorLeft: null != d ? d : null != o.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: l,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: l, lockExtras: o }
        } = this;
        return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: s()(
                {
                    [p.wrapper]: !0,
                    [p.operation]: l,
                    [p.unlocked]: !n,
                    [p.lockExtras]: o
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
            f(this, 'ref', o.createRef()),
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
                        dragState: { startX: i, startY: l },
                        state: { operation: r, operationStarted: o }
                    } = this;
                !(null == r || (!o && 3 > g(i, l, t, n))) && ('MOVE' === r ? this.handleDragMove(t, n) : v.has(r) && this.handleResizeMove(t, n));
            }),
            f(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: l,
                        active: r,
                        container: { maxX: o, maxY: a }
                    }
                } = this;
                if (null == i || !r) return;
                let { width: s, height: d } = C(i, this.size),
                    u = (0, h.PY)(this.anchor, o, a, s, d);
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
                    let i = S(e, u);
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
                        l.addEventListener('mousemove', this.handleMouseMove), l.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            f(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let l = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, C(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: l } = C(this.ref.current, this.size),
                        r = (0, h.PY)(this.anchor, e, t, n, l),
                        o = (0, h.R)(r);
                    this.setDOMPositions(o),
                        this.setDOMSize({
                            width: n,
                            height: l
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    l
                );
            }),
            f(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = I(e.anchor)),
            (this.size = E(e.size, e.minSize.width, e.minSize.height));
    }
}
f(y, 'Operations', m);
