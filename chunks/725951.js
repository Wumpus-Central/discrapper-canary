i.d(e, { A: () => m, f: () => c });
var n,
    s = i(627968),
    a = i(64700),
    r = i(503698),
    p = i.n(r),
    o = i(615300),
    d = i(868285),
    l = i(157088),
    c = (((n = {})[(n.RIGHT = -1)] = "RIGHT"), (n[(n.LEFT = 1)] = "LEFT"), n);
let h = { friction: 7, tension: 40, clamp: !0 };
class u extends a.PureComponent {
    _animated;
    constructor(t) {
        super(t), (this._animated = new o.A.Value(-1 * t.direction));
    }
    componentWillEnter(t) {
        this._animated.setValue(-this.props.direction),
            o.A.spring(this._animated, { toValue: 0, ...this.props.springSettings }).start(t);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(t) {
        o.A.spring(this._animated, { toValue: this.props.direction, ...this.props.springSettings }).start(t);
    }
    getStyle() {
        let t = o.A.accelerate({
            transform: [
                { translateX: this._animated.interpolate({ inputRange: [0, 1], outputRange: ["0%", "-100%"] }) },
            ],
        });
        return (
            this.props.fadeInOut &&
                (t.opacity = this._animated.interpolate({ inputRange: [-1, 0, 1], outputRange: [0, 1, 0] })),
            t
        );
    }
    render() {
        return (0, s.jsx)(o.A.div, { style: this.getStyle(), className: l.A, children: this.props.children });
    }
}
let m = (t) => {
    let { children: e, step: i, direction: n, className: a, springSettings: r = h, fadeInOut: o = !1 } = t;
    return (0, s.jsx)(d.F, {
        component: "div",
        className: p()(l.Q, a),
        children: (0, s.jsx)(u, { direction: n, springSettings: r, fadeInOut: o, children: e }, i),
    });
};
