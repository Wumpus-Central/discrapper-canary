n.d(t, { B8: () => P, dF: () => M, up: () => g, xr: () => S });
var o = n(627968),
    r = n(64700),
    i = n(296489),
    a = n.n(i),
    l = n(580956),
    s = n(451989),
    u = n(353640),
    _ = n(121894),
    d = n(319060),
    C = n(315710),
    E = n(844222),
    p = n(775121),
    h = n(240248),
    c = n(750506),
    A = n(191627),
    I = n(87404),
    y = n(215011);
let m = new Set([I._s, A.Uy]),
    T = (0, h.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, u.v)((e) => ({
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
                className: y.zr,
                ref: n,
                children: [
                    (0, o.jsx)("div", { className: y.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => M(t.key) }),
                ],
            }),
        })
    );
}
let N = { enter: y.Ve, enterActive: y.T8, enterDone: y.lG, exit: y.NS, exitActive: y.N5, exitDone: y.Dr },
    O = { enter: y.Zf, enterActive: y.BA, enterDone: y.zo, exit: y.ph, exitActive: y.zX, exitDone: y.hf };
function g() {
    let { reducedMotion: e } = r.useContext(E.C),
        t = e.enabled ? O : N,
        n = S((e) => e.fullScreenLayers),
        i = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
    return (0, o.jsx)(l.A, {
        children: i.map((e) => {
            let { item: r, nodeRef: i } = e;
            return (0, o.jsx)(
                s.A,
                {
                    nodeRef: i,
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
                    children: (0, o.jsx)(R, { containerRef: i, item: r }),
                },
                r.key,
            );
        }),
    });
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: o, disableAnimation: r = !1, onEscape: i, showAppUnderLayer: l = !1 } = t,
        s = null != n ? n : a()();
    return (
        (0, _.r)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: s,
                        transitionState: 1,
                        LayerComponent: o ?? c.Ay,
                        render: e,
                        options: { disableAnimation: r, onEscape: i, showAppUnderLayer: l },
                    },
                ],
            }));
        }),
        s
    );
}
function M(e) {
    (0, _.r)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
