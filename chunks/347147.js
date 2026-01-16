n.d(t, { Z: () => Z }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    c = n(81239),
    s = n(846519),
    u = n(681715),
    d = n(481060),
    f = n(393238),
    p = n(493773),
    g = n(569545),
    b = n(687516),
    m = n(937995),
    h = n(158776),
    E = n(626135),
    v = n(823789),
    _ = n(352978),
    y = n(981631),
    O = n(388032),
    C = n(542133),
    S = n(116724);
function I(e) {
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
function N(e, t) {
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
let T = {
        x: 0,
        y: 0,
    },
    x = (0, o.debounce)((e, t, n) => {
        let r = null,
            l = null;
        if (null != n && (0, g.DB)(n)) {
            var i, a;
            let e = (0, g.my)(n),
                t = (0, b.L2)(e, h.Z);
            (r = null != (i = null == t ? void 0 : t.name) ? i : null),
                (l = null != (a = null == t ? void 0 : t.id) ? a : null);
        }
        E.default.track(y.rMx.VIDEO_STREAM_ZOOM_CHANGED, {
            zoom_level: e,
            method: t,
            share_application_name: r,
            share_application_id: l,
        });
    }, 2000);
function P(e, t, n) {
    return Math.min(Math.max(t, e), n);
}
let Z = l.memo(function (e) {
    var { enableZoom: t = !1, minZoom: n = 1, maxZoom: i = 5, controlsBottom: o = 8, idle: g = !1 } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["enableZoom", "minZoom", "maxZoom", "controlsBottom", "idle"]);
    let { streamId: h, streamKey: E, onResize: y, wrapperClassName: Z, videoComponent: j, mirror: w, paused: A } = b,
        { onActive: R, onPreventIdle: D, onAllowIdle: M } = l.useContext(m.nM),
        [k, L] = l.useState(!1),
        [U, F] = l.useState(null),
        [V, W] = l.useState(null),
        [B, G] = l.useState(0),
        [H, z] = l.useState(T),
        [K, Y] = l.useState(null),
        [q, Q] = l.useState(null),
        [X, J] = l.useState(!1),
        [$, ee] = l.useState(n),
        [et, en] = l.useState(!1),
        [er, el] = l.useState(!1),
        [ei, ea] = l.useState(16 / 9),
        [eo, ec] = l.useState(!1),
        [es, eu] = l.useState(!1),
        ed = l.useRef(new s.V7()),
        ef = l.useRef(new s.V7()),
        ep = l.useRef(new s.V7()),
        eg = l.useRef(new s.V7()),
        eb = l.useRef(null),
        em = l.useRef(null),
        eh = l.useRef(null),
        eE = (0, d.q_F)(
            {
                value: o,
                config: N(I({}, c.config.stiff), { clamp: !0 }),
            },
            "animate-always",
        ),
        ev = $ > n,
        e_ = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && ea(e.width / e.height), null == y || y(e);
            },
            [y],
        ),
        ey = l.useCallback((e) => {
            if (null == eb.current) return T;
            let t = eb.current.getBoundingClientRect();
            return {
                x: e.clientX - t.left - t.width / 2,
                y: e.clientY - t.top - t.height / 2,
            };
        }, []),
        eO = l.useCallback(
            (e, t) => {
                if (null == eb.current) return T;
                let n = null != t ? t : $,
                    r = eb.current.clientWidth,
                    l = eb.current.clientHeight,
                    i = (r * (n - 1)) / 2,
                    a = (l * (n - 1)) / 2;
                return {
                    x: P(e.x, -i, i),
                    y: P(e.y, -a, a),
                };
            },
            [$],
        ),
        eC = l.useCallback(
            (e, t, r) => {
                let l = P(e, n, i);
                if (null == eb.current || null == t || l === $) return;
                eu(!0);
                let a = l / $;
                z((e) =>
                    eO(
                        {
                            x: (e.x - t.x) * a + t.x,
                            y: (e.y - t.y) * a + t.y,
                        },
                        l,
                    ),
                ),
                    ee(l),
                    x(l, r, E),
                    eg.current.start(2000, () => {
                        eu(!1);
                    });
            },
            [eO, i, n, E, $],
        ),
        eS = l.useCallback(
            (e) => {
                if (!ev) return;
                e.preventDefault(), e.stopPropagation();
                let t = ey(e);
                L(!0), W(t), F(t), G(Date.now()), Q(t), Y(H);
            },
            [ey, ev, H],
        ),
        eI = l.useCallback(
            (e) => {
                if (((t || ev) && R(), !k || !ev || null == q || null == K)) return;
                e.preventDefault(), e.stopPropagation();
                let n = ey(e),
                    r = n.x - q.x,
                    l = n.y - q.y;
                z(
                    eO({
                        x: K.x + r,
                        y: K.y + l,
                    }),
                ),
                    F(n);
            },
            [eO, q, K, t, ey, k, ev, R],
        ),
        eN = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), L(!1), Q(null), Y(null);
        }, []),
        eT = l.useCallback(
            (e) => {
                if (ev && null != V && null != U) {
                    let { x: t, y: n } = V,
                        { x: r, y: l } = U;
                    (Math.sqrt((r - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - B >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [ev, V, B, U],
        ),
        ex = l.useCallback(() => {
            L(!1), Q(null), Y(null);
        }, []),
        eP = l.useCallback(
            (e) => {
                t &&
                    (en(!0),
                    eC($ - e.deltaY / 100, ey(e), "wheel"),
                    R(),
                    ed.current.start(100, () => {
                        en(!1);
                    }));
            },
            [t, eC, $, ey, R],
        ),
        eZ = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eC($ + 0.25, T, "button");
            },
            [eC, $],
        ),
        ej = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), eC($ - 0.25, T, "button");
            },
            [eC, $],
        ),
        ew = l.useCallback(
            (e) => {
                el(!0),
                    eC(e, T, "slider"),
                    R(),
                    ef.current.start(100, () => {
                        el(!1);
                    });
            },
            [eC, R],
        ),
        eA = l.useCallback(() => {
            D("interact");
        }, [D]),
        eR = l.useCallback(() => {
            J(!1), M("interact");
        }, [M]),
        eD = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []),
        eM = l.useCallback(
            (e) => {
                if (null == em.current || null == eb.current) return;
                let t = em.current.getBoundingClientRect(),
                    n = eb.current.clientWidth,
                    r = eb.current.clientHeight,
                    l = e.x - t.left,
                    i = e.y - t.top,
                    a = l / t.width;
                z(
                    eO({
                        x: (0.5 - a) * n * $,
                        y: (0.5 - i / t.height) * r * $,
                    }),
                );
            },
            [eO, $],
        ),
        ek = l.useCallback(
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
        eL = l.useCallback(
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
        eU = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation(), J(!1);
        }, []),
        eF = l.useCallback((e) => {
            e.preventDefault(), e.stopPropagation();
        }, []);
    (0, f.PM)(
        eb,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!ev || null == t || null == n) return;
                let r = eh.current;
                if (null == r) {
                    eh.current = {
                        width: t,
                        height: n,
                    };
                    return;
                }
                let { width: l, height: i } = r;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - i)) ||
                    (ec(!0),
                    z((e) => {
                        let r = (l * ($ - 1)) / 2,
                            a = (i * ($ - 1)) / 2,
                            o = (t * ($ - 1)) / 2,
                            c = (n * ($ - 1)) / 2,
                            s = 0 !== r ? e.x / r : 0;
                        return eO({
                            x: s * o,
                            y: (0 !== a ? e.y / a : 0) * c,
                        });
                    }),
                    (eh.current = {
                        width: t,
                        height: n,
                    }),
                    ep.current.start(100, () => {
                        ec(!1);
                    }));
            },
            [eO, ev, $],
        ),
        [ev, $],
    ),
        (0, p.zq)(() => {
            ed.current.stop(), ef.current.stop(), ep.current.stop(), eg.current.stop();
        }),
        l.useEffect(() => {
            null != h && (0, v.$)(h, void 0, t && ev ? $ : 1);
        }, [t, ev, h, $]);
    let eV = l.useMemo(() => {
            let e = eO(H);
            return {
                "--custom-zoom-scale": $,
                "--custom-pan-x": "".concat(e.x, "px"),
                "--custom-pan-y": "".concat(e.y, "px"),
                "--custom-zoom-transition": k || eo || et || er ? "none" : "transform 0.15s ease-out",
            };
        }, [eO, k, eo, et, er, H, $]),
        eW = l.useMemo(() => {
            let e = 120 * Math.min(ei, 32 / 9);
            return {
                "--custom-zoom-minimap-width": "".concat(e, "px"),
                "--custom-zoom-minimap-height": "".concat(120, "px"),
            };
        }, [ei]),
        eB = l.useMemo(() => {
            let e = null != eb.current ? eb.current.clientWidth : 1,
                t = null != eb.current ? eb.current.clientHeight : 1,
                n = 1 / $,
                r = 1 / $,
                l = 0.5 - H.x / (e * $),
                i = 0.5 - H.y / (t * $);
            return {
                "--custom-zoom-indicator-left": "".concat(100 * P(l - n / 2, 0, 1 - n), "%"),
                "--custom-zoom-indicator-top": "".concat(100 * P(i - r / 2, 0, 1 - r), "%"),
                "--custom-zoom-indicator-width": "".concat(100 * n, "%"),
                "--custom-zoom-indicator-height": "".concat(100 * r, "%"),
                "--custom-zoom-indicator-transition":
                    k || X || et || er
                        ? "none"
                        : "top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
            };
        }, [k, X, et, er, H, $]);
    return (0, r.jsxs)("div", {
        ref: eb,
        className: a()(S.wrapper, Z, {
            [S.zoomEnabled]: t && ev,
            [S.zoomDragging]: k,
        }),
        onMouseDown: eS,
        onMouseMove: eI,
        onMouseUp: eN,
        onMouseLeave: ex,
        onWheel: eP,
        children: [
            (0, r.jsx)(d.P3F, {
                onClick: eT,
                children:
                    null != h &&
                    (0, r.jsx)("div", {
                        className: a()(S.videoContainer, S.zoomed),
                        style: eV,
                        children: (0, r.jsx)(
                            _.Z,
                            N(I({}, b), {
                                onResize: e_,
                                wrapperClassName: void 0,
                            }),
                        ),
                    }),
            }),
            t &&
                null != h &&
                (0, r.jsx)(c.animated.div, {
                    className: a()(S.zoomControlsContainer, { [S.idle]: g }),
                    style: { bottom: eE.value },
                    children: (0, r.jsxs)("div", {
                        className: a()(S.zoomControls, { [S.zoomControlsWithChildren]: es || ev }),
                        onMouseEnter: eA,
                        onMouseLeave: eR,
                        onClick: eD,
                        children: [
                            (es || ev) &&
                                (0, r.jsx)(d.P3F, {
                                    onClick: eF,
                                    onMouseEnter: eA,
                                    onMouseLeave: eR,
                                    children: (0, r.jsxs)("div", {
                                        ref: em,
                                        className: S.minimap,
                                        style: eW,
                                        onMouseDown: ek,
                                        onMouseMove: eL,
                                        onMouseUp: eU,
                                        children: [
                                            (0, r.jsx)(j, {
                                                className: a()(S.minimapVideo, { [C.mirror]: w }),
                                                streamId: h,
                                                paused: A,
                                                reportContainerResized: !1,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: S.minimapIndicator,
                                                style: eB,
                                            }),
                                        ],
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: S.zoomControlsRow,
                                children: [
                                    (es || ev) &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(u.u, {
                                                    text: O.intl.string(O.t.M6Cmwy),
                                                    position: "top",
                                                    children: (0, r.jsx)(d.hU, {
                                                        icon: d.BlJ,
                                                        onClick: ej,
                                                        disabled: $ <= n,
                                                        variant: "overlay-secondary",
                                                        size: "sm",
                                                        "aria-label": O.intl.string(O.t.M6Cmwy),
                                                    }),
                                                }),
                                                (0, r.jsx)(d.iRW, {
                                                    minValue: n,
                                                    maxValue: i,
                                                    initialValue: $,
                                                    value: $,
                                                    asValueChanges: ew,
                                                    onValueRender: (e) => "".concat(Math.round(100 * e), "%"),
                                                    "aria-label": O.intl.string(O.t.grzPmr),
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)(u.u, {
                                        text: O.intl.string(O.t["9hMafy"]),
                                        position: "top",
                                        children: (0, r.jsx)(d.hU, {
                                            icon: d.OyE,
                                            onClick: eZ,
                                            disabled: $ >= i,
                                            variant: "overlay-secondary",
                                            size: "sm",
                                            "aria-label": O.intl.string(O.t["9hMafy"]),
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
