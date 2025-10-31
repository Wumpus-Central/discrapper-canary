n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(846519),
    s = n(681715),
    c = n(481060),
    u = n(393238),
    d = n(493773),
    p = n(677601),
    f = n(823789),
    h = n(352978),
    m = n(388032),
    g = n(412418),
    b = n(174260);
function _(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let y = i.memo(function (e) {
    var t,
        n,
        { enableZoom: l = !1, initialZoomLevel: y = 1, minZoom: C = 1, maxZoom: v = 5 } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["enableZoom", "initialZoomLevel", "minZoom", "maxZoom"]);
    let { streamId: x, onResize: E, wrapperClassName: j, videoComponent: S, mirror: P, paused: I } = O,
        [Z, T] = i.useState(!1),
        [N, A] = i.useState(null),
        [w, M] = i.useState(null),
        [R, D] = i.useState(0),
        [L, k] = i.useState({
            x: 0,
            y: 0,
        }),
        [U, B] = i.useState(null),
        [F, V] = i.useState(null),
        [H, G] = i.useState(!1),
        [W, z] = i.useState(_(y, C, v)),
        [q, Y] = i.useState(!1),
        [K, X] = i.useState(16 / 9),
        [J, Q] = i.useState(!1),
        [$, ee] = i.useState(!1),
        et = i.useRef(new o.V7()),
        en = i.useRef(new o.V7()),
        er = i.useRef(new o.V7()),
        ei = i.useRef(null),
        el = i.useRef(null),
        ea = i.useRef(null),
        eo = 1 !== W,
        es = i.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && X(e.width / e.height), null == E || E(e);
            },
            [E],
        ),
        ec = i.useCallback((e) => {
            if (null == ei.current)
                return {
                    x: 0,
                    y: 0,
                };
            let t = ei.current.getBoundingClientRect();
            return {
                x: e.clientX - t.left - t.width / 2,
                y: e.clientY - t.top - t.height / 2,
            };
        }, []),
        eu = i.useCallback(
            (e, t, n) => {
                if (null == ei.current)
                    return {
                        x: 0,
                        y: 0,
                    };
                let r = null != n ? n : W,
                    i = ei.current.clientWidth,
                    l = ei.current.clientHeight,
                    a = (i * (r - 1)) / 2,
                    o = (l * (r - 1)) / 2;
                return {
                    x: _(e, -a, a),
                    y: _(t, -o, o),
                };
            },
            [W],
        ),
        ed = i.useCallback(
            (e, t) => {
                let n = _(W + e, C, v);
                if (null == ei.current || null == t || n === W) return;
                let r = n / W;
                k((e) => eu((e.x - t.x) * r + t.x, (e.y - t.y) * r + t.y, n)), z(n);
            },
            [eu, v, C, W],
        ),
        ep = i.useCallback(() => {
            et.current.stop(), Q(!0);
        }, []),
        ef = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.T;
                ep(), et.current.start(e, () => Q(!1));
            },
            [ep],
        ),
        eh = i.useCallback(
            (e) => {
                if (!eo) return;
                e.preventDefault(), e.stopPropagation();
                let t = ec(e);
                T(!0), M(t), A(t), D(Date.now()), V(t), B(L);
            },
            [ec, eo, L],
        ),
        em = i.useCallback(
            (e) => {
                if (((l || eo) && ef(), !Z || !eo || null == F || null == U)) return;
                e.preventDefault(), e.stopPropagation();
                let t = ec(e),
                    n = t.x - F.x,
                    r = t.y - F.y;
                k(eu(U.x + n, U.y + r)), A(t);
            },
            [eu, F, U, l, ec, Z, eo, ef],
        ),
        eg = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), T(!1), V(null), B(null);
        }, []),
        eb = i.useCallback(
            (e) => {
                if (eo && null != w && null != N) {
                    let { x: t, y: n } = w,
                        { x: r, y: i } = N;
                    (Math.sqrt((r - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - R >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [eo, w, R, N],
        ),
        e_ = i.useCallback(() => {
            T(!1), V(null), B(null);
        }, []),
        ey = i.useCallback(
            (e) => {
                l &&
                    (Y(!0),
                    ed(-e.deltaY / 100, ec(e)),
                    ef(),
                    en.current.start(100, () => {
                        Y(!1);
                    }));
            },
            [ed, l, ec, ef],
        ),
        eC = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    ed(0.25, {
                        x: 0,
                        y: 0,
                    });
            },
            [ed],
        ),
        ev = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    ed(-0.25, {
                        x: 0,
                        y: 0,
                    });
            },
            [ed],
        ),
        eO = i.useCallback((e) => {
            e.preventDefault(),
                e.stopPropagation(),
                z(1),
                k({
                    x: 0,
                    y: 0,
                });
        }, []),
        ex = i.useCallback(() => {
            ep();
        }, [ep]),
        eE = i.useCallback(() => {
            G(!1), ef();
        }, [ef]),
        ej = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eS = i.useCallback(
            (e, t) => {
                if (null == el.current || null == ei.current) return;
                let n = el.current.getBoundingClientRect(),
                    r = ei.current.clientWidth,
                    i = ei.current.clientHeight,
                    l = e - n.left,
                    a = t - n.top,
                    o = l / n.width;
                k(eu((0.5 - o) * r * W, (0.5 - a / n.height) * i * W));
            },
            [eu, W],
        ),
        eP = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), G(!0), eS(e.clientX, e.clientY);
            },
            [eS],
        ),
        eI = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), H && eS(e.clientX, e.clientY);
            },
            [H, eS],
        ),
        eZ = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), G(!1);
        }, []),
        eT = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, u.PM)(
        ei,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!eo || null == t || null == n) return;
                let r = ea.current;
                if (null == r) {
                    ea.current = {
                        width: t,
                        height: n,
                    };
                    return;
                }
                let { width: i, height: l } = r;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - l)) ||
                    (ee(!0),
                    k((e) => {
                        let r = (i * (W - 1)) / 2,
                            a = (l * (W - 1)) / 2,
                            o = (t * (W - 1)) / 2,
                            s = (n * (W - 1)) / 2,
                            c = 0 !== r ? e.x / r : 0;
                        return eu(c * o, (0 !== a ? e.y / a : 0) * s);
                    }),
                    (ea.current = {
                        width: t,
                        height: n,
                    }),
                    er.current.start(100, () => {
                        ee(!1);
                    }));
            },
            [eu, eo, W],
        ),
        [eo, W],
    ),
        (0, d.zq)(() => {
            et.current.stop(), en.current.stop(), er.current.stop();
        }),
        i.useEffect(() => {
            null != x && (0, f.N)(x, l && eo ? W : 1);
        }, [l, eo, x, W]);
    let eN = i.useMemo(() => {
            let e = eu(L.x, L.y);
            return {
                "--custom-zoom-scale": W,
                "--custom-pan-x": "".concat(e.x, "px"),
                "--custom-pan-y": "".concat(e.y, "px"),
                "--custom-zoom-transition": Z || $ || q ? "none" : "transform 0.15s ease-out",
            };
        }, [eu, Z, $, q, L, W]),
        eA = i.useMemo(() => {
            let e = 120 * Math.min(K, 32 / 9);
            return {
                "--custom-zoom-minimap-width": "".concat(e, "px"),
                "--custom-zoom-minimap-height": "".concat(120, "px"),
            };
        }, [K]),
        ew = i.useMemo(() => {
            let e = null != ei.current ? ei.current.clientWidth : 1,
                t = null != ei.current ? ei.current.clientHeight : 1,
                n = 1 / W,
                r = 1 / W,
                i = 0.5 - L.x / (e * W),
                l = 0.5 - L.y / (t * W);
            return {
                "--custom-zoom-indicator-left": "".concat(100 * _(i - n / 2, 0, 1 - n), "%"),
                "--custom-zoom-indicator-top": "".concat(100 * _(l - r / 2, 0, 1 - r), "%"),
                "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
                "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
                "--custom-zoom-indicator-transition":
                    Z || H || q
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [Z, H, q, L, W]);
    return (0, r.jsx)("div", {
        ref: ei,
        className: a()(b.wrapper, j, {
            [b.zoomEnabled]: l && eo,
            [b.zoomDragging]: Z,
        }),
        onMouseDown: eh,
        onMouseMove: em,
        onMouseUp: eg,
        onMouseLeave: e_,
        onWheel: ey,
        children: (0, r.jsxs)(c.P3F, {
            onClick: eb,
            children: [
                null != x &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: a()(b.videoContainer, b.zoomed),
                                style: eN,
                                children: (0, r.jsx)(
                                    h.Z,
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, O)),
                                    (n = n =
                                        {
                                            onResize: es,
                                            wrapperClassName: void 0,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t),
                                ),
                            }),
                            l &&
                                (0, r.jsx)(c.P3F, {
                                    onClick: eT,
                                    onMouseEnter: ex,
                                    onMouseLeave: eE,
                                    children: (0, r.jsxs)("div", {
                                        ref: el,
                                        className: a()(b.minimap, { [b.fadeOut]: !J || !eo }),
                                        style: eA,
                                        onMouseDown: eP,
                                        onMouseMove: eI,
                                        onMouseUp: eZ,
                                        children: [
                                            (0, r.jsx)(S, {
                                                className: a()(b.minimapVideo, { [g.mirror]: P }),
                                                streamId: x,
                                                paused: I,
                                                reportContainerResized: !1,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: b.minimapIndicator,
                                                style: ew,
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                l &&
                    (0, r.jsxs)("div", {
                        className: a()(b.zoomControls, { [b.fadeOut]: !J }),
                        onMouseEnter: ex,
                        onMouseLeave: eE,
                        onClick: ej,
                        children: [
                            W > 1 &&
                                (0, r.jsxs)("div", {
                                    className: b.zoomLevelIndicator,
                                    children: [Math.round(100 * W), "%"],
                                }),
                            (0, r.jsx)(s.u, {
                                text: m.intl.string(m.t["9hMafy"]),
                                position: "top",
                                children: (0, r.jsx)(c.hU, {
                                    icon: c.OyE,
                                    onClick: eC,
                                    disabled: W >= v,
                                    variant: "secondary",
                                    size: "sm",
                                    "aria-label": m.intl.string(m.t["9hMafy"]),
                                }),
                            }),
                            (0, r.jsx)(s.u, {
                                text: m.intl.string(m.t.M6Cmwy),
                                position: "top",
                                children: (0, r.jsx)(c.hU, {
                                    icon: c.BlJ,
                                    onClick: ev,
                                    disabled: W <= 1,
                                    variant: "secondary",
                                    size: "sm",
                                    "aria-label": m.intl.string(m.t.M6Cmwy),
                                }),
                            }),
                            (0, r.jsx)(s.u, {
                                text: m.intl.string(m.t.t9GFrr),
                                position: "top",
                                children: (0, r.jsx)(c.hU, {
                                    icon: c.DuK,
                                    onClick: eO,
                                    disabled: 1 === W,
                                    variant: "secondary",
                                    size: "sm",
                                    "aria-label": m.intl.string(m.t.t9GFrr),
                                }),
                            }),
                        ],
                    }),
            ],
        }),
    });
});
