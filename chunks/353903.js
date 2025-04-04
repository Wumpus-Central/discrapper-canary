n.d(t, {
    G0: () => m,
    u$: () => g
}),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(392711),
    s = n.n(a),
    l = n(748780),
    c = n(692547),
    u = n(194240);
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
    _ = [c.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, c.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'];
class p extends o.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t }
        } = this;
        return (0, i.jsx)('div', {
            style: {
                height: e,
                backgroundColor: t
            },
            className: u.gif
        });
    }
    constructor(...e) {
        super(...e), d(this, 'state', { backgroundColor: s().sample(_) });
    }
}
class h extends (r = o.Component) {
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
        return (0, i.jsxs)(l.Z.div, {
            className: u.column,
            style: this.getAnimatedStyle(),
            children: [e.map((e, t) => (0, i.jsx)(p, { height: e }, t)), e.map((e, t) => (0, i.jsx)(p, { height: e }, 'alt'.concat(t)))]
        });
    }
    constructor(e) {
        super(e),
            d(this, 'animateSlide', () => {
                let {
                        props: { direction: e },
                        state: { translateY: t, height: n }
                    } = this,
                    r = e > 0 ? 0 : -n / 2 + f,
                    i = e > 0 ? -n / 2 + f : 0;
                t.setValue(r),
                    l.Z.timing(t, {
                        toValue: i,
                        duration: 800,
                        easing: l.Z.Easing.linear
                    }).start(this.animateSlide);
            });
        let t = Array(10)
            .fill(null)
            .map(() => s().random(40, 150));
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
    return (0, i.jsx)('div', {
        className: u.column,
        style: { width: ''.concat(100 / t, '%') },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)('div', { className: u.categoryLoader }, t))
    });
};
class g extends o.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, i.jsx)('div', {
            className: u.container,
            children: Array(e)
                .fill(null)
                .map((n, r) => t(e, r))
        });
    }
}
