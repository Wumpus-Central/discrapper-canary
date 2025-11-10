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
    S = n(567409),
    T = n(168524),
    A = n(739566),
    C = n(942951),
    N = n(834129),
    R = n(956512),
    P = n(171516),
    w = n(952164),
    D = n(829820),
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
    et = n(275920),
    en = n(561766),
    er = n(206074),
    ei = n(77603),
    ea = n(884338),
    eo = n(404174),
    es = n(981631),
    el = n(967249),
    ec = n(616922),
    eu = n(388032),
    ed = n(463736);
let ef = 8,
    e_ = 25;
function ep(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, Y.yy)({
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
function eh(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === es.mFx.STREAM_REQUEST;
}
function em(e, t, n, r) {
    return !(
        null == e ||
        !(0, ee.Z)(e, n, r.id) ||
        !(0, $.Z)(e, es.xjy.SYNC) ||
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
        O = (0, D.Lz)(g, f.author, "Invite Embed"),
        v = !(0, ee.Z)(g, f, l.id),
        I = [],
        S = i.useMemo(() => {
            let e = [];
            if (!y) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : eu.intl.string(eu.t.VJlc0S),
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
        T = i.useMemo(() => {
            if (null != g) return () => (0, w.aG)(g);
        }, [g]),
        A = (0, Y.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type, v);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ed.description,
            color: "none",
            lineClamp: 1,
            children: eu.intl.string(eu.t["84qx9r"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: x.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: T,
            trackingConfig: {
                id: l.id,
                linkType: el.U.RICH_PRESENCE_INVITE,
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
                    ? eu.intl.formatToPlainString(eu.t.JCvHtx, {
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
            iconSrc: null != (s = (0, z.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: S,
            onClickContent: T,
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
function eE(e, t) {
    let n = (0, P.h)(e);
    return {
        openGameProfileModal: (0, T.Z)({
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
        a = (0, en.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: es.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case en.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.ANDROID:
                                return (0, r.jsx)(eo.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case en.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.XBOX:
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
    let l = null != n ? (0, J.V)(n) : eu.intl.string(eu.t["4dGUP0"]);
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
        children: eu.intl.format(a === t.author.id ? eu.t.anvg2q : eu.t.AxVbYF, {
            username: s.nick,
            usernameHook: l,
            applicationHook: () => {
                let e = null != o ? c.Anchor : "div";
                return (0, r.jsxs)(e, {
                    onClick: o,
                    className: ed.inlineApplicationText,
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
            application: T,
            channel: A,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: w,
            partyStatusElement: D,
            presenceActivity: x,
        } = e,
        L = (0, O.A)(T),
        M = (0, p.ye)(T),
        { bot: j } = T,
        U = F.ZP.getApplicationIconURL({
            id: T.id,
            icon: T.icon,
            bot: j,
        }),
        G =
            null !=
            (g = (0, ei.v)({
                messageId: P.id,
                presenceActivity: x,
                application: T,
            }))
                ? g
                : void 0,
        B = h.u.ACTIVITY,
        V = !(0, ee.Z)(x, P, T.id),
        H = (0, q.H)(P),
        { openGameProfileModal: z, launchableAppId: Q } = eE(T.id, P.author.id),
        J = !!Q,
        en = (0, er.Z)({
            application: T,
            analyticsLocations: I,
        }),
        ea = i.useMemo(
            () =>
                null == en
                    ? null
                    : {
                          label: eu.intl.string(eu.t["jaYS/h"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: en,
                      },
            [en],
        ),
        { canJoin: eo, remoteJoinPlatform: ec } = (0, W.h)({
            presenceActivity: x,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: T,
            isEmbeddedApplication: M,
            isFrameApplication: L,
            isGameLaunchable: J,
        }),
        ef = em(x, N, P, T),
        ep = (0, X.g)(N, x),
        eh = (0, K.L)(x, P, T, C),
        eg = (0, l.e7)(
            [Z.Z],
            () =>
                null != x && null != x.application_id && Z.Z.getState(x.application_id, es.mFx.JOIN) === es.OcF.LOADING,
        ),
        eO = i.useMemo(
            () =>
                eo
                    ? {
                          label: eu.intl.string(eu.t.VJlc0S),
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
                                  source: es.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: I,
                                  embedded: (0, $.Z)(x, es.xjy.EMBEDDED),
                                  remotePartyId: null != ec ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, et.Z)({
                                      type: es.q5t.JOIN,
                                      source: es.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: I,
                                      remoteJoinPlatform: ec,
                                  });
                          },
                      }
                    : ef
                      ? {
                            label: eu.intl.string(eu.t.VJlc0S),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, P.author.id);
                            },
                        }
                      : eh
                        ? {
                              label: eu.intl.string(eu.t["hC/Zey"]),
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
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? eu.intl.string(eu.t.IBl8ID) : void 0,
                          }
                        : ep
                          ? {
                                label: eu.intl.string(eu.t.KC26NR),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != ea
                            ? ea
                            : void 0,
            [eo, ef, eh, ep, ea, P.author.id, P.id, x, A.id, A.guild_id, I, ec, C, eg],
        ),
        ev = i.useMemo(
            () =>
                J && null != Q
                    ? {
                          label: eu.intl.string(eu.t["s+J8Dl"]),
                          trackingArea: m.j_.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: Q,
                                  embedded: M,
                              });
                          },
                      }
                    : null != ea
                      ? ea
                      : void 0,
            [M, J, Q, ea],
        ),
        eI = (0, E.G)(T),
        eS = i.useMemo(() => (null != z ? z : null != eI && M ? eI : void 0), [M, z, eI]),
        eT = (0, l.e7)([k.Z], () => k.Z.getMessages(A.id)),
        eA = i.useMemo(() => {
            let e = [];
            return (
                V || null == eO
                    ? V &&
                      null != ev &&
                      (eT.hasAnyAfter(
                          P.id,
                          (e) => {
                              var t;
                              return (
                                  null != e.activity &&
                                  (null == (t = e.application) ? void 0 : t.id) === T.id &&
                                  e.activity.type === es.mFx.JOIN &&
                                  !(0, ee.Z)(x, e, T.id)
                              );
                          },
                          e_,
                      ) ||
                          e.push(ev))
                    : e.push(eO),
                e
            );
        }, [ev, V, eO, P.id, T.id, x, eT]),
        eC = i.useMemo(() => eA.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eA]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: I },
        },
        { disableTrack: !eC },
    );
    let eN = (0, Y.dQ)(T.name, null == (t = P.activity) ? void 0 : t.type, V),
        eR = (0, S.N)(T.id).some((e) => (0, y.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      eu.intl.string(eu.t.TsWCdW),
                  ],
              })
            : null,
        eP = ep
            ? null
            : (0, r.jsx)(eb, {
                  presenceActivity: x,
                  remoteJoinPlatform: ec,
              });
    if (V) {
        let e = eA.length > 0,
            t = (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                className: ed.description,
                color: "none",
                lineClamp: 3,
                children: (0, Y.wR)(P, T, A, C, e),
            });
        return eA.length > 0
            ? (0, r.jsx)(h.W, {
                  header: eN,
                  title: T.name,
                  staticBannerSrc: eA.length > 0 ? G : void 0,
                  onClickBanner: eS,
                  bannerAspectRatio: B,
                  iconSrc: null != U ? U : void 0,
                  info: t,
                  actions: eA,
                  onClickContent: eS,
                  trackingConfig: {
                      id: T.id,
                      linkType: el.U.RICH_PRESENCE_INVITE,
                      onView: w,
                      referrerId: P.author.id,
                      guildId: A.guild_id,
                      channelId: P.channel_id,
                      messageId: P.id,
                      isDeadEnd: !0,
                  },
              })
            : (0, r.jsx)(ey, {
                  message: P,
                  application: T,
                  channel: A,
                  currentUserId: C,
                  viewAction: eS,
              });
    }
    let ew =
            null != (v = null == x || null == (n = x.timestamps) ? void 0 : n.start)
                ? v
                : null == x
                  ? void 0
                  : x.created_at,
        eD =
            null != ew
                ? (0, r.jsxs)("div", {
                      className: ed.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: ew,
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
            className: ed.tagline,
            color: "none",
            lineClamp: 2,
            children: [H ? (0, Y.$v)(P, T, A, C, V) : eD, H ? null : eR],
        }),
        eL = (0, r.jsxs)("div", {
            className: ed.info,
            children: [ex, R || H ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eN,
        title: T.name,
        staticBannerSrc: G,
        onClickBanner: eS,
        bannerAspectRatio: B,
        iconSrc: null != U ? U : void 0,
        info: eL,
        actions: eA,
        onClickContent: eS,
        trackingConfig: {
            id: T.id,
            linkType: el.U.RICH_PRESENCE_INVITE,
            onView: w,
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
            if (null == c.application) return U.Z.findActivity(c.author.id, (e) => e.type === es.IIU.LISTENING);
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
                    return null != t ? t : ea.ag;
                }),
            [m],
        ),
        O = (0, ec.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === x.r9.id,
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
