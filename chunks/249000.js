n.d(t, { Z: () => E }), n(411104), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(981631);
function s(e, t, n) {
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
let l = (e, t) => {
        let { x: n, y: r } = e,
            { x: i, y: o } = t;
        return Math.pow(n - i, 2) + Math.pow(r - o, 2);
    },
    c = 9;
var u = (function (e) {
    return (e[(e.DISABLED = 0)] = 'DISABLED'), (e[(e.DEFAULT = 1)] = 'DEFAULT'), (e[(e.OFFSET = 2)] = 'OFFSET'), e;
})(u || {});
function d(e, t, n, r, i) {
    let { top: o, bottom: a, left: s, right: l } = e;
    if ((null == o && null == a ? ((o = 0), (a = n - i)) : null == o && null != a ? (o = n - (a + i)) : null != o && (a = n - (o + i)), null == s && null == l ? ((s = 0), (l = t - r)) : null == s && null != l ? (s = t - (l + r)) : null == l && null != s && (l = t - (s + r)), null == o || null == a || null == s || null == l)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: o,
        left: s,
        bottom: a,
        right: l
    };
}
function f(e) {
    let { top: t, left: n } = e;
    return {
        x: n,
        y: t
    };
}
function _(e) {
    return [null == e.bottom ? 'TOP' : 'BOTTOM', null == e.right ? 'LEFT' : 'RIGHT'];
}
function p(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        0 === t || t <= r ? (r = null) : (t = null),
        0 === n || n <= i ? (i = null) : (n = null),
        {
            top: t,
            left: n,
            bottom: r,
            right: i
        }
    );
}
function h(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        null == n && null == i && (n = 0),
        null != n && null != i && (i = null),
        null == t && null == r && (t = 0),
        null != t && null != r && (r = null),
        {
            top: t,
            left: n,
            bottom: r,
            right: i
        }
    );
}
function m(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        r < 0 && ((t += r), (r = 0)),
        t < 0 && ((r += t), (t = 0)),
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        {
            top: t,
            left: n,
            bottom: r,
            right: i
        }
    );
}
function g(e) {
    return null != e ? ''.concat(e, 'px') : 'auto';
}
class E extends (r = o.PureComponent) {
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: r, atTopEdge: i },
            props: { maxX: o, maxY: a, onRelocated: s, snapOrientation: l }
        } = this;
        (e.maxX !== o || e.maxY !== a || e.onRelocated !== s || e.snapOrientation !== l || t.verticalOrientation !== n || t.horizontalOrientation !== r || t.atTopEdge !== i) && this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: r, right: i } = e,
            {
                draggableRef: { current: o }
            } = this;
        (this.position = {
            top: t,
            left: n,
            bottom: r,
            right: i
        }),
            null != o && ((o.style.top = g(t)), (o.style.bottom = g(r)), (o.style.left = g(n)), (o.style.right = g(i)));
    }
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: r, horizontalOrientation: a, atTopEdge: s } = this.state,
            { top: l, left: c, right: u, bottom: d } = this.position,
            f = {
                pointerEvents: n ? 'none' : 'auto',
                position: 'absolute',
                top: l,
                left: c,
                bottom: d,
                right: u
            };
        return (0, i.jsx)('div', {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: f,
            children: o.cloneElement(o.Children.only(e), {
                flipped: 'RIGHT' === a,
                verticalFlipped: 'BOTTOM' === r,
                checkBounds: this.checkBounds,
                atTopEdge: s
            })
        });
    }
    constructor(e) {
        super(e),
            s(this, 'draggableRef', o.createRef()),
            s(this, '_dragStart', {
                x: 0,
                y: 0
            }),
            s(this, '_offsetX', void 0),
            s(this, '_offsetY', void 0),
            s(this, 'position', void 0),
            s(this, 'handleMouseDown', (e) => {
                let { top: t, left: n, bottom: r, right: i } = this.position,
                    { dragAnywhere: o, selector: s, maxX: l, maxY: c } = this.props,
                    { target: u } = e,
                    { current: _ } = this.draggableRef;
                if (null != _ && e.button === a.AeJ.PRIMARY && (o || (null != u && null != s && '' !== s && null != u.closest(s)))) {
                    let { x: o, y: a } = f(
                        d(
                            {
                                top: t,
                                left: n,
                                bottom: r,
                                right: i
                            },
                            l,
                            c,
                            _.clientWidth,
                            _.clientHeight
                        )
                    );
                    (this._dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }),
                        (this._offsetX = e.clientX - o),
                        (this._offsetY = e.clientY - a),
                        window.addEventListener('mousemove', this.handleMouseMove),
                        window.addEventListener('mouseup', this.handleMouseUp);
                }
            }),
            s(this, 'handleMouseMove', (e) => {
                e.preventDefault();
                let { clientX: t, clientY: n } = e,
                    { current: r } = this.draggableRef,
                    { maxX: i, maxY: o, flipVertical: a, flipHorizontal: s, onDragStart: u, onDrag: f, onFlip: h, snapOrientation: g } = this.props,
                    { dragging: E, dragging: b, verticalOrientation: y, horizontalOrientation: v } = this.state,
                    O = !1;
                if (
                    null == r ||
                    (!E &&
                        l(this._dragStart, {
                            x: t,
                            y: n
                        }) < c)
                )
                    return;
                E = !0;
                let { clientWidth: I, clientHeight: S } = r,
                    T = m(
                        d(
                            {
                                top: n - this._offsetY,
                                left: t - this._offsetX
                            },
                            i,
                            o,
                            I,
                            S
                        )
                    );
                if (g) {
                    let e = _((T = p(T)));
                    (y = e[0]), (v = e[1]);
                } else
                    T = {
                        top: T.top,
                        left: T.left
                    };
                2 === s && v !== this.state.horizontalOrientation && ((this._offsetX = I - this._offsetX), (O = !0)),
                    2 === a && y !== this.state.verticalOrientation && ((this._offsetY = S - this._offsetY), (O = !0)),
                    this.setDOMPositions(T),
                    b || null == u || u(T, r),
                    null == f || f(T, r),
                    O && (null == h || h([y, v])),
                    this.setState({
                        dragging: E,
                        verticalOrientation: y,
                        horizontalOrientation: v,
                        atTopEdge: 0 === T.top
                    });
            }),
            s(this, 'handleMouseUp', () => {
                window.removeEventListener('mousemove', this.handleMouseMove),
                    window.removeEventListener('mouseup', this.handleMouseUp),
                    this.state.dragging &&
                        this.setState({ dragging: !1 }, () => {
                            let { onDragEnd: e } = this.props,
                                { current: t } = this.draggableRef;
                            null != t && null != e && e(this.position, t);
                        });
            }),
            s(this, '_checkBoundsRAF', null),
            s(this, 'checkBounds', () => {
                null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
            }),
            s(this, '_performCheckBounds', () => {
                let e,
                    {
                        position: t,
                        state: n,
                        draggableRef: { current: r },
                        props: { maxX: i, maxY: o, onRelocated: a, snapOrientation: s }
                    } = this,
                    { verticalOrientation: l, horizontalOrientation: c } = this.state;
                if (null == r) return;
                let { clientHeight: u, clientWidth: f } = r,
                    h = d(t, i, o, f, u);
                if (((h = m(h)), s)) {
                    let t = _((e = p(h)));
                    (l = t[0]), (c = t[1]);
                } else
                    e = {
                        top: h.top,
                        left: h.left,
                        right: null,
                        bottom: null
                    };
                if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
                null == a || a(e, r), this.setDOMPositions(e);
                let g = 0 === e.top;
                (l !== n.verticalOrientation || c !== n.horizontalOrientation || g !== n.atTopEdge) &&
                    this.setState({
                        verticalOrientation: l,
                        horizontalOrientation: c,
                        atTopEdge: g
                    });
            });
        let [t, n] = _(e.initialPosition);
        (this.position = h(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: n,
                atTopEdge: 0 === this.position.top
            });
    }
}
s(E, 'FlipTypes', u),
    s(E, 'defaultProps', {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1
    });
