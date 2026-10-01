(n.d(t, { P0: () => eL, em: () => eR }), n(321073));
var i = n(477900),
    l = n(582128),
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
    I = n(763827),
    E = n(486020),
    v = n(723702),
    C = n(935208),
    _ = n(820672),
    j = n(768349),
    N = n(905322),
    y = n(375708);
function T(e) {
    let { currentUserId: t, message: l, application: r, channel: a, analyticsLocations: T, onView: S } = e,
        { staticBannerSrc: b, videoBannerSrc: k, bannerAspectRatio: R } = (0, g.f)(r),
        L = E.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
        M = (0, s.bG)([f.A], () => f.A.getGameByApplication(r)?.id, [r]),
        P = (0, s.bG)(
            [p.Ay, f.A],
            () => {
                let e = p.Ay.getVisibleRunningGames();
                function t(e) {
                    return null != e && (e === r.id || (null != M && e === M));
                }
                return (
                    e.find((e) => {
                        let { id: n } = e;
                        return t(n);
                    }) ?? e.find((e) => null == e.id && t(f.A.findGame(e)?.id))
                );
            },
            [r.id, M],
        ),
        D = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        O = (0, s.bG)([I.A], () => I.A.getChannelId()),
        U = C.default.extractTimestamp(l.id) + _.M < Date.now(),
        G = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, a, t) }),
        { analyticsLocations: w } = (0, u.Ay)(T, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        B = y.intl.string(N.default["5+172e"]),
        V = !1;
    return (
        U
            ? ((B = y.intl.string(N.default.u4QmWl)), (V = !0))
            : null != D
              ? ((B = y.intl.string(N.default.P0wwmM)), (V = !0))
              : O !== a.id
                ? ((B = y.intl.string(N.default.qRXats)), (V = !0))
                : null == P && ((B = y.intl.string(N.default["43zohO"])), (V = !0)),
        (0, i.jsx)(m.h, {
            header: y.intl.string(N.default.nAyuPp),
            title: r.name,
            staticBannerSrc: b,
            videoBannerSrc: k,
            bannerAspectRatio: R,
            iconSrc: L ?? void 0,
            info: G,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: B,
                              trackingArea: h.kY.STREAM,
                              disabled: V,
                              onClick: () => {
                                  null != P &&
                                      ((0, v.isWindows)()
                                          ? (0, A.A)(P.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("249169"),
                                                    n.e("473782"),
                                                    n.e("553464"),
                                                    n.e("130662"),
                                                    n.e("498552"),
                                                    n.e("236946"),
                                                    n.e("338601"),
                                                    n.e("706809"),
                                                    n.e("944801"),
                                                    n.e("944727"),
                                                    n.e("59778"),
                                                    n.e("763612"),
                                                    n.e("725241"),
                                                    n.e("118577"),
                                                    n.e("39404"),
                                                    n.e("82001"),
                                                    n.e("191782"),
                                                    n.e("352435"),
                                                    n.e("190088"),
                                                ]).then(n.bind(n, 266536));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: w });
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
                isDeadEnd: U,
            },
        })
    );
}
var S = n(666176),
    b = n(280450),
    k = n(629016),
    R = n(480595),
    L = n(290863),
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
let z = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var Y = n(359800),
    K = n(206828),
    W = n(574660),
    J = n(379848),
    X = n(409626),
    q = n(692969),
    Z = n(928550),
    $ = n(232835),
    Q = n(970928),
    ee = n(659051),
    et = n(652215),
    en = n(146779),
    ei = n(835517),
    el = n(73153),
    es = n(635377);
let er = new (n.n(es)())({ max: 500 });
class ea extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return er.get(t);
    }
}
let eo = new ea(el.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (er.get(t) === n) return !1;
        er.set(t, n);
    },
});
var ed = n(939249),
    ec = n(141628),
    eu = n(780907),
    em = n(140651),
    eh = n(878831),
    eg = n(657167);
function ep(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, em.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(ed.D, { onClick: l, className: eg.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: eg.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eg.xn,
                children: y.intl.string(y.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eg.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eg.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eg.Cr,
                        children: [
                            m,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eg.Jl,
                                children: y.intl.string(y.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
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
            onClickContent: I,
            iconSrc: E,
            onView: v,
            presenceActivity: C,
            analyticsLocations: _,
            showAuthButton: N,
            startAuthorization: T,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: b,
        } = e,
        k = (0, s.bG)([$.A], () => $.A.getMessages(o.id)),
        { actions: R, hasAccountLinkButton: L } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != g
                    ? (e = [
                          {
                              label: y.intl.string(y.t["s+J8Dl"]),
                              trackingArea: h.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  eu.Ay.launch({ applicationId: g, embedded: p });
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
                            e.activity.type === et.xL.JOIN &&
                            !(0, ee.A)(C, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                N &&
                    i &&
                    (e.push({
                        label: y.intl.string(y.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            T({ analyticsLocations: _ });
                        },
                        icon: ec.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, k, C, n.id, t.id, N, T, _, S]),
        M = R.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eh.A)(M, _);
    let P = R.length > 0,
        D = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eg.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, P),
                }),
            [t, a, o, u, P],
        ),
        O = {
            id: n.id,
            linkType: j.J.RICH_PRESENCE_INVITE,
            onView: v,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: j.f.DEAD,
        };
    return 0 === R.length
        ? (0, i.jsx)(ep, { applicationName: a, iconSrc: E, viewAction: I, trackingConfig: O })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: c,
                      title: a,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: I,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: E ?? void 0,
                      info: D,
                      actions: R,
                      primaryActionFirst: !0,
                      onClickContent: I,
                      trackingConfig: O,
                  }),
                  L ? b() : null,
              ],
          });
}
var ex = n(453003),
    ef = n(49999);
