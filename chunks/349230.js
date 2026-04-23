n.d(t, { A: () => iu });
var i,
    a,
    r = n(627968),
    l = n(442433),
    s = n(763827),
    o = n(1193),
    d = n(589051),
    c = n(308726),
    u = n(64700),
    h = n(503698),
    m = n.n(h),
    p = n(812729),
    g = n.n(p),
    f = n(419354),
    _ = n(866323),
    x = n(939249),
    A = n(834730),
    E = n(259788),
    S = n(302614),
    I = n(639198);
let v = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function b(e) {
    let { locked: t, pinned: n } = e,
        [i, a] = u.useState(0),
        [l, s] = u.useState(0),
        [o, d] = u.useState(0),
        c = u.useRef(0),
        [h, p] = u.useState(0),
        { timeToLiveMs: b, reappearTimeMs: C } = E.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            g(),
        ),
        T = { timeToLiveMs: b, reappearTimeMs: C },
        y = u.useRef(T);
    u.useEffect(() => {
        y.current = T;
    }),
        u.useEffect(
            () => (
                (c.current = setInterval(() => {
                    let e = Date.now();
                    s(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = y.current.timeToLiveMs,
                                a = i + y.current.reappearTimeMs;
                            return n > i ? t + a : t;
                        });
                }, 100)),
                () => {
                    clearInterval(c.current);
                }
            ),
            [],
        );
    let j = () => {
            a(Date.now()), p((e) => e + 1);
        },
        w = i > 0 && l - i < 1e3,
        N = (0, _.p)(o > 0 && o < l && l - o < b, {
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
                          className: I.r2,
                          children: (0, r.jsx)(S.A, {
                              className: m()(I.VC, w && I.Nd),
                              children: (0, r.jsx)(x.D, {
                                  onClick: j,
                                  className: I.vk,
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
    T = n(17928),
    y = n(183623),
    j = n(684013),
    w = n(964486),
    N = n(313961),
    R = n(652896),
    M = n(567249),
    O = n(616356),
    k = n(495544),
    D = n(734057),
    z = n(38502),
    P = n(309010),
    L = n(41984),
    V = n(412477),
    G = n(475743),
    U = n(256415),
    H = n(810412),
    F = n(702841),
    W = n(205693),
    Z = n(990078),
    Y = n(358618),
    X = n(983851),
    B = n(622631),
    K = n(365199),
    q = n(890856),
    Q = n(827343),
    $ = n(391973),
    J = n(401843),
    ee = n(520698),
    et = n(164617),
    en = n(402216),
    ei = n(607407),
    ea = n(534400),
    er = n(267102),
    el = n(51092),
    es = n(434087),
    eo = n(110234),
    ed = n(969341),
    ec = n(287809),
    eu = n(562153),
    eh = n(761661),
    em = n(652215),
    ep = n(985018),
    eg = n(614715);
function ef(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, F.bG)([ed.Ay], () => {
            let e = (0, ee.A)(t.type);
            return ed.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        a = (0, F.bG)([k.default], () => k.default.getId()),
        { hasVideo: l } = (0, eo.A)(t, a),
        s = i && l,
        o = u.useCallback(() => {
            Q.A.toggleLocalMute(n, W.x.STREAM);
        }, [n]);
    return (0, r.jsx)(Z.m, {
        text: s ? ep.intl.string(ep.t.YqAjXy) : ep.intl.string(ep.t.w4m945),
        children: (0, r.jsx)(x.D, {
            className: eg.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, H.YX)(em.uss.GO_LIVE, {
                        type: H.Z5.AUDIO,
                        value: s ? H.IP.ENABLED : H.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    o();
            },
            children: s
                ? (0, r.jsx)(Y._, { size: "sm", color: "currentColor" })
                : (0, r.jsx)(X.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function e_(e, t) {
    return (i) => {
        (0, H.YX)(em.uss.GO_LIVE, { type: H.Z5.GO_LIVE, value: H.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, l.L3)(i, async () => {
                let { default: i } = await n.e("61361").then(n.bind(n, 663912));
                return (n) => (0, r.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function ex(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        a = (0, er.Us)(),
        l = n.user,
        s = (0, F.bG)([ec.default], () => ec.default.getUser(l.id) ?? l, [l]),
        o = t ? ep.intl.string(ep.t.tLxK4l) : ep.intl.string(ep.t.E5RDnK);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: m()(eg.MI, { [eg.te]: t }) }),
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
                                    (0, H.YX)(em.uss.GO_LIVE, {
                                        type: H.Z5.GO_LIVE,
                                        value: H.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ep.intl.string(ep.t.I6JG46),
                                }),
                                (0, r.jsx)(B.v, { size: "sm", color: "currentColor" }),
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
                                    children: eu.Ay.getName(n.stream.guildId, n.stream.channelId, l),
                                }),
                                (0, r.jsx)(ea.Ay, {
                                    primaryGuild: s.primaryGuild,
                                    userId: s.id,
                                    containerClassName: eg.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, H.YX)(em.uss.GO_LIVE, {
                                            type: H.Z5.GO_LIVE,
                                            value: H.IP.GUILD_PROFILE_OPENED,
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
                                        text: ep.intl.string(ep.t["3D5yo/"]),
                                        children: (0, r.jsx)(x.D, {
                                            className: eg.IF,
                                            onClick: e_(n, a),
                                            children: (0, r.jsx)(K.j, { size: "sm", color: "currentColor" }),
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
let eA = new Set([em.XYD.ENDED, em.XYD.FAILED, em.XYD.PAUSED]),
    eE = u.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: a, pinned: l } = e,
            s = (0, F.bG)([O.A], () => O.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, er.Us)(),
            d = null != s && eA.has(s.state),
            c = null != s,
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
                                children: (0, r.jsx)(q.s, {
                                    "aria-label": ep.intl.formatToPlainString(ep.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: e_(t, o),
                                    className: eg.X$,
                                    style: { transform: `scale(${u})` },
                                    children: (0, r.jsx)(es.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? el.$.CONTAIN,
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
                                    l || (0, $.v0)(a);
                                },
                            }),
                  ],
              });
    });
var eS = n(765671),
    eI = n(531685),
    ev = n(365971),
    eb = n(129537);
let eC = 9 / 16,
    eT = 16 / 9;
function ey(e, t) {
    return t * (Math.max(1, e) - 1);
}
function ej(e) {
    let { width: t, height: n, containerOffset: i, gapSize: a, tileCount: r, isVertical: l } = e,
        s = l ? t : t - ey(r, a),
        o = l ? n - ey(r, a) : n;
    return { verticalRatio: (o - i) / (s - i), horizontalRatio: (s - i) / (o - i) };
}
function ew(e, t, n) {
    let { containerOffset: i, gapSize: a, tileCount: r, isVertical: l } = t,
        { maxWidth: s, maxHeight: o } = n,
        d = Math.max(1, r),
        c = e.width > s,
        u = e.height > o;
    if (!c && !u) return e;
    let h = ey(r, a),
        { verticalRatio: m, horizontalRatio: p } = ej({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: a,
            tileCount: d,
            isVertical: l,
        }),
        g = e.width - i,
        f = e.height - i,
        _ = s - i,
        x = o - i;
    return (
        l ? ((x -= h), (f -= h)) : ((_ -= h), (g -= h)),
        c && u && (e.width > e.height ? (f = (g = _) * m) : (g = (f = x) * p), (c = g > _), (u = f > x)),
        c && (f = (g = _) * m),
        u && (g = (f = x) * p),
        l ? (f += ey(r, a)) : (g += ey(r, a)),
        { width: g + i, height: f + i }
    );
}
var eN = n(897720),
    eR = n(545807);
let eM = (e, t) => 2 * e + 2 * t,
    eO = (e) => {
        let { width: t, height: n } = e;
        return { fixed: !0, width: t, height: n };
    };
function ek(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        r = { width: a, height: a * eC },
        l = Math.max(1, e),
        s = ey(e, t),
        o = eM(n, t);
    return i
        ? { width: r.width + o, height: r.height * l + s + o }
        : { width: r.width * l + s + o, height: r.height + o };
}
function eD(e, t, n, i) {
    let a = eM(e, t);
    return i ? n.width - a : (n.height - a) * eT;
}
function ez(e) {
    return e.height > e.width;
}
let eP = 180 / 1080;
function eL(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: a, previousContainerSize: r, widgetMinMaxSizes: l } = e,
        s = t === eN.IV.VERTICAL,
        o = eD(i, a, r, s);
    return ew(
        ek(n, a, i, s, o),
        { containerOffset: eM(i, a), gapSize: a, tileCount: n, isVertical: s },
        { maxWidth: l.maxSize.width, maxHeight: l.maxSize.height },
    );
}
function eV(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: a, minSize: r, containerSpecs: l, defaultSize: s, ...o } = e,
        d = (e) =>
            eG({
                operation: eb.P.RESIZE_NORTH,
                computedSize: e,
                originSize: e,
                borderWidth: i,
                padding: a,
                containerSpecs: l,
                ...o,
            }),
        c = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(r) } };
    null != s && (c.defaultSize = { ...d(s) }), (0, $.Ju)({ ...c });
}
let eG = (e) => {
    let t,
        n,
        i,
        { operation: a, computedSize: r, originSize: l, borderWidth: s, padding: o, containerSpecs: d } = e,
        c = eM(s, o),
        u = Math.max(1, l.width),
        h = Math.max(1, l.height),
        m = { width: u, height: h },
        p = ez(m),
        g = ((t = ez(m)), (n = eD(s, o, m, t)), (i = n * eC), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        f = ej({ width: u, height: h, containerOffset: c, gapSize: o, tileCount: g, isVertical: p }),
        _ = ey(g, o);
    return ew(
        (() => {
            var e, t;
            switch (a) {
                case eb.P.RESIZE_NORTH:
                case eb.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: r.height,
                        width: ((e = r.height), (n = ((p ? e - _ : e) - c) * f.horizontalRatio), p || (n += _), n + c),
                    };
                default:
                    let i;
                    return {
                        width: r.width,
                        height: ((t = r.width), (i = ((p ? t : t - _) - c) * f.verticalRatio), p && (i += _), i + c),
                    };
            }
        })(),
        { containerOffset: c, gapSize: o, tileCount: g, isVertical: p },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eU = n(220959);
let eH = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    eF = u.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: a,
                locked: l,
                activeStreams: s,
                streamParticipants: o,
                participantsVersion: d,
                pinned: c,
                padding: h,
            } = e,
            p = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: l,
                widgetId: t,
                pinned: c,
            })),
            g = (0, G.A)(n),
            x = (0, G.A)(l),
            A = a === eN.IV.VERTICAL,
            E = l || x !== l || g !== n,
            S = u.useMemo(() => {
                let e = 0,
                    t = 0;
                return A
                    ? p.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? h : 0)) - t.height, x: 0 }))
                    : p.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? h : 0)) - e.width, y: 0 }));
            }, [p, h, A]),
            I = u.useMemo(
                () => (0 === S.length ? 256 * eC : S.reduce((e, t) => e + t.height, 0) + (A ? h * (S.length - 1) : 0)),
                [S, A, h],
            ),
            v = u.useMemo(
                () => (0 === S.length ? 256 : S.reduce((e, t) => e + t.width, 0) + (A ? 0 : h * (S.length - 1))),
                [S, A, h],
            ),
            b = (0, _.p)(
                S,
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
                    config: eH,
                    trail: 100 * !E,
                },
                E ? "animate-never" : "respect-motion-settings",
            ),
            C = (0, H.Dk)(() => new Set(o.map((e) => e.user.id)), [o, d]),
            T = (0, H.Dk)(() => new Set(o.filter((e) => s.has((0, R._z)(e.stream))).map((e) => e.user.id)), [o, s, d]);
        return (
            u.useEffect(() => {
                0 !== C.size &&
                    (0, H.Y)(em.uss.GO_LIVE, {
                        locked: U.default.isInstanceLocked(),
                        shownUserIds: Array.from(C),
                        liveUserIds: Array.from(T),
                        contentInventoryIds: [],
                    });
            }, [C, T]),
            (0, r.jsx)("div", {
                className: m()({ [eU.UT]: !0, [eU.Vd]: A, [eU.xM]: !A }),
                style: A ? { height: I } : { width: v },
                children: b((e, t, a, l) =>
                    (0, r.jsx)(f.animated.div, {
                        className: eU.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: p.length - l }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: i, widgetId: a, pinned: l } = e;
                            return (0, r.jsx)("div", {
                                className: eU.iA,
                                children: (0, r.jsx)(
                                    eE,
                                    { participant: t, width: n, locked: i, widgetId: a, pinned: l },
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
        l,
        {
            id: s,
            widget: o,
            size: d,
            locked: c,
            padding: h,
            borderWidth: m,
            opacity: p,
            horizontal: g,
            pinned: f,
            anchorTop: _,
            anchorLeft: x,
            showEmpty: A = !0,
        } = e,
        E = g ? eN.IV.HORIZONTAL : eN.IV.VERTICAL,
        S = E === eN.IV.VERTICAL,
        I = (0, T.bG)([z.A], () => {
            let e = z.A.getWidget(s);
            return !!(0, eN.dO)(e) && !c && (e.meta.showAllStreams ?? !0);
        }, [s, c]),
        v = (0, T.bG)([P.A], () => P.A.getVoiceChannelId()),
        b = (0, T.bG)([D.A], () => D.A.getChannel(v)),
        C = (0, T.bG)([k.default], () => k.default.getId()),
        {
            streamParticipants: U,
            activeStreams: H,
            participantsVersion: F,
        } = ((t = (_ && S) || (x && g)),
        (n = (!_ && S) || (!x && g)),
        (i = (0, T.yK)([O.A], () => (null == v ? [] : O.A.getAllActiveStreamsForChannel(v)))),
        (a = u.useMemo(() => new Set(i.map((e) => (0, R._z)(e))), [i])),
        (l = (0, T.bG)([N.A], () => (null == v ? -1 : N.A.getParticipantsVersion(v)))),
        {
            streamParticipants: (0, T.yK)([N.A, O.A], () => {
                if (null == v) return [];
                function e(e) {
                    return a.has((0, R._z)(e.stream));
                }
                let i = N.A.getStreamParticipants(v).filter((t) => {
                    if (t.user.id === C) return !1;
                    let n = O.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && eA.has(n.state)) && (!!I || e(t));
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
            }, [v, a, C, I, t, n]),
            activeStreams: a,
            participantsVersion: l,
        }),
        W = U.length,
        Z = (0, T.bG)([M.A], () => M.A.getWindowState(eW.f), []),
        {
            tileWidth: Y,
            tileHeight: X,
            widgetWidth: B,
            widgetHeight: K,
            containerRef: q,
            containerMinMaxSizes: Q,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: a, widgetSize: r } = e,
                { width: l, height: s } = {
                    width: "number" == typeof r.width ? r.width : 256,
                    height: "number" == typeof r.height ? r.height : 256 * eC,
                },
                { width: o = l, height: d = s, ref: c } = (0, eS.Ay)(),
                u = (0, eR.A)(),
                h = (0, ev.Q2)(u),
                m = (0, T.bG)([eI.A], () => eI.A.windowSize(h), [h]),
                p = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: a,
                            windowHeight: r,
                            isVertical: l,
                        } = e,
                        s = ek(t, n, i, l),
                        o = { maxX: a ?? (2 * s.width) / 0.75, maxY: r ?? (2 * s.height) / 0.75, minX: 0, minY: 0 },
                        d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        c = (r ?? 0) * eP;
                    return (
                        (c = Math.max(s.height, c)),
                        {
                            minSize: s,
                            defaultSize: ek(t, n, i, l, (c = Math.min(d.height, c)) * eT),
                            maxSize: d,
                            containerSpecs: o,
                        }
                    );
                })({
                    tileCount: t,
                    padding: n,
                    borderWidth: i,
                    windowWidth: m.width,
                    windowHeight: m.height,
                    isVertical: a,
                }),
                g = eM(i, n),
                f = eD(i, n, { width: o + g, height: d + g }, a),
                _ = f * eC;
            return {
                tileWidth: f,
                tileHeight: _,
                widgetWidth: l,
                widgetHeight: s,
                containerRef: c,
                containerMinMaxSizes: p,
            };
        })({ tileCount: W, padding: h, borderWidth: m, isVertical: S, widgetSize: d }),
        $ = {
            id: s,
            widget: o,
            layout: E,
            participants: U.length,
            padding: h,
            borderWidth: m,
            widgetMinMaxSizes: Q,
            containerSize: { width: B, height: K },
            orientedPosition: { top: 0, left: 0, bottom: Z?.height ?? K, right: Z?.width ?? B },
            locked: c,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            a = u.useRef(i);
        a.current = i;
        let r = (0, G.A)(n),
            l = t.length,
            s = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        (0, w.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: r,
                widget: s,
                borderWidth: o,
                locked: d,
                ...c
            } = a.current;
            null == s ||
                eV({
                    widgetId: e,
                    size: eO(
                        eL({
                            layout: i,
                            tileCount: Math.max(1, l),
                            borderWidth: o,
                            padding: r,
                            previousContainerSize: t.defaultSize,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    defaultSize: t.defaultSize,
                    minSize: eO(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: r,
                    borderWidth: o,
                    widget: s,
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
                    widget: s,
                    borderWidth: o,
                    locked: d,
                    ...c
                } = a.current;
                if (null != s) {
                    if (0 === l) {
                        if (d) return;
                        eV({
                            widgetId: e,
                            size: eO(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: eO(t.minSize),
                            padding: r,
                            borderWidth: o,
                            widget: s,
                            containerSpecs: t.containerSpecs,
                            ...c,
                        });
                        return;
                    }
                    eV({
                        widgetId: e,
                        size: eO(
                            eL({
                                layout: i,
                                tileCount: l,
                                borderWidth: o,
                                padding: r,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: eO(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: r,
                        borderWidth: o,
                        widget: s,
                        ...c,
                    });
                }
            }, [l, s]),
            u.useLayoutEffect(() => {
                if (a.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: l,
                    borderWidth: s,
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
                            previousContainerSize: l,
                            widgetMinMaxSizes: s,
                        } = e,
                        o = eD(a, r, l, t === eN.IV.VERTICAL);
                    return ew(
                        ek(i, r, a, n === eN.IV.VERTICAL, o),
                        { containerOffset: eM(a, r), gapSize: r, tileCount: i, isVertical: n === eN.IV.VERTICAL },
                        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
                    );
                })({
                    oldLayout: r ?? n,
                    newLayout: n,
                    tileCount: o,
                    borderWidth: s,
                    padding: l,
                    previousContainerSize: i,
                    widgetMinMaxSizes: t,
                });
                eV({
                    widgetId: e,
                    size: eO(u),
                    minSize: eO(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: s,
                    widget: d,
                    ...c,
                });
            }, [n, r]),
            (0, w.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...r } = a.current;
                null != n &&
                    eV({
                        widgetId: e,
                        size: eO(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: eO(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...r,
                    });
            });
    })({ id: s, streamParticipants: U, layout: E, widgetLayoutSpecs: $ });
    let J = null == b || (0 === H.size && c) || (0 === W && !c);
    return (u.useEffect(() => {
        j.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !J);
    }, [J]),
    (0, w.Ay)(() => () => {
        j.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (J || !f) && c)
        ? null
        : J && !c
          ? A
              ? c
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: ep.intl.string(ep.t["T6+rXy"]), icon: y.F, absolute: !0 })
              : null
          : (0, r.jsx)("div", {
                className: eZ.u,
                style: { opacity: p },
                ref: q,
                children: (0, r.jsx)(eF, {
                    widgetId: s,
                    tileWidth: Y,
                    tileHeight: X,
                    locked: c,
                    layout: E,
                    activeStreams: H,
                    streamParticipants: U,
                    participantsVersion: F,
                    pinned: f,
                    padding: h,
                }),
            });
}
var eX = n(243721),
    eB = n(821609),
    eK = n(706712),
    eq = n(366853),
    eQ = n(321090),
    e$ = n(548934);
function eJ(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        a = (0, T.bG)([eq.A], () => eq.A.getSocket()),
        l = (0, T.bG)([eQ.A], () => eQ.A.isGPUBoosted());
    (0, eK.ZX)();
    let s = (0, T.bG)([M.A], () => M.A.getWindow(eW.f)),
        [o, d] = (0, eK.DQ)(a),
        {
            currentFPS: c,
            averageFrameTime: h,
            timeSinceLastDrop: p,
            onResetFrameData: g,
            droppedFramesRef: f,
            renderedFrameCount: _,
            bufferFramecountRef: x,
            frameCheckerEffect: E,
        } = (0, eK.Dj)(!0, o, !0),
        [I, v, b] = (0, eK.F5)(a),
        [C, y] = (0, eK.km)(I, E, s),
        j = performance.now() - d.current < eK.Jc,
        N = v(h, x.current);
    (0, w.Ay)(
        () => (
            C(),
            () => {
                y();
            }
        ),
    );
    let R = u.useCallback(() => {
            g(), b(), C();
        }, [g, b, C]),
        [O, k] = u.useState(!0),
        [D, z] = u.useState(!0),
        [P, L] = u.useState(!0),
        [V, G] = u.useState(!0),
        [U, H] = u.useState(!0);
    return t && !n
        ? null
        : (0, r.jsxs)("div", {
              className: m()(e$.st, !i && e$.Hk),
              children: [
                  (O || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eX.d, { checked: O, onChange: (e) => k(e) }),
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
                  (D || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eX.d, { checked: D, onChange: (e) => z(e) }),
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
                                          color: h > 1.1 * eK.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [h.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (P || !t) &&
                      (0, r.jsxs)("div", {
                          className: e$.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: e$.On,
                                      children: (0, r.jsx)(eX.d, { checked: P, onChange: (e) => L(e) }),
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
                                              p < 2
                                                  ? "text-feedback-critical"
                                                  : p < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: f.current,
                                      }),
                                      (0, r.jsxs)(A.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: e$.af,
                                          children: ["(", ((f.current / _.current) * 100).toFixed(3), "%)"],
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
                                      children: (0, r.jsx)(eX.d, { checked: V, onChange: (e) => G(e) }),
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
                                          children: _.current.toFixed(0),
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
                                      children: (0, r.jsx)(eX.d, { checked: U, onChange: (e) => H(e) }),
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
                  j &&
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
                  l &&
                      (0, r.jsx)(A.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, r.jsx)("div", {
                          className: e$.m8,
                          children: (0, r.jsx)(S.A, {
                              children: (0, r.jsx)(eB.$, { variant: "primary", text: "Reset Frame Data", onClick: R }),
                          }),
                      }),
              ],
          });
}
var e0 = n(417098),
    e1 = n(55619),
    e2 = n(351906),
    e5 = n(377802),
    e8 = n(348858),
    e7 = n(523875),
    e3 = n(416696),
    e4 = n(621956),
    e6 = n(446080),
    e9 = n(922016),
    te = n(615675),
    tt = n(978940),
    tn = n(956793),
    ti = n(688810),
    ta = n(617354),
    tr = n(980923),
    tl = n(206018),
    ts = n(329072),
    to = n(18235),
    td = n(183184),
    tc = n(47167),
    tu = n(713654),
    th = n(880144),
    tm = n(338771),
    tp = n(548118),
    tg = n(999751),
    tf = n(209932),
    t_ = n(126970),
    tx = n(167579),
    tA = n(704877),
    tE = n(173660),
    tS = n(675991),
    tI = n(848362),
    tv = n(141157),
    tb = n(222692),
    tC = n(709562),
    tT = n(71393),
    ty = n(977997),
    tj = n(823901),
    tw = n(489277),
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
function tO(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: a,
        iconColor: l,
        tooltip: s,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: c,
        popoutOpen: u,
        onClick: h,
        popoutDisabled: m,
        onPopoutClick: p,
        onMouseEnter: g,
        onMouseLeave: f,
        onContextMenu: _,
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
        popoutDisabled: m,
        label: s,
        isTrayButton: x,
        onMouseEnter: (e) => {
            g?.(e);
        },
        onMouseLeave: (e) => {
            f?.(e);
        },
        iconComponent: a,
        iconColor: l,
        caretColor: c,
        isActive: n,
        onContextMenu: _,
        onPopoutClick: p,
        "aria-label": A["aria-label"],
    });
}
function tk(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        { suppress: a, selfMute: l, mute: s } = (0, tE.A)(t),
        o = l || s || a,
        d = (0, tr.A)(l, s, a, !1),
        { Component: c, play: h, events: m } = (0, e7.L)(o ? "unmute" : "mute");
    u.useEffect(() => () => h(), [h, o]);
    let p = tM(n),
        g = (e) => (t) => {
            e(t), (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.MICROPHONE, value: H.IP.SETTINGS_OPENED });
        };
    return (0, r.jsx)(e9.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = p(t);
            return (0, r.jsx)(tl.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tO, {
                ref: i,
                iconComponent: c,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    (0, td.A)(s, a, em.JJy.OVERLAY),
                        (0, H.YX)(em.uss.QUICK_ACTIONS, {
                            type: H.Z5.MICROPHONE,
                            value: o ? H.IP.ENABLED : H.IP.DISABLED,
                            userId: k.default.getId(),
                        });
                },
                onPopoutClick: g(n),
                onContextMenu: g(n),
                popoutOpen: l,
                onMouseEnter: () => {
                    m.onMouseEnter();
                },
                onMouseLeave: () => {
                    m.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function tD(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        { selfDeaf: a, deaf: l } = (0, tx.A)(t),
        s = a || l,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: c, onMouseLeave: h },
        } = (0, e8.I)(s ? "undeafen" : "deafen"),
        m = l ? te.T : o;
    u.useEffect(() => () => d(), [s, d]);
    let p = () => {
            (0, to.A)(l, em.JJy.OVERLAY),
                (0, H.YX)(em.uss.QUICK_ACTIONS, {
                    type: H.Z5.AUDIO,
                    value: l ? H.IP.ENABLED : H.IP.DISABLED,
                    userId: k.default.getId(),
                });
        },
        g = (e) => (t) => {
            e(t), (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.AUDIO, value: H.IP.SETTINGS_OPENED });
        },
        f = tM(n);
    return (0, r.jsx)(e9.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tl.A, {
                onClose: f(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, r.jsx)(tO, {
                ref: i,
                iconComponent: m,
                tooltip: (0, ta.A)(a, l, !1),
                isActive: s,
                highlightedColor: "red",
                onClick: p,
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
function tz(e) {
    let { voiceChannel: t, locked: n } = e,
        i = u.useRef(null),
        a = (0, T.bG)([ed.Ay], () => ed.Ay.isVideoEnabled()),
        l = (0, T.bG)([ed.Ay], () => Object.values(ed.Ay.getVideoDevices())[0]),
        s = l?.disabled ?? !0,
        o = !1 === s,
        d = (0, tA.A)(t),
        c = (e) => {
            Q.A.setVideoEnabled(e);
        },
        h = (e) => (t) => {
            e(t), (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.CAMERA, value: H.IP.SETTINGS_OPENED });
        },
        m = () => {
            s ? (o ? c(!0) : (0, tb.A)()) : c(!a),
                (0, H.YX)(em.uss.QUICK_ACTIONS, {
                    type: H.Z5.CAMERA,
                    value: a ? H.IP.DISABLED : H.IP.ENABLED,
                    userId: k.default.getId(),
                });
        },
        {
            Component: p,
            play: g,
            events: { onMouseEnter: f, onMouseLeave: _ },
        } = (0, e6.K)(a ? "disable" : "enable"),
        x = null != t ? (0, tS.Q)({ enabled: a, cameraUnavailable: s, hasPermission: d, channel: t }) : void 0;
    u.useEffect(() => () => g(), [a, g]);
    let A = tM(n),
        E = null == t || !d;
    return (0, r.jsx)(e9.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ts.A, { onClose: A(t), appContext: em.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tO, {
                ref: i,
                iconComponent: p,
                tooltip: x,
                onClick: m,
                isActive: a,
                highlightedColor: "green",
                onPopoutClick: h(n),
                popoutOpen: l,
                onContextMenu: h(n),
                onMouseEnter: f,
                onMouseLeave: _,
                disabled: E,
                isTrayButton: !0,
            });
        },
    });
}
function tP(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        a = u.useRef(null),
        l = (0, T.bG)([ec.default], () => ec.default.getCurrentUser()),
        s = (0, tA.A)(n),
        o = (0, T.cf)([ed.Ay], () => (0, th.A)(ed.Ay)),
        d = (0, T.bG)([O.A], () => O.A.getCurrentUserActiveStream()),
        c = (0, T.bG)([tw.A], () => tw.A.getTargetPID()),
        h = (0, tj.y)({ pid: c, allowOneClickGoLive: !0, analyticsLocation: em.ThZ.UNLOCKED_OVERLAY }),
        m = () => {
            h(),
                (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.GO_LIVE, value: H.IP.ENABLED, userId: k.default.getId() });
        },
        p = null != d;
    if (p) t = ep.intl.string(ep.t.S5anIc);
    else if (null != n) {
        let e = (0, tN.qv)();
        t = s
            ? null != e
                ? ep.intl.format(ep.t.AB5gTy, { game: e.name })
                : ep.intl.string(ep.t.FeUKeA)
            : ep.intl.string(ep.t.uQn9B8);
    }
    let g = () => {
            if (p)
                return (
                    (0, H.YX)(em.uss.QUICK_ACTIONS, {
                        type: H.Z5.GO_LIVE,
                        value: H.IP.DISABLED,
                        userId: k.default.getId(),
                    }),
                    (0, tm.A)(d, !1)
                );
            m();
        },
        f = (e) => (t) => {
            e(t), (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.SCREEN_SHARE, value: H.IP.SETTINGS_OPENED });
        },
        {
            Component: _,
            events: { onMouseEnter: x, onMouseLeave: A },
            play: E,
        } = (0, e3.c)(p ? "disable" : "enable");
    u.useEffect(() => () => E(), [p, E]);
    let S = tM(i);
    return (0, r.jsx)(e9.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tI.A, {
                channel: n,
                currentUser: l,
                activeStreams: p ? [d] : [],
                handleGoLive: m,
                onClose: S(t),
                appContext: em.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: l } = n;
            return (0, r.jsx)(tO, {
                ref: a,
                iconComponent: _,
                tooltip: t,
                "aria-label": ep.intl.string(ep.t.FeUKeA),
                isActive: p,
                highlightedColor: "green",
                onClick: g,
                popoutOpen: l,
                popoutDisabled: !p,
                onPopoutClick: f(i),
                onContextMenu: f(i),
                onMouseEnter: x,
                onMouseLeave: A,
                disabled: !o || !s,
                isTrayButton: !0,
            });
        },
    });
}
function tL(e) {
    let { voiceChannel: t, locked: i } = e,
        a = u.useRef(null),
        s = t?.getGuildId() ?? null,
        { mute: o, suppress: d } = (0, tE.A)(t),
        c = (0, T.bG)([ed.Ay], () => ed.Ay.isDeaf()),
        h = null == t || o || d || c,
        { analyticsLocations: m } = (0, ti.Ay)();
    function p(e) {
        null != s &&
            ((0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.SOUNDBOARD, value: H.IP.SETTINGS_OPENED }),
            (0, l.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: m, guildId: s, ...t });
            }));
    }
    let {
            Component: g,
            events: { onClick: f, onMouseEnter: _, onMouseLeave: x },
        } = (0, e4.E)(),
        A = tM(i),
        E = (0, T.bG)([tf.A, k.default], () => tf.A.isUserPlayingSounds(k.default.getId()), []) ? "green" : void 0;
    return (0, r.jsx)(e9.Y, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return h || null == t
                ? (0, r.jsx)(r.Fragment, {})
                : (0, r.jsx)(t_.A, { guildId: s, channel: t, onClose: A(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tO, {
                ref: a,
                iconComponent: g,
                tooltip: o
                    ? ep.intl.string(ep.t["Ox4/zU"])
                    : d
                      ? ep.intl.string(ep.t["+YBKYI"])
                      : c
                        ? ep.intl.string(ep.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    f(),
                        (0, H.YX)(em.uss.QUICK_ACTIONS, {
                            type: H.Z5.SOUNDBOARD,
                            value: H.IP.PANEL_OPENED,
                            userId: k.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: E,
                defaultColor: E,
                onContextMenu: p,
                onMouseEnter: _,
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
        a = (0, T.bG)([P.A], () => P.A.getVoiceChannelId() === t?.id),
        l = () => {
            (0, H.YX)(em.uss.QUICK_ACTIONS, {
                type: H.Z5.CALL_BUTTON,
                value: H.IP.DISABLED,
                userId: k.default.getId(),
            }),
                a && tn.default.disconnect();
        },
        s = (e, t) => {
            tn.default.selectVoiceChannel(e),
                (0, H.YX)(em.uss.QUICK_ACTIONS, {
                    type: H.Z5.CALL_BUTTON,
                    value: H.IP.ENABLED,
                    userId: k.default.getId(),
                    secondaryValue: t,
                });
        },
        [o, d] = u.useTransition(),
        c = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, H.YX)(em.uss.QUICK_ACTIONS, { type: H.Z5.CALL_BUTTON, value: H.IP.SETTINGS_OPENED });
        },
        {
            Component: h,
            events: { onMouseEnter: m, onMouseLeave: p },
        } = (0, e5.O)(),
        g = tM(n),
        f = (0, tv.qZ)(),
        _ = a ? h : tt._;
    return (0, r.jsx)(e9.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(tv.Ay, {
                allAvailableChannelRows: f,
                currentVoiceChannel: t,
                onClose: g(n),
                onSelect: s,
            });
        },
        align: "center",
        position: "top",
        animation: e9.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, r.jsx)(tO, {
                ref: i,
                iconComponent: _,
                tooltip: a ? ep.intl.string(ep.t["6vrfgt"]) : ep.intl.string(ep.t.S0W8Z5),
                onClick: a ? l : c(n),
                defaultColor: a ? "disconnect" : void 0,
                onMouseEnter: m,
                onMouseLeave: p,
                onContextMenu: c(n),
                isActive: s,
                onPopoutClick: a ? c(n) : void 0,
                popoutOpen: s,
                isTrayButton: !0,
            });
        },
    });
}
function tG(e) {
    let { voiceChannel: t } = e,
        n = (0, T.bG)([tT.A], () => tT.A.getGuild(t.getGuildId()), [t]);
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
                            (0, r.jsx)(tp.Ay, { guild: n, size: tp.Ay.Sizes.SMOL, className: tR.$f }),
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
function tH(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, T.cf)([s.A], () => ({ quality: s.A.getQuality(), state: s.A.getState(), lastPing: s.A.getLastPing() })),
        a = (0, T.bG)([ty.A], () => null != n && ty.A.hasVideo(n), [n]),
        l = (0, d.Mn)("VoiceConnectionStatus"),
        o = (0, T.bG)([e2.A], () => e2.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tg.A, { ...i, channelId: n, hasVideo: a, connectionStatusTextVariant: "text-sm/medium" }),
                !(l && o) &&
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
var tF = n(423005);
let tW = u.memo(function () {
    let e = (0, T.bG)([e2.A], () => e2.A.enabled),
        t = (0, d.Mn)("StreamerModeNotice");
    return e && t
        ? (0, r.jsxs)(e0.$T, {
              color: e0.Hv.STREAMER_MODE,
              className: tF.$X,
              children: [
                  (0, r.jsx)(A.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: ep.intl.string(ep.t.q9K7jp),
                  }),
                  (0, r.jsx)(e0.Z_, {
                      className: tF.lI,
                      onClick: () => e1.A.setEnabled(!1),
                      noticeType: em.kqX.STREAMER_MODE,
                      children: ep.intl.string(ep.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function tZ(e) {
    let { locked: t } = e,
        n = (0, T.bG)([P.A], () => P.A.getVoiceChannelId()),
        i = (0, T.bG)([D.A], () => D.A.getChannel(n)),
        a = null != i;
    return (0, r.jsxs)("div", {
        className: m()({ [tF.KE]: !0, [tF.xt]: t }),
        children: [
            (0, r.jsx)(tW, {}),
            (0, r.jsxs)("div", {
                className: tF.Pm,
                children: [
                    (0, r.jsxs)("div", {
                        className: tF.qi,
                        children: [
                            (0, r.jsx)(tk, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tD, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tz, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tF.qi,
                        children: [
                            (0, r.jsx)(tP, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tL, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m()(tF.qi, a && tF.SV),
                        children: (0, r.jsx)(tV, { voiceChannel: i, locked: t }),
                    }),
                ],
            }),
            a && (0, r.jsx)("div", { className: tF.Pm, children: (0, r.jsx)(tH, { voiceChannel: i, locked: t }) }),
        ],
    });
}
var tY = n(534890),
    tX = n(364522),
    tB = n(994500);
function tK(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function tq(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var tQ = n(459192),
    t$ = n(408278),
    tJ = n(366605),
    t0 = n(780338),
    t1 = n(782603),
    t2 = n(241541),
    t5 = n(320448),
    t8 = n(661531),
    t7 = n(446576),
    t3 = n(789645),
    t4 = n(387755),
    t6 = n(945830),
    t9 = n(461678),
    ne = n(95550),
    nt = n(95701),
    nn = n(543465),
    ni = n(914853),
    na = n(220884),
    nr = n(145567),
    nl = n(778712),
    ns = n(290863),
    no = n(172491),
    nd = n(912156),
    nc = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nu(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? nl._3.SIZE_24 : nl._3.SIZE_40;
        case "guild":
            return 24 === e ? tp.Ay.Sizes.SMALLER : tp.Ay.Sizes.MEDIUM;
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
            size: l = 24,
            isTyping: s = !1,
            mentionCount: o = 0,
            isMentionLowImportance: d = !1,
        } = e,
        c = t?.isPrivate() ?? !1,
        u = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        m = (0, T.bG)([ns.A], () => (null != h ? ns.A.getStatus(h) : null), [h]),
        p = (0, T.bG)([ns.A], () => null != h && ns.A.isMobileOnline(h), [h]);
    if (c || u)
        return (0, r.jsx)(no.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nu(l, "user"),
            status: m,
            isMobile: p,
            isTyping: s,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i) return (0, r.jsx)(tY.o, { size: nu(l, "default"), color: t8.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, r.jsx)(tp.Ay, { guild: i, size: nu(l, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === l ? nd.Q.MEDIUM_40 : nd.Q.TINY_24;
        return (0, r.jsx)(nd.A, { channel: t, guild: i, size: e, isTyping: s });
    }
});
var nm = n(137177);
function np(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, r.jsx)(nm.A, { game: t, size: nm.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var ng = n(429913),
    nf = n(34307),
    n_ = n(499214),
    nx = n(657956);
function nA(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nE(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: a } = e,
        l = u.useRef(null);
    return t?.id == null
        ? null
        : (0, r.jsx)(e9.Y, {
              targetElementRef: l,
              shouldShow: n,
              animation: e9.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: a,
              renderPopout: (e) =>
                  (0, r.jsx)(t6.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, H.YX)(em.uss.TEXT_CHAT_V3, {
                              type: H.Z5.TEXT_CHAT,
                              value: H.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)("div", {
                      ref: l,
                      children: (0, r.jsx)(Z.m, {
                          text: ep.intl.string(ep.t["mp1N/2"]),
                          "aria-label": ep.intl.string(ep.t["mp1N/2"]),
                          children: (0, r.jsx)(t$.K, {
                              ...n,
                              icon: tJ.t,
                              "aria-label": ep.intl.string(ep.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: i,
                          }),
                      }),
                  });
              },
          });
}
function nS(e) {
    let { channel: t } = e,
        n = u.useRef(null),
        i = t?.id ?? null,
        a = t?.guild_id != null,
        [l, s] = (0, T.yK)(
            [nn.Ay],
            () =>
                a && null != i && null != t
                    ? [nn.Ay.isChannelMuted(t.getGuildId(), t.id), nn.Ay.resolvedMessageNotifications(t)]
                    : [!1, em.orn.ALL_MESSAGES],
            [t, i, a],
        ),
        [o, d] = u.useState(!1),
        c = u.useCallback(() => {
            d((e) => !e),
                (0, H.YX)(em.uss.TEXT_CHAT_V3, {
                    type: H.Z5.TEXT_CHAT,
                    value: H.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        h = ep.intl.string(ep.t.h850Ss),
        m = l || s !== em.orn.ALL_MESSAGES ? t0.a : t1.X;
    return a && null != t
        ? (0, r.jsx)(e9.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: e9.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, r.jsx)(t9.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: ep.intl.string(ep.t.Xm41aV),
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
                              icon: m,
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
function nI(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: a, onRequestClosePinsPopout: l } = e;
    return nA(t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.m, {
                      text: ep.intl.string(ep.t.JJogjm),
                      "aria-label": ep.intl.string(ep.t.JJogjm),
                      children: (0, r.jsx)(t$.K, {
                          icon: tt._,
                          "aria-label": ep.intl.string(ep.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, r.jsx)(nE, { channel: t, pinsOpen: i, onTogglePinsPopout: a, onRequestClosePinsPopout: l }),
                  t.isMultiUserDM()
                      ? (0, r.jsx)(Z.m, {
                            text: ep.intl.string(ep.t["LR+Ptf"]),
                            "aria-label": ep.intl.string(ep.t["LR+Ptf"]),
                            children: (0, r.jsx)(t$.K, {
                                icon: t2.D,
                                "aria-label": ep.intl.string(ep.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, H.YX)(em.uss.TEXT_CHAT_V3, {
                                        type: H.Z5.INVITE,
                                        value: H.IP.PANEL_OPENED,
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
                                                    widgetType: em.uss.TEXT_CHAT_V3,
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
                  (0, r.jsx)(nS, { channel: t }),
                  (0, r.jsx)(nE, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: a }),
              ],
          });
}
function nb(e) {
    let t,
        { channel: n, user: i, guild: a, title: l, dragStart: o, dragging: c } = e,
        { hasFriendList: h } = (0, d.M8)("TextChatHeader"),
        [p, g] = u.useState(!1),
        f = (0, T.bG)([s.A], () => s.A.getChannelId(), []),
        _ = n?.isDM() ? (i?.id ?? null) : null,
        E =
            ((t = (0, T.bG)([ns.A], () => {
                if (null != _)
                    return (
                        (function (e) {
                            for (let t of e)
                                if (t.type === em.$pd.PLAYING && null != t.application_id) return t.application_id;
                            return null;
                        })(ns.A.getActivities(_)) ?? void 0
                    );
            }, [_])),
            (0, ng.h)(t) ?? void 0),
        S = f === n?.id,
        I = ep.intl.string(n_.default.tYPfF2),
        v = (0, T.bG)([D.A], () => (n?.isThread() && null != n.parent_id ? D.A.getChannel(n.parent_id) : null), [n]),
        b = (0, T.bG)([ec.default, tB.A], () => (null != v ? (0, tc.m1)(v, ec.default, tB.A) : null), [v]),
        C = (0, T.bG)([], () => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? tB.A.isFriend(t.id)
                          ? { tab: ni.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nt.ke)(e.type)
                        ? { tab: ni.x.MESSAGES, targetId: e.id }
                        : (0, nt.ay)(e.type)
                          ? { tab: ni.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        y = u.useCallback(
            (e) => {
                nA(n) &&
                    ((0, H.YX)(em.uss.TEXT_CHAT_V3, {
                        type: H.Z5.CALL_BUTTON,
                        value: H.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    t4.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        j = u.useCallback(() => {
            n?.id != null &&
                g((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, H.YX)(em.uss.TEXT_CHAT_V3, {
                                type: H.Z5.TEXT_CHAT,
                                value: H.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, r.jsxs)("div", {
        className: m()(nx.XV, c && nx.cB),
        onMouseDown: (e) => {
            0 === e.button && o(eb.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, r.jsxs)("div", {
                className: nx.LD,
                children: [
                    (0, r.jsx)("div", {
                        className: nx.gr,
                        children: (0, r.jsx)(np, {
                            application: E,
                            fallback: (0, r.jsx)(nh, { channel: null, user: i, guild: a, size: nc.SIZE_24 }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nx.G1,
                        children: [
                            (() => {
                                if (null != _) return null;
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
                                                          widgetType: em.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, r.jsx)(A.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: b,
                                              }),
                                          }),
                                          (0, r.jsx)(t5._, {
                                              className: nx.ln,
                                              size: "xs",
                                              color: t8.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, r.jsxs)(A.E, {
                                className: nx.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    l,
                                    E?.name != null && "" !== E.name
                                        ? (0, r.jsx)(A.E, {
                                              tag: "span",
                                              className: nx.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: ep.intl.formatToPlainString(n_.default.x1k3cO, {
                                                  gameName: E.name,
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
                    (0, r.jsx)(nI, {
                        channel: n,
                        onStartPrivateCall: y,
                        pinsOpen: p,
                        onTogglePinsPopout: j,
                        onRequestClosePinsPopout: () => g(!1),
                    }),
                    (0, r.jsx)(nv, {
                        channel: n,
                        pinsOpen: p,
                        onTogglePinsPopout: j,
                        onRequestClosePinsPopout: () => g(!1),
                    }),
                    h &&
                        null != C &&
                        (0, r.jsx)(na.j, {
                            tab: C.tab,
                            targetId: C.targetId,
                            widgetType: em.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (S
                            ? (0, r.jsx)(Z.m, {
                                  text: I,
                                  "aria-label": I,
                                  children: (0, r.jsx)(t$.K, {
                                      icon: t7.g,
                                      "aria-label": I,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, H.YX)(em.uss.TEXT_CHAT_V3, {
                                              type: H.Z5.TEXT_CHAT,
                                              value: H.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nr.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, r.jsx)(tQ.u, {
                                  title: ep.intl.string(n_.default.ERApc4),
                                  body: ep.intl.string(n_.default.PBVXVW),
                                  children: (0, r.jsx)(t$.K, {
                                      icon: t3.P,
                                      "aria-label": ep.intl.string(n_.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, H.YX)(em.uss.TEXT_CHAT_V3, {
                                                    type: H.Z5.TEXT_CHAT,
                                                    value: H.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nr.$p)())
                                              : (0, nr.lu)({
                                                    channelId: n.id,
                                                    widgetType: em.uss.TEXT_CHAT_V3,
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
    nT = n(941971),
    ny = n(222823),
    nj = n(485296),
    nw = n(741961),
    nN = n(228366),
    nR = n(308528);
let nM = new Set();
async function nO(e) {
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
var nk = n(95231),
    nD = (((a = {}).DEFAULT = "DEFAULT"), (a.CHANNEL_TYPE = "CHANNEL_TYPE"), a);
let nz = u.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: a = "DEFAULT" } = e,
        s = null != i && t === i,
        d = (0, T.bG)([o.A], () => o.A.getSelectedChannelId() === t, [t]),
        c = (0, T.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        h = (0, nC.r)(t8.A.colors.ICON_STATUS_ONLINE),
        p = (0, T.bG)([nj.A], () => !!s && !!(nj.A.isAnyoneElseSpeaking() || nj.A.isCurrentUserSpeaking()), [s]),
        [g, f] = u.useState(!1),
        { mentionCount: _, isMentionLowImportance: A } = (0, T.cf)(
            [ny.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: ny.Ay.getMentionCount(t),
                          isMentionLowImportance: ny.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: E,
            user: S,
            guild: I,
            channel: v,
        } = (0, T.cf)([D.A, tT.A, ec.default, tB.A], () => {
            let e = D.A.getChannel(t) ?? null;
            if (null == e) return { label: ep.intl.string(ep.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, tc.m1)(e, ec.default, tB.A);
            return { label: n, user: tK(e, ec.default), guild: tq(e, tT.A), channel: e };
        }, [t]);
    u.useEffect(() => {
        null == v && nO(t);
    }, [v, t]);
    let b = (0, T.bG)([nw.A, ec.default], () => {
            if (null == v) return !1;
            let e = ec.default.getCurrentUser()?.id ?? null,
                t = nw.A.getTypingUsers(v.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [v]),
        C = (0, T.bG)([ny.Ay], () => {
            let e = v?.id;
            return null != e && ny.Ay.hasUnread(e);
        }, [v]),
        y = (0, r.jsx)("div", {
            className: nk.St,
            children: (() => {
                let e = v?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === a && !e) {
                    let e = (0, tu.gU)(v, I);
                    e ??= tY.o;
                    let t = s && !c && p,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        a = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${a})`),
                        (0, r.jsx)("div", {
                            className: m()(nk.s, d && nk.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: nk.Yc,
                                size: "sm",
                                color: d ? t8.A.colors.WHITE : t8.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(nh, {
                    channel: v,
                    user: S,
                    guild: I,
                    isSelected: d,
                    size: nc.SIZE_40,
                    isTyping: b,
                    mentionCount: _,
                    isMentionLowImportance: A,
                });
            })(),
        }),
        j = (function (e) {
            let { channel: t, guild: i, user: a } = e;
            return u.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("77927").then(n.bind(n, 320442));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, selected: !1, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != a)
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("53635"),
                                    n.e("84442"),
                                    n.e("71259"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        user: a,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: em.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("56985").then(n.bind(n, 95616));
                                return (n) => (0, r.jsx)(e, { ...n, channel: t, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nt.ay)(t.type)) {
                            if (null == i) return;
                            (0, l.L3)(e, async () => {
                                let { default: e } = await n.e("21905").then(n.bind(n, 769192));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("97262"), n.e("54036")]).then(
                                    n.bind(n, 813407),
                                );
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, a],
            );
        })({ channel: v, guild: I, user: S }),
        w = v?.isPrivate() ?? !1,
        N = I?.name ?? "",
        R = w ? void 0 : E,
        M = w ? E : "" !== N ? N : E,
        O = (() => {
            if (null == v || w) return null;
            let e = (0, tu.gU)(v, I);
            return (e ??= tY.o), (0, r.jsx)(e, { size: "sm", color: t8.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == v
        ? (0, r.jsx)("div", { className: nk.R })
        : (0, r.jsx)(tQ.u, {
              title: R,
              body: M,
              asset: O,
              assetSize: 20,
              "aria-label": E,
              children: (0, r.jsxs)(x.D, {
                  className: nk.pc,
                  onClick: () => {
                      s && (0, nr.S$)({ minimized: !1 }),
                          (0, nr.D$)({
                              target: { kind: nr.bB.CHANNEL, channelId: t, guildId: I?.id ?? null, messageId: null },
                              source: nf.B.MANUAL,
                              widgetType: em.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: j,
                  onMouseEnter: () => f(!0),
                  onMouseLeave: () => f(!1),
                  children: [
                      y,
                      (0, r.jsx)("div", {
                          className: nk.vT,
                          children: (0, r.jsx)(nT.A, { selected: d, hovered: g, unread: C }),
                      }),
                  ],
              }),
          });
});
var nP = n(720149),
    nL = n(806202),
    nV = n(355622),
    nG = n(232835),
    nU = n(576705),
    nH = n(625494),
    nF = n(827280);
function nW(e) {
    let t,
        n,
        i,
        a,
        l,
        s,
        { selectedChannelId: o } = e,
        d = (0, T.bG)([D.A], () => D.A.getChannel(o), [o]),
        c = (0, eR.A)(),
        h = (0, T.bG)(
            [tT.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(d, tT.A),
            [d],
        );
    return ((t = d?.id ?? null),
    (n = u.useRef(new Set())),
    (i = (0, T.bG)([nG.A], () => (null != t ? nG.A.getMessages(t) : null), [t])),
    (a = (0, T.bG)([nU.A], () => nU.A.can(em.xBc.READ_MESSAGE_HISTORY, d), [d])),
    (l = i?.first() ?? null),
    (s = null != d && null == l && null != i && !i.loadingMore && !i.ready && !i.hasFetched && a),
    u.useEffect(() => {
        null == t || (!n.current.has(t) && s && (n.current.add(t), nP.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, s]),
    u.useEffect(() => {
        if (null == o) return;
        let e = c.requestAnimationFrame(() => {
            nH._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => c.cancelAnimationFrame(e);
    }, [o, c]),
    null != d)
        ? (0, r.jsx)("div", {
              className: nF.Q,
              children: (0, r.jsx)("div", {
                  className: nF.T,
                  children: (0, r.jsx)(nL.A, { channel: d, guild: h, chatInputType: nV.oU.OVERLAY }, d.id),
              }),
          })
        : null;
}
var nZ = n(881890);
function nY(e) {
    let { dragStart: t, dragging: n } = e,
        [i, a] = (0, T.bG)([o.A], () => o.A.getSessionEntries()),
        l = (0, T.bG)([o.A], () => o.A.getSelectedChannelId()),
        d = (0, T.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        c = (0, T.bG)([D.A], () => (null != l ? (D.A.getChannel(l) ?? null) : null), [l]);
    u.useEffect(() => {
        null == l || (null == c && nO(l));
    }, [c, l]);
    let h = (0, T.bG)([tT.A], () => tq(c, tT.A), [c]),
        m = (0, T.bG)([s.A], () => s.A.getChannelId(), []),
        p = u.useMemo(() => (null == m || 0 === a ? i : i.filter((e) => e.channelId !== m)), [i, a, m]),
        g = (0, H.Dk)(() => {
            let e = new Set();
            for (let t of (null != m && e.add(m), p)) e.add(t.channelId);
            return e;
        }, [p, m, a]),
        { shownUserIds: f, contentInventoryIds: _ } = (0, T.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = D.A.getChannel(i) ?? null;
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
        x = (0, H.Dk)(() => f, [f]),
        A = (0, H.Dk)(() => _, [_]);
    u.useEffect(() => {
        (0 !== x.size || 0 !== A.size) &&
            (0, H.Y)(em.uss.TEXT_CHAT_V3, {
                locked: U.default.isInstanceLocked(),
                shownUserIds: Array.from(x),
                liveUserIds: [],
                contentInventoryIds: Array.from(A),
            });
    }, [x, A]);
    let E = (0, T.bG)([ec.default], () => tK(c, ec.default)),
        S = (0, T.bG)(
            [ec.default, tB.A],
            () => (null == c ? ep.intl.string(n_.default.uhJexs) : (0, tc.m1)(c, ec.default, tB.A)),
            [c],
        ),
        I = (0, T.bG)([D.A], () => {
            if (null != m && null != D.A.getChannel(m)) return !0;
            if (0 === a) return !1;
            for (let e of i) if (null != D.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [i, m, a]),
        v = null != l && !(d && l === m);
    return I
        ? (0, r.jsxs)("div", {
              className: nZ.kL,
              children: [
                  (0, r.jsx)("nav", {
                      className: nZ.pz,
                      "aria-label": ep.intl.string(n_.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eb.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, r.jsxs)(tX.d_, {
                          children: [
                              null != m
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(
                                                nz,
                                                {
                                                    channelId: m,
                                                    selectedVoiceChannelId: m,
                                                    iconVariant: nD.CHANNEL_TYPE,
                                                },
                                                `tiv-${m}`,
                                            ),
                                            p.length > 0 ? (0, r.jsx)("hr", { className: nZ.mF }) : null,
                                        ],
                                    })
                                  : null,
                              p.map((e) =>
                                  (0, r.jsx)(nz, { channelId: e.channelId, selectedVoiceChannelId: m }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  v
                      ? (0, r.jsxs)("div", {
                            className: nZ.oM,
                            children: [
                                (0, r.jsx)(nb, { channel: c, user: E, guild: h, title: S, dragStart: t, dragging: n }),
                                (0, r.jsx)(nW, { selectedChannelId: l }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(V.g, { emptyText: ep.intl.string(n_.default["xpv/t5"]), icon: tY.o });
}
let nX = u.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, r.jsx)(nY, { dragStart: n, dragging: i });
});
var nB = n(428689),
    nK = n(175203),
    nq = n(163432),
    nQ = n(996439),
    n$ = n(799808),
    nJ = n(731854),
    n0 = n(521380);
let n1 = u.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            a = t.user?.id;
        return (0, T.bG)([ed.Ay], () => null != t.user && null != i && null != n && ed.Ay.isLocalVideoDisabled(a, i), [
            a,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, r.jsx)(nK.Ay, { ...e });
    }),
    n2 = u.memo(function (e) {
        let {
                context: t = nJ.x.DEFAULT,
                participants: i,
                locked: a,
                channel: s,
                width: o,
                height: d,
                shouldDisplay: c,
            } = e,
            h = u.useCallback(
                (e, i) => {
                    let a = e.user;
                    (0, H.YX)(em.uss.VIDEO, { type: H.Z5.CAMERA, value: H.IP.SETTINGS_OPENED, userId: a?.id }),
                        (0, l.L3)(i, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("58980")]).then(
                                n.bind(n, 535503),
                            );
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    user: a,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, H.YX)(em.uss.VIDEO, {
                                            type: H.Z5.GO_LIVE,
                                            value: H.IP.ENABLED,
                                            userId: a?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            m = (0, H.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        u.useEffect(() => {
            c &&
                (0, H.Y)(em.uss.VIDEO, {
                    locked: U.default.isInstanceLocked(),
                    shownUserIds: Array.from(m),
                    liveUserIds: Array.from(m),
                    contentInventoryIds: [],
                });
        }, [m, c]);
        let p = u.useMemo(() => ({ width: o, height: d }), [o, d]);
        return (0, r.jsx)(r.Fragment, {
            children: i.map((e) =>
                (0, r.jsx)(
                    n1,
                    {
                        participant: e,
                        width: o,
                        className: n0.Vs,
                        containerStyle: p,
                        fit: el.$.COVER,
                        channel: s,
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
    n5 = u.memo(function (e) {
        let {
                context: t = nJ.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: a,
                widget: l,
                channel: s,
                width: o,
                height: d,
                showEmpty: c = !0,
                containerRef: h,
            } = e,
            p = "boolean" != typeof l.meta.horizontal || l.meta.horizontal,
            g = n.length > 0 && null != t && null != s && (!a || l.pinned);
        u.useEffect(() => {
            (0, n$.j_)({ locked: a, pinned: l.pinned, widget: l.type, isPreviewingInGame: !1 }, g);
        }, [a, l, g]);
        let f = u.useMemo(() => ({ opacity: l.opacity }), [l.opacity]),
            _ = u.useMemo(() => m()({ [n0.wb]: !0, [n0.Vd]: !p, [n0.R]: !g && a }), [p, g, a]);
        return 0 !== n.length || a
            ? null == s
                ? null
                : (0, r.jsx)("div", {
                      ref: h,
                      className: _,
                      style: f,
                      children: (0, r.jsx)(n2, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: s,
                          width: o,
                          height: d,
                          shouldDisplay: g,
                          participantsVersion: i,
                      }),
                  })
            : c
              ? (0, r.jsx)("div", {
                    ref: h,
                    children: (0, r.jsx)(V.g, { emptyText: ep.intl.string(ep.t.aTiM42), icon: nB.n, absolute: !0 }),
                })
              : null;
    }),
    n8 = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: a, containerSpecs: r } = e;
        if (!(0, eN.cv)(t)) return n;
        let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            s = 2 * i + 2 * a;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            l
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + s) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + s) },
            { maxWidth: 0.75 * r.maxX, maxHeight: 0.75 * r.maxY },
        );
    };
function n7(e) {
    let t = (0, T.bG)([P.A, D.A], () => D.A.getChannel(P.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [a, l] = (0, T.bG)(
            [N.A],
            () => (null == i ? [[], 0] : [N.A.getVideoParticipants(i), N.A.getParticipantsVersion(i)]),
            [i],
            nQ.D,
        ),
        s = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: c } = (0, eS.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: h, visibleParticipants: m } = (0, nq.i4)(s ? o : d, a, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: l,
        }),
        p = (0, T.bG)([M.A], () => M.A.getWindowState(eW.f)),
        g = {
            id: e.widget.id,
            containerSize: { containerHeight: d, containerWidth: o },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: p?.width ?? e.width - n, maxY: p?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: p?.height ?? e.height, right: p?.width ?? e.width },
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
                        widget: l,
                        widgetLayoutSpecs: s,
                    } = r.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = n8({
                        ...s,
                        widget: l,
                        operation: eb.P.RESIZE_NORTH,
                        computedSize: { width: a, height: i },
                        originSize: { width: a, height: i },
                    });
                    (0, $.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: s, widget: e.widget, widgetLayoutSpecs: g }),
        (0, r.jsx)(n5, {
            ...e,
            channel: t,
            participants: m,
            participantsVersion: l,
            width: s ? h : (o ?? e.width),
            height: s ? (d ?? e.height) : h,
            containerRef: c,
        })
    );
}
var n3 = n(450740),
    n4 = n(968898);
n(321073);
var n6 = n(518009),
    n9 = n(592598),
    ie = n(28528),
    it = n(57019),
    ii = n(21076),
    ia = n(672396),
    ir = n(669192);
let il = [];
function is(e) {
    return e.notification.id;
}
function io(e, t, n, i) {
    let { index: a, notification: l, locked: s, pinned: o } = t;
    return (0, r.jsx)(ie.A, { index: a, notification: l, locked: s, pinned: o, transitionState: n, cleanUp: i }, e);
}
function id(e) {
    return (0, r.jsx)("div", { className: ir.k, children: e });
}
let ic = u.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            a = (0, T.bG)(
                [ii.default, n9.A],
                () => {
                    if (n9.A.isNotificationDisabled(ia.KS.TextChat)) return il;
                    let e = [],
                        i = 0;
                    for (let a of ii.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || a.status !== em.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: a }), i++);
                    }
                    return e;
                },
                [t, n],
                tN.oQ,
            ),
            l = u.useState(() => new it.Fn(t))[0];
        return (u.useLayoutEffect(() => l.updateState(a, t)),
        u.useLayoutEffect(() => (l.initialize((0, eR.b)()), () => l.cleanUp()), [l]),
        0 !== a.length || t)
            ? (0, r.jsx)(it.Gt.Provider, {
                  value: l,
                  children: (0, r.jsx)(n6.F, { items: a, renderItem: io, getItemKey: is, wrapChildren: id }),
              })
            : i
              ? t
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: ep.intl.string(ep.t.O1Nbjq), icon: t1.X, absolute: !0 })
              : null;
    }),
    iu = {
        [em.uss.VIDEO]: {
            streamerModeLabel: () => ep.intl.string(ep.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: a, borderWidth: l, showEmpty: s } = e;
                return (0, eN.cv)(t)
                    ? (0, r.jsx)(n7, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * a - 2 * l,
                          width: "auto" === i.width ? 0 : i.width - 2 * a - 2 * l,
                          showEmpty: s,
                          padding: a,
                          borderWidth: l,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t.UPvOia) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n4.CS, {
                            onClick: (t) => {
                                (0, eN.cv)(e) &&
                                    (0, l.L3)(t, async () => {
                                        let { default: t } = await n.e("78238").then(n.bind(n, 440173));
                                        return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: n8,
        },
        [em.uss.VOICE_V3]: {
            streamerModeLabel: () => ep.intl.string(ep.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: a } = e;
                return (0, eN.ZO)(t)
                    ? (0, r.jsx)(n3.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: em.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: a,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n4.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, r.jsx)(b, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n4.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, r.jsx)(eJ, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
        },
        [em.uss.GO_LIVE]: {
            streamerModeLabel: () => ep.intl.string(ep.t["386XRo"]),
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: a,
                    anchorTop: l,
                    anchorLeft: s,
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
                          anchorTop: l,
                          anchorLeft: s,
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
            renderTitle: (e) => (0, r.jsx)(n4.we, { widgetId: e.id, children: ep.intl.string(ep.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, eN.dO)(e)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(n4.CS, {
                                  onClick: (t) => {
                                      (0, eN.dO)(e) &&
                                          (0, l.L3)(t, async () => {
                                              let { default: t } = await n.e("21289").then(n.bind(n, 543824));
                                              return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, r.jsx)(n4.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eG,
        },
        [em.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(tZ, { locked: t });
            },
        },
        [em.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, r.jsx)(ic, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n4.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("51607").then(n.bind(n, 320490));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n4.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(c.Ay, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.FRIENDS]: {
            streamerModeLabel: () => ep.intl.string(ep.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(C.A, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => ep.intl.string(ep.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, r.jsx)(nX, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, r.jsx)(n4.Pl, { children: ep.intl.string(ep.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [s.A, o.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = s.A.getChannelId() ?? null,
                        [i] = o.A.getSessionEntries(),
                        a = i.length > 0;
                    return null != n || a;
                },
            },
        },
    };
