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
    g = n(834730),
    E = n(123292),
    x = n(475825),
    S = n(192308),
    j = n(43990),
    f = n(849516),
    p = n(761508),
    C = n(944791),
    b = n(456412),
    _ = n(964486),
    v = n(260762),
    I = n(812771),
    N = n(789645),
    R = n(821609),
    M = n(355622),
    k = n(58736),
    T = n(353428),
    G = n(380335),
    P = n(157550),
    y = n(923457),
    U = n(36149),
    w = n(207560);
let Q = (0, n(945810).mj)({
    name: "2026-06-non-friend-messages-requests-in-uk",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function z(e) {
    let t = (0, U.Dn)(),
        n = (0, w.yv)(y.p.MESSAGE_REQUEST_RESTRICTIONS),
        { enabled: s } = Q.useConfig({ location: e });
    return !t && n && s;
}
var W = n(336590),
    F = n(92650),
    L = n(959698),
    H = n(977347),
    q = n(378570),
    O = n(138298),
    V = n(761640),
    D = n(47167),
    K = n(928078),
    B = n(375708),
    Z = n(906462),
    X = n(669747);
function Y(e) {
    let { channel: t, baseChannelId: n } = e,
        a = (0, D.Ay)(t),
        i = (0, W.k)(),
        r = (0, W.r)(),
        c = (0, d.bG)([G.A], () => G.A.isMessageRequest(t.id)),
        o = (0, d.bG)([P.A], () => P.A.isSpam(t.id)),
        u = z("ViewMessageRequestSidebar") && c && !o,
        E = (0, H.D)(t.id, t.getRecipientId()),
        x = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), c && i && (0, q.iN)(t.id), o && r && (0, q.iN)(t.id);
        }, [t.id, o, r, c, i]),
        S = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: j } = (0, F.t)({ onAcceptSuccess: x, onError: S });
    if (null == t || !t.isDM()) return null;
    let f = [
        (0, s.jsx)(
            k.Ay.Icon,
            { icon: N.P, tooltip: B.intl.string(B.t.cpT0Cq), onClick: () => O.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(k.Ay, {
                toolbar: f,
                "aria-label": B.intl.string(B.t.BIYAqa),
                children: (0, T.zF)({ channel: t, channelName: a, inSidebar: !0 }),
            }),
            o &&
                (0, s.jsxs)("div", {
                    className: X.F,
                    children: [
                        (0, s.jsx)(g.E, { variant: "text-sm/normal", children: B.intl.string(B.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: X.$,
                            children: (0, s.jsx)(R.$, {
                                size: "sm",
                                onClick: () => j(t, E),
                                text: B.intl.string(B.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: Z.T,
                children: (0, s.jsx)(L.A.Provider, {
                    value: u,
                    children: (0, s.jsx)(K.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
                }),
            }),
        ],
    });
}
var $ = n(485947),
    J = n(726249),
    ee = n(367727),
    et = n(379848),
    en = n(742589),
    es = n(807393),
    el = n(940382),
    ea = n(210714),
    ei = n(363195),
    er = n(780964),
    ec = n(766075),
    ed = n(734057),
    eo = n(186111),
    eu = n(174459),
    eh = n(232835),
    em = n(287809),
    eA = n(321404),
    eg = n(572009);
function eE() {
    return (0, d.bG)([em.default], () => (0, eg.I9)(em.default.getCurrentUser()));
}
var ex = n(166643),
    eS = n(957283),
    ej = n(411976),
    ef = n(935208);
function ep(e) {
    return e.sort((e, t) => ef.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var eC = n(790499),
    eb = n(396478),
    e_ = n(687599),
    ev = n(867853),
    eI = n(317017),
    eN = n(826223);
function eR(e) {
    let { section: t } = e,
        n = (0, d.bG)([ei.A], () => ei.A.theme);
    return (0, s.jsxs)(eb.pp, {
        theme: n,
        className: ev.y,
        children: [
            (0, s.jsx)(eb.G8, { width: 415, height: 200, lightSrc: eN, darkSrc: eI }),
            (0, s.jsx)(eb.SG, { note: t === e_.zz.SPAM ? B.intl.string(B.t.hasFPQ) : B.intl.string(B.t.SXrqTf) }),
        ],
    });
}
var eM = n(625494),
    ek = n(615300),
    eT = n(187322),
    eG = n(442433),
    eP = n(249611);
let ey = function (e) {
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
        [g, E] = l.useState(!1),
        [x, S] = l.useState(!1),
        j = () => {
            E(!0), !u || h || x || m?.();
        },
        f = () => {
            E(!1);
        };
    return (0, s.jsx)(r.tG, {
        id: d.id,
        children: (e) =>
            (0, s.jsx)(eT.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(ek.A.div, {
                    className: i()(eP.Cf, A, { [eP.vu]: h || x, [eP.CJ]: 0 === t }),
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
                    onMouseEnter: j,
                    onMouseLeave: f,
                    onClick: o ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(g || h || x),
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
    eq = n(562819),
    eO = n(963977),
    eV = n(994500),
    eD = n(427262),
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
    e9 = n(805964),
    e3 = n(302031),
    e4 = n(885386),
    e8 = n(576705),
    e5 = n(652215),
    e2 = n(838541),
    e1 = n(571882),
    te = n(992595);
let tt = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: r } = (0, eX.I)(t),
        { isBlocked: c, isIgnored: o } = (0, d.cf)(
            [eV.A],
            () => ({
                isBlocked: null != r && eV.A.isBlockedForMessage(r),
                isIgnored: null != r && eV.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, d.bG)([e8.A], () => e8.A.can(e5.xBc.MANAGE_MESSAGES, t)),
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
    else if (n)
        if (null != r && c)
            A = (0, s.jsx)(g.E, {
                className: e1.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["WPe+xL"]),
            });
        else if (null != r && o)
            A = (0, s.jsx)(g.E, {
                className: e1.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e9.o)(r, m, c, o, i()(e1.BK, te.tZ), {
                leadingIconClass: e1.AF,
                trailingIconClass: e1.AF,
                iconSize: e2.eJ,
            });
            A =
                null != t
                    ? (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: e1.BK, children: t })
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
var tn = n(746345);
let ts = (e) => {
        let t,
            n,
            { userId: a } = e,
            i =
                ((t = (0, d.bG)([em.default], () => em.default.getUser(a))),
                (n = (0, d.yK)([e$.A], () => e$.A.getMutualGuilds(a)?.map((e) => e.guild) ?? [])),
                l.useEffect(() => {
                    0 === n.length &&
                        null != t &&
                        null == e$.A.getMutualGuilds(a) &&
                        eY.h.wait(() => (0, eJ.A)(a, void 0, { withMutualGuilds: !0 }));
                }, [n, t, a]),
                n);
        return null == i || 0 === i.length
            ? (0, s.jsx)(g.E, {
                  className: tn.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: B.intl.string(B.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: tn.I9,
                  children: [
                      (0, s.jsx)(eU.A, { guilds: i, maxGuilds: 3, size: eL.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(g.E, {
                          className: tn.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: B.intl.format(B.t.eE3oep, { count: i.length }),
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
        o = (0, d.bG)([eV.A], () => (null == a ? null : eV.A.getNickname(a.id))),
        u = !c && i,
        h =
            ((t = (0, eX.I)(l)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: s } = e;
                return s && null != n
                    ? ef.default.extractTimestamp(n.id)
                    : null != t
                      ? ef.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, d.bG)([eZ.Ay], () => eZ.Ay.lastMessageId(l.id)), ...t }))
                ? ""
                : (0, eB.aK)(n)),
        { avatarDecorationSrc: m } = (0, eO.A)({
            user: a,
            size: (0, eq.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tl, {
                className: tn.my,
                src: (0, eH.Y)(l, 40, u),
                avatarDecoration: m,
                size: eQ._3.SIZE_40,
                "aria-label": a?.username ?? B.intl.string(B.t["30mdIx"]),
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
                                discriminatorClass: null != eD.Ay.getGlobalName(a) ? tn.vl : tn.D2,
                            }),
                            (0, s.jsx)(g.E, {
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
        i = (0, W.k)(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        c = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), i && (0, q.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: o,
            rejectMessageRequest: u,
            isAcceptLoading: g,
            isRejectLoading: E,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: j,
        } = (0, F.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: c, onError: r }),
        f = g || E || x || S || j;
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
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), u(a.id);
                            },
                            disabled: f,
                            loading: E || j,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), o(a.id);
                            },
                            disabled: f,
                            loading: g || x || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tc(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eS.N)();
    return (0, s.jsx)(ey, {
        index: t,
        className: n,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: (e) => {
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
        children: (e) => (0, s.jsx)(tr, { active: e, user: a, channel: l }),
    });
}
var td = n(408278),
    to = n(530005),
    tu = n(493975);
function th(e) {
    let { active: t, user: a, channel: i, onPreview: r } = e,
        c = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        d = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        {
            rejectMessageRequest: o,
            isRejectLoading: u,
            isOptimisticRejected: g,
        } = (0, F.t)({ user: a, onRejectSuccess: d, onError: c }),
        E = u || g;
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
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.BVN4pL),
                            onClick: (e) => {
                                e.stopPropagation(), o(i.id);
                            },
                            disabled: E,
                            loading: u || g,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tu.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.NB4jq8),
                            onClick: r,
                            disabled: E,
                        }),
                    }),
                    (0, s.jsx)(td.K, {
                        variant: "icon-only",
                        size: "sm",
                        icon: to.F,
                        "aria-label": B.intl.string(B.t.PdRCRg),
                        onClick: (e) => {
                            e.stopPropagation(),
                                (0, eG.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("23625"), n.e("75639")]).then(
                                        n.bind(n, 935786),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t, user: a, channel: i });
                                });
                        },
                        disabled: E,
                    }),
                ],
            }),
        ],
    });
}
function tm(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eS.N)(),
        c = (e) => {
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
        };
    return (0, s.jsx)(ey, {
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
    tg = n(928658);
function tE(e) {
    let { channel: t, onReportClick: n, onReportSubmit: l, onMouseEnter: a, onMouseLeave: i } = e,
        { error: r, loaded: c, message: d } = (0, eX.I)(t);
    if (null == d && (c || r)) return null;
    let o = () => {
        l?.(), tA.A.closePrivateChannel(t.id);
    };
    return (0, s.jsx)(R.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == d,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != d && (0, tg.b8)(d, o);
        },
        onMouseEnter: a,
        onMouseLeave: i,
        text: B.intl.string(B.t.HHZmDn),
    });
}
var tx = n(303835);
function tS(e) {
    let { active: t, user: n, channel: a } = e,
        i = (0, W.r)(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), A.Ck.FAILURE)),
                es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        d = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        o = l.useCallback(() => {
            O.A.closeChannelSidebar(V.fe), i && (0, q.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: g,
            isUserProfileLoading: E,
            isOptimisticAccepted: x,
        } = (0, F.t)({ user: n, onAcceptSuccess: o, onRejectSuccess: d, onError: r }),
        S = g || E,
        j = S || x;
    return (0, s.jsxs)("div", {
        className: tx.kL,
        children: [
            (0, s.jsx)(ta, { otherUser: n, channel: a, active: t }),
            (0, s.jsxs)("div", {
                className: tx.o1,
                children: [
                    (0, s.jsx)(R.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.vicfl6),
                        onClick: (e) => {
                            u(a.id), e.stopPropagation();
                        },
                        disabled: j,
                        loading: S,
                    }),
                    (0, s.jsx)(tE, { channel: a }),
                ],
            }),
        ],
    });
}
function tj(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e;
    return (0, s.jsx)(ey, {
        index: t,
        className: n,
        isFocused: !1,
        channel: l,
        user: a,
        onClick: (e) => {
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
        children: (e) => (0, s.jsx)(tS, { active: e, user: a, channel: l }),
    });
}
var tf = n(900425);
function tp() {
    let e,
        t,
        n,
        a = l.useRef(null),
        o =
            ((e = (0, d.bG)([ed.A], () => ed.A.getPrivateChannelsVersion())),
            (t = (0, d.yK)([ed.A, P.A], () => {
                let e = ed.A.getMutablePrivateChannels();
                return ep(
                    Array.from(P.A.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, d.cf)([em.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = em.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = (0, eC.I)(),
        S = (0, W.r)(),
        j = eE(),
        f = (0, v.A)("message-requests-spam-list"),
        { channelId: p } = (0, eS.N)(),
        C = l.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, F.t)({ onError: C }),
        I = l.useCallback(() => {
            b(o.map((e) => e.channel.id));
        }, [o, b]);
    (0, _.Ay)(() => {
        eu.default.track(e5.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            es.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let N = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = o[t],
                    l = o[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, s.jsx)(
                    tj,
                    {
                        index: t,
                        className: i()({ [tf.wH]: null != p && p === a, [tf.wZ]: null != p && p === l }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    a,
                );
            },
            [o, S, p],
        ),
        R = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: tf.Gf,
                        children: [
                            B.intl.format(B.t.C79Edh, { count: u }),
                            j && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tf.sg,
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
            [u, I, j],
        );
    return 0 === o.length
        ? (0, s.jsx)(eR, { section: e_.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: f,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: tf.p_,
                              innerRole: n,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: R,
                              renderRow: N,
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
        o = (0, ej.W)(),
        u =
            ((e = (0, d.bG)([ed.A], () => ed.A.getPrivateChannelsVersion())),
            (t = (0, d.yK)([ed.A, G.A], () => {
                let e = ed.A.getMutablePrivateChannels();
                return ep(
                    Array.from(G.A.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, d.cf)([em.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = em.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        S = (0, W.k)(),
        j = eE(),
        f = z("MessageRequestPage"),
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
                let { row: t } = e,
                    n = u[t],
                    l = u[t + 1]?.channel?.id,
                    a = n.channel.id,
                    r = i()({ [tb.wH]: null != _ && _ === a, [tb.wZ]: null != _ && _ === l });
                return f
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
            [S, f, u, _],
        ),
        R = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: tb.Gf,
                        children: [
                            o > 0 ? B.intl.formatToPlainString(B.t.rA4iWY, { count: o }) : B.intl.string(B.t.flPU6g),
                            j && o > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tb.sg,
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
            [o, I, j],
        );
    return (u.length !== o && es.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(eR, { section: e_.zz.REQUESTS })
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
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
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
function tI(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, d.bG)([V.Ay], () => V.Ay.getSidebarState(V.fe)),
        a = (0, d.bG)([ed.A], () => ed.A.getChannel(l?.channelId));
    if (null == l || l.type !== el.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = t - e5.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, s.jsx)(Y, { channel: a, baseChannelId: V.fe }),
    });
}
let tN = (e) => {
    let t = (0, ex.A)();
    return (l.useEffect(() => {
        (0, ee.Vh)(o.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || eo.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(et.Ay, {
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
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t.apPgJG),
                                          actions: [
                                              { text: B.intl.string(B.t.LNoAQW), onClick: () => a(tC.i.TAKE_ACTION) },
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
                                                          a(tC.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: B.intl.string(B.t.LNoAQW),
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
function tR(e) {
    let { section: t } = e;
    return t === e_.zz.SPAM ? (0, s.jsx)(tp, {}) : (0, s.jsx)(tv, {});
}
let tM = (0, b.A)(function (e) {
    let { width: t } = e,
        n = (0, ej.W)();
    (0, _.Ay)(() => {
        C.I(e5.BVt.MESSAGE_REQUESTS),
            (0, ea.d)("message-requests"),
            eu.default.track(e5.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            es.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, d.bG)([ei.A], () => ei.A.theme),
        r = (0, eC.I)(),
        [o, u] = l.useState(!1),
        h = (0, d.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === el.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        g = (0, eA.c)(m),
        E = (0, d.bG)([eh.A, em.default], () => {
            if (null == m) return !1;
            let e = em.default.getCurrentUser();
            return null != eh.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        x = l.useRef(null);
    l.useEffect(() => {
        null != m && !g && E && A && ((0, q.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, E, A, g]);
    let [S, b] = l.useState(e_.zz.REQUESTS),
        v = (e) => {
            b(e);
        };
    return (
        (0, J.HU)({ location: B.intl.string(B.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(t_.TE, tb.kL, { [t_.js]: A, [t_.jl]: A && o }),
                    children: [
                        (0, s.jsx)(j.N, {
                            theme: a,
                            children: (e) =>
                                (0, s.jsxs)(en.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(en.A.Icon, { icon: f.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(tN, {
                                            targetElementRef: x,
                                            children: (0, s.jsx)(en.A.Title, {
                                                ref: x,
                                                children: B.intl.string(B.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(en.A.Divider, {}),
                                        (0, s.jsxs)(p.V, {
                                            "aria-label": B.intl.string(B.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: v,
                                            children: [
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.REQUESTS,
                                                    className: tb.AS,
                                                    children: B.intl.string(B.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(p.V.Item, {
                                                    id: e_.zz.SPAM,
                                                    className: tb.AS,
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
                        (0, s.jsx)("div", { className: t_.Qs, children: (0, s.jsx)(tR, { section: S }) }),
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
