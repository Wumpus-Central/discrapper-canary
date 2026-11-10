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
    h = s(707554),
    x = s(140735),
    j = s(231723),
    I = s(136969),
    m = s(793574),
    p = s(688810),
    g = s(915089),
    f = s(397562),
    N = s(562153),
    v = s(183555),
    E = s(527212),
    y = s(722868),
    C = s(716804),
    O = s(718019),
    S = s(567556),
    T = s(915614),
    P = s(559506),
    L = s(946356),
    b = s(465829),
    R = s(570314),
    D = s(630891),
    U = s(571077),
    _ = s(587168),
    M = s(982985),
    k = s(680581),
    F = s(305385),
    G = s(855986),
    B = s(761508),
    V = s(834730),
    z = s(351906),
    w = s(534514),
    H = s(95362),
    Y = s(534890),
    W = s(687966),
    J = s(177953),
    K = s(152249),
    X = s(851767),
    Q = s(792996),
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
                    (0, l.jsx)(w.D, { variant: "body-xs/semibold", children: s }),
                    (0, l.jsx)(V.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function $(e) {
    let { user: i } = e,
        s = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, K.Z)(s);
    return (0, l.jsxs)(H.Ip, {
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
            d &&
                (0, l.jsx)(q, {
                    icon: J.GroupIcon,
                    title: Q.intl.string(Q.t.WuKeSJ),
                    description: Q.intl.string(Q.t.wOBmtV),
                }),
            (0, l.jsx)(V.E, {
                variant: "body-xs/normal",
                children: Q.intl.format(Q.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var ee = s(734057),
    ei = s(309010),
    es = s(612770),
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
            (0, l.jsx)(V.E, { variant: "body-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var eo = s(501925),
    eu = s(743987),
    eA = s(503026),
    eh = s(347805),
    ex = s(518477),
    ej = s(422317);
function eI(e) {
    let { userId: i } = e,
        s = (0, C.g)(),
        { trackUserProfileAction: n } = (0, v.NJ)();
    return (0, l.jsx)(ed.A, {
        heading: Q.intl.string(Q.t["mQKv+v"]),
        scrollTargetId: ex.bk.NOTE,
        children: (0, l.jsx)(eh.A, {
            userId: i,
            className: ej.N,
            autoFocus: s === ex.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var em = s(627757);
function ep(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        d = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.application),
        r = (0, G.bG)([ee.A, ei.Ay], () => ee.A.getChannel(ei.Ay.getChannelId()));
    return (0, l.jsxs)(H.Ip, {
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
                children: (0, l.jsx)(eu.A, { userId: i.id, guildId: n, tooltipDelay: 300 }),
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
    ey = s(894768),
    eC = s(975571),
    eO = s(146655),
    eS = s(489379),
    eT = s(960549),
    eP = s(637865),
    eL = s(842241),
    eb = s(287746),
    eR = s(633756),
    eD = s(813195);
function eU(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eO.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, eS.A)({ userId: i.id, guildId: n }),
        u = (0, G.bG)([ev.A], () => ev.A.isFetchingUserOutbox(i.id)),
        A = i.id === s.id,
        h = (0, G.bG)([ey.A, eE.A], () => {
            let e = A ? ey.A.getStatus() : eE.A.getStatus(i.id);
            return e === eg.clD.OFFLINE || e === eg.clD.INVISIBLE;
        }),
        x = (0, G.bG)([X.A], () => X.A.getUserProfile(i.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !x && null == a && null == o && null != c,
        m = !h && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(H.Ip, {
              className: eR.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(ed.A, {
                            heading: Q.intl.string(Q.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: eR.Ci,
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
                                            children: (0, l.jsx)(eb.A, {
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
                                                  href: eC.A.getArticleURL(eg.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              i,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ex.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eR.Ci,
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
        : (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(ef.y, {}) });
}
var e_ = s(695366),
    eM = s(821269),
    ek = s(433380),
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
    return (0, l.jsxs)(H.Ip, {
        fade: !0,
        className: em.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(eo.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(eA.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t.Iyka0U),
                    headingIcon: e_.CircleErrorIcon,
                    children: (0, l.jsx)(ek.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t["Uv/eTx"]),
                    children: (0, l.jsx)(ew.A, { applicationIds: r }),
                }),
            (0, l.jsx)(ed.A, {
                heading: Q.intl.string(Q.t.a6XYD9),
                children: (0, l.jsx)(eu.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: 300 }),
            }),
            o.length > 0 &&
                (0, l.jsx)(ed.A, {
                    heading: Q.intl.string(Q.t["3fe7U5"]),
                    scrollTargetId: ex.bk.CONNECTIONS,
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
    eK = s(702476),
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
        (0, l.jsx)(H.Ip, {
            className: eD.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(ef.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eD.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eD.on }),
                                (0, l.jsx)("div", { className: eD.BI, children: Q.intl.string(Q.t["/5p4gx"]) }),
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
    return (0, l.jsx)(H.Ip, {
        className: eD.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(ef.y, {}) })
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
                        className: eD.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eD.vC }),
                            (0, l.jsx)("div", { className: eD.BI, children: Q.intl.string(Q.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e5 = s(717877);
function e7(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === ex.RP.ACTIVITY
        ? (0, l.jsx)(eU, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === ex.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eQ, { user: s, guildId: d, channelId: r, onClose: a })
          : i === ex.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(e0, { user: s, onClose: a })
            : i === ex.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)($, { user: s })
              : i === ex.RP.BOT_INFO
                ? (0, l.jsx)(ep, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(eH, { user: s, displayProfile: t, onClose: a });
}
function e3(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = ex.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, v.NJ)(),
        u = (0, G.bG)([z.A], () => z.A.hidePersonalInformation),
        [A, h] = n.useState(
            () =>
                r.find((e) => {
                    let { section: i } = e;
                    return i === a;
                })?.section ?? r[0]?.section,
        );
    n.useEffect(() => {
        null == r.find((e) => e.section === A) && h(r[0].section);
    }, [r, A]);
    let x = n.useCallback(
        (e) => {
            (o({ action: "PRESS_SECTION", section: e }), h(e));
        },
        [o],
    );
    return u
        ? (0, l.jsx)("div", {
              className: e5.kL,
              children: (0, l.jsxs)("div", {
                  className: eD.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eD.hB }),
                      (0, l.jsx)("div", { className: eD.BI, children: Q.intl.string(Q.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e5.kL,
              children: [
                  (0, l.jsx)(B.V, {
                      className: e5.$H,
                      type: "top",
                      selectedItem: A,
                      onItemSelect: x,
                      children: r.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              B.V.Item,
                              {
                                  className: e5.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(V.E, { variant: "body-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e7, {
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
    e6 = s(996988),
    e9 = s(207634),
    e2 = s(174217);
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
    (0, f.A)(Z, Y, ex.R7.MODAL);
    let $ = (function (e) {
            let { mutualGuilds: i } = (0, eW.A)(e),
                s = i?.length;
            return [
                { section: ex.RP.BOT_INFO, text: Q.intl.string(Q.t.ZzAR2Y) },
                { section: ex.RP.MUTUAL_GUILDS, text: (0, e1.A)(s) },
                { section: ex.RP.BOT_DATA_ACCESS, text: Q.intl.string(Q.t.WstFb0) },
            ];
        })(i),
        ee = (0, y.A)({ user: i, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(p.f5, {
        value: Z,
        children: (0, l.jsx)(v.of, {
            value: q,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(C.N, {
                value: G,
                children: (0, l.jsx)(A.EO, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: e2.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(h.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(h.H, { id: X, children: Q.intl.format(Q.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, l.jsxs)(L.A, {
                            user: i,
                            displayProfile: Y,
                            themeType: e6.d.MODAL,
                            children: [
                                (0, l.jsx)(_.A, {
                                    children: (0, l.jsx)(D.A, { user: i, guildId: H, viewProfileItem: ee }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: i, displayProfile: Y, themeType: e6.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e2.El,
                                            children: [
                                                (0, l.jsx)(O.A, {
                                                    user: i,
                                                    displayProfile: Y,
                                                    guildId: H,
                                                    channelId: r,
                                                    avatarSize: e9.T[e6.d.MODAL].avatarSize,
                                                    onOpenAvatar: K,
                                                }),
                                                (0, l.jsx)(k.A, {
                                                    user: i,
                                                    guildId: H,
                                                    channelId: r,
                                                    themeType: e6.d.MODAL,
                                                    hasEntered: B === j.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e2.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e2.jS,
                                                            children: (0, l.jsx)(M.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: I.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e2.pg,
                                                            children: (0, l.jsx)(M.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: I.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(U.A, { user: i, guildId: H }),
                                                        (0, l.jsx)(R.A, { user: i }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(P.A, { userId: i.id, className: e2.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(b.Ay, {
                                            className: e2.eF,
                                            user: i,
                                            guildId: H,
                                            displayName: W,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: Y,
                                                themeType: e6.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e3, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: Y,
                                            guildId: H,
                                            items: $,
                                            initialSection: u ?? ex.RP.BOT_INFO,
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
var e4 = s(971217),
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
        y = (0, E.Ay)(i.id, I),
        C = N.Ay.getName(I, t, i),
        P = y?.guildId ?? I,
        R = n.useCallback(() => {
            (0, F.A)({ user: i, guildId: P, alt: C });
        }, [C, P, i]),
        D = (0, g.GV)(),
        { analyticsLocations: U } = (0, p.Ay)([...j, m.A.USER_PROFILE_MODAL]),
        M = (0, v.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: I,
            channelId: t,
            messageId: d,
            roleId: r,
        });
    (0, f.A)(U, y, ex.R7.MODAL);
    let k = n.useRef(null),
        G = (0, ie.M)(k);
    return (0, l.jsx)(p.f5, {
        value: U,
        children: (0, l.jsx)(v.of, {
            value: M,
            openedAt: o,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded,
            children: (0, l.jsxs)(A.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e2.zr,
                hideShadow: !0,
                "aria-labelledby": D,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(h.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(h.H, { id: D, children: Q.intl.format(Q.t.KRe1Fk, { name: C }) }),
                        }),
                        children: (0, l.jsxs)(L.A, {
                            user: i,
                            displayProfile: y,
                            themeType: e6.d.MODAL,
                            ref: y?.profileEffect != null ? k : void 0,
                            children: [
                                (0, l.jsx)(_.A, { children: (0, l.jsx)(ii.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: i, displayProfile: y, themeType: e6.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e2.El,
                                            children: (0, l.jsx)(O.A, {
                                                user: i,
                                                displayProfile: y,
                                                guildId: I,
                                                channelId: t,
                                                avatarSize: e9.T[e6.d.MODAL].avatarSize,
                                                onOpenAvatar: R,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(b.Ay, {
                                            className: e2.eF,
                                            user: i,
                                            guildId: I,
                                            displayName: C,
                                            displayNameSize: "lg",
                                            pronouns: y?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: y,
                                                themeType: e6.d.MODAL,
                                                onClose: u,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e5.kL,
                                            children: [
                                                (0, l.jsx)(B.V, {
                                                    className: e5.$H,
                                                    type: "top",
                                                    selectedItem: ex.RP.BOT_INFO,
                                                    onItemSelect: eg.tEg,
                                                    children: (0, l.jsx)(
                                                        B.V.Item,
                                                        {
                                                            className: e5.YU,
                                                            id: ex.RP.BOT_INFO,
                                                            "aria-label": Q.intl.string(Q.t.ZzAR2Y),
                                                            children: (0, l.jsx)(V.E, {
                                                                variant: "body-sm/normal",
                                                                children: Q.intl.string(Q.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ex.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(H.Ip, {
                                                    fade: !0,
                                                    className: em.XG,
                                                    children: [
                                                        (0, l.jsx)(eo.E, {
                                                            userId: i.id,
                                                            userBio: y?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(ed.A, {
                                                            heading: Q.intl.string(Q.t["A//N4k"]),
                                                            children: (0, l.jsx)(eu.A, {
                                                                userId: i.id,
                                                                guildId: I,
                                                                tooltipDelay: 300,
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
                    y?.profileEffect != null && (0, l.jsx)(e4.A, { skuId: y?.profileEffect?.skuId, isHovering: G }),
                ],
            }),
        }),
    });
}
var il = s(503698),
    it = s.n(il),
    id = s(628284),
    ir = s(646514),
    ia = s(331322),
    ic = s(632738),
    io = s(994500),
    iu = s(741534),
    iA = s(249790),
    ih = s(254828),
    ix = s(783123),
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
        h = s === eg.ME ? void 0 : s,
        x = (0, G.bG)([io.A], () => io.A.isBlocked(i.id)),
        { analyticsLocations: j } = (0, p.Ay)([...u, x ? m.A.BLOCKED_PROFILE_MODAL : m.A.IGNORED_PROFILE_MODAL]),
        I = (0, v.pb)({ layout: "MODAL_V2", userId: i.id, guildId: h, channelId: n, messageId: t, roleId: d }),
        g = [
            { icon: id.CircleCheckIcon, description: Q.intl.string(Q.t.kcuWva) },
            { icon: id.CircleCheckIcon, description: Q.intl.string(x ? Q.t.QxrDY1 : Q.t.W6fjkS) },
        ],
        y = (0, E.Ay)(i.id, h);
    (0, f.A)(j, y, ex.R7.MODAL_V2);
    let C = N.Ay.getName(y?.guildId, n, i),
        O = Q.intl.formatToPlainString(Q.t.KRe1Fk, { name: C });
    return (0, l.jsx)(p.f5, {
        value: j,
        children: (0, l.jsx)(v.of, {
            value: I,
            openedAt: a,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded,
            children: (0, l.jsx)(A.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: im.zr,
                "aria-label": O,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(L.A, {
                    className: it()(im.A7, iI.BK),
                    user: i,
                    displayProfile: y,
                    themeType: e6.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: im.Oo, children: (0, l.jsx)(ij.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: iI.Tp }),
                        (0, l.jsxs)("div", {
                            className: iI.Qs,
                            children: [
                                (0, l.jsx)(iA.A, { user: i, guildId: h }),
                                (0, l.jsxs)("div", {
                                    className: iI.FS,
                                    children: [
                                        (0, l.jsx)(w.D, {
                                            variant: "heading-xl/semibold",
                                            color: "text-default",
                                            children: Q.intl.string(Q.t.b33pLD),
                                        }),
                                        (0, l.jsx)(V.E, {
                                            variant: "body-md/medium",
                                            color: "text-default",
                                            children: Q.intl.format(x ? Q.t.T7QiLn : Q.t.MnEowy, { username: C }),
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
                                                titleVariant: "body-md/normal",
                                                color: ir.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(ia.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(ix.A, {
                                            size: "md",
                                            isBlocked: x,
                                            onClick: () => {
                                                (o(),
                                                    (0, iu.Wn)({
                                                        action: x ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...I,
                                                    }));
                                            },
                                        }),
                                        (0, l.jsx)(ih.A, {
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
var ig = s(838139);
function iN(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: A } = s,
        [h, x] = (0, u.A)(A.id);
    return (n.useEffect(
        () => () => {
            A.id === r.default.getCurrentUser()?.id &&
                (c.A.clearPendingWidgets(),
                (0, t.Jp)(),
                (0, o.E)("UserProfileModalV2Renderer") && ((0, a.XQ)(), (0, a.sd)(), (0, d.J)()));
        },
        [A.id],
    ),
    h && !i)
        ? (0, l.jsx)(ip, { onHide: x, ...s })
        : A.isNonUserBot()
          ? (0, l.jsx)(is, { ...s })
          : A.bot
            ? (0, l.jsx)(e8, { ...s })
            : (0, l.jsx)(ig.A, { ...s });
}
