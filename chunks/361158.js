n.d(t, { B8: () => R, dF: () => g, up: () => T, xr: () => b });
var i = n(627968),
    r = n(64700),
    l = n(296489),
    s = n.n(l),
    a = n(580956),
    u = n(451989),
    o = n(353640),
    c = n(121894),
    d = n(319060),
    p = n(315710),
    h = n(844222),
    C = n(775121),
    m = n(240248),
    I = n(750506),
    E = n(191627),
    f = n(87404),
    _ = n(215011);
let A = new Set([f._s, E.Uy]),
    P = (0, m.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    b = (0, o.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, c.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function y(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, p.t)(n),
        r.useEffect(() => {
            var e, n;
            return (
                C.A.disable(),
                A.has(t.key) ||
                    C.A.enableTemp(
                        ((e = t.key),
                        (n = t.options.onEscape),
                        {
                            POP_LAYER: {
                                binds: ["esc"],
                                comboKeysBindGlobal: !0,
                                action() {
                                    n?.() !== !0 && g(e);
                                },
                            },
                        }),
                    ),
                () => {
                    C.A.disableTemp();
                }
            );
        }, [t.key, t.options.onEscape]),
        (0, i.jsx)(t.LayerComponent, {
            children: (0, i.jsxs)("div", {
                className: _.zr,
                ref: n,
                children: [
                    (0, i.jsx)("div", { className: _.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => g(t.key) }),
                ],
            }),
        })
    );
}
let S = { enter: _.Ve, enterActive: _.T8, enterDone: _.lG, exit: _.NS, exitActive: _.N5, exitDone: _.Dr },
    M = { enter: _.Zf, enterActive: _.BA, enterDone: _.zo, exit: _.ph, exitActive: _.zX, exitDone: _.hf };
function T() {
    let { reducedMotion: e } = r.useContext(h.C),
        t = e.enabled ? M : S,
        n = b((e) => e.fullScreenLayers),
        l = n.map((e) => ({ item: e, nodeRef: r.createRef() }));
    return (0, i.jsx)(a.A, {
        children: l.map((e) => {
            let { item: r, nodeRef: l } = e;
            return (0, i.jsx)(
                u.A,
                {
                    nodeRef: l,
                    classNames: r.options.disableAnimation ? void 0 : t,
                    timeout: P,
                    onEntered: () => {
                        (0, c.r)(() => {
                            b.setState({
                                fullScreenLayers: n.map((e) => (e.key === r.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, i.jsx)(y, { containerRef: l, item: r }),
                },
                r.key,
            );
        }),
    });
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: i, disableAnimation: r = !1, onEscape: l, showAppUnderLayer: a = !1 } = t,
        u = null != n ? n : s()();
    return (
        (0, c.r)(() => {
            b.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: u,
                        transitionState: 1,
                        LayerComponent: i ?? I.Ay,
                        render: e,
                        options: { disableAnimation: r, onEscape: l, showAppUnderLayer: a },
                    },
                ],
            }));
        }),
        u
    );
}
function g(e) {
    (0, c.r)(() => {
        b.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
