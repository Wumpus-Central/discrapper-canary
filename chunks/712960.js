"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(652215);
let s = (e, t) => {
        let { x: n, y: r } = e,
            { x: i, y: a } = t;
        return Math.pow(n - i, 2) + Math.pow(r - a, 2);
    },
    o = 9;
var l = (function (e) {
    return (e[(e.DISABLED = 0)] = "DISABLED"), (e[(e.DEFAULT = 1)] = "DEFAULT"), (e[(e.OFFSET = 2)] = "OFFSET"), e;
})(l || {});
function u(e, t, n, r, i) {
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
    return { top: a, left: o, bottom: s, right: l };
}
function c(e) {
    let { top: t, left: n } = e;
    return { x: n, y: t };
}
function d(e) {
    return [null == e.bottom ? "TOP" : "BOTTOM", null == e.right ? "LEFT" : "RIGHT"];
}
function _(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        0 === t || t <= r ? (r = null) : (t = null),
        0 === n || n <= i ? (i = null) : (n = null),
        { top: t, left: n, bottom: r, right: i }
    );
}
function f(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        null == n && null == i && (n = 0),
        null != n && null != i && (i = null),
        null == t && null == r && (t = 0),
        null != t && null != r && (r = null),
        { top: t, left: n, bottom: r, right: i }
    );
}
function p(e) {
    let { top: t, left: n, bottom: r, right: i } = e;
    return (
        r < 0 && ((t += r), (r = 0)),
        t < 0 && ((r += t), (t = 0)),
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        { top: t, left: n, bottom: r, right: i }
    );
}
function h(e) {
    return null != e ? `${e}px` : "auto";
}
class m extends i.PureComponent {
    static FlipTypes = l;
    static defaultProps = {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1,
    };
    draggableRef = i.createRef();
    _dragStart = { x: 0, y: 0 };
    _offsetX;
    _offsetY;
    position;
    constructor(e) {
        super(e);
        const [t, n] = d(e.initialPosition);
        (this.position = f(e.initialPosition)),
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
        (this.position = { top: t, left: n, bottom: r, right: i }),
            null != a && ((a.style.top = h(t)), (a.style.bottom = h(r)), (a.style.left = h(n)), (a.style.right = h(i)));
    }
    handleMouseDown = (e) => {
        let { top: t, left: n, bottom: r, right: i } = this.position,
            { dragAnywhere: s, selector: o, maxX: l, maxY: d } = this.props,
            { target: _ } = e,
            { current: f } = this.draggableRef;
        if (
            null != f &&
            e.button === a.hE4.PRIMARY &&
            (s || (null != _ && null != o && "" !== o && null != _.closest(o)))
        ) {
            let { x: a, y: s } = c(u({ top: t, left: n, bottom: r, right: i }, l, d, f.clientWidth, f.clientHeight));
            (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - a),
                (this._offsetY = e.clientY - s),
                window.addEventListener("mousemove", this.handleMouseMove),
                window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { clientX: t, clientY: n } = e,
            { current: r } = this.draggableRef,
            {
                maxX: i,
                maxY: a,
                flipVertical: l,
                flipHorizontal: c,
                onDragStart: f,
                onDrag: h,
                onFlip: m,
                snapOrientation: g,
            } = this.props,
            { dragging: E, dragging: A, verticalOrientation: I, horizontalOrientation: T } = this.state,
            y = !1;
        if (null == r || (!E && s(this._dragStart, { x: t, y: n }) < o)) return;
        E = !0;
        let { clientWidth: S, clientHeight: v } = r,
            C = p(u({ top: n - this._offsetY, left: t - this._offsetX }, i, a, S, v));
        if (g) {
            let e = d((C = _(C)));
            (I = e[0]), (T = e[1]);
        } else C = { top: C.top, left: C.left };
        2 === c && T !== this.state.horizontalOrientation && ((this._offsetX = S - this._offsetX), (y = !0)),
            2 === l && I !== this.state.verticalOrientation && ((this._offsetY = v - this._offsetY), (y = !0)),
            this.setDOMPositions(C),
            A || f?.(C, r),
            h?.(C, r),
            y && m?.([I, T]),
            this.setState({ dragging: E, verticalOrientation: I, horizontalOrientation: T, atTopEdge: 0 === C.top });
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
                draggableRef: { current: r },
                props: { maxX: i, maxY: a, onRelocated: s, snapOrientation: o },
            } = this,
            { verticalOrientation: l, horizontalOrientation: c } = this.state;
        if (null == r) return;
        let { clientHeight: f, clientWidth: h } = r,
            m = u(t, i, a, h, f);
        if (((m = p(m)), o)) {
            let t = d((e = _(m)));
            (l = t[0]), (c = t[1]);
        } else e = { top: m.top, left: m.left, right: null, bottom: null };
        if (t.left === e.left && t.right === e.right && t.top === e.top && t.bottom === e.bottom) return;
        s?.(e, r), this.setDOMPositions(e);
        let g = 0 === e.top;
        (l !== n.verticalOrientation || c !== n.horizontalOrientation || g !== n.atTopEdge) &&
            this.setState({ verticalOrientation: l, horizontalOrientation: c, atTopEdge: g });
    };
    render() {
        let { children: e, className: t } = this.props,
            { dragging: n, verticalOrientation: a, horizontalOrientation: s, atTopEdge: o } = this.state,
            { top: l, left: u, right: c, bottom: d } = this.position,
            _ = { pointerEvents: n ? "none" : "auto", position: "absolute", top: l, left: u, bottom: d, right: c };
        return (0, r.jsx)("div", {
            ref: this.draggableRef,
            className: t,
            onMouseDown: this.handleMouseDown,
            style: _,
            children: i.cloneElement(i.Children.only(e), {
                flipped: "RIGHT" === s,
                verticalFlipped: "BOTTOM" === a,
                checkBounds: this.checkBounds,
                atTopEdge: o,
            }),
        });
    }
}
