n.r(t), n.d(t, { default: () => tM });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(837381),
    c = n(731738),
    d = n(17928),
    o = n(554146),
    u = n(43105),
    h = n(691540),
    m = n(857250),
    A = n(97483),
    E = n(834730),
    g = n(123292),
    x = n(475825),
    S = n(192308),
    f = n(43990),
    j = n(849516),
    p = n(761508),
    C = n(944791),
    b = n(456412),
    _ = n(964486),
    v = n(260762),
    I = n(812771),
    R = n(789645),
    N = n(821609),
    M = n(355622),
    T = n(58736),
    k = n(353428),
    G = n(380335),
    y = n(157550),
    P = n(724442),
    U = n(411976);
function w() {
    return (0, d.bG)([y.A], () => y.A.getSpamChannelsCount());
}
function Q() {
    let e = (0, U.W)(),
        t = l.useRef(e),
        n = (0, d.bG)([G.A], () => G.A.isReady()),
        s = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
function z() {
    let e = w(),
        t = l.useRef(e),
        n = (0, d.bG)([y.A], () => y.A.isReady()),
        s = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
var W = n(92650),
    F = n(977347),
    L = n(378570),
    H = n(138298),
    O = n(761640),
    q = n(47167),
    D = n(806202),
    V = n(375708),
    K = n(906462),
    B = n(669747);
function Z(e) {
    let { channel: t, baseChannelId: n } = e,
        a = (0, q.Ay)(t),
        i = Q(),
        r = z(),
        c = (0, d.bG)([G.A], () => G.A.isMessageRequest(t.id)),
        o = (0, d.bG)([y.A], () => y.A.isSpam(t.id)),
        u = (0, F.D)(t.id, t.getRecipientId()),
        g = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), c && i && (0, L.iN)(t.id), o && r && (0, L.iN)(t.id);
        }, [t.id, o, r, c, i]),
        x = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: S } = (0, W.t)({ onAcceptSuccess: g, onError: x });
    if (null == t || !t.isDM()) return null;
    let f = [
        (0, s.jsx)(
            T.Ay.Icon,
            { icon: R.P, tooltip: V.intl.string(V.t.cpT0Cq), onClick: () => H.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.Ay, {
                toolbar: f,
                "aria-label": V.intl.string(V.t.BIYAqa),
                children: (0, k.zF)({ channel: t, channelName: a, inSidebar: !0 }),
            }),
            o &&
                (0, s.jsxs)("div", {
                    className: B.F,
                    children: [
                        (0, s.jsx)(E.E, { variant: "text-sm/normal", children: V.intl.string(V.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: B.$,
                            children: (0, s.jsx)(N.$, {
                                size: "sm",
                                onClick: () => S(t, u),
                                text: V.intl.string(V.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: K.T,
                children: (0, s.jsx)(D.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var X = n(485947),
    Y = n(726249),
    $ = n(367727),
    J = n(379848),
    ee = n(742589),
    et = n(807393),
    en = n(940382),
    es = n(210714),
    el = n(363195),
    ea = n(780964),
    ei = n(766075),
    er = n(734057),
    ec = n(186111),
    ed = n(174459),
    eo = n(232835),
    eu = n(287809),
    eh = n(321404),
    em = n(923457),
    eA = n(36149),
    eE = n(207560);
let eg = (0, n(945810).mj)({
    name: "2026-06-non-friend-messages-requests-in-uk",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ex = n(572009);
function eS() {
    return (0, d.bG)([eu.default], () => (0, ex.I9)(eu.default.getCurrentUser()));
}
var ef = n(166643),
    ej = n(957283),
    ep = n(935208);
function eC(e) {
    return e.sort((e, t) => ep.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var eb = n(396478),
    e_ = n(687599),
    ev = n(867853),
    eI = n(317017),
    eR = n(826223);
function eN(e) {
    let { section: t } = e,
        n = (0, d.bG)([el.A], () => el.A.theme);
    return (0, s.jsxs)(eb.pp, {
        theme: n,
        className: ev.y,
        children: [
            (0, s.jsx)(eb.G8, { width: 415, height: 200, lightSrc: eR, darkSrc: eI }),
            (0, s.jsx)(eb.SG, { note: t === e_.zz.SPAM ? V.intl.string(V.t.hasFPQ) : V.intl.string(V.t.SXrqTf) }),
        ],
    });
}
var eM = n(625494),
    eT = n(615300),
    ek = n(187322),
    eG = n(442433),
    ey = n(249611);
let eP = function (e) {
    let {
            index: t,
            children: a,
            user: c,
            channel: d,
            onClick: o,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: A,
        } = e,
        [E, g] = l.useState(!1),
        [x, S] = l.useState(!1),
        f = () => {
            g(!0), !u || h || x || m?.();
        },
        j = () => {
            g(!1);
        };
    return (0, s.jsx)(r.tG, {
        id: d.id,
        children: (e) =>
            (0, s.jsx)(ek.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(eT.A.div, {
                    className: i()(ey.Cf, A, { [ey.vu]: h || x, [ey.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eG.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("71406"),
                                        n.e("94881"),
                                        n.e("26132"),
                                        n.e("46652"),
                                        n.e("93190"),
                                        n.e("8757"),
                                        n.e("23625"),
                                        n.e("54037"),
                                        n.e("89673"),
                                        n.e("29787"),
                                        n.e("82073"),
                                        n.e("97558"),
                                        n.e("91994"),
                                        n.e("76665"),
                                        n.e("76273"),
                                        n.e("24198"),
                                        n.e("32418"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, s.jsx)(e, { ...t, user: c });
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
                    onClick: o ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(E || h || x),
                }),
            }),
    });
};
var eU = n(692617),
    ew = n(97808),
    eQ = n(778712),
    ez = n(297413),
    eW = n(775602),
    eF = n(29160),
    eL = n(854378),
    eH = n(571694),
    eO = n(562819),
    eq = n(963977),
    eD = n(994500),
    eV = n(427262),
    eK = n(19575);
n(989349);
var eB = n(707539),
    eZ = n(568548),
    eX = n(978914),
    eY = n(228366),
    e$ = n(841595),
    eJ = n(903209),
    e0 = n(346055),
    e7 = n(863439),
    e6 = n(465364),
    e4 = n(805964),
    e3 = n(302031),
    e2 = n(885386),
    e8 = n(576705),
    e9 = n(652215),
    e1 = n(838541),
    e5 = n(571882),
    te = n(992595);
let tt = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: r } = (0, eX.I)(t),
        { isBlocked: c, isIgnored: o } = (0, d.cf)(
            [eD.A],
            () => ({
                isBlocked: null != r && eD.A.isBlockedForMessage(r),
                isIgnored: null != r && eD.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, d.bG)([e8.A], () => e8.A.can(e9.xBc.MANAGE_MESSAGES, t)),
        h = e2.gs.useSetting(),
        { content: m } = l.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e6.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        A = null;
    if (a)
        A = (0, s.jsx)(E.E, {
            className: e5.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: V.intl.string(V.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            A = (0, s.jsx)(E.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t["WPe+xL"]),
            });
        else if (null != r && o)
            A = (0, s.jsx)(E.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e4.o)(r, m, c, o, i()(e5.BK, te.tZ), {
                leadingIconClass: e5.AF,
                trailingIconClass: e5.AF,
                iconSize: e1.eJ,
            });
            A =
                null != t
                    ? (0, s.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", className: e5.BK, children: t })
                    : (0, s.jsx)(E.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e5.G4,
                          children: e,
                      });
        } else
            A = (0, s.jsx)(E.E, {
                className: e5.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t["0KfDxM"]),
            });
    else A = null;
    return (0, s.jsx)(e3.Bs.Provider, {
        value: (0, e7.A)(h, u),
        children: (0, s.jsx)(e0.M, { className: e5.JY, children: A }),
    });
});
var tn = n(746345);
let ts = (e) => {
        let t,
            n,
            { userId: a } = e,
            i =
                ((t = (0, d.bG)([eu.default], () => eu.default.getUser(a))),
                (n = (0, d.yK)([e$.A], () => e$.A.getMutualGuilds(a)?.map((e) => e.guild) ?? [])),
                l.useEffect(() => {
                    0 === n.length &&
                        null != t &&
                        null == e$.A.getMutualGuilds(a) &&
                        eY.h.wait(() => (0, eJ.A)(a, void 0, { withMutualGuilds: !0 }));
                }, [n, t, a]),
                n);
        return null == i || 0 === i.length
            ? (0, s.jsx)(E.E, {
                  className: tn.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: V.intl.string(V.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: tn.I9,
                  children: [
                      (0, s.jsx)(eU.A, { guilds: i, maxGuilds: 3, size: eL.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(E.E, {
                          className: tn.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: V.intl.format(V.t.eE3oep, { count: i.length }),
                      }),
                  ],
              });
    },
    tl = eK.Ay.getEnableHardwareAcceleration() ? ew.Js : ew.eu;
function ta(e) {
    let t,
        n,
        { channel: l, otherUser: a, active: i, isRestricted: r = !1 } = e,
        c = (0, d.bG)([eW.Ay], () => eW.Ay.useReducedMotion),
        o = (0, d.bG)([eD.A], () => (null == a ? null : eD.A.getNickname(a.id))),
        u = !c && i,
        h =
            ((t = (0, eX.I)(l)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: s } = e;
                return s && null != n
                    ? ep.default.extractTimestamp(n.id)
                    : null != t
                      ? ep.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, d.bG)([eZ.Ay], () => eZ.Ay.lastMessageId(l.id)), ...t }))
                ? ""
                : (0, eB.aK)(n)),
        { avatarDecorationSrc: m } = (0, eq.A)({
            user: a,
            size: (0, eO.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tl, {
                className: tn.my,
                src: (0, eH.Y)(l, 40, u),
                avatarDecoration: m,
                size: eQ._3.SIZE_40,
                "aria-label": a?.username ?? V.intl.string(V.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: tn.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: tn.rU,
                        children: [
                            (0, s.jsx)(ez.A, {
                                nick: o,
                                user: a,
                                showAccountIdentifier: !0,
                                className: tn.I8,
                                usernameClass: tn.Xh,
                                discriminatorClass: null != eV.Ay.getGlobalName(a) ? tn.vl : tn.D2,
                            }),
                            (0, s.jsx)(E.E, {
                                className: tn.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    r
                        ? (0, s.jsx)(ts, { userId: a.id })
                        : (0, s.jsx)(eF.A, {
                              hoverText: (0, s.jsx)(tt, { channel: l }),
                              forceHover: i,
                              children: (0, s.jsx)(ts, { userId: a.id }),
                          }),
                ],
            }),
        ],
    });
}
var ti = n(610602);
function tr(e) {
    let { active: t, user: n, channel: a } = e,
        i = Q(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        c = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe);
        }, []),
        d = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), i && (0, L.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: u,
            isAcceptLoading: E,
            isRejectLoading: g,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, W.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: c, onError: r }),
        j = E || g || x || S || f;
    return (0, s.jsxs)("div", {
        className: ti.kL,
        children: [
            (0, s.jsx)(ta, { channel: a, otherUser: n, active: t }),
            (0, s.jsxs)("div", {
                className: ti.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "secondary",
                            size: "sm",
                            text: V.intl.string(V.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), u(a.id);
                            },
                            disabled: j,
                            loading: g || f,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: V.intl.string(V.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), o(a.id);
                            },
                            disabled: j,
                            loading: E || x || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tc(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, ej.N)();
    return (0, s.jsx)(eP, {
        index: t,
        className: n,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                ed.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(tr, { active: e, user: a, channel: l }),
    });
}
var td = n(408278),
    to = n(530005),
    tu = n(493975);
function th(e) {
    let { active: t, user: a, channel: i, onPreview: r } = e,
        c = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        d = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe);
        }, []),
        {
            rejectMessageRequest: o,
            isRejectLoading: u,
            isOptimisticRejected: E,
        } = (0, W.t)({ user: a, onRejectSuccess: d, onError: c }),
        g = u || E;
    return (0, s.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, s.jsx)(ta, { channel: i, otherUser: a, active: t, isRestricted: !0 }),
            (0, s.jsxs)("div", {
                className: tu.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tu.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "secondary",
                            size: "sm",
                            text: V.intl.string(V.t.BVN4pL),
                            onClick: (e) => {
                                e.stopPropagation(), o(i.id);
                            },
                            disabled: g,
                            loading: u || E,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tu.x6,
                        children: (0, s.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: V.intl.string(V.t.NB4jq8),
                            onClick: r,
                            disabled: g,
                        }),
                    }),
                    (0, s.jsx)(td.K, {
                        variant: "icon-only",
                        size: "sm",
                        icon: to.F,
                        "aria-label": V.intl.string(V.t.PdRCRg),
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, eG.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("23625"), n.e("75639")]).then(
                                        n.bind(n, 935786),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t, user: a, channel: i });
                                });
                        },
                        disabled: g,
                    }),
                ],
            }),
        ],
    });
}
function tm(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, ej.N)(),
        c = (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                ed.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        };
    return (0, s.jsx)(eP, {
        index: t,
        className: n,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: c,
        children: (e) => (0, s.jsx)(th, { active: e, user: a, channel: l, onPreview: c }),
    });
}
var tA = n(308528),
    tE = n(928658);
