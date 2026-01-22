n.d(t, {
    A: () => E,
}),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(652215);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = (e, t) => {
        let { x: n, y: r } = e,
            { x: i, y: a } = t;
        return Math.pow(n - i, 2) + Math.pow(r - a, 2);
    },
    c = 9;
var u = (function (e) {
    return (e[(e.DISABLED = 0)] = "DISABLED"), (e[(e.DEFAULT = 1)] = "DEFAULT"), (e[(e.OFFSET = 2)] = "OFFSET"), e;
})(u || {});

function d(e, t, n, r, i) {
    let { top: a, bottom: s, left: o, right: l } = e;
    if (
        (null == a && null == s
            ? ((a = 0), (s = n - i))
            : null == a && null != s
              ? (a = n - (s + i))
              : null != a && (s = n - (a + i)),
        null == o && null == l
            ? ((o = 0), (l = t - r))
            : null == o && null != l
              ? (o = t - (l + r))
              : null == l && null != o && (l = t - (o + r)),
        null == a || null == s || null == o || null == l)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return {
        top: a,
        left: o,
        bottom: s,
        right: l,
    };
}

function f(e) {
    let { top: t, left: n } = e;
    return {
        x: n,
        y: t,
    };
}

function p(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}

function _(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        0 === t || t <= r ? (r = null) : (t = null),
        0 === n || n <= i ? (i = null) : (n = null),
        {
            top: t,
            left: n,
            bottom: r,
            right: i,
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
            right: i,
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
            right: i,
        }
    );
}

