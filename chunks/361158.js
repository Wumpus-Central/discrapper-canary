"use strict";
n.d(t, { B8: () => L, dF: () => y, up: () => R, xr: () => S });
var i = n(477900),
    r = n(582128),
    a = n(277057),
    s = n.n(a),
    l = n(758588),
    o = n(93932),
    d = n(196765),
    c = n(121894),
    u = n(319060),
    _ = n(315710),
    E = n(844222),
    A = n(775121),
    h = n(240248),
    I = n(750506),
    f = n(191627),
    p = n(87404),
    T = n(535978);
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
                                    n?.() !== !0 && y(e);
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
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => y(t.key) }),
                ],
            }),
        })
    );
}
let C = { enter: T.Ve, enterActive: T.T8, enterDone: T.lG, exit: T.NS, exitActive: T.N5, exitDone: T.Dr },
    O = { enter: T.Zf, enterActive: T.BA, enterDone: T.zo, exit: T.ph, exitActive: T.zX, exitDone: T.hf };
function R() {
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
function y(e) {
    (0, c.r)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
