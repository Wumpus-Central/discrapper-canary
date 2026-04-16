"use strict";
n.d(t, { B8: () => C, dF: () => R, up: () => N, xr: () => T });
var r = n(627968),
    i = n(64700),
    s = n(296489),
    a = n.n(s),
    o = n(89229),
    l = n(307343),
    u = n(353640),
    c = n(121894),
    d = n(319060),
    _ = n(397927),
    f = n(775121),
    p = n(240248),
    h = n(750506),
    m = n(191627),
    E = n(87404),
    g = n(603091);
let A = new Set([E._s, m.Uy]),
    I = (0, p.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    T = (0, u.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, c.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function S(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, _.tjt)(n),
        i.useEffect(
            () => (
                f.A.disable(),
                A.has(t.key) || f.A.enableTemp(O(t.key, t.options.onEscape)),
                () => {
                    f.A.disableTemp();
                }
            ),
            [t.key, t.options.onEscape],
        ),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)("div", {
                className: g.zr,
                ref: n,
                children: [
                    (0, r.jsx)("div", { className: g.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => R(t.key) }),
                ],
            }),
        })
    );
}
let y = { enter: g.Ve, enterActive: g.T8, enterDone: g.lG, exit: g.NS, exitActive: g.N5, exitDone: g.Dr },
    v = { enter: g.Zf, enterActive: g.BA, enterDone: g.zo, exit: g.ph, exitActive: g.zX, exitDone: g.hf };
function N() {
    let { reducedMotion: e } = i.useContext(_.CZY),
        t = e.enabled ? v : y,
        n = T((e) => e.fullScreenLayers),
        s = n.map((e) => ({ item: e, nodeRef: i.createRef() }));
    return (0, r.jsx)(o.A, {
        children: s.map((e) => {
            let { item: i, nodeRef: s } = e;
            return (0, r.jsx)(
                l.A,
                {
                    nodeRef: s,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: I,
                    onEntered: () => {
                        (0, c.r)(() => {
                            T.setState({
                                fullScreenLayers: n.map((e) => (e.key === i.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(S, { containerRef: s, item: i }),
                },
                i.key,
            );
        }),
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, onEscape: s, showAppUnderLayer: o = !1 } = t,
        l = null != n ? n : a()();
    return (
        (0, c.r)(() => {
            T.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: l,
                        transitionState: 1,
                        LayerComponent: r ?? h.Ay,
                        render: e,
                        options: { disableAnimation: i, onEscape: s, showAppUnderLayer: o },
                    },
                ],
            }));
        }),
        l
    );
}
function R(e) {
    (0, c.r)(() => {
        T.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function O(e, t) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                t?.() !== !0 && R(e);
            },
        },
    };
}
