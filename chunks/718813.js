n.d(t, { Z: () => M }), n(539854);
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
    v = n(256076);
function I(e, t, n) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
let T = (0, g.Un)({
        createPromise: () => n.e("69470").then(n.bind(n, 989804)),
        webpackId: 989804,
        name: "UserSettings",
    }),
    N = (0, g.Un)({
        createPromise: () => n.e("79835").then(n.bind(n, 72493)),
        webpackId: 72493,
    }),
    P = (0, g.Un)({
        createPromise: () =>
            Promise.all([n.e("36599"), n.e("58175"), n.e("7654"), n.e("47463"), n.e("86915")]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: "ChannelSettings",
    }),
    j = (0, g.Un)({
        createPromise: () => n.e("45620").then(n.bind(n, 838819)),
        webpackId: 838819,
        name: "CollectiblesShop",
    }),
    x = (0, g.Un)({
        createPromise: () =>
            Promise.all([
                n.e("36599"),
                n.e("60962"),
                n.e("58175"),
                n.e("55616"),
                n.e("8271"),
                n.e("15851"),
                n.e("51453"),
                n.e("7654"),
                n.e("845"),
                n.e("47463"),
                n.e("6850"),
                n.e("58227"),
                n.e("54408"),
                n.e("90746"),
                n.e("8106"),
                n.e("95140"),
            ]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: "GuildSettings",
    }),
    A = {
        [E.S9g.USER_SETTINGS]: () => (0, i.jsx)(T, {}),
        [E.S9g.CHANNEL_SETTINGS]: () => (0, i.jsx)(P, {}),
        [E.S9g.GUILD_SETTINGS]: () => (0, i.jsx)(x, {}),
        [E.S9g.COLLECTIBLES_SHOP]: () => (0, i.jsx)(j, {}),
        [E.S9g.MANA_PLAYGROUND]: () => (0, i.jsx)(N, {}),
    },
    Z = "SHOWN",
    w = "HIDDEN",
    L = {
        friction: 10,
        tension: 100,
    };
function R() {
    return l.useEffect(() => (h.Z.enable(), h.Z.enableTemp(f.u), () => h.Z.disableTemp()), []), null;
}
class D extends (r = l.PureComponent) {
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
            if (t === Z && n === w) return this.animateIn();
            if (t === w && n === Z) return this.animateUnder();
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
        s.Z.parallel([s.Z.spring(t, C({ toValue: 1 }, L)), s.Z.spring(n, C({ toValue: 1 }, L))]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        O.S.dispatch(E.CkL.LAYER_POP_START),
            s.Z.parallel([s.Z.spring(t, C({ toValue: 0 }, L)), s.Z.spring(n, C({ toValue: 1.1 }, L))]).start(() => {
                e(), O.S.dispatch(E.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        s.Z.parallel([s.Z.spring(e, C({ toValue: 0 }, L)), s.Z.spring(t, C({ toValue: 0.93 }, L))]).start(() =>
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
            u = r === w,
            p = e || u ? this.getAnimatedStyle() : null,
            f = !u && !a,
            h = (0, i.jsx)(
                s.Z.div,
                S(
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
                                          default:
                                              return "";
                                      }
                                  })(n)
                                : void 0,
                            role: f ? "dialog" : void 0,
                            className: o()(v.layer, {
                                [v.baseLayer]: a,
                                [v.animating]: e,
                                "stop-animations": r === w,
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
        super(e), I(this, "containerRef", l.createRef());
        let t = 1,
            n = 1;
        e.mode === w && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new s.Z.Value(t),
                opacity: new s.Z.Value(n),
                mode: e.mode,
            });
    }
}
I(D, "defaultProps", { baseLayer: !1 }), I(D, "contextType", d.Sfi);
class k extends l.PureComponent {
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
                    D,
                    {
                        mode: 0 !== r || n ? w : Z,
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
            (r = "string" == typeof e ? A[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                D,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? Z : w,
                    children: [(0, i.jsx)(R, {}), r],
                },
                "layer-".concat(t),
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(d.f6W, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)("div", { className: o()(v.bg, e) }),
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(u.W, {
                    component: "div",
                    className: o()(v.layers, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function M(e) {
    let t = (0, b.Ll)(),
        n = (0, c.e7)([_.Z], () => _.Z.getLayers()),
        r = (0, m.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, i.jsx)(
        k,
        S(C({}, e), {
            sidebarTheme: t,
            layers: n,
            hasFullScreenLayer: r,
        }),
    );
}
