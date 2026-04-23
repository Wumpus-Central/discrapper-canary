n.r(t), n.d(t, { default: () => t_ });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(691540),
    m = n(857250),
    A = n(97483),
    g = n(834730),
    x = n(123292),
    S = n(475825),
    E = n(192308),
    f = n(43990),
    _ = n(849516),
    b = n(761508),
    j = n(944791),
    p = n(456412),
    C = n(964486),
    v = n(260762),
    I = n(140130),
    N = n(789645),
    R = n(821609),
    M = n(355622),
    G = n(58736),
    T = n(683442),
    y = n(380335),
    k = n(157550),
    P = n(724442),
    L = n(411976);
function z() {
    return (0, o.bG)([k.A], () => k.A.getSpamChannelsCount());
}
function U() {
    let e = (0, L.W)(),
        t = l.useRef(e),
        n = (0, o.bG)([y.A], () => y.A.isReady()),
        s = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
function w() {
    let e = z(),
        t = l.useRef(e),
        n = (0, o.bG)([k.A], () => k.A.isReady()),
        s = l.useRef(n);
    return (
        l.useEffect(() => {
            n && !s.current && ((s.current = !0), (t.current = e));
        }, [n, e]),
        1 >= (0, P.A)(t) && 1 === e
    );
}
var W = n(92650),
    Q = n(977347),
    F = n(378570),
    H = n(138298),
    O = n(761640),
    D = n(47167),
    q = n(806202),
    V = n(985018),
    K = n(906462),
    B = n(669747);
function Z(e) {
    let { channel: t, baseChannelId: n } = e,
        a = (0, D.Ay)(t),
        i = U(),
        r = w(),
        c = (0, o.bG)([y.A], () => y.A.isMessageRequest(t.id)),
        d = (0, o.bG)([k.A], () => k.A.isSpam(t.id)),
        u = (0, Q.D)(t.id, t.getRecipientId()),
        x = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), c && i && (0, F.iN)(t.id), d && r && (0, F.iN)(t.id);
        }, [t.id, d, r, c, i]),
        S = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t.pIQ3h4), A.Ck.FAILURE));
        }, []),
        { markAsNotSpam: E } = (0, W.t)({ onAcceptSuccess: x, onError: S });
    if (null == t || !t.isDM()) return null;
    let f = [
        (0, s.jsx)(
            G.Ay.Icon,
            { icon: N.P, tooltip: V.intl.string(V.t.cpT0Cq), onClick: () => H.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(G.Ay, {
                toolbar: f,
                "aria-label": V.intl.string(V.t.BIYAqa),
                children: (0, T.zF)({ channel: t, channelName: a, inSidebar: !0 }),
            }),
            d &&
                (0, s.jsxs)("div", {
                    className: B.F,
                    children: [
                        (0, s.jsx)(g.E, { variant: "text-sm/normal", children: V.intl.string(V.t.XVOKgj) }),
                        (0, s.jsx)("div", {
                            className: B.$,
                            children: (0, s.jsx)(R.$, {
                                size: "sm",
                                onClick: () => E(t, u),
                                text: V.intl.string(V.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, s.jsx)("div", {
                className: K.T,
                children: (0, s.jsx)(q.A, { channel: t, guild: null, chatInputType: M.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var $ = n(485947),
    X = n(726249),
    J = n(367727),
    Y = n(379848),
    ee = n(742589),
    et = n(831062),
    en = n(940382),
    es = n(210714),
    el = n(363195),
    ea = n(780964),
    ei = n(858897),
    er = n(734057),
    ec = n(186111),
    eo = n(954571),
    ed = n(232835),
    eu = n(287809),
    eh = n(321404),
    em = n(572009);
function eA() {
    return (0, o.bG)([eu.default], () => (0, em.I9)(eu.default.getCurrentUser()));
}
var eg = n(166643),
    ex = n(957283),
    eS = n(935208);
function eE(e) {
    return e.sort((e, t) => eS.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(396478),
    e_ = n(687599),
    eb = n(867853),
    ej = n(317017),
    ep = n(826223);
function eC(e) {
    let { section: t } = e,
        n = (0, o.bG)([el.A], () => el.A.theme);
    return (0, s.jsxs)(ef.pp, {
        theme: n,
        className: eb.y,
        children: [
            (0, s.jsx)(ef.G8, { width: 415, height: 200, lightSrc: ep, darkSrc: ej }),
            (0, s.jsx)(ef.SG, { note: t === e_.zz.SPAM ? V.intl.string(V.t.hasFPQ) : V.intl.string(V.t.SXrqTf) }),
        ],
    });
}
var ev = n(625494),
    eI = n(615300),
    eN = n(187322),
    eR = n(442433),
    eM = n(249611);
let eG = function (e) {
    let {
            index: t,
            children: a,
            user: c,
            channel: o,
            onClick: d,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: A,
        } = e,
        [g, x] = l.useState(!1),
        [S, E] = l.useState(!1),
        f = () => {
            x(!0), !u || h || S || m?.();
        },
        _ = () => {
            x(!1);
        };
    return (0, s.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, s.jsx)(eN.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(eI.A.div, {
                    className: i()(eM.Cf, A, { [eM.vu]: h || S, [eM.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (E(!0),
                            (0, eR.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("32418"),
                                        n.e("22880"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, s.jsx)(e, { ...t, user: c });
                                },
                                {
                                    onClose: () => {
                                        E(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: f,
                    onMouseLeave: _,
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(g || h || S),
                }),
            }),
    });
};
var eT = n(692617),
    ey = n(97808),
    ek = n(778712),
    eP = n(297413),
    eL = n(775602),
    ez = n(29160),
    eU = n(854378),
    ew = n(571694),
    eW = n(562819),
    eQ = n(963977),
    eF = n(994500),
    eH = n(427262),
    eO = n(19575);
n(989349);
var eD = n(707539),
    eq = n(222823),
    eV = n(978914),
    eK = n(228366),
    eB = n(841595),
    eZ = n(576622),
    e$ = n(247928),
    eX = n(863439),
    eJ = n(465364),
    eY = n(805964),
    e0 = n(302031),
    e2 = n(253932),
    e8 = n(576705),
    e6 = n(652215),
    e4 = n(838541),
    e7 = n(571882),
    e3 = n(992595);
let e1 = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: a, message: r } = (0, eV.I)(t),
        { isBlocked: c, isIgnored: d } = (0, o.cf)(
            [eF.A],
            () => ({
                isBlocked: null != r && eF.A.isBlockedForMessage(r),
                isIgnored: null != r && eF.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        u = (0, o.bG)([e8.A], () => e8.A.can(e6.xBc.MANAGE_MESSAGES, t)),
        h = e2.gs.useSetting(),
        { content: m } = l.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, eJ.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        A = null;
    if (a)
        A = (0, s.jsx)(g.E, {
            className: e7.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: V.intl.string(V.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            A = (0, s.jsx)(g.E, {
                className: e7.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t["WPe+xL"]),
            });
        else if (null != r && d)
            A = (0, s.jsx)(g.E, {
                className: e7.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, eY.o)(r, m, c, d, i()(e7.BK, e3.tZ), {
                leadingIconClass: e7.AF,
                trailingIconClass: e7.AF,
                iconSize: e4.eJ,
            });
            A =
                null != t
                    ? (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", className: e7.BK, children: t })
                    : (0, s.jsx)(g.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e7.G4,
                          children: e,
                      });
        } else
            A = (0, s.jsx)(g.E, {
                className: e7.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: V.intl.string(V.t["0KfDxM"]),
            });
    else A = null;
    return (0, s.jsx)(e0.Bs.Provider, {
        value: (0, eX.A)(h, u),
        children: (0, s.jsx)(e$.M, { className: e7.JY, children: A }),
    });
});
var e9 = n(746345);
let e5 = (e) => {
        let t,
            n,
            { userId: a } = e,
            i =
                ((t = (0, o.bG)([eu.default], () => eu.default.getUser(a))),
                (n = (0, o.yK)([eB.A], () => eB.A.getMutualGuilds(a)?.map((e) => e.guild) ?? [])),
                l.useEffect(() => {
                    0 === n.length &&
                        null != t &&
                        null == eB.A.getMutualGuilds(a) &&
                        eK.h.wait(() => (0, eZ.A)(a, void 0, { withMutualGuilds: !0 }));
                }, [n, t, a]),
                n);
        return null == i || 0 === i.length
            ? (0, s.jsx)(g.E, {
                  className: e9.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: V.intl.string(V.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: e9.I9,
                  children: [
                      (0, s.jsx)(eT.A, { guilds: i, maxGuilds: 3, size: eU.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(g.E, {
                          className: e9.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: V.intl.format(V.t.eE3oep, { count: i.length }),
                      }),
                  ],
              });
    },
    te = eO.Ay.getEnableHardwareAcceleration() ? ey.Js : ey.eu;
function tt(e) {
    let t,
        n,
        { channel: l, otherUser: a, active: i } = e,
        r = (0, o.bG)([eL.A], () => eL.A.useReducedMotion),
        c = (0, o.bG)([eF.A], () => (null == a ? null : eF.A.getNickname(a.id))),
        d = !r && i,
        u =
            ((t = (0, eV.I)(l)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: s } = e;
                return s && null != n
                    ? eS.default.extractTimestamp(n.id)
                    : null != t
                      ? eS.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eq.Ay], () => eq.Ay.lastMessageId(l.id)), ...t }))
                ? ""
                : (0, eD.aK)(n)),
        { avatarDecorationSrc: h } = (0, eQ.A)({
            user: a,
            size: (0, eW.Te)(ek._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(te, {
                className: e9.my,
                src: (0, ew.Y)(l, 40, d),
                avatarDecoration: h,
                size: ek._3.SIZE_40,
                "aria-label": a?.username ?? V.intl.string(V.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: e9.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: e9.rU,
                        children: [
                            (0, s.jsx)(eP.A, {
                                nick: c,
                                user: a,
                                showAccountIdentifier: !0,
                                className: e9.I8,
                                usernameClass: e9.Xh,
                                discriminatorClass: null != eH.Ay.getGlobalName(a) ? e9.vl : e9.D2,
                            }),
                            (0, s.jsx)(g.E, {
                                className: e9.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: u,
                            }),
                        ],
                    }),
                    (0, s.jsx)(ez.A, {
                        hoverText: (0, s.jsx)(e1, { channel: l }),
                        forceHover: i,
                        children: (0, s.jsx)(e5, { userId: a.id }),
                    }),
                ],
            }),
        ],
    });
}
var tn = n(610602);
function ts(e) {
    let { active: t, user: n, channel: a } = e,
        i = U(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        c = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe);
        }, []),
        o = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), i && (0, F.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: d,
            rejectMessageRequest: u,
            isAcceptLoading: g,
            isRejectLoading: x,
            isUserProfileLoading: S,
            isOptimisticAccepted: E,
            isOptimisticRejected: f,
        } = (0, W.t)({ user: n, onAcceptSuccess: o, onRejectSuccess: c, onError: r }),
        _ = g || x || S || E || f;
    return (0, s.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, s.jsx)(tt, { channel: a, otherUser: n, active: t }),
            (0, s.jsxs)("div", {
                className: tn.o1,
                children: [
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: V.intl.string(V.t.B2nygW),
                            onClick: (e) => {
                                e.stopPropagation(), u(a.id);
                            },
                            disabled: _,
                            loading: x || f,
                        }),
                    }),
                    (0, s.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tn.x6,
                        children: (0, s.jsx)(R.$, {
                            variant: "primary",
                            size: "sm",
                            text: V.intl.string(V.t.Kz8Pwr),
                            onClick: (e) => {
                                e.stopPropagation(), d(a.id);
                            },
                            disabled: _,
                            loading: g || S || E,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tl(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e,
        { channelId: r } = (0, ex.N)();
    return (0, s.jsx)(eG, {
        index: t,
        className: n,
        isFocused: r === l.id,
        channel: l,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                eo.default.track(e6.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    ev._.dispatch(e6.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(ts, { active: e, user: a, channel: l }),
    });
}
var ta = n(308528),
    ti = n(928658);
function tr(e) {
    let { channel: t, onReportClick: n, onReportSubmit: l, onMouseEnter: a, onMouseLeave: i } = e,
        { error: r, loaded: c, message: o } = (0, eV.I)(t);
    if (null == o && (c || r)) return null;
    let d = () => {
        l?.(), ta.A.closePrivateChannel(t.id);
    };
    return (0, s.jsx)(R.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != o && (0, ti.b8)(o, d);
        },
        onMouseEnter: a,
        onMouseLeave: i,
        text: V.intl.string(V.t.HHZmDn),
    });
}
var tc = n(303835);
function to(e) {
    let { active: t, user: n, channel: a } = e,
        i = w(),
        r = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t.pIQ3h4), A.Ck.FAILURE)),
                et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        o = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe);
        }, []),
        d = l.useCallback(() => {
            H.A.closeChannelSidebar(O.fe), i && (0, F.iN)(a.id);
        }, [a.id, i]),
        {
            acceptMessageRequest: u,
            isAcceptLoading: g,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
        } = (0, W.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: o, onError: r }),
        E = g || x,
        f = E || S;
    return (0, s.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, s.jsx)(tt, { otherUser: n, channel: a, active: t }),
            (0, s.jsxs)("div", {
                className: tc.o1,
                children: [
                    (0, s.jsx)(R.$, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.vicfl6),
                        onClick: (e) => {
                            u(a.id), e.stopPropagation();
                        },
                        disabled: f,
                        loading: E,
                    }),
                    (0, s.jsx)(tr, { channel: a }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { index: t, className: n, channel: l, user: a, hasSingleMessageRequest: i } = e;
    return (0, s.jsx)(eG, {
        index: t,
        className: n,
        isFocused: !1,
        channel: l,
        user: a,
        onClick: (e) => {
            e.stopPropagation(),
                H.A.openPrivateChannelAsSidebar({ channelId: l.id, baseChannelId: O.fe, hasSingleMessageRequest: i }),
                eo.default.track(e6.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: l.id,
                    other_user_id: a.id,
                }),
                setTimeout(() => {
                    ev._.dispatch(e6.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
                }, 0);
        },
        children: (e) => (0, s.jsx)(to, { active: e, user: a, channel: l }),
    });
}
var tu = n(900425);
function th() {
    let e,
        t,
        n,
        a = l.useRef(null),
        d =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, k.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eE(
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
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = z(),
        E = w(),
        f = eA(),
        _ = (0, v.A)("message-requests-spam-list"),
        { channelId: b } = (0, ex.N)(),
        j = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: p } = (0, W.t)({ onError: j }),
        I = l.useCallback(() => {
            p(d.map((e) => e.channel.id));
        }, [d, p]);
    (0, C.Ay)(() => {
        eo.default.track(e6.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            et.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW });
    });
    let N = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    l = d[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, s.jsx)(
                    td,
                    {
                        index: t,
                        className: i()({ [tu.wH]: null != b && b === a, [tu.wZ]: null != b && b === l }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: E,
                    },
                    a,
                );
            },
            [d, E, b],
        ),
        R = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: tu.Gf,
                        children: [
                            V.intl.format(V.t.C79Edh, { count: u }),
                            f && u > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tu.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(x.Q, {
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
    return 0 === d.length
        ? (0, s.jsx)(eC, { section: e_.zz.SPAM })
        : (0, s.jsx)(r.hD, {
              navigator: _,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          S.OZ,
                          {
                              className: tu.p_,
                              innerRole: n,
                              innerAriaLabel: V.intl.string(V.t.e7GWjQ),
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
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
var tm = n(49999),
    tA = n(267899),
    tg = n(964623);
function tx() {
    let e,
        t,
        n,
        a = l.useRef(null),
        d = (0, L.W)(),
        u =
            ((e = (0, o.bG)([er.A], () => er.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)([er.A, y.A], () => {
                let e = er.A.getMutablePrivateChannels();
                return eE(
                    Array.from(y.A.getMessageRequestChannelIds())
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
            l.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        E = U(),
        f = eA(),
        _ = l.useCallback(() => {
            (0, h.P0)((0, m.o)(V.intl.string(V.t["EDYbS+"]), A.Ck.FAILURE));
        }, []),
        { rejectAll: b } = (0, W.t)({ onError: _ }),
        j = (0, v.A)("message-requests-list"),
        { channelId: p } = (0, ex.N)(),
        C = l.useCallback(() => {
            b(u.map((e) => e.channel.id));
        }, [u, b]),
        I = l.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    l = u[t + 1]?.channel?.id,
                    a = n.channel.id;
                return (0, s.jsx)(
                    tl,
                    {
                        index: t,
                        className: i()({ [tA.wH]: null != p && p === a, [tA.wZ]: null != p && p === l }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: E,
                    },
                    a,
                );
            },
            [E, u, p],
        ),
        N = l.useCallback(
            () =>
                (0, s.jsxs)(
                    $.A,
                    {
                        className: tA.Gf,
                        children: [
                            d > 0 ? V.intl.formatToPlainString(V.t.rA4iWY, { count: d }) : V.intl.string(V.t.flPU6g),
                            f && d > 0
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(g.E, {
                                              className: tA.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "•",
                                          }),
                                          (0, s.jsx)(x.Q, {
                                              onClick: C,
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
            [d, C, f],
        );
    return (u.length !== d && et.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, s.jsx)(eC, { section: e_.zz.REQUESTS })
        : (0, s.jsx)(r.hD, {
              navigator: j,
              children: (0, s.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...l } = e;
                      return (0, s.jsx)(
                          S.OZ,
                          {
                              className: tA.p_,
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
                              renderRow: I,
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
function tS(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        l = (0, o.bG)([O.Ay], () => O.Ay.getSidebarState(O.fe)),
        a = (0, o.bG)([er.A], () => er.A.getChannel(l?.channelId));
    if (null == l || l.type !== en.PE.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let i = t - e6.ItT;
    return (0, s.jsx)(I.A, {
        sidebarType: I.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: n,
        children: (0, s.jsx)(Z, { channel: a, baseChannelId: O.fe }),
    });
}
let tE = (e) => {
    let t = (0, eg.A)();
    return (l.useEffect(() => {
        (0, J.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || ec.A.hasLayers() || (0, E.hasAnyModalOpen)())
        ? e.children
        : (0, s.jsx)(Y.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: l, markAsDismissed: a } = n,
                      i = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => a(tm.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return l === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, s.jsx)(u.A, {
                                          ...i,
                                          title: V.intl.string(V.t.hRT8tc),
                                          body: V.intl.string(V.t.apPgJG),
                                          actions: [
                                              { text: V.intl.string(V.t.LNoAQW), onClick: () => a(tm.i.TAKE_ACTION) },
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
                                                          a(tm.i.TAKE_ACTION);
                                                  },
                                              },
                                              {
                                                  text: V.intl.string(V.t.LNoAQW),
                                                  onClick: () => a(tm.i.USER_DISMISS),
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
    return t === e_.zz.SPAM ? (0, s.jsx)(th, {}) : (0, s.jsx)(tx, {});
}
let t_ = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, L.W)();
    (0, C.Ay)(() => {
        j.I(e6.BVt.MESSAGE_REQUESTS),
            (0, es.d)("message-requests"),
            eo.default.track(e6.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            et.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW });
    });
    let a = (0, o.bG)([el.A], () => el.A.theme),
        r = z(),
        [d, u] = l.useState(!1),
        h = (0, o.bG)([O.Ay], () => {
            let e = O.Ay.getSidebarState(O.fe);
            return null != e && e.type === en.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        A = null != h,
        g = (0, eh.c)(m),
        x = (0, o.bG)([ed.A, eu.default], () => {
            if (null == m) return !1;
            let e = eu.default.getCurrentUser();
            return null != ed.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        S = l.useRef(null);
    l.useEffect(() => {
        null != m && !g && x && A && ((0, F.iN)(m), H.A.closeChannelSidebar(O.fe));
    }, [m, x, A, g]);
    let [E, p] = l.useState(e_.zz.REQUESTS),
        v = (e) => {
            p(e);
        };
    return (
        (0, X.HU)({ location: V.intl.string(V.t.e7GWjQ) }),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("div", {
                    className: i()(tg.TE, tA.kL, { [tg.js]: A, [tg.jl]: A && d }),
                    children: [
                        (0, s.jsx)(f.N, {
                            theme: a,
                            children: (e) =>
                                (0, s.jsxs)(ee.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, s.jsx)(ee.A.Icon, { icon: _.u, "aria-hidden": !0 }),
                                        (0, s.jsx)(tE, {
                                            targetElementRef: S,
                                            children: (0, s.jsx)(ee.A.Title, {
                                                ref: S,
                                                children: V.intl.string(V.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, s.jsx)(ee.A.Divider, {}),
                                        (0, s.jsxs)(b.V, {
                                            "aria-label": V.intl.string(V.t.e7GWjQ),
                                            selectedItem: E,
                                            type: "top-pill",
                                            onItemSelect: v,
                                            children: [
                                                (0, s.jsx)(b.V.Item, {
                                                    id: e_.zz.REQUESTS,
                                                    className: tA.AS,
                                                    children: V.intl.string(V.t["7RFcXZ"]),
                                                }),
                                                (0, s.jsx)(b.V.Item, {
                                                    id: e_.zz.SPAM,
                                                    className: tA.AS,
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
                        (0, s.jsx)("div", { className: tg.Qs, children: (0, s.jsx)(tf, { section: E }) }),
                    ],
                }),
                A &&
                    (0, s.jsx)(tS, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
