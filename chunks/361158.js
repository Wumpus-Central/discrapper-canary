"use strict";
n.d(t, { B8: () => v, dF: () => N, up: () => y, xr: () => A });
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
    m = n(87404),
    E = n(603091);
let g = (0, p.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    A = (0, u.v)((e) => ({
        fullScreenLayers: [],
        addLayer: (t) =>
            (0, c.r)(() => {
                e((e) => {
                    let { fullScreenLayers: n } = e;
                    return { fullScreenLayers: [...n, t] };
                });
            }),
    }));
function I(e) {
    let { item: t, containerRef: n } = e;
    return (
        (0, _.tjt)(n),
        i.useEffect(
            () => (
                f.A.disable(),
                t.key !== m._s && f.A.enableTemp(C(t.key, t.options.onEscape)),
                () => {
                    f.A.disableTemp();
                }
            ),
            [t.key, t.options.onEscape],
        ),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)("div", {
                className: E.zr,
                ref: n,
                children: [
                    (0, r.jsx)("div", { className: E.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => N(t.key) }),
                ],
            }),
        })
    );
}
let T = { enter: E.Ve, enterActive: E.T8, enterDone: E.lG, exit: E.NS, exitActive: E.N5, exitDone: E.Dr },
    S = { enter: E.Zf, enterActive: E.BA, enterDone: E.zo, exit: E.ph, exitActive: E.zX, exitDone: E.hf };
function y() {
    let { reducedMotion: e } = i.useContext(_.CZY),
        t = e.enabled ? S : T,
        n = A((e) => e.fullScreenLayers),
        s = n.map((e) => ({ item: e, nodeRef: i.createRef() }));
    return (0, r.jsx)(o.A, {
        children: s.map((e) => {
            let { item: i, nodeRef: s } = e;
            return (0, r.jsx)(
                l.A,
                {
                    nodeRef: s,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: g,
                    onEntered: () => {
                        (0, c.r)(() => {
                            A.setState({
                                fullScreenLayers: n.map((e) => (e.key === i.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(I, { containerRef: s, item: i }),
                },
                i.key,
            );
        }),
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, onEscape: s, showAppUnderLayer: o = !1 } = t,
        l = null != n ? n : a()();
    return (
        (0, c.r)(() => {
            A.setState((t) => ({
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
function N(e) {
    (0, c.r)(() => {
        A.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function C(e, t) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                t?.() !== !0 && N(e);
            },
        },
    };
}
