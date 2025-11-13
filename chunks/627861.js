n.d(t, { c: () => ev }), n(388685), n(539854), n(953529);
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
    E = n(515344),
    b = n(371991),
    y = n(561308),
    O = n(813370),
    v = n(925329),
    I = n(810568),
    T = n(567409),
    S = n(168524),
    A = n(739566),
    C = n(942951),
    N = n(834129),
    R = n(956512),
    P = n(171516),
    D = n(952164),
    w = n(829820),
    x = n(789407),
    L = n(314897),
    M = n(831506),
    j = n(293273),
    k = n(375954),
    U = n(158776),
    G = n(885110),
    B = n(594174),
    Z = n(181106),
    F = n(768581),
    V = n(823379),
    H = n(358085),
    Y = n(758371),
    W = n(931271),
    K = n(565201),
    z = n(276852),
    q = n(150248),
    X = n(691731),
    Q = n(984211),
    J = n(935153),
    $ = n(620662),
    ee = n(994339),
    et = n(810008),
    en = n(275920),
    er = n(561766),
    ei = n(206074),
    ea = n(77603),
    eo = n(884338),
    es = n(404174),
    el = n(981631),
    ec = n(967249),
    eu = n(616922),
    ed = n(388032),
    ef = n(723295);
let e_ = 8;
function ep(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, Y.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < e_; ) u.push(eo.ag);
    for (; u.length < i && u.length < e_; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: ef.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(eo.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, e_) : e_,
                    size: eo.u8.SIZE_16,
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
function eh(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === el.mFx.STREAM_REQUEST;
}
function em(e, t, n, r) {
    return !(
        null == e ||
        !(0, ee.Z)(e, n, r.id) ||
        !(0, $.Z)(e, el.xjy.SYNC) ||
        !H.isPlatformEmbedded ||
        (0, X.g)(t, e)
    );
}
function eg(e) {
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
        y = (0, X.g)(u, g),
        O = (0, w.Lz)(g, f.author, "Invite Embed"),
        v = !(0, ee.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!y) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : ed.intl.string(ed.t.VJlc0S),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        O.onClick();
                    },
                    disabled: O.disabled,
                    disabledReason: O.disabled ? O.tooltip : void 0,
                });
            }
            return e;
        }, [y, O]),
        S = i.useMemo(() => {
            if (null != g) return () => (0, D.aG)(g);
        }, [g]),
        A = (0, Y.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type, v);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ef.description,
            color: "none",
            lineClamp: 1,
            children: ed.intl.string(ed.t["84qx9r"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: x.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ec.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
                isDeadEnd: !0,
            },
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? ed.intl.formatToPlainString(ed.t.JCvHtx, {
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
                          className: ef.timestampContainer,
                          children: [
                              (0, r.jsx)(c.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(b.x3, {
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
                className: ef.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: ef.tagline,
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
            iconSrc: null != (s = (0, z.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ec.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function eE(e, t) {
    let n = (0, P.h)(e);
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
function eb(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, er.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: el.M7m.DESKTOP,
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
                                return (0, r.jsx)(es.j, {
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
    let l = null != n ? (0, J.V)(n) : ed.intl.string(ed.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: ef.footer,
        children: [
            (0, r.jsx)("div", {
                className: ef.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: ef.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: ef.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function ey(e) {
    let { message: t, application: n, channel: i, currentUserId: a, viewAction: o } = e,
        s = (0, A.ZP)(t),
        l = (0, C.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        })(s);
    return (0, r.jsx)(N.Z, {
        compact: !1,
        children: ed.intl.format(a === t.author.id ? ed.t.anvg2q : ed.t.AxVbYF, {
            username: s.nick,
            usernameHook: l,
            applicationHook: () => {
                let e = null != o ? c.Anchor : "div";
                return (0, r.jsxs)(e, {
                    onClick: o,
                    className: ef.inlineApplicationText,
                    children: [
                        (0, r.jsx)(v.Z, {
                            game: n,
                            size: v.A.XSMALL,
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: n.name,
                        }),
                    ],
                });
            },
        }),
    });
}
function eO(e) {
    var t, n, s, g, v;
    let {
            analyticsLocations: I,
            application: S,
            channel: A,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: D,
            partyStatusElement: w,
            presenceActivity: x,
        } = e,
        L = (0, O.A)(S),
        M = (0, p.ye)(S),
        { bot: j } = S,
        U = F.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: j,
        }),
        G =
            null !=
            (g = (0, ea.v)({
                messageId: P.id,
                presenceActivity: x,
                application: S,
            }))
                ? g
                : void 0,
        B = h.u.ACTIVITY,
        V = !(0, ee.Z)(x, P, S.id),
        H = (0, q.H)(P),
        { openGameProfileModal: z, launchableAppId: Q } = eE(S.id, P.author.id),
        J = !!Q,
        er = (0, ei.Z)({
            application: S,
            analyticsLocations: I,
        }),
        eo = i.useMemo(
            () =>
                null == er
                    ? null
                    : {
                          label: ed.intl.string(ed.t["jaYS/h"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: er,
                      },
            [er],
        ),
        { canJoin: es, remoteJoinPlatform: eu } = (0, W.h)({
            presenceActivity: x,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: L,
            isGameLaunchable: J,
        }),
        e_ = em(x, N, P, S),
        ep = (0, X.g)(N, x),
        eh = (0, K.L)(x, P, S, C),
        eg = (0, l.e7)(
            [Z.Z],
            () =>
                null != x && null != x.application_id && Z.Z.getState(x.application_id, el.mFx.JOIN) === el.OcF.LOADING,
        ),
        eO = i.useMemo(
            () =>
                es
                    ? {
                          label: ed.intl.string(ed.t.VJlc0S),
                          trackingArea: m.j_.JOIN,
                          submitting: eg,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: P.author.id,
                                  sessionId: x.session_id,
                                  applicationId: x.application_id,
                                  channelId: A.id,
                                  messageId: P.id,
                                  source: el.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: I,
                                  embedded: (0, $.Z)(x, el.xjy.EMBEDDED),
                                  remotePartyId: null != eu ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, en.Z)({
                                      type: el.q5t.JOIN,
                                      source: el.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: I,
                                      remoteJoinPlatform: eu,
                                  });
                          },
                      }
                    : e_
                      ? {
                            label: ed.intl.string(ed.t.VJlc0S),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, P.author.id);
                            },
                        }
                      : eh
                        ? {
                              label: ed.intl.string(ed.t["hC/Zey"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != x &&
                                      u.Z.sendActivityInvite({
                                          type: el.mFx.JOIN,
                                          channelId: A.id,
                                          activity: x,
                                          location: el.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? ed.intl.string(ed.t.IBl8ID) : void 0,
                          }
                        : ep
                          ? {
                                label: ed.intl.string(ed.t.KC26NR),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != eo
                            ? eo
                            : void 0,
            [es, e_, eh, ep, eo, P.author.id, P.id, x, A.id, A.guild_id, I, eu, C, eg],
        ),
        ev = i.useMemo(
            () =>
                J && null != Q
                    ? {
                          label: ed.intl.string(ed.t["s+J8Dl"]),
                          trackingArea: m.j_.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: Q,
                                  embedded: M,
                              });
                          },
                      }
                    : null != eo
                      ? eo
                      : void 0,
            [M, J, Q, eo],
        ),
        eI = (0, E.G)(S),
        eT = i.useMemo(() => (null != z ? z : null != eI && M ? eI : void 0), [M, z, eI]),
        eS = (0, l.e7)([k.Z], () => k.Z.getMessages(A.id)),
        eA = i.useMemo(() => {
            let e = [];
            return V || null == eO ? V && null != ev && (0, et.b)(P.id, eS, S.id, x) && e.push(ev) : e.push(eO), e;
        }, [ev, V, eO, P.id, S.id, x, eS]),
        eC = i.useMemo(() => eA.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eA]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: I },
        },
        { disableTrack: !eC },
    );
    let eN = (0, Y.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type, V),
        eR = (0, T.N)(S.id).some((e) => (0, y.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      ed.intl.string(ed.t.TsWCdW),
                  ],
              })
            : null,
        eP = ep
            ? null
            : (0, r.jsx)(eb, {
                  presenceActivity: x,
                  remoteJoinPlatform: eu,
              });
    if (V) {
        let e = eA.length > 0,
            t = (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                className: ef.description,
                color: "none",
                lineClamp: 3,
                children: (0, Y.wR)(P, S, A, C, e),
            });
        return eA.length > 0
            ? (0, r.jsx)(h.W, {
                  header: eN,
                  title: S.name,
                  staticBannerSrc: eA.length > 0 ? G : void 0,
                  onClickBanner: eT,
                  bannerAspectRatio: B,
                  iconSrc: null != U ? U : void 0,
                  info: t,
                  actions: eA,
                  onClickContent: eT,
                  trackingConfig: {
                      id: S.id,
                      linkType: ec.U.RICH_PRESENCE_INVITE,
                      onView: D,
                      referrerId: P.author.id,
                      guildId: A.guild_id,
                      channelId: P.channel_id,
                      messageId: P.id,
                      isDeadEnd: !0,
                  },
              })
            : (0, r.jsx)(ey, {
                  message: P,
                  application: S,
                  channel: A,
                  currentUserId: C,
                  viewAction: eT,
              });
    }
    let eD =
            null != (v = null == x || null == (n = x.timestamps) ? void 0 : n.start)
                ? v
                : null == x
                  ? void 0
                  : x.created_at,
        ew =
            null != eD
                ? (0, r.jsxs)("div", {
                      className: ef.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: eD,
                                  end: null == x || null == (s = x.timestamps) ? void 0 : s.end,
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
            className: ef.tagline,
            color: "none",
            lineClamp: 2,
            children: [H ? (0, Y.$v)(P, S, A, C, V) : ew, H ? null : eR],
        }),
        eL = (0, r.jsxs)("div", {
            className: ef.info,
            children: [ex, R || H ? null : w],
        });
    return (0, r.jsx)(h.W, {
        header: eN,
        title: S.name,
        staticBannerSrc: G,
        onClickBanner: eT,
        bannerAspectRatio: B,
        iconSrc: null != U ? U : void 0,
        info: eL,
        actions: eA,
        onClickContent: eT,
        trackingConfig: {
            id: S.id,
            linkType: ec.U.RICH_PRESENCE_INVITE,
            onView: D,
            referrerId: P.author.id,
            guildId: A.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: eP,
    });
}
function ev(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([L.default], () => L.default.getId()),
        p = (0, l.e7)([U.Z], () => {
            if (null == c.application) return U.Z.findActivity(c.author.id, (e) => e.type === el.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, q.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    U.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([j.Z, G.Z], () => {
            var e;
            return null != (e = j.Z.getApplicationActivity(f.id)) ? e : G.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([M.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = M.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, Q._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = B.default.getUser(e);
                    return null != t ? t : eo.ag;
                }),
            [m],
        ),
        O = (0, eu.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === x.r9.id,
        v = (0, r.jsx)(ep, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(eg, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : eh(c)
          ? (0, r.jsx)(R.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(eO, {
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
