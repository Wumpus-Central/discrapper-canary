t.r(n), t.d(n, { default: () => nM });
var s = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(837381),
    c = t(731738),
    o = t(17928),
    d = t(554146),
    u = t(43105),
    h = t(691540),
    m = t(857250),
    A = t(97483),
    g = t(834730),
    E = t(123292),
    x = t(475825),
    S = t(192308),
    f = t(43990),
    j = t(849516),
    p = t(761508),
    C = t(944791),
    b = t(456412),
    _ = t(964486),
    v = t(260762),
    I = t(812771),
    N = t(789645),
    R = t(821609),
    M = t(355622),
    k = t(58736),
    T = t(353428),
    G = t(380335),
    P = t(157550),
    y = t(923457),
    U = t(36149),
    w = t(207560);
let Q = (0, t(945810).mj)({
    name: "2026-06-non-friend-messages-requests-in-uk",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function z(e) {
    let n = (0, U.Dn)(),
        t = (0, w.yv)(y.p.MESSAGE_REQUEST_RESTRICTIONS),
        { enabled: s } = Q.useConfig({ location: e });
    return !n && t && s;
}
var W = t(336590),
    F = t(92650),
    L = t(959698),
    H = t(977347),
    q = t(378570),
    O = t(138298),
    V = t(761640),
    D = t(47167),
    K = t(928078),
    B = t(375708),
    Z = t(906462),
    X = t(669747);
function Y(e) {
    let { channel: n, baseChannelId: t } = e,
        a = (0, D.Ay)(n),
        i = (0, W.k)(),
        r = (0, W.r)(),
        c = (0, o.bG)([G.A], () => G.A.isMessageRequest(n.id)),
        d = (0, o.bG)([P.A], () => P.A.isSpam(n.id)),
        u = z("ViewMessageRequestSidebar") && c && !d,
        E = (0, H.D)(n.id, n.getRecipientId()),
        x = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), c && i && (0, q.iN)(n.id), d && r && (0, q.iN)(n.id);
        }, [n.id, d, r, c, i]),
        S = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: f } = (0, F.t)({ onAcceptSuccess: x, onError: S });
    if (null == n || !n.isDM()) return null;
    let j = [
        (0, s.jsx)(
            k.Ay.Icon,
            { icon: N.P, tooltip: B.intl.string(B.t.cpT0Cq), onClick: () => O.A.closeChannelSidebar(t) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(k.Ay, {
                toolbar: j,
                "aria-label": B.intl.string(B.t.BIYAqa),
                children: (0, T.zF)({ channel: n, channelName: a, inSidebar: !0 }),
            }),
            d &&
                (0, s.jsxs)("div", {
                    className: X.F,
                    children: [
                        (0, s.jsx)(g.E, { variant: "text-sm/normal", children: B.intl.string(B.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: X.$,
                            children: (0, s.jsx)(R.$, {
                                size: "sm",
                                onClick: () => f(n, E),
                                text: B.intl.string(B.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: Z.T,
                children: (0, s.jsx)(L.A.Provider, {
                    value: u,
                    children: (0, s.jsx)(K.A, { channel: n, guild: null, chatInputType: M.oU.SIDEBAR }, n.id),
                }),
            }),
        ],
    });
}
var $ = t(485947),
    J = t(726249),
    ee = t(367727),
    en = t(379848),
    et = t(742589),
    es = t(807393),
    el = t(940382),
    ea = t(210714),
    ei = t(363195),
    er = t(780964),
    ec = t(766075),
    eo = t(734057),
    ed = t(186111),
    eu = t(174459),
    eh = t(232835),
    em = t(287809),
    eA = t(321404),
    eg = t(572009);
function eE() {
    return (0, o.bG)([em.default], () => (0, eg.I9)(em.default.getCurrentUser()));
}
var ex = t(166643),
    eS = t(957283),
    ef = t(411976),
    ej = t(935208);
function ep(e) {
    return e.sort((e, n) => ej.default.compare(e.lastMessageId, n.lastMessageId)).reverse();
}
var eC = t(790499),
    eb = t(396478),
    e_ = t(687599),
    ev = t(867853),
    eI = t(317017),
    eN = t(826223);
function eR(e) {
    let { section: n } = e,
        t = (0, o.bG)([ei.A], () => ei.A.theme);
    return (0, s.jsxs)(eb.pp, {
        theme: t,
        className: ev.y,
        children: [
            (0, s.jsx)(eb.G8, { width: 415, height: 200, lightSrc: eN, darkSrc: eI }),
            (0, s.jsx)(eb.SG, { note: n === e_.zz.SPAM ? B.intl.string(B.t.hasFPQ) : B.intl.string(B.t.SXrqTf) }),
        ],
    });
}
var eM = t(625494),
    ek = t(615300),
    eT = t(187322),
    eG = t(442433),
    eP = t(249611);
let ey = function (e) {
    let {
            index: n,
            children: a,
            user: c,
            channel: o,
            onClick: d,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: A,
        } = e,
        [g, E] = l.useState(!1),
        [x, S] = l.useState(!1);
    function f() {
        E(!0), !u || h || x || m?.();
    }
    function j() {
        E(!1);
    }
    return (0, s.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, s.jsx)(eT.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(ek.A.div, {
                    className: i()(eP.Cf, A, { [eP.vu]: h || x, [eP.CJ]: 0 === n }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eG.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        t.e("71406"),
                                        t.e("94881"),
                                        t.e("26132"),
                                        t.e("46652"),
                                        t.e("93190"),
                                        t.e("8757"),
                                        t.e("23625"),
                                        t.e("54037"),
                                        t.e("89673"),
                                        t.e("29787"),
                                        t.e("82073"),
                                        t.e("97558"),
                                        t.e("91994"),
                                        t.e("76665"),
                                        t.e("76273"),
                                        t.e("24198"),
                                        t.e("32418"),
                                    ]).then(t.bind(t, 668569));
                                    return (n) => (0, s.jsx)(e, { ...n, user: c });
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
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(g || h || x),
                }),
            }),
    });
};
var eU = t(692617),
    ew = t(97808),
    eQ = t(778712),
    ez = t(297413),
    eW = t(775602),
    eF = t(29160),
    eL = t(854378),
    eH = t(571694),
    eq = t(562819),
    eO = t(963977),
    eV = t(994500),
    eD = t(427262),
    eK = t(19575);
t(989349);
var eB = t(707539),
    eZ = t(568548),
    eX = t(978914),
    eY = t(228366),
    e$ = t(841595),
    eJ = t(903209),
    e0 = t(346055),
    e7 = t(863439),
    e6 = t(465364),
    e9 = t(805964),
    e3 = t(302031),
    e4 = t(885386),
    e8 = t(576705),
    e5 = t(652215),
    e2 = t(838541),
    e1 = t(571882),
    ne = t(992595);
let nn = l.memo(function (e) {
    let { channel: n } = e,
        { loaded: t, error: a, message: r } = (0, eX.I)(n),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eV.A],
            () => ({
                isBlocked: null != r && eV.A.isBlockedForMessage(r),
                isIgnored: null != r && eV.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e8.A], () => e8.A.can(e5.xBc.MANAGE_MESSAGES, n)),
        h = e4.gs.useSetting(),
        { content: m } = l.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e6.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        A = null;
    if (a)
        A = (0, s.jsx)(g.E, {
            className: e1.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: B.intl.string(B.t.BZHld2),
        });
    else if (t)
        if (null != r && c)
            A = (0, s.jsx)(g.E, {
                className: e1.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["WPe+xL"]),
            });
        else if (null != r && d)
            A = (0, s.jsx)(g.E, {
                className: e1.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: n } = (0, e9.o)(r, m, c, d, i()(e1.BK, ne.tZ), {
                leadingIconClass: e1.AF,
                trailingIconClass: e1.AF,
                iconSize: e2.eJ,
            });
            A =
                null != n
                    ? (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: e1.BK, children: n })
                    : (0, s.jsx)(g.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e1.G4,
                          children: e,
                      });
        } else
            A = (0, s.jsx)(g.E, {
                className: e1.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["0KfDxM"]),
            });
    else A = null;
    return (0, s.jsx)(e3.Bs.Provider, {
        value: (0, e7.A)(h, u),
        children: (0, s.jsx)(e0.M, { className: e1.JY, children: A }),
    });
});
var nt = t(746345);
let ns = (e) => {
        let n,
            t,
            { userId: a } = e,
            i =
                ((n = (0, o.bG)([em.default], () => em.default.getUser(a))),
                (t = (0, o.yK)([e$.A], () => e$.A.getMutualGuilds(a)?.map((e) => e.guild) ?? [])),
                l.useEffect(() => {
                    0 === t.length &&
                        null != n &&
                        null == e$.A.getMutualGuilds(a) &&
                        eY.h.wait(() => (0, eJ.A)(a, void 0, { withMutualGuilds: !0 }));
                }, [t, n, a]),
                t);
        return null == i || 0 === i.length
            ? (0, s.jsx)(g.E, {
                  className: nt.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: B.intl.string(B.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: nt.I9,
                  children: [
                      (0, s.jsx)(eU.A, { guilds: i, maxGuilds: 3, size: eL.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(g.E, {
                          className: nt.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: B.intl.format(B.t.eE3oep, { count: i.length }),
                      }),
                  ],
              });
    },
    nl = eK.Ay.getEnableHardwareAcceleration() ? ew.Js : ew.eu;
function na(e) {
    let n,
        t,
        { channel: l, otherUser: a, active: i, isRestricted: r = !1 } = e,
        c = (0, o.bG)([eW.Ay], () => eW.Ay.useReducedMotion),
        d = (0, o.bG)([eV.A], () => (null == a ? null : eV.A.getNickname(a.id))),
        u = !c && i,
        h =
            ((n = (0, eX.I)(l)),
            null ==
            (t = (function (e) {
                let { lastMessageId: n, message: t, loaded: s } = e;
                return s && null != t
                    ? ej.default.extractTimestamp(t.id)
                    : null != n
                      ? ej.default.extractTimestamp(n)
                      : null;
            })({ lastMessageId: (0, o.bG)([eZ.Ay], () => eZ.Ay.lastMessageId(l.id)), ...n }))
                ? ""
                : (0, eB.aK)(t)),
        { avatarDecorationSrc: m } = (0, eO.A)({
            user: a,
            size: (0, eq.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(nl, {
                className: nt.my,
                src: (0, eH.Y)(l, 40, u),
                avatarDecoration: m,
                size: eQ._3.SIZE_40,
                "aria-label": a?.username ?? B.intl.string(B.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: nt.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: nt.rU,
                        children: [
                            (0, s.jsx)(ez.A, {
                                nick: d,
                                user: a,
                                showAccountIdentifier: !0,
                                className: nt.I8,
                                usernameClass: nt.Xh,
                                discriminatorClass: null != eD.Ay.getGlobalName(a) ? nt.vl : nt.D2,
                            }),
                            (0, s.jsx)(g.E, {
                                className: nt.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    r
                        ? (0, s.jsx)(ns, { userId: a.id })
                        : (0, s.jsx)(eF.A, {
                              hoverText: (0, s.jsx)(nn, { channel: l }),
                              forceHover: i,
                              children: (0, s.jsx)(ns, { userId: a.id }),
                          }),
                ],
            }),
        ],
    });
}
var ni = t(610602);
function nr(e) {
    let { active: n, user: t, channel: a } = e,
        i = (0, W.k)(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        c = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        o = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), i && (0, q.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: d,
            rejectMessageRequest: u,
            isAcceptLoading: g,
            isRejectLoading: E,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, F.t)({ user: t, onAcceptSuccess: o, onRejectSuccess: c, onError: r }),
        j = g || E || x || S || f;
    return (0, s.jsxs)("div", {
        className: ni.kL,
        children: [
            (0, s.jsx)(na, { channel: a, otherUser: t, active: n }),
            (0, s.jsxs)("div", {
                className: ni.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ni.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.B2nygW),
                            onClick: function (e) {
                                e.stopPropagation(), u(a.id);
                            },
                            disabled: j,
                            loading: E || f,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ni.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.Kz8Pwr),
                            onClick: function (e) {
                                e.stopPropagation(), d(a.id);
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
function nc(e) {
    let { index: n, className: t, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eS.N)();
    return (0, s.jsx)(ey, {
        index: n,
        className: t,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: function (e) {
            e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: V.fe, hasSingleMessageRequest: i }),
                eu.default.track(e5.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e5.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(nr, { active: e, user: a, channel: l }),
    });
}
var no = t(408278),
    nd = t(530005),
    nu = t(493975);
function nh(e) {
    let { active: n, user: a, channel: i, onPreview: r } = e,
        c = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        o = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        {
            rejectMessageRequest: d,
            isRejectLoading: u,
            isOptimisticRejected: g,
        } = (0, F.t)({ user: a, onRejectSuccess: o, onError: c }),
        E = u || g;
    return (0, s.jsxs)("div", {
        className: nu.kL,
        children: [
            (0, s.jsx)(na, { channel: i, otherUser: a, active: n, isRestricted: !0 }),
            (0, s.jsxs)("div", {
                className: nu.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nu.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.BVN4pL),
                            onClick: function (e) {
                                e.stopPropagation(), d(i.id);
                            },
                            disabled: E,
                            loading: u || g,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nu.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.NB4jq8),
                            onClick: r,
                            disabled: E,
                        }),
                    }),
                    (0, s.jsx)(no.K, {
                        variant: "icon-only",
                        size: "sm",
                        icon: nd.F,
                        "aria-label": B.intl.string(B.t.PdRCRg),
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, eG.L3)(e, async () => {
                                    let { default: e } = await Promise.all([t.e("23625"), t.e("75639")]).then(
                                        t.bind(t, 935786),
                                    );
                                    return (n) => (0, s.jsx)(e, { ...n, user: a, channel: i });
                                });
                        },
                        disabled: E,
                    }),
                ],
            }),
        ],
    });
}
function nm(e) {
    let { index: n, className: t, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eS.N)();
    function c(e) {
        e.stopPropagation(),
            O.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: V.fe, hasSingleMessageRequest: i }),
            eu.default.track(e5.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                is_spam: !1,
                channel_id: l.id,
                other_user_id: a.id,
            }),
            setTimeout(() => {
                eM._.dispatch(e5.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
            }, 0);
    }
    return (0, s.jsx)(ey, {
        index: n,
        className: t,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: c,
        children: (e) => (0, s.jsx)(nh, { active: e, user: a, channel: l, onPreview: c }),
    });
}
var nA = t(308528),
    ng = t(928658);
