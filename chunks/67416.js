n.d(t, { P0: () => eG, em: () => eU }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(834730),
    a = n(138175),
    o = n(192308),
    d = n(456060),
    c = n(793574),
    u = n(688810),
    m = n(572211),
    h = n(354287),
    g = n(112150),
    p = n(952818),
    A = n(560595),
    x = n(616356),
    f = n(760751),
    E = n(763827),
    I = n(486020),
    C = n(723702),
    v = n(935208),
    _ = n(820672),
    j = n(768349),
    N = n(783198),
    T = n(375708);
function y(e) {
    let { currentUserId: t, message: l, application: r, channel: a, analyticsLocations: y, onView: S } = e,
        { staticBannerSrc: b, videoBannerSrc: L, bannerAspectRatio: R } = (0, g.f)(r),
        k = I.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
        M = (0, s.bG)([p.Ay, f.A], () =>
            p.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === r.id) return !0;
                let n = f.A.getGameByApplication(r);
                return null != n && t === n.id;
            }),
        ),
        P = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        D = (0, s.bG)([E.A], () => E.A.getChannelId()),
        w = v.default.extractTimestamp(l.id) + _.M < Date.now(),
        O = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, a, t) }),
        { analyticsLocations: U } = (0, u.Ay)(y, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = T.intl.string(N.default["5+172e"]),
        V = !1;
    return (
        w
            ? ((G = T.intl.string(N.default.u4QmWl)), (V = !0))
            : null != P
              ? ((G = T.intl.string(N.default.P0wwmM)), (V = !0))
              : D !== a.id
                ? ((G = T.intl.string(N.default.qRXats)), (V = !0))
                : null == M && ((G = T.intl.string(N.default["43zohO"])), (V = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(N.default.nAyuPp),
            title: r.name,
            staticBannerSrc: b,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: k ?? void 0,
            info: O,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: h.kY.STREAM,
                              disabled: V,
                              onClick: () => {
                                  null != M &&
                                      ((0, C.isWindows)()
                                          ? (0, A.A)(M.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("85426"),
                                                    n.e("76171"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("6809"),
                                                    n.e("44801"),
                                                    n.e("44727"),
                                                    n.e("59778"),
                                                    n.e("25241"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("76229"),
                                                    n.e("91782"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 477156));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: r.id,
                linkType: j.J.REQUEST_TO_STREAM,
                guildId: a.guild_id,
                channelId: a.id,
                messageId: l.id,
                onView: S,
                isDeadEnd: w,
            },
        })
    );
}
var S = n(666176),
    b = n(495544),
    L = n(629016),
    R = n(480595),
    k = n(290863),
    M = n(461213),
    P = n(287809),
    D = n(454292),
    w = n(850670),
    O = n(125017),
    U = n(104171),
    G = n(554146),
    V = n(43105),
    B = n(414499),
    H = n(116833),
    F = n(735991),
    Y = n(945810);
let z = (0, Y.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    W = new Set(["1443349464290168976", "1443350165678198935", "1443033465766281327"]),
    K = (0, Y.mj)({
        name: "2026-04-require-account-link-game-invite",
        kind: "user",
        defaultConfig: { requireAccountLink: !1, requireGameLaunch: !1 },
        variations: {
            0: { requireAccountLink: !1, requireGameLaunch: !1 },
            1: { requireAccountLink: !0, requireGameLaunch: !1 },
            2: { requireAccountLink: !1, requireGameLaunch: !0 },
            3: { requireAccountLink: !0, requireGameLaunch: !0 },
        },
    });
var J = n(359800),
    q = n(46225),
    Z = n(587895),
    X = n(574660),
    Q = n(379848),
    $ = n(409626),
    ee = n(692969),
    et = n(928550),
    en = n(232835),
    ei = n(970928),
    el = n(134861),
    es = n(528767),
    er = n(625248),
    ea = n(659051),
    eo = n(652215),
    ed = n(737393),
    ec = n(835517),
    eu = n(228366),
    em = n(635377);
let eh = new (n.n(em)())({ max: 500 });
class eg extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return eh.get(t);
    }
}
let ep = new eg(eu.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (eh.get(t) === n) return !1;
        eh.set(t, n);
    },
});
var eA = n(939249),
    ex = n(141628),
    ef = n(780907),
    eE = n(140651),
    eI = n(878831),
    eC = n(193018);
