n.d(t, { P0: () => eM, em: () => eR }), n(321073);
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
        { staticBannerSrc: b, videoBannerSrc: k, bannerAspectRatio: L } = (0, g.f)(r),
        R = I.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
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
        O = v.default.extractTimestamp(l.id) + _.M < Date.now(),
        U = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, a, t) }),
        { analyticsLocations: G } = (0, u.Ay)(y, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        w = T.intl.string(N.default["5+172e"]),
        B = !1;
    return (
        O
            ? ((w = T.intl.string(N.default.u4QmWl)), (B = !0))
            : null != P
              ? ((w = T.intl.string(N.default.P0wwmM)), (B = !0))
              : D !== a.id
                ? ((w = T.intl.string(N.default.qRXats)), (B = !0))
                : null == M && ((w = T.intl.string(N.default["43zohO"])), (B = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(N.default.nAyuPp),
            title: r.name,
            staticBannerSrc: b,
            videoBannerSrc: k,
            bannerAspectRatio: L,
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
                                  null != M &&
                                      ((0, C.isWindows)()
                                          ? (0, A.A)(M.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("64379"),
                                                    n.e("17918"),
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
                linkType: j.J.REQUEST_TO_STREAM,
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
    k = n(629016),
    L = n(480595),
    R = n(290863),
    M = n(461213),
    P = n(287809),
    D = n(454292),
    O = n(850670),
    U = n(125017),
    G = n(104171),
    w = n(554146),
    B = n(43105),
    V = n(414499),
    H = n(116833),
    F = n(735991);
let Y = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var z = n(359800),
    K = n(46225),
    W = n(587895),
    J = n(574660),
    q = n(379848),
    X = n(409626),
    Z = n(692969),
    $ = n(928550),
    Q = n(232835),
    ee = n(970928),
    et = n(659051),
    en = n(652215),
    ei = n(737393),
    el = n(835517),
    es = n(228366),
    er = n(635377);
let ea = new (n.n(er)())({ max: 500 });
class eo extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return ea.get(t);
    }
}
let ed = new eo(es.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (ea.get(t) === n) return !1;
        ea.set(t, n);
    },
});
var ec = n(939249),
    eu = n(141628),
    em = n(780907),
    eh = n(140651),
    eg = n(878831),
    ep = n(193018);
function eA(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, eh.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(ec.D, { onClick: l, className: ep.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: ep.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: ep.xn,
                children: T.intl.string(T.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: ep.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: ep.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: ep.Cr,
                        children: [
                            m,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: ep.Jl,
                                children: T.intl.string(T.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ex(e) {
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
            startAuthorization: y,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: b,
        } = e,
        k = (0, s.bG)([Q.A], () => Q.A.getMessages(o.id)),
        { actions: L, hasAccountLinkButton: R } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != g
                    ? (e = [
                          {
                              label: T.intl.string(T.t["s+J8Dl"]),
                              trackingArea: h.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  em.Ay.launch({ applicationId: g, embedded: p });
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
                            e.activity.type === en.xL.JOIN &&
                            !(0, et.A)(v, e, r),
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
                            y({ analyticsLocations: _ });
                        },
                        icon: eu.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, k, v, n.id, t.id, N, y, _, S]),
        M = L.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eg.A)(M, _);
    let P = L.length > 0,
        D = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: ep.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, P),
                }),
            [t, a, o, u, P],
        ),
        O = {
            id: n.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: C,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: j.f.DEAD,
        };
    return 0 === L.length
        ? (0, i.jsx)(eA, { applicationName: a, iconSrc: I, viewAction: E, trackingConfig: O })
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
                      info: D,
                      actions: L,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: O,
                  }),
                  R ? b() : null,
              ],
          });
}
var ef = n(453003),
    eE = n(49999);
