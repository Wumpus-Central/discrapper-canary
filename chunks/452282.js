n.d(t, { Ay: () => g, U3: () => c });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(615300),
    o = n(456412),
    u = n(831077);
let d = { tension: 7, friction: 5, overshootClamping: !0 },
    h = "center";
function c(e, t) {
    return ((e % t) + t) % t;
}
class m extends r.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: h, gutter: 0, hideOverflow: !0 };
    animatedIndex = new s.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new s.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new s.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: r, width: l } = this.props,
            a = c(i, r.length),
            o = c(e.currentIndex, r.length);
        (a !== o || r.length !== e.items.length) && this.updateAnimatedIndex(a, o),
            l !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || a !== o) &&
                  s.A.spring(this.animatedAlignmentOffset, { ...d, toValue: this.getAlignmentOffset(t) }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: r, items: l } = this.props,
            a = r * c(i, l.length) * 2;
        return e === h ? (t - n.width) / 2 + a : "right" === e ? t - n.width - r + a : r + a;
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
            { items: i, edgeItems: r } = this.props;
        r > 0 &&
            (0 === e && t === i.length - 1
                ? n.setValue(-1)
                : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)),
            s.A.spring(n, { ...d, toValue: e }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: r } = this.props;
        r
            ? this.animateToIndex(e, t)
            : s.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(() => {
                  n.setValue(e), s.A.timing(i, { fromValue: 0, toValue: 1, duration: 100 }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: r } = this.props;
        return (0, i.jsx)("div", {
            className: a()(u.T7, u.R9, r),
            children: (0, i.jsx)("div", {
                className: u.SF,
                style: { width: n.width, height: n.height },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let { animatedIndex: e, animatedAlignmentOffset: t, animatedOpacity: n } = this,
            { renderItem: r, items: l, itemSize: a, edgeItems: o, gutter: d } = this.props,
            { margin: h, width: c } = a,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            p = (o > 0 ? [...l.slice(-o), ...l, ...l.slice(0, o)] : l).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    { style: g, className: u.AS, children: r(e, t - o, this.interpolateValueForItem(t - o)) },
                    t,
                ),
            );
        return (0, i.jsx)(s.A.div, {
            className: u.Dk,
            style: {
                opacity: n,
                left: s.A.add(
                    e.interpolate({ inputRange: [0, 1], outputRange: [-m, -h - c - m - d * (l.length - 1)] }),
                    t,
                ),
            },
            children: p,
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", { className: a()({ [u.R9]: n }, t), children: this.renderCarouselItems() });
    }
}
let g = (0, o.A)(m);