function nE(e) {
    let { channel: n, onReportClick: t, onReportSubmit: l, onMouseEnter: a, onMouseLeave: i } = e,
        { error: r, loaded: c, message: o } = (0, eX.I)(n);
    if (null == o && (c || r)) return null;
    function d() {
        l?.(), nA.A.closePrivateChannel(n.id);
    }
    return (0, s.jsx)(R.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: (e) => {
            e.stopPropagation(), t?.(), null != o && (0, ng.b8)(o, d);
        },
        onMouseEnter: a,
        onMouseLeave: i,
        text: B.intl.string(B.t.HHZmDn),
    });
}
var nx = t(303835);
function nS(e) {
    let { active: n, user: t, channel: a } = e,
        i = (0, W.r)(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE)),
                es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        o = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), i && (0, q.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: g,
            isUserProfileLoading: E,
            isOptimisticAccepted: x,
        } = (0, F.t)({ user: t, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        S = g || E,
        f = S || x;
    return (0, s.jsxs)("div", {
        className: nx.kL,
        children: [
            (0, s.jsx)(na, { otherUser: t, channel: a, active: n }),
            (0, s.jsxs)("div", {
                className: nx.o1,
                children: [
                    (0, s.jsx)(R.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.vicfl6),
                        onClick: function (e) {
                            u(a.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: S,
                    }),
                    (0, s.jsx)(nE, { channel: a }),
                ],
            }),
        ],
    });
}
function nf(e) {
    let { index: n, className: t, channel: l, user: a, hasSingleMessageRequest: i } = e;
    return (0, s.jsx)(ey, {
        index: n,
        className: t,
        isFocused: !1,
        channel: l,
        user: a,
        onClick: function (e) {
            e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: V.fe, hasSingleMessageRequest: i }),
                eu.default.track(e5.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    eM._.dispatch(e5.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(nS, { active: e, user: a, channel: l }),
    });
}
var nj = t(900425);
function np() {
    let e,
        n,
        t,
        a = l.useRef(null),
        d =
            ((e = (0, o.bG)([eo.A], () => eo.A.getPrivateChannelsVersion())),
            (n = (0, o.yK)([eo.A, P.A], () => {
                let e = eo.A.getMutablePrivateChannels();
                return ep(
                    Array.from(P.A.getSpamChannelIds())
                        .map((n) => e[n])
                        .filter((e) => null != e),
                );
            }, [e])),
            (t = (0, o.cf)([em.default], () => {
                let e = {};
                return (
                    n.forEach((n) => {
                        let t = em.default.getUser(n.recipients[0]);
                        null != t && (e[n.id] = t);
                    }),
                    e
                );
            }, [n])),
            l.useMemo(() => n.map((e) => ({ channel: e, user: t[e.id] })), [n, t])),
        u = (0, eC.I)(),
        S = (0, W.r)(),
        f = eE(),
        j = (0, v.A)("message-requests-spam-list"),
        { channelId: p } = (0, eS.N)(),
        C = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, F.t)({ onError: C }),
        I = l.useCallback(() => {
            b(d.map((e) => e.channel.id));
        }, [d, b]);
    (0, _.Ay)(() => {
        eu.default.track(e5.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let N = l.useCallback(
            (e) => {
                let { row: n } = e,
                    t = d[n],
                    l = d[n + 1]?.channel?.id,
                    a = t.channel.id;
                return (0, s.jsx)(
                    nf,
                    {
                        index: n,
                        className: i()({ [nj.wH]: null != p && p === a, [nj.wZ]: null != p && p === l }),
                        channel: t.channel,
                        user: t.user,
                        hasSingleMessageRequest: S,
                    },
                    a,
                );
            },
            [d, S, p],
        ),
        R = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: nj.Gf,
                        children: [
                            B.intl.format(B.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: nj.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(E.Q, {
                                              textVariant: "text-sm/normal",
                                              text: B.intl.string(B.t.p6t7RC),
                                              onClick: I,
                                              "aria-label": B.intl.string(B.t.p6t7RC),
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
    return 0 === d.length
        ? (0, s.jsx)(eR, { section: e_.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: j,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: n, role: t, ...l } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: nj.p_,
                              innerRole: t,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (n.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: R,
                              renderRow: N,
                              sections: [d.length],
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
var nC = t(49999),
    nb = t(267899),
    n_ = t(964623);
function nv() {
    let e,
        n,
        t,
        a = l.useRef(null),
        d = (0, ef.W)(),
        u =
            ((e = (0, o.bG)([eo.A], () => eo.A.getPrivateChannelsVersion())),
            (n = (0, o.yK)([eo.A, G.A], () => {
                let e = eo.A.getMutablePrivateChannels();
                return ep(
                    Array.from(G.A.getMessageRequestChannelIds())
                        .map((n) => e[n])
                        .filter((e) => null != e),
                );
            }, [e])),
            (t = (0, o.cf)([em.default], () => {
                let e = {};
                return (
                    n.forEach((n) => {
                        let t = em.default.getUser(n.recipients[0]);
                        null != t && (e[n.id] = t);
                    }),
                    e
                );
            }, [n])),
            l.useMemo(() => n.map((e) => ({ channel: e, user: t[e.id] })), [n, t])),
        S = (0, W.k)(),
        f = eE(),
        j = z("MessageRequestPage"),
        p = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: C } = (0, F.t)({ onError: p }),
        b = (0, v.A)("message-requests-list"),
        { channelId: _ } = (0, eS.N)(),
        I = l.useCallback(() => {
            C(u.map((e) => e.channel.id));
        }, [u, C]),
        N = l.useCallback(
            (e) => {
                let { row: n } = e,
                    t = u[n],
                    l = u[n + 1]?.channel?.id,
                    a = t.channel.id,
                    r = i()({ [nb.wH]: null != _ && _ === a, [nb.wZ]: null != _ && _ === l });
                return j
                    ? (0, s.jsx)(
                          nm,
                          { index: n, className: r, channel: t.channel, user: t.user, hasSingleMessageRequest: S },
                          a,
                      )
                    : (0, s.jsx)(
                          nc,
                          { index: n, className: r, channel: t.channel, user: t.user, hasSingleMessageRequest: S },
                          a,
                      );
            },
            [S, j, u, _],
        ),
        R = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: nb.Gf,
                        children: [
                            d > 0 ? B.intl.formatToPlainString(B.t.rA4iWY, { count: d }) : B.intl.string(B.t.flPU6g),
                            f && d > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: nb.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, s.jsx)(E.Q, {
                                              onClick: I,
                                              textVariant: "text-sm/normal",
                                              text: B.intl.string(B.t.p6t7RC),
                                              "aria-label": B.intl.string(B.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [d, I, f],
        );
    return (u.length !== d && es.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(eR, { section: e_.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: b,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: n, role: t, ...l } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: nb.p_,
                              innerRole: t,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (n.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: R,
                              renderRow: N,
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
function nI(e) {
    let { pageWidth: n, onSidebarResize: t } = e,
        l = (0, o.bG)([V.Ay], () => V.Ay.getSidebarState(V.fe)),
        a = (0, o.bG)([eo.A], () => eo.A.getChannel(l?.channelId));
    if (null == l || l.type !== el.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = n - e5.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: t,
        children: (0, s.jsx)(Y, { channel: a, baseChannelId: V.fe }),
    });
}
function nN(e) {
    let n = (0, ex.A)();
    return (l.useEffect(() => {
        (0, ee.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ed.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(en.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (t) => {
                  let { visibleContent: l, markAsDismissed: a } = t,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(nC.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return l === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                n
                                    ? (0, s.jsx)(u.A, {
                                          ...i,
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t.apPgJG),
                                          actions: [
                                              { text: B.intl.string(B.t.LNoAQW), onClick: () => a(nC.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, s.jsx)(u.A, {
                                          ...i,
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: B.intl.string(B.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      e.stopPropagation(),
                                                          (0, ec.openUserSettings)(
                                                              er.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          a(nC.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: B.intl.string(B.t.LNoAQW),
                                                  onClick: () => a(nC.i.USER_DISMISS),
                                                  variant: "secondary",
                                              },
                                          ],
                                      }),
                            ],
                        })
                      : e.children;
              },
          });
}
function nR(e) {
    let { section: n } = e;
    return n === e_.zz.SPAM ? (0, s.jsx)(np, {}) : (0, s.jsx)(nv, {});
}
let nM = (0, b.A)(function (e) {
    let { width: n } = e,
        t = (0, ef.W)();
    (0, _.Ay)(() => {
        C.I(e5.BVt.MESSAGE_REQUESTS),
            (0, ea.d)("message-requests"),
            eu.default.track(e5.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: t }),
            es.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, o.bG)([ei.A], () => ei.A.theme),
        r = (0, eC.I)(),
        [d, u] = l.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === el.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        g = (0, eA.c)(m),
        E = (0, o.bG)([eh.A, em.default], () => {
            if (null == m) return !1;
            let e = em.default.getCurrentUser();
            return null != eh.A.getMessages(m).findNewest((n) => n.author.id === e?.id);
        }),
        x = l.useRef(null);
    l.useEffect(() => {
        null != m && !g && E && A && ((0, q.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, E, A, g]);
    let [S, b] = l.useState(e_.zz.REQUESTS);
    function v(e) {
        b(e);
    }
    return (
        (0, J.HU)({ location: B.intl.string(B.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(n_.TE, nb.kL, { [n_.js]: A, [n_.jl]: A && d }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: a,
                            children: (e) =>
                                (0, s.jsxs)(et.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(et.A.Icon, { icon: j.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(nN, {
                                            targetElementRef: x,
                                            children: (0, s.jsx)(et.A.Title, {
                                                ref: x,
                                                children: B.intl.string(B.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(et.A.Divider, {}),
                                        (0, s.jsxs)(p.V, {
                                            "aria-label": B.intl.string(B.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: v,
                                            children: [
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.REQUESTS,
                                                    className: nb.AS,
                                                    children: B.intl.string(B.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.SPAM,
                                                    className: nb.AS,
                                                    children:
                                                        0 === r
                                                            ? B.intl.string(B.t.ulKXHp)
                                                            : B.intl.formatToPlainString(B.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, s.jsx)("div", { className: n_.Qs, children: (0, s.jsx)(nR, { section: S }) }),
                    ],
                }),
                A &&
                    (0, s.jsx)(nI, {
                        pageWidth: n,
                        onSidebarResize: function (e, n) {
                            u(n);
                        },
                    }),
            ],
        })
    );
});
