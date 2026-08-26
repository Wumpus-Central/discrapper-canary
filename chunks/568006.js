n.d(t, { P0: () => eL, em: () => eR }), n(321073);
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(834730),
    r = n(138175),
    o = n(192308),
    c = n(456060),
    d = n(793574),
    u = n(688810),
    m = n(572211),
    h = n(354287),
    g = n(112150),
    p = n(952818),
    A = n(560595),
    x = n(616356),
    f = n(763827),
    E = n(486020),
    I = n(723702),
    C = n(935208),
    _ = n(820672),
    v = n(768349),
    N = n(292670),
    j = n(375708);
function T(e) {
    let { currentUserId: t, message: l, application: a, channel: r, analyticsLocations: T, onView: S } = e,
        { staticBannerSrc: y, videoBannerSrc: b, bannerAspectRatio: R } = (0, g.f)(a),
        L = E.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
        k = a.getCanonicalGameId(),
        M = (0, s.bG)(
            [p.Ay],
            () =>
                p.Ay.getVisibleRunningGames().find((e) => {
                    let { id: t } = e;
                    return t === a.id || (null != k && t === k);
                }),
            [a.id, k],
        ),
        O = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        P = (0, s.bG)([f.A], () => f.A.getChannelId()),
        D = C.default.extractTimestamp(l.id) + _.M < Date.now(),
        U = (0, i.jsx)(i.Fragment, { children: (0, c.Wf)(l, r, t) }),
        { analyticsLocations: G } = (0, u.Ay)(T, d.A.REQUEST_TO_STREAM_INVITE_EMBED),
        w = j.intl.string(N.default["5+172e"]),
        H = !1;
    return (
        D
            ? ((w = j.intl.string(N.default.u4QmWl)), (H = !0))
            : null != O
              ? ((w = j.intl.string(N.default.P0wwmM)), (H = !0))
              : P !== r.id
                ? ((w = j.intl.string(N.default.qRXats)), (H = !0))
                : null == M && ((w = j.intl.string(N.default["43zohO"])), (H = !0)),
        (0, i.jsx)(m.h, {
            header: j.intl.string(N.default.nAyuPp),
            title: a.name,
            staticBannerSrc: y,
            videoBannerSrc: b,
            bannerAspectRatio: R,
            iconSrc: L ?? void 0,
            info: U,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: w,
                              trackingArea: h.kY.STREAM,
                              disabled: H,
                              onClick: () => {
                                  null != M &&
                                      ((0, I.isWindows)()
                                          ? (0, A.A)(M.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("287116"),
                                                    n.e("473782"),
                                                    n.e("553464"),
                                                    n.e("130662"),
                                                    n.e("498552"),
                                                    n.e("338601"),
                                                    n.e("236946"),
                                                    n.e("944801"),
                                                    n.e("944727"),
                                                    n.e("59778"),
                                                    n.e("725241"),
                                                    n.e("308421"),
                                                    n.e("531296"),
                                                    n.e("476229"),
                                                    n.e("191782"),
                                                    n.e("190088"),
                                                ]).then(n.bind(n, 477156));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: G });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: a.id,
                linkType: v.J.REQUEST_TO_STREAM,
                guildId: r.guild_id,
                channelId: r.id,
                messageId: l.id,
                onView: S,
                isDeadEnd: D,
            },
        })
    );
}
var S = n(666176),
    y = n(280450),
    b = n(629016),
    R = n(480595),
    L = n(290863),
    k = n(461213),
    M = n(287809),
    O = n(454292),
    P = n(850670),
    D = n(125017),
    U = n(104171),
    G = n(554146),
    w = n(43105),
    H = n(414499),
    V = n(116833),
    B = n(735991);
let F = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = n(359800),
    J = n(206828),
    Y = n(574660),
    K = n(379848),
    W = n(409626),
    X = n(692969),
    Z = n(928550),
    q = n(232835),
    Q = n(970928),
    $ = n(659051),
    ee = n(652215),
    et = n(146779),
    en = n(835517),
    ei = n(228366),
    el = n(635377);
