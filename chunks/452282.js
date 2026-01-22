n.d(t, {
    Ay: () => O,
    U3: () => b,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(615300),
    c = n(456412),
    u = n(884096);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        tension: 7,
        friction: 5,
        overshootClamping: !0,
    },
    m = 100,
    g = "center",
    E = "right";

function b(e, t) {
    return ((e % t) + t) % t;
}
class y extends (r = a.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: r, items: i, width: a } = this.props,
            s = b(r, i.length),
            o = b(e.currentIndex, i.length);
        (s !== o || i.length !== e.items.length) && this.updateAnimatedIndex(s, o),
            a !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || s !== o) &&
                  l.A.spring(
                      this.animatedAlignmentOffset,
                      _(f({}, h), {
                          toValue: this.getAlignmentOffset(t),
                      }),
                  ).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: r, gutter: i, items: a } = this.props,
            s = i * b(r, a.length) * 2;
        return e === g ? (t - n.width) / 2 + s : e === E ? t - n.width - i + s : i + s;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: r, edgeItems: i } = this.props;
        i > 0 &&
            (0 === e && t === r.length - 1
                ? n.setValue(-1)
                : 0 === t && e === r.length - 1 && r.length > 2 && n.setValue(r.length)),
            l.A.spring(
                n,
                _(f({}, h), {
                    toValue: e,
                }),
            ).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: r } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : l.A.timing(r, {
                  fromValue: 1,
                  toValue: 0,
                  duration: m,
              }).start(() => {
                  n.setValue(e),
                      l.A.timing(r, {
                          fromValue: 0,
                          toValue: 1,
                          duration: m,
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: r } = this.props;
        return (0, i.jsx)("div", {
            className: o()(u.T7, u.R9, r),
            children: (0, i.jsx)("div", {
                className: u.SF,
                style: {
                    width: n.width,
                    height: n.height,
                },
                children: e(t[0], 0),
            }),
        });
    }
    renderCarouselItems() {
        let e,
            { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: r } = this,
            { renderItem: a, items: s, itemSize: o, edgeItems: c, gutter: d } = this.props,
            { margin: f, width: p } = o,
            _ = this.getCarouselTranslate(),
            h = this.getItemStyle(),
            m = (e = c > 0 ? [...s.slice(-c), ...s, ...s.slice(0, c)] : s).map((e, t) =>
                (0, i.jsx)(
                    "div",
                    {
                        style: h,
                        className: u.AS,
                        children: a(e, t - c, this.interpolateValueForItem(t - c)),
                    },
                    t,
                ),
            );
        return (0, i.jsx)(l.A.div, {
            className: u.Dk,
            style: {
                opacity: r,
                left: l.A.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-_, -f - p - _ - d * (s.length - 1)],
                    }),
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
            : (0, i.jsx)("div", {
                  className: o()(
                      {
                          [u.R9]: n,
                      },
                      t,
                  ),
                  children: this.renderCarouselItems(),
              });
    }
    constructor(...e) {
        super(...e),
            d(this, "animatedIndex", new l.A.Value(this.props.currentIndex)),
            d(this, "animatedAlignmentOffset", new l.A.Value(this.getAlignmentOffset(this.props.align))),
            d(this, "animatedOpacity", new l.A.Value(1)),
            d(this, "getItemStyle", () => {
                let {
                    itemSize: { width: e, margin: t, height: n },
                } = this.props;
                return {
                    flexBasis: e,
                    marginRight: t,
                    height: n,
                    width: e,
                    maxWidth: e,
                };
            }),
            d(this, "interpolateValueForItem", (e) =>
                this.animatedIndex.interpolate({
                    inputRange: [e - 1, e, e + 1],
                    outputRange: [0, 1, 0],
                    extrapolate: "clamp",
                }),
            );
    }
}
d(y, "defaultProps", {
    animate: !0,
    edgeItems: 2,
    align: g,
    gutter: 0,
    hideOverflow: !0,
});
let O = (0, c.A)(y);
