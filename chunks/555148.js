n.d(t, { D: () => en, A: () => ei });
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
    _ = n(451988),
    b = n(765671),
    N = n(461782),
    y = n(426179),
    L = n(259264),
    T = n(40056),
    D = n(109294);
function R(e) {
    return (1 & e.buttons) == 1;
}
let k = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: a } = t,
        { onActive: o } = l.useContext(N.k3),
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
        } = l.useContext(T.e9),
        [S, k] = l.useState(null),
        [M, w] = l.useState(null),
        [O, G] = l.useState(0),
        [P, V] = l.useState(null),
        [H, F] = l.useState(null),
        [U, W] = l.useState(!1),
        z = l.useRef(new _.Ep()),
        $ = l.useRef(new _.Ep()),
        B = l.useRef(null),
        Z = h > c,
        Y = l.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e));
            },
            [s, E],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == C.current) return T.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        K = l.useCallback(
            (e) => {
                if (!Z || !R(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e);
                (m(!0), w(t), k(t), G(Date.now()), F(t), V(p));
            },
            [Q, Z, p, m],
        ),
        X = l.useCallback(
            (e) => {
                if (((u || Z) && o(), !d || !Z || null == H || null == P)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = Q(e),
                    n = t.x - H.x,
                    i = t.y - H.y;
                (f(j({ x: P.x + n, y: P.y + i })), k(t));
            },
            [j, H, P, u, Q, d, Z, o, f],
        ),
        q = l.useCallback(
            (e) => {
                !d || R(e) || (e.preventDefault(), e.stopPropagation(), m(!1), F(null), V(null));
            },
            [d, m],
        ),
        J = l.useCallback(
            (e) => {
                if (Z && null != M && null != S) {
                    let { x: t, y: n } = M,
                        { x: i, y: l } = S;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - O >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Z, M, O, S],
        ),
        ee = l.useCallback(() => {
            (m(!1), F(null), V(null));
        }, [m]),
        et = l.useCallback(
            (e) => {
                u &&
                    (A(!0),
                    I(h - e.deltaY / 100, Q(e), "wheel"),
                    o(),
                    z.current.start(100, () => {
                        A(!1);
                    }));
            },
            [u, I, h, Q, o, A],
        );
    ((0, b.i4)(
        C,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Z || null == t || null == n) return;
                let i = B.current;
                if (null == i) {
                    B.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (W(!0),
                    f((e) => {
                        let i = (l * (h - 1)) / 2,
                            r = (s * (h - 1)) / 2,
                            a = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return j({ x: (0 !== i ? e.x / i : 0) * a, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        W(!1);
                    }));
            },
            [j, Z, h, f],
        ),
        [Z, h],
    ),
        (0, g.l0)(() => {
            (z.current.stop(), $.current.stop());
        }),
        l.useEffect(() => {
            null != n && (0, y.c)(n, void 0, u && Z ? h : 1);
        }, [u, Z, n, h]));
    let en = l.useMemo(() => {
        let e = j(p);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || x || v ? "none" : "transform 0.15s ease-out",
        };
    }, [j, d, U, x, v, p, h]);
    return (0, i.jsx)("div", {
        ref: C,
        className: r()(D.iE, a, { [D.rc]: u && Z, [D.d$]: d }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(D.j, D.L2),
                style: en,
                children: (0, i.jsx)(L.A, { ...t, onResize: Y, wrapperClassName: void 0 }),
            }),
    });
});
var M = n(964404),
    w = n(919706),
    O = n(616356),
    G = n(46653),
    P = n(734057),
    V = n(754712),
    H = n(531685),
    F = n(200749),
    U = n(566331),
    W = n(768088),
    z = n(256195),
    $ = n(834730),
    B = n(1215),
    Z = n(792996),
    Y = n(584841);
