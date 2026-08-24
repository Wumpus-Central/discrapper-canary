n.d(t, { A: () => iw });
var i,
    s,
    r = n(477900),
    l = n(442433),
    a = n(763827),
    o = n(140069),
    d = n(589051),
    u = n(308726),
    c = n(582128),
    h = n(503698),
    m = n.n(h),
    g = n(812729),
    p = n.n(g),
    f = n(221877),
    x = n(866323),
    A = n(939249),
    E = n(834730),
    S = n(259788),
    I = n(302614),
    v = n(981033);
let j = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function T(e) {
    let { locked: t, pinned: n } = e,
        [i, s] = c.useState(0),
        [l, a] = c.useState(0),
        [o, d] = c.useState(0),
        u = c.useRef(0),
        [h, g] = c.useState(0),
        { timeToLiveMs: T, reappearTimeMs: C } = S.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            p(),
        ),
        y = { timeToLiveMs: T, reappearTimeMs: C },
        b = c.useRef(y);
    function w() {
        s(Date.now()), g((e) => e + 1);
    }
    c.useEffect(() => {
        b.current = y;
    }),
        c.useEffect(
            () => (
                (u.current = setInterval(() => {
                    let e = Date.now();
                    a(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = b.current.timeToLiveMs,
                                s = i + b.current.reappearTimeMs;
                            return n > i ? t + s : t;
                        });
                }, 100)),
                () => {
                    clearInterval(u.current);
                }
            ),
            [],
        );
    let N = i > 0 && l - i < 1e3,
        _ = (0, x.p)(o > 0 && o < l && l - o < T, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: j,
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
                      (0, r.jsx)(f.animated.div, {
                          style: e,
                          className: v.r2,
                          children: (0, r.jsx)(I.A, {
                              className: m()(v.VC, N && v.Nd),
                              children: (0, r.jsx)(A.D, {
                                  onClick: w,
                                  className: v.vk,
                                  children: (0, r.jsxs)(E.E, {
                                      variant: "text-md/semibold",
                                      color: "text-overlay-light",
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
    b = n(183623),
    w = n(684013),
    N = n(964486),
    _ = n(198052),
    R = n(652896),
    O = n(567249),
    M = n(616356),
    k = n(280450),
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
    Y = n(866665),
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
    ea = n(802867),
    eo = n(110234),
    ed = n(453028),
    eu = n(287809),
    ec = n(562153),
    eh = n(761661),
    em = n(652215),
    eg = n(375708),
    ep = n(911312);
function ef(e) {
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
function ex(e, t) {
    return (i) => {
        (0, F.YX)(em.uss.GO_LIVE, { type: F.Z5.GO_LIVE, value: F.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, l.L3)(i, async () => {
                let { default: i } = await Promise.all([
                    n.e("189673"),
                    n.e("245996"),
                    n.e("58315"),
                    n.e("761361"),
                ]).then(n.bind(n, 663912));
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
                                    color: "text-overlay-light",
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
                                    color: "text-overlay-light",
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
                                    (0, r.jsx)(ef, { participant: n }),
                                    (0, r.jsx)(Y.m, {
                                        text: eg.intl.string(eg.t["3D5yo/"]),
                                        children: (0, r.jsx)(A.D, {
                                            className: ep.IF,
                                            onClick: ex(n, s),
                                            children: (0, r.jsx)(q.MoreHorizontalIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                            }),
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
                                    onContextMenu: ex(t, o),
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
                                onEnablePin: function () {
                                    l || (0, J.v0)(s);
                                },
                            }),
                  ],
              });
    });
var eI = n(765671),
    ev = n(531685),
    ej = n(365971),
    eT = n(129537);
let eC = 9 / 16,
    ey = 16 / 9;
function eb(e, t) {
    return t * (Math.max(1, e) - 1);
}
function ew(e) {
    let { width: t, height: n, containerOffset: i, gapSize: s, tileCount: r, isVertical: l } = e,
        a = l ? t : t - eb(r, s),
        o = l ? n - eb(r, s) : n;
    return { verticalRatio: (o - i) / (a - i), horizontalRatio: (a - i) / (o - i) };
}
function eN(e, t, n) {
    let { containerOffset: i, gapSize: s, tileCount: r, isVertical: l } = t,
        { maxWidth: a, maxHeight: o } = n,
        d = Math.max(1, r),
        u = e.width > a,
        c = e.height > o;
    if (!u && !c) return e;
    let h = eb(r, s),
        { verticalRatio: m, horizontalRatio: g } = ew({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: s,
            tileCount: d,
            isVertical: l,
        }),
        p = e.width - i,
        f = e.height - i,
        x = a - i,
        A = o - i;
    return (
        l ? ((A -= h), (f -= h)) : ((x -= h), (p -= h)),
        u && c && (e.width > e.height ? (f = (p = x) * m) : (p = (f = A) * g), (u = p > x), (c = f > A)),
        u && (f = (p = x) * m),
        c && (p = (f = A) * g),
        l ? (f += eb(r, s)) : (p += eb(r, s)),
        { width: p + i, height: f + i }
    );
}
var e_ = n(897720),
    eR = n(545807);
function eO(e, t) {
    return 2 * e + 2 * t;
}
function eM(e) {
    let { width: t, height: n } = e;
    return { fixed: !0, width: t, height: n };
}
function ek(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        r = { width: s, height: s * eC },
        l = Math.max(1, e),
        a = eb(e, t),
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
    let { widgetId: t, size: n, borderWidth: i, padding: s, minSize: r, containerSpecs: l, defaultSize: a, ...o } = e;
    function d(e) {
        return eG({
            operation: eT.P.RESIZE_NORTH,
            computedSize: e,
            originSize: e,
            borderWidth: i,
            padding: s,
            containerSpecs: l,
            ...o,
        });
    }
    let u = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(r) } };
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
        p = ((t = ez(m)), (i = (n = eD(a, o, m, t)) * eC), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        f = ew({ width: c, height: h, containerOffset: u, gapSize: o, tileCount: p, isVertical: g }),
        x = eb(p, o);
    return eN(
        (() => {
            var e, t;
            switch (s) {
                case eT.P.RESIZE_NORTH:
                case eT.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: r.height,
                        width: ((e = r.height), (n = ((g ? e - x : e) - u) * f.horizontalRatio), g || (n += x), n + u),
                    };
                default:
                    let i;
                    return {
                        width: r.width,
                        height: ((t = r.width), (i = ((g ? t : t - x) - u) * f.verticalRatio), g && (i += x), i + u),
                    };
            }
        })(),
        { containerOffset: u, gapSize: o, tileCount: p, isVertical: g },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eU = n(111568);
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
            p = (0, G.Ay)(n),
            A = (0, G.Ay)(l),
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
            j = c.useMemo(
                () => (0 === I.length ? 256 : I.reduce((e, t) => e + t.width, 0) + (E ? 0 : h * (I.length - 1))),
                [I, E, h],
            ),
            T = (0, x.p)(
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
                style: E ? { height: v } : { width: j },
                children: T((e, t, s, l) =>
                    (0, r.jsx)(f.animated.div, {
                        className: eU.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: g.length - l }),
                        children: (function (e) {
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
    eY = n(391436);
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
            pinned: f,
            anchorTop: x,
            anchorLeft: A,
            showEmpty: E = !0,
        } = e,
        S = p ? e_.IV.HORIZONTAL : e_.IV.VERTICAL,
        I = S === e_.IV.VERTICAL,
        v = (0, y.bG)([z.A], () => {
            let e = z.A.getWidget(a);
            return !!(0, e_.dO)(e) && !u && (e.meta.showAllStreams ?? !0);
        }, [a, u]),
        j = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId()),
        T = (0, y.bG)([D.A], () => D.A.getChannel(j)),
        C = (0, y.bG)([k.default], () => k.default.getId()),
        {
            streamParticipants: U,
            activeStreams: F,
            participantsVersion: H,
        } = ((t = (x && I) || (A && p)),
        (n = (!x && I) || (!A && p)),
        (i = (0, y.yK)([M.A], () => (null == j ? [] : M.A.getAllActiveStreamsForChannel(j)))),
        (s = c.useMemo(() => new Set(i.map((e) => (0, R._z)(e))), [i])),
        (l = (0, y.bG)([_.A], () => (null == j ? -1 : _.A.getParticipantsVersion(j)))),
        {
            streamParticipants: (0, y.yK)([_.A, M.A], () => {
                if (null == j) return [];
                function e(e) {
                    return s.has((0, R._z)(e.stream));
                }
                let i = _.A.getStreamParticipants(j).filter((t) => {
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
            }, [j, s, C, v, t, n]),
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
                h = (0, ej.Q2)(c),
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
                f = eD(i, n, { width: o + p, height: d + p }, s),
                x = f * eC;
            return {
                tileWidth: f,
                tileHeight: x,
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
        let r = (0, G.Ay)(n),
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
    let $ = null == T || (0 === F.size && u) || (0 === Z && !u);
    return (c.useEffect(() => {
        w.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !$);
    }, [$]),
    (0, N.Ay)(() => () => {
        w.A.setGpuBoostRequested(L.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    ($ || !f) && u)
        ? null
        : $ && !u
          ? E
              ? u
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: eg.intl.string(eg.t["T6+rXy"]), icon: b.F, absolute: !0 })
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
                    pinned: f,
                    padding: h,
                }),
            });
}
var eW = n(243721),
    eB = n(821609),
    eq = n(706712),
    eK = n(493560),
    eQ = n(321090),
    eJ = n(189953);
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
            droppedFramesRef: f,
            renderedFrameCount: x,
            bufferFramecountRef: A,
            frameCheckerEffect: S,
        } = (0, eq.Dj)(!0, o, !0),
        [v, j, T] = (0, eq.F5)(s),
        [C, b] = (0, eq.km)(v, S, a),
        w = performance.now() - d.current < eq.Jc,
        _ = j(h, A.current);
    (0, N.Ay)(
        () => (
            C(),
            () => {
                b();
            }
        ),
    );
    let R = c.useCallback(() => {
            p(), T(), C();
        }, [p, T, C]),
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
                                          children: f.current,
                                      }),
                                      (0, r.jsxs)(E.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: eJ.af,
                                          children: ["(", ((f.current / x.current) * 100).toFixed(3), "%)"],
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
                                          children: x.current.toFixed(0),
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
                  w &&
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
    e5 = n(734066),
    e2 = n(200542),
    e3 = n(351906),
    e4 = n(377802),
    e6 = n(348858),
    e8 = n(523875),
    e9 = n(416696),
    e7 = n(621956),
    te = n(446080),
    tt = n(922016),
    tn = n(615675),
    ti = n(978940),
    ts = n(176781),
    tr = n(730852),
    tl = n(688810),
    ta = n(617354),
    to = n(980923),
    td = n(829773),
    tu = n(329072),
    tc = n(18235),
    th = n(183184),
    tm = n(47167),
    tg = n(713654),
    tp = n(572164),
    tf = n(539572),
    tx = n(980707),
    tA = n(477782),
    tE = n(650338),
    tS = n(915725),
    tI = n(226640),
    tv = n(753070),
    tj = n(711918);
function tT(e) {
    let { onClose: t } = e,
        n = (0, tp.Et)(),
        i = (0, y.bG)([tS.Ay], () => tS.Ay.getSettings().clipsQuality),
        s = (0, y.bG)([tS.Ay], () => tS.Ay.getSettings().clipsLength),
        l = (0, tI.Qu)(),
        a = (0, tI.gF)(),
        o = (0, tI.Fz)();
    return (0, r.jsxs)(tx.W, {
        navId: "overlay-clips-menu",
        "aria-label": eg.intl.string(tj.default["YvJKD+"]),
        onClose: t,
        onSelect: t,
        children: [
            (0, r.jsx)(tA.sL, {
                id: "status",
                label: eg.intl.string(tj.default.qGgW4M),
                checked: n,
                action: () => {
                    (0, tf.yO)({ clipsEnabled: !n, trackAnalytics: !0 });
                },
            }),
            (0, r.jsx)(tA.Dr, {
                id: "clips-length",
                label: eg.intl.string(eg.t.OgfUio),
                subtext: eg.intl.formatToPlainString(eg.t["bTFv/3"], { count: s / 1e3 }),
                children: l.map((e) => {
                    let { id: t, value: n, label: i } = e;
                    return (0, r.jsx)(
                        tA.iD,
                        {
                            id: t,
                            group: "clips-length-options",
                            label: i,
                            checked: n === s,
                            action: () => (0, tf.h$)(n),
                        },
                        t,
                    );
                }),
            }),
            (0, r.jsx)(tA.Dr, {
                id: "clips-resolution",
                subtext: (0, tv.zr)(i.resolution),
                label: eg.intl.string(eg.t.aFudZJ),
                children: a.map((e) => {
                    let { id: t, value: n, label: s } = e;
                    return (0, r.jsx)(
                        tA.iD,
                        {
                            id: t,
                            group: "clips-resolution-options",
                            label: s,
                            checked: n === i.resolution,
                            action: () => {
                                let { clipsQuality: e } = tS.Ay.getSettings();
                                (0, tf.GS)({ ...e, resolution: n });
                            },
                        },
                        t,
                    );
                }),
            }),
            (0, r.jsx)(tA.Dr, {
                id: "clips-framerate",
                subtext: (0, tE.Bs)(i.frameRate),
                label: eg.intl.string(eg.t["2wScL1"]),
                children: o.map((e) => {
                    let { id: t, value: n, label: s } = e;
                    return (0, r.jsx)(
                        tA.iD,
                        {
                            id: t,
                            group: "clips-framerate-options",
                            label: s,
                            checked: n === i.frameRate,
                            action: () => {
                                let { clipsQuality: e } = tS.Ay.getSettings();
                                (0, tf.GS)({ ...e, frameRate: n });
                            },
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var tC = n(414405),
    ty = n(880144),
    tb = n(338771),
    tw = n(548118),
    tN = n(999751),
    t_ = n(209932),
    tR = n(484036),
    tO = n(389960),
    tM = n(704877),
    tk = n(173660),
    tD = n(675991),
    tz = n(848362),
    tP = n(141157),
    tL = n(222692),
    tV = n(204651),
    tG = n(71393),
    tU = n(977997),
    tF = n(46282),
    tH = n(489277),
    tZ = n(243612),
    tY = n(731854),
    tX = n(816466);
function tW(e) {
    let t = c.useRef(null);
    return (
        c.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function tB(e) {
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
        onMouseLeave: f,
        onContextMenu: x,
        isTrayButton: A,
        ...E
    } = e;
    return (0, r.jsx)(tV.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: tX.x6,
        disabled: i,
        popoutOpen: c,
        popoutDisabled: m,
        label: a,
        isTrayButton: A,
        onMouseEnter: (e) => {
            p?.(e);
        },
        onMouseLeave: (e) => {
            f?.(e);
        },
        iconComponent: s,
        iconColor: l,
        caretColor: u,
        isActive: n,
        onContextMenu: x,
        onPopoutClick: g,
        "aria-label": E["aria-label"],
    });
}
function tq(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        { suppress: s, selfMute: l, mute: a } = (0, tk.A)(t),
        o = l || a || s,
        d = (0, to.A)(l, a, s, !1),
        { Component: u, play: h, events: m } = (0, e8.L)(o ? "unmute" : "mute");
    c.useEffect(() => () => h(), [h, o]);
    let g = tW(n);
    function p(e) {
        return (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.MICROPHONE, value: F.IP.SETTINGS_OPENED });
        };
    }
    return (0, r.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = g(t);
            return (0, r.jsx)(td.A, {
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
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tB, {
                ref: i,
                iconComponent: u,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    (0, th.A)(a, s, em.JJy.OVERLAY),
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
function tK(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        { selfDeaf: s, deaf: l } = (0, tO.A)(t),
        a = s || l,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: h },
        } = (0, e6.I)(a ? "undeafen" : "deafen"),
        m = l ? tn.T : o;
    function g() {
        (0, tc.A)(l, em.JJy.OVERLAY),
            (0, F.YX)(em.uss.QUICK_ACTIONS, {
                type: F.Z5.AUDIO,
                value: l ? F.IP.ENABLED : F.IP.DISABLED,
                userId: k.default.getId(),
            });
    }
    function p(e) {
        return (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.AUDIO, value: F.IP.SETTINGS_OPENED });
        };
    }
    c.useEffect(() => () => d(), [a, d]);
    let f = tW(n);
    return (0, r.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(td.A, {
                onClose: f(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                maybeRenderSpatialAudioCheckbox: !0,
                renderSettingsButton: !0,
                appContext: em.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, r.jsx)(tB, {
                ref: i,
                iconComponent: m,
                tooltip: (0, ta.A)(s, l, !1),
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
function tQ(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        s = (0, y.bG)([ed.Ay], () => ed.Ay.isVideoEnabled()),
        l = (0, y.bG)([ed.Ay], () => Object.values(ed.Ay.getVideoDevices())[0]),
        a = (0, y.bG)([ed.Ay], () => ed.Ay.supports(tY.O5.VIDEO)),
        o = l?.disabled ?? !0,
        d = !1 === o,
        u = (0, tM.A)(t);
    function h(e) {
        Q.A.setVideoEnabled(e);
    }
    function m(e) {
        return (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CAMERA, value: F.IP.SETTINGS_OPENED });
        };
    }
    function g() {
        o ? (d ? h(!0) : (0, tL.A)()) : h(!s),
            (0, F.YX)(em.uss.QUICK_ACTIONS, {
                type: F.Z5.CAMERA,
                value: s ? F.IP.DISABLED : F.IP.ENABLED,
                userId: k.default.getId(),
            });
    }
    let {
            Component: p,
            play: f,
            events: { onMouseEnter: x, onMouseLeave: A },
        } = (0, te.K)(s ? "disable" : "enable"),
        E = null != t ? (0, tD.Q)({ enabled: s, cameraUnavailable: o, hasPermission: u, channel: t }) : void 0;
    c.useEffect(() => () => f(), [s, f]);
    let S = tW(n),
        I = null == t || !u || !a;
    return (0, r.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tu.A, { onClose: S(t), appContext: em.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(tB, {
                ref: i,
                iconComponent: p,
                tooltip: E,
                onClick: g,
                isActive: s,
                highlightedColor: "green",
                onPopoutClick: a ? m(n) : void 0,
                popoutOpen: l,
                onContextMenu: a ? m(n) : void 0,
                onMouseEnter: x,
                onMouseLeave: A,
                disabled: I,
                isTrayButton: !0,
            });
        },
    });
}
function tJ(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        s = c.useRef(null),
        l = (0, y.bG)([eu.default], () => eu.default.getCurrentUser()),
        a = (0, tM.A)(n),
        o = (0, y.cf)([ed.Ay], () => (0, ty.A)(ed.Ay)),
        d = (0, y.bG)([M.A], () => M.A.getCurrentUserActiveStream()),
        u = (0, y.bG)([tH.A], () => tH.A.getTargetPID()),
        h = (0, tF.y)({ pid: u, allowOneClickGoLive: !0, analyticsLocation: em.ThZ.UNLOCKED_OVERLAY });
    function m() {
        h(), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.GO_LIVE, value: F.IP.ENABLED, userId: k.default.getId() });
    }
    let g = null != d;
    if (g) t = eg.intl.string(eg.t.S5anIc);
    else if (null != n) {
        let e = (0, tZ.qv)();
        t = a
            ? null != e
                ? eg.intl.format(eg.t.AB5gTy, { game: e.name })
                : eg.intl.string(eg.t.FeUKeA)
            : eg.intl.string(eg.t.uQn9B8);
    }
    function p() {
        if (g)
            return (
                (0, F.YX)(em.uss.QUICK_ACTIONS, {
                    type: F.Z5.GO_LIVE,
                    value: F.IP.DISABLED,
                    userId: k.default.getId(),
                }),
                (0, tb.A)(d, !1)
            );
        m();
    }
    function f(e) {
        return (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.SCREEN_SHARE, value: F.IP.SETTINGS_OPENED });
        };
    }
    let {
        Component: x,
        events: { onMouseEnter: A, onMouseLeave: E },
        play: S,
    } = (0, e9.c)(g ? "disable" : "enable");
    c.useEffect(() => () => S(), [g, S]);
    let I = tW(i);
    return (0, r.jsx)(tt.Y, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(tz.A, {
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
        animation: tt.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: l } = n;
            return (0, r.jsx)(tB, {
                ref: s,
                iconComponent: x,
                tooltip: t,
                "aria-label": eg.intl.string(eg.t.FeUKeA),
                isActive: g,
                highlightedColor: "green",
                onClick: p,
                popoutOpen: l,
                popoutDisabled: !g,
                onPopoutClick: f(i),
                onContextMenu: f(i),
                onMouseEnter: A,
                onMouseLeave: E,
                disabled: !o || !a,
                isTrayButton: !0,
            });
        },
    });
}
function t$(e) {
    let { voiceChannel: t, locked: i } = e,
        s = c.useRef(null),
        a = t?.getGuildId() ?? null,
        { mute: o, suppress: d } = (0, tk.A)(t),
        u = (0, y.bG)([ed.Ay], () => ed.Ay.isDeaf()),
        h = null == t || o || d || u,
        { analyticsLocations: m } = (0, tl.Ay)();
    function g(e) {
        null != a &&
            ((0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.SOUNDBOARD, value: F.IP.SETTINGS_OPENED }),
            (0, l.L3)(e, async () => {
                let { default: e } = await n.e("811562").then(n.bind(n, 666801));
                return (t) => (0, r.jsx)(e, { sourceAnalyticsLocations: m, guildId: a, ...t });
            }));
    }
    let {
            Component: p,
            events: { onClick: f, onMouseEnter: x, onMouseLeave: A },
        } = (0, e7.E)(),
        E = tW(i),
        S = (0, y.bG)([t_.A, k.default], () => t_.A.isUserPlayingSounds(k.default.getId()), []) ? "green" : void 0;
    return (0, r.jsx)(tt.Y, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return h || null == t
                ? (0, r.jsx)(r.Fragment, {})
                : (0, r.jsx)(tR.A, { guildId: a, channel: t, onClose: E(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(tB, {
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
                    f(),
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
                onMouseEnter: x,
                onMouseLeave: A,
                isActive: i,
                popoutOpen: i,
                disabled: h,
                isTrayButton: !0,
            });
        },
    });
}
function t0(e) {
    let { voiceChannel: t, locked: n } = e,
        i = c.useRef(null),
        s = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId() === t?.id);
    function l() {
        (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.DISABLED, userId: k.default.getId() }),
            s && tr.default.disconnect();
    }
    function a(e, t) {
        tr.default.selectVoiceChannel(e),
            (0, F.YX)(em.uss.QUICK_ACTIONS, {
                type: F.Z5.CALL_BUTTON,
                value: F.IP.ENABLED,
                userId: k.default.getId(),
                secondaryValue: t,
            });
    }
    let [o, d] = c.useTransition();
    function u(e) {
        return (t) => {
            d(() => {
                e(t);
            }),
                (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CALL_BUTTON, value: F.IP.SETTINGS_OPENED });
        };
    }
    let {
            Component: h,
            events: { onMouseEnter: m, onMouseLeave: g },
        } = (0, e4.O)(),
        p = tW(n),
        f = (0, tP.qZ)(),
        x = s ? h : ti._;
    return (0, r.jsx)(tt.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(tP.Ay, {
                allAvailableChannelRows: f,
                currentVoiceChannel: t,
                onClose: p(n),
                onSelect: a,
            });
        },
        align: "center",
        position: "top",
        animation: tt.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, r.jsx)(tB, {
                ref: i,
                iconComponent: x,
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
function t1(e) {
    let { voiceChannel: t } = e,
        n = (0, y.bG)([tG.A], () => tG.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: tX.rK }),
                    (0, r.jsxs)("div", {
                        className: tX._C,
                        children: [
                            (0, r.jsx)(tw.Ay, { guild: n, size: tw.Ay.Sizes.SMOL, className: tX.$f }),
                            (0, r.jsx)(E.E, {
                                tag: "div",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: tX.J5,
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
function t5(e) {
    let { voiceChannel: t } = e,
        n = (0, tg.gU)(t),
        i = (0, tm.Ay)(t);
    return (0, r.jsxs)("div", {
        className: tX.Wh,
        children: [
            null != n &&
                (0, r.jsx)(E.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "text-xs/normal",
                    className: tX.p,
                    children: (0, r.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, r.jsx)(E.E, { variant: "text-sm/medium", color: "text-muted", className: tX.HA, children: i }),
        ],
    });
}
function t2(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, y.cf)([a.A], () => ({ quality: a.A.getQuality(), state: a.A.getState(), lastPing: a.A.getLastPing() })),
        s = (0, y.bG)([tU.A], () => null != n && tU.A.hasVideo(n), [n]),
        l = (0, d.Mn)("VoiceConnectionStatus"),
        o = (0, y.bG)([e3.A], () => e3.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tN.A, { ...i, channelId: n, hasVideo: s, connectionStatusTextVariant: "text-sm/medium" }),
                !(l && o) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(t1, { voiceChannel: t }),
                            (0, r.jsx)("div", { className: tX.rK }),
                            (0, r.jsx)(t5, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
function t3(e) {
    let t,
        n = c.useRef(null),
        i = (0, tp.Et)(),
        { tooltip: s, clipsInitError: l, clipsSourceAttached: a } = (0, tC.A)();
    function o(e) {
        return (t) => {
            e(t), (0, F.YX)(em.uss.QUICK_ACTIONS, { type: F.Z5.CLIPS, value: F.IP.SETTINGS_OPENED });
        };
    }
    function d() {
        i && (0, tf.l0)();
    }
    return (
        null != l && i && (t = "red"),
        (0, r.jsx)(tt.Y, {
            targetElementRef: n,
            clickTrap: !0,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(tT, { onClose: t });
            },
            align: "center",
            position: "top",
            animation: tt.Y.Animation.FADE,
            children: (e, u) => {
                let { onClick: c } = e,
                    { isShown: h } = u;
                return (0, r.jsx)(tB, {
                    ref: n,
                    iconComponent: ts.x,
                    tooltip: s,
                    "aria-label": s,
                    highlightedColor: t,
                    onClick: d,
                    popoutOpen: h,
                    onPopoutClick: o(c),
                    onContextMenu: o(c),
                    disabled: !i || null != l || !a,
                    isTrayButton: !0,
                });
            },
        })
    );
}
var t4 = n(944138);
let t6 = c.memo(function () {
    let e = (0, y.bG)([e3.A], () => e3.A.enabled),
        t = (0, d.Mn)("StreamerModeNotice");
    return e && t
        ? (0, r.jsxs)(e0.$T, {
              color: e0.Hv.STREAMER_MODE,
              className: t4.$X,
              children: [
                  (0, r.jsx)(E.E, {
                      tag: "span",
                      variant: "text-sm/medium",
                      color: "text-overlay-light",
                      children: eg.intl.string(eg.t.q9K7jp),
                  }),
                  (0, r.jsx)(e0.Z_, {
                      className: t4.lI,
                      onClick: () => e1.A.setEnabled(!1),
                      noticeType: em.kqX.STREAMER_MODE,
                      children: eg.intl.string(eg.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function t8(e) {
    let { locked: t } = e,
        n = (0, y.bG)([P.Ay], () => P.Ay.getVoiceChannelId()),
        { enableOverlayEntrypoint: i } = e2.A.useConfig({ location: "QuickActionsWidget" }),
        s = (0, e5.sw)(),
        l = (0, y.bG)([D.A], () => D.A.getChannel(n)),
        a = null != l;
    return (0, r.jsxs)("div", {
        className: m()({ [t4.KE]: !0, [t4.xt]: t }),
        children: [
            (0, r.jsx)(t6, {}),
            (0, r.jsxs)("div", {
                className: t4.Pm,
                children: [
                    (0, r.jsxs)("div", {
                        className: t4.qi,
                        children: [
                            (0, r.jsx)(tq, { voiceChannel: l, locked: t }),
                            (0, r.jsx)(tK, { voiceChannel: l, locked: t }),
                            (0, r.jsx)(tQ, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: t4.qi,
                        children: [
                            (0, r.jsx)(tJ, { voiceChannel: l, locked: t }),
                            (0, r.jsx)(t$, { voiceChannel: l, locked: t }),
                            i && s && (0, r.jsx)(t3, { voiceChannel: l, locked: t }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m()(t4.qi, a && t4.SV),
                        children: (0, r.jsx)(t0, { voiceChannel: l, locked: t }),
                    }),
                ],
            }),
            a && (0, r.jsx)("div", { className: t4.Pm, children: (0, r.jsx)(t2, { voiceChannel: l, locked: t }) }),
        ],
    });
}
var t9 = n(534890),
    t7 = n(364522),
    ne = n(994500),
    nt = n(996439);
function nn(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function ni(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var ns = n(408278),
    nr = n(366605),
    nl = n(780338),
    na = n(782603),
    no = n(241541),
    nd = n(320448),
    nu = n(661531),
    nc = n(446576),
    nh = n(683063),
    nm = n(789645),
    ng = n(387755),
    np = n(945830),
    nf = n(461678),
    nx = n(277370),
    nA = n(95701),
    nE = n(543465),
    nS = n(914853),
    nI = n(220884),
    nv = n(145567),
    nj = n(778712),
    nT = n(290863),
    nC = n(172491),
    ny = n(912156),
    nb = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nw(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? nj._3.SIZE_24 : nj._3.SIZE_40;
        case "guild":
            return 24 === e ? tw.Ay.Sizes.SMALLER : tw.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let nN = c.memo(function (e) {
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
        m = (0, y.bG)([nT.A], () => (null != h ? nT.A.getStatus(h) : null), [h]),
        g = (0, y.bG)([nT.A], () => null != h && nT.A.isMobileOnline(h), [h]);
    if (u || c)
        return (0, r.jsx)(nC.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nw(l, "user"),
            status: m,
            isMobile: g,
            isTyping: a,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i)
        return (0, r.jsx)(t9.ChatIcon, { size: nw(l, "default"), color: nu.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, r.jsx)(tw.Ay, { guild: i, size: nw(l, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === l ? ny.Q.MEDIUM_40 : ny.Q.TINY_24;
        return (0, r.jsx)(ny.A, { channel: t, guild: i, size: e, isTyping: a });
    }
});
var n_ = n(769015);
function nR(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, r.jsx)(n_.A, { game: t, size: n_.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var nO = n(429913),
    nM = n(34307),
    nk = n(530478),
    nD = n(276119);
function nz(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nP(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s } = e,
        l = c.useRef(null);
    return t?.id == null
        ? null
        : (0, r.jsx)(tt.Y, {
              targetElementRef: l,
              shouldShow: n,
              animation: tt.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: s,
              renderPopout: (e) =>
                  (0, r.jsx)(np.A, {
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
                          children: (0, r.jsx)(ns.K, {
                              ...n,
                              icon: nr.t,
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
function nL(e) {
    let { channel: t } = e,
        n = c.useRef(null),
        i = t?.id ?? null,
        s = t?.guild_id != null,
        [l, a] = (0, y.yK)(
            [nE.Ay],
            () =>
                s && null != i && null != t
                    ? [nE.Ay.isChannelMuted(t.getGuildId(), t.id), nE.Ay.resolvedMessageNotifications(t)]
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
        m = l || a !== em.orn.ALL_MESSAGES ? nl.BellSlashIcon : na.BellIcon;
    return s && null != t
        ? (0, r.jsx)(tt.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: tt.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, r.jsx)(nf.A, {
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
                          children: (0, r.jsx)(ns.K, {
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
function nV(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: s, onRequestClosePinsPopout: l } = e;
    return nz(t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Y.m, {
                      text: eg.intl.string(eg.t.JJogjm),
                      "aria-label": eg.intl.string(eg.t.JJogjm),
                      children: (0, r.jsx)(ns.K, {
                          icon: ti._,
                          "aria-label": eg.intl.string(eg.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, r.jsx)(nP, { channel: t, pinsOpen: i, onTogglePinsPopout: s, onRequestClosePinsPopout: l }),
                  t.isMultiUserDM()
                      ? (0, r.jsx)(Y.m, {
                            text: eg.intl.string(eg.t["LR+Ptf"]),
                            "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                            children: (0, r.jsx)(ns.K, {
                                icon: no.D,
                                "aria-label": eg.intl.string(eg.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    (0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                        type: F.Z5.INVITE,
                                        value: F.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, nx.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, nv.D$)({
                                                    target: {
                                                        kind: nv.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: nM.B.MANUAL,
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
function nG(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(nL, { channel: t }),
                  (0, r.jsx)(nP, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: s }),
              ],
          });
}
function nU(e) {
    let t,
        { channel: n, user: i, guild: s, title: l, dragStart: o, dragging: u } = e,
        { hasFriendList: h } = (0, d.M8)("TextChatHeader"),
        [g, p] = c.useState(!1),
        f = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        x = n?.isDM() ? (i?.id ?? null) : null,
        S =
            ((t = (0, y.bG)([nT.A], () => {
                if (null != x)
                    return (
                        (function (e) {
                            for (let t of e)
                                if (t.type === em.$pd.PLAYING && null != t.application_id) return t.application_id;
                            return null;
                        })(nT.A.getActivities(x)) ?? void 0
                    );
            }, [x])),
            (0, nO.h)(t) ?? void 0),
        I = f === n?.id,
        v = eg.intl.string(nk.default.tYPfF2),
        j = (0, y.bG)([D.A], () => (n?.isThread() && null != n.parent_id ? D.A.getChannel(n.parent_id) : null), [n]),
        T = (0, y.bG)([eu.default, ne.A], () => (null != j ? (0, tm.m1)(j, eu.default, ne.A) : null), [j]),
        C = c.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? ne.A.isFriend(t.id)
                          ? { tab: nS.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nA.ke)(e.type)
                        ? { tab: nS.x.MESSAGES, targetId: e.id }
                        : (0, nA.ay)(e.type)
                          ? { tab: nS.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        b = c.useCallback(
            (e) => {
                nz(n) &&
                    ((0, F.YX)(em.uss.TEXT_CHAT_V3, {
                        type: F.Z5.CALL_BUTTON,
                        value: F.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    ng.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        w = c.useCallback(() => {
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
        className: m()(nD.XV, u && nD.cB),
        onMouseDown: (e) => {
            0 === e.button && o(eT.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, r.jsxs)("div", {
                className: nD.LD,
                children: [
                    (0, r.jsx)("div", {
                        className: nD.gr,
                        children: (0, r.jsx)(nR, {
                            application: S,
                            fallback: (0, r.jsx)(nN, { channel: null, user: i, guild: s, size: nb.SIZE_24 }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: nD.G1,
                        children: [
                            (function () {
                                if (null != x) return null;
                                let e = (0, tg.gU)(n, s);
                                return null != e ? (0, r.jsx)(e, { className: nD.gr, size: "xs" }) : null;
                            })(),
                            null != j && null != T
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(A.D, {
                                              className: nD.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  e.stopPropagation(),
                                                      (0, nv.D$)({
                                                          target: {
                                                              kind: nv.bB.CHANNEL,
                                                              channelId: j.id,
                                                              guildId: j.getGuildId?.() ?? j.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nM.B.MANUAL,
                                                          widgetType: em.uss.TEXT_CHAT_V3,
                                                      });
                                              },
                                              children: (0, r.jsx)(E.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-muted",
                                                  children: T,
                                              }),
                                          }),
                                          (0, r.jsx)(nd._, {
                                              className: nD.ln,
                                              size: "xs",
                                              color: nu.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, r.jsxs)(E.E, {
                                className: nD.DD,
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: [
                                    l,
                                    S?.name != null && "" !== S.name
                                        ? (0, r.jsx)(E.E, {
                                              tag: "span",
                                              className: nD.X7,
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              children: eg.intl.formatToPlainString(nk.default.x1k3cO, {
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
                className: nD.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, r.jsx)(nV, {
                        channel: n,
                        onStartPrivateCall: b,
                        pinsOpen: g,
                        onTogglePinsPopout: w,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    (0, r.jsx)(nG, {
                        channel: n,
                        pinsOpen: g,
                        onTogglePinsPopout: w,
                        onRequestClosePinsPopout: () => p(!1),
                    }),
                    h &&
                        null != C &&
                        (0, r.jsx)(nI.j, {
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
                                  children: (0, r.jsx)(ns.K, {
                                      icon: nc.g,
                                      "aria-label": v,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          (0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                              type: F.Z5.TEXT_CHAT,
                                              value: F.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nv.S$)({ minimized: !0 });
                                      },
                                  }),
                              })
                            : (0, r.jsx)(nh.u, {
                                  title: eg.intl.string(nk.default.ERApc4),
                                  body: eg.intl.string(nk.default.PBVXVW),
                                  children: (0, r.jsx)(ns.K, {
                                      icon: nm.P,
                                      "aria-label": eg.intl.string(nk.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, F.YX)(em.uss.TEXT_CHAT_V3, {
                                                    type: F.Z5.TEXT_CHAT,
                                                    value: F.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nv.$p)())
                                              : (0, nv.lu)({
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
var nF = n(602853),
    nH = n(941971),
    nZ = n(573163),
    nY = n(485296),
    nX = n(741961),
    nW = n(228366),
    nB = n(308528);
let nq = new Set();
async function nK(e) {
    if (!nq.has(e)) {
        nq.add(e);
        try {
            let t = await nB.A.fetchChannel(e),
                n = (0, nA.UE)(t);
            nW.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void nB.A.preload(i, n.id);
        } catch {}
    }
}
var nQ = n(835078),
    nJ = (((s = {}).DEFAULT = "DEFAULT"), (s.CHANNEL_TYPE = "CHANNEL_TYPE"), s);
let n$ = c.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: s = "DEFAULT" } = e,
        a = null != i && t === i,
        d = (0, y.bG)([o.A], () => o.A.getSelectedChannelId() === t, [t]),
        u = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        h = (0, nF.r)(nu.A.colors.ICON_STATUS_ONLINE),
        g = (0, y.bG)([nY.A], () => !!a && !!(nY.A.isAnyoneElseSpeaking() || nY.A.isCurrentUserSpeaking()), [a]),
        [p, f] = c.useState(!1),
        { mentionCount: x, isMentionLowImportance: E } = (0, y.cf)(
            [nZ.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nZ.Ay.getMentionCount(t),
                          isMentionLowImportance: nZ.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: S,
            user: I,
            guild: v,
            channel: j,
        } = (0, y.cf)([D.A, tG.A, eu.default, ne.A], () => {
            let e = D.A.getChannel(t) ?? null;
            if (null == e) return { label: eg.intl.string(eg.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, tm.m1)(e, eu.default, ne.A);
            return { label: n, user: nn(e, eu.default), guild: ni(e, tG.A), channel: e };
        }, [t]);
    c.useEffect(() => {
        null == j && nK(t);
    }, [j, t]);
    let T = (0, y.bG)([nX.A, eu.default], () => {
            if (null == j) return !1;
            let e = eu.default.getCurrentUser()?.id ?? null,
                t = nX.A.getTypingUsers(j.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [j]),
        C = (0, y.bG)([nZ.Ay], () => {
            let e = j?.id;
            return null != e && nZ.Ay.hasUnread(e);
        }, [j]),
        b = (0, r.jsx)("div", {
            className: nQ.St,
            children: (function () {
                let e = j?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === s && !e) {
                    let e = (0, tg.gU)(j, v);
                    e ??= t9.ChatIcon;
                    let t = a && !u && g,
                        n = { boxShadow: "none" },
                        i = h.rgba({ opacity: 0.85 }),
                        s = h.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${s})`),
                        (0, r.jsx)("div", {
                            className: m()(nQ.s, d && nQ.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: nQ.Yc,
                                size: "sm",
                                color: d ? nu.A.colors.WHITE : nu.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(nN, {
                    channel: j,
                    user: I,
                    guild: v,
                    isSelected: d,
                    size: nb.SIZE_40,
                    isTyping: T,
                    mentionCount: x,
                    isMentionLowImportance: E,
                });
            })(),
        }),
        w = (function (e) {
            let { channel: t, guild: i, user: s } = e;
            return c.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("581609"),
                                    n.e("153416"),
                                    n.e("777927"),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, selected: !1, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != s)
                            return void (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("924697"),
                                    n.e("866038"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("893190"),
                                    n.e("708757"),
                                    n.e("585968"),
                                    n.e("189673"),
                                    n.e("955557"),
                                    n.e("229787"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("576665"),
                                    n.e("776273"),
                                    n.e("245996"),
                                    n.e("700792"),
                                    n.e("592822"),
                                    n.e("823427"),
                                    n.e("529422"),
                                    n.e("172883"),
                                    n.e("309291"),
                                    n.e("307059"),
                                    n.e("581609"),
                                    n.e("298199"),
                                    n.e("864464"),
                                    n.e("296443"),
                                    n.e("123490"),
                                    n.e("895049"),
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
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("581609"),
                                    n.e("256985"),
                                ]).then(n.bind(n, 95616));
                                return (n) => (0, r.jsx)(e, { ...n, channel: t, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nA.ay)(t.type)) {
                            if (null == i) return;
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("546813"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("309004"),
                                    n.e("544058"),
                                    n.e("581609"),
                                    n.e("694138"),
                                    n.e("958262"),
                                    n.e("318663"),
                                    n.e("221905"),
                                ]).then(n.bind(n, 769192));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("893190"),
                                    n.e("955557"),
                                    n.e("343266"),
                                    n.e("309004"),
                                    n.e("544058"),
                                    n.e("591377"),
                                    n.e("581609"),
                                    n.e("256372"),
                                    n.e("354036"),
                                ]).then(n.bind(n, 813407));
                                return (n) =>
                                    (0, r.jsx)(e, { ...n, channel: t, guild: i, widgetType: em.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, s],
            );
        })({ channel: j, guild: v, user: I }),
        N = j?.isPrivate() ?? !1,
        _ = v?.name ?? "",
        R = N ? void 0 : S,
        O = N ? S : "" !== _ ? _ : S,
        M = (() => {
            if (null == j || N) return null;
            let e = (0, tg.gU)(j, v);
            return (e ??= t9.ChatIcon), (0, r.jsx)(e, { size: "sm", color: nu.A.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == j
        ? (0, r.jsx)("div", { className: nQ.R })
        : (0, r.jsx)(nh.u, {
              title: R,
              body: O,
              asset: M,
              assetSize: 20,
              "aria-label": S,
              children: (0, r.jsxs)(A.D, {
                  className: nQ.pc,
                  onClick: () => {
                      a && (0, nv.S$)({ minimized: !1 }),
                          (0, nv.D$)({
                              target: { kind: nv.bB.CHANNEL, channelId: t, guildId: v?.id ?? null, messageId: null },
                              source: nM.B.MANUAL,
                              widgetType: em.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: w,
                  onMouseEnter: () => f(!0),
                  onMouseLeave: () => f(!1),
                  children: [
                      b,
                      (0, r.jsx)("div", {
                          className: nQ.vT,
                          children: (0, r.jsx)(nH.A, { selected: d, hovered: p, unread: C }),
                      }),
                  ],
              }),
          });
});
var n0 = n(148494),
    n1 = n(373204),
    n5 = n(355622),
    n2 = n(232835),
    n3 = n(576705),
    n4 = n(625494),
    n6 = n(973196),
    n8 = n(727961);
function n9(e) {
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
            [tG.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(d, tG.A),
            [d],
        ),
        m = (0, n6.A)();
    return ((t = d?.id ?? null),
    (n = c.useRef(new Set())),
    (i = (0, y.bG)([n2.A], () => (null != t ? n2.A.getMessages(t) : null), [t])),
    (s = (0, y.bG)([n3.A], () => n3.A.can(em.xBc.READ_MESSAGE_HISTORY, d), [d])),
    (l = i?.first() ?? null),
    (a = null != d && null == l && null != i && !i.loadingMore && !i.ready && !i.hasFetched && s),
    c.useEffect(() => {
        null == t || (!n.current.has(t) && a && (n.current.add(t), n0.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, a]),
    c.useEffect(() => {
        if (null == o || m) return;
        let e = u.requestAnimationFrame(() => {
            n4._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => u.cancelAnimationFrame(e);
    }, [o, u, m]),
    null != d)
        ? (0, r.jsx)("div", {
              className: n8.Q,
              children: (0, r.jsx)("div", {
                  className: n8.T,
                  children: (0, r.jsx)(n1.A, { channel: d, guild: h, chatInputType: n5.oU.OVERLAY }, d.id),
              }),
          })
        : null;
}
var n7 = n(722185);
function ie(e) {
    let { dragStart: t, dragging: n } = e,
        [i, s] = (0, y.bG)([o.A], () => o.A.getSessionEntries(), [], nt.D),
        l = (0, y.bG)([o.A], () => o.A.getSelectedChannelId()),
        d = (0, y.bG)([o.A], () => o.A.getVoiceChatMinimized()),
        u = (0, y.bG)([D.A], () => (null != l ? (D.A.getChannel(l) ?? null) : null), [l]);
    c.useEffect(() => {
        null == l || (null == u && nK(l));
    }, [u, l]);
    let h = (0, y.bG)([tG.A], () => ni(u, tG.A), [u]),
        m = (0, y.bG)([a.A], () => a.A.getChannelId(), []),
        g = c.useMemo(() => (null == m || 0 === s ? i : i.filter((e) => e.channelId !== m)), [i, s, m]),
        p = (0, F.Dk)(() => {
            let e = new Set();
            for (let t of (null != m && e.add(m), g)) e.add(t.channelId);
            return e;
        }, [g, m, s]),
        { shownUserIds: f, contentInventoryIds: x } = c.useMemo(
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
        A = (0, F.Dk)(() => f, [f]),
        E = (0, F.Dk)(() => x, [x]);
    c.useEffect(() => {
        (0 !== A.size || 0 !== E.size) &&
            (0, F.Y)(em.uss.TEXT_CHAT_V3, {
                locked: U.default.isInstanceLocked(),
                shownUserIds: Array.from(A),
                liveUserIds: [],
                contentInventoryIds: Array.from(E),
            });
    }, [A, E]);
    let S = (0, y.bG)([eu.default], () => nn(u, eu.default)),
        I = (0, y.bG)(
            [eu.default, ne.A],
            () => (null == u ? eg.intl.string(nk.default.uhJexs) : (0, tm.m1)(u, eu.default, ne.A)),
            [u],
        ),
        v = (0, y.bG)([D.A], () => {
            if (null != m && null != D.A.getChannel(m)) return !0;
            if (0 === s) return !1;
            for (let e of i) if (null != D.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [i, m, s]),
        j = null != l && !(d && l === m);
    return v
        ? (0, r.jsxs)("div", {
              className: n7.kL,
              children: [
                  (0, r.jsx)("nav", {
                      className: n7.pz,
                      "aria-label": eg.intl.string(nk.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eT.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, r.jsxs)(t7.d_, {
                          children: [
                              null != m
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(
                                                n$,
                                                {
                                                    channelId: m,
                                                    selectedVoiceChannelId: m,
                                                    iconVariant: nJ.CHANNEL_TYPE,
                                                },
                                                `tiv-${m}`,
                                            ),
                                            g.length > 0 ? (0, r.jsx)("hr", { className: n7.mF }) : null,
                                        ],
                                    })
                                  : null,
                              g.map((e) =>
                                  (0, r.jsx)(n$, { channelId: e.channelId, selectedVoiceChannelId: m }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  j
                      ? (0, r.jsxs)("div", {
                            className: n7.oM,
                            children: [
                                (0, r.jsx)(nU, { channel: u, user: S, guild: h, title: I, dragStart: t, dragging: n }),
                                (0, r.jsx)(n9, { selectedChannelId: l }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, r.jsx)(V.g, { emptyText: eg.intl.string(nk.default["xpv/t5"]), icon: t9.ChatIcon });
}
let it = c.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, r.jsx)(ie, { dragStart: n, dragging: i });
});
var ii = n(428689),
    is = n(175203),
    ir = n(163432),
    il = n(799808),
    ia = n(88525);
let io = c.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            s = t.user?.id;
        return (0, y.bG)([ed.Ay], () => null != t.user && null != i && null != n && ed.Ay.isLocalVideoDisabled(s, i), [
            s,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, r.jsx)(is.Ay, { ...e });
    }),
    id = c.memo(function (e) {
        let {
                context: t = tY.x.DEFAULT,
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
                                n.e("866038"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
                                n.e("708757"),
                                n.e("585968"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("449145"),
                                n.e("470314"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("658980"),
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
                    io,
                    {
                        participant: e,
                        width: o,
                        className: ia.Vs,
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
    iu = c.memo(function (e) {
        let {
                context: t = tY.x.DEFAULT,
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
            (0, il.j_)({ locked: s, pinned: l.pinned, widget: l.type, isPreviewingInGame: !1 }, p);
        }, [s, l, p]);
        let f = c.useMemo(() => ({ opacity: l.opacity }), [l.opacity]),
            x = c.useMemo(() => m()({ [ia.wb]: !0, [ia.Vd]: !g, [ia.R]: !p && s }), [g, p, s]);
        return 0 !== n.length || s
            ? null == a
                ? null
                : (0, r.jsx)("div", {
                      ref: h,
                      className: x,
                      style: f,
                      children: (0, r.jsx)(id, {
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
                    children: (0, r.jsx)(V.g, {
                        emptyText: eg.intl.string(eg.t.aTiM42),
                        icon: ii.VideoIcon,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    ic = (e) => {
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
function ih(e) {
    let t = (0, y.bG)([P.Ay, D.A], () => D.A.getChannel(P.Ay.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [s, l] = (0, y.bG)(
            [_.A],
            () => (null == i ? [[], 0] : [_.A.getVideoParticipants(i), _.A.getParticipantsVersion(i)]),
            [i],
            nt.D,
        ),
        a = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: u } = (0, eI.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: h, visibleParticipants: m } = (0, ir.i4)(a ? o : d, s, {
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
            c.useLayoutEffect(() => {
                r.current = s;
            }),
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
                    let { width: o, height: d } = ic({
                        ...a,
                        widget: l,
                        operation: eT.P.RESIZE_NORTH,
                        computedSize: { width: s, height: i },
                        originSize: { width: s, height: i },
                    });
                    (0, J.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: a, widget: e.widget, widgetLayoutSpecs: p }),
        (0, r.jsx)(iu, {
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
var im = n(450740),
    ig = n(968898);
n(321073);
var ip = n(232554),
    ix = n(592598),
    iA = n(28528),
    iE = n(57019),
    iS = n(191701),
    iI = n(672396),
    iv = n(942833);
let ij = [];
function iT(e) {
    return e.notification.id;
}
function iC(e, t, n, i) {
    let { index: s, notification: l, locked: a, pinned: o } = t;
    return (0, r.jsx)(iA.A, { index: s, notification: l, locked: a, pinned: o, transitionState: n, cleanUp: i }, e);
}
function iy(e) {
    return (0, r.jsx)("div", { className: iv.k, children: e });
}
let ib = c.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            s = (0, y.bG)(
                [iS.default, ix.A],
                () => {
                    if (ix.A.isNotificationDisabled(iI.KS.TextChat)) return ij;
                    let e = [],
                        i = 0;
                    for (let s of iS.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || s.status !== em.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: s }), i++);
                    }
                    return e;
                },
                [t, n],
                tZ.oQ,
            ),
            l = c.useState(() => new iE.Fn(t))[0];
        return (c.useLayoutEffect(() => l.updateState(s, t)),
        c.useLayoutEffect(() => (l.initialize((0, eR.b)()), () => l.cleanUp()), [l]),
        0 !== s.length || t)
            ? (0, r.jsx)(iE.Gt.Provider, {
                  value: l,
                  children: (0, r.jsx)(ip.F, { items: s, renderItem: iC, getItemKey: iT, wrapChildren: iy }),
              })
            : i
              ? t
                  ? null
                  : (0, r.jsx)(V.g, { emptyText: eg.intl.string(eg.t.O1Nbjq), icon: na.BellIcon, absolute: !0 })
              : null;
    }),
    iw = {
        [em.uss.VIDEO]: {
            streamerModeLabel: () => eg.intl.string(eg.t.UPvOia),
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: s, borderWidth: l, showEmpty: a } = e;
                return (0, e_.cv)(t)
                    ? (0, r.jsx)(ih, {
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
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t.UPvOia) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ig.CS, {
                            onClick: (t) => {
                                (0, e_.cv)(e) &&
                                    (0, l.L3)(t, async () => {
                                        let { default: t } = await Promise.all([
                                            n.e("700792"),
                                            n.e("592822"),
                                            n.e("955630"),
                                            n.e("478238"),
                                        ]).then(n.bind(n, 662554));
                                        return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: ic,
        },
        [em.uss.VOICE_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t.nFv3Gb),
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: s } = e;
                return (0, e_.ZO)(t)
                    ? (0, r.jsx)(im.Ay, {
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
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("234901").then(n.bind(n, 51444));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, r.jsx)(T, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("249170").then(n.bind(n, 508457));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, r.jsx)(e$, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
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
            renderTitle: (e) => (0, r.jsx)(ig.we, { widgetId: e.id, children: eg.intl.string(eg.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, e_.dO)(e)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ig.CS, {
                                  onClick: (t) => {
                                      (0, e_.dO)(e) &&
                                          (0, l.L3)(t, async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("955630"),
                                                  n.e("421289"),
                                              ]).then(n.bind(n, 543824));
                                              return (n) => (0, r.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, r.jsx)(ig.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eG,
        },
        [em.uss.QUICK_ACTIONS]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(t8, { locked: t });
            },
        },
        [em.uss.NOTIFICATIONS]: {
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, r.jsx)(ib, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(ig.CS, {
                            onClick: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await n.e("751607").then(n.bind(n, 98109));
                                    return (t) => (0, r.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, r.jsx)(ig.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [em.uss.ACTIVITY]: {
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(u.Ay, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.FRIENDS]: {
            streamerModeLabel: () => eg.intl.string(eg.t.TdEu5X),
            renderWidget(e) {
                let { locked: t } = e;
                return (0, r.jsx)(C.A, { locked: t });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, d.NI)("WidgetRenderConfig").hasFriendList,
        },
        [em.uss.TEXT_CHAT_V3]: {
            streamerModeLabel: () => eg.intl.string(eg.t["/VQax8"]),
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, r.jsx)(it, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, r.jsx)(ig.Pl, { children: eg.intl.string(eg.t["/VQax8"]) }),
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
