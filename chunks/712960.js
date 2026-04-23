n.d(t, { A: () => _ });
var i,
    l = n(627968),
    s = n(64700),
    a = n(652215),
    r =
        (((i = r || {})[(i.DISABLED = 0)] = "DISABLED"),
        (i[(i.DEFAULT = 1)] = "DEFAULT"),
        (i[(i.OFFSET = 2)] = "OFFSET"),
        i);
function o(e, t, n, i, l) {
    let { top: s, bottom: a, left: r, right: o } = e;
    if (
        (null == s && null == a
            ? ((s = 0), (a = n - l))
            : null == s && null != a
              ? (s = n - (a + l))
              : null != s && (a = n - (s + l)),
        null == r && null == o
            ? ((r = 0), (o = t - i))
            : null == r && null != o
              ? (r = t - (o + i))
              : null == o && null != r && (o = t - (r + i)),
        null == s || null == a || null == r || null == o)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: s, left: r, bottom: a, right: o };
}
function d(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function c(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        0 === t || t <= i ? (i = null) : (t = null),
        0 === n || n <= l ? (l = null) : (n = null),
        { top: t, left: n, bottom: i, right: l }
    );
}
function u(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        i < 0 && ((t += i), (i = 0)),
        t < 0 && ((i += t), (t = 0)),
        l < 0 && ((n += l), (l = 0)),
        n < 0 && ((l += n), (n = 0)),
        { top: t, left: n, bottom: i, right: l }
    );
}
function h(e) {
    return null != e ? `${e}px` : "auto";
}
class _ extends s.PureComponent {
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
        const [t, n] = d(e.initialPosition);
        (this.position = (function (e) {
            let { top: t, left: n, bottom: i, right: l } = e;
            return (
                null == n && null == l && (n = 0),
                null != n && null != l && (l = null),
                null == t && null == i && (t = 0),
                null != t && null != i && (i = null),
                { top: t, left: n, bottom: i, right: l }
            );
        })(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: t,
                horizontalOrientation: n,
                atTopEdge: 0 === this.position.top,
            });
    }
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, t) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: i, atTopEdge: l },
            props: { maxX: s, maxY: a, onRelocated: r, snapOrientation: o },
        } = this;
        (e.maxX !== s ||
            e.maxY !== a ||
            e.onRelocated !== r ||
            e.snapOrientation !== o ||
            t.verticalOrientation !== n ||
            t.horizontalOrientation !== i ||
            t.atTopEdge !== l) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            {
                draggableRef: { current: s },
            } = this;
        (this.position = { top: t, left: n, bottom: i, right: l }),
            null != s && ((s.style.top = h(t)), (s.style.bottom = h(i)), (s.style.left = h(n)), (s.style.right = h(l)));
    }
    handleMouseDown = (e) => {
        let { top: t, left: n, bottom: i, right: l } = this.position,
            { dragAnywhere: s, selector: r, maxX: d, maxY: c } = this.props,
            { target: u } = e,
            { current: h } = this.draggableRef;
        if (
            null != h &&
            e.button === a.hE4.PRIMARY &&
            (s || (null != u && null != r && "" !== r && null != u.closest(r)))
        ) {
            let { x: s, y: a } = (function (e) {
                let { top: t, left: n } = e;
                return { x: n, y: t };
            })(o({ top: t, left: n, bottom: i, right: l }, d, c, h.clientWidth, h.clientHeight));
            (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - s),
                (this._offsetY = e.clientY - a),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: n } = e,
            { current: i } = this.draggableRef,
            {
                maxX: l,
                maxY: s,
                flipVertical: a,
                flipHorizontal: r,
                onDragStart: h,
                onDrag: _,
                onFlip: g,
                snapOrientation: A,
            } = this.props,
            { dragging: f, dragging: m, verticalOrientation: v, horizontalOrientation: p } = this.state,
            x = !1;
        if (
            null == i ||
            (!f &&
                9 >
                    ((e, t) => {
                        let { x: n, y: i } = e,
                            { x: l, y: s } = t;
                        return Math.pow(n - l, 2) + Math.pow(i - s, 2);
                    })(this._dragStart, { x: t, y: n }))
        )
            return;
        f = !0;
        let { clientWidth: b, clientHeight: I } = i,
            E = u(o({ top: n - this._offsetY, left: t - this._offsetX }, l, s, b, I));
        if (A) {
            let e = d((E = c(E)));
            (v = e[0]), (p = e[1]);
        } else E = { top: E.top, left: E.left };
        2 === r && p !== this.state.horizontalOrientation && ((this._offsetX = b - this._offsetX), (x = !0)),
            2 === a && v !== this.state.verticalOrientation && ((this._offsetY = I - this._offsetY), (x = !0)),
            this.setDOMPositions(E),
            m || h?.(E, i),
            _?.(E, i),
            x && g?.([v, p]),
            this.setState({ dragging: f, verticalOrientation: v, horizontalOrientation: p, atTopEdge: 0 === E.top });
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
                state: n,
                draggableRef: { current: i },
                props: { maxX: l, maxY: s, onRelocated: a, snapOrientation: r },
            } = this,
            { verticalOrientation: h, horizontalOrientation: _ } = this.state;
        if (null == i) return;
        let { clientHeight: g, clientWidth: A } = i,
            f = o(t, l, s, A, g);
        if (((f = u(f)), r)) {
            let t = d((e = c(f)));
            (h = t[0]), (_ = t[1]);
        } else e = { top: f.top, left: f.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        a?.(e, i), this.setDOMPositions(e);
        let m = 0 === e.top;
        (h !== n.verticalOrientation || _ !== n.horizontalOrientation || m !== n.atTopEdge) &&
            this.setState({ verticalOrientation: h, horizontalOrientation: _, atTopEdge: m });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: i, horizontalOrientation: a, atTopEdge: r } = this.state,
            { top: o, left: d, right: c, bottom: u } = this.position;
        return (0, l.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: { pointerEvents: n ? "none" : "auto", position: "absolute", top: o, left: d, bottom: u, right: c },
            children: s.cloneElement(s.Children.only(e), {
                flipped: "RIGHT" === a,
                verticalFlipped: "BOTTOM" === i,
                checkBounds: this.checkBounds,
                atTopEdge: r,
            }),
        });
    }
}
