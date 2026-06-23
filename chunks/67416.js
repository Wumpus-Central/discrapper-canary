n.d(t, { P0: () => ew, em: () => eG }), n(321073);
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
    E = n(760751),
    f = n(763827),
    I = n(486020),
    C = n(723702),
    v = n(935208),
    _ = n(820672),
    N = n(768349),
    j = n(783198),
    T = n(375708);
function y(e) {
    let { currentUserId: t, message: l, application: r, channel: a, analyticsLocations: y, onView: S } = e,
        { staticBannerSrc: b, videoBannerSrc: L, bannerAspectRatio: k } = (0, g.f)(r),
        R = I.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
        P = (0, s.bG)([p.Ay, E.A], () =>
            p.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === r.id) return !0;
                let n = E.A.getGameByApplication(r);
                return null != n && t === n.id;
            }),
        ),
        M = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        D = (0, s.bG)([f.A], () => f.A.getChannelId()),
        O = v.default.extractTimestamp(l.id) + _.M < Date.now(),
        U = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, a, t) }),
        { analyticsLocations: G } = (0, u.Ay)(y, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        w = T.intl.string(j.default["5+172e"]),
        B = !1;
    return (
        O
            ? ((w = T.intl.string(j.default.u4QmWl)), (B = !0))
            : null != M
              ? ((w = T.intl.string(j.default.P0wwmM)), (B = !0))
              : D !== a.id
                ? ((w = T.intl.string(j.default.qRXats)), (B = !0))
                : null == P && ((w = T.intl.string(j.default["43zohO"])), (B = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(j.default.nAyuPp),
            title: r.name,
            staticBannerSrc: b,
            videoBannerSrc: L,
            bannerAspectRatio: k,
            iconSrc: R ?? void 0,
            info: U,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: w,
                              trackingArea: h.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != P &&
                                      ((0, C.isWindows)()
                                          ? (0, A.A)(P.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("64379"),
                                                    n.e("85184"),
                                                    n.e("41686"),
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
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: G });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: r.id,
                linkType: N.J.REQUEST_TO_STREAM,
                guildId: a.guild_id,
                channelId: a.id,
                messageId: l.id,
                onView: S,
                isDeadEnd: O,
            },
        })
    );
}
var S = n(666176),
    b = n(495544),
    L = n(629016),
    k = n(480595),
    R = n(290863),
    P = n(461213),
    M = n(287809),
    D = n(454292),
    O = n(850670),
    U = n(125017),
    G = n(104171),
    w = n(554146),
    B = n(43105),
    V = n(414499),
    H = n(116833),
    F = n(735991),
    Y = n(945810);
