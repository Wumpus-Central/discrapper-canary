n.d(t, { A: () => U }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(615300),
    o = n(311907),
    d = n(73939),
    u = n(844222),
    c = n(315710),
    A = n(43990),
    h = n(398590),
    _ = n(390435),
    E = n(775121),
    p = n(268218),
    m = n(361158),
    g = n(97469),
    I = n(186111),
    C = n(203982),
    f = n(652215),
    T = n(985018),
    S = n(6156);
let N = (0, p.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    O = (0, p.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("28136"),
                n.e("77602"),
                n.e("68587"),
                n.e("43600"),
                n.e("15373"),
                n.e("54828"),
                n.e("78888"),
            ]).then(n.bind(n, 667587)),
        webpackId: 667587,
        name: "ChannelSettings",
    }),
    L = (0, p.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("21075"),
                n.e("89"),
                n.e("58801"),
                n.e("69839"),
                n.e("18521"),
                n.e("1986"),
                n.e("59275"),
            ]).then(n.bind(n, 737630)),
        webpackId: 737630,
        name: "CollectiblesShop",
    }),
    y = (0, p.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("49681"),
                n.e("96382"),
                n.e("20044"),
                n.e("28136"),
                n.e("82486"),
                n.e("77602"),
                n.e("68587"),
                n.e("43600"),
                n.e("86546"),
                n.e("15373"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("13334"),
                n.e("25961"),
                n.e("2736"),
                n.e("13848"),
                n.e("47810"),
                n.e("54828"),
                n.e("94683"),
                n.e("50796"),
                n.e("8458"),
                n.e("94253"),
                n.e("11810"),
                n.e("72756"),
                n.e("4788"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    v = {
        [f.zgK.CHANNEL_SETTINGS]: () => (0, i.jsx)(O, {}),
        [f.zgK.GUILD_SETTINGS]: () => (0, i.jsx)(y, {}),
        [f.zgK.COLLECTIBLES_SHOP]: () => (0, i.jsx)(L, {}),
        [f.zgK.COMPONENT_PLAYGROUND]: () => (0, i.jsx)(N, {}),
    },
    b = "SHOWN",
    D = "HIDDEN",
    R = { friction: 10, tension: 100 };
function P() {
    return r.useEffect(() => (E.A.enable(), E.A.enableTemp(_.w), () => E.A.disableTemp()), []), null;
}
class w extends r.PureComponent {
    containerRef = r.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = u.C;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === D && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new s.A.Value(t), opacity: new s.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === b && n === D) return this.animateIn();
            if (t === D && n === b) return this.animateUnder();
        }
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        o.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        s.A.parallel([s.A.spring(t, { toValue: 1, ...R }), s.A.spring(n, { toValue: 1, ...R })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        o.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        s.A.parallel([s.A.spring(t, { toValue: 0, ...R }), s.A.spring(n, { toValue: 1.1, ...R })]).start(() => {
            e(), C._.dispatch(f.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        o.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        s.A.parallel([s.A.spring(e, { toValue: 0, ...R }), s.A.spring(t, { toValue: 0.93, ...R })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: r, baseLayer: a, ...o } = this.props,
            d = n === D,
            u = e || d ? this.getAnimatedStyle() : null,
            A = !d && !a,
            h = (0, i.jsx)(s.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": d,
                "aria-modal": A,
                "aria-label": A
                    ? (function (e) {
                          switch (e) {
                              case f.zgK.CHANNEL_SETTINGS:
                                  return T.intl.string(T.t.XPDhcc);
                              case f.zgK.COLLECTIBLES_SHOP:
                                  return T.intl.string(T.t.pWG4ze);
                              case f.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: A ? "dialog" : void 0,
                className: l()(S.qd, { [S.n3]: a, [S.bW]: e, "stop-animations": n === D }),
                style: u,
                ...o,
                children: r,
            });
        return a ? h : (0, i.jsx)(c.O, { containerRef: this.containerRef, children: h });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class M extends r.PureComponent {
    componentDidMount() {
        C._.subscribe(f.jej.LAYER_POP_ESCAPE_KEY, h.jH);
    }
    componentWillUnmount() {
        C._.unsubscribe(f.jej.LAYER_POP_ESCAPE_KEY, h.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: r } = t,
            a = [];
        return (
            a.push((0, i.jsx)(w, { mode: 0 !== r || n ? D : b, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => a.push(this.renderComponent(e, t, r))),
            a
        );
    }
    renderComponent(e, t, n) {
        let r;
        return (
            (r = "string" == typeof e ? v[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                w,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? b : D,
                    children: [(0, i.jsx)(P, {}), r],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(A.N, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)("div", { className: l()(S.bg, e) }),
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(d.F, {
                    component: "div",
                    className: l()(S.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function U(e) {
    let t = (0, g.NC)(),
        n = (0, o.bG)([I.A], () => I.A.getLayers()),
        r = (0, m.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, i.jsx)(M, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: r });
}
