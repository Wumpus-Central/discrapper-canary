(s.r(i), s.d(i, { default: () => iS }));
var l = s(477900),
    n = s(582128),
    t = s(234e3),
    r = s(561243),
    d = s(287809),
    a = s(207803),
    c = s(958805),
    o = s(215530),
    u = s(935462),
    A = s(707554),
    h = s(140735),
    x = s(231723),
    j = s(136969),
    I = s(793574),
    m = s(688810),
    g = s(915089),
    p = s(397562),
    f = s(562153),
    N = s(183555),
    v = s(527212),
    E = s(722868),
    y = s(716804),
    S = s(718019),
    C = s(56810),
    O = s(915614),
    T = s(559506),
    P = s(946356),
    b = s(465829),
    L = s(570314),
    D = s(630891),
    R = s(571077),
    _ = s(587168),
    U = s(982985),
    k = s(804329),
    M = s(305385),
    F = s(855986),
    G = s(761508),
    B = s(834730),
    V = s(351906),
    z = s(534514),
    K = s(95362),
    w = s(534890),
    H = s(687966),
    W = s(177953),
    Y = s(152249),
    J = s(851767),
    X = s(792996),
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
                    (0, l.jsx)(z.D, { variant: "body-xs/semibold", children: s }),
                    (0, l.jsx)(B.E, { variant: "body-sm/normal", children: n }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { user: i } = e,
        s = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.application),
        { hasMessageContent: n, hasGuildPresences: t, hasGuildMembers: r } = (0, Y.Z)(s);
    return (0, l.jsxs)(K.Ip, {
        fade: !0,
        className: Q.XG,
        children: [
            n &&
                (0, l.jsx)(Z, {
                    icon: w.ChatIcon,
                    title: X.intl.string(X.t["7Tmhfu"]),
                    description: X.intl.string(X.t.eu5x7z),
                }),
            t &&
                (0, l.jsx)(Z, {
                    icon: H.GameControllerIcon,
                    title: X.intl.string(X.t.awYSsM),
                    description: X.intl.string(X.t.TpsXoC),
                }),
            r &&
                (0, l.jsx)(Z, {
                    icon: W.GroupIcon,
                    title: X.intl.string(X.t.WuKeSJ),
                    description: X.intl.string(X.t.wOBmtV),
                }),
            (0, l.jsx)(B.E, {
                variant: "body-xs/normal",
                children: X.intl.format(X.t.b6nqk0, {
                    helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975",
                }),
            }),
        ],
    });
}
var $ = s(734057),
    ee = s(309010),
    ei = s(612770),
    es = s(514042),
    el = s(194261),
    en = s(9578),
    et = s(900179),
    er = s(125369);
