i.r(s), i.d(s, { default: () => sm });
var l = i(477900),
    n = i(582128),
    t = i(287809),
    d = i(207803),
    r = i(958805),
    a = i(591179),
    c = i(215530),
    o = i(935462),
    u = i(707554),
    x = i(140735),
    A = i(231723),
    h = i(982168),
    j = i(793574),
    m = i(688810),
    I = i(915089),
    p = i(562153),
    g = i(183555),
    f = i(999291),
    N = i(722868),
    v = i(716804),
    E = i(718019),
    S = i(413492),
    y = i(915614),
    O = i(559506),
    T = i(946356),
    C = i(465829),
    P = i(570314),
    L = i(984545),
    _ = i(571077),
    b = i(587168),
    R = i(982985),
    U = i(983495),
    D = i(305385),
    M = i(17928),
    k = i(761508),
    F = i(834730),
    G = i(351906),
    B = i(364522),
    z = i(297264),
    V = i(534890),
    w = i(687966),
    Y = i(177953),
    H = i(203363),
    W = i(321191),
    X = i(375708),
    K = i(874971);
function J(e) {
    let { icon: s, title: i, description: n } = e;
    return (0, l.jsxs)("div", {
        className: K.nM,
        children: [
            (0, l.jsx)("div", {
                className: K.aL,
                children: (0, l.jsx)(s, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: K.qg,
                children: [
                    (0, l.jsx)(z.D, { variant: "text-xs/semibold", children: i }),
                    (0, l.jsx)(F.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { user: s } = e,
        i = (0, M.bG)([W.A], () => W.A.getUserProfile(s.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, H.Z)(i);
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: K.XG,
        children: [
            n &&
                (0, l.jsx)(J, {
                    icon: V.o,
                    title: X.intl.string(X.t["7Tmhfu"]),
                    description: X.intl.string(X.t.eu5x7z),
                }),
            t && (0, l.jsx)(J, { icon: w._, title: X.intl.string(X.t.awYSsM), description: X.intl.string(X.t.TpsXoC) }),
            d && (0, l.jsx)(J, { icon: Y.n, title: X.intl.string(X.t.WuKeSJ), description: X.intl.string(X.t.wOBmtV) }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                children: X.intl.format(X.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var Z = i(734057),
    q = i(309010),
    $ = i(383199),
    ee = i(514042),
    es = i(194261),
    ei = i(9578),
    el = i(900179),
    en = i(103228);
function et(e) {
    let { termsOfServiceUrl: s, privacyPolicyUrl: i } = e;
    return null == s && null == i
        ? null
        : (0, l.jsx)(el.A, {
              heading: X.intl.string(X.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: en.p_,
                  children: [
                      null != s && (0, l.jsx)(ed, { icon: ee.o, url: s, children: X.intl.string(X.t.s7STcY) }),
                      null != i && (0, l.jsx)(ed, { icon: es.X, url: i, children: X.intl.string(X.t.kH3JR5) }),
                  ],
              }),
          });
}
function ed(e) {
    let { icon: s, url: i, children: n } = e;
    return (0, l.jsxs)(ei.A, {
        href: i,
        className: en.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(s, { className: en.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(F.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var er = i(308244),
    ea = i(743987),
    ec = i(503026),
    eo = i(347805),
    eu = i(518477),
    ex = i(663036);
function eA(e) {
    let { userId: s } = e,
        i = (0, v.g)(),
        { trackUserProfileAction: n } = (0, g.NJ)();
    return (0, l.jsx)(el.A, {
        heading: X.intl.string(X.t["mQKv+v"]),
        scrollTargetId: eu.bk.NOTE,
        children: (0, l.jsx)(eo.A, {
            userId: s,
            className: ex.N,
            autoFocus: i === eu.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var eh = i(9060);
function ej(e) {
    let { user: s, displayProfile: i, guildId: n, onClose: t } = e,
        d = (0, M.bG)([W.A], () => W.A.getUserProfile(s.id)?.application),
        r = (0, M.bG)([Z.A, q.Ay], () => Z.A.getChannel(q.Ay.getChannelId()));
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: eh.XG,
        children: [
            (0, l.jsx)(er.E, { userBio: i?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)($.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(et, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            i?.guildId != null && (0, l.jsx)(ec.A, { userId: s.id, guildId: i.guildId }),
            (0, l.jsx)(el.A, {
                heading: X.intl.string(X.t["A//N4k"]),
                children: (0, l.jsx)(ea.A, { userId: s.id, guildId: n, tooltipDelay: eu.In }),
            }),
            (0, l.jsx)(eA, { userId: s.id }),
        ],
    });
}
var em = i(652215),
    eI = i(289873),
    ep = i(349288),
    eg = i(517164),
    ef = i(290863),
    eN = i(461213),
    ev = i(975571),
    eE = i(146655),
    eS = i(489379),
    ey = i(402857),
    eO = i(353394),
    eT = i(64622),
    eC = i(986712),
    eP = i(984621),
    eL = i(330114);
function e_(e) {
    let { user: s, currentUser: i, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eE.A)(s.id),
        { voiceChannel: c, voiceActivity: o } = (0, eS.A)({ userId: s.id, guildId: n }),
        u = (0, M.bG)([eg.A], () => eg.A.isFetchingUserOutbox(s.id)),
        x = s.id === i.id,
        A = (0, M.bG)([eN.A, ef.A], () => {
            let e = x ? eN.A.getStatus() : ef.A.getStatus(s.id);
            return e === em.clD.OFFLINE || e === em.clD.INVISIBLE;
        }),
        h = (0, M.bG)([W.A], () => W.A.getUserProfile(s.id)?.private === !0),
        j = d.length > 0 || null != a,
        m = !h && null == a && null == o && null != c,
        I = !A && (j || m),
        p = r.length > 0;
    return I || p || !u
        ? (0, l.jsxs)(B.Ip, {
              className: eP.XG,
              fade: !0,
              children: [
                  I
                      ? (0, l.jsx)(el.A, {
                            "aria-label": X.intl.string(X.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: eP.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eT.A, {
                                                user: s,
                                                currentUser: i,
                                                stream: a,
                                                onClose: t,
                                            }),
                                        }),
                                    d.map((e, n) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(ey.A, {
                                                    user: s,
                                                    currentUser: i,
                                                    activity: e,
                                                    onClose: t,
                                                }),
                                            },
                                            `live-${n}`,
                                        ),
                                    ),
                                    m &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eC.A, {
                                                user: s,
                                                currentUser: i,
                                                voiceChannel: c,
                                                onClose: t,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  p
                      ? (0, l.jsx)(el.A, {
                            heading: X.intl.string(X.t.M0zgnT),
                            introText: x
                                ? X.intl.format(X.t["4bk9Ak"], {
                                      learnMoreHook: (e, s) =>
                                          (0, l.jsx)(
                                              ep.Anchor,
                                              {
                                                  href: ev.A.getArticleURL(em.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              s,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: eu.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eP.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eO.A, { user: s, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(eI.y, {}) });
}
var eb = i(695366),
    eR = i(661531),
    eU = i(821269),
    eD = i(93246),
    eM = i(773669),
    ek = i(967198),
    eF = i(346713),
    eG = i(484509),
    eB = i(46937),
    ez = i(361311);
function eV(e) {
    let { user: s, displayProfile: i, onClose: n } = e,
        { trackUserProfileAction: t } = (0, g.NJ)(),
        d = (0, M.bG)([ek.A], () => ek.A.getGuildId()),
        r = (0, eU.q)({ userId: s.id }),
        a = (0, M.bG)([G.A], () => G.A.hidePersonalInformation),
        c = (0, M.bG)([eM.default], () => eM.default.locale),
        o = (0, eG.A)(s.id),
        u = (0, eF.A)(s.id);
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: eh.XG,
        children: [
            i?.bio != null && i?.bio !== "" && !a && (0, l.jsx)(er.A, { userBio: i.bio, setLineClamp: !1 }),
            i?.guildId != null && (0, l.jsx)(ec.A, { userId: s.id, guildId: i.guildId }),
            s.isProvisional &&
                (0, l.jsx)(el.A, {
                    heading: X.intl.string(X.t.Iyka0U),
                    headingIcon: (0, l.jsx)(eb.E, { size: "xxs", color: eR.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(eD.T, { userId: s.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: X.intl.string(X.t["Uv/eTx"]),
                    children: (0, l.jsx)(ez.A, { applicationIds: r }),
                }),
            (0, l.jsx)(el.A, {
                heading: X.intl.string(X.t.a6XYD9),
                children: (0, l.jsx)(ea.A, { userId: s.id, guildId: i?.guildId, tooltipDelay: eu.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: X.intl.string(X.t["3fe7U5"]),
                    scrollTargetId: eu.bk.CONNECTIONS,
                    children: (0, l.jsx)(eB.Ay, { connectedAccounts: o, className: eh.oQ, userId: s.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: X.intl.string(X.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eB.Wc,
                            {
                                className: eh.MI,
                                applicationRoleConnection: e,
                                locale: c,
                                onApplicationClicked: () => {
                                    t({ action: "PRESS_APP_CONNECTION" }), n();
                                },
                                selectedGuildId: d ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(eA, { userId: s.id }),
        ],
    });
}
var ew = i(163126),
    eY = i(913453),
    eH = i(229187),
    eW = i(975732),
    eX = i(503062);
function eK(e) {
    let { user: s, guildId: i, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eY.A)(s),
        { analyticsLocations: a } = (0, m.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, ew.A)();
    return (
        n.useEffect(() => {
            (0, eH.A)(s.id, u);
        }, [s.id, u]),
        (0, l.jsx)(B.Ip, {
            className: eL.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(eI.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eL.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eL.on }),
                                (0, l.jsx)("div", { className: eL.BI, children: X.intl.string(X.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: s, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eX.A,
                                {
                                    user: n,
                                    status: r,
                                    guildId: i,
                                    channelId: t,
                                    onSelect: () => {
                                        var e;
                                        d?.(),
                                            o({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = n.id),
                                            (0, eW.openUserProfileModal)({
                                                ...c,
                                                userId: e,
                                                sourceAnalyticsLocations: a,
                                            });
                                    },
                                },
                                s,
                            );
                        }),
        })
    );
}
var eJ = i(398590),
    eQ = i(345942),
    eZ = i(51943);
function eq(e) {
    let { user: s, onClose: i } = e,
        { trackUserProfileAction: n } = (0, g.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eY.A)(s);
    return (0, l.jsx)(B.Ip, {
        className: eL.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(eI.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eZ.A,
                            {
                                user: s,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eQ.u)(e), i(), (0, eJ.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eL.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eL.vC }),
                            (0, l.jsx)("div", { className: eL.BI, children: X.intl.string(X.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e$ = i(763084);
function e0(e) {
    let { section: s, user: i, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return s === eu.RP.ACTIVITY
        ? (0, l.jsx)(e_, { user: i, currentUser: n, guildId: d, onClose: a })
        : s === eu.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eK, { user: i, guildId: d, channelId: r, onClose: a })
          : s === eu.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eq, { user: i, onClose: a })
            : s === eu.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(Q, { user: i })
              : s === eu.RP.BOT_INFO
                ? (0, l.jsx)(ej, { user: i, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(eV, { user: i, displayProfile: t, onClose: a });
}
function e3(e) {
    let {
            user: s,
            currentUser: i,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = eu.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, M.bG)([G.A], () => G.A.hidePersonalInformation),
        [x, A] = n.useState(
            () =>
                r.find((e) => {
                    let { section: s } = e;
                    return s === a;
                })?.section ?? r[0]?.section,
        );
    n.useEffect(() => {
        null == r.find((e) => e.section === x) && A(r[0].section);
    }, [r, x]);
    let h = n.useCallback(
        (e) => {
            o({ action: "PRESS_SECTION", section: e }), A(e);
        },
        [o],
    );
    return u
        ? (0, l.jsx)("div", {
              className: e$.kL,
              children: (0, l.jsxs)("div", {
                  className: eL.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eL.hB }),
                      (0, l.jsx)("div", { className: eL.BI, children: X.intl.string(X.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e$.kL,
              children: [
                  (0, l.jsx)(k.V, {
                      className: e$.$H,
                      type: "top",
                      selectedItem: x,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: s, text: i } = e;
                          return (0, l.jsx)(
                              k.V.Item,
                              {
                                  className: e$.YU,
                                  id: s,
                                  "aria-label": i,
                                  children: (0, l.jsx)(F.E, { variant: "text-sm/normal", children: i }),
                              },
                              s,
                          );
                      }),
                  }),
                  (0, l.jsx)(e0, {
                      items: r,
                      section: x,
                      user: s,
                      currentUser: i,
                      displayProfile: t,
                      guildId: d,
                      onClose: c,
                  }),
              ],
          });
}
var e5 = i(186272),
    e9 = i(996988),
    e1 = i(985253),
    e2 = i(134492);
function e7(e) {
    let {
            user: s,
            currentUser: i,
            guildId: t,
            originGuildId: d,
            channelId: r,
            messageId: a,
            roleId: c,
            sessionId: M,
            initialTabSection: k,
            initialScrollTarget: F,
            transitionState: G,
            openedAt: B,
            onClose: z,
            sourceAnalyticsLocations: V = [],
        } = e,
        w = t === em.ME ? void 0 : t,
        Y = (0, f.Ay)(s.id, w),
        H = p.Ay.getName(w, r, s),
        W = Y?.guildId ?? w,
        K = n.useCallback(() => {
            (0, D.A)({ user: s, guildId: W, alt: H });
        }, [H, W, s]),
        J = (0, I.GV)(),
        { analyticsLocations: Q } = (0, m.Ay)([...V, j.A.USER_PROFILE_MODAL]),
        Z = (0, g.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: M,
            guildId: w,
            channelId: r,
            messageId: a,
            roleId: c,
        }),
        q = (function (e) {
            let { mutualGuilds: s } = (0, eY.A)(e),
                i = s?.length;
            return [
                { section: eu.RP.BOT_INFO, text: X.intl.string(X.t.ZzAR2Y) },
                { section: eu.RP.MUTUAL_GUILDS, text: (0, e5.A)(i) },
                { section: eu.RP.BOT_DATA_ACCESS, text: X.intl.string(X.t.WstFb0) },
            ];
        })(s),
        $ = (0, N.A)({ user: s, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(m.f5, {
        value: Q,
        children: (0, l.jsx)(g.of, {
            value: Z,
            openedAt: B,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(v.N, {
                value: F,
                children: (0, l.jsx)(o.EO, {
                    "data-migration-pending": !0,
                    transitionState: G,
                    className: e2.zr,
                    hideShadow: !0,
                    "aria-labelledby": J,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: J, children: X.intl.format(X.t.KRe1Fk, { name: H }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: s,
                            displayProfile: Y,
                            themeType: e9.d.MODAL,
                            children: [
                                (0, l.jsx)(b.A, {
                                    children: (0, l.jsx)(L.A, { user: s, guildId: w, viewProfileItem: $ }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(y.A, { user: s, displayProfile: Y, themeType: e9.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e2.El,
                                            children: [
                                                (0, l.jsx)(E.A, {
                                                    user: s,
                                                    displayProfile: Y,
                                                    guildId: w,
                                                    channelId: r,
                                                    avatarSize: e1.T[e9.d.MODAL].avatarSize,
                                                    onOpenAvatar: K,
                                                }),
                                                (0, l.jsx)(U.A, {
                                                    user: s,
                                                    themeType: e9.d.MODAL,
                                                    hasEntered: G === A.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e2.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e2.jS,
                                                            children: (0, l.jsx)(R.e, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e2.pg,
                                                            children: (0, l.jsx)(R.l, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(_.A, { user: s, guildId: w }),
                                                        (0, l.jsx)(P.A, { user: s }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(O.A, { userId: s.id, className: e2.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(C.Ay, {
                                            className: e2.eF,
                                            user: s,
                                            guildId: w,
                                            displayName: H,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: Y,
                                                themeType: e9.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e3, {
                                            user: s,
                                            currentUser: i,
                                            displayProfile: Y,
                                            guildId: w,
                                            items: q,
                                            initialSection: k ?? eu.RP.BOT_INFO,
                                            onClose: z,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    });
}
var e6 = i(480335),
    e8 = i(713517),
    e4 = i(35241);
function se(e) {
    let {
            user: s,
            guildId: i,
            channelId: t,
            messageId: d,
            roleId: r,
            sessionId: a,
            transitionState: c,
            openedAt: A,
            onClose: h,
            sourceAnalyticsLocations: N = [],
        } = e,
        v = i === em.ME ? void 0 : i,
        O = (0, f.Ay)(s.id, v),
        P = p.Ay.getName(v, t, s),
        L = O?.guildId ?? v,
        _ = n.useCallback(() => {
            (0, D.A)({ user: s, guildId: L, alt: P });
        }, [P, L, s]),
        R = (0, I.GV)(),
        { analyticsLocations: U } = (0, m.Ay)([...N, j.A.USER_PROFILE_MODAL]),
        M = (0, g.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: a,
            guildId: v,
            channelId: t,
            messageId: d,
            roleId: r,
        }),
        G = n.useRef(null),
        z = (0, e8.M)(G);
    return (0, l.jsx)(m.f5, {
        value: U,
        children: (0, l.jsx)(g.of, {
            value: M,
            openedAt: A,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e2.zr,
                hideShadow: !0,
                "aria-labelledby": R,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: R, children: X.intl.format(X.t.KRe1Fk, { name: P }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: s,
                            displayProfile: O,
                            themeType: e9.d.MODAL,
                            ref: O?.profileEffect != null ? G : void 0,
                            children: [
                                (0, l.jsx)(b.A, { children: (0, l.jsx)(e4.A, { user: s }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(y.A, { user: s, displayProfile: O, themeType: e9.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e2.El,
                                            children: (0, l.jsx)(E.A, {
                                                user: s,
                                                displayProfile: O,
                                                guildId: v,
                                                channelId: t,
                                                avatarSize: e1.T[e9.d.MODAL].avatarSize,
                                                onOpenAvatar: _,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(C.Ay, {
                                            className: e2.eF,
                                            user: s,
                                            guildId: v,
                                            displayName: P,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: O,
                                                themeType: e9.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e$.kL,
                                            children: [
                                                (0, l.jsx)(k.V, {
                                                    className: e$.$H,
                                                    type: "top",
                                                    selectedItem: eu.RP.BOT_INFO,
                                                    onItemSelect: em.tEg,
                                                    children: (0, l.jsx)(
                                                        k.V.Item,
                                                        {
                                                            className: e$.YU,
                                                            id: eu.RP.BOT_INFO,
                                                            "aria-label": X.intl.string(X.t.ZzAR2Y),
                                                            children: (0, l.jsx)(F.E, {
                                                                variant: "text-sm/normal",
                                                                children: X.intl.string(X.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        eu.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(B.Ip, {
                                                    fade: !0,
                                                    className: eh.XG,
                                                    children: [
                                                        (0, l.jsx)(er.E, {
                                                            userId: s.id,
                                                            userBio: O?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(el.A, {
                                                            heading: X.intl.string(X.t["A//N4k"]),
                                                            children: (0, l.jsx)(ea.A, {
                                                                userId: s.id,
                                                                guildId: v,
                                                                tooltipDelay: eu.In,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    O?.profileEffect != null && (0, l.jsx)(e6.A, { skuId: O?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
var ss = i(503698),
    si = i.n(ss),
    sl = i(628284),
    sn = i(331322),
    st = i(632738),
    sd = i(994500),
    sr = i(47675),
    sa = i(249790),
    sc = i(254828),
    so = i(783123),
    su = i(463156),
    sx = i(677660),
    sA = i(128604);
function sh(e) {
    let {
            user: s,
            guildId: i,
            channelId: n,
            messageId: t,
            roleId: d,
            transitionState: r,
            openedAt: a,
            onClose: c,
            onHide: u,
            sourceAnalyticsLocations: x = [],
        } = e,
        A = i === em.ME ? void 0 : i,
        h = (0, M.bG)([sd.A], () => sd.A.isBlocked(s.id)),
        { analyticsLocations: I } = (0, m.Ay)([...x, h ? j.A.BLOCKED_PROFILE_MODAL : j.A.IGNORED_PROFILE_MODAL]),
        N = (0, g.pb)({ layout: "MODAL_V2", userId: s.id, guildId: A, channelId: n, messageId: t, roleId: d }),
        v = [
            { icon: sl.y, description: X.intl.string(X.t.kcuWva) },
            { icon: sl.y, description: X.intl.string(h ? X.t.QxrDY1 : X.t.W6fjkS) },
        ],
        E = (0, f.Ay)(s.id, A),
        S = p.Ay.getName(E?.guildId, n, s),
        y = X.intl.formatToPlainString(X.t.KRe1Fk, { name: S });
    return (0, l.jsx)(m.f5, {
        value: I,
        children: (0, l.jsx)(g.of, {
            value: N,
            openedAt: a,
            fetchStartedAt: E?.fetchStartedAt,
            fetchEndedAt: E?.fetchEndedAt,
            isLoaded: E?.isLoaded,
            children: (0, l.jsx)(o.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: sA.zr,
                "aria-label": y,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(T.A, {
                    className: si()(sA.A7, sx.BK),
                    user: s,
                    displayProfile: E,
                    themeType: e9.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: sA.Oo, children: (0, l.jsx)(su.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: sx.Tp }),
                        (0, l.jsxs)("div", {
                            className: sx.Qs,
                            children: [
                                (0, l.jsx)(sa.A, { user: s, guildId: A }),
                                (0, l.jsxs)("div", {
                                    className: sx.FS,
                                    children: [
                                        (0, l.jsx)(z.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: X.intl.string(X.t.b33pLD),
                                        }),
                                        (0, l.jsx)(F.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: X.intl.format(h ? X.t.T7QiLn : X.t.MnEowy, { username: S }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: sx.vb,
                                    children: v.map((e, s) => {
                                        let { icon: i, description: n } = e;
                                        return (0, l.jsx)(
                                            st.PQ,
                                            {
                                                icon: i,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: eR.A.colors.TEXT_DEFAULT.css,
                                            },
                                            s,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(sn.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(so.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                u(),
                                                    (0, sr.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: I,
                                                        ...N,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(sc.A, {
                                            userId: s.id,
                                            onClick: () => {
                                                u(),
                                                    (0, sr.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: I,
                                                        ...N,
                                                    });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
var sj = i(546689);
function sm(e) {
    let { hideRestrictedProfile: s, ...i } = e,
        { user: o } = i,
        [u, x] = (0, c.A)(o.id);
    return (n.useEffect(
        () => () => {
            o.id === t.default.getCurrentUser()?.id &&
                (r.A.clearPendingWidgets(), (0, a.E)("UserProfileModalV2Renderer") && ((0, d.XQ)(), (0, d.sd)()));
        },
        [o.id],
    ),
    u && !s)
        ? (0, l.jsx)(sh, { onHide: x, ...i })
        : o.isNonUserBot()
          ? (0, l.jsx)(se, { ...i })
          : o.bot
            ? (0, l.jsx)(e7, { ...i })
            : (0, l.jsx)(sj.A, { ...i });
}
