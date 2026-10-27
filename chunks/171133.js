(n.r(t), n.d(t, { default: () => tv }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    u = n(554146),
    d = n(43105),
    h = n(858899),
    m = n(834730),
    x = n(123292),
    g = n(475825),
    A = n(192308),
    E = n(43990),
    S = n(849516),
    f = n(761508),
    j = n(944791),
    p = n(456412),
    v = n(964486),
    C = n(260762),
    b = n(812771),
    _ = n(789645),
    I = n(821609),
    N = n(355622),
    R = n(58736),
    M = n(353428),
    T = n(380335),
    G = n(157550),
    k = n(923457),
    y = n(36149),
    P = n(207560);
function U() {
    let e = (0, y.uE)(),
        t = (0, P.yv)(k.p.MESSAGE_REQUEST_RESTRICTIONS);
    return !e && t;
}
var Q = n(336590),
    z = n(92650),
    w = n(959698),
    W = n(977347),
    H = n(378570),
    O = n(138298),
    V = n(358047),
    q = n(47167),
    D = n(688606),
    F = n(105292),
    K = n(172039),
    L = n(612960);
function B(e) {
    let { channel: t, baseChannelId: n } = e,
        i = (0, q.Ay)(t),
        a = (0, Q.k)(),
        r = (0, Q.r)(),
        c = (0, o.bG)([T.A], () => T.A.isMessageRequest(t.id)),
        u = (0, o.bG)([G.A], () => G.A.isSpam(t.id)),
        d = U() && c && !u,
        x = (0, W.D)(t.id, t.getRecipientId()),
        g = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), c && a && (0, H.iN)(t.id), u && r && (0, H.iN)(t.id));
        }, [t.id, u, r, c, a]),
        A = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" });
        }, []),
        { markAsNotSpam: E } = (0, z.t)({ onAcceptSuccess: g, onError: A });
    if (null == t || !t.isDM()) return null;
    let S = [
        (0, l.jsx)(
            R.Ay.Icon,
            { icon: _.P, tooltip: F.intl.string(F.t.cpT0Cq), onClick: () => O.A.closeChannelSidebar(n) },
            "close",
        ),
    ];
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.Ay, {
                toolbar: S,
                "aria-label": F.intl.string(F.t.BIYAqa),
                children: (0, M.zF)({ channel: t, channelName: i, inSidebar: !0 }),
            }),
            u &&
                (0, l.jsxs)("div", {
                    className: L.F,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-sm/normal", children: F.intl.string(F.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: L.$,
                            children: (0, l.jsx)(I.$, {
                                size: "sm",
                                onClick: () => E(t, x),
                                text: F.intl.string(F.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: K.T,
                children: (0, l.jsx)(w.A.Provider, {
                    value: d,
                    children: (0, l.jsx)(D.A, { channel: t, guild: null, chatInputType: N.oU.SIDEBAR }, t.id),
                }),
            }),
        ],
    });
}
var Z = n(485947),
    X = n(726249),
    J = n(501419),
    Y = n(379848),
    $ = n(742589),
    ee = n(807393),
    et = n(940382),
    en = n(210714),
    el = n(363195),
    es = n(780964),
    ei = n(766075),
    ea = n(734057),
    er = n(186111),
    ec = n(174459),
    eo = n(232835),
    eu = n(287809),
    ed = n(321404),
    eh = n(572009);
function em() {
    return (0, o.bG)([eu.default], () => (0, eh.I9)(eu.default.getCurrentUser()));
}
var ex = n(166643),
    eg = n(957283),
    eA = n(411976),
    eE = n(935208);
