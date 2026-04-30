n.d(t, { B8: () => P, dF: () => M, up: () => O, xr: () => S });
var o = n(627968),
    r = n(64700),
    a = n(296489),
    i = n.n(a),
    l = n(580956),
    u = n(451989),
    s = n(353640),
    _ = n(121894),
    d = n(319060),
    C = n(315710),
    E = n(844222),
    p = n(775121),
    h = n(240248),
    c = n(750506),
    A = n(191627),
    y = n(87404),
    I = n(215011);
let m = new Set([y._s, A.Uy]),
    T = (0, h.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, s.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, _.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function R(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, C.t)(n),
        r.useEffect(() => {
            var e, n;
            return (
                p.A.disable(),
                m.has(t.key) ||
                    p.A.enableTemp(
                        ((e = t.key),
                        (n = t.options.onEscape),
                        {
                            POP_LAYER: {
                                binds: ["esc"],
                                comboKeysBindGlobal: !0,
                                action() {
                                    n?.() !== !0 && M(e);
                                },
                            },
                        }),
                    ),
                () => {
                    p.A.disableTemp();
                }
            );
        }, [t.key, t.options.onEscape]),
        (0, o.jsx)(t.LayerComponent, {
            children: (0, o.jsxs)("div", {
                className: I.zr,
                ref: n,
                children: [
                    (0, o.jsx)("div", { className: I.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => M(t.key) }),
                ],
            }),
        })
    );
}
let N = { enter: I.Ve, enterActive: I.T8, enterDone: I.lG, exit: I.NS, exitActive: I.N5, exitDone: I.Dr },
    g = { enter: I.Zf, enterActive: I.BA, enterDone: I.zo, exit: I.ph, exitActive: I.zX, exitDone: I.hf };
function O() {
    let { reducedMotion: e } = r.useContext(E.C),
        t = e.enabled ? g : N,
        n = S((e) => e.fullScreenLayers),
        a = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
    return (0, o.jsx)(l.A, {
        children: a.map((e) => {
            let { item: r, nodeRef: a } = e;
            return (0, o.jsx)(
                u.A,
                {
                    nodeRef: a,
                    classNames: r.options.disableAnimation ? void 0 : t,
                    timeout: T,
                    onEntered: () => {
                        (0, _.r)(() => {
                            S.setState({
                                fullScreenLayers: n.map((e) => (e.key === r.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, o.jsx)(R, { containerRef: a, item: r }),
                },
                r.key,
            );
        }),
    });
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: o, disableAnimation: r = !1, onEscape: a, showAppUnderLayer: l = !1 } = t,
        u = null != n ? n : i()();
    return (
        (0, _.r)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: u,
                        transitionState: 1,
                        LayerComponent: o ?? c.Ay,
                        render: e,
                        options: { disableAnimation: r, onEscape: a, showAppUnderLayer: l },
                    },
                ],
            }));
        }),
        u
    );
}
function M(e) {
    (0, _.r)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
