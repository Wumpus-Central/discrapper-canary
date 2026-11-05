var i = n(477900),
    r = n(582128),
    a = n(277057),
    s = n.n(a),
    l = n(604084),
    o = n(957810),
    d = n(196765),
    c = n(121894),
    u = n(319060),
    _ = n(315710),
    E = n(844222),
    A = n(775121),
    f = n(240248),
    h = n(750506),
    I = n(191627),
    p = n(87404),
    m = n(535978);
let T = new Set([p._s, I.Uy]),
    g = (0, f.xI)(u.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, d.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, c.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function N(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, _.tj)(n),
        r.useEffect(() => {
            var e, n;
            return (
                A.A.disable(),
                T.has(t.key) ||
                    A.A.enableTemp(
                        ((e = t.key),
                        (n = t.options.onEscape),
                        {
                            POP_LAYER: {
                                binds: ["esc"],
                                comboKeysBindGlobal: !0,
                                action() {
                                    n?.() !== !0 && R(e);
                                },
                            },
                        }),
                    ),
                () => {
                    A.A.disableTemp();
                }
            );
        }, [t.key, t.options.onEscape]),
        (0, i.jsx)(t.LayerComponent, {
            children: (0, i.jsxs)("div", {
                className: m.zr,
                ref: n,
                children: [
                    (0, i.jsx)("div", { className: m.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => R(t.key) }),
                ],
            }),
        })
    );
}
let C = { enter: m.Ve, enterActive: m.T8, enterDone: m.lG, exit: m.NS, exitActive: m.N5, exitDone: m.Dr },
    O = { enter: m.Zf, enterActive: m.BA, enterDone: m.zo, exit: m.ph, exitActive: m.zX, exitDone: m.hf };
function R(e) {
    (0, c.r)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
n.d(
    t,
    {},
    {
        B8: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                { layerKey: n, Layer: i, disableAnimation: r = !1, onEscape: a, showAppUnderLayer: l = !1 } = t,
                o = null != n ? n : s()();
            return (
                (0, c.r)(() => {
                    S.setState((t) => ({
                        fullScreenLayers: [
                            ...t.fullScreenLayers,
                            {
                                key: o,
                                transitionState: 1,
                                LayerComponent: i ?? h.Ay,
                                render: e,
                                options: { disableAnimation: r, onEscape: a, showAppUnderLayer: l },
                            },
                        ],
                    }));
                }),
                o
            );
        },
        dF: R,
        up: function () {
            let { reducedMotion: e } = r.useContext(E.C),
                t = e.enabled ? O : C,
                n = S((e) => e.fullScreenLayers),
                a = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
            return (0, i.jsx)(l.A, {
                children: a.map((e) => {
                    let { item: r, nodeRef: a } = e;
                    return (0, i.jsx)(
                        o.A,
                        {
                            nodeRef: a,
                            classNames: r.options.disableAnimation ? void 0 : t,
                            timeout: g,
                            onEntered: () => {
                                (0, c.r)(() => {
                                    S.setState({
                                        fullScreenLayers: n.map((e) =>
                                            e.key === r.key ? { ...e, transitionState: 2 } : e,
                                        ),
                                    });
                                });
                            },
                            unmountOnExit: !0,
                            children: (0, i.jsx)(N, { containerRef: a, item: r }),
                        },
                        r.key,
                    );
                }),
            });
        },
        xr: S,
    },
);
