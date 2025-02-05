i.d(t, {
    Z: () => g,
    y: () => p
});
var n,
    a,
    o = i(200651),
    s = i(192379),
    l = i(392711),
    r = i.n(l),
    c = i(748780),
    d = i(451478);
function u(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
var h = (((n = h || {})[(n.ABOVE = 0)] = 'ABOVE'), (n[(n.VISIBLE = 1)] = 'VISIBLE'), (n[(n.BELOW = 2)] = 'BELOW'), n);
function m(e, t) {
    return {
        toValue: e,
        duration: null != t ? t : 300,
        easing: c.Z.Easing.inOut(c.Z.Easing.back())
    };
}
function p(e, t, i) {
    if (null != t) {
        let n = Math.ceil(Math.log10(e + 1));
        return null != i && i > 0 ? Math.min(n, i) * t : n * t;
    }
}
class g extends (a = s.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { prevValue: i, currValue: n, nextValue: a } = t;
        return null == i && n !== e.value
            ? {
                  prevValue: d.Z.isFocused() ? n : null,
                  currValue: e.value
              }
            : null != a && a !== e.value
              ? { nextValue: e.value }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: i, currValue: n } = this.state;
        i !== t.prevValue && null != i && this.animateBetween(i, n);
    }
    animateBetween(e, t) {
        let i;
        let { forcePosition: n, animationSpeed: a } = this.props;
        this.prevAnimate.setValue(1), null != n ? (0 === n ? (this.currAnimate.setValue(0), (i = 2)) : 2 === n && (this.currAnimate.setValue(2), (i = 0))) : e > t ? (this.currAnimate.setValue(0), (i = 2)) : (this.currAnimate.setValue(2), (i = 0)), c.Z.parallel([c.Z.timing(this.prevAnimate, m(i, a)), c.Z.timing(this.currAnimate, m(1, a))]).start(this.animateNext);
    }
    getAnimatedStyle(e) {
        let { animationColor: t } = this.props;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: ['-100%', '0%', '100%']
                    })
                }
            ],
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...(null != t && { color: t })
        };
    }
    getMinWidth(e) {
        let { digitWidth: t, padStartLength: i } = this.props;
        return p(e, t, i);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, '0') : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: i, formatString: n } = this.props,
            a = r().omit(this.props, ['value', 'digitWidth', 'padStartLength', 'forcePosition']);
        if (null == e)
            return (0, o.jsx)('div', {
                ...a,
                style: {
                    color: i,
                    minWidth: this.getMinWidth(t)
                },
                children: null != n ? n(this.padValue(t)) : this.padValue(t)
            });
        let s = Math.max(e, t);
        return (0, o.jsxs)('div', {
            ...a,
            style: {
                color: i,
                position: 'relative',
                overflow: 'hidden'
            },
            children: [
                (0, o.jsx)('div', {
                    style: {
                        visibility: 'hidden',
                        minWidth: this.getMinWidth(s)
                    },
                    children: this.padValue(s)
                }),
                (0, o.jsx)(c.Z.div, {
                    style: {
                        color: i,
                        ...this.getAnimatedStyle(this.prevAnimate)
                    },
                    children: null != n ? n(this.padValue(e)) : this.padValue(e)
                }),
                (0, o.jsx)(c.Z.div, {
                    style: {
                        color: i,
                        ...this.getAnimatedStyle(this.currAnimate)
                    },
                    children: null != n ? n(this.padValue(t)) : this.padValue(t)
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            u(this, 'prevAnimate', void 0),
            u(this, 'currAnimate', void 0),
            u(this, 'animateNext', () => {
                let { currValue: e, nextValue: t } = this.state;
                null != t
                    ? this.setState({
                          prevValue: d.Z.isFocused() ? e : null,
                          currValue: t,
                          nextValue: null
                      })
                    : this.setState({ prevValue: null });
            }),
            (this.state = {
                prevValue: null,
                currValue: e.value,
                nextValue: null
            }),
            (this.prevAnimate = new c.Z.Value(0)),
            (this.currAnimate = new c.Z.Value(1));
    }
}
u(g, 'Positions', h);
