(n.d(t, { c: () => eu }), n(388685), n(539854), n(953529));
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
    h = n(880251),
    _ = n(515344),
    b = n(371991),
    E = n(561308),
    x = n(810568),
    v = n(567409),
    y = n(168524),
    C = n(592745),
    O = n(952164),
    j = n(829820),
    I = n(789407),
    S = n(314897),
    T = n(757266),
    N = n(831506),
    P = n(77498),
    A = n(283595),
    w = n(293273),
    Z = n(158776),
    R = n(885110),
    k = n(594174),
    L = n(417363),
    D = n(768581),
    M = n(823379),
    U = n(358085),
    F = n(804739),
    B = n(758371),
    G = n(276852),
    H = n(984211),
    V = n(620662),
    z = n(994339),
    W = n(275920),
    K = n(561766),
    Y = n(206074),
    X = n(884338),
    q = n(404174),
    Q = n(981631),
    J = n(616922),
    $ = n(388032),
    ee = n(581738);
function et(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, B.yy)({
            maxPartySize: i,
            partySize: o,
            activityActionType: a
        }),
        u = [...t];
    for (; u.length < n; ) u.push(X.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: ee.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(X.ZP, {
                    guildId: l,
                    users: u,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: X.u8.SIZE_16,
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
    var t, n, l, a, o;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: g, partyStatusElement: h, presenceActivity: _ } = e,
        E = el(u, _),
        x = (0, j.Lz)(_, p.author, 'Invite Embed'),
        v = !(0, z.Z)(_, p, c.id),
        y = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = x.label) ? t : $.intl.string($.t.VJlc0d),
                    trackingArea: f.j_.SYNC,
                    onClick: () => {
                        x.onClick();
                    },
                    disabledReason: x.disabled ? x.tooltip : void 0
                });
            }
            return e;
        }, [E, x]),
        C = i.useMemo(() => {
            if (null != _) return () => (0, O.aG)(_);
        }, [_]),
        S = (0, B.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: ee.description,
            color: 'none',
            lineClamp: 1,
            children: $.intl.string($.t['84qx9v'])
        });
        return (0, r.jsx)(m.W, {
            header: S,
            title: c.name,
            iconSrc: I.r9.getWhiteIconURL(),
            info: e,
            actions: [],
            onClickContent: C,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g
            }
        });
    }
    {
        let e =
                null != _ && null != _.details && null != _.state
                    ? $.intl.formatToPlainString($.t.JCvHt7, {
                          track: _.details,
                          artist: _.state
                      })
                    : c.name,
            t = null != (a = null == _ || null == (n = _.timestamps) ? void 0 : n.start) ? a : null == _ ? void 0 : _.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: ee.timestampContainer,
                          children: [
                              (0, r.jsx)(s.RZG, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              (0, r.jsx)(b.x3, {
                                  entry: {
                                      start: t,
                                      end: null == _ || null == (l = _.timestamps) ? void 0 : l.end
                                  },
                                  textColor: 'currentColor',
                                  textTabularNumbers: !1,
                                  textFontCode: !1
                              })
                          ]
                      })
                    : null,
            u = (0, r.jsxs)('div', {
                className: ee.info,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        className: ee.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : h
                ]
            });
        return (0, r.jsx)(m.W, {
            header: S,
            title: e,
            iconSrc: null != (o = (0, G.Z)(_, c.id)) ? o : void 0,
            info: u,
            actions: y,
            onClickContent: C,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g
            }
        });
    }
}
function eo(e, t) {
    return {
        openGameProfileModal: (0, y.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: x.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, o.e7)(
            [A.Z, C.Z, L.Z, T.Z],
            () =>
                (0, F.t)({
                    LibraryApplicationStore: A.Z,
                    LaunchableGameStore: C.Z,
                    DispatchApplicationStore: L.Z,
                    ConnectedAppsStore: T.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function es(e) {
    let { presenceActivity: t } = e,
        n = (0, K.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: Q.M7m.DESKTOP
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case K.Ol.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case K.Ol.ANDROID:
                                return (0, r.jsx)(q.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: 'currentColor'
                                });
                            case K.Ol.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case K.Ol.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case K.Ol.XBOX:
                                return (0, r.jsx)(s.Mko, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(M.lm),
            [n]
        );
    return 0 === l.length
        ? null
        : (0, r.jsxs)('div', {
              className: ee.footer,
              children: [
                  (0, r.jsx)('div', {
                      className: ee.footerSupportedPlatformIconsContainer,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  className: ee.footerSupportedPlatformIconContainer,
                                  children: e
                              },
                              t
                          )
                      )
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'currentColor',
                      className: ee.footerSupportedPlatformText,
                      children: $.intl.string($.t['4dGUPz'])
                  })
              ]
          });
}
function ec(e) {
    var t, n, a, g;
    let { analyticsLocations: x, application: y, channel: C, currentUserId: O, currentUserPresenceActivity: j, hideParty: I, message: S, onView: T, partyStatusElement: N, presenceActivity: A } = e,
        w = (0, p.ye)(y),
        { bot: Z } = y,
        R = D.ZP.getApplicationIconURL({
            id: y.id,
            icon: y.icon,
            bot: Z
        }),
        { staticBannerSrc: k, videoBannerSrc: L, bannerAspectRatio: M } = (0, h.E)(y),
        F = !(0, z.Z)(A, S, y.id),
        G = en(S),
        K = (0, o.e7)([P.Z], () => P.Z.getGameByName(y.name), [y.name]),
        { openGameProfileModal: X, isGameLaunchable: q } = eo(y.id, S.author.id),
        { openGameProfileModal: J, isGameLaunchable: et } = eo(null == K ? void 0 : K.id, S.author.id),
        ea = (0, Y.Z)({
            application: y,
            location: 'RichPresenceActivityInviteEmbed',
            analyticsLocations: x
        }),
        ec = i.useMemo(
            () =>
                null == ea
                    ? null
                    : {
                          label: $.intl.string($.t['jaYS/v']),
                          icon: (0, r.jsx)(s.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: f.j_.CLOUD_PLAY,
                          onClick: ea
                      },
            [ea]
        ),
        eu = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, z.Z)(t, i, l.id)) return !1;
            let s = (0, H._)(t);
            return !(!ei(s) || er(s) || el(n, t) || en(i)) && (!!a || (!!U.isPlatformEmbedded && !!o));
        })({
            presenceActivity: A,
            currentUserPresenceActivity: j,
            currentUserId: O,
            message: S,
            application: y,
            isEmbeddedApplication: w,
            isGameLaunchable: q
        }),
        ed = !(null == A || !(0, z.Z)(A, S, y.id) || !(0, V.Z)(A, Q.xjy.SYNC) || !U.isPlatformEmbedded || el(j, A)),
        ep = el(j, A),
        em = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, z.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== Q.mFx.JOIN_REQUEST || !(0, V.Z)(e, Q.xjy.JOIN)) return !1;
            let l = (0, H._)(e);
            return !(!ei(l) || er(l));
        })(A, S, y, O),
        ef = i.useMemo(
            () =>
                eu
                    ? {
                          label: $.intl.string($.t.VJlc0d),
                          trackingArea: f.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: S.author.id,
                                  sessionId: A.session_id,
                                  applicationId: A.application_id,
                                  channelId: C.id,
                                  messageId: S.id,
                                  source: Q.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: x,
                                  embedded: (0, V.Z)(A, Q.xjy.EMBEDDED)
                              }),
                                  (0, W.Z)({
                                      type: Q.q5t.JOIN,
                                      source: Q.Sbl.MESSAGE_EMBED,
                                      userId: S.author.id,
                                      guildId: C.guild_id,
                                      channelId: C.id,
                                      applicationId: A.application_id,
                                      partyId: null == (e = A.party) ? void 0 : e.id,
                                      messageId: S.id,
                                      analyticsLocations: x
                                  }));
                          }
                      }
                    : ed
                      ? {
                            label: $.intl.string($.t.VJlc0d),
                            trackingArea: f.j_.SYNC,
                            onClick: () => {
                                null != A && d.Z_(A, S.author.id);
                            }
                        }
                      : em
                        ? {
                              label: $.intl.string($.t['hC/Ze3']),
                              trackingArea: f.j_.INVITE,
                              onClick: () => {
                                  null != A &&
                                      c.Z.sendActivityInvite({
                                          type: Q.mFx.JOIN,
                                          channelId: C.id,
                                          activity: A,
                                          location: Q.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: S.author.id === O ? $.intl.string($.t.IBl8IC) : void 0
                          }
                        : ep
                          ? {
                                label: $.intl.string($.t.KC26NT),
                                trackingArea: f.j_.PLAY,
                                onClick: () => {},
                                disabledReason: $.intl.string($.t.KC26NT)
                            }
                          : null != ec
                            ? ec
                            : void 0,
            [x, eu, em, ed, C.id, C.guild_id, O, ep, S.author.id, S.id, A, ec]
        ),
        eg = i.useMemo(
            () =>
                q
                    ? {
                          label: $.intl.string($.t.RscU7O),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: y.id });
                          }
                      }
                    : et && (null == K ? void 0 : K.id) != null
                      ? {
                            label: $.intl.string($.t.RscU7O),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: K.id });
                            }
                        }
                      : null != ec
                        ? ec
                        : void 0,
            [y.id, q, et, null == K ? void 0 : K.id, ec]
        ),
        eh = (0, _.G)(y),
        e_ = i.useMemo(() => (null != X ? X : null != J ? J : null != eh && w ? eh : void 0), [w, X, J, eh]),
        eb = i.useMemo(() => {
            let e = [];
            return (F || null == ef ? F && null != eg && e.push(eg) : e.push(ef), e);
        }, [eg, F, ef]),
        eE = (0, B.dQ)(y.name, null == (t = S.activity) ? void 0 : t.type),
        ex = (0, v.N)(y.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      $.intl.string($.t.TsWCdX)
                  ]
              })
            : null,
        ev = (0, r.jsx)(es, { presenceActivity: A });
    if (F) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: ee.description,
            color: 'none',
            lineClamp: 3,
            children: (0, B.wR)(S, y, C, O)
        });
        return (0, r.jsx)(m.W, {
            header: eE,
            title: y.name,
            staticBannerSrc: k,
            videoBannerSrc: L,
            onClickBanner: e_,
            bannerAspectRatio: M,
            iconSrc: null != R ? R : void 0,
            info: e,
            actions: eb,
            onClickContent: e_,
            trackingConfig: {
                id: y.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: T
            }
        });
    }
    let ey = null != (g = null == A || null == (n = A.timestamps) ? void 0 : n.start) ? g : null == A ? void 0 : A.created_at,
        eC =
            null != ey
                ? (0, r.jsxs)('div', {
                      className: ee.timestampContainer,
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
        eO = (0, r.jsxs)(s.Text, {
            variant: 'text-xs/normal',
            className: ee.tagline,
            color: 'none',
            lineClamp: 2,
            children: [G ? (0, B.$v)(S, y, C, O, F) : eC, G ? null : ex]
        }),
        ej = (0, r.jsxs)('div', {
            className: ee.info,
            children: [eO, I || G ? null : N]
        });
    return (0, r.jsx)(m.W, {
        header: eE,
        title: y.name,
        staticBannerSrc: k,
        videoBannerSrc: L,
        onClickBanner: e_,
        bannerAspectRatio: M,
        iconSrc: null != R ? R : void 0,
        info: ej,
        actions: eb,
        onClickContent: e_,
        trackingConfig: {
            id: y.id,
            linkType: f.Un.RICH_PRESENCE_INVITE,
            onView: T
        },
        footer: ev
    });
}
function eu(e) {
    var t, n;
    let { analyticsLocations: l, app: a, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, g.O)(a),
        m = (0, o.e7)([S.default], () => S.default.getId()),
        f = (0, o.e7)(
            [Z.Z],
            () => {
                if (null == c.application) return Z.Z.findActivity(c.author.id, (e) => e.type === Q.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (en(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), Z.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, s, m]
        ),
        h = (0, o.e7)(
            [w.Z, R.Z],
            () => {
                var e;
                return null != (e = w.Z.getApplicationActivity(p.id)) ? e : R.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        _ = (0, o.Wu)(
            [N.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = N.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: b, maxPartySize: E } = (0, H._)(f),
        x = i.useMemo(
            () =>
                _.map((e) => {
                    let t = k.default.getUser(e);
                    return null != t ? t : X.ag;
                }),
            [_]
        ),
        v = (0, J.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === I.r9.id,
        y = (0, r.jsx)(et, {
            partyMembers: x,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return v
        ? (0, r.jsx)(ea, {
              application: p,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: y,
              presenceActivity: f
          })
        : (0, r.jsx)(ec, {
              analyticsLocations: l,
              application: p,
              channel: s,
              currentUserId: m,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: y,
              presenceActivity: f
          });
}
