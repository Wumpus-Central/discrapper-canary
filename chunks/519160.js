n.d(t, {
    ZP: () => _,
    gN: () => p
}),
    n(47120),
    n(411104);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(748780),
    c = n(112724),
    d = n(72714);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = {
        tension: 7,
        friction: 5,
        overshootClamping: !0
    },
    h = 'center';
function p(e, t) {
    return ((e % t) + t) % t;
}
class g extends (i = r.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: a, width: r } = this.props,
            l = p(i, a.length),
            s = p(e.currentIndex, a.length);
        (l !== s || a.length !== e.items.length) && this.updateAnimatedIndex(l, s),
            r !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || l !== s) &&
                  o.Z.spring(this.animatedAlignmentOffset, {
                      ...m,
                      toValue: this.getAlignmentOffset(t)
                  }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: a, items: r } = this.props,
            l = a * p(i, r.length) * 2;
        return e === h ? (t - n.width) / 2 + l : 'right' === e ? t - n.width - a + l : a + l;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: i, edgeItems: a } = this.props;
        a > 0 && (0 === e && t === i.length - 1 ? n.setValue(-1) : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)),
            o.Z.spring(n, {
                ...m,
                toValue: e
            }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: a } = this.props;
        a
            ? this.animateToIndex(e, t)
            : o.Z.timing(i, {
                  fromValue: 1,
                  toValue: 0,
                  duration: 100
              }).start(() => {
                  n.setValue(e),
                      o.Z.timing(i, {
                          fromValue: 0,
                          toValue: 1,
                          duration: 100
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: i } = this.props;
        return (0, a.jsx)('div', {
            className: s()(d.singleItemWrapper, d.viewport, i),
            children: (0, a.jsx)('div', {
                className: d.singleItem,
                style: {
                    width: n.width,
                    height: n.height
                },
                children: e(t[0], 0)
            })
        });
    }
    renderCarouselItems() {
        let e;
        let { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: i } = this,
            { renderItem: r, items: l, itemSize: s, edgeItems: c, gutter: u } = this.props,
            { margin: m, width: h } = s,
            p = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            _ = (c > 0 ? [...l.slice(-c), ...l, ...l.slice(0, c)] : l).map((e, t) =>
                (0, a.jsx)(
                    'div',
                    {
                        style: g,
                        className: d.item,
                        children: r(e, t - c, this.interpolateValueForItem(t - c))
                    },
                    t
                )
            );
        return (0, a.jsx)(o.Z.div, {
            className: d.carousel,
            style: {
                opacity: i,
                left: o.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-p, -m - h - p - u * (l.length - 1)]
                    }),
                    n
                )
            },
            children: _
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, a.jsx)('div', {
                  className: s()({ [d.viewport]: n }, t),
                  children: this.renderCarouselItems()
              });
    }
    constructor(...e) {
        super(...e),
            u(this, 'animatedIndex', new o.Z.Value(this.props.currentIndex)),
            u(this, 'animatedAlignmentOffset', new o.Z.Value(this.getAlignmentOffset(this.props.align))),
            u(this, 'animatedOpacity', new o.Z.Value(1)),
            u(this, 'getItemStyle', () => {
                let {
                    itemSize: { width: e, margin: t, height: n }
                } = this.props;
                return {
                    flexBasis: e,
                    marginRight: t,
                    height: n,
                    width: e,
                    maxWidth: e
                };
            }),
            u(this, 'interpolateValueForItem', (e) =>
                this.animatedIndex.interpolate({
                    inputRange: [e - 1, e, e + 1],
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp'
                })
            );
    }
}
u(g, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: h,
    gutter: 0,
    hideOverflow: !0
});
let _ = (0, c.Z)(g);
