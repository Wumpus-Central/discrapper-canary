"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(340287),
    s = n(615300),
    o = n(621466),
    l = n(652215);
let u = (e, t) => {
        let { x: n, y: r } = e,
            { x: i, y: a } = t;
        return Math.pow(n - i, 2) + Math.pow(r - a, 2);
    },
    c = 9;
class d extends i.PureComponent {
    _ref = i.createRef();
    _height = 0;
    _width = 0;
    _dragStart = { x: 0, y: 0 };
    _offsetX = 0;
    _offsetY = 0;
    _removeListeners = () => {};
    static defaultProps = { maxX: 0, maxY: 0, initialX: 0, initialY: 0, disabled: !1, dragAnywhere: !1 };
    constructor(e) {
        super(e);
        const t = new s.A.Value(e.initialX),
            n = new s.A.Value(e.initialY);
        this.state = { dragging: !1, position: new s.A.ValueXY({ x: t, y: n }) };
    }
    componentDidMount() {
        let { initialX: e, initialY: t } = this.props;
        this.setPosition(e, t);
    }
    componentWillUnmount() {
        this._removeListeners();
    }
    animateToPosition(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        i && this.grabDimensions();
        let a = this.translate(e, t);
        s.A.spring(this.state.position, { toValue: { x: a.x, y: a.y }, ...n }).start(r);
    }
    setPosition(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        n && this.grabDimensions();
        let r = this.translate(e, t);
        this.state.position.setValue({ x: r.x, y: r.y });
    }
    grabDimensions() {
        let e = this._ref.current.refs.node;
        (0, o.vq)(e) && ((this._height = e.clientHeight), (this._width = e.clientWidth));
    }
    translate(e, t) {
        let { maxX: n, maxY: r } = this.props;
        return (
            e < 0 ? (e = 0) : e > n - this._width && (e = n - this._width),
            t < 0 ? (t = 0) : t > r - this._height && (t = r - this._height),
            { x: e, y: t }
        );
    }
    render() {
        let { dragging: e, position: t } = this.state,
            { className: n, children: i } = this.props,
            a = [0, 1],
            o = ["0px", "1px"],
            l = s.A.accelerate({
                pointerEvents: e ? "none" : "auto",
                cursor: e ? "grabbing" : "grab",
                transform: [
                    { translateX: t.x.interpolate({ inputRange: a, outputRange: o }) },
                    { translateY: t.y.interpolate({ inputRange: a, outputRange: o }) },
                ],
                ...this.props.style,
            });
        return (0, r.jsx)(s.A.div, {
            ref: this._ref,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: l,
            onDragStart: this.handleHTMLDragStart,
            children: i,
        });
    }
    handleHTMLDragStart = (e) => {
        e.preventDefault();
    };
    handleMouseDown = (e) => {
        let { dragAnywhere: t, disabled: n, selector: r } = this.props;
        if (n) return;
        let { position: i } = this.state,
            a = e.target;
        if (e.button === l.hE4.PRIMARY && (t || (null != r && a.matches(r)))) {
            this.grabDimensions(),
                (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - i.x._value),
                (this._offsetY = e.clientY - i.y._value);
            let t = e.nativeEvent.view;
            this._removeListeners(),
                t.addEventListener("mousemove", this.handleMouseMove),
                t.addEventListener("mouseup", this.handleMouseUp),
                (this._removeListeners = () => {
                    t.removeEventListener("mousemove", this.handleMouseMove),
                        t.removeEventListener("mouseup", this.handleMouseUp);
                });
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { onDragStart: t, onDrag: n, disabled: r } = this.props;
        if (r) return;
        let { dragging: i, dragging: s } = this.state,
            o = i;
        !i && u(this._dragStart, { x: e.clientX, y: e.clientY }) > c && (o = !0),
            o &&
                (this.animateToPosition(
                    e.clientX - this._offsetX,
                    e.clientY - this._offsetY,
                    { tension: 80, friction: 8 },
                    null,
                    !1,
                ),
                (0, a.flushSync)(() => {
                    this.setState({ dragging: o }), s || t?.(e.clientX, e.clientY), n?.(e.clientX, e.clientY);
                }));
    };
    handleMouseUp = (e) => {
        this._removeListeners(),
            this.state.dragging &&
                (0, a.flushSync)(() => {
                    this.setState({ dragging: !1 });
                    let { onDragEnd: t } = this.props;
                    t?.(e.clientX, e.clientY);
                });
    };
}
let _ = d;
