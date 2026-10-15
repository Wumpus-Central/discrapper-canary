(n.d(t, { P0: () => ey, em: () => eN }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(834730),
    a = n(138175),
    o = n(456060),
    d = n(793574),
    c = n(688810),
    u = n(572211),
    m = n(354287),
    h = n(112150),
    g = n(616356),
    p = n(763827),
    A = n(486020),
    x = n(762644),
    f = n(221486),
    I = n(768349),
    E = n(905322),
    v = n(105292);
function C(e) {
    let { currentUserId: t, message: n, application: l, channel: r, analyticsLocations: a, onView: C } = e,
        { staticBannerSrc: _, videoBannerSrc: j, bannerAspectRatio: N } = (0, h.f)(l),
        y = A.Ay.getApplicationIconURL({ id: l.id, icon: l.icon }),
        T = (0, f.i)(l),
        S = (0, s.bG)([g.A], () => g.A.getCurrentUserActiveStream()),
        b = (0, s.bG)([p.A], () => p.A.getChannelId()),
        k = (0, x.A)(n.id),
        R = (0, i.jsx)(i.Fragment, { children: (0, o.uk)(n, r, t) }),
        { analyticsLocations: L } = (0, c.Ay)(a, d.A.REQUEST_TO_STREAM_INVITE_EMBED),
        M = v.intl.string(E.default["5+172e"]),
        P = !1;
    return (
        k
            ? ((M = v.intl.string(E.default.u4QmWl)), (P = !0))
            : null != S
              ? ((M = v.intl.string(E.default.P0wwmM)), (P = !0))
              : b !== r.id
                ? ((M = v.intl.string(E.default.qRXats)), (P = !0))
                : null == T && ((M = v.intl.string(E.default["43zohO"])), (P = !0)),
        (0, i.jsx)(u.h, {
            header: v.intl.string(E.default.nAyuPp),
            title: l.name,
            staticBannerSrc: _,
            videoBannerSrc: j,
            bannerAspectRatio: N,
            iconSrc: y ?? void 0,
            info: R,
            actions:
                n.author.id === t
                    ? []
                    : [
                          {
                              label: M,
                              trackingArea: m.kY.STREAM,
                              disabled: P,
                              onClick: () => {
                                  null != T && (0, f.X)(T, L);
                              },
                          },
                      ],
            trackingConfig: {
                id: l.id,
                linkType: I.J.REQUEST_TO_STREAM,
                guildId: r.guild_id,
                channelId: r.id,
                messageId: n.id,
                onView: C,
                isDeadEnd: k,
            },
        })
    );
}
var _ = n(666176),
    j = n(280450),
    N = n(629016),
    y = n(480595),
    T = n(290863),
    S = n(461213),
    b = n(287809),
    k = n(454292),
    R = n(850670),
    L = n(125017),
    M = n(104171),
    P = n(554146),
    D = n(43105),
    O = n(414499),
    U = n(116833);
let G = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var w = n(359800),
    B = n(206828),
    V = n(574660),
    H = n(379848),
    F = n(409626),
    z = n(692969),
    Y = n(928550),
    K = n(232835),
    W = n(970928),
    J = n(659051),
    X = n(652215),
    Z = n(359549),
    q = n(835517),
    $ = n(73153),
    Q = n(635377);
let ee = new (n.n(Q)())({ max: 500 });
class et extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return ee.get(t);
    }
}
let en = new et($.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (ee.get(t) === n) return !1;
        ee.set(t, n);
    },
});
var ei = n(939249),
    el = n(141628),
    es = n(780907),
    er = n(140651),
    ea = n(878831),
    eo = n(657167);
