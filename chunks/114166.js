i.d(t, { A: () => m, x: () => h });
var n,
    l = i(627968),
    a = i(64700),
    s = i(735438),
    o = i.n(s),
    r = i(615300),
    u = i(531685),
    d = (((n = d || {})[(n.ABOVE = 0)] = "ABOVE"), (n[(n.VISIBLE = 1)] = "VISIBLE"), (n[(n.BELOW = 2)] = "BELOW"), n);
function c(e, t) {
    return { toValue: e, duration: t ?? 300, easing: r.A.Easing.inOut(r.A.Easing.back()) };
}
function h(e, t, i) {
    if (null != t) {
        let n = Math.ceil(Math.log10(e + 1));
        return null != i && i > 0 ? Math.min(n, i) * t : n * t;
    }
}
class m extends a.PureComponent {
    static Positions = d;
    prevAnimate;
    currAnimate;
    constructor(e) {
        super(e),
            (this.state = { prevValue: null, currValue: e.value, nextValue: null }),
            (this.prevAnimate = new r.A.Value(0)),
            (this.currAnimate = new r.A.Value(1));
    }
    static getDerivedStateFromProps(e, t) {
        let { prevValue: i, currValue: n, nextValue: l } = t;
        return null == i && n !== e.value
            ? { prevValue: u.A.isFocused() ? n : null, currValue: e.value }
            : null != l && l !== e.value
              ? { nextValue: e.value }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: i, currValue: n } = this.state;
        i !== t.prevValue && null != i && this.animateBetween(i, n);
    }
    animateBetween(e, t) {
        let i,
            { forcePosition: n, animationSpeed: l } = this.props;
        this.prevAnimate.setValue(1),
            null != n
                ? 0 === n
                    ? (this.currAnimate.setValue(0), (i = 2))
                    : 2 === n && (this.currAnimate.setValue(2), (i = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (i = 2))
                  : (this.currAnimate.setValue(2), (i = 0)),
            r.A.parallel([r.A.timing(this.prevAnimate, c(i, l)), r.A.timing(this.currAnimate, c(1, l))]).start(
                this.animateNext,
            );
    }
    animateNext = () => {
        let { currValue: e, nextValue: t } = this.state;
        null != t
            ? this.setState({ prevValue: u.A.isFocused() ? e : null, currValue: t, nextValue: null })
            : this.setState({ prevValue: null });
    };
    getAnimatedStyle(e) {
        let { animationColor: t } = this.props;
        return {
            transform: [{ translateY: e.interpolate({ inputRange: [0, 1, 2], outputRange: ["-100%", "0%", "100%"] }) }],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...(null != t && { color: t }),
        };
    }
    getMinWidth(e) {
        let { digitWidth: t, padStartLength: i } = this.props;
        return h(e, t, i);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, "0") : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: i, formatString: n } = this.props,
            a = o().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
        if (null == e)
            return (0, l.jsx)("div", {
                ...a,
                style: { color: i, minWidth: this.getMinWidth(t) },
                children: null != n ? n(this.padValue(t)) : this.padValue(t),
            });
        let s = Math.max(e, t);
        return (0, l.jsxs)("div", {
            ...a,
            style: { color: i, position: "relative", overflow: "hidden" },
            children: [
                (0, l.jsx)("div", {
                    style: { visibility: "hidden", minWidth: this.getMinWidth(s) },
                    children: this.padValue(s),
                }),
                (0, l.jsx)(r.A.div, {
                    style: { color: i, ...this.getAnimatedStyle(this.prevAnimate) },
                    children: null != n ? n(this.padValue(e)) : this.padValue(e),
                }),
                (0, l.jsx)(r.A.div, {
                    style: { color: i, ...this.getAnimatedStyle(this.currAnimate) },
                    children: null != n ? n(this.padValue(t)) : this.padValue(t),
                }),
            ],
        });
    }
}