let z = (0, Y.mj)({
        name: "2025-12-game-invite-account-linking-entry-point",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    K = new Set(["1443349464290168976", "1443350165678198935", "1443033465766281327"]),
    W = (0, Y.mj)({
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
    X = n(587895),
    Z = n(574660),
    $ = n(379848),
    Q = n(409626),
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
    eE = n(780907),
    ef = n(140651),
    eI = n(878831),
    eC = n(193018);
function ev(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, ef.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(eA.D, { onClick: l, className: eC.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: eC.Xy,
        style: { background: d },
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
                            m,
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
            hideBanner: E = !1,
            onClickContent: f,
            iconSrc: I,
            onView: C,
            presenceActivity: v,
            analyticsLocations: _,
            showAuthButton: j,
            requireAccountLink: y,
            startAuthorization: S,
            accountLinkButtonRef: b,
            renderAccountLinkUpsell: L,
        } = e,
        k = (0, s.bG)([en.A], () => en.A.getMessages(o.id)),
        { actions: R, hasAccountLinkButton: P } = l.useMemo(() => {
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
                                    eE.Ay.launch({ applicationId: g, embedded: p });
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
                    k.hasAnyAfter(
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
                j &&
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
        }, [y, p, g, A, k, v, n.id, t.id, j, S, _, b]),
        M = R.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eI.A)(M, _);
    let D = R.length > 0,
        O = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eC.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, D),
                }),
            [t, a, o, u, D],
        ),
        U = {
            id: n.id,
            linkType: N.J.RICH_PRESENCE_INVITE,
            onView: C,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: N.f.DEAD,
        };
    return 0 === R.length
        ? (0, i.jsx)(ev, { applicationName: a, iconSrc: I, viewAction: f, trackingConfig: U })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: c,
                      title: a,
                      staticBannerSrc: x,
                      hideBanner: E,
                      onClickBanner: f,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: O,
                      actions: R,
                      primaryActionFirst: !0,
                      onClickContent: f,
                      trackingConfig: U,
                  }),
                  P ? L() : null,
              ],
          });
}
var eN = n(773746),
    ej = n(49999);
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
            onView: f,
            partyStatusElement: v,
            presenceActivity: _,
        } = e,
        N = (0, F.Ag)(c),
        { iconSrc: j, name: y } = (function (e, t) {
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
                            (function (e) {
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
            (a = (0, s.bG)([X.A, E.A], () => {
                let e = X.A.getApplication(t);
                return null != e ? E.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, ee.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: a?.id ?? void 0,
                    source: Q.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        k = (0, ed.A)({ application: c, analyticsLocations: o }),
        R = l.useMemo(() => {
            if (null != k)
                return { label: T.intl.string(T.t["jaYS/h"]), icon: V.h, trackingArea: h.kY.CLOUD_PLAY, onClick: k };
        }, [k]),
        P = (0, Z.F)(c),
        M = l.useMemo(() => (null != b ? b : null != P && N ? P : void 0), [N, b, P]),
        D = z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        O = W.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: U, hasAlreadyLinked: G, startAuthorization: Y } = (0, q.RD)(c),
        em = (0, J.z)(Y, G),
        eh = (0, s.bG)([el.A, es.A], () => !!el.A.isConnected(c.id) || null != (0, er.l)(_), [c, _]),
        eg = K.has(c.id) || (null != c.parentId && K.has(c.parentId)),
        eA = C.isPlatformEmbedded && !eg && O.requireAccountLink && U && !G,
        ex = C.isPlatformEmbedded && !eg && O.requireGameLaunch && !eh,
        eE = !(0, ea.A)(_, x, c.id),
        ef = (0, d.n$)(y, x.activity?.type, eE),
        eI = l.useRef(null),
        eC = (0, s.bG)([en.A], () => en.A.getMessages(u.id));
    function ev() {
        var e;
        let t = [];
        return (
            (e = x.id),
            !eC.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === eo.xL.JOIN, 25) &&
                U &&
                !G &&
                D.enabled &&
                t.push(w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)($.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(B.A, {
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
                            onRequestClose: () => n(ej.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return eE
        ? (0, i.jsx)(e_, {
              message: x,
              application: c,
              applicationName: y,
              channel: u,
              header: ef,
              currentUserId: m,
              launchableAppId: L,
              isEmbeddedApplication: N,
              tryWithGdnAction: R,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: M,
              iconSrc: j,
              onView: f,
              presenceActivity: _,
              analyticsLocations: o,
              showAuthButton: U && !G && D.enabled,
              requireAccountLink: eA,
              startAuthorization: em,
              accountLinkButtonRef: eI,
              renderAccountLinkUpsell: ev,
          })
        : (0, i.jsx)(eN.A, {
              message: x,
              application: c,
              applicationName: y,
              channel: u,
              header: ef,
              currentUserId: m,
              launchableAppId: L,
              isEmbeddedApplication: N,
              tryWithGdnAction: R,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: M,
              iconSrc: j,
              onView: f,
              presenceActivity: _,
              currentUserPresenceActivity: g,
              hideParty: p,
              partyStatusElement: v,
              analyticsLocations: o,
              showAuthButton: U && !G && D.enabled,
              requireAccountLink: eA,
              requireGameLaunch: ex,
              canPromptAuth: U && !G,
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
            linkType: N.J.RICH_PRESENCE_INVITE,
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
    ek = n(353411),
    eR = n(360469),
    eP = n(206589);
function eM(e) {
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
        x = (0, eP.w)(u, o),
        E = (0, ek.Gq)(o, s.author, "Invite Embed"),
        f = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: E.label ?? T.intl.string(T.t.VJlc0S),
                        trackingArea: h.kY.SYNC,
                        onClick: () => {
                            E.onClick();
                        },
                        disabled: E.disabled,
                        disabledReason: E.disabled ? E.tooltip : void 0,
                    }),
                e
            );
        }, [x, E]),
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
                : (0, ei.uD)(t, o.assets.large_image, [eR.Ig, eR.Ig])) ?? void 0),
        info: _,
        actions: f,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: N.J.RICH_PRESENCE_INVITE,
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
        : (0, i.jsx)(eM, {
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
var eO = n(272984);
function eU(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(G.mt);
    for (; u.length < l && u.length < 8; ) u.push(null);
    return (0, i.jsxs)("div", {
        className: eC.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(G.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: G.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function eG(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([L.A], () => (null == t || null == t.party ? [] : Array.from(L.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, U._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : G.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eU, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function ew(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)([R.A], () => {
            if (null == r.application) return R.A.findActivity(r.author.id, (e) => e.type === eo.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    (0, O.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                    R.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, l, m]),
        g = (0, s.bG)([k.A, P.A], () => (0, D.A)(k.A, P.A, u.id), [u.id]),
        p = eG({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, eO.pH)(h?.party?.id) || u.id === S.HT.id
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
