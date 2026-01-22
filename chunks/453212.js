n.d(t, {
    XW: () => m,
    oK: () => g,
}),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(735438),
    o = n.n(s),
    l = n(615300),
    c = n(827734),
    u = n(399374);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = 12,
    p = [c.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, c.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class _ extends a.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, i.jsx)("div", {
            style: {
                height: e,
                backgroundColor: t,
            },
            className: u.nX,
        });
    }
    constructor(...e) {
        super(...e), d(this, "state", { backgroundColor: o().sample(p) });
    }
}
class h extends (r = a.Component) {
    componentDidMount() {
        this.animateSlide();
    }
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t },
        } = this;
        return {
            width: "".concat(100 / e, "%"),
            transform: [
                {
                    translateY: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0px", "1px"],
                    }),
                },
            ],
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, i.jsxs)(l.A.div, {
            className: u.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, i.jsx)(_, { height: e }, t)),
                e.map((e, t) => (0, i.jsx)(_, { height: e }, "alt".concat(t))),
            ],
        });
    }
    constructor(e) {
        super(e),
            d(this, "animateSlide", () => {
                let {
                        props: { direction: e },
                        state: { translateY: t, height: n },
                    } = this,
                    r = e > 0 ? 0 : -n / 2 + f,
                    i = e > 0 ? -n / 2 + f : 0;
                t.setValue(r),
                    l.A.timing(t, {
                        toValue: i,
                        duration: 800,
                        easing: l.A.Easing.linear,
                    }).start(this.animateSlide);
            });
        const t = Array(10)
            .fill(null)
            .map(() => o().random(40, 150));
        this.state = {
            blocks: t,
            height: 2 * t.reduce((e, t) => e + t + f, f),
            translateY: new l.A.Value(0),
        };
    }
}
d(h, "defaultProps", { direction: -1 });
let m = (e) => {
    let { columns: t } = e;
    return (0, i.jsx)("div", {
        className: u.fi,
        style: { width: "".concat(100 / t, "%") },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)("div", { className: u.c8 }, t)),
    });
};
class g extends a.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, i.jsx)("div", {
            className: u.kL,
            children: Array(e)
                .fill(null)
                .map((n, r) => t(e, r)),
        });
    }
}
