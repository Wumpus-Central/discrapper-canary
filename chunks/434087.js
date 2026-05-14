n.d(t, { A: () => eh, D: () => ef });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(990078),
    u = n(821609),
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
    C = n(899e3),
    I = n(638480),
    _ = n(607407),
    j = n(872363),
    S = n(451988),
    N = n(765671),
    b = n(461782),
    y = n(228366),
    w = n(51092),
    T = n(40056),
    R = n(926613);
function k(e) {
    return (1 & e.buttons) == 1;
}
let D = i.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: r } = t,
        { onActive: o } = i.useContext(b.k3),
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
            clampPanOffset: _,
        } = i.useContext(T.e9),
        [j, D] = i.useState(null),
        [O, L] = i.useState(null),
        [M, F] = i.useState(0),
        [V, P] = i.useState(null),
        [G, H] = i.useState(null),
        [U, z] = i.useState(!1),
        W = i.useRef(new S.Ep()),
        $ = i.useRef(new S.Ep()),
        B = i.useRef(null),
        Y = h > c,
        Z = i.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e);
            },
            [s, E],
        ),
        K = i.useCallback(
            (e) => {
                if (null == C.current) return T.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        Q = i.useCallback(
            (e) => {
                if (!Y || !k(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e);
                m(!0), L(t), D(t), F(Date.now()), H(t), P(p);
            },
            [K, Y, p, m],
        ),
        X = i.useCallback(
            (e) => {
                if (((u || Y) && o(), !d || !Y || null == G || null == V)) return;
                e.preventDefault(), e.stopPropagation();
                let t = K(e),
                    n = t.x - G.x,
                    l = t.y - G.y;
                f(_({ x: V.x + n, y: V.y + l })), D(t);
            },
            [_, G, V, u, K, d, Y, o, f],
        ),
        q = i.useCallback(
            (e) => {
                !d || k(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), P(null));
            },
            [d, m],
        ),
        J = i.useCallback(
            (e) => {
                if (Y && null != O && null != j) {
                    let { x: t, y: n } = O,
                        { x: l, y: i } = j;
                    (Math.sqrt((l - t) ** 2 + (i - n) ** 2) > 0.01 || Date.now() - M >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, O, M, j],
        ),
        ee = i.useCallback(() => {
            m(!1), H(null), P(null);
        }, [m]),
        et = i.useCallback(
            (e) => {
                u &&
                    (x(!0),
                    I(h - e.deltaY / 100, K(e), "wheel"),
                    o(),
                    W.current.start(100, () => {
                        x(!1);
                    }));
            },
            [u, I, h, K, o, x],
        );
    (0, N.i4)(
        C,
        i.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Y || null == t || null == n) return;
                let l = B.current;
                if (null == l) {
                    B.current = { width: t, height: n };
                    return;
                }
                let { width: i, height: s } = l;
                (1 > Math.abs(t - i) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let l = (i * (h - 1)) / 2,
                            a = (s * (h - 1)) / 2,
                            r = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return _({ x: (0 !== l ? e.x / l : 0) * r, y: (0 !== a ? e.y / a : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [_, Y, h, f],
        ),
        [Y, h],
    ),
        (0, g.l0)(() => {
            W.current.stop(), $.current.stop();
        }),
        i.useEffect(() => {
            if (null != n) {
                var e;
                (e = u && Y ? h : 1),
                    y.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: n, dimensions: void 0, zoom: e });
            }
        }, [u, Y, n, h]);
    let en = i.useMemo(() => {
        let e = _(p);
        return {
            "--custom-zoom-scale": h,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": d || U || A || v ? "none" : "transform 0.15s ease-out",
        };
    }, [_, d, U, A, v, p, h]);
    return (0, l.jsx)("div", {
        ref: C,
        className: a()(R.iE, r, { [R.rc]: u && Y, [R.d$]: d }),
        onMouseDown: Q,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, l.jsx)("div", {
                className: a()(R.j, R.L2),
                style: en,
                children: (0, l.jsx)(w.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var O = n(919706),
    L = n(616356),
    M = n(495544),
    F = n(734057),
    V = n(235058),
    P = n(531685),
    G = n(200749),
    H = n(873174),
    U = n(844222),
    z = n(866323),
    W = n(274372),
    $ = n(607814),
    B = n(361157),
    Y = n(652896),
    Z = n(750506),
    K = n(912802);
let Q = { visibility: "hidden" },
    X = { precision: 1e-4, duration: 300 },
    q = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
    J = { duration: 1e3 };
function ee(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: s } = i.useContext(U.C),
        a = (0, i.useRef)(null),
        o = (0, B.K)((e) => e.clipsButtonRef),
        u = (0, Y._z)(t),
        c = (0, r.bG)([W.A], () => W.A.getActiveAnimation()),
        d = (0, r.yK)([W.A], () => W.A.getStreamClipAnimations(u)),
        m = (0, i.useRef)(void 0);
    i.useEffect(
        () => () => {
            (0, $.MI)(u);
        },
        [u],
    );
    let p = (e) => {
            if (n !== h.N.NO_POPOUT) return Q;
            let t = o?.getBoundingClientRect();
            if (((m.current = t), e.timestamp !== c || null == t)) return Q;
            let { top: l, left: i } = t;
            return { top: l + 36, left: i - 216, height: 151, width: 268 };
        },
        g = (0, i.useRef)(null),
        f = (0, z.p)(
            d,
            { keys: (e) => e.timestamp, ref: g, from: { opacity: 0.2 }, enter: { opacity: 0 }, config: X },
            "animate-always",
        ),
        A = (0, i.useRef)(null),
        x = (0, z.p)(
            d,
            {
                ref: A,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: "fixed",
                    visibility: "hidden",
                    opacity: 1,
                    ...(s.enabled
                        ? p(e)
                        : (() => {
                              if (n !== h.N.NO_POPOUT) return Q;
                              let e = a.current?.getBoundingClientRect();
                              return null == e ? Q : { width: e.width, height: e.height, top: e.top, left: e.left };
                          })()),
                }),
                enter: (e) => [{ opacity: 1, visibility: "visible", ...p(e) }],
                leave: () => ({
                    opacity: 0,
                    ...(!s.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != m.current) return { top: m.current.top + 12, left: m.current.left + 12 };
                        })(),
                    }),
                }),
                config: s.enabled ? J : q,
                onRest: (e, t) => {
                    null != t.item &&
                        null != d.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, $.MI)(u, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, H.useChain)([g, A], [0, 0.1], 3e3),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", { className: K.R, ref: a }),
                f((e, t) => null != t && (0, l.jsx)(H.animated.div, { className: K.w5, style: e })),
                (0, l.jsx)(Z.Ay, {
                    children: (0, l.jsx)("div", {
                        className: K.R,
                        children: x(
                            (e, t, n, i) =>
                                t?.thumbnail != null &&
                                (0, l.jsx)(H.animated.img, { src: t.thumbnail, className: K.yI, style: e }),
                        ),
                    }),
                }),
            ],
        })
    );
}
var et = n(566331),
    en = n(768088),
    el = n(256195),
    ei = n(834730),
    es = n(1215),
    ea = n(375708),
    er = n(391308);
