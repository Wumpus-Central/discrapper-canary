n.d(e, { A: () => f, O: () => r });
var i,
    o = n(477900),
    l = n(582128),
    s = n(652215);
let r = 3;
var u =
    (((i = u || {})[(i.DISABLED = 0)] = "DISABLED"),
    (i[(i.DEFAULT = 1)] = "DEFAULT"),
    (i[(i.OFFSET = 2)] = "OFFSET"),
    i);
function a(t, e, n, i, o) {
    let { top: l, bottom: s, left: r, right: u } = t;
    if (
        (null == l && null == s
            ? ((l = 0), (s = n - o))
            : null == l && null != s
              ? (l = n - (s + o))
              : null != l && (s = n - (l + o)),
        null == r && null == u
            ? ((r = 0), (u = e - i))
            : null == r && null != u
              ? (r = e - (u + i))
              : null == u && null != r && (u = e - (r + i)),
        null == l || null == s || null == r || null == u)
    )
        throw Error("Logically this can never happen based on our if/else statements");
    return { top: l, left: r, bottom: s, right: u };
}
function h(t) {
    return [null == t.bottom ? "TOP" : "BOTTOM", null == t.right ? "LEFT" : "RIGHT"];
}
function p(t) {
    let { top: e, left: n, bottom: i, right: o } = t;
    return (
        0 === e || e <= i ? (i = null) : (e = null),
        0 === n || n <= o ? (o = null) : (n = null),
        { top: e, left: n, bottom: i, right: o }
    );
}
function d(t) {
    let { top: e, left: n, bottom: i, right: o } = t;
    return (
        i < 0 && ((e += i), (i = 0)),
        e < 0 && ((i += e), (e = 0)),
        o < 0 && ((n += o), (o = 0)),
        n < 0 && ((o += n), (n = 0)),
        { top: e, left: n, bottom: i, right: o }
    );
}
function c(t) {
    return null != t ? `${t}px` : "auto";
}
class f extends l.PureComponent {
    static FlipTypes = u;
    static defaultProps = {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1,
    };
    draggableRef = l.createRef();
    _dragStart = { x: 0, y: 0 };
    _offsetX = 0;
    _offsetY = 0;
    position;
    constructor(t) {
        super(t);
        const [e, n] = h(t.initialPosition);
        ((this.position = (function (t) {
            let { top: e, left: n, bottom: i, right: o } = t;
            return (
                null == n && null == o && (n = 0),
                null != n && null != o && (o = null),
                null == e && null == i && (e = 0),
                null != e && null != i && (i = null),
                { top: e, left: n, bottom: i, right: o }
            );
        })(t.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: e,
                horizontalOrientation: n,
                atTopEdge: 0 === this.position.top,
            }));
    }
    componentDidMount() {
        (this.checkBounds(), this.setDOMPositions(this.position));
    }
    componentDidUpdate(t, e) {
        let {
            state: { verticalOrientation: n, horizontalOrientation: i, atTopEdge: o },
            props: { maxX: l, maxY: s, onRelocated: r, snapOrientation: u },
        } = this;
        (t.maxX !== l ||
            t.maxY !== s ||
            t.onRelocated !== r ||
            t.snapOrientation !== u ||
            e.verticalOrientation !== n ||
            e.horizontalOrientation !== i ||
            e.atTopEdge !== o) &&
            this.checkBounds();
    }
    componentWillUnmount() {
        (window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp));
    }
    setDOMPositions(t) {
        let { top: e, left: n, bottom: i, right: o } = t,
            {
                draggableRef: { current: l },
            } = this;
        ((this.position = { top: e, left: n, bottom: i, right: o }),
            null != l &&
                ((l.style.top = c(e)), (l.style.bottom = c(i)), (l.style.left = c(n)), (l.style.right = c(o))));
    }
    handleMouseDown = (t) => {
        let { top: e, left: n, bottom: i, right: o } = this.position,
            { dragAnywhere: l, selector: r, maxX: u, maxY: h } = this.props,
            { target: p } = t,
            { current: d } = this.draggableRef;
        if (
            null != d &&
            t.button === s.hE4.PRIMARY &&
            (l || (null != p && null != r && "" !== r && null != p.closest(r)))
        ) {
            let { x: l, y: s } = (function (t) {
                let { top: e, left: n } = t;
                return { x: n, y: e };
            })(a({ top: e, left: n, bottom: i, right: o }, u, h, d.clientWidth, d.clientHeight));
            ((this._dragStart = { x: t.clientX, y: t.clientY }),
                (this._offsetX = t.clientX - l),
                (this._offsetY = t.clientY - s),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp));
        }
    };
    handleMouseMove = (t) => {
        let e;
        t.preventDefault();
        let { clientX: n, clientY: i } = t,
            { current: o } = this.draggableRef,
            {
                maxX: l,
                maxY: s,
                flipVertical: r,
                flipHorizontal: u,
                onDragStart: c,
                onDrag: f,
                onFlip: g,
                snapOrientation: m,
            } = this.props,
            { dragging: v, dragging: M, verticalOrientation: w, horizontalOrientation: E } = this.state,
            _ = !1;
        if (
            null == o ||
            (!v &&
                9 >
                    ((t, e) => {
                        let { x: n, y: i } = t,
                            { x: o, y: l } = e;
                        return Math.pow(n - o, 2) + Math.pow(i - l, 2);
                    })(this._dragStart, { x: n, y: i }))
        )
            return;
        v = !0;
        let { clientWidth: O, clientHeight: b } = o,
            R = d(a({ top: i - this._offsetY, left: n - this._offsetX }, l, s, O, b));
        if (m) {
            let t = h((e = p(R)));
            ((w = t[0]), (E = t[1]));
        } else e = { top: R.top, left: R.left };
        (2 === u && E !== this.state.horizontalOrientation && ((this._offsetX = O - this._offsetX), (_ = !0)),
            2 === r && w !== this.state.verticalOrientation && ((this._offsetY = b - this._offsetY), (_ = !0)),
            this.setDOMPositions(e),
            M || c?.(e, o),
            f?.(e, o),
            _ && g?.([w, E]),
            this.setState({ dragging: v, verticalOrientation: w, horizontalOrientation: E, atTopEdge: 0 === e.top }));
    };
    handleMouseUp = () => {
        (window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("mouseup", this.handleMouseUp),
            this.state.dragging &&
                this.setState({ dragging: !1 }, () => {
                    let { onDragEnd: t } = this.props,
                        { current: e } = this.draggableRef;
                    null != e && null != t && t(this.position, e);
                }));
    };
    _checkBoundsRAF = null;
    checkBounds = () => {
        (null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF),
            (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds)));
    };
    _performCheckBounds = () => {
        let t,
            {
                position: e,
                state: n,
                draggableRef: { current: i },
                props: { maxX: o, maxY: l, onRelocated: s, snapOrientation: r },
            } = this,
            { verticalOrientation: u, horizontalOrientation: c } = this.state;
        if (null == i) return;
        let { clientHeight: f, clientWidth: g } = i,
            m = a(e, o, l, g, f);
        if (((m = d(m)), r)) {
            let e = h((t = p(m)));
            ((u = e[0]), (c = e[1]));
        } else t = { top: m.top, left: m.left, right: null, bottom: null };
        if (e.left === t.left && e.right === t.right && e.top === t.top && e.bottom === t.bottom) return;
        (s?.(t, i), this.setDOMPositions(t));
        let v = 0 === t.top;
        (u !== n.verticalOrientation || c !== n.horizontalOrientation || v !== n.atTopEdge) &&
            this.setState({ verticalOrientation: u, horizontalOrientation: c, atTopEdge: v });
    };
    render() {
        let { children: t, className: e } = this.props,
            { dragging: n, verticalOrientation: i, horizontalOrientation: s, atTopEdge: r } = this.state,
            { top: u, left: a, right: h, bottom: p } = this.position;
        return (0, o.jsx)("div", {
            ref: this.draggableRef,
            className: e,
            onMouseDown: this.handleMouseDown,
            style: {
                pointerEvents: n ? "none" : "auto",
                position: "absolute",
                top: u ?? void 0,
                left: a ?? void 0,
                bottom: p ?? void 0,
                right: h ?? void 0,
            },
            children: l.cloneElement(l.Children.only(t), {
                flipped: "RIGHT" === s,
                verticalFlipped: "BOTTOM" === i,
                checkBounds: this.checkBounds,
                atTopEdge: r,
            }),
        });
    }
}