function g(e) {
    return null != e ? "".concat(e, "px") : "auto";
}
class E extends (r = a.PureComponent) {
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: r, atTopEdge: i },
            props: { maxX: a, maxY: s, onRelocated: o, snapOrientation: l },
        } = this;
        (e.maxX !== a ||
            e.maxY !== s ||
            e.onRelocated !== o ||
            e.snapOrientation !== l ||
            t.verticalOrientation !== n ||
            t.horizontalOrientation !== r ||
            t.atTopEdge !== i) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: r, right: i } = e,
            {
                draggableRef: { current: a },
            } = this;
        (this.position = {
            top: t,
            left: n,
            bottom: r,
            right: i,
        }),
            null != a && ((a.style.top = g(t)), (a.style.bottom = g(r)), (a.style.left = g(n)), (a.style.right = g(i)));
    }
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: r, horizontalOrientation: s, atTopEdge: o } = this.state,
            { top: l, left: c, right: u, bottom: d } = this.position,
            f = {
                pointerEvents: n ? "none" : "auto",
                position: "absolute",
                top: l,
                left: c,
                bottom: d,
                right: u,
            };
        return (0, i.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: f,
            children: a.cloneElement(a.Children.only(e), {
                flipped: "RIGHT" === s,
                verticalFlipped: "BOTTOM" === r,
                checkBounds: this.checkBounds,
                atTopEdge: o,
            }),
        });
    }
    constructor(e) {
        super(e),
            o(this, "draggableRef", a.createRef()),
            o(this, "_dragStart", {
                x: 0,
                y: 0,
            }),
            o(this, "_offsetX", void 0),
            o(this, "_offsetY", void 0),
            o(this, "position", void 0),
            o(this, "handleMouseDown", (e) => {
                let { top: t, left: n, bottom: r, right: i } = this.position,
                    { dragAnywhere: a, selector: o, maxX: l, maxY: c } = this.props,
                    { target: u } = e,
                    { current: p } = this.draggableRef;
                if (
                    null != p &&
                    e.button === s.hE4.PRIMARY &&
                    (a || (null != u && null != o && "" !== o && null != u.closest(o)))
                ) {
                    let { x: a, y: s } = f(
                        d(
                            {
                                top: t,
                                left: n,
                                bottom: r,
                                right: i,
                            },
                            l,
                            c,
                            p.clientWidth,
                            p.clientHeight,
                        ),
                    );
                    (this._dragStart = {
                        x: e.clientX,
                        y: e.clientY,
                    }),
                        (this._offsetX = e.clientX - a),
                        (this._offsetY = e.clientY - s),
                        window.addEventListener("mousemove", this.handleMouseMove),
                        window.addEventListener("mouseup", this.handleMouseUp);
                }
            }),
            o(this, "handleMouseMove", (e) => {
                e.preventDefault();
                let { clientX: t, clientY: n } = e,
                    { current: r } = this.draggableRef,
                    {
                        maxX: i,
                        maxY: a,
                        flipVertical: s,
                        flipHorizontal: o,
                        onDragStart: u,
                        onDrag: f,
                        onFlip: h,
                        snapOrientation: g,
                    } = this.props,
                    { dragging: E, dragging: b, verticalOrientation: y, horizontalOrientation: O } = this.state,
                    A = !1;
                if (
                    null == r ||
                    (!E &&
                        l(this._dragStart, {
                            x: t,
                            y: n,
                        }) < c)
                )
                    return;
                E = !0;
                let { clientWidth: v, clientHeight: S } = r,
                    I = m(
                        d(
                            {
                                top: n - this._offsetY,
                                left: t - this._offsetX,
                            },
                            i,
                            a,
                            v,
                            S,
                        ),
                    );
                if (g) {
                    let e = p((I = _(I)));
                    (y = e[0]), (O = e[1]);
                } else
                    I = {
                        top: I.top,
                        left: I.left,
                    };
                2 === o && O !== this.state.horizontalOrientation && ((this._offsetX = v - this._offsetX), (A = !0)),
                    2 === s && y !== this.state.verticalOrientation && ((this._offsetY = S - this._offsetY), (A = !0)),
                    this.setDOMPositions(I),
                    b || null == u || u(I, r),
                    null == f || f(I, r),
                    A && (null == h || h([y, O])),
                    this.setState({
                        dragging: E,
                        verticalOrientation: y,
                        horizontalOrientation: O,
                        atTopEdge: 0 === I.top,
                    });
            }),
            o(this, "handleMouseUp", () => {
                window.removeEventListener("mousemove", this.handleMouseMove),
                    window.removeEventListener("mouseup", this.handleMouseUp),
                    this.state.dragging &&
                        this.setState(
                            {
                                dragging: !1,
                            },
                            () => {
                                let { onDragEnd: e } = this.props,
                                    { current: t } = this.draggableRef;
                                null != t && null != e && e(this.position, t);
                            },
                        );
            }),
            o(this, "_checkBoundsRAF", null),
            o(this, "checkBounds", () => {
                null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF),
                    (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
            }),
            o(this, "_performCheckBounds", () => {
                let e,
                    {
                        position: t,
                        state: n,
                        draggableRef: { current: r },
                        props: { maxX: i, maxY: a, onRelocated: s, snapOrientation: o },
                    } = this,
                    { verticalOrientation: l, horizontalOrientation: c } = this.state;
                if (null == r) return;
                let { clientHeight: u, clientWidth: f } = r,
                    h = d(t, i, a, f, u);
                if (((h = m(h)), o)) {
                    let t = p((e = _(h)));
                    (l = t[0]), (c = t[1]);
                } else
                    e = {
                        top: h.top,
                        left: h.left,
                        right: null,
                        bottom: null,
                    };
                if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
                null == s || s(e, r), this.setDOMPositions(e);
                let g = 0 === e.top;
                (l !== n.verticalOrientation || c !== n.horizontalOrientation || g !== n.atTopEdge) &&
                    this.setState({
                        verticalOrientation: l,
                        horizontalOrientation: c,
                        atTopEdge: g,
                    });
            });
        const [t, n] = p(e.initialPosition);
        (this.position = h(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: n,
                atTopEdge: 0 === this.position.top,
            });
    }
}
o(E, "FlipTypes", u),
    o(E, "defaultProps", {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1,
    });
