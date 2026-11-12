n.d(t, { D: () => el, A: () => ei });
var l = n(477900),
    i = n(582128),
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
    A = n(402216),
    x = n(626584),
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
    R = n(426179),
    T = n(259264),
    L = n(40056),
    D = n(109294);
function k(e) {
    return (1 & e.buttons) == 1;
}
let M = i.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = i.useContext(y.k3),
        {
            enabled: u,
            minZoom: c,
            isDragging: d,
            setIsDragging: m,
            panOffset: p,
            setPanOffset: f,
            zoomLevel: h,
            isWheeling: A,
            setIsWheeling: x,
            isSlidering: v,
            setVideoAspectRatio: E,
            wrapperRef: C,
            doZoom: I,
            clampPanOffset: j,
        } = i.useContext(L.e9),
        [S, M] = i.useState(null),
        [w, O] = i.useState(null),
        [G, P] = i.useState(0),
        [V, F] = i.useState(null),
        [H, U] = i.useState(null),
        [z, W] = i.useState(!1),
        $ = i.useRef(new b.Ep()),
        B = i.useRef(new b.Ep()),
        Z = i.useRef(0),
        Y = i.useRef(new b.Ep()),
        Q = i.useRef(null),
        K = h > c,
        X = i.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e));
            },
            [s, E],
        ),
        q = i.useCallback(
            (e) => {
                if (null == C.current) return L.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        J = i.useCallback(
            (e) => {
                if (!K || !k(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e);
                (m(!0), O(t), M(t), P(Date.now()), U(t), F(p));
            },
            [q, K, p, m],
        ),
        ee = i.useCallback(
            (e) => {
                if (((u || K) && o(), !d || !K || null == H || null == V)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e),
                    n = t.x - H.x,
                    l = t.y - H.y;
                (f(j({ x: V.x + n, y: V.y + l })), M(t));
            },
            [j, H, V, u, q, d, K, o, f],
        ),
        et = i.useCallback(
            (e) => {
                !d || k(e) || (e.preventDefault(), e.stopPropagation(), m(!1), U(null), F(null));
            },
            [d, m],
        ),
        en = i.useCallback(
            (e) => {
                if (K && null != w && null != S) {
                    let { x: t, y: n } = w,
                        { x: l, y: i } = S;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - G >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [K, w, G, S],
        ),
        el = i.useCallback(() => {
            (m(!1), U(null), F(null));
        }, [m]),
        ei = i.useCallback(
            (e) => {
                u &&
                    (x(!0),
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
                        x(!1);
                    }));
            },
            [u, I, h, q, o, x],
        );
    ((0, N.i4)(
        C,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!K || null == t || null == n) return;
                let l = Q.current;
                if (null == l) {
                    Q.current = { width: t, height: n };
                    return;
                }
                let { width: i, height: s } = l;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - s)) ||
                    (W(!0),
                    f((e) => {
                        let l = (i * (h - 1)) / 2,
                            r = (s * (h - 1)) / 2,
                            a = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return j({ x: (0 !== l ? e.x / l : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (Q.current = { width: t, height: n }),
                    Y.current.start(100, () => {
                        W(!1);
                    }));
            },
            [j, K, h, f],
        ),
        [K, h],
    ),
        (0, g.l0)(() => {
            ($.current.stop(), B.current.stop(), Y.current.stop());
        }),
        i.useEffect(() => {
            null != n && (0, R.c)(n, void 0, u && K ? h : 1);
        }, [u, K, n, h]));
    let es = i.useMemo(() => {
        let e = j(p);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || z || A || v ? "none" : "transform 0.15s ease-out",
        };
    }, [j, d, z, A, v, p, h]);
    return (0, l.jsx)("div", {
        ref: C,
        className: r()(D.iE, a, { [D.rc]: u && K, [D.d$]: d }),
        onMouseDown: J,
        onMouseMove: ee,
        onMouseUp: et,
        onMouseLeave: el,
        onWheel: ei,
        onClick: en,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: r()(D.j, D.L2),
                style: es,
                children: (0, l.jsx)(T.A, { ...t, onResize: X, wrapperClassName: void 0 }),
            }),
    });
});
var w = n(964404),
    O = n(919706),
    G = n(616356),
    P = n(46653),
    V = n(734057),
    F = n(754712),
    H = n(531685),
    U = n(200749),
    z = n(566331),
    W = n(768088),
    $ = n(256195),
    B = n(834730),
    Z = n(1215),
    Y = n(792996),
    Q = n(584841);
