n.d(t, { D: () => ei, A: () => el });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(855986),
    o = n(821609),
    u = n(866665),
    c = n(408278),
    d = n(622631),
    m = n(367513),
    p = n(401843),
    g = n(964486),
    f = n(684339),
    h = n(164617),
    x = n(402216),
    A = n(626584),
    v = n(525505),
    E = n(753727),
    C = n(652896),
    I = n(638480),
    j = n(607407),
    S = n(872363),
    _ = n(435558),
    b = n(451988),
    N = n(765671),
    y = n(461782),
    L = n(426179),
    T = n(259264),
    D = n(40056),
    R = n(109294);
function k(e) {
    return (1 & e.buttons) == 1;
}
let M = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = l.useContext(y.k3),
        {
            enabled: u,
            minZoom: c,
            isDragging: d,
            setIsDragging: m,
            panOffset: p,
            setPanOffset: f,
            zoomLevel: h,
            isWheeling: x,
            setIsWheeling: A,
            isSlidering: v,
            setVideoAspectRatio: E,
            wrapperRef: C,
            doZoom: I,
            clampPanOffset: j,
        } = l.useContext(D.e9),
        [S, M] = l.useState(null),
        [w, O] = l.useState(null),
        [G, P] = l.useState(0),
        [V, H] = l.useState(null),
        [F, U] = l.useState(null),
        [W, z] = l.useState(!1),
        $ = l.useRef(new b.Ep()),
        B = l.useRef(new b.Ep()),
        Z = l.useRef(0),
        Y = l.useRef(new b.Ep()),
        Q = l.useRef(null),
        X = h > c,
        K = l.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e));
            },
            [s, E],
        ),
        q = l.useCallback(
            (e) => {
                if (null == C.current) return D.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        J = l.useCallback(
            (e) => {
                if (!X || !k(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e);
                (m(!0), O(t), M(t), P(Date.now()), U(t), H(p));
            },
            [q, X, p, m],
        ),
        ee = l.useCallback(
            (e) => {
                if (((u || X) && o(), !d || !X || null == F || null == V)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e),
                    n = t.x - F.x,
                    i = t.y - F.y;
                (f(j({ x: V.x + n, y: V.y + i })), M(t));
            },
            [j, F, V, u, q, d, X, o, f],
        ),
        et = l.useCallback(
            (e) => {
                !d || k(e) || (e.preventDefault(), e.stopPropagation(), m(!1), U(null), H(null));
            },
            [d, m],
        ),
        en = l.useCallback(
            (e) => {
                if (X && null != w && null != S) {
                    let { x: t, y: n } = w,
                        { x: i, y: l } = S;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - G >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [X, w, G, S],
        ),
        ei = l.useCallback(() => {
            (m(!1), U(null), H(null));
        }, [m]),
        el = l.useCallback(
            (e) => {
                u &&
                    (A(!0),
                    (Z.current -= e.deltaY * (e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? 1 : 100)),
                    B.current.start(
                        40,
                        () => {
                            (I(h * 1.1 ** (0, _.clamp)(Z.current / 100, -1, 1), q(e), "wheel"), (Z.current = 0));
                        },
                        !1,
                    ),
                    o(),
                    $.current.start(100, () => {
                        A(!1);
                    }));
            },
            [u, I, h, q, o, A],
        );
    ((0, N.i4)(
        C,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!X || null == t || null == n) return;
                let i = Q.current;
                if (null == i) {
                    Q.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let i = (l * (h - 1)) / 2,
                            r = (s * (h - 1)) / 2,
                            a = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return j({ x: (0 !== i ? e.x / i : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (Q.current = { width: t, height: n }),
                    Y.current.start(100, () => {
                        z(!1);
                    }));
            },
            [j, X, h, f],
        ),
        [X, h],
    ),
        (0, g.l0)(() => {
            ($.current.stop(), B.current.stop(), Y.current.stop());
        }),
        l.useEffect(() => {
            null != n && (0, L.c)(n, void 0, u && X ? h : 1);
        }, [u, X, n, h]));
    let es = l.useMemo(() => {
        let e = j(p);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || W || x || v ? "none" : "transform 0.15s ease-out",
        };
    }, [j, d, W, x, v, p, h]);
    return (0, i.jsx)("div", {
        ref: C,
        className: r()(R.iE, a, { [R.rc]: u && X, [R.d$]: d }),
        onMouseDown: J,
        onMouseMove: ee,
        onMouseUp: et,
        onMouseLeave: ei,
        onWheel: el,
        onClick: en,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(R.j, R.L2),
                style: es,
                children: (0, i.jsx)(T.A, { ...t, onResize: K, wrapperClassName: void 0 }),
            }),
    });
});
var w = n(964404),
    O = n(919706),
    G = n(616356),
    P = n(46653),
    V = n(734057),
    H = n(754712),
    F = n(531685),
    U = n(200749),
    W = n(566331),
    z = n(768088),
    $ = n(256195),
    B = n(834730),
    Z = n(1215),
    Y = n(792996),
    Q = n(584841);
