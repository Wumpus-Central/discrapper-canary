(n.r(t), n.d(t, { default: () => tv }));
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(837381),
    c = n(731738),
    o = n(17928),
    d = n(554146),
    u = n(43105),
    h = n(858899),
    m = n(834730),
    g = n(123292),
    A = n(475825),
    E = n(192308),
    x = n(43990),
    S = n(849516),
    f = n(761508),
    j = n(944791),
    p = n(456412),
    b = n(964486),
    v = n(260762),
    C = n(812771),
    _ = n(789645),
    I = n(821609),
    N = n(355622),
    R = n(58736),
    M = n(353428),
    T = n(380335),
    y = n(157550),
    G = n(923457),
    k = n(36149),
    P = n(207560);
function U() {
    let e = (0, k.uE)(),
        t = (0, P.yv)(G.p.MESSAGE_REQUEST_RESTRICTIONS);
    return !e && t;
}
var Q = n(336590),
    z = n(92650),
    W = n(959698),
    w = n(977347),
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
        d = (0, o.bG)([y.A], () => y.A.isSpam(t.id)),
        u = U() && c && !d,
        g = (0, w.D)(t.id, t.getRecipientId()),
        A = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), c && a && (0, H.iN)(t.id), d && r && (0, H.iN)(t.id));
        }, [t.id, d, r, c, a]),
        E = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" });
        }, []),
        { markAsNotSpam: x } = (0, z.t)({ onAcceptSuccess: A, onError: E });
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
            d &&
                (0, l.jsxs)("div", {
                    className: L.F,
                    children: [
                        (0, l.jsx)(m.E, { variant: "body-sm/normal", children: F.intl.string(F.t.XVOKgj) }),
                        (0, l.jsx)("div", {
                            className: L.$,
                            children: (0, l.jsx)(I.$, {
                                size: "sm",
                                onClick: () => x(t, g),
                                text: F.intl.string(F.t.koqL3Z),
                            }),
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: K.T,
                children: (0, l.jsx)(W.A.Provider, {
                    value: u,
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
    ed = n(287809),
    eu = n(321404),
    eh = n(572009);
function em() {
    return (0, o.bG)([ed.default], () => (0, eh.I9)(ed.default.getCurrentUser()));
}
var eg = n(166643),
    eA = n(957283),
    eE = n(411976),
    ex = n(935208);
function eS(e) {
    return e.sort((e, t) => ex.default.compare(e.lastMessageId, t.lastMessageId)).reverse();
}
var ef = n(790499);
let ej = s.createContext(!1);
function ep() {
    return s.useContext(ej);
}
var eb = n(396478),
    ev = n(687599),
    eC = n(477694),
    e_ = n(317017),
    eI = n(826223);
function eN(e) {
    let { section: t } = e,
        n = (0, o.bG)([el.A], () => el.A.theme);
    return (0, l.jsxs)(eb.pp, {
        theme: n,
        className: eC.y,
        children: [
            (0, l.jsx)(eb.G8, { width: 415, height: 200, lightSrc: eI, darkSrc: e_ }),
            (0, l.jsx)(eb.SG, { note: t === ev.zz.SPAM ? F.intl.string(F.t.hasFPQ) : F.intl.string(F.t.SXrqTf) }),
        ],
    });
}
var eR = n(625494),
    eM = n(615300),
    eT = n(559106),
    ey = n(442433),
    eG = n(201030);
let ek = function (e) {
    let {
            index: t,
            children: i,
            user: c,
            channel: o,
            onClick: d,
            isFocused: u,
            isActive: h,
            onOtherHover: m,
            className: g,
        } = e,
        [A, E] = s.useState(!1),
        [x, S] = s.useState(!1);
    function f() {
        (E(!0), !u || h || x || m?.());
    }
    function j() {
        E(!1);
    }
    return (0, l.jsx)(r.tG, {
        id: o.id,
        children: (e) =>
            (0, l.jsx)(eT.vN, {
                offset: { left: -8, right: -8 },
                children: (0, l.jsx)(eM.A.div, {
                    className: a()(eG.Cf, g, { [eG.vu]: h || x, [eG.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != c &&
                            (S(!0),
                            (0, ey.L3)(
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
                    onClick: d ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: i(A || h || x),
                }),
            }),
    });
};
var eP = n(692617),
    eU = n(97808),
    eQ = n(778712),
    ez = n(297413),
    eW = n(775602),
    ew = n(29160),
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
    e0 = n(448368),
    e7 = n(538355),
    e3 = n(302031),
    e9 = n(253932),
    e1 = n(576705),
    e8 = n(652215),
    e5 = n(838541),
    e6 = n(282573),
    e4 = n(165648);
let e2 = { formatInline: !0, noStyleAndInteraction: !0 },
    te = s.memo(function (e) {
        let { channel: t } = e,
            { loaded: n, error: s, message: i } = (0, eZ.I)(t),
            { isBlocked: r, isIgnored: c } = (0, o.cf)(
                [eD.A],
                () => ({
                    isBlocked: null != i && eD.A.isBlockedForMessage(i),
                    isIgnored: null != i && eD.A.isIgnoredForMessage(i),
                }),
                [i],
            ),
            d = (0, o.bG)([e1.A], () => e1.A.can(e8.xBc.MANAGE_MESSAGES, t)),
            u = e9.gs.useSetting(),
            { content: h } = (0, e7.A)(i ?? null, e2),
            g = i?.content != null && "" !== i.content ? h : null,
            A = null;
        if (s)
            A = (0, l.jsx)(m.E, {
                className: e6.G4,
                variant: "body-sm/normal",
                color: "text-muted",
                children: F.intl.string(F.t.BZHld2),
            });
        else if (n)
            if (null != i && r)
                A = (0, l.jsx)(m.E, {
                    className: e6.G4,
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: F.intl.string(F.t["WPe+xL"]),
                });
            else if (null != i && c)
                A = (0, l.jsx)(m.E, {
                    className: e6.G4,
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: F.intl.string(F.t.uxrh1O),
                });
            else if (null != i) {
                let { contentPlaceholder: e, renderedContent: t } = (0, e0.o)(i, g, r, c, a()(e6.BK, e4.tZ), {
                    leadingIconClass: e6.AF,
                    trailingIconClass: e6.AF,
                    iconSize: e5.eJ,
                });
                A =
                    null != t
                        ? (0, l.jsx)(m.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              className: e6.BK,
                              children: t,
                          })
                        : (0, l.jsx)(m.E, {
                              tag: "span",
                              variant: "body-sm/normal",
                              color: "text-muted",
                              className: e6.G4,
                              children: e,
                          });
            } else
                A = (0, l.jsx)(m.E, {
                    className: e6.G4,
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: F.intl.string(F.t["0KfDxM"]),
                });
        else A = null;
        let E = (0, e$.A)(u, d);
        return (0, l.jsx)(e3.Bs.Provider, { value: E, children: (0, l.jsx)(eY.M, { className: e6.JY, children: A }) });
    });
var tt = n(599036);
function tn(e) {
    let t,
        n,
        { userId: i } = e,
        a =
            ((t = (0, o.bG)([ed.default], () => ed.default.getUser(i))),
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
              className: tt.tE,
              variant: "body-sm/normal",
              color: "text-muted",
              children: F.intl.string(F.t.jpY0X5),
          })
        : (0, l.jsxs)("div", {
              className: tt.I9,
              children: [
                  (0, l.jsx)(eP.A, { guilds: a, maxGuilds: 3, size: eH.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                  (0, l.jsx)(m.E, {
                      className: tt.tE,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: F.intl.format(F.t.eE3oep, { count: a.length }),
                  }),
              ],
          });
}
let tl = eK.Ay.getEnableHardwareAcceleration() ? eU.Js : eU.eu;
function ts(e) {
    let t,
        n,
        { channel: s, otherUser: i, active: a, isRestricted: r = !1 } = e,
        c = (0, o.bG)([eW.Ay], () => eW.Ay.useReducedMotion),
        d = (0, o.bG)([eD.A], () => (null == i ? null : eD.A.getNickname(i.id))),
        u = !c && a,
        h =
            ((t = (0, eZ.I)(s)),
            null ==
            (n = (function (e) {
                let { lastMessageId: t, message: n, loaded: l } = e;
                return l && null != n
                    ? ex.default.extractTimestamp(n.id)
                    : null != t
                      ? ex.default.extractTimestamp(t)
                      : null;
            })({ lastMessageId: (0, o.bG)([eB.Ay], () => eB.Ay.lastMessageId(s.id)), ...t }))
                ? ""
                : (0, eL.aK)(n)),
        { avatarDecorationSrc: g } = (0, eq.A)({
            user: i,
            size: (0, eV.Te)(eQ._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tl, {
                className: tt.my,
                src: (0, eO.Y)(s, 40, u),
                avatarDecoration: g,
                size: eQ._3.SIZE_40,
                "aria-label": i?.username ?? F.intl.string(F.t["30mdIx"]),
            }),
            (0, l.jsxs)("div", {
                className: tt.yt,
                children: [
                    (0, l.jsxs)("div", {
                        className: tt.rU,
                        children: [
                            (0, l.jsx)(ez.A, {
                                nick: d,
                                user: i,
                                showAccountIdentifier: !0,
                                className: tt.I8,
                                usernameClass: tt.Xh,
                                discriminatorClass: null != eF.Ay.getGlobalName(i) ? tt.vl : tt.D2,
                            }),
                            (0, l.jsx)(m.E, {
                                className: tt.L7,
                                color: "text-muted",
                                variant: "body-xs/normal",
                                children: h,
                            }),
                        ],
                    }),
                    (0, l.jsx)(ew.A, {
                        hoverText: r
                            ? (0, l.jsx)(m.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: F.intl.string(F.t.fnduP5),
                              })
                            : (0, l.jsx)(te, { channel: s }),
                        forceHover: a,
                        children: (0, l.jsx)(tn, { userId: i.id }),
                    }),
                ],
            }),
        ],
    });
}
var ti = n(885207);
function ta(e) {
    let { active: t, user: n, channel: i, isRestricted: a = !1 } = e,
        r = (0, Q.k)(),
        c = ep(),
        o = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        d = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        u = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), r && (0, H.iN)(i.id));
        }, [i.id, r]),
        {
            acceptMessageRequest: m,
            rejectMessageRequest: g,
            isAcceptLoading: A,
            isRejectLoading: E,
            isUserProfileLoading: x,
            isOptimisticAccepted: S,
            isOptimisticRejected: f,
        } = (0, z.t)({ user: n, onAcceptSuccess: u, onRejectSuccess: d, onError: o }),
        j = A || E || x || S || f;
    return (0, l.jsxs)("div", {
        className: ti.kL,
        children: [
            (0, l.jsx)(ts, { channel: i, otherUser: n, active: t, isRestricted: a }),
            (0, l.jsxs)("div", {
                className: ti.o1,
                inert: c,
                children: [
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "secondary",
                            size: "sm",
                            text: F.intl.string(a ? F.t.BVN4pL : F.t.B2nygW),
                            onClick: function (e) {
                                (e.stopPropagation(), g(i.id));
                            },
                            disabled: j,
                            loading: E || f,
                        }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: ti.x6,
                        children: (0, l.jsx)(I.$, {
                            variant: "primary",
                            size: "sm",
                            text: F.intl.string(F.t.Kz8Pwr),
                            onClick: function (e) {
                                (e.stopPropagation(), m(i.id));
                            },
                            disabled: j,
                            loading: A || x || S,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tr(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a, isRestricted: r = !1 } = e,
        { channelId: c } = (0, eA.N)();
    return (0, l.jsx)(ek, {
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
        children: (e) => (0, l.jsx)(ta, { active: e, user: i, channel: s, isRestricted: r }),
    });
}
var tc = n(308528),
    to = n(928658);
function td(e) {
    let { channel: t, onReportClick: n, onReportSubmit: s, onMouseEnter: i, onMouseLeave: a } = e,
        { error: r, loaded: c, message: o } = (0, eZ.I)(t);
    if (null == o && (c || r)) return null;
    function d() {
        (s?.(), tc.A.closePrivateChannel(t.id));
    }
    return (0, l.jsx)(I.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == o,
        onClick: function (e) {
            (e.stopPropagation(), n?.(), null != o && (0, to.b8)(o, d));
        },
        onMouseEnter: i,
        onMouseLeave: a,
        text: F.intl.string(F.t.HHZmDn),
    });
}
var tu = n(489768);
function th(e) {
    let { active: t, user: n, channel: i } = e,
        a = (0, Q.r)(),
        r = ep(),
        o = s.useCallback(() => {
            ((0, h.P0)({ text: F.intl.string(F.t.pIQ3h4), variant: "critical" }),
                ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW }));
        }, []),
        d = s.useCallback(() => {
            O.A.closeChannelSidebar(V.fe);
        }, []),
        u = s.useCallback(() => {
            (O.A.closeChannelSidebar(V.fe), a && (0, H.iN)(i.id));
        }, [i.id, a]),
        {
            acceptMessageRequest: m,
            isAcceptLoading: g,
            isUserProfileLoading: A,
            isOptimisticAccepted: E,
        } = (0, z.t)({ user: n, onAcceptSuccess: u, onRejectSuccess: d, onError: o }),
        x = g || A,
        S = x || E;
    return (0, l.jsxs)("div", {
        className: tu.kL,
        children: [
            (0, l.jsx)(ts, { otherUser: n, channel: i, active: t }),
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
                        loading: x,
                    }),
                    (0, l.jsx)(td, { channel: i }),
                ],
            }),
        ],
    });
}
function tm(e) {
    let { index: t, className: n, channel: s, user: i, hasSingleMessageRequest: a } = e;
    return (0, l.jsx)(ek, {
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
        children: (e) => (0, l.jsx)(th, { active: e, user: i, channel: s }),
    });
}
var tg = n(324098);
function tA() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d =
            ((e = (0, o.bG)([ea.A], () => ea.A.getPrivateChannelsVersion())),
            (t = (0, o.yK)(
                [ea.A, y.A],
                () => {
                    let e = ea.A.getMutablePrivateChannels();
                    return eS(
                        Array.from(y.A.getSpamChannelIds())
                            .map((t) => e[t])
                            .filter((e) => null != e),
                    );
                },
                [e],
            )),
            (n = (0, o.cf)(
                [ed.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = ed.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        u = (0, ef.I)(),
        E = (0, Q.r)(),
        x = em(),
        S = (0, v.A)("message-requests-spam-list"),
        { channelId: f } = (0, eA.N)(),
        j = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: p } = (0, z.t)({ onError: j }),
        C = s.useCallback(() => {
            p(d.map((e) => e.channel.id));
        }, [d, p]);
    (0, b.Ay)(() => {
        (ec.default.track(e8.HAw.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: u }),
            ee.A.increment({ name: c.K.SPAM_MESSAGE_REQUEST_VIEW }));
    });
    let _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = d[t],
                    s = d[t + 1]?.channel?.id,
                    i = n.channel.id;
                return (0, l.jsx)(
                    tm,
                    {
                        index: t,
                        className: a()({ [tg.wH]: null != f && f === i, [tg.wZ]: null != f && f === s }),
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: E,
                    },
                    i,
                );
            },
            [d, E, f],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tg.Gf,
                        children: [
                            F.intl.format(F.t.C79Edh, { count: u }),
                            x && u > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tg.sg,
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(g.Q, {
                                              textVariant: "body-sm/normal",
                                              text: F.intl.string(F.t.p6t7RC),
                                              onClick: C,
                                              "aria-label": F.intl.string(F.t.p6t7RC),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    },
                    "message-requests-spam-title",
                ),
            [u, C, x],
        );
    return 0 === d.length
        ? (0, l.jsx)(eN, { section: ev.zz.SPAM })
        : (0, l.jsx)(r.hD, {
              navigator: S,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          A.OZ,
                          {
                              className: tg.p_,
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
                          "message-requests-spam-list",
                      );
                  },
              }),
          });
}
var tE = n(49999),
    tx = n(771338),
    tS = n(999900);
function tf() {
    let e,
        t,
        n,
        i = s.useRef(null),
        d = (0, eE.W)(),
        u =
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
                [ed.default],
                () => {
                    let e = {};
                    return (
                        t.forEach((t) => {
                            let n = ed.default.getUser(t.recipients[0]);
                            null != n && (e[t.id] = n);
                        }),
                        e
                    );
                },
                [t],
            )),
            s.useMemo(() => t.map((e) => ({ channel: e, user: n[e.id] })), [t, n])),
        E = (0, Q.k)(),
        x = em(),
        S = U(),
        f = s.useCallback(() => {
            (0, h.P0)({ text: F.intl.string(F.t["EDYbS+"]), variant: "critical" });
        }, []),
        { rejectAll: j } = (0, z.t)({ onError: f }),
        p = (0, v.A)("message-requests-list"),
        { channelId: b } = (0, eA.N)(),
        C = s.useCallback(() => {
            j(u.map((e) => e.channel.id));
        }, [u, j]),
        _ = s.useCallback(
            (e) => {
                let { row: t } = e,
                    n = u[t],
                    s = u[t + 1]?.channel?.id,
                    i = n.channel.id,
                    r = a()({ [tx.wH]: null != b && b === i, [tx.wZ]: null != b && b === s });
                return (0, l.jsx)(
                    tr,
                    {
                        index: t,
                        className: r,
                        channel: n.channel,
                        user: n.user,
                        hasSingleMessageRequest: E,
                        isRestricted: S,
                    },
                    i,
                );
            },
            [E, S, u, b],
        ),
        I = s.useCallback(
            () =>
                (0, l.jsxs)(
                    Z.A,
                    {
                        className: tx.Gf,
                        children: [
                            d > 0 ? F.intl.formatToPlainString(F.t.rA4iWY, { count: d }) : F.intl.string(F.t.flPU6g),
                            x && d > 0
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(m.E, {
                                              className: tx.sg,
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              tag: "span",
                                              children: "\u2022",
                                          }),
                                          (0, l.jsx)(g.Q, {
                                              onClick: C,
                                              textVariant: "body-sm/normal",
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
            [d, C, x],
        );
    return (u.length !== d && ee.A.increment({ name: c.K.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === u.length)
        ? (0, l.jsx)(eN, { section: ev.zz.REQUESTS })
        : (0, l.jsx)(r.hD, {
              navigator: p,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: t, role: n, ...s } = e;
                      return (0, l.jsx)(
                          A.OZ,
                          {
                              className: tx.p_,
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
                          "message-requests-list",
                      );
                  },
              }),
          });
}
function tj(e) {
    let { channel: t, pageWidth: n, onSidebarResize: s } = e,
        i = n - e8.ItT;
    return (0, l.jsx)(C.A, {
        sidebarType: C.X.MessageRequestSidebar,
        maxWidth: i,
        onWidthChange: s,
        children: (0, l.jsx)(B, { channel: t, baseChannelId: V.fe }),
    });
}
function tp(e) {
    let t = (0, eg.A)();
    return (s.useEffect(() => {
        (0, J.Vh)(d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
    }, []),
    null == e.targetElementRef.current || er.A.hasLayers() || (0, E.hasAnyModalOpen)())
        ? e.children
        : (0, l.jsx)(Y.Ay, {
              contentTypes: [d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
              children: (n) => {
                  let { visibleContent: s, markAsDismissed: i } = n,
                      a = {
                          position: "bottom",
                          caretConfig: { position: "top", align: "center" },
                          shouldShow: !0,
                          onRequestClose: () => i(tE.i.USER_DISMISS),
                          targetElementRef: e.targetElementRef,
                      };
                  return s === d.M.MESSAGE_REQUEST_SETTINGS_COACH_MARK
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                e.children,
                                t
                                    ? (0, l.jsx)(u.A, {
                                          ...a,
                                          title: F.intl.string(F.t.hRT8tc),
                                          body: F.intl.string(F.t.apPgJG),
                                          actions: [
                                              { text: F.intl.string(F.t.LNoAQW), onClick: () => i(tE.i.TAKE_ACTION) },
                                          ],
                                      })
                                    : (0, l.jsx)(u.A, {
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
                                                          i(tE.i.TAKE_ACTION));
                                                  },
                                              },
                                              {
                                                  text: F.intl.string(F.t.LNoAQW),
                                                  onClick: () => i(tE.i.USER_DISMISS),
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
function tb(e) {
    let { section: t } = e;
    return t === ev.zz.SPAM ? (0, l.jsx)(tA, {}) : (0, l.jsx)(tf, {});
}
let tv = (0, p.A)(function (e) {
    let { width: t } = e,
        n = (0, eE.W)();
    (0, b.Ay)(() => {
        (j.I(e8.BVt.MESSAGE_REQUESTS),
            (0, en.d0)("message-requests"),
            ec.default.track(e8.HAw.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }),
            ee.A.increment({ name: c.K.MESSAGE_REQUEST_VIEW }));
    });
    let i = (0, o.bG)([el.A], () => el.A.theme),
        r = (0, ef.I)(),
        [d, u] = s.useState(!1),
        h = (0, o.bG)([V.Ay], () => {
            let e = V.Ay.getSidebarState(V.fe);
            return null != e && e.type === et.PE.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = h?.channelId,
        g = null != h,
        A = (0, o.bG)(
            [ea.A],
            () => {
                let e = ea.A.getChannel(m);
                return null != e && e.isPrivate() ? e : null;
            },
            [m],
        ),
        E = (0, eu.c)(m),
        p = (0, o.bG)([eo.A, ed.default], () => {
            if (null == m) return !1;
            let e = ed.default.getCurrentUser();
            return null != eo.A.getMessages(m).findNewest((t) => t.author.id === e?.id);
        }),
        v = s.useRef(null);
    s.useEffect(() => {
        null != m && !E && p && g && ((0, H.iN)(m), O.A.closeChannelSidebar(V.fe));
    }, [m, p, g, E]);
    let [C, _] = s.useState(ev.zz.REQUESTS);
    function I(e) {
        _(e);
    }
    return (
        (0, X.HU)({ location: F.intl.string(F.t.e7GWjQ) }),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(tS.TE, tx.kL, { [tS.js]: g, [tS.jl]: g && d }),
                    children: [
                        (0, l.jsx)(x.N, {
                            theme: i,
                            children: (e) =>
                                (0, l.jsxs)($.A, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, l.jsx)($.A.Icon, { icon: S.u, "aria-hidden": !0 }),
                                        (0, l.jsx)(tp, {
                                            targetElementRef: v,
                                            children: (0, l.jsx)($.A.Title, {
                                                ref: v,
                                                children: F.intl.string(F.t.e7GWjQ),
                                            }),
                                        }),
                                        (0, l.jsx)($.A.Divider, {}),
                                        (0, l.jsxs)(f.V, {
                                            "aria-label": F.intl.string(F.t.e7GWjQ),
                                            selectedItem: C,
                                            type: "top-pill",
                                            onItemSelect: I,
                                            children: [
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ev.zz.REQUESTS,
                                                    className: tx.AS,
                                                    children: F.intl.string(F.t["7RFcXZ"]),
                                                }),
                                                (0, l.jsx)(f.V.Item, {
                                                    id: ev.zz.SPAM,
                                                    className: tx.AS,
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
                            className: tS.Qs,
                            children: (0, l.jsx)(ej.Provider, {
                                value: null != A && d,
                                children: (0, l.jsx)(tb, { section: C }),
                            }),
                        }),
                    ],
                }),
                null != A &&
                    (0, l.jsx)(tj, {
                        channel: A,
                        pageWidth: t,
                        onSidebarResize: function (e, t) {
                            u(t);
                        },
                    }),
            ],
        })
    );
});
