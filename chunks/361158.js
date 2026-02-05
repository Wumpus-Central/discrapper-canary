"use strict";
n.d(t, { B8: () => v, dF: () => C, up: () => S, xr: () => A });
var r = n(627968),
    i = n(64700),
    a = n(296489),
    s = n.n(a),
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
    g = n(282664);
let E = (0, p.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
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
                t.key !== m._s && f.A.enableTemp(b(t.key)),
                () => {
                    f.A.disableTemp();
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
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => C(t.key) }),
                ],
            }),
        })
    );
}
let T = { enter: g.Ve, enterActive: g.T8, enterDone: g.lG, exit: g.NS, exitActive: g.N5, exitDone: g.Dr },
    y = { enter: g.Zf, enterActive: g.BA, enterDone: g.zo, exit: g.ph, exitActive: g.zX, exitDone: g.hf };
function S() {
    let { reducedMotion: e } = i.useContext(_.CZY),
        t = e.enabled ? y : T,
        n = A((e) => e.fullScreenLayers),
        a = n.map((e) => ({ item: e, nodeRef: i.createRef() }));
    return (0, r.jsx)(o.A, {
        children: a.map((e) => {
            let { item: i, nodeRef: a } = e;
            return (0, r.jsx)(
                l.A,
                {
                    nodeRef: a,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: E,
                    onEntered: () => {
                        (0, c.r)(() => {
                            A.setState({
                                fullScreenLayers: n.map((e) => (e.key === i.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(I, { containerRef: a, item: i }),
                },
                i.key,
            );
        }),
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, showAppUnderLayer: a = !1 } = t,
        o = null != n ? n : s()();
    return (
        (0, c.r)(() => {
            A.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: o,
                        transitionState: 1,
                        LayerComponent: r ?? h.Ay,
                        render: e,
                        options: { disableAnimation: i, showAppUnderLayer: a },
                    },
                ],
            }));
        }),
        o
    );
}
function C(e) {
    (0, c.r)(() => {
        A.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
function b(e) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                C(e);
            },
        },
    };
}
