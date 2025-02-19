n.d(t, {
    ZP: () => v,
    gN: () => f
}),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(748780),
    c = n(112724),
    d = n(575599);
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        tension: 7,
        friction: 5,
        overshootClamping: !0
    },
    g = 'center';
function f(e, t) {
    return ((e % t) + t) % t;
}
class _ extends (r = a.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: r, items: i, width: a } = this.props,
            l = f(r, i.length),
            o = f(e.currentIndex, i.length);
        (l !== o || i.length !== e.items.length) && this.updateAnimatedIndex(l, o), a !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || l !== o) && s.Z.spring(this.animatedAlignmentOffset, m(p({}, h), { toValue: this.getAlignmentOffset(t) })).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: r, gutter: i, items: a } = this.props,
            l = i * f(r, a.length) * 2;
        return e === g ? (t - n.width) / 2 + l : 'right' === e ? t - n.width - i + l : i + l;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: r, edgeItems: i } = this.props;
        i > 0 && (0 === e && t === r.length - 1 ? n.setValue(-1) : 0 === t && e === r.length - 1 && r.length > 2 && n.setValue(r.length)), s.Z.spring(n, m(p({}, h), { toValue: e })).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: r } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : s.Z.timing(r, {
                  fromValue: 1,
                  toValue: 0,
                  duration: 100
              }).start(() => {
                  n.setValue(e),
                      s.Z.timing(r, {
                          fromValue: 0,
                          toValue: 1,
                          duration: 100
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: r } = this.props;
        return (0, i.jsx)('div', {
            className: o()(d.singleItemWrapper, d.viewport, r),
            children: (0, i.jsx)('div', {
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
        let { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: r } = this,
            { renderItem: a, items: l, itemSize: o, edgeItems: c, gutter: u } = this.props,
            { margin: p, width: m } = o,
            h = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            f = (c > 0 ? [...l.slice(-c), ...l, ...l.slice(0, c)] : l).map((e, t) =>
                (0, i.jsx)(
                    'div',
                    {
                        style: g,
                        className: d.item,
                        children: a(e, t - c, this.interpolateValueForItem(t - c))
                    },
                    t
                )
            );
        return (0, i.jsx)(s.Z.div, {
            className: d.carousel,
            style: {
                opacity: r,
                left: s.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-h, -p - m - h - u * (l.length - 1)]
                    }),
                    n
                )
            },
            children: f
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)('div', {
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
u(_, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: g,
    gutter: 0,
    hideOverflow: !0
});
let v = (0, c.Z)(_);
