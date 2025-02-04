n.d(t, {
    Z: () => g,
    n: () => u
});
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    c = n(215569),
    d = n(383583),
    u = (((i = {})[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT'), i);
let m = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class h extends r.PureComponent {
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
        return (0, s.jsx)(o.Z.div, {
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
let g = (e) => {
    let { children: t, step: n, direction: i, className: r, springSettings: l = m, fadeInOut: o = !1 } = e;
    return (0, s.jsx)(c.W, {
        component: 'div',
        className: a()(d.animator, r),
        children: (0, s.jsx)(
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
