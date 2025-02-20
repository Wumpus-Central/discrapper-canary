n.d(t, {
    B: () => O,
    Z: () => j
}),
    n(47120),
    n(411104);
var i,
    r,
    o = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(642128),
    u = n(902704),
    d = n(585483),
    p = n(434529),
    f = n(981631),
    h = n(127798);
function g(e, t, n) {
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
function _(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
let v = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
var O = (((r = {}).MOVE = 'MOVE'), (r.RESIZE_NORTH = 'RESIZE_NORTH'), (r.RESIZE_WEST = 'RESIZE_WEST'), (r.RESIZE_EAST = 'RESIZE_EAST'), (r.RESIZE_SOUTH = 'RESIZE_SOUTH'), (r.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (r.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (r.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (r.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST'), r);
let b = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function y(e, t, n) {
    let { width: i, height: r } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === r ? 'auto' : Math.max(n, r)
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
            right: r
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
function I(e, t) {
    let { top: n, left: i, bottom: r, right: o } = t;
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
                right: o,
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
                right: o,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function C(e) {
    let { computedSize: t } = e;
    return t;
}
class j extends (i = l.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, u.Z)(t, this.state) || !(0, u.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, u.Z)(e.anchor, this.props.anchor) || !(0, u.Z)(e.size, this.props.size) || !(0, u.Z)(e.minSize, this.props.minSize) || !(0, u.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(E(this.props.anchor)), this.setDOMSize(y(this.props.size, this.props.minSize.width, this.props.minSize.height)), d.S.subscribe(f.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null != t.operation || ((0, u.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(E(this.props.anchor)), (0, u.Z)(this.props.size, e.size) || this.setDOMSize(y(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), d.S.unsubscribe(f.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
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
                container: { maxX: r, maxY: o, minX: l, minY: a },
                onDragStart: s,
                onDrag: c,
                snapOrientation: u = !0
            },
            dragState: { offsetX: d, offsetY: f },
            state: { operationStarted: h }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(o, t), a));
        let { width: g, height: _ } = S(n, this.size),
            m = t - f,
            v = e - d,
            O = (0, p.ou)(
                (0, p.PY)(
                    {
                        top: m,
                        left: v,
                        bottom: void 0,
                        right: void 0
                    },
                    r,
                    o,
                    g,
                    _
                )
            ),
            b = u ? (0, p.R)(O) : I('RESIZE_SOUTH_EAST', O);
        this.setDOMPositions(b),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != b.top,
                    anchorLeftOverride: null != b.left
                },
                () => {
                    h || null == s || s(), null != c && c(i, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: o, minX: l, minY: a },
                    onDragStart: s,
                    onDrag: c,
                    resizeValidation: d = C
                },
                state: { operation: f, operationStarted: h }
            } = this,
            { startX: g, startY: _ } = this.dragState,
            m = 0,
            v = 0;
        if (null == f) return;
        switch (((e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(o, t), a)), f)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                m -= g - e;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                m += g - e;
        }
        switch (f) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                v -= _ - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                v += _ - t;
        }
        let O = d({
                padding: 8,
                borderWidth: 2,
                operation: f,
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
            b = (0, p.BL)((0, p.ou)((0, p.PY)(this.dragState.dragOrientedCoords, r, o, O.width, O.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(O, !0), (0, u.Z)(b, this.dragState.dragOrientedCoords) || ((this.dragState.dragOrientedCoords = b), this.setDOMPositions(this.dragState.dragOrientedCoords)), h || (null != s && s(), this.setState({ operationStarted: !0 })), null != c && c(n, f, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: o } = this.ref;
        (this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: r
        }),
            null != o && ((o.style.top = x(t)), (o.style.bottom = x(i)), (o.style.left = x(n)), (o.style.right = x(r)));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: r } = this.ref;
        (t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != r && ((r.style.width = x(t)), (r.style.height = x(n)));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                e
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeNorth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeSouth, { [h.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeEast, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeWest, { [h.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeNorthWest, { [h.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeNorthEast, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeSouthWest, { [h.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, o.jsx)('div', {
                                  className: s()(h.resizeSouthEast, { [h.resizeNWSECursor]: n }),
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
            ? (0, o.jsx)('div', {
                  className: s()({
                      [h.extras]: !0,
                      [h.extrasBottomOriented]: null != t.bottom,
                      [h.extrasRightOriented]: null != t.right
                  }),
                  children: i
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: r = 2, borderRadius: o = 12 },
            state: { operation: l }
        } = this;
        return _({}, t, {
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: r,
            padding: i,
            borderRadius: o + r + i,
            zIndex: null != l ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        });
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: r },
            size: o,
            anchor: l,
            setLockExtras: a,
            state: { anchorTopOverride: s, anchorLeftOverride: c }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != l.top,
            anchorLeft: null != c ? c : null != l.left,
            size: o,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: r,
            hidden: t,
            showEmpty: this.state.lockExtras
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: r, lockExtras: l }
        } = this;
        return (0, o.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: s()(
                {
                    [h.wrapper]: !0,
                    [h.operation]: r,
                    [h.unlocked]: !n,
                    [h.lockExtras]: l
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
            g(this, 'anchor', void 0),
            g(this, 'size', void 0),
            g(this, 'ref', l.createRef()),
            g(this, 'dragState', {
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
            g(this, 'state', {
                lockExtras: !0,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            g(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            g(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === f.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            g(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: o, operationStarted: l }
                    } = this;
                !(null == o || (!l && 3 > v(i, r, t, n))) && ('MOVE' === o ? this.handleDragMove(t, n) : b.has(o) && this.handleResizeMove(t, n));
            }),
            g(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: o,
                        container: { maxX: l, maxY: a }
                    }
                } = this;
                if (null == i || !o) return;
                let { width: s, height: c } = S(i, this.size),
                    u = (0, p.PY)(this.anchor, l, a, s, c);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(u);
                    this.dragState = m(_({}, this.dragState), {
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    });
                } else {
                    let i = I(e, u);
                    this.setDOMPositions(i),
                        (this.dragState = m(_({}, this.dragState), {
                            startX: t,
                            startY: n,
                            offsetWidth: s,
                            offsetHeight: c,
                            dragOrientedCoords: i
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
            g(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, S(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = S(this.ref.current, this.size),
                        o = (0, p.PY)(this.anchor, e, t, n, r),
                        l = (0, p.R)(o);
                    this.setDOMPositions(l),
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
            g(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = E(e.anchor)),
            (this.size = y(e.size, e.minSize.width, e.minSize.height));
    }
}
g(j, 'Operations', O);
