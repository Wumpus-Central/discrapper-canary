n.d(t, {
    n: function () {
        return a;
    }
});
var i,
    a,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(748780),
    d = n(215569),
    u = n(383583);
((i = a || (a = {}))[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT');
let p = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class m extends l.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            c.Z.spring(this._animated, {
                toValue: 0,
                ...this.props.springSettings
            }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        c.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
    }
    getStyle() {
        let e = c.Z.accelerate({
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
        return (0, r.jsx)(c.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (i = void 0),
            (n = '_animated') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
    }
}
t.Z = (e) => {
    let { children: t, step: n, direction: i, className: a, springSettings: l = p, fadeInOut: o = !1 } = e;
    return (0, r.jsx)(d.W, {
        component: 'div',
        className: s()(u.animator, a),
        children: (0, r.jsx)(
            m,
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
