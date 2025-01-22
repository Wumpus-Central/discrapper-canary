r.d(n, {
    Z: function () {
        return I;
    }
});
var i,
    a,
    o,
    s = r(411104);
var l = r(47120);
var u = r(200651),
    c = r(192379),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = (e, n) => {
        let { x: r, y: i } = e,
            { x: a, y: o } = n;
        return Math.pow(r - a, 2) + Math.pow(i - o, 2);
    },
    h = Math.pow(3, 2);
function _(e, n, r, i, a) {
    let { top: o, bottom: s, left: l, right: u } = e;
    if ((null == o && null == s ? ((o = 0), (s = r - a)) : null == o && null != s ? (o = r - (s + a)) : null != o && (s = r - (o + a)), null == l && null == u ? ((l = 0), (u = n - i)) : null == l && null != u ? (l = n - (u + i)) : null == u && null != l && (u = n - (l + i)), null == o || null == s || null == l || null == u)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: o,
        left: l,
        bottom: s,
        right: u
    };
}
function m(e) {
    let { top: n, left: r } = e;
    return {
        x: r,
        y: n
    };
}
function g(e) {
    return [null == e.bottom ? 'TOP' : 'BOTTOM', null == e.right ? 'LEFT' : 'RIGHT'];
}
function E(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        0 === n || n <= i ? (i = null) : (n = null),
        0 === r || r <= a ? (a = null) : (r = null),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function v(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        null == r && null == a && (r = 0),
        null != r && null != a && (a = null),
        null == n && null == i && (n = 0),
        null != n && null != i && (i = null),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function y(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        a < 0 && ((r += a), (a = 0)),
        r < 0 && ((a += r), (r = 0)),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function b(e) {
    return null != e ? ''.concat(e, 'px') : 'auto';
}
!(function (e) {
    (e[(e.DISABLED = 0)] = 'DISABLED'), (e[(e.DEFAULT = 1)] = 'DEFAULT'), (e[(e.OFFSET = 2)] = 'OFFSET');
})(i || (i = {})),
    !(function (e) {
        (e.TOP = 'TOP'), (e.BOTTOM = 'BOTTOM'), (e.RIGHT = 'RIGHT'), (e.LEFT = 'LEFT');
    })(a || (a = {}));
class I extends (o = c.PureComponent) {
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, n) {
        let {
            state: { verticalOrientation: r, horizontalOrientation: i, atTopEdge: a },
            props: { maxX: o, maxY: s, onRelocated: l, snapOrientation: u }
        } = this;
        (e.maxX !== o || e.maxY !== s || e.onRelocated !== l || e.snapOrientation !== u || n.verticalOrientation !== r || n.horizontalOrientation !== i || n.atTopEdge !== a) && this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: n, left: r, bottom: i, right: a } = e,
            {
                draggableRef: { current: o }
            } = this;
        if (
            ((this.position = {
                top: n,
                left: r,
                bottom: i,
                right: a
            }),
            null != o)
        )
            (o.style.top = b(n)), (o.style.bottom = b(i)), (o.style.left = b(r)), (o.style.right = b(a));
    }
    render() {
        let { children: e, className: n } = this.props,
            { dragging: r, verticalOrientation: i, horizontalOrientation: a, atTopEdge: o } = this.state,
            { top: s, left: l, right: d, bottom: f } = this.position,
            p = {
                pointerEvents: r ? 'none' : 'auto',
                position: 'absolute',
                top: s,
                left: l,
                bottom: f,
                right: d
            };
        return (0, u.jsx)('div', {
            ref: this.draggableRef,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: p,
            children: c.cloneElement(c.Children.only(e), {
                flipped: 'RIGHT' === a,
                verticalFlipped: 'BOTTOM' === i,
                checkBounds: this.checkBounds,
                atTopEdge: o
            })
        });
    }
    constructor(e) {
        super(e),
            f(this, 'draggableRef', c.createRef()),
            f(this, '_dragStart', {
                x: 0,
                y: 0
            }),
            f(this, '_offsetX', void 0),
            f(this, '_offsetY', void 0),
            f(this, 'position', void 0),
            f(this, 'handleMouseDown', (e) => {
                let { top: n, left: r, bottom: i, right: a } = this.position,
                    { dragAnywhere: o, selector: s, maxX: l, maxY: u } = this.props,
                    { target: c } = e,
                    { current: f } = this.draggableRef;
                if (null != f && e.button === d.AeJ.PRIMARY && (o || (null != c && null != s && '' !== s && null != c.closest(s)))) {
                    let { x: o, y: s } = m(
                        _(
                            {
                                top: n,
                                left: r,
                                bottom: i,
                                right: a
                            },
                            l,
                            u,
                            f.clientWidth,
                            f.clientHeight
                        )
                    );
                    (this._dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }),
                        (this._offsetX = e.clientX - o),
                        (this._offsetY = e.clientY - s),
                        window.addEventListener('mousemove', this.handleMouseMove),
                        window.addEventListener('mouseup', this.handleMouseUp);
                }
            }),
            f(this, 'handleMouseMove', (e) => {
                e.preventDefault();
                let { clientX: n, clientY: r } = e,
                    { current: i } = this.draggableRef,
                    { maxX: a, maxY: o, flipVertical: s, flipHorizontal: l, onDragStart: u, onDrag: c, onFlip: d, snapOrientation: f } = this.props,
                    { dragging: m, dragging: v, verticalOrientation: b, horizontalOrientation: I } = this.state,
                    T = !1;
                if (
                    null == i ||
                    (!m &&
                        p(this._dragStart, {
                            x: n,
                            y: r
                        }) < h)
                )
                    return;
                m = !0;
                let { clientWidth: S, clientHeight: A } = i,
                    C = r - this._offsetY,
                    N = y(
                        _(
                            {
                                top: C,
                                left: n - this._offsetX
                            },
                            a,
                            o,
                            S,
                            A
                        )
                    );
                if (f) {
                    let e = g((N = E(N)));
                    (b = e[0]), (I = e[1]);
                } else
                    N = {
                        top: N.top,
                        left: N.left
                    };
                2 === l && I !== this.state.horizontalOrientation && ((this._offsetX = S - this._offsetX), (T = !0)),
                    2 === s && b !== this.state.verticalOrientation && ((this._offsetY = A - this._offsetY), (T = !0)),
                    this.setDOMPositions(N),
                    !v && (null == u || u(N, i)),
                    null == c || c(N, i),
                    T && (null == d || d([b, I])),
                    this.setState({
                        dragging: m,
                        verticalOrientation: b,
                        horizontalOrientation: I,
                        atTopEdge: 0 === N.top
                    });
            }),
            f(this, 'handleMouseUp', () => {
                window.removeEventListener('mousemove', this.handleMouseMove),
                    window.removeEventListener('mouseup', this.handleMouseUp),
                    this.state.dragging &&
                        this.setState({ dragging: !1 }, () => {
                            let { onDragEnd: e } = this.props,
                                { current: n } = this.draggableRef;
                            null != n && null != e && e(this.position, n);
                        });
            }),
            f(this, '_checkBoundsRAF', null),
            f(this, 'checkBounds', () => {
                null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
            }),
            f(this, '_performCheckBounds', () => {
                let e;
                let {
                        position: n,
                        state: r,
                        draggableRef: { current: i },
                        props: { maxX: a, maxY: o, onRelocated: s, snapOrientation: l }
                    } = this,
                    { verticalOrientation: u, horizontalOrientation: c } = this.state;
                if (null == i) return;
                let { clientHeight: d, clientWidth: f } = i,
                    p = _(n, a, o, f, d);
                if (((p = y(p)), l)) {
                    let n = g((e = E(p)));
                    (u = n[0]), (c = n[1]);
                } else
                    e = {
                        top: p.top,
                        left: p.left,
                        right: null,
                        bottom: null
                    };
                if (n.left === e.left && n.right === e.right && n.top === e.top && n.bottom === e.bottom) return;
                null == s || s(e, i), this.setDOMPositions(e);
                let h = 0 === e.top;
                (u !== r.verticalOrientation || c !== r.horizontalOrientation || h !== r.atTopEdge) &&
                    this.setState({
                        verticalOrientation: u,
                        horizontalOrientation: c,
                        atTopEdge: h
                    });
            });
        let [n, r] = g(e.initialPosition);
        (this.position = v(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: n,
                horizontalOrientation: r,
                atTopEdge: 0 === this.position.top
            });
    }
}
f(I, 'FlipTypes', i),
    f(I, 'defaultProps', {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1
    });
