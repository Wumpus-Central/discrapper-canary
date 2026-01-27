r.d(t, {
    A: () => S,
    f: () => p,
});
var n,
    l = r(627968),
    s = r(64700),
    a = r(503698),
    i = r.n(a),
    o = r(615300),
    c = r(73939),
    u = r(752327);

function d(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                d(e, t, r[t]);
            });
    }
    return e;
}
var p = (((n = {})[(n.RIGHT = -1)] = "RIGHT"), (n[(n.LEFT = 1)] = "LEFT"), n);
let f = {
    friction: 7,
    tension: 40,
    clamp: !0,
};
class g extends s.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            o.A.spring(
                this._animated,
                h(
                    {
                        toValue: 0,
                    },
                    this.props.springSettings,
                ),
            ).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.A.spring(
            this._animated,
            h(
                {
                    toValue: this.props.direction,
                },
                this.props.springSettings,
            ),
        ).start(e);
    }
    getStyle() {
        let e = o.A.accelerate({
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
        return (0, l.jsx)(o.A.div, {
            style: this.getStyle(),
            className: u.A,
            children: this.props.children,
        });
    }
    constructor(e) {
        super(e), d(this, "_animated", void 0), (this._animated = new o.A.Value(-1 * e.direction));
    }
}
let S = (e) => {
    let { children: t, step: r, direction: n, className: s, springSettings: a = f, fadeInOut: o = !1 } = e;
    return (0, l.jsx)(c.F, {
        component: "div",
        className: i()(u.Q, s),
        children: (0, l.jsx)(
            g,
            {
                direction: n,
                springSettings: a,
                fadeInOut: o,
                children: t,
            },
            r,
        ),
    });
};
