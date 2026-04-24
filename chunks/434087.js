n.d(t, { A: () => ep, D: () => em });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(990078),
    d = n(821609),
    c = n(408278),
    u = n(622631),
    _ = n(367513),
    f = n(401843),
    m = n(964486),
    p = n(684339),
    g = n(164617),
    h = n(402216),
    x = n(626584),
    v = n(525505),
    A = n(753727),
    I = n(638480),
    C = n(607407),
    E = n(872363),
    j = n(451988),
    b = n(765671),
    N = n(461782),
    S = n(228366),
    y = n(51092),
    w = n(40056),
    T = n(926613);
function R(e) {
    return (1 & e.buttons) == 1;
}
let k = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: a, wrapperClassName: s } = t,
        { onActive: o } = l.useContext(N.k3),
        {
            enabled: d,
            minZoom: c,
            isDragging: u,
            setIsDragging: _,
            panOffset: f,
            setPanOffset: p,
            zoomLevel: g,
            isWheeling: h,
            setIsWheeling: x,
            isSlidering: v,
            setVideoAspectRatio: A,
            wrapperRef: I,
            doZoom: C,
            clampPanOffset: E,
        } = l.useContext(w.e9),
        [k, M] = l.useState(null),
        [D, L] = l.useState(null),
        [O, V] = l.useState(0),
        [P, G] = l.useState(null),
        [F, H] = l.useState(null),
        [U, W] = l.useState(!1),
        B = l.useRef(new j.Ep()),
        z = l.useRef(new j.Ep()),
        Z = l.useRef(null),
        $ = g > c,
        Y = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && A(e.width / e.height), a?.(e);
            },
            [a, A],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == I.current) return w.qd;
                let t = I.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [I],
        ),
        K = l.useCallback(
            (e) => {
                if (!$ || !R(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e);
                _(!0), L(t), M(t), V(Date.now()), H(t), G(f);
            },
            [Q, $, f, _],
        ),
        X = l.useCallback(
            (e) => {
                if (((d || $) && o(), !u || !$ || null == F || null == P)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e),
                    n = t.x - F.x,
                    i = t.y - F.y;
                p(E({ x: P.x + n, y: P.y + i })), M(t);
            },
            [E, F, P, d, Q, u, $, o, p],
        ),
        q = l.useCallback(
            (e) => {
                !u || R(e) || (e.preventDefault(), e.stopPropagation(), _(!1), H(null), G(null));
            },
            [u, _],
        ),
        J = l.useCallback(
            (e) => {
                if ($ && null != D && null != k) {
                    let { x: t, y: n } = D,
                        { x: i, y: l } = k;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - O >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [$, D, O, k],
        ),
        ee = l.useCallback(() => {
            _(!1), H(null), G(null);
        }, [_]),
        et = l.useCallback(
            (e) => {
                d &&
                    (x(!0),
                    C(g - e.deltaY / 100, Q(e), "wheel"),
                    o(),
                    B.current.start(100, () => {
                        x(!1);
                    }));
            },
            [d, C, g, Q, o, x],
        );
    (0, b.i4)(
        I,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!$ || null == t || null == n) return;
                let i = Z.current;
                if (null == i) {
                    Z.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: a } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - a)) ||
                    (W(!0),
                    p((e) => {
                        let i = (l * (g - 1)) / 2,
                            r = (a * (g - 1)) / 2,
                            s = (t * (g - 1)) / 2,
                            o = (n * (g - 1)) / 2;
                        return E({ x: (0 !== i ? e.x / i : 0) * s, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (Z.current = { width: t, height: n }),
                    z.current.start(100, () => {
                        W(!1);
                    }));
            },
            [E, $, g, p],
        ),
        [$, g],
    ),
        (0, m.l0)(() => {
            B.current.stop(), z.current.stop();
        }),
        l.useEffect(() => {
            if (null != n) {
                var e;
                (e = d && $ ? g : 1),
                    S.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: n, dimensions: void 0, zoom: e });
            }
        }, [d, $, n, g]);
    let en = l.useMemo(() => {
        let e = E(f);
        return {
            "--custom-zoom-scale": g,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": u || U || h || v ? "none" : "transform 0.15s ease-out",
        };
    }, [E, u, U, h, v, f, g]);
    return (0, i.jsx)("div", {
        ref: I,
        className: r()(T.iE, s, { [T.rc]: d && $, [T.d$]: u }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(T.j, T.L2),
                style: en,
                children: (0, i.jsx)(y.A, { ...t, onResize: Y, wrapperClassName: void 0 }),
            }),
    });
});
var M = n(919706),
    D = n(616356),
    L = n(495544),
    O = n(734057),
    V = n(969341),
    P = n(531685),
    G = n(200749),
    F = n(419354),
    H = n(844222),
    U = n(866323),
    W = n(274372),
    B = n(399925),
    z = n(361157),
    Z = n(652896),
    $ = n(750506),
    Y = n(912802);