function X(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.A, { className: r()(Q.HL, Q.gH), stream: t, noText: !0 }),
            !l &&
                (0, i.jsxs)("div", {
                    className: r()(Q.Qs, Q.JK, { [Q.EX]: n }),
                    children: [
                        (0, i.jsx)(B.E, {
                            className: Q.gS,
                            color: "text-overlay-light",
                            variant: n ? "body-sm/semibold" : "body-md/semibold",
                            children: s ? Y.intl.string(Y.t.UeEwjy) : Y.intl.string(Y.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Y.intl.string(Y.t["ro/HN8"]) : Y.intl.string(Y.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(Z.ScreenSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: Q.uI,
                                    colorClass: Q.g$,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var K = n(275731),
    q = n(345812),
    J = n(652215),
    ee = n(806931),
    et = n(731854);
let en = new A.A("StreamTile");
function ei(e) {
    let { participant: t, selected: n, focused: l, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([G.A], () => G.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, q.VE)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(K.A, { participant: t }),
            l || null == u || u.state === J.XYD.ENDED || u.state === J.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: x.Ay.Sizes.SMALL,
                      className: Q.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function el(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: s,
            fit: x,
            popoutType: A,
            width: S,
            wrapperClassName: _,
            paused: b = !1,
        } = e,
        N = H.Ay.getVideoComponent(),
        y = (0, a.bG)([P.default], () => P.default.getId()),
        L = (0, E.A)(),
        { stream: T, user: D, streamId: R } = t,
        k = (0, a.bG)([V.A], () => V.A.getChannel(T.channelId)),
        B = (0, a.bG)([G.A], () => G.A.getActiveStreamForUser(D.id, T.guildId), [D.id, T.guildId]),
        Z = (0, a.bG)([G.A], () => G.A.getAllActiveStreams().length > 0),
        K = (0, a.bG)([F.A], () => F.A.isFocused()),
        q = (0, a.bG)([w.Ay], () => w.Ay.pauseSelfStreamPreviewWhenUnfocused),
        ei = B?.ownerId === y,
        el = ei && q && !K && A === h.N.NO_POPOUT,
        es = null != B ? (0, I.A)(B, D, D.id === y, el) : null,
        er = S < 195;
    (0, g.Ay)(() => {
        !Z &&
            k?.isGuildStageVoice() &&
            !ei &&
            !G.A.isStreamMarkedFull((0, C._z)(T)) &&
            ((0, p.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let ea = (0, v.u)(et.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            en.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != N} | MediaEngine: ${H.Ay.supports(et.O5.VIDEO)}`,
            );
        }, [N, B, n]),
        L)
    )
        return (0, i.jsx)(X, { stream: t.stream, isSmall: er, selected: n, isSelfStream: D.id === y });
    if (B?.state === J.XYD.ENDED) return (0, i.jsx)(W.A, { selected: n, stream: B, width: S });
    if (null != ea || B?.state === J.XYD.FAILED)
        return (0, i.jsx)(z.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === ee.lp.HIDDEN_STREAM) return (0, i.jsx)($.A, { selected: n, participant: t, width: S });
    if (null != B && !n && null != N && H.Ay.supports(et.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    M,
                    {
                        onResize: s,
                        wrapperClassName: r()(A !== h.N.CALL_TILE ? Q.tN : void 0, _),
                        className: Q.Qs,
                        streamId: R,
                        videoComponent: N,
                        fit: x,
                        paused: b || B?.state === J.XYD.PAUSED || el,
                        videoSpinnerContext: ei ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: D.id,
                        streamKey: t.id,
                    },
                    R,
                ),
                null != es ? (0, i.jsx)(O.A, { size: (0, U.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(Q.Qs, Q.Rh, { [Q.EX]: er }),
            children: [
                (0, i.jsx)(j.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Q.HL, { [Q.gH]: null == B }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: Q.lO,
                                  children: (0, i.jsx)(o.$, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t["7Xq/nV"]),
                                  }),
                              }),
                              Z
                                  ? (0, i.jsx)("div", {
                                        className: r()(Q.lO, Q.EU),
                                        children: (0, i.jsx)(u.m, {
                                            text: Y.intl.string(Y.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: er ? "sm" : "md",
                                                icon: d.EyePlusIcon,
                                                "aria-label": Y.intl.string(Y.t.wCrzut),
                                                onClick: (e) => {
                                                    (e.stopPropagation(), (0, p.A9)(t.stream, { forceMultiple: !0 }));
                                                },
                                            }),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
            ],
        });
}
