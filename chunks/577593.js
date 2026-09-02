s.r(i), s.d(i, { default: () => ig });
var l = s(477900),
    n = s(582128),
    t = s(234e3),
    d = s(287809),
    r = s(207803),
    a = s(958805),
    c = s(591179),
    o = s(215530),
    u = s(935462),
    A = s(707554),
    x = s(140735),
    h = s(231723),
    j = s(982168),
    I = s(793574),
    m = s(688810),
    p = s(915089),
    g = s(397562),
    f = s(562153),
    N = s(183555),
    v = s(999291),
    E = s(722868),
    O = s(716804),
    y = s(718019),
    S = s(461116),
    C = s(915614),
    T = s(559506),
    P = s(946356),
    L = s(465829),
    R = s(570314),
    D = s(984545),
    U = s(571077),
    _ = s(587168),
    b = s(982985),
    M = s(983495),
    k = s(305385),
    F = s(17928),
    G = s(761508),
    B = s(834730),
    V = s(351906),
    z = s(364522),
    w = s(297264),
    H = s(534890),
    Y = s(687966),
    W = s(177953),
    K = s(203363),
    J = s(321191),
    X = s(375708),
    Q = s(763800);
function Z(e) {
    let { icon: i, title: s, description: n } = e;
    return (0, l.jsxs)("div", {
        className: Q.nM,
        children: [
            (0, l.jsx)("div", {
                className: Q.aL,
                children: (0, l.jsx)(i, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, l.jsxs)("div", {
                className: Q.qg,
                children: [
                    (0, l.jsx)(w.D, { variant: "text-xs/semibold", children: s }),
                    (0, l.jsx)(B.E, { variant: "text-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { user: i } = e,
        s = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: d } = (0, K.Z)(s);
    return (0, l.jsxs)(z.Ip, {
        fade: !0,
        className: Q.XG,
        children: [
            n &&
                (0, l.jsx)(Z, {
                    icon: H.ChatIcon,
                    title: X.intl.string(X.t["7Tmhfu"]),
                    description: X.intl.string(X.t.eu5x7z),
                }),
            t &&
                (0, l.jsx)(Z, {
                    icon: Y.GameControllerIcon,
                    title: X.intl.string(X.t.awYSsM),
                    description: X.intl.string(X.t.TpsXoC),
                }),
            d && (0, l.jsx)(Z, { icon: W.n, title: X.intl.string(X.t.WuKeSJ), description: X.intl.string(X.t.wOBmtV) }),
            (0, l.jsx)(B.E, {
                variant: "text-xs/normal",
                children: X.intl.format(X.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var $ = s(734057),
    ee = s(309010),
    ei = s(383199),
    es = s(514042),
    el = s(194261),
    en = s(9578),
    et = s(900179),
    ed = s(125369);
function er(e) {
    let { termsOfServiceUrl: i, privacyPolicyUrl: s } = e;
    return null == i && null == s
        ? null
        : (0, l.jsx)(et.A, {
              heading: X.intl.string(X.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: ed.p_,
                  children: [
                      null != i && (0, l.jsx)(ea, { icon: es.FileIcon, url: i, children: X.intl.string(X.t.s7STcY) }),
                      null != s && (0, l.jsx)(ea, { icon: el.LockIcon, url: s, children: X.intl.string(X.t.kH3JR5) }),
                  ],
              }),
          });
}
function ea(e) {
    let { icon: i, url: s, children: n } = e;
    return (0, l.jsxs)(en.A, {
        href: s,
        className: ed.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(i, { className: ed.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(B.E, { variant: "text-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var ec = s(308244),
    eo = s(743987),
    eu = s(503026),
    eA = s(347805),
    ex = s(518477),
    eh = s(422317);
function ej(e) {
    let { userId: i } = e,
        s = (0, O.g)(),
        { trackUserProfileAction: n } = (0, N.NJ)();
    return (0, l.jsx)(et.A, {
        heading: X.intl.string(X.t["mQKv+v"]),
        scrollTargetId: ex.bk.NOTE,
        children: (0, l.jsx)(eA.A, {
            userId: i,
            className: eh.N,
            autoFocus: s === ex.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var eI = s(627757);
function em(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        d = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.application),
        r = (0, F.bG)([$.A, ee.Ay], () => $.A.getChannel(ee.Ay.getChannelId()));
    return (0, l.jsxs)(z.Ip, {
        fade: !0,
        className: eI.XG,
        children: [
            (0, l.jsx)(ec.E, { userBio: s?.bio, setLineClamp: !1 }),
            d?.popularApplicationCommandIds != null &&
                null != r &&
                (0, l.jsx)(ei.A, {
                    applicationId: d.id,
                    commandIds: d.popularApplicationCommandIds,
                    channel: r,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(er, { termsOfServiceUrl: d?.termsOfServiceUrl, privacyPolicyUrl: d?.privacyPolicyUrl }),
            s?.guildId != null && (0, l.jsx)(eu.A, { userId: i.id, guildId: s.guildId }),
            (0, l.jsx)(et.A, {
                heading: X.intl.string(X.t["A//N4k"]),
                children: (0, l.jsx)(eo.A, { userId: i.id, guildId: n, tooltipDelay: ex.In }),
            }),
            (0, l.jsx)(ej, { userId: i.id }),
        ],
    });
}
var ep = s(652215),
    eg = s(289873),
    ef = s(28863),
    eN = s(517164),
    ev = s(290863),
    eE = s(461213),
    eO = s(975571),
    ey = s(146655),
    eS = s(489379),
    eC = s(402857),
    eT = s(353394),
    eP = s(64622),
    eL = s(986712),
    eR = s(633756),
    eD = s(813195);
function eU(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: d, recent: r, stream: a } = (0, ey.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, eS.A)({ userId: i.id, guildId: n }),
        u = (0, F.bG)([eN.A], () => eN.A.isFetchingUserOutbox(i.id)),
        A = i.id === s.id,
        x = (0, F.bG)([eE.A, ev.A], () => {
            let e = A ? eE.A.getStatus() : ev.A.getStatus(i.id);
            return e === ep.clD.OFFLINE || e === ep.clD.INVISIBLE;
        }),
        h = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.private === !0),
        j = d.length > 0 || null != a,
        I = !h && null == a && null == o && null != c,
        m = !x && (j || I),
        p = r.length > 0;
    return m || p || !u
        ? (0, l.jsxs)(z.Ip, {
              className: eR.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(et.A, {
                            heading: X.intl.string(X.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: eR.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(eP.A, {
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
                                                children: (0, l.jsx)(eC.A, {
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
                                            children: (0, l.jsx)(eL.A, {
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
                      ? (0, l.jsx)(et.A, {
                            heading: X.intl.string(X.t.M0zgnT),
                            introText: A
                                ? X.intl.format(X.t["4bk9Ak"], {
                                      learnMoreHook: (e, i) =>
                                          (0, l.jsx)(
                                              ef.Anchor,
                                              {
                                                  href: eO.A.getArticleURL(ep.MVz.ACTIVITY_STATUS_SETTINGS),
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
                                        { children: (0, l.jsx)(eT.A, { user: i, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(eg.y, {}) });
}
var e_ = s(695366),
    eb = s(821269),
    eM = s(93246),
    ek = s(773669),
    eF = s(967198),
    eG = s(346713),
    eB = s(484509),
    eV = s(46937),
    ez = s(361311);
function ew(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, N.NJ)(),
        d = (0, F.bG)([eF.A], () => eF.A.getGuildId()),
        r = (0, eb.q)({ userId: i.id }),
        a = (0, F.bG)([V.A], () => V.A.hidePersonalInformation),
        c = (0, F.bG)([ek.default], () => ek.default.locale),
        o = (0, eB.A)(i.id),
        u = (0, eG.A)(i.id);
    return (0, l.jsxs)(z.Ip, {
        fade: !0,
        className: eI.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(ec.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(eu.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t.Iyka0U),
                    headingIcon: e_.E,
                    children: (0, l.jsx)(eM.T, { userId: i.id }),
                }),
            r.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t["Uv/eTx"]),
                    children: (0, l.jsx)(ez.A, { applicationIds: r }),
                }),
            (0, l.jsx)(et.A, {
                heading: X.intl.string(X.t.a6XYD9),
                children: (0, l.jsx)(eo.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: ex.In }),
            }),
            o.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t["3fe7U5"]),
                    scrollTargetId: ex.bk.CONNECTIONS,
                    children: (0, l.jsx)(eV.Ay, { connectedAccounts: o, className: eI.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eV.Wc,
                            {
                                className: eI.MI,
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
            (0, l.jsx)(ej, { userId: i.id }),
        ],
    });
}
var eH = s(163126),
    eY = s(913453),
    eW = s(229187),
    eK = s(402860),
    eJ = s(503062);
function eX(e) {
    let { user: i, guildId: s, channelId: t, onClose: d } = e,
        { mutualFriends: r } = (0, eY.A)(i),
        { analyticsLocations: a } = (0, m.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, N.NJ)(),
        u = (0, eH.A)();
    return (
        n.useEffect(() => {
            (0, eW.A)(i.id, u);
        }, [i.id, u]),
        (0, l.jsx)(z.Ip, {
            className: eD.DK,
            fade: !0,
            children:
                null == r
                    ? (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(eg.y, {}) })
                    : 0 === r.length
                      ? (0, l.jsxs)("div", {
                            className: eD.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eD.on }),
                                (0, l.jsx)("div", { className: eD.BI, children: X.intl.string(X.t["/5p4gx"]) }),
                            ],
                        })
                      : r.map((e) => {
                            let { key: i, user: n, status: r } = e;
                            return (0, l.jsx)(
                                eJ.A,
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
                                            (0, eK.openUserProfileModal)({
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
var eQ = s(398590),
    eZ = s(345942),
    eq = s(51943);
function e$(e) {
    let { user: i, onClose: s } = e,
        { trackUserProfileAction: n } = (0, N.NJ)(),
        { mutualGuilds: t, isFetching: d } = (0, eY.A)(i);
    return (0, l.jsx)(z.Ip, {
        className: eD.DK,
        fade: !0,
        children:
            null == t && d
                ? (0, l.jsx)("div", { className: eD.Ie, children: (0, l.jsx)(eg.y, {}) })
                : (null != t || d) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: d } = e;
                        return (0, l.jsx)(
                            eq.A,
                            {
                                user: i,
                                guild: t,
                                nick: d,
                                onSelect: () => {
                                    var e;
                                    n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, eZ.u)(e), s(), (0, eQ.jH)();
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eD.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eD.vC }),
                            (0, l.jsx)("div", { className: eD.BI, children: X.intl.string(X.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e0 = s(717877);
function e3(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: d, channelId: r, onClose: a } = e;
    return i === ex.RP.ACTIVITY
        ? (0, l.jsx)(eU, { user: s, currentUser: n, guildId: d, onClose: a })
        : i === ex.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(eX, { user: s, guildId: d, channelId: r, onClose: a })
          : i === ex.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(e$, { user: s, onClose: a })
            : i === ex.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(q, { user: s })
              : i === ex.RP.BOT_INFO
                ? (0, l.jsx)(em, { user: s, displayProfile: t, guildId: d, onClose: a })
                : (0, l.jsx)(ew, { user: s, displayProfile: t, onClose: a });
}
function e5(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: d,
            items: r,
            initialSection: a = ex.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, N.NJ)(),
        u = (0, F.bG)([V.A], () => V.A.hidePersonalInformation),
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
              className: e0.kL,
              children: (0, l.jsxs)("div", {
                  className: eD.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eD.hB }),
                      (0, l.jsx)("div", { className: eD.BI, children: X.intl.string(X.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e0.kL,
              children: [
                  (0, l.jsx)(G.V, {
                      className: e0.$H,
                      type: "top",
                      selectedItem: A,
                      onItemSelect: h,
                      children: r.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              G.V.Item,
                              {
                                  className: e0.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(B.E, { variant: "text-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e3, {
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
var e7 = s(186272),
    e1 = s(996988),
    e9 = s(207634),
    e2 = s(174217);
function e6(e) {
    let {
            user: i,
            currentUser: s,
            guildId: t,
            originGuildId: d,
            channelId: r,
            messageId: a,
            roleId: c,
            sessionId: o,
            initialTabSection: F,
            initialScrollTarget: G,
            transitionState: B,
            openedAt: V,
            onClose: z,
            sourceAnalyticsLocations: w = [],
        } = e,
        H = t === ep.ME ? void 0 : t,
        Y = (0, v.Ay)(i.id, H),
        W = f.Ay.getName(H, r, i),
        K = Y?.guildId ?? H,
        J = n.useCallback(() => {
            (0, k.A)({ user: i, guildId: K, alt: W });
        }, [W, K, i]),
        Q = (0, p.GV)(),
        { analyticsLocations: Z } = (0, m.Ay)([...w, I.A.USER_PROFILE_MODAL]),
        q = (0, N.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: o,
            guildId: H,
            channelId: r,
            messageId: a,
            roleId: c,
        });
    (0, g.A)(Z, Y, ex.R7.MODAL);
    let $ = (function (e) {
            let { mutualGuilds: i } = (0, eY.A)(e),
                s = i?.length;
            return [
                { section: ex.RP.BOT_INFO, text: X.intl.string(X.t.ZzAR2Y) },
                { section: ex.RP.MUTUAL_GUILDS, text: (0, e7.A)(s) },
                { section: ex.RP.BOT_DATA_ACCESS, text: X.intl.string(X.t.WstFb0) },
            ];
        })(i),
        ee = (0, E.A)({ user: i, guildId: d, channelId: r, displayProfile: Y, onClose: z });
    return (0, l.jsx)(m.f5, {
        value: Z,
        children: (0, l.jsx)(N.of, {
            value: q,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, l.jsx)(O.N, {
                value: G,
                children: (0, l.jsx)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: e2.zr,
                    hideShadow: !0,
                    "aria-labelledby": Q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(A.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(A.H, { id: Q, children: X.intl.format(X.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, l.jsxs)(P.A, {
                            user: i,
                            displayProfile: Y,
                            themeType: e1.d.MODAL,
                            children: [
                                (0, l.jsx)(_.A, {
                                    children: (0, l.jsx)(D.A, { user: i, guildId: H, viewProfileItem: ee }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(C.A, { user: i, displayProfile: Y, themeType: e1.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: e2.El,
                                            children: [
                                                (0, l.jsx)(y.A, {
                                                    user: i,
                                                    displayProfile: Y,
                                                    guildId: H,
                                                    channelId: r,
                                                    avatarSize: e9.T[e1.d.MODAL].avatarSize,
                                                    onOpenAvatar: J,
                                                }),
                                                (0, l.jsx)(M.A, {
                                                    user: i,
                                                    guildId: H,
                                                    channelId: r,
                                                    themeType: e1.d.MODAL,
                                                    hasEntered: B === h.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: e2.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: e2.jS,
                                                            children: (0, l.jsx)(b.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: j.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: e2.pg,
                                                            children: (0, l.jsx)(b.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: j.A.popAll,
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
                                (0, l.jsx)(T.A, { userId: i.id, className: e2.Fd }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(L.Ay, {
                                            className: e2.eF,
                                            user: i,
                                            guildId: H,
                                            displayName: W,
                                            displayNameSize: "lg",
                                            pronouns: Y?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: Y,
                                                themeType: e1.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e5, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: Y,
                                            guildId: H,
                                            items: $,
                                            initialSection: F ?? ex.RP.BOT_INFO,
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
    e4 = s(713517),
    ie = s(35241);
function ii(e) {
    let {
            user: i,
            guildId: s,
            channelId: t,
            messageId: d,
            roleId: r,
            sessionId: a,
            transitionState: c,
            openedAt: o,
            onClose: h,
            sourceAnalyticsLocations: j = [],
        } = e,
        E = s === ep.ME ? void 0 : s,
        O = (0, v.Ay)(i.id, E),
        T = f.Ay.getName(E, t, i),
        R = O?.guildId ?? E,
        D = n.useCallback(() => {
            (0, k.A)({ user: i, guildId: R, alt: T });
        }, [T, R, i]),
        U = (0, p.GV)(),
        { analyticsLocations: b } = (0, m.Ay)([...j, I.A.USER_PROFILE_MODAL]),
        M = (0, N.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: E,
            channelId: t,
            messageId: d,
            roleId: r,
        });
    (0, g.A)(b, O, ex.R7.MODAL);
    let F = n.useRef(null),
        V = (0, e4.M)(F);
    return (0, l.jsx)(m.f5, {
        value: b,
        children: (0, l.jsx)(N.of, {
            value: M,
            openedAt: o,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsxs)(u.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: e2.zr,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(A.F, {
                        component: (0, l.jsx)(x.A, {
                            children: (0, l.jsx)(A.H, { id: U, children: X.intl.format(X.t.KRe1Fk, { name: T }) }),
                        }),
                        children: (0, l.jsxs)(P.A, {
                            user: i,
                            displayProfile: O,
                            themeType: e1.d.MODAL,
                            ref: O?.profileEffect != null ? F : void 0,
                            children: [
                                (0, l.jsx)(_.A, { children: (0, l.jsx)(ie.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(C.A, { user: i, displayProfile: O, themeType: e1.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: e2.El,
                                            children: (0, l.jsx)(y.A, {
                                                user: i,
                                                displayProfile: O,
                                                guildId: E,
                                                channelId: t,
                                                avatarSize: e9.T[e1.d.MODAL].avatarSize,
                                                onOpenAvatar: D,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: e2.rf,
                                    children: [
                                        (0, l.jsx)(L.Ay, {
                                            className: e2.eF,
                                            user: i,
                                            guildId: E,
                                            displayName: T,
                                            displayNameSize: "lg",
                                            pronouns: O?.pronouns,
                                            trailing: (0, l.jsx)(S.A, {
                                                displayProfile: O,
                                                themeType: e1.d.MODAL,
                                                onClose: h,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e0.kL,
                                            children: [
                                                (0, l.jsx)(G.V, {
                                                    className: e0.$H,
                                                    type: "top",
                                                    selectedItem: ex.RP.BOT_INFO,
                                                    onItemSelect: ep.tEg,
                                                    children: (0, l.jsx)(
                                                        G.V.Item,
                                                        {
                                                            className: e0.YU,
                                                            id: ex.RP.BOT_INFO,
                                                            "aria-label": X.intl.string(X.t.ZzAR2Y),
                                                            children: (0, l.jsx)(B.E, {
                                                                variant: "text-sm/normal",
                                                                children: X.intl.string(X.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ex.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(z.Ip, {
                                                    fade: !0,
                                                    className: eI.XG,
                                                    children: [
                                                        (0, l.jsx)(ec.E, {
                                                            userId: i.id,
                                                            userBio: O?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(et.A, {
                                                            heading: X.intl.string(X.t["A//N4k"]),
                                                            children: (0, l.jsx)(eo.A, {
                                                                userId: i.id,
                                                                guildId: E,
                                                                tooltipDelay: ex.In,
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
                    O?.profileEffect != null && (0, l.jsx)(e8.A, { skuId: O?.profileEffect?.skuId, isHovering: V }),
                ],
            }),
        }),
    });
}
var is = s(503698),
    il = s.n(is),
    it = s(628284),
    id = s(661531),
    ir = s(331322),
    ia = s(632738),
    ic = s(994500),
    io = s(47675),
    iu = s(249790),
    iA = s(254828),
    ix = s(783123),
    ih = s(463156),
    ij = s(446039),
    iI = s(968475);
function im(e) {
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
            sourceAnalyticsLocations: A = [],
        } = e,
        x = s === ep.ME ? void 0 : s,
        h = (0, F.bG)([ic.A], () => ic.A.isBlocked(i.id)),
        { analyticsLocations: j } = (0, m.Ay)([...A, h ? I.A.BLOCKED_PROFILE_MODAL : I.A.IGNORED_PROFILE_MODAL]),
        p = (0, N.pb)({ layout: "MODAL_V2", userId: i.id, guildId: x, channelId: n, messageId: t, roleId: d }),
        E = [
            { icon: it.y, description: X.intl.string(X.t.kcuWva) },
            { icon: it.y, description: X.intl.string(h ? X.t.QxrDY1 : X.t.W6fjkS) },
        ],
        O = (0, v.Ay)(i.id, x);
    (0, g.A)(j, O, ex.R7.MODAL_V2);
    let y = f.Ay.getName(O?.guildId, n, i),
        S = X.intl.formatToPlainString(X.t.KRe1Fk, { name: y });
    return (0, l.jsx)(m.f5, {
        value: j,
        children: (0, l.jsx)(N.of, {
            value: p,
            openedAt: a,
            fetchStartedAt: O?.fetchStartedAt,
            fetchEndedAt: O?.fetchEndedAt,
            isLoaded: O?.isLoaded,
            children: (0, l.jsx)(u.EO, {
                "data-migration-pending": !0,
                transitionState: r,
                className: iI.zr,
                "aria-label": S,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(P.A, {
                    className: il()(iI.A7, ij.BK),
                    user: i,
                    displayProfile: O,
                    themeType: e1.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: iI.Oo, children: (0, l.jsx)(ih.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: ij.Tp }),
                        (0, l.jsxs)("div", {
                            className: ij.Qs,
                            children: [
                                (0, l.jsx)(iu.A, { user: i, guildId: x }),
                                (0, l.jsxs)("div", {
                                    className: ij.FS,
                                    children: [
                                        (0, l.jsx)(w.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: X.intl.string(X.t.b33pLD),
                                        }),
                                        (0, l.jsx)(B.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: X.intl.format(h ? X.t.T7QiLn : X.t.MnEowy, { username: y }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: ij.vb,
                                    children: E.map((e, i) => {
                                        let { icon: s, description: n } = e;
                                        return (0, l.jsx)(
                                            ia.PQ,
                                            {
                                                icon: s,
                                                title: n,
                                                titleVariant: "text-md/normal",
                                                color: id.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(ir.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(ix.A, {
                                            size: "md",
                                            isBlocked: h,
                                            onClick: () => {
                                                o(),
                                                    (0, io.Wn)({
                                                        action: h ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...p,
                                                    });
                                            },
                                        }),
                                        (0, l.jsx)(iA.A, {
                                            userId: i.id,
                                            onClick: () => {
                                                o(),
                                                    (0, io.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...p,
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
var ip = s(815007);
function ig(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: u } = s,
        [A, x] = (0, o.A)(u.id);
    return (n.useEffect(
        () => () => {
            u.id === d.default.getCurrentUser()?.id &&
                (a.A.clearPendingWidgets(),
                (0, t.Jp)(),
                (0, c.E)("UserProfileModalV2Renderer") && ((0, r.XQ)(), (0, r.sd)()));
        },
        [u.id],
    ),
    A && !i)
        ? (0, l.jsx)(im, { onHide: x, ...s })
        : u.isNonUserBot()
          ? (0, l.jsx)(ii, { ...s })
          : u.bot
            ? (0, l.jsx)(e6, { ...s })
            : (0, l.jsx)(ip.A, { ...s });
}
