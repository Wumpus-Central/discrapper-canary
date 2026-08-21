s.r(i), s.d(i, { default: () => im });
var l = s(477900),
    n = s(582128),
    t = s(287809),
    d = s(207803),
    r = s(958805),
    a = s(591179),
    c = s(215530),
    o = s(935462),
    u = s(707554),
    x = s(140735),
    A = s(231723),
    h = s(982168),
    j = s(793574),
    I = s(688810),
    m = s(915089),
    p = s(562153),
    g = s(183555),
    f = s(999291),
    N = s(722868),
    v = s(716804),
    E = s(718019),
    S = s(413492),
    y = s(915614),
    O = s(559506),
    T = s(946356),
    C = s(465829),
    P = s(570314),
    L = s(984545),
    b = s(571077),
    R = s(587168),
    U = s(982985),
    _ = s(983495),
    D = s(305385),
    k = s(17928),
    M = s(761508),
    F = s(834730),
    G = s(351906),
    B = s(364522),
    z = s(297264),
    V = s(534890),
    w = s(687966),
    Y = s(177953),
    H = s(203363),
    W = s(321191),
    K = s(375708),
    X = s(763800);
function J(e) {
    let { icon: i, title: s, description: n } = e;
    return (0, l.jsxs)("div", {
        className: X.nM,
        children: [
            (0, l.jsx)("div", {
                className: X.aL,
                children: (0, l.jsx)(i, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: X.qg,
                children: [
                    (0, l.jsx)(z.D, { variant: "text-xs/semibold", children: s }),
                    (0, l.jsx)(F.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { user: i } = e,
        s = (0, k.bG)([W.A], () => W.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, H.Z)(s);
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: X.XG,
        children: [
            n &&
                (0, l.jsx)(J, {
                    icon: V.ChatIcon,
                    title: K.intl.string(K.t["7Tmhfu"]),
                    description: K.intl.string(K.t.eu5x7z),
                }),
            t &&
                (0, l.jsx)(J, {
                    icon: w.GameControllerIcon,
                    title: K.intl.string(K.t.awYSsM),
                    description: K.intl.string(K.t.TpsXoC),
                }),
            d && (0, l.jsx)(J, { icon: Y.n, title: K.intl.string(K.t.WuKeSJ), description: K.intl.string(K.t.wOBmtV) }),
            (0, l.jsx)(F.E, {
                variant: "text-xs/normal",
                children: K.intl.format(K.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var Z = s(734057),
    q = s(309010),
    $ = s(383199),
    ee = s(514042),
    ei = s(194261),
    es = s(9578),
    el = s(900179),
    en = s(125369);
function et(e) {
    let { termsOfServiceUrl: i, privacyPolicyUrl: s } = e;
    return null == i && null == s
        ? null
        : (0, l.jsx)(el.A, {
              heading: K.intl.string(K.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: en.p_,
                  children: [
                      null != i && (0, l.jsx)(ed, { icon: ee.FileIcon, url: i, children: K.intl.string(K.t.s7STcY) }),
                      null != s && (0, l.jsx)(ed, { icon: ei.LockIcon, url: s, children: K.intl.string(K.t.kH3JR5) }),
                  ],
              }),
          });
}
function ed(e) {
    let { icon: i, url: s, children: n } = e;
    return (0, l.jsxs)(es.A, {
        href: s,
        className: en.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(i, { className: en.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(F.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var er = s(308244),
    ea = s(743987),
    ec = s(503026),
    eo = s(347805),
    eu = s(518477),
    ex = s(422317);
function eA(e) {
    let { userId: i } = e,
        s = (0, v.g)(),
        { trackUserProfileAction: n } = (0, g.NJ)();
    return (0, l.jsx)(el.A, {
        heading: K.intl.string(K.t["mQKv+v"]),
        scrollTargetId: eu.bk.NOTE,
        children: (0, l.jsx)(eo.A, {
            userId: i,
            className: ex.N,
            autoFocus: s === eu.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var eh = s(627757);
function ej(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        d = (0, k.bG)([W.A], () => W.A.getUserProfile(i.id)?.application),
        r = (0, k.bG)([Z.A, q.Ay], () => Z.A.getChannel(q.Ay.getChannelId()));
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: eh.XG,
        children: [
            (0, l.jsx)(er.E, { userBio: s?.bio, setLineClamp: !1 }),
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
            s?.guildId != null && (0, l.jsx)(ec.A, { userId: i.id, guildId: s.guildId }),
            (0, l.jsx)(el.A, {
                heading: K.intl.string(K.t["A//N4k"]),
                children: (0, l.jsx)(ea.A, { userId: i.id, guildId: n, tooltipDelay: eu.In }),
            }),
            (0, l.jsx)(eA, { userId: i.id }),
        ],
    });
}
var eI = s(652215),
    em = s(289873),
    ep = s(28863),
    eg = s(517164),
    ef = s(290863),
    eN = s(461213),
    ev = s(975571),
    eE = s(146655),
    eS = s(489379),
    ey = s(402857),
    eO = s(353394),
    eT = s(64622),
    eC = s(986712),
    eP = s(633756),
    eL = s(813195);
function eb(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eE.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, eS.A)({ userId: i.id, guildId: n }),
        u = (0, k.bG)([eg.A], () => eg.A.isFetchingUserOutbox(i.id)),
        x = i.id === s.id,
        A = (0, k.bG)([eN.A, ef.A], () => {
            let e = x ? eN.A.getStatus() : ef.A.getStatus(i.id);
            return e === eI.clD.OFFLINE || e === eI.clD.INVISIBLE;
        }),
        h = (0, k.bG)([W.A], () => W.A.getUserProfile(i.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !h && null == a && null == o && null != c,
        m = !A && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(B.Ip, {
              className: eP.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(el.A, {
                            "aria-label": K.intl.string(K.t.J6STd9),
                            children: (0, l.jsxs)("ul", {
                                className: eP.Ci,
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
                                                children: (0, l.jsx)(ey.A, {
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
                                            children: (0, l.jsx)(eC.A, {
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
                      ? (0, l.jsx)(el.A, {
                            heading: K.intl.string(K.t.M0zgnT),
                            introText: x
                                ? K.intl.format(K.t["4bk9Ak"], {
                                      learnMoreHook: (e, i) =>
                                          (0, l.jsx)(
                                              ep.Anchor,
                                              {
                                                  href: ev.A.getArticleURL(eI.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              i,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: eu.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: eP.Ci,
                                children: r.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eO.A, { user: i, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(em.y, {}) });
}
var eR = s(695366),
    eU = s(661531),
    e_ = s(821269),
    eD = s(93246),
    ek = s(773669),
    eM = s(967198),
    eF = s(346713),
    eG = s(484509),
    eB = s(46937),
    ez = s(361311);
function eV(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, g.NJ)(),
        d = (0, k.bG)([eM.A], () => eM.A.getGuildId()),
        r = (0, e_.q)({ userId: i.id }),
        a = (0, k.bG)([G.A], () => G.A.hidePersonalInformation),
        c = (0, k.bG)([ek.default], () => ek.default.locale),
        o = (0, eG.A)(i.id),
        u = (0, eF.A)(i.id);
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: eh.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(er.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(ec.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t.Iyka0U),
                    headingIcon: (0, l.jsx)(eR.E, { size: "xxs", color: eU.A.colors.TEXT_STRONG }),
                    headingColor: "text-default",
                    children: (0, l.jsx)(eD.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t["Uv/eTx"]),
                    children: (0, l.jsx)(ez.A, { applicationIds: r }),
                }),
            (0, l.jsx)(el.A, {
                heading: K.intl.string(K.t.a6XYD9),
                children: (0, l.jsx)(ea.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: eu.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t["3fe7U5"]),
                    scrollTargetId: eu.bk.CONNECTIONS,
                    children: (0, l.jsx)(eB.Ay, { connectedAccounts: o, className: eh.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t.PHjkRE),
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
            (0, l.jsx)(eA, { userId: i.id }),
        ],
    });
}
var ew = s(163126),
    eY = s(913453),
    eH = s(229187),
    eW = s(975732),
    eK = s(503062);
function eX(e) {
    let { user: i, guildId: s, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eY.A)(i),
        { analyticsLocations: a } = (0, I.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, ew.A)();
    return (
        n.useEffect(() => {
            (0, eH.A)(i.id, u);
        }, [i.id, u]),
        (0, l.jsx)(B.Ip, {
            className: eL.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(em.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eL.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eL.on }),
                                (0, l.jsx)("div", { className: eL.BI, children: K.intl.string(K.t["/5p4gx"]) }),
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
        { trackUserProfileAction: n } = (0, g.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eY.A)(i);
    return (0, l.jsx)(B.Ip, {
        className: eL.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eL.Ie, children: (0, l.jsx)(em.y, {}) })
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
                        className: eL.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eL.vC }),
                            (0, l.jsx)("div", { className: eL.BI, children: K.intl.string(K.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e$ = s(717877);
function e0(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === eu.RP.ACTIVITY
        ? (0, l.jsx)(eb, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === eu.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eX, { user: s, guildId: d, channelId: r, onClose: a })
          : i === eu.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eq, { user: s, onClose: a })
            : i === eu.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(Q, { user: s })
              : i === eu.RP.BOT_INFO
                ? (0, l.jsx)(ej, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(eV, { user: s, displayProfile: t, onClose: a });
}
function e5(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = eu.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, k.bG)([G.A], () => G.A.hidePersonalInformation),
        [x, A] = n.useState(
            () =>
                r.find((e) => {
                    let { section: i } = e;
                    return i === a;
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
                      (0, l.jsx)("div", { className: eL.BI, children: K.intl.string(K.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e$.kL,
              children: [
                  (0, l.jsx)(M.V, {
                      className: e$.$H,
                      type: "top",
                      selectedItem: x,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              M.V.Item,
                              {
                                  className: e$.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(F.E, { variant: "text-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e0, {
                      items: r,
                      section: x,
                      user: i,
                      currentUser: s,
                      displayProfile: t,
                      guildId: d,
                      onClose: c,
                  }),
              ],
          });
}
var e3 = s(186272),
    e7 = s(996988),
    e9 = s(985253),
    e1 = s(174217);
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
            initialTabSection: M,
            initialScrollTarget: F,
            transitionState: G,
            openedAt: B,
            onClose: z,
            sourceAnalyticsLocations: V = [],
        } = e,
        w = t === eI.ME ? void 0 : t,
        Y = (0, f.Ay)(i.id, w),
        H = p.Ay.getName(w, r, i),
        W = Y?.guildId ?? w,
        X = n.useCallback(() => {
            (0, D.A)({ user: i, guildId: W, alt: H });
        }, [H, W, i]),
        J = (0, m.GV)(),
        { analyticsLocations: Q } = (0, I.Ay)([...V, j.A.USER_PROFILE_MODAL]),
        Z = (0, g.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: k,
            guildId: w,
            channelId: r,
            messageId: a,
            roleId: c,
        }),
        q = (function (e) {
            let { mutualGuilds: i } = (0, eY.A)(e),
                s = i?.length;
            return [
                { section: eu.RP.BOT_INFO, text: K.intl.string(K.t.ZzAR2Y) },
                { section: eu.RP.MUTUAL_GUILDS, text: (0, e3.A)(s) },
                { section: eu.RP.BOT_DATA_ACCESS, text: K.intl.string(K.t.WstFb0) },
            ];
        })(i),
        $ = (0, N.A)({ user: i, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(I.f5, {
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
                    className: e1.zr,
                    hideShadow: !0,
                    "aria-labelledby": J,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: J, children: K.intl.format(K.t.KRe1Fk, { name: H }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: i,
                            displayProfile: Y,
                            themeType: e7.d.MODAL,
                            children: [
                                (0, l.jsx)(R.A, {
                                    children: (0, l.jsx)(L.A, { user: i, guildId: w, viewProfileItem: $ }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(y.A, { user: i, displayProfile: Y, themeType: e7.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e1.El,
                                            children: [
                                                (0, l.jsx)(E.A, {
                                                    user: i,
                                                    displayProfile: Y,
                                                    guildId: w,
                                                    channelId: r,
                                                    avatarSize: e9.T[e7.d.MODAL].avatarSize,
                                                    onOpenAvatar: X,
                                                }),
                                                (0, l.jsx)(_.A, {
                                                    user: i,
                                                    guildId: w,
                                                    channelId: r,
                                                    themeType: e7.d.MODAL,
                                                    hasEntered: G === A.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e1.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e1.jS,
                                                            children: (0, l.jsx)(U.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e1.pg,
                                                            children: (0, l.jsx)(U.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(b.A, { user: i, guildId: w }),
                                                        (0, l.jsx)(P.A, { user: i }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(O.A, { userId: i.id, className: e1.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e1.rf,
                                    children: [
                                        (0, l.jsx)(C.Ay, {
                                            className: e1.eF,
                                            user: i,
                                            guildId: w,
                                            displayName: H,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: Y,
                                                themeType: e7.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e5, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: Y,
                                            guildId: w,
                                            items: q,
                                            initialSection: M ?? eu.RP.BOT_INFO,
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
            openedAt: A,
            onClose: h,
            sourceAnalyticsLocations: N = [],
        } = e,
        v = s === eI.ME ? void 0 : s,
        O = (0, f.Ay)(i.id, v),
        P = p.Ay.getName(v, t, i),
        L = O?.guildId ?? v,
        b = n.useCallback(() => {
            (0, D.A)({ user: i, guildId: L, alt: P });
        }, [P, L, i]),
        U = (0, m.GV)(),
        { analyticsLocations: _ } = (0, I.Ay)([...N, j.A.USER_PROFILE_MODAL]),
        k = (0, g.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: v,
            channelId: t,
            messageId: d,
            roleId: r,
        }),
        G = n.useRef(null),
        z = (0, e6.M)(G);
    return (0, l.jsx)(I.f5, {
        value: _,
        children: (0, l.jsx)(g.of, {
            value: k,
            openedAt: A,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsxs)(o.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e1.zr,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: U, children: K.intl.format(K.t.KRe1Fk, { name: P }) }),
                        }),
                        children: (0, l.jsxs)(T.A, {
                            user: i,
                            displayProfile: O,
                            themeType: e7.d.MODAL,
                            ref: O?.profileEffect != null ? G : void 0,
                            children: [
                                (0, l.jsx)(R.A, { children: (0, l.jsx)(e4.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(y.A, { user: i, displayProfile: O, themeType: e7.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e1.El,
                                            children: (0, l.jsx)(E.A, {
                                                user: i,
                                                displayProfile: O,
                                                guildId: v,
                                                channelId: t,
                                                avatarSize: e9.T[e7.d.MODAL].avatarSize,
                                                onOpenAvatar: b,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e1.rf,
                                    children: [
                                        (0, l.jsx)(C.Ay, {
                                            className: e1.eF,
                                            user: i,
                                            guildId: v,
                                            displayName: P,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: O,
                                                themeType: e7.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e$.kL,
                                            children: [
                                                (0, l.jsx)(M.V, {
                                                    className: e$.$H,
                                                    type: "top",
                                                    selectedItem: eu.RP.BOT_INFO,
                                                    onItemSelect: eI.tEg,
                                                    children: (0, l.jsx)(
                                                        M.V.Item,
                                                        {
                                                            className: e$.YU,
                                                            id: eu.RP.BOT_INFO,
                                                            "aria-label": K.intl.string(K.t.ZzAR2Y),
                                                            children: (0, l.jsx)(F.E, {
                                                                variant: "text-sm/normal",
                                                                children: K.intl.string(K.t.ZzAR2Y),
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
                                                            userId: i.id,
                                                            userBio: O?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(el.A, {
                                                            heading: K.intl.string(K.t["A//N4k"]),
                                                            children: (0, l.jsx)(ea.A, {
                                                                userId: i.id,
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
                    O?.profileEffect != null && (0, l.jsx)(e8.A, { skuId: O?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
var ii = s(503698),
    is = s.n(ii),
    il = s(628284),
    it = s(331322),
    id = s(632738),
    ir = s(994500),
    ia = s(47675),
    ic = s(249790),
    io = s(254828),
    iu = s(783123),
    ix = s(463156),
    iA = s(446039),
    ih = s(968475);
function ij(e) {
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
            sourceAnalyticsLocations: x = [],
        } = e,
        A = s === eI.ME ? void 0 : s,
        h = (0, k.bG)([ir.A], () => ir.A.isBlocked(i.id)),
        { analyticsLocations: m } = (0, I.Ay)([...x, h ? j.A.BLOCKED_PROFILE_MODAL : j.A.IGNORED_PROFILE_MODAL]),
        N = (0, g.pb)({ layout: "MODAL_V2", userId: i.id, guildId: A, channelId: n, messageId: t, roleId: d }),
        v = [
            { icon: il.y, description: K.intl.string(K.t.kcuWva) },
            { icon: il.y, description: K.intl.string(h ? K.t.QxrDY1 : K.t.W6fjkS) },
        ],
        E = (0, f.Ay)(i.id, A),
        S = p.Ay.getName(E?.guildId, n, i),
        y = K.intl.formatToPlainString(K.t.KRe1Fk, { name: S });
    return (0, l.jsx)(I.f5, {
        value: m,
        children: (0, l.jsx)(g.of, {
            value: N,
            openedAt: a,
            fetchStartedAt: E?.fetchStartedAt,
            fetchEndedAt: E?.fetchEndedAt,
            isLoaded: E?.isLoaded,
            children: (0, l.jsx)(o.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: ih.zr,
                "aria-label": y,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(T.A, {
                    className: is()(ih.A7, iA.BK),
                    user: i,
                    displayProfile: E,
                    themeType: e7.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: ih.Oo, children: (0, l.jsx)(ix.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: iA.Tp }),
                        (0, l.jsxs)("div", {
                            className: iA.Qs,
                            children: [
                                (0, l.jsx)(ic.A, { user: i, guildId: A }),
                                (0, l.jsxs)("div", {
                                    className: iA.FS,
                                    children: [
                                        (0, l.jsx)(z.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: K.intl.string(K.t.b33pLD),
                                        }),
                                        (0, l.jsx)(F.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: K.intl.format(h ? K.t.T7QiLn : K.t.MnEowy, { username: S }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: iA.vb,
                                    children: v.map((e, i) => {
                                        let { icon: s, description: n } = e;
                                        return (0, l.jsx)(
                                            id.PQ,
                                            {
                                                icon: s,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: eU.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(it.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(iu.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                u(),
                                                    (0, ia.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: m,
                                                        ...N,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(io.A, {
                                            userId: i.id,
                                            onClick: () => {
                                                u(),
                                                    (0, ia.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: m,
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
var iI = s(208048);
function im(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: o } = s,
        [u, x] = (0, c.A)(o.id);
    return (n.useEffect(
        () => () => {
            o.id === t.default.getCurrentUser()?.id &&
                (r.A.clearPendingWidgets(), (0, a.E)("UserProfileModalV2Renderer") && ((0, d.XQ)(), (0, d.sd)()));
        },
        [o.id],
    ),
    u && !i)
        ? (0, l.jsx)(ij, { onHide: x, ...s })
        : o.isNonUserBot()
          ? (0, l.jsx)(ie, { ...s })
          : o.bot
            ? (0, l.jsx)(e2, { ...s })
            : (0, l.jsx)(iI.A, { ...s });
}