let Q = { visibility: "hidden" },
    K = { precision: 1e-4, duration: 300 },
    X = { tension: 150, friction: 20, precision: 1e-4, bounce: 0 },
    q = { duration: 1e3 };
function J(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: a } = l.useContext(H.C),
        r = (0, l.useRef)(null),
        o = z.K.getState().clipsButtonRef,
        d = (0, Z._z)(t),
        c = (0, s.bG)([W.A], () => W.A.getActiveAnimation()),
        u = (0, s.yK)([W.A], () => W.A.getStreamClipAnimations(d)),
        _ = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, B.MI)(d);
        },
        [d],
    );
    let f = (e) => {
            if (n !== g.N.NO_POPOUT) return Q;
            let t = o?.getBoundingClientRect();
            if (((_.current = t), e.timestamp !== c || null == t)) return Q;
            let { top: i, left: l } = t;
            return { top: i + 36, left: l - 216, height: 151, width: 268 };
        },
        m = (0, l.useRef)(null),
        p = (0, U.p)(
            u,
            { keys: (e) => e.timestamp, ref: m, from: { opacity: 0.2 }, enter: { opacity: 0 }, config: K },
            "animate-always",
        ),
        h = (0, l.useRef)(null),
        x = (0, U.p)(
            u,
            {
                ref: h,
                keys: (e) => e.timestamp,
                from: (e) => ({
                    position: "fixed",
                    visibility: "hidden",
                    opacity: 1,
                    ...(a.enabled
                        ? f(e)
                        : (() => {
                              if (n !== g.N.NO_POPOUT) return Q;
                              let e = r.current?.getBoundingClientRect();
                              return null == e ? Q : { width: e.width, height: e.height, top: e.top, left: e.left };
                          })()),
                }),
                enter: (e) => [{ opacity: 1, visibility: "visible", ...f(e) }],
                leave: {
                    opacity: 0,
                    ...(!a.enabled && {
                        height: 0,
                        width: 0,
                        ...(() => {
                            if (null != _.current) return { top: _.current.top + 12, left: _.current.left + 12 };
                        })(),
                    }),
                },
                config: a.enabled ? q : X,
                onRest: (e, t) => {
                    null != t.item &&
                        null != u.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, B.MI)(d, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, F.useChain)([m, h], [0, 0.1], 3e3),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: Y.R, ref: r }),
                p((e, t) => null != t && (0, i.jsx)(F.animated.div, { className: Y.w5, style: e })),
                (0, i.jsx)($.Ay, {
                    children: (0, i.jsx)("div", {
                        className: Y.R,
                        children: x(
                            (e, t, n, l) =>
                                t?.thumbnail != null &&
                                (0, i.jsx)(F.animated.img, { src: t.thumbnail, className: Y.yI, style: e }),
                        ),
                    }),
                }),
            ],
        })
    );
}
var ee = n(566331),
    et = n(768088),
    en = n(256195),
    ei = n(834730),
    el = n(1215),
    ea = n(985018),
    er = n(391308);
