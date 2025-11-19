n.d(t, { c: () => eC }), n(388685), n(539854), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    l = n(705512),
    c = n(267843),
    u = n(442837),
    d = n(481060),
    f = n(278323),
    _ = n(224706),
    p = n(763472),
    h = n(213609),
    m = n(783097),
    g = n(758199),
    E = n(914498),
    b = n(172109),
    y = n(515344),
    O = n(371991),
    v = n(561308),
    I = n(813370),
    T = n(925329),
    S = n(810568),
    A = n(567409),
    C = n(168524),
    N = n(739566),
    R = n(942951),
    P = n(834129),
    D = n(956512),
    w = n(171516),
    L = n(952164),
    x = n(829820),
    M = n(789407),
    k = n(314897),
    j = n(831506),
    U = n(293273),
    G = n(375954),
    B = n(158776),
    Z = n(885110),
    F = n(594174),
    V = n(181106),
    H = n(81063),
    Y = n(768581),
    W = n(823379),
    K = n(358085),
    z = n(758371),
    q = n(931271),
    X = n(565201),
    Q = n(276852),
    J = n(150248),
    $ = n(691731),
    ee = n(984211),
    et = n(935153),
    en = n(620662),
    er = n(994339),
    ei = n(810008),
    ea = n(275920),
    eo = n(561766),
    es = n(206074),
    el = n(77603),
    ec = n(884338),
    eu = n(404174),
    ed = n(981631),
    ef = n(967249),
    e_ = n(616922),
    ep = n(388032),
    eh = n(463736),
    em = n(575452);
