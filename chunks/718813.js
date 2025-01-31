n.d(t, { Z: () => j }), n(653041);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(748780),
    c = n(442837),
    d = n(215569),
    u = n(481060),
    h = n(37234),
    m = n(134616),
    p = n(714338),
    g = n(663993),
    _ = n(84615),
    f = n(210887),
    E = n(819640),
    I = n(585483),
    C = n(981631),
    v = n(294981);
function N(e, t, n) {
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
let T = (0, g.Un)({
        createPromise: () => n.e('69470').then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }),
    S = (0, g.Un)({
        createPromise: () => Promise.all([n.e('7654'), n.e('16806'), n.e('86915')]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }),
    Z = (0, g.Un)({
        createPromise: () => n.e('45620').then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }),
    x = (0, g.Un)({
        createPromise: () => Promise.all([n.e('7654'), n.e('44156'), n.e('16806'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('12672'), n.e('95140')]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }),
    A = {
        [C.S9g.USER_SETTINGS]: () => (0, l.jsx)(T, {}),
        [C.S9g.CHANNEL_SETTINGS]: () => (0, l.jsx)(S, {}),
        [C.S9g.GUILD_SETTINGS]: () => (0, l.jsx)(x, {}),
        [C.S9g.COLLECTIBLES_SHOP]: () => (0, l.jsx)(Z, {})
    },
    b = 'SHOWN',
    L = 'HIDDEN',
    y = {
        friction: 10,
        tension: 100
    };
function P() {
    return r.useEffect(() => (p.Z.enable(), p.Z.enableTemp(m.u), () => p.Z.disableTemp()), []), null;
}
class O extends (i = r.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode
            ? {
                  animating: !0,
                  mode: e.mode
              }
            : null;
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        return t === n ? void 0 : t === b && n === L ? this.animateIn() : t === L && n === b ? this.animateUnder() : void 0;
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        o.Z.parallel([
            o.Z.spring(t, {
                toValue: 1,
                ...y
            }),
            o.Z.spring(n, {
                toValue: 1,
                ...y
            })
        ]).start(() => this.animateComplete(e));
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        I.S.dispatch(C.CkL.LAYER_POP_START),
            o.Z.parallel([
                o.Z.spring(t, {
                    toValue: 0,
                    ...y
                }),
                o.Z.spring(n, {
                    toValue: 1.1,
                    ...y
                })
            ]).start(() => {
                e(), I.S.dispatch(C.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        o.Z.parallel([
            o.Z.spring(e, {
                toValue: 0,
                ...y
            }),
            o.Z.spring(t, {
                toValue: 0.93,
                ...y
            })
        ]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { mode: t, children: n, baseLayer: i, ...r } = this.props,
            a = e || t === L ? this.getAnimatedStyle() : null,
            c = (0, l.jsx)(o.Z.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.refs.node : void 0),
                'aria-hidden': t === L,
                className: s()(v.layer, {
                    [v.baseLayer]: i,
                    [v.animating]: e,
                    'stop-animations': t === L
                }),
                style: a,
                ...r,
                children: n
            });
        return i
            ? c
            : (0, l.jsx)(u.EqS, {
                  containerRef: this.containerRef,
                  children: c
              });
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state,
            { reducedMotion: n } = this.context;
        return {
            opacity: e,
            transform: n.enabled ? void 0 : [{ scale: t }, { translateZ: 0 }]
        };
    }
    constructor(e) {
        super(e), N(this, 'containerRef', r.createRef());
        let t = 1,
            n = 1;
        e.mode === L && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new o.Z.Value(t),
                opacity: new o.Z.Value(n),
                mode: e.mode
            });
    }
}
N(O, 'defaultProps', { baseLayer: !1 }), N(O, 'contextType', u.Sfi);
class R extends r.PureComponent {
    componentDidMount() {
        I.S.subscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    componentWillUnmount() {
        I.S.unsubscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            r = [];
        return (
            r.push(
                (0, l.jsx)(
                    O,
                    {
                        mode: 0 !== i || n ? L : b,
                        baseLayer: !0,
                        children: e
                    },
                    'layer-base'
                )
            ),
            t.forEach((e, t) => r.push(this.renderComponent(e, t, i))),
            r
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = 'string' == typeof e ? A[e]() : (0, l.jsx)(e, {})),
            (0, l.jsxs)(
                O,
                {
                    mode: t === n - 1 ? b : L,
                    children: [(0, l.jsx)(P, {}), i]
                },
                'layer-'.concat(t)
            )
        );
    }
    renderArtisanalHack() {
        return (0, l.jsx)(u.f6W, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, l.jsx)('div', { className: s()(v.bg, e) })
        });
    }
    render() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, l.jsx)(d.W, {
                    component: 'div',
                    className: s()(v.layers, this.props.className),
                    children: this.renderLayers()
                })
            ]
        });
    }
}
function j(e) {
    let t = (0, c.e7)([f.Z], () => f.Z.darkSidebar) ? C.BRd.DARK : void 0,
        n = (0, c.e7)([E.Z], () => E.Z.getLayers()),
        i = (0, _.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, l.jsx)(R, {
        ...e,
        sidebarTheme: t,
        layers: n,
        hasFullScreenLayer: i
    });
}
