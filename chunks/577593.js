i.r(s), i.d(s, { default: () => so });
var l = i(627968),
    n = i(64700),
    t = i(215530),
    d = i(935462),
    r = i(707554),
    a = i(140735),
    c = i(231723),
    o = i(982168),
    u = i(793574),
    x = i(688810),
    A = i(915089),
    h = i(562153),
    j = i(183555),
    m = i(999291),
    I = i(722868),
    p = i(716804),
    g = i(718019),
    f = i(413492),
    N = i(915614),
    v = i(559506),
    E = i(946356),
    y = i(878555),
    T = i(570314),
    O = i(984545),
    S = i(571077),
    C = i(587168),
    P = i(982985),
    L = i(983495),
    _ = i(17928),
    R = i(761508),
    U = i(834730),
    b = i(351906),
    D = i(364522),
    M = i(534514),
    k = i(534890),
    F = i(687966),
    G = i(177953),
    B = i(203363),
    V = i(543572),
    z = i(375708),
    w = i(585235);
function Y(e) {
    let { icon: s, title: i, description: n } = e;
    return (0, l.jsxs)("div", {
        className: w.nM,
        children: [
            (0, l.jsx)("div", {
                className: w.aL,
                children: (0, l.jsx)(s, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: w.qg,
                children: [
                    (0, l.jsx)(M.D, { variant: "text-xs/semibold", children: i }),
                    (0, l.jsx)(U.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function H(e) {
    let { user: s } = e,
        i = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, B.Z)(i);
    return (0, l.jsxs)(D.Ip, {
        fade: !0,
        className: w.XG,
        children: [
            n &&
                (0, l.jsx)(Y, {
                    icon: k.o,
                    title: z.intl.string(z.t["7Tmhfu"]),
                    description: z.intl.string(z.t.eu5x7z),
                }),
            t && (0, l.jsx)(Y, { icon: F._, title: z.intl.string(z.t.awYSsM), description: z.intl.string(z.t.TpsXoC) }),
            d && (0, l.jsx)(Y, { icon: G.n, title: z.intl.string(z.t.WuKeSJ), description: z.intl.string(z.t.wOBmtV) }),
            (0, l.jsx)(U.E, {
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
    J = i(514042),
    Q = i(194261),
    Z = i(9578),
    q = i(900179),
    $ = i(199428);
function ee(e) {
    let { termsOfServiceUrl: s, privacyPolicyUrl: i } = e;
    return null == s && null == i
        ? null
        : (0, l.jsx)(q.A, {
              heading: z.intl.string(z.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: $.p_,
                  children: [
                      null != s && (0, l.jsx)(es, { icon: J.o, url: s, children: z.intl.string(z.t.s7STcY) }),
                      null != i && (0, l.jsx)(es, { icon: Q.X, url: i, children: z.intl.string(z.t.kH3JR5) }),
                  ],
              }),
          });
}
function es(e) {
    let { icon: s, url: i, children: n } = e;
    return (0, l.jsxs)(Z.A, {
        href: i,
        className: $.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(s, { className: $.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var ei = i(308244),
    el = i(743987),
    en = i(280645),
    et = i(347805),
    ed = i(518477),
    er = i(354724);
function ea(e) {
    let { userId: s } = e,
        i = (0, p.g)(),
        { trackUserProfileAction: n } = (0, j.NJ)();
    return (0, l.jsx)(q.A, {
        heading: z.intl.string(z.t["mQKv+v"]),
        scrollTargetId: ed.bk.NOTE,
        children: (0, l.jsx)(et.A, {
            userId: s,
            className: er.N,
            autoFocus: i === ed.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var ec = i(26988);
function eo(e) {
    let { user: s, displayProfile: i, guildId: n, onClose: t } = e,
        d = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.application),
        r = (0, _.bG)([K.A, W.A], () => K.A.getChannel(W.A.getChannelId()));
    return (0, l.jsxs)(D.Ip, {
        fade: !0,
        className: ec.XG,
        children: [
            (0, l.jsx)(ei.E, { userBio: i?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(X.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(ee, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            i?.guildId != null && (0, l.jsx)(en.A, { userId: s.id, guildId: i.guildId }),
            (0, l.jsx)(q.A, {
                heading: z.intl.string(z.t["A//N4k"]),
                children: (0, l.jsx)(el.A, { userId: s.id, guildId: n, tooltipDelay: ed.In }),
            }),
            (0, l.jsx)(ea, { userId: s.id }),
        ],
    });
}
var eu = i(652215),
    ex = i(289873),
    eA = i(349288),
    eh = i(517164),
    ej = i(290863),
    em = i(461213),
    eI = i(975571),
    ep = i(146655),
    eg = i(489379),
    ef = i(402857),
    eN = i(353394),
    ev = i(64622),
    eE = i(986712),
    ey = i(862997),
    eT = i(2074);
function eO(e) {
    let { user: s, currentUser: i, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, ep.A)(s.id),
        { voiceChannel: c, voiceActivity: o } = (0, eg.A)({ userId: s.id, guildId: n }),
        u = (0, _.bG)([eh.A], () => eh.A.isFetchingUserOutbox(s.id)),
        x = s.id === i.id,
        A = (0, _.bG)([em.A, ej.A], () => {
            let e = x ? em.A.getStatus() : ej.A.getStatus(s.id);
            return e === eu.clD.OFFLINE || e === eu.clD.INVISIBLE;
        }),
        h = (0, _.bG)([V.A], () => V.A.getUserProfile(s.id)?.private === !0),
        j = d.length > 0 || null != a,
        m = !h && null == a && null == o && null != c,
        I = !A && (j || m),
        p = r.length > 0;
    return I || p || !u
        ? (0, l.jsxs)(D.Ip, {
              className: ey.XG,
              fade: !0,
              children: [
                  I
                      ? (0, l.jsx)(q.A, {
                            "aria-label": z.intl.string(z.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: ey.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(ev.A, {
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
                                                children: (0, l.jsx)(ef.A, {
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
                                            children: (0, l.jsx)(eE.A, {
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
                      ? (0, l.jsx)(q.A, {
                            heading: z.intl.string(z.t.M0zgnT),
                            introText: x
                                ? z.intl.format(z.t["4bk9Ak"], {
                                      learnMoreHook: (e, s) =>
                                          (0, l.jsx)(
                                              eA.Anchor,
                                              {
                                                  href: eI.A.getArticleURL(eu.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              s,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ed.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: ey.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eN.A, { user: s, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eT.Ie, children: (0, l.jsx)(ex.y, {}) });
}
var eS = i(695366),
    eC = i(661531),
    eP = i(821269),
    eL = i(93246),
    e_ = i(773669),
    eR = i(967198),
    eU = i(346713),
    eb = i(484509),
    eD = i(46937),
    eM = i(361311);
function ek(e) {
    let { user: s, displayProfile: i, onClose: n } = e,
        { trackUserProfileAction: t } = (0, j.NJ)(),
        d = (0, _.bG)([eR.A], () => eR.A.getGuildId()),
        r = (0, eP.q)({ userId: s.id }),
        a = (0, _.bG)([b.A], () => b.A.hidePersonalInformation),
        c = (0, _.bG)([e_.default], () => e_.default.locale),
        o = (0, eb.A)(s.id),
        u = (0, eU.A)(s.id);
    return (0, l.jsxs)(D.Ip, {
        fade: !0,
        className: ec.XG,
        children: [
            i?.bio != null && i?.bio !== "" && !a && (0, l.jsx)(ei.A, { userBio: i.bio, setLineClamp: !1 }),
            i?.guildId != null && (0, l.jsx)(en.A, { userId: s.id, guildId: i.guildId }),
            s.isProvisional &&
                (0, l.jsx)(q.A, {
                    heading: z.intl.string(z.t.Iyka0U),
                    headingIcon: (0, l.jsx)(eS.E, { size: "xxs", color: eC.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(eL.T, { userId: s.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(q.A, {
                    heading: z.intl.string(z.t["Uv/eTx"]),
                    children: (0, l.jsx)(eM.A, { applicationIds: r }),
                }),
            (0, l.jsx)(q.A, {
                heading: z.intl.string(z.t.a6XYD9),
                children: (0, l.jsx)(el.A, { userId: s.id, guildId: i?.guildId, tooltipDelay: ed.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(q.A, {
                    heading: z.intl.string(z.t["3fe7U5"]),
                    scrollTargetId: ed.bk.CONNECTIONS,
                    children: (0, l.jsx)(eD.Ay, { connectedAccounts: o, className: ec.oQ, userId: s.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(q.A, {
                    heading: z.intl.string(z.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eD.Wc,
                            {
                                className: ec.MI,
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
            (0, l.jsx)(ea, { userId: s.id }),
        ],
    });
}
var eF = i(163126),
    eG = i(913453),
    eB = i(229187),
    eV = i(975732),
    ez = i(201934);
function ew(e) {
    let { user: s, guildId: i, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eG.A)(s),
        { analyticsLocations: a } = (0, x.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, j.NJ)(),
        u = (0, eF.A)();
    return (
        n.useEffect(() => {
            (0, eB.A)(s.id, u);
        }, [s.id, u]),
        (0, l.jsx)(D.Ip, {
            className: eT.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eT.Ie, children: (0, l.jsx)(ex.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eT.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eT.on }),
                                (0, l.jsx)("div", { className: eT.BI, children: z.intl.string(z.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: s, user: n, status: r } = e;
                            return (0, l.jsx)(
                                ez.A,
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
                                            (0, eV.openUserProfileModal)({
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
var eY = i(398590),
    eH = i(345942),
    eK = i(51943);
function eW(e) {
    let { user: s, onClose: i } = e,
        { trackUserProfileAction: n } = (0, j.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eG.A)(s);
    return (0, l.jsx)(D.Ip, {
        className: eT.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eT.Ie, children: (0, l.jsx)(ex.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eK.A,
                            {
                                user: s,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eH.u)(e), i(), (0, eY.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eT.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eT.vC }),
                            (0, l.jsx)("div", { className: eT.BI, children: z.intl.string(z.t.zjVh8h) }),
                        ],
                    }),
    });
}
var eX = i(837604);
function eJ(e) {
    let { section: s, user: i, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return s === ed.RP.ACTIVITY
        ? (0, l.jsx)(eO, { user: i, currentUser: n, guildId: d, onClose: a })
        : s === ed.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(ew, { user: i, guildId: d, channelId: r, onClose: a })
          : s === ed.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eW, { user: i, onClose: a })
            : s === ed.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(H, { user: i })
              : s === ed.RP.BOT_INFO
                ? (0, l.jsx)(eo, { user: i, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(ek, { user: i, displayProfile: t, onClose: a });
}
function eQ(e) {
    let {
            user: s,
            currentUser: i,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = ed.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, j.NJ)(),
        u = (0, _.bG)([b.A], () => b.A.hidePersonalInformation),
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
              className: eX.kL,
              children: (0, l.jsxs)("div", {
                  className: eT.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eT.hB }),
                      (0, l.jsx)("div", { className: eT.BI, children: z.intl.string(z.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: eX.kL,
              children: [
                  (0, l.jsx)(R.V, {
                      className: eX.$H,
                      type: "top",
                      selectedItem: x,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: s, text: i } = e;
                          return (0, l.jsx)(
                              R.V.Item,
                              {
                                  className: eX.YU,
                                  id: s,
                                  "aria-label": i,
                                  children: (0, l.jsx)(U.E, { variant: "text-sm/normal", children: i }),
                              },
                              s,
                          );
                      }),
                  }),
                  (0, l.jsx)(eJ, {
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
var eZ = i(186272),
    eq = i(996988),
    e$ = i(978036);
function e0(e) {
    let {
            user: s,
            currentUser: i,
            guildId: n,
            originGuildId: t,
            channelId: _,
            messageId: R,
            roleId: U,
            sessionId: b,
            initialTabSection: D,
            initialScrollTarget: M,
            transitionState: k,
            openedAt: F,
            onClose: G,
            sourceAnalyticsLocations: B = [],
        } = e,
        V = n === eu.ME ? void 0 : n,
        w = (0, m.Ay)(s.id, V),
        Y = h.Ay.getName(V, _, s),
        H = (0, A.GV)(),
        { analyticsLocations: K } = (0, x.Ay)([...B, u.A.USER_PROFILE_MODAL]),
        W = (0, j.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: b,
            guildId: V,
            channelId: _,
            messageId: R,
            roleId: U,
        }),
        X = (function (e) {
            let { mutualGuilds: s } = (0, eG.A)(e),
                i = s?.length;
            return [
                { section: ed.RP.BOT_INFO, text: z.intl.string(z.t.ZzAR2Y) },
                { section: ed.RP.MUTUAL_GUILDS, text: (0, eZ.A)(i) },
                { section: ed.RP.BOT_DATA_ACCESS, text: z.intl.string(z.t.WstFb0) },
            ];
        })(s),
        J = (0, I.A)({ user: s, guildId: t, channelId: _, displayProfile: w, onClose: G });
    return (0, l.jsx)(x.f5, {
        value: K,
        children: (0, l.jsx)(j.of, {
            value: W,
            openedAt: F,
            fetchStartedAt: w?.fetchStartedAt,
            fetchEndedAt: w?.fetchEndedAt,
            isLoaded: w?.isLoaded,
            children: (0, l.jsx)(p.N, {
                value: M,
                children: (0, l.jsx)(d.EO, {
                    "data-migration-pending": !0,
                    transitionState: k,
                    className: e$.zr,
                    hideShadow: !0,
                    "aria-labelledby": H,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(r.F, {
                        component: (0, l.jsx)(a.A, {
                            children: (0, l.jsx)(r.H, { id: H, children: z.intl.format(z.t.KRe1Fk, { name: Y }) }),
                        }),
                        children: (0, l.jsxs)(E.A, {
                            user: s,
                            displayProfile: w,
                            themeType: eq.d.MODAL,
                            children: [
                                (0, l.jsx)(C.A, {
                                    children: (0, l.jsx)(O.A, { user: s, guildId: V, viewProfileItem: J }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(N.A, { user: s, displayProfile: w, themeType: eq.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e$.El,
                                            children: [
                                                (0, l.jsx)(g.A, {
                                                    user: s,
                                                    displayProfile: w,
                                                    guildId: V,
                                                    channelId: _,
                                                    themeType: eq.d.MODAL,
                                                }),
                                                (0, l.jsx)(L.A, {
                                                    user: s,
                                                    themeType: eq.d.MODAL,
                                                    hasEntered: k === c.ip.ENTERED,
                                                    onCloseProfile: G,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e$.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e$.jS,
                                                            children: (0, l.jsx)(P.e, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e$.pg,
                                                            children: (0, l.jsx)(P.l, {
                                                                variant: "secondary",
                                                                userId: s.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(S.A, { user: s, guildId: V }),
                                                        (0, l.jsx)(T.A, { user: s }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(v.A, { userId: s.id, className: e$.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e$.rf,
                                    children: [
                                        (0, l.jsx)(y.Ay, {
                                            className: e$.eF,
                                            user: s,
                                            guildId: V,
                                            displayName: Y,
                                            displayNameSize: "lg",
                                            pronouns: w?.pronouns,
                                            trailing: (0, l.jsx)(f.A, {
                                                displayProfile: w,
                                                themeType: eq.d.MODAL,
                                                onClose: G,
                                            }),
                                        }),
                                        (0, l.jsx)(eQ, {
                                            user: s,
                                            currentUser: i,
                                            displayProfile: w,
                                            guildId: V,
                                            items: X,
                                            initialSection: D ?? ed.RP.BOT_INFO,
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
var e5 = i(480335),
    e3 = i(713517),
    e9 = i(35241);
function e7(e) {
    let {
            user: s,
            guildId: i,
            channelId: t,
            messageId: c,
            roleId: o,
            sessionId: I,
            transitionState: p,
            openedAt: v,
            onClose: T,
            sourceAnalyticsLocations: O = [],
        } = e,
        S = i === eu.ME ? void 0 : i,
        P = (0, m.Ay)(s.id, S),
        L = h.Ay.getName(S, t, s),
        _ = (0, A.GV)(),
        { analyticsLocations: b } = (0, x.Ay)([...O, u.A.USER_PROFILE_MODAL]),
        M = (0, j.pb)({
            layout: "MODAL",
            userId: s.id,
            sourceSessionId: I,
            guildId: S,
            channelId: t,
            messageId: c,
            roleId: o,
        }),
        k = n.useRef(null),
        F = (0, e3.M)(k);
    return (0, l.jsx)(x.f5, {
        value: b,
        children: (0, l.jsx)(j.of, {
            value: M,
            openedAt: v,
            fetchStartedAt: P?.fetchStartedAt,
            fetchEndedAt: P?.fetchEndedAt,
            isLoaded: P?.isLoaded,
            children: (0, l.jsxs)(d.EO, {
                "data-migration-pending": !0,
                transitionState: p,
                className: e$.zr,
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
                            themeType: eq.d.MODAL,
                            ref: P?.profileEffect != null ? k : void 0,
                            children: [
                                (0, l.jsx)(C.A, { children: (0, l.jsx)(e9.A, { user: s }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(N.A, { user: s, displayProfile: P, themeType: eq.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e$.El,
                                            children: (0, l.jsx)(g.A, {
                                                user: s,
                                                displayProfile: P,
                                                guildId: S,
                                                channelId: t,
                                                themeType: eq.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e$.rf,
                                    children: [
                                        (0, l.jsx)(y.Ay, {
                                            className: e$.eF,
                                            user: s,
                                            guildId: S,
                                            displayName: L,
                                            displayNameSize: "lg",
                                            pronouns: P?.pronouns,
                                            trailing: (0, l.jsx)(f.A, {
                                                displayProfile: P,
                                                themeType: eq.d.MODAL,
                                                onClose: T,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: eX.kL,
                                            children: [
                                                (0, l.jsx)(R.V, {
                                                    className: eX.$H,
                                                    type: "top",
                                                    selectedItem: ed.RP.BOT_INFO,
                                                    onItemSelect: eu.tEg,
                                                    children: (0, l.jsx)(
                                                        R.V.Item,
                                                        {
                                                            className: eX.YU,
                                                            id: ed.RP.BOT_INFO,
                                                            "aria-label": z.intl.string(z.t.ZzAR2Y),
                                                            children: (0, l.jsx)(U.E, {
                                                                variant: "text-sm/normal",
                                                                children: z.intl.string(z.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ed.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(D.Ip, {
                                                    fade: !0,
                                                    className: ec.XG,
                                                    children: [
                                                        (0, l.jsx)(ei.E, {
                                                            userId: s.id,
                                                            userBio: P?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(q.A, {
                                                            heading: z.intl.string(z.t["A//N4k"]),
                                                            children: (0, l.jsx)(el.A, {
                                                                userId: s.id,
                                                                guildId: S,
                                                                tooltipDelay: ed.In,
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
                    P?.profileEffect != null && (0, l.jsx)(e5.A, { skuId: P?.profileEffect?.skuId, isHovering: F }),
                ],
            }),
        }),
    });
}
var e1 = i(503698),
    e2 = i.n(e1),
    e8 = i(628284),
    e4 = i(331322),
    e6 = i(632738),
    se = i(994500),
    ss = i(47675),
    si = i(249790),
    sl = i(254828),
    sn = i(783123),
    st = i(463156),
    sd = i(864823),
    sr = i(707972);
function sa(e) {
    let {
            user: s,
            guildId: i,
            channelId: n,
            messageId: t,
            roleId: r,
            transitionState: a,
            openedAt: c,
            onClose: o,
            onHide: A,
            sourceAnalyticsLocations: I = [],
        } = e,
        p = i === eu.ME ? void 0 : i,
        g = (0, _.bG)([se.A], () => se.A.isBlocked(s.id)),
        { analyticsLocations: f } = (0, x.Ay)([...I, g ? u.A.BLOCKED_PROFILE_MODAL : u.A.IGNORED_PROFILE_MODAL]),
        N = (0, j.pb)({ layout: "MODAL_V2", userId: s.id, guildId: p, channelId: n, messageId: t, roleId: r }),
        v = [
            { icon: e8.y, description: z.intl.string(z.t.kcuWva) },
            { icon: e8.y, description: z.intl.string(g ? z.t.QxrDY1 : z.t.W6fjkS) },
        ],
        y = (0, m.Ay)(s.id, p),
        T = h.Ay.getName(y?.guildId, n, s),
        O = z.intl.formatToPlainString(z.t.KRe1Fk, { name: T });
    return (0, l.jsx)(x.f5, {
        value: f,
        children: (0, l.jsx)(j.of, {
            value: N,
            openedAt: c,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded,
            children: (0, l.jsx)(d.EO, {
                "data-migration-pending": !0,
                transitionState: a,
                className: sr.zr,
                "aria-label": O,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(E.A, {
                    className: e2()(sr.A7, sd.BK),
                    user: s,
                    displayProfile: y,
                    themeType: eq.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", {
                            className: sr.Oo,
                            children: (0, l.jsx)(st.A, { isCurrentUser: !1, onClose: o }),
                        }),
                        (0, l.jsx)("div", { className: sd.Tp }),
                        (0, l.jsxs)("div", {
                            className: sd.Qs,
                            children: [
                                (0, l.jsx)(si.A, { user: s, guildId: p }),
                                (0, l.jsxs)("div", {
                                    className: sd.FS,
                                    children: [
                                        (0, l.jsx)(M.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: z.intl.string(z.t.b33pLD),
                                        }),
                                        (0, l.jsx)(U.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: z.intl.format(g ? z.t.T7QiLn : z.t.MnEowy, { username: T }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: sd.vb,
                                    children: v.map((e, s) => {
                                        let { icon: i, description: n } = e;
                                        return (0, l.jsx)(
                                            e6.PQ,
                                            {
                                                icon: i,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: eC.A.colors.TEXT_DEFAULT.css,
                                            },
                                            s,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(e4.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(sn.A, {
                                            size: "md",
                                            isBlocked: g,
                                            onClick: () => {
                                                A(),
                                                    (0, ss.Wn)({
                                                        action: g ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: f,
                                                        ...N,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(sl.A, {
                                            userId: s.id,
                                            onClick: () => {
                                                A(),
                                                    (0, ss.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: f,
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
var sc = i(780385);
function so(e) {
    let { hideRestrictedProfile: s, ...i } = e,
        { user: n } = i,
        [d, r] = (0, t.A)(n.id);
    return d && !s
        ? (0, l.jsx)(sa, { onHide: r, ...i })
        : n.isNonUserBot()
          ? (0, l.jsx)(e7, { ...i })
          : n.bot
            ? (0, l.jsx)(e0, { ...i })
            : (0, l.jsx)(sc.A, { ...i });
}
