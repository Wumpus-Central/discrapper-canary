(n.d(t, { P0: () => eM, em: () => ek }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(834730),
    r = n(138175),
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
    _ = n(935208),
    v = n(820672),
    N = n(768349),
    j = n(905322),
    T = n(375708);
function S(e) {
    let { currentUserId: t, message: l, application: a, channel: r, analyticsLocations: S, onView: y } = e,
        { staticBannerSrc: b, videoBannerSrc: R, bannerAspectRatio: k } = (0, g.f)(a),
        M = I.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
        L = (0, s.bG)([f.A], () => f.A.getGameByApplication(a)?.id, [a]),
        O = (0, s.bG)(
            [p.Ay, f.A],
            () => {
                let e = p.Ay.getVisibleRunningGames();
                function t(e) {
                    return null != e && (e === a.id || (null != L && e === L));
                }
                return (
                    e.find((e) => {
                        let { id: n } = e;
                        return t(n);
                    }) ?? e.find((e) => null == e.id && t(f.A.findGame(e)?.id))
                );
            },
            [a.id, L],
        ),
        P = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        D = (0, s.bG)([E.A], () => E.A.getChannelId()),
        U = _.default.extractTimestamp(l.id) + v.M < Date.now(),
        G = (0, i.jsx)(i.Fragment, { children: (0, d.Wf)(l, r, t) }),
        { analyticsLocations: w } = (0, u.Ay)(S, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        H = T.intl.string(j.default["5+172e"]),
        B = !1;
    return (
        U
            ? ((H = T.intl.string(j.default.u4QmWl)), (B = !0))
            : null != P
              ? ((H = T.intl.string(j.default.P0wwmM)), (B = !0))
              : D !== r.id
                ? ((H = T.intl.string(j.default.qRXats)), (B = !0))
                : null == O && ((H = T.intl.string(j.default["43zohO"])), (B = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(j.default.nAyuPp),
            title: a.name,
            staticBannerSrc: b,
            videoBannerSrc: R,
            bannerAspectRatio: k,
            iconSrc: M ?? void 0,
            info: G,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: H,
                              trackingArea: h.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != O &&
                                      ((0, C.isWindows)()
                                          ? (0, A.A)(O.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("249169"),
                                                    n.e("473782"),
                                                    n.e("553464"),
                                                    n.e("130662"),
                                                    n.e("498552"),
                                                    n.e("236946"),
                                                    n.e("338601"),
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
                id: a.id,
                linkType: N.J.REQUEST_TO_STREAM,
                guildId: r.guild_id,
                channelId: r.id,
                messageId: l.id,
                onView: y,
                isDeadEnd: U,
            },
        })
    );
}
var y = n(666176),
    b = n(280450),
    R = n(629016),
    k = n(480595),
    M = n(290863),
    L = n(461213),
    O = n(287809),
    P = n(454292),
    D = n(850670),
    U = n(125017),
    G = n(104171),
    w = n(554146),
    H = n(43105),
    B = n(414499),
    F = n(116833),
    V = n(735991);
let z = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var J = n(359800),
    K = n(206828),
    Y = n(574660),
    W = n(379848),
    X = n(409626),
    Z = n(692969),
    q = n(928550),
    Q = n(232835),
    $ = n(970928),
    ee = n(659051),
    et = n(652215),
    en = n(146779),
    ei = n(835517),
    el = n(228366),
    es = n(635377);
let ea = new (n.n(es)())({ max: 500 });
class er extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return ea.get(t);
    }
}
let eo = new er(el.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (ea.get(t) === n) return !1;
        ea.set(t, n);
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
        { primaryColor: r, secondaryColor: o } = (0, em.A)(n),
        d = `linear-gradient(45deg, ${r}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(ed.D, { onClick: l, className: eg.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: eg.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eg.xn,
                children: T.intl.string(T.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eg.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eg.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eg.Cr,
                        children: [
                            m,
                            (0, i.jsx)(a.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eg.Jl,
                                children: T.intl.string(T.t["Sq/E1I"]),
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
            applicationName: r,
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
            presenceActivity: _,
            analyticsLocations: v,
            showAuthButton: j,
            startAuthorization: S,
            accountLinkButtonRef: y,
            renderAccountLinkUpsell: b,
        } = e,
        R = (0, s.bG)([Q.A], () => Q.A.getMessages(o.id)),
        { actions: k, hasAccountLinkButton: M } = l.useMemo(() => {
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
                                  eu.Ay.launch({ applicationId: g, embedded: p });
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
                            e.activity.type === et.xL.JOIN &&
                            !(0, ee.A)(_, e, a),
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
                            S({ analyticsLocations: v });
                        },
                        icon: ec.A,
                        iconButton: !0,
                        buttonRef: y,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, R, _, n.id, t.id, j, S, v, y]),
        L = k.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eh.A)(L, v);
    let O = k.length > 0,
        P = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: eg.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, r, o, u, O),
                }),
            [t, r, o, u, O],
        ),
        D = {
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
    return 0 === k.length
        ? (0, i.jsx)(ep, { applicationName: r, iconSrc: I, viewAction: E, trackingConfig: D })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: c,
                      title: r,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: E,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: I ?? void 0,
                      info: P,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: D,
                  }),
                  M ? b() : null,
              ],
          });
}
var ex = n(453003),
    ef = n(49999);
function eE(e) {
    var t, n;
    let a,
        {
            analyticsLocations: r,
            application: o,
            channel: c,
            currentUserId: u,
            currentUserPresenceActivity: m,
            hideParty: g,
            hideBanner: p,
            message: A,
            onView: x,
            partyStatusElement: f,
            presenceActivity: E,
        } = e,
        C = (0, V.Ag)(o),
        { iconSrc: _, name: v } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, $.uD)(t.id, e.activity?.icon_override) : null) ??
                    I.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        N =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: a, imageURL: r } = (0, s.cf)(
                        [eo],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = eo.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, ei.A)(),
                                    a =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, $.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                el.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: r });
                    }, [a, r, t]),
                    r
                );
            })({ messageId: A.id, presenceActivity: E, application: o }) ?? void 0,
        { openGameProfileModal: j, launchableAppId: S } =
            ((t = o.id),
            (n = A.author.id),
            (a = (0, q.dB)(t)),
            {
                openGameProfileModal: (0, Z.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: X.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: a,
            }),
        y = (0, en.Ay)({ application: o, analyticsLocations: r }),
        b = l.useMemo(() => {
            if (null != y)
                return { label: T.intl.string(T.t["jaYS/h"]), icon: B.h, trackingArea: h.kY.CLOUD_PLAY, onClick: y };
        }, [y]),
        R = (0, Y.F)(o),
        k = l.useMemo(() => (null != j ? j : null != R && C ? R : void 0), [C, j, R]),
        M = z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: L, hasAlreadyLinked: O, startAuthorization: P } = (0, K.RD)(o),
        D = (0, J.z)(P, O),
        U = !(0, ee.A)(E, A, o.id),
        G = (0, d.n$)(v, A.activity?.type, U),
        es = l.useRef(null),
        ea = (0, s.bG)([Q.A], () => Q.A.getMessages(c.id));
    function er() {
        var e;
        let t = [];
        return (
            (e = A.id),
            !ea.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === et.xL.JOIN, 25) &&
                L &&
                !O &&
                M.enabled &&
                t.push(w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(W.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(H.A, {
                            graphic: {
                                type: "dynamic",
                                component: F.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: o },
                            },
                            title: T.intl.formatToPlainString(T.t["lo6H6+"], { gameName: o.name }),
                            body: T.intl.string(T.t.qYAzOp),
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
              applicationName: v,
              channel: c,
              header: G,
              currentUserId: u,
              launchableAppId: S,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: k,
              iconSrc: _,
              onView: x,
              presenceActivity: E,
              analyticsLocations: r,
              showAuthButton: L && !O && M.enabled,
              startAuthorization: D,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: er,
          })
        : (0, i.jsx)(ex.A, {
              message: A,
              application: o,
              applicationName: v,
              channel: c,
              header: G,
              currentUserId: u,
              isEmbeddedApplication: C,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: k,
              iconSrc: _,
              onView: x,
              presenceActivity: E,
              currentUserPresenceActivity: m,
              hideParty: g,
              partyStatusElement: f,
              analyticsLocations: r,
              showAuthButton: L && !O && M.enabled,
              canPromptAuth: L && !O,
              startAuthorization: D,
              accountLinkButtonRef: es,
              renderAccountLinkUpsell: er,
          });
}
var eI = n(172710);
function eC(e) {
    let { application: t, message: n, header: s, onClickContent: r, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: eg.h_,
                    color: "none",
                    lineClamp: 1,
                    children: T.intl.string(T.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(m.h, {
        header: s,
        title: t.name,
        iconSrc: y.HT.getWhiteIconURL(),
        info: c,
        onClickContent: r,
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
var e_ = n(432017),
    ev = n(693879),
    eN = n(353411),
    ej = n(818023),
    eT = n(206589);
function eS(e) {
    var t;
    let {
            application: n,
            message: s,
            header: r,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: u,
            onClickContent: g,
            onView: p,
            guildId: A,
        } = e,
        x = (0, eT.w)(u, o),
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
        _ = l.useMemo(
            () =>
                null != C
                    ? (0, i.jsxs)("div", {
                          className: eg.Ym,
                          children: [
                              (0, i.jsx)(e_.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(ev.z, {
                                  entry: { start: C, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [C, o?.timestamps?.end],
        ),
        v = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eg.pq,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-xs/normal",
                            className: eg.dS,
                            color: "none",
                            lineClamp: 1,
                            children: _,
                        }),
                        d ? null : c,
                    ],
                }),
            [_, d, c],
        );
    return (0, i.jsx)(m.h, {
        header: r,
        title: I,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, $.uD)(t, o.assets.large_image, [ej.Ig, ej.Ig])) ?? void 0),
        info: v,
        actions: E,
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
function ey(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: a,
            onView: r,
            partyStatusElement: o,
            presenceActivity: c,
            guildId: u,
        } = e,
        m = !(0, ee.A)(c, a, t.id),
        h = (0, d.n$)(t.name, a.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, eI.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(eC, { application: t, message: a, header: h, onClickContent: g, onView: r, guildId: u })
        : (0, i.jsx)(eS, {
              application: t,
              message: a,
              header: h,
              presenceActivity: c,
              hideParty: s,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: r,
              guildId: u,
          });
}
var eb = n(272984);
function eR(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: r } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: r }),
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
            (0, i.jsx)(a.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function ek(e) {
    let { presenceActivity: t, channel: n, activityActionType: a } = e,
        r = (0, s.yK)([R.A], () => (null == t || null == t.party ? [] : Array.from(R.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, U._)(t),
        c = l.useMemo(
            () =>
                r.map((e) => {
                    let t = O.default.getUser(e);
                    return null != t ? t : G.mt;
                }),
            [r],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eR, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: a,
            }),
        [c, o, d, n.guild_id, a],
    );
}
function eM(e) {
    let { analyticsLocations: t, app: n, channel: l, message: a, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, r.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)(
            [M.A],
            () => {
                if (null == a.application) return M.A.findActivity(a.author.id, (e) => e.type === et.$pd.LISTENING);
                {
                    let e = a.author.id;
                    return (
                        (0, D.v)(a) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                        M.A.getApplicationActivity(e, a.application.id)
                    );
                }
            },
            [a, l, m],
        ),
        g = (0, s.bG)([k.A, L.A], () => (0, P.A)(k.A, L.A, u.id), [u.id]),
        p = ek({ presenceActivity: h, channel: l, activityActionType: a.activity?.type });
    return (0, eb.pH)(h?.party?.id) || u.id === y.HT.id
        ? (0, i.jsx)(ey, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: a,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : a.activity?.type === et.xL.STREAM_REQUEST
          ? (0, i.jsx)(S, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: a })
          : (0, i.jsx)(eE, {
                analyticsLocations: t,
                application: u,
                channel: l,
                currentUserId: m,
                currentUserPresenceActivity: g,
                hideParty: o,
                hideBanner: d,
                message: a,
                onView: c,
                partyStatusElement: p,
                presenceActivity: h,
            });
}
