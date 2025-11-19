n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    c = n(790519),
    s = n(846519),
    u = n(681715),
    d = n(481060),
    f = n(393238),
    p = n(493773),
    m = n(569545),
    _ = n(687516),
    g = n(937995),
    b = n(158776),
    v = n(626135),
    E = n(823789),
    h = n(352978),
    y = n(981631),
    S = n(388032),
    O = n(412418),
    C = n(174260);
function w(e) {
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
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = {
        x: 0,
        y: 0,
    },
    j = (0, o.debounce)((e, t, n) => {
        let r = null,
            i = null;
        if (null != n && (0, m.DB)(n)) {
            var l, a;
            let e = (0, m.my)(n),
                t = (0, _.L2)(e, b.Z);
            (r = null != (l = null == t ? void 0 : t.name) ? l : null),
                (i = null != (a = null == t ? void 0 : t.id) ? a : null);
        }
        v.default.track(y.rMx.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: r,
            share_application_id: i,
        });
    }, 2000);
function x(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let Z = i.memo(function (e) {
    var { enableZoom: t = !1, minZoom: n = 1, maxZoom: l = 5, controlsBottom: o = 8, idle: m = !1 } = e,
        _ = (function (e, t) {
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
        })(e, ["enableZoom", "minZoom", "maxZoom", "controlsBottom", "idle"]);
    let { streamId: b, streamKey: v, onResize: y, wrapperClassName: Z, videoComponent: R, mirror: T, paused: A } = _,
        { onActive: N, onPreventIdle: D, onAllowIdle: M } = i.useContext(g.nM),
        [k, L] = i.useState(!1),
        [F, V] = i.useState(null),
        [U, z] = i.useState(null),
        [W, H] = i.useState(0),
        [B, q] = i.useState(P),
        [Y, K] = i.useState(null),
        [G, Q] = i.useState(null),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState(n),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(!1),
        [el, ea] = i.useState(16 / 9),
        [eo, ec] = i.useState(!1),
        [es, eu] = i.useState(!1),
        ed = i.useRef(new s.V7()),
        ef = i.useRef(new s.V7()),
        ep = i.useRef(new s.V7()),
        em = i.useRef(new s.V7()),
        e_ = i.useRef(null),
        eg = i.useRef(null),
        eb = i.useRef(null),
        ev = (0, d.q_F)(
            {
                value: o,
                config: I(w({}, c.config.stiff), { clamp: !0 }),
            },
            "animate-always",
        ),
        eE = $ > n,
        eh = i.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && ea(e.width / e.height), null == y || y(e);
            },
            [y],
        ),
        ey = i.useCallback((e) => {
            if (null == e_.current) return P;
            let t = e_.current.getBoundingClientRect();
            return {
                x: e.clientX - t.left - t.width / 2,
                y: e.clientY - t.top - t.height / 2,
            };
        }, []),
        eS = i.useCallback(
            (e, t) => {
                if (null == e_.current) return P;
                let n = null != t ? t : $,
                    r = e_.current.clientWidth,
                    i = e_.current.clientHeight,
                    l = (r * (n - 1)) / 2,
                    a = (i * (n - 1)) / 2;
                return {
                    x: x(e.x, -l, l),
                    y: x(e.y, -a, a),
                };
            },
            [$],
        ),
        eO = i.useCallback(
            (e, t, r) => {
                let i = x(e, n, l);
                if (null == e_.current || null == t || i === $) return;
                eu(!0);
                let a = i / $;
                q((e) =>
                    eS(
                        {
                            x: (e.x - t.x) * a + t.x,
                            y: (e.y - t.y) * a + t.y,
                        },
                        i,
                    ),
                ),
                    ee(i),
                    j(i, r, v),
                    em.current.start(2000, () => {
                        eu(!1);
                    });
            },
            [eS, l, n, v, $],
        ),
        eC = i.useCallback(
            (e) => {
                if (!eE) return;
                e.preventDefault(), e.stopPropagation();
                let t = ey(e);
                L(!0), z(t), V(t), H(Date.now()), Q(t), K(B);
            },
            [ey, eE, B],
        ),
        ew = i.useCallback(
            (e) => {
                if (((t || eE) && N(), !k || !eE || null == G || null == Y)) return;
                e.preventDefault(), e.stopPropagation();
                let n = ey(e),
                    r = n.x - G.x,
                    i = n.y - G.y;
                q(
                    eS({
                        x: Y.x + r,
                        y: Y.y + i,
                    }),
                ),
                    V(n);
            },
            [eS, G, Y, t, ey, k, eE, N],
        ),
        eI = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), L(!1), Q(null), K(null);
        }, []),
        eP = i.useCallback(
            (e) => {
                if (eE && null != U && null != F) {
                    let { x: t, y: n } = U,
                        { x: r, y: i } = F;
                    (Math.sqrt((r - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - W >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [eE, U, W, F],
        ),
        ej = i.useCallback(() => {
            L(!1), Q(null), K(null);
        }, []),
        ex = i.useCallback(
            (e) => {
                t &&
                    (en(!0),
                    eO($ - e.deltaY / 100, ey(e), "wheel"),
                    N(),
                    ed.current.start(100, () => {
                        en(!1);
                    }));
            },
            [t, eO, $, ey, N],
        ),
        eZ = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ + 0.25, P, "button");
            },
            [eO, $],
        ),
        eR = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eO($ - 0.25, P, "button");
            },
            [eO, $],
        ),
        eT = i.useCallback(
            (e) => {
                ei(!0),
                    eO(e, P, "slider"),
                    N(),
                    ef.current.start(100, () => {
                        ei(!1);
                    });
            },
            [eO, N],
        ),
        eA = i.useCallback(() => {
            D("interact");
        }, [D]),
        eN = i.useCallback(() => {
            J(!1), M("interact");
        }, [M]),
        eD = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eM = i.useCallback(
            (e) => {
                if (null == eg.current || null == e_.current) return;
                let t = eg.current.getBoundingClientRect(),
                    n = e_.current.clientWidth,
                    r = e_.current.clientHeight,
                    i = e.x - t.left,
                    l = e.y - t.top,
                    a = i / t.width;
                q(
                    eS({
                        x: (0.5 - a) * n * $,
                        y: (0.5 - l / t.height) * r * $,
                    }),
                );
            },
            [eS, $],
        ),
        ek = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    J(!0),
                    eM({
                        x: e.clientX,
                        y: e.clientY,
                    });
            },
            [eM],
        ),
        eL = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    X &&
                        eM({
                            x: e.clientX,
                            y: e.clientY,
                        });
            },
            [X, eM],
        ),
        eF = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), J(!1);
        }, []),
        eV = i.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, f.PM)(
        e_,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!eE || null == t || null == n) return;
                let r = eb.current;
                if (null == r) {
                    eb.current = {
                        width: t,
                        height: n,
                    };
                    return;
                }
                let { width: i, height: l } = r;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - l)) ||
                    (ec(!0),
                    q((e) => {
                        let r = (i * ($ - 1)) / 2,
                            a = (l * ($ - 1)) / 2,
                            o = (t * ($ - 1)) / 2,
                            c = (n * ($ - 1)) / 2,
                            s = 0 !== r ? e.x / r : 0;
                        return eS({
                            x: s * o,
                            y: (0 !== a ? e.y / a : 0) * c,
                        });
                    }),
                    (eb.current = {
                        width: t,
                        height: n,
                    }),
                    ep.current.start(100, () => {
                        ec(!1);
                    }));
            },
            [eS, eE, $],
        ),
        [eE, $],
    ),
        (0, p.zq)(() => {
            ed.current.stop(), ef.current.stop(), ep.current.stop(), em.current.stop();
        }),
        i.useEffect(() => {
            null != b && (0, E.N)(b, t && eE ? $ : 1);
        }, [t, eE, b, $]);
    let eU = i.useMemo(() => {
            let e = eS(B);
            return {
                "--custom-zoom-scale": $,
                "--custom-pan-x": "".concat(e.x, "px"),
                "--custom-pan-y": "".concat(e.y, "px"),
                "--custom-zoom-transition": k || eo || et || er ? "none" : "transform 0.15s ease-out",
            };
        }, [eS, k, eo, et, er, B, $]),
        ez = i.useMemo(() => {
            let e = 120 * Math.min(el, 32 / 9);
            return {
                "--custom-zoom-minimap-width": "".concat(e, "px"),
                "--custom-zoom-minimap-height": "".concat(120, "px"),
            };
        }, [el]),
        eW = i.useMemo(() => {
            let e = null != e_.current ? e_.current.clientWidth : 1,
                t = null != e_.current ? e_.current.clientHeight : 1,
                n = 1 / $,
                r = 1 / $,
                i = 0.5 - B.x / (e * $),
                l = 0.5 - B.y / (t * $);
            return {
                "--custom-zoom-indicator-left": "".concat(100 * x(i - n / 2, 0, 1 - n), "%"),
                "--custom-zoom-indicator-top": "".concat(100 * x(l - r / 2, 0, 1 - r), "%"),
                "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
                "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
                "--custom-zoom-indicator-transition":
                    k || X || et || er
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [k, X, et, er, B, $]);
    return (0, r.jsxs)("div", {
        ref: e_,
        className: a()(C.wrapper, Z, {
            [C.zoomEnabled]: t && eE,
            [C.zoomDragging]: k,
        }),
        onMouseDown: eC,
        onMouseMove: ew,
        onMouseUp: eI,
        onMouseLeave: ej,
        onWheel: ex,
        children: [
            (0, r.jsx)(d.P3F, {
                onClick: eP,
                children:
                    null != b &&
                    (0, r.jsx)("div", {
                        className: a()(C.videoContainer, C.zoomed),
                        style: eU,
                        children: (0, r.jsx)(
                            h.Z,
                            I(w({}, _), {
                                onResize: eh,
                                wrapperClassName: void 0,
                            }),
                        ),
                    }),
            }),
            t &&
                null != b &&
                (0, r.jsx)(c.animated.div, {
                    className: a()(C.zoomControlsContainer, { [C.idle]: m }),
                    style: { bottom: ev.value },
                    children: (0, r.jsxs)("div", {
                        className: C.zoomControls,
                        onMouseEnter: eA,
                        onMouseLeave: eN,
                        onClick: eD,
                        children: [
                            (es || eE) &&
                                (0, r.jsx)(d.P3F, {
                                    onClick: eV,
                                    onMouseEnter: eA,
                                    onMouseLeave: eN,
                                    children: (0, r.jsxs)("div", {
                                        ref: eg,
                                        className: C.minimap,
                                        style: ez,
                                        onMouseDown: ek,
                                        onMouseMove: eL,
                                        onMouseUp: eF,
                                        children: [
                                            (0, r.jsx)(R, {
                                                className: a()(C.minimapVideo, { [O.mirror]: T }),
                                                streamId: b,
                                                paused: A,
                                                reportContainerResized: !1,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: C.minimapIndicator,
                                                style: eW,
                                            }),
                                        ],
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: C.zoomControlsRow,
                                children: [
                                    (es || eE) &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.u, {
                                                    text: S.intl.string(S.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, r.jsx)(d.hU, {
                                                        icon: d.BlJ,
                                                        onClick: eR,
                                                        disabled: $ <= n,
                                                        variant: "secondary",
                                                        size: "sm",
                                                        "aria-label": S.intl.string(S.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, r.jsx)(d.iRW, {
                                                    minValue: n,
                                                    maxValue: l,
                                                    initialValue: $,
                                                    value: $,
                                                    asValueChanges: eT,
                                                    onValueRender: (e) => "".concat(Math.round(100 * e), "%"),
                                                    "aria-label": S.intl.string(S.t.grzPmr),
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)(u.u, {
                                        text: S.intl.string(S.t["9hMafy"]),
                                        position: "top",
                                        children: (0, r.jsx)(d.hU, {
                                            icon: d.OyE,
                                            onClick: eZ,
                                            disabled: $ >= l,
                                            variant: "secondary",
                                            size: "sm",
                                            "aria-label": S.intl.string(S.t["9hMafy"]),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
});
