n.d(t, {
    Z: () => m,
    n: () => u
});
var i,
    r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(748780),
    d = n(215569),
    c = n(383583),
    u = (((i = {})[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT'), i);
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class p extends a.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            s.Z.spring(this._animated, {
                toValue: 0,
                ...this.props.springSettings
            }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        s.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
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
        return (0, r.jsx)(s.Z.div, {
            style: this.getStyle(),
            className: c.item,
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
            (this._animated = new s.Z.Value(-1 * e.direction));
    }
}
let m = (e) => {
    let { children: t, step: n, direction: i, className: a, springSettings: o = _, fadeInOut: s = !1 } = e;
    return (0, r.jsx)(d.W, {
        component: 'div',
        className: l()(c.animator, a),
        children: (0, r.jsx)(
            p,
            {
                direction: i,
                springSettings: o,
                fadeInOut: s,
                children: t
            },
            n
        )
    });
};
