n.d(t, { A: () => ic });
var i,
    s,
    r = n(627968),
    l = n(442433),
    a = n(763827),
    o = n(140069),
    d = n(589051),
    u = n(308726),
    c = n(64700),
    h = n(503698),
    m = n.n(h),
    g = n(812729),
    p = n.n(g),
    x = n(873174),
    f = n(866323),
    A = n(939249),
    E = n(834730),
    S = n(259788),
    I = n(302614),
    v = n(639198);
let T = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function j(e) {
    let { locked: t, pinned: n } = e,
        [i, s] = c.useState(0),
        [l, a] = c.useState(0),
        [o, d] = c.useState(0),
        u = c.useRef(0),
        [h, g] = c.useState(0),
        { timeToLiveMs: j, reappearTimeMs: C } = S.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            p(),
        ),
        y = { timeToLiveMs: j, reappearTimeMs: C },
        w = c.useRef(y);
    c.useEffect(() => {
        w.current = y;
    }),
        c.useEffect(
            () => (
                (u.current = setInterval(() => {
                    let e = Date.now();
                    a(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = w.current.timeToLiveMs,
                                s = i + w.current.reappearTimeMs;
                            return n > i ? t + s : t;
                        });
                }, 100)),
                () => {
                    clearInterval(u.current);
                }
            ),
            [],
        );
    let b = () => {
            s(Date.now()), g((e) => e + 1);
        },
        N = i > 0 && l - i < 1e3,
        _ = (0, f.p)(o > 0 && o < l && l - o < j, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: T,
        }),
        [R, O] = c.useState(!1);
    if (
        (c.useEffect(() => {
            h > 10 && O(!0);
        }, [h]),
        R)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: _(
                  (e, t) =>
                      t &&
                      (0, r.jsx)(x.animated.div, {
                          style: e,
                          className: v.r2,
                          children: (0, r.jsx)(I.A, {
                              className: m()(v.VC, N && v.Nd),
                              children: (0, r.jsx)(A.D, {
                                  onClick: b,
                                  className: v.vk,
                                  children: (0, r.jsxs)(E.E, {
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
    w = n(183623),
    b = n(684013),
    N = n(964486),
    _ = n(313961),
    R = n(652896),
    O = n(567249),
    M = n(616356),
    k = n(495544),
    D = n(734057),
    z = n(38502),
    P = n(309010),
    L = n(41984),
    V = n(412477),
    G = n(475743),
    U = n(184809),
    F = n(810412),
    H = n(702841),
    Z = n(459838),
    Y = n(990078),
    X = n(358618),
    W = n(983851),
    B = n(622631),
    q = n(365199),
    K = n(890856),
    Q = n(827343),
    J = n(391973),
    $ = n(401843),
    ee = n(520698),
    et = n(164617),
    en = n(402216),
    ei = n(607407),
    es = n(534400),
    er = n(267102),
    el = n(51092),
    ea = n(434087),
    eo = n(110234),
    ed = n(235058),
    eu = n(287809),
    ec = n(562153),
    eh = n(761661),
    em = n(652215),
    eg = n(375708),
    ep = n(614715);
function ex(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, H.bG)([ed.Ay], () => {
            let e = (0, ee.A)(t.type);
            return ed.Ay.isLocalMute(t.user.id, e);
        }, [t]),
        s = (0, H.bG)([k.default], () => k.default.getId()),
        { hasVideo: l } = (0, eo.A)(t, s),
        a = i && l,
        o = c.useCallback(() => {
            Q.A.toggleLocalMute(n, Z.x.STREAM);
        }, [n]);
    return (0, r.jsx)(Y.m, {
        text: a ? eg.intl.string(eg.t.YqAjXy) : eg.intl.string(eg.t.w4m945),
        children: (0, r.jsx)(A.D, {
            className: ep.IF,
            onClick: (e) => {
                e.stopPropagation(),
                    (0, F.YX)(em.uss.GO_LIVE, {
                        type: F.Z5.AUDIO,
                        value: a ? F.IP.ENABLED : F.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    o();
            },
            children: a
                ? (0, r.jsx)(X._, { size: "sm", color: "currentColor" })
                : (0, r.jsx)(W.H, { size: "sm", color: "currentColor" }),
        }),
    });
}
function ef(e, t) {
    return (i) => {
        (0, F.YX)(em.uss.GO_LIVE, { type: F.Z5.GO_LIVE, value: F.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, l.L3)(i, async () => {
                let { default: i } = await Promise.all([n.e("89673"), n.e("45996"), n.e("58315"), n.e("61361")]).then(
                    n.bind(n, 663912),
                );
                return (n) => (0, r.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            });
    };
}
function eA(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        s = (0, er.Us)(),
        l = n.user,
        a = (0, H.bG)([eu.default], () => eu.default.getUser(l.id) ?? l, [l]),
        o = t ? eg.intl.string(eg.t.tLxK4l) : eg.intl.string(eg.t.E5RDnK);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { className: m()(ep.MI, { [ep.te]: t }) }),
            !t &&
                (0, r.jsx)("div", {
                    className: ep.TP,
                    children: (0, r.jsx)(Y.m, {
                        text: o,
                        children: (0, r.jsxs)(A.D, {
                            className: ep.kx,
                            onClick: () => {
                                (0, $.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    i(),
                                    (0, F.YX)(em.uss.GO_LIVE, {
                                        type: F.Z5.GO_LIVE,
                                        value: F.IP.ENABLED,
                                        userId: n.user.id,
                                    });
                            },
                            children: [
                                (0, r.jsx)(E.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: eg.intl.string(eg.t.I6JG46),
                                }),
                                (0, r.jsx)(B.v, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: ep.ne,
                children: [
                    (0, r.jsx)("div", {
                        className: ep.fL,
                        children: (0, r.jsxs)("div", {
                            className: ep.K8,
                            children: [
                                (0, r.jsx)(E.E, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    className: ep.yb,
                                    children: ec.Ay.getName(n.stream.guildId, n.stream.channelId, l),
                                }),
                                (0, r.jsx)(es.Ay, {
                                    primaryGuild: a.primaryGuild,
                                    userId: a.id,
                                    containerClassName: ep.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, F.YX)(em.uss.GO_LIVE, {
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
                        className: ep.FO,
                        children:
                            t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(ex, { participant: n }),
                                    (0, r.jsx)(Y.m, {
                                        text: eg.intl.string(eg.t["3D5yo/"]),
                                        children: (0, r.jsx)(A.D, {
                                            className: ep.IF,
                                            onClick: ef(n, s),
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
let eE = new Set([em.XYD.ENDED, em.XYD.FAILED, em.XYD.PAUSED]),
    eS = c.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: s, pinned: l } = e,
            a = (0, H.bG)([M.A], () => M.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, er.Us)(),
            d = null != a && eE.has(a.state),
            u = null != a,
            c = (0, eh.dh)(t.stream),
            h = (0, eh.XG)(t.stream);
        return (!u && i) || d
            ? null
            : (0, r.jsxs)("div", {
                  className: ep.Vs,
                  children: [
                      u && !i && (0, r.jsx)(en.Ay, { size: en.Ay.Sizes.SMALL, className: ep.Ok }),
                      u
                          ? (0, r.jsx)("div", {
                                className: ep.X$,
                                children: (0, r.jsx)(K.s, {
                                    "aria-label": eg.intl.formatToPlainString(eg.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: ef(t, o),
                                    className: ep.X$,
                                    style: { transform: `scale(${c})` },
                                    children: (0, r.jsx)(ea.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? el.$.CONTAIN,
                                        popoutType: et.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: i ? ep.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, r.jsx)("div", {
                                className: ep.Rh,
                                children: (0, r.jsx)(ei.A, { noText: !0, className: ep.HL, stream: t.stream }),
                            }),
                      i
                          ? null
                          : (0, r.jsx)(eA, {
                                participant: t,
                                hasActiveStream: u,
                                onEnablePin: () => {
                                    l || (0, J.v0)(s);
                                },
                            }),
                  ],
              });
    });
var eI = n(765671),
    ev = n(531685),
    eT = n(365971),
    ej = n(129537);
let eC = 9 / 16,
    ey = 16 / 9;
function ew(e, t) {
    return t * (Math.max(1, e) - 1);
}
function eb(e) {
    let { width: t, height: n, containerOffset: i, gapSize: s, tileCount: r, isVertical: l } = e,
        a = l ? t : t - ew(r, s),
        o = l ? n - ew(r, s) : n;
    return { verticalRatio: (o - i) / (a - i), horizontalRatio: (a - i) / (o - i) };
}
function eN(e, t, n) {
    let { containerOffset: i, gapSize: s, tileCount: r, isVertical: l } = t,
        { maxWidth: a, maxHeight: o } = n,
        d = Math.max(1, r),
        u = e.width > a,
        c = e.height > o;
    if (!u && !c) return e;
    let h = ew(r, s),
        { verticalRatio: m, horizontalRatio: g } = eb({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: s,
            tileCount: d,
            isVertical: l,
        }),
        p = e.width - i,
        x = e.height - i,
        f = a - i,
        A = o - i;
    return (
        l ? ((A -= h), (x -= h)) : ((f -= h), (p -= h)),
        u && c && (e.width > e.height ? (x = (p = f) * m) : (p = (x = A) * g), (u = p > f), (c = x > A)),
        u && (x = (p = f) * m),
        c && (p = (x = A) * g),
        l ? (x += ew(r, s)) : (p += ew(r, s)),
        { width: p + i, height: x + i }
    );
}
var e_ = n(897720),
    eR = n(545807);
let eO = (e, t) => 2 * e + 2 * t,
    eM = (e) => {
        let { width: t, height: n } = e;
        return { fixed: !0, width: t, height: n };
    };
function ek(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        r = { width: s, height: s * eC },
        l = Math.max(1, e),
        a = ew(e, t),
        o = eO(n, t);
    return i
        ? { width: r.width + o, height: r.height * l + a + o }
        : { width: r.width * l + a + o, height: r.height + o };
}
function eD(e, t, n, i) {
    let s = eO(e, t);
    return i ? n.width - s : (n.height - s) * ey;
}
function ez(e) {
    return e.height > e.width;
}
let eP = 180 / 1080;
function eL(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: s, previousContainerSize: r, widgetMinMaxSizes: l } = e,
        a = t === e_.IV.VERTICAL,
        o = eD(i, s, r, a);
    return eN(
        ek(n, s, i, a, o),
        { containerOffset: eO(i, s), gapSize: s, tileCount: n, isVertical: a },
        { maxWidth: l.maxSize.width, maxHeight: l.maxSize.height },
    );
}
function eV(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: s, minSize: r, containerSpecs: l, defaultSize: a, ...o } = e,
        d = (e) =>
            eG({
                operation: ej.P.RESIZE_NORTH,
                computedSize: e,
                originSize: e,
                borderWidth: i,
                padding: s,
                containerSpecs: l,
                ...o,
            }),
        u = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(r) } };
    null != a && (u.defaultSize = { ...d(a) }), (0, J.Ju)({ ...u });
}
let eG = (e) => {
    let t,
        n,
        i,
        { operation: s, computedSize: r, originSize: l, borderWidth: a, padding: o, containerSpecs: d } = e,
        u = eO(a, o),
        c = Math.max(1, l.width),
        h = Math.max(1, l.height),
        m = { width: c, height: h },
        g = ez(m),
        p = ((t = ez(m)), (n = eD(a, o, m, t)), (i = n * eC), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        x = eb({ width: c, height: h, containerOffset: u, gapSize: o, tileCount: p, isVertical: g }),
        f = ew(p, o);
    return eN(
        (() => {
            var e, t;
            switch (s) {
                case ej.P.RESIZE_NORTH:
                case ej.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: r.height,
                        width: ((e = r.height), (n = ((g ? e - f : e) - u) * x.horizontalRatio), g || (n += f), n + u),
                    };
                default:
                    let i;
                    return {
                        width: r.width,
                        height: ((t = r.width), (i = ((g ? t : t - f) - u) * x.verticalRatio), g && (i += f), i + u),
                    };
            }
        })(),
        { containerOffset: u, gapSize: o, tileCount: p, isVertical: g },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eU = n(220959);
let eF = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    eH = c.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: s,
                locked: l,
                activeStreams: a,
                streamParticipants: o,
                participantsVersion: d,
                pinned: u,
                padding: h,
            } = e,
            g = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: l,
                widgetId: t,
                pinned: u,
            })),
            p = (0, G.A)(n),
            A = (0, G.A)(l),
            E = s === e_.IV.VERTICAL,
            S = l || A !== l || p !== n,
            I = c.useMemo(() => {
                let e = 0,
                    t = 0;
                return E
                    ? g.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? h : 0)) - t.height, x: 0 }))
                    : g.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? h : 0)) - e.width, y: 0 }));
            }, [g, h, E]),
            v = c.useMemo(
                () => (0 === I.length ? 256 * eC : I.reduce((e, t) => e + t.height, 0) + (E ? h * (I.length - 1) : 0)),
                [I, E, h],
            ),
            T = c.useMemo(
                () => (0 === I.length ? 256 : I.reduce((e, t) => e + t.width, 0) + (E ? 0 : h * (I.length - 1))),
                [I, E, h],
            ),
            j = (0, f.p)(
                I,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: s } = e;
                        return { x: t, y: n, width: i, height: s, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: s } = e;
                        return { x: t, y: n, width: i, height: s };
                    },
                    config: eF,
                    trail: 100 * !S,
                },
                S ? "animate-never" : "respect-motion-settings",
            ),
            C = (0, F.Dk)(() => new Set(o.map((e) => e.user.id)), [o, d]),
            y = (0, F.Dk)(() => new Set(o.filter((e) => a.has((0, R._z)(e.stream))).map((e) => e.user.id)), [o, a, d]);
        return (
            c.useEffect(() => {
                0 !== C.size &&
                    (0, F.Y)(em.uss.GO_LIVE, {
                        locked: U.default.isInstanceLocked(),
                        shownUserIds: Array.from(C),
                        liveUserIds: Array.from(y),
                        contentInventoryIds: [],
                    });
            }, [C, y]),
            (0, r.jsx)("div", {
                className: m()({ [eU.UT]: !0, [eU.Vd]: E, [eU.xM]: !E }),
                style: E ? { height: v } : { width: T },
                children: j((e, t, s, l) =>
                    (0, r.jsx)(x.animated.div, {
                        className: eU.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: g.length - l }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: i, widgetId: s, pinned: l } = e;
                            return (0, r.jsx)("div", {
                                className: eU.iA,
                                children: (0, r.jsx)(
                                    eS,
                                    { participant: t, width: n, locked: i, widgetId: s, pinned: l },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
var eZ = n(392164),
    eY = n(674243);
function eX(e) {
    var t, n;
    let i,
        s,
        l,
        {
            id: a,
            widget: o,
            size: d,
            locked: u,
            padding: h,
            borderWidth: m,
            opacity: g,
            horizontal: p,
            pinned: x,
            anchorTop: f,
            anchorLeft: A,
            showEmpty: E = !0,
        } = e,
        S = p ? e_.IV.HORIZONTAL : e_.IV.VERTICAL,
        I = S === e_.IV.VERTICAL,
        v = (0, y.bG)([z.A], () => {
            let e = z.A.getWidget(a);
            return !!(0, e_.dO)(e) && !u && (e.meta.showAllStreams ?? !0);
        }, [a, u]),
        T = (0, y.bG)([P.A], () => P.A.getVoiceChannelId()),
        j = (0, y.bG)([D.A], () => D.A.getChannel(T)),
        C = (0, y.bG)([k.default], () => k.default.getId()),
        {
            streamParticipants: U,
            activeStreams: F,
            participantsVersion: H,
        } = ((t = (f && I) || (A && p)),
        (n = (!f && I) || (!A && p)),
        (i = (0, y.yK)([M.A], () => (null == T ? [] : M.A.getAllActiveStreamsForChannel(T)))),
        (s = c.useMemo(() => new Set(i.map((e) => (0, R._z)(e))), [i])),
        (l = (0, y.bG)([_.A], () => (null == T ? -1 : _.A.getParticipantsVersion(T)))),
        {
            streamParticipants: (0, y.yK)([_.A, M.A], () => {
                if (null == T) return [];
                function e(e) {
                    return s.has((0, R._z)(e.stream));
                }
                let i = _.A.getStreamParticipants(T).filter((t) => {
                    if (t.user.id === C) return !1;
                    let n = M.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && eE.has(n.state)) && (!!v || e(t));
                });
                return (
                    i.sort((i, s) => {
                        if (t) {
                            if (e(i) && !e(s)) return -1;
                            if (!e(i) && e(s)) return 1;
                        } else if (n) {
                            if (e(i) && !e(s)) return 1;
                            if (!e(i) && e(s)) return -1;
                        }
                        return i.user.username.localeCompare(s.user.username);
                    }),
                    i
                );
            }, [T, s, C, v, t, n]),
            activeStreams: s,
            participantsVersion: l,
        }),
        Z = U.length,
        Y = (0, y.bG)([O.A], () => O.A.getWindowState(eZ.f), []),
        {
            tileWidth: X,
            tileHeight: W,
            widgetWidth: B,
            widgetHeight: q,
            containerRef: K,
            containerMinMaxSizes: Q,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: s, widgetSize: r } = e,
                { width: l, height: a } = {
                    width: "number" == typeof r.width ? r.width : 256,
                    height: "number" == typeof r.height ? r.height : 256 * eC,
                },
                { width: o = l, height: d = a, ref: u } = (0, eI.Ay)(),
                c = (0, eR.A)(),
                h = (0, eT.Q2)(c),
                m = (0, y.bG)([ev.A], () => ev.A.windowSize(h), [h]),
                g = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: s,
                            windowHeight: r,
                            isVertical: l,
                        } = e,
                        a = ek(t, n, i, l),
                        o = { maxX: s ?? (2 * a.width) / 0.75, maxY: r ?? (2 * a.height) / 0.75, minX: 0, minY: 0 },
                        d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        u = (r ?? 0) * eP;
                    return (
                        (u = Math.max(a.height, u)),
                        {
                            minSize: a,
                            defaultSize: ek(t, n, i, l, (u = Math.min(d.height, u)) * ey),
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
                    isVertical: s,
                }),
                p = eO(i, n),
                x = eD(i, n, { width: o + p, height: d + p }, s),
                f = x * eC;
            return {
                tileWidth: x,
                tileHeight: f,
                widgetWidth: l,
                widgetHeight: a,
                containerRef: u,
                containerMinMaxSizes: g,
            };
        })({ tileCount: Z, padding: h, borderWidth: m, isVertical: I, widgetSize: d }),
        J = {
            id: a,
            widget: o,
            layout: S,
            participants: U.length,
            padding: h,
            borderWidth: m,
            widgetMinMaxSizes: Q,
            containerSize: { width: B, height: q },
            orientedPosition: { top: 0, left: 0, bottom: Y?.height ?? q, right: Y?.width ?? B },
            locked: u,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            s = c.useRef(i);
        s.current = i;
        let r = (0, G.A)(n),
            l = t.length,
            a = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        (0, N.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: r,
                widget: a,
                borderWidth: o,
                locked: d,
                ...u
            } = s.current;
            null == a ||
                eV({
                    widgetId: e,
                    size: eM(
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
                    minSize: eM(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: r,
                    borderWidth: o,
                    widget: a,
                    ...u,
                });
        }),
            c.useLayoutEffect(() => {
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: n,
                    layout: i,
                    padding: r,
                    widget: a,
                    borderWidth: o,
                    locked: d,
                    ...u
                } = s.current;
                if (null != a) {
                    if (0 === l) {
                        if (d) return;
                        eV({
                            widgetId: e,
                            size: eM(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: eM(t.minSize),
                            padding: r,
                            borderWidth: o,
                            widget: a,
                            containerSpecs: t.containerSpecs,
                            ...u,
                        });
                        return;
                    }
                    eV({
                        widgetId: e,
                        size: eM(
                            eL({
                                layout: i,
                                tileCount: l,
                                borderWidth: o,
                                padding: r,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: eM(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: r,
                        borderWidth: o,
                        widget: a,
                        ...u,
                    });
                }
            }, [l, a]),
            c.useLayoutEffect(() => {
                if (s.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: l,
                    borderWidth: a,
                    participants: o,
                    widget: d,
                    ...u
                } = s.current;
                if (null == d || r === n) return;
                let c = (function (e) {
                    let {
                            oldLayout: t,
                            newLayout: n,
                            tileCount: i,
                            borderWidth: s,
                            padding: r,
                            previousContainerSize: l,
                            widgetMinMaxSizes: a,
                        } = e,
                        o = eD(s, r, l, t === e_.IV.VERTICAL);
                    return eN(
                        ek(i, r, s, n === e_.IV.VERTICAL, o),
                        { containerOffset: eO(s, r), gapSize: r, tileCount: i, isVertical: n === e_.IV.VERTICAL },
                        { maxWidth: a.maxSize.width, maxHeight: a.maxSize.height },
                    );
                })({
                    oldLayout: r ?? n,
                    newLayout: n,
                    tileCount: o,
                    borderWidth: a,
                    padding: l,
                    previousContainerSize: i,
                    widgetMinMaxSizes: t,
                });
                eV({
                    widgetId: e,
                    size: eM(c),
                    minSize: eM(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: a,
                    widget: d,
                    ...u,
                });
            }, [n, r]),
            (0, N.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...r } = s.current;
                null != n &&
                    eV({
                        widgetId: e,
                        size: eM(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: eM(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...r,
                    });
            });
    })({ id: a, streamParticipants: U, layout: S, widgetLayoutSpecs: J });
    let $ = null == j || (0 === F.size && u) || (0 === Z && !u);
    return (c.useEffect(() => {
        b.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !$);
    }, [$]),
    (0, N.Ay)(() => () => {
        b.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    ($ || !x) && u)
        ? null
        : $ && !u
          ? E
              ? u
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: eg.intl.string(eg.t["T6+rXy"]), icon: w.F, absolute: !0 })
              : null
          : (0, r.jsx)("div", {
                className: eY.u,
                style: { opacity: g },
                ref: K,
                children: (0, r.jsx)(eH, {
                    widgetId: a,
                    tileWidth: X,
                    tileHeight: W,
                    locked: u,
                    layout: S,
                    activeStreams: F,
                    streamParticipants: U,
                    participantsVersion: H,
                    pinned: x,
                    padding: h,
                }),
            });
}
var eW = n(243721),
    eB = n(821609),
    eq = n(706712),
    eK = n(587626),
    eQ = n(321090),
    eJ = n(548934);
function e$(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        s = (0, y.bG)([eK.A], () => eK.A.getSocket()),
        l = (0, y.bG)([eQ.A], () => eQ.A.isGPUBoosted());
    (0, eq.ZX)();
    let a = (0, y.bG)([O.A], () => O.A.getWindow(eZ.f)),
        [o, d] = (0, eq.DQ)(s),
        {
            currentFPS: u,
            averageFrameTime: h,
            timeSinceLastDrop: g,
            onResetFrameData: p,
            droppedFramesRef: x,
            renderedFrameCount: f,
            bufferFramecountRef: A,
            frameCheckerEffect: S,
        } = (0, eq.Dj)(!0, o, !0),
        [v, T, j] = (0, eq.F5)(s),
        [C, w] = (0, eq.km)(v, S, a),
        b = performance.now() - d.current < eq.Jc,
        _ = T(h, A.current);
    (0, N.Ay)(
        () => (
            C(),
            () => {
                w();
            }
        ),
    );
    let R = c.useCallback(() => {
            p(), j(), C();
        }, [p, j, C]),
        [M, k] = c.useState(!0),
        [D, z] = c.useState(!0),
        [P, L] = c.useState(!0),
        [V, G] = c.useState(!0),
        [U, F] = c.useState(!0);
    return t && !n
        ? null
        : (0, r.jsxs)("div", {
              className: m()(eJ.st, !i && eJ.Hk),
              children: [
                  (M || !t) &&
                      (0, r.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, r.jsx)(eW.d, { checked: M, onChange: (e) => k(e) }),
                                  }),
                              (0, r.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, r.jsx)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              u < 30
                                                  ? "text-feedback-critical"
                                                  : u < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: u.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (D || !t) &&
                      (0, r.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, r.jsx)(eW.d, { checked: D, onChange: (e) => z(e) }),
                                  }),
                              (0, r.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, r.jsxs)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: h > 1.1 * eq.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [h.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (P || !t) &&
                      (0, r.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, r.jsx)(eW.d, { checked: P, onChange: (e) => L(e) }),
                                  }),
                              (0, r.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, r.jsx)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              g < 2
                                                  ? "text-feedback-critical"
                                                  : g < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: x.current,
                                      }),
                                      (0, r.jsxs)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: eJ.af,
                                          children: ["(", ((x.current / f.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (V || !t) &&
                      (0, r.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, r.jsx)(eW.d, { checked: V, onChange: (e) => G(e) }),
                                  }),
                              (0, r.jsxs)(E.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: eJ.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, r.jsx)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: f.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, r.jsxs)("div", {
                          className: eJ.PG,
                          children: [
                              !t &&
                                  (0, r.jsx)("div", {
                                      className: eJ.On,
                                      children: (0, r.jsx)(eW.d, { checked: U, onChange: (e) => F(e) }),
                                  }),
                              (0, r.jsx)(Y.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, r.jsx)("div", {
                                      children: (0, r.jsxs)(E.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: eJ.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, r.jsxs)(E.E, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: _ > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [_.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  b &&
                      (0, r.jsx)(Y.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, r.jsx)("span", {
                              children: (0, r.jsx)(E.E, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  l &&
                      (0, r.jsx)(E.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, r.jsx)("div", {
                          className: eJ.m8,
                          children: (0, r.jsx)(I.A, {
                              children: (0, r.jsx)(eB.$, { variant: "primary", text: "Reset Frame Data", onClick: R }),
                          }),
                      }),
              ],
          });
}
var e0 = n(417098),
    e1 = n(55619),
    e2 = n(351906),
    e3 = n(377802),
    e5 = n(348858),
    e6 = n(523875),
    e4 = n(416696),
    e9 = n(621956),
    e8 = n(446080),
    e7 = n(922016),
    te = n(615675),
    tt = n(978940),
    tn = n(730852),
    ti = n(688810),
    ts = n(617354),
    tr = n(980923),
    tl = n(206018),
    ta = n(329072),
    to = n(18235),
    td = n(183184),
    tu = n(47167),
    tc = n(713654),
    th = n(880144),
    tm = n(338771),
    tg = n(548118),
    tp = n(999751),
    tx = n(209932),
    tf = n(277192),
    tA = n(167579),
    tE = n(704877),
    tS = n(173660),
    tI = n(675991),
    tv = n(848362),
    tT = n(141157),
    tj = n(222692),
    tC = n(204651),
    ty = n(71393),
    tw = n(977997),
    tb = n(823901),
    tN = n(489277),
    t_ = n(243612),
    tR = n(296841);
function tO(e) {
    let t = c.useRef(null);
    return (
        c.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function tM(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: s,
        iconColor: l,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: u,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: m,
        onPopoutClick: g,
        onMouseEnter: p,
        onMouseLeave: x,
        onContextMenu: f,
        isTrayButton: A,
        ...E
    } = e;
    return (0, r.jsx)(tC.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: tR.x6,
        disabled: i,
        popoutOpen: c,
        popoutDisabled: m,
        label: a,
        isTrayButton: A,
        onMouseEnter: (e) => {
            p?.(e);
        },
        onMouseLeave: (e) => {
            x?.(e);
        },
        iconComponent: s,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: f,
        onPopoutClick: g,
        "aria-label": E["aria-label"],
    });
}
function tk(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        { suppress: s, selfMute: l, mute: a } = (0, tS.A)(t),
        o = l || a || s,
        d = (0, tr.A)(l, a, s, !1),
        { Component: u, play: h, events: m } = (0, e6.L)(o ? "unmute" : "mute");
    c.useEffect(() => () => h(), [h, o]);
    let g = tO(n),
        p = (e) => (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.MICROPHONE, value: F.IP.SETTINGS_OPENED });
        };
    return (0, r.jsx)(e7.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = g(t);
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
        animation: e7.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tM, {
                ref: i,
                iconComponent: u,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    (0, td.A)(a, s, em.JJy.OVERLAY),
                        (0, F.YX)(em.uss.QUICK_ACTIONS, {
                            type: F.Z5.MICROPHONE,
                            value: o ? F.IP.ENABLED : F.IP.DISABLED,
                            userId: k.default.getId(),
                        });
                },
                onPopoutClick: p(n),
                onContextMenu: p(n),
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
        i = c.useRef(null),
        { selfDeaf: s, deaf: l } = (0, tA.A)(t),
        a = s || l,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: h },
        } = (0, e5.I)(a ? "undeafen" : "deafen"),
        m = l ? te.T : o;
    c.useEffect(() => () => d(), [a, d]);
    let g = () => {
            (0, to.A)(l, em.JJy.OVERLAY),
                (0, F.YX)(em.uss.QUICK_ACTIONS, {
                    type: F.Z5.AUDIO,
                    value: l ? F.IP.ENABLED : F.IP.DISABLED,
                    userId: k.default.getId(),
                });
        },
        p = (e) => (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.AUDIO, value: F.IP.SETTINGS_OPENED });
        },
        x = tO(n);
    return (0, r.jsx)(e7.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tl.A, {
                onClose: x(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: e7.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, r.jsx)(tM, {
                ref: i,
                iconComponent: m,
                tooltip: (0, ts.A)(s, l, !1),
                isActive: a,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: p(n),
                onMouseEnter: u,
                onMouseLeave: h,
                onPopoutClick: p(n),
                popoutOpen: o,
                isTrayButton: !0,
            });
        },
    });
}
function tz(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        s = (0, y.bG)([ed.Ay], () => ed.Ay.isVideoEnabled()),
        l = (0, y.bG)([ed.Ay], () => Object.values(ed.Ay.getVideoDevices())[0]),
        a = l?.disabled ?? !0,
        o = !1 === a,
        d = (0, tE.A)(t),
        u = (e) => {
            Q.A.setVideoEnabled(e);
        },
        h = (e) => (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED });
        },
        m = () => {
            a ? (o ? u(!0) : (0, tj.A)()) : u(!s),
                (0, F.YX)(em.uss.QUICK_ACTIONS, {
                    type: F.Z5.CAMERA,
                    value: s ? F.IP.DISABLED : F.IP.ENABLED,
                    userId: k.default.getId(),
                });
        },
        {
            Component: g,
            play: p,
            events: { onMouseEnter: x, onMouseLeave: f },
        } = (0, e8.K)(s ? "disable" : "enable"),
        A = null != t ? (0, tI.Q)({ enabled: s, cameraUnavailable: a, hasPermission: d, channel: t }) : void 0;
    c.useEffect(() => () => p(), [s, p]);
    let E = tO(n),
        S = null == t || !d;
    return (0, r.jsx)(e7.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(ta.A, { onClose: E(t), appContext: em.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: e7.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tM, {
                ref: i,
                iconComponent: g,
                tooltip: A,
                onClick: m,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: h(n),
                popoutOpen: l,
                onContextMenu: h(n),
                onMouseEnter: x,
                onMouseLeave: f,
                disabled: S,
                isTrayButton: !0,
            });
        },
    });
}
function tP(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        s = c.useRef(null),
        l = (0, y.bG)([eu.default], () => eu.default.getCurrentUser()),
        a = (0, tE.A)(n),
        o = (0, y.cf)([ed.Ay], () => (0, th.A)(ed.Ay)),
        d = (0, y.bG)([M.A], () => M.A.getCurrentUserActiveStream()),
        u = (0, y.bG)([tN.A], () => tN.A.getTargetPID()),
        h = (0, tb.y)({ pid: u, allowOneClickGoLive: !0, analyticsLocation: em.ThZ.UNLOCKED_OVERLAY }),
        m = () => {
            h(),
                (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.GO_LIVE, value: F.IP.ENABLED, userId: k.default.getId() });
        },
        g = null != d;
    if (g) t = eg.intl.string(eg.t.S5anIc);
    else if (null != n) {
        let e = (0, t_.qv)();
        t = a
            ? null != e
                ? eg.intl.format(eg.t.AB5gTy, { game: e.name })
                : eg.intl.string(eg.t.FeUKeA)
            : eg.intl.string(eg.t.uQn9B8);
    }
    let p = () => {
            if (g)
                return (
                    (0, F.YX)(em.uss.QUICK_ACTIONS, {
                        type: F.Z5.GO_LIVE,
                        value: F.IP.DISABLED,
                        userId: k.default.getId(),
                    }),
                    (0, tm.A)(d, !1)
                );
            m();
        },
        x = (e) => (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.SCREEN_SHARE, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: f,
            events: { onMouseEnter: A, onMouseLeave: E },
            play: S,
        } = (0, e4.c)(g ? "disable" : "enable");
    c.useEffect(() => () => S(), [g, S]);
    let I = tO(i);
    return (0, r.jsx)(e7.Y, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tv.A, {
                channel: n,
                currentUser: l,
                activeStreams: g ? [d] : [],
                handleGoLive: m,
                onClose: I(t),
                appContext: em.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: e7.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: l } = n;
            return (0, r.jsx)(tM, {
                ref: s,
                iconComponent: f,
                tooltip: t,
                "aria-label": eg.intl.string(eg.t.FeUKeA),
                isActive: g,
                highlightedColor: "green",
                onClick: p,
                popoutOpen: l,
                popoutDisabled: !g,
                onPopoutClick: x(i),
                onContextMenu: x(i),
                onMouseEnter: A,
                onMouseLeave: E,
                disabled: !o || !a,
                isTrayButton: !0,
            });
        },
    });
}
function tL(e) {
    let { voiceChannel: t, locked: i } = e,
        s = c.useRef(null),
        a = t?.getGuildId() ?? null,
        { mute: o, suppress: d } = (0, tS.A)(t),
        u = (0, y.bG)([ed.Ay], () => ed.Ay.isDeaf()),
        h = null == t || o || d || u,
        { analyticsLocations: m } = (0, ti.Ay)();
    function g(e) {
        null != a &&
            ((0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.SOUNDBOARD, value: F.IP.SETTINGS_OPENED }),
            (0, l.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: m, guildId: a, ...t });
            }));
    }
    let {
            Component: p,
            events: { onClick: x, onMouseEnter: f, onMouseLeave: A },
        } = (0, e9.E)(),
        E = tO(i),
        S = (0, y.bG)([tx.A, k.default], () => tx.A.isUserPlayingSounds(k.default.getId()), []) ? "green" : void 0;
    return (0, r.jsx)(e7.Y, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return h || null == t
                ? (0, r.jsx)(r.Fragment, {})
                : (0, r.jsx)(tf.A, { guildId: a, channel: t, onClose: E(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: e7.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tM, {
                ref: s,
                iconComponent: p,
                tooltip: o
                    ? eg.intl.string(eg.t["Ox4/zU"])
                    : d
                      ? eg.intl.string(eg.t["+YBKYI"])
                      : u
                        ? eg.intl.string(eg.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    x(),
                        (0, F.YX)(em.uss.QUICK_ACTIONS, {
                            type: F.Z5.SOUNDBOARD,
                            value: F.IP.PANEL_OPENED,
                            userId: k.default.getId(),
                        }),
                        n(e);
                },
                highlightedColor: S,
                defaultColor: S,
                onContextMenu: g,
                onMouseEnter: f,
                onMouseLeave: A,
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
        i = c.useRef(null),
        s = (0, y.bG)([P.A], () => P.A.getVoiceChannelId() === t?.id),
        l = () => {
            (0, F.YX)(em.uss.QUICK_ACTIONS, {
                type: F.Z5.CALL_BUTTON,
                value: F.IP.DISABLED,
                userId: k.default.getId(),
            }),
                s && tn.default.disconnect();
        },
        a = (e, t) => {
            tn.default.selectVoiceChannel(e),
                (0, F.YX)(em.uss.QUICK_ACTIONS, {
                    type: F.Z5.CALL_BUTTON,
                    value: F.IP.ENABLED,
                    userId: k.default.getId(),
                    secondaryValue: t,
                });
        },
        [o, d] = c.useTransition(),
        u = (e) => (t) => {
            d(() => {
                e(t);
            }),
                (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.SETTINGS_OPENED });
        },
        {
            Component: h,
            events: { onMouseEnter: m, onMouseLeave: g },
        } = (0, e3.O)(),
        p = tO(n),
        x = (0, tT.qZ)(),
        f = s ? h : tt._;
    return (0, r.jsx)(e7.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(tT.Ay, {
                allAvailableChannelRows: x,
                currentVoiceChannel: t,
                onClose: p(n),
                onSelect: a,
            });
        },
        align: "center",
        position: "top",
        animation: e7.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, r.jsx)(tM, {
                ref: i,
                iconComponent: f,
                tooltip: s ? eg.intl.string(eg.t["6vrfgt"]) : eg.intl.string(eg.t.S0W8Z5),
                onClick: s ? l : u(n),
                defaultColor: s ? "disconnect" : void 0,
                onMouseEnter: m,
                onMouseLeave: g,
                onContextMenu: u(n),
                isActive: a,
                onPopoutClick: s ? u(n) : void 0,
                popoutOpen: a,
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
                            (0, r.jsx)(tg.Ay, { guild: n, size: tg.Ay.Sizes.SMOL, className: tR.$f }),
                            (0, r.jsx)(E.E, {
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
        n = (0, tc.gU)(t),
        i = (0, tu.Ay)(t);
    return (0, r.jsxs)("div", {
        className: tR.Wh,
        children: [
            null != n &&
                (0, r.jsx)(E.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: tR.p,
                    children: (0, r.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, r.jsx)(E.E, { variant: "text-sm/medium", color: "text-muted", className: tR.HA, children: i }),
        ],
    });
}
function tF(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, y.cf)([a.A], () => ({ quality: a.A.getQuality(), state: a.A.getState(), lastPing: a.A.getLastPing() })),
        s = (0, y.bG)([tw.A], () => null != n && tw.A.hasVideo(n), [n]),
        l = (0, d.Mn)("VoiceConnectionStatus"),
        o = (0, y.bG)([e2.A], () => e2.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tp.A, { ...i, channelId: n, hasVideo: s, connectionStatusTextVariant: "text-sm/medium" }),
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
var tH = n(423005);
let tZ = c.memo(function () {
    let e = (0, y.bG)([e2.A], () => e2.A.enabled),
        t = (0, d.Mn)("StreamerModeNotice");
    return e && t
        ? (0, r.jsxs)(e0.$T, {
              color: e0.Hv.STREAMER_MODE,
              className: tH.$X,
              children: [
                  (0, r.jsx)(E.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "always-white",
                      children: eg.intl.string(eg.t.q9K7jp),
                  }),
                  (0, r.jsx)(e0.Z_, {
                      className: tH.lI,
                      onClick: () => e1.A.setEnabled(!1),
                      noticeType: em.kqX.STREAMER_MODE,
                      children: eg.intl.string(eg.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function tY(e) {
    let { locked: t } = e,
        n = (0, y.bG)([P.A], () => P.A.getVoiceChannelId()),
        i = (0, y.bG)([D.A], () => D.A.getChannel(n)),
        s = null != i;
    return (0, r.jsxs)("div", {
        className: m()({ [tH.KE]: !0, [tH.xt]: t }),
        children: [
            (0, r.jsx)(tZ, {}),
            (0, r.jsxs)("div", {
                className: tH.Pm,
                children: [
                    (0, r.jsxs)("div", {
                        className: tH.qi,
                        children: [
                            (0, r.jsx)(tk, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tD, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tz, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tH.qi,
                        children: [
                            (0, r.jsx)(tP, { voiceChannel: i, locked: t }),
                            (0, r.jsx)(tL, { voiceChannel: i, locked: t }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m()(tH.qi, s && tH.SV),
                        children: (0, r.jsx)(tV, { voiceChannel: i, locked: t }),
                    }),
                ],
            }),
            s && (0, r.jsx)("div", { className: tH.Pm, children: (0, r.jsx)(tF, { voiceChannel: i, locked: t }) }),
        ],
    });
}
var tX = n(534890),
    tW = n(364522),
    tB = n(994500);
function tq(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function tK(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var tQ = n(459192),
    tJ = n(408278),
    t$ = n(366605),
    t0 = n(780338),
    t1 = n(782603),
    t2 = n(241541),
    t3 = n(320448),
    t5 = n(661531),
    t6 = n(446576),
    t4 = n(789645),
    t9 = n(387755),
    t8 = n(945830),
    t7 = n(461678),
    ne = n(880682),
    nt = n(95701),
    nn = n(543465),
    ni = n(914853),
    ns = n(220884),
    nr = n(145567),
    nl = n(778712),
    na = n(290863),
    no = n(172491),
    nd = n(912156),
    nu = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nc(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? nl._3.SIZE_24 : nl._3.SIZE_40;
        case "guild":
            return 24 === e ? tg.Ay.Sizes.SMALLER : tg.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let nh = c.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: s = !1,
            size: l = 24,
            isTyping: a = !1,
            mentionCount: o = 0,
            isMentionLowImportance: d = !1,
        } = e,
        u = t?.isPrivate() ?? !1,
        c = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        m = (0, y.bG)([na.A], () => (null != h ? na.A.getStatus(h) : null), [h]),
        g = (0, y.bG)([na.A], () => null != h && na.A.isMobileOnline(h), [h]);
    if (u || c)
        return (0, r.jsx)(no.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nc(l, "user"),
            status: m,
            isMobile: g,
            isTyping: a,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i) return (0, r.jsx)(tX.o, { size: nc(l, "default"), color: t5.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, r.jsx)(tg.Ay, { guild: i, size: nc(l, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === l ? nd.Q.MEDIUM_40 : nd.Q.TINY_24;
        return (0, r.jsx)(nd.A, { channel: t, guild: i, size: e, isTyping: a });
    }
});
var nm = n(137177);
function ng(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, r.jsx)(nm.A, { game: t, size: nm.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var np = n(429913),
    nx = n(34307),
    nf = n(499214),
    nA = n(657956);
function nE(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nS(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s } = e,
        l = c.useRef(null);
    return t?.id == null
        ? null
        : (0, r.jsx)(e7.Y, {
              targetElementRef: l,
              shouldShow: n,
              animation: e7.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: s,
              renderPopout: (e) =>
                  (0, r.jsx)(t8.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, F.YX)(em.uss.TEXT_CHAT_V3, {
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
                      ref: l,
                      children: (0, r.jsx)(Y.m, {
                          text: eg.intl.string(eg.t["mp1N/2"]),
                          "aria-label": eg.intl.string(eg.t["mp1N/2"]),
                          children: (0, r.jsx)(tJ.K, {
                              ...n,
                              icon: t$.t,
                              "aria-label": eg.intl.string(eg.t["mp1N/2"]),
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
        n = c.useRef(null),
        i = t?.id ?? null,
        s = t?.guild_id != null,
        [l, a] = (0, y.yK)(
            [nn.Ay],
            () =>
                s && null != i && null != t
                    ? [nn.Ay.isChannelMuted(t.getGuildId(), t.id), nn.Ay.resolvedMessageNotifications(t)]
                    : [!1, em.orn.ALL_MESSAGES],
            [t, i, s],
        ),
        [o, d] = c.useState(!1),
        u = c.useCallback(() => {
            d((e) => !e),
                (0, F.YX)(em.uss.TEXT_CHAT_V3, {
                    type: F.Z5.TEXT_CHAT,
                    value: F.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                });
        }, []),
        h = eg.intl.string(eg.t.h850Ss),
        m = l || a !== em.orn.ALL_MESSAGES ? t0.a : t1.X;
    return s && null != t
        ? (0, r.jsx)(e7.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: e7.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, r.jsx)(t7.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: eg.intl.string(eg.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, r.jsx)("div", {
                      ref: n,
                      children: (0, r.jsx)(Y.m, {
                          text: h,
                          "aria-label": h,
                          children: (0, r.jsx)(tJ.K, {
                              ...i,
                              icon: m,
                              "aria-label": h,
                              size: "sm",
                              variant: "icon-only",
                              onClick: u,
                          }),
                      }),
                  });
              },
          })
        : null;
}
function nv(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: s, onRequestClosePinsPopout: l } = e;
    return nE(t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.m, {
                      text: eg.intl.string(eg.t.JJogjm),
                      "aria-label": eg.intl.string(eg.t.JJogjm),
                      children: (0, r.jsx)(tJ.K, {
                          icon: tt._,
                          "aria-label": eg.intl.string(eg.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, r.jsx)(nS, { channel: t, pinsOpen: i, onTogglePinsPopout: s, onRequestClosePinsPopout: l }),
                  t.isMultiUserDM()
                      ? (0, r.jsx)(Y.m, {
                            text: eg.intl.string(eg.t["LR+Ptf"]),
                            "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                            children: (0, r.jsx)(tJ.K, {
                                icon: t2.D,
                                "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, F.YX)(em.uss.TEXT_CHAT_V3, {
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
                                                    source: nx.B.MANUAL,
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
function nT(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(nI, { channel: t }),
                  (0, r.jsx)(nS, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s }),
              ],
          });
}
function nj(e) {
    let t,
        { channel: n, user: i, guild: s, title: l, dragStart: o, dragging: u } = e,
        { hasFriendList: h } = (0, d.M8)("TextChatHeader"),
        [g, p] = c.useState(!1),
        x = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        f = n?.isDM() ? (i?.id ?? null) : null,
        S =
            ((t = (0, y.bG)([na.A], () => {
                if (null != f)
                    return (
                        (function (e) {
                            for (let t of e)
                                if (t.type === em.$pd.PLAYING && null != t.application_id) return t.application_id;
                            return null;
                        })(na.A.getActivities(f)) ?? void 0
                    );
            }, [f])),
            (0, np.h)(t) ?? void 0),
        I = x === n?.id,
        v = eg.intl.string(nf.default.tYPfF2),
        T = (0, y.bG)([D.A], () => (n?.isThread() && null != n.parent_id ? D.A.getChannel(n.parent_id) : null), [n]),
        j = (0, y.bG)([eu.default, tB.A], () => (null != T ? (0, tu.m1)(T, eu.default, tB.A) : null), [T]),
        C = (0, y.bG)([], () => {
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
        w = c.useCallback(
            (e) => {
                nE(n) &&
                    ((0, F.YX)(em.uss.TEXT_CHAT_V3, {
                        type: F.Z5.CALL_BUTTON,
                        value: F.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    t9.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        b = c.useCallback(() => {
            n?.id != null &&
                p((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                type: F.Z5.TEXT_CHAT,
                                value: F.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, r.jsxs)("div", {
        className: m()(nA.XV, u && nA.cB),
        onMouseDown: (e) => {
            0 === e.button && o(ej.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, r.jsxs)("div", {
                className: nA.LD,
                children: [
                    (0, r.jsx)("div", {
                        className: nA.gr,
                        children: (0, r.jsx)(ng, {
                            application: S,
                            fallback: (0, r.jsx)(nh, { channel: null, user: i, guild: s, size: nu.SIZE_24 }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nA.G1,
                        children: [
                            (() => {
                                if (null != f) return null;
                                let e = (0, tc.gU)(n, s);
                                return null != e ? (0, r.jsx)(e, { className: nA.gr, size: "xs" }) : null;
                            })(),
                            null != T && null != j
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(A.D, {
                                              className: nA.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, nr.D$)({
                                                          target: {
                                                              kind: nr.bB.CHANNEL,
                                                              channelId: T.id,
                                                              guildId: T.getGuildId?.() ?? T.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nx.B.MANUAL,
                                                          widgetType: em.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, r.jsx)(E.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: j,
                                              }),
                                          }),
                                          (0, r.jsx)(t3._, {
                                              className: nA.ln,
                                              size: "xs",
                                              color: t5.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, r.jsxs)(E.E, {
                                className: nA.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    l,
                                    S?.name != null && "" !== S.name
                                        ? (0, r.jsx)(E.E, {
                                              tag: "span",
                                              className: nA.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: eg.intl.formatToPlainString(nf.default.x1k3cO, {
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
                className: nA.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, r.jsx)(nv, {
                        channel: n,
                        onStartPrivateCall: w,
                        pinsOpen: g,
                        onTogglePinsPopout: b,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    (0, r.jsx)(nT, {
                        channel: n,
                        pinsOpen: g,
                        onTogglePinsPopout: b,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    h &&
                        null != C &&
                        (0, r.jsx)(ns.j, {
                            tab: C.tab,
                            targetId: C.targetId,
                            widgetType: em.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (I
                            ? (0, r.jsx)(Y.m, {
                                  text: v,
                                  "aria-label": v,
                                  children: (0, r.jsx)(tJ.K, {
                                      icon: t6.g,
                                      "aria-label": v,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                              type: F.Z5.TEXT_CHAT,
                                              value: F.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nr.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, r.jsx)(tQ.u, {
                                  title: eg.intl.string(nf.default.ERApc4),
                                  body: eg.intl.string(nf.default.PBVXVW),
                                  children: (0, r.jsx)(tJ.K, {
                                      icon: t4.P,
                                      "aria-label": eg.intl.string(nf.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                                    type: F.Z5.TEXT_CHAT,
                                                    value: F.IP.CLOSED_TEXT_CHAT,
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
    ny = n(941971),
    nw = n(222823),
    nb = n(485296),
    nN = n(741961),
    n_ = n(228366),
    nR = n(308528);
let nO = new Set();
async function nM(e) {
    if (!nO.has(e)) {
        nO.add(e);
        try {
            let t = await nR.A.fetchChannel(e),
                n = (0, nt.UE)(t);
            n_.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void nR.A.preload(i, n.id);
        } catch {}
    }
}
var nk = n(95231),
    nD = (((s = {}).DEFAULT = "DEFAULT"), (s.CHANNEL_TYPE = "CHANNEL_TYPE"), s);
let nz = c.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: s = "DEFAULT" } = e,
        a = null != i && t === i,
        d = (0, y.bG)([o.A], () => o.A.getSelectedChannelId() === t, [t]),
        u = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        h = (0, nC.r)(t5.A.colors.ICON_STATUS_ONLINE),
        g = (0, y.bG)([nb.A], () => !!a && !!(nb.A.isAnyoneElseSpeaking() || nb.A.isCurrentUserSpeaking()), [a]),
        [p, x] = c.useState(!1),
        { mentionCount: f, isMentionLowImportance: E } = (0, y.cf)(
            [nw.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nw.Ay.getMentionCount(t),
                          isMentionLowImportance: nw.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: S,
            user: I,
            guild: v,
            channel: T,
        } = (0, y.cf)([D.A, ty.A, eu.default, tB.A], () => {
            let e = D.A.getChannel(t) ?? null;
            if (null == e) return { label: eg.intl.string(eg.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, tu.m1)(e, eu.default, tB.A);
            return { label: n, user: tq(e, eu.default), guild: tK(e, ty.A), channel: e };
        }, [t]);
    c.useEffect(() => {
        null == T && nM(t);
    }, [T, t]);
    let j = (0, y.bG)([nN.A, eu.default], () => {
            if (null == T) return !1;
            let e = eu.default.getCurrentUser()?.id ?? null,
                t = nN.A.getTypingUsers(T.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [T]),
        C = (0, y.bG)([nw.Ay], () => {
            let e = T?.id;
            return null != e && nw.Ay.hasUnread(e);
        }, [T]),
        w = (0, r.jsx)("div", {
            className: nk.St,
            children: (() => {
                let e = T?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === s && !e) {
                    let e = (0, tc.gU)(T, v);
                    e ??= tX.o;
                    let t = a && !u && g,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        s = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${s})`),
                        (0, r.jsx)("div", {
                            className: m()(nk.s, d && nk.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: nk.Yc,
                                size: "sm",
                                color: d ? t5.A.colors.WHITE : t5.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(nh, {
                    channel: T,
                    user: I,
                    guild: v,
                    isSelected: d,
                    size: nu.SIZE_40,
                    isTyping: j,
                    mentionCount: f,
                    isMentionLowImportance: E,
                });
            })(),
        }),
        b = (function (e) {
            let { channel: t, guild: i, user: s } = e;
            return c.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("81609"),
                                    n.e("53416"),
                                    n.e("77927"),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, selected: !1, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != s)
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("74389"),
                                    n.e("12697"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("8757"),
                                    n.e("89673"),
                                    n.e("85968"),
                                    n.e("60195"),
                                    n.e("29787"),
                                    n.e("97558"),
                                    n.e("94000"),
                                    n.e("91994"),
                                    n.e("38730"),
                                    n.e("76665"),
                                    n.e("76273"),
                                    n.e("45996"),
                                    n.e("792"),
                                    n.e("92822"),
                                    n.e("23427"),
                                    n.e("29422"),
                                    n.e("9291"),
                                    n.e("72883"),
                                    n.e("7059"),
                                    n.e("81609"),
                                    n.e("98199"),
                                    n.e("41175"),
                                    n.e("23490"),
                                    n.e("95049"),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        user: s,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: em.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("81609"),
                                    n.e("56985"),
                                ]).then(n.bind(n, 95616));
                                return (n) => (0, r.jsx)(e, { ...n, channel: t, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nt.ay)(t.type)) {
                            if (null == i) return;
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("47459"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("9004"),
                                    n.e("44058"),
                                    n.e("81609"),
                                    n.e("94138"),
                                    n.e("58262"),
                                    n.e("18663"),
                                    n.e("21905"),
                                ]).then(n.bind(n, 769192));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93190"),
                                    n.e("38730"),
                                    n.e("43266"),
                                    n.e("9004"),
                                    n.e("44058"),
                                    n.e("91377"),
                                    n.e("81609"),
                                    n.e("66540"),
                                    n.e("54036"),
                                ]).then(n.bind(n, 813407));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, s],
            );
        })({ channel: T, guild: v, user: I }),
        N = T?.isPrivate() ?? !1,
        _ = v?.name ?? "",
        R = N ? void 0 : S,
        O = N ? S : "" !== _ ? _ : S,
        M = (() => {
            if (null == T || N) return null;
            let e = (0, tc.gU)(T, v);
            return (e ??= tX.o), (0, r.jsx)(e, { size: "sm", color: t5.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == T
        ? (0, r.jsx)("div", { className: nk.R })
        : (0, r.jsx)(tQ.u, {
              title: R,
              body: O,
              asset: M,
              assetSize: 20,
              "aria-label": S,
              children: (0, r.jsxs)(A.D, {
                  className: nk.pc,
                  onClick: () => {
                      a && (0, nr.S$)({ minimized: !1 }),
                          (0, nr.D$)({
                              target: { kind: nr.bB.CHANNEL, channelId: t, guildId: v?.id ?? null, messageId: null },
                              source: nx.B.MANUAL,
                              widgetType: em.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: b,
                  onMouseEnter: () => x(!0),
                  onMouseLeave: () => x(!1),
                  children: [
                      w,
                      (0, r.jsx)("div", {
                          className: nk.vT,
                          children: (0, r.jsx)(ny.A, { selected: d, hovered: p, unread: C }),
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
    nF = n(625494),
    nH = n(827280);
function nZ(e) {
    let t,
        n,
        i,
        s,
        l,
        a,
        { selectedChannelId: o } = e,
        d = (0, y.bG)([D.A], () => D.A.getChannel(o), [o]),
        u = (0, eR.A)(),
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
    (n = c.useRef(new Set())),
    (i = (0, y.bG)([nG.A], () => (null != t ? nG.A.getMessages(t) : null), [t])),
    (s = (0, y.bG)([nU.A], () => nU.A.can(em.xBc.READ_MESSAGE_HISTORY, d), [d])),
    (l = i?.first() ?? null),
    (a = null != d && null == l && null != i && !i.loadingMore && !i.ready && !i.hasFetched && s),
    c.useEffect(() => {
        null == t || (!n.current.has(t) && a && (n.current.add(t), nP.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, a]),
    c.useEffect(() => {
        if (null == o) return;
        let e = u.requestAnimationFrame(() => {
            nF._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => u.cancelAnimationFrame(e);
    }, [o, u]),
    null != d)
        ? (0, r.jsx)("div", {
              className: nH.Q,
              children: (0, r.jsx)("div", {
                  className: nH.T,
                  children: (0, r.jsx)(nL.A, { channel: d, guild: h, chatInputType: nV.oU.OVERLAY }, d.id),
              }),
          })
        : null;
}
var nY = n(881890);
function nX(e) {
    let { dragStart: t, dragging: n } = e,
        [i, s] = (0, y.bG)([o.A], () => o.A.getSessionEntries()),
        l = (0, y.bG)([o.A], () => o.A.getSelectedChannelId()),
        d = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        u = (0, y.bG)([D.A], () => (null != l ? (D.A.getChannel(l) ?? null) : null), [l]);
    c.useEffect(() => {
        null == l || (null == u && nM(l));
    }, [u, l]);
    let h = (0, y.bG)([ty.A], () => tK(u, ty.A), [u]),
        m = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        g = c.useMemo(() => (null == m || 0 === s ? i : i.filter((e) => e.channelId !== m)), [i, s, m]),
        p = (0, F.Dk)(() => {
            let e = new Set();
            for (let t of (null != m && e.add(m), g)) e.add(t.channelId);
            return e;
        }, [g, m, s]),
        { shownUserIds: x, contentInventoryIds: f } = (0, y.bG)(
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
                })(p),
            [p],
        ),
        A = (0, F.Dk)(() => x, [x]),
        E = (0, F.Dk)(() => f, [f]);
    c.useEffect(() => {
        (0 !== A.size || 0 !== E.size) &&
            (0, F.Y)(em.uss.TEXT_CHAT_V3, {
                locked: U.default.isInstanceLocked(),
                shownUserIds: Array.from(A),
                liveUserIds: [],
                contentInventoryIds: Array.from(E),
            });
    }, [A, E]);
    let S = (0, y.bG)([eu.default], () => tq(u, eu.default)),
        I = (0, y.bG)(
            [eu.default, tB.A],
            () => (null == u ? eg.intl.string(nf.default.uhJexs) : (0, tu.m1)(u, eu.default, tB.A)),
            [u],
        ),
        v = (0, y.bG)([D.A], () => {
            if (null != m && null != D.A.getChannel(m)) return !0;
            if (0 === s) return !1;
            for (let e of i) if (null != D.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [i, m, s]),
        T = null != l && !(d && l === m);
    return v
        ? (0, r.jsxs)("div", {
              className: nY.kL,
              children: [
                  (0, r.jsx)("nav", {
                      className: nY.pz,
                      "aria-label": eg.intl.string(nf.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(ej.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, r.jsxs)(tW.d_, {
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
                                            g.length > 0 ? (0, r.jsx)("hr", { className: nY.mF }) : null,
                                        ],
                                    })
                                  : null,
                              g.map((e) =>
                                  (0, r.jsx)(nz, { channelId: e.channelId, selectedVoiceChannelId: m }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  T
                      ? (0, r.jsxs)("div", {
                            className: nY.oM,
                            children: [
                                (0, r.jsx)(nj, { channel: u, user: S, guild: h, title: I, dragStart: t, dragging: n }),
                                (0, r.jsx)(nZ, { selectedChannelId: l }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(V.g, { emptyText: eg.intl.string(nf.default["xpv/t5"]), icon: tX.o });
}
let nW = c.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, r.jsx)(nX, { dragStart: n, dragging: i });
});
var nB = n(428689),
    nq = n(175203),
    nK = n(163432),
    nQ = n(996439),
    nJ = n(799808),
    n$ = n(731854),
    n0 = n(521380);
let n1 = c.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            s = t.user?.id;
        return (0, y.bG)([ed.Ay], () => null != t.user && null != i && null != n && ed.Ay.isLocalVideoDisabled(s, i), [
            s,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, r.jsx)(nq.Ay, { ...e });
    }),
    n2 = c.memo(function (e) {
        let {
                context: t = n$.x.DEFAULT,
                participants: i,
                locked: s,
                channel: a,
                width: o,
                height: d,
                shouldDisplay: u,
            } = e,
            h = c.useCallback(
                (e, i) => {
                    let s = e.user;
                    (0, F.YX)(em.uss.VIDEO, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED, userId: s?.id }),
                        (0, l.L3)(i, async () => {
                            let { default: e } = await Promise.all([
                                n.e("74389"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("8757"),
                                n.e("89673"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("49145"),
                                n.e("70314"),
                                n.e("27435"),
                                n.e("58980"),
                            ]).then(n.bind(n, 535503));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    user: s,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, F.YX)(em.uss.VIDEO, {
                                            type: F.Z5.GO_LIVE,
                                            value: F.IP.ENABLED,
                                            userId: s?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            m = (0, F.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        c.useEffect(() => {
            u &&
                (0, F.Y)(em.uss.VIDEO, {
                    locked: U.default.isInstanceLocked(),
                    shownUserIds: Array.from(m),
                    liveUserIds: Array.from(m),
                    contentInventoryIds: [],
                });
        }, [m, u]);
        let g = c.useMemo(() => ({ width: o, height: d }), [o, d]);
        return (0, r.jsx)(r.Fragment, {
            children: i.map((e) =>
                (0, r.jsx)(
                    n1,
                    {
                        participant: e,
                        width: o,
                        className: n0.Vs,
                        containerStyle: g,
                        fit: el.$.COVER,
                        channel: a,
                        popoutType: et.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: s ? void 0 : h,
                        forceIdle: s,
                        paused: !u,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    n3 = c.memo(function (e) {
        let {
                context: t = n$.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: s,
                widget: l,
                channel: a,
                width: o,
                height: d,
                showEmpty: u = !0,
                containerRef: h,
            } = e,
            g = "boolean" != typeof l.meta.horizontal || l.meta.horizontal,
            p = n.length > 0 && null != t && null != a && (!s || l.pinned);
        c.useEffect(() => {
            (0, nJ.j_)({ locked: s, pinned: l.pinned, widget: l.type, isPreviewingInGame: !1 }, p);
        }, [s, l, p]);
        let x = c.useMemo(() => ({ opacity: l.opacity }), [l.opacity]),
            f = c.useMemo(() => m()({ [n0.wb]: !0, [n0.Vd]: !g, [n0.R]: !p && s }), [g, p, s]);
        return 0 !== n.length || s
            ? null == a
                ? null
                : (0, r.jsx)("div", {
                      ref: h,
                      className: f,
                      style: x,
                      children: (0, r.jsx)(n2, {
                          context: t,
                          participants: n,
                          locked: s,
                          channel: a,
                          width: o,
                          height: d,
                          shouldDisplay: p,
                          participantsVersion: i,
                      }),
                  })
            : u
              ? (0, r.jsx)("div", {
                    ref: h,
                    children: (0, r.jsx)(V.g, { emptyText: eg.intl.string(eg.t.aTiM42), icon: nB.n, absolute: !0 }),
                })
              : null;
    }),
    n5 = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: s, containerSpecs: r } = e;
        if (!(0, e_.cv)(t)) return n;
        let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * s;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            l
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + a) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + a) },
            { maxWidth: 0.75 * r.maxX, maxHeight: 0.75 * r.maxY },
        );
    };
function n6(e) {
    let t = (0, y.bG)([P.A, D.A], () => D.A.getChannel(P.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [s, l] = (0, y.bG)(
            [_.A],
            () => (null == i ? [[], 0] : [_.A.getVideoParticipants(i), _.A.getParticipantsVersion(i)]),
            [i],
            nQ.D,
        ),
        a = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: u } = (0, eI.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: h, visibleParticipants: m } = (0, nK.i4)(a ? o : d, s, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: l,
        }),
        g = (0, y.bG)([O.A], () => O.A.getWindowState(eZ.f)),
        p = {
            id: e.widget.id,
            containerSize: { containerHeight: d, containerWidth: o },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: g?.width ?? e.width - n, maxY: g?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: g?.height ?? e.height, right: g?.width ?? e.width },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                s = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                r = c.useRef(s);
            c.useLayoutEffect(() => void (r.current = s)),
                c.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: s,
                        widget: l,
                        widgetLayoutSpecs: a,
                    } = r.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = n5({
                        ...a,
                        widget: l,
                        operation: ej.P.RESIZE_NORTH,
                        computedSize: { width: s, height: i },
                        originSize: { width: s, height: i },
                    });
                    (0, J.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: a, widget: e.widget, widgetLayoutSpecs: p }),
        (0, r.jsx)(n3, {
            ...e,
            channel: t,
            participants: m,
            participantsVersion: l,
            width: a ? h : (o ?? e.width),
            height: a ? (d ?? e.height) : h,
            containerRef: u,
        })
    );
}
var n4 = n(450740),
    n9 = n(968898);
n(321073);
var n8 = n(518009),
    n7 = n(592598),
    ie = n(28528),
    it = n(57019),
    ii = n(21076),
    is = n(672396),
    ir = n(669192);
let il = [];
function ia(e) {
    return e.notification.id;
}
function io(e, t, n, i) {
    let { index: s, notification: l, locked: a, pinned: o } = t;
    return (0, r.jsx)(ie.A, { index: s, notification: l, locked: a, pinned: o, transitionState: n, cleanUp: i }, e);
}
function id(e) {
    return (0, r.jsx)("div", { className: ir.k, children: e });
}
let iu = c.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            s = (0, y.bG)(
                [ii.default, n7.A],
                () => {
                    if (n7.A.isNotificationDisabled(is.KS.TextChat)) return il;
                    let e = [],
                        i = 0;
                    for (let s of ii.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || s.status !== em.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: s }), i++);
                    }
                    return e;
                },
                [t, n],
                t_.oQ,
            ),
            l = c.useState(() => new it.Fn(t))[0];
        return (c.useLayoutEffect(() => l.updateState(s, t)),
        c.useLayoutEffect(() => (l.initialize((0, eR.b)()), () => l.cleanUp()), [l]),
        0 !== s.length || t)
            ? (0, r.jsx)(it.Gt.Provider, {
                  value: l,
                  children: (0, r.jsx)(n8.F, { items: s, renderItem: io, getItemKey: ia, wrapChildren: id }),
              })
            : i
              ? t
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: eg.intl.string(eg.t.O1Nbjq), icon: t1.X, absolute: !0 })
              : null;
    }),
    ic = {
        [em.uss.VIDEO]: {
            streamerModeLabel: () => eg.intl.string(eg.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: s, borderWidth: l, showEmpty: a } = e;
                return (0, e_.cv)(t)
                    ? (0, r.jsx)(n6, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * s - 2 * l,
                          width: "auto" === i.width ? 0 : i.width - 2 * s - 2 * l,
                          showEmpty: a,
                          padding: s,
                          borderWidth: l,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t.UPvOia) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n9.CS, {
                            onClick: (t) => {
                                (0, e_.cv)(e) &&
                                    (0, l.L3)(t, async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("792"),
                                            n.e("92822"),
                                            n.e("55630"),
                                            n.e("78238"),
                                        ]).then(n.bind(n, 662554));
                                        return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: n5,
        },
        [em.uss.VOICE_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: s } = e;
                return (0, e_.ZO)(t)
                    ? (0, r.jsx)(n4.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: em.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: s,
                      })
                    : null;
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n9.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("34901").then(n.bind(n, 51444));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, r.jsx)(j, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n9.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("49170").then(n.bind(n, 508457));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, r.jsx)(e$, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
        },
        [em.uss.GO_LIVE]: {
            streamerModeLabel: () => eg.intl.string(eg.t["386XRo"]),
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: s,
                    anchorTop: l,
                    anchorLeft: a,
                    showEmpty: o,
                    padding: d,
                    borderWidth: u,
                } = e;
                return (0, e_.dO)(t)
                    ? (0, r.jsx)(eX, {
                          id: t.id,
                          locked: n,
                          pinned: t.pinned,
                          opacity: t.opacity,
                          size: i,
                          anchorTop: l,
                          anchorLeft: a,
                          widget: t,
                          isPreviewingInGame: !1,
                          dragStart: s,
                          horizontal: t.meta.horizontal ?? !1,
                          padding: d,
                          borderWidth: u,
                          showEmpty: o,
                      })
                    : null;
            },
            renderTitle: (e) => (0, r.jsx)(n9.we, { widgetId: e.id, children: eg.intl.string(eg.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, e_.dO)(e)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(n9.CS, {
                                  onClick: (t) => {
                                      (0, e_.dO)(e) &&
                                          (0, l.L3)(t, async () => {
                                              let { default: t } = await Promise.all([n.e("55630"), n.e("21289")]).then(
                                                  n.bind(n, 543824),
                                              );
                                              return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, r.jsx)(n9.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eG,
        },
        [em.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(tY, { locked: t });
            },
        },
        [em.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, r.jsx)(iu, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n9.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("51607").then(n.bind(n, 98109));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(n9.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(u.Ay, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.FRIENDS]: {
            streamerModeLabel: () => eg.intl.string(eg.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(C.A, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, r.jsx)(nW, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, r.jsx)(n9.Pl, { children: eg.intl.string(eg.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [a.A, o.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = a.A.getChannelId() ?? null,
                        [i] = o.A.getSessionEntries(),
                        s = i.length > 0;
                    return null != n || s;
                },
            },
        },
    };
