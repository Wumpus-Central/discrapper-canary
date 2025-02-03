n.d(t, { Z: () => E }), n(411104), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(981631);
function o(e, t, n) {
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
        let { x: n, y: i } = e,
            { x: r, y: a } = t;
        return Math.pow(n - r, 2) + Math.pow(i - a, 2);
    },
    u = 9;
var c = (function (e) {
    return (e[(e.DISABLED = 0)] = 'DISABLED'), (e[(e.DEFAULT = 1)] = 'DEFAULT'), (e[(e.OFFSET = 2)] = 'OFFSET'), e;
})(c || {});
function d(e, t, n, i, r) {
    let { top: a, bottom: s, left: o, right: l } = e;
    if ((null == a && null == s ? ((a = 0), (s = n - r)) : null == a && null != s ? (a = n - (s + r)) : null != a && (s = n - (a + r)), null == o && null == l ? ((o = 0), (l = t - i)) : null == o && null != l ? (o = t - (l + i)) : null == l && null != o && (l = t - (o + i)), null == a || null == s || null == o || null == l)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: a,
        left: o,
        bottom: s,
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
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= r ? (r = null) : (n = null),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function h(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        null == n && null == r && (n = 0),
        null != n && null != r && (r = null),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = null),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function m(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        i < 0 && ((t += i), (i = 0)),
        t < 0 && ((i += t), (t = 0)),
        r < 0 && ((n += r), (r = 0)),
        n < 0 && ((r += n), (n = 0)),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function g(e) {
    return null != e ? ''.concat(e, 'px') : 'auto';
}
class E extends (i = a.PureComponent) {
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: i, atTopEdge: r },
            props: { maxX: a, maxY: s, onRelocated: o, snapOrientation: l }
        } = this;
        (e.maxX !== a || e.maxY !== s || e.onRelocated !== o || e.snapOrientation !== l || t.verticalOrientation !== n || t.horizontalOrientation !== i || t.atTopEdge !== r) && this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            {
                draggableRef: { current: a }
            } = this;
        (this.position = {
            top: t,
            left: n,
            bottom: i,
            right: r
        }),
            null != a && ((a.style.top = g(t)), (a.style.bottom = g(i)), (a.style.left = g(n)), (a.style.right = g(r)));
    }
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: i, horizontalOrientation: s, atTopEdge: o } = this.state,
            { top: l, left: u, right: c, bottom: d } = this.position,
            f = {
                pointerEvents: n ? 'none' : 'auto',
                position: 'absolute',
                top: l,
                left: u,
                bottom: d,
                right: c
            };
        return (0, r.jsx)('div', {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: f,
            children: a.cloneElement(a.Children.only(e), {
                flipped: 'RIGHT' === s,
                verticalFlipped: 'BOTTOM' === i,
                checkBounds: this.checkBounds,
                atTopEdge: o
            })
        });
    }
    constructor(e) {
        super(e),
            o(this, 'draggableRef', a.createRef()),
            o(this, '_dragStart', {
                x: 0,
                y: 0
            }),
            o(this, '_offsetX', void 0),
            o(this, '_offsetY', void 0),
            o(this, 'position', void 0),
            o(this, 'handleMouseDown', (e) => {
                let { top: t, left: n, bottom: i, right: r } = this.position,
                    { dragAnywhere: a, selector: o, maxX: l, maxY: u } = this.props,
                    { target: c } = e,
                    { current: _ } = this.draggableRef;
                if (null != _ && e.button === s.AeJ.PRIMARY && (a || (null != c && null != o && '' !== o && null != c.closest(o)))) {
                    let { x: a, y: s } = f(
                        d(
                            {
                                top: t,
                                left: n,
                                bottom: i,
                                right: r
                            },
                            l,
                            u,
                            _.clientWidth,
                            _.clientHeight
                        )
                    );
                    (this._dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }),
                        (this._offsetX = e.clientX - a),
                        (this._offsetY = e.clientY - s),
                        window.addEventListener('mousemove', this.handleMouseMove),
                        window.addEventListener('mouseup', this.handleMouseUp);
                }
            }),
            o(this, 'handleMouseMove', (e) => {
                e.preventDefault();
                let { clientX: t, clientY: n } = e,
                    { current: i } = this.draggableRef,
                    { maxX: r, maxY: a, flipVertical: s, flipHorizontal: o, onDragStart: c, onDrag: f, onFlip: h, snapOrientation: g } = this.props,
                    { dragging: E, dragging: v, verticalOrientation: y, horizontalOrientation: I } = this.state,
                    b = !1;
                if (
                    null == i ||
                    (!E &&
                        l(this._dragStart, {
                            x: t,
                            y: n
                        }) < u)
                )
                    return;
                E = !0;
                let { clientWidth: T, clientHeight: S } = i,
                    A = m(
                        d(
                            {
                                top: n - this._offsetY,
                                left: t - this._offsetX
                            },
                            r,
                            a,
                            T,
                            S
                        )
                    );
                if (g) {
                    let e = _((A = p(A)));
                    (y = e[0]), (I = e[1]);
                } else
                    A = {
                        top: A.top,
                        left: A.left
                    };
                2 === o && I !== this.state.horizontalOrientation && ((this._offsetX = T - this._offsetX), (b = !0)),
                    2 === s && y !== this.state.verticalOrientation && ((this._offsetY = S - this._offsetY), (b = !0)),
                    this.setDOMPositions(A),
                    v || null == c || c(A, i),
                    null == f || f(A, i),
                    b && (null == h || h([y, I])),
                    this.setState({
                        dragging: E,
                        verticalOrientation: y,
                        horizontalOrientation: I,
                        atTopEdge: 0 === A.top
                    });
            }),
            o(this, 'handleMouseUp', () => {
                window.removeEventListener('mousemove', this.handleMouseMove),
                    window.removeEventListener('mouseup', this.handleMouseUp),
                    this.state.dragging &&
                        this.setState({ dragging: !1 }, () => {
                            let { onDragEnd: e } = this.props,
                                { current: t } = this.draggableRef;
                            null != t && null != e && e(this.position, t);
                        });
            }),
            o(this, '_checkBoundsRAF', null),
            o(this, 'checkBounds', () => {
                null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
            }),
            o(this, '_performCheckBounds', () => {
                let e;
                let {
                        position: t,
                        state: n,
                        draggableRef: { current: i },
                        props: { maxX: r, maxY: a, onRelocated: s, snapOrientation: o }
                    } = this,
                    { verticalOrientation: l, horizontalOrientation: u } = this.state;
                if (null == i) return;
                let { clientHeight: c, clientWidth: f } = i,
                    h = d(t, r, a, f, c);
                if (((h = m(h)), o)) {
                    let t = _((e = p(h)));
                    (l = t[0]), (u = t[1]);
                } else
                    e = {
                        top: h.top,
                        left: h.left,
                        right: null,
                        bottom: null
                    };
                if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
                null == s || s(e, i), this.setDOMPositions(e);
                let g = 0 === e.top;
                (l !== n.verticalOrientation || u !== n.horizontalOrientation || g !== n.atTopEdge) &&
                    this.setState({
                        verticalOrientation: l,
                        horizontalOrientation: u,
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
o(E, 'FlipTypes', c),
    o(E, 'defaultProps', {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1
    });