function ed(e) {
    let { termsOfServiceUrl: i, privacyPolicyUrl: s } = e;
    return null == i && null == s
        ? null
        : (0, l.jsx)(et.A, {
              heading: X.intl.string(X.t.l6DP2n),
              children: (0, l.jsxs)("div", {
                  className: er.p_,
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
        className: er.SF,
        useDefaultUnderlineStyles: !1,
        trusted: !1,
        children: [
            (0, l.jsx)(i, { className: er.wP, color: "currentColor", width: 20, height: 20, size: "custom" }),
            (0, l.jsx)(B.E, { variant: "body-sm/medium", color: "text-default", selectable: !0, children: n }),
        ],
    });
}
var ec = s(501925),
    eo = s(743987),
    eu = s(503026),
    eA = s(826745),
    eh = s(629403),
    ex = s(612630),
    ej = s(652215),
    eI = s(650583),
    em = s(759847);
function eg(e) {
    let { autoFocus: i = !1, className: s, userId: t, onUpdate: r } = e,
        d = (0, F.bG)([V.A], () => V.A.hidePersonalInformation),
        { loading: a, note: c } = (0, ex.A)(t),
        o = n.useRef(null);
    return (n.useEffect(() => {
        if (!i || d) return;
        let e = o.current;
        e?.selectionStart != null && (e.focus(), e.setSelection(e.value.length, e.value.length));
    }, [i, d]),
    d)
        ? null
        : (0, l.jsx)("div", {
              className: s,
              children: (0, l.jsx)(eA.y, {
                  ref: o,
                  className: em.P,
                  disabled: a,
                  placeholder: a ? X.intl.string(X.t["WLKx/9"]) : X.intl.string(X.t.VBhOe2),
                  "aria-label": X.intl.string(X.t.PbMNh2),
                  onBlur: function (e) {
                      let i = e.currentTarget.value;
                      (c ?? "") !== i && (r?.(), eh.A.updateNote(t, i));
                  },
                  onKeyPress: function (e) {
                      e.key === eI.dh.ENTER
                          ? e.shiftKey
                              ? (e.currentTarget.value.match(/\n/g) ?? []).length >= 5 && e.preventDefault()
                              : (e.preventDefault(), e.currentTarget.blur())
                          : e.key === eI.dh.SPACE && e.stopPropagation();
                  },
                  defaultValue: c ?? void 0,
                  maxLength: 256,
              }),
          });
}
var ep = s(518477),
    ef = s(422317);
function eN(e) {
    let { userId: i } = e,
        s = (0, y.g)(),
        { trackUserProfileAction: n } = (0, N.NJ)();
    return (0, l.jsx)(et.A, {
        heading: X.intl.string(X.t["mQKv+v"]),
        scrollTargetId: ep.bk.NOTE,
        children: (0, l.jsx)(eg, {
            userId: i,
            className: ef.N,
            autoFocus: s === ep.bk.NOTE,
            onUpdate: () => n({ action: "SET_NOTE" }),
        }),
    });
}
var ev = s(627757);
function eE(e) {
    let { user: i, displayProfile: s, guildId: n, onClose: t } = e,
        r = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.application),
        d = (0, F.bG)([$.A, ee.Ay], () => $.A.getChannel(ee.Ay.getChannelId()));
    return (0, l.jsxs)(K.Ip, {
        fade: !0,
        className: ev.XG,
        children: [
            (0, l.jsx)(ec.E, { userBio: s?.bio, setLineClamp: !1 }),
            r?.popularApplicationCommandIds != null &&
                null != d &&
                (0, l.jsx)(ei.A, {
                    applicationId: r.id,
                    commandIds: r.popularApplicationCommandIds,
                    channel: d,
                    guildId: n,
                    onClick: t,
                }),
            (0, l.jsx)(ed, { termsOfServiceUrl: r?.termsOfServiceUrl, privacyPolicyUrl: r?.privacyPolicyUrl }),
            s?.guildId != null && (0, l.jsx)(eu.A, { userId: i.id, guildId: s.guildId }),
            (0, l.jsx)(et.A, {
                heading: X.intl.string(X.t["A//N4k"]),
                children: (0, l.jsx)(eo.A, { userId: i.id, guildId: n, tooltipDelay: 300 }),
            }),
            (0, l.jsx)(eN, { userId: i.id }),
        ],
    });
}
var ey = s(289873),
    eS = s(28863),
    eC = s(517164),
    eO = s(290863),
    eT = s(894768),
    eP = s(975571),
    eb = s(146655),
    eL = s(489379),
    eD = s(960549),
    eR = s(637865),
    e_ = s(842241),
    eU = s(287746),
    ek = s(633756),
    eM = s(813195);
function eF(e) {
    let { user: i, currentUser: s, guildId: n, onClose: t } = e,
        { live: r, recent: d, stream: a } = (0, eb.A)(i.id),
        { voiceChannel: c, voiceActivity: o } = (0, eL.A)({ userId: i.id, guildId: n }),
        u = (0, F.bG)([eC.A], () => eC.A.isFetchingUserOutbox(i.id)),
        A = i.id === s.id,
        h = (0, F.bG)([eT.A, eO.A], () => {
            let e = A ? eT.A.getStatus() : eO.A.getStatus(i.id);
            return e === ej.clD.OFFLINE || e === ej.clD.INVISIBLE;
        }),
        x = (0, F.bG)([J.A], () => J.A.getUserProfile(i.id)?.private === !0),
        j = r.length > 0 || null != a,
        I = !x && null == a && null == o && null != c,
        m = !h && (j || I),
        g = d.length > 0;
    return m || g || !u
        ? (0, l.jsxs)(K.Ip, {
              className: ek.XG,
              fade: !0,
              children: [
                  m
                      ? (0, l.jsx)(et.A, {
                            heading: X.intl.string(X.t.J6STd9),
                            hideHeading: !0,
                            children: (0, l.jsxs)("ul", {
                                className: ek.Ci,
                                children: [
                                    null != a &&
                                        (0, l.jsx)("li", {
                                            children: (0, l.jsx)(e_.A, {
                                                user: i,
                                                currentUser: s,
                                                stream: a,
                                                onClose: t,
                                            }),
                                        }),
                                    r.map((e, n) =>
                                        (0, l.jsx)(
                                            "li",
                                            {
                                                children: (0, l.jsx)(eD.A, {
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
                                            children: (0, l.jsx)(eU.A, {
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
                  g
                      ? (0, l.jsx)(et.A, {
                            heading: X.intl.string(X.t.M0zgnT),
                            introText: A
                                ? X.intl.format(X.t["4bk9Ak"], {
                                      learnMoreHook: (e, i) =>
                                          (0, l.jsx)(
                                              eS.Anchor,
                                              {
                                                  href: eP.A.getArticleURL(ej.MVz.ACTIVITY_STATUS_SETTINGS),
                                                  children: e,
                                              },
                                              i,
                                          ),
                                  })
                                : void 0,
                            scrollTargetId: ep.bk.RECENT_ACTIVITY,
                            children: (0, l.jsx)("ul", {
                                className: ek.Ci,
                                children: d.map((e) =>
                                    (0, l.jsx)(
                                        "li",
                                        { children: (0, l.jsx)(eR.A, { user: i, entry: e, onClose: t }) },
                                        e.id,
                                    ),
                                ),
                            }),
                        })
                      : null,
              ],
          })
        : (0, l.jsx)("div", { className: eM.Ie, children: (0, l.jsx)(ey.y, {}) });
}
var eG = s(695366),
    eB = s(821269),
    eV = s(433380),
    ez = s(773669),
    eK = s(967198),
    ew = s(346713),
    eH = s(484509),
    eW = s(46937),
    eY = s(361311);
function eJ(e) {
    let { user: i, displayProfile: s, onClose: n } = e,
        { trackUserProfileAction: t } = (0, N.NJ)(),
        r = (0, F.bG)([eK.A], () => eK.A.getGuildId()),
        d = (0, eB.q)({ userId: i.id }),
        a = (0, F.bG)([V.A], () => V.A.hidePersonalInformation),
        c = (0, F.bG)([ez.default], () => ez.default.locale),
        o = (0, eH.A)(i.id),
        u = (0, ew.A)(i.id);
    return (0, l.jsxs)(K.Ip, {
        fade: !0,
        className: ev.XG,
        children: [
            s?.bio != null && s?.bio !== "" && !a && (0, l.jsx)(ec.A, { userBio: s.bio, setLineClamp: !1 }),
            s?.guildId != null && (0, l.jsx)(eu.A, { userId: i.id, guildId: s.guildId }),
            i.isProvisional &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t.Iyka0U),
                    headingIcon: eG.CircleErrorIcon,
                    children: (0, l.jsx)(eV.T, { userId: i.id }),
                }),
            d.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t["Uv/eTx"]),
                    children: (0, l.jsx)(eY.A, { applicationIds: d }),
                }),
            (0, l.jsx)(et.A, {
                heading: X.intl.string(X.t.a6XYD9),
                children: (0, l.jsx)(eo.A, { userId: i.id, guildId: s?.guildId, tooltipDelay: 300 }),
            }),
            o.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t["3fe7U5"]),
                    scrollTargetId: ep.bk.CONNECTIONS,
                    children: (0, l.jsx)(eW.Ay, { connectedAccounts: o, className: ev.oQ, userId: i.id, locale: c }),
                }),
            u.length > 0 &&
                (0, l.jsx)(et.A, {
                    heading: X.intl.string(X.t.PHjkRE),
                    children: u.map((e) =>
                        (0, l.jsx)(
                            eW.Wc,
                            {
                                className: ev.MI,
                                applicationRoleConnection: e,
                                locale: c,
                                onApplicationClicked: () => {
                                    (t({ action: "PRESS_APP_CONNECTION" }), n());
                                },
                                selectedGuildId: r ?? void 0,
                            },
                            e.application.id,
                        ),
                    ),
                }),
            (0, l.jsx)(eN, { userId: i.id }),
        ],
    });
}
var eX = s(163126),
    eQ = s(913453),
    eZ = s(229187),
    eq = s(100663),
    e$ = s(503062);
function e0(e) {
    let { user: i, guildId: s, channelId: t, onClose: r } = e,
        { mutualFriends: d } = (0, eQ.A)(i),
        { analyticsLocations: a } = (0, m.Ay)(),
        { context: c, trackUserProfileAction: o } = (0, N.NJ)(),
        u = (0, eX.A)();
    return (
        n.useEffect(() => {
            (0, eZ.A)(i.id, u);
        }, [i.id, u]),
        (0, l.jsx)(K.Ip, {
            className: eM.DK,
            fade: !0,
            children:
                null == d
                    ? (0, l.jsx)("div", { className: eM.Ie, children: (0, l.jsx)(ey.y, {}) })
                    : 0 === d.length
                      ? (0, l.jsxs)("div", {
                            className: eM.Ie,
                            children: [
                                (0, l.jsx)("div", { className: eM.on }),
                                (0, l.jsx)("div", { className: eM.BI, children: X.intl.string(X.t["/5p4gx"]) }),
                            ],
                        })
                      : d.map((e) => {
                            let { key: i, user: n, status: d } = e;
                            return (0, l.jsx)(
                                e$.A,
                                {
                                    user: n,
                                    status: d,
                                    guildId: s,
                                    channelId: t,
                                    onSelect: () => {
                                        var e;
                                        (r?.(),
                                            o({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (e = n.id),
                                            (0, eq.openUserProfileModal)({
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
var e5 = s(398590),
    e7 = s(345942),
    e3 = s(51943);
function e1(e) {
    let { user: i, onClose: s } = e,
        { trackUserProfileAction: n } = (0, N.NJ)(),
        { mutualGuilds: t, isFetching: r } = (0, eQ.A)(i);
    return (0, l.jsx)(K.Ip, {
        className: eM.DK,
        fade: !0,
        children:
            null == t && r
                ? (0, l.jsx)("div", { className: eM.Ie, children: (0, l.jsx)(ey.y, {}) })
                : (null != t || r) && t?.length !== 0
                  ? t?.map((e) => {
                        let { guild: t, nick: r } = e;
                        return (0, l.jsx)(
                            e3.A,
                            {
                                user: i,
                                guild: t,
                                nick: r,
                                onSelect: () => {
                                    var e;
                                    (n({ action: "PRESS_MUTUAL_GUILD" }), (e = t.id), (0, e7.u)(e), s(), (0, e5.jH)());
                                },
                            },
                            t.id,
                        );
                    })
                  : (0, l.jsxs)("div", {
                        className: eM.Ie,
                        children: [
                            (0, l.jsx)("div", { className: eM.vC }),
                            (0, l.jsx)("div", { className: eM.BI, children: X.intl.string(X.t.zjVh8h) }),
                        ],
                    }),
    });
}
var e6 = s(717877);
function e2(e) {
    let { section: i, user: s, currentUser: n, displayProfile: t, guildId: r, channelId: d, onClose: a } = e;
    return i === ep.RP.ACTIVITY
        ? (0, l.jsx)(eF, { user: s, currentUser: n, guildId: r, onClose: a })
        : i === ep.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(e0, { user: s, guildId: r, channelId: d, onClose: a })
          : i === ep.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(e1, { user: s, onClose: a })
            : i === ep.RP.BOT_DATA_ACCESS
              ? (0, l.jsx)(q, { user: s })
              : i === ep.RP.BOT_INFO
                ? (0, l.jsx)(eE, { user: s, displayProfile: t, guildId: r, onClose: a })
                : (0, l.jsx)(eJ, { user: s, displayProfile: t, onClose: a });
}
function e9(e) {
    let {
            user: i,
            currentUser: s,
            displayProfile: t,
            guildId: r,
            items: d,
            initialSection: a = ep.RP.USER_INFO,
            onClose: c,
        } = e,
        { trackUserProfileAction: o } = (0, N.NJ)(),
        u = (0, F.bG)([V.A], () => V.A.hidePersonalInformation),
        [A, h] = n.useState(
            () =>
                d.find((e) => {
                    let { section: i } = e;
                    return i === a;
                })?.section ?? d[0]?.section,
        );
    n.useEffect(() => {
        null == d.find((e) => e.section === A) && h(d[0].section);
    }, [d, A]);
    let x = n.useCallback(
        (e) => {
            (o({ action: "PRESS_SECTION", section: e }), h(e));
        },
        [o],
    );
    return u
        ? (0, l.jsx)("div", {
              className: e6.kL,
              children: (0, l.jsxs)("div", {
                  className: eM.Ie,
                  children: [
                      (0, l.jsx)("div", { className: eM.hB }),
                      (0, l.jsx)("div", { className: eM.BI, children: X.intl.string(X.t.Br1ls3) }),
                  ],
              }),
          })
        : (0, l.jsxs)("div", {
              className: e6.kL,
              children: [
                  (0, l.jsx)(G.V, {
                      className: e6.$H,
                      type: "top",
                      selectedItem: A,
                      onItemSelect: x,
                      children: d.map((e) => {
                          let { section: i, text: s } = e;
                          return (0, l.jsx)(
                              G.V.Item,
                              {
                                  className: e6.YU,
                                  id: i,
                                  "aria-label": s,
                                  children: (0, l.jsx)(B.E, { variant: "body-sm/normal", children: s }),
                              },
                              i,
                          );
                      }),
                  }),
                  (0, l.jsx)(e2, {
                      items: d,
                      section: A,
                      user: i,
                      currentUser: s,
                      displayProfile: t,
                      guildId: r,
                      onClose: c,
                  }),
              ],
          });
}
var e8 = s(186272),
    e4 = s(996988),
    ie = s(207634),
    ii = s(174217);
function is(e) {
    let {
            user: i,
            currentUser: s,
            guildId: t,
            originGuildId: r,
            channelId: d,
            messageId: a,
            roleId: c,
            sessionId: o,
            initialTabSection: F,
            initialScrollTarget: G,
            transitionState: B,
            openedAt: V,
            onClose: z,
            sourceAnalyticsLocations: K = [],
        } = e,
        w = t === ej.ME ? void 0 : t,
        H = (0, v.Ay)(i.id, w),
        W = f.Ay.getName(w, d, i),
        Y = H?.guildId ?? w,
        J = n.useCallback(() => {
            (0, M.A)({ user: i, guildId: Y, alt: W });
        }, [W, Y, i]),
        Q = (0, g.GV)(),
        { analyticsLocations: Z } = (0, m.Ay)([...K, I.A.USER_PROFILE_MODAL]),
        q = (0, N.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: o,
            guildId: w,
            channelId: d,
            messageId: a,
            roleId: c,
        });
    (0, p.A)(Z, H, ep.R7.MODAL);
    let $ = (function (e) {
            let { mutualGuilds: i } = (0, eQ.A)(e),
                s = i?.length;
            return [
                { section: ep.RP.BOT_INFO, text: X.intl.string(X.t.ZzAR2Y) },
                { section: ep.RP.MUTUAL_GUILDS, text: (0, e8.A)(s) },
                { section: ep.RP.BOT_DATA_ACCESS, text: X.intl.string(X.t.WstFb0) },
            ];
        })(i),
        ee = (0, E.A)({ user: i, guildId: r, channelId: d, displayProfile: H, onClose: z });
    return (0, l.jsx)(m.f5, {
        value: Z,
        children: (0, l.jsx)(N.of, {
            value: q,
            openedAt: V,
            fetchStartedAt: H?.fetchStartedAt,
            fetchEndedAt: H?.fetchEndedAt,
            isLoaded: H?.isLoaded,
            children: (0, l.jsx)(y.N, {
                value: G,
                children: (0, l.jsx)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: ii.zr,
                    hideShadow: !0,
                    "aria-labelledby": Q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(A.F, {
                        component: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(A.H, { id: Q, children: X.intl.format(X.t.KRe1Fk, { name: W }) }),
                        }),
                        children: (0, l.jsxs)(P.A, {
                            user: i,
                            displayProfile: H,
                            themeType: e4.d.MODAL,
                            children: [
                                (0, l.jsx)(_.A, {
                                    children: (0, l.jsx)(D.A, { user: i, guildId: w, viewProfileItem: ee }),
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(O.A, { user: i, displayProfile: H, themeType: e4.d.MODAL }),
                                        (0, l.jsxs)("div", {
                                            className: ii.El,
                                            children: [
                                                (0, l.jsx)(S.A, {
                                                    user: i,
                                                    displayProfile: H,
                                                    guildId: w,
                                                    channelId: d,
                                                    avatarSize: ie.T[e4.d.MODAL].avatarSize,
                                                    onOpenAvatar: J,
                                                }),
                                                (0, l.jsx)(k.A, {
                                                    user: i,
                                                    guildId: w,
                                                    channelId: d,
                                                    themeType: e4.d.MODAL,
                                                    hasEntered: B === x.ip.ENTERED,
                                                    onCloseProfile: z,
                                                    disableToolbar: !0,
                                                }),
                                                (0, l.jsxs)("div", {
                                                    className: ii.Pz,
                                                    children: [
                                                        (0, l.jsx)("div", {
                                                            className: ii.jS,
                                                            children: (0, l.jsx)(U.e, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: j.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)("div", {
                                                            className: ii.pg,
                                                            children: (0, l.jsx)(U.l, {
                                                                variant: "secondary",
                                                                userId: i.id,
                                                                onClose: j.A.popAll,
                                                            }),
                                                        }),
                                                        (0, l.jsx)(R.A, { user: i, guildId: w }),
                                                        (0, l.jsx)(L.A, { user: i }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(T.A, { userId: i.id, className: ii.Fd }),
                                (0, l.jsxs)("div", {
                                    className: ii.rf,
                                    children: [
                                        (0, l.jsx)(b.Ay, {
                                            className: ii.eF,
                                            user: i,
                                            guildId: w,
                                            displayName: W,
                                            displayNameSize: "lg",
                                            pronouns: H?.pronouns,
                                            trailing: (0, l.jsx)(C.A, {
                                                displayProfile: H,
                                                themeType: e4.d.MODAL,
                                                onClose: z,
                                            }),
                                        }),
                                        (0, l.jsx)(e9, {
                                            user: i,
                                            currentUser: s,
                                            displayProfile: H,
                                            guildId: w,
                                            items: $,
                                            initialSection: F ?? ep.RP.BOT_INFO,
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
var il = s(971217),
    it = s(713517),
    ir = s(35241);
function id(e) {
    let {
            user: i,
            guildId: s,
            channelId: t,
            messageId: r,
            roleId: d,
            sessionId: a,
            transitionState: c,
            openedAt: o,
            onClose: x,
            sourceAnalyticsLocations: j = [],
        } = e,
        E = s === ej.ME ? void 0 : s,
        y = (0, v.Ay)(i.id, E),
        T = f.Ay.getName(E, t, i),
        L = y?.guildId ?? E,
        D = n.useCallback(() => {
            (0, M.A)({ user: i, guildId: L, alt: T });
        }, [T, L, i]),
        R = (0, g.GV)(),
        { analyticsLocations: U } = (0, m.Ay)([...j, I.A.USER_PROFILE_MODAL]),
        k = (0, N.pb)({
            layout: "MODAL",
            userId: i.id,
            sourceSessionId: a,
            guildId: E,
            channelId: t,
            messageId: r,
            roleId: d,
        });
    (0, p.A)(U, y, ep.R7.MODAL);
    let F = n.useRef(null),
        V = (0, it.M)(F);
    return (0, l.jsx)(m.f5, {
        value: U,
        children: (0, l.jsx)(N.of, {
            value: k,
            openedAt: o,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded,
            children: (0, l.jsxs)(u.EO, {
                "data-migration-pending": !0,
                transitionState: c,
                className: ii.zr,
                hideShadow: !0,
                "aria-labelledby": R,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(A.F, {
                        component: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(A.H, { id: R, children: X.intl.format(X.t.KRe1Fk, { name: T }) }),
                        }),
                        children: (0, l.jsxs)(P.A, {
                            user: i,
                            displayProfile: y,
                            themeType: e4.d.MODAL,
                            ref: y?.profileEffect != null ? F : void 0,
                            children: [
                                (0, l.jsx)(_.A, { children: (0, l.jsx)(ir.A, { user: i }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(O.A, { user: i, displayProfile: y, themeType: e4.d.MODAL }),
                                        (0, l.jsx)("div", {
                                            className: ii.El,
                                            children: (0, l.jsx)(S.A, {
                                                user: i,
                                                displayProfile: y,
                                                guildId: E,
                                                channelId: t,
                                                avatarSize: ie.T[e4.d.MODAL].avatarSize,
                                                onOpenAvatar: D,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: ii.rf,
                                    children: [
                                        (0, l.jsx)(b.Ay, {
                                            className: ii.eF,
                                            user: i,
                                            guildId: E,
                                            displayName: T,
                                            displayNameSize: "lg",
                                            pronouns: y?.pronouns,
                                            trailing: (0, l.jsx)(C.A, {
                                                displayProfile: y,
                                                themeType: e4.d.MODAL,
                                                onClose: x,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: e6.kL,
                                            children: [
                                                (0, l.jsx)(G.V, {
                                                    className: e6.$H,
                                                    type: "top",
                                                    selectedItem: ep.RP.BOT_INFO,
                                                    onItemSelect: ej.tEg,
                                                    children: (0, l.jsx)(
                                                        G.V.Item,
                                                        {
                                                            className: e6.YU,
                                                            id: ep.RP.BOT_INFO,
                                                            "aria-label": X.intl.string(X.t.ZzAR2Y),
                                                            children: (0, l.jsx)(B.E, {
                                                                variant: "body-sm/normal",
                                                                children: X.intl.string(X.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        ep.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(K.Ip, {
                                                    fade: !0,
                                                    className: ev.XG,
                                                    children: [
                                                        (0, l.jsx)(ec.E, {
                                                            userId: i.id,
                                                            userBio: y?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(et.A, {
                                                            heading: X.intl.string(X.t["A//N4k"]),
                                                            children: (0, l.jsx)(eo.A, {
                                                                userId: i.id,
                                                                guildId: E,
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
                    y?.profileEffect != null && (0, l.jsx)(il.A, { skuId: y?.profileEffect?.skuId, isHovering: V }),
                ],
            }),
        }),
    });
}
var ia = s(503698),
    ic = s.n(ia),
    io = s(628284),
    iu = s(646514),
    iA = s(331322),
    ih = s(632738),
    ix = s(994500),
    ij = s(741534),
    iI = s(249790),
    im = s(254828),
    ig = s(783123),
    ip = s(463156),
    iN = s(446039),
    iv = s(968475);
function iE(e) {
    let {
            user: i,
            guildId: s,
            channelId: n,
            messageId: t,
            roleId: r,
            transitionState: d,
            openedAt: a,
            onClose: c,
            onHide: o,
            sourceAnalyticsLocations: A = [],
        } = e,
        h = s === ej.ME ? void 0 : s,
        x = (0, F.bG)([ix.A], () => ix.A.isBlocked(i.id)),
        { analyticsLocations: j } = (0, m.Ay)([...A, x ? I.A.BLOCKED_PROFILE_MODAL : I.A.IGNORED_PROFILE_MODAL]),
        g = (0, N.pb)({ layout: "MODAL_V2", userId: i.id, guildId: h, channelId: n, messageId: t, roleId: r }),
        E = [
            { icon: io.CircleCheckIcon, description: X.intl.string(X.t.kcuWva) },
            { icon: io.CircleCheckIcon, description: X.intl.string(x ? X.t.QxrDY1 : X.t.W6fjkS) },
        ],
        y = (0, v.Ay)(i.id, h);
    (0, p.A)(j, y, ep.R7.MODAL_V2);
    let S = f.Ay.getName(y?.guildId, n, i),
        C = X.intl.formatToPlainString(X.t.KRe1Fk, { name: S });
    return (0, l.jsx)(m.f5, {
        value: j,
        children: (0, l.jsx)(N.of, {
            value: g,
            openedAt: a,
            fetchStartedAt: y?.fetchStartedAt,
            fetchEndedAt: y?.fetchEndedAt,
            isLoaded: y?.isLoaded,
            children: (0, l.jsx)(u.EO, {
                "data-migration-pending": !0,
                transitionState: d,
                className: iv.zr,
                "aria-label": C,
                parentComponent: "RestrictedUserProfileModalV2",
                hideShadow: !0,
                children: (0, l.jsxs)(P.A, {
                    className: ic()(iv.A7, iN.BK),
                    user: i,
                    displayProfile: y,
                    themeType: e4.d.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: iv.Oo, children: (0, l.jsx)(ip.A, { onClose: c }) }),
                        (0, l.jsx)("div", { className: iN.Tp }),
                        (0, l.jsxs)("div", {
                            className: iN.Qs,
                            children: [
                                (0, l.jsx)(iI.A, { user: i, guildId: h }),
                                (0, l.jsxs)("div", {
                                    className: iN.FS,
                                    children: [
                                        (0, l.jsx)(z.D, {
                                            variant: "heading-xl/semibold",
                                            color: "text-default",
                                            children: X.intl.string(X.t.b33pLD),
                                        }),
                                        (0, l.jsx)(B.E, {
                                            variant: "body-md/medium",
                                            color: "text-default",
                                            children: X.intl.format(x ? X.t.T7QiLn : X.t.MnEowy, { username: S }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: iN.vb,
                                    children: E.map((e, i) => {
                                        let { icon: s, description: n } = e;
                                        return (0, l.jsx)(
                                            ih.PQ,
                                            {
                                                icon: s,
                                                title: n,
                                                titleVariant: "body-md/normal",
                                                color: iu.A.colors.TEXT_DEFAULT.css,
                                            },
                                            i,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(iA.B, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(ig.A, {
                                            size: "md",
                                            isBlocked: x,
                                            onClick: () => {
                                                (o(),
                                                    (0, ij.Wn)({
                                                        action: x ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...g,
                                                    }));
                                            },
                                        }),
                                        (0, l.jsx)(im.A, {
                                            userId: i.id,
                                            onClick: () => {
                                                (o(),
                                                    (0, ij.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: j,
                                                        ...g,
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
var iy = s(784560);
function iS(e) {
    let { hideRestrictedProfile: i, ...s } = e,
        { user: u } = s,
        [A, h] = (0, o.A)(u.id);
    return (n.useEffect(
        () => () => {
            u.id === d.default.getCurrentUser()?.id &&
                (c.A.clearPendingWidgets(), (0, t.Jp)(), (0, a.XQ)(), (0, a.sd)(), (0, r.J)());
        },
        [u.id],
    ),
    A && !i)
        ? (0, l.jsx)(iE, { onHide: h, ...s })
        : u.isNonUserBot()
          ? (0, l.jsx)(id, { ...s })
          : u.bot
            ? (0, l.jsx)(is, { ...s })
            : (0, l.jsx)(iy.A, { ...s });
}
