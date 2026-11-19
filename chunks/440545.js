n.d(t, { D: () => ea, A: () => eo });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
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
    j = n(638480),
    S = n(607407),
    I = n(872363),
    b = n(293651),
    y = n(310685),
    _ = n(964404),
    N = n(919706),
    w = n(616356),
    k = n(46653),
    R = n(734057),
    L = n(988468),
    T = n(531685),
    D = n(200749),
    M = n(566331),
    O = n(768088),
    P = n(256195),
    G = n(834730),
    V = n(1215),
    F = n(792996),
    H = n(584841);
function U(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: r } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.A, { className: s()(H.HL, H.gH), stream: t, noText: !0 }),
            !i &&
                (0, l.jsxs)("div", {
                    className: s()(H.Qs, H.JK, { [H.EX]: n }),
                    children: [
                        (0, l.jsx)(G.E, {
                            className: H.gS,
                            color: "text-overlay-light",
                            variant: n ? "body-sm/semibold" : "body-md/semibold",
                            children: r ? F.intl.string(F.t.UeEwjy) : F.intl.string(F.t["1i3tSY"]),
                        }),
                        (0, l.jsx)(u.m, {
                            asContainer: !0,
                            text: r ? F.intl.string(F.t["ro/HN8"]) : F.intl.string(F.t.UPf6ZM),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(V.ScreenSlashIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: H.uI,
                                    colorClass: H.g$,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var z = n(259264),
    W = n(40056),
    $ = n(435558),
    B = n(451988),
    K = n(765671),
    Y = n(461782),
    X = n(426179),
    Z = n(109294);
function Q(e) {
    return (1 & e.buttons) == 1;
}
let q = i.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: r, wrapperClassName: a } = t,
        { onActive: o } = i.useContext(Y.k3),
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
            doZoom: j,
            clampPanOffset: S,
        } = i.useContext(W.e9),
        [I, b] = i.useState(null),
        [y, _] = i.useState(null),
        [N, w] = i.useState(0),
        [k, R] = i.useState(null),
        [L, T] = i.useState(null),
        [D, M] = i.useState(!1),
        O = i.useRef(new B.Ep()),
        P = i.useRef(new B.Ep()),
        G = i.useRef(0),
        V = i.useRef(new B.Ep()),
        F = i.useRef(null),
        H = h > c,
        U = i.useCallback(
            (e) => {
                (e.width > 0 && e.height > 0 && E(e.width / e.height), r?.(e));
            },
            [r, E],
        ),
        q = i.useCallback(
            (e) => {
                if (null == C.current) return W.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        J = i.useCallback(
            (e) => {
                if (!H || !Q(e)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e);
                (m(!0), _(t), b(t), w(Date.now()), T(t), R(p));
            },
            [q, H, p, m],
        ),
        ee = i.useCallback(
            (e) => {
                if (((u || H) && o(), !d || !H || null == L || null == k)) return;
                (e.preventDefault(), e.stopPropagation());
                let t = q(e),
                    n = t.x - L.x,
                    l = t.y - L.y;
                (f(S({ x: k.x + n, y: k.y + l })), b(t));
            },
            [S, L, k, u, q, d, H, o, f],
        ),
        et = i.useCallback(
            (e) => {
                !d || Q(e) || (e.preventDefault(), e.stopPropagation(), m(!1), T(null), R(null));
            },
            [d, m],
        ),
        en = i.useCallback(
            (e) => {
                if (H && null != y && null != I) {
                    let { x: t, y: n } = y,
                        { x: l, y: i } = I;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - N >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [H, y, N, I],
        ),
        el = i.useCallback(() => {
            (m(!1), T(null), R(null));
        }, [m]),
        ei = i.useCallback(
            (e) => {
                u &&
                    (x(!0),
                    (G.current -= e.deltaY * (e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? 1 : 100)),
                    P.current.start(
                        40,
                        () => {
                            (j(h * 1.1 ** (0, $.clamp)(G.current / 100, -1, 1), q(e), "wheel"), (G.current = 0));
                        },
                        !1,
                    ),
                    o(),
                    O.current.start(100, () => {
                        x(!1);
                    }));
            },
            [u, j, h, q, o, x],
        );
    ((0, K.i4)(
        C,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!H || null == t || null == n) return;
                let l = F.current;
                if (null == l) {
                    F.current = { width: t, height: n };
                    return;
                }
                let { width: i, height: r } = l;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - r)) ||
                    (M(!0),
                    f((e) => {
                        let l = (i * (h - 1)) / 2,
                            s = (r * (h - 1)) / 2,
                            a = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return S({ x: (0 !== l ? e.x / l : 0) * a, y: (0 !== s ? e.y / s : 0) * o });
                    }),
                    (F.current = { width: t, height: n }),
                    V.current.start(100, () => {
                        M(!1);
                    }));
            },
            [S, H, h, f],
        ),
        [H, h],
    ),
        (0, g.l0)(() => {
            (O.current.stop(), P.current.stop(), V.current.stop());
        }),
        i.useEffect(() => {
            null != n && (0, X.c)(n, void 0, u && H ? h : 1);
        }, [u, H, n, h]));
    let er = i.useMemo(() => {
        let e = S(p);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || D || A || v ? "none" : "transform 0.15s ease-out",
        };
    }, [S, d, D, A, v, p, h]);
    return (0, l.jsx)("div", {
        ref: C,
        className: s()(Z.iE, a, { [Z.rc]: u && H, [Z.d$]: d }),
        onMouseDown: J,
        onMouseMove: ee,
        onMouseUp: et,
        onMouseLeave: el,
        onWheel: ei,
        onClick: en,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: s()(Z.j, Z.L2),
                style: er,
                children: (0, l.jsx)(z.A, { ...t, onResize: U, wrapperClassName: void 0 }),
            }),
    });
});
var J = n(76795);
function ee(e) {
    let { streamDrawingStreamKey: t, onResize: n, fit: r, ...s } = e,
        { zoomLevel: a, minZoom: o } = i.useContext(W.e9),
        [u, c] = i.useState(null),
        d = i.useRef(null),
        m = i.useCallback((e) => {
            d.current = e;
        }, []),
        p = i.useCallback(
            (e) => {
                (c((t) => (t?.width === e.width && t?.height === e.height ? t : e)), n?.(e));
            },
            [n],
        ),
        g = r;
    return (
        r === z.$.COVER_LANDSCAPE && ((g = z.$.COVER), null != u && u.width < u.height && (g = z.$.CONTAIN)),
        (0, l.jsx)(q, {
            ...s,
            fit: g,
            onResize: p,
            onVideoElement: m,
            children:
                null != t && a <= o
                    ? (0, l.jsx)(
                          J.A,
                          {
                              streamKey: t,
                              dimensions: u,
                              visible: !(s.videoSpinnerContext === f.u.SELF_STREAM && s.paused),
                              fit: g,
                              videoRef: d,
                          },
                          t,
                      )
                    : null,
        })
    );
}
var et = n(275731),
    en = n(345812),
    el = n(652215),
    ei = n(806931),
    er = n(731854);
