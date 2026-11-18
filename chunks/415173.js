n.d(t, { A: () => rS });
var i,
    r,
    l = n(477900),
    s = n(428689),
    a = n(983851),
    o = n(31300),
    d = n(831544),
    u = n(782603),
    c = n(687966),
    h = n(214947),
    m = n(534890),
    g = n(442433),
    p = n(934058),
    f = n(945810),
    x = n(71393),
    A = n(495867),
    E = n(288641),
    S = n(589051),
    I = n(907357),
    v = n(582128),
    j = n(503698),
    C = n.n(j),
    y = n(812729),
    T = n.n(y),
    b = n(120692),
    _ = n(866323),
    N = n(939249),
    w = n(834730),
    R = n(259788),
    O = n(302614),
    M = n(981033);
let D = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function k(e) {
    let { locked: t, pinned: n } = e,
        [i, r] = v.useState(0),
        [s, a] = v.useState(0),
        [o, d] = v.useState(0),
        u = v.useRef(0),
        [c, h] = v.useState(0),
        { timeToLiveMs: m, reappearTimeMs: g } = R.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            T(),
        ),
        p = { timeToLiveMs: m, reappearTimeMs: g },
        f = v.useRef(p);
    function x() {
        (r(Date.now()), h((e) => e + 1));
    }
    (v.useEffect(() => {
        f.current = p;
    }),
        v.useEffect(
            () => (
                (u.current = setInterval(() => {
                    let e = Date.now();
                    (a(e),
                        d((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = f.current.timeToLiveMs,
                                r = i + f.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        }));
                }, 100)),
                () => {
                    clearInterval(u.current);
                }
            ),
            [],
        ));
    let A = i > 0 && s - i < 1e3,
        E = (0, _.p)(o > 0 && o < s && s - o < m, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: D,
        }),
        [S, I] = v.useState(!1);
    if (
        (v.useEffect(() => {
            c > 10 && I(!0);
        }, [c]),
        S)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: E(
                  (e, t) =>
                      t &&
                      (0, l.jsx)(b.animated.div, {
                          style: e,
                          className: M.r2,
                          children: (0, l.jsx)(O.A, {
                              className: C()(M.VC, A && M.Nd),
                              children: (0, l.jsx)(N.D, {
                                  onClick: x,
                                  className: M.vk,
                                  children: (0, l.jsxs)(w.E, {
                                      variant: "body-md/semibold",
                                      color: "text-overlay-light",
                                      children: ["Click Me (", c, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
var z = n(119173),
    P = n(855986),
    V = n(183623),
    L = n(684013),
    G = n(964486),
    U = n(628983),
    F = n(652896),
    Y = n(293432),
    H = n(616356),
    Z = n(46653),
    W = n(734057),
    X = n(83880),
    B = n(309010),
    q = n(41984),
    K = n(412477),
    J = n(475743),
    Q = n(373954),
    $ = n(810412),
    ee = n(164636),
    et = n(205693),
    en = n(866665),
    ei = n(358618),
    er = n(622631),
    el = n(365199),
    es = n(890856),
    ea = n(827343),
    eo = n(391973),
    ed = n(401843),
    eu = n(520698),
    ec = n(164617),
    eh = n(402216),
    em = n(607407),
    eg = n(534400),
    ep = n(267102),
    ef = n(259264),
    ex = n(555148),
    eA = n(110234),
    eE = n(988468),
    eS = n(287809),
    eI = n(562153),
    ev = n(761661),
    ej = n(652215),
    eC = n(792996),
    ey = n(911312);
function eT(e) {
    let { participant: t } = e,
        n = t.user.id,
        i = (0, ee.bG)(
            [eE.Ay],
            () => {
                let e = (0, eu.A)(t.type);
                return eE.Ay.isLocalMute(t.user.id, e);
            },
            [t],
        ),
        r = (0, ee.bG)([Z.default], () => Z.default.getId()),
        { hasVideo: s } = (0, eA.A)(t, r),
        o = i && s,
        d = v.useCallback(() => {
            ea.default.toggleLocalMute(n, et.x.STREAM);
        }, [n]);
    return (0, l.jsx)(en.m, {
        text: o ? eC.intl.string(eC.t.YqAjXy) : eC.intl.string(eC.t.w4m945),
        children: (0, l.jsx)(N.D, {
            className: ey.IF,
            onClick: (e) => {
                (e.stopPropagation(),
                    (0, $.YX)(ej.uss.GO_LIVE, {
                        type: $.Z5.AUDIO,
                        value: o ? $.IP.ENABLED : $.IP.DISABLED,
                        userId: t.user.id,
                    }),
                    d());
            },
            children: o
                ? (0, l.jsx)(ei.VoiceXIcon, { size: "sm", color: "currentColor" })
                : (0, l.jsx)(a.VoiceNormalIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eb(e, t) {
    return (i) => {
        ((0, $.YX)(ej.uss.GO_LIVE, { type: $.Z5.GO_LIVE, value: $.IP.SETTINGS_OPENED, userId: e.user.id }),
            i.stopPropagation(),
            (0, g.L3)(i, async () => {
                let { default: i } = await Promise.all([n.e(189673), n.e(245996), n.e(58315), n.e(761361)]).then(
                    n.bind(n, 663912),
                );
                return (n) => (0, l.jsx)(i, { ...n, stream: e.stream, exitFullscreen: () => {}, appContext: t });
            }));
    };
}
function e_(e) {
    let { hasActiveStream: t, participant: n, onEnablePin: i } = e,
        r = (0, ep.Us)(),
        s = n.user,
        a = (0, ee.bG)([eS.default], () => eS.default.getUser(s.id) ?? s, [s]),
        o = t ? eC.intl.string(eC.t.tLxK4l) : eC.intl.string(eC.t.E5RDnK);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { className: C()(ey.MI, { [ey.te]: t }) }),
            !t &&
                (0, l.jsx)("div", {
                    className: ey.TP,
                    children: (0, l.jsx)(en.m, {
                        text: o,
                        children: (0, l.jsxs)(N.D, {
                            className: ey.kx,
                            onClick: () => {
                                ((0, ed.A9)(n.stream, { forceMultiple: !0, noFocus: !0 }),
                                    i(),
                                    (0, $.YX)(ej.uss.GO_LIVE, {
                                        type: $.Z5.GO_LIVE,
                                        value: $.IP.ENABLED,
                                        userId: n.user.id,
                                    }));
                            },
                            children: [
                                (0, l.jsx)(w.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-overlay-light",
                                    children: eC.intl.string(eC.t.I6JG46),
                                }),
                                (0, l.jsx)(er.EyePlusIcon, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    }),
                }),
            (0, l.jsxs)("div", {
                className: ey.ne,
                children: [
                    (0, l.jsx)("div", {
                        className: ey.fL,
                        children: (0, l.jsxs)("div", {
                            className: ey.K8,
                            children: [
                                (0, l.jsx)(w.E, {
                                    variant: "body-md/medium",
                                    color: "text-overlay-light",
                                    className: ey.yb,
                                    children: eI.Ay.getName(n.stream.guildId, n.stream.channelId, s),
                                }),
                                (0, l.jsx)(eg.Ay, {
                                    primaryGuild: a.primaryGuild,
                                    userId: a.id,
                                    containerClassName: ey.Mp,
                                    inline: !1,
                                    onShowProfile: () => {
                                        (0, $.YX)(ej.uss.GO_LIVE, {
                                            type: $.Z5.GO_LIVE,
                                            value: $.IP.GUILD_PROFILE_OPENED,
                                            userId: n.user.id,
                                        });
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: ey.FO,
                        children:
                            t &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(eT, { participant: n }),
                                    (0, l.jsx)(en.m, {
                                        text: eC.intl.string(eC.t["3D5yo/"]),
                                        children: (0, l.jsx)(N.D, {
                                            className: ey.IF,
                                            onClick: eb(n, r),
                                            children: (0, l.jsx)(el.MoreHorizontalIcon, {
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
let eN = new Set([ej.XYD.ENDED, ej.XYD.FAILED, ej.XYD.PAUSED]),
    ew = v.memo(function (e) {
        let { participant: t, width: n, locked: i, widgetId: r, pinned: s } = e,
            a = (0, ee.bG)([H.A], () => H.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [
                t.user.id,
                t.stream.guildId,
            ]),
            o = (0, ep.Us)(),
            d = null != a && eN.has(a.state),
            u = null != a,
            c = (0, ev.dh)(t.stream),
            h = (0, ev.XG)(t.stream);
        return (!u && i) || d
            ? null
            : (0, l.jsxs)("div", {
                  className: ey.Vs,
                  children: [
                      u && !i && (0, l.jsx)(eh.Ay, { size: eh.Ay.Sizes.SMALL, className: ey.Ok }),
                      u
                          ? (0, l.jsx)("div", {
                                className: ey.X$,
                                children: (0, l.jsx)(es.s, {
                                    "aria-label": eC.intl.formatToPlainString(eC.t.gHPz3Q, {
                                        streamerName: t.user.username,
                                    }),
                                    onClick: () => {},
                                    onContextMenu: eb(t, o),
                                    className: ey.X$,
                                    style: { transform: `scale(${c})` },
                                    children: (0, l.jsx)(ex.A, {
                                        participant: t,
                                        width: n,
                                        fit: h ?? ef.$.CONTAIN,
                                        popoutType: ec.N.OVERLAY,
                                        selected: !1,
                                        wrapperClassName: i ? ey.Gq : void 0,
                                    }),
                                }),
                            })
                          : (0, l.jsx)("div", {
                                className: ey.Rh,
                                children: (0, l.jsx)(em.A, { noText: !0, className: ey.HL, stream: t.stream }),
                            }),
                      i
                          ? null
                          : (0, l.jsx)(e_, {
                                participant: t,
                                hasActiveStream: u,
                                onEnablePin: function () {
                                    s || (0, eo.v0)(r);
                                },
                            }),
                  ],
              });
    });
var eR = n(765671),
    eO = n(531685),
    eM = n(365971),
    eD = n(129537);
let ek = 9 / 16,
    ez = 16 / 9;
function eP(e, t) {
    return t * (Math.max(1, e) - 1);
}
function eV(e) {
    let { width: t, height: n, containerOffset: i, gapSize: r, tileCount: l, isVertical: s } = e,
        a = s ? t : t - eP(l, r),
        o = s ? n - eP(l, r) : n;
    return { verticalRatio: (o - i) / (a - i), horizontalRatio: (a - i) / (o - i) };
}
function eL(e, t, n) {
    let { containerOffset: i, gapSize: r, tileCount: l, isVertical: s } = t,
        { maxWidth: a, maxHeight: o } = n,
        d = Math.max(1, l),
        u = e.width > a,
        c = e.height > o;
    if (!u && !c) return e;
    let h = eP(l, r),
        { verticalRatio: m, horizontalRatio: g } = eV({
            width: e.width,
            height: e.height,
            containerOffset: i,
            gapSize: r,
            tileCount: d,
            isVertical: s,
        }),
        p = e.width - i,
        f = e.height - i,
        x = a - i,
        A = o - i;
    return (
        s ? ((A -= h), (f -= h)) : ((x -= h), (p -= h)),
        u && c && (e.width > e.height ? (f = (p = x) * m) : (p = (f = A) * g), (u = p > x), (c = f > A)),
        u && (f = (p = x) * m),
        c && (p = (f = A) * g),
        s ? (f += eP(l, r)) : (p += eP(l, r)),
        { width: p + i, height: f + i }
    );
}
var eG = n(897720),
    eU = n(545807);
function eF(e, t) {
    return 2 * e + 2 * t;
}
function eY(e) {
    let { width: t, height: n } = e;
    return { fixed: !0, width: t, height: n };
}
function eH(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 256,
        l = { width: r, height: r * ek },
        s = Math.max(1, e),
        a = eP(e, t),
        o = eF(n, t);
    return i
        ? { width: l.width + o, height: l.height * s + a + o }
        : { width: l.width * s + a + o, height: l.height + o };
}
function eZ(e, t, n, i) {
    let r = eF(e, t);
    return i ? n.width - r : (n.height - r) * ez;
}
function eW(e) {
    return e.height > e.width;
}
let eX = 180 / 1080;
function eB(e) {
    let { layout: t, tileCount: n, borderWidth: i, padding: r, previousContainerSize: l, widgetMinMaxSizes: s } = e,
        a = t === eG.IV.VERTICAL,
        o = eZ(i, r, l, a);
    return eL(
        eH(n, r, i, a, o),
        { containerOffset: eF(i, r), gapSize: r, tileCount: n, isVertical: a },
        { maxWidth: s.maxSize.width, maxHeight: s.maxSize.height },
    );
}
function eq(e) {
    let { widgetId: t, size: n, borderWidth: i, padding: r, minSize: l, containerSpecs: s, defaultSize: a, ...o } = e;
    function d(e) {
        return eK({
            operation: eD.P.RESIZE_NORTH,
            computedSize: e,
            originSize: e,
            borderWidth: i,
            padding: r,
            containerSpecs: s,
            ...o,
        });
    }
    let u = { widgetId: t, size: { fixed: n.fixed, ...d(n) }, minSize: { ...d(l) } };
    (null != a && (u.defaultSize = { ...d(a) }), (0, eo.Ju)({ ...u }));
}
let eK = (e) => {
    let t,
        n,
        i,
        { operation: r, computedSize: l, originSize: s, borderWidth: a, padding: o, containerSpecs: d } = e,
        u = eF(a, o),
        c = Math.max(1, s.width),
        h = Math.max(1, s.height),
        m = { width: c, height: h },
        g = eW(m),
        p = ((t = eW(m)), (i = (n = eZ(a, o, m, t)) * ek), t ? Math.floor(m.height / i) : Math.floor(m.width / n)),
        f = eV({ width: c, height: h, containerOffset: u, gapSize: o, tileCount: p, isVertical: g }),
        x = eP(p, o);
    return eL(
        (() => {
            var e, t;
            switch (r) {
                case eD.P.RESIZE_NORTH:
                case eD.P.RESIZE_SOUTH:
                    let n;
                    return {
                        height: l.height,
                        width: ((e = l.height), (n = ((g ? e - x : e) - u) * f.horizontalRatio), g || (n += x), n + u),
                    };
                default:
                    let i;
                    return {
                        width: l.width,
                        height: ((t = l.width), (i = ((g ? t : t - x) - u) * f.verticalRatio), g && (i += x), i + u),
                    };
            }
        })(),
        { containerOffset: u, gapSize: o, tileCount: p, isVertical: g },
        { maxWidth: 0.75 * d.maxX, maxHeight: 0.75 * d.maxY },
    );
};
var eJ = n(111568);
let eQ = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    e$ = v.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: i,
                layout: r,
                locked: s,
                activeStreams: a,
                streamParticipants: o,
                participantsVersion: d,
                pinned: u,
                padding: c,
            } = e,
            h = o.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: i,
                locked: s,
                widgetId: t,
                pinned: u,
            })),
            m = (0, J.Ay)(n),
            g = (0, J.Ay)(s),
            p = r === eG.IV.VERTICAL,
            f = s || g !== s || m !== n,
            x = v.useMemo(() => {
                let e = 0,
                    t = 0;
                return p
                    ? h.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? c : 0)) - t.height, x: 0 }))
                    : h.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? c : 0)) - e.width, y: 0 }));
            }, [h, c, p]),
            A = v.useMemo(
                () => (0 === x.length ? 256 * ek : x.reduce((e, t) => e + t.height, 0) + (p ? c * (x.length - 1) : 0)),
                [x, p, c],
            ),
            E = v.useMemo(
                () => (0 === x.length ? 256 : x.reduce((e, t) => e + t.width, 0) + (p ? 0 : c * (x.length - 1))),
                [x, p, c],
            ),
            S = (0, _.p)(
                x,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r };
                    },
                    config: eQ,
                    trail: 100 * !f,
                },
                f ? "animate-never" : "respect-motion-settings",
            ),
            I = (0, $.Dk)(() => new Set(o.map((e) => e.user.id)), [o, d]),
            j = (0, $.Dk)(() => new Set(o.filter((e) => a.has((0, F._z)(e.stream))).map((e) => e.user.id)), [o, a, d]);
        return (
            v.useEffect(() => {
                0 !== I.size &&
                    (0, $.Y)(ej.uss.GO_LIVE, {
                        locked: Q.default.isInstanceLocked(),
                        shownUserIds: Array.from(I),
                        liveUserIds: Array.from(j),
                        contentInventoryIds: [],
                    });
            }, [I, j]),
            (0, l.jsx)("div", {
                className: C()({ [eJ.UT]: !0, [eJ.Vd]: p, [eJ.xM]: !p }),
                style: p ? { height: A } : { width: E },
                children: S((e, t, r, s) =>
                    (0, l.jsx)(b.animated.div, {
                        className: eJ.ux,
                        style: Object.assign({}, e, { width: n, height: i, zIndex: h.length - s }),
                        children: (function (e) {
                            let { participant: t, width: n, locked: i, widgetId: r, pinned: s } = e;
                            return (0, l.jsx)("div", {
                                className: eJ.iA,
                                children: (0, l.jsx)(
                                    ew,
                                    { participant: t, width: n, locked: i, widgetId: r, pinned: s },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
var e0 = n(392164),
    e1 = n(391436);
function e2(e) {
    var t, n;
    let i,
        r,
        s,
        {
            id: a,
            widget: o,
            size: d,
            locked: u,
            padding: c,
            borderWidth: h,
            opacity: m,
            horizontal: g,
            pinned: p,
            anchorTop: f,
            anchorLeft: x,
            showEmpty: A = !0,
        } = e,
        E = g ? eG.IV.HORIZONTAL : eG.IV.VERTICAL,
        S = E === eG.IV.VERTICAL,
        I = (0, P.bG)(
            [X.A],
            () => {
                let e = X.A.getWidget(a);
                return !!(0, eG.dO)(e) && !u && (e.meta.showAllStreams ?? !0);
            },
            [a, u],
        ),
        j = (0, P.bG)([B.Ay], () => B.Ay.getVoiceChannelId()),
        C = (0, P.bG)([W.A], () => W.A.getChannel(j)),
        y = (0, P.bG)([Z.default], () => Z.default.getId()),
        {
            streamParticipants: T,
            activeStreams: b,
            participantsVersion: _,
        } = ((t = (f && S) || (x && g)),
        (n = (!f && S) || (!x && g)),
        (i = (0, P.yK)([H.A], () => (null == j ? [] : H.A.getAllActiveStreamsForChannel(j)))),
        (r = v.useMemo(() => new Set(i.map((e) => (0, F._z)(e))), [i])),
        (s = (0, P.bG)([U.A], () => (null == j ? -1 : U.A.getParticipantsVersion(j)))),
        {
            streamParticipants: (0, P.yK)(
                [U.A, H.A],
                () => {
                    if (null == j) return [];
                    function e(e) {
                        return r.has((0, F._z)(e.stream));
                    }
                    let i = U.A.getStreamParticipants(j).filter((t) => {
                        if (t.user.id === y) return !1;
                        let n = H.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                        return !(null != n && eN.has(n.state)) && (!!I || e(t));
                    });
                    return (
                        i.sort((i, r) => {
                            if (t) {
                                if (e(i) && !e(r)) return -1;
                                if (!e(i) && e(r)) return 1;
                            } else if (n) {
                                if (e(i) && !e(r)) return 1;
                                if (!e(i) && e(r)) return -1;
                            }
                            return i.user.username.localeCompare(r.user.username);
                        }),
                        i
                    );
                },
                [j, r, y, I, t, n],
            ),
            activeStreams: r,
            participantsVersion: s,
        }),
        N = T.length,
        w = (0, P.bG)([Y.A], () => Y.A.getWindowState(e0.f), []),
        {
            tileWidth: R,
            tileHeight: O,
            widgetWidth: M,
            widgetHeight: D,
            containerRef: k,
            containerMinMaxSizes: z,
        } = (function (e) {
            let { tileCount: t, padding: n, borderWidth: i, isVertical: r, widgetSize: l } = e,
                { width: s, height: a } = {
                    width: "number" == typeof l.width ? l.width : 256,
                    height: "number" == typeof l.height ? l.height : 256 * ek,
                },
                { width: o = s, height: d = a, ref: u } = (0, eR.Ay)(),
                c = (0, eU.A)(),
                h = (0, eM.Q2)(c),
                m = (0, P.bG)([eO.A], () => eO.A.windowSize(h), [h]),
                g = (function (e) {
                    let {
                            tileCount: t,
                            padding: n,
                            borderWidth: i,
                            windowWidth: r,
                            windowHeight: l,
                            isVertical: s,
                        } = e,
                        a = eH(t, n, i, s),
                        o = { maxX: r ?? (2 * a.width) / 0.75, maxY: l ?? (2 * a.height) / 0.75, minX: 0, minY: 0 },
                        d = { width: 0.75 * o.maxX, height: 0.75 * o.maxY },
                        u = (l ?? 0) * eX;
                    return (
                        (u = Math.max(a.height, u)),
                        {
                            minSize: a,
                            defaultSize: eH(t, n, i, s, (u = Math.min(d.height, u)) * ez),
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
                    isVertical: r,
                }),
                p = eF(i, n),
                f = eZ(i, n, { width: o + p, height: d + p }, r),
                x = f * ek;
            return {
                tileWidth: f,
                tileHeight: x,
                widgetWidth: s,
                widgetHeight: a,
                containerRef: u,
                containerMinMaxSizes: g,
            };
        })({ tileCount: N, padding: c, borderWidth: h, isVertical: S, widgetSize: d }),
        Q = {
            id: a,
            widget: o,
            layout: E,
            participants: T.length,
            padding: c,
            borderWidth: h,
            widgetMinMaxSizes: z,
            containerSize: { width: M, height: D },
            orientedPosition: { top: 0, left: 0, bottom: w?.height ?? D, right: w?.width ?? M },
            locked: u,
        };
    !(function (e) {
        let { streamParticipants: t, layout: n, widgetLayoutSpecs: i } = e,
            r = v.useRef(i);
        r.current = i;
        let l = (0, J.Ay)(n),
            s = t.length,
            a = i.widgetMinMaxSizes.maxSize.width * i.widgetMinMaxSizes.maxSize.height;
        ((0, G.u5)(() => {
            let {
                id: e,
                widgetMinMaxSizes: t,
                containerSize: n,
                layout: i,
                padding: l,
                widget: a,
                borderWidth: o,
                locked: d,
                ...u
            } = r.current;
            null == a ||
                eq({
                    widgetId: e,
                    size: eY(
                        eB({
                            layout: i,
                            tileCount: Math.max(1, s),
                            borderWidth: o,
                            padding: l,
                            previousContainerSize: t.defaultSize,
                            widgetMinMaxSizes: t,
                        }),
                    ),
                    defaultSize: t.defaultSize,
                    minSize: eY(t.minSize),
                    containerSpecs: t.containerSpecs,
                    padding: l,
                    borderWidth: o,
                    widget: a,
                    ...u,
                });
        }),
            v.useLayoutEffect(() => {
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: n,
                    layout: i,
                    padding: l,
                    widget: a,
                    borderWidth: o,
                    locked: d,
                    ...u
                } = r.current;
                if (null != a) {
                    if (0 === s) {
                        if (d) return;
                        eq({
                            widgetId: e,
                            size: eY(t.defaultSize),
                            defaultSize: t.defaultSize,
                            minSize: eY(t.minSize),
                            padding: l,
                            borderWidth: o,
                            widget: a,
                            containerSpecs: t.containerSpecs,
                            ...u,
                        });
                        return;
                    }
                    eq({
                        widgetId: e,
                        size: eY(
                            eB({
                                layout: i,
                                tileCount: s,
                                borderWidth: o,
                                padding: l,
                                previousContainerSize: n,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: eY(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: l,
                        borderWidth: o,
                        widget: a,
                        ...u,
                    });
                }
            }, [s, a]),
            v.useLayoutEffect(() => {
                if (r.current.participants <= 1) return;
                let {
                    id: e,
                    widgetMinMaxSizes: t,
                    containerSize: i,
                    padding: s,
                    borderWidth: a,
                    participants: o,
                    widget: d,
                    ...u
                } = r.current;
                null == d ||
                    l === n ||
                    eq({
                        widgetId: e,
                        size: eY(
                            (function (e) {
                                let {
                                        oldLayout: t,
                                        newLayout: n,
                                        tileCount: i,
                                        borderWidth: r,
                                        padding: l,
                                        previousContainerSize: s,
                                        widgetMinMaxSizes: a,
                                    } = e,
                                    o = eZ(r, l, s, t === eG.IV.VERTICAL);
                                return eL(
                                    eH(i, l, r, n === eG.IV.VERTICAL, o),
                                    {
                                        containerOffset: eF(r, l),
                                        gapSize: l,
                                        tileCount: i,
                                        isVertical: n === eG.IV.VERTICAL,
                                    },
                                    { maxWidth: a.maxSize.width, maxHeight: a.maxSize.height },
                                );
                            })({
                                oldLayout: l ?? n,
                                newLayout: n,
                                tileCount: o,
                                borderWidth: a,
                                padding: s,
                                previousContainerSize: i,
                                widgetMinMaxSizes: t,
                            }),
                        ),
                        minSize: eY(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: s,
                        borderWidth: a,
                        widget: d,
                        ...u,
                    });
            }, [n, l]),
            (0, G.l0)(() => {
                let { id: e, widgetMinMaxSizes: t, widget: n, padding: i, ...l } = r.current;
                null != n &&
                    eq({
                        widgetId: e,
                        size: eY(t.defaultSize),
                        defaultSize: t.defaultSize,
                        minSize: eY(t.minSize),
                        containerSpecs: t.containerSpecs,
                        padding: i,
                        widget: n,
                        ...l,
                    });
            }));
    })({ id: a, streamParticipants: T, layout: E, widgetLayoutSpecs: Q });
    let $ = null == C || (0 === b.size && u) || (0 === N && !u);
    return (v.useEffect(() => {
        L.A.setGpuBoostRequested(q.y7.OVERLAY_VIDEO_STREAM_RENDERING, !$);
    }, [$]),
    (0, G.Ay)(() => () => {
        L.A.setGpuBoostRequested(q.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    ($ || !p) && u)
        ? null
        : $ && !u
          ? A
              ? u
                  ? null
                  : (0, l.jsx)(K.g, {
                        emptyText: eC.intl.string(eC.t["T6+rXy"]),
                        icon: V.ScreenArrowIcon,
                        absolute: !0,
                    })
              : null
          : (0, l.jsx)("div", {
                className: e1.u,
                style: { opacity: m },
                ref: k,
                children: (0, l.jsx)(e$, {
                    widgetId: a,
                    tileWidth: R,
                    tileHeight: O,
                    locked: u,
                    layout: E,
                    activeStreams: b,
                    streamParticipants: T,
                    participantsVersion: _,
                    pinned: p,
                    padding: c,
                }),
            });
}
var e3 = n(143129),
    e5 = n(821609),
    e6 = n(706712),
    e8 = n(225123),
    e4 = n(321090),
    e9 = n(189953);
function e7(e) {
    let { locked: t, pinned: n, anchorLeft: i } = e,
        r = (0, P.bG)([e8.A], () => e8.A.getSocket()),
        s = (0, P.bG)([e4.A], () => e4.A.isGPUBoosted());
    (0, e6.ZX)();
    let a = (0, P.bG)([Y.A], () => Y.A.getWindow(e0.f)),
        [o, d] = (0, e6.DQ)(r),
        {
            currentFPS: u,
            averageFrameTime: c,
            timeSinceLastDrop: h,
            onResetFrameData: m,
            droppedFramesRef: g,
            renderedFrameCount: p,
            bufferFramecountRef: f,
            frameCheckerEffect: x,
        } = (0, e6.Dj)(!0, o, !0),
        [A, E, S] = (0, e6.F5)(r),
        [I, j] = (0, e6.km)(A, x, a),
        y = performance.now() - d.current < 5e3,
        T = E(c, f.current);
    (0, G.Ay)(
        () => (
            I(),
            () => {
                j();
            }
        ),
    );
    let b = v.useCallback(() => {
            (m(), S(), I());
        }, [m, S, I]),
        [_, N] = v.useState(!0),
        [R, M] = v.useState(!0),
        [D, k] = v.useState(!0),
        [z, V] = v.useState(!0),
        [L, U] = v.useState(!0);
    return t && !n
        ? null
        : (0, l.jsxs)("div", {
              className: C()(e9.st, !i && e9.Hk),
              children: [
                  (_ || !t) &&
                      (0, l.jsxs)("div", {
                          className: e9.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: e9.On,
                                      children: (0, l.jsx)(e3.d, { checked: _, onChange: (e) => N(e) }),
                                  }),
                              (0, l.jsxs)(w.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: e9.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, l.jsx)(w.E, {
                                          tag: "span",
                                          variant: "mono-md/bold",
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
                  (R || !t) &&
                      (0, l.jsxs)("div", {
                          className: e9.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: e9.On,
                                      children: (0, l.jsx)(e3.d, { checked: R, onChange: (e) => M(e) }),
                                  }),
                              (0, l.jsxs)(w.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: e9.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, l.jsxs)(w.E, {
                                          tag: "span",
                                          variant: "mono-md/bold",
                                          color: c > 1.1 * e6.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [c.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (D || !t) &&
                      (0, l.jsxs)("div", {
                          className: e9.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: e9.On,
                                      children: (0, l.jsx)(e3.d, { checked: D, onChange: (e) => k(e) }),
                                  }),
                              (0, l.jsxs)(w.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: e9.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, l.jsx)(w.E, {
                                          tag: "span",
                                          variant: "mono-md/bold",
                                          color:
                                              h < 2
                                                  ? "text-feedback-critical"
                                                  : h < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: g.current,
                                      }),
                                      (0, l.jsxs)(w.E, {
                                          tag: "span",
                                          variant: "mono-md/bold",
                                          color: "text-subtle",
                                          className: e9.af,
                                          children: ["(", ((g.current / p.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (z || !t) &&
                      (0, l.jsxs)("div", {
                          className: e9.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: e9.On,
                                      children: (0, l.jsx)(e3.d, { checked: z, onChange: (e) => V(e) }),
                                  }),
                              (0, l.jsxs)(w.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  className: e9.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, l.jsx)(w.E, {
                                          tag: "span",
                                          variant: "mono-md/bold",
                                          color: "text-strong",
                                          children: p.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (L || !t) &&
                      (0, l.jsxs)("div", {
                          className: e9.PG,
                          children: [
                              !t &&
                                  (0, l.jsx)("div", {
                                      className: e9.On,
                                      children: (0, l.jsx)(e3.d, { checked: L, onChange: (e) => U(e) }),
                                  }),
                              (0, l.jsx)(en.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, l.jsx)("div", {
                                      children: (0, l.jsxs)(w.E, {
                                          variant: "body-md/normal",
                                          color: "text-subtle",
                                          className: e9.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, l.jsxs)(w.E, {
                                                  tag: "span",
                                                  variant: "mono-md/bold",
                                                  color: T > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [T.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  y &&
                      (0, l.jsx)(en.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, l.jsx)("span", {
                              children: (0, l.jsx)(w.E, {
                                  tag: "span",
                                  variant: "mono-md/bold",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  s &&
                      (0, l.jsx)(w.E, {
                          tag: "span",
                          variant: "mono-md/bold",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, l.jsx)("div", {
                          className: e9.m8,
                          children: (0, l.jsx)(O.A, {
                              children: (0, l.jsx)(e5.$, { variant: "primary", text: "Reset Frame Data", onClick: b }),
                          }),
                      }),
              ],
          });
}
var te = n(417098),
    tt = n(55619),
    tn = n(734066),
    ti = n(351906),
    tr = n(377802),
    tl = n(348858),
    ts = n(523875),
    ta = n(416696),
    to = n(621956),
    td = n(446080),
    tu = n(265872),
    tc = n(615675),
    th = n(978940),
    tm = n(176781),
    tg = n(597798),
    tp = n(688810),
    tf = n(617354),
    tx = n(980923),
    tA = n(96020),
    tE = n(28499),
    tS = n(18235),
    tI = n(183184),
    tv = n(47167),
    tj = n(713654),
    tC = n(572164),
    ty = n(489496),
    tT = n(165862),
    tb = n(477782),
    t_ = n(419490),
    tN = n(226640),
    tw = n(753070),
    tR = n(683825);
function tO(e) {
    let { onClose: t } = e,
        n = (0, tC.E)(),
        i = (0, P.bG)([t_.Ay], () => t_.Ay.getSettings().clipsQuality),
        r = (0, P.bG)([t_.Ay], () => t_.Ay.getSettings().clipsLength),
        s = (0, tN.Qu)(),
        a = (0, tN.gF)(),
        o = (0, tN.Fz)();
    return (0, l.jsxs)(tT.W, {
        navId: "overlay-clips-menu",
        "aria-label": eC.intl.string(tR.default["YvJKD+"]),
        onClose: t,
        onSelect: t,
        children: [
            (0, l.jsx)(tb.sL, {
                id: "status",
                label: eC.intl.string(tR.default.qGgW4M),
                checked: n,
                action: () => {
                    (0, ty.yO)({ clipsEnabled: !n, trackAnalytics: !0 });
                },
            }),
            (0, l.jsx)(tb.Dr, {
                id: "clips-length",
                label: eC.intl.string(eC.t.OgfUio),
                subtext: eC.intl.formatToPlainString(eC.t["bTFv/3"], { count: r / 1e3 }),
                children: s.map((e) => {
                    let { id: t, value: n, label: i } = e;
                    return (0, l.jsx)(
                        tb.iD,
                        {
                            id: t,
                            group: "clips-length-options",
                            label: i,
                            checked: n === r,
                            action: () => (0, ty.h$)(n),
                        },
                        t,
                    );
                }),
            }),
            (0, l.jsx)(tb.Dr, {
                id: "clips-resolution",
                subtext: (0, tw.zr)(i.resolution),
                label: eC.intl.string(eC.t.aFudZJ),
                children: a.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, l.jsx)(
                        tb.iD,
                        {
                            id: t,
                            group: "clips-resolution-options",
                            label: r,
                            checked: n === i.resolution,
                            action: () => {
                                let { clipsQuality: e } = t_.Ay.getSettings();
                                (0, ty.GS)({ ...e, resolution: n });
                            },
                        },
                        t,
                    );
                }),
            }),
            (0, l.jsx)(tb.Dr, {
                id: "clips-framerate",
                subtext: eC.intl.formatToPlainString(tR.default.eztvbI, { fps: i.frameRate }),
                label: eC.intl.string(eC.t["2wScL1"]),
                children: o.map((e) => {
                    let { id: t, value: n, label: r } = e;
                    return (0, l.jsx)(
                        tb.iD,
                        {
                            id: t,
                            group: "clips-framerate-options",
                            label: r,
                            checked: n === i.frameRate,
                            action: () => {
                                let { clipsQuality: e } = t_.Ay.getSettings();
                                (0, ty.GS)({ ...e, frameRate: n });
                            },
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var tM = n(414405),
    tD = n(880144),
    tk = n(338771),
    tz = n(682163),
    tP = n(382404),
    tV = n(209932),
    tL = n(327289),
    tG = n(389960),
    tU = n(704877),
    tF = n(173660),
    tY = n(675991),
    tH = n(848362),
    tZ = n(594831),
    tW = n(222692),
    tX = n(693409),
    tB = n(977997),
    tq = n(46282),
    tK = n(887287),
    tJ = n(243612),
    tQ = n(731854),
    t$ = n(816466);
function t0(e) {
    let t = v.useRef(null);
    return (
        v.useEffect(() => {
            e && (t.current?.(), (t.current = null));
        }, [e]),
        (e) => ((t.current = e), e)
    );
}
function t1(e) {
    let {
        ref: t,
        isActive: n,
        disabled: i,
        iconComponent: r,
        iconColor: s,
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
    return (0, l.jsx)(tX.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? d : o,
        className: t$.x6,
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
        iconComponent: r,
        iconColor: s,
        caretColor: u,
        isActive: n,
        onContextMenu: x,
        onPopoutClick: g,
        "aria-label": E["aria-label"],
    });
}
function t2(e) {
    let { voiceChannel: t, locked: n } = e,
        i = v.useRef(null),
        { suppress: r, selfMute: s, mute: a } = (0, tF.A)(t),
        o = s || a || r,
        d = (0, tx.A)(s, a, r, !1),
        { Component: u, play: c, events: h } = (0, ts.L)(o ? "unmute" : "mute");
    v.useEffect(() => () => c(), [c, o]);
    let m = t0(n);
    function g(e) {
        return (t) => {
            (e(t), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.MICROPHONE, value: $.IP.SETTINGS_OPENED }));
        };
    }
    return (0, l.jsx)(tu.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e,
                n = m(t);
            return (0, l.jsx)(tA.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: ej.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, l.jsx)(t1, {
                ref: i,
                iconComponent: u,
                isActive: o,
                highlightedColor: "red",
                tooltip: d,
                onClick: () => {
                    ((0, tI.A)(a, r, ej.JJy.OVERLAY),
                        (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                            type: $.Z5.MICROPHONE,
                            value: o ? $.IP.ENABLED : $.IP.DISABLED,
                            userId: Z.default.getId(),
                        }));
                },
                onPopoutClick: g(n),
                onContextMenu: g(n),
                popoutOpen: s,
                onMouseEnter: () => {
                    h.onMouseEnter();
                },
                onMouseLeave: () => {
                    h.onMouseLeave();
                },
                isTrayButton: !0,
            });
        },
    });
}
function t3(e) {
    let { voiceChannel: t, locked: n } = e,
        i = v.useRef(null),
        { selfDeaf: r, deaf: s } = (0, tG.A)(t),
        a = r || s,
        {
            Component: o,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: c },
        } = (0, tl.I)(a ? "undeafen" : "deafen"),
        h = s ? tc.HeadphonesDenyIcon : o;
    function m() {
        ((0, tS.A)(s, ej.JJy.OVERLAY),
            (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                type: $.Z5.AUDIO,
                value: s ? $.IP.ENABLED : $.IP.DISABLED,
                userId: Z.default.getId(),
            }));
    }
    function g(e) {
        return (t) => {
            (e(t), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.AUDIO, value: $.IP.SETTINGS_OPENED }));
        };
    }
    v.useEffect(() => () => d(), [a, d]);
    let p = t0(n);
    return (0, l.jsx)(tu.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(tA.A, {
                onClose: p(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                maybeRenderSpatialAudioCheckbox: !0,
                renderSettingsButton: !0,
                appContext: ej.BRT.OVERLAY,
            });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: o } = t;
            return (0, l.jsx)(t1, {
                ref: i,
                iconComponent: h,
                tooltip: (0, tf.A)(r, s, !1),
                isActive: a,
                highlightedColor: "red",
                onClick: m,
                onContextMenu: g(n),
                onMouseEnter: u,
                onMouseLeave: c,
                onPopoutClick: g(n),
                popoutOpen: o,
                isTrayButton: !0,
            });
        },
    });
}
function t5(e) {
    let { voiceChannel: t, locked: n } = e,
        i = v.useRef(null),
        r = (0, P.bG)([eE.Ay], () => eE.Ay.isVideoEnabled()),
        s = (0, P.bG)([eE.Ay], () => Object.values(eE.Ay.getVideoDevices())[0]),
        a = (0, P.bG)([eE.Ay], () => eE.Ay.supports(tQ.O5.VIDEO)),
        o = s?.disabled ?? !0,
        d = !1 === o,
        u = (0, tU.A)(t);
    function c(e) {
        ea.default.setVideoEnabled(e);
    }
    function h(e) {
        return (t) => {
            (e(t), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.CAMERA, value: $.IP.SETTINGS_OPENED }));
        };
    }
    function m() {
        (o ? (d ? c(!0) : (0, tW.A)()) : c(!r),
            (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                type: $.Z5.CAMERA,
                value: r ? $.IP.DISABLED : $.IP.ENABLED,
                userId: Z.default.getId(),
            }));
    }
    let {
            Component: g,
            play: p,
            events: { onMouseEnter: f, onMouseLeave: x },
        } = (0, td.K)(r ? "disable" : "enable"),
        A = null != t ? (0, tY.Q)({ enabled: r, cameraUnavailable: o, hasPermission: u, channel: t }) : void 0;
    v.useEffect(() => () => p(), [r, p]);
    let E = t0(n),
        S = null == t || !u || !a;
    return (0, l.jsx)(tu.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(tE.A, { onClose: E(t), appContext: ej.BRT.OVERLAY });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, l.jsx)(t1, {
                ref: i,
                iconComponent: g,
                tooltip: A,
                onClick: m,
                isActive: r,
                highlightedColor: "green",
                onPopoutClick: a ? h(n) : void 0,
                popoutOpen: s,
                onContextMenu: a ? h(n) : void 0,
                onMouseEnter: f,
                onMouseLeave: x,
                disabled: S,
                isTrayButton: !0,
            });
        },
    });
}
function t6(e) {
    let t,
        { voiceChannel: n, locked: i } = e,
        r = v.useRef(null),
        s = (0, P.bG)([eS.default], () => eS.default.getCurrentUser()),
        a = (0, tU.A)(n),
        o = (0, P.cf)([eE.Ay], () => (0, tD.A)(eE.Ay)),
        d = (0, P.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        u = (0, P.bG)([tK.A], () => tK.A.getTargetPID()),
        c = (0, tq.y)({ pid: u, allowOneClickGoLive: !0 });
    function h() {
        (c(), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.GO_LIVE, value: $.IP.ENABLED, userId: Z.default.getId() }));
    }
    let m = null != d;
    if (m) t = eC.intl.string(eC.t.S5anIc);
    else if (null != n) {
        let e = (0, tJ.qv)();
        t = a
            ? null != e
                ? eC.intl.format(eC.t.AB5gTy, { game: e.name })
                : eC.intl.string(eC.t.FeUKeA)
            : eC.intl.string(eC.t.uQn9B8);
    }
    function g() {
        if (m)
            return (
                (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                    type: $.Z5.GO_LIVE,
                    value: $.IP.DISABLED,
                    userId: Z.default.getId(),
                }),
                (0, tk.A)(d, !1)
            );
        h();
    }
    function p(e) {
        return (t) => {
            (e(t), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.SCREEN_SHARE, value: $.IP.SETTINGS_OPENED }));
        };
    }
    let {
        Component: f,
        events: { onMouseEnter: x, onMouseLeave: A },
        play: E,
    } = (0, ta.c)(m ? "disable" : "enable");
    v.useEffect(() => () => E(), [m, E]);
    let S = t0(i);
    return (0, l.jsx)(tu.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(tH.A, {
                channel: n,
                currentUser: s,
                activeStreams: m ? [d] : [],
                handleGoLive: h,
                onClose: S(t),
                appContext: ej.BRT.OVERLAY,
                disableChangeWindows: !0,
            });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: i } = e,
                { isShown: s } = n;
            return (0, l.jsx)(t1, {
                ref: r,
                iconComponent: f,
                tooltip: t,
                "aria-label": eC.intl.string(eC.t.FeUKeA),
                isActive: m,
                highlightedColor: "green",
                onClick: g,
                popoutOpen: s,
                popoutDisabled: !m,
                onPopoutClick: p(i),
                onContextMenu: p(i),
                onMouseEnter: x,
                onMouseLeave: A,
                disabled: !o || !a,
                isTrayButton: !0,
            });
        },
    });
}
function t8(e) {
    let { voiceChannel: t, locked: i } = e,
        r = v.useRef(null),
        s = t?.getGuildId() ?? null,
        { mute: a, suppress: o } = (0, tF.A)(t),
        d = (0, P.bG)([eE.Ay], () => eE.Ay.isDeaf()),
        u = null == t || a || o || d,
        { analyticsLocations: c } = (0, tp.Ay)();
    function h(e) {
        ((0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.SOUNDBOARD, value: $.IP.SETTINGS_OPENED }),
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e(702894).then(n.bind(n, 507773));
                return (t) => (0, l.jsx)(e, { sourceAnalyticsLocations: c, guildId: s ?? void 0, ...t });
            }));
    }
    let {
            Component: m,
            events: { onClick: p, onMouseEnter: f, onMouseLeave: x },
        } = (0, to.E)(),
        A = t0(i),
        E = (0, P.bG)([tV.A, Z.default], () => tV.A.isUserPlayingSounds(Z.default.getId()), []) ? "green" : void 0;
    return (0, l.jsx)(tu.Y, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return u || null == t
                ? (0, l.jsx)(l.Fragment, {})
                : (0, l.jsx)(tL.A, { guildId: s, channel: t, onClose: A(n), analyticsSource: "action bar button" });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, l.jsx)(t1, {
                ref: r,
                iconComponent: m,
                tooltip: a
                    ? eC.intl.string(eC.t["Ox4/zU"])
                    : o
                      ? eC.intl.string(eC.t["+YBKYI"])
                      : d
                        ? eC.intl.string(eC.t.X1lQli)
                        : void 0,
                onClick: (e) => {
                    (p(),
                        (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                            type: $.Z5.SOUNDBOARD,
                            value: $.IP.PANEL_OPENED,
                            userId: Z.default.getId(),
                        }),
                        n(e));
                },
                highlightedColor: E,
                defaultColor: E,
                onContextMenu: h,
                onMouseEnter: f,
                onMouseLeave: x,
                isActive: i,
                popoutOpen: i,
                disabled: u,
                isTrayButton: !0,
            });
        },
    });
}
function t4(e) {
    let { voiceChannel: t, locked: n } = e,
        i = v.useRef(null),
        r = (0, P.bG)([B.Ay], () => B.Ay.getVoiceChannelId() === t?.id);
    function s() {
        ((0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.CALL_BUTTON, value: $.IP.DISABLED, userId: Z.default.getId() }),
            r && tg.default.disconnect());
    }
    function a(e, t) {
        (tg.default.selectVoiceChannel(e),
            (0, $.YX)(ej.uss.QUICK_ACTIONS, {
                type: $.Z5.CALL_BUTTON,
                value: $.IP.ENABLED,
                userId: Z.default.getId(),
                secondaryValue: t,
            }));
    }
    let [o, d] = v.useTransition();
    function u(e) {
        return (t) => {
            (d(() => {
                e(t);
            }),
                (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.CALL_BUTTON, value: $.IP.SETTINGS_OPENED }));
        };
    }
    let {
            Component: c,
            events: { onMouseEnter: h, onMouseLeave: m },
        } = (0, tr.O)(),
        g = t0(n),
        p = (0, tZ.qZ)(),
        f = r ? c : th.PhoneCallIcon;
    return (0, l.jsx)(tu.Y, {
        targetElementRef: i,
        clickTrap: !0,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(tZ.Ay, {
                allAvailableChannelRows: p,
                currentVoiceChannel: t,
                onClose: g(n),
                onSelect: a,
            });
        },
        align: "center",
        position: "top",
        animation: tu.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, l.jsx)(t1, {
                ref: i,
                iconComponent: f,
                tooltip: r ? eC.intl.string(eC.t["6vrfgt"]) : eC.intl.string(eC.t.S0W8Z5),
                onClick: r ? s : u(n),
                defaultColor: r ? "disconnect" : void 0,
                onMouseEnter: h,
                onMouseLeave: m,
                onContextMenu: u(n),
                isActive: a,
                onPopoutClick: r ? u(n) : void 0,
                popoutOpen: a,
                isTrayButton: !0,
            });
        },
    });
}
function t9(e) {
    let { voiceChannel: t } = e,
        n = (0, P.bG)([x.A], () => x.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)("div", { className: t$.rK }),
                    (0, l.jsxs)("div", {
                        className: t$._C,
                        children: [
                            (0, l.jsx)(tz.Ay, { guild: n, size: tz.Ay.Sizes.SMOL, className: t$.$f }),
                            (0, l.jsx)(w.E, {
                                tag: "div",
                                variant: "body-sm/medium",
                                color: "text-strong",
                                className: t$.J5,
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
function t7(e) {
    let { voiceChannel: t } = e,
        n = (0, tj.gU)(t),
        i = (0, tv.Ay)(t);
    return (0, l.jsxs)("div", {
        className: t$.Wh,
        children: [
            null != n &&
                (0, l.jsx)(w.E, {
                    tag: "div",
                    color: "text-muted",
                    variant: "body-xs/normal",
                    className: t$.p,
                    children: (0, l.jsx)(n, { size: "sm", color: "currentColor" }),
                }),
            null != i &&
                (0, l.jsx)(w.E, { variant: "body-sm/medium", color: "text-muted", className: t$.HA, children: i }),
        ],
    });
}
function ne(e) {
    let { voiceChannel: t } = e,
        n = t?.id,
        i = (0, P.cf)([A.A], () => ({ quality: A.A.getQuality(), state: A.A.getState(), lastPing: A.A.getLastPing() })),
        r = (0, P.bG)([tB.A], () => null != n && tB.A.hasVideo(n), [n]),
        s = (0, S.Mn)("VoiceConnectionStatus"),
        a = (0, P.bG)([ti.A], () => ti.A.hidePersonalInformation);
    return (
        null != n &&
        null != t &&
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tP.A, { ...i, channelId: n, hasVideo: r, connectionStatusTextVariant: "body-sm/medium" }),
                !(s && a) &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t9, { voiceChannel: t }),
                            (0, l.jsx)("div", { className: t$.rK }),
                            (0, l.jsx)(t7, { voiceChannel: t }),
                        ],
                    }),
            ],
        })
    );
}
function nt(e) {
    let t,
        n = v.useRef(null),
        i = (0, tC.E)(),
        { tooltip: r, clipsInitError: s, clipsSourceAttached: a } = (0, tM.A)();
    function o(e) {
        return (t) => {
            (e(t), (0, $.YX)(ej.uss.QUICK_ACTIONS, { type: $.Z5.CLIPS, value: $.IP.SETTINGS_OPENED }));
        };
    }
    function d() {
        i && (0, ty.l0)();
    }
    return (
        null != s && i && (t = "red"),
        (0, l.jsx)(tu.Y, {
            targetElementRef: n,
            clickTrap: !0,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(tO, { onClose: t });
            },
            align: "center",
            position: "top",
            animation: tu.Y.Animation.FADE,
            children: (e, u) => {
                let { onClick: c } = e,
                    { isShown: h } = u;
                return (0, l.jsx)(t1, {
                    ref: n,
                    iconComponent: tm.ClipsIcon,
                    tooltip: r,
                    "aria-label": r,
                    highlightedColor: t,
                    onClick: d,
                    popoutOpen: h,
                    onPopoutClick: o(c),
                    onContextMenu: o(c),
                    disabled: !i || null != s || !a,
                    isTrayButton: !0,
                });
            },
        })
    );
}
var nn = n(944138);
let ni = v.memo(function () {
    let e = (0, P.bG)([ti.A], () => ti.A.enabled),
        t = (0, S.Mn)("StreamerModeNotice");
    return e && t
        ? (0, l.jsxs)(te.$T, {
              color: te.Hv.STREAMER_MODE,
              className: nn.$X,
              children: [
                  (0, l.jsx)(w.E, {
                      tag: "span",
                      variant: "body-sm/medium",
                      color: "text-overlay-light",
                      children: eC.intl.string(eC.t.q9K7jp),
                  }),
                  (0, l.jsx)(te.Z_, {
                      className: nn.lI,
                      onClick: () => tt.A.setEnabled(!1),
                      noticeType: ej.kqX.STREAMER_MODE,
                      children: eC.intl.string(eC.t.R9GHya),
                  }),
              ],
          })
        : null;
});
function nr(e) {
    let { locked: t } = e,
        n = (0, P.bG)([B.Ay], () => B.Ay.getVoiceChannelId()),
        i = (0, tn.sw)(),
        r = (0, P.bG)([W.A], () => W.A.getChannel(n)),
        s = null != r;
    return (0, l.jsxs)("div", {
        className: C()({ [nn.KE]: !0, [nn.xt]: t }),
        children: [
            (0, l.jsx)(ni, {}),
            (0, l.jsxs)("div", {
                className: nn.Pm,
                children: [
                    (0, l.jsxs)("div", {
                        className: nn.qi,
                        children: [
                            (0, l.jsx)(t2, { voiceChannel: r, locked: t }),
                            (0, l.jsx)(t3, { voiceChannel: r, locked: t }),
                            (0, l.jsx)(t5, { voiceChannel: r, locked: t }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: nn.qi,
                        children: [
                            (0, l.jsx)(t6, { voiceChannel: r, locked: t }),
                            (0, l.jsx)(t8, { voiceChannel: r, locked: t }),
                            i && (0, l.jsx)(nt, { voiceChannel: r, locked: t }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: C()(nn.qi, s && nn.SV),
                        children: (0, l.jsx)(t4, { voiceChannel: r, locked: t }),
                    }),
                ],
            }),
            s && (0, l.jsx)("div", { className: nn.Pm, children: (0, l.jsx)(ne, { voiceChannel: r, locked: t }) }),
        ],
    });
}
var nl = n(95362),
    ns = n(994500),
    na = n(996439);
function no(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function nd(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
var nu = n(408278),
    nc = n(366605),
    nh = n(780338),
    nm = n(241541),
    ng = n(320448),
    np = n(646514),
    nf = n(446576),
    nx = n(683063),
    nA = n(789645),
    nE = n(387755),
    nS = n(945830),
    nI = n(461678),
    nv = n(753190),
    nj = n(95701),
    nC = n(543465),
    ny = n(914853),
    nT = n(249015),
    nb = n(145567),
    n_ = n(778712),
    nN = n(290863),
    nw = n(814690),
    nR = n(912156),
    nO = (((i = {})[(i.SIZE_24 = 24)] = "SIZE_24"), (i[(i.SIZE_40 = 40)] = "SIZE_40"), i);
function nM(e, t) {
    switch (t) {
        case "user":
        case "groupDm":
            return 24 === e ? n_._3.SIZE_24 : n_._3.SIZE_40;
        case "guild":
            return 24 === e ? tz.Ay.Sizes.SMALLER : tz.Ay.Sizes.MEDIUM;
        case "default":
            return 24 === e ? "sm" : "md";
        default:
            throw Error(`Unhandled icon type: ${String(t)}`);
    }
}
let nD = v.memo(function (e) {
    let {
            channel: t,
            user: n,
            guild: i,
            isSelected: r = !1,
            size: s = 24,
            isTyping: a = !1,
            mentionCount: o = 0,
            isMentionLowImportance: d = !1,
        } = e,
        u = t?.isPrivate() ?? !1,
        c = t?.isMultiUserDM() ?? !1,
        h = n?.id,
        g = (0, P.bG)([nN.A], () => (null != h ? nN.A.getStatus(h) : null), [h]),
        p = (0, P.bG)([nN.A], () => null != h && nN.A.isMobileOnline(h), [h]);
    if (u || c)
        return (0, l.jsx)(nw.h, {
            channel: t ?? null,
            user: n,
            "aria-hidden": !0,
            size: nM(s, "user"),
            status: g,
            isMobile: p,
            isTyping: a,
            mentionCount: o,
            isMentionLowImportance: d,
        });
    if (null == i)
        return (0, l.jsx)(m.ChatIcon, { size: nM(s, "default"), color: np.A.colors.INTERACTIVE_ICON_DEFAULT });
    {
        if (null == t) return (0, l.jsx)(tz.Ay, { guild: i, size: nM(s, "guild"), active: !0, showTooltip: !1 });
        let e = 40 === s ? nR.Q.MEDIUM_40 : nR.Q.TINY_24;
        return (0, l.jsx)(nR.A, { channel: t, guild: i, size: e, isTyping: a });
    }
});
var nk = n(769015);
function nz(e) {
    let { application: t, fallback: n } = e;
    return null == t
        ? n
        : (0, l.jsx)(nk.A, { game: t, size: nk.M.XSMALL, allowUnknownGameIcon: !0, unknownGameIconFallback: n });
}
var nP = n(350835),
    nV = n(429913),
    nL = n(34307),
    nG = n(361729),
    nU = n(276119);
function nF(e) {
    return null != e && (e.isDM() || e.isMultiUserDM());
}
function nY(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e,
        s = v.useRef(null);
    return t?.id == null
        ? null
        : (0, l.jsx)(tu.Y, {
              targetElementRef: s,
              shouldShow: n,
              animation: tu.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              ignoreModalClicks: !0,
              onRequestClose: r,
              renderPopout: (e) =>
                  (0, l.jsx)(nS.A, {
                      ...e,
                      channel: t,
                      onJump: () => {
                          (0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                              type: $.Z5.TEXT_CHAT,
                              value: $.IP.PANEL_OPENED,
                              secondaryValue: "jumped",
                          });
                      },
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, l.jsx)("div", {
                      ref: s,
                      children: (0, l.jsx)(en.m, {
                          text: eC.intl.string(eC.t["mp1N/2"]),
                          "aria-label": eC.intl.string(eC.t["mp1N/2"]),
                          children: (0, l.jsx)(nu.K, {
                              ...n,
                              icon: nc.PinIcon,
                              "aria-label": eC.intl.string(eC.t["mp1N/2"]),
                              size: "sm",
                              variant: "icon-only",
                              onClick: i,
                          }),
                      }),
                  });
              },
          });
}
function nH(e) {
    let { channel: t } = e,
        n = v.useRef(null),
        i = t?.id ?? null,
        r = t?.guild_id != null,
        [s, a] = (0, P.yK)(
            [nC.Ay],
            () =>
                r && null != i && null != t
                    ? [nC.Ay.isChannelMuted(t.getGuildId(), t.id), nC.Ay.resolvedMessageNotifications(t)]
                    : [!1, ej.orn.ALL_MESSAGES],
            [t, i, r],
        ),
        [o, d] = v.useState(!1),
        c = v.useCallback(() => {
            (d((e) => !e),
                (0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                    type: $.Z5.TEXT_CHAT,
                    value: $.IP.SETTINGS_OPENED,
                    secondaryValue: "notification_settings",
                }));
        }, []),
        h = eC.intl.string(eC.t.h850Ss),
        m = s || a !== ej.orn.ALL_MESSAGES ? nh.BellSlashIcon : u.BellIcon;
    return r && null != t
        ? (0, l.jsx)(tu.Y, {
              targetElementRef: n,
              shouldShow: o,
              animation: tu.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: () => d(!1),
              renderPopout: (e) =>
                  (0, l.jsx)(nI.A, {
                      ...e,
                      channel: t,
                      navId: "overlay-channel-context",
                      label: eC.intl.string(eC.t.Xm41aV),
                  }),
              clickTrap: !0,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)("div", {
                      ref: n,
                      children: (0, l.jsx)(en.m, {
                          text: h,
                          "aria-label": h,
                          children: (0, l.jsx)(nu.K, {
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
function nZ(e) {
    let { channel: t, onStartPrivateCall: n, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: s } = e;
    return nF(t)
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(en.m, {
                      text: eC.intl.string(eC.t.JJogjm),
                      "aria-label": eC.intl.string(eC.t.JJogjm),
                      children: (0, l.jsx)(nu.K, {
                          icon: th.PhoneCallIcon,
                          "aria-label": eC.intl.string(eC.t.JJogjm),
                          size: "sm",
                          variant: "icon-only",
                          onClick: () => n(!1),
                      }),
                  }),
                  (0, l.jsx)(nY, { channel: t, pinsOpen: i, onTogglePinsPopout: r, onRequestClosePinsPopout: s }),
                  t.isMultiUserDM()
                      ? (0, l.jsx)(en.m, {
                            text: eC.intl.string(eC.t["LR+Ptf"]),
                            "aria-label": eC.intl.string(eC.t["LR+Ptf"]),
                            children: (0, l.jsx)(nu.K, {
                                icon: nm.GroupPlusIcon,
                                "aria-label": eC.intl.string(eC.t["LR+Ptf"]),
                                size: "sm",
                                variant: "icon-only",
                                onClick: () => {
                                    ((0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                                        type: $.Z5.INVITE,
                                        value: $.IP.PANEL_OPENED,
                                        secondaryValue: "add_members",
                                    }),
                                        (0, nv.Jz)({
                                            channel: t,
                                            onComplete: (e) => {
                                                (0, nb.D$)({
                                                    target: {
                                                        kind: nb.bB.CHANNEL,
                                                        channelId: e,
                                                        guildId: null,
                                                        messageId: null,
                                                    },
                                                    source: nL.B.MANUAL,
                                                    widgetType: ej.uss.TEXT_CHAT_V3,
                                                });
                                            },
                                        }));
                                },
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
function nW(e) {
    let { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r } = e;
    return null == t || t.isPrivate()
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nH, { channel: t }),
                  (0, l.jsx)(nY, { channel: t, pinsOpen: n, onTogglePinsPopout: i, onRequestClosePinsPopout: r }),
              ],
          });
}
function nX(e) {
    let t,
        { channel: n, user: i, guild: r, title: s, dragStart: a, dragging: o } = e,
        { hasFriendList: d } = (0, S.M8)("TextChatHeader"),
        [u, c] = v.useState(!1),
        h = (0, P.bG)([A.A], () => A.A.getChannelId(), []),
        m = n?.isDM() ? (i?.id ?? null) : null,
        g =
            ((t = (0, P.bG)(
                [nN.A],
                () => {
                    if (null != m)
                        return (
                            (function (e) {
                                for (let t of e)
                                    if (t.type === nP.$.PLAYING && null != t.application_id) return t.application_id;
                                return null;
                            })(nN.A.getActivities(m)) ?? void 0
                        );
                },
                [m],
            )),
            (0, nV.h)(t) ?? void 0),
        p = h === n?.id,
        f = eC.intl.string(nG.default.tYPfF2),
        x = (0, P.bG)([W.A], () => (n?.isThread() && null != n.parent_id ? W.A.getChannel(n.parent_id) : null), [n]),
        E = (0, P.bG)([eS.default, ns.A], () => (null != x ? (0, tv.m1)(x, eS.default, ns.A) : null), [x]),
        I = v.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = i),
                null == e
                    ? null
                    : e.isDM() && null != t
                      ? ns.A.isFriend(t.id)
                          ? { tab: ny.x.FRIENDS, targetId: t.id }
                          : null
                      : (0, nj.ke)(e.type)
                        ? { tab: ny.x.MESSAGES, targetId: e.id }
                        : (0, nj.ay)(e.type)
                          ? { tab: ny.x.VOICE, targetId: e.id }
                          : null
            );
        }, [n, i]),
        j = v.useCallback(
            (e) => {
                nF(n) &&
                    ((0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                        type: $.Z5.CALL_BUTTON,
                        value: $.IP.ENABLED,
                        secondaryValue: e ? "video" : "voice",
                    }),
                    nE.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null));
            },
            [n],
        ),
        y = v.useCallback(() => {
            n?.id != null &&
                c((e) => {
                    let t = !e;
                    return (
                        t &&
                            (0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                                type: $.Z5.TEXT_CHAT,
                                value: $.IP.PANEL_OPENED,
                                secondaryValue: "pins",
                            }),
                        t
                    );
                });
        }, [n?.id]);
    return (0, l.jsxs)("div", {
        className: C()(nU.XV, o && nU.cB),
        onMouseDown: (e) => {
            0 === e.button && a(eD.P.MOVE, e.clientX, e.clientY);
        },
        children: [
            (0, l.jsxs)("div", {
                className: nU.LD,
                children: [
                    (0, l.jsx)("div", {
                        className: nU.gr,
                        children: (0, l.jsx)(nz, {
                            application: g,
                            fallback: (0, l.jsx)(nD, { channel: null, user: i, guild: r, size: nO.SIZE_24 }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: nU.G1,
                        children: [
                            (function () {
                                if (null != m) return null;
                                let e = (0, tj.gU)(n, r);
                                return null != e ? (0, l.jsx)(e, { className: nU.gr, size: "xs" }) : null;
                            })(),
                            null != x && null != E
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(N.D, {
                                              className: nU.oH,
                                              onMouseDown: (e) => e.stopPropagation(),
                                              onClick: (e) => {
                                                  (e.stopPropagation(),
                                                      (0, nb.D$)({
                                                          target: {
                                                              kind: nb.bB.CHANNEL,
                                                              channelId: x.id,
                                                              guildId: x.getGuildId?.() ?? x.guild_id ?? null,
                                                              messageId: null,
                                                          },
                                                          source: nL.B.MANUAL,
                                                          widgetType: ej.uss.TEXT_CHAT_V3,
                                                      }));
                                              },
                                              children: (0, l.jsx)(w.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-muted",
                                                  children: E,
                                              }),
                                          }),
                                          (0, l.jsx)(ng.ChevronSmallRightIcon, {
                                              className: nU.ln,
                                              size: "xs",
                                              color: np.A.colors.TEXT_MUTED,
                                          }),
                                      ],
                                  })
                                : null,
                            (0, l.jsxs)(w.E, {
                                className: nU.DD,
                                variant: "body-sm/medium",
                                color: "text-strong",
                                children: [
                                    s,
                                    g?.name != null && "" !== g.name
                                        ? (0, l.jsx)(w.E, {
                                              tag: "span",
                                              className: nU.X7,
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              children: eC.intl.formatToPlainString(nG.default.x1k3cO, {
                                                  gameName: g.name,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: nU.IE,
                onMouseDown: (e) => {
                    e.stopPropagation();
                },
                children: [
                    (0, l.jsx)(nZ, {
                        channel: n,
                        onStartPrivateCall: j,
                        pinsOpen: u,
                        onTogglePinsPopout: y,
                        onRequestClosePinsPopout: () => c(!1),
                    }),
                    (0, l.jsx)(nW, {
                        channel: n,
                        pinsOpen: u,
                        onTogglePinsPopout: y,
                        onRequestClosePinsPopout: () => c(!1),
                    }),
                    d &&
                        null != I &&
                        (0, l.jsx)(nT.j, {
                            tab: I.tab,
                            targetId: I.targetId,
                            widgetType: ej.uss.TEXT_CHAT_V3,
                            shouldStopPropagation: !1,
                        }),
                    n?.id != null &&
                        (p
                            ? (0, l.jsx)(en.m, {
                                  text: f,
                                  "aria-label": f,
                                  children: (0, l.jsx)(nu.K, {
                                      icon: nf.MinimizeIcon,
                                      "aria-label": f,
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: () => {
                                          ((0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                                              type: $.Z5.TEXT_CHAT,
                                              value: $.IP.CLOSED_TEXT_CHAT,
                                              secondaryValue: "minimize_voice",
                                          }),
                                              (0, nb.S$)({ minimized: !0 }));
                                      },
                                  }),
                              })
                            : (0, l.jsx)(nx.u, {
                                  title: eC.intl.string(nG.default.ERApc4),
                                  body: eC.intl.string(nG.default.PBVXVW),
                                  children: (0, l.jsx)(nu.K, {
                                      icon: nA.XSmallIcon,
                                      "aria-label": eC.intl.string(nG.default.ERApc4),
                                      size: "sm",
                                      variant: "icon-only",
                                      onClick: (e) => {
                                          e.shiftKey
                                              ? ((0, $.YX)(ej.uss.TEXT_CHAT_V3, {
                                                    type: $.Z5.TEXT_CHAT,
                                                    value: $.IP.CLOSED_TEXT_CHAT,
                                                    secondaryValue: "close_all",
                                                }),
                                                (0, nb.$p)())
                                              : (0, nb.lu)({
                                                    channelId: n.id,
                                                    widgetType: ej.uss.TEXT_CHAT_V3,
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
var nB = n(602853),
    nq = n(941971),
    nK = n(218461),
    nJ = n(485296),
    nQ = n(741961),
    n$ = n(73153),
    n0 = n(308528);
let n1 = new Set();
async function n2(e) {
    if (!n1.has(e)) {
        n1.add(e);
        try {
            let t = await n0.A.fetchChannel(e),
                n = (0, nj.UE)(t);
            n$.h.dispatch({ type: "CHANNEL_CREATE", channel: n });
            let i = n.getGuildId?.() ?? n.guild_id ?? null;
            if (null != i) return void n0.A.preload(i, n.id);
        } catch {}
    }
}
var n3 = n(835078),
    n5 = (((r = {}).DEFAULT = "DEFAULT"), (r.CHANNEL_TYPE = "CHANNEL_TYPE"), r);
let n6 = v.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: i, iconVariant: r = "DEFAULT" } = e,
        s = null != i && t === i,
        a = (0, P.bG)([E.A], () => E.A.getSelectedChannelId() === t, [t]),
        o = (0, P.bG)([E.A], () => E.A.getVoiceChatMinimized()),
        d = (0, nB.r)(np.A.colors.ICON_STATUS_ONLINE),
        u = (0, P.bG)([nJ.A], () => !!s && !!(nJ.A.isAnyoneElseSpeaking() || nJ.A.isCurrentUserSpeaking()), [s]),
        [c, h] = v.useState(!1),
        { mentionCount: p, isMentionLowImportance: f } = (0, P.cf)(
            [nK.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: nK.Ay.getMentionCount(t),
                          isMentionLowImportance: nK.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: A,
            user: S,
            guild: I,
            channel: j,
        } = (0, P.cf)(
            [W.A, x.A, eS.default, ns.A],
            () => {
                let e = W.A.getChannel(t) ?? null;
                if (null == e) return { label: eC.intl.string(eC.t.zLZPmk), user: null, guild: null, channel: null };
                let n = (0, tv.m1)(e, eS.default, ns.A);
                return { label: n, user: no(e, eS.default), guild: nd(e, x.A), channel: e };
            },
            [t],
        );
    v.useEffect(() => {
        null == j && n2(t);
    }, [j, t]);
    let y = (0, P.bG)(
            [nQ.A, eS.default],
            () => {
                if (null == j) return !1;
                let e = eS.default.getCurrentUser()?.id ?? null,
                    t = nQ.A.getTypingUsers(j.id);
                for (let n in t) if (n !== e) return !0;
                return !1;
            },
            [j],
        ),
        T = (0, P.bG)(
            [nK.Ay],
            () => {
                let e = j?.id;
                return null != e && nK.Ay.hasUnread(e);
            },
            [j],
        ),
        b = (0, l.jsx)("div", {
            className: n3.St,
            children: (function () {
                let e = j?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === r && !e) {
                    let e = (0, tj.gU)(j, I);
                    e ??= m.ChatIcon;
                    let t = s && !o && u,
                        n = { boxShadow: "none" },
                        i = d.rgba({ opacity: 0.85 }),
                        r = d.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`),
                        (0, l.jsx)("div", {
                            className: C()(n3.s, a && n3.lJ),
                            style: n,
                            children: (0, l.jsx)(e, {
                                className: n3.Yc,
                                size: "sm",
                                color: a ? np.A.colors.WHITE : np.A.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, l.jsx)(nD, {
                    channel: j,
                    user: S,
                    guild: I,
                    isSelected: a,
                    size: nO.SIZE_40,
                    isTyping: y,
                    mentionCount: p,
                    isMentionLowImportance: f,
                });
            })(),
        }),
        _ = (function (e) {
            let { channel: t, guild: i, user: r } = e;
            return v.useCallback(
                (e) => {
                    if (null != t) {
                        if (t.isMultiUserDM())
                            return void (0, g.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(926132),
                                    n.e(146652),
                                    n.e(491001),
                                    n.e(581609),
                                    n.e(153416),
                                    n.e(777927),
                                ]).then(n.bind(n, 320442));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, selected: !1, widgetType: ej.uss.TEXT_CHAT_V3 });
                            });
                        if (t.isDM() && null != r)
                            return void (0, g.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(463317),
                                    n.e(926132),
                                    n.e(893190),
                                    n.e(146652),
                                    n.e(189673),
                                    n.e(576432),
                                    n.e(797558),
                                    n.e(491001),
                                    n.e(451162),
                                    n.e(229787),
                                    n.e(576665),
                                    n.e(245996),
                                    n.e(700792),
                                    n.e(552172),
                                    n.e(529422),
                                    n.e(823427),
                                    n.e(242204),
                                    n.e(307059),
                                    n.e(309291),
                                    n.e(298199),
                                    n.e(581609),
                                    n.e(861649),
                                    n.e(296443),
                                    n.e(123490),
                                    n.e(895049),
                                ]).then(n.bind(n, 92016));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        ...n,
                                        user: r,
                                        channel: t,
                                        showModalItems: !1,
                                        widgetType: ej.uss.TEXT_CHAT_V3,
                                    });
                            });
                        if (t.isModeratorReportChannel())
                            return void (0, g.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(926132),
                                    n.e(146652),
                                    n.e(491001),
                                    n.e(343266),
                                    n.e(581609),
                                    n.e(256985),
                                ]).then(n.bind(n, 95616));
                                return (n) => (0, l.jsx)(e, { ...n, channel: t, widgetType: ej.uss.TEXT_CHAT_V3 });
                            });
                        if ((0, nj.ay)(t.type)) {
                            if (null == i) return;
                            (0, g.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(249727),
                                    n.e(926132),
                                    n.e(146652),
                                    n.e(491001),
                                    n.e(343266),
                                    n.e(309004),
                                    n.e(544058),
                                    n.e(581609),
                                    n.e(694138),
                                    n.e(958262),
                                    n.e(318663),
                                    n.e(221905),
                                ]).then(n.bind(n, 769192));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: ej.uss.TEXT_CHAT_V3 });
                            });
                            return;
                        }
                        null != i &&
                            (0, g.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(926132),
                                    n.e(893190),
                                    n.e(146652),
                                    n.e(491001),
                                    n.e(343266),
                                    n.e(309004),
                                    n.e(544058),
                                    n.e(591377),
                                    n.e(256372),
                                    n.e(581609),
                                    n.e(354036),
                                ]).then(n.bind(n, 813407));
                                return (n) =>
                                    (0, l.jsx)(e, { ...n, channel: t, guild: i, widgetType: ej.uss.TEXT_CHAT_V3 });
                            });
                    }
                },
                [t, i, r],
            );
        })({ channel: j, guild: I, user: S }),
        w = j?.isPrivate() ?? !1,
        R = I?.name ?? "",
        O = w ? void 0 : A,
        M = w ? A : "" !== R ? R : A,
        D = (() => {
            if (null == j || w) return null;
            let e = (0, tj.gU)(j, I);
            return ((e ??= m.ChatIcon), (0, l.jsx)(e, { size: "sm", color: np.A.colors.INTERACTIVE_ICON_DEFAULT }));
        })();
    return null == j
        ? (0, l.jsx)("div", { className: n3.R })
        : (0, l.jsx)(nx.u, {
              title: O,
              body: M,
              asset: D,
              assetSize: 20,
              "aria-label": A,
              children: (0, l.jsxs)(N.D, {
                  className: n3.pc,
                  focusProps: { offset: 4 },
                  onClick: () => {
                      (s && (0, nb.S$)({ minimized: !1 }),
                          (0, nb.D$)({
                              target: { kind: nb.bB.CHANNEL, channelId: t, guildId: I?.id ?? null, messageId: null },
                              source: nL.B.MANUAL,
                              widgetType: ej.uss.TEXT_CHAT_V3,
                          }));
                  },
                  onContextMenu: _,
                  onMouseEnter: () => h(!0),
                  onMouseLeave: () => h(!1),
                  children: [
                      b,
                      (0, l.jsx)("div", {
                          className: n3.vT,
                          children: (0, l.jsx)(nq.A, { selected: a, hovered: c, unread: T }),
                      }),
                  ],
              }),
          });
});
var n8 = n(138399),
    n4 = n(699344),
    n9 = n(355622),
    n7 = n(596344),
    ie = n(576705),
    it = n(188567),
    ii = n(973196),
    ir = n(727961);
function il(e) {
    let t,
        n,
        i,
        r,
        s,
        a,
        { selectedChannelId: o } = e,
        d = (0, P.bG)([W.A], () => W.A.getChannel(o), [o]),
        u = (0, eU.A)(),
        c = (0, P.bG)(
            [x.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    let n = e.getGuildId();
                    return null == n ? null : (t.getGuild(n) ?? null);
                })(d, x.A),
            [d],
        ),
        h = (0, ii.A)();
    return ((t = d?.id ?? null),
    (n = v.useRef(new Set())),
    (i = (0, P.bG)([n7.A], () => (null != t ? n7.A.getMessages(t) : null), [t])),
    (r = (0, P.bG)([ie.A], () => ie.A.can(ej.xBc.READ_MESSAGE_HISTORY, d), [d])),
    (s = i?.first() ?? null),
    (a = null != d && null == s && null != i && !i.loadingMore && !i.ready && !i.hasFetched && r),
    v.useEffect(() => {
        null == t || (!n.current.has(t) && a && (n.current.add(t), n8.A.fetchMessages({ channelId: t, limit: 50 })));
    }, [t, a]),
    v.useEffect(() => {
        if (null == o || h) return;
        let e = u.requestAnimationFrame(() => {
            it._.dispatchToLastSubscribed(ej.jej.TEXTAREA_FOCUS, { channelId: o });
        });
        return () => u.cancelAnimationFrame(e);
    }, [o, u, h]),
    null != d)
        ? (0, l.jsx)("div", {
              className: ir.Q,
              children: (0, l.jsx)("div", {
                  className: ir.T,
                  children: (0, l.jsx)(n4.A, { channel: d, guild: c, chatInputType: n9.oU.OVERLAY }, d.id),
              }),
          })
        : null;
}
var is = n(722185);
function ia(e) {
    let { dragStart: t, dragging: n } = e,
        [i, r] = (0, P.bG)([E.A], () => E.A.getSessionEntries(), [], na.D),
        s = (0, P.bG)([E.A], () => E.A.getSelectedChannelId()),
        a = (0, P.bG)([E.A], () => E.A.getVoiceChatMinimized()),
        o = (0, P.bG)([W.A], () => (null != s ? (W.A.getChannel(s) ?? null) : null), [s]);
    v.useEffect(() => {
        null == s || (null == o && n2(s));
    }, [o, s]);
    let d = (0, P.bG)([x.A], () => nd(o, x.A), [o]),
        u = (0, P.bG)([A.A], () => A.A.getChannelId(), []),
        c = v.useMemo(() => (null == u || 0 === r ? i : i.filter((e) => e.channelId !== u)), [i, r, u]),
        h = (0, $.Dk)(() => {
            let e = new Set();
            for (let t of (null != u && e.add(u), c)) e.add(t.channelId);
            return e;
        }, [c, u, r]),
        { shownUserIds: g, contentInventoryIds: p } = v.useMemo(
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = W.A.getChannel(i) ?? null;
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
                })(h),
            [h],
        ),
        f = (0, $.Dk)(() => g, [g]),
        S = (0, $.Dk)(() => p, [p]);
    v.useEffect(() => {
        (0 !== f.size || 0 !== S.size) &&
            (0, $.Y)(ej.uss.TEXT_CHAT_V3, {
                locked: Q.default.isInstanceLocked(),
                shownUserIds: Array.from(f),
                liveUserIds: [],
                contentInventoryIds: Array.from(S),
            });
    }, [f, S]);
    let I = (0, P.bG)([eS.default], () => no(o, eS.default)),
        j = (0, P.bG)(
            [eS.default, ns.A],
            () => (null == o ? eC.intl.string(nG.default.uhJexs) : (0, tv.m1)(o, eS.default, ns.A)),
            [o],
        ),
        C = (0, P.bG)(
            [W.A],
            () => {
                if (null != u && null != W.A.getChannel(u)) return !0;
                if (0 === r) return !1;
                for (let e of i) if (null != W.A.getChannel(e.channelId)) return !0;
                return !1;
            },
            [i, u, r],
        ),
        y = null != s && !(a && s === u);
    return C
        ? (0, l.jsxs)("div", {
              className: is.kL,
              children: [
                  (0, l.jsx)("nav", {
                      className: is.pz,
                      "aria-label": eC.intl.string(nG.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(eD.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, l.jsxs)(nl.d_, {
                          children: [
                              null != u
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(
                                                n6,
                                                {
                                                    channelId: u,
                                                    selectedVoiceChannelId: u,
                                                    iconVariant: n5.CHANNEL_TYPE,
                                                },
                                                `tiv-${u}`,
                                            ),
                                            c.length > 0 ? (0, l.jsx)("hr", { className: is.mF }) : null,
                                        ],
                                    })
                                  : null,
                              c.map((e) =>
                                  (0, l.jsx)(n6, { channelId: e.channelId, selectedVoiceChannelId: u }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  y
                      ? (0, l.jsxs)("div", {
                            className: is.oM,
                            children: [
                                (0, l.jsx)(nX, { channel: o, user: I, guild: d, title: j, dragStart: t, dragging: n }),
                                (0, l.jsx)(il, { selectedChannelId: s }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, l.jsx)(K.g, { emptyText: eC.intl.string(nG.default["xpv/t5"]), icon: m.ChatIcon });
}
let io = v.memo(function (e) {
    let { locked: t, dragStart: n, dragging: i } = e;
    return t ? null : (0, l.jsx)(ia, { dragStart: n, dragging: i });
});
var id = n(175203),
    iu = n(163432),
    ic = n(799808),
    ih = n(88525);
let im = v.memo(function (e) {
        let { participant: t, channel: n, context: i } = e,
            r = t.user?.id;
        return (0, P.bG)([eE.Ay], () => null != t.user && null != i && null != n && eE.Ay.isLocalVideoDisabled(r, i), [
            r,
            t.user,
            i,
            n,
        ])
            ? null
            : (0, l.jsx)(id.Ay, { ...e });
    }),
    ig = v.memo(function (e) {
        let {
                context: t = tQ.x.DEFAULT,
                participants: i,
                locked: r,
                channel: s,
                width: a,
                height: o,
                shouldDisplay: d,
            } = e,
            u = v.useCallback(
                (e, i) => {
                    let r = e.user;
                    ((0, $.YX)(ej.uss.VIDEO, { type: $.Z5.CAMERA, value: $.IP.SETTINGS_OPENED, userId: r?.id }),
                        (0, g.L3)(i, async () => {
                            let { default: e } = await Promise.all([
                                n.e(463317),
                                n.e(926132),
                                n.e(893190),
                                n.e(146652),
                                n.e(189673),
                                n.e(576432),
                                n.e(797558),
                                n.e(451162),
                                n.e(242204),
                                n.e(495861),
                                n.e(470314),
                                n.e(404524),
                                n.e(654148),
                                n.e(580589),
                            ]).then(n.bind(n, 588860));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: r,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, $.YX)(ej.uss.VIDEO, {
                                            type: $.Z5.GO_LIVE,
                                            value: $.IP.ENABLED,
                                            userId: r?.id,
                                        });
                                    },
                                });
                        }));
                },
                [t],
            ),
            c = (0, $.Dk)(() => new Set(i.map((e) => e.user?.id)), [i]);
        v.useEffect(() => {
            d &&
                (0, $.Y)(ej.uss.VIDEO, {
                    locked: Q.default.isInstanceLocked(),
                    shownUserIds: Array.from(c),
                    liveUserIds: Array.from(c),
                    contentInventoryIds: [],
                });
        }, [c, d]);
        let h = v.useMemo(() => ({ width: a, height: o }), [a, o]);
        return (0, l.jsx)(l.Fragment, {
            children: i.map((e) =>
                (0, l.jsx)(
                    im,
                    {
                        participant: e,
                        width: a,
                        className: ih.Vs,
                        containerStyle: h,
                        fit: ef.$.COVER,
                        channel: s,
                        popoutType: ec.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: r ? void 0 : u,
                        forceIdle: r,
                        paused: !d,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    ip = v.memo(function (e) {
        let {
                context: t = tQ.x.DEFAULT,
                participants: n,
                participantsVersion: i,
                locked: r,
                widget: a,
                channel: o,
                width: d,
                height: u,
                showEmpty: c = !0,
                containerRef: h,
            } = e,
            m = "boolean" != typeof a.meta.horizontal || a.meta.horizontal,
            g = n.length > 0 && null != t && null != o && (!r || a.pinned);
        v.useEffect(() => {
            (0, ic.j_)({ locked: r, pinned: a.pinned, widget: a.type, isPreviewingInGame: !1 }, g);
        }, [r, a, g]);
        let p = v.useMemo(() => ({ opacity: a.opacity }), [a.opacity]),
            f = v.useMemo(() => C()({ [ih.wb]: !0, [ih.Vd]: !m, [ih.R]: !g && r }), [m, g, r]);
        return 0 !== n.length || r
            ? null == o
                ? null
                : (0, l.jsx)("div", {
                      ref: h,
                      className: f,
                      style: p,
                      children: (0, l.jsx)(ig, {
                          context: t,
                          participants: n,
                          locked: r,
                          channel: o,
                          width: d,
                          height: u,
                          shouldDisplay: g,
                          participantsVersion: i,
                      }),
                  })
            : c
              ? (0, l.jsx)("div", {
                    ref: h,
                    children: (0, l.jsx)(K.g, {
                        emptyText: eC.intl.string(eC.t.aTiM42),
                        icon: s.VideoIcon,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    ix = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, eG.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r;
        return (function (e, t) {
            let { maxWidth: n, maxHeight: i } = t;
            return { width: Math.max(0, Math.min(e.width, n)), height: Math.max(0, Math.min(e.height, i)) };
        })(
            s
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + a) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + a) },
            { maxWidth: 0.75 * l.maxX, maxHeight: 0.75 * l.maxY },
        );
    };
function iA(e) {
    let t = (0, P.bG)([B.Ay, W.A], () => W.A.getChannel(B.Ay.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        i = t?.id,
        [r, s] = (0, P.bG)(
            [U.A],
            () => (null == i ? [[], 0] : [U.A.getVideoParticipants(i), U.A.getParticipantsVersion(i)]),
            [i],
            na.D,
        ),
        a = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: o = e.width - n, height: d = e.height - n, ref: u } = (0, eR.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: c, visibleParticipants: h } = (0, iu.i)(a ? o : d, r, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: s,
        }),
        m = (0, P.bG)([Y.A], () => Y.A.getWindowState(e0.f)),
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
                r = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                l = v.useRef(r);
            (v.useLayoutEffect(() => {
                l.current = r;
            }),
                v.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: s,
                        widgetLayoutSpecs: a,
                    } = l.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = ix({
                        ...a,
                        widget: s,
                        operation: eD.P.RESIZE_NORTH,
                        computedSize: { width: r, height: i },
                        originSize: { width: r, height: i },
                    });
                    (0, eo.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]));
        })({ horizontal: a, widget: e.widget, widgetLayoutSpecs: g }),
        (0, l.jsx)(ip, {
            ...e,
            channel: t,
            participants: h,
            participantsVersion: s,
            width: a ? c : (o ?? e.width),
            height: a ? (d ?? e.height) : c,
            containerRef: u,
        })
    );
}
var iE = n(502812),
    iS = n(968898),
    iI = n(663417),
    iv = n(329921),
    ij = n(828936),
    iC = n(625180),
    iy = n(91242),
    iT = n(481484),
    ib = n(165610),
    i_ = n(191850),
    iN = n(408454),
    iw = n(697252);
function iR(e) {
    let { applicationId: t } = e,
        n = (0, iT.A)(),
        i = (0, ib.VA)(t, ib.ZN),
        { launched: r, refreshing: s } = (0, P.cf)(
            [iy.A],
            () => {
                let e = iy.A.getFrame(i),
                    t = (0, ib.x1)(e) && (0, ib.zB)(e) === e0.f;
                return { launched: t, refreshing: t && e.data.proxyTicketRefreshing };
            },
            [i],
        ),
        a = (0, ij.l)(i);
    if (n || !r) return null;
    let o = eC.intl.string(a ? i_.default.Hvyhm9 : i_.default.GDbtb6);
    return (0, l.jsx)(en.m, {
        text: o,
        "aria-label": o,
        asContainer: !0,
        children: (0, l.jsxs)(N.D, {
            "aria-label": o,
            "aria-disabled": s,
            className: C()(iN.x6, iw.x),
            onClick: () => {
                s || iC.A.refreshProxyTicket(i);
            },
            children: [
                (0, l.jsx)(iI.RefreshIcon, { size: "xxs", color: np.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                a && (0, l.jsx)(iv.N, { className: iw.f, size: "sm", variant: "notification" }),
            ],
        }),
    });
}
var iO = n(39623),
    iM = n(952270),
    iD = n(955639),
    ik = n(679737),
    iz = n(932183),
    iP = n(37595),
    iV = n(442331),
    iL = n(644727);
let iG = [...iP.g, p.A, iD.A, iV.A];
function iU(e, t) {
    let n = (0, iP.V)(),
        i = (0, iz.s)(e),
        r = iD.A.getOverride(e, n);
    return {
        game: n,
        shownInGame: (0, ik.b8)({ pinned: t, targeting: i, game: n, override: r }),
        shownByDefault: (0, ik.b8)({ pinned: t, targeting: i, game: n, override: null }),
        hasOverride: null != r,
    };
}
function iF(e, t) {
    return e.hasGame === t.hasGame && e.shownInGame === t.shownInGame && e.hasOverride === t.hasOverride;
}
function iY(e) {
    let { applicationId: t, pinned: n } = e,
        i = (0, iT.A)(),
        r = (0, P.bG)(
            [iL.Ay, tK.A, iD.A, p.A, iV.A],
            () => {
                let e = (0, iP.V)(iL.Ay, tK.A),
                    i = (0, iz.s)(t, p.A, iV.A),
                    r = iD.A.getOverride(t, e);
                return {
                    hasGame: null != e,
                    shownInGame: (0, ik.b8)({ pinned: n, targeting: i, game: e, override: r }),
                    hasOverride: null != r,
                };
            },
            [t, n],
            iF,
        );
    if (i || !r.hasGame) return null;
    let s = eC.intl.string(
            r.hasOverride ? i_.default.IigTLE : r.shownInGame ? i_.default["+E+hQR"] : i_.default.CEYbWc,
        ),
        a = r.shownInGame ? iO.EyeIcon : iM.EyeSlashIcon;
    return (0, l.jsx)(en.m, {
        text: s,
        "aria-label": s,
        asContainer: !0,
        children: (0, l.jsx)(N.D, {
            "aria-label": s,
            className: C()(iN.x6, r.hasOverride && iN.vu),
            onClick: () =>
                (function (e, t) {
                    let { game: n, shownByDefault: i, hasOverride: r } = iU(e, t);
                    null != n &&
                        n$.h.dispatch({
                            type: "CONJURE_OVERLAY_SESSION_OVERRIDE_SET",
                            applicationId: e,
                            sessionKey: (0, iD.m)(n),
                            pid: n.pid,
                            override: r ? null : i ? "hide" : "show",
                        });
                })(t, n),
            children: (0, l.jsx)(a, {
                size: "xxs",
                color: r.hasOverride ? np.A.colors.BACKGROUND_BRAND : np.A.colors.INTERACTIVE_TEXT_ACTIVE,
            }),
        }),
    });
}
var iH = n(378859),
    iZ = n(269094),
    iW = n(111518),
    iX = n(885574),
    iB = n(738188),
    iq = n(192308),
    iK = n(998979),
    iJ = n(276983),
    iQ = n(908276);
let i$ = {};
class i0 extends P.Ay.Store {
    static displayName = "ConjureOverlayFrameStateStore";
    getState(e) {
        return i$[e] ?? "loading";
    }
}
let i1 = new i0(n$.h, {
    CONJURE_OVERLAY_FRAME_STATE_SET: function (e) {
        let { applicationId: t, state: n } = e;
        if ((i$[t] ?? null) === n) return !1;
        if (null == n) {
            let { [t]: e, ...n } = i$;
            i$ = n;
            return;
        }
        i$ = { ...i$, [t]: n };
    },
});
var i2 = n(743082),
    i3 = n(395771),
    i5 = n(207228),
    i6 = n(760751),
    i8 = n(365010);
let i4 = {
        loading: [i_.default.Byq40w, i_.default["1G9dze"]],
        widget_error: [i_.default["r/q2ZV"], i_.default["+zyAZG"]],
        settings_failed: [i_.default["r/q2ZV"], i_.default.sruCpA],
        capture_unsupported: [i_.default.VbHWcJ, i_.default.lEHEE0],
        capture_permission_denied: [i_.default.C50P6S, i_.default.gtSpnM],
        capture_permission_needed: [i_.default.QEWLxM, i_.default.V4JE4O],
        game_not_detected: [i_.default["nE+IU9"], i_.default.gasAgy],
        game_unrecognized: [i_.default.ugCzav, i_.default.yNdjCb],
        game_not_targeted: [i_.default.HeyO5h, i_.default.SeFhTU],
        capture_failed: [i_.default.q1uPES, i_.default.lAZ5NF],
    },
    i9 = {
        loading: iX.CircleInformationIcon,
        widget_error: iB.WarningIcon,
        settings_failed: iB.WarningIcon,
        capture_unsupported: iB.WarningIcon,
        capture_permission_denied: iB.WarningIcon,
        capture_permission_needed: iB.WarningIcon,
        game_not_detected: iB.WarningIcon,
        game_unrecognized: iB.WarningIcon,
        game_not_targeted: iX.CircleInformationIcon,
        capture_failed: iB.WarningIcon,
    };
function i7(e, t) {
    return e.status === t.status && e.gameName === t.gameName && e.targetedGames === t.targetedGames;
}
function re(e) {
    let { applicationId: t } = e,
        n = (0, iT.A)(),
        {
            status: i,
            gameName: r,
            targetedGames: s,
        } = (0, P.bG)(
            [iL.Ay, tK.A, i1, p.A, iD.A, iK.A, i3.A, iV.A, i6.A],
            () => {
                let e = (0, iP.V)(iL.Ay, tK.A),
                    n = iK.A.getDecision(t, "screen_capture"),
                    i = i3.A.getFailure(t),
                    r = (0, iz.s)(t, p.A, iV.A),
                    l = (function (e) {
                        let {
                            frameState: t,
                            usesCapture: n,
                            captureSupported: i,
                            permission: r,
                            targeting: l,
                            game: s,
                            override: a,
                            captureFailure: o,
                        } = e;
                        if ("error" === t) return "widget_error";
                        if ("loading" === t) return "loading";
                        if (l?.mode === "pending" && "show" !== a)
                            return !0 === l.failed ? "settings_failed" : "loading";
                        let d = null != l && "specific" === l.mode;
                        if (!n && !d) return null;
                        if (n) {
                            if (!i) return "capture_unsupported";
                            if ("denied" === r) return "capture_permission_denied";
                            if (null == r) return "capture_permission_needed";
                        }
                        if (null == s) return "game_not_detected";
                        if ("show" !== a) {
                            let e = (0, ik.u8)(l, s);
                            if ("unrecognized" === e) return "game_unrecognized";
                            if ("no_match" === e) return "game_not_targeted";
                        }
                        return n && "hide" !== a && null != o ? "capture_failed" : null;
                    })({
                        frameState: i1.getState(t),
                        usesCapture: null != n || null != i || i3.A.hasRequested(t),
                        captureSupported: (0, iJ.yG)("screen_capture") && (0, i5.y8)(),
                        permission: n,
                        targeting: r,
                        game: e,
                        override: iD.A.getOverride(t, e),
                        captureFailure: i,
                    }),
                    s =
                        "game_not_targeted" === l && null != r
                            ? (function (e, t, n) {
                                  let i = e.filter((e) => null != e && "" !== e.trim());
                                  if (0 === i.length) return null;
                                  let r = i.length > 3 ? [...i.slice(0, 3), t(i.length - 3)] : i;
                                  return new Intl.ListFormat(n, { type: "conjunction" }).format(r);
                              })(
                                  r.application_ids.map((e) => i6.A.getDetectableGame(e)?.name),
                                  (e) => eC.intl.formatToPlainString(i_.default["VFY/kC"], { count: e }),
                                  eC.intl.currentLocale,
                              )
                            : null;
                return { status: l, gameName: e?.name ?? null, targetedGames: s };
            },
            [t],
            i7,
        ),
        a = (0, P.bG)([p.A], () => p.A.getProject(t)?.name, [t]),
        o = (0, P.bG)([p.A], () => p.A.getProject(t)?.id, [t]);
    if (n || null == i) return null;
    let [d, u] = i4[i],
        c = {
            appName: null != a && "" !== a ? a : eC.intl.string(i_.default.nXsF71),
            gameName: r ?? eC.intl.string(i_.default.RkGT9E),
        },
        h = eC.intl.formatToPlainString(d, c),
        m =
            "game_not_targeted" === i
                ? null != s
                    ? eC.intl.formatToPlainString(i_.default.SeFhTU, { games: s })
                    : eC.intl.string(i_.default["8vxkbb"])
                : eC.intl.formatToPlainString(u, c),
        g = i9[i],
        f =
            "capture_permission_needed" === i || "capture_permission_denied" === i
                ? {
                      text: eC.intl.string(i_.default.bGDxnW),
                      variant: "primary",
                      onClick: () => {
                          var e;
                          return (
                              (e = c.appName),
                              void ("denied" === iK.A.getDecision(t, "screen_capture") &&
                                  n$.h.dispatch({
                                      type: "CONJURE_DEVICE_PERMISSIONS_RESET",
                                      applicationId: t,
                                      permissions: ["screen_capture"],
                                  }),
                              (0, iQ.Ay)({
                                  applicationId: t,
                                  appName: e,
                                  iframeId: null,
                                  permissions: ["screen_capture"],
                                  modalContextKey: (0, iq.TI)(ej.BRT.OVERLAY),
                              }))
                          );
                      },
                  }
                : "settings_failed" === i && null != o
                  ? { text: eC.intl.string(i_.default.o9LC3H), variant: "secondary", onClick: () => (0, i2.fD)(o) }
                  : "game_unrecognized" === i || "game_not_targeted" === i
                    ? {
                          text: eC.intl.string(i_.default.P9lk1I),
                          variant: "secondary",
                          onClick: () => {
                              let e;
                              null != (e = (0, iP.V)()) &&
                                  n$.h.dispatch({
                                      type: "CONJURE_OVERLAY_SESSION_OVERRIDE_SET",
                                      applicationId: t,
                                      sessionKey: (0, iD.m)(e),
                                      pid: e.pid,
                                      override: "show",
                                  });
                          },
                      }
                    : null;
    return (0, l.jsxs)("div", {
        className: C()(i8.M0, "game_not_targeted" === i || "loading" === i ? i8.pq : i8.$e),
        role: "status",
        "data-conjure-overlay-status": i,
        children: [
            (0, l.jsx)(g, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            (0, l.jsx)(en.m, {
                text: m,
                "aria-label": m,
                asContainer: !0,
                children: (0, l.jsx)("div", {
                    className: i8.iU,
                    children: (0, l.jsx)(w.E, { variant: "body-xs/medium", color: "none", lineClamp: 1, children: h }),
                }),
            }),
            null != f ? (0, l.jsx)(e5.$, { size: "sm", variant: f.variant, text: f.text, onClick: f.onClick }) : null,
        ],
    });
}
var rt = n(155037),
    rn = n(197921);
function ri(e) {
    let { applicationId: t } = e,
        n = (0, iW.A)({ applicationId: t, surface: ib.ZN, hostWindowKey: e0.f });
    v.useEffect(() => () => (0, rt.G)(t), [t]);
    let i =
        n.state === iW.n.Launched && n.frame.data.proxyTicketRefreshing
            ? "loading"
            : (function (e) {
                  switch (e) {
                      case iW.n.Launched:
                      case iW.n.RenderingElsewhere:
                          return "ready";
                      case iW.n.NoApplication:
                      case iW.n.DoesNotSupportSurface:
                      case iW.n.Error:
                          return "error";
                      default:
                          return "loading";
                  }
              })(n.state);
    switch (
        (v.useEffect(() => {
            n$.h.dispatch({ type: "CONJURE_OVERLAY_FRAME_STATE_SET", applicationId: t, state: i });
        }, [t, i]),
        v.useEffect(
            () => () => {
                n$.h.dispatch({ type: "CONJURE_OVERLAY_FRAME_STATE_SET", applicationId: t, state: null });
            },
            [t],
        ),
        n.state)
    ) {
        case iW.n.Launched:
            if (n.frame.data.proxyTicketRefreshing) return (0, l.jsx)(iH.j, {});
            return (0, l.jsx)(iZ.A, { frame: n.frame, application: n.application, className: rn.Gt });
        case iW.n.RenderingElsewhere:
            return (0, l.jsx)(iH.A, { description: eC.intl.string(eC.t["2KIDX+"]) });
        case iW.n.NoApplication:
            return (0, l.jsx)(iH.A, { description: eC.intl.string(i_.default["/YOSiU"]) });
        case iW.n.DoesNotSupportSurface:
            return (0, l.jsx)(iH.A, { description: eC.intl.string(i_.default.Y1JOTm) });
        case iW.n.Error:
            return (0, l.jsx)(iH.A, { heading: eC.intl.string(eC.t.VquUff), error: eC.intl.string(eC.t["Sd9D/R"]) });
        case iW.n.AwaitingLaunch:
        case iW.n.Loading:
            return (0, l.jsx)(iH.j, {});
        default:
            return null;
    }
}
let rr = v.memo(function (e) {
    let { applicationId: t, locked: n, dragging: i, dragStart: r } = e,
        s = v.useCallback(
            (e) => {
                n || 0 !== e.button || r(eD.P.MOVE, e.clientX, e.clientY);
            },
            [n, r],
        );
    return (0, l.jsxs)("div", {
        className: rn.kL,
        children: [
            (0, l.jsx)("div", {
                "aria-hidden": !0,
                className: C()(rn.p$, { [rn.cB]: i, [rn.xt]: n }),
                onMouseDown: s,
                children: (0, l.jsx)("div", { className: rn.Ub }),
            }),
            (0, l.jsx)(re, { applicationId: t }),
            (0, l.jsx)("div", {
                className: C()(rn.ru, { [rn.po]: n || i }),
                children: (0, l.jsx)(ri, { applicationId: t }),
            }),
        ],
    });
});
function rl(e) {
    let { applicationId: t } = e,
        n = (0, P.bG)([p.A], () => p.A.getProject(t)?.name, [t]);
    return (0, l.jsx)(iS.Pl, { children: null != n && "" !== n ? n : eC.intl.string(i_.default.nXsF71) });
}
function rs(e, t) {
    return null != e && Number.isFinite(e) ? e : t;
}
var ra = n(312130);
n(321073);
var ro = n(232554),
    rd = n(592598),
    ru = n(376113),
    rc = n(57019),
    rh = n(847181),
    rm = n(672396),
    rg = n(942833);
let rp = [];
function rf(e) {
    return e.notification.id;
}
function rx(e, t, n, i) {
    let { index: r, notification: s, locked: a, pinned: o } = t;
    return (0, l.jsx)(ru.A, { index: r, notification: s, locked: a, pinned: o, transitionState: n, cleanUp: i }, e);
}
function rA(e) {
    return (0, l.jsx)("div", { className: rg.k, children: e });
}
let rE = v.memo(function (e) {
        let { locked: t, pinned: n, showEmpty: i = !0 } = e,
            r = (0, P.bG)(
                [rh.default, rd.A],
                () => {
                    if (rd.A.isNotificationDisabled(rm.KS.TextChat)) return rp;
                    let e = [],
                        i = 0;
                    for (let r of rh.default.getNotifications()) {
                        if (i > 4) break;
                        (!t || r.status !== ej.yFH.TIMED_OUT) &&
                            (e.push({ index: i, locked: t, pinned: n, notification: r }), i++);
                    }
                    return e;
                },
                [t, n],
                tJ.oQ,
            ),
            s = v.useState(() => new rc.Fn(t))[0];
        return (v.useLayoutEffect(() => s.updateState(r, t)),
        v.useLayoutEffect(() => (s.initialize((0, eU.b)()), () => s.cleanUp()), [s]),
        0 !== r.length || t)
            ? (0, l.jsx)(rc.Gt.Provider, {
                  value: s,
                  children: (0, l.jsx)(ro.F, { items: r, renderItem: rx, getItemKey: rf, wrapChildren: rA }),
              })
            : i
              ? t
                  ? null
                  : (0, l.jsx)(K.g, { emptyText: eC.intl.string(eC.t.O1Nbjq), icon: u.BellIcon, absolute: !0 })
              : null;
    }),
    rS = {
        [ej.uss.VIDEO]: {
            label: () => eC.intl.string(eC.t.UPvOia),
            description: () => eC.intl.string(nG.default.gMKjra),
            icon: s.VideoIcon,
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let { widget: t, locked: n, size: i, padding: r, borderWidth: s, showEmpty: a } = e;
                return (0, eG.cv)(t)
                    ? (0, l.jsx)(iA, {
                          id: t.id,
                          locked: n,
                          widget: t,
                          height: "auto" === i.height ? 0 : i.height - 2 * r - 2 * s,
                          width: "auto" === i.width ? 0 : i.width - 2 * r - 2 * s,
                          showEmpty: a,
                          padding: r,
                          borderWidth: s,
                      })
                    : null;
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t.UPvOia) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(iS.CS, {
                            onClick: (t) => {
                                (0, eG.cv)(e) &&
                                    (0, g.L3)(t, async () => {
                                        let { default: t } = await Promise.all([
                                            n.e(700792),
                                            n.e(552172),
                                            n.e(955630),
                                            n.e(478238),
                                        ]).then(n.bind(n, 662554));
                                        return (n) => (0, l.jsx)(t, { ...n, widget: e });
                                    });
                            },
                        }),
                        (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
            resizeValidation: ix,
        },
        [ej.uss.VOICE_V3]: {
            label: () => eC.intl.string(eC.t.nFv3Gb),
            description: () => eC.intl.string(nG.default["/Q8h0W"]),
            icon: a.VoiceNormalIcon,
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let { widget: t, anchorLeft: n, locked: i, showEmpty: r } = e;
                return (0, eG.ZO)(t)
                    ? (0, l.jsx)(iE.Ay, {
                          anchorLeft: n,
                          id: t.id,
                          locked: i,
                          pinned: t.pinned,
                          widget: ej.uss.VOICE_V3,
                          maxDisplayedVoiceStates: t.meta.voiceStatesMaxShown ?? 8,
                          isPreviewingInGame: !1,
                          showEmpty: r,
                      })
                    : null;
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t.nFv3Gb) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(iS.CS, {
                            onClick: (e) => {
                                (0, g.L3)(e, async () => {
                                    let { default: e } = await n.e(234901).then(n.bind(n, 51444));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ej.uss.CLICK_ZONE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n } = e;
                return (0, l.jsx)(k, { id: t.id, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: "Click Zone Tester" }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(iS.CS, {
                            onClick: (e) => {
                                (0, g.L3)(e, async () => {
                                    let { default: e } = await n.e(249170).then(n.bind(n, 508457));
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ej.uss.PERFORMANCE_DEBUG]: {
            renderWidget(e) {
                let { widget: t, locked: n, anchorLeft: i } = e;
                return (0, l.jsx)(e7, { id: t.id, anchorLeft: i, locked: n, pinned: t.pinned });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: "Overlay Performance" }),
            renderButtons: (e) => (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
        },
        [ej.uss.GO_LIVE]: {
            label: () => eC.intl.string(eC.t["386XRo"]),
            description: () => eC.intl.string(nG.default["3YHC/8"]),
            icon: o.ScreenIcon,
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let {
                    widget: t,
                    locked: n,
                    size: i,
                    dragStart: r,
                    anchorTop: s,
                    anchorLeft: a,
                    showEmpty: o,
                    padding: d,
                    borderWidth: u,
                } = e;
                return (0, eG.dO)(t)
                    ? (0, l.jsx)(e2, {
                          id: t.id,
                          locked: n,
                          pinned: t.pinned,
                          opacity: t.opacity,
                          size: i,
                          anchorTop: s,
                          anchorLeft: a,
                          widget: t,
                          isPreviewingInGame: !1,
                          dragStart: r,
                          horizontal: t.meta.horizontal ?? !1,
                          padding: d,
                          borderWidth: u,
                          showEmpty: o,
                      })
                    : null;
            },
            renderTitle: (e) => (0, l.jsx)(iS.we, { widgetId: e.id, children: eC.intl.string(eC.t["386XRo"]) }),
            renderButtons: (e) =>
                (0, eG.dO)(e)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(iS.CS, {
                                  onClick: (t) => {
                                      (0, eG.dO)(e) &&
                                          (0, g.L3)(t, async () => {
                                              let { default: t } = await Promise.all([n.e(955630), n.e(421289)]).then(
                                                  n.bind(n, 543824),
                                              );
                                              return (n) => (0, l.jsx)(t, { ...n, widget: e });
                                          });
                                  },
                              }),
                              (0, l.jsx)(iS.GQ, { widgetId: e.id, showAllStreams: e.meta.showAllStreams ?? !0 }),
                              (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: eK,
        },
        [ej.uss.QUICK_ACTIONS]: {
            label: () => eC.intl.string(nG.default["77gmRL"]),
            description: () => eC.intl.string(nG.default.Ce6Xe8),
            icon: d.MicrophoneIcon,
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(nr, { locked: t });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(nG.default["77gmRL"]) }),
        },
        [ej.uss.NOTIFICATIONS]: {
            label: () => eC.intl.string(eC.t.gnKWdS),
            description: () => eC.intl.string(nG.default.IkPPzO),
            icon: u.BellIcon,
            renderWidget(e) {
                let { locked: t, showEmpty: n, widget: i } = e;
                return (0, l.jsx)(rE, { pinned: i.pinned, locked: t, showEmpty: n });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t.gnKWdS) }),
            renderButtons: (e) =>
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(iS.CS, {
                            onClick: (e) => {
                                (0, g.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e(903820), n.e(751607)]).then(
                                        n.bind(n, 320490),
                                    );
                                    return (t) => (0, l.jsx)(e, { ...t });
                                });
                            },
                        }),
                        (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                    ],
                }),
        },
        [ej.uss.ACTIVITY]: {
            label: () => eC.intl.string(eC.t["6gwSFY"]),
            description: () => eC.intl.string(nG.default["5rYO+E"]),
            icon: c.GameControllerIcon,
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(I.Ay, { locked: t });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t["6gwSFY"]) }),
            renderButtons: () => null,
            predicate: () => !(0, S.NI)("WidgetRenderConfig").hasFriendList,
        },
        [ej.uss.FRIENDS]: {
            label: () => eC.intl.string(eC.t.TdEu5X),
            description: () => eC.intl.string(nG.default.GzNICm),
            icon: h.FriendsIcon,
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let { locked: t } = e;
                return (0, l.jsx)(z.A, { locked: t });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t.TdEu5X) }),
            renderButtons: () => null,
            predicate: () => (0, S.NI)("WidgetRenderConfig").hasFriendList,
        },
        [ej.uss.TEXT_CHAT_V3]: {
            label: () => eC.intl.string(eC.t["/VQax8"]),
            description: () => eC.intl.string(nG.default.odKfRO),
            icon: m.ChatIcon,
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let { locked: t, dragStart: n, dragging: i } = e;
                return (0, l.jsx)(io, { locked: t, dragStart: n, dragging: i });
            },
            renderTitle: () => (0, l.jsx)(iS.Pl, { children: eC.intl.string(eC.t["/VQax8"]) }),
            renderButtons: () => null,
            predicate: () => (0, S.NI)("WidgetRenderConfig").hasChat,
            containerRenderGate: {
                stores: [A.A, E.A],
                shouldRender(e) {
                    let { locked: t } = e;
                    if (t) return !1;
                    let n = A.A.getChannelId() ?? null,
                        [i] = E.A.getSessionEntries(),
                        r = i.length > 0;
                    return null != n || r;
                },
            },
        },
        [ej.uss.CONJURE]: {
            label: () => eC.intl.string(i_.default.IbNaU4),
            hideableInStreamerMode: !0,
            renderWidget(e) {
                let { widget: t, locked: n, dragging: i, dragStart: r } = e;
                return (0, eG.Du)(t)
                    ? (0, l.jsx)(rr, { applicationId: t.meta.applicationId, locked: n, dragging: i, dragStart: r })
                    : null;
            },
            renderTitle: (e) => ((0, eG.Du)(e) ? (0, l.jsx)(rl, { applicationId: e.meta.applicationId }) : null),
            renderButtons: (e) =>
                (0, eG.Du)(e)
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(iR, { applicationId: e.meta.applicationId }),
                              (0, l.jsx)(iY, { applicationId: e.meta.applicationId, pinned: e.pinned }),
                              (0, l.jsx)(iS.O0, { id: e.id, pinned: e.pinned }),
                          ],
                      })
                    : null,
            resizeValidation: (e) => {
                let { widget: t, computedSize: n, containerSpecs: i } = e,
                    r = X.A.getWidgetDefaultSettings(ej.uss.CONJURE)?.minSize,
                    l = rs(t.minSize.width, r?.width ?? 0),
                    s = rs(t.minSize.height, r?.height ?? 0),
                    a = Math.max(l, i.maxX - i.minX),
                    o = Math.max(s, i.maxY - i.minY);
                return { width: Math.min(Math.max(n.width, l), a), height: Math.min(Math.max(n.height, s), o) };
            },
            inGameVisibility: {
                stores: iG,
                isShownInGame: (e) => ((0, eG.Du)(e) ? iU(e.meta.applicationId, e.pinned).shownInGame : e.pinned),
            },
            containerRenderGate: {
                stores: [p.A, x.A, f.Bt],
                shouldRender(e) {
                    let { widget: t } = e;
                    if (!(0, eG.Du)(t)) return !1;
                    let n = p.A.getProject(t.meta.applicationId);
                    return null != n && (0, ra.J)(n);
                },
            },
        },
    };
