n.r(t), n.d(t, { default: () => te });
var a = n(627968),
    i = n(64700),
    l = n(215530),
    r = n(935462),
    s = n(707554),
    o = n(140735),
    d = n(231723),
    c = n(982168),
    _ = n(793574),
    u = n(688810),
    p = n(915089),
    m = n(562153),
    f = n(183555),
    x = n(999291),
    g = n(722868),
    h = n(716804),
    b = n(718019),
    A = n(694720),
    v = n(915614),
    I = n(559506),
    j = n(946356),
    y = n(586644),
    C = n(570314),
    N = n(984545),
    E = n(571077),
    T = n(587168),
    w = n(982985),
    P = n(983495),
    L = n(17928),
    k = n(761508),
    S = n(834730),
    R = n(351906),
    D = n(364522),
    B = n(534514),
    O = n(534890),
    M = n(687966),
    G = n(177953),
    U = n(203363),
    F = n(841595),
    H = n(985018),
    V = n(935059);
function W(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, a.jsxs)("div", {
        className: V.nM,
        children: [
            (0, a.jsx)("div", {
                className: V.aL,
                children: (0, a.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, a.jsxs)("div", {
                className: V.qg,
                children: [
                    (0, a.jsx)(B.D, { variant: "text-xs/semibold", children: n }),
                    (0, a.jsx)(S.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
        ],
    });
}
function z(e) {
    let { user: t } = e,
        n = (0, L.bG)([F.A], () => F.A.getUserProfile(t.id)?.application),
        { hasMessageContent: i, hasGuildPresences: l, hasGuildMembers: r } = (0, U.Z)(n);
    return (0, a.jsxs)(D.Ip, {
        fade: !0,
        className: V.XG,
        children: [
            i &&
                (0, a.jsx)(W, {
                    icon: O.o,
                    title: H.intl.string(H.t["7Tmhfu"]),
                    description: H.intl.string(H.t.eu5x7z),
                }),
            l && (0, a.jsx)(W, { icon: M._, title: H.intl.string(H.t.awYSsM), description: H.intl.string(H.t.TpsXoC) }),
            r && (0, a.jsx)(W, { icon: G.n, title: H.intl.string(H.t.WuKeSJ), description: H.intl.string(H.t.wOBmtV) }),
            (0, a.jsx)(S.E, {
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
    K = n(383199),
    J = n(308244),
    Q = n(743987),
    q = n(900179),
    Z = n(280645),
    $ = n(756634),
    ee = n(518477),
    et = n(142948);
function en(e) {
    let { userId: t } = e,
        n = (0, h.g)(),
        { trackUserProfileAction: i } = (0, f.NJ)();
    return (0, a.jsx)(q.A, {
        heading: H.intl.string(H.t["mQKv+v"]),
        scrollTargetId: ee.bk.NOTE,
        children: (0, a.jsx)($.A, {
            userId: t,
            className: et.N,
            autoFocus: n === ee.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ea = n(741036);
function ei(e) {
    let { user: t, displayProfile: n, guildId: i, onClose: l } = e,
        r = (0, L.bG)([F.A], () => F.A.getUserProfile(t.id)?.application),
        s = (0, L.bG)([X.A, Y.A], () => X.A.getChannel(Y.A.getChannelId()));
    return (0, a.jsxs)(D.Ip, {
        fade: !0,
        className: ea.XG,
        children: [
            (0, a.jsx)(J.E, { userBio: n?.bio, setLineClamp: !1 }),
            r?.popularApplicationCommandIds != null &&
                null != s &&
                (0, a.jsx)(K.A, {
                    applicationId: r.id,
                    commandIds: r.popularApplicationCommandIds,
                    channel: s,
                    guildId: i,
                    onClick: l,
                }),
            n?.guildId != null && (0, a.jsx)(Z.A, { userId: t.id, guildId: n.guildId }),
            (0, a.jsx)(q.A, {
                heading: H.intl.string(H.t["A//N4k"]),
                children: (0, a.jsx)(Q.A, { userId: t.id, guildId: i, tooltipDelay: ee.In }),
            }),
            (0, a.jsx)(en, { userId: t.id }),
        ],
    });
}
var el = n(652215),
    er = n(289873),
    es = n(349288),
    eo = n(517164),
    ed = n(290863),
    ec = n(461213),
    e_ = n(975571),
    eu = n(146655),
    ep = n(489379),
    em = n(402857),
    ef = n(353394),
    ex = n(842241),
    eg = n(986712),
    eh = n(437781),
    eb = n(928666);
function eA(e) {
    let { user: t, currentUser: n, guildId: i, onClose: l } = e,
        { live: r, recent: s, stream: o } = (0, eu.A)(t.id),
        { voiceChannel: d, voiceActivity: c } = (0, ep.A)({ userId: t.id, guildId: i }),
        _ = (0, L.bG)([eo.A], () => eo.A.isFetchingUserOutbox(t.id)),
        u = t.id === n.id,
        p = (0, L.bG)([ec.A, ed.A], () => {
            let e = u ? ec.A.getStatus() : ed.A.getStatus(t.id);
            return e === el.clD.OFFLINE || e === el.clD.INVISIBLE;
        }),
        m = (0, L.bG)([F.A], () => F.A.getUserProfile(t.id)?.private === !0),
        f = r.length > 0 || null != o,
        x = !m && null == o && null == c && null != d,
        g = !p && (f || x),
        h = s.length > 0;
    return g || h || !_
        ? (0, a.jsxs)(D.Ip, {
              className: eh.XG,
              fade: !0,
              children: [
                  g
                      ? (0, a.jsx)(q.A, {
                            "aria-label": H.intl.string(H.t.J6STd9),
                            children: (0, a.jsxs)("ul", {
                                className: eh.Ci,
                                children: [
                                    null != o &&
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(ex.A, {
                                                user: t,
                                                currentUser: n,
                                                stream: o,
                                                onClose: l,
                                            }),
                                        }),
                                    r.map((e, i) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                children: (0, a.jsx)(em.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    activity: e,
                                                    onClose: l,
                                                }),
                                            },
                                            `live-${i}`,
                                        ),
                                    ),
                                    x &&
                                        (0, a.jsx)("li", {
                                            children: (0, a.jsx)(eg.A, {
                                                user: t,
                                                currentUser: n,
                                                voiceChannel: d,
                                                onClose: l,
                                            }),
                                        }),
                                ],
                            }),
                        })
                      : null,
                  h
                      ? (0, a.jsx)(q.A, {
                            heading: H.intl.string(H.t.M0zgnT),
                            introText: u
                                ? H.intl.format(H.t["4bk9Ak"], {
                                      learnMoreHook: (e, t) =>
                                          (0, a.jsx)(
                                              es.Anchor,
                                              {
                                                  href: e_.A.getArticleURL(el.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ee.bk.RECENT_ACTIVITY,
                            children: (0, a.jsx)("ul", {
                                className: eh.Ci,
                                children: s.map((e) =>
                                    (0, a.jsx)(
                                        "li",
                                        { children: (0, a.jsx)(ef.A, { user: t, entry: e, onClose: l }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, a.jsx)("div", { className: eb.Ie, children: (0, a.jsx)(er.y, {}) });
}
var ev = n(695366),
    eI = n(661531),
    ej = n(821269),
    ey = n(93246),
    eC = n(773669),
    eN = n(967198),
    eE = n(346713),
    eT = n(484509),
    ew = n(46937),
    eP = n(361311);
function eL(e) {
    let { user: t, displayProfile: n, onClose: i } = e,
        { trackUserProfileAction: l } = (0, f.NJ)(),
        r = (0, L.bG)([eN.A], () => eN.A.getGuildId()),
        s = (0, ej.q)({ userId: t.id }),
        o = (0, L.bG)([R.A], () => R.A.hidePersonalInformation),
        d = (0, L.bG)([eC.default], () => eC.default.locale),
        c = (0, eT.A)(t.id),
        _ = (0, eE.A)(t.id);
    return (0, a.jsxs)(D.Ip, {
        fade: !0,
        className: ea.XG,
        children: [
            n?.bio != null && n?.bio !== "" && !o && (0, a.jsx)(J.A, { userBio: n.bio, setLineClamp: !1 }),
            n?.guildId != null && (0, a.jsx)(Z.A, { userId: t.id, guildId: n.guildId }),
            t.isProvisional &&
                (0, a.jsx)(q.A, {
                    heading: H.intl.string(H.t.Iyka0U),
                    headingIcon: (0, a.jsx)(ev.E, { size: "xxs", color: eI.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, a.jsx)(ey.T, { userId: t.id }),
                }),
            s.length > 0 &&
                (0, a.jsx)(q.A, {
                    heading: H.intl.string(H.t["Uv/eTx"]),
                    children: (0, a.jsx)(eP.A, { applicationIds: s }),
                }),
            (0, a.jsx)(q.A, {
                heading: H.intl.string(H.t.a6XYD9),
                children: (0, a.jsx)(Q.A, { userId: t.id, guildId: n?.guildId, tooltipDelay: ee.In }),
            }),
            c.length > 0 &&
                (0, a.jsx)(q.A, {
                    heading: H.intl.string(H.t["3fe7U5"]),
                    scrollTargetId: ee.bk.CONNECTIONS,
                    children: (0, a.jsx)(ew.Ay, { connectedAccounts: c, className: ea.oQ, userId: t.id, locale: d }),
                }),
            _.length > 0 &&
                (0, a.jsx)(q.A, {
                    heading: H.intl.string(H.t.PHjkRE),
                    children: _.map((e) =>
                        (0, a.jsx)(
                            ew.Wc,
                            {
                                className: ea.MI,
                                applicationRoleConnection: e,
                                locale: d,
                                onApplicationClicked: () => {
                                    l({ action: "PRESS_APP_CONNECTION" }), i();
                                },
                                selectedGuildId: r ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, a.jsx)(en, { userId: t.id }),
        ],
    });
}
var ek = n(163126),
    eS = n(913453),
    eR = n(229187),
    eD = n(975732),
    eB = n(503062);
function eO(e) {
    let { user: t, guildId: n, channelId: l, onClose: r } = e,
        { mutualFriends: s } = (0, eS.A)(t),
        { analyticsLocations: o } = (0, u.Ay)(),
        { context: d, trackUserProfileAction: c } = (0, f.NJ)(),
        _ = (0, ek.A)();
    return (
        i.useEffect(() => {
            (0, eR.A)(t.id, _);
        }, [t.id, _]),
        (0, a.jsx)(D.Ip, {
            className: eb.DK,
            fade: !0,
            children:
                null == s
                    ? (0, a.jsx)("div", { className: eb.Ie, children: (0, a.jsx)(er.y, {}) })
                    : 0 === s.length
                      ? (0, a.jsxs)("div", {
                            className: eb.Ie,
                            children: [
                                (0, a.jsx)("div", { className: eb.on }),
                                (0, a.jsx)("div", { className: eb.BI, children: H.intl.string(H.t["/5p4gx"]) }),
                            ],
                        })
                      : s.map((e) => {
                            let { key: t, user: i, status: s } = e;
                            return (0, a.jsx)(
                                eB.A,
                                {
                                    user: i,
                                    status: s,
                                    guildId: n,
                                    channelId: l,
                                    onSelect: () => {
                                        var e;
                                        r?.(),
                                            c({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = i.id),
                                            (0, eD.openUserProfileModal)({
                                                ...d,
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
var eM = n(398590),
    eG = n(345942),
    eU = n(51943);
function eF(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: i } = (0, f.NJ)(),
        { mutualGuilds: l, isFetching: r } = (0, eS.A)(t);
    return (0, a.jsx)(D.Ip, {
        className: eb.DK,
        fade: !0,
        children:
            null == l && r
                ? (0, a.jsx)("div", { className: eb.Ie, children: (0, a.jsx)(er.y, {}) })
                : (null != l || r) && l?.length !== 0
                  ? l?.map((e) => {
                        let { guild: l, nick: r } = e;
                        return (0, a.jsx)(
                            eU.A,
                            {
                                user: t,
                                guild: l,
                                nick: r,
                                onSelect: () => {
                                    var e;
                                    i({ action: "PRESS_MUTUAL_GUILD" }), (e = l.id), (0, eG.u)(e), n(), (0, eM.jH)();
                                },
                            },
                            l.id,
                        );
                    })
                  : (0, a.jsxs)("div", {
                        className: eb.Ie,
                        children: [
                            (0, a.jsx)("div", { className: eb.vC }),
                            (0, a.jsx)("div", { className: eb.BI, children: H.intl.string(H.t.zjVh8h) }),
                        ],
                    }),
    });
}
var eH = n(551652);
function eV(e) {
    let { section: t, user: n, currentUser: i, displayProfile: l, guildId: r, channelId: s, onClose: o } = e;
    return t === ee.RP.ACTIVITY
        ? (0, a.jsx)(eA, { user: n, currentUser: i, guildId: r, onClose: o })
        : t === ee.RP.MUTUAL_FRIENDS
          ? (0, a.jsx)(eO, { user: n, guildId: r, channelId: s, onClose: o })
          : t === ee.RP.MUTUAL_GUILDS
            ? (0, a.jsx)(eF, { user: n, onClose: o })
            : t === ee.RP.BOT_DATA_ACCESS
              ? (0, a.jsx)(z, { user: n })
              : t === ee.RP.BOT_INFO
                ? (0, a.jsx)(ei, { user: n, displayProfile: l, guildId: r, onClose: o })
                : (0, a.jsx)(eL, { user: n, displayProfile: l, onClose: o });
}
function eW(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: l,
            guildId: r,
            items: s,
            initialSection: o = ee.RP.USER_INFO,
            onClose: d,
        } = e,
        { trackUserProfileAction: c } = (0, f.NJ)(),
        _ = (0, L.bG)([R.A], () => R.A.hidePersonalInformation),
        [u, p] = i.useState(
            () =>
                s.find((e) => {
                    let { section: t } = e;
                    return t === o;
                })?.section ?? s[0]?.section,
        );
    i.useEffect(() => {
        null == s.find((e) => e.section === u) && p(s[0].section);
    }, [s, u]);
    let m = i.useCallback(
        (e) => {
            c({ action: "PRESS_SECTION", section: e }), p(e);
        },
        [c],
    );
    return _
        ? (0, a.jsx)("div", {
              className: eH.kL,
              children: (0, a.jsxs)("div", {
                  className: eb.Ie,
                  children: [
                      (0, a.jsx)("div", { className: eb.hB }),
                      (0, a.jsx)("div", { className: eb.BI, children: H.intl.string(H.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, a.jsxs)("div", {
              className: eH.kL,
              children: [
                  (0, a.jsx)(k.V, {
                      className: eH.$H,
                      type: "top",
                      selectedItem: u,
                      onItemSelect: m,
                      children: s.map((e) => {
                          let { section: t, text: n } = e;
                          return (0, a.jsx)(
                              k.V.Item,
                              {
                                  className: eH.YU,
                                  id: t,
                                  "aria-label": n,
                                  children: (0, a.jsx)(S.E, { variant: "text-sm/normal", children: n }),
                              },
                              t,
                          );
                      }),
                  }),
                  (0, a.jsx)(eV, {
                      items: s,
                      section: u,
                      user: t,
                      currentUser: n,
                      displayProfile: l,
                      guildId: r,
                      onClose: d,
                  }),
              ],
          });
}
var ez = n(186272),
    eX = n(996988),
    eY = n(872116);
function eK(e) {
    let {
            user: t,
            currentUser: n,
            guildId: i,
            originGuildId: l,
            channelId: L,
            messageId: k,
            roleId: S,
            sessionId: R,
            initialTabSection: D,
            initialScrollTarget: B,
            transitionState: O,
            openedAt: M,
            onClose: G,
            sourceAnalyticsLocations: U = [],
        } = e,
        F = i === el.ME ? void 0 : i,
        V = (0, x.Ay)(t.id, F),
        W = m.Ay.getName(F, L, t),
        z = (0, p.GV)(),
        { analyticsLocations: X } = (0, u.Ay)([...U, _.A.USER_PROFILE_MODAL]),
        Y = (0, f.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: R,
            guildId: F,
            channelId: L,
            messageId: k,
            roleId: S,
        }),
        K = (function (e) {
            let { mutualGuilds: t } = (0, eS.A)(e),
                n = t?.length;
            return [
                { section: ee.RP.BOT_INFO, text: H.intl.string(H.t.ZzAR2Y) },
                { section: ee.RP.MUTUAL_GUILDS, text: (0, ez.A)(n) },
                { section: ee.RP.BOT_DATA_ACCESS, text: H.intl.string(H.t.WstFb0) },
            ];
        })(t),
        J = (0, g.A)({ user: t, guildId: l, channelId: L, displayProfile: V, onClose: G });
    return (0, a.jsx)(u.f5, {
        value: X,
        children: (0, a.jsx)(f.of, {
            value: Y,
            openedAt: M,
            fetchStartedAt: V?.fetchStartedAt,
            fetchEndedAt: V?.fetchEndedAt,
            isLoaded: V?.isLoaded,
            children: (0, a.jsx)(h.N, {
                value: B,
                children: (0, a.jsx)(r.EO, {
                    "data-migration-pending": !0,
                    transitionState: O,
                    className: eY.zr,
                    hideShadow: !0,
                    "aria-labelledby": z,
                    parentComponent: "BotUserProfileModal",
                    children: (0, a.jsx)(s.F, {
                        component: (0, a.jsx)(o.A, {
                            children: (0, a.jsx)(s.H, { id: z, children: H.intl.format(H.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, a.jsxs)(j.A, {
                            user: t,
                            displayProfile: V,
                            themeType: eX.d.MODAL,
                            children: [
                                (0, a.jsx)(T.A, {
                                    children: (0, a.jsx)(N.A, { user: t, guildId: F, viewProfileItem: J }),
                                }),
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(v.A, { user: t, displayProfile: V, themeType: eX.d.MODAL }),
                                        (0, a.jsxs)("div", {
                                            className: eY.El,
                                            children: [
                                                (0, a.jsx)(b.A, {
                                                    user: t,
                                                    displayProfile: V,
                                                    guildId: F,
                                                    channelId: L,
                                                    themeType: eX.d.MODAL,
                                                }),
                                                (0, a.jsx)(P.A, {
                                                    user: t,
                                                    themeType: eX.d.MODAL,
                                                    hasEntered: O === d.ip.ENTERED,
                                                    onCloseProfile: G,
                                                    disableToolbar: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: eY.Pz,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: eY.jS,
                                                            children: (0, a.jsx)(w.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: c.A.popAll,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: eY.pg,
                                                            children: (0, a.jsx)(w.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: c.A.popAll,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(E.A, { user: t, guildId: F }),
                                                        (0, a.jsx)(C.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(I.A, { userId: t.id, className: eY.Fd }),
                                (0, a.jsxs)("div", {
                                    className: eY.rf,
                                    children: [
                                        (0, a.jsx)(y.A, {
                                            className: eY.Xh,
                                            user: t,
                                            guildId: F,
                                            nickname: W,
                                            pronouns: V?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, a.jsx)(A.A, {
                                                displayProfile: V,
                                                themeType: eX.d.MODAL,
                                                onClose: G,
                                            }),
                                        }),
                                        (0, a.jsx)(eW, {
                                            user: t,
                                            currentUser: n,
                                            displayProfile: V,
                                            guildId: F,
                                            items: K,
                                            initialSection: D ?? ee.RP.BOT_INFO,
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
var eJ = n(480335),
    eQ = n(713517),
    eq = n(35241);
function eZ(e) {
    let {
            user: t,
            guildId: n,
            channelId: l,
            messageId: d,
            roleId: c,
            sessionId: g,
            transitionState: h,
            openedAt: I,
            onClose: C,
            sourceAnalyticsLocations: N = [],
        } = e,
        E = n === el.ME ? void 0 : n,
        w = (0, x.Ay)(t.id, E),
        P = m.Ay.getName(E, l, t),
        L = (0, p.GV)(),
        { analyticsLocations: R } = (0, u.Ay)([...N, _.A.USER_PROFILE_MODAL]),
        B = (0, f.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: g,
            guildId: E,
            channelId: l,
            messageId: d,
            roleId: c,
        }),
        O = i.useRef(null),
        M = (0, eQ.M)(O);
    return (0, a.jsx)(u.f5, {
        value: R,
        children: (0, a.jsx)(f.of, {
            value: B,
            openedAt: I,
            fetchStartedAt: w?.fetchStartedAt,
            fetchEndedAt: w?.fetchEndedAt,
            isLoaded: w?.isLoaded,
            children: (0, a.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: h,
                className: eY.zr,
                hideShadow: !0,
                "aria-labelledby": L,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, a.jsx)(s.F, {
                        component: (0, a.jsx)(o.A, {
                            children: (0, a.jsx)(s.H, { id: L, children: H.intl.format(H.t.KRe1Fk, { name: P }) }),
                        }),
                        children: (0, a.jsxs)(j.A, {
                            user: t,
                            displayProfile: w,
                            themeType: eX.d.MODAL,
                            ref: w?.profileEffect != null ? O : void 0,
                            children: [
                                (0, a.jsx)(T.A, { children: (0, a.jsx)(eq.A, { user: t }) }),
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(v.A, { user: t, displayProfile: w, themeType: eX.d.MODAL }),
                                        (0, a.jsx)("div", {
                                            className: eY.El,
                                            children: (0, a.jsx)(b.A, {
                                                user: t,
                                                displayProfile: w,
                                                guildId: E,
                                                channelId: l,
                                                themeType: eX.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: eY.rf,
                                    children: [
                                        (0, a.jsx)(y.A, {
                                            className: eY.Xh,
                                            user: t,
                                            guildId: E,
                                            nickname: P,
                                            pronouns: w?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, a.jsx)(A.A, {
                                                displayProfile: w,
                                                themeType: eX.d.MODAL,
                                                onClose: C,
                                            }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: eH.kL,
                                            children: [
                                                (0, a.jsx)(k.V, {
                                                    className: eH.$H,
                                                    type: "top",
                                                    selectedItem: ee.RP.BOT_INFO,
                                                    onItemSelect: el.tEg,
                                                    children: (0, a.jsx)(
                                                        k.V.Item,
                                                        {
                                                            className: eH.YU,
                                                            id: ee.RP.BOT_INFO,
                                                            "aria-label": H.intl.string(H.t.ZzAR2Y),
                                                            children: (0, a.jsx)(S.E, {
                                                                variant: "text-sm/normal",
                                                                children: H.intl.string(H.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ee.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, a.jsxs)(D.Ip, {
                                                    fade: !0,
                                                    className: ea.XG,
                                                    children: [
                                                        (0, a.jsx)(J.E, {
                                                            userId: t.id,
                                                            userBio: w?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, a.jsx)(q.A, {
                                                            heading: H.intl.string(H.t["A//N4k"]),
                                                            children: (0, a.jsx)(Q.A, {
                                                                userId: t.id,
                                                                guildId: E,
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
                    w?.profileEffect != null && (0, a.jsx)(eJ.A, { skuId: w?.profileEffect?.skuId, isHovering: M }),
                ],
            }),
        }),
    });
}
var e$ = n(628284),
    e0 = n(331322),
    e9 = n(632738),
    e1 = n(994500),
    e2 = n(47675),
    e8 = n(249790),
    e7 = n(254828),
    e3 = n(783123),
    e6 = n(449572);
function e5(e) {
    let {
            user: t,
            guildId: n,
            channelId: i,
            messageId: l,
            roleId: s,
            transitionState: o,
            openedAt: d,
            onHide: c,
            sourceAnalyticsLocations: p = [],
        } = e,
        g = n === el.ME ? void 0 : n,
        h = (0, L.bG)([e1.A], () => e1.A.isBlocked(t.id)),
        { analyticsLocations: b } = (0, u.Ay)([...p, h ? _.A.BLOCKED_PROFILE_MODAL : _.A.IGNORED_PROFILE_MODAL]),
        A = (0, f.pb)({ layout: "MODAL_V2", userId: t.id, guildId: g, channelId: i, messageId: l, roleId: s }),
        v = [
            { icon: e$.y, description: H.intl.string(H.t.kcuWva) },
            { icon: e$.y, description: H.intl.string(h ? H.t.QxrDY1 : H.t.W6fjkS) },
        ],
        I = (0, x.Ay)(t.id, g),
        y = m.Ay.getName(I?.guildId, i, t),
        C = H.intl.formatToPlainString(H.t.KRe1Fk, { name: y });
    return (0, a.jsx)(u.f5, {
        value: b,
        children: (0, a.jsx)(f.of, {
            value: A,
            openedAt: d,
            fetchStartedAt: I?.fetchStartedAt,
            fetchEndedAt: I?.fetchEndedAt,
            isLoaded: I?.isLoaded,
            children: (0, a.jsx)(r.EO, {
                "data-migration-pending": !0,
                transitionState: o,
                className: e6.zr,
                "aria-label": C,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, a.jsxs)(j.A, {
                    user: t,
                    displayProfile: I,
                    themeType: eX.d.MODAL_V2,
                    children: [
                        (0, a.jsx)("div", { className: e6.Tp }),
                        (0, a.jsxs)("div", {
                            className: e6.Qs,
                            children: [
                                (0, a.jsx)(e8.A, { user: t, guildId: g }),
                                (0, a.jsxs)("div", {
                                    className: e6.FS,
                                    children: [
                                        (0, a.jsx)(B.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: H.intl.string(H.t.b33pLD),
                                        }),
                                        (0, a.jsx)(S.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: H.intl.format(h ? H.t.T7QiLn : H.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: e6.vb,
                                    children: v.map((e, t) => {
                                        let { icon: n, description: i } = e;
                                        return (0, a.jsx)(
                                            e9.PQ,
                                            {
                                                icon: n,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: eI.A.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, a.jsxs)(e0.B, {
                                    align: "center",
                                    children: [
                                        (0, a.jsx)(e3.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                c(),
                                                    (0, e2.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: b,
                                                        ...A,
                                                    });
                                            },
                                        }),
                                        (0, a.jsx)(e7.A, {
                                            userId: t.id,
                                            onClick: () => {
                                                c(),
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
        { user: i } = n,
        [r, s] = (0, l.A)(i.id);
    return r && !t
        ? (0, a.jsx)(e5, { onHide: s, ...n })
        : i.isNonUserBot()
          ? (0, a.jsx)(eZ, { ...n })
          : i.bot
            ? (0, a.jsx)(eK, { ...n })
            : (0, a.jsx)(e4.A, { ...n });
}
