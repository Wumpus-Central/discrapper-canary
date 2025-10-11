n.d(t, { c: () => eE }), n(388685), n(539854), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(990547),
    o = n(705512),
    s = n(267843),
    l = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(224706),
    f = n(763472),
    _ = n(213609),
    p = n(783097),
    h = n(758199),
    m = n(914498),
    g = n(172109),
    E = n(880251),
    b = n(515344),
    y = n(371991),
    O = n(561308),
    v = n(813370),
    I = n(810568),
    T = n(567409),
    S = n(168524),
    A = n(956512),
    C = n(171516),
    N = n(952164),
    R = n(829820),
    P = n(789407),
    w = n(314897),
    D = n(831506),
    L = n(293273),
    x = n(158776),
    M = n(885110),
    k = n(594174),
    j = n(181106),
    U = n(768581),
    G = n(823379),
    B = n(358085),
    Z = n(139212),
    F = n(758371),
    V = n(931271),
    H = n(565201),
    Y = n(276852),
    W = n(150248),
    K = n(691731),
    z = n(984211),
    q = n(146248),
    X = n(935153),
    Q = n(620662),
    J = n(994339),
    $ = n(275920),
    ee = n(561766),
    et = n(206074),
    en = n(884338),
    er = n(404174),
    ei = n(981631),
    ea = n(967249),
    eo = n(616922),
    es = n(388032),
    el = n(723295);
