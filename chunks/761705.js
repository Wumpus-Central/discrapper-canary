n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(299608),
    d = n.n(o),
    h = n(748780),
    u = n(215569),
    c = n(376641),
    m = n(714338),
    p = n(134432),
    g = n(44488),
    C = n(585483),
    I = n(981631),
    x = n(707337);
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
function E(e, t) {
    return ((e % t) + t) % t;
}
class N extends a.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: s } = this.state;
        n.setValue(t[t.length - 1]),
            s.setValue(0),
            e(),
            h.Z.parallel([
                h.Z.timing(s, {
                    toValue: 1,
                    easing: h.Z.Easing.out(h.Z.Easing.linear),
                    duration: 200
                }),
                h.Z.spring(n, {
                    toValue: 0,
                    ...f
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: s } = this.state;
        h.Z.parallel([
            h.Z.timing(n, {
                toValue: 0,
                easing: h.Z.Easing.in(h.Z.Easing.linear),
                duration: 200
            }),
            h.Z.spring(s, {
                toValue: -1 * t[t.length - 1],
                ...f
            })
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return h.Z.accelerate({
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
        return (0, i.jsx)(h.Z.img, {
            src: e.src,
            alt: '',
            className: l()(x.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                translate: new h.Z.Value(0),
                opacity: new h.Z.Value(1)
            });
    }
}
class b extends (s = a.Component) {
    componentDidMount() {
        this.preloadNextImages(), m.Z.disable(), m.Z.enableTemp(c.P), C.S.subscribe(I.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.subscribe(I.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        m.Z.disableTemp(), C.S.unsubscribe(I.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.unsubscribe(I.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: s } = this.props;
        let i = (((n + 1) % (e = s.length)) + e) % e;
        let a = (((n - 1) % (t = s.length)) + t) % t;
        this.preloadImage(s[i]), this.preloadImage(s[a]);
    }
    preloadImage(e) {
        (0, p.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, s;
        let { directionHistory: i, currentIndex: a } = this.state;
        i.push(e - a),
            (e = ((e % (s = this.props.items.length)) + s) % s),
            this.setState({
                currentIndex: e,
                directionHistory: i
            }),
            null === (t = (n = this.props).onIndexChange) || void 0 === t || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: s } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[n],
            o = this.props.items;
        return (0, i.jsxs)(u.W, {
            component: 'div',
            className: l()(x.wrapper, t),
            children: [
                o.length > 1
                    ? (0, i.jsx)(g.am, {
                          className: x.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = r.component) && void 0 !== e
                    ? e
                    : (0, i.jsx)(
                          N,
                          {
                              item: r,
                              directionHistory: s,
                              className: a
                          },
                          r.src
                      ),
                o.length > 1
                    ? (0, i.jsx)(g.Pz, {
                          className: x.navNext,
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
            v(this, 'gotoNextThrottled', d()(this.gotoNext, 300)),
            v(this, 'gotoPrevThrottled', d()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
v(b, 'defaultProps', { startWith: 0 });
