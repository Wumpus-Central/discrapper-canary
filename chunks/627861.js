(n.d(t, { c: () => ec }), n(388685), n(539854), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(705512),
    a = n(442837),
    o = n(481060),
    s = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(915346),
    p = n(783097),
    m = n(728345),
    f = n(311819),
    g = n(758199),
    _ = n(914498),
    h = n(172109),
    b = n(880251),
    E = n(515344),
    y = n(371991),
    C = n(561308),
    x = n(810568),
    v = n(567409),
    O = n(168524),
    j = n(592745),
    I = n(952164),
    S = n(829820),
    T = n(789407),
    N = n(314897),
    P = n(757266),
    A = n(831506),
    w = n(77498),
    Z = n(283595),
    R = n(293273),
    k = n(158776),
    L = n(885110),
    D = n(594174),
    M = n(417363),
    U = n(768581),
    F = n(63063),
    B = n(358085),
    G = n(804739),
    H = n(133340),
    V = n(758371),
    z = n(276852),
    W = n(984211),
    K = n(620662),
    Y = n(994339),
    X = n(275920),
    q = n(884338),
    Q = n(981631),
    J = n(616922),
    $ = n(388032),
    ee = n(581738);
function et(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: a } = e,
        s = Math.max(n, t.length),
        c = (0, V.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: a
        }),
        u = [...t];
    for (; u.length < n; ) u.push(q.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: ee.partyStatusWrapper,
        children: [
            (0, r.jsx)(q.ZP, {
                guildId: l,
                users: u,
                max: i > 0 ? Math.min(i, 8) : 8,
                size: q.u8.SIZE_16,
                dimEmptyUsers: !0
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: c
            })
        ]
    });
}
function en(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === Q.mFx.JOIN_REQUEST;
}
function er(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function ei(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function el(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function ea(e) {
    var t, n, l, a, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: h } = e,
        b = el(u, h),
        E = (0, S.Lz)(h, p.author, 'Invite Embed'),
        C = !(0, Y.Z)(h, p, c.id),
        x = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = E.label) ? t : $.intl.string($.t.VJlc0d),
                    trackingArea: _.j_.SYNC,
                    onClick: () => {
                        E.onClick();
                    },
                    disabledReason: E.disabled ? E.tooltip : void 0
                });
            }
            return e;
        }, [b, E]),
        v = i.useMemo(() => {
            if (null != h) return () => (0, I.aG)(h);
        }, [h]),
        O = (0, V.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (C) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: ee.description,
            color: 'none',
            lineClamp: 1,
            children: $.intl.string($.t['84qx9v'])
        });
        return (0, r.jsx)(g.W, {
            header: O,
            title: c.name,
            iconSrc: T.r9.getWhiteIconURL(),
            infoUrl: F.Z.getArticleURL(Q.BhN.SPOTIFY_CONNECTION),
            info: e,
            actions: [],
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: _.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
    {
        let e =
                null != h && null != h.details && null != h.state
                    ? $.intl.formatToPlainString($.t.JCvHt7, {
                          track: h.details,
                          artist: h.state
                      })
                    : c.name,
            t = null != (a = null == h || null == (n = h.timestamps) ? void 0 : n.start) ? a : null == h ? void 0 : h.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: ee.timestampContainer,
                          children: [
                              (0, r.jsx)(o.RZG, { size: 'xxs' }),
                              (0, r.jsx)(y.x3, {
                                  entry: {
                                      start: t,
                                      end: null == h || null == (l = h.timestamps) ? void 0 : l.end
                                  },
                                  textColor: 'currentColor',
                                  textTabularNumbers: !1,
                                  textFontCode: !1
                              })
                          ]
                      })
                    : null,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        className: ee.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : f
                ]
            });
        return (0, r.jsx)(g.W, {
            header: O,
            title: e,
            iconSrc: null != (s = (0, z.Z)(h, c.id)) ? s : void 0,
            infoUrl: F.Z.getArticleURL(Q.BhN.SPOTIFY_CONNECTION),
            info: u,
            actions: x,
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: _.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
}
function eo(e, t) {
    return {
        openGameProfileModal: (0, O.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: x.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, a.e7)(
            [Z.Z, j.Z, M.Z, P.Z],
            () =>
                (0, G.t)({
                    LibraryApplicationStore: Z.Z,
                    LaunchableGameStore: j.Z,
                    DispatchApplicationStore: M.Z,
                    ConnectedAppsStore: P.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function es(e) {
    var t, n, h, x;
    let { analyticsLocations: O, application: j, channel: I, currentUserId: S, currentUserPresenceActivity: T, hideParty: N, message: P, onView: A, partyStatusElement: Z, presenceActivity: R } = e,
        k = (0, p.ye)(j),
        { bot: L } = j,
        D = U.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: L
        }),
        { staticBannerSrc: M, videoBannerSrc: G, bannerAspectRatio: z } = (0, b.E)(j),
        { enabled: q } = H.t.useExperiment({ location: 'RichPresenceActivityInviteEmbed' }, { autoTrackExposure: !0 }),
        J = !(0, Y.Z)(R, P, j.id),
        et = en(P),
        ea = (0, a.e7)([w.Z], () => w.Z.getGameByName(j.name), [j.name]),
        { openGameProfileModal: es, isGameLaunchable: ec } = eo(j.id, P.author.id),
        { openGameProfileModal: eu, isGameLaunchable: ed } = eo(null == ea ? void 0 : ea.id, P.author.id),
        ep = j.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === Q.GQo.NVIDIA_GDN_APP;
        }),
        em = null == ep ? void 0 : ep.id,
        { data: ef } = (0, m.IX)(em),
        { bot: eg } = null != ef ? ef : { bot: null },
        e_ = i.useMemo(
            () =>
                q && null != em && null != eg && null != ef && (0, p.ye)(ef)
                    ? {
                          label: 'Play via Cloud',
                          icon: (0, r.jsx)(o.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: _.j_.CLOUD_PLAY,
                          onClick: () => {
                              (0, d.W)({
                                  appId: em,
                                  botId: eg.id,
                                  analyticsLocations: O
                              });
                          }
                      }
                    : null,
            [O, q, ef, em, eg]
        ),
        eh = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, Y.Z)(t, i, l.id)) return !1;
            let s = (0, W._)(t);
            return !(!ei(s) || er(s) || el(n, t) || en(i)) && (!!a || (!!B.isPlatformEmbedded && !!o));
        })({
            presenceActivity: R,
            currentUserPresenceActivity: T,
            currentUserId: S,
            message: P,
            application: j,
            isEmbeddedApplication: k,
            isGameLaunchable: ec
        }),
        eb = !(null == R || !(0, Y.Z)(R, P, j.id) || !(0, K.Z)(R, Q.xjy.SYNC) || !B.isPlatformEmbedded || el(T, R)),
        eE = el(T, R),
        ey = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, Y.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== Q.mFx.JOIN_REQUEST || !(0, K.Z)(e, Q.xjy.JOIN)) return !1;
            let l = (0, W._)(e);
            return !(!ei(l) || er(l));
        })(R, P, j, S),
        eC = i.useMemo(
            () =>
                eh
                    ? {
                          label: $.intl.string($.t.VJlc0d),
                          trackingArea: _.j_.JOIN,
                          onClick: () => {
                              var e;
                              (c.Z.join({
                                  userId: P.author.id,
                                  sessionId: R.session_id,
                                  applicationId: R.application_id,
                                  channelId: I.id,
                                  messageId: P.id,
                                  source: Q.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, K.Z)(R, Q.xjy.EMBEDDED)
                              }),
                                  (0, X.Z)({
                                      type: Q.q5t.JOIN,
                                      source: Q.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: I.guild_id,
                                      channelId: I.id,
                                      applicationId: R.application_id,
                                      partyId: null == (e = R.party) ? void 0 : e.id,
                                      messageId: P.id,
                                      analyticsLocations: O
                                  }));
                          }
                      }
                    : eb
                      ? {
                            label: $.intl.string($.t.VJlc0d),
                            trackingArea: _.j_.SYNC,
                            onClick: () => {
                                null != R && u.Z_(R, P.author.id);
                            }
                        }
                      : ey
                        ? {
                              label: $.intl.string($.t['hC/Ze3']),
                              trackingArea: _.j_.INVITE,
                              onClick: () => {
                                  null != R &&
                                      s.Z.sendActivityInvite({
                                          type: Q.mFx.JOIN,
                                          channelId: I.id,
                                          activity: R,
                                          location: Q.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: P.author.id === S ? $.intl.string($.t.IBl8IC) : void 0
                          }
                        : eE
                          ? {
                                label: $.intl.string($.t.KC26NT),
                                trackingArea: _.j_.PLAY,
                                onClick: () => {},
                                disabledReason: $.intl.string($.t.KC26NT)
                            }
                          : null != e_
                            ? e_
                            : void 0,
            [O, eh, ey, eb, I.id, I.guild_id, S, eE, P.author.id, P.id, R, e_]
        ),
        ex = i.useMemo(
            () =>
                ec
                    ? {
                          label: $.intl.string($.t.RscU7O),
                          trackingArea: _.j_.PLAY,
                          onClick: () => {
                              c.Z.launch({ applicationId: j.id });
                          }
                      }
                    : ed && (null == ea ? void 0 : ea.id) != null
                      ? {
                            label: $.intl.string($.t.RscU7O),
                            trackingArea: _.j_.PLAY,
                            onClick: () => {
                                c.Z.launch({ applicationId: ea.id });
                            }
                        }
                      : null != e_
                        ? e_
                        : void 0,
            [j.id, ec, ed, null == ea ? void 0 : ea.id, e_]
        ),
        ev = (0, E.G)(j),
        eO = i.useMemo(() => (null != es ? es : null != eu ? eu : null != ev && k ? ev : void 0), [k, es, eu, ev]),
        ej = i.useMemo(() => {
            let e = [];
            return (J || null == eC ? J && null != ex && e.push(ex) : e.push(eC), e);
        }, [ex, J, eC]),
        eI = (0, V.dQ)(j.name, null == (t = P.activity) ? void 0 : t.type),
        eS = k
            ? (0, f.H)({
                  applicationId: j.id,
                  referrerId: S
              })
            : void 0,
        eT = (0, v.N)(j.id).some((e) => (0, C.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      $.intl.string($.t.TsWCdX)
                  ]
              })
            : null;
    if (J) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: ee.description,
            color: 'none',
            lineClamp: 3,
            children: (0, V.wR)(P, j, I, S)
        });
        return (0, r.jsx)(g.W, {
            header: eI,
            title: j.name,
            staticBannerSrc: M,
            videoBannerSrc: G,
            bannerAspectRatio: z,
            iconSrc: null != D ? D : void 0,
            embedUrl: eS,
            infoUrl: F.Z.getArticleURL(Q.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: ej,
            onClickContent: eO,
            trackingConfig: {
                id: j.id,
                linkType: _.Un.RICH_PRESENCE_INVITE,
                onView: A
            }
        });
    }
    let eN = null != (x = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? x : null == R ? void 0 : R.created_at,
        eP =
            null != eN
                ? (0, r.jsxs)('div', {
                      className: ee.timestampContainer,
                      children: [
                          (0, r.jsx)(o.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eN,
                                  end: null == R || null == (h = R.timestamps) ? void 0 : h.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        eA = (0, r.jsxs)(o.Text, {
            variant: 'text-xs/normal',
            className: ee.tagline,
            color: 'none',
            lineClamp: 2,
            children: [et ? (0, V.$v)(P, j, I, S, J) : eP, et ? null : eT]
        }),
        ew = (0, r.jsxs)(r.Fragment, {
            children: [eA, N || et ? null : Z]
        });
    return (0, r.jsx)(g.W, {
        header: eI,
        title: j.name,
        staticBannerSrc: M,
        videoBannerSrc: G,
        bannerAspectRatio: z,
        iconSrc: null != D ? D : void 0,
        embedUrl: eS,
        infoUrl: F.Z.getArticleURL(Q.BhN.RICH_PRESENCE_INTRODUCTION),
        info: ew,
        actions: ej,
        onClickContent: eO,
        trackingConfig: {
            id: j.id,
            linkType: _.Un.RICH_PRESENCE_INVITE,
            onView: A
        }
    });
}
function ec(e) {
    var t, n;
    let { analyticsLocations: l, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, h.O)(o),
        m = (0, a.e7)([N.default], () => N.default.getId()),
        f = (0, a.e7)(
            [k.Z],
            () => {
                if (null == c.application) return k.Z.findActivity(c.author.id, (e) => e.type === Q.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (en(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), k.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, s, m]
        ),
        g = (0, a.e7)(
            [R.Z, L.Z],
            () => {
                var e;
                return null != (e = R.Z.getApplicationActivity(p.id)) ? e : L.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        _ = (0, a.Wu)(
            [A.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = A.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: b, maxPartySize: E } = (0, W._)(f),
        y = i.useMemo(
            () =>
                _.map((e) => {
                    let t = D.default.getUser(e);
                    return null != t ? t : q.ag;
                }),
            [_]
        ),
        C = (0, J.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === T.r9.id,
        x = (0, r.jsx)(et, {
            partyMembers: y,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return C
        ? (0, r.jsx)(ea, {
              application: p,
              currentUserPresenceActivity: g,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: x,
              presenceActivity: f
          })
        : (0, r.jsx)(es, {
              analyticsLocations: l,
              application: p,
              channel: s,
              currentUserId: m,
              currentUserPresenceActivity: g,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: x,
              presenceActivity: f
          });
}
