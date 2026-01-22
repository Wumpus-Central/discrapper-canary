n.d(t, { A: () => U }), n(321073);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    c = n(311907),
    u = n(73939),
    d = n(397927),
    p = n(398590),
    f = n(390435),
    h = n(775121),
    A = n(268218),
    g = n(361158),
    m = n(97469),
    b = n(186111),
    _ = n(203982),
    E = n(652215),
    O = n(985018),
    y = n(136042);
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
function v(e) {
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
let C = (0, A.Fe)({
        createPromise: () => n.e("67878").then(n.bind(n, 655297)),
        webpackId: 655297,
        name: "UserSettings",
    }),
    N = (0, A.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    T = (0, A.Fe)({
        createPromise: () =>
            Promise.all([n.e("68587"), n.e("43600"), n.e("21968"), n.e("78888")]).then(n.bind(n, 667587)),
        webpackId: 667587,
        name: "ChannelSettings",
    }),
    j = (0, A.Fe)({
        createPromise: () => n.e("59275").then(n.bind(n, 737630)),
        webpackId: 737630,
        name: "CollectiblesShop",
    }),
    x = (0, A.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("68587"),
                n.e("43600"),
                n.e("63379"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("21968"),
                n.e("35894"),
                n.e("50796"),
                n.e("8458"),
                n.e("47841"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    P = {
        [E.zgK.USER_SETTINGS]: () => (0, i.jsx)(C, {}),
        [E.zgK.CHANNEL_SETTINGS]: () => (0, i.jsx)(T, {}),
        [E.zgK.GUILD_SETTINGS]: () => (0, i.jsx)(x, {}),
        [E.zgK.COLLECTIBLES_SHOP]: () => (0, i.jsx)(j, {}),
        [E.zgK.COMPONENT_PLAYGROUND]: () => (0, i.jsx)(N, {}),
    },
    w = "SHOWN",
    L = "HIDDEN",
    R = {
        friction: 10,
        tension: 100,
    };
function D() {
    return l.useEffect(() => (h.A.enable(), h.A.enableTemp(f.w), () => h.A.disableTemp()), []), null;
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
            if (t === w && n === L) return this.animateIn();
            if (t === L && n === w) return this.animateUnder();
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
        c.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        o.A.parallel([o.A.spring(t, v({ toValue: 1 }, R)), o.A.spring(n, v({ toValue: 1 }, R))]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        c.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        o.A.parallel([o.A.spring(t, v({ toValue: 0 }, R)), o.A.spring(n, v({ toValue: 1.1 }, R))]).start(() => {
            e(), _._.dispatch(E.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        c.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        o.A.parallel([o.A.spring(e, v({ toValue: 0 }, R)), o.A.spring(t, v({ toValue: 0.93 }, R))]).start(() =>
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
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(t, ["name", "mode", "children", "baseLayer"]),
            u = r === L,
            p = e || u ? this.getAnimatedStyle() : null,
            f = !u && !a,
            h = (0, i.jsx)(
                o.A.div,
                S(
                    v(
                        {
                            ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                            "data-layer": null != n ? n : "base",
                            "aria-hidden": u,
                            "aria-modal": f,
                            "aria-label": f
                                ? (function (e) {
                                      switch (e) {
                                          case E.zgK.USER_SETTINGS:
                                              return O.intl.string(O.t.cduTBL);
                                          case E.zgK.CHANNEL_SETTINGS:
                                              return O.intl.string(O.t.XPDhcc);
                                          case E.zgK.COLLECTIBLES_SHOP:
                                              return O.intl.string(O.t.pWG4ze);
                                          case E.zgK.COMPONENT_PLAYGROUND:
                                              return "Component Playground";
                                          default:
                                              return "";
                                      }
                                  })(n)
                                : void 0,
                            role: f ? "dialog" : void 0,
                            className: s()(y.qd, {
                                [y.n3]: a,
                                [y.bW]: e,
                                "stop-animations": r === L,
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
            : (0, i.jsx)(d.Oky, {
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
        e.mode === L && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new o.A.Value(t),
                opacity: new o.A.Value(n),
                mode: e.mode,
            });
    }
}
I(M, "defaultProps", { baseLayer: !1 }), I(M, "contextType", d.CZY);
class k extends l.PureComponent {
    componentDidMount() {
        _._.subscribe(E.jej.LAYER_POP_ESCAPE_KEY, p.jH);
    }
    componentWillUnmount() {
        _._.unsubscribe(E.jej.LAYER_POP_ESCAPE_KEY, p.jH);
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
                        mode: 0 !== r || n ? L : w,
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
            (r = "string" == typeof e ? P[e]() : (0, i.jsx)(e, {})),
            (0, i.jsxs)(
                M,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? w : L,
                    children: [(0, i.jsx)(D, {}), r],
                },
                "layer-".concat(t),
            )
        );
    }
    renderArtisanalHack() {
        return (0, i.jsx)(d.NPJ, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, i.jsx)("div", { className: s()(y.bg, e) }),
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, i.jsx)(u.F, {
                    component: "div",
                    className: s()(y.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function U(e) {
    let t = (0, m.NC)(),
        n = (0, c.bG)([b.A], () => b.A.getLayers()),
        r = (0, g.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, i.jsx)(
        k,
        S(v({}, e), {
            sidebarTheme: t,
            layers: n,
            hasFullScreenLayer: r,
        }),
    );
}
