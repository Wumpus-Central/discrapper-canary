n.d(t, { c: () => eh }), n(388685), n(539854), n(953529);
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
    v = n(810568),
    I = n(567409),
    T = n(168524),
    S = n(956512),
    A = n(171516),
    C = n(952164),
    N = n(829820),
    R = n(789407),
    P = n(314897),
    w = n(831506),
    D = n(293273),
    x = n(158776),
    L = n(885110),
    M = n(594174),
    j = n(181106),
    k = n(768581),
    U = n(823379),
    G = n(358085),
    B = n(758371),
    Z = n(931271),
    F = n(565201),
    V = n(276852),
    H = n(150248),
    Y = n(691731),
    W = n(984211),
    K = n(935153),
    z = n(620662),
    q = n(994339),
    X = n(275920),
    Q = n(561766),
    J = n(206074),
    $ = n(77603),
    ee = n(884338),
    et = n(404174),
    en = n(981631),
    er = n(967249),
    ei = n(616922),
    ea = n(388032),
    eo = n(723295);
let es = 8;
function el(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, B.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < es; ) u.push(ee.ag);
    for (; u.length < i && u.length < es; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: eo.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(ee.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, es) : es,
                    size: ee.u8.SIZE_16,
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
function ec(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === en.mFx.STREAM_REQUEST;
}
function eu(e, t, n, r) {
    return !(
        null == e ||
        !(0, q.Z)(e, n, r.id) ||
        !(0, z.Z)(e, en.xjy.SYNC) ||
        !G.isPlatformEmbedded ||
        (0, Y.g)(t, e)
    );
}
function ed(e) {
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
        y = (0, Y.g)(u, g),
        O = (0, N.Lz)(g, f.author, "Invite Embed"),
        v = !(0, q.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!y) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : ea.intl.string(ea.t.VJlc0S),
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
            if (null != g) return () => (0, C.aG)(g);
        }, [g]),
        A = (0, B.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: eo.description,
            color: "none",
            lineClamp: 1,
            children: ea.intl.string(ea.t["84qx9r"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: R.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: er.U.RICH_PRESENCE_INVITE,
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
                    ? ea.intl.formatToPlainString(ea.t.JCvHtx, {
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
                          className: eo.timestampContainer,
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
                className: eo.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: eo.tagline,
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
            iconSrc: null != (s = (0, V.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: er.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function ef(e, t) {
    let n = (0, A.h)(e);
    return {
        openGameProfileModal: (0, T.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function e_(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, Q.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: en.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case Q.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case Q.Ol.ANDROID:
                                return (0, r.jsx)(et.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case Q.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case Q.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case Q.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(U.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let l = null != n ? (0, K.V)(n) : ea.intl.string(ea.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: eo.footer,
        children: [
            (0, r.jsx)("div", {
                className: eo.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: eo.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: eo.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function ep(e) {
    var t, n, s, g, v;
    let {
            analyticsLocations: T,
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
        L = (0, O.A)(S),
        M = (0, p.ye)(S),
        { bot: U } = S,
        G = k.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: U,
        }),
        V =
            null !=
            (g = (0, $.v)({
                messageId: P.id,
                presenceActivity: x,
                application: S,
            }))
                ? g
                : void 0,
        W = h.u.ACTIVITY,
        K = !(0, q.Z)(x, P, S.id),
        Q = (0, H.H)(P),
        { openGameProfileModal: ee, launchableAppId: et } = ef(S.id, P.author.id),
        ei = !!et,
        es = (0, J.Z)({
            application: S,
            analyticsLocations: T,
        }),
        el = i.useMemo(
            () =>
                null == es
                    ? null
                    : {
                          label: ea.intl.string(ea.t["jaYS/h"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: es,
                      },
            [es],
        ),
        { canJoin: ec, remoteJoinPlatform: ed } = (0, Z.h)({
            presenceActivity: x,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: L,
            isGameLaunchable: ei,
        }),
        ep = eu(x, N, P, S),
        eh = (0, Y.g)(N, x),
        em = (0, F.L)(x, P, S, C),
        eg = (0, l.e7)(
            [j.Z],
            () =>
                null != x && null != x.application_id && j.Z.getState(x.application_id, en.mFx.JOIN) === en.OcF.LOADING,
        ),
        eE = i.useMemo(
            () =>
                ec
                    ? {
                          label: ea.intl.string(ea.t.VJlc0S),
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
                                  source: en.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: T,
                                  embedded: (0, z.Z)(x, en.xjy.EMBEDDED),
                                  remotePartyId: null != ed ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, X.Z)({
                                      type: en.q5t.JOIN,
                                      source: en.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: T,
                                      remoteJoinPlatform: ed,
                                  });
                          },
                      }
                    : ep
                      ? {
                            label: ea.intl.string(ea.t.VJlc0S),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, P.author.id);
                            },
                        }
                      : em
                        ? {
                              label: ea.intl.string(ea.t["hC/Zey"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != x &&
                                      u.Z.sendActivityInvite({
                                          type: en.mFx.JOIN,
                                          channelId: A.id,
                                          activity: x,
                                          location: en.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? ea.intl.string(ea.t.IBl8ID) : void 0,
                          }
                        : eh
                          ? {
                                label: ea.intl.string(ea.t.KC26NR),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != el
                            ? el
                            : void 0,
            [ec, ep, em, eh, el, P.author.id, P.id, x, A.id, A.guild_id, T, ed, C, eg],
        ),
        eb = i.useMemo(
            () =>
                ei && null != et
                    ? {
                          label: ea.intl.string(ea.t.RscU7I),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: et,
                                  embedded: M,
                              });
                          },
                      }
                    : null != el
                      ? el
                      : void 0,
            [M, ei, et, el],
        ),
        ey = (0, E.G)(S),
        eO = i.useMemo(() => (null != ee ? ee : null != ey && M ? ey : void 0), [M, ee, ey]),
        ev = i.useMemo(() => {
            let e = [];
            return K || null == eE ? K && null != eb && e.push(eb) : e.push(eE), e;
        }, [eb, K, eE]),
        eI = i.useMemo(() => ev.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [ev]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: T },
        },
        { disableTrack: !eI },
    );
    let eT = (0, B.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type),
        eS = (0, I.N)(S.id).some((e) => (0, y.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      ea.intl.string(ea.t.TsWCdW),
                  ],
              })
            : null,
        eA = eh
            ? null
            : (0, r.jsx)(e_, {
                  presenceActivity: x,
                  remoteJoinPlatform: ed,
              });
    if (K) {
        let e = ev.length > 0,
            t = (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                className: eo.description,
                color: "none",
                lineClamp: 3,
                children: (0, B.wR)(P, S, A, C, e),
            });
        return (0, r.jsx)(h.W, {
            header: eT,
            title: S.name,
            staticBannerSrc: V,
            onClickBanner: eO,
            bannerAspectRatio: W,
            iconSrc: null != G ? G : void 0,
            info: t,
            actions: ev,
            onClickContent: eO,
            trackingConfig: {
                id: S.id,
                linkType: er.U.RICH_PRESENCE_INVITE,
                onView: w,
                referrerId: P.author.id,
                guildId: A.guild_id,
                channelId: P.channel_id,
                messageId: P.id,
            },
        });
    }
    let eC =
            null != (v = null == x || null == (n = x.timestamps) ? void 0 : n.start)
                ? v
                : null == x
                  ? void 0
                  : x.created_at,
        eN =
            null != eC
                ? (0, r.jsxs)("div", {
                      className: eo.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: eC,
                                  end: null == x || null == (s = x.timestamps) ? void 0 : s.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eR = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: eo.tagline,
            color: "none",
            lineClamp: 2,
            children: [Q ? (0, B.$v)(P, S, A, C, K) : eN, Q ? null : eS],
        }),
        eP = (0, r.jsxs)("div", {
            className: eo.info,
            children: [eR, R || Q ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eT,
        title: S.name,
        staticBannerSrc: V,
        onClickBanner: eO,
        bannerAspectRatio: W,
        iconSrc: null != G ? G : void 0,
        info: eP,
        actions: ev,
        onClickContent: eO,
        trackingConfig: {
            id: S.id,
            linkType: er.U.RICH_PRESENCE_INVITE,
            onView: w,
            referrerId: P.author.id,
            guildId: A.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: eA,
    });
}
function eh(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([P.default], () => P.default.getId()),
        p = (0, l.e7)([x.Z], () => {
            if (null == c.application) return x.Z.findActivity(c.author.id, (e) => e.type === en.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, H.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    x.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([D.Z, L.Z], () => {
            var e;
            return null != (e = D.Z.getApplicationActivity(f.id)) ? e : L.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([w.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, W._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : ee.ag;
                }),
            [m],
        ),
        O = (0, ei.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === R.r9.id,
        v = (0, r.jsx)(el, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ed, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : ec(c)
          ? (0, r.jsx)(S.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(ep, {
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
