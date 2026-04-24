"use strict";
n.r(t), n.d(t, { default: () => te });
var i = n(627968),
    r = n(64700),
    l = n(215530),
    a = n(935462),
    s = n(707554),
    o = n(140735),
    c = n(231723),
    d = n(982168),
    u = n(793574),
    _ = n(688810),
    p = n(915089),
    f = n(562153),
    m = n(183555),
    g = n(999291),
    h = n(722868),
    x = n(716804),
    b = n(718019),
    A = n(694720),
    v = n(915614),
    I = n(559506),
    C = n(946356),
    j = n(878555),
    y = n(570314),
    E = n(984545),
    N = n(571077),
    P = n(587168),
    S = n(982985),
    T = n(983495),
    R = n(17928),
    w = n(761508),
    L = n(834730),
    k = n(351906),
    O = n(364522),
    M = n(534514),
    D = n(534890),
    B = n(687966),
    U = n(177953),
    F = n(203363),
    G = n(841595),
    H = n(985018),
    W = n(935059);
function V(e) {
    let { icon: t, title: n, description: r } = e;
    return (0, i.jsxs)("div", {
        className: W.nM,
        children: [
            (0, i.jsx)("div", {
                className: W.aL,
                children: (0, i.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: W.qg,
                children: [
                    (0, i.jsx)(M.D, { variant: "text-xs/semibold", children: n }),
                    (0, i.jsx)(L.E, { variant: "text-sm/normal", children: r }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { user: t } = e,
        n = (0, R.bG)([G.A], () => G.A.getUserProfile(t.id)?.application),
        { hasMessageContent: r, hasGuildPresences: l, hasGuildMembers: a } = (0, F.Z)(n);
    return (0, i.jsxs)(O.Ip, {
        fade: !0,
        className: W.XG,
        children: [
            r &&
                (0, i.jsx)(V, {
                    icon: D.o,
                    title: H.intl.string(H.t["7Tmhfu"]),
                    description: H.intl.string(H.t.eu5x7z),
                }),
            l && (0, i.jsx)(V, { icon: B._, title: H.intl.string(H.t.awYSsM), description: H.intl.string(H.t.TpsXoC) }),
            a && (0, i.jsx)(V, { icon: U.n, title: H.intl.string(H.t.WuKeSJ), description: H.intl.string(H.t.wOBmtV) }),
            (0, i.jsx)(L.E, {
                variant: "text-xs/normal",
                children: H.intl.format(H.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var X = n(734057),
    Y = n(309010),
    Z = n(383199),
    K = n(308244),
    q = n(743987),
    J = n(900179),
    Q = n(280645),
    $ = n(756634),
    ee = n(518477),
    et = n(142948);
function en(e) {
    let { userId: t } = e,
        n = (0, x.g)(),
        { trackUserProfileAction: r } = (0, m.NJ)();
    return (0, i.jsx)(J.A, {
        heading: H.intl.string(H.t["mQKv+v"]),
        scrollTargetId: ee.bk.NOTE,
        children: (0, i.jsx)($.A, {
            userId: t,
            className: et.N,
            autoFocus: n === ee.bk.NOTE,
            onUpdate: () => r({ action: "SET_NOTE" }),
        }),
    });
}
var ei = n(741036);
function er(e) {
    let { user: t, displayProfile: n, guildId: r, onClose: l } = e,
        a = (0, R.bG)([G.A], () => G.A.getUserProfile(t.id)?.application),
        s = (0, R.bG)([X.A, Y.A], () => X.A.getChannel(Y.A.getChannelId()));
    return (0, i.jsxs)(O.Ip, {
        fade: !0,
        className: ei.XG,
        children: [
            (0, i.jsx)(K.E, { userBio: n?.bio, setLineClamp: !1 }),
            a?.popularApplicationCommandIds != null &&
                null != s &&
                (0, i.jsx)(Z.A, {
                    applicationId: a.id,
                    commandIds: a.popularApplicationCommandIds,
                    channel: s,
                    guildId: r,
                    onClick: l,
                }),
            n?.guildId != null && (0, i.jsx)(Q.A, { userId: t.id, guildId: n.guildId }),
            (0, i.jsx)(J.A, {
                heading: H.intl.string(H.t["A//N4k"]),
                children: (0, i.jsx)(q.A, { userId: t.id, guildId: r, tooltipDelay: ee.In }),
            }),
            (0, i.jsx)(en, { userId: t.id }),
        ],
    });
}
var el = n(652215),
    ea = n(289873),
    es = n(349288),
    eo = n(517164),
    ec = n(290863),
    ed = n(461213),
    eu = n(975571),
    e_ = n(146655),
    ep = n(489379),
    ef = n(402857),
    em = n(353394),
    eg = n(842241),
    eh = n(986712),
    ex = n(437781),
    eb = n(928666);
function eA(e) {
    let { user: t, currentUser: n, guildId: r, onClose: l } = e,
        { live: a, recent: s, stream: o } = (0, e_.A)(t.id),
        { voiceChannel: c, voiceActivity: d } = (0, ep.A)({ userId: t.id, guildId: r }),
        u = (0, R.bG)([eo.A], () => eo.A.isFetchingUserOutbox(t.id)),
        _ = t.id === n.id,
        p = (0, R.bG)([ed.A, ec.A], () => {
            let e = _ ? ed.A.getStatus() : ec.A.getStatus(t.id);
            return e === el.clD.OFFLINE || e === el.clD.INVISIBLE;
        }),
        f = (0, R.bG)([G.A], () => G.A.getUserProfile(t.id)?.private === !0),
        m = a.length > 0 || null != o,
        g = !f && null == o && null == d && null != c,
        h = !p && (m || g),
        x = s.length > 0;
    return h || x || !u
        ? (0, i.jsxs)(O.Ip, {
              className: ex.XG,
              fade: !0,
              children: [
                  h
                      ? (0, i.jsx)(J.A, {
                            "aria-label": H.intl.string(H.t.J6STd9),
                            children: (0, i.jsxs)("ul", {
                                className: ex.Ci,
                                children: [
                                    null != o &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(eg.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: o,
                                                onClose: l,
                                            }),
                                        }),
                                    a.map((e, r) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(ef.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: l,
                                                }),
                                            },
                                            `live-${r}`,
                                        ),
                                    ),
                                    g &&
                                        (0, i.jsx)("li", {
                                            children: (0, i.jsx)(eh.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: c,
                                                onClose: l,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  x
                      ? (0, i.jsx)(J.A, {
                            heading: H.intl.string(H.t.M0zgnT),
                            introText: _
                                ? H.intl.format(H.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, i.jsx)(
                                              es.Anchor,
                                              {
                                                  href: eu.A.getArticleURL(el.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ee.bk.RECENT_ACTIVITY,
                            children: (0, i.jsx)("ul", {
                                className: ex.Ci,
                                children: s.map((e) =>
                                    (0, i.jsx)(
                                        "li",
                                        { children: (0, i.jsx)(em.A, { user: t, entry: e, onClose: l }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, i.jsx)("div", { className: eb.Ie, children: (0, i.jsx)(ea.y, {}) });
}
var ev = n(695366),
    eI = n(661531),
    eC = n(821269),
    ej = n(93246),
    ey = n(773669),
    eE = n(967198),
    eN = n(346713),
    eP = n(484509),
    eS = n(46937),
    eT = n(361311);
function eR(e) {
    let { user: t, displayProfile: n, onClose: r } = e,
        { trackUserProfileAction: l } = (0, m.NJ)(),
        a = (0, R.bG)([eE.A], () => eE.A.getGuildId()),
        s = (0, eC.q)({ userId: t.id }),
        o = (0, R.bG)([k.A], () => k.A.hidePersonalInformation),
        c = (0, R.bG)([ey.default], () => ey.default.locale),
        d = (0, eP.A)(t.id),
        u = (0, eN.A)(t.id);
    return (0, i.jsxs)(O.Ip, {
        fade: !0,
        className: ei.XG,
        children: [
            n?.bio != null && n?.bio !== "" && !o && (0, i.jsx)(K.A, { userBio: n.bio, setLineClamp: !1 }),
            n?.guildId != null && (0, i.jsx)(Q.A, { userId: t.id, guildId: n.guildId }),
            t.isProvisional &&
                (0, i.jsx)(J.A, {
                    heading: H.intl.string(H.t.Iyka0U),
                    headingIcon: (0, i.jsx)(ev.E, { size: "xxs", color: eI.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, i.jsx)(ej.T, { userId: t.id }),
                }),
            s.length > 0 &&
                (0, i.jsx)(J.A, {
                    heading: H.intl.string(H.t["Uv/eTx"]),
                    children: (0, i.jsx)(eT.A, { applicationIds: s }),
                }),
            (0, i.jsx)(J.A, {
                heading: H.intl.string(H.t.a6XYD9),
                children: (0, i.jsx)(q.A, { userId: t.id, guildId: n?.guildId, tooltipDelay: ee.In }),
            }),
            d.length > 0 &&
                (0, i.jsx)(J.A, {
                    heading: H.intl.string(H.t["3fe7U5"]),
                    scrollTargetId: ee.bk.CONNECTIONS,
                    children: (0, i.jsx)(eS.Ay, { connectedAccounts: d, className: ei.oQ, userId: t.id, locale: c }),
                }),
            u.length > 0 &&
                (0, i.jsx)(J.A, {
                    heading: H.intl.string(H.t.PHjkRE),
                    children: u.map((e) =>
                        (0, i.jsx)(
                            eS.Wc,
                            {
                                className: ei.MI,
                                applicationRoleConnection: e,
                                locale: c,
                                onApplicationClicked: () => {
                                    l({ action: "PRESS_APP_CONNECTION" }), r();
                                },
                                selectedGuildId: a ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, i.jsx)(en, { userId: t.id }),
        ],
    });
}
var ew = n(163126),
    eL = n(913453),
    ek = n(229187),
    eO = n(975732),
    eM = n(201934);
function eD(e) {
    let { user: t, guildId: n, channelId: l, onClose: a } = e,
        { mutualFriends: s } = (0, eL.A)(t),
        { analyticsLocations: o } = (0, _.Ay)(),
        { context: c, trackUserProfileAction: d } = (0, m.NJ)(),
        u = (0, ew.A)();
    return (
        r.useEffect(() => {
            (0, ek.A)(t.id, u);
        }, [t.id, u]),
        (0, i.jsx)(O.Ip, {
            className: eb.DK,
            fade: !0,
            children:
                null == s
                    ? (0, i.jsx)("div", { className: eb.Ie, children: (0, i.jsx)(ea.y, {}) })
                    : 0 === s.length
                      ? (0, i.jsxs)("div", {
                            className: eb.Ie,
                            children: [
                                (0, i.jsx)("div", { className: eb.on }),
                                (0, i.jsx)("div", { className: eb.BI, children: H.intl.string(H.t["/5p4gx"]) }),
                            ],
                        })
                      : s.map((e) => {
                            let { key: t, user: r, status: s } = e;
                            return (0, i.jsx)(
                                eM.A,
                                {
                                    user: r,
                                    status: s,
                                    guildId: n,
                                    channelId: l,
                                    onSelect: () => {
                                        var e;
                                        a?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = r.id),
                                            (0, eO.openUserProfileModal)({
                                                ...c,
                                                userId: e,
                                                sourceAnalyticsLocations: o,
                                            });
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var eB = n(398590),
    eU = n(345942),
    eF = n(51943);
function eG(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: r } = (0, m.NJ)(),
        { mutualGuilds: l, isFetching: a } = (0, eL.A)(t);
    return (0, i.jsx)(O.Ip, {
        className: eb.DK,
        fade: !0,
        children:
            null == l && a
                ? (0, i.jsx)("div", { className: eb.Ie, children: (0, i.jsx)(ea.y, {}) })
                : (null != l || a) && l?.length !== 0
                  ? l?.map((e) => {
                        let { guild: l, nick: a } = e;
                        return (0, i.jsx)(
                            eF.A,
                            {
                                user: t,
                                guild: l,
                                nick: a,
                                onSelect: () => {
                                    var e;
                                    r({ action: "PRESS_MUTUAL_GUILD" }), (e = l.id), (0, eU.u)(e), n(), (0, eB.jH)();
                                },
                            },
                            l.id,
                        );
                    })
                  : (0, i.jsxs)("div", {
                        className: eb.Ie,
                        children: [
                            (0, i.jsx)("div", { className: eb.vC }),
                            (0, i.jsx)("div", { className: eb.BI, children: H.intl.string(H.t.zjVh8h) }),
                        ],
                    }),
    });
}
var eH = n(551652);
function eW(e) {
    let { section: t, user: n, currentUser: r, displayProfile: l, guildId: a, channelId: s, onClose: o } = e;
    return t === ee.RP.ACTIVITY
        ? (0, i.jsx)(eA, { user: n, currentUser: r, guildId: a, onClose: o })
        : t === ee.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(eD, { user: n, guildId: a, channelId: s, onClose: o })
          : t === ee.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(eG, { user: n, onClose: o })
            : t === ee.RP.BOT_DATA_ACCESS
              ? (0, i.jsx)(z, { user: n })
              : t === ee.RP.BOT_INFO
                ? (0, i.jsx)(er, { user: n, displayProfile: l, guildId: a, onClose: o })
                : (0, i.jsx)(eR, { user: n, displayProfile: l, onClose: o });
}
function eV(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: l,
            guildId: a,
            items: s,
            initialSection: o = ee.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: d } = (0, m.NJ)(),
        u = (0, R.bG)([k.A], () => k.A.hidePersonalInformation),
        [_, p] = r.useState(
            () =>
                s.find((e) => {
                    let { section: t } = e;
                    return t === o;
                })?.section ?? s[0]?.section,
        );
    r.useEffect(() => {
        null == s.find((e) => e.section === _) && p(s[0].section);
    }, [s, _]);
    let f = r.useCallback(
        (e) => {
            d({ action: "PRESS_SECTION", section: e }), p(e);
        },
        [d],
    );
    return u
        ? (0, i.jsx)("div", {
              className: eH.kL,
              children: (0, i.jsxs)("div", {
                  className: eb.Ie,
                  children: [
                      (0, i.jsx)("div", { className: eb.hB }),
                      (0, i.jsx)("div", { className: eb.BI, children: H.intl.string(H.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, i.jsxs)("div", {
              className: eH.kL,
              children: [
                  (0, i.jsx)(w.V, {
                      className: eH.$H,
                      type: "top",
                      selectedItem: _,
                      onItemSelect: f,
                      children: s.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, i.jsx)(
                              w.V.Item,
                              {
                                  className: eH.YU,
                                  id: t,
                                  "aria-label": n,
                                  children: (0, i.jsx)(L.E, { variant: "text-sm/normal", children: n }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, i.jsx)(eW, {
                      items: s,
                      section: _,
                      user: t,
                      currentUser: n,
                      displayProfile: l,
                      guildId: a,
                      onClose: c,
                  }),
              ],
          });
}
var ez = n(186272),
    eX = n(996988),
    eY = n(872116);
function eZ(e) {
    let {
            user: t,
            currentUser: n,
            guildId: r,
            originGuildId: l,
            channelId: R,
            messageId: w,
            roleId: L,
            sessionId: k,
            initialTabSection: O,
            initialScrollTarget: M,
            transitionState: D,
            openedAt: B,
            onClose: U,
            sourceAnalyticsLocations: F = [],
        } = e,
        G = r === el.ME ? void 0 : r,
        W = (0, g.Ay)(t.id, G),
        V = f.Ay.getName(G, R, t),
        z = (0, p.GV)(),
        { analyticsLocations: X } = (0, _.Ay)([...F, u.A.USER_PROFILE_MODAL]),
        Y = (0, m.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: k,
            guildId: G,
            channelId: R,
            messageId: w,
            roleId: L,
        }),
        Z = (function (e) {
            let { mutualGuilds: t } = (0, eL.A)(e),
                n = t?.length;
            return [
                { section: ee.RP.BOT_INFO, text: H.intl.string(H.t.ZzAR2Y) },
                { section: ee.RP.MUTUAL_GUILDS, text: (0, ez.A)(n) },
                { section: ee.RP.BOT_DATA_ACCESS, text: H.intl.string(H.t.WstFb0) },
            ];
        })(t),
        K = (0, h.A)({ user: t, guildId: l, channelId: R, displayProfile: W, onClose: U });
    return (0, i.jsx)(_.f5, {
        value: X,
        children: (0, i.jsx)(m.of, {
            value: Y,
            openedAt: B,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(x.N, {
                value: M,
                children: (0, i.jsx)(a.EO, {
                    "data-migration-pending": !0,
                    transitionState: D,
                    className: eY.zr,
                    hideShadow: !0,
                    "aria-labelledby": z,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.F, {
                        component: (0, i.jsx)(o.A, {
                            children: (0, i.jsx)(s.H, { id: z, children: H.intl.format(H.t.KRe1Fk, { name: V }) }),
                        }),
                        children: (0, i.jsxs)(C.A, {
                            user: t,
                            displayProfile: W,
                            themeType: eX.d.MODAL,
                            children: [
                                (0, i.jsx)(P.A, {
                                    children: (0, i.jsx)(E.A, { user: t, guildId: G, viewProfileItem: K }),
                                }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(v.A, { user: t, displayProfile: W, themeType: eX.d.MODAL }),
                                        (0, i.jsxs)("div", {
                                            className: eY.El,
                                            children: [
                                                (0, i.jsx)(b.A, {
                                                    user: t,
                                                    displayProfile: W,
                                                    guildId: G,
                                                    channelId: R,
                                                    themeType: eX.d.MODAL,
                                                }),
                                                (0, i.jsx)(T.A, {
                                                    user: t,
                                                    themeType: eX.d.MODAL,
                                                    hasEntered: D === c.ip.ENTERED,
                                                    onCloseProfile: U,
                                                    disableToolbar: !0,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: eY.Pz,
                                                    children: [
                                                        (0, i.jsx)("div", {
                                                            className: eY.jS,
                                                            children: (0, i.jsx)(S.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: d.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className: eY.pg,
                                                            children: (0, i.jsx)(S.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: d.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(N.A, { user: t, guildId: G }),
                                                        (0, i.jsx)(y.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(I.A, { userId: t.id, className: eY.Fd }),
                                (0, i.jsxs)("div", {
                                    className: eY.rf,
                                    children: [
                                        (0, i.jsx)(j.Ay, {
                                            className: eY.eF,
                                            user: t,
                                            guildId: G,
                                            displayName: V,
                                            displayNameSize: "lg",
                                            pronouns: W?.pronouns,
                                            trailing: (0, i.jsx)(A.A, {
                                                displayProfile: W,
                                                themeType: eX.d.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, i.jsx)(eV, {
                                            user: t,
                                            currentUser: n,
                                            displayProfile: W,
                                            guildId: G,
                                            items: Z,
                                            initialSection: O ?? ee.RP.BOT_INFO,
                                            onClose: U,
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
var eK = n(480335),
    eq = n(713517),
    eJ = n(35241);
function eQ(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            messageId: c,
            roleId: d,
            sessionId: h,
            transitionState: x,
            openedAt: I,
            onClose: y,
            sourceAnalyticsLocations: E = [],
        } = e,
        N = n === el.ME ? void 0 : n,
        S = (0, g.Ay)(t.id, N),
        T = f.Ay.getName(N, l, t),
        R = (0, p.GV)(),
        { analyticsLocations: k } = (0, _.Ay)([...E, u.A.USER_PROFILE_MODAL]),
        M = (0, m.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: h,
            guildId: N,
            channelId: l,
            messageId: c,
            roleId: d,
        }),
        D = r.useRef(null),
        B = (0, eq.M)(D);
    return (0, i.jsx)(_.f5, {
        value: k,
        children: (0, i.jsx)(m.of, {
            value: M,
            openedAt: I,
            fetchStartedAt: S?.fetchStartedAt,
            fetchEndedAt: S?.fetchEndedAt,
            isLoaded: S?.isLoaded,
            children: (0, i.jsxs)(a.EO, {
                "data-migration-pending": !0,
                transitionState: x,
                className: eY.zr,
                hideShadow: !0,
                "aria-labelledby": R,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(s.F, {
                        component: (0, i.jsx)(o.A, {
                            children: (0, i.jsx)(s.H, { id: R, children: H.intl.format(H.t.KRe1Fk, { name: T }) }),
                        }),
                        children: (0, i.jsxs)(C.A, {
                            user: t,
                            displayProfile: S,
                            themeType: eX.d.MODAL,
                            ref: S?.profileEffect != null ? D : void 0,
                            children: [
                                (0, i.jsx)(P.A, { children: (0, i.jsx)(eJ.A, { user: t }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(v.A, { user: t, displayProfile: S, themeType: eX.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: eY.El,
                                            children: (0, i.jsx)(b.A, {
                                                user: t,
                                                displayProfile: S,
                                                guildId: N,
                                                channelId: l,
                                                themeType: eX.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: eY.rf,
                                    children: [
                                        (0, i.jsx)(j.Ay, {
                                            className: eY.eF,
                                            user: t,
                                            guildId: N,
                                            displayName: T,
                                            displayNameSize: "lg",
                                            pronouns: S?.pronouns,
                                            trailing: (0, i.jsx)(A.A, {
                                                displayProfile: S,
                                                themeType: eX.d.MODAL,
                                                onClose: y,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: eH.kL,
                                            children: [
                                                (0, i.jsx)(w.V, {
                                                    className: eH.$H,
                                                    type: "top",
                                                    selectedItem: ee.RP.BOT_INFO,
                                                    onItemSelect: el.tEg,
                                                    children: (0, i.jsx)(
                                                        w.V.Item,
                                                        {
                                                            className: eH.YU,
                                                            id: ee.RP.BOT_INFO,
                                                            "aria-label": H.intl.string(H.t.ZzAR2Y),
                                                            children: (0, i.jsx)(L.E, {
                                                                variant: "text-sm/normal",
                                                                children: H.intl.string(H.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ee.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(O.Ip, {
                                                    fade: !0,
                                                    className: ei.XG,
                                                    children: [
                                                        (0, i.jsx)(K.E, {
                                                            userId: t.id,
                                                            userBio: S?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(J.A, {
                                                            heading: H.intl.string(H.t["A//N4k"]),
                                                            children: (0, i.jsx)(q.A, {
                                                                userId: t.id,
                                                                guildId: N,
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
                    S?.profileEffect != null && (0, i.jsx)(eK.A, { skuId: S?.profileEffect?.skuId, isHovering: B }),
                ],
            }),
        }),
    });
}
var e$ = n(628284),
    e0 = n(331322),
    e1 = n(632738),
    e9 = n(994500),
    e2 = n(47675),
    e8 = n(249790),
    e7 = n(254828),
    e3 = n(783123),
    e5 = n(449572);
function e6(e) {
    let {
            user: t,
            guildId: n,
            channelId: r,
            messageId: l,
            roleId: s,
            transitionState: o,
            openedAt: c,
            onHide: d,
            sourceAnalyticsLocations: p = [],
        } = e,
        h = n === el.ME ? void 0 : n,
        x = (0, R.bG)([e9.A], () => e9.A.isBlocked(t.id)),
        { analyticsLocations: b } = (0, _.Ay)([...p, x ? u.A.BLOCKED_PROFILE_MODAL : u.A.IGNORED_PROFILE_MODAL]),
        A = (0, m.pb)({ layout: "MODAL_V2", userId: t.id, guildId: h, channelId: r, messageId: l, roleId: s }),
        v = [
            { icon: e$.y, description: H.intl.string(H.t.kcuWva) },
            { icon: e$.y, description: H.intl.string(x ? H.t.QxrDY1 : H.t.W6fjkS) },
        ],
        I = (0, g.Ay)(t.id, h),
        j = f.Ay.getName(I?.guildId, r, t),
        y = H.intl.formatToPlainString(H.t.KRe1Fk, { name: j });
    return (0, i.jsx)(_.f5, {
        value: b,
        children: (0, i.jsx)(m.of, {
            value: A,
            openedAt: c,
            fetchStartedAt: I?.fetchStartedAt,
            fetchEndedAt: I?.fetchEndedAt,
            isLoaded: I?.isLoaded,
            children: (0, i.jsx)(a.EO, {
                "data-migration-pending": !0,
                transitionState: o,
                className: e5.zr,
                "aria-label": y,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(C.A, {
                    user: t,
                    displayProfile: I,
                    themeType: eX.d.MODAL_V2,
                    children: [
                        (0, i.jsx)("div", { className: e5.Tp }),
                        (0, i.jsxs)("div", {
                            className: e5.Qs,
                            children: [
                                (0, i.jsx)(e8.A, { user: t, guildId: h }),
                                (0, i.jsxs)("div", {
                                    className: e5.FS,
                                    children: [
                                        (0, i.jsx)(M.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: H.intl.string(H.t.b33pLD),
                                        }),
                                        (0, i.jsx)(L.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: H.intl.format(x ? H.t.T7QiLn : H.t.MnEowy, { username: j }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: e5.vb,
                                    children: v.map((e, t) => {
                                        let { icon: n, description: r } = e;
                                        return (0, i.jsx)(
                                            e1.PQ,
                                            {
                                                icon: n,
                                                title: r,
                                                titleVariant: "text-md/normal",
                                                color: eI.A.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, i.jsxs)(e0.B, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)(e3.A, {
                                            size: "md",
                                            isBlocked: x,
                                            onClick: () => {
                                                d(),
                                                    (0, e2.Wn)({
                                                        action: x ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: b,
                                                        ...A,
                                                    });
                                            },
                                        }),
                                        (0, i.jsx)(e7.A, {
                                            userId: t.id,
                                            onClick: () => {
                                                d(),
                                                    (0, e2.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: b,
                                                        ...A,
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
var e4 = n(43549);
function te(e) {
    let { hideRestrictedProfile: t, ...n } = e,
        { user: r } = n,
        [a, s] = (0, l.A)(r.id);
    return a && !t
        ? (0, i.jsx)(e6, { onHide: s, ...n })
        : r.isNonUserBot()
          ? (0, i.jsx)(eQ, { ...n })
          : r.bot
            ? (0, i.jsx)(eZ, { ...n })
            : (0, i.jsx)(e4.A, { ...n });
}
