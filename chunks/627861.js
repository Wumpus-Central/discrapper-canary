n.d(t, { c: () => ey }), n(388685), n(539854), n(953529);
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
    A = n(592745),
    C = n(956512),
    N = n(952164),
    R = n(829820),
    P = n(789407),
    w = n(314897),
    D = n(757266),
    x = n(831506),
    L = n(77498),
    j = n(283595),
    M = n(293273),
    k = n(158776),
    U = n(885110),
    G = n(594174),
    B = n(181106),
    Z = n(417363),
    F = n(768581),
    V = n(823379),
    H = n(358085),
    Y = n(804739),
    W = n(758371),
    K = n(931271),
    z = n(565201),
    q = n(276852),
    X = n(150248),
    Q = n(691731),
    J = n(984211),
    $ = n(935153),
    ee = n(620662),
    et = n(994339),
    en = n(275920),
    er = n(561766),
    ei = n(206074),
    ea = n(884338),
    eo = n(404174),
    es = n(981631),
    el = n(967249),
    ec = n(616922),
    eu = n(388032),
    ed = n(723295);
let ef = 8;
function e_(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, W.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < ef; ) u.push(ea.ag);
    for (; u.length < i && u.length < ef; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: ed.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(ea.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, ef) : ef,
                    size: ea.u8.SIZE_16,
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
function ep(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === es.mFx.STREAM_REQUEST;
}
function eh(e, t, n, r) {
    return !(
        null == e ||
        !(0, et.Z)(e, n, r.id) ||
        !(0, ee.Z)(e, es.xjy.SYNC) ||
        !H.isPlatformEmbedded ||
        (0, Q.g)(t, e)
    );
}
function em(e) {
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
        b = (0, Q.g)(u, g),
        O = (0, R.Lz)(g, f.author, "Invite Embed"),
        v = !(0, et.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : eu.intl.string(eu.t.VJlc0d),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        O.onClick();
                    },
                    disabledReason: O.disabled ? O.tooltip : void 0,
                });
            }
            return e;
        }, [b, O]),
        S = i.useMemo(() => {
            if (null != g) return () => (0, N.aG)(g);
        }, [g]),
        A = (0, W.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ed.description,
            color: "none",
            lineClamp: 1,
            children: eu.intl.string(eu.t["84qx9v"]),
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
                linkType: el.U.RICH_PRESENCE_INVITE,
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
                    ? eu.intl.formatToPlainString(eu.t.JCvHt7, {
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
                          className: ed.timestampContainer,
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
                className: ed.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: ed.tagline,
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
            iconSrc: null != (s = (0, q.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: el.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function eg(e, t) {
    return {
        openGameProfileModal: (0, S.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: e,
            source: I.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        isGameLaunchable: (0, l.e7)(
            [j.Z, A.Z, Z.Z, D.Z],
            () =>
                (0, Y.t)({
                    LibraryApplicationStore: j.Z,
                    LaunchableGameStore: A.Z,
                    DispatchApplicationStore: Z.Z,
                    ConnectedAppsStore: D.Z,
                    applicationId: null != e ? e : "",
                }),
            [e],
        ),
    };
}
function eE(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, er.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: es.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case er.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case er.Ol.ANDROID:
                                return (0, r.jsx)(eo.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case er.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case er.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case er.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(V.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let l = null != n ? (0, $.V)(n) : eu.intl.string(eu.t["4dGUPz"]);
    return (0, r.jsxs)("div", {
        className: ed.footer,
        children: [
            (0, r.jsx)("div", {
                className: ed.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: ed.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: ed.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function eb(e) {
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
            presenceActivity: x,
        } = e,
        j = (0, v.A)(S),
        M = (0, p.ye)(S),
        { bot: k } = S,
        U = F.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: k,
        }),
        { staticBannerSrc: G, videoBannerSrc: Z, bannerAspectRatio: V } = (0, E.E)(S),
        H = !(0, et.Z)(x, P, S.id),
        Y = (0, X.H)(P),
        q = (0, l.e7)([L.Z], () => L.Z.getGameByApplication(S), [S]),
        { openGameProfileModal: J, isGameLaunchable: $ } = eg(S.id, P.author.id),
        { openGameProfileModal: er, isGameLaunchable: ea } = eg(null == q ? void 0 : q.id, P.author.id),
        eo = (0, ei.Z)({
            application: S,
            analyticsLocations: I,
        }),
        ec = i.useMemo(
            () =>
                null == eo
                    ? null
                    : {
                          label: eu.intl.string(eu.t["jaYS/v"]),
                          icon: (0, r.jsx)(c.v3n, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: eo,
                      },
            [eo],
        ),
        { canJoin: ef, remoteJoinPlatform: e_ } = (0, K.h)({
            presenceActivity: x,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: j,
            isGameLaunchable: $,
        }),
        ep = eh(x, N, P, S),
        em = (0, Q.g)(N, x),
        eb = (0, z.L)(x, P, S, C),
        ey = (0, l.e7)(
            [B.Z],
            () =>
                null != x && null != x.application_id && B.Z.getState(x.application_id, es.mFx.JOIN) === es.OcF.LOADING,
        ),
        eO = i.useMemo(
            () =>
                ef
                    ? {
                          label: eu.intl.string(eu.t.VJlc0d),
                          trackingArea: m.j_.JOIN,
                          submitting: ey,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: P.author.id,
                                  sessionId: x.session_id,
                                  applicationId: x.application_id,
                                  channelId: A.id,
                                  messageId: P.id,
                                  source: es.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: I,
                                  embedded: (0, ee.Z)(x, es.xjy.EMBEDDED),
                                  remotePartyId: null != e_ ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, en.Z)({
                                      type: es.q5t.JOIN,
                                      source: es.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: I,
                                      remoteJoinPlatform: e_,
                                  });
                          },
                      }
                    : ep
                      ? {
                            label: eu.intl.string(eu.t.VJlc0d),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, P.author.id);
                            },
                        }
                      : eb
                        ? {
                              label: eu.intl.string(eu.t["hC/Ze3"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != x &&
                                      u.Z.sendActivityInvite({
                                          type: es.mFx.JOIN,
                                          channelId: A.id,
                                          activity: x,
                                          location: es.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabledReason: P.author.id === C ? eu.intl.string(eu.t.IBl8IC) : void 0,
                          }
                        : em
                          ? {
                                label: eu.intl.string(eu.t.KC26NT),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabledReason: eu.intl.string(eu.t.KC26NT),
                            }
                          : null != ec
                            ? ec
                            : void 0,
            [ef, ep, eb, em, ec, P.author.id, P.id, x, A.id, A.guild_id, I, e_, C, ey],
        ),
        ev = i.useMemo(
            () =>
                $
                    ? {
                          label: eu.intl.string(eu.t.RscU7O),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({ applicationId: S.id });
                          },
                      }
                    : ea && (null == q ? void 0 : q.id) != null
                      ? {
                            label: eu.intl.string(eu.t.RscU7O),
                            trackingArea: m.j_.PLAY,
                            onClick: () => {
                                d.Z.launch({ applicationId: q.id });
                            },
                        }
                      : null != ec
                        ? ec
                        : void 0,
            [S.id, $, ea, null == q ? void 0 : q.id, ec],
        ),
        eI = (0, b.G)(S),
        eT = i.useMemo(() => (null != J ? J : null != er ? er : null != eI && M ? eI : void 0), [M, J, er, eI]),
        eS = i.useMemo(() => {
            let e = [];
            return H || null == eO ? H && null != ev && e.push(ev) : e.push(eO), e;
        }, [ev, H, eO]),
        eA = i.useMemo(() => eS.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eS]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: I },
        },
        { disableTrack: !eA },
    );
    let eC = (0, W.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type),
        eN = (0, T.N)(S.id).some((e) => (0, O.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      eu.intl.string(eu.t.TsWCdX),
                  ],
              })
            : null,
        eR = em
            ? null
            : (0, r.jsx)(eE, {
                  presenceActivity: x,
                  remoteJoinPlatform: e_,
              });
    if (H) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ed.description,
            color: "none",
            lineClamp: 3,
            children: (0, W.wR)(P, S, A, C),
        });
        return (0, r.jsx)(h.W, {
            header: eC,
            title: S.name,
            staticBannerSrc: G,
            videoBannerSrc: Z,
            onClickBanner: eT,
            bannerAspectRatio: V,
            iconSrc: null != U ? U : void 0,
            info: e,
            actions: eS,
            onClickContent: eT,
            trackingConfig: {
                id: S.id,
                linkType: el.U.RICH_PRESENCE_INVITE,
                onView: w,
                referrerId: P.author.id,
                guildId: A.guild_id,
                channelId: P.channel_id,
                messageId: P.id,
            },
        });
    }
    let eP =
            null != (g = null == x || null == (n = x.timestamps) ? void 0 : n.start)
                ? g
                : null == x
                  ? void 0
                  : x.created_at,
        ew =
            null != eP
                ? (0, r.jsxs)("div", {
                      className: ed.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eP,
                                  end: null == x || null == (s = x.timestamps) ? void 0 : s.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eD = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: ed.tagline,
            color: "none",
            lineClamp: 2,
            children: [Y ? (0, W.$v)(P, S, A, C, H) : ew, Y ? null : eN],
        }),
        ex = (0, r.jsxs)("div", {
            className: ed.info,
            children: [eD, R || Y ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eC,
        title: S.name,
        staticBannerSrc: G,
        videoBannerSrc: Z,
        onClickBanner: eT,
        bannerAspectRatio: V,
        iconSrc: null != U ? U : void 0,
        info: ex,
        actions: eS,
        onClickContent: eT,
        trackingConfig: {
            id: S.id,
            linkType: el.U.RICH_PRESENCE_INVITE,
            onView: w,
            referrerId: P.author.id,
            guildId: A.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: eR,
    });
}
function ey(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([w.default], () => w.default.getId()),
        p = (0, l.e7)([k.Z], () => {
            if (null == c.application) return k.Z.findActivity(c.author.id, (e) => e.type === es.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, X.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    k.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([M.Z, U.Z], () => {
            var e;
            return null != (e = M.Z.getApplicationActivity(f.id)) ? e : U.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([x.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = x.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, J._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = G.default.getUser(e);
                    return null != t ? t : ea.ag;
                }),
            [m],
        ),
        O = (0, ec.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === P.r9.id,
        v = (0, r.jsx)(e_, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(em, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : ep(c)
          ? (0, r.jsx)(C.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(eb, {
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
