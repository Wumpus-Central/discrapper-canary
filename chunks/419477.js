(n.d(t, { P0: () => e_, em: () => eC }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(350835),
    r = n(17928),
    a = n(834730),
    o = n(138175),
    d = n(192308),
    c = n(456060),
    u = n(793574),
    m = n(688810),
    h = n(572211),
    g = n(354287),
    p = n(112150),
    A = n(616356),
    x = n(763827),
    f = n(486020),
    I = n(723702),
    E = n(485045),
    v = n(762644),
    C = n(221486),
    _ = n(768349),
    j = n(181712),
    N = n(105292);
function y(e) {
    let { currentUserId: t, message: l, application: s, channel: a, analyticsLocations: o, onView: y } = e,
        { staticBannerSrc: T, videoBannerSrc: S, bannerAspectRatio: b } = (0, p.f)(s),
        k = f.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }),
        R = (0, C.i)(s),
        L = (0, r.bG)([A.A], () => A.A.getCurrentUserActiveStream()),
        M = (0, r.bG)([x.A], () => x.A.getChannelId()),
        P = (0, v.A)(l.id),
        D = (0, i.jsx)(i.Fragment, { children: (0, c.uk)(l, a, t) }),
        { analyticsLocations: O } = (0, m.Ay)(o, u.A.REQUEST_TO_STREAM_INVITE_EMBED),
        U = (0, E.W)({ location: "RequestToStreamInviteEmbed" }),
        G = U ? N.intl.string(j.default.K0spYL) : N.intl.string(j.default["5+172e"]),
        w = !1;
    return (
        P
            ? ((G = N.intl.string(j.default.u4QmWl)), (w = !0))
            : null != L
              ? ((G = N.intl.string(j.default.P0wwmM)), (w = !0))
              : M !== a.id
                ? ((G = N.intl.string(j.default.qRXats)), (w = !0))
                : null == R && ((G = N.intl.string(j.default["43zohO"])), (w = !0)),
        (0, i.jsx)(h.h, {
            header: N.intl.string(j.default.nAyuPp),
            title: s.name,
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
                              trackingArea: g.kY.STREAM,
                              disabled: w,
                              onClick: () => {
                                  null != R &&
                                      ((0, I.isWindows)() && !U
                                          ? (0, C.X)(R, O)
                                          : (0, d.openModalLazy)(async () => {
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
                                                    n.e("312159"),
                                                    n.e("942474"),
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
                id: s.id,
                linkType: _.J.REQUEST_TO_STREAM,
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
var T = n(666176),
    S = n(280450),
    b = n(629016),
    k = n(480595),
    R = n(290863),
    L = n(461213),
    M = n(287809),
    P = n(454292),
    D = n(850670),
    O = n(125017),
    U = n(104171),
    G = n(414499),
    w = n(359800),
    B = n(206828),
    H = n(574660),
    V = n(409626),
    F = n(692969),
    z = n(928550),
    Y = n(970928),
    K = n(659051),
    W = n(359549),
    J = n(835517),
    X = n(73153),
    Z = n(635377);
let q = new (n.n(Z)())({ max: 500 });
class $ extends r.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return q.get(t);
    }
}
let Q = new $(X.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (q.get(t) === n) return !1;
        q.set(t, n);
    },
});
var ee = n(939249),
    et = n(452295),
    en = n(140651),
    ei = n(232835),
    el = n(652215),
    es = n(878831),
    er = n(657167);
function ea(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: r, secondaryColor: o } = (0, en.A)(n),
        d = `linear-gradient(45deg, ${r}, ${o})`,
        c = (0, g.DC)(s),
        u = (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(ee.D, { onClick: l, className: er.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: c,
        className: er.Xy,
        style: { background: d },
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: er.xn,
                children: N.intl.string(N.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: er.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: er.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: er.Cr,
                        children: [
                            m,
                            (0, i.jsx)(a.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: er.Jl,
                                children: N.intl.string(N.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eo(e) {
    let {
            message: t,
            application: n,
            applicationName: s,
            channel: o,
            header: d,
            currentUserId: u,
            launchableAppId: m,
            tryWithGdnAction: p,
            staticBannerSrc: A,
            hideBanner: x = !1,
            onClickContent: f,
            iconSrc: I,
            onView: E,
            presenceActivity: v,
            analyticsLocations: C,
        } = e,
        j = (0, r.bG)([ei.A], () => ei.A.getMessages(o.id)),
        y = l.useMemo(() => {
            var e, i;
            let l = [];
            return (null != m
                ? (l = [
                      {
                          label: N.intl.string(N.t["s+J8Dl"]),
                          trackingArea: g.kY.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              et.A.launch({ applicationId: m });
                          },
                      },
                  ])
                : null != p && (l = [p]),
            l.length > 0 &&
                ((e = t.id),
                (i = n.id),
                j.hasAnyAfter(
                    e,
                    (e) =>
                        null != e.activity &&
                        e.application?.id === i &&
                        e.activity.type === el.xL.JOIN &&
                        !(0, K.A)(v, e, i),
                    25,
                )))
                ? []
                : l;
        }, [m, p, j, v, n.id, t.id]),
        T = y.some((e) => e.trackingArea === g.kY.CLOUD_PLAY);
    (0, es.A)(T, C);
    let S = y.length > 0,
        b = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: er.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, c.BE)(t, s, o, u, S),
                }),
            [t, s, o, u, S],
        ),
        k = {
            id: n.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: E,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: _.f.DEAD,
        };
    return 0 === y.length
        ? (0, i.jsx)(ea, { applicationName: s, iconSrc: I, viewAction: f, trackingConfig: k })
        : (0, i.jsx)(h.h, {
              header: d,
              title: s,
              staticBannerSrc: A,
              hideBanner: x,
              onClickBanner: f,
              bannerAspectRatio: h.u.ACTIVITY,
              iconSrc: I ?? void 0,
              info: b,
              actions: y,
              primaryActionFirst: !0,
              onClickContent: f,
              trackingConfig: k,
          });
}
var ed = n(453003);
function ec(e) {
    var t, n;
    let s,
        {
            analyticsLocations: a,
            application: o,
            channel: d,
            currentUserId: u,
            currentUserPresenceActivity: m,
            hideParty: h,
            hideBanner: p,
            message: A,
            onView: x,
            partyStatusElement: I,
            presenceActivity: E,
        } = e,
        v = o.isEmbedded,
        { iconSrc: C, name: _ } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, Y.uD)(t.id, e.activity?.icon_override) : null) ??
                    f.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(A, o),
        j =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: s, imageURL: a } = (0, r.cf)(
                        [Q],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = Q.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, J.A)(),
                                    r =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, Y.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                        s !== a &&
                            (function (e) {
                                let { messageId: t, coverImageURL: n } = e;
                                X.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: a });
                    }, [s, a, t]),
                    a
                );
            })({ messageId: A.id, presenceActivity: E, application: o }) ?? void 0,
        { openGameProfileModal: y, launchableAppId: T } =
            ((t = o.id),
            (n = A.author.id),
            (s = (0, z.dB)(t)),
            {
                openGameProfileModal: (0, F.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: t,
                    source: V.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: s,
            }),
        S = (0, W.Ay)({ application: o, analyticsLocations: a }),
        b = l.useMemo(() => {
            if (null != S)
                return { label: N.intl.string(N.t["jaYS/h"]), icon: G.h, trackingArea: g.kY.CLOUD_PLAY, onClick: S };
        }, [S]),
        k = (0, H.F)(o),
        R = l.useMemo(() => (null != y ? y : null != k && v ? k : void 0), [v, y, k]),
        { canStartAuthorization: L, hasAlreadyLinked: M, startAuthorization: P } = (0, B.RD)(o),
        D = (0, w.z)(P, M),
        O = !(0, K.A)(E, A, o.id),
        U = (0, c.n$)(_, A.activity?.type, O);
    return O
        ? (0, i.jsx)(eo, {
              message: A,
              application: o,
              applicationName: _,
              channel: d,
              header: U,
              currentUserId: u,
              launchableAppId: T,
              tryWithGdnAction: b,
              staticBannerSrc: j,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: x,
              presenceActivity: E,
              analyticsLocations: a,
          })
        : (0, i.jsx)(ed.A, {
              message: A,
              application: o,
              applicationName: _,
              channel: d,
              header: U,
              currentUserId: u,
              isEmbeddedApplication: v,
              tryWithGdnAction: b,
              staticBannerSrc: j,
              hideBanner: p,
              onClickContent: R,
              iconSrc: C,
              onView: x,
              presenceActivity: E,
              currentUserPresenceActivity: m,
              hideParty: h,
              partyStatusElement: I,
              analyticsLocations: a,
              canPromptAuth: L && !M,
              startAuthorization: D,
          });
}
var eu = n(172710);
function em(e) {
    let { application: t, message: n, header: s, onClickContent: r, onView: o, guildId: d } = e,
        c = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: er.h_,
                    color: "none",
                    lineClamp: 1,
                    children: N.intl.string(N.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(h.h, {
        header: s,
        title: t.name,
        iconSrc: T.HT.getWhiteIconURL(),
        info: c,
        onClickContent: r,
        trackingConfig: {
            id: t.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: d,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var eh = n(432017),
    eg = n(693879),
    ep = n(353411),
    eA = n(818023),
    ex = n(206589);
function ef(e) {
    var t;
    let {
            application: n,
            message: s,
            header: r,
            presenceActivity: o,
            hideParty: d,
            partyStatusElement: c,
            currentUserPresenceActivity: u,
            onClickContent: m,
            onView: p,
            guildId: A,
        } = e,
        x = (0, ex.w)(u, o),
        f = (0, ep.Gq)(o, s.author, "Invite Embed"),
        I = l.useMemo(() => {
            let e = [];
            return (
                x ||
                    e.push({
                        label: f.label ?? N.intl.string(N.t.VJlc0S),
                        trackingArea: g.kY.SYNC,
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
                ? N.intl.formatToPlainString(N.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        v = o?.timestamps?.start ?? o?.created_at,
        C = l.useMemo(
            () =>
                null != v
                    ? (0, i.jsxs)("div", {
                          className: er.Ym,
                          children: [
                              (0, i.jsx)(eh.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(eg.z, {
                                  entry: { start: v, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [v, o?.timestamps?.end],
        ),
        j = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: er.pq,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-xs/normal",
                            className: er.dS,
                            color: "none",
                            lineClamp: 1,
                            children: C,
                        }),
                        d ? null : c,
                    ],
                }),
            [C, d, c],
        );
    return (0, i.jsx)(h.h, {
        header: r,
        title: E,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, Y.uD)(t, o.assets.large_image, [eA.Ig, eA.Ig])) ?? void 0),
        info: j,
        actions: I,
        onClickContent: m,
        trackingConfig: {
            id: n.id,
            linkType: _.J.RICH_PRESENCE_INVITE,
            onView: p,
            referrerId: s.author.id,
            guildId: A,
            channelId: s.channel_id,
            messageId: s.id,
        },
    });
}
function eI(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: s,
            message: r,
            onView: a,
            partyStatusElement: o,
            presenceActivity: d,
            guildId: u,
        } = e,
        m = !(0, K.A)(d, r, t.id),
        h = (0, c.n$)(t.name, r.activity?.type, m),
        g = l.useMemo(() => {
            if (null != d) return () => (0, eu.Mp)(d);
        }, [d]);
    return m
        ? (0, i.jsx)(em, { application: t, message: r, header: h, onClickContent: g, onView: a, guildId: u })
        : (0, i.jsx)(ef, {
              application: t,
              message: r,
              header: h,
              presenceActivity: d,
              hideParty: s,
              partyStatusElement: o,
              currentUserPresenceActivity: n,
              onClickContent: g,
              onView: a,
              guildId: u,
          });
}
var eE = n(272984);
function ev(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: r } = e,
        o = Math.max(n, t.length),
        d = (0, c.SJ)({ maxPartySize: l, partySize: o, activityActionType: r }),
        u = [...t];
    for (; u.length < n && u.length < 8;) u.push(U.mt);
    for (; u.length < l && u.length < 8;) u.push(null);
    return (0, i.jsxs)("div", {
        className: er.UF,
        children: [
            u.length > 0 &&
                (0, i.jsx)(U.Ay, {
                    guildId: s,
                    users: u,
                    max: l > 0 ? Math.min(l, 8) : 8,
                    size: U.DN.SIZE_16,
                    dimEmptyUsers: !0,
                    avatarBackground: !0,
                }),
            (0, i.jsx)(a.E, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function eC(e) {
    let { presenceActivity: t, channel: n, activityActionType: s } = e,
        a = (0, r.yK)([b.A], () => (null == t || null == t.party ? [] : Array.from(b.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: d } = (0, O._)(t),
        c = l.useMemo(
            () =>
                a.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : U.mt;
                }),
            [a],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(ev, {
                partyMembers: c,
                partySize: o,
                maxPartySize: d,
                guildId: n.guild_id,
                activityActionType: s,
            }),
        [c, o, d, n.guild_id, s],
    );
}
function e_(e) {
    let { analyticsLocations: t, app: n, channel: l, message: a, hideParty: d, hideBanner: c, onView: u } = e,
        m = (0, o.b)(n),
        h = (0, r.bG)([S.default], () => S.default.getId()),
        g = (0, r.bG)(
            [R.A],
            () => {
                if (null == a.application) return R.A.findActivity(a.author.id, (e) => e.type === s.$.LISTENING);
                {
                    let e = a.author.id;
                    return (
                        (0, D.v)(a) && (e = e === h && l.isPrivate() ? l.getRecipientId() : h),
                        R.A.getApplicationActivity(e, a.application.id)
                    );
                }
            },
            [a, l, h],
        ),
        p = (0, r.bG)([k.A, L.A], () => (0, P.A)(k.A, L.A, m.id), [m.id]),
        A = eC({ presenceActivity: g, channel: l, activityActionType: a.activity?.type });
    return (0, eE.pH)(g?.party?.id) || m.id === T.HT.id
        ? (0, i.jsx)(eI, {
              application: m,
              currentUserPresenceActivity: p,
              hideParty: d,
              message: a,
              onView: u,
              partyStatusElement: A,
              presenceActivity: g,
              guildId: l.guild_id,
          })
        : a.activity?.type === el.xL.STREAM_REQUEST
          ? (0, i.jsx)(y, { analyticsLocations: t, application: m, channel: l, currentUserId: h, message: a })
          : (0, i.jsx)(ec, {
                analyticsLocations: t,
                application: m,
                channel: l,
                currentUserId: h,
                currentUserPresenceActivity: p,
                hideParty: d,
                hideBanner: c,
                message: a,
                onView: u,
                partyStatusElement: A,
                presenceActivity: g,
            });
}
