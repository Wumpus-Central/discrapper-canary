n.d(t, { A: () => eh, D: () => ef });
var i = n(627968),
    l = n(64700),
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
    x = n(402216),
    A = n(626584),
    v = n(525505),
    E = n(753727),
    C = n(676619),
    I = n(638480),
    j = n(607407),
    _ = n(872363),
    S = n(451988),
    N = n(765671),
    b = n(461782),
    y = n(228366),
    w = n(51092),
    R = n(40056),
    k = n(926613);
function T(e) {
    return (1 & e.buttons) == 1;
}
let D = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: r } = t,
        { onActive: o } = l.useContext(b.k3),
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
        } = l.useContext(R.e9),
        [_, D] = l.useState(null),
        [O, L] = l.useState(null),
        [M, V] = l.useState(0),
        [F, P] = l.useState(null),
        [G, H] = l.useState(null),
        [U, z] = l.useState(!1),
        W = l.useRef(new S.Ep()),
        $ = l.useRef(new S.Ep()),
        B = l.useRef(null),
        Y = h > c,
        Z = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && E(e.width / e.height), s?.(e);
            },
            [s, E],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == C.current) return R.qd;
                let t = C.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [C],
        ),
        K = l.useCallback(
            (e) => {
                if (!Y || !T(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e);
                m(!0), L(t), D(t), V(Date.now()), H(t), P(p);
            },
            [Q, Y, p, m],
        ),
        X = l.useCallback(
            (e) => {
                if (((u || Y) && o(), !d || !Y || null == G || null == F)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e),
                    n = t.x - G.x,
                    i = t.y - G.y;
                f(j({ x: F.x + n, y: F.y + i })), D(t);
            },
            [j, G, F, u, Q, d, Y, o, f],
        ),
        q = l.useCallback(
            (e) => {
                !d || T(e) || (e.preventDefault(), e.stopPropagation(), m(!1), H(null), P(null));
            },
            [d, m],
        ),
        J = l.useCallback(
            (e) => {
                if (Y && null != O && null != _) {
                    let { x: t, y: n } = O,
                        { x: i, y: l } = _;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - M >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, O, M, _],
        ),
        ee = l.useCallback(() => {
            m(!1), H(null), P(null);
        }, [m]),
        et = l.useCallback(
            (e) => {
                u &&
                    (A(!0),
                    I(h - e.deltaY / 100, Q(e), "wheel"),
                    o(),
                    W.current.start(100, () => {
                        A(!1);
                    }));
            },
            [u, I, h, Q, o, A],
        );
    (0, N.i4)(
        C,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Y || null == t || null == n) return;
                let i = B.current;
                if (null == i) {
                    B.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (z(!0),
                    f((e) => {
                        let i = (l * (h - 1)) / 2,
                            a = (s * (h - 1)) / 2,
                            r = (t * (h - 1)) / 2,
                            o = (n * (h - 1)) / 2;
                        return j({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== a ? e.y / a : 0) * o });
                    }),
                    (B.current = { width: t, height: n }),
                    $.current.start(100, () => {
                        z(!1);
                    }));
            },
            [j, Y, h, f],
        ),
        [Y, h],
    ),
        (0, g.l0)(() => {
            W.current.stop(), $.current.stop();
        }),
        l.useEffect(() => {
            if (null != n) {
                var e;
                (e = u && Y ? h : 1),
                    y.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: n, dimensions: void 0, zoom: e });
            }
        }, [u, Y, n, h]);
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
        className: a()(k.iE, r, { [k.rc]: u && Y, [k.d$]: d }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: a()(k.j, k.L2),
                style: en,
                children: (0, i.jsx)(w.A, { ...t, onResize: Z, wrapperClassName: void 0 }),
            }),
    });
});
var O = n(919706),
    L = n(616356),
    M = n(495544),
    V = n(734057),
    F = n(969341),
    P = n(531685),
    G = n(200749),
    H = n(123924),
    U = n(844222),
    z = n(866323),
    W = n(274372),
    $ = n(399925),
    B = n(361157),
    Y = n(652896),
    Z = n(750506),
    Q = n(912802);
let K = { visibility: "hidden" },
    X = { precision: 1e-4, duration: 300 },
    q = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
    J = { duration: 1e3 };
function ee(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: s } = l.useContext(U.C),
        a = (0, l.useRef)(null),
        o = B.K.getState().clipsButtonRef,
        u = (0, Y._z)(t),
        c = (0, r.bG)([W.A], () => W.A.getActiveAnimation()),
        d = (0, r.yK)([W.A], () => W.A.getStreamClipAnimations(u)),
        m = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, $.MI)(u);
        },
        [u],
    );
    let p = (e) => {
            if (n !== h.N.NO_POPOUT) return K;
            let t = o?.getBoundingClientRect();
            if (((m.current = t), e.timestamp !== c || null == t)) return K;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
        },
        g = (0, l.useRef)(null),
        f = (0, z.p)(
            d,
            { keys: (e) => e.timestamp, ref: g, from: { opacity: 0.2 }, enter: { opacity: 0 }, config: X },
            "animate-always",
        ),
        x = (0, l.useRef)(null),
        A = (0, z.p)(
            d,
            {
                ref: x,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: "fixed",
                    visibility: "hidden",
                    opacity: 1,
                    ...(s.enabled
                        ? p(e)
                        : (() => {
                              if (n !== h.N.NO_POPOUT) return K;
                              let e = a.current?.getBoundingClientRect();
                              return null == e ? K : { width: e.width, height: e.height, top: e.top, left: e.left };
                          })()),
                }),
                enter: (e) => [{ opacity: 1, visibility: "visible", ...p(e) }],
                leave: {
                    opacity: 0,
                    ...(!s.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != m.current) return { top: m.current.top + 12, left: m.current.left + 12 };
                        })(),
                    }),
                },
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
        (0, H.useChain)([g, x], [0, 0.1], 3e3),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: Q.R, ref: a }),
                f((e, t) => null != t && (0, i.jsx)(H.animated.div, { className: Q.w5, style: e })),
                (0, i.jsx)(Z.Ay, {
                    children: (0, i.jsx)("div", {
                        className: Q.R,
                        children: A(
                            (e, t, n, l) =>
                                t?.thumbnail != null &&
                                (0, i.jsx)(H.animated.img, { src: t.thumbnail, className: Q.yI, style: e }),
                        ),
                    }),
                }),
            ],
        })
    );
}
var et = n(566331),
    en = n(768088),
    ei = n(256195),
    el = n(834730),
    es = n(1215),
    ea = n(985018),
    er = n(391308);