let es = new (n.n(el)())({ max: 500 });
class ea extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return es.get(t);
    }
}
let er = new ea(ei.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (es.get(t) === n) return !1;
        es.set(t, n);
    },
});
var eo = n(939249),
    ec = n(141628),
    ed = n(183208),
    eu = n(140651),
    em = n(878831),
    eh = n(657167);
function eg(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: r, secondaryColor: o } = (0, eu.A)(n),
        c = `linear-gradient(45deg, ${r}, ${o})`,
        d = (0, h.DC)(s),
        u = (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(eo.D, { onClick: l, className: eh.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: d,
        className: eh.Xy,
        style: { background: c },
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eh.xn,
                children: j.intl.string(j.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eh.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eh.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eh.Cr,
                        children: [
                            m,
                            (0, i.jsx)(a.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eh.Jl,
                                children: j.intl.string(j.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let {
            message: t,
            application: n,
            applicationName: r,
            channel: o,
            header: d,
            currentUserId: u,
            launchableAppId: g,
            isEmbeddedApplication: p,
            tryWithGdnAction: A,
            staticBannerSrc: x,
            hideBanner: f = !1,
            onClickContent: E,
            iconSrc: I,
            onView: C,
            presenceActivity: _,
            analyticsLocations: N,
            showAuthButton: T,
            startAuthorization: S,
            accountLinkButtonRef: y,
            renderAccountLinkUpsell: b,
        } = e,
        R = (0, s.bG)([q.A], () => q.A.getMessages(o.id)),
        { actions: L, hasAccountLinkButton: k } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != g
                    ? (e = [
                          {
                              label: j.intl.string(j.t["s+J8Dl"]),
                              trackingArea: h.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  ed.Ay.launch({ applicationId: g, embedded: p });
                              },
                          },
                      ])
                    : null != A && ((e = [A]), (i = !1)),
                e.length > 0)
            ) {
                var s, a;
                if (
                    ((s = t.id),
                    (a = n.id),
                    R.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === a &&
                            e.activity.type === ee.xL.JOIN &&
                            !(0, $.A)(_, e, a),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                T &&
                    i &&
                    (e.push({
                        label: j.intl.string(j.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            S({ analyticsLocations: N });
                        },
                        icon: ec.A,
                        iconButton: !0,
                        buttonRef: y,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, R, _, n.id, t.id, T, S, N, y]),
        M = L.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, em.A)(M, N);
    let O = L.length > 0,
        P = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: eh.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, c.BE)(t, r, o, u, O),
                }),
            [t, r, o, u, O],
        ),
        D = {
            id: n.id,
            linkType: v.J.RICH_PRESENCE_INVITE,
            onView: C,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: v.f.DEAD,
        };
    return 0 === L.length
        ? (0, i.jsx)(eg, { applicationName: r, iconSrc: I, viewAction: E, trackingConfig: D })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: d,
                      title: r,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: E,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: P,
                      actions: L,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: D,
                  }),
                  k ? b() : null,
              ],
          });
}
var eA = n(453003),
    ex = n(49999);
