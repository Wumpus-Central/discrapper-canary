a.d(t, { A: () => b }), a(321073);
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(985623),
    o = a.n(r),
    c = a(615300),
    d = a(73939),
    u = a(707685),
    h = a(775121),
    m = a(776231),
    p = a(848752),
    _ = a(203982),
    g = a(652215),
    x = a(904482);
let A = { friction: 10, tension: 100 };
class C extends i.Component {
    state = { translate: new c.A.Value(0), opacity: new c.A.Value(1) };
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: a, opacity: n } = this.state;
        a.setValue(t[t.length - 1]),
            n.setValue(0),
            e(),
            c.A.parallel([
                c.A.timing(n, { toValue: 1, easing: c.A.Easing.out(c.A.Easing.linear), duration: 200 }),
                c.A.spring(a, { toValue: 0, ...A }),
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: a, translate: n } = this.state;
        c.A.parallel([
            c.A.timing(a, { toValue: 0, easing: c.A.Easing.in(c.A.Easing.linear), duration: 200 }),
            c.A.spring(n, { toValue: -1 * t[t.length - 1], ...A }),
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return c.A.accelerate({
            opacity: t,
            transform: [{ translateX: e.interpolate({ inputRange: [0, 1], outputRange: ["0px", "300px"] }) }],
        });
    }
    render() {
        let { item: e } = this.props,
            { className: t } = this.props;
        return (0, n.jsx)(c.A.img, { src: e.src, alt: "", className: l()(x.M6, t), style: this.getStyle() });
    }
}
class b extends i.Component {
    static defaultProps = { startWith: 0 };
    constructor(e) {
        super(e), (this.state = { currentIndex: e.startWith, directionHistory: [] });
    }
    componentDidMount() {
        this.preloadNextImages(),
            h.A.disable(),
            h.A.enableTemp(u.w),
            _._.subscribe(g.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            _._.subscribe(g.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        h.A.disableTemp(),
            _._.unsubscribe(g.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled),
            _._.unsubscribe(g.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: a } = this.state,
            { items: n } = this.props,
            i = (((a + 1) % (e = n.length)) + e) % e,
            s = (((a - 1) % (t = n.length)) + t) % t;
        this.preloadImage(n[i]), this.preloadImage(n[s]);
    }
    preloadImage(e) {
        (0, m.yt)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: a } = this.state;
        a !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t;
        let { directionHistory: a, currentIndex: n } = this.state;
        a.push(e - n),
            (e = ((e % (t = this.props.items.length)) + t) % t),
            this.setState({ currentIndex: e, directionHistory: a }),
            this.props.onIndexChange?.(e);
    }
    gotoNext = () => {
        let { currentIndex: e } = this.state;
        this.navigateTo(e + 1);
    };
    gotoPrev = () => {
        let { currentIndex: e } = this.state;
        this.navigateTo(e - 1);
    };
    gotoNextThrottled = o()(this.gotoNext, 300);
    gotoPrevThrottled = o()(this.gotoPrev, 300);
    render() {
        let { className: e } = this.props,
            { currentIndex: t, directionHistory: a } = this.state,
            { modalCarouselItemClassName: i } = this.props,
            s = this.props.items[t],
            r = this.props.items;
        return (0, n.jsxs)(d.F, {
            component: "div",
            className: l()(x.iE, e),
            children: [
                r.length > 1 ? (0, n.jsx)(p.Q8, { className: x.vi, onClick: this.gotoPrev }) : null,
                s.component ?? (0, n.jsx)(C, { item: s, directionHistory: a, className: i }, s.src),
                r.length > 1 ? (0, n.jsx)(p.Oj, { className: x.f8, onClick: this.gotoNext }) : null,
            ],
        });
    }
}
