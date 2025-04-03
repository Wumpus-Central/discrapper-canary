n.d(t, { Z: () => D }), n(653041);
var r,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    c = n(442837),
    u = n(215569),
    d = n(481060),
    p = n(37234),
    h = n(134616),
    f = n(714338),
    g = n(663993),
    m = n(84615),
    b = n(210887),
    _ = n(819640),
    E = n(585483),
    O = n(981631),
    N = n(400709);
function y(e, t, n) {
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
function I(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (0, g.Un)({
        createPromise: () => n.e('69470').then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }),
    S = (0, g.Un)({
        createPromise: () => Promise.all([n.e('7654'), n.e('49286'), n.e('86915')]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }),
    T = (0, g.Un)({
        createPromise: () => Promise.all([n.e('68440'), n.e('45620')]).then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }),
    P = (0, g.Un)({
        createPromise: () => Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('55666'), n.e('16114'), n.e('58227'), n.e('44088'), n.e('39149'), n.e('95140')]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }),
    j = {
        [O.S9g.USER_SETTINGS]: () => (0, i.jsx)(C, {}),
        [O.S9g.CHANNEL_SETTINGS]: () => (0, i.jsx)(S, {}),
        [O.S9g.GUILD_SETTINGS]: () => (0, i.jsx)(P, {}),
        [O.S9g.COLLECTIBLES_SHOP]: () => (0, i.jsx)(T, {})
    },
    A = 'SHOWN',
    Z = 'HIDDEN',
    x = {
        friction: 10,
        tension: 100
    };
function L() {
    return l.useEffect(() => (f.Z.enable(), f.Z.enableTemp(h.u), () => f.Z.disableTemp()), []), null;
}
class w extends (r = l.PureComponent) {
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
        if (t !== n) {
            if (t === A && n === Z) return this.animateIn();
            if (t === Z && n === A) return this.animateUnder();
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
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        s.Z.parallel([s.Z.spring(t, I({ toValue: 1 }, x)), s.Z.spring(n, I({ toValue: 1 }, x))]).start(() => this.animateComplete(e));
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        E.S.dispatch(O.CkL.LAYER_POP_START),
            s.Z.parallel([s.Z.spring(t, I({ toValue: 0 }, x)), s.Z.spring(n, I({ toValue: 1.1 }, x))]).start(() => {
                e(), E.S.dispatch(O.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        s.Z.parallel([s.Z.spring(e, I({ toValue: 0 }, x)), s.Z.spring(t, I({ toValue: 0.93 }, x))]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            t = this.props,
            { mode: n, children: r, baseLayer: l } = t,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(t, ['mode', 'children', 'baseLayer']),
            c = e || n === Z ? this.getAnimatedStyle() : null,
            u = (0, i.jsx)(
                s.Z.div,
                v(
                    I(
                        {
                            ref: (e) => (this.containerRef.current = null != e ? e.refs.node : void 0),
                            'aria-hidden': n === Z,
                            className: o()(N.layer, {
                                [N.baseLayer]: l,
                                [N.animating]: e,
                                'stop-animations': n === Z
                            }),
                            style: c
                        },
                        a
                    ),
                    { children: r }
                )
            );
        return l
            ? u
            : (0, i.jsx)(d.EqS, {
                  containerRef: this.containerRef,
                  children: u
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
        super(e), y(this, 'containerRef', l.createRef());
        let t = 1,
            n = 1;
        e.mode === Z && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new s.Z.Value(t),
                opacity: new s.Z.Value(n),
                mode: e.mode
            });
    }
}
y(w, 'defaultProps', { baseLayer: !1 }), y(w, 'contextType', d.Sfi);
class R extends l.PureComponent {
    componentDidMount() {
        E.S.subscribe(O.CkL.LAYER_POP_ESCAPE_KEY, p.xf);
    }
    componentWillUnmount() {
        E.S.unsubscribe(O.CkL.LAYER_POP_ESCAPE_KEY, p.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: r } = t,
            l = [];
        return (
            l.push(
                (0, i.jsx)(
                    w,
                    {
                        mode: 0 !== r || n ? Z : A,
                        baseLayer: !0,
                        children: e
                    },
                    'layer-base'
                )
            ),
            t.forEach((e, t) => l.push(this.renderComponent(e, t, r))),
            l
        );
    }
    renderComponent(e, t, n) {
        let r;
        return (
            (r = 'string' == typeof e ? j[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                w,
                {
                    mode: t === n - 1 ? A : Z,
                    children: [(0, i.jsx)(L, {}), r]
                },
                'layer-'.concat(t)
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(d.f6W, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)('div', { className: o()(N.bg, e) })
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(u.W, {
                    component: 'div',
                    className: o()(N.layers, this.props.className),
                    children: this.renderLayers()
                })
            ]
        });
    }
}
function D(e) {
    let t = (0, c.e7)([b.Z], () => b.Z.darkSidebar) ? O.BRd.DARK : void 0,
        n = (0, c.e7)([_.Z], () => _.Z.getLayers()),
        r = (0, m.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, i.jsx)(
        R,
        v(I({}, e), {
            sidebarTheme: t,
            layers: n,
            hasFullScreenLayer: r
        })
    );
}