let es = new x.A("StreamTile");
function ea(e) {
    let { participant: t, selected: n, focused: i, idle: r, width: s, premiumIndicator: o } = e,
        u = (0, a.bG)([w.A], () => w.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, en.VE)(s);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(et.A, { participant: t }),
            i || null == u || u.state === el.XYD.ENDED || u.state === el.XYD.FAILED
                ? null
                : (0, l.jsx)(I.A, {
                      size: A.Ay.Sizes.SMALL,
                      className: H.Ok,
                      participant: t,
                      showQuality: !c && !r,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function eo(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: r,
            fit: A,
            popoutType: x,
            width: I,
            wrapperClassName: G,
            paused: V = !1,
        } = e,
        z = (0, y.T)("StreamTile"),
        W = (0, b.B)(t.id),
        $ = L.Ay.getVideoComponent(),
        B = (0, a.bG)([k.default], () => k.default.getId()),
        K = (0, E.A)(),
        { stream: Y, user: X, streamId: Z } = t,
        Q = (0, a.bG)([R.A], () => R.A.getChannel(Y.channelId)),
        q = (0, a.bG)([w.A], () => w.A.getActiveStreamForUser(X.id, Y.guildId), [X.id, Y.guildId]),
        J = (0, a.bG)([w.A], () => w.A.getAllActiveStreams().length > 0),
        et = (0, a.bG)([T.A], () => T.A.isFocused()),
        en = (0, a.bG)([_.Ay], () => _.Ay.pauseSelfStreamPreviewWhenUnfocused),
        ea = q?.ownerId === B,
        eo = ea && en && !et && x === h.N.NO_POPOUT,
        eu = null != q ? (0, j.A)(q, X, X.id === B, eo) : null,
        ec = I < 195;
    (0, g.Ay)(() => {
        !J &&
            Q?.isGuildStageVoice() &&
            !ea &&
            !w.A.isStreamMarkedFull((0, C._z)(Y)) &&
            ((0, p.A9)(Y), m.A.updateStageStreamSize(Y.channelId, !1));
    });
    let ed = (0, v.u)(er.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            es.info(
                `Stream Tile State - activeStream: ${null != q} | selected: ${n} | Video: ${null != $} | MediaEngine: ${L.Ay.supports(er.O5.VIDEO)}`,
            );
        }, [$, q, n]),
        K)
    )
        return (0, l.jsx)(U, { stream: t.stream, isSmall: ec, selected: n, isSelfStream: X.id === B });
    if (q?.state === el.XYD.ENDED) return (0, l.jsx)(M.A, { selected: n, stream: q, width: I });
    if (null != ed || q?.state === el.XYD.FAILED)
        return (0, l.jsx)(O.A, { avError: ed?.type, avErrorContext: ed, selected: n, stream: t.stream, width: I });
    if (t.type === ei.lp.HIDDEN_STREAM) return (0, l.jsx)(P.A, { selected: n, participant: t, width: I });
    if (null != q && !n && null != $ && L.Ay.supports(er.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    ee,
                    {
                        onResize: r,
                        wrapperClassName: s()(x !== h.N.CALL_TILE ? H.tN : void 0, G),
                        className: H.Qs,
                        streamId: Z,
                        videoComponent: $,
                        fit: A,
                        paused: V || q?.state === el.XYD.PAUSED || eo,
                        videoSpinnerContext: ea ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: X.id,
                        streamKey: t.id,
                        streamDrawingStreamKey: z && W && !Q?.isGuildStageVoice() ? (0, C._z)(Y) : void 0,
                    },
                    Z,
                ),
                null != eu ? (0, l.jsx)(N.A, { size: (0, D.J)(I), ...eu }) : null,
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: s()(H.Qs, H.Rh, { [H.EX]: ec }),
            children: [
                (0, l.jsx)(S.A, {
                    noImage: !0,
                    noText: !0,
                    className: s()(H.HL, { [H.gH]: null == q }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: H.lO,
                                  children: (0, l.jsx)(o.$, {
                                      variant: "secondary",
                                      size: ec ? "sm" : "md",
                                      text: I < 175 ? F.intl.string(F.t.I6JG46) : F.intl.string(F.t["7Xq/nV"]),
                                  }),
                              }),
                              J
                                  ? (0, l.jsx)("div", {
                                        className: s()(H.lO, H.EU),
                                        children: (0, l.jsx)(u.m, {
                                            text: F.intl.string(F.t.wCrzut),
                                            children: (0, l.jsx)(c.K, {
                                                variant: "secondary",
                                                size: ec ? "sm" : "md",
                                                icon: d.EyePlusIcon,
                                                "aria-label": F.intl.string(F.t.wCrzut),
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
