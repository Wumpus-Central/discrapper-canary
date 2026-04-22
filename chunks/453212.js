r.d(t, { XW: () => m, oK: () => f });
var s = r(627968),
    l = r(64700),
    n = r(735438),
    i = r.n(n),
    o = r(615300),
    a = r(827734),
    c = r(404605);
let u = [a.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, a.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class d extends l.PureComponent {
    state = { backgroundColor: i().sample(u) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, s.jsx)("div", { style: { height: e, backgroundColor: t }, className: c.nX });
    }
}
class h extends l.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => i().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new o.A.Value(0) };
    }
    componentDidMount() {
        this.animateSlide();
    }
    animateSlide = () => {
        let {
            props: { direction: e },
            state: { translateY: t, height: r },
        } = this;
        t.setValue(e > 0 ? 0 : -r / 2 + 12),
            o.A.timing(t, { toValue: e > 0 ? -r / 2 + 12 : 0, duration: 800, easing: o.A.Easing.linear }).start(
                this.animateSlide,
            );
    };
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t },
        } = this;
        return {
            width: `${100 / e}%`,
            transform: [{ translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) }],
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, s.jsxs)(o.A.div, {
            className: c.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, s.jsx)(d, { height: e }, t)),
                e.map((e, t) => (0, s.jsx)(d, { height: e }, `alt${t}`)),
            ],
        });
    }
}
let m = (e) => {
    let { columns: t } = e;
    return (0, s.jsx)("div", {
        className: c.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, s.jsx)("div", { className: c.c8 }, t)),
    });
};
class f extends l.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, s.jsx)("div", {
            className: c.kL,
            children: Array(e)
                .fill(null)
                .map((r, s) => t(e, s)),
        });
    }
}