let ec = 8;
function eu(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, F.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < ec; ) u.push(en.ag);
    for (; u.length < i && u.length < ec; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: el.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(en.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, ec) : ec,
                    size: en.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l,
            }),
        ],
    });
}
function ed(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === ei.mFx.STREAM_REQUEST;
}
function ef(e, t, n, r) {
    return !(
        null == e ||
        !(0, J.Z)(e, n, r.id) ||
        !(0, Q.Z)(e, ei.xjy.SYNC) ||
        !B.isPlatformEmbedded ||
        (0, K.g)(t, e)
    );
}
function e_(e) {
    var t, n, a, o, s;
    let {
            application: l,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: _,
            partyStatusElement: p,
            presenceActivity: g,
            guildId: E,
        } = e,
        b = (0, K.g)(u, g),
        O = (0, R.Lz)(g, f.author, "Invite Embed"),
        v = !(0, J.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : es.intl.string(es.t.VJlc0d),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        O.onClick();
                    },
                    disabled: O.disabled,
                    disabledReason: O.disabled ? O.tooltip : void 0,
                });
            }
            return e;
        }, [b, O]),
        S = i.useMemo(() => {
            if (null != g) return () => (0, N.aG)(g);
        }, [g]),
        A = (0, F.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: el.description,
            color: "none",
            lineClamp: 1,
            children: es.intl.string(es.t["84qx9v"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: P.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? es.intl.formatToPlainString(es.t.JCvHt7, {
                          track: g.details,
                          artist: g.state,
                      })
                    : l.name,
            t =
                null != (o = null == g || null == (n = g.timestamps) ? void 0 : n.start)
                    ? o
                    : null == g
                      ? void 0
                      : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: el.timestampContainer,
                          children: [
                              (0, r.jsx)(c.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(y.x3, {
                                  entry: {
                                      start: t,
                                      end: null == g || null == (a = g.timestamps) ? void 0 : a.end,
                                  },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            u = (0, r.jsxs)("div", {
                className: el.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: el.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    d ? null : p,
                ],
            });
        return (0, r.jsx)(h.W, {
            header: A,
            title: e,
            iconSrc: null != (s = (0, Y.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function ep(e, t) {
    let n = (0, C.h)(e);
    return {
        openGameProfileModal: (0, S.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: I.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function eh(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, ee.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: ei.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case ee.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.ANDROID:
                                return (0, r.jsx)(er.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case ee.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(G.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let l = null != n ? (0, X.V)(n) : es.intl.string(es.t["4dGUPz"]);
    return (0, r.jsxs)("div", {
        className: el.footer,
        children: [
            (0, r.jsx)("div", {
                className: el.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: el.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: el.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function em(e) {
    let { messageId: t, presenceActivity: n, application: r } = e;
    return (0, l.e7)(
        [Z.Z],
        () =>
            (0, q.O)({
                messageId: t,
                presenceActivity: n,
                application: r,
            }),
        [t, n, r],
    );
}
function eg(e) {
    var t, n, s, g;
    let {
            analyticsLocations: I,
            application: S,
            channel: A,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: w,
            partyStatusElement: D,
            presenceActivity: L,
        } = e,
        x = (0, v.A)(S),
        M = (0, p.ye)(S),
        { bot: k } = S,
        G = U.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: k,
        }),
        { staticBannerSrc: B, videoBannerSrc: Z, bannerAspectRatio: Y } = (0, E.E)(S),
        z = em({
            messageId: P.id,
            presenceActivity: L,
            application: S,
        }),
        q = null != z ? z : B,
        X = null != z ? void 0 : Z,
        ee = null != z ? h.u.ACTIVITY : Y,
        en = !(0, J.Z)(L, P, S.id),
        er = (0, W.H)(P),
        { openGameProfileModal: eo, launchableAppId: ec } = ep(S.id, P.author.id),
        eu = !!ec,
        ed = (0, et.Z)({
            application: S,
            analyticsLocations: I,
        }),
        e_ = i.useMemo(
            () =>
                null == ed
                    ? null
                    : {
                          label: es.intl.string(es.t["jaYS/v"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: ed,
                      },
            [ed],
        ),
        { canJoin: eg, remoteJoinPlatform: eE } = (0, V.h)({
            presenceActivity: L,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: x,
            isGameLaunchable: eu,
        }),
        eb = ef(L, N, P, S),
        ey = (0, K.g)(N, L),
        eO = (0, H.L)(L, P, S, C),
        ev = (0, l.e7)(
            [j.Z],
            () =>
                null != L && null != L.application_id && j.Z.getState(L.application_id, ei.mFx.JOIN) === ei.OcF.LOADING,
        ),
        eI = i.useMemo(
            () =>
                eg
                    ? {
                          label: es.intl.string(es.t.VJlc0d),
                          trackingArea: m.j_.JOIN,
                          submitting: ev,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: P.author.id,
                                  sessionId: L.session_id,
                                  applicationId: L.application_id,
                                  channelId: A.id,
                                  messageId: P.id,
                                  source: ei.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: I,
                                  embedded: (0, Q.Z)(L, ei.xjy.EMBEDDED),
                                  remotePartyId: null != eE ? (null == (e = L.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, $.Z)({
                                      type: ei.q5t.JOIN,
                                      source: ei.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: L.application_id,
                                      partyId: null == (t = L.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: I,
                                      remoteJoinPlatform: eE,
                                  });
                          },
                      }
                    : eb
                      ? {
                            label: es.intl.string(es.t.VJlc0d),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != L && f.Z_(L, P.author.id);
                            },
                        }
                      : eO
                        ? {
                              label: es.intl.string(es.t["hC/Ze3"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != L &&
                                      u.Z.sendActivityInvite({
                                          type: ei.mFx.JOIN,
                                          channelId: A.id,
                                          activity: L,
                                          location: ei.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? es.intl.string(es.t.IBl8IC) : void 0,
                          }
                        : ey
                          ? {
                                label: es.intl.string(es.t.KC26NT),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != e_
                            ? e_
                            : void 0,
            [eg, eb, eO, ey, e_, P.author.id, P.id, L, A.id, A.guild_id, I, eE, C, ev],
        ),
        eT = i.useMemo(
            () =>
                eu && null != ec
                    ? {
                          label: es.intl.string(es.t.RscU7O),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: ec,
                                  embedded: M,
                              });
                          },
                      }
                    : null != e_
                      ? e_
                      : void 0,
            [M, eu, ec, e_],
        ),
        eS = (0, b.G)(S),
        eA = i.useMemo(() => (null != eo ? eo : null != eS && M ? eS : void 0), [M, eo, eS]),
        eC = i.useMemo(() => {
            let e = [];
            return en || null == eI ? en && null != eT && e.push(eT) : e.push(eI), e;
        }, [eT, en, eI]),
        eN = i.useMemo(() => eC.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eC]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: I },
        },
        { disableTrack: !eN },
    );
    let eR = (0, F.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type),
        eP = (0, T.N)(S.id).some((e) => (0, O.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      es.intl.string(es.t.TsWCdX),
                  ],
              })
            : null,
        ew = ey
            ? null
            : (0, r.jsx)(eh, {
                  presenceActivity: L,
                  remoteJoinPlatform: eE,
              });
    if (en) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: el.description,
            color: "none",
            lineClamp: 3,
            children: (0, F.wR)(P, S, A, C),
        });
        return (0, r.jsx)(h.W, {
            header: eR,
            title: S.name,
            staticBannerSrc: q,
            videoBannerSrc: X,
            onClickBanner: eA,
            bannerAspectRatio: ee,
            iconSrc: null != G ? G : void 0,
            info: e,
            actions: eC,
            onClickContent: eA,
            trackingConfig: {
                id: S.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
                onView: w,
                referrerId: P.author.id,
                guildId: A.guild_id,
                channelId: P.channel_id,
                messageId: P.id,
            },
        });
    }
    let eD =
            null != (g = null == L || null == (n = L.timestamps) ? void 0 : n.start)
                ? g
                : null == L
                  ? void 0
                  : L.created_at,
        eL =
            null != eD
                ? (0, r.jsxs)("div", {
                      className: el.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eD,
                                  end: null == L || null == (s = L.timestamps) ? void 0 : s.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        ex = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: el.tagline,
            color: "none",
            lineClamp: 2,
            children: [er ? (0, F.$v)(P, S, A, C, en) : eL, er ? null : eP],
        }),
        eM = (0, r.jsxs)("div", {
            className: el.info,
            children: [ex, R || er ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eR,
        title: S.name,
        staticBannerSrc: q,
        videoBannerSrc: X,
        onClickBanner: eA,
        bannerAspectRatio: ee,
        iconSrc: null != G ? G : void 0,
        info: eM,
        actions: eC,
        onClickContent: eA,
        trackingConfig: {
            id: S.id,
            linkType: ea.U.RICH_PRESENCE_INVITE,
            onView: w,
            referrerId: P.author.id,
            guildId: A.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: ew,
    });
}
function eE(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([w.default], () => w.default.getId()),
        p = (0, l.e7)([x.Z], () => {
            if (null == c.application) return x.Z.findActivity(c.author.id, (e) => e.type === ei.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, W.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    x.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([L.Z, M.Z], () => {
            var e;
            return null != (e = L.Z.getApplicationActivity(f.id)) ? e : M.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([D.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = D.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, z._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = k.default.getUser(e);
                    return null != t ? t : en.ag;
                }),
            [m],
        ),
        O = (0, eo.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === P.r9.id,
        v = (0, r.jsx)(eu, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(e_, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : ed(c)
          ? (0, r.jsx)(A.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(eg, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                currentUserPresenceActivity: h,
                hideParty: u,
                message: c,
                onView: d,
                partyStatusElement: v,
                presenceActivity: p,
            });
}
