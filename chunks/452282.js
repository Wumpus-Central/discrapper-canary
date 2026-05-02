"use strict";
n.d(t, { Ay: () => h, U3: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(456412),
    u = n(831077);
let c = { tension: 7, friction: 5, overshootClamping: !0 },
    d = "center";
function _(e, t) {
    return ((e % t) + t) % t;
}
class f extends r.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: d, gutter: 0, hideOverflow: !0 };
    animatedIndex = new o.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new o.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new o.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: r, width: s } = this.props,
            a = _(i, r.length),
            l = _(e.currentIndex, r.length);
        (a !== l || r.length !== e.items.length) && this.updateAnimatedIndex(a, l),
            s !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || a !== l) &&
                  o.A.spring(this.animatedAlignmentOffset, { ...c, toValue: this.getAlignmentOffset(t) }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: r, items: s } = this.props,
            a = r * _(i, s.length) * 2;
        return e === d ? (t - n.width) / 2 + a : "right" === e ? t - n.width - r + a : r + a;
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
            o.A.spring(n, { ...c, toValue: e }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: r } = this.props;
        r
            ? this.animateToIndex(e, t)
            : o.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(() => {
                  n.setValue(e), o.A.timing(i, { fromValue: 0, toValue: 1, duration: 100 }).start();
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
            { renderItem: r, items: s, itemSize: a, edgeItems: l, gutter: c } = this.props,
            { margin: d, width: _ } = a,
            f = this.getCarouselTranslate(),
            h = this.getItemStyle(),
            p = (l > 0 ? [...s.slice(-l), ...s, ...s.slice(0, l)] : s).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    { style: h, className: u.AS, children: r(e, t - l, this.interpolateValueForItem(t - l)) },
                    t,
                ),
            );
        return (0, i.jsx)(o.A.div, {
            className: u.Dk,
            style: {
                opacity: n,
                left: o.A.add(
                    e.interpolate({ inputRange: [0, 1], outputRange: [-f, -d - _ - f - c * (s.length - 1)] }),
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
let h = (0, l.A)(f);
