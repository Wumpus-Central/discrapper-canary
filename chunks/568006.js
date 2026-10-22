(n.d(t, { P0: () => eb, em: () => eS }), n(321073));
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
    p = n(616356),
    A = n(763827),
    x = n(486020),
    f = n(723702),
    I = n(485045),
    E = n(762644),
    v = n(221486),
    C = n(768349),
    _ = n(905322),
    j = n(105292);
function N(e) {
    let { currentUserId: t, message: l, application: r, channel: a, analyticsLocations: N, onView: y } = e,
        { staticBannerSrc: T, videoBannerSrc: S, bannerAspectRatio: b } = (0, g.f)(r),
        k = x.Ay.getApplicationIconURL({ id: r.id, icon: r.icon }),
        R = (0, v.i)(r),
        L = (0, s.bG)([p.A], () => p.A.getCurrentUserActiveStream()),
        M = (0, s.bG)([A.A], () => A.A.getChannelId()),
        P = (0, E.A)(l.id),
        D = (0, i.jsx)(i.Fragment, { children: (0, d.uk)(l, a, t) }),
        { analyticsLocations: O } = (0, u.Ay)(N, c.A.REQUEST_TO_STREAM_INVITE_EMBED),
        U = (0, I.W)({ location: "RequestToStreamInviteEmbed" }),
        G = U ? j.intl.string(_.default.K0spYL) : j.intl.string(_.default["5+172e"]),
        w = !1;
    return (
        P
            ? ((G = j.intl.string(_.default.u4QmWl)), (w = !0))
            : null != L
              ? ((G = j.intl.string(_.default.P0wwmM)), (w = !0))
              : M !== a.id
                ? ((G = j.intl.string(_.default.qRXats)), (w = !0))
                : null == R && ((G = j.intl.string(_.default["43zohO"])), (w = !0)),
        (0, i.jsx)(m.h, {
            header: j.intl.string(_.default.nAyuPp),
            title: r.name,
            staticBannerSrc: T,
            videoBannerSrc: S,
            bannerAspectRatio: b,
            iconSrc: k ?? void 0,
            info: D,
            actions:
                l.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: h.kY.STREAM,
                              disabled: w,
                              onClick: () => {
                                  null != R &&
                                      ((0, f.isWindows)() && !U
                                          ? (0, v.X)(R, O)
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
                                                    n.e("943371"),
                                                    n.e("725241"),
                                                    n.e("118577"),
                                                    n.e("39404"),
                                                    n.e("82001"),
                                                    n.e("352435"),
                                                    n.e("191782"),
                                                    n.e("190088"),
                                                ]).then(n.bind(n, 266536));
                                                return (t) =>
                                                    (0, i.jsx)(e, { ...t, sourcePID: R?.pid, analyticsLocations: O });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: r.id,
                linkType: C.J.REQUEST_TO_STREAM,
                guildId: a.guild_id,
                channelId: a.id,
                messageId: l.id,
                onView: y,
                isDeadEnd: P,
            },
        })
    );
}
var y = n(666176),
    T = n(280450),
    S = n(629016),
    b = n(480595),
    k = n(290863),
    R = n(461213),
    L = n(287809),
    M = n(454292),
    P = n(850670),
    D = n(125017),
    O = n(104171),
    U = n(554146),
    G = n(43105),
    w = n(414499),
    B = n(116833);
let V = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var H = n(359800),
    F = n(206828),
    z = n(574660),
    Y = n(379848),
    K = n(409626),
    W = n(692969),
    J = n(928550),
    X = n(232835),
    q = n(970928),
    Z = n(659051),
    $ = n(652215),
    Q = n(359549),
    ee = n(835517),
    et = n(73153),
    en = n(635377);
let ei = new (n.n(en)())({ max: 500 });
class el extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return ei.get(t);
    }
}
let es = new el(et.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (ei.get(t) === n) return !1;
        ei.set(t, n);
    },
});
var er = n(939249),
    ea = n(141628),
    eo = n(313960),
    ed = n(140651),
    ec = n(878831),
    eu = n(657167);
