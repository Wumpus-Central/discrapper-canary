i.d(t, {
    n: function () {
        return r;
    }
});
var n,
    r,
    a = i(200651),
    o = i(192379),
    l = i(120356),
    c = i.n(l),
    s = i(748780),
    d = i(215569),
    u = i(74818);
((n = r || (r = {}))[(n.RIGHT = -1)] = 'RIGHT'), (n[(n.LEFT = 1)] = 'LEFT');
let h = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class _ extends o.PureComponent {
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
        return (0, a.jsx)(s.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var t, i, n;
        super(e),
            (t = this),
            (n = void 0),
            (i = '_animated') in t
                ? Object.defineProperty(t, i, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[i] = n),
            (this._animated = new s.Z.Value(-1 * e.direction));
    }
}
t.Z = (e) => {
    let { children: t, step: i, direction: n, className: r, springSettings: o = h, fadeInOut: l = !1 } = e;
    return (0, a.jsx)(d.W, {
        component: 'div',
        className: c()(u.animator, r),
        children: (0, a.jsx)(
            _,
            {
                direction: n,
                springSettings: o,
                fadeInOut: l,
                children: t
            },
            i
        )
    });
};
