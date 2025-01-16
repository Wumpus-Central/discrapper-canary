r.d(n, {
    G0: function () {
        return v;
    },
    u$: function () {
        return I;
    }
});
var i,
    a = r(47120);
var s = r(724458);
var o = r(200651),
    l = r(192379),
    u = r(392711),
    c = r.n(u),
    d = r(748780),
    f = r(692547),
    _ = r(808674);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 12,
    m = [f.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, f.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'];
class g extends l.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: n }
        } = this;
        return (0, o.jsx)('div', {
            style: {
                height: e,
                backgroundColor: n
            },
            className: _.gif
        });
    }
    constructor(...e) {
        super(...e), h(this, 'state', { backgroundColor: c().sample(m) });
    }
}
class E extends (i = l.Component) {
    componentDidMount() {
        this.animateSlide();
    }
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: n }
        } = this;
        return {
            width: ''.concat(100 / e, '%'),
            transform: [
                {
                    translateY: n.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ]
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, o.jsxs)(d.Z.div, {
            className: _.column,
            style: this.getAnimatedStyle(),
            children: [e.map((e, n) => (0, o.jsx)(g, { height: e }, n)), e.map((e, n) => (0, o.jsx)(g, { height: e }, 'alt'.concat(n)))]
        });
    }
    constructor(e) {
        super(e),
            h(this, 'animateSlide', () => {
                let {
                        props: { direction: e },
                        state: { translateY: n, height: r }
                    } = this,
                    i = e > 0 ? 0 : -r / 2 + p,
                    a = e > 0 ? -r / 2 + p : 0;
                n.setValue(i),
                    d.Z.timing(n, {
                        toValue: a,
                        duration: 800,
                        easing: d.Z.Easing.linear
                    }).start(this.animateSlide);
            });
        let n = Array(10)
            .fill(null)
            .map(() => c().random(40, 150));
        this.state = {
            blocks: n,
            height: 2 * n.reduce((e, n) => e + n + p, p),
            translateY: new d.Z.Value(0)
        };
    }
}
h(E, 'defaultProps', { direction: -1 });
let v = (e) => {
    let { columns: n } = e;
    return (0, o.jsx)('div', {
        className: _.column,
        style: { width: ''.concat(100 / n, '%') },
        children: [, , , ,].fill(null).map((e, n) => (0, o.jsx)('div', { className: _.categoryLoader }, n))
    });
};
class I extends l.PureComponent {
    render() {
        let { columns: e, renderColumn: n } = this.props;
        return (0, o.jsx)('div', {
            className: _.container,
            children: Array(e)
                .fill(null)
                .map((r, i) => n(e, i))
        });
    }
}
