"use strict";
n.d(t, { Ay: () => A, U3: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(456412),
    d = n(611749);
let c = { tension: 7, friction: 5, overshootClamping: !0 },
    u = "center";
function _(e, t) {
    return ((e % t) + t) % t;
}
class E extends r.Component {
    static defaultProps = { animate: !0, edgeItems: 2, align: u, gutter: 0, hideOverflow: !0 };
    animatedIndex = new l.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new l.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new l.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: r, width: a } = this.props,
            s = _(i, r.length),
            o = _(e.currentIndex, r.length);
        (s !== o || r.length !== e.items.length) && this.updateAnimatedIndex(s, o),
            a !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || s !== o) &&
                  l.A.spring(this.animatedAlignmentOffset, { ...c, toValue: this.getAlignmentOffset(t) }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: r, items: a } = this.props,
            s = r * _(i, a.length) * 2;
        return e === u ? (t - n.width) / 2 + s : "right" === e ? t - n.width - r + s : r + s;
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
            l.A.spring(n, { ...c, toValue: e }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: r } = this.props;
        r
            ? this.animateToIndex(e, t)
            : l.A.timing(i, { fromValue: 1, toValue: 0, duration: 100 }).start(() => {
                  n.setValue(e), l.A.timing(i, { fromValue: 0, toValue: 1, duration: 100 }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: r } = this.props;
        return (0, i.jsx)("div", {
            className: s()(d.T7, d.R9, r),
            children: (0, i.jsx)("div", {
                className: d.SF,
                style: { width: n.width, height: n.height },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let { animatedIndex: e, animatedAlignmentOffset: t, animatedOpacity: n } = this,
            { renderItem: r, items: a, itemSize: s, edgeItems: o, gutter: c } = this.props,
            { margin: u, width: _ } = s,
            E = this.getCarouselTranslate(),
            A = this.getItemStyle(),
            h = (o > 0 ? [...a.slice(-o), ...a, ...a.slice(0, o)] : a).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    { style: A, className: d.AS, children: r(e, t - o, this.interpolateValueForItem(t - o)) },
                    t,
                ),
            );
        return (0, i.jsx)(l.A.div, {
            className: d.Dk,
            style: {
                opacity: n,
                left: l.A.add(
                    e.interpolate({ inputRange: [0, 1], outputRange: [-E, -u - _ - E - c * (a.length - 1)] }),
                    t,
                ),
            },
            children: h,
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)("div", { className: s()({ [d.R9]: n }, t), children: this.renderCarouselItems() });
    }
}
let A = (0, o.A)(E);