function es(e) {
    let { stream: t, isSmall: n, selected: l, isSelfStream: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.A, { className: r()(er.HL, er.gH), stream: t, noText: !0 }),
            !l &&
                (0, i.jsxs)("div", {
                    className: r()(er.Qs, er.JK, { [er.EX]: n }),
                    children: [
                        (0, i.jsx)(ei.E, {
                            className: er.gS,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: a ? ea.intl.string(ea.t.UeEwjy) : ea.intl.string(ea.t["1i3tSY"]),
                        }),
                        (0, i.jsx)(o.m, {
                            asContainer: !0,
                            text: a ? ea.intl.string(ea.t["ro/HN8"]) : ea.intl.string(ea.t.UPf6ZM),
                            children: (0, i.jsx)("div", {
                                children: (0, i.jsx)(el.n, {
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
var eo = n(275731),
    ed = n(345812),
    ec = n(652215),
    eu = n(806931),
    e_ = n(731854);
let ef = new x.A("StreamTile");
function em(e) {
    let { participant: t, selected: n, focused: l, idle: a, width: r, premiumIndicator: o } = e,
        d = (0, s.bG)([D.A], () => D.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, ed.VE)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(eo.A, { participant: t }),
            l || null == d || d.state === ec.XYD.ENDED || d.state === ec.XYD.FAILED
                ? null
                : (0, i.jsx)(E.A, {
                      size: h.Ay.Sizes.SMALL,
                      className: er.Ok,
                      participant: t,
                      showQuality: !c && !a,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function ep(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: a,
            fit: h,
            popoutType: x,
            width: E,
            wrapperClassName: j,
            paused: b = !1,
        } = e,
        N = V.Ay.getVideoComponent(),
        S = (0, s.bG)([L.default], () => L.default.getId()),
        y = (0, A.A)(),
        { stream: w, user: T, streamId: R } = t,
        F = (0, s.bG)([O.A], () => O.A.getChannel(w.channelId)),
        H = (0, s.bG)([D.A], () => D.A.getActiveStreamForUser(T.id, w.guildId), [T.id, w.guildId]),
        U = (0, s.bG)([D.A], () => D.A.getAllActiveStreams().length > 0),
        W = (0, s.bG)([P.A], () => P.A.isFocused()),
        B = H?.ownerId === S,
        z = B && !W && x === g.N.NO_POPOUT,
        Z = null != H ? (0, I.A)(H, T, T.id === S, z) : null,
        $ = E < 195;
    (0, m.Ay)(() => {
        !U && F?.isGuildStageVoice() && !B && ((0, f.A9)(w), _.A.updateStageStreamSize(w.channelId, !1));
    });
    let Y = (0, v.u)(e_.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            ef.info(
                `Stream Tile State - activeStream: ${null != H} | selected: ${n} | Video: ${null != N} | MediaEngine: ${V.Ay.supports(e_.O5.VIDEO)}`,
            );
        }, [N, H, n]),
        y)
    )
        return (0, i.jsx)(es, { stream: t.stream, isSmall: $, selected: n, isSelfStream: T.id === S });
    if (H?.state === ec.XYD.ENDED) return (0, i.jsx)(ee.A, { selected: n, stream: H, width: E });
    if (null != Y || H?.state === ec.XYD.FAILED)
        return (0, i.jsx)(et.A, { avError: Y?.type, avErrorContext: Y, selected: n, stream: t.stream, width: E });
    if (t.type === eu.lp.HIDDEN_STREAM) return (0, i.jsx)(en.A, { selected: n, participant: t, width: E });
    if (null != H && !n && null != N && V.Ay.supports(e_.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    k,
                    {
                        onResize: a,
                        wrapperClassName: r()(x !== g.N.CALL_TILE ? er.tN : void 0, j),
                        className: er.Qs,
                        streamId: R,
                        videoComponent: N,
                        fit: h,
                        paused: b || H?.state === ec.XYD.PAUSED || z,
                        videoSpinnerContext: B ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
                        userId: T.id,
                        streamKey: t.id,
                    },
                    R,
                ),
                null != Z ? (0, i.jsx)(M.A, { size: (0, G.J)(E), ...Z }) : null,
                (0, i.jsx)(J, { stream: w, popoutType: x }),
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(er.Qs, er.Rh, { [er.EX]: $ }),
            children: [
                (0, i.jsx)(C.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(er.HL, { [er.gH]: null == H }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: er.lO,
                                  children: (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: $ ? "sm" : "md",
                                      text: E < 175 ? ea.intl.string(ea.t.I6JG46) : ea.intl.string(ea.t["7Xq/nV"]),
                                  }),
                              }),
                              U
                                  ? (0, i.jsx)("div", {
                                        className: r()(er.lO, er.EU),
                                        children: (0, i.jsx)(o.m, {
                                            text: ea.intl.string(ea.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: $ ? "sm" : "md",
                                                icon: u.v,
                                                "aria-label": ea.intl.string(ea.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, f.A9)(t.stream, { forceMultiple: !0 });
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
