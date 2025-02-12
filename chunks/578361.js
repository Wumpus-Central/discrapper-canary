n.d(t, {
    Z: () => _,
    n: () => u
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(748780),
    c = n(215569),
    d = n(194928),
    u = (((i = {})[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT'), i);
let m = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class g extends a.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            o.Z.spring(this._animated, {
                toValue: 0,
                ...this.props.springSettings
            }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        o.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
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
        var t, n;
        super(e),
            (n = void 0),
            (t = '_animated') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this._animated = new o.Z.Value(-1 * e.direction));
    }
}
let _ = (e) => {
    let { children: t, step: n, direction: i, className: a, springSettings: s = m, fadeInOut: o = !1 } = e;
    return (0, r.jsx)(c.W, {
        component: 'div',
        className: l()(d.animator, a),
        children: (0, r.jsx)(
            g,
            {
                direction: i,
                springSettings: s,
                fadeInOut: o,
                children: t
            },
            n
        )
    });
};
