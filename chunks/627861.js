(n.d(t, { c: () => ep }), n(388685), n(539854), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(705512),
    a = n(267843),
    o = n(442837),
    s = n(481060),
    c = n(278323),
    u = n(224706),
    d = n(763472),
    p = n(783097),
    m = n(758199),
    f = n(914498),
    g = n(172109),
    _ = n(880251),
    h = n(515344),
    b = n(371991),
    E = n(561308),
    C = n(813370),
    v = n(810568),
    O = n(567409),
    x = n(168524),
    y = n(592745),
    I = n(956512),
    j = n(952164),
    S = n(829820),
    T = n(789407),
    N = n(314897),
    P = n(757266),
    A = n(831506),
    w = n(77498),
    Z = n(283595),
    R = n(293273),
    D = n(158776),
    L = n(885110),
    M = n(594174),
    k = n(417363),
    U = n(768581),
    F = n(823379),
    B = n(358085),
    G = n(804739),
    V = n(758371),
    H = n(276852),
    z = n(984211),
    W = n(620662),
    K = n(994339),
    Y = n(275920),
    X = n(561766),
    q = n(206074),
    Q = n(884338),
    J = n(404174),
    $ = n(981631),
    ee = n(616922),
    et = n(388032),
    en = n(581738);
function er(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, V.yy)({
            maxPartySize: i,
            partySize: o,
            activityActionType: a
        }),
        u = [...t];
    for (; u.length < n; ) u.push(Q.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: en.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(Q.ZP, {
                    guildId: l,
                    users: u,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: Q.u8.SIZE_16,
                    dimEmptyUsers: !0
                }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/medium',
                color: 'none',
                children: c
            })
        ]
    });
}
function ei(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === $.mFx.JOIN_REQUEST;
}
function el(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function ea(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function eo(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function es(e) {
    var t, n, l, a, o;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: g, partyStatusElement: _, presenceActivity: h } = e,
        E = eo(u, h),
        C = (0, S.Lz)(h, p.author, 'Invite Embed'),
        v = !(0, K.Z)(h, p, c.id),
        O = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = C.label) ? t : et.intl.string(et.t.VJlc0d),
                    trackingArea: f.j_.SYNC,
                    onClick: () => {
                        C.onClick();
                    },
                    disabledReason: C.disabled ? C.tooltip : void 0
                });
            }
            return e;
        }, [E, C]),
        x = i.useMemo(() => {
            if (null != h) return () => (0, j.aG)(h);
        }, [h]),
        y = (0, V.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 1,
            children: et.intl.string(et.t['84qx9v'])
        });
        return (0, r.jsx)(m.W, {
            header: y,
            title: c.name,
            iconSrc: T.r9.getWhiteIconURL(),
            info: e,
            actions: [],
            onClickContent: x,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g
            }
        });
    }
    {
        let e =
                null != h && null != h.details && null != h.state
                    ? et.intl.formatToPlainString(et.t.JCvHt7, {
                          track: h.details,
                          artist: h.state
                      })
                    : c.name,
            t = null != (a = null == h || null == (n = h.timestamps) ? void 0 : n.start) ? a : null == h ? void 0 : h.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: en.timestampContainer,
                          children: [
                              (0, r.jsx)(s.RZG, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              (0, r.jsx)(b.x3, {
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
            u = (0, r.jsxs)('div', {
                className: en.info,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        className: en.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : _
                ]
            });
        return (0, r.jsx)(m.W, {
            header: y,
            title: e,
            iconSrc: null != (o = (0, H.Z)(h, c.id)) ? o : void 0,
            info: u,
            actions: O,
            onClickContent: x,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g
            }
        });
    }
}
function ec(e, t) {
    return {
        openGameProfileModal: (0, x.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, o.e7)(
            [Z.Z, y.Z, k.Z, P.Z],
            () =>
                (0, G.t)({
                    LibraryApplicationStore: Z.Z,
                    LaunchableGameStore: y.Z,
                    DispatchApplicationStore: k.Z,
                    ConnectedAppsStore: P.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function eu(e) {
    let { presenceActivity: t } = e,
        n = (0, X.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: $.M7m.DESKTOP
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case X.Ol.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case X.Ol.ANDROID:
                                return (0, r.jsx)(J.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: 'currentColor'
                                });
                            case X.Ol.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case X.Ol.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case X.Ol.XBOX:
                                return (0, r.jsx)(s.Mko, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(F.lm),
            [n]
        );
    return 0 === l.length
        ? null
        : (0, r.jsxs)('div', {
              className: en.footer,
              children: [
                  (0, r.jsx)('div', {
                      className: en.footerSupportedPlatformIconsContainer,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  className: en.footerSupportedPlatformIconContainer,
                                  children: e
                              },
                              t
                          )
                      )
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'currentColor',
                      className: en.footerSupportedPlatformText,
                      children: et.intl.string(et.t['4dGUPz'])
                  })
              ]
          });
}
function ed(e) {
    var t, n, a, g;
    let { analyticsLocations: v, application: x, channel: y, currentUserId: I, currentUserPresenceActivity: j, hideParty: S, message: T, onView: N, partyStatusElement: P, presenceActivity: A } = e,
        Z = (0, C.A)(x),
        R = (0, p.ye)(x),
        { bot: D } = x,
        L = U.ZP.getApplicationIconURL({
            id: x.id,
            icon: x.icon,
            bot: D
        }),
        { staticBannerSrc: M, videoBannerSrc: k, bannerAspectRatio: F } = (0, _.E)(x),
        G = !(0, K.Z)(A, T, x.id),
        H = ei(T),
        X = (0, o.e7)([w.Z], () => w.Z.getGameByName(x.name), [x.name]),
        { openGameProfileModal: Q, isGameLaunchable: J } = ec(x.id, T.author.id),
        { openGameProfileModal: ee, isGameLaunchable: er } = ec(null == X ? void 0 : X.id, T.author.id),
        es = (0, q.Z)({
            application: x,
            location: 'RichPresenceActivityInviteEmbed',
            analyticsLocations: v
        }),
        ed = i.useMemo(
            () =>
                null == es
                    ? null
                    : {
                          label: et.intl.string(et.t['jaYS/v']),
                          icon: (0, r.jsx)(s.v3n, {
                              size: 'refresh_sm',
                              color: 'currentColor'
                          }),
                          trackingArea: f.j_.CLOUD_PLAY,
                          onClick: es
                      },
            [es]
        ),
        ep = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isFrameApplication: o, isGameLaunchable: s } = e;
            if (i.author.id === r || !(0, K.Z)(t, i, l.id)) return !1;
            let c = (0, z._)(t);
            return !(!ea(c) || el(c) || eo(n, t) || ei(i)) && ((!!a && !!o) || (!!B.isPlatformEmbedded && !!s));
        })({
            presenceActivity: A,
            currentUserPresenceActivity: j,
            currentUserId: I,
            message: T,
            application: x,
            isEmbeddedApplication: R,
            isFrameApplication: Z,
            isGameLaunchable: J
        }),
        em = !(null == A || !(0, K.Z)(A, T, x.id) || !(0, W.Z)(A, $.xjy.SYNC) || !B.isPlatformEmbedded || eo(j, A)),
        ef = eo(j, A),
        eg = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, K.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== $.mFx.JOIN_REQUEST || !(0, W.Z)(e, $.xjy.JOIN)) return !1;
            let l = (0, z._)(e);
            return !(!ea(l) || el(l));
        })(A, T, x, I),
        e_ = i.useMemo(
            () =>
                ep
                    ? {
                          label: et.intl.string(et.t.VJlc0d),
                          trackingArea: f.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: T.author.id,
                                  sessionId: A.session_id,
                                  applicationId: A.application_id,
                                  channelId: y.id,
                                  messageId: T.id,
                                  source: $.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: v,
                                  embedded: (0, W.Z)(A, $.xjy.EMBEDDED)
                              }),
                                  (0, Y.Z)({
                                      type: $.q5t.JOIN,
                                      source: $.Sbl.MESSAGE_EMBED,
                                      userId: T.author.id,
                                      guildId: y.guild_id,
                                      channelId: y.id,
                                      applicationId: A.application_id,
                                      partyId: null == (e = A.party) ? void 0 : e.id,
                                      messageId: T.id,
                                      analyticsLocations: v
                                  }));
                          }
                      }
                    : em
                      ? {
                            label: et.intl.string(et.t.VJlc0d),
                            trackingArea: f.j_.SYNC,
                            onClick: () => {
                                null != A && d.Z_(A, T.author.id);
                            }
                        }
                      : eg
                        ? {
                              label: et.intl.string(et.t['hC/Ze3']),
                              trackingArea: f.j_.INVITE,
                              onClick: () => {
                                  null != A &&
                                      c.Z.sendActivityInvite({
                                          type: $.mFx.JOIN,
                                          channelId: y.id,
                                          activity: A,
                                          location: $.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: T.author.id === I ? et.intl.string(et.t.IBl8IC) : void 0
                          }
                        : ef
                          ? {
                                label: et.intl.string(et.t.KC26NT),
                                trackingArea: f.j_.PLAY,
                                onClick: () => {},
                                disabledReason: et.intl.string(et.t.KC26NT)
                            }
                          : null != ed
                            ? ed
                            : void 0,
            [v, ep, eg, em, y.id, y.guild_id, I, ef, T.author.id, T.id, A, ed]
        ),
        eh = i.useMemo(
            () =>
                J
                    ? {
                          label: et.intl.string(et.t.RscU7O),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: x.id });
                          }
                      }
                    : er && (null == X ? void 0 : X.id) != null
                      ? {
                            label: et.intl.string(et.t.RscU7O),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: X.id });
                            }
                        }
                      : null != ed
                        ? ed
                        : void 0,
            [x.id, J, er, null == X ? void 0 : X.id, ed]
        ),
        eb = (0, h.G)(x),
        eE = i.useMemo(() => (null != Q ? Q : null != ee ? ee : null != eb && R ? eb : void 0), [R, Q, ee, eb]),
        eC = i.useMemo(() => {
            let e = [];
            return (G || null == e_ ? G && null != eh && e.push(eh) : e.push(e_), e);
        }, [eh, G, e_]),
        ev = (0, V.dQ)(x.name, null == (t = T.activity) ? void 0 : t.type),
        eO = (0, O.N)(x.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      et.intl.string(et.t.TsWCdX)
                  ]
              })
            : null,
        ex = (0, r.jsx)(eu, { presenceActivity: A });
    if (G) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 3,
            children: (0, V.wR)(T, x, y, I)
        });
        return (0, r.jsx)(m.W, {
            header: ev,
            title: x.name,
            staticBannerSrc: M,
            videoBannerSrc: k,
            onClickBanner: eE,
            bannerAspectRatio: F,
            iconSrc: null != L ? L : void 0,
            info: e,
            actions: eC,
            onClickContent: eE,
            trackingConfig: {
                id: x.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: N
            }
        });
    }
    let ey = null != (g = null == A || null == (n = A.timestamps) ? void 0 : n.start) ? g : null == A ? void 0 : A.created_at,
        eI =
            null != ey
                ? (0, r.jsxs)('div', {
                      className: en.timestampContainer,
                      children: [
                          (0, r.jsx)(s.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: ey,
                                  end: null == A || null == (a = A.timestamps) ? void 0 : a.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        ej = (0, r.jsxs)(s.Text, {
            variant: 'text-xs/normal',
            className: en.tagline,
            color: 'none',
            lineClamp: 2,
            children: [H ? (0, V.$v)(T, x, y, I, G) : eI, H ? null : eO]
        }),
        eS = (0, r.jsxs)('div', {
            className: en.info,
            children: [ej, S || H ? null : P]
        });
    return (0, r.jsx)(m.W, {
        header: ev,
        title: x.name,
        staticBannerSrc: M,
        videoBannerSrc: k,
        onClickBanner: eE,
        bannerAspectRatio: F,
        iconSrc: null != L ? L : void 0,
        info: eS,
        actions: eC,
        onClickContent: eE,
        trackingConfig: {
            id: x.id,
            linkType: f.Un.RICH_PRESENCE_INVITE,
            onView: N
        },
        footer: ex
    });
}
function ep(e) {
    var t, n, l;
    let { analyticsLocations: a, app: s, channel: c, message: u, hideParty: d, onView: p } = e,
        m = (0, g.O)(s),
        f = (0, o.e7)([N.default], () => N.default.getId()),
        _ = (0, o.e7)(
            [D.Z],
            () => {
                if (null == u.application) return D.Z.findActivity(u.author.id, (e) => e.type === $.IIU.LISTENING);
                {
                    let e = u.author.id;
                    return (ei(u) && (e = e === f && c.isPrivate() ? c.getRecipientId() : f), D.Z.getApplicationActivity(e, u.application.id));
                }
            },
            [u, c, f]
        ),
        h = (0, o.e7)(
            [R.Z, L.Z],
            () => {
                var e;
                return null != (e = R.Z.getApplicationActivity(m.id)) ? e : L.Z.getApplicationActivity(m.id, !0);
            },
            [m.id]
        ),
        b = (0, o.Wu)(
            [A.Z],
            () => {
                var e;
                return null == _ || null == _.party ? [] : Array.from(null != (e = A.Z.getParty(_.party.id)) ? e : []);
            },
            [_]
        ),
        { partySize: E, maxPartySize: C } = (0, z._)(_),
        v = i.useMemo(
            () =>
                b.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : Q.ag;
                }),
            [b]
        ),
        O = (0, ee.Ps)(null == _ || null == (t = _.party) ? void 0 : t.id) || m.id === T.r9.id,
        x = (0, r.jsx)(er, {
            partyMembers: v,
            partySize: E,
            maxPartySize: C,
            guildId: c.guild_id,
            activityActionType: null == (n = u.activity) ? void 0 : n.type
        });
    return O
        ? (0, r.jsx)(es, {
              application: m,
              currentUserPresenceActivity: h,
              hideParty: d,
              message: u,
              onView: p,
              partyStatusElement: x,
              presenceActivity: _
          })
        : (null == (l = u.activity) ? void 0 : l.type) === $.mFx.STREAM_REQUEST
          ? (0, r.jsx)(I.Z, {
                analyticsLocations: a,
                application: m,
                channel: c,
                currentUserId: f,
                message: u
            })
          : (0, r.jsx)(ed, {
                analyticsLocations: a,
                application: m,
                channel: c,
                currentUserId: f,
                currentUserPresenceActivity: h,
                hideParty: d,
                message: u,
                onView: p,
                partyStatusElement: x,
                presenceActivity: _
            });
}
