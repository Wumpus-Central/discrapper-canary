n.d(t, {
    Z: () => f,
    n: () => p
});
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    c = n(215569),
    d = n(666532);
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
var p = (((i = {})[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT'), i);
let g = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class h extends s.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction), o.Z.spring(this._animated, m({ toValue: 0 }, this.props.springSettings)).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.Z.spring(this._animated, m({ toValue: this.props.direction }, this.props.springSettings)).start(e);
    }
    getStyle() {
        let e = o.Z.accelerate({
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
        return (0, r.jsx)(o.Z.div, {
            style: this.getStyle(),
            className: d.item,
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), u(this, '_animated', void 0), (this._animated = new o.Z.Value(-1 * e.direction));
    }
}
let f = (e) => {
    let { children: t, step: n, direction: i, className: s, springSettings: l = g, fadeInOut: o = !1 } = e;
    return (0, r.jsx)(c.W, {
        component: 'div',
        className: a()(d.animator, s),
        children: (0, r.jsx)(
            h,
            {
                direction: i,
                springSettings: l,
                fadeInOut: o,
                children: t
            },
            n
        )
    });
};
