n.d(t, {
    Z: () => h,
    n: () => f,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(215569),
    c = n(278397);
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
var f = (function (e) {
    return (e[(e.RIGHT = -1)] = "RIGHT"), (e[(e.LEFT = 1)] = "LEFT"), e;
})({});
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0,
};
class p extends i.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            s.Z.spring(this._animated, d({ toValue: 0 }, this.props.springSettings)).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        s.Z.spring(this._animated, d({ toValue: this.props.direction }, this.props.springSettings)).start(e);
    }
    getStyle() {
        let e = s.Z.accelerate({
            transform: [
                {
                    translateX: this._animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "-100%"],
                    }),
                },
            ],
        });
        return (
            this.props.fadeInOut &&
                (e.opacity = this._animated.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0, 1, 0],
                })),
            e
        );
    }
    render() {
        return (0, r.jsx)(s.Z.div, {
            style: this.getStyle(),
            className: c.item,
            children: this.props.children,
        });
    }
    constructor(e) {
        super(e), u(this, "_animated", void 0), (this._animated = new s.Z.Value(-1 * e.direction));
    }
}
let h = (e) => {
    let { children: t, step: n, direction: i, className: a, springSettings: s = _, fadeInOut: u = !1 } = e;
    return (0, r.jsx)(l.W, {
        component: "div",
        className: o()(c.animator, a),
        children: (0, r.jsx)(
            p,
            {
                direction: i,
                springSettings: s,
                fadeInOut: u,
                children: t,
            },
            n,
        ),
    });
};