function K(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(j.A, { className: r()(Q.HL, Q.gH), stream: t, noText: !0 }),
            !i &&
                (0, l.jsxs)("div", {
                    className: r()(Q.Qs, Q.JK, { [Q.EX]: n }),
                    children: [
                        (0, l.jsx)(B.E, {
                            className: Q.gS,
                            color: "text-overlay-light",
                            variant: n ? "body-sm/semibold" : "body-md/semibold",
                            children: s ? Y.intl.string(Y.t.UeEwjy) : Y.intl.string(Y.t["1i3tSY"]),
                        }),
                        (0, l.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Y.intl.string(Y.t["ro/HN8"]) : Y.intl.string(Y.t.UPf6ZM),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(Z.ScreenSlashIcon, {
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
var X = n(275731),
    q = n(345812),
    J = n(652215),
    ee = n(806931),
    et = n(731854);
let en = new x.A("StreamTile");
function el(e) {
    let { participant: t, selected: n, focused: i, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([G.A], () => G.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, q.VE)(r);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(X.A, { participant: t }),
            i || null == u || u.state === J.XYD.ENDED || u.state === J.XYD.FAILED
                ? null
                : (0, l.jsx)(S.A, {
                      size: A.Ay.Sizes.SMALL,
                      className: Q.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function ei(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: s,
            fit: A,
            popoutType: x,
            width: S,
            wrapperClassName: _,
            paused: b = !1,
        } = e,
        N = F.Ay.getVideoComponent(),
        y = (0, a.bG)([P.default], () => P.default.getId()),
        R = (0, E.A)(),
        { stream: T, user: L, streamId: D } = t,
        k = (0, a.bG)([V.A], () => V.A.getChannel(T.channelId)),
        B = (0, a.bG)([G.A], () => G.A.getActiveStreamForUser(L.id, T.guildId), [L.id, T.guildId]),
        Z = (0, a.bG)([G.A], () => G.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([H.A], () => H.A.isFocused()),
        q = (0, a.bG)([w.Ay], () => w.Ay.pauseSelfStreamPreviewWhenUnfocused),
        el = B?.ownerId === y,
        ei = el && q && !X && x === h.N.NO_POPOUT,
        es = null != B ? (0, I.A)(B, L, L.id === y, ei) : null,
        er = S < 195;
    (0, g.Ay)(() => {
        !Z &&
            k?.isGuildStageVoice() &&
            !el &&
            !G.A.isStreamMarkedFull((0, C._z)(T)) &&
            ((0, p.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let ea = (0, v.u)(et.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            en.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != N} | MediaEngine: ${F.Ay.supports(et.O5.VIDEO)}`,
            );
        }, [N, B, n]),
        R)
    )
        return (0, l.jsx)(K, { stream: t.stream, isSmall: er, selected: n, isSelfStream: L.id === y });
    if (B?.state === J.XYD.ENDED) return (0, l.jsx)(z.A, { selected: n, stream: B, width: S });
    if (null != ea || B?.state === J.XYD.FAILED)
        return (0, l.jsx)(W.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === ee.lp.HIDDEN_STREAM) return (0, l.jsx)($.A, { selected: n, participant: t, width: S });
    if (null != B && !n && null != N && F.Ay.supports(et.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    M,
                    {
                        onResize: s,
                        wrapperClassName: r()(x !== h.N.CALL_TILE ? Q.tN : void 0, _),
                        className: Q.Qs,
                        streamId: D,
                        videoComponent: N,
                        fit: A,
                        paused: b || B?.state === J.XYD.PAUSED || ei,
                        videoSpinnerContext: el ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: L.id,
                        streamKey: t.id,
                    },
                    D,
                ),
                null != es ? (0, l.jsx)(O.A, { size: (0, U.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: r()(Q.Qs, Q.Rh, { [Q.EX]: er }),
            children: [
                (0, l.jsx)(j.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Q.HL, { [Q.gH]: null == B }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: Q.lO,
                                  children: (0, l.jsx)(o.$, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? Y.intl.string(Y.t.I6JG46) : Y.intl.string(Y.t["7Xq/nV"]),
                                  }),
                              }),
                              Z
                                  ? (0, l.jsx)("div", {
                                        className: r()(Q.lO, Q.EU),
                                        children: (0, l.jsx)(u.m, {
                                            text: Y.intl.string(Y.t.wCrzut),
                                            children: (0, l.jsx)(c.K, {
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