function ev(e) {
    let { applicationName: t, iconSrc: n, viewAction: l } = e,
        { primaryColor: s, secondaryColor: a } = (0, eE.A)(n),
        o = `linear-gradient(45deg, ${s}, ${a})`,
        d = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        c = null == l ? d : (0, i.jsx)(eA.D, { onClick: l, className: eC.Qi, children: d });
    return (0, i.jsxs)("div", {
        className: eC.Xy,
        style: { background: o },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eC.xn,
                children: T.intl.string(T.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eC.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eC.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eC.Cr,
                        children: [
                            c,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eC.Jl,
                                children: T.intl.string(T.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: o,
            header: c,
            currentUserId: u,
            launchableAppId: g,
            isEmbeddedApplication: p,
            tryWithGdnAction: A,
            staticBannerSrc: x,
            hideBanner: f = !1,
            onClickContent: E,
            iconSrc: I,
            onView: C,
            presenceActivity: v,
            analyticsLocations: _,
            showAuthButton: N,
            requireAccountLink: y,
            startAuthorization: S,
            accountLinkButtonRef: b,
            renderAccountLinkUpsell: L,
        } = e,
        R = (0, s.bG)([en.A], () => en.A.getMessages(o.id)),
        { actions: k, hasAccountLinkButton: M } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (y && null != g
                    ? ((e = [
                          {
                              label: T.intl.string(T.t.lw71Nf),
                              trackingArea: h.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  S({ analyticsLocations: _ });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != g
                      ? (e = [
                            {
                                label: T.intl.string(T.t["s+J8Dl"]),
                                trackingArea: h.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    ef.Ay.launch({ applicationId: g, embedded: p });
                                },
                            },
                        ])
                      : null != A && ((e = [A]), (i = !1)),
                e.length > 0)
            ) {
                var s, r;
                if (
                    ((s = t.id),
                    (r = n.id),
                    R.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === r &&
                            e.activity.type === eo.xL.JOIN &&
                            !(0, ea.A)(v, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                N &&
                    i &&
                    (e.push({
                        label: T.intl.string(T.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            S({ analyticsLocations: _ });
                        },
                        icon: ex.A,
                        iconButton: !0,
                        buttonRef: b,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [y, p, g, A, R, v, n.id, t.id, N, S, _, b]),
        P = k.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eI.A)(P, _);
    let D = k.length > 0,
        w = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eC.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, D),
                }),
            [t, a, o, u, D],
        );
    return 0 === k.length
        ? (0, i.jsx)(ev, { applicationName: a, iconSrc: I, viewAction: E })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: c,
                      title: a,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: E,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: w,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: {
                          id: n.id,
                          linkType: j.J.RICH_PRESENCE_INVITE,
                          onView: C,
                          referrerId: t.author.id,
                          guildId: o.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  M ? L() : null,
              ],
          });
}
var ej = n(773746),
    eN = n(49999);
function eT(e) {
    var t, n;
    let r,
        a,
        {
            analyticsLocations: o,
            application: c,
            channel: u,
            currentUserId: m,
            currentUserPresenceActivity: g,
            hideParty: p,
            hideBanner: A,
            message: x,
            onView: E,
            partyStatusElement: v,
            presenceActivity: _,
        } = e,
        j = (0, F.Ag)(c),
        { iconSrc: N, name: y } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, ei.uD)(t.id, e.activity?.icon_override) : null) ??
                    I.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(x, c),
        S =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [ep],
                        () =>
                            ((e) => {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = ep.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, ec.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, ei.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: r };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    l.useEffect(() => {
                        r !== a &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                eu.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: x.id, presenceActivity: _, application: c }) ?? void 0,
        { openGameProfileModal: b, launchableAppId: L } =
            ((t = c.id),
            (n = x.author.id),
            (r = (0, et.d)(t)),
            (a = (0, s.bG)([Z.A, f.A], () => {
                let e = Z.A.getApplication(t);
                return null != e ? f.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, ee.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: a?.id ?? void 0,
                    source: $.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        R = (0, ed.A)({ application: c, analyticsLocations: o }),
        k = l.useMemo(() => {
            if (null != R)
                return { label: T.intl.string(T.t["jaYS/h"]), icon: B.h, trackingArea: h.kY.CLOUD_PLAY, onClick: R };
        }, [R]),
        M = (0, X.F)(c),
        P = l.useMemo(() => (null != b ? b : null != M && j ? M : void 0), [j, b, M]),
        D = z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        w = K.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: O, hasAlreadyLinked: U, startAuthorization: Y } = (0, q.RD)(c),
        em = (0, J.z)(Y, U),
        eh = (0, s.bG)([el.A, es.A], () => !!el.A.isConnected(c.id) || null != (0, er.l)(_), [c, _]),
        eg = W.has(c.id) || (null != c.parentId && W.has(c.parentId)),
        eA = C.isPlatformEmbedded && !eg && w.requireAccountLink && O && !U,
        ex = C.isPlatformEmbedded && !eg && w.requireGameLaunch && !eh,
        ef = !(0, ea.A)(_, x, c.id),
        eE = (0, d.n$)(y, x.activity?.type, ef),
        eI = l.useRef(null),
        eC = (0, s.bG)([en.A], () => en.A.getMessages(u.id)),
        ev = () => {
            var e;
            let t = [];
            return (
                (e = x.id),
                !eC.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === eo.xL.JOIN, 25) &&
                    O &&
                    !U &&
                    D.enabled &&
                    t.push(G.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
                (0, i.jsx)(Q.Ay, {
                    contentTypes: t,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === G.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                            return (0, i.jsx)(V.A, {
                                graphic: {
                                    type: "dynamic",
                                    component: H.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                    props: { application: c },
                                },
                                title: T.intl.formatToPlainString(T.t["lo6H6+"], { gameName: c.name }),
                                body: T.intl.string(T.t.qYAzOp),
                                targetElementRef: eI,
                                caretConfig: { align: "start" },
                                shouldShow: !0,
                                gradientColor: "purple",
                                onRequestClose: () => n(eN.i.USER_DISMISS),
                            });
                    },
                })
            );
        };
    return ef
        ? (0, i.jsx)(e_, {
              message: x,
              application: c,
              applicationName: y,
              channel: u,
              header: eE,
              currentUserId: m,
              launchableAppId: L,
              isEmbeddedApplication: j,
              tryWithGdnAction: k,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: P,
              iconSrc: N,
              onView: E,
              presenceActivity: _,
              analyticsLocations: o,
              showAuthButton: O && !U && D.enabled,
              requireAccountLink: eA,
              startAuthorization: em,
              accountLinkButtonRef: eI,
              renderAccountLinkUpsell: ev,
          })
        : (0, i.jsx)(ej.A, {
              message: x,
              application: c,
              applicationName: y,
              channel: u,
              header: eE,
              currentUserId: m,
              launchableAppId: L,
              isEmbeddedApplication: j,
              tryWithGdnAction: k,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: P,
              iconSrc: N,
              onView: E,
              presenceActivity: _,
              currentUserPresenceActivity: g,
              hideParty: p,
              partyStatusElement: v,
              analyticsLocations: o,
              showAuthButton: O && !U && D.enabled,
              requireAccountLink: eA,
              requireGameLaunch: ex,
              canPromptAuth: O && !U,
              startAuthorization: em,
              accountLinkButtonRef: eI,
              renderAccountLinkUpsell: ev,
          });
}
var ey = n(172710);
function eS(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eC.h_,
                    color: "none",
                    lineClamp: 1,
                    children: T.intl.string(T.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(m.h, {
        header: s,
        title: t.name,
        iconSrc: S.HT.getWhiteIconURL(),
        info: c,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var eb = n(432017),
    eL = n(693879),
    eR = n(353411),
    ek = n(360469),
    eM = n(206589);
function eP(e) {
    var t;
    let {
            application: n,
            message: s,
            header: a,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: u,
            onClickContent: g,
            onView: p,
            guildId: A,
        } = e,
        x = (0, eM.w)(u, o),
        f = (0, eR.Gq)(o, s.author, "Invite Embed"),
        E = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? T.intl.string(T.t.VJlc0S),
                        trackingArea: h.kY.SYNC,
                        onClick: () => {
                            f.onClick();
                        },
                        disabled: f.disabled,
                        disabledReason: f.disabled ? f.tooltip : void 0,
                    }),
                e
            );
        }, [x, f]),
        I =
            null != o && null != o.details && null != o.state
                ? T.intl.formatToPlainString(T.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        C = o?.timestamps?.start ?? o?.created_at,
        v = l.useMemo(
            () =>
                null != C
                    ? (0, i.jsxs)("div", {
                          className: eC.Ym,
                          children: [
                              (0, i.jsx)(eb.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(eL.z, {
                                  entry: { start: C, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [C, o?.timestamps?.end],
        ),
        _ = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eC.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: eC.dS,
                            color: "none",
                            lineClamp: 1,
                            children: v,
                        }),
                        d ? null : c,
                    ],
                }),
            [v, d, c],
        );
    return (0, i.jsx)(m.h, {
        header: a,
        title: I,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, ei.uD)(t, o.assets.large_image, [ek.Ig, ek.Ig])) ?? void 0),
        info: _,
        actions: E,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eD(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: r,
            onView: a,
            partyStatusElement: o,
            presenceActivity: c,
            guildId: u,
        } = e,
        m = !(0, ea.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, ey.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(eS, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(eP, {
              application: t,
              message: r,
              header: h,
              presenceActivity: c,
              hideParty: s,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: a,
              guildId: u,
          });
}
var ew = n(272984);
function eO(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(U.mt);
    for (; u.length < l && u.length < 8; ) u.push(null);
    return (0, i.jsxs)("div", {
        className: eC.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(U.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: U.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function eU(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([L.A], () => (null == t || null == t.party ? [] : Array.from(L.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, O._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = P.default.getUser(e);
                    return null != t ? t : U.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eO, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function eG(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)([k.A], () => {
            if (null == r.application) return k.A.findActivity(r.author.id, (e) => e.type === eo.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    (0, w.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                    k.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, l, m]),
        g = (0, s.bG)([R.A, M.A], () => (0, D.A)(R.A, M.A, u.id), [u.id]),
        p = eU({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, ew.pH)(h?.party?.id) || u.id === S.HT.id
        ? (0, i.jsx)(eD, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === eo.xL.STREAM_REQUEST
          ? (0, i.jsx)(y, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
          : (0, i.jsx)(eT, {
                analyticsLocations: t,
                application: u,
                channel: l,
                currentUserId: m,
                currentUserPresenceActivity: g,
                hideParty: o,
                hideBanner: d,
                message: r,
                onView: c,
                partyStatusElement: p,
                presenceActivity: h,
            });
}
