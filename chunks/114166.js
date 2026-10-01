n.d(t, { A: () => m, x: () => h });
var l,
    i = n(477900),
    r = n(582128),
    s = n(435558),
    a = n.n(s),
    o = n(615300),
    u = n(531685),
    c = (((l = c || {})[(l.ABOVE = 0)] = "ABOVE"), (l[(l.VISIBLE = 1)] = "VISIBLE"), (l[(l.BELOW = 2)] = "BELOW"), l);
function d(e, t) {
    return { toValue: e, duration: t ?? 300, easing: o.A.Easing.inOut(o.A.Easing.back()) };
}
function h(e, t, n) {
    if (null != t) {
        let l = Math.ceil(Math.log10(e + 1));
        return null != n && n > 0 ? Math.min(l, n) * t : l * t;
    }
}
class m extends r.PureComponent {
    static Positions = c;
    prevAnimate;
    currAnimate;
    constructor(e) {
        (super(e),
            (this.state = { prevValue: null, currValue: e.value, nextValue: null }),
            (this.prevAnimate = new o.A.Value(0)),
            (this.currAnimate = new o.A.Value(1)));
    }
    static getDerivedStateFromProps(e, t) {
        let { prevValue: n, currValue: l, nextValue: i } = t;
        return null == n && l !== e.value
            ? { prevValue: u.A.isFocused() ? l : null, currValue: e.value }
            : null != i && i !== e.value
              ? { nextValue: e.value }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: n, currValue: l } = this.state;
        n !== t.prevValue && null != n && this.animateBetween(n, l);
    }
    animateBetween(e, t) {
        let n,
            { forcePosition: l, animationSpeed: i } = this.props;
        (this.prevAnimate.setValue(1),
            null != l
                ? 0 === l
                    ? (this.currAnimate.setValue(0), (n = 2))
                    : 2 === l && (this.currAnimate.setValue(2), (n = 0))
                : e > t
                  ? (this.currAnimate.setValue(0), (n = 2))
                  : (this.currAnimate.setValue(2), (n = 0)),
            o.A.parallel([o.A.timing(this.prevAnimate, d(n, i)), o.A.timing(this.currAnimate, d(1, i))]).start(
                this.animateNext,
            ));
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
        let { digitWidth: t, padStartLength: n } = this.props;
        return h(e, t, n);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, "0") : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: n, formatString: l } = this.props,
            r = a().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
        if (null == e)
            return (0, i.jsx)("div", {
                ...r,
                style: { color: n, minWidth: this.getMinWidth(t) },
                children: null != l ? l(this.padValue(t)) : this.padValue(t),
            });
        let s = Math.max(e, t);
        return (0, i.jsxs)("div", {
            ...r,
            style: { color: n, position: "relative", overflow: "hidden" },
            children: [
                (0, i.jsx)("div", {
                    style: { visibility: "hidden", minWidth: this.getMinWidth(s) },
                    children: this.padValue(s),
                }),
                (0, i.jsx)(o.A.div, {
                    style: { color: n, ...this.getAnimatedStyle(this.prevAnimate) },
                    children: null != l ? l(this.padValue(e)) : this.padValue(e),
                }),
                (0, i.jsx)(o.A.div, {
                    style: { color: n, ...this.getAnimatedStyle(this.currAnimate) },
                    children: null != l ? l(this.padValue(t)) : this.padValue(t),
                }),
            ],
        });
    }
}