function eo(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.A, { className: a()(er.HL, er.gH), stream: t, noText: !0 }),
            !l &&
                (0, i.jsxs)("div", {
                    className: a()(er.Qs, er.JK, { [er.EX]: n }),
                    children: [
                        (0, i.jsx)(el.E, {
                            className: er.gS,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: s ? ea.intl.string(ea.t.UeEwjy) : ea.intl.string(ea.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(o.m, {
                            asContainer: !0,
                            text: s ? ea.intl.string(ea.t["ro/HN8"]) : ea.intl.string(ea.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(es.n, {
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
let eg = new A.A("StreamTile");
function ef(e) {
    let { participant: t, selected: n, focused: l, idle: s, width: a, premiumIndicator: o } = e,
        u = (0, r.bG)([L.A], () => L.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, ec.VE)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(eu.A, { participant: t }),
            l || null == u || u.state === ed.XYD.ENDED || u.state === ed.XYD.FAILED
                ? null
                : (0, i.jsx)(_.A, {
                      size: x.Ay.Sizes.SMALL,
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
            fit: x,
            popoutType: A,
            width: _,
            wrapperClassName: S,
            paused: N = !1,
        } = e,
        b = F.Ay.getVideoComponent(),
        y = (0, r.bG)([M.default], () => M.default.getId()),
        w = (0, E.A)(),
        { stream: R, user: k, streamId: T } = t,
        H = (0, r.bG)([V.A], () => V.A.getChannel(R.channelId)),
        U = (0, r.bG)([L.A], () => L.A.getActiveStreamForUser(k.id, R.guildId), [k.id, R.guildId]),
        z = (0, r.bG)([L.A], () => L.A.getAllActiveStreams().length > 0),
        W = (0, r.bG)([P.A], () => P.A.isFocused()),
        $ = (0, C.Qu)(),
        B = U?.ownerId === y,
        Y = B && !(W || $) && A === h.N.NO_POPOUT,
        Z = null != U ? (0, I.A)(U, k, k.id === y, Y) : null,
        Q = _ < 195;
    (0, g.Ay)(() => {
        !z && H?.isGuildStageVoice() && !B && ((0, p.A9)(R), m.A.updateStageStreamSize(R.channelId, !1));
    });
    let K = (0, v.u)(ep.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            eg.info(
                `Stream Tile State - activeStream: ${null != U} | selected: ${n} | Video: ${null != b} | MediaEngine: ${F.Ay.supports(ep.O5.VIDEO)}`,
            );
        }, [b, U, n]),
        w)
    )
        return (0, i.jsx)(eo, { stream: t.stream, isSmall: Q, selected: n, isSelfStream: k.id === y });
    if (U?.state === ed.XYD.ENDED) return (0, i.jsx)(et.A, { selected: n, stream: U, width: _ });
    if (null != K || U?.state === ed.XYD.FAILED)
        return (0, i.jsx)(en.A, { avError: K?.type, avErrorContext: K, selected: n, stream: t.stream, width: _ });
    if (t.type === em.lp.HIDDEN_STREAM) return (0, i.jsx)(ei.A, { selected: n, participant: t, width: _ });
    if (null != U && !n && null != b && F.Ay.supports(ep.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    D,
                    {
                        onResize: s,
                        wrapperClassName: a()(A !== h.N.CALL_TILE ? er.tN : void 0, S),
                        className: er.Qs,
                        streamId: T,
                        videoComponent: b,
                        fit: x,
                        paused: N || U?.state === ed.XYD.PAUSED || Y,
                        videoSpinnerContext: B ? f.u.SELF_STREAM : f.u.REMOTE_STREAM,
                        userId: k.id,
                        streamKey: t.id,
                    },
                    T,
                ),
                null != Z ? (0, i.jsx)(O.A, { size: (0, G.J)(_), ...Z }) : null,
                (0, i.jsx)(ee, { stream: R, popoutType: A }),
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: a()(er.Qs, er.Rh, { [er.EX]: Q }),
            children: [
                (0, i.jsx)(j.A, {
                    noImage: !0,
                    noText: !0,
                    className: a()(er.HL, { [er.gH]: null == U }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: er.lO,
                                  children: (0, i.jsx)(u.$, {
                                      variant: "secondary",
                                      size: Q ? "sm" : "md",
                                      text: _ < 175 ? ea.intl.string(ea.t.I6JG46) : ea.intl.string(ea.t["7Xq/nV"]),
                                  }),
                              }),
                              z
                                  ? (0, i.jsx)("div", {
                                        className: a()(er.lO, er.EU),
                                        children: (0, i.jsx)(o.m, {
                                            text: ea.intl.string(ea.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: Q ? "sm" : "md",
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
