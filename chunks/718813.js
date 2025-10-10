n.d(t, { Z: () => G }), n(539854);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    c = n(442837),
    u = n(215569),
    d = n(481060),
    p = n(37234),
    f = n(134616),
    h = n(714338),
    g = n(663993),
    m = n(84615),
    b = n(984802),
    _ = n(819640),
    O = n(585483),
    E = n(981631),
    y = n(388032),
    v = n(484718),
    I = n(256076);
function S(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
let N = (0, g.Un)({
        createPromise: () => n.e("69470").then(n.bind(n, 989804)),
        webpackId: 989804,
        name: "UserSettings",
    }),
    j = (0, g.Un)({
        createPromise: () => n.e("79835").then(n.bind(n, 72493)),
        webpackId: 72493,
    }),
    P = (0, g.Un)({
        createPromise: () => n.e("80448").then(n.bind(n, 765457)),
        webpackId: 765457,
        name: "CheckpointSlides",
    }),
    x = (0, g.Un)({
        createPromise: () =>
            Promise.all([n.e("36599"), n.e("7654"), n.e("58175"), n.e("58511"), n.e("86915")]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: "ChannelSettings",
    }),
    A = (0, g.Un)({
        createPromise: () => n.e("45620").then(n.bind(n, 838819)),
        webpackId: 838819,
        name: "CollectiblesShop",
    }),
    Z = (0, g.Un)({
        createPromise: () =>
            Promise.all([
                n.e("36599"),
                n.e("7654"),
                n.e("58175"),
                n.e("76692"),
                n.e("8271"),
                n.e("15851"),
                n.e("51453"),
                n.e("845"),
                n.e("58511"),
                n.e("6850"),
                n.e("58227"),
                n.e("44686"),
                n.e("30378"),
                n.e("64982"),
                n.e("95140"),
            ]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: "GuildSettings",
    }),
    w = {
        [E.S9g.USER_SETTINGS]: () => (0, i.jsx)(N, {}),
        [E.S9g.CHANNEL_SETTINGS]: () => (0, i.jsx)(x, {}),
        [E.S9g.GUILD_SETTINGS]: () => (0, i.jsx)(Z, {}),
        [E.S9g.COLLECTIBLES_SHOP]: () => (0, i.jsx)(A, {}),
        [E.S9g.MANA_PLAYGROUND]: () => (0, i.jsx)(j, {}),
        [E.S9g.CHECKPOINT]: () => (0, i.jsx)(P, {}),
    },
    L = "SHOWN",
    R = "HIDDEN",
    D = {
        friction: 10,
        tension: 100,
    };
function k() {
    return l.useEffect(() => (h.Z.enable(), h.Z.enableTemp(f.u), () => h.Z.disableTemp()), []), null;
}
class M extends (r = l.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode
            ? {
                  animating: !0,
                  mode: e.mode,
              }
            : null;
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === L && n === R) return this.animateIn();
            if (t === R && n === L) return this.animateUnder();
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
        s.Z.parallel([s.Z.spring(t, C({ toValue: 1 }, D)), s.Z.spring(n, C({ toValue: 1 }, D))]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        O.S.dispatch(E.CkL.LAYER_POP_START),
            s.Z.parallel([s.Z.spring(t, C({ toValue: 0 }, D)), s.Z.spring(n, C({ toValue: 1.1 }, D))]).start(() => {
                e(), O.S.dispatch(E.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        s.Z.parallel([s.Z.spring(e, C({ toValue: 0 }, D)), s.Z.spring(t, C({ toValue: 0.93 }, D))]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            t = this.props,
            { name: n, mode: r, children: l, baseLayer: a } = t,
            c = (function (e, t) {
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
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(t, ["name", "mode", "children", "baseLayer"]),
            u = r === R,
            p = e || u ? this.getAnimatedStyle() : null,
            f = !u && !a,
            h = (0, i.jsx)(
                s.Z.div,
                T(
                    C(
                        {
                            ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                            "data-layer": null != n ? n : "base",
                            "aria-hidden": u,
                            "aria-modal": f,
                            "aria-label": f
                                ? (function (e) {
                                      switch (e) {
                                          case E.S9g.USER_SETTINGS:
                                              return y.intl.string(y.t.cduTBA);
                                          case E.S9g.CHANNEL_SETTINGS:
                                              return y.intl.string(y.t.XPDhcX);
                                          case E.S9g.COLLECTIBLES_SHOP:
                                              return y.intl.string(y.t.pWG4zc);
                                          case E.S9g.MANA_PLAYGROUND:
                                              return "Component Playground";
                                          case E.S9g.CHECKPOINT:
                                              return y.intl.string(v.default["CdU/PD"]);
                                          default:
                                              return "";
                                      }
                                  })(n)
                                : void 0,
                            role: f ? "dialog" : void 0,
                            className: o()(I.layer, {
                                [I.baseLayer]: a,
                                [I.animating]: e,
                                "stop-animations": r === R,
                            }),
                            style: p,
                        },
                        c,
                    ),
                    { children: l },
                ),
            );
        return a
            ? h
            : (0, i.jsx)(d.EqS, {
                  containerRef: this.containerRef,
                  children: h,
              });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: r } = this.context;
        return {
            opacity: t,
            transform: r.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }],
        };
    }
    constructor(e) {
        super(e), S(this, "containerRef", l.createRef());
        let t = 1,
            n = 1;
        e.mode === R && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new s.Z.Value(t),
                opacity: new s.Z.Value(n),
                mode: e.mode,
            });
    }
}
S(M, "defaultProps", { baseLayer: !1 }), S(M, "contextType", d.Sfi);
class U extends l.PureComponent {
    componentDidMount() {
        O.S.subscribe(E.CkL.LAYER_POP_ESCAPE_KEY, p.xf);
    }
    componentWillUnmount() {
        O.S.unsubscribe(E.CkL.LAYER_POP_ESCAPE_KEY, p.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: r } = t,
            l = [];
        return (
            l.push(
                (0, i.jsx)(
                    M,
                    {
                        mode: 0 !== r || n ? R : L,
                        baseLayer: !0,
                        children: e,
                    },
                    "layer-base",
                ),
            ),
            t.forEach((e, t) => l.push(this.renderComponent(e, t, r))),
            l
        );
    }
    renderComponent(e, t, n) {
        let r;
        return (
            (r = "string" == typeof e ? w[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                M,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? L : R,
                    children: [(0, i.jsx)(k, {}), r],
                },
                "layer-".concat(t),
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(d.f6W, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)("div", { className: o()(I.bg, e) }),
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(u.W, {
                    component: "div",
                    className: o()(I.layers, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function G(e) {
    let t = (0, b.Ll)(),
        n = (0, c.e7)([_.Z], () => _.Z.getLayers()),
        r = (0, m.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, i.jsx)(
        U,
        T(C({}, e), {
            sidebarTheme: t,
            layers: n,
            hasFullScreenLayer: r,
        }),
    );
}
