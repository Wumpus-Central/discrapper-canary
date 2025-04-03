n.d(t, { Z: () => y }), n(47120), n(653041);
var r,
    a = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(299608),
    c = n.n(s),
    d = n(748780),
    u = n(215569),
    p = n(376641),
    m = n(714338),
    h = n(134432),
    g = n(44488),
    f = n(585483),
    _ = n(981631),
    b = n(389249);
function x(e, t, n) {
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
function v(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let C = {
    friction: 10,
    tension: 100
};
class j extends i.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: r } = this.state;
        n.setValue(t[t.length - 1]),
            r.setValue(0),
            e(),
            d.Z.parallel([
                d.Z.timing(r, {
                    toValue: 1,
                    easing: d.Z.Easing.out(d.Z.Easing.linear),
                    duration: 200
                }),
                d.Z.spring(n, v({ toValue: 0 }, C))
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: r } = this.state;
        d.Z.parallel([
            d.Z.timing(n, {
                toValue: 0,
                easing: d.Z.Easing.in(d.Z.Easing.linear),
                duration: 200
            }),
            d.Z.spring(r, v({ toValue: -1 * t[t.length - 1] }, C))
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
                        outputRange: ['0px', '300px']
                    })
                }
            ]
        });
    }
    render() {
        let { item: e } = this.props,
            { className: t } = this.props;
        return (0, a.jsx)(d.Z.img, {
            src: e.src,
            alt: '',
            className: o()(b.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                translate: new d.Z.Value(0),
                opacity: new d.Z.Value(1)
            });
    }
}
class y extends (r = i.Component) {
    componentDidMount() {
        this.preloadNextImages(), m.Z.disable(), m.Z.enableTemp(p.P), f.S.subscribe(_.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.subscribe(_.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        m.Z.disableTemp(), f.S.unsubscribe(_.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.unsubscribe(_.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: r } = this.props,
            a = (((n + 1) % (e = r.length)) + e) % e,
            i = (((n - 1) % (t = r.length)) + t) % t;
        this.preloadImage(r[a]), this.preloadImage(r[i]);
    }
    preloadImage(e) {
        (0, h.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, r;
        let { directionHistory: a, currentIndex: i } = this.state;
        a.push(e - i),
            (e = ((e % (r = this.props.items.length)) + r) % r),
            this.setState({
                currentIndex: e,
                directionHistory: a
            }),
            null == (t = (n = this.props).onIndexChange) || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: r } = this.state,
            { modalCarouselItemClassName: i } = this.props,
            l = this.props.items[n],
            s = this.props.items;
        return (0, a.jsxs)(u.W, {
            component: 'div',
            className: o()(b.wrapper, t),
            children: [
                s.length > 1
                    ? (0, a.jsx)(g.am, {
                          className: b.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null != (e = l.component)
                    ? e
                    : (0, a.jsx)(
                          j,
                          {
                              item: l,
                              directionHistory: r,
                              className: i
                          },
                          l.src
                      ),
                s.length > 1
                    ? (0, a.jsx)(g.Pz, {
                          className: b.navNext,
                          onClick: this.gotoNext
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        super(e),
            x(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            x(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            x(this, 'gotoNextThrottled', c()(this.gotoNext, 300)),
            x(this, 'gotoPrevThrottled', c()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
x(y, 'defaultProps', { startWith: 0 });
