i.r(s), i.d(s, { default: () => sh });
var l = i(627968),
    n = i(64700),
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
    y = i(413492),
    T = i(915614),
    O = i(559506),
    S = i(946356),
    P = i(878555),
    C = i(570314),
    L = i(984545),
    _ = i(571077),
    R = i(587168),
    U = i(982985),
    b = i(983495),
    D = i(17928),
    M = i(761508),
    k = i(834730),
    F = i(351906),
    G = i(364522),
    B = i(297264),
    V = i(534890),
    z = i(687966),
    w = i(177953),
    Y = i(203363),
    H = i(321191),
    W = i(375708),
    X = i(935059);
function K(e) {
    let { icon: s, title: i, description: n } = e;
    return (0, l.jsxs)("div", {
        className: X.nM,
        children: [
            (0, l.jsx)("div", {
                className: X.aL,
                children: (0, l.jsx)(s, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: X.qg,
                children: [
                    (0, l.jsx)(B.D, { variant: "text-xs/semibold", children: i }),
                    (0, l.jsx)(k.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { user: s } = e,
        i = (0, D.bG)([H.A], () => H.A.getUserProfile(s.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, Y.Z)(i);
    return (0, l.jsxs)(G.Ip, {
        fade: !0,
        className: X.XG,
        children: [
            n &&
                (0, l.jsx)(K, {
                    icon: V.o,
                    title: W.intl.string(W.t["7Tmhfu"]),
                    description: W.intl.string(W.t.eu5x7z),
                }),
            t && (0, l.jsx)(K, { icon: z._, title: W.intl.string(W.t.awYSsM), description: W.intl.string(W.t.TpsXoC) }),
            d && (0, l.jsx)(K, { icon: w.n, title: W.intl.string(W.t.WuKeSJ), description: W.intl.string(W.t.wOBmtV) }),
            (0, l.jsx)(k.E, {
                variant: "text-xs/normal",
                children: W.intl.format(W.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var Q = i(734057),
    Z = i(309010),
    q = i(383199),
    $ = i(514042),
    ee = i(194261),
    es = i(9578),
    ei = i(900179),
    el = i(913476);
function en(e) {
    let { termsOfServiceUrl: s, privacyPolicyUrl: i } = e;
    return null == s && null == i
        ? null
        : (0, l.jsx)(ei.A, {
              heading: W.intl.string(W.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: el.p_,
                  children: [
                      null != s && (0, l.jsx)(et, { icon: $.o, url: s, children: W.intl.string(W.t.s7STcY) }),
                      null != i && (0, l.jsx)(et, { icon: ee.X, url: i, children: W.intl.string(W.t.kH3JR5) }),
                  ],
              }),
          });
}
function et(e) {
    let { icon: s, url: i, children: n } = e;
    return (0, l.jsxs)(es.A, {
        href: i,
        className: el.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(s, { className: el.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var ed = i(308244),
    er = i(743987),
    ea = i(280645),
    ec = i(347805),
    eo = i(518477),
    eu = i(142948);
function ex(e) {
    let { userId: s } = e,
        i = (0, v.g)(),
        { trackUserProfileAction: n } = (0, g.NJ)();
    return (0, l.jsx)(ei.A, {
        heading: W.intl.string(W.t["mQKv+v"]),
        scrollTargetId: eo.bk.NOTE,
        children: (0, l.jsx)(ec.A, {
            userId: s,
            className: eu.N,
            autoFocus: i === eo.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var eA = i(741036);
function eh(e) {
    let { user: s, displayProfile: i, guildId: n, onClose: t } = e,
        d = (0, D.bG)([H.A], () => H.A.getUserProfile(s.id)?.application),
        r = (0, D.bG)([Q.A, Z.Ay], () => Q.A.getChannel(Z.Ay.getChannelId()));
    return (0, l.jsxs)(G.Ip, {
        fade: !0,
        className: eA.XG,
        children: [
            (0, l.jsx)(ed.E, { userBio: i?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(q.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(en, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            i?.guildId != null && (0, l.jsx)(ea.A, { userId: s.id, guildId: i.guildId }),
            (0, l.jsx)(ei.A, {
                heading: W.intl.string(W.t["A//N4k"]),
                children: (0, l.jsx)(er.A, { userId: s.id, guildId: n, tooltipDelay: eo.In }),
            }),
            (0, l.jsx)(ex, { userId: s.id }),
        ],
    });
}
var ej = i(652215),
    em = i(289873),
    eI = i(349288),
    ep = i(517164),
    eg = i(290863),
    ef = i(461213),
    eN = i(975571),
    ev = i(146655),
    eE = i(489379),
    ey = i(402857),
    eT = i(353394),
    eO = i(64622),
    eS = i(986712),
    eP = i(437781),
    eC = i(928666);
function eL(e) {
    let { user: s, currentUser: i, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, ev.A)(s.id),
        { voiceChannel: c, voiceActivity: o } = (0, eE.A)({ userId: s.id, guildId: n }),
        u = (0, D.bG)([ep.A], () => ep.A.isFetchingUserOutbox(s.id)),
        x = s.id === i.id,
        A = (0, D.bG)([ef.A, eg.A], () => {
            let e = x ? ef.A.getStatus() : eg.A.getStatus(s.id);
            return e === ej.clD.OFFLINE || e === ej.clD.INVISIBLE;
        }),
        h = (0, D.bG)([H.A], () => H.A.getUserProfile(s.id)?.private === !0),
        j = d.length > 0 || null != a,
        m = !h && null == a && null == o && null != c,
        I = !A && (j || m),
        p = r.length > 0;
    return I || p || !u
        ? (0, l.jsxs)(G.Ip, {
              className: eP.XG,
              fade: !0,
              children: [
                  I
                      ? (0, l.jsx)(ei.A, {
                            "aria-label": W.intl.string(W.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: eP.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eO.A, {
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
                                            children: (0, l.jsx)(eS.A, {
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
                      ? (0, l.jsx)(ei.A, {
                            heading: W.intl.string(W.t.M0zgnT),
                            introText: x
                                ? W.intl.format(W.t["4bk9Ak"], {
                                      learnMoreHook: (e, s) =>
                                          (0, l.jsx)(
                                              eI.Anchor,
                                              {
                                                  href: eN.A.getArticleURL(ej.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              s,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: eo.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eP.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eT.A, { user: s, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eC.Ie, children: (0, l.jsx)(em.y, {}) });
}
var e_ = i(695366),
    eR = i(661531),
    eU = i(821269),
    eb = i(93246),
    eD = i(773669),
    eM = i(967198),
    ek = i(346713),
    eF = i(484509),
    eG = i(46937),
    eB = i(361311);
function eV(e) {
    let { user: s, displayProfile: i, onClose: n } = e,
        { trackUserProfileAction: t } = (0, g.NJ)(),
        d = (0, D.bG)([eM.A], () => eM.A.getGuildId()),
        r = (0, eU.q)({ userId: s.id }),
        a = (0, D.bG)([F.A], () => F.A.hidePersonalInformation),
        c = (0, D.bG)([eD.default], () => eD.default.locale),
        o = (0, eF.A)(s.id),
        u = (0, ek.A)(s.id);
    return (0, l.jsxs)(G.Ip, {
        fade: !0,
        className: eA.XG,
        children: [
            i?.bio != null && i?.bio !== "" && !a && (0, l.jsx)(ed.A, { userBio: i.bio, setLineClamp: !1 }),
            i?.guildId != null && (0, l.jsx)(ea.A, { userId: s.id, guildId: i.guildId }),
            s.isProvisional &&
                (0, l.jsx)(ei.A, {
                    heading: W.intl.string(W.t.Iyka0U),
                    headingIcon: (0, l.jsx)(e_.E, { size: "xxs", color: eR.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(eb.T, { userId: s.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(ei.A, {
                    heading: W.intl.string(W.t["Uv/eTx"]),
                    children: (0, l.jsx)(eB.A, { applicationIds: r }),
                }),
            (0, l.jsx)(ei.A, {
                heading: W.intl.string(W.t.a6XYD9),
                children: (0, l.jsx)(er.A, { userId: s.id, guildId: i?.guildId, tooltipDelay: eo.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(ei.A, {
                    heading: W.intl.string(W.t["3fe7U5"]),
                    scrollTargetId: eo.bk.CONNECTIONS,
                    children: (0, l.jsx)(eG.Ay, { connectedAccounts: o, className: eA.oQ, userId: s.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(ei.A, {
                    heading: W.intl.string(W.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eG.Wc,
                            {
                                className: eA.MI,
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
            (0, l.jsx)(ex, { userId: s.id }),
        ],
    });
}
var ez = i(163126),
    ew = i(913453),
    eY = i(229187),
    eH = i(975732),
    eW = i(503062);
function eX(e) {
    let { user: s, guildId: i, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, ew.A)(s),
        { analyticsLocations: a } = (0, m.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, ez.A)();
    return (
        n.useEffect(() => {
            (0, eY.A)(s.id, u);
        }, [s.id, u]),
        (0, l.jsx)(G.Ip, {
            className: eC.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eC.Ie, children: (0, l.jsx)(em.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eC.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eC.on }),
                                (0, l.jsx)("div", { className: eC.BI, children: W.intl.string(W.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: s, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eW.A,
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
                                            (0, eH.openUserProfileModal)({
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
var eK = i(398590),
    eJ = i(345942),
    eQ = i(51943);
function eZ(e) {
    let { user: s, onClose: i } = e,
        { trackUserProfileAction: n } = (0, g.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, ew.A)(s);
    return (0, l.jsx)(G.Ip, {
        className: eC.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eC.Ie, children: (0, l.jsx)(em.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eQ.A,
                            {
                                user: s,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eJ.u)(e), i(), (0, eK.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eC.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eC.vC }),
                            (0, l.jsx)("div", { className: eC.BI, children: W.intl.string(W.t.zjVh8h) }),
                        ],
                    }),
    });
}
var eq = i(551652);
function e$(e) {
    let { section: s, user: i, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return s === eo.RP.ACTIVITY
        ? (0, l.jsx)(eL, { user: i, currentUser: n, guildId: d, onClose: a })
        : s === eo.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eX, { user: i, guildId: d, channelId: r, onClose: a })
          : s === eo.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eZ, { user: i, onClose: a })
            : s === eo.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(J, { user: i })
              : s === eo.RP.BOT_INFO
                ? (0, l.jsx)(eh, { user: i, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(eV, { user: i, displayProfile: t, onClose: a });
}
function e0(e) {
    let {
            user: s,
            currentUser: i,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = eo.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, D.bG)([F.A], () => F.A.hidePersonalInformation),
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
              className: eq.kL,
              children: (0, l.jsxs)("div", {
                  className: eC.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eC.hB }),
                      (0, l.jsx)("div", { className: eC.BI, children: W.intl.string(W.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: eq.kL,
              children: [
                  (0, l.jsx)(M.V, {
                      className: eq.$H,
                      type: "top",
                      selectedItem: x,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: s, text: i } = e;
                          return (0, l.jsx)(
                              M.V.Item,
                              {
                                  className: eq.YU,
                                  id: s,
                                  "aria-label": i,
                                  children: (0, l.jsx)(k.E, { variant: "text-sm/normal", children: i }),
                              },
                              s,
                          );
                      }),
                  }),
                  (0, l.jsx)(e$, {
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
    e3 = i(872116);
function e1(e) {
    let {
            user: s,
            currentUser: i,
            guildId: n,
            originGuildId: t,
            channelId: d,
            messageId: r,
            roleId: a,
            sessionId: c,
            initialTabSection: D,
            initialScrollTarget: M,
            transitionState: k,
            openedAt: F,
            onClose: G,
            sourceAnalyticsLocations: B = [],
        } = e,
        V = n === ej.ME ? void 0 : n,
        z = (0, f.Ay)(s.id, V),
        w = p.Ay.getName(V, d, s),
        Y = (0, I.GV)(),
        { analyticsLocations: H } = (0, m.Ay)([...B, j.A.USER_PROFILE_MODAL]),
        X = (0, g.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: c,
            guildId: V,
            channelId: d,
            messageId: r,
            roleId: a,
        }),
        K = (function (e) {
            let { mutualGuilds: s } = (0, ew.A)(e),
                i = s?.length;
            return [
                { section: eo.RP.BOT_INFO, text: W.intl.string(W.t.ZzAR2Y) },
                { section: eo.RP.MUTUAL_GUILDS, text: (0, e5.A)(i) },
                { section: eo.RP.BOT_DATA_ACCESS, text: W.intl.string(W.t.WstFb0) },
            ];
        })(s),
        J = (0, N.A)({ user: s, guildId: t, channelId: d, displayProfile: z, onClose: G });
    return (0, l.jsx)(m.f5, {
        value: H,
        children: (0, l.jsx)(g.of, {
            value: X,
            openedAt: F,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, l.jsx)(v.N, {
                value: M,
                children: (0, l.jsx)(o.EO, {
                    "data-migration-pending": !0,
                    transitionState: k,
                    className: e3.zr,
                    hideShadow: !0,
                    "aria-labelledby": Y,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: Y, children: W.intl.format(W.t.KRe1Fk, { name: w }) }),
                        }),
                        children: (0, l.jsxs)(S.A, {
                            user: s,
                            displayProfile: z,
                            themeType: e9.d.MODAL,
                            children: [
                                (0, l.jsx)(R.A, {
                                    children: (0, l.jsx)(L.A, { user: s, guildId: V, viewProfileItem: J }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: s, displayProfile: z, themeType: e9.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e3.El,
                                            children: [
                                                (0, l.jsx)(E.A, {
                                                    user: s,
                                                    displayProfile: z,
                                                    guildId: V,
                                                    channelId: d,
                                                    themeType: e9.d.MODAL,
                                                }),
                                                (0, l.jsx)(b.A, {
                                                    user: s,
                                                    themeType: e9.d.MODAL,
                                                    hasEntered: k === A.ip.ENTERED,
                                                    onCloseProfile: G,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e3.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e3.jS,
                                                            children: (0, l.jsx)(U.e, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e3.pg,
                                                            children: (0, l.jsx)(U.l, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(_.A, { user: s, guildId: V }),
                                                        (0, l.jsx)(C.A, { user: s }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(O.A, { userId: s.id, className: e3.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e3.rf,
                                    children: [
                                        (0, l.jsx)(P.Ay, {
                                            className: e3.eF,
                                            user: s,
                                            guildId: V,
                                            displayName: w,
                                            displayNameSize: "lg",
                                            pronouns: z?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: z,
                                                themeType: e9.d.MODAL,
                                                onClose: G,
                                            }),
                                        }),
                                        (0, l.jsx)(e0, {
                                            user: s,
                                            currentUser: i,
                                            displayProfile: z,
                                            guildId: V,
                                            items: K,
                                            initialSection: D ?? eo.RP.BOT_INFO,
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
var e7 = i(480335),
    e2 = i(713517),
    e6 = i(35241);
function e8(e) {
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
        v = i === ej.ME ? void 0 : i,
        O = (0, f.Ay)(s.id, v),
        C = p.Ay.getName(v, t, s),
        L = (0, I.GV)(),
        { analyticsLocations: _ } = (0, m.Ay)([...N, j.A.USER_PROFILE_MODAL]),
        U = (0, g.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: a,
            guildId: v,
            channelId: t,
            messageId: d,
            roleId: r,
        }),
        b = n.useRef(null),
        D = (0, e2.M)(b);
    return (0, l.jsx)(m.f5, {
        value: _,
        children: (0, l.jsx)(g.of, {
            value: U,
            openedAt: A,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e3.zr,
                hideShadow: !0,
                "aria-labelledby": L,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: L, children: W.intl.format(W.t.KRe1Fk, { name: C }) }),
                        }),
                        children: (0, l.jsxs)(S.A, {
                            user: s,
                            displayProfile: O,
                            themeType: e9.d.MODAL,
                            ref: O?.profileEffect != null ? b : void 0,
                            children: [
                                (0, l.jsx)(R.A, { children: (0, l.jsx)(e6.A, { user: s }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(T.A, { user: s, displayProfile: O, themeType: e9.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e3.El,
                                            children: (0, l.jsx)(E.A, {
                                                user: s,
                                                displayProfile: O,
                                                guildId: v,
                                                channelId: t,
                                                themeType: e9.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e3.rf,
                                    children: [
                                        (0, l.jsx)(P.Ay, {
                                            className: e3.eF,
                                            user: s,
                                            guildId: v,
                                            displayName: C,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: O,
                                                themeType: e9.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: eq.kL,
                                            children: [
                                                (0, l.jsx)(M.V, {
                                                    className: eq.$H,
                                                    type: "top",
                                                    selectedItem: eo.RP.BOT_INFO,
                                                    onItemSelect: ej.tEg,
                                                    children: (0, l.jsx)(
                                                        M.V.Item,
                                                        {
                                                            className: eq.YU,
                                                            id: eo.RP.BOT_INFO,
                                                            "aria-label": W.intl.string(W.t.ZzAR2Y),
                                                            children: (0, l.jsx)(k.E, {
                                                                variant: "text-sm/normal",
                                                                children: W.intl.string(W.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        eo.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(G.Ip, {
                                                    fade: !0,
                                                    className: eA.XG,
                                                    children: [
                                                        (0, l.jsx)(ed.E, {
                                                            userId: s.id,
                                                            userBio: O?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(ei.A, {
                                                            heading: W.intl.string(W.t["A//N4k"]),
                                                            children: (0, l.jsx)(er.A, {
                                                                userId: s.id,
                                                                guildId: v,
                                                                tooltipDelay: eo.In,
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
                    O?.profileEffect != null && (0, l.jsx)(e7.A, { skuId: O?.profileEffect?.skuId, isHovering: D }),
                ],
            }),
        }),
    });
}
var e4 = i(503698),
    se = i.n(e4),
    ss = i(628284),
    si = i(331322),
    sl = i(632738),
    sn = i(994500),
    st = i(47675),
    sd = i(249790),
    sr = i(254828),
    sa = i(783123),
    sc = i(463156),
    so = i(449572),
    su = i(337796);
function sx(e) {
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
        A = i === ej.ME ? void 0 : i,
        h = (0, D.bG)([sn.A], () => sn.A.isBlocked(s.id)),
        { analyticsLocations: I } = (0, m.Ay)([...x, h ? j.A.BLOCKED_PROFILE_MODAL : j.A.IGNORED_PROFILE_MODAL]),
        N = (0, g.pb)({ layout: "MODAL_V2", userId: s.id, guildId: A, channelId: n, messageId: t, roleId: d }),
        v = [
            { icon: ss.y, description: W.intl.string(W.t.kcuWva) },
            { icon: ss.y, description: W.intl.string(h ? W.t.QxrDY1 : W.t.W6fjkS) },
        ],
        E = (0, f.Ay)(s.id, A),
        y = p.Ay.getName(E?.guildId, n, s),
        T = W.intl.formatToPlainString(W.t.KRe1Fk, { name: y });
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
                className: su.zr,
                "aria-label": T,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(S.A, {
                    className: se()(su.A7, so.BK),
                    user: s,
                    displayProfile: E,
                    themeType: e9.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: su.Oo, children: (0, l.jsx)(sc.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: so.Tp }),
                        (0, l.jsxs)("div", {
                            className: so.Qs,
                            children: [
                                (0, l.jsx)(sd.A, { user: s, guildId: A }),
                                (0, l.jsxs)("div", {
                                    className: so.FS,
                                    children: [
                                        (0, l.jsx)(B.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: W.intl.string(W.t.b33pLD),
                                        }),
                                        (0, l.jsx)(k.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: W.intl.format(h ? W.t.T7QiLn : W.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: so.vb,
                                    children: v.map((e, s) => {
                                        let { icon: i, description: n } = e;
                                        return (0, l.jsx)(
                                            sl.PQ,
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
                                (0, l.jsxs)(si.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(sa.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                u(),
                                                    (0, st.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: I,
                                                        ...N,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(sr.A, {
                                            userId: s.id,
                                            onClick: () => {
                                                u(),
                                                    (0, st.Wn)({
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
var sA = i(874485);
function sh(e) {
    let { hideRestrictedProfile: s, ...i } = e,
        { user: o } = i,
        [u, x] = (0, c.A)(o.id);
    return (n.useEffect(
        () => () => {
            o.id === t.default.getCurrentUser()?.id &&
                (r.A.clearPendingWidgets(), (0, a.E)("UserProfileModalV2Renderer") && (0, d.XQ)());
        },
        [o.id],
    ),
    u && !s)
        ? (0, l.jsx)(sx, { onHide: x, ...i })
        : o.isNonUserBot()
          ? (0, l.jsx)(e8, { ...i })
          : o.bot
            ? (0, l.jsx)(e1, { ...i })
            : (0, l.jsx)(sA.A, { ...i });
}