function ed(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, er.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, m.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        h = null == l ? u : (0, i.jsx)(ei.D, { onClick: l, className: eo.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: eo.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eo.xn,
                children: v.intl.string(v.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eo.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eo.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eo.Cr,
                        children: [
                            h,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eo.Jl,
                                children: v.intl.string(v.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ec(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: d,
            header: c,
            currentUserId: h,
            launchableAppId: g,
            isEmbeddedApplication: p,
            tryWithGdnAction: A,
            staticBannerSrc: x,
            hideBanner: f = !1,
            onClickContent: E,
            iconSrc: C,
            onView: _,
            presenceActivity: j,
            analyticsLocations: N,
            showAuthButton: y,
            startAuthorization: T,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: b,
        } = e,
        k = (0, s.bG)([K.A], () => K.A.getMessages(d.id)),
        { actions: R, hasAccountLinkButton: L } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != g
                    ? (e = [
                          {
                              label: v.intl.string(v.t["s+J8Dl"]),
                              trackingArea: m.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  es.Ay.launch({ applicationId: g, embedded: p });
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
                            e.activity.type === X.xL.JOIN &&
                            !(0, J.A)(j, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                y &&
                    i &&
                    (e.push({
                        label: v.intl.string(v.t.lw71Nf),
                        trackingArea: m.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            T({ analyticsLocations: N });
                        },
                        icon: el.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, k, j, n.id, t.id, y, T, N, S]),
        M = R.some((e) => e.trackingArea === m.kY.CLOUD_PLAY);
    (0, ea.A)(M, N);
    let P = R.length > 0,
        D = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eo.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, o.BE)(t, a, d, h, P),
                }),
            [t, a, d, h, P],
        ),
        O = {
            id: n.id,
            linkType: I.J.RICH_PRESENCE_INVITE,
            onView: _,
            referrerId: t.author.id,
            guildId: d.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: I.f.DEAD,
        };
    return 0 === R.length
        ? (0, i.jsx)(ed, { applicationName: a, iconSrc: C, viewAction: E, trackingConfig: O })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.h, {
                      header: c,
                      title: a,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: E,
                      bannerAspectRatio: u.u.ACTIVITY,
                      iconSrc: C ?? void 0,
                      info: D,
                      actions: R,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: O,
                  }),
                  L ? b() : null,
              ],
          });
}
var eu = n(453003),
    em = n(49999);
function eh(e) {
    var t, n;
    let r,
        {
            analyticsLocations: a,
            application: d,
            channel: c,
            currentUserId: u,
            currentUserPresenceActivity: h,
            hideParty: g,
            hideBanner: p,
            message: x,
            onView: f,
            partyStatusElement: I,
            presenceActivity: E,
        } = e,
        C = d.isEmbedded,
        { iconSrc: _, name: j } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, W.uD)(t.id, e.activity?.icon_override) : null) ??
                    A.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(x, d),
        N =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [en],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = en.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, q.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, W.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                $.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: x.id, presenceActivity: E, application: d }) ?? void 0,
        { openGameProfileModal: y, launchableAppId: T } =
            ((t = d.id),
            (n = x.author.id),
            (r = (0, Y.dB)(t)),
            {
                openGameProfileModal: (0, z.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: F.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        S = (0, Z.Ay)({ application: d, analyticsLocations: a }),
        b = l.useMemo(() => {
            if (null != S)
                return { label: v.intl.string(v.t["jaYS/h"]), icon: O.h, trackingArea: m.kY.CLOUD_PLAY, onClick: S };
        }, [S]),
        k = (0, V.F)(d),
        R = l.useMemo(() => (null != y ? y : null != k && C ? k : void 0), [C, y, k]),
        L = G.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: M, hasAlreadyLinked: Q, startAuthorization: ee } = (0, B.RD)(d),
        et = (0, w.z)(ee, Q),
        ei = !(0, J.A)(E, x, d.id),
        el = (0, o.n$)(j, x.activity?.type, ei),
        es = l.useRef(null),
        er = (0, s.bG)([K.A], () => K.A.getMessages(c.id));
    function ea() {
        var e;
        let t = [];
        return (
            (e = x.id),
            !er.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === X.xL.JOIN, 25) &&
                M &&
                !Q &&
                L.enabled &&
                t.push(P.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(H.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === P.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(D.A, {
                            graphic: {
                                type: "dynamic",
                                component: U.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: d },
                            },
                            title: v.intl.formatToPlainString(v.t["lo6H6+"], { gameName: d.name }),
                            body: v.intl.string(v.t.qYAzOp),
                            targetElementRef: es,
                            caretConfig: { align: "start" },
                            shouldShow: !0,
                            gradientColor: "purple",
                            onRequestClose: () => n(em.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return ei
        ? (0, i.jsx)(ec, {
              message: x,
              application: d,
              applicationName: j,
              channel: c,
              header: el,
              currentUserId: u,
              launchableAppId: T,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: R,
              iconSrc: _,
              onView: f,
              presenceActivity: E,
              analyticsLocations: a,
              showAuthButton: M && !Q && L.enabled,
              startAuthorization: et,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: ea,
          })
        : (0, i.jsx)(eu.A, {
              message: x,
              application: d,
              applicationName: j,
              channel: c,
              header: el,
              currentUserId: u,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: R,
              iconSrc: _,
              onView: f,
              presenceActivity: E,
              currentUserPresenceActivity: h,
              hideParty: g,
              partyStatusElement: I,
              analyticsLocations: a,
              showAuthButton: M && !Q && L.enabled,
              canPromptAuth: M && !Q,
              startAuthorization: et,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: ea,
          });
}
var eg = n(172710);
function ep(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eo.h_,
                    color: "none",
                    lineClamp: 1,
                    children: v.intl.string(v.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(u.h, {
        header: s,
        title: t.name,
        iconSrc: _.HT.getWhiteIconURL(),
        info: c,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: I.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var eA = n(432017),
    ex = n(693879),
    ef = n(353411),
    eI = n(818023),
    eE = n(206589);
function ev(e) {
    var t;
    let {
            application: n,
            message: s,
            header: a,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: h,
            onClickContent: g,
            onView: p,
            guildId: A,
        } = e,
        x = (0, eE.w)(h, o),
        f = (0, ef.Gq)(o, s.author, "Invite Embed"),
        E = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? v.intl.string(v.t.VJlc0S),
                        trackingArea: m.kY.SYNC,
                        onClick: () => {
                            f.onClick();
                        },
                        disabled: f.disabled,
                        disabledReason: f.disabled ? f.tooltip : void 0,
                    }),
                e
            );
        }, [x, f]),
        C =
            null != o && null != o.details && null != o.state
                ? v.intl.formatToPlainString(v.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        _ = o?.timestamps?.start ?? o?.created_at,
        j = l.useMemo(
            () =>
                null != _
                    ? (0, i.jsxs)("div", {
                          className: eo.Ym,
                          children: [
                              (0, i.jsx)(eA.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(ex.z, {
                                  entry: { start: _, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [_, o?.timestamps?.end],
        ),
        N = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eo.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: eo.dS,
                            color: "none",
                            lineClamp: 1,
                            children: j,
                        }),
                        d ? null : c,
                    ],
                }),
            [j, d, c],
        );
    return (0, i.jsx)(u.h, {
        header: a,
        title: C,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, W.uD)(t, o.assets.large_image, [eI.Ig, eI.Ig])) ?? void 0),
        info: N,
        actions: E,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: I.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eC(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: r,
            onView: a,
            partyStatusElement: d,
            presenceActivity: c,
            guildId: u,
        } = e,
        m = !(0, J.A)(c, r, t.id),
        h = (0, o.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, eg.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(ep, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(ev, {
              application: t,
              message: r,
              header: h,
              presenceActivity: c,
              hideParty: s,
              partyStatusElement: d,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: a,
              guildId: u,
          });
}
var e_ = n(272984);
function ej(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        d = Math.max(n, t.length),
        c = (0, o.SJ)({ maxPartySize: l, partySize: d, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8;) u.push(M.mt);
    for (; u.length < l && u.length < 8;) u.push(null);
    return (0, i.jsxs)("div", {
        className: eo.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(M.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: M.DN.SIZE_16,
                    dimEmptyUsers: !0,
                    avatarBackground: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function eN(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([N.A], () => (null == t || null == t.party ? [] : Array.from(N.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, L._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = b.default.getUser(e);
                    return null != t ? t : M.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(ej, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function ey(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([j.default], () => j.default.getId()),
        h = (0, s.bG)(
            [T.A],
            () => {
                if (null == r.application) return T.A.findActivity(r.author.id, (e) => e.type === X.$pd.LISTENING);
                {
                    let e = r.author.id;
                    return (
                        (0, R.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                        T.A.getApplicationActivity(e, r.application.id)
                    );
                }
            },
            [r, l, m],
        ),
        g = (0, s.bG)([y.A, S.A], () => (0, k.A)(y.A, S.A, u.id), [u.id]),
        p = eN({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, e_.pH)(h?.party?.id) || u.id === _.HT.id
        ? (0, i.jsx)(eC, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === X.xL.STREAM_REQUEST
          ? (0, i.jsx)(C, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
          : (0, i.jsx)(eh, {
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
