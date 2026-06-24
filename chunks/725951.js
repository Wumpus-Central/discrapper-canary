n.d(e, { A: () => m, f: () => l });
var i,
    s = n(627968),
    a = n(64700),
    r = n(503698),
    p = n.n(r),
    o = n(615300),
    c = n(868285),
    d = n(157088),
    l = (((i = {})[(i.RIGHT = -1)] = "RIGHT"), (i[(i.LEFT = 1)] = "LEFT"), i);
let u = { friction: 7, tension: 40, clamp: !0 };
class h extends a.PureComponent {
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
        return (0, s.jsx)(o.A.div, { style: this.getStyle(), className: d.A, children: this.props.children });
    }
}
let m = function (t) {
    let { children: e, step: n, direction: i, className: a, springSettings: r = u, fadeInOut: o = !1 } = t;
    return (0, s.jsx)(c.F, {
        component: "div",
        className: p()(d.Q, a),
        children: (0, s.jsx)(h, { direction: i, springSettings: r, fadeInOut: o, children: e }, n),
    });
};