function eo(e) {
    let { stream: t, isSmall: n, selected: i, isSelfStream: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(_.A, { className: a()(er.HL, er.gH), stream: t, noText: !0 }),
            !i &&
                (0, l.jsxs)("div", {
                    className: a()(er.Qs, er.JK, { [er.EX]: n }),
                    children: [
                        (0, l.jsx)(ei.E, {
                            className: er.gS,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? ea.intl.string(ea.t.UeEwjy) : ea.intl.string(ea.t["1i3tSY"]),
                        }),
                        (0, l.jsx)(o.m, {
                            asContainer: !0,
                            text: s ? ea.intl.string(ea.t["ro/HN8"]) : ea.intl.string(ea.t.UPf6ZM),
                            children: (0, l.jsx)("div", {
                                children: (0, l.jsx)(es.n, {
                                    size: "md",
                                    color: "currentColor",
                                    className: er.uI,
                                    colorClass: er.g$,
                                }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var eu = n(275731),
    ec = n(345812),
    ed = n(652215),
    em = n(806931),
    ep = n(731854);
let eg = new x.A("StreamTile");
function ef(e) {
    let { participant: t, selected: n, focused: i, idle: s, width: a, premiumIndicator: o } = e,
        u = (0, r.bG)([L.A], () => L.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, ec.VE)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || i ? null : (0, l.jsx)(eu.A, { participant: t }),
            i || null == u || u.state === ed.XYD.ENDED || u.state === ed.XYD.FAILED
                ? null
                : (0, l.jsx)(j.A, {
                      size: A.Ay.Sizes.SMALL,
                      className: er.Ok,
                      participant: t,
                      showQuality: !c && !s,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function eh(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: s,
            fit: A,
            popoutType: x,
            width: j,
            wrapperClassName: S,
            paused: N = !1,
        } = e,
        b = V.Ay.getVideoComponent(),
        y = (0, r.bG)([M.default], () => M.default.getId()),
        w = (0, E.A)(),
        { stream: T, user: R, streamId: k } = t,
        H = (0, r.bG)([F.A], () => F.A.getChannel(T.channelId)),
        U = (0, r.bG)([L.A], () => L.A.getActiveStreamForUser(R.id, T.guildId), [R.id, T.guildId]),
        z = (0, r.bG)([L.A], () => L.A.getAllActiveStreams().length > 0),
        W = (0, r.bG)([P.A], () => P.A.isFocused()),
        $ = (0, C.Qu)(),
        B = U?.ownerId === y,
        Y = B && !(W || $) && x === h.N.NO_POPOUT,
        Z = null != U ? (0, I.A)(U, R, R.id === y, Y) : null,
        K = j < 195;
    (0, g.Ay)(() => {
        !z && H?.isGuildStageVoice() && !B && ((0, p.A9)(T), m.A.updateStageStreamSize(T.channelId, !1));
    });
    let Q = (0, v.u)(ep.x.STREAM, t.user.id);
    if (
        (i.useEffect(() => {
            eg.info(
                `Stream Tile State - activeStream: ${null != U} | selected: ${n} | Video: ${null != b} | MediaEngine: ${V.Ay.supports(ep.O5.VIDEO)}`,
            );
        }, [b, U, n]),
        w)
    )
        return (0, l.jsx)(eo, { stream: t.stream, isSmall: K, selected: n, isSelfStream: R.id === y });
    if (U?.state === ed.XYD.ENDED) return (0, l.jsx)(et.A, { selected: n, stream: U, width: j });
    if (null != Q || U?.state === ed.XYD.FAILED)
        return (0, l.jsx)(en.A, { avError: Q?.type, avErrorContext: Q, selected: n, stream: t.stream, width: j });
    if (t.type === em.lp.HIDDEN_STREAM) return (0, l.jsx)(el.A, { selected: n, participant: t, width: j });
    if (null != U && !n && null != b && V.Ay.supports(ep.O5.VIDEO))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(
                    D,
                    {
                        onResize: s,
                        wrapperClassName: a()(x !== h.N.CALL_TILE ? er.tN : void 0, S),
                        className: er.Qs,
                        streamId: k,
                        videoComponent: b,
                        fit: A,
                        paused: N || U?.state === ed.XYD.PAUSED || Y,
                        videoSpinnerContext: B ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: R.id,
                        streamKey: t.id,
                    },
                    k,
                ),
                null != Z ? (0, l.jsx)(O.A, { size: (0, G.J)(j), ...Z }) : null,
                (0, l.jsx)(ee, { stream: T, popoutType: x }),
            ],
        });
    else
        return (0, l.jsxs)("div", {
            className: a()(er.Qs, er.Rh, { [er.EX]: K }),
            children: [
                (0, l.jsx)(_.A, {
                    noImage: !0,
                    noText: !0,
                    className: a()(er.HL, { [er.gH]: null == U }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: er.lO,
                                  children: (0, l.jsx)(u.$, {
                                      variant: "secondary",
                                      size: K ? "sm" : "md",
                                      text: j < 175 ? ea.intl.string(ea.t.I6JG46) : ea.intl.string(ea.t["7Xq/nV"]),
                                  }),
                              }),
                              z
                                  ? (0, l.jsx)("div", {
                                        className: a()(er.lO, er.EU),
                                        children: (0, l.jsx)(o.m, {
                                            text: ea.intl.string(ea.t.wCrzut),
                                            children: (0, l.jsx)(c.K, {
                                                variant: "secondary",
                                                size: K ? "sm" : "md",
                                                icon: d.v,
                                                "aria-label": ea.intl.string(ea.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, p.A9)(t.stream, { forceMultiple: !0 });
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