function eS(e) {
    return e.sort((e, t) => eE.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(790499);
let ej = s.createContext(!1);
function ep() {
    return s.useContext(ej);
}
var ev = n(396478),
    eC = n(687599),
    eb = n(477694),
    e_ = n(317017),
    eI = n(826223);
function eN(e) {
    let { section: t } = e,
        n = (0, o.bG)([el.A], () => el.A.theme);
    return (0, l.jsxs)(ev.pp, {
        theme: n,
        className: eb.y,
        children: [
            (0, l.jsx)(ev.G8, { width: 415, height: 200, lightSrc: eI, darkSrc: e_ }),
            (0, l.jsx)(ev.SG, { note: t === eC.zz.SPAM ? F.intl.string(F.t.hasFPQ) : F.intl.string(F.t.SXrqTf) }),
        ],
    });
}
var eR = n(625494),
    eM = n(615300),
    eT = n(559106),
    eG = n(442433),
    ek = n(201030);
let ey = function (e) {
    let {
            index: t,
            children: i,
            user: c,
            channel: o,
            onClick: u,
            isFocused: d,
            isActive: h,
            onOtherHover: m,
            className: x,
        } = e,
        [g, A] = s.useState(!1),
        [E, S] = s.useState(!1);
    function f() {
        (A(!0), !d || h || E || m?.());
    }
    function j() {
        A(!1);
    }
    return (0, l.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, l.jsx)(eT.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(eM.A.div, {
                    className: a()(ek.Cf, x, { [ek.vu]: h || E, [ek.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, eG.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("463317"),
                                        n.e("893190"),
                                        n.e("189673"),
                                        n.e("882073"),
                                        n.e("797558"),
                                        n.e("691994"),
                                        n.e("229787"),
                                        n.e("576665"),
                                        n.e("624198"),
                                        n.e("532418"),
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
                    children: i(g || h || E),
                }),
            }),
    });
};
var eP = n(692617),
    eU = n(97808),
    eQ = n(778712),
    ez = n(297413),
    ew = n(775602),
    eW = n(29160),
    eH = n(854378),
    eO = n(571694),
    eV = n(562819),
    eq = n(215689),
    eD = n(994500),
    eF = n(427262),
    eK = n(19575);
n(536637);
var eL = n(707539),
    eB = n(573163),
    eZ = n(978914),
    eX = n(321191),
    eJ = n(903209),
    eY = n(346055),
    e$ = n(863439),
    e0 = n(521981),
    e7 = n(448368),
    e9 = n(302031),
    e3 = n(253932),
    e1 = n(576705),
    e8 = n(652215),
    e6 = n(838541),
    e4 = n(282573),
    e2 = n(165648);
let e5 = s.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: i, message: r } = (0, eZ.I)(t),
        { isBlocked: c, isIgnored: u } = (0, o.cf)(
            [eD.A],
            () => ({
                isBlocked: null != r && eD.A.isBlockedForMessage(r),
                isIgnored: null != r && eD.A.isIgnoredForMessage(r),
            }),
            [r],
        ),
        d = (0, o.bG)([e1.A], () => e1.A.can(e8.xBc.MANAGE_MESSAGES, t)),
        h = e3.gs.useSetting(),
        { content: x } = s.useMemo(
            () =>
                r?.content != null && "" !== r.content
                    ? (0, e0.Ay)(r, { formatInline: !0, noStyleAndInteraction: !0 })
                    : { content: null },
            [r],
        ),
        g = null;
    if (i)
        g = (0, l.jsx)(m.E, {
            className: e4.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: F.intl.string(F.t.BZHld2),
        });
    else if (n)
        if (null != r && c)
            g = (0, l.jsx)(m.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t["WPe+xL"]),
            });
        else if (null != r && u)
            g = (0, l.jsx)(m.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t.uxrh1O),
            });
        else if (null != r) {
            let { contentPlaceholder: e, renderedContent: t } = (0, e7.o)(r, x, c, u, a()(e4.BK, e2.tZ), {
                leadingIconClass: e4.AF,
                trailingIconClass: e4.AF,
                iconSize: e6.eJ,
            });
            g =
                null != t
                    ? (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", className: e4.BK, children: t })
                    : (0, l.jsx)(m.E, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e4.G4,
                          children: e,
                      });
        } else
            g = (0, l.jsx)(m.E, {
                className: e4.G4,
                variant: "text-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t["0KfDxM"]),
            });
    else g = null;
    let A = (0, e$.A)(h, d);
    return (0, l.jsx)(e9.Bs.Provider, { value: A, children: (0, l.jsx)(eY.M, { className: e4.JY, children: g }) });
});
var te = n(599036);
function tt(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([eu.default], () => eu.default.getUser(i))),
            (n = (0, o.yK)([eX.A], () => eX.A.getMutualGuilds(i)?.map((e) => e.guild) ?? [])),
            s.useEffect(() => {
                0 === n.length &&
                    null != t &&
                    null == eX.A.getMutualGuilds(i) &&
                    (0, eJ.A)(i, void 0, { withMutualGuilds: !0 });
            }, [n, t, i]),
            n);
    return null == a || 0 === a.length
        ? (0, l.jsx)(m.E, {
              className: te.tE,
              variant: "text-sm/normal",
              color: "text-muted",
              children: F.intl.string(F.t.jpY0X5),
          })
        : (0, l.jsxs)("div", {
              className: te.I9,
              children: [
                  (0, l.jsx)(eP.A, { guilds: a, maxGuilds: 3, size: eH.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, l.jsx)(m.E, {
                      className: te.tE,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: F.intl.format(F.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let tn = eK.Ay.getEnableHardwareAcceleration() ? eU.Js : eU.eu;
function tl(e) {
    let t,
        n,
        { channel: s, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([ew.Ay], () => ew.Ay.useReducedMotion),
        u = (0, o.bG)([eD.A], () => (null == i ? null : eD.A.getNickname(i.id))),
        d = !c && a,
        h =
            ((t = (0, eZ.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? eE.default.extractTimestamp(n.id)
                    : null != t
                      ? eE.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eB.Ay], () => eB.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eL.aK)(n)),
        { avatarDecorationSrc: x } = (0, eq.A)({
            user: i,
            size: (0, eV.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tn, {
                className: te.my,
                src: (0, eO.Y)(s, 40, d),
                avatarDecoration: x,
                size: eQ._3.SIZE_40,
                "aria-label": i?.username ?? F.intl.string(F.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: te.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: te.rU,
                        children: [
                            (0, l.jsx)(ez.A, {
                                nick: u,
                                user: i,
                                showAccountIdentifier: !0,
                                className: te.I8,
                                usernameClass: te.Xh,
                                discriminatorClass: null != eF.Ay.getGlobalName(i) ? te.vl : te.D2,
                            }),
                            (0, l.jsx)(m.E, {
                                className: te.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    (0, l.jsx)(eW.A, {
                        hoverText: r
                            ? (0, l.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: F.intl.string(F.t.fnduP5),
                              })
                            : (0, l.jsx)(e5, { channel: s }),
                        forceHover: a,
                        children: (0, l.jsx)(tt, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var ts = n(885207);
function ti(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, Q.k)(),
        c = ep(),
        o = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        u = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), r && (0, H.iN)(i.id));
        }, [i.id, r]),
        {
            acceptMessageRequest: m,
            rejectMessageRequest: x,
            isAcceptLoading: g,
            isRejectLoading: A,
            isUserProfileLoading: E,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: u, onError: o }),
        j = g || A || E || S || f;
    return (0, l.jsxs)("div", {
        className: ts.kL,
        children: [
            (0, l.jsx)(tl, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, l.jsxs)("div", {
                className: ts.o1,
                inert: c,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ts.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: F.intl.string(a ? F.t.BVN4pL : F.t.B2nygW),
                            onClick: function (e) {
                                (e.stopPropagation(), x(i.id));
                            },
                            disabled: j,
                            loading: A || f,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ts.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "primary",
                            size: "sm",
                            text: F.intl.string(F.t.Kz8Pwr),
                            onClick: function (e) {
                                (e.stopPropagation(), m(i.id));
                            },
                            disabled: j,
                            loading: g || E || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ta(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, eg.N)();
    return (0, l.jsx)(ey, {
        index: t,
        className: n,
        isFocused: c === s.id,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ec.default.track(e8.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !1,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eR._.dispatch(e8.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(ti, { active: e, user: i, channel: s, isRestricted: r }),
    });
}
var tr = n(308528),
    tc = n(928658);
function to(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eZ.I)(t);
    if (null == o && (c || r)) return null;
    function u() {
        (s?.(), tr.A.closePrivateChannel(t.id));
    }
    return (0, l.jsx)(I.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            (e.stopPropagation(), n?.(), null != o && (0, tc.b8)(o, u));
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: F.intl.string(F.t.HHZmDn),
    });
}
var tu = n(489768);
function td(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, Q.r)(),
        r = ep(),
        o = s.useCallback(() => {
            ((0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" }),
                ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        u = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        d = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), a && (0, H.iN)(i.id));
        }, [i.id, a]),
        {
            acceptMessageRequest: m,
            isAcceptLoading: x,
            isUserProfileLoading: g,
            isOptimisticAccepted: A,
        } = (0, z.t)({ user: n, onAcceptSuccess: d, onRejectSuccess: u, onError: o }),
        E = x || g,
        S = E || A;
    return (0, l.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, l.jsx)(tl, { otherUser: n, channel: i, active: t }),
            (0, l.jsxs)("div", {
                className: tu.o1,
                inert: r,
                children: [
                    (0, l.jsx)(I.$, {
                        variant: "secondary",
                        size: "sm",
                        text: F.intl.string(F.t.vicfl6),
                        onClick: function (e) {
                            (m(i.id), e.stopPropagation());
                        },
                        disabled: S,
                        loading: E,
                    }),
                    (0, l.jsx)(to, { channel: i }),
                ],
            }),
        ],
    });
}
function th(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a } = e;
    return (0, l.jsx)(ey, {
        index: t,
        className: n,
        isFocused: !1,
        channel: s,
        user: i,
        onClick: function (e) {
            (e.stopPropagation(),
                O.A.openPrivateChannelAsSidebar({ channelId: s.id, baseChannelId: V.fe, hasSingleMessageRequest: a }),
                ec.default.track(e8.HAw.MESSAGE_REQUEST_PREVIEW_VIEWED, {
                    is_spam: !0,
                    channel_id: s.id,
                    other_user_id: i.id,
                }),
                setTimeout(() => {
                    eR._.dispatch(e8.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: s.id });
                }, 0));
        },
        children: (e) => (0, l.jsx)(td, { active: e, user: i, channel: s }),
    });
}
var tm = n(324098);
function tx() {
    let e,
        t,
        n,
        i = s.useRef(null),
        u =
            ((e = (0, o.bG)([ea.A], () => ea.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ea.A, G.A],
                () => {
                    let e = ea.A.getMutablePrivateChannels();
                    return eS(
                        Array.from(G.A.getSpamChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [eu.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = eu.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        d = (0, ef.I)(),
        A = (0, Q.r)(),
        E = em(),
        S = (0, C.A)("message-requests-spam-list"),
        { channelId: f } = (0, eg.N)(),
        j = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: p } = (0, z.t)({ onError: j }),
        b = s.useCallback(() => {
            p(u.map((e) => e.channel.id));
        }, [u, p]);
    (0, v.Ay)(() => {
        (ec.default.track(e8.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: d }),
            ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, l.jsx)(
                    th,
                    {
                        index: t,
                        className: a()({ [tm.wH]: null != f && f === i, [tm.wZ]: null != f && f === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: A,
                    },
                    i,
                );
            },
            [u, A, f],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tm.Gf,
                        children: [
                            F.intl.format(F.t.C79Edh, { count: d }),
                            E && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tm.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(x.Q, {
                                              textVariant: "text-sm/normal",
                                              text: F.intl.string(F.t.p6t7RC),
                                              onClick: b,
                                              "aria-label": F.intl.string(F.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [d, b, E],
        );
    return 0 === u.length
        ? (0, l.jsx)(eN, { section: eC.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: S,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          g.OZ,
                          {
                              className: tm.p_,
                              innerRole: n,
                              innerAriaLabel: F.intl.string(F.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: I,
                              renderRow: _,
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
var tg = n(49999),
    tA = n(771338),
    tE = n(999900);
function tS() {
    let e,
        t,
        n,
        i = s.useRef(null),
        u = (0, eA.W)(),
        d =
            ((e = (0, o.bG)([ea.A], () => ea.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ea.A, T.A],
                () => {
                    let e = ea.A.getMutablePrivateChannels();
                    return eS(
                        Array.from(T.A.getMessageRequestChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [eu.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = eu.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        A = (0, Q.k)(),
        E = em(),
        S = U(),
        f = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: j } = (0, z.t)({ onError: f }),
        p = (0, C.A)("message-requests-list"),
        { channelId: v } = (0, eg.N)(),
        b = s.useCallback(() => {
            j(d.map((e) => e.channel.id));
        }, [d, j]),
        _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tA.wH]: null != v && v === i, [tA.wZ]: null != v && v === s });
                return (0, l.jsx)(
                    ta,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: A,
                        isRestricted: S,
                    },
                    i,
                );
            },
            [A, S, d, v],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tA.Gf,
                        children: [
                            u > 0 ? F.intl.formatToPlainString(F.t.rA4iWY, { count: u }) : F.intl.string(F.t.flPU6g),
                            E && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tA.sg,
                                              variant: "eyebrow",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(x.Q, {
                                              onClick: b,
                                              textVariant: "text-sm/normal",
                                              text: F.intl.string(F.t.p6t7RC),
                                              "aria-label": F.intl.string(F.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "title",
                ),
            [u, b, E],
        );
    return (d.length !== u && ee.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === d.length)
        ? (0, l.jsx)(eN, { section: eC.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: p,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          g.OZ,
                          {
                              className: tA.p_,
                              innerRole: n,
                              innerAriaLabel: F.intl.string(F.t.e7GWjQ),
                              ref: (e) => {
                                  ((i.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: 26,
                              rowHeight: 73,
                              renderSection: I,
                              renderRow: _,
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
function tf(e) {
    let { channel: t, pageWidth: n, onSidebarResize: s } = e,
        i = n - e8.ItT;
    return (0, l.jsx)(b.A, {
        sidebarType: b.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: s,
        children: (0, l.jsx)(B, { channel: t, baseChannelId: V.fe }),
    });
}
function tj(e) {
    let t = (0, ex.A)();
    return (s.useEffect(() => {
        (0, J.Vh)(u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || er.A.hasLayers() || (0, A.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)(Y.Ay, {
              contentTypes: [u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tg.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === u.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(d.A, {
                                          ...a,
                                          title: F.intl.string(F.t.hRT8tc),
                                          body: F.intl.string(F.t.apPgJG),
                                          actions: [
                                              { text: F.intl.string(F.t.LNoAQW), onClick: () => i(tg.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(d.A, {
                                          ...a,
                                          title: F.intl.string(F.t.hRT8tc),
                                          body: F.intl.string(F.t["8JWods"]),
                                          actions: [
                                              {
                                                  text: F.intl.string(F.t.JN6EOJ),
                                                  onClick: (e) => {
                                                      (e.stopPropagation(),
                                                          (0, ei.openUserSettings)(
                                                              es.X.PERMISSIONS_MESSAGE_REQUESTS_SETTING,
                                                          ),
                                                          i(tg.i.TAKE_ACTION));
                                                  },
                                              },
                                              {
                                                  text: F.intl.string(F.t.LNoAQW),
                                                  onClick: () => i(tg.i.USER_DISMISS),
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
function tp(e) {
    let { section: t } = e;
    return t === eC.zz.SPAM ? (0, l.jsx)(tx, {}) : (0, l.jsx)(tS, {});
}
let tv = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, eA.W)();
    (0, v.Ay)(() => {
        (j.I(e8.BVt.MESSAGE_REQUESTS),
            (0, en.d0)("message-requests"),
            ec.default.track(e8.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            ee.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW }));
    });
    let i = (0, o.bG)([el.A], () => el.A.theme),
        r = (0, ef.I)(),
        [u, d] = s.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === et.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        x = null != h,
        g = (0, o.bG)(
            [ea.A],
            () => {
                let e = ea.A.getChannel(m);
                return null != e && e.isPrivate() ? e : null;
            },
            [m],
        ),
        A = (0, ed.c)(m),
        p = (0, o.bG)([eo.A, eu.default], () => {
            if (null == m) return !1;
            let e = eu.default.getCurrentUser();
            return null != eo.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        C = s.useRef(null);
    s.useEffect(() => {
        null != m && !A && p && x && ((0, H.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, p, x, A]);
    let [b, _] = s.useState(eC.zz.REQUESTS);
    function I(e) {
        _(e);
    }
    return (
        (0, X.HU)({ location: F.intl.string(F.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(tE.TE, tA.kL, { [tE.js]: x, [tE.jl]: x && u }),
                    children: [
                        (0, l.jsx)(E.N, {
                            theme: i,
                            children: (e) =>
                                (0, l.jsxs)($.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)($.A.Icon, { icon: S.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tj, {
                                            targetElementRef: C,
                                            children: (0, l.jsx)($.A.Title, {
                                                ref: C,
                                                children: F.intl.string(F.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)($.A.Divider, {}),
                                        (0, l.jsxs)(f.V, {
                                            "aria-label": F.intl.string(F.t.e7GWjQ),
                                            selectedItem: b,
                                            type: "top-pill",
                                            onItemSelect: I,
                                            children: [
                                                (0, l.jsx)(f.V.Item, {
                                                    id: eC.zz.REQUESTS,
                                                    className: tA.AS,
                                                    children: F.intl.string(F.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(f.V.Item, {
                                                    id: eC.zz.SPAM,
                                                    className: tA.AS,
                                                    children:
                                                        0 === r
                                                            ? F.intl.string(F.t.ulKXHp)
                                                            : F.intl.formatToPlainString(F.t["5jtrlZ"], { count: r }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        }),
                        (0, l.jsx)("div", {
                            className: tE.Qs,
                            children: (0, l.jsx)(ej.Provider, {
                                value: null != g && u,
                                children: (0, l.jsx)(tp, { section: b }),
                            }),
                        }),
                    ],
                }),
                null != g &&
                    (0, l.jsx)(tf, {
                        channel: g,
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            d(t);
                        },
                    }),
            ],
        })
    );
});
