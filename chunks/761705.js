n.d(t, { Z: () => b }), n(47120), n(653041);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(299608),
    c = n.n(o),
    d = n(748780),
    u = n(215569),
    m = n(376641),
    h = n(714338),
    p = n(134432),
    g = n(44488),
    _ = n(585483),
    x = n(981631),
    C = n(707337);
function v(e, t, n) {
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
let f = {
    friction: 10,
    tension: 100
};
class I extends r.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: i } = this.state;
        n.setValue(t[t.length - 1]),
            i.setValue(0),
            e(),
            d.Z.parallel([
                d.Z.timing(i, {
                    toValue: 1,
                    easing: d.Z.Easing.out(d.Z.Easing.linear),
                    duration: 200
                }),
                d.Z.spring(n, {
                    toValue: 0,
                    ...f
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: i } = this.state;
        d.Z.parallel([
            d.Z.timing(n, {
                toValue: 0,
                easing: d.Z.Easing.in(d.Z.Easing.linear),
                duration: 200
            }),
            d.Z.spring(i, {
                toValue: -1 * t[t.length - 1],
                ...f
            })
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
            className: s()(C.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                translate: new d.Z.Value(0),
                opacity: new d.Z.Value(1)
            });
    }
}
class b extends (i = r.Component) {
    componentDidMount() {
        this.preloadNextImages(), h.Z.disable(), h.Z.enableTemp(m.P), _.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), _.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        h.Z.disableTemp(), _.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), _.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: i } = this.props,
            a = (((n + 1) % (e = i.length)) + e) % e,
            r = (((n - 1) % (t = i.length)) + t) % t;
        this.preloadImage(i[a]), this.preloadImage(i[r]);
    }
    preloadImage(e) {
        (0, p.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, i;
        let { directionHistory: a, currentIndex: r } = this.state;
        a.push(e - r),
            (e = ((e % (i = this.props.items.length)) + i) % i),
            this.setState({
                currentIndex: e,
                directionHistory: a
            }),
            null === (t = (n = this.props).onIndexChange) || void 0 === t || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: i } = this.state,
            { modalCarouselItemClassName: r } = this.props,
            l = this.props.items[n],
            o = this.props.items;
        return (0, a.jsxs)(u.W, {
            component: 'div',
            className: s()(C.wrapper, t),
            children: [
                o.length > 1
                    ? (0, a.jsx)(g.am, {
                          className: C.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = l.component) && void 0 !== e
                    ? e
                    : (0, a.jsx)(
                          I,
                          {
                              item: l,
                              directionHistory: i,
                              className: r
                          },
                          l.src
                      ),
                o.length > 1
                    ? (0, a.jsx)(g.Pz, {
                          className: C.navNext,
                          onClick: this.gotoNext
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        super(e),
            v(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            v(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            v(this, 'gotoNextThrottled', c()(this.gotoNext, 300)),
            v(this, 'gotoPrevThrottled', c()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
v(b, 'defaultProps', { startWith: 0 });
