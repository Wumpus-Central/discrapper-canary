n.d(t, { P0: () => ek, em: () => eM }), n(321073);
var i = n(627968),
    l = n(64700),
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
    f = n(760751),
    E = n(763827),
    C = n(486020),
    _ = n(723702),
    I = n(935208),
    v = n(820672),
    N = n(768349),
    j = n(783198),
    T = n(375708);
function S(e) {
    let { currentUserId: t, message: l, application: a, channel: r, analyticsLocations: S, onView: y } = e,
        { staticBannerSrc: b, videoBannerSrc: R, bannerAspectRatio: L } = (0, g.f)(a),
        M = C.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }),
        k = (0, s.bG)([p.Ay, f.A], () =>
            p.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === a.id) return !0;
                let n = f.A.getGameByApplication(a);
                return null != n && t === n.id;
            }),
        ),
        O = (0, s.bG)([x.A], () => x.A.getCurrentUserActiveStream()),
        P = (0, s.bG)([E.A], () => E.A.getChannelId()),
        D = I.default.extractTimestamp(l.id) + v.M < Date.now(),
        U = (0, i.jsx)(i.Fragment, { children: (0, c.Wf)(l, r, t) }),
        { analyticsLocations: G } = (0, u.Ay)(S, d.A.REQUEST_TO_STREAM_INVITE_EMBED),
        w = T.intl.string(j.default["5+172e"]),
        H = !1;
    return (
        D
            ? ((w = T.intl.string(j.default.u4QmWl)), (H = !0))
            : null != O
              ? ((w = T.intl.string(j.default.P0wwmM)), (H = !0))
              : P !== r.id
                ? ((w = T.intl.string(j.default.qRXats)), (H = !0))
                : null == k && ((w = T.intl.string(j.default["43zohO"])), (H = !0)),
        (0, i.jsx)(m.h, {
            header: T.intl.string(j.default.nAyuPp),
            title: a.name,
            staticBannerSrc: b,
            videoBannerSrc: R,
            bannerAspectRatio: L,
            iconSrc: M ?? void 0,
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
                                  null != k &&
                                      ((0, _.isWindows)()
                                          ? (0, A.A)(k.pid)
                                          : (0, o.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("16123"),
                                                    n.e("18710"),
                                                    n.e("76171"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("44801"),
                                                    n.e("44727"),
                                                    n.e("59778"),
                                                    n.e("25241"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("98610"),
                                                    n.e("91782"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 477156));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: G });
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
                isDeadEnd: D,
            },
        })
    );
}
var y = n(666176),
    b = n(280450),
    R = n(629016),
    L = n(480595),
    M = n(290863),
    k = n(461213),
    O = n(287809),
    P = n(454292),
    D = n(850670),
    U = n(125017),
    G = n(104171),
    w = n(554146),
    H = n(43105),
    B = n(414499),
    V = n(116833),
    F = n(735991);
let z = (0, n(945810).mj)({
    name: "2025-12-game-invite-account-linking-entry-point",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var J = n(359800),
    Y = n(206828),
    K = n(587895),
    W = n(574660),
    X = n(379848),
    Z = n(409626),
    q = n(692969),
    Q = n(928550),
    $ = n(232835),
    ee = n(970928),
    et = n(659051),
    en = n(652215),
    ei = n(737393),
    el = n(835517),
    es = n(228366),
    ea = n(635377);
let er = new (n.n(ea)())({ max: 500 });
class eo extends s.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return er.get(t);
    }
}
let ec = new eo(es.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (er.get(t) === n) return !1;
        er.set(t, n);
    },
});
var ed = n(939249),
    eu = n(141628),
    em = n(780907),
    eh = n(140651),
    eg = n(878831),
    ep = n(435650);