function eI(e) {
    var t, n;
    let r,
        {
            analyticsLocations: a,
            application: o,
            channel: c,
            currentUserId: u,
            currentUserPresenceActivity: m,
            hideParty: g,
            hideBanner: p,
            message: A,
            onView: x,
            partyStatusElement: f,
            presenceActivity: I,
        } = e,
        v = (0, F.Ag)(o),
        { iconSrc: C, name: _ } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, Q.uD)(t.id, e.activity?.icon_override) : null) ??
                    E.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        j =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [eo],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = eo.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, ei.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, Q.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                el.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: A.id, presenceActivity: I, application: o }) ?? void 0,
        { openGameProfileModal: N, launchableAppId: T } =
            ((t = o.id),
            (n = A.author.id),
            (r = (0, Z.dB)(t)),
            {
                openGameProfileModal: (0, q.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: X.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        S = (0, en.Ay)({ application: o, analyticsLocations: a }),
        b = l.useMemo(() => {
            if (null != S)
                return { label: y.intl.string(y.t["jaYS/h"]), icon: V.h, trackingArea: h.kY.CLOUD_PLAY, onClick: S };
        }, [S]),
        k = (0, W.F)(o),
        R = l.useMemo(() => (null != N ? N : null != k && v ? k : void 0), [v, N, k]),
        L = z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: M, hasAlreadyLinked: P, startAuthorization: D } = (0, K.RD)(o),
        O = (0, Y.z)(D, P),
        U = !(0, ee.A)(I, A, o.id),
        G = (0, d.n$)(_, A.activity?.type, U),
        es = l.useRef(null),
        er = (0, s.bG)([$.A], () => $.A.getMessages(c.id));
    function ea() {
        var e;
        let t = [];
        return (
            (e = A.id),
            !er.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === et.xL.JOIN, 25) &&
                M &&
                !P &&
                L.enabled &&
                t.push(w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(J.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(B.A, {
                            graphic: {
                                type: "dynamic",
                                component: H.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: o },
                            },
                            title: y.intl.formatToPlainString(y.t["lo6H6+"], { gameName: o.name }),
                            body: y.intl.string(y.t.qYAzOp),
                            targetElementRef: es,
                            caretConfig: { align: "start" },
                            shouldShow: !0,
                            gradientColor: "purple",
                            onRequestClose: () => n(ef.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return U
        ? (0, i.jsx)(eA, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: G,
              currentUserId: u,
              launchableAppId: T,
              isEmbeddedApplication: v,
              tryWithGdnAction: b,
              staticBannerSrc: j,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: x,
              presenceActivity: I,
              analyticsLocations: a,
              showAuthButton: M && !P && L.enabled,
              startAuthorization: O,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: ea,
          })
        : (0, i.jsx)(ex.A, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: G,
              currentUserId: u,
              isEmbeddedApplication: v,
              tryWithGdnAction: b,
              staticBannerSrc: j,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: x,
              presenceActivity: I,
              currentUserPresenceActivity: m,
              hideParty: g,
              partyStatusElement: f,
              analyticsLocations: a,
              showAuthButton: M && !P && L.enabled,
              canPromptAuth: M && !P,
              startAuthorization: O,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: ea,
          });
}
var eE = n(172710);
function ev(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eg.h_,
                    color: "none",
                    lineClamp: 1,
                    children: y.intl.string(y.t["84qx9r"]),
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
var eC = n(432017),
    e_ = n(693879),
    ej = n(353411),
    eN = n(818023),
    ey = n(206589);
function eT(e) {
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
        f = (0, ej.Gq)(o, s.author, "Invite Embed"),
        I = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? y.intl.string(y.t.VJlc0S),
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
        E =
            null != o && null != o.details && null != o.state
                ? y.intl.formatToPlainString(y.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        v = o?.timestamps?.start ?? o?.created_at,
        C = l.useMemo(
            () =>
                null != v
                    ? (0, i.jsxs)("div", {
                          className: eg.Ym,
                          children: [
                              (0, i.jsx)(eC.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(e_.z, {
                                  entry: { start: v, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [v, o?.timestamps?.end],
        ),
        _ = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eg.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: eg.dS,
                            color: "none",
                            lineClamp: 1,
                            children: C,
                        }),
                        d ? null : c,
                    ],
                }),
            [C, d, c],
        );
    return (0, i.jsx)(m.h, {
        header: a,
        title: E,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, Q.uD)(t, o.assets.large_image, [eN.Ig, eN.Ig])) ?? void 0),
        info: _,
        actions: I,
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
function eS(e) {
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
        m = !(0, ee.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, eE.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(ev, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(eT, {
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
var eb = n(272984);
function ek(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8;) u.push(G.mt);
    for (; u.length < l && u.length < 8;) u.push(null);
    return (0, i.jsxs)("div", {
        className: eg.UF,
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
            (0, i.jsx)(ek, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function eL(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)(
            [L.A],
            () => {
                if (null == r.application) return L.A.findActivity(r.author.id, (e) => e.type === et.$pd.LISTENING);
                {
                    let e = r.author.id;
                    return (
                        (0, O.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                        L.A.getApplicationActivity(e, r.application.id)
                    );
                }
            },
            [r, l, m],
        ),
        g = (0, s.bG)([R.A, M.A], () => (0, D.A)(R.A, M.A, u.id), [u.id]),
        p = eR({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, eb.pH)(h?.party?.id) || u.id === S.HT.id
        ? (0, i.jsx)(eS, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === et.xL.STREAM_REQUEST
          ? (0, i.jsx)(T, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
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
