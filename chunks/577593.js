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
    y = s(681331),
    S = s(915614),
    O = s(559506),
    C = s(946356),
    T = s(465829),
    P = s(570314),
    L = s(984545),
    U = s(571077),
    b = s(587168),
    R = s(982985),
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
    H = s(177953),
    Y = s(203363),
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
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, Y.Z)(s);
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
            d && (0, l.jsx)(J, { icon: H.n, title: K.intl.string(K.t.WuKeSJ), description: K.intl.string(K.t.wOBmtV) }),
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
    ey = s(489379),
    eS = s(402857),
    eO = s(353394),
    eC = s(64622),
    eT = s(986712),
    eP = s(633756),
    eL = s(813195);
function eU(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, eE.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, ey.A)({ userId: i.id, guildId: n }),
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
                            heading: K.intl.string(K.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: eP.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eC.A, {
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
                                            children: (0, l.jsx)(eT.A, {
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
var eb = s(695366),
    eR = s(821269),
    e_ = s(93246),
    eD = s(773669),
    ek = s(967198),
    eM = s(346713),
    eF = s(484509),
    eG = s(46937),
    eB = s(361311);
function ez(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, g.NJ)(),
        d = (0, k.bG)([ek.A], () => ek.A.getGuildId()),
        r = (0, eR.q)({ userId: i.id }),
        a = (0, k.bG)([G.A], () => G.A.hidePersonalInformation),
        c = (0, k.bG)([eD.default], () => eD.default.locale),
        o = (0, eF.A)(i.id),
        u = (0, eM.A)(i.id);
    return (0, l.jsxs)(B.Ip, {
        fade: !0,
        className: eh.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(er.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(ec.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t.Iyka0U),
                    headingIcon: eb.E,
                    children: (0, l.jsx)(e_.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t["Uv/eTx"]),
                    children: (0, l.jsx)(eB.A, { applicationIds: r }),
                }),
            (0, l.jsx)(el.A, {
                heading: K.intl.string(K.t.a6XYD9),
                children: (0, l.jsx)(ea.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: eu.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t["3fe7U5"]),
                    scrollTargetId: eu.bk.CONNECTIONS,
                    children: (0, l.jsx)(eG.Ay, { connectedAccounts: o, className: eh.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(el.A, {
                    heading: K.intl.string(K.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eG.Wc,
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
var eV = s(163126),
    ew = s(913453),
    eH = s(229187),
    eY = s(975732),
    eW = s(503062);
function eK(e) {
    let { user: i, guildId: s, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, ew.A)(i),
        { analyticsLocations: a } = (0, I.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, g.NJ)(),
        u = (0, eV.A)();
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
                                eW.A,
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
                                            (0, eY.openUserProfileModal)({
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
var eX = s(398590),
    eJ = s(345942),
    eQ = s(51943);
function eZ(e) {
    let { user: i, onClose: s } = e,
        { trackUserProfileAction: n } = (0, g.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, ew.A)(i);
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
                            eQ.A,
                            {
                                user: i,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eJ.u)(e), s(), (0, eX.jH)();
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
var eq = s(717877);
function e$(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === eu.RP.ACTIVITY
        ? (0, l.jsx)(eU, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === eu.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eK, { user: s, guildId: d, channelId: r, onClose: a })
          : i === eu.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(eZ, { user: s, onClose: a })
            : i === eu.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(Q, { user: s })
              : i === eu.RP.BOT_INFO
                ? (0, l.jsx)(ej, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(ez, { user: s, displayProfile: t, onClose: a });
}
function e0(e) {
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
              className: eq.kL,
              children: (0, l.jsxs)("div", {
                  className: eL.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eL.hB }),
                      (0, l.jsx)("div", { className: eL.BI, children: K.intl.string(K.t.Br1ls3) }),
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
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              M.V.Item,
                              {
                                  className: eq.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(F.E, { variant: "text-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e$, {
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
    e5 = s(996988),
    e7 = s(985253),
    e1 = s(174217);
function e9(e) {
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
        H = (0, f.Ay)(i.id, w),
        Y = p.Ay.getName(w, r, i),
        W = H?.guildId ?? w,
        X = n.useCallback(() => {
            (0, D.A)({ user: i, guildId: W, alt: Y });
        }, [Y, W, i]),
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
            let { mutualGuilds: i } = (0, ew.A)(e),
                s = i?.length;
            return [
                { section: eu.RP.BOT_INFO, text: K.intl.string(K.t.ZzAR2Y) },
                { section: eu.RP.MUTUAL_GUILDS, text: (0, e3.A)(s) },
                { section: eu.RP.BOT_DATA_ACCESS, text: K.intl.string(K.t.WstFb0) },
            ];
        })(i),
        $ = (0, N.A)({ user: i, guildId: d, channelId: r, displayProfile: H, onClose: z });
    return (0, l.jsx)(I.f5, {
        value: Q,
        children: (0, l.jsx)(g.of, {
            value: Z,
            openedAt: B,
            fetchStartedAt: H?.fetchStartedAt,
            fetchEndedAt: H?.fetchEndedAt,
            isLoaded: H?.isLoaded,
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
                            children: (0, l.jsx)(u.H, { id: J, children: K.intl.format(K.t.KRe1Fk, { name: Y }) }),
                        }),
                        children: (0, l.jsxs)(C.A, {
                            user: i,
                            displayProfile: H,
                            themeType: e5.d.MODAL,
                            children: [
                                (0, l.jsx)(b.A, {
                                    children: (0, l.jsx)(L.A, { user: i, guildId: w, viewProfileItem: $ }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(S.A, { user: i, displayProfile: H, themeType: e5.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e1.El,
                                            children: [
                                                (0, l.jsx)(E.A, {
                                                    user: i,
                                                    displayProfile: H,
                                                    guildId: w,
                                                    channelId: r,
                                                    avatarSize: e7.T[e5.d.MODAL].avatarSize,
                                                    onOpenAvatar: X,
                                                }),
                                                (0, l.jsx)(_.A, {
                                                    user: i,
                                                    guildId: w,
                                                    channelId: r,
                                                    themeType: e5.d.MODAL,
                                                    hasEntered: G === A.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e1.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e1.jS,
                                                            children: (0, l.jsx)(R.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e1.pg,
                                                            children: (0, l.jsx)(R.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: h.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(U.A, { user: i, guildId: w }),
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
                                        (0, l.jsx)(T.Ay, {
                                            className: e1.eF,
                                            user: i,
                                            guildId: w,
                                            displayName: Y,
                                            displayNameSize: "lg",
                                            pronouns: H?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: H,
                                                themeType: e5.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e0, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: H,
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
var e2 = s(480335),
    e8 = s(713517),
    e6 = s(35241);
function e4(e) {
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
        U = n.useCallback(() => {
            (0, D.A)({ user: i, guildId: L, alt: P });
        }, [P, L, i]),
        R = (0, m.GV)(),
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
        z = (0, e8.M)(G);
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
                "aria-labelledby": R,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(u.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(u.H, { id: R, children: K.intl.format(K.t.KRe1Fk, { name: P }) }),
                        }),
                        children: (0, l.jsxs)(C.A, {
                            user: i,
                            displayProfile: O,
                            themeType: e5.d.MODAL,
                            ref: O?.profileEffect != null ? G : void 0,
                            children: [
                                (0, l.jsx)(b.A, { children: (0, l.jsx)(e6.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(S.A, { user: i, displayProfile: O, themeType: e5.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e1.El,
                                            children: (0, l.jsx)(E.A, {
                                                user: i,
                                                displayProfile: O,
                                                guildId: v,
                                                channelId: t,
                                                avatarSize: e7.T[e5.d.MODAL].avatarSize,
                                                onOpenAvatar: U,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e1.rf,
                                    children: [
                                        (0, l.jsx)(T.Ay, {
                                            className: e1.eF,
                                            user: i,
                                            guildId: v,
                                            displayName: P,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(y.A, {
                                                displayProfile: O,
                                                themeType: e5.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: eq.kL,
                                            children: [
                                                (0, l.jsx)(M.V, {
                                                    className: eq.$H,
                                                    type: "top",
                                                    selectedItem: eu.RP.BOT_INFO,
                                                    onItemSelect: eI.tEg,
                                                    children: (0, l.jsx)(
                                                        M.V.Item,
                                                        {
                                                            className: eq.YU,
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
                    O?.profileEffect != null && (0, l.jsx)(e2.A, { skuId: O?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
var ie = s(503698),
    ii = s.n(ie),
    is = s(628284),
    il = s(661531),
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
            { icon: is.y, description: K.intl.string(K.t.kcuWva) },
            { icon: is.y, description: K.intl.string(h ? K.t.QxrDY1 : K.t.W6fjkS) },
        ],
        E = (0, f.Ay)(i.id, A),
        y = p.Ay.getName(E?.guildId, n, i),
        S = K.intl.formatToPlainString(K.t.KRe1Fk, { name: y });
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
                "aria-label": S,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(C.A, {
                    className: ii()(ih.A7, iA.BK),
                    user: i,
                    displayProfile: E,
                    themeType: e5.d.MODAL_V2,
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
                                            children: K.intl.format(h ? K.t.T7QiLn : K.t.MnEowy, { username: y }),
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
                                                color: il.A.colors.TEXT_DEFAULT.css,
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
          ? (0, l.jsx)(e4, { ...s })
          : o.bot
            ? (0, l.jsx)(e9, { ...s })
            : (0, l.jsx)(iI.A, { ...s });
}
