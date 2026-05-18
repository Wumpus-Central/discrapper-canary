n.r(t), n.d(t, { default: () => tj });
var l = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    u = n(554146),
    d = n(43105),
    h = n(691540),
    A = n(857250),
    m = n(97483),
    g = n(834730),
    E = n(123292),
    x = n(475825),
    S = n(192308),
    f = n(43990),
    j = n(849516),
    p = n(761508),
    C = n(944791),
    b = n(456412),
    _ = n(964486),
    I = n(260762),
    v = n(812771),
    R = n(789645),
    N = n(821609),
    M = n(355622),
    G = n(58736),
    T = n(353428),
    k = n(380335),
    y = n(157550),
    P = n(724442),
    U = n(411976);
function Q() {
    return (0, o.bG)([y.A], () => y.A.getSpamChannelsCount());
}
function z() {
    let e = (0, U.W)(),
        t = s.useRef(e),
        n = (0, o.bG)([k.A], () => k.A.isReady()),
        l = s.useRef(n);
    return (
        s.useEffect(() => {
            n && !l.current && ((l.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
function W() {
    let e = Q(),
        t = s.useRef(e),
        n = (0, o.bG)([y.A], () => y.A.isReady()),
        l = s.useRef(n);
    return (
        s.useEffect(() => {
            n && !l.current && ((l.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
var w = n(92650),
    F = n(977347),
    H = n(378570),
    L = n(138298),
    O = n(761640),
    D = n(47167),
    V = n(806202),
    q = n(375708),
    K = n(906462),
    B = n(669747);
function Z(e) {
    let { channel: t, baseChannelId: n } = e,
        a = (0, D.Ay)(t),
        i = z(),
        r = W(),
        c = (0, o.bG)([k.A], () => k.A.isMessageRequest(t.id)),
        u = (0, o.bG)([y.A], () => y.A.isSpam(t.id)),
        d = (0, F.D)(t.id, t.getRecipientId()),
        E = s.useCallback(() => {
            L.A.closeChannelSidebar(O.fe), c && i && (0, H.iN)(t.id), u && r && (0, H.iN)(t.id);
        }, [t.id, u, r, c, i]),
        x = s.useCallback(() => {
            (0, h.P0)((0, A.o)(q.intl.string(q.t.pIQ3h4), m.Ck.FAILURE));
        }, []),
        { markAsNotSpam: S } = (0, w.t)({ onAcceptSuccess: E, onError: x });
    if (null == t || !t.isDM()) return null;
    let f = [
        (0, l.jsx)(
            G.Ay.Icon,
            { icon: R.P, tooltip: q.intl.string(q.t.cpT0Cq), onClick: () => L.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.Ay, {
                toolbar: f,
                "aria-label": q.intl.string(q.t.BIYAqa),
                children: (0, T.zF)({ channel: t, channelName: a, inSidebar: !0 }),
            }),
            u &&
                (0, l.jsxs)("div", {
                    className: B.F,
                    children: [
                        (0, l.jsx)(g.E, { variant: "text-sm/normal", children: q.intl.string(q.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: B.$,
                            children: (0, l.jsx)(N.$, {
                                size: "sm",
                                onClick: () => S(t, d),
                                text: q.intl.string(q.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: K.T,
                children: (0, l.jsx)(V.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var X = n(485947),
    J = n(726249),
    Y = n(367727),
    $ = n(379848),
    ee = n(742589),
    et = n(807393),
    en = n(940382),
    el = n(210714),
    es = n(363195),
    ea = n(780964),
    ei = n(766075),
    er = n(734057),
    ec = n(186111),
    eo = n(174459),
    eu = n(232835),
    ed = n(287809),
    eh = n(321404),
    eA = n(572009);
function em() {
    return (0, o.bG)([ed.default], () => (0, eA.I9)(ed.default.getCurrentUser()));
}
var eg = n(166643),
    eE = n(957283),
    ex = n(935208);
function eS(e) {
    return e.sort((e, t) => ex.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(396478),
    ej = n(687599),
    ep = n(867853),
    eC = n(317017),
    eb = n(826223);
function e_(e) {
    let { section: t } = e,
        n = (0, o.bG)([es.A], () => es.A.theme);
    return (0, l.jsxs)(ef.pp, {
        theme: n,
        className: ep.y,
        children: [
            (0, l.jsx)(ef.G8, { width: 415, height: 200, lightSrc: eb, darkSrc: eC }),
            (0, l.jsx)(ef.SG, { note: t === ej.zz.SPAM ? q.intl.string(q.t.hasFPQ) : q.intl.string(q.t.SXrqTf) }),
        ],
    });
}
var eI = n(625494),
    ev = n(615300),
    eR = n(187322),
    eN = n(442433),
    eM = n(249611);
let eG = function (e) {
    let {
            index: t,
            children: a,
            user: c,
            channel: o,
            onClick: u,
            isFocused: d,
            isActive: h,
            onOtherHover: A,
            className: m,
        } = e,
        [g, E] = s.useState(!1),
        [x, S] = s.useState(!1),
        f = () => {
            E(!0), !d || h || x || A?.();
        },
        j = () => {
            E(!1);
        };
    return (0, l.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, l.jsx)(eR.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(ev.A.div, {
                    className: i()(eM.Cf, m, { [eM.vu]: h || x, [eM.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eN.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97292"),
                                        n.e("94881"),
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
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("24198"),
                                        n.e("32418"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, l.jsx)(e, { ...t, user: c });
                                },
                                {
                                    onClose: () => {
                                        S(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: f,
                    onMouseLeave: j,
                    onClick: u ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(g || h || x),
                }),
            }),
    });
};
var eT = n(692617),
    ek = n(97808),
    ey = n(778712),
    eP = n(297413),
    eU = n(775602),
    eQ = n(29160),
    ez = n(854378),
    eW = n(571694),
    ew = n(562819),
    eF = n(963977),
    eH = n(994500),
    eL = n(427262),
    eO = n(19575);
n(989349);
var eD = n(707539),
    eV = n(222823),
    eq = n(978914),
    eK = n(228366),
    eB = n(841595),
    eZ = n(903209),
    eX = n(247928),
    eJ = n(863439),
    eY = n(465364),
    e$ = n(805964),
    e0 = n(302031),
    e7 = n(885386),
    e6 = n(576705),
    e9 = n(652215),
    e2 = n(838541),
    e8 = n(571882),
    e4 = n(992595);
let e3 = s.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: r } = (0, eq.I)(t),
        { isBlocked: c, isIgnored: u } = (0, o.cf)(
            [eH.A],
            () => ({
                isBlocked: null != r && eH.A.isBlockedForMessage(r),
                isIgnored: null != r && eH.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        d = (0, o.bG)([e6.A], () => e6.A.can(e9.xBc.MANAGE_MESSAGES, t)),
        h = e7.gs.useSetting(),
        { content: A } = s.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, eY.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        m = null;
    if (a)
        m = (0, l.jsx)(g.E, {
            className: e8.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: q.intl.string(q.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            m = (0, l.jsx)(g.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t["WPe+xL"]),
            });
        else if (null != r && u)
            m = (0, l.jsx)(g.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e$.o)(r, A, c, u, i()(e8.BK, e4.tZ), {
                leadingIconClass: e8.AF,
                trailingIconClass: e8.AF,
                iconSize: e2.eJ,
            });
            m =
                null != t
                    ? (0, l.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: e8.BK, children: t })
                    : (0, l.jsx)(g.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e8.G4,
                          children: e,
                      });
        } else
            m = (0, l.jsx)(g.E, {
                className: e8.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: q.intl.string(q.t["0KfDxM"]),
            });
    else m = null;
    return (0, l.jsx)(e0.Bs.Provider, {
        value: (0, eJ.A)(h, d),
        children: (0, l.jsx)(eX.M, { className: e8.JY, children: m }),
    });
});
var e1 = n(746345);
let e5 = (e) => {
        let t,
            n,
            { userId: a } = e,
            i =
                ((t = (0, o.bG)([ed.default], () => ed.default.getUser(a))),
                (n = (0, o.yK)([eB.A], () => eB.A.getMutualGuilds(a)?.map((e) => e.guild) ?? [])),
                s.useEffect(() => {
                    0 === n.length &&
                        null != t &&
                        null == eB.A.getMutualGuilds(a) &&
                        eK.h.wait(() => (0, eZ.A)(a, void 0, { withMutualGuilds: !0 }));
                }, [n, t, a]),
                n);
        return null == i || 0 === i.length
            ? (0, l.jsx)(g.E, {
                  className: e1.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: q.intl.string(q.t.jpY0X5),
              })
            : (0, l.jsxs)("div", {
                  className: e1.I9,
                  children: [
                      (0, l.jsx)(eT.A, { guilds: i, maxGuilds: 3, size: ez.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, l.jsx)(g.E, {
                          className: e1.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: q.intl.format(q.t.eE3oep, { count: i.length }),
                      }),
                  ],
              });
    },
    te = eO.Ay.getEnableHardwareAcceleration() ? ek.Js : ek.eu;
function tt(e) {
    let t,
        n,
        { channel: s, otherUser: a, active: i } = e,
        r = (0, o.bG)([eU.A], () => eU.A.useReducedMotion),
        c = (0, o.bG)([eH.A], () => (null == a ? null : eH.A.getNickname(a.id))),
        u = !r && i,
        d =
            ((t = (0, eq.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? ex.default.extractTimestamp(n.id)
                    : null != t
                      ? ex.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eV.Ay], () => eV.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eD.aK)(n)),
        { avatarDecorationSrc: h } = (0, eF.A)({
            user: a,
            size: (0, ew.Te)(ey._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(te, {
                className: e1.my,
                src: (0, eW.Y)(s, 40, u),
                avatarDecoration: h,
                size: ey._3.SIZE_40,
                "aria-label": a?.username ?? q.intl.string(q.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: e1.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: e1.rU,
                        children: [
                            (0, l.jsx)(eP.A, {
                                nick: c,
                                user: a,
                                showAccountIdentifier: !0,
                                className: e1.I8,
                                usernameClass: e1.Xh,
                                discriminatorClass: null != eL.Ay.getGlobalName(a) ? e1.vl : e1.D2,
                            }),
                            (0, l.jsx)(g.E, {
                                className: e1.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: d,
                            }),
                        ],
                    }),
                    (0, l.jsx)(eQ.A, {
                        hoverText: (0, l.jsx)(e3, { channel: s }),
                        forceHover: i,
                        children: (0, l.jsx)(e5, { userId: a.id }),
                    }),
                ],
            }),
        ],
    });
}
var tn = n(610602);
function tl(e) {
    let { active: t, user: n, channel: a } = e,
        i = z(),
        r = s.useCallback(() => {
            (0, h.P0)((0, A.o)(q.intl.string(q.t["EDYbS+"]), m.Ck.FAILURE));
        }, []),
        c = s.useCallback(() => {
            L.A.closeChannelSidebar(O.fe);
        }, []),
        o = s.useCallback(() => {
            L.A.closeChannelSidebar(O.fe), i && (0, H.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: u,
            rejectMessageRequest: d,
            isAcceptLoading: g,
            isRejectLoading: E,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, w.t)({ user: n, onAcceptSuccess: o, onRejectSuccess: c, onError: r }),
        j = g || E || x || S || f;
    return (0, l.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, l.jsx)(tt, { channel: a, otherUser: n, active: t }),
            (0, l.jsxs)("div", {
                className: tn.o1,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, l.jsx)(N.$, {
                            variant: "secondary",
                            size: "sm",
                            text: q.intl.string(q.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), d(a.id);
                            },
                            disabled: j,
                            loading: E || f,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, l.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: q.intl.string(q.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), u(a.id);
                            },
                            disabled: j,
                            loading: g || x || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ts(e) {
    let { index: t, className: n, channel: s, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eE.N)();
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: r === s.id,
        channel: s,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                L.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                eo.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: s.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eI._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0);
        },
        children: (e) => (0, l.jsx)(tl, { active: e, user: a, channel: s }),
    });
}
var ta = n(308528),
    ti = n(928658);
function tr(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: a, onMouseLeave: i } = e,
        { error: r, loaded: c, message: o } = (0, eq.I)(t);
    if (null == o && (c || r)) return null;
    let u = () => {
        s?.(), ta.A.closePrivateChannel(t.id);
    };
    return (0, l.jsx)(N.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != o && (0, ti.b8)(o, u);
        },
        onMouseEnter: a,
        onMouseLeave: i,
        text: q.intl.string(q.t.HHZmDn),
    });
}
var tc = n(303835);
function to(e) {
    let { active: t, user: n, channel: a } = e,
        i = W(),
        r = s.useCallback(() => {
            (0, h.P0)((0, A.o)(q.intl.string(q.t.pIQ3h4), m.Ck.FAILURE)),
                et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        o = s.useCallback(() => {
            L.A.closeChannelSidebar(O.fe);
        }, []),
        u = s.useCallback(() => {
            L.A.closeChannelSidebar(O.fe), i && (0, H.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: d,
            isAcceptLoading: g,
            isUserProfileLoading: E,
            isOptimisticAccepted: x,
        } = (0, w.t)({ user: n, onAcceptSuccess: u, onRejectSuccess: o, onError: r }),
        S = g || E,
        f = S || x;
    return (0, l.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, l.jsx)(tt, { otherUser: n, channel: a, active: t }),
            (0, l.jsxs)("div", {
                className: tc.o1,
                children: [
                    (0, l.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        text: q.intl.string(q.t.vicfl6),
                        onClick: (e) => {
                            d(a.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: S,
                    }),
                    (0, l.jsx)(tr, { channel: a }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { index: t, className: n, channel: s, user: a, hasSingleMessageRequest: i } = e;
    return (0, l.jsx)(eG, {
        index: t,
        className: n,
        isFocused: !1,
        channel: s,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                L.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                eo.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: s.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eI._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0);
        },
        children: (e) => (0, l.jsx)(to, { active: e, user: a, channel: s }),
    });
}
var td = n(900425);
function th() {
    let e,
        t,
        n,
        a = s.useRef(null),
        u =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, y.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eS(
                    Array.from(y.A.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([ed.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = ed.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        d = Q(),
        S = W(),
        f = em(),
        j = (0, I.A)("message-requests-spam-list"),
        { channelId: p } = (0, eE.N)(),
        C = s.useCallback(() => {
            (0, h.P0)((0, A.o)(q.intl.string(q.t["EDYbS+"]), m.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, w.t)({ onError: C }),
        v = s.useCallback(() => {
            b(u.map((e) => e.channel.id));
        }, [u, b]);
    (0, _.Ay)(() => {
        eo.default.track(e9.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: d }),
            et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let R = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, l.jsx)(
                    tu,
                    {
                        index: t,
                        className: i()({ [td.wH]: null != p && p === a, [td.wZ]: null != p && p === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    a,
                );
            },
            [u, S, p],
        ),
        N = s.useCallback(
            () =>
                (0, l.jsxs)(
                    X.A,
                    {
                        className: td.Gf,
                        children: [
                            q.intl.format(q.t.C79Edh, { count: d }),
                            f && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(g.E, {
                                              className: td.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(E.Q, {
                                              textVariant: "text-sm/normal",
                                              text: q.intl.string(q.t.p6t7RC),
                                              onClick: v,
                                              "aria-label": q.intl.string(q.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [d, v, f],
        );
    return 0 === u.length
        ? (0, l.jsx)(e_, { section: ej.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: j,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          x.OZ,
                          {
                              className: td.p_,
                              innerRole: n,
                              innerAriaLabel: q.intl.string(q.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: N,
                              renderRow: R,
                              sections: [u.length],
                              chunkSize: 30,
                              fade: !0,
                              ...s,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tA = n(49999),
    tm = n(267899),
    tg = n(964623);
function tE() {
    let e,
        t,
        n,
        a = s.useRef(null),
        u = (0, U.W)(),
        d =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, k.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eS(
                    Array.from(k.A.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([ed.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = ed.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        S = z(),
        f = em(),
        j = s.useCallback(() => {
            (0, h.P0)((0, A.o)(q.intl.string(q.t["EDYbS+"]), m.Ck.FAILURE));
        }, []),
        { rejectAll: p } = (0, w.t)({ onError: j }),
        C = (0, I.A)("message-requests-list"),
        { channelId: b } = (0, eE.N)(),
        _ = s.useCallback(() => {
            p(d.map((e) => e.channel.id));
        }, [d, p]),
        v = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, l.jsx)(
                    ts,
                    {
                        index: t,
                        className: i()({ [tm.wH]: null != b && b === a, [tm.wZ]: null != b && b === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    a,
                );
            },
            [S, d, b],
        ),
        R = s.useCallback(
            () =>
                (0, l.jsxs)(
                    X.A,
                    {
                        className: tm.Gf,
                        children: [
                            u > 0 ? q.intl.formatToPlainString(q.t.rA4iWY, { count: u }) : q.intl.string(q.t.flPU6g),
                            f && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(g.E, {
                                              className: tm.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(E.Q, {
                                              onClick: _,
                                              textVariant: "text-sm/normal",
                                              text: q.intl.string(q.t.p6t7RC),
                                              "aria-label": q.intl.string(q.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [u, _, f],
        );
    return (d.length !== u && et.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === d.length)
        ? (0, l.jsx)(e_, { section: ej.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: C,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          x.OZ,
                          {
                              className: tm.p_,
                              innerRole: n,
                              innerAriaLabel: q.intl.string(q.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: R,
                              renderRow: v,
                              sections: [d.length],
                              chunkSize: 30,
                              fade: !0,
                              ...s,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tx(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        s = (0, o.bG)([O.Ay], () => O.Ay.getSidebarState(O.fe)),
        a = (0, o.bG)([er.A], () => er.A.getChannel(s?.channelId));
    if (null == s || s.type !== en.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = t - e9.ItT;
    return (0, l.jsx)(v.A, {
        sidebarType: v.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, l.jsx)(Z, { channel: a, baseChannelId: O.fe }),
    });
}
let tS = (e) => {
    let t = (0, eg.A)();
    return (s.useEffect(() => {
        (0, Y.Vh)(u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ec.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)($.Ay, {
              contentTypes: [u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: a } = n,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(tA.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(d.A, {
                                          ...i,
                                          title: q.intl.string(q.t.hRT8tc),
                                          body: q.intl.string(q.t.apPgJG),
                                          actions: [
                                              { text: q.intl.string(q.t.LNoAQW), onClick: () => a(tA.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(d.A, {
                                          ...i,
                                          title: q.intl.string(q.t.hRT8tc),
                                          body: q.intl.string(q.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: q.intl.string(q.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, ei.openUserSettings)(
                                                              ea.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          a(tA.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: q.intl.string(q.t.LNoAQW),
                                                  onClick: () => a(tA.i.USER_DISMISS),
                                                  variant: "secondary",
                                              },
                                          ],
                                      }),
                            ],
                        })
                      : e.children;
              },
          });
};
function tf(e) {
    let { section: t } = e;
    return t === ej.zz.SPAM ? (0, l.jsx)(th, {}) : (0, l.jsx)(tE, {});
}
let tj = (0, b.A)(function (e) {
    let { width: t } = e,
        n = (0, U.W)();
    (0, _.Ay)(() => {
        C.I(e9.BVt.MESSAGE_REQUESTS),
            (0, el.d)("message-requests"),
            eo.default.track(e9.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            et.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, o.bG)([es.A], () => es.A.theme),
        r = Q(),
        [u, d] = s.useState(!1),
        h = (0, o.bG)([O.Ay], () => {
            let e = O.Ay.getSidebarState(O.fe);
            return null != e && e.type === en.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        A = h?.channelId,
        m = null != h,
        g = (0, eh.c)(A),
        E = (0, o.bG)([eu.A, ed.default], () => {
            if (null == A) return !1;
            let e = ed.default.getCurrentUser();
            return null != eu.A.getMessages(A).findNewest((t) => t.author.id === e?.id);
        }),
        x = s.useRef(null);
    s.useEffect(() => {
        null != A && !g && E && m && ((0, H.iN)(A), L.A.closeChannelSidebar(O.fe));
    }, [A, E, m, g]);
    let [S, b] = s.useState(ej.zz.REQUESTS),
        I = (e) => {
            b(e);
        };
    return (
        (0, J.HU)({ location: q.intl.string(q.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: i()(tg.TE, tm.kL, { [tg.js]: m, [tg.jl]: m && u }),
                    children: [
                        (0, l.jsx)(f.N, {
                            theme: a,
                            children: (e) =>
                                (0, l.jsxs)(ee.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)(ee.A.Icon, { icon: j.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tS, {
                                            targetElementRef: x,
                                            children: (0, l.jsx)(ee.A.Title, {
                                                ref: x,
                                                children: q.intl.string(q.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)(ee.A.Divider, {}),
                                        (0, l.jsxs)(p.V, {
                                            "aria-label": q.intl.string(q.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: I,
                                            children: [
                                                (0, l.jsx)(p.V.Item, {
                                                    id: ej.zz.REQUESTS,
                                                    className: tm.AS,
                                                    children: q.intl.string(q.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(p.V.Item, {
                                                    id: ej.zz.SPAM,
                                                    className: tm.AS,
                                                    children:
                                                        0 === r
                                                            ? q.intl.string(q.t.ulKXHp)
                                                            : q.intl.formatToPlainString(q.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, l.jsx)("div", { className: tg.Qs, children: (0, l.jsx)(tf, { section: S }) }),
                    ],
                }),
                m &&
                    (0, l.jsx)(tx, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            d(t);
                        },
                    }),
            ],
        })
    );
});
