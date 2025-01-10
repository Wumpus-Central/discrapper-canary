n.d(t, {
    n: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    l = n(748780),
    u = n(215569),
    d = n(383583);
((i = r || (r = {}))[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT');
let p = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class f extends o.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            l.Z.spring(this._animated, {
                toValue: 0,
                ...this.props.springSettings
            }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        l.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
    }
    getStyle() {
        let e = l.Z.accelerate({
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
        return (0, a.jsx)(l.Z.div, {
            style: this.getStyle(),
            className: d.item,
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
            (this._animated = new l.Z.Value(-1 * e.direction));
    }
}
t.Z = (e) => {
    let { children: t, step: n, direction: i, className: r, springSettings: o = p, fadeInOut: s = !1 } = e;
    return (0, a.jsx)(u.W, {
        component: 'div',
        className: c()(d.animator, r),
        children: (0, a.jsx)(
            f,
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
