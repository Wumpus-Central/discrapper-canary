"use strict";
n.d(t, { XW: () => f, oK: () => p });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(615300),
    l = n(827734),
    u = n(404605);
let c = [l.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, l.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class d extends i.PureComponent {
    state = { backgroundColor: a().sample(c) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, r.jsx)("div", { style: { height: e, backgroundColor: t }, className: u.nX });
    }
}
class _ extends i.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => a().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new o.A.Value(0) };
    }
    componentDidMount() {
        this.animateSlide();
    }
    animateSlide = () => {
        let {
            props: { direction: e },
            state: { translateY: t, height: n },
        } = this;
        t.setValue(e > 0 ? 0 : -n / 2 + 12),
            o.A.timing(t, { toValue: e > 0 ? -n / 2 + 12 : 0, duration: 800, easing: o.A.Easing.linear }).start(
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
        return (0, r.jsxs)(o.A.div, {
            className: u.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, r.jsx)(d, { height: e }, t)),
                e.map((e, t) => (0, r.jsx)(d, { height: e }, `alt${t}`)),
            ],
        });
    }
}
let f = (e) => {
    let { columns: t } = e;
    return (0, r.jsx)("div", {
        className: u.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, r.jsx)("div", { className: u.c8 }, t)),
    });
};
class p extends i.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, r.jsx)("div", {
            className: u.kL,
            children: Array(e)
                .fill(null)
                .map((n, r) => t(e, r)),
        });
    }
}