function eA(e) {
    let { applicationName: t, iconSrc: n, viewAction: l, trackingConfig: s } = e,
        { primaryColor: r, secondaryColor: o } = (0, eh.A)(n),
        c = `linear-gradient(45deg, ${r}, ${o})`,
        d = (0, h.DC)(s),
        u = (0, i.jsx)(a.E, { variant: "text-sm/semibold", color: "none", children: t }),
        m = null == l ? u : (0, i.jsx)(ed.D, { onClick: l, className: ep.Qi, children: u });
    return (0, i.jsxs)("div", {
        ref: d,
        className: ep.Xy,
        style: { background: c },
        children: [
            (0, i.jsx)(a.E, {
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
                            (0, i.jsx)(a.E, {
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
            iconSrc: C,
            onView: _,
            presenceActivity: I,
            analyticsLocations: v,
            showAuthButton: j,
            startAuthorization: S,
            accountLinkButtonRef: y,
            renderAccountLinkUpsell: b,
        } = e,
        R = (0, s.bG)([$.A], () => $.A.getMessages(o.id)),
        { actions: L, hasAccountLinkButton: M } = l.useMemo(() => {
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
                var s, a;
                if (
                    ((s = t.id),
                    (a = n.id),
                    R.hasAnyAfter(
                        s,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === a &&
                            e.activity.type === en.xL.JOIN &&
                            !(0, et.A)(I, e, a),
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
                        icon: eu.A,
                        iconButton: !0,
                        buttonRef: y,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [p, g, A, R, I, n.id, t.id, j, S, v, y]),
        k = L.some((e) => e.trackingArea === h.kY.CLOUD_PLAY);
    (0, eg.A)(k, v);
    let O = L.length > 0,
        P = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
                    variant: "text-xs/medium",
                    className: ep.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, c.BE)(t, r, o, u, O),
                }),
            [t, r, o, u, O],
        ),
        D = {
            id: n.id,
            linkType: N.J.RICH_PRESENCE_INVITE,
            onView: _,
            referrerId: t.author.id,
            guildId: o.guild_id,
            channelId: t.channel_id,
            messageId: t.id,
            isDeadEnd: !0,
            appEmbedState: N.f.DEAD,
        };
    return 0 === L.length
        ? (0, i.jsx)(eA, { applicationName: r, iconSrc: C, viewAction: E, trackingConfig: D })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: d,
                      title: r,
                      staticBannerSrc: x,
                      hideBanner: f,
                      onClickBanner: E,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: C ?? void 0,
                      info: P,
                      actions: L,
                      primaryActionFirst: !0,
                      onClickContent: E,
                      trackingConfig: D,
                  }),
                  M ? b() : null,
              ],
          });
}
var ef = n(453003),
    eE = n(49999);
function eC(e) {
    var t, n;
    let a,
        r,
        {
            analyticsLocations: o,
            application: d,
            channel: u,
            currentUserId: m,
            currentUserPresenceActivity: g,
            hideParty: p,
            hideBanner: A,
            message: x,
            onView: E,
            partyStatusElement: _,
            presenceActivity: I,
        } = e,
        v = (0, F.Ag)(d),
        { iconSrc: N, name: j } = (function (e, t) {
            let { bot: n } = t;
            return {
                iconSrc:
                    (e.activity?.icon_override != null ? (0, ee.uD)(t.id, e.activity?.icon_override) : null) ??
                    C.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: n }),
                name: e.activity?.name_override ?? t.name,
            };
        })(x, d),
        S =
            ((e) => {
                let { messageId: t, presenceActivity: n, application: i } = e,
                    { cachedImageURL: a, imageURL: r } = (0, s.cf)(
                        [ec],
                        () =>
                            (function (e) {
                                let { messageId: t, presenceActivity: n, application: i } = e,
                                    l = ec.getCoverImageURL({ messageId: t });
                                if (null === l) return { cachedImageURL: null, imageURL: null };
                                let s = 600 * (0, el.A)(),
                                    a =
                                        (n?.assets?.invite_cover_image != null
                                            ? (0, ee.uD)(n.application_id, n.assets.invite_cover_image, s)
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
                                es.h.dispatch({
                                    type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
                                    messageId: t,
                                    coverImageURL: n,
                                });
                            })({ messageId: t, coverImageURL: r });
                    }, [a, r, t]),
                    r
                );
            })({ messageId: x.id, presenceActivity: I, application: d }) ?? void 0,
        { openGameProfileModal: y, launchableAppId: b } =
            ((t = d.id),
            (n = x.author.id),
            (a = (0, Q.d)(t)),
            (r = (0, s.bG)([K.A, f.A], () => {
                let e = K.A.getApplication(t);
                return null != e ? f.A.getGameByApplication(e) : null;
            }, [t])),
            {
                openGameProfileModal: (0, q.A)({
                    location: "Rich Presence Activity Invite Embed",
                    applicationId: r?.id ?? void 0,
                    source: Z.GameProfileSources.Embed,
                    trackEntryPointImpression: !0,
                    sourceUserId: n,
                }),
                launchableAppId: a,
            }),
        R = (0, ei.Ay)({ application: d, analyticsLocations: o }),
        L = l.useMemo(() => {
            if (null != R)
                return { label: T.intl.string(T.t["jaYS/h"]), icon: B.h, trackingArea: h.kY.CLOUD_PLAY, onClick: R };
        }, [R]),
        M = (0, W.F)(d),
        k = l.useMemo(() => (null != y ? y : null != M && v ? M : void 0), [v, y, M]),
        O = z.useConfig({ location: "RichPresenceGameActivityInviteEmbed" }),
        { canStartAuthorization: P, hasAlreadyLinked: D, startAuthorization: U } = (0, Y.RD)(d),
        G = (0, J.z)(U, D),
        ea = !(0, et.A)(I, x, d.id),
        er = (0, c.n$)(j, x.activity?.type, ea),
        eo = l.useRef(null),
        ed = (0, s.bG)([$.A], () => $.A.getMessages(u.id));
    function eu() {
        var e;
        let t = [];
        return (
            (e = x.id),
            !ed.hasAnyAfter(e, (e) => null != e.activity && e.activity.type === en.xL.JOIN, 25) &&
                P &&
                !D &&
                O.enabled &&
                t.push(w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL),
            (0, i.jsx)(X.Ay, {
                contentTypes: t,
                children: (e) => {
                    let { visibleContent: t, markAsDismissed: n } = e;
                    if (t === w.M.GAME_INVITE_ACCOUNT_LINK_UPSELL)
                        return (0, i.jsx)(H.A, {
                            graphic: {
                                type: "dynamic",
                                component: V.DynamicGraphicComponent.ACCOUNT_LINK_DISPLAY,
                                props: { application: d },
                            },
                            title: T.intl.formatToPlainString(T.t["lo6H6+"], { gameName: d.name }),
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
    return ea
        ? (0, i.jsx)(ex, {
              message: x,
              application: d,
              applicationName: j,
              channel: u,
              header: er,
              currentUserId: m,
              launchableAppId: b,
              isEmbeddedApplication: v,
              tryWithGdnAction: L,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: k,
              iconSrc: N,
              onView: E,
              presenceActivity: I,
              analyticsLocations: o,
              showAuthButton: P && !D && O.enabled,
              startAuthorization: G,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: eu,
          })
        : (0, i.jsx)(ef.A, {
              message: x,
              application: d,
              applicationName: j,
              channel: u,
              header: er,
              currentUserId: m,
              launchableAppId: b,
              isEmbeddedApplication: v,
              tryWithGdnAction: L,
              staticBannerSrc: S,
              hideBanner: A,
              onClickContent: k,
              iconSrc: N,
              onView: E,
              presenceActivity: I,
              currentUserPresenceActivity: g,
              hideParty: p,
              partyStatusElement: _,
              analyticsLocations: o,
              showAuthButton: P && !D && O.enabled,
              canPromptAuth: P && !D,
              startAuthorization: G,
              accountLinkButtonRef: eo,
              renderAccountLinkUpsell: eu,
          });
}
var e_ = n(172710);
function eI(e) {
    let { application: t, message: n, header: s, onClickContent: r, onView: o, guildId: c } = e,
        d = l.useMemo(
            () =>
                (0, i.jsx)(a.E, {
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
        iconSrc: y.HT.getWhiteIconURL(),
        info: d,
        onClickContent: r,
        trackingConfig: {
            id: t.id,
            linkType: N.J.RICH_PRESENCE_INVITE,
            onView: o,
            referrerId: n.author.id,
            guildId: c,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
var ev = n(432017),
    eN = n(693879),
    ej = n(353411),
    eT = n(360469),
    eS = n(206589);
function ey(e) {
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
        x = (0, eS.w)(u, o),
        f = (0, ej.Gq)(o, s.author, "Invite Embed"),
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
        C =
            null != o && null != o.details && null != o.state
                ? T.intl.formatToPlainString(T.t.JCvHtx, { track: o.details, artist: o.state })
                : n.name,
        _ = o?.timestamps?.start ?? o?.created_at,
        I = l.useMemo(
            () =>
                null != _
                    ? (0, i.jsxs)("div", {
                          className: ep.Ym,
                          children: [
                              (0, i.jsx)(ev.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(eN.z, {
                                  entry: { start: _, end: o?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                              }),
                          ],
                      })
                    : null,
            [_, o?.timestamps?.end],
        ),
        v = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: ep.pq,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-xs/normal",
                            className: ep.dS,
                            color: "none",
                            lineClamp: 1,
                            children: I,
                        }),
                        c ? null : d,
                    ],
                }),
            [I, c, d],
        );
    return (0, i.jsx)(m.h, {
        header: r,
        title: C,
        iconSrc:
            ((t = n.id),
            (null == o || null == o.assets || null == o.assets.large_image
                ? null
                : (0, ee.uD)(t, o.assets.large_image, [eT.Ig, eT.Ig])) ?? void 0),
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
function eb(e) {
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
        m = !(0, et.A)(d, a, t.id),
        h = (0, c.n$)(t.name, a.activity?.type, m),
        g = l.useMemo(() => {
            if (null != d) return () => (0, e_.Mp)(d);
        }, [d]);
    return m
        ? (0, i.jsx)(eI, { application: t, message: a, header: h, onClickContent: g, onView: r, guildId: u })
        : (0, i.jsx)(ey, {
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
var eR = n(272984);
function eL(e) {
    let { partyMembers: t, partySize: n, maxPartySize: l, guildId: s, activityActionType: r } = e,
        o = Math.max(n, t.length),
        d = (0, c.SJ)({ maxPartySize: l, partySize: o, activityActionType: r }),
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
            (0, i.jsx)(a.E, { variant: "text-xs/medium", color: "none", children: d }),
        ],
    });
}
function eM(e) {
    let { presenceActivity: t, channel: n, activityActionType: a } = e,
        r = (0, s.yK)([R.A], () => (null == t || null == t.party ? [] : Array.from(R.A.getParty(t.party.id) ?? [])), [
            t,
        ]),
        { partySize: o, maxPartySize: c } = (0, U._)(t),
        d = l.useMemo(
            () =>
                r.map((e) => {
                    let t = O.default.getUser(e);
                    return null != t ? t : G.mt;
                }),
            [r],
        );
    return l.useMemo(
        () =>
            (0, i.jsx)(eL, {
                partyMembers: d,
                partySize: o,
                maxPartySize: c,
                guildId: n.guild_id,
                activityActionType: a,
            }),
        [d, o, c, n.guild_id, a],
    );
}
function ek(e) {
    let { analyticsLocations: t, app: n, channel: l, message: a, hideParty: o, hideBanner: c, onView: d } = e,
        u = (0, r.b)(n),
        m = (0, s.bG)([b.default], () => b.default.getId()),
        h = (0, s.bG)([M.A], () => {
            if (null == a.application) return M.A.findActivity(a.author.id, (e) => e.type === en.$pd.LISTENING);
            {
                let e = a.author.id;
                return (
                    (0, D.v)(a) && (e = e === m && l.isPrivate() ? l.getRecipientId() : m),
                    M.A.getApplicationActivity(e, a.application.id)
                );
            }
        }, [a, l, m]),
        g = (0, s.bG)([L.A, k.A], () => (0, P.A)(L.A, k.A, u.id), [u.id]),
        p = eM({ presenceActivity: h, channel: l, activityActionType: a.activity?.type });
    return (0, eR.pH)(h?.party?.id) || u.id === y.HT.id
        ? (0, i.jsx)(eb, {
              application: u,
              currentUserPresenceActivity: g,
              hideParty: o,
              message: a,
              onView: d,
              partyStatusElement: p,
              presenceActivity: h,
              guildId: l.guild_id,
          })
        : a.activity?.type === en.xL.STREAM_REQUEST
          ? (0, i.jsx)(S, { analyticsLocations: t, application: u, channel: l, currentUserId: m, message: a })
          : (0, i.jsx)(eC, {
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