function ef(e) {
    var t, n;
    let a,
        {
            analyticsLocations: r,
            application: o,
            channel: d,
            currentUserId: u,
            currentUserPresenceActivity: m,
            hideParty: g,
            hideBanner: p,
            message: A,
            onView: x,
            partyStatusElement: f,
            presenceActivity: I,
        } = e,
        C = (0, B.Ag)(o),
        { iconSrc: _, name: v } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, Q.uD)(t.id, e.activity?.icon_override) : null) ??
                    E.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        N =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: a, imageURL: r } = (0, s.cf)(
                        [er],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = er.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, en.A)(),
                                    a =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, Q.uD)(n.application_id, n.assets.invite_cover_image, s)
                                            : null) ??
                                        l ??
                                        i.getCoverImageURL(s) ??
                                        null;
                                return { cachedImageURL: l, imageURL: a };
                            })({ messageId: t, presenceActivity: n, application: i }),
                        [t, n, i],
                    );
                return (
                    l.useEffect(() => {
                        a !== r &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                ei.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: r });
                    }, [a, r, t]),
                    r
                );
            })({ messageId: A.id, presenceActivity: I, application: o }) ?? void 0,
        { openGameProfileModal: T, launchableAppId: S } =
            ((t = o.id),
            (n = A.author.id),
            (a = (0, Z.dB)(t)),
            {
                openGameProfileModal: (0, X.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: W.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: a,
            }),
        y = (0, et.Ay)({ application: o, analyticsLocations: r }),
        b = l.useMemo(() => {
            if (null != y)
                return { label: j.intl.string(j.t["jaYS/h"]), icon: H.h, trackingArea: h.kY.CLOUD_PLAY, onClick: y };
        }, [y]),
        R = (0, Y.F)(o),
        L = l.useMemo(() => (null != T ? T : null != R && C ? R : void 0), [C, T, R]),
        k = F.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: M, hasAlreadyLinked: O, startAuthorization: P } = (0, J.RD)(o),
        D = (0, z.z)(P, O),
        U = !(0, $.A)(I, A, o.id),
        el = (0, c.n$)(v, A.activity?.type, U),
        es = l.useRef(null),
        ea = (0, s.bG)([q.A], () => q.A.getMessages(d.id));
    function eo() {
        var e;
        let t = [];
        return (
            (e = A.id),
            !ea.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === ee.xL.JOIN, 25) &&
                M &&
                !O &&
                k.enabled &&
                t.push(G.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(K.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === G.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(w.A, {
                            graphic: {
                                type: "dynamic",
                                component: V.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: o },
                            },
                            title: j.intl.formatToPlainString(j.t["lo6H6+"], { gameName: o.name }),
                            body: j.intl.string(j.t.qYAzOp),
                            targetElementRef: es,
                            caretConfig: { align: "start" },
                            shouldShow: !0,
                            gradientColor: "purple",
                            onRequestClose: () => n(ex.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return U
        ? (0, i.jsx)(ep, {
              message: A,
              application: o,
              applicationName: v,
              channel: d,
              header: el,
              currentUserId: u,
              launchableAppId: S,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: L,
              iconSrc: _,
              onView: x,
              presenceActivity: I,
              analyticsLocations: r,
              showAuthButton: M && !O && k.enabled,
              startAuthorization: D,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: eo,
          })
        : (0, i.jsx)(eA.A, {
              message: A,
              application: o,
              applicationName: v,
              channel: d,
              header: el,
              currentUserId: u,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: L,
              iconSrc: _,
              onView: x,
              presenceActivity: I,
              currentUserPresenceActivity: m,
              hideParty: g,
              partyStatusElement: f,
              analyticsLocations: r,
              showAuthButton: M && !O && k.enabled,
              canPromptAuth: M && !O,
              startAuthorization: D,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: eo,
          });
}
var eE = n(172710);
function eI(e) {
    let { application: t, message: n, header: s, onClickContent: r, onView: o, guildId: c } = e,
        d = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: eh.h_,
                    color: "none",
                    lineClamp: 1,
                    children: j.intl.string(j.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(m.h, {
        header: s,
        title: t.name,
        iconSrc: S.HT.getWhiteIconURL(),
        info: d,
        onClickContent: r,
        trackingConfig: {
            id: t.id,
            linkType: v.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: c,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var eC = n(432017),
    e_ = n(693879),
    ev = n(353411),
    eN = n(360469),
    ej = n(206589);
function eT(e) {
    var t;
    let {
            application: n,
            message: s,
            header: r,
            presenceActivity: o,
            hideParty: c,
            partyStatusElement: d,
            currentUserPresenceActivity: u,
            onClickContent: g,
            onView: p,
            guildId: A,
        } = e,
        x = (0, ej.w)(u, o),
        f = (0, ev.Gq)(o, s.author, "Invite Embed"),
        E = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? j.intl.string(j.t.VJlc0S),
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
                ? j.intl.formatToPlainString(j.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        C = o?.timestamps?.start ?? o?.created_at,
        _ = l.useMemo(
            () =>
                null != C
                    ? (0, i.jsxs)("div", {
                          className: eh.Ym,
                          children: [
                              (0, i.jsx)(eC.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(e_.z, {
                                  entry: { start: C, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [C, o?.timestamps?.end],
        ),
        N = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eh.pq,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-xs/normal",
                            className: eh.dS,
                            color: "none",
                            lineClamp: 1,
                            children: _,
                        }),
                        c ? null : d,
                    ],
                }),
            [_, c, d],
        );
    return (0, i.jsx)(m.h, {
        header: r,
        title: I,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, Q.uD)(t, o.assets.large_image, [eN.Ig, eN.Ig])) ?? void 0),
        info: N,
        actions: E,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: v.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eS(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: a,
            onView: r,
            partyStatusElement: o,
            presenceActivity: d,
            guildId: u,
        } = e,
        m = !(0, $.A)(d, a, t.id),
        h = (0, c.n$)(t.name, a.activity?.type, m),
        g = l.useMemo(() => {
            if (null != d) return () => (0, eE.Mp)(d);
        }, [d]);
    return m
        ? (0, i.jsx)(eI, { application: t, message: a, header: h, onClickContent: g, onView: r, guildId: u })
        : (0, i.jsx)(eT, {
              application: t,
              message: a,
              header: h,
              presenceActivity: d,
              hideParty: s,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: r,
              guildId: u,
          });
}
var ey = n(272984);
function eb(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: r } = e,
        o = Math.max(n, t.length),
        d = (0, c.SJ)({ maxPartySize: l, partySize: o, activityActionType: r }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(U.mt);
    for (; u.length < l && u.length < 8; ) u.push(null);
    return (0, i.jsxs)("div", {
        className: eh.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(U.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: U.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, i.jsx)(a.E, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function eR(e) {
    let { presenceActivity: t, channel: n, activityActionType: a } = e,
        r = (0, s.yK)([b.A], () => (null == t || null == t.party ? [] : Array.from(b.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: c } = (0, D._)(t),
        d = l.useMemo(
            () =>
                r.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : U.mt;
                }),
            [r],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eb, {
                partyMembers: d,
                partySize: o,
                maxPartySize: c,
                guildId: n.guild_id,
                activityActionType: a,
            }),
        [d, o, c, n.guild_id, a],
    );
}
function eL(e) {
    let { analyticsLocations: t, app: n, channel: l, message: a, hideParty: o, hideBanner: c, onView: d } = e,
        u = (0, r.b)(n),
        m = (0, s.bG)([y.default], () => y.default.getId()),
        h = (0, s.bG)([L.A], () => {
            if (null == a.application) return L.A.findActivity(a.author.id, (e) => e.type === ee.$pd.LISTENING);
            {
                let e = a.author.id;
                return (
                    (0, P.v)(a) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                    L.A.getApplicationActivity(e, a.application.id)
                );
            }
        }, [a, l, m]),
        g = (0, s.bG)([R.A, k.A], () => (0, O.A)(R.A, k.A, u.id), [u.id]),
        p = eR({ presenceActivity: h, channel: l, activityActionType: a.activity?.type });
    return (0, ey.pH)(h?.party?.id) || u.id === S.HT.id
        ? (0, i.jsx)(eS, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: a,
              onView: d,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : a.activity?.type === ee.xL.STREAM_REQUEST
          ? (0, i.jsx)(T, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: a })
          : (0, i.jsx)(ef, {
                analyticsLocations: t,
                application: u,
                channel: l,
                currentUserId: m,
                currentUserPresenceActivity: g,
                hideParty: o,
                hideBanner: c,
                message: a,
                onView: d,
                partyStatusElement: p,
                presenceActivity: h,
            });
}
