n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041);
var i,
    r = n(200651),
    l = n(192379),
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
    f = n(84615),
    _ = n(210887),
    E = n(819640),
    I = n(585483),
    C = n(981631),
    N = n(294981);
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
let S = (0, g.Un)({
        createPromise: () => Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('17298'), n.e('76540'), n.e('17938'), n.e('22646'), n.e('3940'), n.e('48923'), n.e('30419'), n.e('8821'), n.e('18824'), n.e('38175'), n.e('43697')]).then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }),
    T = (0, g.Un)({
        createPromise: () => Promise.all([n.e('33053'), n.e('7654'), n.e('31113'), n.e('88403')]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }),
    b = (0, g.Un)({
        createPromise: () => n.e('18249').then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }),
    A = (0, g.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('33053'), n.e('17298'), n.e('7654'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('62278')]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }),
    Z = {
        [C.S9g.USER_SETTINGS]: () => (0, r.jsx)(S, {}),
        [C.S9g.CHANNEL_SETTINGS]: () => (0, r.jsx)(T, {}),
        [C.S9g.GUILD_SETTINGS]: () => (0, r.jsx)(A, {}),
        [C.S9g.COLLECTIBLES_SHOP]: () => (0, r.jsx)(b, {})
    },
    x = 'SHOWN',
    L = 'HIDDEN',
    P = {
        friction: 10,
        tension: 100
    };
function O() {
    return l.useEffect(() => (p.Z.enable(), p.Z.enableTemp(m.u), () => p.Z.disableTemp()), []), null;
}
class y extends (i = l.PureComponent) {
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
        return t === n ? void 0 : t === x && n === L ? this.animateIn() : t === L && n === x ? this.animateUnder() : void 0;
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
                ...P
            }),
            o.Z.spring(n, {
                toValue: 1,
                ...P
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
                    ...P
                }),
                o.Z.spring(n, {
                    toValue: 1.1,
                    ...P
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
                ...P
            }),
            o.Z.spring(t, {
                toValue: 0.93,
                ...P
            })
        ]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { mode: t, children: n, baseLayer: i, ...l } = this.props,
            a = e || t === L ? this.getAnimatedStyle() : null,
            c = (0, r.jsx)(o.Z.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.refs.node : void 0),
                'aria-hidden': t === L,
                className: s()(N.layer, {
                    [N.baseLayer]: i,
                    [N.animating]: e,
                    'stop-animations': t === L
                }),
                style: a,
                ...l,
                children: n
            });
        return i
            ? c
            : (0, r.jsx)(u.FocusLock, {
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
        super(e), v(this, 'containerRef', l.createRef());
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
v(y, 'defaultProps', { baseLayer: !1 }), v(y, 'contextType', u.AccessibilityPreferencesContext);
class R extends l.PureComponent {
    componentDidMount() {
        I.S.subscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    componentWillUnmount() {
        I.S.unsubscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            l = [];
        return (
            l.push(
                (0, r.jsx)(
                    y,
                    {
                        mode: 0 !== i || n ? L : x,
                        baseLayer: !0,
                        children: e
                    },
                    'layer-base'
                )
            ),
            t.forEach((e, t) => l.push(this.renderComponent(e, t, i))),
            l
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = 'string' == typeof e ? Z[e]() : (0, r.jsx)(e, {})),
            (0, r.jsxs)(
                y,
                {
                    mode: t === n - 1 ? x : L,
                    children: [(0, r.jsx)(O, {}), i]
                },
                'layer-'.concat(t)
            )
        );
    }
    renderArtisanalHack() {
        return (0, r.jsx)(u.ThemeProvider, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, r.jsx)('div', { className: s()(N.bg, e) })
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, r.jsx)(d.W, {
                    component: 'div',
                    className: s()(N.layers, this.props.className),
                    children: this.renderLayers()
                })
            ]
        });
    }
}
function j(e) {
    let t = (0, c.e7)([_.Z], () => _.Z.darkSidebar) ? C.BRd.DARK : void 0,
        n = (0, c.e7)([E.Z], () => E.Z.getLayers()),
        i = (0, f.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, r.jsx)(R, {
        ...e,
        sidebarTheme: t,
        layers: n,
        hasFullScreenLayer: i
    });
}
