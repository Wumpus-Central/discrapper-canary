"use strict";
n.d(t, { B8: () => L, dF: () => D, up: () => O, xr: () => S });
var i = n(627968),
    r = n(64700),
    a = n(296489),
    s = n.n(a),
    l = n(580956),
    o = n(451989),
    d = n(353640),
    c = n(121894),
    u = n(319060),
    _ = n(315710),
    E = n(844222),
    A = n(775121),
    h = n(240248),
    I = n(750506),
    f = n(191627),
    p = n(87404),
    T = n(215011);
let m = new Set([p._s, f.Uy]),
    g = (0, h.xI)(u.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
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
                m.has(t.key) ||
                    A.A.enableTemp(
                        ((e = t.key),
                        (n = t.options.onEscape),
                        {
                            POP_LAYER: {
                                binds: ["esc"],
                                comboKeysBindGlobal: !0,
                                action() {
                                    n?.() !== !0 && D(e);
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
                className: T.zr,
                ref: n,
                children: [
                    (0, i.jsx)("div", { className: T.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => D(t.key) }),
                ],
            }),
        })
    );
}
let C = { enter: T.Ve, enterActive: T.T8, enterDone: T.lG, exit: T.NS, exitActive: T.N5, exitDone: T.Dr },
    R = { enter: T.Zf, enterActive: T.BA, enterDone: T.zo, exit: T.ph, exitActive: T.zX, exitDone: T.hf };
function O() {
    let { reducedMotion: e } = r.useContext(E.C),
        t = e.enabled ? R : C,
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
                                fullScreenLayers: n.map((e) => (e.key === r.key ? { ...e, transitionState: 2 } : e)),
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
}
function L(e) {
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
                        LayerComponent: i ?? I.Ay,
                        render: e,
                        options: { disableAnimation: r, onEscape: a, showAppUnderLayer: l },
                    },
                ],
            }));
        }),
        o
    );
}
function D(e) {
    (0, c.r)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