function em(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, ed.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(er.D, { onClick: l, className: eu.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: eu.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: eu.xn,
                children: j.intl.string(j.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: eu.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: eu.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: eu.Cr,
                        children: [
                            m,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: eu.Jl,
                                children: j.intl.string(j.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eh(e) {
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
            presenceActivity: _,
            analyticsLocations: N,
            showAuthButton: y,
            startAuthorization: T,
            accountLinkButtonRef: S,
            renderAccountLinkUpsell: b,
        } = e,
        k = (0, s.bG)([X.A], () => X.A.getMessages(o.id)),
        { actions: R, hasAccountLinkButton: L } = l.useMemo(() => {
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
                                  eo.Ay.launch({ applicationId: g, embedded: p });
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
                            e.activity.type === $.xL.JOIN &&
                            !(0, Z.A)(_, e, r),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                y &&
                    i &&
                    (e.push({
                        label: j.intl.string(j.t.lw71Nf),
                        trackingArea: h.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            T({ analyticsLocations: N });
                        },
                        icon: ea.A,
                        iconButton: !0,
                        buttonRef: S,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, k, _, n.id, t.id, y, T, N, S]),
        M = R.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, ec.A)(M, N);
    let P = R.length > 0,
        D = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eu.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, P),
                }),
            [t, a, o, u, P],
        ),
        O = {
            id: n.id,
            linkType: C.J.RICH_PRESENCE_INVITE,
            onView: v,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: C.f.DEAD,
        };
    return 0 === R.length
        ? (0, i.jsx)(em, { applicationName: a, iconSrc: E, viewAction: I, trackingConfig: O })
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
var eg = n(453003),
    ep = n(49999);
function eA(e) {
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
            onView: f,
            partyStatusElement: I,
            presenceActivity: E,
        } = e,
        v = o.isEmbedded,
        { iconSrc: C, name: _ } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, q.uD)(t.id, e.activity?.icon_override) : null) ??
                    x.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        N =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [es],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = es.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, ee.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, q.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                et.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [r, a, t]),
                    a
                );
            })({ messageId: A.id, presenceActivity: E, application: o }) ?? void 0,
        { openGameProfileModal: y, launchableAppId: T } =
            ((t = o.id),
            (n = A.author.id),
            (r = (0, J.dB)(t)),
            {
                openGameProfileModal: (0, W.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: K.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        S = (0, Q.Ay)({ application: o, analyticsLocations: a }),
        b = l.useMemo(() => {
            if (null != S)
                return { label: j.intl.string(j.t["jaYS/h"]), icon: w.h, trackingArea: h.kY.CLOUD_PLAY, onClick: S };
        }, [S]),
        k = (0, z.F)(o),
        R = l.useMemo(() => (null != y ? y : null != k && v ? k : void 0), [v, y, k]),
        L = V.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: M, hasAlreadyLinked: P, startAuthorization: D } = (0, F.RD)(o),
        O = (0, H.z)(D, P),
        en = !(0, Z.A)(E, A, o.id),
        ei = (0, d.n$)(_, A.activity?.type, en),
        el = l.useRef(null),
        er = (0, s.bG)([X.A], () => X.A.getMessages(c.id));
    function ea() {
        var e;
        let t = [];
        return (
            (e = A.id),
            !er.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === $.xL.JOIN, 25) &&
                M &&
                !P &&
                L.enabled &&
                t.push(U.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(Y.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === U.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(G.A, {
                            graphic: {
                                type: "dynamic",
                                component: B.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: o },
                            },
                            title: j.intl.formatToPlainString(j.t["lo6H6+"], { gameName: o.name }),
                            body: j.intl.string(j.t.qYAzOp),
                            targetElementRef: el,
                            caretConfig: { align: "start" },
                            shouldShow: !0,
                            gradientColor: "purple",
                            onRequestClose: () => n(ep.i.USER_DISMISS),
                        });
                },
            })
        );
    }
    return en
        ? (0, i.jsx)(eh, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: ei,
              currentUserId: u,
              launchableAppId: T,
              isEmbeddedApplication: v,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: f,
              presenceActivity: E,
              analyticsLocations: a,
              showAuthButton: M && !P && L.enabled,
              startAuthorization: O,
              accountLinkButtonRef: el,
              renderAccountLinkUpsell: ea,
          })
        : (0, i.jsx)(eg.A, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: ei,
              currentUserId: u,
              isEmbeddedApplication: v,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: f,
              presenceActivity: E,
              currentUserPresenceActivity: m,
              hideParty: g,
              partyStatusElement: I,
              analyticsLocations: a,
              showAuthButton: M && !P && L.enabled,
              canPromptAuth: M && !P,
              startAuthorization: O,
              accountLinkButtonRef: el,
              renderAccountLinkUpsell: ea,
          });
}
var ex = n(172710);
function ef(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: eu.h_,
                    color: "none",
                    lineClamp: 1,
                    children: j.intl.string(j.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(m.h, {
        header: s,
        title: t.name,
        iconSrc: y.HT.getWhiteIconURL(),
        info: c,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: C.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var eI = n(432017),
    eE = n(693879),
    ev = n(353411),
    eC = n(818023),
    e_ = n(206589);
function ej(e) {
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
        x = (0, e_.w)(u, o),
        f = (0, ev.Gq)(o, s.author, "Invite Embed"),
        I = l.useMemo(() => {
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
        E =
            null != o && null != o.details && null != o.state
                ? j.intl.formatToPlainString(j.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        v = o?.timestamps?.start ?? o?.created_at,
        _ = l.useMemo(
            () =>
                null != v
                    ? (0, i.jsxs)("div", {
                          className: eu.Ym,
                          children: [
                              (0, i.jsx)(eI.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(eE.z, {
                                  entry: { start: v, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [v, o?.timestamps?.end],
        ),
        N = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: eu.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: eu.dS,
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
        header: a,
        title: E,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, q.uD)(t, o.assets.large_image, [eC.Ig, eC.Ig])) ?? void 0),
        info: N,
        actions: I,
        onClickContent: g,
        trackingConfig: {
            id: n.id,
            linkType: C.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eN(e) {
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
        m = !(0, Z.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, ex.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(ef, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(ej, {
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
var ey = n(272984);
function eT(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8;) u.push(O.mt);
    for (; u.length < l && u.length < 8;) u.push(null);
    return (0, i.jsxs)("div", {
        className: eu.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(O.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: O.DN.SIZE_16,
                    dimEmptyUsers: !0,
                    avatarBackground: !0,
                }),
            (0, i.jsx)(r.E, { variant: "text-xs/medium", color: "none", children: c }),
        ],
    });
}
function eS(e) {
    let { presenceActivity: t, channel: n, activityActionType: r } = e,
        a = (0, s.yK)([S.A], () => (null == t || null == t.party ? [] : Array.from(S.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, D._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = L.default.getUser(e);
                    return null != t ? t : O.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eT, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function eb(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([T.default], () => T.default.getId()),
        h = (0, s.bG)(
            [k.A],
            () => {
                if (null == r.application) return k.A.findActivity(r.author.id, (e) => e.type === $.$pd.LISTENING);
                {
                    let e = r.author.id;
                    return (
                        (0, P.v)(r) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                        k.A.getApplicationActivity(e, r.application.id)
                    );
                }
            },
            [r, l, m],
        ),
        g = (0, s.bG)([b.A, R.A], () => (0, M.A)(b.A, R.A, u.id), [u.id]),
        p = eS({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, ey.pH)(h?.party?.id) || u.id === y.HT.id
        ? (0, i.jsx)(eN, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === $.xL.STREAM_REQUEST
          ? (0, i.jsx)(N, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
          : (0, i.jsx)(eA, {
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
