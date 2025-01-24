i.d(e, {
    B: function () {
        return n;
    },
    Z: function () {
        return N;
    }
}),
    i(47120),
    i(411104);
var n,
    l,
    o,
    r = i(200651),
    s = i(192379),
    a = i(120356),
    u = i.n(a),
    d = i(642128),
    c = i(902704),
    h = i(585483),
    E = i(434529),
    p = i(981631),
    f = i(706446);
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
let _ = (t, e, i, n) => Math.pow(t - i, 2) + Math.pow(e - n, 2);
((o = n || (n = {})).MOVE = 'MOVE'), (o.RESIZE_NORTH = 'RESIZE_NORTH'), (o.RESIZE_WEST = 'RESIZE_WEST'), (o.RESIZE_EAST = 'RESIZE_EAST'), (o.RESIZE_SOUTH = 'RESIZE_SOUTH'), (o.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (o.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (o.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (o.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let g = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
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
    return (
        (i = 'auto' === e.width ? (null != t ? t.clientWidth : 0) : e.width),
        {
            width: i,
            height: (n = 'auto' === e.height ? (null != t ? t.clientHeight : 0) : e.height)
        }
    );
}
function O(t, e) {
    let { top: i, left: n, bottom: l, right: o } = e;
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
                right: o,
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
                right: o,
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
class N extends (l = s.Component) {
    shouldComponentUpdate(t, e) {
        return !(0, c.Z)(e, this.state) || !(0, c.Z)(t, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, c.Z)(t.anchor, this.props.anchor) || !(0, c.Z)(t.size, this.props.size) || !(0, c.Z)(t.minSize, this.props.minSize) || !(0, c.Z)(t.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(v(this.props.anchor)), this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)), h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(t, e) {
        null == e.operation && (!(0, c.Z)(this.props.anchor, t.anchor) && this.setDOMPositions(v(this.props.anchor)), !(0, c.Z)(this.props.size, t.size) && this.setDOMSize(m(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
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
                container: { maxX: l, maxY: o, minX: r, minY: s },
                onDragStart: a,
                onDrag: u,
                snapOrientation: d = !0
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p }
        } = this;
        if (null == i) return null;
        (t = Math.max(Math.min(l, t), r)), (e = Math.max(Math.min(o, e), s));
        let { width: f, height: S } = Z(i, this.size),
            _ = e - h,
            g = t - c,
            m = (0, E.ou)(
                (0, E.PY)(
                    {
                        top: _,
                        left: g,
                        bottom: void 0,
                        right: void 0
                    },
                    l,
                    o,
                    f,
                    S
                )
            ),
            v = d ? (0, E.R)(m) : O('RESIZE_SOUTH_EAST', m);
        this.setDOMPositions(v),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != v.top,
                    anchorLeftOverride: null != v.left
                },
                () => {
                    !p && null != a && a(), null != u && u(n, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(t, e) {
        let {
                props: {
                    id: i,
                    minSize: n,
                    container: { maxX: l, maxY: o, minX: r, minY: s },
                    onDragStart: a,
                    onDrag: u,
                    resizeValidation: d = C
                },
                state: { operation: h, operationStarted: p }
            } = this,
            { startX: f, startY: S } = this.dragState,
            _ = 0,
            g = 0;
        if (null == h) return;
        switch (((t = Math.max(Math.min(l, t), r)), (e = Math.max(Math.min(o, e), s)), h)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                _ -= f - t;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                _ += f - t;
        }
        switch (h) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                g -= S - e;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                g += S - e;
        }
        let m = d({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + _, n.width),
                    height: Math.max(this.dragState.offsetHeight + g, n.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            v = (0, E.BL)((0, E.ou)((0, E.PY)(this.dragState.dragOrientedCoords, l, o, m.width, m.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(m, !0), !(0, c.Z)(v, this.dragState.dragOrientedCoords) && ((this.dragState.dragOrientedCoords = v), this.setDOMPositions(this.dragState.dragOrientedCoords)), !p && (null != a && a(), this.setState({ operationStarted: !0 })), null != u && u(i, h, this.anchor, this.size);
    }
    setDOMPositions(t) {
        let { top: e, left: i, bottom: n, right: l } = t,
            { current: o } = this.ref;
        if (
            ((this.anchor = {
                top: e,
                left: i,
                bottom: n,
                right: l
            }),
            null != o)
        )
            (o.style.top = I(e)), (o.style.bottom = I(n)), (o.style.left = I(i)), (o.style.right = I(l));
    }
    setDOMSize(t) {
        let { width: e, height: i } = t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        if (
            ((e = 'auto' !== this.size.width || n ? e : 'auto'),
            (i = 'auto' !== this.size.height || n ? i : 'auto'),
            (this.size = {
                width: e,
                height: i
            }),
            null != l)
        )
            (l.style.width = I(e)), (l.style.height = I(i));
    }
    renderResizeHandles() {
        let { resizeY: t, resizeX: e, active: i } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeNorth, { [f.resizeNSCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeSouth, { [f.resizeNSCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                e
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeEast, { [f.resizeEWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeWest, { [f.resizeEWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                e && t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeNorthWest, { [f.resizeNWSECursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH_WEST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeNorthEast, { [f.resizeNESWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_NORTH_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeSouthWest, { [f.resizeNESWCursor]: i }),
                                  onMouseDown: (t) => this.handleResizeMouseDown(t, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(f.resizeSouthEast, { [f.resizeNWSECursor]: i }),
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
            ? (0, r.jsx)('div', {
                  className: u()({
                      [f.extras]: !0,
                      [f.extrasBottomOriented]: null != e.bottom,
                      [f.extrasRightOriented]: null != e.right
                  }),
                  children: n
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: t, style: e, minSize: i, padding: n = 8, borderWidth: l = 2, borderRadius: o = 12 },
            state: { operation: r }
        } = this;
        return {
            ...e,
            minWidth: i.width,
            minHeight: i.height,
            borderWidth: l,
            padding: n,
            borderRadius: o + l + n,
            zIndex: null != r ? 1000 : void 0,
            visibility: t ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: t, hidden: e, padding: i = 8, borderWidth: n = 2, locked: l },
            size: o,
            anchor: r,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u }
        } = this;
        return t({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != r.top,
            anchorLeft: null != u ? u : null != r.left,
            size: o,
            padding: i,
            borderWidth: n,
            setLockExtras: s,
            locked: l,
            hidden: e
        });
    }
    render() {
        let {
            props: { onClick: t, id: e, locked: i, className: n },
            state: { operationStarted: l, lockExtras: o }
        } = this;
        return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
                {
                    [f.wrapper]: !0,
                    [f.operation]: l,
                    [f.unlocked]: !i,
                    [f.lockExtras]: o
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
            S(this, 'ref', s.createRef()),
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
                null != i && t.button === p.AeJ.PRIMARY && e && this.handleOperationStart('MOVE', t.clientX, t.clientY);
            }),
            S(this, 'handleMouseMove', (t) => {
                t.preventDefault(), t.stopPropagation();
                let { clientX: e, clientY: i } = t,
                    {
                        dragState: { startX: n, startY: l },
                        state: { operation: o, operationStarted: r }
                    } = this;
                if (!(null == o || (!r && 3 > _(n, l, e, i)))) 'MOVE' === o ? this.handleDragMove(e, i) : g.has(o) && this.handleResizeMove(e, i);
            }),
            S(this, 'handleOperationStart', (t, e, i) => {
                let {
                    ref: { current: n },
                    props: {
                        targetWindow: l,
                        active: o,
                        container: { maxX: r, maxY: s }
                    }
                } = this;
                if (null == n || !o) return;
                let { width: a, height: u } = Z(n, this.size),
                    d = (0, E.PY)(this.anchor, r, s, a, u);
                if ('MOVE' === t) {
                    let { x: t, y: n } = (function (t) {
                        let { top: e, left: i } = t;
                        return {
                            x: i,
                            y: e
                        };
                    })(d);
                    this.dragState = {
                        ...this.dragState,
                        startX: e,
                        startY: i,
                        offsetX: e - t,
                        offsetY: i - n
                    };
                } else {
                    let n = O(t, d);
                    this.setDOMPositions(n),
                        (this.dragState = {
                            ...this.dragState,
                            startX: e,
                            startY: i,
                            offsetWidth: a,
                            offsetHeight: u,
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
                        o = (0, E.PY)(this.anchor, t, e, i, l),
                        r = (0, E.R)(o);
                    this.setDOMPositions(r),
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
S(N, 'Operations', n);
