i.r(s), i.d(s, { default: () => sn });
var l = i(627968),
    n = i(64700),
    t = i(215530),
    d = i(935462),
    r = i(707554),
    a = i(140735),
    o = i(231723),
    c = i(982168),
    u = i(793574),
    x = i(688810),
    A = i(915089),
    h = i(562153),
    j = i(183555),
    I = i(999291),
    m = i(722868),
    p = i(716804),
    g = i(718019),
    N = i(694720),
    f = i(915614),
    v = i(559506),
    E = i(946356),
    T = i(878555),
    y = i(570314),
    O = i(984545),
    C = i(571077),
    S = i(587168),
    P = i(982985),
    L = i(983495),
    _ = i(17928),
    R = i(761508),
    b = i(834730),
    D = i(351906),
    U = i(364522),
    M = i(534514),
    k = i(534890),
    F = i(687966),
    G = i(177953),
    B = i(203363),
    V = i(841595),
    z = i(375708),
    Y = i(935059);
function w(e) {
    let { icon: s, title: i, description: n } = e;
    return (0, l.jsxs)("div", {
        className: Y.nM,
        children: [
            (0, l.jsx)("div", {
                className: Y.aL,
                children: (0, l.jsx)(s, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: Y.qg,
                children: [
                    (0, l.jsx)(M.D, { variant: "text-xs/semibold", children: i }),
                    (0, l.jsx)(b.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { user: s } = e,
        i = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, B.Z)(i);
    return (0, l.jsxs)(U.Ip, {
        fade: !0,
        className: Y.XG,
        children: [
            n &&
                (0, l.jsx)(w, {
                    icon: k.o,
                    title: z.intl.string(z.t["7Tmhfu"]),
                    description: z.intl.string(z.t.eu5x7z),
                }),
            t && (0, l.jsx)(w, { icon: F._, title: z.intl.string(z.t.awYSsM), description: z.intl.string(z.t.TpsXoC) }),
            d && (0, l.jsx)(w, { icon: G.n, title: z.intl.string(z.t.WuKeSJ), description: z.intl.string(z.t.wOBmtV) }),
            (0, l.jsx)(b.E, {
                variant: "text-xs/normal",
                children: z.intl.format(z.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var K = i(734057),
    W = i(309010),
    X = i(383199),
    J = i(308244),
    Q = i(743987),
    Z = i(900179),
    q = i(280645),
    $ = i(756634),
    ee = i(518477),
    es = i(142948);
function ei(e) {
    let { userId: s } = e,
        i = (0, p.g)(),
        { trackUserProfileAction: n } = (0, j.NJ)();
    return (0, l.jsx)(Z.A, {
        heading: z.intl.string(z.t["mQKv+v"]),
        scrollTargetId: ee.bk.NOTE,
        children: (0, l.jsx)($.A, {
            userId: s,
            className: es.N,
            autoFocus: i === ee.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var el = i(741036);
function en(e) {
    let { user: s, displayProfile: i, guildId: n, onClose: t } = e,
        d = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.application),
        r = (0, _.bG)([K.A, W.A], () => K.A.getChannel(W.A.getChannelId()));
    return (0, l.jsxs)(U.Ip, {
        fade: !0,
        className: el.XG,
        children: [
            (0, l.jsx)(J.E, { userBio: i?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(X.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            i?.guildId != null && (0, l.jsx)(q.A, { userId: s.id, guildId: i.guildId }),
            (0, l.jsx)(Z.A, {
                heading: z.intl.string(z.t["A//N4k"]),
                children: (0, l.jsx)(Q.A, { userId: s.id, guildId: n, tooltipDelay: ee.In }),
            }),
            (0, l.jsx)(ei, { userId: s.id }),
        ],
    });
}
var et = i(652215),
    ed = i(289873),
    er = i(349288),
    ea = i(517164),
    eo = i(290863),
    ec = i(461213),
    eu = i(975571),
    ex = i(146655),
    eA = i(489379),
    eh = i(402857),
    ej = i(353394),
    eI = i(64622),
    em = i(986712),
    ep = i(437781),
    eg = i(928666);
function eN(e) {
    let { user: s, currentUser: i, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, ex.A)(s.id),
        { voiceChannel: o, voiceActivity: c } = (0, eA.A)({ userId: s.id, guildId: n }),
        u = (0, _.bG)([ea.A], () => ea.A.isFetchingUserOutbox(s.id)),
        x = s.id === i.id,
        A = (0, _.bG)([ec.A, eo.A], () => {
            let e = x ? ec.A.getStatus() : eo.A.getStatus(s.id);
            return e === et.clD.OFFLINE || e === et.clD.INVISIBLE;
        }),
        h = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !h && null == a && null == c && null != o,
        m = !A && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(U.Ip, {
              className: ep.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(Z.A, {
                            "aria-label": z.intl.string(z.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: ep.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eI.A, {
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
                                                children: (0, l.jsx)(eh.A, {
                                                    user: s,
                                                    currentUser: i,
                                                    activity: e,
                                                    onClose: t,
                                                }),
                                            },
                                            `live-${n}`,
                                        ),
                                    ),
                                    I &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(em.A, {
                                                user: s,
                                                currentUser: i,
                                                voiceChannel: o,
                                                onClose: t,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  p
                      ? (0, l.jsx)(Z.A, {
                            heading: z.intl.string(z.t.M0zgnT),
                            introText: x
                                ? z.intl.format(z.t["4bk9Ak"], {
                                      learnMoreHook: (e, s) =>
                                          (0, l.jsx)(
                                              er.Anchor,
                                              {
                                                  href: eu.A.getArticleURL(et.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              s,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ee.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: ep.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(ej.A, { user: s, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eg.Ie, children: (0, l.jsx)(ed.y, {}) });
}
var ef = i(695366),
    ev = i(661531),
    eE = i(821269),
    eT = i(93246),
    ey = i(773669),
    eO = i(967198),
    eC = i(346713),
    eS = i(484509),
    eP = i(46937),
    eL = i(361311);
function e_(e) {
    let { user: s, displayProfile: i, onClose: n } = e,
        { trackUserProfileAction: t } = (0, j.NJ)(),
        d = (0, _.bG)([eO.A], () => eO.A.getGuildId()),
        r = (0, eE.q)({ userId: s.id }),
        a = (0, _.bG)([D.A], () => D.A.hidePersonalInformation),
        o = (0, _.bG)([ey.default], () => ey.default.locale),
        c = (0, eS.A)(s.id),
        u = (0, eC.A)(s.id);
    return (0, l.jsxs)(U.Ip, {
        fade: !0,
        className: el.XG,
        children: [
            i?.bio != null && i?.bio !== "" && !a && (0, l.jsx)(J.A, { userBio: i.bio, setLineClamp: !1 }),
            i?.guildId != null && (0, l.jsx)(q.A, { userId: s.id, guildId: i.guildId }),
            s.isProvisional &&
                (0, l.jsx)(Z.A, {
                    heading: z.intl.string(z.t.Iyka0U),
                    headingIcon: (0, l.jsx)(ef.E, { size: "xxs", color: ev.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(eT.T, { userId: s.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(Z.A, {
                    heading: z.intl.string(z.t["Uv/eTx"]),
                    children: (0, l.jsx)(eL.A, { applicationIds: r }),
                }),
            (0, l.jsx)(Z.A, {
                heading: z.intl.string(z.t.a6XYD9),
                children: (0, l.jsx)(Q.A, { userId: s.id, guildId: i?.guildId, tooltipDelay: ee.In }),
            }),
            c.length > 0 &&
                (0, l.jsx)(Z.A, {
                    heading: z.intl.string(z.t["3fe7U5"]),
                    scrollTargetId: ee.bk.CONNECTIONS,
                    children: (0, l.jsx)(eP.Ay, { connectedAccounts: c, className: el.oQ, userId: s.id, locale: o }),
                }),
            u.length > 0 &&
                (0, l.jsx)(Z.A, {
                    heading: z.intl.string(z.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eP.Wc,
                            {
                                className: el.MI,
                                applicationRoleConnection: e,
                                locale: o,
                                onApplicationClicked: () => {
                                    t({ action: "PRESS_APP_CONNECTION" }), n();
                                },
                                selectedGuildId: d ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(ei, { userId: s.id }),
        ],
    });
}
var eR = i(163126),
    eb = i(913453),
    eD = i(229187),
    eU = i(975732),
    eM = i(201934);
function ek(e) {
    let { user: s, guildId: i, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eb.A)(s),
        { analyticsLocations: a } = (0, x.Ay)(),
        { context: o, trackUserProfileAction: c } = (0, j.NJ)(),
        u = (0, eR.A)();
    return (
        n.useEffect(() => {
            (0, eD.A)(s.id, u);
        }, [s.id, u]),
        (0, l.jsx)(U.Ip, {
            className: eg.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eg.Ie, children: (0, l.jsx)(ed.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eg.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eg.on }),
                                (0, l.jsx)("div", { className: eg.BI, children: z.intl.string(z.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: s, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eM.A,
                                {
                                    user: n,
                                    status: r,
                                    guildId: i,
                                    channelId: t,
                                    onSelect: () => {
                                        var e;
                                        d?.(),
                                            c({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = n.id),
                                            (0, eU.openUserProfileModal)({
                                                ...o,
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
var eF = i(398590),
    eG = i(345942),
    eB = i(51943);
function eV(e) {
    let { user: s, onClose: i } = e,
        { trackUserProfileAction: n } = (0, j.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eb.A)(s);
    return (0, l.jsx)(U.Ip, {
        className: eg.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eg.Ie, children: (0, l.jsx)(ed.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eB.A,
                            {
                                user: s,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eG.u)(e), i(), (0, eF.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eg.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eg.vC }),
                            (0, l.jsx)("div", { className: eg.BI, children: z.intl.string(z.t.zjVh8h) }),
                        ],
                    }),
    });
}
var ez = i(551652);
function eY(e) {
    let { section: s, user: i, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return s === ee.RP.ACTIVITY
        ? (0, l.jsx)(eN, { user: i, currentUser: n, guildId: d, onClose: a })
        : s === ee.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(ek, { user: i, guildId: d, channelId: r, onClose: a })
          : s === ee.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eV, { user: i, onClose: a })
            : s === ee.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(H, { user: i })
              : s === ee.RP.BOT_INFO
                ? (0, l.jsx)(en, { user: i, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(e_, { user: i, displayProfile: t, onClose: a });
}
function ew(e) {
    let {
            user: s,
            currentUser: i,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = ee.RP.USER_INFO,
            onClose: o,
        } = e,
        { trackUserProfileAction: c } = (0, j.NJ)(),
        u = (0, _.bG)([D.A], () => D.A.hidePersonalInformation),
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
            c({ action: "PRESS_SECTION", section: e }), A(e);
        },
        [c],
    );
    return u
        ? (0, l.jsx)("div", {
              className: ez.kL,
              children: (0, l.jsxs)("div", {
                  className: eg.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eg.hB }),
                      (0, l.jsx)("div", { className: eg.BI, children: z.intl.string(z.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: ez.kL,
              children: [
                  (0, l.jsx)(R.V, {
                      className: ez.$H,
                      type: "top",
                      selectedItem: x,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: s, text: i } = e;
                          return (0, l.jsx)(
                              R.V.Item,
                              {
                                  className: ez.YU,
                                  id: s,
                                  "aria-label": i,
                                  children: (0, l.jsx)(b.E, { variant: "text-sm/normal", children: i }),
                              },
                              s,
                          );
                      }),
                  }),
                  (0, l.jsx)(eY, {
                      items: r,
                      section: x,
                      user: s,
                      currentUser: i,
                      displayProfile: t,
                      guildId: d,
                      onClose: o,
                  }),
              ],
          });
}
var eH = i(186272),
    eK = i(996988),
    eW = i(872116);
function eX(e) {
    let {
            user: s,
            currentUser: i,
            guildId: n,
            originGuildId: t,
            channelId: _,
            messageId: R,
            roleId: b,
            sessionId: D,
            initialTabSection: U,
            initialScrollTarget: M,
            transitionState: k,
            openedAt: F,
            onClose: G,
            sourceAnalyticsLocations: B = [],
        } = e,
        V = n === et.ME ? void 0 : n,
        Y = (0, I.Ay)(s.id, V),
        w = h.Ay.getName(V, _, s),
        H = (0, A.GV)(),
        { analyticsLocations: K } = (0, x.Ay)([...B, u.A.USER_PROFILE_MODAL]),
        W = (0, j.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: D,
            guildId: V,
            channelId: _,
            messageId: R,
            roleId: b,
        }),
        X = (function (e) {
            let { mutualGuilds: s } = (0, eb.A)(e),
                i = s?.length;
            return [
                { section: ee.RP.BOT_INFO, text: z.intl.string(z.t.ZzAR2Y) },
                { section: ee.RP.MUTUAL_GUILDS, text: (0, eH.A)(i) },
                { section: ee.RP.BOT_DATA_ACCESS, text: z.intl.string(z.t.WstFb0) },
            ];
        })(s),
        J = (0, m.A)({ user: s, guildId: t, channelId: _, displayProfile: Y, onClose: G });
    return (0, l.jsx)(x.f5, {
        value: K,
        children: (0, l.jsx)(j.of, {
            value: W,
            openedAt: F,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(p.N, {
                value: M,
                children: (0, l.jsx)(d.EO, {
                    "data-migration-pending": !0,
                    transitionState: k,
                    className: eW.zr,
                    hideShadow: !0,
                    "aria-labelledby": H,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(r.F, {
                        component: (0, l.jsx)(a.A, {
                            children: (0, l.jsx)(r.H, { id: H, children: z.intl.format(z.t.KRe1Fk, { name: w }) }),
                        }),
                        children: (0, l.jsxs)(E.A, {
                            user: s,
                            displayProfile: Y,
                            themeType: eK.d.MODAL,
                            children: [
                                (0, l.jsx)(S.A, {
                                    children: (0, l.jsx)(O.A, { user: s, guildId: V, viewProfileItem: J }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(f.A, { user: s, displayProfile: Y, themeType: eK.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: eW.El,
                                            children: [
                                                (0, l.jsx)(g.A, {
                                                    user: s,
                                                    displayProfile: Y,
                                                    guildId: V,
                                                    channelId: _,
                                                    themeType: eK.d.MODAL,
                                                }),
                                                (0, l.jsx)(L.A, {
                                                    user: s,
                                                    themeType: eK.d.MODAL,
                                                    hasEntered: k === o.ip.ENTERED,
                                                    onCloseProfile: G,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: eW.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: eW.jS,
                                                            children: (0, l.jsx)(P.e, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: c.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: eW.pg,
                                                            children: (0, l.jsx)(P.l, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: c.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(C.A, { user: s, guildId: V }),
                                                        (0, l.jsx)(y.A, { user: s }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(v.A, { userId: s.id, className: eW.Fd }),
                                (0, l.jsxs)("div", {
                                    className: eW.rf,
                                    children: [
                                        (0, l.jsx)(T.Ay, {
                                            className: eW.eF,
                                            user: s,
                                            guildId: V,
                                            displayName: w,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(N.A, {
                                                displayProfile: Y,
                                                themeType: eK.d.MODAL,
                                                onClose: G,
                                            }),
                                        }),
                                        (0, l.jsx)(ew, {
                                            user: s,
                                            currentUser: i,
                                            displayProfile: Y,
                                            guildId: V,
                                            items: X,
                                            initialSection: U ?? ee.RP.BOT_INFO,
                                            onClose: G,
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
var eJ = i(480335),
    eQ = i(713517),
    eZ = i(35241);
function eq(e) {
    let {
            user: s,
            guildId: i,
            channelId: t,
            messageId: o,
            roleId: c,
            sessionId: m,
            transitionState: p,
            openedAt: v,
            onClose: y,
            sourceAnalyticsLocations: O = [],
        } = e,
        C = i === et.ME ? void 0 : i,
        P = (0, I.Ay)(s.id, C),
        L = h.Ay.getName(C, t, s),
        _ = (0, A.GV)(),
        { analyticsLocations: D } = (0, x.Ay)([...O, u.A.USER_PROFILE_MODAL]),
        M = (0, j.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: m,
            guildId: C,
            channelId: t,
            messageId: o,
            roleId: c,
        }),
        k = n.useRef(null),
        F = (0, eQ.M)(k);
    return (0, l.jsx)(x.f5, {
        value: D,
        children: (0, l.jsx)(j.of, {
            value: M,
            openedAt: v,
            fetchStartedAt: P?.fetchStartedAt,
            fetchEndedAt: P?.fetchEndedAt,
            isLoaded: P?.isLoaded,
            children: (0, l.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: p,
                className: eW.zr,
                hideShadow: !0,
                "aria-labelledby": _,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(r.F, {
                        component: (0, l.jsx)(a.A, {
                            children: (0, l.jsx)(r.H, { id: _, children: z.intl.format(z.t.KRe1Fk, { name: L }) }),
                        }),
                        children: (0, l.jsxs)(E.A, {
                            user: s,
                            displayProfile: P,
                            themeType: eK.d.MODAL,
                            ref: P?.profileEffect != null ? k : void 0,
                            children: [
                                (0, l.jsx)(S.A, { children: (0, l.jsx)(eZ.A, { user: s }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(f.A, { user: s, displayProfile: P, themeType: eK.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: eW.El,
                                            children: (0, l.jsx)(g.A, {
                                                user: s,
                                                displayProfile: P,
                                                guildId: C,
                                                channelId: t,
                                                themeType: eK.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: eW.rf,
                                    children: [
                                        (0, l.jsx)(T.Ay, {
                                            className: eW.eF,
                                            user: s,
                                            guildId: C,
                                            displayName: L,
                                            displayNameSize: "lg",
                                            pronouns: P?.pronouns,
                                            trailing: (0, l.jsx)(N.A, {
                                                displayProfile: P,
                                                themeType: eK.d.MODAL,
                                                onClose: y,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: ez.kL,
                                            children: [
                                                (0, l.jsx)(R.V, {
                                                    className: ez.$H,
                                                    type: "top",
                                                    selectedItem: ee.RP.BOT_INFO,
                                                    onItemSelect: et.tEg,
                                                    children: (0, l.jsx)(
                                                        R.V.Item,
                                                        {
                                                            className: ez.YU,
                                                            id: ee.RP.BOT_INFO,
                                                            "aria-label": z.intl.string(z.t.ZzAR2Y),
                                                            children: (0, l.jsx)(b.E, {
                                                                variant: "text-sm/normal",
                                                                children: z.intl.string(z.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ee.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(U.Ip, {
                                                    fade: !0,
                                                    className: el.XG,
                                                    children: [
                                                        (0, l.jsx)(J.E, {
                                                            userId: s.id,
                                                            userBio: P?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(Z.A, {
                                                            heading: z.intl.string(z.t["A//N4k"]),
                                                            children: (0, l.jsx)(Q.A, {
                                                                userId: s.id,
                                                                guildId: C,
                                                                tooltipDelay: ee.In,
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
                    P?.profileEffect != null && (0, l.jsx)(eJ.A, { skuId: P?.profileEffect?.skuId, isHovering: F }),
                ],
            }),
        }),
    });
}
var e$ = i(503698),
    e0 = i.n(e$),
    e5 = i(628284),
    e3 = i(331322),
    e9 = i(632738),
    e7 = i(994500),
    e1 = i(47675),
    e6 = i(249790),
    e4 = i(254828),
    e8 = i(783123),
    e2 = i(463156),
    se = i(449572),
    ss = i(337796);
function si(e) {
    let {
            user: s,
            guildId: i,
            channelId: n,
            messageId: t,
            roleId: r,
            transitionState: a,
            openedAt: o,
            onClose: c,
            onHide: A,
            sourceAnalyticsLocations: m = [],
        } = e,
        p = i === et.ME ? void 0 : i,
        g = (0, _.bG)([e7.A], () => e7.A.isBlocked(s.id)),
        { analyticsLocations: N } = (0, x.Ay)([...m, g ? u.A.BLOCKED_PROFILE_MODAL : u.A.IGNORED_PROFILE_MODAL]),
        f = (0, j.pb)({ layout: "MODAL_V2", userId: s.id, guildId: p, channelId: n, messageId: t, roleId: r }),
        v = [
            { icon: e5.y, description: z.intl.string(z.t.kcuWva) },
            { icon: e5.y, description: z.intl.string(g ? z.t.QxrDY1 : z.t.W6fjkS) },
        ],
        T = (0, I.Ay)(s.id, p),
        y = h.Ay.getName(T?.guildId, n, s),
        O = z.intl.formatToPlainString(z.t.KRe1Fk, { name: y });
    return (0, l.jsx)(x.f5, {
        value: N,
        children: (0, l.jsx)(j.of, {
            value: f,
            openedAt: o,
            fetchStartedAt: T?.fetchStartedAt,
            fetchEndedAt: T?.fetchEndedAt,
            isLoaded: T?.isLoaded,
            children: (0, l.jsx)(d.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                className: ss.zr,
                "aria-label": O,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(E.A, {
                    className: e0()(ss.A7, se.BK),
                    user: s,
                    displayProfile: T,
                    themeType: eK.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", {
                            className: ss.Oo,
                            children: (0, l.jsx)(e2.A, { isCurrentUser: !1, onClose: c }),
                        }),
                        (0, l.jsx)("div", { className: se.Tp }),
                        (0, l.jsxs)("div", {
                            className: se.Qs,
                            children: [
                                (0, l.jsx)(e6.A, { user: s, guildId: p }),
                                (0, l.jsxs)("div", {
                                    className: se.FS,
                                    children: [
                                        (0, l.jsx)(M.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: z.intl.string(z.t.b33pLD),
                                        }),
                                        (0, l.jsx)(b.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: z.intl.format(g ? z.t.T7QiLn : z.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: se.vb,
                                    children: v.map((e, s) => {
                                        let { icon: i, description: n } = e;
                                        return (0, l.jsx)(
                                            e9.PQ,
                                            {
                                                icon: i,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: ev.A.colors.TEXT_DEFAULT.css,
                                            },
                                            s,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(e3.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(e8.A, {
                                            size: "md",
                                            isBlocked: g,
                                            onClick: () => {
                                                A(),
                                                    (0, e1.Wn)({
                                                        action: g ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: N,
                                                        ...f,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(e4.A, {
                                            userId: s.id,
                                            onClick: () => {
                                                A(),
                                                    (0, e1.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: N,
                                                        ...f,
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
var sl = i(903586);
function sn(e) {
    let { hideRestrictedProfile: s, ...i } = e,
        { user: n } = i,
        [d, r] = (0, t.A)(n.id);
    return d && !s
        ? (0, l.jsx)(si, { onHide: r, ...i })
        : n.isNonUserBot()
          ? (0, l.jsx)(eq, { ...i })
          : n.bot
            ? (0, l.jsx)(eX, { ...i })
            : (0, l.jsx)(sl.A, { ...i });
}