function tg(e) {
    let { channel: t, onReportClick: n, onReportSubmit: l, onMouseEnter: a, onMouseLeave: i } = e,
        { error: r, loaded: c, message: d } = (0, eX.I)(t);
    if (null == d && (c || r)) return null;
    let o = () => {
        l?.(), tA.A.closePrivateChannel(t.id);
    };
    return (0, s.jsx)(N.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == d,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != d && (0, tE.b8)(d, o);
        },
        onMouseEnter: a,
        onMouseLeave: i,
        text: V.intl.string(V.t.HHZmDn),
    });
}
var tx = n(303835);
function tS(e) {
    let { active: t, user: n, channel: a } = e,
        i = z(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t.pIQ3h4), A.Ck.FAILURE)),
                et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        d = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe);
        }, []),
        o = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), i && (0, L.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: E,
            isUserProfileLoading: g,
            isOptimisticAccepted: x,
        } = (0, W.t)({ user: n, onAcceptSuccess: o, onRejectSuccess: d, onError: r }),
        S = E || g,
        f = S || x;
    return (0, s.jsxs)("div", {
        className: tx.kL,
        children: [
            (0, s.jsx)(ta, { otherUser: n, channel: a, active: t }),
            (0, s.jsxs)("div", {
                className: tx.o1,
                children: [
                    (0, s.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.vicfl6),
                        onClick: (e) => {
                            u(a.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: S,
                    }),
                    (0, s.jsx)(tg, { channel: a }),
                ],
            }),
        ],
    });
}
function tf(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e;
    return (0, s.jsx)(eP, {
        index: t,
        className: n,
        isFocused: !1,
        channel: l,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                ed.default.track(e9.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e9.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(tS, { active: e, user: a, channel: l }),
    });
}
var tj = n(900425);
function tp() {
    let e,
        t,
        n,
        a = l.useRef(null),
        o =
            ((e = (0, d.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, d.yK)([er.A, y.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eC(
                    Array.from(y.A.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, d.cf)([eu.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = eu.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = w(),
        S = z(),
        f = eS(),
        j = (0, v.A)("message-requests-spam-list"),
        { channelId: p } = (0, ej.N)(),
        C = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, W.t)({ onError: C }),
        I = l.useCallback(() => {
            b(o.map((e) => e.channel.id));
        }, [o, b]);
    (0, _.Ay)(() => {
        ed.default.track(e9.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let R = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = o[t],
                    l = o[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, s.jsx)(
                    tf,
                    {
                        index: t,
                        className: i()({ [tj.wH]: null != p && p === a, [tj.wZ]: null != p && p === l }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    a,
                );
            },
            [o, S, p],
        ),
        N = l.useCallback(
            () =>
                (0, s.jsxs)(
                    X.A,
                    {
                        className: tj.Gf,
                        children: [
                            V.intl.format(V.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(E.E, {
                                              className: tj.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(g.Q, {
                                              textVariant: "text-sm/normal",
                                              text: V.intl.string(V.t.p6t7RC),
                                              onClick: I,
                                              "aria-label": V.intl.string(V.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, I, f],
        );
    return 0 === o.length
        ? (0, s.jsx)(eN, { section: e_.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: j,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: tj.p_,
                              innerRole: n,
                              innerAriaLabel: V.intl.string(V.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: N,
                              renderRow: R,
                              sections: [o.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tC = n(49999),
    tb = n(267899),
    t_ = n(964623);
function tv() {
    let e,
        t,
        n,
        a = l.useRef(null),
        o = (0, U.W)(),
        u =
            ((e = (0, d.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, d.yK)([er.A, G.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eC(
                    Array.from(G.A.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, d.cf)([eu.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = eu.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        S = Q(),
        f = eS(),
        j = (function (e) {
            let t = (0, eA.Dn)(),
                n = (0, eE.yv)(em.p.MESSAGE_REQUEST_RESTRICTIONS),
                { enabled: s } = eg.useConfig({ location: e });
            return !t && n && s;
        })("MessageRequestPage"),
        p = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: C } = (0, W.t)({ onError: p }),
        b = (0, v.A)("message-requests-list"),
        { channelId: _ } = (0, ej.N)(),
        I = l.useCallback(() => {
            C(u.map((e) => e.channel.id));
        }, [u, C]),
        R = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    l = u[t + 1]?.channel?.id,
                    a = n.channel.id,
                    r = i()({ [tb.wH]: null != _ && _ === a, [tb.wZ]: null != _ && _ === l });
                return j
                    ? (0, s.jsx)(
                          tm,
                          { index: t, className: r, channel: n.channel, user: n.user, hasSingleMessageRequest: S },
                          a,
                      )
                    : (0, s.jsx)(
                          tc,
                          { index: t, className: r, channel: n.channel, user: n.user, hasSingleMessageRequest: S },
                          a,
                      );
            },
            [S, j, u, _],
        ),
        N = l.useCallback(
            () =>
                (0, s.jsxs)(
                    X.A,
                    {
                        className: tb.Gf,
                        children: [
                            o > 0 ? V.intl.formatToPlainString(V.t.rA4iWY, { count: o }) : V.intl.string(V.t.flPU6g),
                            f && o > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(E.E, {
                                              className: tb.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(g.Q, {
                                              onClick: I,
                                              textVariant: "text-sm/normal",
                                              text: V.intl.string(V.t.p6t7RC),
                                              "aria-label": V.intl.string(V.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [o, I, f],
        );
    return (u.length !== o && et.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(eN, { section: e_.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: b,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: tb.p_,
                              innerRole: n,
                              innerAriaLabel: V.intl.string(V.t.e7GWjQ),
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
                              ...l,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tI(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, d.bG)([O.Ay], () => O.Ay.getSidebarState(O.fe)),
        a = (0, d.bG)([er.A], () => er.A.getChannel(l?.channelId));
    if (null == l || l.type !== en.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = t - e9.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, s.jsx)(Z, { channel: a, baseChannelId: O.fe }),
    });
}
let tR = (e) => {
    let t = (0, ef.A)();
    return (l.useEffect(() => {
        (0, $.Vh)(o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ec.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(J.Ay, {
              contentTypes: [o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: l, markAsDismissed: a } = n,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(tC.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return l === o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, s.jsx)(u.A, {
                                          ...i,
                                          title: V.intl.string(V.t.hRT8tc),
                                          body: V.intl.string(V.t.apPgJG),
                                          actions: [
                                              { text: V.intl.string(V.t.LNoAQW), onClick: () => a(tC.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, s.jsx)(u.A, {
                                          ...i,
                                          title: V.intl.string(V.t.hRT8tc),
                                          body: V.intl.string(V.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: V.intl.string(V.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, ei.openUserSettings)(
                                                              ea.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          a(tC.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: V.intl.string(V.t.LNoAQW),
                                                  onClick: () => a(tC.i.USER_DISMISS),
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
function tN(e) {
    let { section: t } = e;
    return t === e_.zz.SPAM ? (0, s.jsx)(tp, {}) : (0, s.jsx)(tv, {});
}
let tM = (0, b.A)(function (e) {
    let { width: t } = e,
        n = (0, U.W)();
    (0, _.Ay)(() => {
        C.I(e9.BVt.MESSAGE_REQUESTS),
            (0, es.d)("message-requests"),
            ed.default.track(e9.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            et.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, d.bG)([el.A], () => el.A.theme),
        r = w(),
        [o, u] = l.useState(!1),
        h = (0, d.bG)([O.Ay], () => {
            let e = O.Ay.getSidebarState(O.fe);
            return null != e && e.type === en.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        E = (0, eh.c)(m),
        g = (0, d.bG)([eo.A, eu.default], () => {
            if (null == m) return !1;
            let e = eu.default.getCurrentUser();
            return null != eo.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        x = l.useRef(null);
    l.useEffect(() => {
        null != m && !E && g && A && ((0, L.iN)(m), H.A.closeChannelSidebar(O.fe));
    }, [m, g, A, E]);
    let [S, b] = l.useState(e_.zz.REQUESTS),
        v = (e) => {
            b(e);
        };
    return (
        (0, Y.HU)({ location: V.intl.string(V.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(t_.TE, tb.kL, { [t_.js]: A, [t_.jl]: A && o }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: a,
                            children: (e) =>
                                (0, s.jsxs)(ee.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(ee.A.Icon, { icon: j.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(tR, {
                                            targetElementRef: x,
                                            children: (0, s.jsx)(ee.A.Title, {
                                                ref: x,
                                                children: V.intl.string(V.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(ee.A.Divider, {}),
                                        (0, s.jsxs)(p.V, {
                                            "aria-label": V.intl.string(V.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: v,
                                            children: [
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.REQUESTS,
                                                    className: tb.AS,
                                                    children: V.intl.string(V.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.SPAM,
                                                    className: tb.AS,
                                                    children:
                                                        0 === r
                                                            ? V.intl.string(V.t.ulKXHp)
                                                            : V.intl.formatToPlainString(V.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, s.jsx)("div", { className: t_.Qs, children: (0, s.jsx)(tN, { section: S }) }),
                    ],
                }),
                A &&
                    (0, s.jsx)(tI, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
