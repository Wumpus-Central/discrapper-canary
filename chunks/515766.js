"use strict";
n.r(t), n.d(t, { default: () => tE });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(691540),
    m = n(857250),
    g = n(97483),
    _ = n(834730),
    A = n(123292),
    x = n(475825),
    S = n(192308),
    f = n(43990),
    E = n(849516),
    b = n(761508),
    p = n(944791),
    j = n(456412),
    v = n(964486),
    C = n(260762),
    I = n(140130),
    N = n(789645),
    R = n(821609),
    M = n(355622),
    T = n(58736),
    y = n(683442),
    G = n(380335),
    k = n(157550),
    P = n(724442),
    L = n(411976);
function U() {
    return (0, o.bG)([k.A], () => k.A.getSpamChannelsCount());
}
function z() {
    let e = (0, L.W)(),
        t = a.useRef(e),
        n = (0, o.bG)([G.A], () => G.A.isReady()),
        s = a.useRef(n);
    return (
        a.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
function w() {
    let e = U(),
        t = a.useRef(e),
        n = (0, o.bG)([k.A], () => k.A.isReady()),
        s = a.useRef(n);
    return (
        a.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
var W = n(92650),
    O = n(977347),
    D = n(378570),
    H = n(138298),
    F = n(761640),
    Q = n(47167),
    V = n(806202),
    B = n(985018),
    K = n(906462),
    q = n(669747);
function Z(e) {
    let { channel: t, baseChannelId: n } = e,
        l = (0, Q.Ay)(t),
        i = z(),
        r = w(),
        c = (0, o.bG)([G.A], () => G.A.isMessageRequest(t.id)),
        d = (0, o.bG)([k.A], () => k.A.isSpam(t.id)),
        u = (0, O.D)(t.id, t.getRecipientId()),
        A = a.useCallback(() => {
            H.A.closeChannelSidebar(F.fe), c && i && (0, D.iN)(t.id), d && r && (0, D.iN)(t.id);
        }, [t.id, d, r, c, i]),
        x = a.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), g.Ck.FAILURE));
        }, []),
        { markAsNotSpam: S } = (0, W.t)({ onAcceptSuccess: A, onError: x });
    if (null == t || !t.isDM()) return null;
    let f = [
        (0, s.jsx)(
            T.Ay.Icon,
            { icon: N.P, tooltip: B.intl.string(B.t.cpT0Cq), onClick: () => H.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.Ay, {
                toolbar: f,
                "aria-label": B.intl.string(B.t.BIYAqa),
                children: (0, y.zF)({ channel: t, channelName: l, inSidebar: !0 }),
            }),
            d &&
                (0, s.jsxs)("div", {
                    className: q.F,
                    children: [
                        (0, s.jsx)(_.E, { variant: "text-sm/normal", children: B.intl.string(B.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: q.$,
                            children: (0, s.jsx)(R.$, {
                                size: "sm",
                                onClick: () => S(t, u),
                                text: B.intl.string(B.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: K.T,
                children: (0, s.jsx)(V.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var X = n(485947),
    $ = n(726249),
    J = n(367727),
    Y = n(379848),
    ee = n(742589),
    et = n(831062),
    en = n(940382),
    es = n(210714),
    ea = n(363195),
    el = n(780964),
    ei = n(858897),
    er = n(734057),
    ec = n(186111),
    eo = n(954571),
    ed = n(232835),
    eu = n(287809),
    eh = n(321404),
    em = n(572009);
function eg() {
    return (0, o.bG)([eu.default], () => (0, em.I9)(eu.default.getCurrentUser()));
}
var e_ = n(166643),
    eA = n(957283),
    ex = n(935208);
function eS(e) {
    return e.sort((e, t) => ex.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(396478),
    eE = n(687599),
    eb = n(867853),
    ep = n(317017),
    ej = n(826223);
function ev(e) {
    let { section: t } = e,
        n = (0, o.bG)([ea.A], () => ea.A.theme);
    return (0, s.jsxs)(ef.pp, {
        theme: n,
        className: eb.y,
        children: [
            (0, s.jsx)(ef.G8, { width: 415, height: 200, lightSrc: ej, darkSrc: ep }),
            (0, s.jsx)(ef.SG, { note: t === eE.zz.SPAM ? B.intl.string(B.t.hasFPQ) : B.intl.string(B.t.SXrqTf) }),
        ],
    });
}
var eC = n(625494),
    eI = n(615300),
    eN = n(187322),
    eR = n(442433),
    eM = n(249611);
let eT = function (e) {
    let {
            index: t,
            children: l,
            user: c,
            channel: o,
            onClick: d,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: g,
        } = e,
        [_, A] = a.useState(!1),
        [x, S] = a.useState(!1),
        f = () => {
            A(!0), !u || h || x || m?.();
        },
        E = () => {
            A(!1);
        };
    return (0, s.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, s.jsx)(eN.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(eI.A.div, {
                    className: i()(eM.Cf, g, { [eM.vu]: h || x, [eM.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eR.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("32418"),
                                        n.e("9367"),
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
                    onMouseLeave: E,
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: l(_ || h || x),
                }),
            }),
    });
};
var ey = n(692617),
    eG = n(97808),
    ek = n(778712),
    eP = n(297413),
    eL = n(775602),
    eU = n(29160),
    ez = n(854378),
    ew = n(571694),
    eW = n(562819),
    eO = n(963977),
    eD = n(994500),
    eH = n(427262),
    eF = n(19575);
n(989349);
var eQ = n(707539),
    eV = n(222823),
    eB = n(978914),
    eK = n(228366),
    eq = n(841595),
    eZ = n(576622),
    eX = n(247928),
    e$ = n(863439),
    eJ = n(465364),
    eY = n(805964),
    e0 = n(302031),
    e8 = n(253932),
    e1 = n(576705),
    e2 = n(652215),
    e4 = n(838541),
    e6 = n(571882),
    e7 = n(992595);
let e3 = a.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: r } = (0, eB.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eD.A],
            () => ({
                isBlocked: null != r && eD.A.isBlockedForMessage(r),
                isIgnored: null != r && eD.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e1.A], () => e1.A.can(e2.xBc.MANAGE_MESSAGES, t)),
        h = e8.gs.useSetting(),
        { content: m } = a.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, eJ.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        g = null;
    if (l)
        g = (0, s.jsx)(_.E, {
            className: e6.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: B.intl.string(B.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            g = (0, s.jsx)(_.E, {
                className: e6.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["WPe+xL"]),
            });
        else if (null != r && d)
            g = (0, s.jsx)(_.E, {
                className: e6.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, eY.o)(r, m, c, d, i()(e6.BK, e7.tZ), {
                leadingIconClass: e6.AF,
                trailingIconClass: e6.AF,
                iconSize: e4.eJ,
            });
            g =
                null != t
                    ? (0, s.jsx)(_.E, { variant: "text-sm/normal", color: "text-muted", className: e6.BK, children: t })
                    : (0, s.jsx)(_.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e6.G4,
                          children: e,
                      });
        } else
            g = (0, s.jsx)(_.E, {
                className: e6.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: B.intl.string(B.t["0KfDxM"]),
            });
    else g = null;
    return (0, s.jsx)(e0.Bs.Provider, {
        value: (0, e$.A)(h, u),
        children: (0, s.jsx)(eX.M, { className: e6.JY, children: g }),
    });
});
var e9 = n(746345);
let e5 = (e) => {
        let t,
            n,
            { userId: l } = e,
            i =
                ((t = (0, o.bG)([eu.default], () => eu.default.getUser(l))),
                (n = (0, o.yK)([eq.A], () => eq.A.getMutualGuilds(l)?.map((e) => e.guild) ?? [])),
                a.useEffect(() => {
                    0 === n.length &&
                        null != t &&
                        null == eq.A.getMutualGuilds(l) &&
                        eK.h.wait(() => (0, eZ.A)(l, void 0, { withMutualGuilds: !0 }));
                }, [n, t, l]),
                n);
        return null == i || 0 === i.length
            ? (0, s.jsx)(_.E, {
                  className: e9.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: B.intl.string(B.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: e9.I9,
                  children: [
                      (0, s.jsx)(ey.A, { guilds: i, maxGuilds: 3, size: ez.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(_.E, {
                          className: e9.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: B.intl.format(B.t.eE3oep, { count: i.length }),
                      }),
                  ],
              });
    },
    te = eF.Ay.getEnableHardwareAcceleration() ? eG.Js : eG.eu;
function tt(e) {
    let t,
        n,
        { channel: a, otherUser: l, active: i } = e,
        r = (0, o.bG)([eL.A], () => eL.A.useReducedMotion),
        c = (0, o.bG)([eD.A], () => (null == l ? null : eD.A.getNickname(l.id))),
        d = !r && i,
        u =
            ((t = (0, eB.I)(a)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: s } = e;
                return s && null != n
                    ? ex.default.extractTimestamp(n.id)
                    : null != t
                      ? ex.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eV.Ay], () => eV.Ay.lastMessageId(a.id)), ...t }))
                ? ""
                : (0, eQ.aK)(n)),
        { avatarDecorationSrc: h } = (0, eO.A)({
            user: l,
            size: (0, eW.Te)(ek._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(te, {
                className: e9.my,
                src: (0, ew.Y)(a, 40, d),
                avatarDecoration: h,
                size: ek._3.SIZE_40,
                "aria-label": l?.username ?? B.intl.string(B.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: e9.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: e9.rU,
                        children: [
                            (0, s.jsx)(eP.A, {
                                nick: c,
                                user: l,
                                showAccountIdentifier: !0,
                                className: e9.I8,
                                usernameClass: e9.Xh,
                                discriminatorClass: null != eH.Ay.getGlobalName(l) ? e9.vl : e9.D2,
                            }),
                            (0, s.jsx)(_.E, {
                                className: e9.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: u,
                            }),
                        ],
                    }),
                    (0, s.jsx)(eU.A, {
                        hoverText: (0, s.jsx)(e3, { channel: a }),
                        forceHover: i,
                        children: (0, s.jsx)(e5, { userId: l.id }),
                    }),
                ],
            }),
        ],
    });
}
var tn = n(610602);
function ts(e) {
    let { active: t, user: n, channel: l } = e,
        i = z(),
        r = a.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), g.Ck.FAILURE));
        }, []),
        c = a.useCallback(() => {
            H.A.closeChannelSidebar(F.fe);
        }, []),
        o = a.useCallback(() => {
            H.A.closeChannelSidebar(F.fe), i && (0, D.iN)(l.id);
        }, [l.id, i]),
        {
            acceptMessageRequest: d,
            rejectMessageRequest: u,
            isAcceptLoading: _,
            isRejectLoading: A,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, W.t)({ user: n, onAcceptSuccess: o, onRejectSuccess: c, onError: r }),
        E = _ || A || x || S || f;
    return (0, s.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, s.jsx)(tt, { channel: l, otherUser: n, active: t }),
            (0, s.jsxs)("div", {
                className: tn.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: B.intl.string(B.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), u(l.id);
                            },
                            disabled: E,
                            loading: A || f,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: B.intl.string(B.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), d(l.id);
                            },
                            disabled: E,
                            loading: _ || x || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ta(e) {
    let { index: t, className: n, channel: a, user: l, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, eA.N)();
    return (0, s.jsx)(eT, {
        index: t,
        className: n,
        isFocused: r === a.id,
        channel: a,
        user: l,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: a.id, baseChannelId: F.fe, hasSingleMessageRequest: i }),
                eo.default.track(e2.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: a.id,
                    other_user_id: l.id,
                }),
                setTimeout(() => {
                    eC._.dispatch(e2.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(ts, { active: e, user: l, channel: a }),
    });
}
var tl = n(308528),
    ti = n(928658);
function tr(e) {
    let { channel: t, onReportClick: n, onReportSubmit: a, onMouseEnter: l, onMouseLeave: i } = e,
        { error: r, loaded: c, message: o } = (0, eB.I)(t);
    if (null == o && (c || r)) return null;
    let d = () => {
        a?.(), tl.A.closePrivateChannel(t.id);
    };
    return (0, s.jsx)(R.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != o && (0, ti.b8)(o, d);
        },
        onMouseEnter: l,
        onMouseLeave: i,
        text: B.intl.string(B.t.HHZmDn),
    });
}
var tc = n(303835);
function to(e) {
    let { active: t, user: n, channel: l } = e,
        i = w(),
        r = a.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t.pIQ3h4), g.Ck.FAILURE)),
                et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        o = a.useCallback(() => {
            H.A.closeChannelSidebar(F.fe);
        }, []),
        d = a.useCallback(() => {
            H.A.closeChannelSidebar(F.fe), i && (0, D.iN)(l.id);
        }, [l.id, i]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: _,
            isUserProfileLoading: A,
            isOptimisticAccepted: x,
        } = (0, W.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        S = _ || A,
        f = S || x;
    return (0, s.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, s.jsx)(tt, { otherUser: n, channel: l, active: t }),
            (0, s.jsxs)("div", {
                className: tc.o1,
                children: [
                    (0, s.jsx)(R.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.vicfl6),
                        onClick: (e) => {
                            u(l.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: S,
                    }),
                    (0, s.jsx)(tr, { channel: l }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { index: t, className: n, channel: a, user: l, hasSingleMessageRequest: i } = e;
    return (0, s.jsx)(eT, {
        index: t,
        className: n,
        isFocused: !1,
        channel: a,
        user: l,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: a.id, baseChannelId: F.fe, hasSingleMessageRequest: i }),
                eo.default.track(e2.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: a.id,
                    other_user_id: l.id,
                }),
                setTimeout(() => {
                    eC._.dispatch(e2.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(to, { active: e, user: l, channel: a }),
    });
}
var tu = n(900425);
function th() {
    let e,
        t,
        n,
        l = a.useRef(null),
        d =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, k.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eS(
                    Array.from(k.A.getSpamChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([eu.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = eu.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            a.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = U(),
        S = w(),
        f = eg(),
        E = (0, C.A)("message-requests-spam-list"),
        { channelId: b } = (0, eA.N)(),
        p = a.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), g.Ck.FAILURE));
        }, []),
        { rejectAll: j } = (0, W.t)({ onError: p }),
        I = a.useCallback(() => {
            j(d.map((e) => e.channel.id));
        }, [d, j]);
    (0, v.Ay)(() => {
        eo.default.track(e2.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let N = a.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    a = d[t + 1]?.channel?.id,
                    l = n.channel.id;
                return (0, s.jsx)(
                    td,
                    {
                        index: t,
                        className: i()({ [tu.wH]: null != b && b === l, [tu.wZ]: null != b && b === a }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    l,
                );
            },
            [d, S, b],
        ),
        R = a.useCallback(
            () =>
                (0, s.jsxs)(
                    X.A,
                    {
                        className: tu.Gf,
                        children: [
                            B.intl.format(B.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(_.E, {
                                              className: tu.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(A.Q, {
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
        ? (0, s.jsx)(ev, { section: eE.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: E,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...a } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: tu.p_,
                              innerRole: n,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (l.current = e), (t.current = e?.getScrollerNode() ?? null);
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
                              ...a,
                          },
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tm = n(49999),
    tg = n(267899),
    t_ = n(964623);
function tA() {
    let e,
        t,
        n,
        l = a.useRef(null),
        d = (0, L.W)(),
        u =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, G.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eS(
                    Array.from(G.A.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e),
                );
            }, [e])),
            (n = (0, o.cf)([eu.default], () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = eu.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            }, [t])),
            a.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        S = z(),
        f = eg(),
        E = a.useCallback(() => {
            (0, h.P0)((0, m.o)(B.intl.string(B.t["EDYbS+"]), g.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, W.t)({ onError: E }),
        p = (0, C.A)("message-requests-list"),
        { channelId: j } = (0, eA.N)(),
        v = a.useCallback(() => {
            b(u.map((e) => e.channel.id));
        }, [u, b]),
        I = a.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    a = u[t + 1]?.channel?.id,
                    l = n.channel.id;
                return (0, s.jsx)(
                    ta,
                    {
                        index: t,
                        className: i()({ [tg.wH]: null != j && j === l, [tg.wZ]: null != j && j === a }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: S,
                    },
                    l,
                );
            },
            [S, u, j],
        ),
        N = a.useCallback(
            () =>
                (0, s.jsxs)(
                    X.A,
                    {
                        className: tg.Gf,
                        children: [
                            d > 0 ? B.intl.formatToPlainString(B.t.rA4iWY, { count: d }) : B.intl.string(B.t.flPU6g),
                            f && d > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(_.E, {
                                              className: tg.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(A.Q, {
                                              onClick: v,
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
            [d, v, f],
        );
    return (u.length !== d && et.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(ev, { section: eE.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: p,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...a } = e;
                      return (0, s.jsx)(
                          x.OZ,
                          {
                              className: tg.p_,
                              innerRole: n,
                              innerAriaLabel: B.intl.string(B.t.e7GWjQ),
                              ref: (e) => {
                                  (l.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: N,
                              renderRow: I,
                              sections: [u.length],
                              chunkSize: 30,
                              fade: !0,
                              ...a,
                          },
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tx(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        a = (0, o.bG)([F.Ay], () => F.Ay.getSidebarState(F.fe)),
        l = (0, o.bG)([er.A], () => er.A.getChannel(a?.channelId));
    if (null == a || a.type !== en.PE.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
    let i = t - e2.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, s.jsx)(Z, { channel: l, baseChannelId: F.fe }),
    });
}
let tS = (e) => {
    let t = (0, e_.A)();
    return (a.useEffect(() => {
        (0, J.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ec.A.hasLayers() || (0, S.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(Y.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: a, markAsDismissed: l } = n,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => l(tm.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return a === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, s.jsx)(u.A, {
                                          ...i,
                                          title: B.intl.string(B.t.hRT8tc),
                                          body: B.intl.string(B.t.apPgJG),
                                          actions: [
                                              { text: B.intl.string(B.t.LNoAQW), onClick: () => l(tm.i.TAKE_ACTION) },
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
                                                          (0, ei.openUserSettings)(
                                                              el.X
                                                                  .CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          l(tm.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: B.intl.string(B.t.LNoAQW),
                                                  onClick: () => l(tm.i.USER_DISMISS),
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
    return t === eE.zz.SPAM ? (0, s.jsx)(th, {}) : (0, s.jsx)(tA, {});
}
let tE = (0, j.A)(function (e) {
    let { width: t } = e,
        n = (0, L.W)();
    (0, v.Ay)(() => {
        p.I(e2.BVt.MESSAGE_REQUESTS),
            (0, es.d)("message-requests"),
            eo.default.track(e2.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            et.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let l = (0, o.bG)([ea.A], () => ea.A.theme),
        r = U(),
        [d, u] = a.useState(!1),
        h = (0, o.bG)([F.Ay], () => {
            let e = F.Ay.getSidebarState(F.fe);
            return null != e && e.type === en.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        g = null != h,
        _ = (0, eh.c)(m),
        A = (0, o.bG)([ed.A, eu.default], () => {
            if (null == m) return !1;
            let e = eu.default.getCurrentUser();
            return null != ed.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        x = a.useRef(null);
    a.useEffect(() => {
        null != m && !_ && A && g && ((0, D.iN)(m), H.A.closeChannelSidebar(F.fe));
    }, [m, A, g, _]);
    let [S, j] = a.useState(eE.zz.REQUESTS),
        C = (e) => {
            j(e);
        };
    return (
        (0, $.HU)({ location: B.intl.string(B.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(t_.TE, tg.kL, { [t_.js]: g, [t_.jl]: g && d }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: l,
                            children: (e) =>
                                (0, s.jsxs)(ee.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(ee.A.Icon, { icon: E.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(tS, {
                                            targetElementRef: x,
                                            children: (0, s.jsx)(ee.A.Title, {
                                                ref: x,
                                                children: B.intl.string(B.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(ee.A.Divider, {}),
                                        (0, s.jsxs)(b.V, {
                                            "aria-label": B.intl.string(B.t.e7GWjQ),
                                            selectedItem: S,
                                            type: "top-pill",
                                            onItemSelect: C,
                                            children: [
                                                (0, s.jsx)(b.V.Item, {
                                                    id: eE.zz.REQUESTS,
                                                    className: tg.AS,
                                                    children: B.intl.string(B.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(b.V.Item, {
                                                    id: eE.zz.SPAM,
                                                    className: tg.AS,
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
                        (0, s.jsx)("div", { className: t_.Qs, children: (0, s.jsx)(tf, { section: S }) }),
                    ],
                }),
                g &&
                    (0, s.jsx)(tx, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
