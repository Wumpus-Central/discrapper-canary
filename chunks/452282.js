"use strict";
n.d(t, { Ay: () => m, U3: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(456412),
    u = n(750357);
let c = { tension: 7, friction: 5, overshootClamping: !0 },
    d = 100,
    _ = "center",
    f = "right";
function h(e, t) {
    return ((e % t) + t) % t;
}
class p extends i.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: _, gutter: 0, hideOverflow: !0 };
    animatedIndex = new o.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new o.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new o.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: r, items: i, width: s } = this.props,
            a = h(r, i.length),
            l = h(e.currentIndex, i.length);
        (a !== l || i.length !== e.items.length) && this.updateAnimatedIndex(a, l),
            s !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || a !== l) &&
                  o.A.spring(this.animatedAlignmentOffset, { ...c, toValue: this.getAlignmentOffset(t) }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: r, gutter: i, items: s } = this.props,
            a = i * h(r, s.length) * 2;
        return e === _ ? (t - n.width) / 2 + a : e === f ? t - n.width - i + a : i + a;
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
            { items: r, edgeItems: i } = this.props;
        i > 0 &&
            (0 === e && t === r.length - 1
                ? n.setValue(-1)
                : 0 === t && e === r.length - 1 && r.length > 2 && n.setValue(r.length)),
            o.A.spring(n, { ...c, toValue: e }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: r } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : o.A.timing(r, { fromValue: 1, toValue: 0, duration: d }).start(() => {
                  n.setValue(e), o.A.timing(r, { fromValue: 0, toValue: 1, duration: d }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: i } = this.props;
        return (0, r.jsx)("div", {
            className: a()(u.T7, u.R9, i),
            children: (0, r.jsx)("div", {
                className: u.SF,
                style: { width: n.width, height: n.height },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let e,
            { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: i } = this,
            { renderItem: s, items: a, itemSize: l, edgeItems: c, gutter: d } = this.props,
            { margin: _, width: f } = l,
            h = this.getCarouselTranslate(),
            p = this.getItemStyle(),
            m = (e = c > 0 ? [...a.slice(-c), ...a, ...a.slice(0, c)] : a).map((e, t) =>
                (0, r.jsx)(
                    "div",
                    { style: p, className: u.AS, children: s(e, t - c, this.interpolateValueForItem(t - c)) },
                    t,
                ),
            );
        return (0, r.jsx)(o.A.div, {
            className: u.Dk,
            style: {
                opacity: i,
                left: o.A.add(
                    t.interpolate({ inputRange: [0, 1], outputRange: [-h, -_ - f - h - d * (a.length - 1)] }),
                    n,
                ),
            },
            children: m,
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, r.jsx)("div", { className: a()({ [u.R9]: n }, t), children: this.renderCarouselItems() });
    }
}
let m = (0, l.A)(p);
