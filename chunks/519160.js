n.d(t, {
    gN: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(748780),
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
    p = 'center',
    h = 'right';
function g(e, t) {
    return ((e % t) + t) % t;
}
class C extends (i = r.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: i, items: a, width: r } = this.props,
            l = g(i, a.length),
            o = g(e.currentIndex, a.length);
        (l !== o || a.length !== e.items.length) && this.updateAnimatedIndex(l, o),
            r !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || l !== o) &&
                  s.Z.spring(this.animatedAlignmentOffset, {
                      ...m,
                      toValue: this.getAlignmentOffset(t)
                  }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: i, gutter: a, items: r } = this.props,
            l = a * g(i, r.length) * 2;
        return e === p ? (t - n.width) / 2 + l : e === h ? t - n.width - a + l : a + l;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: i, edgeItems: a } = this.props;
        a > 0 && (0 === e && t === i.length - 1 ? n.setValue(-1) : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)),
            s.Z.spring(n, {
                ...m,
                toValue: e
            }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: i } = this,
            { animate: a } = this.props;
        a
            ? this.animateToIndex(e, t)
            : s.Z.timing(i, {
                  fromValue: 1,
                  toValue: 0,
                  duration: 100
              }).start(() => {
                  n.setValue(e),
                      s.Z.timing(i, {
                          fromValue: 0,
                          toValue: 1,
                          duration: 100
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: i } = this.props;
        return (0, a.jsx)('div', {
            className: o()(d.singleItemWrapper, d.viewport, i),
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
            { renderItem: r, items: l, itemSize: o, edgeItems: c, gutter: u } = this.props,
            { margin: m, width: p } = o,
            h = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            C = (e = c > 0 ? [...l.slice(-c), ...l, ...l.slice(0, c)] : l).map((e, t) =>
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
        return (0, a.jsx)(s.Z.div, {
            className: d.carousel,
            style: {
                opacity: i,
                left: s.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-h, -m - p - h - u * (l.length - 1)]
                    }),
                    n
                )
            },
            children: C
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, a.jsx)('div', {
                  className: o()({ [d.viewport]: n }, t),
                  children: this.renderCarouselItems()
              });
    }
    constructor(...e) {
        super(...e),
            u(this, 'animatedIndex', new s.Z.Value(this.props.currentIndex)),
            u(this, 'animatedAlignmentOffset', new s.Z.Value(this.getAlignmentOffset(this.props.align))),
            u(this, 'animatedOpacity', new s.Z.Value(1)),
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
u(C, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: p,
    gutter: 0,
    hideOverflow: !0
}),
    (t.ZP = (0, c.Z)(C));
