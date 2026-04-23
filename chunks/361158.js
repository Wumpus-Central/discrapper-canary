"use strict";
n.d(t, { B8: () => O, dF: () => R, up: () => C, xr: () => S });
var r = n(627968),
    i = n(64700),
    s = n(296489),
    a = n.n(s),
    o = n(89229),
    l = n(307343),
    u = n(353640),
    c = n(121894),
    d = n(319060),
    _ = n(315710),
    f = n(844222),
    p = n(775121),
    h = n(240248),
    E = n(750506),
    m = n(191627),
    g = n(87404),
    A = n(215011);
let I = new Set([g._s, m.Uy]),
    T = (0, h.xI)(d.A.FULL_SCREEN_LAYER_ANIMATION_DURATION),
    S = (0, u.v)((e) => ({
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
        (0, _.t)(n),
        i.useEffect(() => {
            var e, n;
            return (
                p.A.disable(),
                I.has(t.key) ||
                    p.A.enableTemp(
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
                    p.A.disableTemp();
                }
            );
        }, [t.key, t.options.onEscape]),
        (0, r.jsx)(t.LayerComponent, {
            children: (0, r.jsxs)("div", {
                className: A.zr,
                ref: n,
                children: [
                    (0, r.jsx)("div", { className: A.$E }),
                    t.render({ transitionState: null != t ? t.transitionState : 3, closeLayer: () => R(t.key) }),
                ],
            }),
        })
    );
}
let N = { enter: A.Ve, enterActive: A.T8, enterDone: A.lG, exit: A.NS, exitActive: A.N5, exitDone: A.Dr },
    v = { enter: A.Zf, enterActive: A.BA, enterDone: A.zo, exit: A.ph, exitActive: A.zX, exitDone: A.hf };
function C() {
    let { reducedMotion: e } = i.useContext(f.C),
        t = e.enabled ? v : N,
        n = S((e) => e.fullScreenLayers),
        s = n.map((e) => ({ item: e, nodeRef: i.createRef() }));
    return (0, r.jsx)(o.A, {
        children: s.map((e) => {
            let { item: i, nodeRef: s } = e;
            return (0, r.jsx)(
                l.A,
                {
                    nodeRef: s,
                    classNames: i.options.disableAnimation ? void 0 : t,
                    timeout: T,
                    onEntered: () => {
                        (0, c.r)(() => {
                            S.setState({
                                fullScreenLayers: n.map((e) => (e.key === i.key ? { ...e, transitionState: 2 } : e)),
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, r.jsx)(y, { containerRef: s, item: i }),
                },
                i.key,
            );
        }),
    });
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r, disableAnimation: i = !1, onEscape: s, showAppUnderLayer: o = !1 } = t,
        l = null != n ? n : a()();
    return (
        (0, c.r)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: l,
                        transitionState: 1,
                        LayerComponent: r ?? E.Ay,
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
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