function eI(e) {
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
            partyStatusElement: C,
            presenceActivity: v,
        } = e,
        _ = (0, F.Ag)(c),
        { iconSrc: j, name: N } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, ee.uD)(t.id, e.activity?.icon_override) : null) ??
                    I.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(x, c),
        y =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [ed],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = ed.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, el.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, ee.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                es.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: x.id, presenceActivity: v, application: c }) ?? void 0,
        { openGameProfileModal: S, launchableAppId: b } =
            ((t = c.id),
            (n = x.author.id),
            (r = (0, $.d)(t)),
            (a = (0, s.bG)([W.A, f.A], () => {
                let e = W.A.getApplication(t);
                return null != e ? f.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, Z.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: a?.id ?? void 0,
                    source: X.Ob.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        k = (0, ei.Ay)({ application: c, analyticsLocations: o }),
        L = l.useMemo(() => {
            if (null != k)
                return { label: T.intl.string(T.t["jaYS/h"]), icon: V.h, trackingArea: h.kY.CLOUD_PLAY, onClick: k };
        }, [k]),
        R = (0, J.F)(c),
        M = l.useMemo(() => (null != S ? S : null != R && _ ? R : void 0), [_, S, R]),
        P = Y.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: D, hasAlreadyLinked: O, startAuthorization: U } = (0, K.RD)(c),
        G = (0, z.z)(U, O),
        er = !(0, et.A)(v, x, c.id),
        ea = (0, d.n$)(N, x.activity?.type, er),
        eo = l.useRef(null),
        ec = (0, s.bG)([Q.A], () => Q.A.getMessages(u.id));
    function eu() {
        var e;
        let t = [];
        return (
            (e = x.id),
            !ec.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === en.xL.JOIN, 25) &&
                D &&
                !O &&
                P.enabled &&
                t.push(w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(q.Ay, {
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
                            targetElementRef: eo,
                            caretConfig: { align: "start" },
                            shouldShow: !0,
                            gradientColor: "purple",
                            onRequestClose: () => n(eE.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return er
        ? (0, i.jsx)(ex, {
              message: x,
              application: c,
              applicationName: N,
              channel: u,
              header: ea,
              currentUserId: m,
              launchableAppId: b,
              isEmbeddedApplication: _,
              tryWithGdnAction: L,
              staticBannerSrc: y,
              hideBanner: A,
              onClickContent: M,
              iconSrc: j,
              onView: E,
              presenceActivity: v,
              analyticsLocations: o,
              showAuthButton: D && !O && P.enabled,
              startAuthorization: G,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: eu,
          })
        : (0, i.jsx)(ef.A, {
              message: x,
              application: c,
              applicationName: N,
              channel: u,
              header: ea,
              currentUserId: m,
              launchableAppId: b,
              isEmbeddedApplication: _,
              tryWithGdnAction: L,
              staticBannerSrc: y,
              hideBanner: A,
              onClickContent: M,
              iconSrc: j,
              onView: E,
              presenceActivity: v,
              currentUserPresenceActivity: g,
              hideParty: p,
              partyStatusElement: C,
              analyticsLocations: o,
              showAuthButton: D && !O && P.enabled,
              canPromptAuth: D && !O,
              startAuthorization: G,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: eu,
          });
}
var eC = n(172710);
function ev(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: ep.h_,
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
var e_ = n(432017),
    ej = n(693879),
    eN = n(353411),
    eT = n(360469),
    ey = n(206589);
function eS(e) {
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
        x = (0, ey.w)(u, o),
        f = (0, eN.Gq)(o, s.author, "Invite Embed"),
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
                          className: ep.Ym,
                          children: [
                              (0, i.jsx)(e_.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(ej.z, {
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
                    className: ep.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: ep.dS,
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
                : (0, ee.uD)(t, o.assets.large_image, [eT.Ig, eT.Ig])) ?? void 0),
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
function eb(e) {
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
        m = !(0, et.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, eC.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(ev, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(eS, {
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
var ek = n(272984);
function eL(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(G.mt);
    for (; u.length < l && u.length < 8; ) u.push(null);
    return (0, i.jsxs)("div", {
        className: ep.UF,
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
function eR(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([k.A], () => (null == t || null == t.party ? [] : Array.from(k.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, U._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = P.default.getUser(e);
                    return null != t ? t : G.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eL, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function eM(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)([R.A], () => {
            if (null == r.application) return R.A.findActivity(r.author.id, (e) => e.type === en.$pd.LISTENING);
            {
                let e = r.author.id;
                return (
                    (0, O.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                    R.A.getApplicationActivity(e, r.application.id)
                );
            }
        }, [r, l, m]),
        g = (0, s.bG)([L.A, M.A], () => (0, D.A)(L.A, M.A, u.id), [u.id]),
        p = eR({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, ek.pH)(h?.party?.id) || u.id === S.HT.id
        ? (0, i.jsx)(eb, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === en.xL.STREAM_REQUEST
          ? (0, i.jsx)(y, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
          : (0, i.jsx)(eI, {
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
