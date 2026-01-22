n.d(t, {
    B8: () => N,
    dF: () => R,
    up: () => C,
    xr: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(296489),
    s = n.n(a),
    o = n(89229),
    l = n(307343),
    c = n(353640),
    u = n(121894),
    d = n(319060),
    f = n(397927),
    p = n(775121),
    _ = n(240248),
    h = n(750506),
    m = n(87404),
    g = n(282664);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = (0, _.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    v = (0, c.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, u.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return {
                        fullScreenLayers: [...n, t],
                    };
                });
            }),
    }));
function S(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, f.tjt)(n),
        i.useEffect(
            () => (
                p.A.disable(),
                t.key !== m._s && p.A.enableTemp(w(t.key)),
                () => {
                    p.A.disableTemp();
                }
            ),
            [t.key],
        ),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)("div", {
                className: g.zr,
                ref: n,
                children: [
                    (0, r.jsx)("div", { className: g.$E }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => R(t.key),
                    }),
                ],
            }),
        })
    );
}
let I = {
        enter: g.Ve,
        enterActive: g.T8,
        enterDone: g.lG,
        exit: g.NS,
        exitActive: g.N5,
        exitDone: g.Dr,
    },
    T = {
        enter: g.Zf,
        enterActive: g.BA,
        enterDone: g.zo,
        exit: g.ph,
        exitActive: g.zX,
        exitDone: g.hf,
    };
function C() {
    let { reducedMotion: e } = i.useContext(f.CZY),
        t = e.enabled ? T : I,
        n = v((e) => e.fullScreenLayers),
        a = n.map((e) => ({
            item: e,
            nodeRef: i.createRef(),
        }));
    return (0, r.jsx)(o.A, {
        children: a.map((e) => {
            let { item: i, nodeRef: a } = e;
            return (0, r.jsx)(
                l.A,
                {
                    nodeRef: a,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: A,
                    onEntered: () => {
                        (0, u.r)(() => {
                            v.setState({
                                fullScreenLayers: n.map((e) =>
                                    e.key === i.key ? O(b({}, e), { transitionState: 2 }) : e,
                                ),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(S, {
                        containerRef: a,
                        item: i,
                    }),
                },
                i.key,
            );
        }),
    });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, showAppUnderLayer: a = !1 } = t,
        o = null != n ? n : s()();
    return (
        (0, u.r)(() => {
            v.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: o,
                        transitionState: 1,
                        LayerComponent: null != r ? r : h.Ay,
                        render: e,
                        options: {
                            disableAnimation: i,
                            showAppUnderLayer: a,
                        },
                    },
                ],
            }));
        }),
        o
    );
}
function R(e) {
    (0, u.r)(() => {
        v.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function w(e) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                R(e);
            },
        },
    };
}