let eg = 8;
function eE(e, t) {
    var n, r, i, a;
    let { bot: o } = t,
        s =
            (null == (n = e.activity) ? void 0 : n.icon_override) != null
                ? (0, H.xF)(t.id, null == (r = e.activity) ? void 0 : r.icon_override)
                : null;
    return {
        iconSrc:
            null != s
                ? s
                : Y.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: o,
                  }),
        name: null != (a = null == (i = e.activity) ? void 0 : i.name_override) ? a : t.name,
    };
}
function eb(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, z.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        c = [...t];
    for (; c.length < n && c.length < eg; ) c.push(ec.ag);
    for (; c.length < i && c.length < eg; ) c.push(null);
    return (0, r.jsxs)("div", {
        className: eh.partyStatusWrapper,
        children: [
            c.length > 0 &&
                (0, r.jsx)(ec.ZP, {
                    guildId: a,
                    users: c,
                    max: i > 0 ? Math.min(i, eg) : eg,
                    size: ec.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l,
            }),
        ],
    });
}
function ey(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === ed.mFx.STREAM_REQUEST;
}
function eO(e, t, n, r) {
    return !(
        null == e ||
        !(0, er.Z)(e, n, r.id) ||
        !(0, en.Z)(e, ed.xjy.SYNC) ||
        !K.isPlatformEmbedded ||
        (0, $.g)(t, e)
    );
}
function ev(e) {
    var t, n, a, o, s;
    let {
            application: l,
            currentUserPresenceActivity: c,
            hideParty: u,
            message: f,
            onView: _,
            partyStatusElement: p,
            presenceActivity: h,
            guildId: m,
        } = e,
        b = (0, $.g)(c, h),
        y = (0, x.Lz)(h, f.author, "Invite Embed"),
        v = !(0, er.Z)(h, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = y.label) ? t : ep.intl.string(ep.t.VJlc0S),
                    trackingArea: E.j_.SYNC,
                    onClick: () => {
                        y.onClick();
                    },
                    disabled: y.disabled,
                    disabledReason: y.disabled ? y.tooltip : void 0,
                });
            }
            return e;
        }, [b, y]),
        S = i.useMemo(() => {
            if (null != h) return () => (0, L.aG)(h);
        }, [h]),
        A = (0, z.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type, v);
    if (v) {
        let e = (0, r.jsx)(d.Text, {
            variant: "text-xs/medium",
            className: eh.description,
            color: "none",
            lineClamp: 1,
            children: ep.intl.string(ep.t["84qx9r"]),
        });
        return (0, r.jsx)(g.W, {
            header: A,
            title: l.name,
            iconSrc: M.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ef.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: m,
                channelId: f.channel_id,
                messageId: f.id,
                isDeadEnd: !0,
            },
        });
    }
    {
        let e =
                null != h && null != h.details && null != h.state
                    ? ep.intl.formatToPlainString(ep.t.JCvHtx, {
                          track: h.details,
                          artist: h.state,
                      })
                    : l.name,
            t =
                null != (o = null == h || null == (n = h.timestamps) ? void 0 : n.start)
                    ? o
                    : null == h
                      ? void 0
                      : h.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: eh.timestampContainer,
                          children: [
                              (0, r.jsx)(d.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(O.x3, {
                                  entry: {
                                      start: t,
                                      end: null == h || null == (a = h.timestamps) ? void 0 : a.end,
                                  },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            c = (0, r.jsxs)("div", {
                className: eh.info,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        className: eh.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    u ? null : p,
                ],
            });
        return (0, r.jsx)(g.W, {
            header: A,
            title: e,
            iconSrc: null != (s = (0, Q.Z)(h, l.id)) ? s : void 0,
            info: c,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ef.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: m,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function eI(e, t) {
    let n = (0, w.h)(e);
    return {
        openGameProfileModal: (0, C.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: S.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function eT(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, eo.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: ed.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case eo.Ol.MOBILE:
                                return (0, r.jsx)(d.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case eo.Ol.ANDROID:
                                return (0, r.jsx)(eu.j, {
                                    width: c.Z.xxs,
                                    height: c.Z.xxs,
                                    color: "currentColor",
                                });
                            case eo.Ol.IOS:
                                return (0, r.jsx)(d.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case eo.Ol.PLAYSTATION:
                                return (0, r.jsx)(d.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case eo.Ol.XBOX:
                                return (0, r.jsx)(d.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(W.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let s = null != n ? (0, et.V)(n) : ep.intl.string(ep.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: eh.footer,
        children: [
            (0, r.jsx)("div", {
                className: eh.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: eh.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: eh.footerSupportedPlatformText,
                children: s,
            }),
        ],
    });
}
function eS(e) {
    let { message: t, application: n, channel: i, currentUserId: a, viewAction: s } = e,
        l = (0, N.ZP)(t),
        { iconSrc: c, name: u } = eE(t, n),
        f = (0, R.l)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        })(l);
    return (0, r.jsx)(P.Z, {
        compact: !1,
        children: ep.intl.format(a === t.author.id ? ep.t.anvg2q : ep.t.AxVbYF, {
            username: l.nick,
            usernameHook: f,
            applicationHook: () => {
                let e = null != s ? d.Anchor : "div";
                return (0, r.jsxs)(e, {
                    onClick: s,
                    className: eh.inlineApplicationText,
                    children: [
                        (0, r.jsx)("img", {
                            alt: ep.intl.string(ep.t["2B/phM"]),
                            src: c,
                            className: o()(em.gameIcon, T.A.XSMALL),
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: u,
                        }),
                    ],
                });
            },
        }),
    });
}
function eA(e) {
    var t, n, a, o, c;
    let {
            analyticsLocations: b,
            application: T,
            channel: S,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: D,
            partyStatusElement: w,
            presenceActivity: L,
        } = e,
        x = (0, I.A)(T),
        M = (0, m.ye)(T),
        { iconSrc: k, name: j } = eE(P, T),
        U =
            null !=
            (o = (0, el.v)({
                messageId: P.id,
                presenceActivity: L,
                application: T,
            }))
                ? o
                : void 0,
        B = g.u.ACTIVITY,
        Z = !(0, er.Z)(L, P, T.id),
        F = (0, J.H)(P),
        { openGameProfileModal: H, launchableAppId: Y } = eI(T.id, P.author.id),
        W = !!Y,
        K = (0, es.Z)({
            application: T,
            analyticsLocations: b,
        }),
        Q = i.useMemo(
            () =>
                null == K
                    ? null
                    : {
                          label: ep.intl.string(ep.t["jaYS/h"]),
                          icon: d.v3n,
                          trackingArea: E.j_.CLOUD_PLAY,
                          onClick: K,
                      },
            [K],
        ),
        { canJoin: ee, remoteJoinPlatform: et } = (0, q.h)({
            presenceActivity: L,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: T,
            isEmbeddedApplication: M,
            isFrameApplication: x,
            isGameLaunchable: W,
        }),
        eo = eO(L, N, P, T),
        ec = (0, $.g)(N, L),
        eu = (0, X.L)(L, P, T, C),
        e_ = (0, u.e7)(
            [V.Z],
            () =>
                null != L && null != L.application_id && V.Z.getState(L.application_id, ed.mFx.JOIN) === ed.OcF.LOADING,
        ),
        em = i.useMemo(
            () =>
                ee
                    ? {
                          label: ep.intl.string(ep.t.VJlc0S),
                          trackingArea: E.j_.JOIN,
                          submitting: e_,
                          onClick: () => {
                              var e, t;
                              _.Z.join({
                                  userId: P.author.id,
                                  sessionId: L.session_id,
                                  applicationId: L.application_id,
                                  channelId: S.id,
                                  messageId: P.id,
                                  source: ed.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: b,
                                  embedded: (0, en.Z)(L, ed.xjy.EMBEDDED),
                                  remotePartyId: null != et ? (null == (e = L.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, ea.Z)({
                                      type: ed.q5t.JOIN,
                                      source: ed.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: S.guild_id,
                                      channelId: S.id,
                                      applicationId: L.application_id,
                                      partyId: null == (t = L.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: b,
                                      remoteJoinPlatform: et,
                                  });
                          },
                      }
                    : eo
                      ? {
                            label: ep.intl.string(ep.t.VJlc0S),
                            trackingArea: E.j_.SYNC,
                            onClick: () => {
                                null != L && p.Z_(L, P.author.id);
                            },
                        }
                      : eu
                        ? {
                              label: ep.intl.string(ep.t["hC/Zey"]),
                              trackingArea: E.j_.INVITE,
                              onClick: () => {
                                  null != L &&
                                      f.Z.sendActivityInvite({
                                          type: ed.mFx.JOIN,
                                          channelId: S.id,
                                          activity: L,
                                          location: ed.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? ep.intl.string(ep.t.IBl8ID) : void 0,
                          }
                        : ec
                          ? {
                                label: ep.intl.string(ep.t.KC26NR),
                                trackingArea: E.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != Q
                            ? Q
                            : void 0,
            [ee, eo, eu, ec, Q, P.author.id, P.id, L, S.id, S.guild_id, b, et, C, e_],
        ),
        eg = i.useMemo(
            () =>
                W && null != Y
                    ? {
                          label: ep.intl.string(ep.t["s+J8Dl"]),
                          trackingArea: E.j_.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              _.Z.launch({
                                  applicationId: Y,
                                  embedded: M,
                              });
                          },
                      }
                    : null != Q
                      ? Q
                      : void 0,
            [M, W, Y, Q],
        ),
        eb = (0, y.G)(T),
        ey = i.useMemo(() => (null != H ? H : null != eb && M ? eb : void 0), [M, H, eb]),
        ev = (0, u.e7)([G.Z], () => G.Z.getMessages(S.id)),
        eA = i.useMemo(() => {
            let e = [];
            return Z || null == em ? Z && null != eg && (0, ei.b)(P.id, ev, T.id, L) && e.push(eg) : e.push(em), e;
        }, [eg, Z, em, P.id, T.id, L, ev]),
        eC = i.useMemo(() => eA.some((e) => e.trackingArea === E.j_.CLOUD_PLAY), [eA]);
    (0, h.Z)(
        {
            name: s.ImpressionNames.CLOUD_PLAY_CTA,
            type: s.ImpressionTypes.VIEW,
            properties: { location_stack: b },
        },
        { disableTrack: !eC },
    );
    let eN = (0, z.dQ)(j, null == (t = P.activity) ? void 0 : t.type, Z),
        eR = (0, A.N)(T.id).some((e) => (0, v.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      ep.intl.string(ep.t.TsWCdW),
                  ],
              })
            : null,
        eP = ec
            ? null
            : (0, r.jsx)(eT, {
                  presenceActivity: L,
                  remoteJoinPlatform: et,
              });
    if (Z) {
        let e = eA.length > 0,
            t = (0, r.jsx)(d.Text, {
                variant: "text-xs/medium",
                className: eh.description,
                color: "none",
                lineClamp: 3,
                children: (0, z.wR)(P, j, S, C, e),
            });
        return eA.length > 0
            ? (0, r.jsx)(g.W, {
                  header: eN,
                  title: j,
                  staticBannerSrc: eA.length > 0 ? U : void 0,
                  onClickBanner: ey,
                  bannerAspectRatio: B,
                  iconSrc: null != k ? k : void 0,
                  info: t,
                  actions: eA,
                  onClickContent: ey,
                  trackingConfig: {
                      id: T.id,
                      linkType: ef.U.RICH_PRESENCE_INVITE,
                      onView: D,
                      referrerId: P.author.id,
                      guildId: S.guild_id,
                      channelId: P.channel_id,
                      messageId: P.id,
                      isDeadEnd: !0,
                  },
              })
            : (0, r.jsx)(eS, {
                  message: P,
                  application: T,
                  channel: S,
                  currentUserId: C,
                  viewAction: ey,
              });
    }
    let eD =
            null != (c = null == L || null == (n = L.timestamps) ? void 0 : n.start)
                ? c
                : null == L
                  ? void 0
                  : L.created_at,
        ew =
            null != eD
                ? (0, r.jsxs)("div", {
                      className: eh.timestampContainer,
                      children: [
                          (0, r.jsx)(d.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(O.x3, {
                              entry: {
                                  start: eD,
                                  end: null == L || null == (a = L.timestamps) ? void 0 : a.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eL = (0, r.jsxs)(d.Text, {
            variant: "text-xs/normal",
            className: eh.tagline,
            color: "none",
            lineClamp: 2,
            children: [F ? (0, z.$v)(P, j, S, C, Z) : ew, F ? null : eR],
        }),
        ex = (0, r.jsxs)("div", {
            className: eh.info,
            children: [eL, R || F ? null : w],
        });
    return (0, r.jsx)(g.W, {
        header: eN,
        title: j,
        staticBannerSrc: U,
        onClickBanner: ey,
        bannerAspectRatio: B,
        iconSrc: null != k ? k : void 0,
        info: ex,
        actions: eA,
        onClickContent: ey,
        trackingConfig: {
            id: T.id,
            linkType: ef.U.RICH_PRESENCE_INVITE,
            onView: D,
            referrerId: P.author.id,
            guildId: S.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: eP,
    });
}
function eC(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: l, hideParty: c, onView: d } = e,
        f = (0, b.O)(o),
        _ = (0, u.e7)([k.default], () => k.default.getId()),
        p = (0, u.e7)([B.Z], () => {
            if (null == l.application) return B.Z.findActivity(l.author.id, (e) => e.type === ed.IIU.LISTENING);
            {
                let e = l.author.id;
                return (
                    (0, J.H)(l) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    B.Z.getApplicationActivity(e, l.application.id)
                );
            }
        }, [l, s, _]),
        h = (0, u.e7)([U.Z, Z.Z], () => {
            var e;
            return null != (e = U.Z.getApplicationActivity(f.id)) ? e : Z.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, u.Wu)([j.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = j.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: g, maxPartySize: E } = (0, ee._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = F.default.getUser(e);
                    return null != t ? t : ec.ag;
                }),
            [m],
        ),
        O = (0, e_.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === M.r9.id,
        v = (0, r.jsx)(eb, {
            partyMembers: y,
            partySize: g,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = l.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ev, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: c,
              message: l,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : ey(l)
          ? (0, r.jsx)(D.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: l,
            })
          : (0, r.jsx)(eA, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                currentUserPresenceActivity: h,
                hideParty: c,
                message: l,
                onView: d,
                partyStatusElement: v,
                presenceActivity: p,
            });
}
