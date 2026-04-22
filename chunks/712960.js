l.d(t, { A: () => g });
var n,
    i = l(627968),
    s = l(64700),
    a = l(652215),
    r =
        (((n = r || {})[(n.DISABLED = 0)] = "DISABLED"),
        (n[(n.DEFAULT = 1)] = "DEFAULT"),
        (n[(n.OFFSET = 2)] = "OFFSET"),
        n);
function o(e, t, l, n, i) {
    let { top: s, bottom: a, left: r, right: o } = e;
    if (
        (null == s && null == a
            ? ((s = 0), (a = l - i))
            : null == s && null != a
              ? (s = l - (a + i))
              : null != s && (a = l - (s + i)),
        null == r && null == o
            ? ((r = 0), (o = t - n))
            : null == r && null != o
              ? (r = t - (o + n))
              : null == o && null != r && (o = t - (r + n)),
        null == s || null == a || null == r || null == o)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: s, left: r, bottom: a, right: o };
}
function c(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function d(e) {
    let { top: t, left: l, bottom: n, right: i } = e;
    return (
        0 === t || t <= n ? (n = null) : (t = null),
        0 === l || l <= i ? (i = null) : (l = null),
        { top: t, left: l, bottom: n, right: i }
    );
}
function u(e) {
    let { top: t, left: l, bottom: n, right: i } = e;
    return (
        n < 0 && ((t += n), (n = 0)),
        t < 0 && ((n += t), (t = 0)),
        i < 0 && ((l += i), (i = 0)),
        l < 0 && ((i += l), (l = 0)),
        { top: t, left: l, bottom: n, right: i }
    );
}
function h(e) {
    return null != e ? `${e}px` : "auto";
}
class g extends s.PureComponent {
    static FlipTypes = r;
    static defaultProps = {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1,
    };
    draggableRef = s.createRef();
    _dragStart = { x: 0, y: 0 };
    _offsetX;
    _offsetY;
    position;
    constructor(e) {
        super(e);
        const [t, l] = c(e.initialPosition);
        (this.position = (function (e) {
            let { top: t, left: l, bottom: n, right: i } = e;
            return (
                null == l && null == i && (l = 0),
                null != l && null != i && (i = null),
                null == t && null == n && (t = 0),
                null != t && null != n && (n = null),
                { top: t, left: l, bottom: n, right: i }
            );
        })(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: l,
                atTopEdge: 0 === this.position.top,
            });
    }
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: l, horizontalOrientation: n, atTopEdge: i },
            props: { maxX: s, maxY: a, onRelocated: r, snapOrientation: o },
        } = this;
        (e.maxX !== s ||
            e.maxY !== a ||
            e.onRelocated !== r ||
            e.snapOrientation !== o ||
            t.verticalOrientation !== l ||
            t.horizontalOrientation !== n ||
            t.atTopEdge !== i) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: l, bottom: n, right: i } = e,
            {
                draggableRef: { current: s },
            } = this;
        (this.position = { top: t, left: l, bottom: n, right: i }),
            null != s && ((s.style.top = h(t)), (s.style.bottom = h(n)), (s.style.left = h(l)), (s.style.right = h(i)));
    }
    handleMouseDown = (e) => {
        let { top: t, left: l, bottom: n, right: i } = this.position,
            { dragAnywhere: s, selector: r, maxX: c, maxY: d } = this.props,
            { target: u } = e,
            { current: h } = this.draggableRef;
        if (
            null != h &&
            e.button === a.hE4.PRIMARY &&
            (s || (null != u && null != r && "" !== r && null != u.closest(r)))
        ) {
            let { x: s, y: a } = (function (e) {
                let { top: t, left: l } = e;
                return { x: l, y: t };
            })(o({ top: t, left: l, bottom: n, right: i }, c, d, h.clientWidth, h.clientHeight));
            (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - s),
                (this._offsetY = e.clientY - a),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: l } = e,
            { current: n } = this.draggableRef,
            {
                maxX: i,
                maxY: s,
                flipVertical: a,
                flipHorizontal: r,
                onDragStart: h,
                onDrag: g,
                onFlip: f,
                snapOrientation: A,
            } = this.props,
            { dragging: v, dragging: _, verticalOrientation: m, horizontalOrientation: p } = this.state,
            x = !1;
        if (
            null == n ||
            (!v &&
                9 >
                    ((e, t) => {
                        let { x: l, y: n } = e,
                            { x: i, y: s } = t;
                        return Math.pow(l - i, 2) + Math.pow(n - s, 2);
                    })(this._dragStart, { x: t, y: l }))
        )
            return;
        v = !0;
        let { clientWidth: C, clientHeight: E } = n,
            I = u(o({ top: l - this._offsetY, left: t - this._offsetX }, i, s, C, E));
        if (A) {
            let e = c((I = d(I)));
            (m = e[0]), (p = e[1]);
        } else I = { top: I.top, left: I.left };
        2 === r && p !== this.state.horizontalOrientation && ((this._offsetX = C - this._offsetX), (x = !0)),
            2 === a && m !== this.state.verticalOrientation && ((this._offsetY = E - this._offsetY), (x = !0)),
            this.setDOMPositions(I),
            _ || h?.(I, n),
            g?.(I, n),
            x && f?.([m, p]),
            this.setState({ dragging: v, verticalOrientation: m, horizontalOrientation: p, atTopEdge: 0 === I.top });
    };
    handleMouseUp = () => {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp),
            this.state.dragging &&
                this.setState({ dragging: !1 }, () => {
                    let { onDragEnd: e } = this.props,
                        { current: t } = this.draggableRef;
                    null != t && null != e && e(this.position, t);
                });
    };
    _checkBoundsRAF = null;
    checkBounds = () => {
        null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF),
            (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
    };
    _performCheckBounds = () => {
        let e,
            {
                position: t,
                state: l,
                draggableRef: { current: n },
                props: { maxX: i, maxY: s, onRelocated: a, snapOrientation: r },
            } = this,
            { verticalOrientation: h, horizontalOrientation: g } = this.state;
        if (null == n) return;
        let { clientHeight: f, clientWidth: A } = n,
            v = o(t, i, s, A, f);
        if (((v = u(v)), r)) {
            let t = c((e = d(v)));
            (h = t[0]), (g = t[1]);
        } else e = { top: v.top, left: v.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        a?.(e, n), this.setDOMPositions(e);
        let _ = 0 === e.top;
        (h !== l.verticalOrientation || g !== l.horizontalOrientation || _ !== l.atTopEdge) &&
            this.setState({ verticalOrientation: h, horizontalOrientation: g, atTopEdge: _ });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: l, verticalOrientation: n, horizontalOrientation: a, atTopEdge: r } = this.state,
            { top: o, left: c, right: d, bottom: u } = this.position;
        return (0, i.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: { pointerEvents: l ? "none" : "auto", position: "absolute", top: o, left: c, bottom: u, right: d },
            children: s.cloneElement(s.Children.only(e), {
                flipped: "RIGHT" === a,
                verticalFlipped: "BOTTOM" === n,
                checkBounds: this.checkBounds,
                atTopEdge: r,
            }),
        });
    }
}
