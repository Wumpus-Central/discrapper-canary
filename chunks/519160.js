n.d(t, {
    ZP: () => y,
    gN: () => E
}),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(748780),
    c = n(112724),
    u = n(838013);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
    m = 100,
    g = {
        CENTER: 'center',
        RIGHT: 'right'
    };
function E(e, t) {
    return ((e % t) + t) % t;
}
class b extends (r = o.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: r, items: i, width: o } = this.props,
            a = E(r, i.length),
            s = E(e.currentIndex, i.length);
        (a !== s || i.length !== e.items.length) && this.updateAnimatedIndex(a, s), o !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || a !== s) && l.Z.spring(this.animatedAlignmentOffset, p(f({}, h), { toValue: this.getAlignmentOffset(t) })).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: r, gutter: i, items: o } = this.props,
            a = i * E(r, o.length) * 2;
        return e === g.CENTER ? (t - n.width) / 2 + a : e === g.RIGHT ? t - n.width - i + a : i + a;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: r, edgeItems: i } = this.props;
        i > 0 && (0 === e && t === r.length - 1 ? n.setValue(-1) : 0 === t && e === r.length - 1 && r.length > 2 && n.setValue(r.length)), l.Z.spring(n, p(f({}, h), { toValue: e })).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: r } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : l.Z.timing(r, {
                  fromValue: 1,
                  toValue: 0,
                  duration: m
              }).start(() => {
                  n.setValue(e),
                      l.Z.timing(r, {
                          fromValue: 0,
                          toValue: 1,
                          duration: m
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: r } = this.props;
        return (0, i.jsx)('div', {
            className: s()(u.singleItemWrapper, u.viewport, r),
            children: (0, i.jsx)('div', {
                className: u.singleItem,
                style: {
                    width: n.width,
                    height: n.height
                },
                children: e(t[0], 0)
            })
        });
    }
    renderCarouselItems() {
        let e,
            { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: r } = this,
            { renderItem: o, items: a, itemSize: s, edgeItems: c, gutter: d } = this.props,
            { margin: f, width: _ } = s,
            p = this.getCarouselTranslate(),
            h = this.getItemStyle(),
            m = (e = c > 0 ? [...a.slice(-c), ...a, ...a.slice(0, c)] : a).map((e, t) =>
                (0, i.jsx)(
                    'div',
                    {
                        style: h,
                        className: u.item,
                        children: o(e, t - c, this.interpolateValueForItem(t - c))
                    },
                    t
                )
            );
        return (0, i.jsx)(l.Z.div, {
            className: u.carousel,
            style: {
                opacity: r,
                left: l.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-p, -f - _ - p - d * (a.length - 1)]
                    }),
                    n
                )
            },
            children: m
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)('div', {
                  className: s()({ [u.viewport]: n }, t),
                  children: this.renderCarouselItems()
              });
    }
    constructor(...e) {
        super(...e),
            d(this, 'animatedIndex', new l.Z.Value(this.props.currentIndex)),
            d(this, 'animatedAlignmentOffset', new l.Z.Value(this.getAlignmentOffset(this.props.align))),
            d(this, 'animatedOpacity', new l.Z.Value(1)),
            d(this, 'getItemStyle', () => {
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
            d(this, 'interpolateValueForItem', (e) =>
                this.animatedIndex.interpolate({
                    inputRange: [e - 1, e, e + 1],
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp'
                })
            );
    }
}
d(b, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: g.CENTER,
    gutter: 0,
    hideOverflow: !0
});
let y = (0, c.Z)(b);
