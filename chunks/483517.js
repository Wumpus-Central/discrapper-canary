"use strict";
n.d(t, { A: () => c });
var i = n(477900),
    r = n(582128),
    a = n(333007),
    s = n(615300),
    l = n(621466),
    o = n(652215);
class d extends r.PureComponent {
    _ref = r.createRef();
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
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        r && this.grabDimensions();
        let a = this.translate(e, t);
        s.A.spring(this.state.position, { toValue: { x: a.x, y: a.y }, ...n }).start(i);
    }
    setPosition(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        n && this.grabDimensions();
        let i = this.translate(e, t);
        this.state.position.setValue({ x: i.x, y: i.y });
    }
    grabDimensions() {
        let e = this._ref.current.refs.node;
        (0, l.vq)(e) && ((this._height = e.clientHeight), (this._width = e.clientWidth));
    }
    translate(e, t) {
        let { maxX: n, maxY: i } = this.props;
        return (
            e < 0 ? (e = 0) : e > n - this._width && (e = n - this._width),
            t < 0 ? (t = 0) : t > i - this._height && (t = i - this._height),
            { x: e, y: t }
        );
    }
    render() {
        let { dragging: e, position: t } = this.state,
            { className: n, children: r } = this.props,
            a = [0, 1],
            l = ["0px", "1px"],
            o = s.A.accelerate({
                pointerEvents: e ? "none" : "auto",
                cursor: e ? "grabbing" : "grab",
                transform: [
                    { translateX: t.x.interpolate({ inputRange: a, outputRange: l }) },
                    { translateY: t.y.interpolate({ inputRange: a, outputRange: l }) },
                ],
                ...this.props.style,
            });
        return (0, i.jsx)(s.A.div, {
            ref: this._ref,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: o,
            onDragStart: this.handleHTMLDragStart,
            children: r,
        });
    }
    handleHTMLDragStart = (e) => {
        e.preventDefault();
    };
    handleMouseDown = (e) => {
        let { dragAnywhere: t, disabled: n, selector: i } = this.props;
        if (n) return;
        let { position: r } = this.state,
            a = e.target;
        if (e.button === o.hE4.PRIMARY && (t || (null != i && a.matches(i)))) {
            this.grabDimensions(),
                (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - r.x._value),
                (this._offsetY = e.clientY - r.y._value);
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
        let { onDragStart: t, onDrag: n, disabled: i } = this.props;
        if (i) return;
        let { dragging: r, dragging: s } = this.state,
            l = r;
        !r &&
            ((e, t) => {
                let { x: n, y: i } = e,
                    { x: r, y: a } = t;
                return Math.pow(n - r, 2) + Math.pow(i - a, 2);
            })(this._dragStart, { x: e.clientX, y: e.clientY }) > 9 &&
            (l = !0),
            l &&
                (this.animateToPosition(
                    e.clientX - this._offsetX,
                    e.clientY - this._offsetY,
                    { tension: 80, friction: 8 },
                    null,
                    !1,
                ),
                (0, a.flushSync)(() => {
                    this.setState({ dragging: l }), s || t?.(e.clientX, e.clientY), n?.(e.clientX, e.clientY);
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
let c = d;
