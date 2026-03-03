n.d(t, { A: () => j }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(615300),
    o = n(311907),
    d = n(73939),
    c = n(397927),
    u = n(398590),
    A = n(390435),
    h = n(775121),
    _ = n(268218),
    m = n(361158),
    p = n(97469),
    g = n(186111),
    E = n(203982),
    I = n(652215),
    f = n(985018),
    C = n(136042);
let T = (0, _.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    N = (0, _.Fe)({
        createPromise: () =>
            Promise.all([n.e("43600"), n.e("68587"), n.e("21968"), n.e("78888")]).then(n.bind(n, 667587)),
        webpackId: 667587,
        name: "ChannelSettings",
    }),
    S = (0, _.Fe)({
        createPromise: () => Promise.all([n.e("69839"), n.e("63757"), n.e("59275")]).then(n.bind(n, 737630)),
        webpackId: 737630,
        name: "CollectiblesShop",
    }),
    x = (0, _.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("43600"),
                n.e("68587"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("21968"),
                n.e("35894"),
                n.e("50796"),
                n.e("8458"),
                n.e("11810"),
                n.e("39048"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    v = {
        [I.zgK.CHANNEL_SETTINGS]: () => (0, i.jsx)(N, {}),
        [I.zgK.GUILD_SETTINGS]: () => (0, i.jsx)(x, {}),
        [I.zgK.COLLECTIBLES_SHOP]: () => (0, i.jsx)(S, {}),
        [I.zgK.COMPONENT_PLAYGROUND]: () => (0, i.jsx)(T, {}),
    },
    y = "SHOWN",
    b = "HIDDEN",
    O = { friction: 10, tension: 100 };
function L() {
    return r.useEffect(() => (h.A.enable(), h.A.enableTemp(A.w), () => h.A.disableTemp()), []), null;
}
class R extends r.PureComponent {
    containerRef = r.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = c.CZY;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === b && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new s.A.Value(t), opacity: new s.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === y && n === b) return this.animateIn();
            if (t === b && n === y) return this.animateUnder();
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
        s.A.parallel([s.A.spring(t, { toValue: 1, ...O }), s.A.spring(n, { toValue: 1, ...O })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        o.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        s.A.parallel([s.A.spring(t, { toValue: 0, ...O }), s.A.spring(n, { toValue: 1.1, ...O })]).start(() => {
            e(), E._.dispatch(I.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        o.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        s.A.parallel([s.A.spring(e, { toValue: 0, ...O }), s.A.spring(t, { toValue: 0.93, ...O })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: r, baseLayer: l, ...o } = this.props,
            d = n === b,
            u = e || d ? this.getAnimatedStyle() : null,
            A = !d && !l,
            h = (0, i.jsx)(s.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": d,
                "aria-modal": A,
                "aria-label": A
                    ? (function (e) {
                          switch (e) {
                              case I.zgK.CHANNEL_SETTINGS:
                                  return f.intl.string(f.t.XPDhcc);
                              case I.zgK.COLLECTIBLES_SHOP:
                                  return f.intl.string(f.t.pWG4ze);
                              case I.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: A ? "dialog" : void 0,
                className: a()(C.qd, { [C.n3]: l, [C.bW]: e, "stop-animations": n === b }),
                style: u,
                ...o,
                children: r,
            });
        return l ? h : (0, i.jsx)(c.Oky, { containerRef: this.containerRef, children: h });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class P extends r.PureComponent {
    componentDidMount() {
        E._.subscribe(I.jej.LAYER_POP_ESCAPE_KEY, u.jH);
    }
    componentWillUnmount() {
        E._.unsubscribe(I.jej.LAYER_POP_ESCAPE_KEY, u.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: r } = t,
            l = [];
        return (
            l.push((0, i.jsx)(R, { mode: 0 !== r || n ? b : y, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => l.push(this.renderComponent(e, t, r))),
            l
        );
    }
    renderComponent(e, t, n) {
        let r;
        return (
            (r = "string" == typeof e ? v[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                R,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? y : b,
                    children: [(0, i.jsx)(L, {}), r],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(c.NPJ, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)("div", { className: a()(C.bg, e) }),
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(d.F, {
                    component: "div",
                    className: a()(C.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function j(e) {
    let t = (0, p.NC)(),
        n = (0, o.bG)([g.A], () => g.A.getLayers()),
        r = (0, m.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, i.jsx)(P, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: r });
}
