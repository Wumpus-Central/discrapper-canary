n.d(t, { Z: () => y }), n(388685), n(539854);
var a,
    r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(299608),
    c = n.n(o),
    d = n(748780),
    u = n(215569),
    p = n(376641),
    m = n(714338),
    h = n(134432),
    f = n(44488),
    g = n(585483),
    b = n(981631),
    x = n(499077);
function v(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
let j = {
    friction: 10,
    tension: 100,
};
class _ extends i.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: a } = this.state;
        n.setValue(t[t.length - 1]),
            a.setValue(0),
            e(),
            d.Z.parallel([
                d.Z.timing(a, {
                    toValue: 1,
                    easing: d.Z.Easing.out(d.Z.Easing.linear),
                    duration: 200,
                }),
                d.Z.spring(n, C({ toValue: 0 }, j)),
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: a } = this.state;
        d.Z.parallel([
            d.Z.timing(n, {
                toValue: 0,
                easing: d.Z.Easing.in(d.Z.Easing.linear),
                duration: 200,
            }),
            d.Z.spring(a, C({ toValue: -1 * t[t.length - 1] }, j)),
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return d.Z.accelerate({
            opacity: t,
            transform: [
                {
                    translateX: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0px", "300px"],
                    }),
                },
            ],
        });
    }
    render() {
        let { item: e } = this.props,
            { className: t } = this.props;
        return (0, r.jsx)(d.Z.img, {
            src: e.src,
            alt: "",
            className: s()(x.slide, t),
            style: this.getStyle(),
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "state", {
                translate: new d.Z.Value(0),
                opacity: new d.Z.Value(1),
            });
    }
}
class y extends (a = i.Component) {
    componentDidMount() {
        this.preloadNextImages(),
            m.Z.disable(),
            m.Z.enableTemp(p.P),
            g.S.subscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            g.S.subscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        m.Z.disableTemp(),
            g.S.unsubscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            g.S.unsubscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: a } = this.props,
            r = (((n + 1) % (e = a.length)) + e) % e,
            i = (((n - 1) % (t = a.length)) + t) % t;
        this.preloadImage(a[r]), this.preloadImage(a[i]);
    }
    preloadImage(e) {
        (0, h.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, a;
        let { directionHistory: r, currentIndex: i } = this.state;
        r.push(e - i),
            (e = ((e % (a = this.props.items.length)) + a) % a),
            this.setState({
                currentIndex: e,
                directionHistory: r,
            }),
            null == (t = (n = this.props).onIndexChange) || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: a } = this.state,
            { modalCarouselItemClassName: i } = this.props,
            l = this.props.items[n],
            o = this.props.items;
        return (0, r.jsxs)(u.W, {
            component: "div",
            className: s()(x.wrapper, t),
            children: [
                o.length > 1
                    ? (0, r.jsx)(f.am, {
                          className: x.navPrev,
                          onClick: this.gotoPrev,
                      })
                    : null,
                null != (e = l.component)
                    ? e
                    : (0, r.jsx)(
                          _,
                          {
                              item: l,
                              directionHistory: a,
                              className: i,
                          },
                          l.src,
                      ),
                o.length > 1
                    ? (0, r.jsx)(f.Pz, {
                          className: x.navNext,
                          onClick: this.gotoNext,
                      })
                    : null,
            ],
        });
    }
    constructor(e) {
        super(e),
            v(this, "gotoNext", () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            v(this, "gotoPrev", () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            v(this, "gotoNextThrottled", c()(this.gotoNext, 300)),
            v(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: [],
            });
    }
}
v(y, "defaultProps", { startWith: 0 });
