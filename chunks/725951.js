r.d(t, { A: () => S, f: () => d });
var s,
    n = r(627968),
    l = r(64700),
    a = r(503698),
    i = r.n(a),
    o = r(615300),
    u = r(73939),
    c = r(752327),
    d = (((s = {})[(s.RIGHT = -1)] = "RIGHT"), (s[(s.LEFT = 1)] = "LEFT"), s);
let h = { friction: 7, tension: 40, clamp: !0 };
class _ extends l.PureComponent {
    _animated;
    constructor(e) {
        super(e), (this._animated = new o.A.Value(-1 * e.direction));
    }
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            o.A.spring(this._animated, { toValue: 0, ...this.props.springSettings }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.A.spring(this._animated, { toValue: this.props.direction, ...this.props.springSettings }).start(e);
    }
    getStyle() {
        let e = o.A.accelerate({
            transform: [
                { translateX: this._animated.interpolate({ inputRange: [0, 1], outputRange: ["0%", "-100%"] }) },
            ],
        });
        return (
            this.props.fadeInOut &&
                (e.opacity = this._animated.interpolate({ inputRange: [-1, 0, 1], outputRange: [0, 1, 0] })),
            e
        );
    }
    render() {
        return (0, n.jsx)(o.A.div, { style: this.getStyle(), className: c.A, children: this.props.children });
    }
}
let S = (e) => {
    let { children: t, step: r, direction: s, className: l, springSettings: a = h, fadeInOut: o = !1 } = e;
    return (0, n.jsx)(u.F, {
        component: "div",
        className: i()(c.Q, l),
        children: (0, n.jsx)(_, { direction: s, springSettings: a, fadeInOut: o, children: t }, r),
    });
};
