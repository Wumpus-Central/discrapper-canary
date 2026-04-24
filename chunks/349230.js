n.d(t, { A: () => iu });
var i,
    a,
    r = n(627968),
    s = n(442433),
    l = n(763827),
    o = n(1193),
    d = n(589051),
    c = n(308726),
    u = n(64700),
    h = n(503698),
    _ = n.n(h),
    m = n(812729),
    g = n.n(m),
    f = n(419354),
    p = n(866323),
    x = n(939249),
    A = n(834730),
    S = n(259788),
    I = n(302614),
    E = n(639198);
let v = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function b(e) {
    let { locked: t, pinned: n } = e,
        [i, a] = u.useState(0),
        [s, l] = u.useState(0),
        [o, d] = u.useState(0),
        c = u.useRef(0),
        [h, m] = u.useState(0),
        { timeToLiveMs: b, reappearTimeMs: C } = S.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            g(),
        ),
        y = { timeToLiveMs: b, reappearTimeMs: C },
        T = u.useRef(y);
    u.useEffect(() => {
        T.current = y;
    }),
        u.useEffect(
            () => (
                (c.current = setInterval(() => {
                    let e = Date.now();
                    l(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = T.current.timeToLiveMs,
                                a = i + T.current.reappearTimeMs;
                            return n > i ? t + a : t;
                        });
                }, 100)),
                () => {
                    clearInterval(c.current);
                }
            ),
            [],
        );
    let w = () => {
            a(Date.now()), m((e) => e + 1);
        },
        j = i > 0 && s - i < 1e3,
        N = (0, p.p)(o > 0 && o < s && s - o < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: v,
        }),
        [R, M] = u.useState(!1);
    if (
        (u.useEffect(() => {
            h > 10 && M(!0);
        }, [h]),
        R)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: N(
                  (e, t) =>
                      t &&
                      (0, r.jsx)(f.animated.div, {
                          style: e,
                          className: E.r2,
                          children: (0, r.jsx)(I.A, {
                              className: _()(E.VC, j && E.Nd),
                              children: (0, r.jsx)(x.D, {
                                  onClick: w,
                                  className: E.vk,
                                  children: (0, r.jsxs)(A.E, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", h, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
var C = n(149741),
    y = n(17928),
    T = n(183623),
    w = n(684013),
    j = n(964486),
    N = n(313961),
    R = n(652896),
    M = n(567249),
    k = n(616356),
    O = n(495544),
    L = n(734057),
    P = n(38502),
    D = n(309010),
    z = n(41984),
    V = n(412477),
    G = n(475743),
    U = n(256415),
    F = n(810412),
    H = n(702841),
    W = n(205693),
    Z = n(990078),
    Y = n(358618),
    B = n(983851),
    X = n(622631),
    q = n(365199),
    K = n(890856),
    Q = n(827343),
    $ = n(391973),
    J = n(401843),
    ee = n(520698),
    et = n(164617),
    en = n(402216),
    ei = n(607407),
    ea = n(534400),
    er = n(267102),
    es = n(51092),
    el = n(434087),
    eo = n(110234),
    ed = n(969341),
    ec = n(287809),
    eu = n(562153),
    eh = n(761661),
    e_ = n(652215),
    em = n(985018),
    eg = n(614715);
function ef(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, H.bG)([ed.Ay], () => {
            let e = (0, ee.A)(t.type);
            return ed.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        a = (0, H.bG)([O.default], () => O.default.getId()),
        { hasVideo: s } = (0, eo.A)(t, a),
        l = i && s,
        o = u.useCallback(() => {
            Q.A.toggleLocalMute(n, W.x.STREAM);
        }, [n]);
    return (0, r.jsx)(Z.m, {
        text: l ? em.intl.string(em.t.YqAjXy) : em.intl.string(em.t.w4m945),
        children: (0, r.jsx)(x.D, {
            className: eg.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, F.YX)(e_.uss.GO_LIVE, {
                        type: F.Z5.AUDIO,
                        value: l ? F.IP.ENABLED : F.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    o();
            },
            children: l
                ? (0, r.jsx)(Y._, { size: "sm", color: "currentColor" })
                : (0, r.jsx)(B.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function ep(e, t) {
    return (i) => {
        (0, F.YX)(e_.uss.GO_LIVE, { type: F.Z5.GO_LIVE, value: F.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, s.L3)(i, async () => {
                let { default: i } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => (0, r.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function ex(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        a = (0, er.Us)(),
        s = n.user,
        l = (0, H.bG)([ec.default], () => ec.default.getUser(s.id) ?? s, [s]),
        o = t ? em.intl.string(em.t.tLxK4l) : em.intl.string(em.t.E5RDnK);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: _()(eg.MI, { [eg.te]: t }) }),
            !t &&
                (0, r.jsx)("div", {
                    className: eg.TP,
                    children: (0, r.jsx)(Z.m, {
                        text: o,
                        children: (0, r.jsxs)(x.D, {
                            className: eg.kx,
                            onClick: () => {
                                (0, J.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    i(),
                                    (0, F.YX)(e_.uss.GO_LIVE, {
                                        type: F.Z5.GO_LIVE,
                                        value: F.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: em.intl.string(em.t.I6JG46),
                                }),
                                (0, r.jsx)(X.v, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: eg.ne,
                children: [
                    (0, r.jsx)("div", {
                        className: eg.fL,
                        children: (0, r.jsxs)("div", {
                            className: eg.K8,
                            children: [
                                (0, r.jsx)(A.E, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: eg.yb,
                                    children: eu.Ay.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, r.jsx)(ea.Ay, {
                                    primaryGuild: l.primaryGuild,
                                    userId: l.id,
                                    containerClassName: eg.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, F.YX)(e_.uss.GO_LIVE, {
                                            type: F.Z5.GO_LIVE,
                                            value: F.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: eg.FO,
                        children:
                            t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(ef, { participant: n }),
                                    (0, r.jsx)(Z.m, {
                                        text: em.intl.string(em.t["3D5yo/"]),
                                        children: (0, r.jsx)(x.D, {
                                            className: eg.IF,
                                            onClick: ep(n, a),
                                            children: (0, r.jsx)(q.j, { size: "sm", color: "currentColor" }),
                                        }),
                                    }),
                                ],
                            }),
                    }),
                ],
            }),
        ],
    });
}
let eA = new Set([e_.XYD.ENDED, e_.XYD.FAILED, e_.XYD.PAUSED]),
    eS = u.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: a, pinned: s } = e,
            l = (0, H.bG)([k.A], () => k.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, er.Us)(),
            d = null != l && eA.has(l.state),
            c = null != l,
            u = (0, eh.dh)(t.stream),
            h = (0, eh.XG)(t.stream);
        return (!c && i) || d
            ? null
            : (0, r.jsxs)("div", {
                  className: eg.Vs,
                  children: [
                      c && !i && (0, r.jsx)(en.Ay, { size: en.Ay.Sizes.SMALL, className: eg.Ok }),
                      c
                          ? (0, r.jsx)("div", {
                                className: eg.X$,
                                children: (0, r.jsx)(K.s, {
                                    "aria-label": em.intl.formatToPlainString(em.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: ep(t, o),
                                    className: eg.X$,
                                    style: { transform: `scale(${u})` },
                                    children: (0, r.jsx)(el.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? es.$.CONTAIN,
                                        popoutType: et.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: i ? eg.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, r.jsx)("div", {
                                className: eg.Rh,
                                children: (0, r.jsx)(ei.A, { noText: !0, className: eg.HL, stream: t.stream }),
                            }),
                      i
                          ? null
                          : (0, r.jsx)(ex, {
                                participant: t,
                                hasActiveStream: c,
                                onEnablePin: () => {
                                    s || (0, $.v0)(a);
                                },
                            }),
                  ],
              });
    });
var eI = n(765671),
    eE = n(531685),
    ev = n(365971),
    eb = n(129537);
let eC = 9 / 16,
    ey = 16 / 9;
function eT(e, t) {
    return t * (Math.max(1, e) - 1);
}
function ew(e) {
    let { width: t, height: n, containerOffset: i, gapSize: a, tileCount: r, isVertical: s } = e,
        l = s ? t : t - eT(r, a),
        o = s ? n - eT(r, a) : n;
    return { verticalRatio: (o - i) / (l - i), horizontalRatio: (l - i) / (o - i) };
}
function ej(e, t, n) {
    let { containerOffset: i, gapSize: a, tileCount: r, isVertical: s } = t,
        { maxWidth: l, maxHeight: o } = n,
        d = Math.max(1, r),
        c = e.width > l,
        u = e.height > o;
    if (!c && !u) return e;
    let h = eT(r, a),
        { verticalRatio: _, horizontalRatio: m } = ew({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: a,
            tileCount: d,
            isVertical: s,
        }),
        g = e.width - i,
        f = e.height - i,
        p = l - i,
        x = o - i;
    return (
        s ? ((x -= h), (f -= h)) : ((p -= h), (g -= h)),
        c && u && (e.width > e.height ? (f = (g = p) * _) : (g = (f = x) * m), (c = g > p), (u = f > x)),
        c && (f = (g = p) * _),
        u && (g = (f = x) * m),
        s ? (f += eT(r, a)) : (g += eT(r, a)),
        { width: g + i, height: f + i }
    );
}
var eN = n(897720),
    eR = n(545807);
let eM = (e, t) => 2 * e + 2 * t,
    ek = (e) => {
        let { width: t, height: n } = e;
        return { fixed: !0, width: t, height: n };
    };
function eO(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        r = { width: a, height: a * eC },
        s = Math.max(1, e),
        l = eT(e, t),
        o = eM(n, t);
    return i
        ? { width: r.width + o, height: r.height * s + l + o }
        : { width: r.width * s + l + o, height: r.height + o };
}
function eL(e, t, n, i) {
    let a = eM(e, t);
    return i ? n.width - a : (n.height - a) * ey;
}
function eP(e) {
    return e.height > e.width;
}
let eD = 180 / 1080;
function ez(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: a, previousContainerSize: r, widgetMinMaxSizes: s } = e,
        l = t === eN.IV.VERTICAL,
        o = eL(i, a, r, l);
    return ej(
        eO(n, a, i, l, o),
        { containerOffset: eM(i, a), gapSize: a, tileCount: n, isVertical: l },
        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
    );
}
function eV(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: a, minSize: r, containerSpecs: s, defaultSize: l, ...o } = e,
        d = (e) =>
            eG({
                operation: eb.P.RESIZE_NORTH,
                computedSize: e,
                originSize: e,
                borderWidth: i,
                padding: a,
                containerSpecs: s,
                ...o,
            }),
        c = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(r) } };
    null != l && (c.defaultSize = { ...d(l) }), (0, $.Ju)({ ...c });
}
let eG = (e) => {
    let t,
        n,
        i,
        { operation: a, computedSize: r, originSize: s, borderWidth: l, padding: o, containerSpecs: d } = e,
        c = eM(l, o),
        u = Math.max(1, s.width),
        h = Math.max(1, s.height),
        _ = { width: u, height: h },
        m = eP(_),
        g = ((t = eP(_)), (n = eL(l, o, _, t)), (i = n * eC), t ? Math.floor(_.height / i) : Math.floor(_.width / n)),
        f = ew({ width: u, height: h, containerOffset: c, gapSize: o, tileCount: g, isVertical: m }),
        p = eT(g, o);
    return ej(
        (() => {
            var e, t;
            switch (a) {
                case eb.P.RESIZE_NORTH:
                case eb.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: r.height,
                        width: ((e = r.height), (n = ((m ? e - p : e) - c) * f.horizontalRatio), m || (n += p), n + c),
                    };
                default:
                    let i;
                    return {
                        width: r.width,
                        height: ((t = r.width), (i = ((m ? t : t - p) - c) * f.verticalRatio), m && (i += p), i + c),
                    };
            }
        })(),
        { containerOffset: c, gapSize: o, tileCount: g, isVertical: m },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eU = n(220959);
let eF = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    eH = u.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: a,
                locked: s,
                activeStreams: l,
                streamParticipants: o,
                participantsVersion: d,
                pinned: c,
                padding: h,
            } = e,
            m = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: s,
                widgetId: t,
                pinned: c,
            })),
            g = (0, G.A)(n),
            x = (0, G.A)(s),
            A = a === eN.IV.VERTICAL,
            S = s || x !== s || g !== n,
            I = u.useMemo(() => {
                let e = 0,
                    t = 0;
                return A
                    ? m.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? h : 0)) - t.height, x: 0 }))
                    : m.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? h : 0)) - e.width, y: 0 }));
            }, [m, h, A]),
            E = u.useMemo(
                () => (0 === I.length ? 256 * eC : I.reduce((e, t) => e + t.height, 0) + (A ? h * (I.length - 1) : 0)),
                [I, A, h],
            ),
            v = u.useMemo(
                () => (0 === I.length ? 256 : I.reduce((e, t) => e + t.width, 0) + (A ? 0 : h * (I.length - 1))),
                [I, A, h],
            ),
            b = (0, p.p)(
                I,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: a } = e;
                        return { x: t, y: n, width: i, height: a, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: a } = e;
                        return { x: t, y: n, width: i, height: a };
                    },
                    config: eF,
                    trail: 100 * !S,
                },
                S ? "animate-never" : "respect-motion-settings",
            ),
            C = (0, F.Dk)(() => new Set(o.map((e) => e.user.id)), [o, d]),
            y = (0, F.Dk)(() => new Set(o.filter((e) => l.has((0, R._z)(e.stream))).map((e) => e.user.id)), [o, l, d]);
        return (
            u.useEffect(() => {
                0 !== C.size &&
                    (0, F.Y)(e_.uss.GO_LIVE, {
                        locked: U.default.isInstanceLocked(),
                        shownUserIds: Array.from(C),
                        liveUserIds: Array.from(y),
                        contentInventoryIds: [],
                    });
            }, [C, y]),
            (0, r.jsx)("div", {
                className: _()({ [eU.UT]: !0, [eU.Vd]: A, [eU.xM]: !A }),
                style: A ? { height: E } : { width: v },
                children: b((e, t, a, s) =>
                    (0, r.jsx)(f.animated.div, {
                        className: eU.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: m.length - s }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: i, widgetId: a, pinned: s } = e;
                            return (0, r.jsx)("div", {
                                className: eU.iA,
                                children: (0, r.jsx)(
                                    eS,
                                    { participant: t, width: n, locked: i, widgetId: a, pinned: s },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
var eW = n(392164),
    eZ = n(674243);
function eY(e) {
    var t, n;
    let i,
        a,
        s,
        {
            id: l,
            widget: o,
            size: d,
            locked: c,
            padding: h,
            borderWidth: _,
            opacity: m,
            horizontal: g,
            pinned: f,
            anchorTop: p,
            anchorLeft: x,
            showEmpty: A = !0,
        } = e,
        S = g ? eN.IV.HORIZONTAL : eN.IV.VERTICAL,
        I = S === eN.IV.VERTICAL,
        E = (0, y.bG)([P.A], () => {
            let e = P.A.getWidget(l);
            return !!(0, eN.dO)(e) && !c && (e.meta.showAllStreams ?? !0);
        }, [l, c]),
        v = (0, y.bG)([D.A], () => D.A.getVoiceChannelId()),
        b = (0, y.bG)([L.A], () => L.A.getChannel(v)),
        C = (0, y.bG)([O.default], () => O.default.getId()),
        {
            streamParticipants: U,
            activeStreams: F,
            participantsVersion: H,
        } = ((t = (p && I) || (x && g)),
        (n = (!p && I) || (!x && g)),
        (i = (0, y.yK)([k.A], () => (null == v ? [] : k.A.getAllActiveStreamsForChannel(v)))),
        (a = u.useMemo(() => new Set(i.map((e) => (0, R._z)(e))), [i])),
        (s = (0, y.bG)([N.A], () => (null == v ? -1 : N.A.getParticipantsVersion(v)))),
        {
            streamParticipants: (0, y.yK)([N.A, k.A], () => {
                if (null == v) return [];
                function e(e) {
                    return a.has((0, R._z)(e.stream));
                }
                let i = N.A.getStreamParticipants(v).filter((t) => {
                    if (t.user.id === C) return !1;
                    let n = k.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && eA.has(n.state)) && (!!E || e(t));
                });
                return (
                    i.sort((i, a) => {
                        if (t) {
                            if (e(i) && !e(a)) return -1;
                            if (!e(i) && e(a)) return 1;
                        } else if (n) {
                            if (e(i) && !e(a)) return 1;
                            if (!e(i) && e(a)) return -1;
                        }
                        return i.user.username.localeCompare(a.user.username);
                    }),
                    i
                );
            }, [v, a, C, E, t, n]),
            activeStreams: a,
            participantsVersion: s,
        }),
        W = U.length,
        Z = (0, y.bG)([M.A], () => M.A.getWindowState(eW.f), []),
        {
            tileWidth: Y,
            tileHeight: B,
            widgetWidth: X,
            widgetHeight: q,
            containerRef: K,
            containerMinMaxSizes: Q,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: a, widgetSize: r } = e,
                { width: s, height: l } = {
                    width: "number" == typeof r.width ? r.width : 256,
                    height: "number" == typeof r.height ? r.height : 256 * eC,
                },
                { width: o = s, height: d = l, ref: c } = (0, eI.Ay)(),
                u = (0, eR.A)(),
                h = (0, ev.Q2)(u),
                _ = (0, y.bG)([eE.A], () => eE.A.windowSize(h), [h]),
                m = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: a,
                            windowHeight: r,
                            isVertical: s,
                        } = e,
                        l = eO(t, n, i, s),
                        o = { maxX: a ?? (2 * l.width) / 0.75, maxY: r ?? (2 * l.height) / 0.75, minX: 0, minY: 0 },
                        d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        c = (r ?? 0) * eD;
                    return (
                        (c = Math.max(l.height, c)),
                        {
                            minSize: l,
                            defaultSize: eO(t, n, i, s, (c = Math.min(d.height, c)) * ey),
                            maxSize: d,
                            containerSpecs: o,
                        }
                    );
                })({
                    tileCount: t,
                    padding: n,
                    borderWidth: i,
                    windowWidth: _.width,
                    windowHeight: _.height,
                    isVertical: a,
                }),
                g = eM(i, n),
                f = eL(i, n, { width: o + g, height: d + g }, a),
                p = f * eC;
            return {
                tileWidth: f,
                tileHeight: p,
                widgetWidth: s,
                widgetHeight: l,
                containerRef: c,
                containerMinMaxSizes: m,
            };
        })({ tileCount: W, padding: h, borderWidth: _, isVertical: I, widgetSize: d }),
        $ = {
            id: l,
            widget: o,
            layout: S,
            participants: U.length,
            padding: h,
            borderWidth: _,
            widgetMinMaxSizes: Q,
            containerSize: { width: X, height: q },
            orientedPosition: { top: 0, left: 0, bottom: Z?.height ?? q, right: Z?.width ?? X },
            locked: c,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            a = u.useRef(i);
        a.current = i;
        let r = (0, G.A)(n),
            s = t.length,
            l = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        (0, j.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: r,
                widget: l,
                borderWidth: o,
                locked: d,
                ...c
            } = a.current;
            null == l ||
                eV({
                    widgetId: e,
                    size: ek(
                        ez({
                            layout: i,
                            tileCount: Math.max(1, s),
                            borderWidth: o,
                            padding: r,
                            previousContainerSize: t.defaultSize,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    defaultSize: t.defaultSize,
                    minSize: ek(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: r,
                    borderWidth: o,
                    widget: l,
                    ...c,
                });
        }),
            u.useLayoutEffect(() => {
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: n,
                    layout: i,
                    padding: r,
                    widget: l,
                    borderWidth: o,
                    locked: d,
                    ...c
                } = a.current;
                if (null != l) {
                    if (0 === s) {
                        if (d) return;
                        eV({
                            widgetId: e,
                            size: ek(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: ek(t.minSize),
                            padding: r,
                            borderWidth: o,
                            widget: l,
                            containerSpecs: t.containerSpecs,
                            ...c,
                        });
                        return;
                    }
                    eV({
                        widgetId: e,
                        size: ek(
                            ez({
                                layout: i,
                                tileCount: s,
                                borderWidth: o,
                                padding: r,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: ek(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: r,
                        borderWidth: o,
                        widget: l,
                        ...c,
                    });
                }
            }, [s, l]),
            u.useLayoutEffect(() => {
                if (a.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: s,
                    borderWidth: l,
                    participants: o,
                    widget: d,
                    ...c
                } = a.current;
                if (null == d || r === n) return;
                let u = (function (e) {
                    let {
                            oldLayout: t,
                            newLayout: n,
                            tileCount: i,
                            borderWidth: a,
                            padding: r,
                            previousContainerSize: s,
                            widgetMinMaxSizes: l,
                        } = e,
                        o = eL(a, r, s, t === eN.IV.VERTICAL);
                    return ej(
                        eO(i, r, a, n === eN.IV.VERTICAL, o),
                        { containerOffset: eM(a, r), gapSize: r, tileCount: i, isVertical: n === eN.IV.VERTICAL },
                        { maxWidth: l.maxSize.width, maxHeight: l.maxSize.height },
                    );
                })({
                    oldLayout: r ?? n,
                    newLayout: n,
                    tileCount: o,
                    borderWidth: l,
                    padding: s,
                    previousContainerSize: i,
                    widgetMinMaxSizes: t,
                });
                eV({
                    widgetId: e,
                    size: ek(u),
                    minSize: ek(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: s,
                    borderWidth: l,
                    widget: d,
                    ...c,
                });
            }, [n, r]),
            (0, j.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...r } = a.current;
                null != n &&
                    eV({
                        widgetId: e,
                        size: ek(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: ek(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...r,
                    });
            });
    })({ id: l, streamParticipants: U, layout: S, widgetLayoutSpecs: $ });
    let J = null == b || (0 === F.size && c) || (0 === W && !c);
    return (u.useEffect(() => {
        w.A.setGpuBoostRequested(z.y7.OVERLAY_VIDEO_STREAM_RENDERING, !J);
    }, [J]),
    (0, j.Ay)(() => () => {
        w.A.setGpuBoostRequested(z.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (J || !f) && c)
        ? null
        : J && !c
          ? A
              ? c
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: em.intl.string(em.t["T6+rXy"]), icon: T.F, absolute: !0 })
              : null
          : (0, r.jsx)("div", {
                className: eZ.u,
                style: { opacity: m },
                ref: K,
                children: (0, r.jsx)(eH, {
                    widgetId: l,
                    tileWidth: Y,
                    tileHeight: B,
                    locked: c,
                    layout: S,
                    activeStreams: F,
                    streamParticipants: U,
                    participantsVersion: H,
                    pinned: f,
                    padding: h,
                }),
            });
}
var eB = n(243721),
    eX = n(821609),
    eq = n(706712),
    eK = n(366853),
    eQ = n(321090),
    e$ = n(548934);
function eJ(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        a = (0, y.bG)([eK.A], () => eK.A.getSocket()),
        s = (0, y.bG)([eQ.A], () => eQ.A.isGPUBoosted());
    (0, eq.ZX)();
    let l = (0, y.bG)([M.A], () => M.A.getWindow(eW.f)),
        [o, d] = (0, eq.DQ)(a),
        {
            currentFPS: c,
            averageFrameTime: h,
            timeSinceLastDrop: m,
            onResetFrameData: g,
            droppedFramesRef: f,
            renderedFrameCount: p,
            bufferFramecountRef: x,
            frameCheckerEffect: S,
        } = (0, eq.Dj)(!0, o, !0),
        [E, v, b] = (0, eq.F5)(a),
        [C, T] = (0, eq.km)(E, S, l),
        w = performance.now() - d.current < eq.Jc,
        N = v(h, x.current);
    (0, j.Ay)(
        () => (
            C(),
            () => {
                T();
            }
        ),
    );
    let R = u.useCallback(() => {
            g(), b(), C();
        }, [g, b, C]),
        [k, O] = u.useState(!0),
        [L, P] = u.useState(!0),
        [D, z] = u.useState(!0),
        [V, G] = u.useState(!0),
        [U, F] = u.useState(!0);
    return t && !n
        ? null
        : (0, r.jsxs)("div", {
              className: _()(e$.st, !i && e$.Hk),
              children: [
                  (k || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eB.d, { checked: k, onChange: (e) => O(e) }),
                                  }),
                              (0, r.jsxs)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e$.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, r.jsx)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              c < 30
                                                  ? "text-feedback-critical"
                                                  : c < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: c.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (L || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eB.d, { checked: L, onChange: (e) => P(e) }),
                                  }),
                              (0, r.jsxs)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e$.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, r.jsxs)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: h > 1.1 * eq.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [h.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (D || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eB.d, { checked: D, onChange: (e) => z(e) }),
                                  }),
                              (0, r.jsxs)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e$.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, r.jsx)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              m < 2
                                                  ? "text-feedback-critical"
                                                  : m < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: f.current,
                                      }),
                                      (0, r.jsxs)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: e$.af,
                                          children: ["(", ((f.current / p.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (V || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eB.d, { checked: V, onChange: (e) => G(e) }),
                                  }),
                              (0, r.jsxs)(A.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: e$.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, r.jsx)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: p.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eB.d, { checked: U, onChange: (e) => F(e) }),
                                  }),
                              (0, r.jsx)(Z.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, r.jsx)("div", {
                                      children: (0, r.jsxs)(A.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: e$.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, r.jsxs)(A.E, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: N > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [N.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  w &&
                      (0, r.jsx)(Z.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, r.jsx)("span", {
                              children: (0, r.jsx)(A.E, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  s &&
                      (0, r.jsx)(A.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, r.jsx)("div", {
                          className: e$.m8,
                          children: (0, r.jsx)(I.A, {
                              children: (0, r.jsx)(eX.$, { variant: "primary", text: "Reset Frame Data", onClick: R }),
                          }),
                      }),
              ],
          });
}
var e0 = n(417098),
    e1 = n(55619),
    e2 = n(351906),
    e4 = n(377802),
    e9 = n(348858),
    e8 = n(523875),
    e5 = n(416696),
    e7 = n(621956),
    e3 = n(446080),
    e6 = n(922016),
    te = n(615675),
    tt = n(978940),
    tn = n(956793),
    ti = n(688810),
    ta = n(617354),
    tr = n(980923),
    ts = n(206018),
    tl = n(329072),
    to = n(18235),
    td = n(183184),
    tc = n(47167),
    tu = n(713654),
    th = n(880144),
    t_ = n(338771),
    tm = n(548118),
    tg = n(999751),
    tf = n(209932),
    tp = n(126970),
    tx = n(167579),
    tA = n(704877),
    tS = n(173660),
    tI = n(675991),
    tE = n(848362),
    tv = n(141157),
    tb = n(222692),
    tC = n(709562),
    ty = n(71393),
    tT = n(977997),
    tw = n(823901),
    tj = n(489277),
    tN = n(243612),
    tR = n(296841);
function tM(e) {
    let t = u.useRef(null);
    return (
        u.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function tk(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: a,
        iconColor: s,
        tooltip: l,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: c,
        popoutOpen: u,
        onClick: h,
        popoutDisabled: _,
        onPopoutClick: m,
        onMouseEnter: g,
        onMouseLeave: f,
        onContextMenu: p,
        isTrayButton: x,
        ...A
    } = e;
    return (0, r.jsx)(tC.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: tR.x6,
        disabled: i,
        popoutOpen: u,
        popoutDisabled: _,
        label: l,
        isTrayButton: x,
        onMouseEnter: (e) => {
            g?.(e);
        },
        onMouseLeave: (e) => {
            f?.(e);
        },
        iconComponent: a,
        iconColor: s,
        caretColor: c,
        isActive: n,
        onContextMenu: p,
        onPopoutClick: m,
        "aria-label": A["aria-label"],
    });
}
function tO(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        { suppress: a, selfMute: s, mute: l } = (0, tS.A)(t),
        o = s || l || a,
        d = (0, tr.A)(s, l, a, !1),
        { Component: c, play: h, events: _ } = (0, e8.L)(o ? "unmute" : "mute");
    u.useEffect(() => () => h(), [h, o]);
    let m = tM(n),
        g = (e) => (t) => {
            e(t), (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.MICROPHONE, value: F.IP.SETTINGS_OPENED });
        };
    return (0, r.jsx)(e6.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = m(t);
            return (0, r.jsx)(ts.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: e_.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, r.jsx)(tk, {
                ref: i,
                iconComponent: c,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    (0, td.A)(l, a, e_.JJy.OVERLAY),
                        (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                            type: F.Z5.MICROPHONE,
                            value: o ? F.IP.ENABLED : F.IP.DISABLED,
                            userId: O.default.getId(),
                        });
                },
                onPopoutClick: g(n),
                onContextMenu: g(n),
                popoutOpen: s,
                onMouseEnter: () => {
                    _.onMouseEnter();
                },
                onMouseLeave: () => {
                    _.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function tL(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        { selfDeaf: a, deaf: s } = (0, tx.A)(t),
        l = a || s,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: c, onMouseLeave: h },
        } = (0, e9.I)(l ? "undeafen" : "deafen"),
        _ = s ? te.T : o;
    u.useEffect(() => () => d(), [l, d]);
    let m = () => {
            (0, to.A)(s, e_.JJy.OVERLAY),
                (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                    type: F.Z5.AUDIO,
                    value: s ? F.IP.ENABLED : F.IP.DISABLED,
                    userId: O.default.getId(),
                });
        },
        g = (e) => (t) => {
            e(t), (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.AUDIO, value: F.IP.SETTINGS_OPENED });
        },
        f = tM(n);
    return (0, r.jsx)(e6.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ts.A, {
                onClose: f(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: e_.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, r.jsx)(tk, {
                ref: i,
                iconComponent: _,
                tooltip: (0, ta.A)(a, s, !1),
                isActive: l,
                highlightedColor: "red",
                onClick: m,
                onContextMenu: g(n),
                onMouseEnter: c,
                onMouseLeave: h,
                onPopoutClick: g(n),
                popoutOpen: o,
                isTrayButton: !0,
            });
        },
    });
}
function tP(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        a = (0, y.bG)([ed.Ay], () => ed.Ay.isVideoEnabled()),
        s = (0, y.bG)([ed.Ay], () => Object.values(ed.Ay.getVideoDevices())[0]),
        l = s?.disabled ?? !0,
        o = !1 === l,
        d = (0, tA.A)(t),
        c = (e) => {
            Q.A.setVideoEnabled(e);
        },
        h = (e) => (t) => {
            e(t), (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED });
        },
        _ = () => {
            l ? (o ? c(!0) : (0, tb.A)()) : c(!a),
                (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                    type: F.Z5.CAMERA,
                    value: a ? F.IP.DISABLED : F.IP.ENABLED,
                    userId: O.default.getId(),
                });
        },
        {
            Component: m,
            play: g,
            events: { onMouseEnter: f, onMouseLeave: p },
        } = (0, e3.K)(a ? "disable" : "enable"),
        x = null != t ? (0, tI.Q)({ enabled: a, cameraUnavailable: l, hasPermission: d, channel: t }) : void 0;
    u.useEffect(() => () => g(), [a, g]);
    let A = tM(n),
        S = null == t || !d;
    return (0, r.jsx)(e6.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tl.A, { onClose: A(t), appContext: e_.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, r.jsx)(tk, {
                ref: i,
                iconComponent: m,
                tooltip: x,
                onClick: _,
                isActive: a,
                highlightedColor: "green",
                onPopoutClick: h(n),
                popoutOpen: s,
                onContextMenu: h(n),
                onMouseEnter: f,
                onMouseLeave: p,
                disabled: S,
                isTrayButton: !0,
            });
        },
    });
}
function tD(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        a = u.useRef(null),
        s = (0, y.bG)([ec.default], () => ec.default.getCurrentUser()),
        l = (0, tA.A)(n),
        o = (0, y.cf)([ed.Ay], () => (0, th.A)(ed.Ay)),
        d = (0, y.bG)([k.A], () => k.A.getCurrentUserActiveStream()),
        c = (0, y.bG)([tj.A], () => tj.A.getTargetPID()),
        h = (0, tw.y)({ pid: c, allowOneClickGoLive: !0, analyticsLocation: e_.ThZ.UNLOCKED_OVERLAY }),
        _ = () => {
            h(),
                (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.GO_LIVE, value: F.IP.ENABLED, userId: O.default.getId() });
        },
        m = null != d;
    if (m) t = em.intl.string(em.t.S5anIc);
    else if (null != n) {
        let e = (0, tN.qv)();
        t = l
            ? null != e
                ? em.intl.format(em.t.AB5gTy, { game: e.name })
                : em.intl.string(em.t.FeUKeA)
            : em.intl.string(em.t.uQn9B8);
    }
    let g = () => {
            if (m)
                return (
                    (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                        type: F.Z5.GO_LIVE,
                        value: F.IP.DISABLED,
                        userId: O.default.getId(),
                    }),
                    (0, t_.A)(d, !1)
                );
            _();
        },
        f = (e) => (t) => {
            e(t), (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.SCREEN_SHARE, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: p,
            events: { onMouseEnter: x, onMouseLeave: A },
            play: S,
        } = (0, e5.c)(m ? "disable" : "enable");
    u.useEffect(() => () => S(), [m, S]);
    let I = tM(i);
    return (0, r.jsx)(e6.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tE.A, {
                channel: n,
                currentUser: s,
                activeStreams: m ? [d] : [],
                handleGoLive: _,
                onClose: I(t),
                appContext: e_.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: s } = n;
            return (0, r.jsx)(tk, {
                ref: a,
                iconComponent: p,
                tooltip: t,
                "aria-label": em.intl.string(em.t.FeUKeA),
                isActive: m,
                highlightedColor: "green",
                onClick: g,
                popoutOpen: s,
                popoutDisabled: !m,
                onPopoutClick: f(i),
                onContextMenu: f(i),
                onMouseEnter: x,
                onMouseLeave: A,
                disabled: !o || !l,
                isTrayButton: !0,
            });
        },
    });
}
function tz(e) {
    let { voiceChannel: t, locked: i } = e,
        a = u.useRef(null),
        l = t?.getGuildId() ?? null,
        { mute: o, suppress: d } = (0, tS.A)(t),
        c = (0, y.bG)([ed.Ay], () => ed.Ay.isDeaf()),
        h = null == t || o || d || c,
        { analyticsLocations: _ } = (0, ti.Ay)();
    function m(e) {
        null != l &&
            ((0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.SOUNDBOARD, value: F.IP.SETTINGS_OPENED }),
            (0, s.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: _, guildId: l, ...t });
            }));
    }
    let {
            Component: g,
            events: { onClick: f, onMouseEnter: p, onMouseLeave: x },
        } = (0, e7.E)(),
        A = tM(i),
        S = (0, y.bG)([tf.A, O.default], () => tf.A.isUserPlayingSounds(O.default.getId()), []) ? "green" : void 0;
    return (0, r.jsx)(e6.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return h || null == t
                ? (0, r.jsx)(r.Fragment, {})
                : (0, r.jsx)(tp.A, { guildId: l, channel: t, onClose: A(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tk, {
                ref: a,
                iconComponent: g,
                tooltip: o
                    ? em.intl.string(em.t["Ox4/zU"])
                    : d
                      ? em.intl.string(em.t["+YBKYI"])
                      : c
                        ? em.intl.string(em.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    f(),
                        (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                            type: F.Z5.SOUNDBOARD,
                            value: F.IP.PANEL_OPENED,
                            userId: O.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: m,
                onMouseEnter: p,
                onMouseLeave: x,
                isActive: i,
                popoutOpen: i,
                disabled: h,
                isTrayButton: !0,
            });
        },
    });
}
function tV(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        a = (0, y.bG)([D.A], () => D.A.getVoiceChannelId() === t?.id),
        s = () => {
            (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                type: F.Z5.CALL_BUTTON,
                value: F.IP.DISABLED,
                userId: O.default.getId(),
            }),
                a && tn.default.disconnect();
        },
        l = (e, t) => {
            tn.default.selectVoiceChannel(e),
                (0, F.YX)(e_.uss.QUICK_ACTIONS, {
                    type: F.Z5.CALL_BUTTON,
                    value: F.IP.ENABLED,
                    userId: O.default.getId(),
                    secondaryValue: t,
                });
        },
        [o, d] = u.useTransition(),
        c = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, F.YX)(e_.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: h,
            events: { onMouseEnter: _, onMouseLeave: m },
        } = (0, e4.O)(),
        g = tM(n),
        f = (0, tv.qZ)(),
        p = a ? h : tt._;
    return (0, r.jsx)(e6.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(tv.Ay, {
                allAvailableChannelRows: f,
                currentVoiceChannel: t,
                onClose: g(n),
                onSelect: l,
            });
        },
        align: "center",
        position: "top",
        animation: e6.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tk, {
                ref: i,
                iconComponent: p,
                tooltip: a ? em.intl.string(em.t["6vrfgt"]) : em.intl.string(em.t.S0W8Z5),
                onClick: a ? s : c(n),
                defaultColor: a ? "disconnect" : void 0,
                onMouseEnter: _,
                onMouseLeave: m,
                onContextMenu: c(n),
                isActive: l,
                onPopoutClick: a ? c(n) : void 0,
                popoutOpen: l,
                isTrayButton: !0,
            });
        },
    });
}
function tG(e) {
    let { voiceChannel: t } = e,
        n = (0, y.bG)([ty.A], () => ty.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: tR.rK }),
                    (0, r.jsxs)("div", {
                        className: tR._C,
                        children: [
                            (0, r.jsx)(tm.Ay, { guild: n, size: tm.Ay.Sizes.SMOL, className: tR.$f }),
                            (0, r.jsx)(A.E, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: tR.J5,
                                children: n.name,
                            }),
                        ],
                    }),
                ],
            });
        default:
            return null;
    }
}
function tU(e) {
    let { voiceChannel: t } = e,
        n = (0, tu.gU)(t),
        i = (0, tc.Ay)(t);
    return (0, r.jsxs)("div", {
        className: tR.Wh,
        children: [
            null != n &&
                (0, r.jsx)(A.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: tR.p,
                    children: (0, r.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, r.jsx)(A.E, { variant: "text-sm/medium", color: "text-muted", className: tR.HA, children: i }),
        ],
    });
}
function tF(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, y.cf)([l.A], () => ({ quality: l.A.getQuality(), state: l.A.getState(), lastPing: l.A.getLastPing() })),
        a = (0, y.bG)([tT.A], () => null != n && tT.A.hasVideo(n), [n]),
        s = (0, d.Mn)("VoiceConnectionStatus"),
        o = (0, y.bG)([e2.A], () => e2.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tg.A, { ...i, channelId: n, hasVideo: a, connectionStatusTextVariant: "text-sm/medium" }),
                !(s && o) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(tG, { voiceChannel: t }),
                            (0, r.jsx)("div", { className: tR.rK }),
                            (0, r.jsx)(tU, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
var tH = n(423005);
let tW = u.memo(function () {
    let e = (0, y.bG)([e2.A], () => e2.A.enabled),
        t = (0, d.Mn)("StreamerModeNotice");
    return e && t
        ? (0, r.jsxs)(e0.$T, {
              color: e0.Hv.STREAMER_MODE,
              className: tH.$X,
              children: [
                  (0, r.jsx)(A.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: em.intl.string(em.t.q9K7jp),
                  }),
                  (0, r.jsx)(e0.Z_, {
                      className: tH.lI,
                      onClick: () => e1.A.setEnabled(!1),
                      noticeType: e_.kqX.STREAMER_MODE,
                      children: em.intl.string(em.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function tZ(e) {
    let { locked: t } = e,
        n = (0, y.bG)([D.A], () => D.A.getVoiceChannelId()),
        i = (0, y.bG)([L.A], () => L.A.getChannel(n)),
        a = null != i;
    return (0, r.jsxs)("div", {
        className: _()({ [tH.KE]: !0, [tH.xt]: t }),
        children: [
            (0, r.jsx)(tW, {}),
            (0, r.jsxs)("div", {
                className: tH.Pm,
                children: [
                    (0, r.jsxs)("div", {
                        className: tH.qi,
                        children: [
                            (0, r.jsx)(tO, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tL, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tP, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tH.qi,
                        children: [
                            (0, r.jsx)(tD, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tz, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _()(tH.qi, a && tH.SV),
                        children: (0, r.jsx)(tV, { voiceChannel: i, locked: t }),
                    }),
                ],
            }),
            a && (0, r.jsx)("div", { className: tH.Pm, children: (0, r.jsx)(tF, { voiceChannel: i, locked: t }) }),
        ],
    });
}
var tY = n(534890),
    tB = n(364522),
    tX = n(994500);
function tq(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function tK(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var tQ = n(459192),
    t$ = n(408278),
    tJ = n(366605),
    t0 = n(780338),
    t1 = n(782603),
    t2 = n(241541),
    t4 = n(320448),
    t9 = n(661531),
    t8 = n(446576),
    t5 = n(789645),
    t7 = n(387755),
    t3 = n(945830),
    t6 = n(461678),
    ne = n(95550),
    nt = n(95701),
    nn = n(543465),
    ni = n(914853),
    na = n(220884),
    nr = n(145567),
    ns = n(778712),
    nl = n(290863),
    no = n(172491),
    nd = n(912156),
    nc = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nu(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? ns._3.SIZE_24 : ns._3.SIZE_40;
        case "guild":
            return 24 === e ? tm.Ay.Sizes.SMALLER : tm.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let nh = u.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: a = !1,
            size: s = 24,
            isTyping: l = !1,
            mentionCount: o = 0,
            isMentionLowImportance: d = !1,
        } = e,
        c = t?.isPrivate() ?? !1,
        u = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        _ = (0, y.bG)([nl.A], () => (null != h ? nl.A.getStatus(h) : null), [h]),
        m = (0, y.bG)([nl.A], () => null != h && nl.A.isMobileOnline(h), [h]);
    if (c || u)
        return (0, r.jsx)(no.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nu(s, "user"),
            status: _,
            isMobile: m,
            isTyping: l,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i) return (0, r.jsx)(tY.o, { size: nu(s, "default"), color: t9.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, r.jsx)(tm.Ay, { guild: i, size: nu(s, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === s ? nd.Q.MEDIUM_40 : nd.Q.TINY_24;
        return (0, r.jsx)(nd.A, { channel: t, guild: i, size: e, isTyping: l });
    }
});
var n_ = n(137177);
function nm(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, r.jsx)(n_.A, { game: t, size: n_.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var ng = n(429913),
    nf = n(34307),
    np = n(499214),
    nx = n(657956);
function nA(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nS(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: a } = e,
        s = u.useRef(null);
    return t?.id == null
        ? null
        : (0, r.jsx)(e6.Y, {
              targetElementRef: s,
              shouldShow: n,
              animation: e6.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: a,
              renderPopout: (e) =>
                  (0, r.jsx)(t3.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                              type: F.Z5.TEXT_CHAT,
                              value: F.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)("div", {
                      ref: s,
                      children: (0, r.jsx)(Z.m, {
                          text: em.intl.string(em.t["mp1N/2"]),
                          "aria-label": em.intl.string(em.t["mp1N/2"]),
                          children: (0, r.jsx)(t$.K, {
                              ...n,
                              icon: tJ.t,
                              "aria-label": em.intl.string(em.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: i,
                          }),
                      }),
                  });
              },
          });
}
function nI(e) {
    let { channel: t } = e,
        n = u.useRef(null),
        i = t?.id ?? null,
        a = t?.guild_id != null,
        [s, l] = (0, y.yK)(
            [nn.Ay],
            () =>
                a && null != i && null != t
                    ? [nn.Ay.isChannelMuted(t.getGuildId(), t.id), nn.Ay.resolvedMessageNotifications(t)]
                    : [!1, e_.orn.ALL_MESSAGES],
            [t, i, a],
        ),
        [o, d] = u.useState(!1),
        c = u.useCallback(() => {
            d((e) => !e),
                (0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                    type: F.Z5.TEXT_CHAT,
                    value: F.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        h = em.intl.string(em.t.h850Ss),
        _ = s || l !== e_.orn.ALL_MESSAGES ? t0.a : t1.X;
    return a && null != t
        ? (0, r.jsx)(e6.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: e6.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, r.jsx)(t6.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: em.intl.string(em.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, r.jsx)("div", {
                      ref: n,
                      children: (0, r.jsx)(Z.m, {
                          text: h,
                          "aria-label": h,
                          children: (0, r.jsx)(t$.K, {
                              ...i,
                              icon: _,
                              "aria-label": h,
                              size: "sm",
                              variant: "icon-only",
                              onClick: c,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function nE(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: a, onRequestClosePinsPopout: s } = e;
    return nA(t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.m, {
                      text: em.intl.string(em.t.JJogjm),
                      "aria-label": em.intl.string(em.t.JJogjm),
                      children: (0, r.jsx)(t$.K, {
                          icon: tt._,
                          "aria-label": em.intl.string(em.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, r.jsx)(nS, { channel: t, pinsOpen: i, onTogglePinsPopout: a, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, r.jsx)(Z.m, {
                            text: em.intl.string(em.t["LR+Ptf"]),
                            "aria-label": em.intl.string(em.t["LR+Ptf"]),
                            children: (0, r.jsx)(t$.K, {
                                icon: t2.D,
                                "aria-label": em.intl.string(em.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                                        type: F.Z5.INVITE,
                                        value: F.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, ne.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, nr.D$)({
                                                    target: {
                                                        kind: nr.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: nf.B.MANUAL,
                                                    widgetType: e_.uss.TEXT_CHAT_V3,
                                                });
                                            },
                                        });
                                },
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
function nv(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: a } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(nI, { channel: t }),
                  (0, r.jsx)(nS, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: a }),
              ],
          });
}
function nb(e) {
    let t,
        { channel: n, user: i, guild: a, title: s, dragStart: o, dragging: c } = e,
        { hasFriendList: h } = (0, d.M8)("TextChatHeader"),
        [m, g] = u.useState(!1),
        f = (0, y.bG)([l.A], () => l.A.getChannelId(), []),
        p = n?.isDM() ? (i?.id ?? null) : null,
        S =
            ((t = (0, y.bG)([nl.A], () => {
                if (null != p)
                    return (
                        (function (e) {
                            for (let t of e)
                                if (t.type === e_.$pd.PLAYING && null != t.application_id) return t.application_id;
                            return null;
                        })(nl.A.getActivities(p)) ?? void 0
                    );
            }, [p])),
            (0, ng.h)(t) ?? void 0),
        I = f === n?.id,
        E = em.intl.string(np.default.tYPfF2),
        v = (0, y.bG)([L.A], () => (n?.isThread() && null != n.parent_id ? L.A.getChannel(n.parent_id) : null), [n]),
        b = (0, y.bG)([ec.default, tX.A], () => (null != v ? (0, tc.m1)(v, ec.default, tX.A) : null), [v]),
        C = (0, y.bG)([], () => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? tX.A.isFriend(t.id)
                          ? { tab: ni.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nt.ke)(e.type)
                        ? { tab: ni.x.MESSAGES, targetId: e.id }
                        : (0, nt.ay)(e.type)
                          ? { tab: ni.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        T = u.useCallback(
            (e) => {
                nA(n) &&
                    ((0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                        type: F.Z5.CALL_BUTTON,
                        value: F.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    t7.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        w = u.useCallback(() => {
            n?.id != null &&
                g((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                                type: F.Z5.TEXT_CHAT,
                                value: F.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, r.jsxs)("div", {
        className: _()(nx.XV, c && nx.cB),
        onMouseDown: (e) => {
            0 === e.button && o(eb.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, r.jsxs)("div", {
                className: nx.LD,
                children: [
                    (0, r.jsx)("div", {
                        className: nx.gr,
                        children: (0, r.jsx)(nm, {
                            application: S,
                            fallback: (0, r.jsx)(nh, { channel: null, user: i, guild: a, size: nc.SIZE_24 }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nx.G1,
                        children: [
                            (() => {
                                if (null != p) return null;
                                let e = (0, tu.gU)(n, a);
                                return null != e ? (0, r.jsx)(e, { className: nx.gr, size: "xs" }) : null;
                            })(),
                            null != v && null != b
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(x.D, {
                                              className: nx.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, nr.D$)({
                                                          target: {
                                                              kind: nr.bB.CHANNEL,
                                                              channelId: v.id,
                                                              guildId: v.getGuildId?.() ?? v.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nf.B.MANUAL,
                                                          widgetType: e_.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, r.jsx)(A.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: b,
                                              }),
                                          }),
                                          (0, r.jsx)(t4._, {
                                              className: nx.ln,
                                              size: "xs",
                                              color: t9.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, r.jsxs)(A.E, {
                                className: nx.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    s,
                                    S?.name != null && "" !== S.name
                                        ? (0, r.jsx)(A.E, {
                                              tag: "span",
                                              className: nx.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: em.intl.formatToPlainString(np.default.x1k3cO, {
                                                  gameName: S.name,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: nx.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, r.jsx)(nE, {
                        channel: n,
                        onStartPrivateCall: T,
                        pinsOpen: m,
                        onTogglePinsPopout: w,
                        onRequestClosePinsPopout: () => g(!1),
                    }),
                    (0, r.jsx)(nv, {
                        channel: n,
                        pinsOpen: m,
                        onTogglePinsPopout: w,
                        onRequestClosePinsPopout: () => g(!1),
                    }),
                    h &&
                        null != C &&
                        (0, r.jsx)(na.j, {
                            tab: C.tab,
                            targetId: C.targetId,
                            widgetType: e_.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (I
                            ? (0, r.jsx)(Z.m, {
                                  text: E,
                                  "aria-label": E,
                                  children: (0, r.jsx)(t$.K, {
                                      icon: t8.g,
                                      "aria-label": E,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                                              type: F.Z5.TEXT_CHAT,
                                              value: F.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nr.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, r.jsx)(tQ.u, {
                                  title: em.intl.string(np.default.ERApc4),
                                  body: em.intl.string(np.default.PBVXVW),
                                  children: (0, r.jsx)(t$.K, {
                                      icon: t5.P,
                                      "aria-label": em.intl.string(np.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, F.YX)(e_.uss.TEXT_CHAT_V3, {
                                                    type: F.Z5.TEXT_CHAT,
                                                    value: F.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nr.$p)())
                                              : (0, nr.lu)({
                                                    channelId: n.id,
                                                    widgetType: e_.uss.TEXT_CHAT_V3,
                                                    secondaryValue: "close_button",
                                                });
                                      },
                                  }),
                              })),
                ],
            }),
        ],
    });
}
var nC = n(602853),
    ny = n(941971),
    nT = n(222823),
    nw = n(485296),
    nj = n(741961),
    nN = n(228366),
    nR = n(308528);
let nM = new Set();
async function nk(e) {
    if (!nM.has(e)) {
        nM.add(e);
        try {
            let t = await nR.A.fetchChannel(e),
                n = (0, nt.UE)(t);
            nN.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void nR.A.preload(i, n.id);
        } catch {}
    }
}
var nO = n(95231),
    nL = (((a = {}).DEFAULT = "DEFAULT"), (a.CHANNEL_TYPE = "CHANNEL_TYPE"), a);
let nP = u.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: a = "DEFAULT" } = e,
        l = null != i && t === i,
        d = (0, y.bG)([o.A], () => o.A.getSelectedChannelId() === t, [t]),
        c = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        h = (0, nC.r)(t9.A.colors.ICON_STATUS_ONLINE),
        m = (0, y.bG)([nw.A], () => !!l && !!(nw.A.isAnyoneElseSpeaking() || nw.A.isCurrentUserSpeaking()), [l]),
        [g, f] = u.useState(!1),
        { mentionCount: p, isMentionLowImportance: A } = (0, y.cf)(
            [nT.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nT.Ay.getMentionCount(t),
                          isMentionLowImportance: nT.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: S,
            user: I,
            guild: E,
            channel: v,
        } = (0, y.cf)([L.A, ty.A, ec.default, tX.A], () => {
            let e = L.A.getChannel(t) ?? null;
            if (null == e) return { label: em.intl.string(em.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, tc.m1)(e, ec.default, tX.A);
            return { label: n, user: tq(e, ec.default), guild: tK(e, ty.A), channel: e };
        }, [t]);
    u.useEffect(() => {
        null == v && nk(t);
    }, [v, t]);
    let b = (0, y.bG)([nj.A, ec.default], () => {
            if (null == v) return !1;
            let e = ec.default.getCurrentUser()?.id ?? null,
                t = nj.A.getTypingUsers(v.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [v]),
        C = (0, y.bG)([nT.Ay], () => {
            let e = v?.id;
            return null != e && nT.Ay.hasUnread(e);
        }, [v]),
        T = (0, r.jsx)("div", {
            className: nO.St,
            children: (() => {
                let e = v?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === a && !e) {
                    let e = (0, tu.gU)(v, E);
                    e ??= tY.o;
                    let t = l && !c && m,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        a = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${a})`),
                        (0, r.jsx)("div", {
                            className: _()(nO.s, d && nO.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: nO.Yc,
                                size: "sm",
                                color: d ? t9.A.colors.WHITE : t9.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(nh, {
                    channel: v,
                    user: I,
                    guild: E,
                    isSelected: d,
                    size: nc.SIZE_40,
                    isTyping: b,
                    mentionCount: p,
                    isMentionLowImportance: A,
                });
            })(),
        }),
        w = (function (e) {
            let { channel: t, guild: i, user: a } = e;
            return u.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await n.e("77927").then(n.bind(n, 320442));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, selected: !1, widgetType: e_.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != a)
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("84442"),
                                    n.e("478"),
                                    n.e("95049"),
                                    n.e("63328"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        user: a,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: e_.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, s.L3)(e, async () => {
                                let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                return (n) => (0, r.jsx)(e, { ...n, channel: t, widgetType: e_.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nt.ay)(t.type)) {
                            if (null == i) return;
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("21905"), n.e("26627")]).then(
                                    n.bind(n, 769192),
                                );
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: e_.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                    n.bind(n, 813407),
                                );
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: e_.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, a],
            );
        })({ channel: v, guild: E, user: I }),
        j = v?.isPrivate() ?? !1,
        N = E?.name ?? "",
        R = j ? void 0 : S,
        M = j ? S : "" !== N ? N : S,
        k = (() => {
            if (null == v || j) return null;
            let e = (0, tu.gU)(v, E);
            return (e ??= tY.o), (0, r.jsx)(e, { size: "sm", color: t9.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == v
        ? (0, r.jsx)("div", { className: nO.R })
        : (0, r.jsx)(tQ.u, {
              title: R,
              body: M,
              asset: k,
              assetSize: 20,
              "aria-label": S,
              children: (0, r.jsxs)(x.D, {
                  className: nO.pc,
                  onClick: () => {
                      l && (0, nr.S$)({ minimized: !1 }),
                          (0, nr.D$)({
                              target: { kind: nr.bB.CHANNEL, channelId: t, guildId: E?.id ?? null, messageId: null },
                              source: nf.B.MANUAL,
                              widgetType: e_.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: w,
                  onMouseEnter: () => f(!0),
                  onMouseLeave: () => f(!1),
                  children: [
                      T,
                      (0, r.jsx)("div", {
                          className: nO.vT,
                          children: (0, r.jsx)(ny.A, { selected: d, hovered: g, unread: C }),
                      }),
                  ],
              }),
          });
});
var nD = n(720149),
    nz = n(806202),
    nV = n(355622),
    nG = n(232835),
    nU = n(576705),
    nF = n(625494),
    nH = n(827280);
function nW(e) {
    let t,
        n,
        i,
        a,
        s,
        l,
        { selectedChannelId: o } = e,
        d = (0, y.bG)([L.A], () => L.A.getChannel(o), [o]),
        c = (0, eR.A)(),
        h = (0, y.bG)(
            [ty.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(d, ty.A),
            [d],
        );
    return ((t = d?.id ?? null),
    (n = u.useRef(new Set())),
    (i = (0, y.bG)([nG.A], () => (null != t ? nG.A.getMessages(t) : null), [t])),
    (a = (0, y.bG)([nU.A], () => nU.A.can(e_.xBc.READ_MESSAGE_HISTORY, d), [d])),
    (s = i?.first() ?? null),
    (l = null != d && null == s && null != i && !i.loadingMore && !i.ready && !i.hasFetched && a),
    u.useEffect(() => {
        null == t || (!n.current.has(t) && l && (n.current.add(t), nD.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, l]),
    u.useEffect(() => {
        if (null == o) return;
        let e = c.requestAnimationFrame(() => {
            nF._.dispatchToLastSubscribed(e_.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => c.cancelAnimationFrame(e);
    }, [o, c]),
    null != d)
        ? (0, r.jsx)("div", {
              className: nH.Q,
              children: (0, r.jsx)("div", {
                  className: nH.T,
                  children: (0, r.jsx)(nz.A, { channel: d, guild: h, chatInputType: nV.oU.OVERLAY }, d.id),
              }),
          })
        : null;
}
var nZ = n(881890);
function nY(e) {
    let { dragStart: t, dragging: n } = e,
        [i, a] = (0, y.bG)([o.A], () => o.A.getSessionEntries()),
        s = (0, y.bG)([o.A], () => o.A.getSelectedChannelId()),
        d = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        c = (0, y.bG)([L.A], () => (null != s ? (L.A.getChannel(s) ?? null) : null), [s]);
    u.useEffect(() => {
        null == s || (null == c && nk(s));
    }, [c, s]);
    let h = (0, y.bG)([ty.A], () => tK(c, ty.A), [c]),
        _ = (0, y.bG)([l.A], () => l.A.getChannelId(), []),
        m = u.useMemo(() => (null == _ || 0 === a ? i : i.filter((e) => e.channelId !== _)), [i, a, _]),
        g = (0, F.Dk)(() => {
            let e = new Set();
            for (let t of (null != _ && e.add(_), m)) e.add(t.channelId);
            return e;
        }, [m, _, a]),
        { shownUserIds: f, contentInventoryIds: p } = (0, y.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = L.A.getChannel(i) ?? null;
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(i);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(g),
            [g],
        ),
        x = (0, F.Dk)(() => f, [f]),
        A = (0, F.Dk)(() => p, [p]);
    u.useEffect(() => {
        (0 !== x.size || 0 !== A.size) &&
            (0, F.Y)(e_.uss.TEXT_CHAT_V3, {
                locked: U.default.isInstanceLocked(),
                shownUserIds: Array.from(x),
                liveUserIds: [],
                contentInventoryIds: Array.from(A),
            });
    }, [x, A]);
    let S = (0, y.bG)([ec.default], () => tq(c, ec.default)),
        I = (0, y.bG)(
            [ec.default, tX.A],
            () => (null == c ? em.intl.string(np.default.uhJexs) : (0, tc.m1)(c, ec.default, tX.A)),
            [c],
        ),
        E = (0, y.bG)([L.A], () => {
            if (null != _ && null != L.A.getChannel(_)) return !0;
            if (0 === a) return !1;
            for (let e of i) if (null != L.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [i, _, a]),
        v = null != s && !(d && s === _);
    return E
        ? (0, r.jsxs)("div", {
              className: nZ.kL,
              children: [
                  (0, r.jsx)("nav", {
                      className: nZ.pz,
                      "aria-label": em.intl.string(np.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eb.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, r.jsxs)(tB.d_, {
                          children: [
                              null != _
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(
                                                nP,
                                                {
                                                    channelId: _,
                                                    selectedVoiceChannelId: _,
                                                    iconVariant: nL.CHANNEL_TYPE,
                                                },
                                                `tiv-${_}`,
                                            ),
                                            m.length > 0 ? (0, r.jsx)("hr", { className: nZ.mF }) : null,
                                        ],
                                    })
                                  : null,
                              m.map((e) =>
                                  (0, r.jsx)(nP, { channelId: e.channelId, selectedVoiceChannelId: _ }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  v
                      ? (0, r.jsxs)("div", {
                            className: nZ.oM,
                            children: [
                                (0, r.jsx)(nb, { channel: c, user: S, guild: h, title: I, dragStart: t, dragging: n }),
                                (0, r.jsx)(nW, { selectedChannelId: s }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(V.g, { emptyText: em.intl.string(np.default["xpv/t5"]), icon: tY.o });
}
let nB = u.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, r.jsx)(nY, { dragStart: n, dragging: i });
});
var nX = n(428689),
    nq = n(175203),
    nK = n(163432),
    nQ = n(996439),
    n$ = n(799808),
    nJ = n(731854),
    n0 = n(521380);
let n1 = u.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            a = t.user?.id;
        return (0, y.bG)([ed.Ay], () => null != t.user && null != i && null != n && ed.Ay.isLocalVideoDisabled(a, i), [
            a,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, r.jsx)(nq.Ay, { ...e });
    }),
    n2 = u.memo(function (e) {
        let {
                context: t = nJ.x.DEFAULT,
                participants: i,
                locked: a,
                channel: l,
                width: o,
                height: d,
                shouldDisplay: c,
            } = e,
            h = u.useCallback(
                (e, i) => {
                    let a = e.user;
                    (0, F.YX)(e_.uss.VIDEO, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED, userId: a?.id }),
                        (0, s.L3)(i, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("58980"), n.e("22880")]).then(
                                n.bind(n, 535503),
                            );
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    user: a,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, F.YX)(e_.uss.VIDEO, {
                                            type: F.Z5.GO_LIVE,
                                            value: F.IP.ENABLED,
                                            userId: a?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            _ = (0, F.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        u.useEffect(() => {
            c &&
                (0, F.Y)(e_.uss.VIDEO, {
                    locked: U.default.isInstanceLocked(),
                    shownUserIds: Array.from(_),
                    liveUserIds: Array.from(_),
                    contentInventoryIds: [],
                });
        }, [_, c]);
        let m = u.useMemo(() => ({ width: o, height: d }), [o, d]);
        return (0, r.jsx)(r.Fragment, {
            children: i.map((e) =>
                (0, r.jsx)(
                    n1,
                    {
                        participant: e,
                        width: o,
                        className: n0.Vs,
                        containerStyle: m,
                        fit: es.$.COVER,
                        channel: l,
                        popoutType: et.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: a ? void 0 : h,
                        forceIdle: a,
                        paused: !c,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    n4 = u.memo(function (e) {
        let {
                context: t = nJ.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: a,
                widget: s,
                channel: l,
                width: o,
                height: d,
                showEmpty: c = !0,
                containerRef: h,
            } = e,
            m = "boolean" != typeof s.meta.horizontal || s.meta.horizontal,
            g = n.length > 0 && null != t && null != l && (!a || s.pinned);
        u.useEffect(() => {
            (0, n$.j_)({ locked: a, pinned: s.pinned, widget: s.type, isPreviewingInGame: !1 }, g);
        }, [a, s, g]);
        let f = u.useMemo(() => ({ opacity: s.opacity }), [s.opacity]),
            p = u.useMemo(() => _()({ [n0.wb]: !0, [n0.Vd]: !m, [n0.R]: !g && a }), [m, g, a]);
        return 0 !== n.length || a
            ? null == l
                ? null
                : (0, r.jsx)("div", {
                      ref: h,
                      className: p,
                      style: f,
                      children: (0, r.jsx)(n2, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: l,
                          width: o,
                          height: d,
                          shouldDisplay: g,
                          participantsVersion: i,
                      }),
                  })
            : c
              ? (0, r.jsx)("div", {
                    ref: h,
                    children: (0, r.jsx)(V.g, { emptyText: em.intl.string(em.t.aTiM42), icon: nX.n, absolute: !0 }),
                })
              : null;
    }),
    n9 = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: a, containerSpecs: r } = e;
        if (!(0, eN.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            l = 2 * i + 2 * a;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            s
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + l) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + l) },
            { maxWidth: 0.75 * r.maxX, maxHeight: 0.75 * r.maxY },
        );
    };
function n8(e) {
    let t = (0, y.bG)([D.A, L.A], () => L.A.getChannel(D.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [a, s] = (0, y.bG)(
            [N.A],
            () => (null == i ? [[], 0] : [N.A.getVideoParticipants(i), N.A.getParticipantsVersion(i)]),
            [i],
            nQ.D,
        ),
        l = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: c } = (0, eI.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: h, visibleParticipants: _ } = (0, nK.i4)(l ? o : d, a, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: s,
        }),
        m = (0, y.bG)([M.A], () => M.A.getWindowState(eW.f)),
        g = {
            id: e.widget.id,
            containerSize: { containerHeight: d, containerWidth: o },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: m?.width ?? e.width - n, maxY: m?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: m?.height ?? e.height, right: m?.width ?? e.width },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                a = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                r = u.useRef(a);
            u.useLayoutEffect(() => void (r.current = a)),
                u.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: a,
                        widget: s,
                        widgetLayoutSpecs: l,
                    } = r.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = n9({
                        ...l,
                        widget: s,
                        operation: eb.P.RESIZE_NORTH,
                        computedSize: { width: a, height: i },
                        originSize: { width: a, height: i },
                    });
                    (0, $.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: l, widget: e.widget, widgetLayoutSpecs: g }),
        (0, r.jsx)(n4, {
            ...e,
            channel: t,
            participants: _,
            participantsVersion: s,
            width: l ? h : (o ?? e.width),
            height: l ? (d ?? e.height) : h,
            containerRef: c,
        })
    );
}
var n5 = n(450740),
    n7 = n(968898);
n(321073);
var n3 = n(518009),
    n6 = n(592598),
    ie = n(28528),
    it = n(57019),
    ii = n(21076),
    ia = n(672396),
    ir = n(669192);
let is = [];
function il(e) {
    return e.notification.id;
}
function io(e, t, n, i) {
    let { index: a, notification: s, locked: l, pinned: o } = t;
    return (0, r.jsx)(ie.A, { index: a, notification: s, locked: l, pinned: o, transitionState: n, cleanUp: i }, e);
}
function id(e) {
    return (0, r.jsx)("div", { className: ir.k, children: e });
}
let ic = u.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            a = (0, y.bG)(
                [ii.default, n6.A],
                () => {
                    if (n6.A.isNotificationDisabled(ia.KS.TextChat)) return is;
                    let e = [],
                        i = 0;
                    for (let a of ii.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || a.status !== e_.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: a }), i++);
                    }
                    return e;
                },
                [t, n],
                tN.oQ,
            ),
            s = u.useState(() => new it.Fn(t))[0];
        return (u.useLayoutEffect(() => s.updateState(a, t)),
        u.useLayoutEffect(() => (s.initialize((0, eR.b)()), () => s.cleanUp()), [s]),
        0 !== a.length || t)
            ? (0, r.jsx)(it.Gt.Provider, {
                  value: s,
                  children: (0, r.jsx)(n3.F, { items: a, renderItem: io, getItemKey: il, wrapChildren: id }),
              })
            : i
              ? t
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: em.intl.string(em.t.O1Nbjq), icon: t1.X, absolute: !0 })
              : null;
    }),
    iu = {
        [e_.uss.VIDEO]: {
            streamerModeLabel: () => em.intl.string(em.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: a, borderWidth: s, showEmpty: l } = e;
                return (0, eN.cv)(t)
                    ? (0, r.jsx)(n8, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * a - 2 * s,
                          width: "auto" === i.width ? 0 : i.width - 2 * a - 2 * s,
                          showEmpty: l,
                          padding: a,
                          borderWidth: s,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t.UPvOia) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n7.CS, {
                            onClick: (t) => {
                                (0, eN.cv)(e) &&
                                    (0, s.L3)(t, async () => {
                                        let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                        return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: n9,
        },
        [e_.uss.VOICE_V3]: {
            streamerModeLabel: () => em.intl.string(em.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: a } = e;
                return (0, eN.ZO)(t)
                    ? (0, r.jsx)(n5.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: e_.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: a,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n7.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [e_.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, r.jsx)(b, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n7.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [e_.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, r.jsx)(eJ, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
        },
        [e_.uss.GO_LIVE]: {
            streamerModeLabel: () => em.intl.string(em.t["386XRo"]),
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: a,
                    anchorTop: s,
                    anchorLeft: l,
                    showEmpty: o,
                    padding: d,
                    borderWidth: c,
                } = e;
                return (0, eN.dO)(t)
                    ? (0, r.jsx)(eY, {
                          id: t.id,
                          locked: n,
                          pinned: t.pinned,
                          opacity: t.opacity,
                          size: i,
                          anchorTop: s,
                          anchorLeft: l,
                          widget: t,
                          isPreviewingInGame: !1,
                          dragStart: a,
                          horizontal: t.meta.horizontal ?? !1,
                          padding: d,
                          borderWidth: c,
                          showEmpty: o,
                      })
                    : null;
            },
            renderTitle: (e) => (0, r.jsx)(n7.we, { widgetId: e.id, children: em.intl.string(em.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, eN.dO)(e)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(n7.CS, {
                                  onClick: (t) => {
                                      (0, eN.dO)(e) &&
                                          (0, s.L3)(t, async () => {
                                              let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                              return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, r.jsx)(n7.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eG,
        },
        [e_.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(tZ, { locked: t });
            },
        },
        [e_.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, r.jsx)(ic, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n7.CS, {
                            onClick: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n7.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [e_.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(c.Ay, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [e_.uss.FRIENDS]: {
            streamerModeLabel: () => em.intl.string(em.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(C.A, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [e_.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => em.intl.string(em.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, r.jsx)(nB, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, r.jsx)(n7.Pl, { children: em.intl.string(em.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [l.A, o.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = l.A.getChannelId() ?? null,
                        [i] = o.A.getSessionEntries(),
                        a = i.length > 0;
                    return null != n || a;
                },
            },
        },
    };
