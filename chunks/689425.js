n.d(t, { Z: () => h });
var r,
    i = n(54381),
    a = n(473749),
    o = n(24156),
    s = n(748780),
    l = n(374470),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = (e, t) => {
        let { x: n, y: r } = e,
            { x: i, y: a } = t;
        return Math.pow(n - i, 2) + Math.pow(r - a, 2);
    },
    _ = 9;
class p extends (r = a.PureComponent) {
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
        s.Z.spring(
            this.state.position,
            d(
                {
                    toValue: {
                        x: a.x,
                        y: a.y,
                    },
                },
                n,
            ),
        ).start(r);
    }
    setPosition(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        n && this.grabDimensions();
        let r = this.translate(e, t);
        this.state.position.setValue({
            x: r.x,
            y: r.y,
        });
    }
    grabDimensions() {
        let e = this._ref.current.refs.node;
        (0, l.kK)(e) && ((this._height = e.clientHeight), (this._width = e.clientWidth));
    }
    translate(e, t) {
        let { maxX: n, maxY: r } = this.props;
        return (
            e < 0 ? (e = 0) : e > n - this._width && (e = n - this._width),
            t < 0 ? (t = 0) : t > r - this._height && (t = r - this._height),
            {
                x: e,
                y: t,
            }
        );
    }
    render() {
        let { dragging: e, position: t } = this.state,
            { className: n, children: r } = this.props,
            a = [0, 1],
            o = ["0px", "1px"],
            l = s.Z.accelerate(
                d(
                    {
                        pointerEvents: e ? "none" : "auto",
                        cursor: e ? "grabbing" : "grab",
                        transform: [
                            {
                                translateX: t.x.interpolate({
                                    inputRange: a,
                                    outputRange: o,
                                }),
                            },
                            {
                                translateY: t.y.interpolate({
                                    inputRange: a,
                                    outputRange: o,
                                }),
                            },
                        ],
                    },
                    this.props.style,
                ),
            );
        return (0, i.jsx)(s.Z.div, {
            ref: this._ref,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: l,
            onDragStart: this.handleHTMLDragStart,
            children: r,
        });
    }
    constructor(e) {
        super(e),
            u(this, "_ref", a.createRef()),
            u(this, "_height", 0),
            u(this, "_width", 0),
            u(this, "_dragStart", {
                x: 0,
                y: 0,
            }),
            u(this, "_offsetX", 0),
            u(this, "_offsetY", 0),
            u(this, "_removeListeners", () => {}),
            u(this, "handleHTMLDragStart", (e) => {
                e.preventDefault();
            }),
            u(this, "handleMouseDown", (e) => {
                let { dragAnywhere: t, disabled: n, selector: r } = this.props;
                if (n) return;
                let { position: i } = this.state,
                    a = e.target;
                if (e.button === c.AeJ.PRIMARY && (t || (null != r && a.matches(r)))) {
                    this.grabDimensions(),
                        (this._dragStart = {
                            x: e.clientX,
                            y: e.clientY,
                        }),
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
            }),
            u(this, "handleMouseMove", (e) => {
                e.preventDefault();
                let { onDragStart: t, onDrag: n, disabled: r } = this.props;
                if (r) return;
                let { dragging: i, dragging: a } = this.state,
                    s = i;
                !i &&
                    f(this._dragStart, {
                        x: e.clientX,
                        y: e.clientY,
                    }) > _ &&
                    (s = !0),
                    s &&
                        (this.animateToPosition(
                            e.clientX - this._offsetX,
                            e.clientY - this._offsetY,
                            {
                                tension: 80,
                                friction: 8,
                            },
                            null,
                            !1,
                        ),
                        (0, o.flushSync)(() => {
                            this.setState({ dragging: s }),
                                a || null == t || t(e.clientX, e.clientY),
                                null == n || n(e.clientX, e.clientY);
                        }));
            }),
            u(this, "handleMouseUp", (e) => {
                this._removeListeners(),
                    this.state.dragging &&
                        (0, o.flushSync)(() => {
                            this.setState({ dragging: !1 });
                            let { onDragEnd: t } = this.props;
                            null == t || t(e.clientX, e.clientY);
                        });
            });
        let t = new s.Z.Value(e.initialX),
            n = new s.Z.Value(e.initialY);
        this.state = {
            dragging: !1,
            position: new s.Z.ValueXY({
                x: t,
                y: n,
            }),
        };
    }
}
u(p, "defaultProps", {
    maxX: 0,
    maxY: 0,
    initialX: 0,
    initialY: 0,
    disabled: !1,
    dragAnywhere: !1,
});
let h = p;
