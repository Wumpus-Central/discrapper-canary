(s.r(i), s.d(i, { default: () => iN }));
var l = s(477900),
    n = s(582128),
    t = s(234e3),
    d = s(561243),
    r = s(287809),
    a = s(207803),
    c = s(958805),
    o = s(591179),
    u = s(215530),
    A = s(935462),
    x = s(707554),
    h = s(140735),
    j = s(231723),
    I = s(700058),
    m = s(793574),
    p = s(688810),
    g = s(915089),
    f = s(397562),
    N = s(562153),
    v = s(183555),
    E = s(999291),
    O = s(722868),
    y = s(716804),
    S = s(718019),
    C = s(365607),
    T = s(915614),
    P = s(559506),
    L = s(946356),
    R = s(465829),
    D = s(570314),
    U = s(984545),
    _ = s(571077),
    b = s(587168),
    M = s(982985),
    k = s(983495),
    F = s(305385),
    G = s(17928),
    B = s(761508),
    V = s(834730),
    z = s(351906),
    w = s(364522),
    H = s(297264),
    Y = s(534890),
    W = s(687966),
    J = s(177953),
    K = s(203363),
    X = s(321191),
    Q = s(375708),
    Z = s(763800);
function q(e) {
    let { icon: i, title: s, description: n } = e;
    return (0, l.jsxs)("div", {
        className: Z.nM,
        children: [
            (0, l.jsx)("div", {
                className: Z.aL,
                children: (0, l.jsx)(i, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: Z.qg,
                children: [
                    (0, l.jsx)(H.D, { variant: "text-xs/semibold", children: s }),
                    (0, l.jsx)(V.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function $(e) {
    let { user: i } = e,
        s = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, K.Z)(s);
    return (0, l.jsxs)(w.Ip, {
        fade: !0,
        className: Z.XG,
        children: [
            n &&
                (0, l.jsx)(q, {
                    icon: Y.ChatIcon,
                    title: Q.intl.string(Q.t["7Tmhfu"]),
                    description: Q.intl.string(Q.t.eu5x7z),
                }),
            t &&
                (0, l.jsx)(q, {
                    icon: W.GameControllerIcon,
                    title: Q.intl.string(Q.t.awYSsM),
                    description: Q.intl.string(Q.t.TpsXoC),
                }),
            d && (0, l.jsx)(q, { icon: J.n, title: Q.intl.string(Q.t.WuKeSJ), description: Q.intl.string(Q.t.wOBmtV) }),
            (0, l.jsx)(V.E, {
                variant: "text-xs/normal",
                children: Q.intl.format(Q.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var ee = s(734057),
    ei = s(309010),
    es = s(383199),
    el = s(514042),
    en = s(194261),
    et = s(9578),
    ed = s(900179),
    er = s(125369);
function ea(e) {
    let { termsOfServiceUrl: i, privacyPolicyUrl: s } = e;
    return null == i && null == s
        ? null
        : (0, l.jsx)(ed.A, {
              heading: Q.intl.string(Q.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: er.p_,
                  children: [
                      null != i && (0, l.jsx)(ec, { icon: el.FileIcon, url: i, children: Q.intl.string(Q.t.s7STcY) }),
                      null != s && (0, l.jsx)(ec, { icon: en.LockIcon, url: s, children: Q.intl.string(Q.t.kH3JR5) }),
                  ],
              }),
          });
}
function ec(e) {
    let { icon: i, url: s, children: n } = e;
    return (0, l.jsxs)(et.A, {
        href: s,
        className: er.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(i, { className: er.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(V.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var eo = s(308244),
    eu = s(743987),
    eA = s(503026),
    ex = s(347805),
    eh = s(518477),
    ej = s(422317);
function eI(e) {
    let { userId: i } = e,
        s = (0, y.g)(),
        { trackUserProfileAction: n } = (0, v.NJ)();
    return (0, l.jsx)(ed.A, {
        heading: Q.intl.string(Q.t["mQKv+v"]),
        scrollTargetId: eh.bk.NOTE,
        children: (0, l.jsx)(ex.A, {
            userId: i,
            className: ej.N,
            autoFocus: s === eh.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var em = s(627757);
function ep(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        d = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.application),
        r = (0, G.bG)([ee.A, ei.Ay], () => ee.A.getChannel(ei.Ay.getChannelId()));
    return (0, l.jsxs)(w.Ip, {
        fade: !0,
        className: em.XG,
        children: [
            (0, l.jsx)(eo.E, { userBio: s?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(es.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(ea, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            s?.guildId != null && (0, l.jsx)(eA.A, { userId: i.id, guildId: s.guildId }),
            (0, l.jsx)(ed.A, {
                heading: Q.intl.string(Q.t["A//N4k"]),
                children: (0, l.jsx)(eu.A, { userId: i.id, guildId: n, tooltipDelay: eh.In }),
            }),
            (0, l.jsx)(eI, { userId: i.id }),
        ],
    });
}
var eg = s(652215),
    ef = s(289873),
    eN = s(28863),
    ev = s(517164),
    eE = s(290863),
    eO = s(461213),
    ey = s(975571),
    eS = s(146655),
    eC = s(489379),
    eT = s(402857),
    eP = s(353394),
    eL = s(64622),
    eR = s(986712),
    eD = s(633756),
    eU = s(813195);
function e_(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eS.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, eC.A)({ userId: i.id, guildId: n }),
        u = (0, G.bG)([ev.A], () => ev.A.isFetchingUserOutbox(i.id)),
        A = i.id === s.id,
        x = (0, G.bG)([eO.A, eE.A], () => {
            let e = A ? eO.A.getStatus() : eE.A.getStatus(i.id);
            return e === eg.clD.OFFLINE || e === eg.clD.INVISIBLE;
        }),
        h = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !h && null == a && null == o && null != c,
        m = !x && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(w.Ip, {
              className: eD.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(ed.A, {
                            heading: Q.intl.string(Q.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: eD.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eL.A, {
                                                user: i,
                                                currentUser: s,
                                                stream: a,
                                                onClose: t,
                                            }),
                                        }),
                                    d.map((e, n) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(eT.A, {
                                                    user: i,
                                                    currentUser: s,
                                                    activity: e,
                                                    onClose: t,
                                                }),
                                            },
                                            `live-${n}`,
                                        ),
                                    ),
                                    I &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eR.A, {
                                                user: i,
                                                currentUser: s,
                                                voiceChannel: c,
                                                onClose: t,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  p
                      ? (0, l.jsx)(ed.A, {
                            heading: Q.intl.string(Q.t.M0zgnT),
                            introText: A
                                ? Q.intl.format(Q.t["4bk9Ak"], {
                                      learnMoreHook: (e, i) =>
                                          (0, l.jsx)(
                                              eN.Anchor,
                                              {
                                                  href: ey.A.getArticleURL(eg.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              i,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: eh.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eD.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eP.A, { user: i, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eU.Ie, children: (0, l.jsx)(ef.y, {}) });
}
var eb = s(695366),
    eM = s(821269),
    ek = s(93246),
    eF = s(773669),
    eG = s(967198),
    eB = s(346713),
    eV = s(484509),
    ez = s(46937),
    ew = s(361311);
function eH(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, v.NJ)(),
        d = (0, G.bG)([eG.A], () => eG.A.getGuildId()),
        r = (0, eM.q)({ userId: i.id }),
        a = (0, G.bG)([z.A], () => z.A.hidePersonalInformation),
        c = (0, G.bG)([eF.default], () => eF.default.locale),
        o = (0, eV.A)(i.id),
        u = (0, eB.A)(i.id);
    return (0, l.jsxs)(w.Ip, {
        fade: !0,
        className: em.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(eo.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(eA.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t.Iyka0U),
                    headingIcon: eb.E,
                    children: (0, l.jsx)(ek.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t["Uv/eTx"]),
                    children: (0, l.jsx)(ew.A, { applicationIds: r }),
                }),
            (0, l.jsx)(ed.A, {
                heading: Q.intl.string(Q.t.a6XYD9),
                children: (0, l.jsx)(eu.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: eh.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t["3fe7U5"]),
                    scrollTargetId: eh.bk.CONNECTIONS,
                    children: (0, l.jsx)(ez.Ay, { connectedAccounts: o, className: em.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            ez.Wc,
                            {
                                className: em.MI,
                                applicationRoleConnection: e,
                                locale: c,
                                onApplicationClicked: () => {
                                    (t({ action: "PRESS_APP_CONNECTION" }), n());
                                },
                                selectedGuildId: d ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(eI, { userId: i.id }),
        ],
    });
}
var eY = s(163126),
    eW = s(913453),
    eJ = s(229187),
    eK = s(402860),
    eX = s(503062);
function eQ(e) {
    let { user: i, guildId: s, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eW.A)(i),
        { analyticsLocations: a } = (0, p.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, v.NJ)(),
        u = (0, eY.A)();
    return (
        n.useEffect(() => {
            (0, eJ.A)(i.id, u);
        }, [i.id, u]),
        (0, l.jsx)(w.Ip, {
            className: eU.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eU.Ie, children: (0, l.jsx)(ef.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eU.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eU.on }),
                                (0, l.jsx)("div", { className: eU.BI, children: Q.intl.string(Q.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: i, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eX.A,
                                {
                                    user: n,
                                    status: r,
                                    guildId: s,
                                    channelId: t,
                                    onSelect: () => {
                                        var e;
                                        (d?.(),
                                            o({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = n.id),
                                            (0, eK.openUserProfileModal)({
                                                ...c,
                                                userId: e,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                i,
                            );
                        }),
        })
    );
}
var eZ = s(398590),
    eq = s(345942),
    e$ = s(51943);
function e0(e) {
    let { user: i, onClose: s } = e,
        { trackUserProfileAction: n } = (0, v.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eW.A)(i);
    return (0, l.jsx)(w.Ip, {
        className: eU.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eU.Ie, children: (0, l.jsx)(ef.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            e$.A,
                            {
                                user: i,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    (n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eq.u)(e), s(), (0, eZ.jH)());
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eU.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eU.vC }),
                            (0, l.jsx)("div", { className: eU.BI, children: Q.intl.string(Q.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e3 = s(717877);
function e5(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === eh.RP.ACTIVITY
        ? (0, l.jsx)(e_, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === eh.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eQ, { user: s, guildId: d, channelId: r, onClose: a })
          : i === eh.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(e0, { user: s, onClose: a })
            : i === eh.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)($, { user: s })
              : i === eh.RP.BOT_INFO
                ? (0, l.jsx)(ep, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(eH, { user: s, displayProfile: t, onClose: a });
}
function e7(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = eh.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, v.NJ)(),
        u = (0, G.bG)([z.A], () => z.A.hidePersonalInformation),
        [A, x] = n.useState(
            () =>
                r.find((e) => {
                    let { section: i } = e;
                    return i === a;
                })?.section ?? r[0]?.section,
        );
    n.useEffect(() => {
        null == r.find((e) => e.section === A) && x(r[0].section);
    }, [r, A]);
    let h = n.useCallback(
        (e) => {
            (o({ action: "PRESS_SECTION", section: e }), x(e));
        },
        [o],
    );
    return u
        ? (0, l.jsx)("div", {
              className: e3.kL,
              children: (0, l.jsxs)("div", {
                  className: eU.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eU.hB }),
                      (0, l.jsx)("div", { className: eU.BI, children: Q.intl.string(Q.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e3.kL,
              children: [
                  (0, l.jsx)(B.V, {
                      className: e3.$H,
                      type: "top",
                      selectedItem: A,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              B.V.Item,
                              {
                                  className: e3.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(V.E, { variant: "text-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e5, {
                      items: r,
                      section: A,
                      user: i,
                      currentUser: s,
                      displayProfile: t,
                      guildId: d,
                      onClose: c,
                  }),
              ],
          });
}
var e1 = s(186272),
    e2 = s(996988),
    e9 = s(207634),
    e6 = s(174217);
function e8(e) {
    let {
            user: i,
            currentUser: s,
            guildId: t,
            originGuildId: d,
            channelId: r,
            messageId: a,
            roleId: c,
            sessionId: o,
            initialTabSection: u,
            initialScrollTarget: G,
            transitionState: B,
            openedAt: V,
            onClose: z,
            sourceAnalyticsLocations: w = [],
        } = e,
        H = t === eg.ME ? void 0 : t,
        Y = (0, E.Ay)(i.id, H),
        W = N.Ay.getName(H, r, i),
        J = Y?.guildId ?? H,
        K = n.useCallback(() => {
            (0, F.A)({ user: i, guildId: J, alt: W });
        }, [W, J, i]),
        X = (0, g.GV)(),
        { analyticsLocations: Z } = (0, p.Ay)([...w, m.A.USER_PROFILE_MODAL]),
        q = (0, v.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: o,
            guildId: H,
            channelId: r,
            messageId: a,
            roleId: c,
        });
    (0, f.A)(Z, Y, eh.R7.MODAL);
    let $ = (function (e) {
            let { mutualGuilds: i } = (0, eW.A)(e),
                s = i?.length;
            return [
                { section: eh.RP.BOT_INFO, text: Q.intl.string(Q.t.ZzAR2Y) },
                { section: eh.RP.MUTUAL_GUILDS, text: (0, e1.A)(s) },
                { section: eh.RP.BOT_DATA_ACCESS, text: Q.intl.string(Q.t.WstFb0) },
            ];
        })(i),
        ee = (0, O.A)({ user: i, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(p.f5, {
        value: Z,
        children: (0, l.jsx)(v.of, {
            value: q,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(y.N, {
                value: G,
                children: (0, l.jsx)(A.EO, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: e6.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(x.F, {
                        component: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(x.H, { id: X, children: Q.intl.format(Q.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, l.jsxs)(L.A, {
                            user: i,
                            displayProfile: Y,
                            themeType: e2.d.MODAL,
                            children: [
                                (0, l.jsx)(b.A, {
                                    children: (0, l.jsx)(U.A, { user: i, guildId: H, viewProfileItem: ee }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: i, displayProfile: Y, themeType: e2.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e6.El,
                                            children: [
                                                (0, l.jsx)(S.A, {
                                                    user: i,
                                                    displayProfile: Y,
                                                    guildId: H,
                                                    channelId: r,
                                                    avatarSize: e9.T[e2.d.MODAL].avatarSize,
                                                    onOpenAvatar: K,
                                                }),
                                                (0, l.jsx)(k.A, {
                                                    user: i,
                                                    guildId: H,
                                                    channelId: r,
                                                    themeType: e2.d.MODAL,
                                                    hasEntered: B === j.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e6.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e6.jS,
                                                            children: (0, l.jsx)(M.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: I.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e6.pg,
                                                            children: (0, l.jsx)(M.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: I.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(_.A, { user: i, guildId: H }),
                                                        (0, l.jsx)(D.A, { user: i }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(P.A, { userId: i.id, className: e6.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e6.rf,
                                    children: [
                                        (0, l.jsx)(R.Ay, {
                                            className: e6.eF,
                                            user: i,
                                            guildId: H,
                                            displayName: W,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(C.A, {
                                                displayProfile: Y,
                                                themeType: e2.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e7, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: Y,
                                            guildId: H,
                                            items: $,
                                            initialSection: u ?? eh.RP.BOT_INFO,
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
var e4 = s(480335),
    ie = s(713517),
    ii = s(35241);
function is(e) {
    let {
            user: i,
            guildId: s,
            channelId: t,
            messageId: d,
            roleId: r,
            sessionId: a,
            transitionState: c,
            openedAt: o,
            onClose: u,
            sourceAnalyticsLocations: j = [],
        } = e,
        I = s === eg.ME ? void 0 : s,
        O = (0, E.Ay)(i.id, I),
        y = N.Ay.getName(I, t, i),
        P = O?.guildId ?? I,
        D = n.useCallback(() => {
            (0, F.A)({ user: i, guildId: P, alt: y });
        }, [y, P, i]),
        U = (0, g.GV)(),
        { analyticsLocations: _ } = (0, p.Ay)([...j, m.A.USER_PROFILE_MODAL]),
        M = (0, v.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: I,
            channelId: t,
            messageId: d,
            roleId: r,
        });
    (0, f.A)(_, O, eh.R7.MODAL);
    let k = n.useRef(null),
        G = (0, ie.M)(k);
    return (0, l.jsx)(p.f5, {
        value: _,
        children: (0, l.jsx)(v.of, {
            value: M,
            openedAt: o,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsxs)(A.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e6.zr,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(x.F, {
                        component: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(x.H, { id: U, children: Q.intl.format(Q.t.KRe1Fk, { name: y }) }),
                        }),
                        children: (0, l.jsxs)(L.A, {
                            user: i,
                            displayProfile: O,
                            themeType: e2.d.MODAL,
                            ref: O?.profileEffect != null ? k : void 0,
                            children: [
                                (0, l.jsx)(b.A, { children: (0, l.jsx)(ii.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: i, displayProfile: O, themeType: e2.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e6.El,
                                            children: (0, l.jsx)(S.A, {
                                                user: i,
                                                displayProfile: O,
                                                guildId: I,
                                                channelId: t,
                                                avatarSize: e9.T[e2.d.MODAL].avatarSize,
                                                onOpenAvatar: D,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e6.rf,
                                    children: [
                                        (0, l.jsx)(R.Ay, {
                                            className: e6.eF,
                                            user: i,
                                            guildId: I,
                                            displayName: y,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(C.A, {
                                                displayProfile: O,
                                                themeType: e2.d.MODAL,
                                                onClose: u,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e3.kL,
                                            children: [
                                                (0, l.jsx)(B.V, {
                                                    className: e3.$H,
                                                    type: "top",
                                                    selectedItem: eh.RP.BOT_INFO,
                                                    onItemSelect: eg.tEg,
                                                    children: (0, l.jsx)(
                                                        B.V.Item,
                                                        {
                                                            className: e3.YU,
                                                            id: eh.RP.BOT_INFO,
                                                            "aria-label": Q.intl.string(Q.t.ZzAR2Y),
                                                            children: (0, l.jsx)(V.E, {
                                                                variant: "text-sm/normal",
                                                                children: Q.intl.string(Q.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        eh.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(w.Ip, {
                                                    fade: !0,
                                                    className: em.XG,
                                                    children: [
                                                        (0, l.jsx)(eo.E, {
                                                            userId: i.id,
                                                            userBio: O?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(ed.A, {
                                                            heading: Q.intl.string(Q.t["A//N4k"]),
                                                            children: (0, l.jsx)(eu.A, {
                                                                userId: i.id,
                                                                guildId: I,
                                                                tooltipDelay: eh.In,
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
                    O?.profileEffect != null && (0, l.jsx)(e4.A, { skuId: O?.profileEffect?.skuId, isHovering: G }),
                ],
            }),
        }),
    });
}
var il = s(503698),
    it = s.n(il),
    id = s(628284),
    ir = s(661531),
    ia = s(331322),
    ic = s(632738),
    io = s(994500),
    iu = s(47675),
    iA = s(249790),
    ix = s(254828),
    ih = s(783123),
    ij = s(463156),
    iI = s(446039),
    im = s(968475);
function ip(e) {
    let {
            user: i,
            guildId: s,
            channelId: n,
            messageId: t,
            roleId: d,
            transitionState: r,
            openedAt: a,
            onClose: c,
            onHide: o,
            sourceAnalyticsLocations: u = [],
        } = e,
        x = s === eg.ME ? void 0 : s,
        h = (0, G.bG)([io.A], () => io.A.isBlocked(i.id)),
        { analyticsLocations: j } = (0, p.Ay)([...u, h ? m.A.BLOCKED_PROFILE_MODAL : m.A.IGNORED_PROFILE_MODAL]),
        I = (0, v.pb)({ layout: "MODAL_V2", userId: i.id, guildId: x, channelId: n, messageId: t, roleId: d }),
        g = [
            { icon: id.y, description: Q.intl.string(Q.t.kcuWva) },
            { icon: id.y, description: Q.intl.string(h ? Q.t.QxrDY1 : Q.t.W6fjkS) },
        ],
        O = (0, E.Ay)(i.id, x);
    (0, f.A)(j, O, eh.R7.MODAL_V2);
    let y = N.Ay.getName(O?.guildId, n, i),
        S = Q.intl.formatToPlainString(Q.t.KRe1Fk, { name: y });
    return (0, l.jsx)(p.f5, {
        value: j,
        children: (0, l.jsx)(v.of, {
            value: I,
            openedAt: a,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsx)(A.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: im.zr,
                "aria-label": S,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(L.A, {
                    className: it()(im.A7, iI.BK),
                    user: i,
                    displayProfile: O,
                    themeType: e2.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: im.Oo, children: (0, l.jsx)(ij.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: iI.Tp }),
                        (0, l.jsxs)("div", {
                            className: iI.Qs,
                            children: [
                                (0, l.jsx)(iA.A, { user: i, guildId: x }),
                                (0, l.jsxs)("div", {
                                    className: iI.FS,
                                    children: [
                                        (0, l.jsx)(H.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: Q.intl.string(Q.t.b33pLD),
                                        }),
                                        (0, l.jsx)(V.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: Q.intl.format(h ? Q.t.T7QiLn : Q.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: iI.vb,
                                    children: g.map((e, i) => {
                                        let { icon: s, description: n } = e;
                                        return (0, l.jsx)(
                                            ic.PQ,
                                            {
                                                icon: s,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: ir.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(ia.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(ih.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                (o(),
                                                    (0, iu.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...I,
                                                    }));
                                            },
                                        }),
                                        (0, l.jsx)(ix.A, {
                                            userId: i.id,
                                            onClick: () => {
                                                (o(),
                                                    (0, iu.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...I,
                                                    }));
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
var ig = s(808261);
function iN(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: A } = s,
        [x, h] = (0, u.A)(A.id);
    return (n.useEffect(
        () => () => {
            A.id === r.default.getCurrentUser()?.id &&
                (c.A.clearPendingWidgets(),
                (0, t.Jp)(),
                (0, o.E)("UserProfileModalV2Renderer") && ((0, a.XQ)(), (0, a.sd)(), (0, d.J)()));
        },
        [A.id],
    ),
    x && !i)
        ? (0, l.jsx)(ip, { onHide: h, ...s })
        : A.isNonUserBot()
          ? (0, l.jsx)(is, { ...s })
          : A.bot
            ? (0, l.jsx)(e8, { ...s })
            : (0, l.jsx)(ig.A, { ...s });
}
