(n.d(t, { P0: () => eC, em: () => ev }), n(321073));
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
                analyticsLocations: O,
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
    U = n(414499),
    G = n(359800),
    w = n(206828),
    B = n(574660),
    V = n(409626),
    H = n(692969),
    F = n(928550),
    z = n(970928),
    Y = n(659051),
    K = n(359549),
    W = n(835517),
    J = n(73153),
    X = n(635377);
let Z = new (n.n(X)())({ max: 500 });
class q extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return Z.get(t);
    }
}
let $ = new q(J.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (Z.get(t) === n) return !1;
        Z.set(t, n);
    },
});
var Q = n(939249),
    ee = n(452295),
    et = n(140651),
    en = n(232835),
    ei = n(652215),
    el = n(878831),
    es = n(657167);
function er(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: a, secondaryColor: o } = (0, et.A)(n),
        d = `linear-gradient(45deg, ${a}, ${o})`,
        c = (0, h.DC)(s),
        u = (0, i.jsx)(r.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(Q.D, { onClick: l, className: es.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: es.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: es.xn,
                children: j.intl.string(j.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: es.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: es.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: es.Cr,
                        children: [
                            m,
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: es.Jl,
                                children: j.intl.string(j.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: o,
            header: c,
            currentUserId: u,
            launchableAppId: g,
            tryWithGdnAction: p,
            staticBannerSrc: A,
            hideBanner: x = !1,
            onClickContent: f,
            iconSrc: I,
            onView: E,
            presenceActivity: v,
            analyticsLocations: _,
        } = e,
        N = (0, s.bG)([en.A], () => en.A.getMessages(o.id)),
        y = l.useMemo(() => {
            var e, i;
            let l = [];
            return (null != g
                ? (l = [
                      {
                          label: j.intl.string(j.t["s+J8Dl"]),
                          trackingArea: h.kY.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              ee.A.launch({ applicationId: g });
                          },
                      },
                  ])
                : null != p && (l = [p]),
            l.length > 0 &&
                ((e = t.id),
                (i = n.id),
                N.hasAnyAfter(
                    e,
                    (e) =>
                        null != e.activity &&
                        e.application?.id === i &&
                        e.activity.type === ei.xL.JOIN &&
                        !(0, Y.A)(v, e, i),
                    25,
                )))
                ? []
                : l;
        }, [g, p, N, v, n.id, t.id]),
        T = y.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, el.A)(T, _);
    let S = y.length > 0,
        b = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: es.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, d.BE)(t, a, o, u, S),
                }),
            [t, a, o, u, S],
        ),
        k = {
            id: n.id,
            linkType: C.J.RICH_PRESENCE_INVITE,
            onView: E,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: C.f.DEAD,
        };
    return 0 === y.length
        ? (0, i.jsx)(er, { applicationName: a, iconSrc: I, viewAction: f, trackingConfig: k })
        : (0, i.jsx)(m.h, {
              header: c,
              title: a,
              staticBannerSrc: A,
              hideBanner: x,
              onClickBanner: f,
              bannerAspectRatio: m.u.ACTIVITY,
              iconSrc: I ?? void 0,
              info: b,
              actions: y,
              primaryActionFirst: !0,
              onClickContent: f,
              trackingConfig: k,
          });
}
var eo = n(453003);
function ed(e) {
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
                    (e.activity?.icon_override != null ? (0, z.uD)(t.id, e.activity?.icon_override) : null) ??
                    x.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        N =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: r, imageURL: a } = (0, s.cf)(
                        [$],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = $.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, W.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, z.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                J.h.dispatch({
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
            (r = (0, F.dB)(t)),
            {
                openGameProfileModal: (0, H.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: V.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: r,
            }),
        S = (0, K.Ay)({ application: o, analyticsLocations: a }),
        b = l.useMemo(() => {
            if (null != S)
                return { label: j.intl.string(j.t["jaYS/h"]), icon: U.h, trackingArea: h.kY.CLOUD_PLAY, onClick: S };
        }, [S]),
        k = (0, B.F)(o),
        R = l.useMemo(() => (null != y ? y : null != k && v ? k : void 0), [v, y, k]),
        { canStartAuthorization: L, hasAlreadyLinked: M, startAuthorization: P } = (0, w.RD)(o),
        D = (0, G.z)(P, M),
        O = !(0, Y.A)(E, A, o.id),
        X = (0, d.n$)(_, A.activity?.type, O);
    return O
        ? (0, i.jsx)(ea, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: X,
              currentUserId: u,
              launchableAppId: T,
              tryWithGdnAction: b,
              staticBannerSrc: N,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: f,
              presenceActivity: E,
              analyticsLocations: a,
          })
        : (0, i.jsx)(eo.A, {
              message: A,
              application: o,
              applicationName: _,
              channel: c,
              header: X,
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
              canPromptAuth: L && !M,
              startAuthorization: D,
          });
}
var ec = n(172710);
function eu(e) {
    let { application: t, message: n, header: s, onClickContent: a, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(r.E, {
                    variant: "text-xs/medium",
                    className: es.h_,
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
var em = n(432017),
    eh = n(693879),
    eg = n(353411),
    ep = n(818023),
    eA = n(206589);
function ex(e) {
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
        x = (0, eA.w)(u, o),
        f = (0, eg.Gq)(o, s.author, "Invite Embed"),
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
                          className: es.Ym,
                          children: [
                              (0, i.jsx)(em.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(eh.z, {
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
                    className: es.pq,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-xs/normal",
                            className: es.dS,
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
                : (0, z.uD)(t, o.assets.large_image, [ep.Ig, ep.Ig])) ?? void 0),
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
function ef(e) {
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
        m = !(0, Y.A)(c, r, t.id),
        h = (0, d.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != c) return () => (0, ec.Mp)(c);
        }, [c]);
    return m
        ? (0, i.jsx)(eu, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(ex, {
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
var eI = n(272984);
function eE(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, d.SJ)({ maxPartySize: l, partySize: o, activityActionType: a }),
        u = [...t];
    for (; u.length < n && u.length < 8;) u.push(O.mt);
    for (; u.length < l && u.length < 8;) u.push(null);
    return (0, i.jsxs)("div", {
        className: es.UF,
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
function ev(e) {
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
            (0, i.jsx)(eE, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: r,
            }),
        [c, o, d, n.guild_id, r],
    );
}
function eC(e) {
    let { analyticsLocations: t, app: n, channel: l, message: r, hideParty: o, hideBanner: d, onView: c } = e,
        u = (0, a.b)(n),
        m = (0, s.bG)([T.default], () => T.default.getId()),
        h = (0, s.bG)(
            [k.A],
            () => {
                if (null == r.application) return k.A.findActivity(r.author.id, (e) => e.type === ei.$pd.LISTENING);
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
        p = ev({ presenceActivity: h, channel: l, activityActionType: r.activity?.type });
    return (0, eI.pH)(h?.party?.id) || u.id === y.HT.id
        ? (0, i.jsx)(ef, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: r,
              onView: c,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : r.activity?.type === ei.xL.STREAM_REQUEST
          ? (0, i.jsx)(N, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: r })
          : (0, i.jsx)(ed, {
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
