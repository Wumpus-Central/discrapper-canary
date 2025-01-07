i.d(t, {
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
    s = i(200651),
    r = i(192379),
    a = i(120356),
    u = i.n(a),
    d = i(666912),
    c = i(902704),
    h = i(585483),
    f = i(434529),
    p = i(981631),
    E = i(706446);
function m(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let v = (e, t, i, n) => Math.pow(e - i, 2) + Math.pow(t - n, 2);
((o = n || (n = {})).MOVE = 'MOVE'), (o.RESIZE_NORTH = 'RESIZE_NORTH'), (o.RESIZE_WEST = 'RESIZE_WEST'), (o.RESIZE_EAST = 'RESIZE_EAST'), (o.RESIZE_SOUTH = 'RESIZE_SOUTH'), (o.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (o.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (o.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (o.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let g = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function S(e, t, i) {
    let { width: n, height: l } = e;
    return {
        width: 'auto' === n ? 'auto' : Math.max(t, n),
        height: 'auto' === l ? 'auto' : Math.max(i, l)
    };
}
function _(e) {
    let { top: t, left: i, bottom: n, right: l } = e;
    return (
        null == i && null == l && (i = 0),
        null != i && null != l && (l = void 0),
        null == t && null == n && (t = 0),
        null != t && null != n && (n = void 0),
        {
            top: t,
            left: i,
            bottom: n,
            right: l
        }
    );
}
function Z(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function C(e, t) {
    let i = 0,
        n = 0;
    return (
        (i = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        {
            width: i,
            height: (n = 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height)
        }
    );
}
function O(e, t) {
    let { top: i, left: n, bottom: l, right: o } = t;
    switch (e) {
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
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function I(e) {
    let { computedSize: t } = e;
    return t;
}
class N extends (l = r.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(_(this.props.anchor)), this.setDOMSize(S(this.props.size, this.props.minSize.width, this.props.minSize.height)), h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, c.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(_(this.props.anchor)), !(0, c.Z)(this.props.size, e.size) && this.setDOMSize(S(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleResizeMouseDown(e, t) {
        let { clientX: i, clientY: n } = e;
        e.stopPropagation(), this.handleOperationStart(t, i, n);
    }
    handleDragMove(e, t) {
        let {
            ref: { current: i },
            props: {
                id: n,
                container: { maxX: l, maxY: o, minX: s, minY: r },
                onDragStart: a,
                onDrag: u,
                snapOrientation: d = !0
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p }
        } = this;
        if (null == i) return null;
        (e = Math.max(Math.min(l, e), s)), (t = Math.max(Math.min(o, t), r));
        let { width: E, height: m } = C(i, this.size),
            v = t - h,
            g = e - c,
            S = (0, f.ou)(
                (0, f.PY)(
                    {
                        top: v,
                        left: g,
                        bottom: void 0,
                        right: void 0
                    },
                    l,
                    o,
                    E,
                    m
                )
            ),
            _ = d ? (0, f.R)(S) : O('RESIZE_SOUTH_EAST', S);
        this.setDOMPositions(_),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != _.top,
                    anchorLeftOverride: null != _.left
                },
                () => {
                    !p && null != a && a(), null != u && u(n, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: i,
                    minSize: n,
                    container: { maxX: l, maxY: o, minX: s, minY: r },
                    onDragStart: a,
                    onDrag: u,
                    resizeValidation: d = I
                },
                state: { operation: h, operationStarted: p }
            } = this,
            { startX: E, startY: m } = this.dragState,
            v = 0,
            g = 0;
        if (null == h) return;
        switch (((e = Math.max(Math.min(l, e), s)), (t = Math.max(Math.min(o, t), r)), h)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                v -= E - e;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                v += E - e;
        }
        switch (h) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                g -= m - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                g += m - t;
        }
        let S = d({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + v, n.width),
                    height: Math.max(this.dragState.offsetHeight + g, n.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            _ = (0, f.BL)((0, f.ou)((0, f.PY)(this.dragState.dragOrientedCoords, l, o, S.width, S.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(S, !0), !(0, c.Z)(_, this.dragState.dragOrientedCoords) && ((this.dragState.dragOrientedCoords = _), this.setDOMPositions(this.dragState.dragOrientedCoords)), !p && (null != a && a(), this.setState({ operationStarted: !0 })), null != u && u(i, h, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: i, bottom: n, right: l } = e,
            { current: o } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: i,
                bottom: n,
                right: l
            }),
            null != o)
        )
            (o.style.top = Z(t)), (o.style.bottom = Z(n)), (o.style.left = Z(i)), (o.style.right = Z(l));
    }
    setDOMSize(e) {
        let { width: t, height: i } = e,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        if (
            ((t = 'auto' !== this.size.width || n ? t : 'auto'),
            (i = 'auto' !== this.size.height || n ? i : 'auto'),
            (this.size = {
                width: t,
                height: i
            }),
            null != l)
        )
            (l.style.width = Z(t)), (l.style.height = Z(i));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: i } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeNorth, { [E.resizeNSCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeSouth, { [E.resizeNSCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeEast, { [E.resizeEWCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeWest, { [E.resizeEWCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeNorthWest, { [E.resizeNWSECursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeNorthEast, { [E.resizeNESWCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeSouthWest, { [E.resizeNESWCursor]: i }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, s.jsx)('div', {
                                  className: u()(E.resizeSouthEast, { [E.resizeNWSECursor]: i }),
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
                setLockExtras: i
            } = this,
            n = null == e ? void 0 : e(i);
        return null != n
            ? (0, s.jsx)('div', {
                  className: u()({
                      [E.extras]: !0,
                      [E.extrasBottomOriented]: null != t.bottom,
                      [E.extrasRightOriented]: null != t.right
                  }),
                  children: n
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: i, padding: n = 8, borderWidth: l = 2, borderRadius: o = 12 },
            state: { operation: s }
        } = this;
        return {
            ...t,
            minWidth: i.width,
            minHeight: i.height,
            borderWidth: l,
            padding: n,
            borderRadius: o + l + n,
            zIndex: null != s ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: i = 8, borderWidth: n = 2, locked: l },
            size: o,
            anchor: s,
            setLockExtras: r,
            state: { anchorTopOverride: a, anchorLeftOverride: u }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != s.top,
            anchorLeft: null != u ? u : null != s.left,
            size: o,
            padding: i,
            borderWidth: n,
            setLockExtras: r,
            locked: l,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: i, className: n },
            state: { operationStarted: l, lockExtras: o }
        } = this;
        return (0, s.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
                {
                    [E.wrapper]: !0,
                    [E.operation]: l,
                    [E.unlocked]: !i,
                    [E.lockExtras]: o
                },
                n
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(e) {
        super(e),
            m(this, 'anchor', void 0),
            m(this, 'size', void 0),
            m(this, 'ref', r.createRef()),
            m(this, 'dragState', {
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
            m(this, 'state', {
                lockExtras: !1,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            m(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            m(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: i } = this.ref;
                null != i && e.button === p.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            m(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: i } = e,
                    {
                        dragState: { startX: n, startY: l },
                        state: { operation: o, operationStarted: s }
                    } = this;
                if (!(null == o || (!s && 3 > v(n, l, t, i)))) 'MOVE' === o ? this.handleDragMove(t, i) : g.has(o) && this.handleResizeMove(t, i);
            }),
            m(this, 'handleOperationStart', (e, t, i) => {
                let {
                    ref: { current: n },
                    props: {
                        targetWindow: l,
                        active: o,
                        container: { maxX: s, maxY: r }
                    }
                } = this;
                if (null == n || !o) return;
                let { width: a, height: u } = C(n, this.size),
                    d = (0, f.PY)(this.anchor, s, r, a, u);
                if ('MOVE' === e) {
                    let { x: e, y: n } = (function (e) {
                        let { top: t, left: i } = e;
                        return {
                            x: i,
                            y: t
                        };
                    })(d);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: i,
                        offsetX: t - e,
                        offsetY: i - n
                    };
                } else {
                    let n = O(e, d);
                    this.setDOMPositions(n),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: i,
                            offsetWidth: a,
                            offsetHeight: u,
                            dragOrientedCoords: n
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
            m(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: i, onDragEnd: n } = this.props;
                i.removeEventListener('mousemove', this.handleMouseMove), i.removeEventListener('mouseup', this.handleOperationEnd);
                let l = t
                    ? () => {
                          let { onUpdate: t, id: i } = this.props;
                          t(e, i, this.anchor, this.size, C(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: i, height: l } = C(this.ref.current, this.size),
                        o = (0, f.PY)(this.anchor, e, t, i, l),
                        s = (0, f.R)(o);
                    this.setDOMPositions(s),
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
            m(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = _(e.anchor)),
            (this.size = S(e.size, e.minSize.width, e.minSize.height));
    }
}
m(N, 'Operations', n);
