n.d(t, {
    G0: () => m,
    u$: () => g
}),
    n(47120),
    n(724458);
var i,
    r = n(200651),
    a = n(192379),
    s = n(392711),
    o = n.n(s),
    l = n(748780),
    u = n(692547),
    c = n(679232);
function d(e, t, n) {
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
let f = 12,
    _ = [u.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, u.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'];
class p extends a.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t }
        } = this;
        return (0, r.jsx)('div', {
            style: {
                height: e,
                backgroundColor: t
            },
            className: c.gif
        });
    }
    constructor(...e) {
        super(...e), d(this, 'state', { backgroundColor: o().sample(_) });
    }
}
class h extends (i = a.Component) {
    componentDidMount() {
        this.animateSlide();
    }
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t }
        } = this;
        return {
            width: ''.concat(100 / e, '%'),
            transform: [
                {
                    translateY: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ]
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, r.jsxs)(l.Z.div, {
            className: c.column,
            style: this.getAnimatedStyle(),
            children: [e.map((e, t) => (0, r.jsx)(p, { height: e }, t)), e.map((e, t) => (0, r.jsx)(p, { height: e }, 'alt'.concat(t)))]
        });
    }
    constructor(e) {
        super(e),
            d(this, 'animateSlide', () => {
                let {
                        props: { direction: e },
                        state: { translateY: t, height: n }
                    } = this,
                    i = e > 0 ? 0 : -n / 2 + f,
                    r = e > 0 ? -n / 2 + f : 0;
                t.setValue(i),
                    l.Z.timing(t, {
                        toValue: r,
                        duration: 800,
                        easing: l.Z.Easing.linear
                    }).start(this.animateSlide);
            });
        let t = Array(10)
            .fill(null)
            .map(() => o().random(40, 150));
        this.state = {
            blocks: t,
            height: 2 * t.reduce((e, t) => e + t + f, f),
            translateY: new l.Z.Value(0)
        };
    }
}
d(h, 'defaultProps', { direction: -1 });
let m = (e) => {
    let { columns: t } = e;
    return (0, r.jsx)('div', {
        className: c.column,
        style: { width: ''.concat(100 / t, '%') },
        children: [, , , ,].fill(null).map((e, t) => (0, r.jsx)('div', { className: c.categoryLoader }, t))
    });
};
class g extends a.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, r.jsx)('div', {
            className: c.container,
            children: Array(e)
                .fill(null)
                .map((n, i) => t(e, i))
        });
    }
}
