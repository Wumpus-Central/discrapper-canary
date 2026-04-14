n.d(t, { Ay: () => p, U3: () => h });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(615300),
    o = n(456412),
    d = n(750357);
let u = { tension: 7, friction: 5, overshootClamping: !0 },
    c = "center";
function h(e, t) {
    return ((e % t) + t) % t;
}
class m extends l.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: c, gutter: 0, hideOverflow: !0 };
    animatedIndex = new s.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new s.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new s.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: l, width: r } = this.props,
            a = h(i, l.length),
            o = h(e.currentIndex, l.length);
        (a !== o || l.length !== e.items.length) && this.updateAnimatedIndex(a, o),
            r !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || a !== o) &&
                  s.A.spring(this.animatedAlignmentOffset, { ...u, toValue: this.getAlignmentOffset(t) }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: l, items: r } = this.props,
            a = l * h(i, r.length) * 2;
        return e === c ? (t - n.width) / 2 + a : "right" === e ? t - n.width - l + a : l + a;
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
            { items: i, edgeItems: l } = this.props;
        l > 0 &&
            (0 === e && t === i.length - 1
                ? n.setValue(-1)
                : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)),
            s.A.spring(n, { ...u, toValue: e }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: l } = this.props;
        l
            ? this.animateToIndex(e, t)
            : s.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(() => {
                  n.setValue(e), s.A.timing(i, { fromValue: 0, toValue: 1, duration: 100 }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: l } = this.props;
        return (0, i.jsx)("div", {
            className: a()(d.T7, d.R9, l),
            children: (0, i.jsx)("div", {
                className: d.SF,
                style: { width: n.width, height: n.height },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let { animatedIndex: e, animatedAlignmentOffset: t, animatedOpacity: n } = this,
            { renderItem: l, items: r, itemSize: a, edgeItems: o, gutter: u } = this.props,
            { margin: c, width: h } = a,
            m = this.getCarouselTranslate(),
            p = this.getItemStyle(),
            g = (o > 0 ? [...r.slice(-o), ...r, ...r.slice(0, o)] : r).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    { style: p, className: d.AS, children: l(e, t - o, this.interpolateValueForItem(t - o)) },
                    t,
                ),
            );
        return (0, i.jsx)(s.A.div, {
            className: d.Dk,
            style: {
                opacity: n,
                left: s.A.add(
                    e.interpolate({ inputRange: [0, 1], outputRange: [-m, -c - h - m - u * (r.length - 1)] }),
                    t,
                ),
            },
            children: g,
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", { className: a()({ [d.R9]: n }, t), children: this.renderCarouselItems() });
    }
}
let p = (0, o.A)(m);