function Q(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.A, { className: r()(Y.HL, Y.gH), stream: t, noText: !0 }),
            !l &&
                (0, i.jsxs)("div", {
                    className: r()(Y.Qs, Y.JK, { [Y.EX]: n }),
                    children: [
                        (0, i.jsx)($.E, {
                            className: Y.gS,
                            color: "text-overlay-light",
                            variant: n ? "body-sm/semibold" : "body-md/semibold",
                            children: s ? Z.intl.string(Z.t.UeEwjy) : Z.intl.string(Z.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(u.m, {
                            asContainer: !0,
                            text: s ? Z.intl.string(Z.t["ro/HN8"]) : Z.intl.string(Z.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(B.ScreenSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: Y.uI,
                                    colorClass: Y.g$,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var K = n(275731),
    X = n(345812),
    q = n(652215),
    J = n(806931),
    ee = n(731854);
let et = new A.A("StreamTile");
function en(e) {
    let { participant: t, selected: n, focused: l, idle: s, width: r, premiumIndicator: o } = e,
        u = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, X.VE)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(K.A, { participant: t }),
            l || null == u || u.state === q.XYD.ENDED || u.state === q.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: x.Ay.Sizes.SMALL,
                      className: Y.Ok,
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
            fit: x,
            popoutType: A,
            width: S,
            wrapperClassName: _,
            paused: b = !1,
        } = e,
        N = V.Ay.getVideoComponent(),
        y = (0, a.bG)([G.default], () => G.default.getId()),
        L = (0, E.A)(),
        { stream: T, user: D, streamId: R } = t,
        $ = (0, a.bG)([P.A], () => P.A.getChannel(T.channelId)),
        B = (0, a.bG)([O.A], () => O.A.getActiveStreamForUser(D.id, T.guildId), [D.id, T.guildId]),
        K = (0, a.bG)([O.A], () => O.A.getAllActiveStreams().length > 0),
        X = (0, a.bG)([H.A], () => H.A.isFocused()),
        en = (0, a.bG)([M.Ay], () => M.Ay.pauseSelfStreamPreviewWhenUnfocused),
        ei = B?.ownerId === y,
        el = ei && en && !X && A === h.N.NO_POPOUT,
        es = null != B ? (0, I.A)(B, D, D.id === y, el) : null,
        er = S < 195;
    (0, g.Ay)(() => {
        !K &&
            $?.isGuildStageVoice() &&
            !ei &&
            !O.A.isStreamMarkedFull((0, C._z)(T)) &&
            ((0, p.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let ea = (0, v.u)(ee.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            et.info(
                `Stream Tile State - activeStream: ${null != B} | selected: ${n} | Video: ${null != N} | MediaEngine: ${V.Ay.supports(ee.O5.VIDEO)}`,
            );
        }, [N, B, n]),
        L)
    )
        return (0, i.jsx)(Q, { stream: t.stream, isSmall: er, selected: n, isSelfStream: D.id === y });
    if (B?.state === q.XYD.ENDED) return (0, i.jsx)(U.A, { selected: n, stream: B, width: S });
    if (null != ea || B?.state === q.XYD.FAILED)
        return (0, i.jsx)(W.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: S });
    if (t.type === J.lp.HIDDEN_STREAM) return (0, i.jsx)(z.A, { selected: n, participant: t, width: S });
    if (null != B && !n && null != N && V.Ay.supports(ee.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    k,
                    {
                        onResize: s,
                        wrapperClassName: r()(A !== h.N.CALL_TILE ? Y.tN : void 0, _),
                        className: Y.Qs,
                        streamId: R,
                        videoComponent: N,
                        fit: x,
                        paused: b || B?.state === q.XYD.PAUSED || el,
                        videoSpinnerContext: ei ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: D.id,
                        streamKey: t.id,
                    },
                    R,
                ),
                null != es ? (0, i.jsx)(w.A, { size: (0, F.J)(S), ...es }) : null,
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(Y.Qs, Y.Rh, { [Y.EX]: er }),
            children: [
                (0, i.jsx)(j.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(Y.HL, { [Y.gH]: null == B }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: Y.lO,
                                  children: (0, i.jsx)(o.$, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? Z.intl.string(Z.t.I6JG46) : Z.intl.string(Z.t["7Xq/nV"]),
                                  }),
                              }),
                              K
                                  ? (0, i.jsx)("div", {
                                        className: r()(Y.lO, Y.EU),
                                        children: (0, i.jsx)(u.m, {
                                            text: Z.intl.string(Z.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: er ? "sm" : "md",
                                                icon: d.EyePlusIcon,
                                                "aria-label": Z.intl.string(Z.t.wCrzut),
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
