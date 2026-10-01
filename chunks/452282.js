n.d(t, { Ay: () => u, U3: () => g });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    l = n(615300),
    h = n(456412),
    d = n(194686);
let o = { tension: 7, friction: 5, overshootClamping: !0 },
    p = "center";
function g(e, t) {
    return ((e % t) + t) % t;
}
class m extends s.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: p, gutter: 0, hideOverflow: !0 };
    animatedIndex = new l.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new l.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new l.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: s, width: a } = this.props,
            r = g(i, s.length),
            h = g(e.currentIndex, s.length);
        ((r !== h || s.length !== e.items.length) && this.updateAnimatedIndex(r, h),
            a !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || r !== h) &&
                  l.A.spring(this.animatedAlignmentOffset, { ...o, toValue: this.getAlignmentOffset(t) }).start());
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: s, items: a } = this.props,
            r = s * g(i, a.length) * 2;
        return e === p ? (t - n.width) / 2 + r : "right" === e ? t - n.width - s + r : s + r;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    getItemStyle = () => {
        let {
            itemSize: { width: e, margin: t, height: n },
        } = this.props;
        return { flexBasis: e, marginRight: t, height: n, width: e, maxWidth: e };
    };
    interpolateValueForItem = (e) =>
        this.animatedIndex.interpolate({ inputRange: [e - 1, e, e + 1], outputRange: [0, 1, 0], extrapolate: "clamp" });
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: i, edgeItems: s } = this.props;
        (s > 0 &&
            (0 === e && t === i.length - 1
                ? n.setValue(-1)
                : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)),
            l.A.spring(n, { ...o, toValue: e }).start());
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: s } = this.props;
        s
            ? this.animateToIndex(e, t)
            : l.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(() => {
                  (n.setValue(e), l.A.timing(i, { fromValue: 0, toValue: 1, duration: 100 }).start());
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: s } = this.props;
        return (0, i.jsx)("div", {
            className: r()(d.T7, d.R9, s),
            children: (0, i.jsx)("div", {
                className: d.SF,
                style: { width: n.width, height: n.height },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let { animatedIndex: e, animatedAlignmentOffset: t, animatedOpacity: n } = this,
            { renderItem: s, items: a, itemSize: r, edgeItems: h, gutter: o } = this.props,
            { margin: p, width: g } = r,
            m = this.getCarouselTranslate(),
            u = this.getItemStyle(),
            c = (h > 0 ? [...a.slice(-h), ...a, ...a.slice(0, h)] : a).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    { style: u, className: d.AS, children: s(e, t - h, this.interpolateValueForItem(t - h)) },
                    t,
                ),
            );
        return (0, i.jsx)(l.A.div, {
            className: d.Dk,
            style: {
                opacity: n,
                left: l.A.add(
                    e.interpolate({ inputRange: [0, 1], outputRange: [-m, -p - g - m - o * (a.length - 1)] }),
                    t,
                ),
            },
            children: c,
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", { className: r()({ [d.R9]: n }, t), children: this.renderCarouselItems() });
    }
}
let u = (0, h.A)(m);
