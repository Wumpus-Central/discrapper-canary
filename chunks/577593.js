s.r(i), s.d(i, { default: () => ip });
var l = s(477900),
    n = s(582128),
    t = s(287809),
    d = s(207803),
    r = s(958805),
    a = s(591179),
    c = s(215530),
    o = s(935462),
    u = s(707554),
    A = s(140735),
    x = s(231723),
    h = s(982168),
    j = s(793574),
    I = s(688810),
    m = s(915089),
    p = s(397562),
    g = s(562153),
    f = s(183555),
    N = s(999291),
    v = s(722868),
    E = s(716804),
    O = s(718019),
    y = s(681331),
    S = s(915614),
    C = s(559506),
    T = s(946356),
    P = s(465829),
    L = s(570314),
    R = s(984545),
    D = s(571077),
    U = s(587168),
    _ = s(982985),
    b = s(983495),
    M = s(305385),
    k = s(17928),
    F = s(761508),
    G = s(834730),
    B = s(351906),
    V = s(364522),
    z = s(297264),
    w = s(534890),
    H = s(687966),
    Y = s(177953),
    W = s(203363),
    K = s(321191),
    X = s(375708),
    J = s(763800);
function Q(e) {
    let { icon: i, title: s, description: n } = e;
    return (0, l.jsxs)("div", {
        className: J.nM,
        children: [
            (0, l.jsx)("div", {
                className: J.aL,
                children: (0, l.jsx)(i, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: J.qg,
                children: [
                    (0, l.jsx)(z.D, { variant: "text-xs/semibold", children: s }),
                    (0, l.jsx)(G.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { user: i } = e,
        s = (0, k.bG)([K.A], () => K.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, W.Z)(s);
    return (0, l.jsxs)(V.Ip, {
        fade: !0,
        className: J.XG,
        children: [
            n &&
                (0, l.jsx)(Q, {
                    icon: w.ChatIcon,
                    title: X.intl.string(X.t["7Tmhfu"]),
                    description: X.intl.string(X.t.eu5x7z),
                }),
            t &&
                (0, l.jsx)(Q, {
                    icon: H.GameControllerIcon,
                    title: X.intl.string(X.t.awYSsM),
                    description: X.intl.string(X.t.TpsXoC),
                }),
            d && (0, l.jsx)(Q, { icon: Y.n, title: X.intl.string(X.t.WuKeSJ), description: X.intl.string(X.t.wOBmtV) }),
            (0, l.jsx)(G.E, {
                variant: "text-xs/normal",
                children: X.intl.format(X.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var q = s(734057),
    $ = s(309010),
    ee = s(383199),
    ei = s(514042),
    es = s(194261),
    el = s(9578),
    en = s(900179),
    et = s(125369);
function ed(e) {
    let { termsOfServiceUrl: i, privacyPolicyUrl: s } = e;
    return null == i && null == s
        ? null
        : (0, l.jsx)(en.A, {
              heading: X.intl.string(X.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: et.p_,
                  children: [
                      null != i && (0, l.jsx)(er, { icon: ei.FileIcon, url: i, children: X.intl.string(X.t.s7STcY) }),
                      null != s && (0, l.jsx)(er, { icon: es.LockIcon, url: s, children: X.intl.string(X.t.kH3JR5) }),
                  ],
              }),
          });
}
function er(e) {
    let { icon: i, url: s, children: n } = e;
    return (0, l.jsxs)(el.A, {
        href: s,
        className: et.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(i, { className: et.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(G.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var ea = s(308244),
    ec = s(743987),
    eo = s(503026),
    eu = s(347805),
    eA = s(518477),
    ex = s(422317);
function eh(e) {
    let { userId: i } = e,
        s = (0, E.g)(),
        { trackUserProfileAction: n } = (0, f.NJ)();
    return (0, l.jsx)(en.A, {
        heading: X.intl.string(X.t["mQKv+v"]),
        scrollTargetId: eA.bk.NOTE,
        children: (0, l.jsx)(eu.A, {
            userId: i,
            className: ex.N,
            autoFocus: s === eA.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var ej = s(627757);
function eI(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        d = (0, k.bG)([K.A], () => K.A.getUserProfile(i.id)?.application),
        r = (0, k.bG)([q.A, $.Ay], () => q.A.getChannel($.Ay.getChannelId()));
    return (0, l.jsxs)(V.Ip, {
        fade: !0,
        className: ej.XG,
        children: [
            (0, l.jsx)(ea.E, { userBio: s?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(ee.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(ed, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            s?.guildId != null && (0, l.jsx)(eo.A, { userId: i.id, guildId: s.guildId }),
            (0, l.jsx)(en.A, {
                heading: X.intl.string(X.t["A//N4k"]),
                children: (0, l.jsx)(ec.A, { userId: i.id, guildId: n, tooltipDelay: eA.In }),
            }),
            (0, l.jsx)(eh, { userId: i.id }),
        ],
    });
}
var em = s(652215),
    ep = s(289873),
    eg = s(28863),
    ef = s(517164),
    eN = s(290863),
    ev = s(461213),
    eE = s(975571),
    eO = s(146655),
    ey = s(489379),
    eS = s(402857),
    eC = s(353394),
    eT = s(64622),
    eP = s(986712),
    eL = s(633756),
    eR = s(813195);
function eD(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eO.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, ey.A)({ userId: i.id, guildId: n }),
        u = (0, k.bG)([ef.A], () => ef.A.isFetchingUserOutbox(i.id)),
        A = i.id === s.id,
        x = (0, k.bG)([ev.A, eN.A], () => {
            let e = A ? ev.A.getStatus() : eN.A.getStatus(i.id);
            return e === em.clD.OFFLINE || e === em.clD.INVISIBLE;
        }),
        h = (0, k.bG)([K.A], () => K.A.getUserProfile(i.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !h && null == a && null == o && null != c,
        m = !x && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(V.Ip, {
              className: eL.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(en.A, {
                            heading: X.intl.string(X.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: eL.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eT.A, {
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
                                                children: (0, l.jsx)(eS.A, {
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
                                            children: (0, l.jsx)(eP.A, {
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
                      ? (0, l.jsx)(en.A, {
                            heading: X.intl.string(X.t.M0zgnT),
                            introText: A
                                ? X.intl.format(X.t["4bk9Ak"], {
                                      learnMoreHook: (e, i) =>
                                          (0, l.jsx)(
                                              eg.Anchor,
                                              {
                                                  href: eE.A.getArticleURL(em.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              i,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: eA.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eL.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eC.A, { user: i, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eR.Ie, children: (0, l.jsx)(ep.y, {}) });
}
var eU = s(695366),
    e_ = s(821269),
    eb = s(93246),
    eM = s(773669),
    ek = s(967198),
    eF = s(346713),
    eG = s(484509),
    eB = s(46937),
    eV = s(361311);
function ez(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, f.NJ)(),
        d = (0, k.bG)([ek.A], () => ek.A.getGuildId()),
        r = (0, e_.q)({ userId: i.id }),
        a = (0, k.bG)([B.A], () => B.A.hidePersonalInformation),
        c = (0, k.bG)([eM.default], () => eM.default.locale),
        o = (0, eG.A)(i.id),
        u = (0, eF.A)(i.id);
    return (0, l.jsxs)(V.Ip, {
        fade: !0,
        className: ej.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(ea.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(eo.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(en.A, {
                    heading: X.intl.string(X.t.Iyka0U),
                    headingIcon: eU.E,
                    children: (0, l.jsx)(eb.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(en.A, {
                    heading: X.intl.string(X.t["Uv/eTx"]),
                    children: (0, l.jsx)(eV.A, { applicationIds: r }),
                }),
            (0, l.jsx)(en.A, {
                heading: X.intl.string(X.t.a6XYD9),
                children: (0, l.jsx)(ec.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: eA.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(en.A, {
                    heading: X.intl.string(X.t["3fe7U5"]),
                    scrollTargetId: eA.bk.CONNECTIONS,
                    children: (0, l.jsx)(eB.Ay, { connectedAccounts: o, className: ej.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(en.A, {
                    heading: X.intl.string(X.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eB.Wc,
                            {
                                className: ej.MI,
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
            (0, l.jsx)(eh, { userId: i.id }),
        ],
    });
}
var ew = s(163126),
    eH = s(913453),
    eY = s(229187),
    eW = s(975732),
    eK = s(503062);
function eX(e) {
    let { user: i, guildId: s, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eH.A)(i),
        { analyticsLocations: a } = (0, I.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, f.NJ)(),
        u = (0, ew.A)();
    return (
        n.useEffect(() => {
            (0, eY.A)(i.id, u);
        }, [i.id, u]),
        (0, l.jsx)(V.Ip, {
            className: eR.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eR.Ie, children: (0, l.jsx)(ep.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eR.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eR.on }),
                                (0, l.jsx)("div", { className: eR.BI, children: X.intl.string(X.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: i, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eK.A,
                                {
                                    user: n,
                                    status: r,
                                    guildId: s,
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
                                i,
                            );
                        }),
        })
    );
}
var eJ = s(398590),
    eQ = s(345942),
    eZ = s(51943);
function eq(e) {
    let { user: i, onClose: s } = e,
        { trackUserProfileAction: n } = (0, f.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eH.A)(i);
    return (0, l.jsx)(V.Ip, {
        className: eR.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eR.Ie, children: (0, l.jsx)(ep.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eZ.A,
                            {
                                user: i,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eQ.u)(e), s(), (0, eJ.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eR.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eR.vC }),
                            (0, l.jsx)("div", { className: eR.BI, children: X.intl.string(X.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e$ = s(717877);
function e0(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === eA.RP.ACTIVITY
        ? (0, l.jsx)(eD, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === eA.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eX, { user: s, guildId: d, channelId: r, onClose: a })
          : i === eA.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eq, { user: s, onClose: a })
            : i === eA.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(Z, { user: s })
              : i === eA.RP.BOT_INFO
                ? (0, l.jsx)(eI, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(ez, { user: s, displayProfile: t, onClose: a });
}
function e3(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = eA.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, f.NJ)(),
        u = (0, k.bG)([B.A], () => B.A.hidePersonalInformation),
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
            o({ action: "PRESS_SECTION", section: e }), x(e);
        },
        [o],
    );
    return u
        ? (0, l.jsx)("div", {
              className: e$.kL,
              children: (0, l.jsxs)("div", {
                  className: eR.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eR.hB }),
                      (0, l.jsx)("div", { className: eR.BI, children: X.intl.string(X.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e$.kL,
              children: [
                  (0, l.jsx)(F.V, {
                      className: e$.$H,
                      type: "top",
                      selectedItem: A,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              F.V.Item,
                              {
                                  className: e$.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(G.E, { variant: "text-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e0, {
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
var e5 = s(186272),
    e7 = s(996988),
    e1 = s(985253),
    e9 = s(174217);
function e2(e) {
    let {
            user: i,
            currentUser: s,
            guildId: t,
            originGuildId: d,
            channelId: r,
            messageId: a,
            roleId: c,
            sessionId: k,
            initialTabSection: F,
            initialScrollTarget: G,
            transitionState: B,
            openedAt: V,
            onClose: z,
            sourceAnalyticsLocations: w = [],
        } = e,
        H = t === em.ME ? void 0 : t,
        Y = (0, N.Ay)(i.id, H),
        W = g.Ay.getName(H, r, i),
        K = Y?.guildId ?? H,
        J = n.useCallback(() => {
            (0, M.A)({ user: i, guildId: K, alt: W });
        }, [W, K, i]),
        Q = (0, m.GV)(),
        { analyticsLocations: Z } = (0, I.Ay)([...w, j.A.USER_PROFILE_MODAL]),
        q = (0, f.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: k,
            guildId: H,
            channelId: r,
            messageId: a,
            roleId: c,
        });
    (0, p.A)(Z, Y, eA.R7.MODAL);
    let $ = (function (e) {
            let { mutualGuilds: i } = (0, eH.A)(e),
                s = i?.length;
            return [
                { section: eA.RP.BOT_INFO, text: X.intl.string(X.t.ZzAR2Y) },
                { section: eA.RP.MUTUAL_GUILDS, text: (0, e5.A)(s) },
                { section: eA.RP.BOT_DATA_ACCESS, text: X.intl.string(X.t.WstFb0) },
            ];
        })(i),
        ee = (0, v.A)({ user: i, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(I.f5, {
        value: Z,
        children: (0, l.jsx)(f.of, {
            value: q,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(E.N, {
                value: G,
                children: (0, l.jsx)(o.EO, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: e9.zr,
                    hideShadow: !0,
                    "aria-labelledby": Q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(A.A, {
                            children: (0, l.jsx)(u.H, { id: Q, children: X.intl.format(X.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: i,
                            displayProfile: Y,
                            themeType: e7.d.MODAL,
                            children: [
                                (0, l.jsx)(U.A, {
                                    children: (0, l.jsx)(R.A, { user: i, guildId: H, viewProfileItem: ee }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(S.A, { user: i, displayProfile: Y, themeType: e7.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e9.El,
                                            children: [
                                                (0, l.jsx)(O.A, {
                                                    user: i,
                                                    displayProfile: Y,
                                                    guildId: H,
                                                    channelId: r,
                                                    avatarSize: e1.T[e7.d.MODAL].avatarSize,
                                                    onOpenAvatar: J,
                                                }),
                                                (0, l.jsx)(b.A, {
                                                    user: i,
                                                    guildId: H,
                                                    channelId: r,
                                                    themeType: e7.d.MODAL,
                                                    hasEntered: B === x.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e9.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e9.jS,
                                                            children: (0, l.jsx)(_.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e9.pg,
                                                            children: (0, l.jsx)(_.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(D.A, { user: i, guildId: H }),
                                                        (0, l.jsx)(L.A, { user: i }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(C.A, { userId: i.id, className: e9.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e9.rf,
                                    children: [
                                        (0, l.jsx)(P.Ay, {
                                            className: e9.eF,
                                            user: i,
                                            guildId: H,
                                            displayName: W,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: Y,
                                                themeType: e7.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e3, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: Y,
                                            guildId: H,
                                            items: $,
                                            initialSection: F ?? eA.RP.BOT_INFO,
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
var e8 = s(480335),
    e6 = s(713517),
    e4 = s(35241);
function ie(e) {
    let {
            user: i,
            guildId: s,
            channelId: t,
            messageId: d,
            roleId: r,
            sessionId: a,
            transitionState: c,
            openedAt: x,
            onClose: h,
            sourceAnalyticsLocations: v = [],
        } = e,
        E = s === em.ME ? void 0 : s,
        C = (0, N.Ay)(i.id, E),
        L = g.Ay.getName(E, t, i),
        R = C?.guildId ?? E,
        D = n.useCallback(() => {
            (0, M.A)({ user: i, guildId: R, alt: L });
        }, [L, R, i]),
        _ = (0, m.GV)(),
        { analyticsLocations: b } = (0, I.Ay)([...v, j.A.USER_PROFILE_MODAL]),
        k = (0, f.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: E,
            channelId: t,
            messageId: d,
            roleId: r,
        });
    (0, p.A)(b, C, eA.R7.MODAL);
    let B = n.useRef(null),
        z = (0, e6.M)(B);
    return (0, l.jsx)(I.f5, {
        value: b,
        children: (0, l.jsx)(f.of, {
            value: k,
            openedAt: x,
            fetchStartedAt: C?.fetchStartedAt,
            fetchEndedAt: C?.fetchEndedAt,
            isLoaded: C?.isLoaded,
            children: (0, l.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e9.zr,
                hideShadow: !0,
                "aria-labelledby": _,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(A.A, {
                            children: (0, l.jsx)(u.H, { id: _, children: X.intl.format(X.t.KRe1Fk, { name: L }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: i,
                            displayProfile: C,
                            themeType: e7.d.MODAL,
                            ref: C?.profileEffect != null ? B : void 0,
                            children: [
                                (0, l.jsx)(U.A, { children: (0, l.jsx)(e4.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(S.A, { user: i, displayProfile: C, themeType: e7.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e9.El,
                                            children: (0, l.jsx)(O.A, {
                                                user: i,
                                                displayProfile: C,
                                                guildId: E,
                                                channelId: t,
                                                avatarSize: e1.T[e7.d.MODAL].avatarSize,
                                                onOpenAvatar: D,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e9.rf,
                                    children: [
                                        (0, l.jsx)(P.Ay, {
                                            className: e9.eF,
                                            user: i,
                                            guildId: E,
                                            displayName: L,
                                            displayNameSize: "lg",
                                            pronouns: C?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: C,
                                                themeType: e7.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e$.kL,
                                            children: [
                                                (0, l.jsx)(F.V, {
                                                    className: e$.$H,
                                                    type: "top",
                                                    selectedItem: eA.RP.BOT_INFO,
                                                    onItemSelect: em.tEg,
                                                    children: (0, l.jsx)(
                                                        F.V.Item,
                                                        {
                                                            className: e$.YU,
                                                            id: eA.RP.BOT_INFO,
                                                            "aria-label": X.intl.string(X.t.ZzAR2Y),
                                                            children: (0, l.jsx)(G.E, {
                                                                variant: "text-sm/normal",
                                                                children: X.intl.string(X.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        eA.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(V.Ip, {
                                                    fade: !0,
                                                    className: ej.XG,
                                                    children: [
                                                        (0, l.jsx)(ea.E, {
                                                            userId: i.id,
                                                            userBio: C?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(en.A, {
                                                            heading: X.intl.string(X.t["A//N4k"]),
                                                            children: (0, l.jsx)(ec.A, {
                                                                userId: i.id,
                                                                guildId: E,
                                                                tooltipDelay: eA.In,
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
                    C?.profileEffect != null && (0, l.jsx)(e8.A, { skuId: C?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
var ii = s(503698),
    is = s.n(ii),
    il = s(628284),
    it = s(661531),
    id = s(331322),
    ir = s(632738),
    ia = s(994500),
    ic = s(47675),
    io = s(249790),
    iu = s(254828),
    iA = s(783123),
    ix = s(463156),
    ih = s(446039),
    ij = s(968475);
function iI(e) {
    let {
            user: i,
            guildId: s,
            channelId: n,
            messageId: t,
            roleId: d,
            transitionState: r,
            openedAt: a,
            onClose: c,
            onHide: u,
            sourceAnalyticsLocations: A = [],
        } = e,
        x = s === em.ME ? void 0 : s,
        h = (0, k.bG)([ia.A], () => ia.A.isBlocked(i.id)),
        { analyticsLocations: m } = (0, I.Ay)([...A, h ? j.A.BLOCKED_PROFILE_MODAL : j.A.IGNORED_PROFILE_MODAL]),
        v = (0, f.pb)({ layout: "MODAL_V2", userId: i.id, guildId: x, channelId: n, messageId: t, roleId: d }),
        E = [
            { icon: il.y, description: X.intl.string(X.t.kcuWva) },
            { icon: il.y, description: X.intl.string(h ? X.t.QxrDY1 : X.t.W6fjkS) },
        ],
        O = (0, N.Ay)(i.id, x);
    (0, p.A)(m, O, eA.R7.MODAL_V2);
    let y = g.Ay.getName(O?.guildId, n, i),
        S = X.intl.formatToPlainString(X.t.KRe1Fk, { name: y });
    return (0, l.jsx)(I.f5, {
        value: m,
        children: (0, l.jsx)(f.of, {
            value: v,
            openedAt: a,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsx)(o.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: ij.zr,
                "aria-label": S,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(T.A, {
                    className: is()(ij.A7, ih.BK),
                    user: i,
                    displayProfile: O,
                    themeType: e7.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: ij.Oo, children: (0, l.jsx)(ix.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: ih.Tp }),
                        (0, l.jsxs)("div", {
                            className: ih.Qs,
                            children: [
                                (0, l.jsx)(io.A, { user: i, guildId: x }),
                                (0, l.jsxs)("div", {
                                    className: ih.FS,
                                    children: [
                                        (0, l.jsx)(z.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: X.intl.string(X.t.b33pLD),
                                        }),
                                        (0, l.jsx)(G.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: X.intl.format(h ? X.t.T7QiLn : X.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: ih.vb,
                                    children: E.map((e, i) => {
                                        let { icon: s, description: n } = e;
                                        return (0, l.jsx)(
                                            ir.PQ,
                                            {
                                                icon: s,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: it.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(id.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(iA.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                u(),
                                                    (0, ic.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: m,
                                                        ...v,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(iu.A, {
                                            userId: i.id,
                                            onClick: () => {
                                                u(),
                                                    (0, ic.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: m,
                                                        ...v,
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
var im = s(208048);
function ip(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: o } = s,
        [u, A] = (0, c.A)(o.id);
    return (n.useEffect(
        () => () => {
            o.id === t.default.getCurrentUser()?.id &&
                (r.A.clearPendingWidgets(), (0, a.E)("UserProfileModalV2Renderer") && ((0, d.XQ)(), (0, d.sd)()));
        },
        [o.id],
    ),
    u && !i)
        ? (0, l.jsx)(iI, { onHide: A, ...s })
        : o.isNonUserBot()
          ? (0, l.jsx)(ie, { ...s })
          : o.bot
            ? (0, l.jsx)(e2, { ...s })
            : (0, l.jsx)(im.A, { ...s });
}
