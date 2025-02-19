n.d(t, {
    Z: () => h,
    n: () => p
});
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(748780),
    c = n(215569),
    d = n(427818);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
var p = (((r = {})[(r.RIGHT = -1)] = 'RIGHT'), (r[(r.LEFT = 1)] = 'LEFT'), r);
let m = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class b extends o.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), s.Z.spring(this._animated, _({ toValue: 0 }, this.props.springSettings)).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        s.Z.spring(this._animated, _({ toValue: this.props.direction }, this.props.springSettings)).start(e);
    }
    getStyle() {
        let e = s.Z.accelerate({
            transform: [
                {
                    translateX: this._animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '-100%']
                    })
                }
            ]
        });
        return (
            this.props.fadeInOut &&
                (e.opacity = this._animated.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0, 1, 0]
                })),
            e
        );
    }
    render() {
        return (0, i.jsx)(s.Z.div, {
            style: this.getStyle(),
            className: d.item,
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), u(this, '_animated', void 0), (this._animated = new s.Z.Value(-1 * e.direction));
    }
}
let h = (e) => {
    let { children: t, step: n, direction: r, className: o, springSettings: a = m, fadeInOut: s = !1 } = e;
    return (0, i.jsx)(c.W, {
        component: 'div',
        className: l()(d.animator, o),
        children: (0, i.jsx)(
            b,
            {
                direction: r,
                springSettings: a,
                fadeInOut: s,
                children: t
            },
            n
        )
    });
};
