(n.d(t, { c: () => ed }), n(388685), n(539854), n(953529));
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
    _ = n(172109),
    g = n(880251),
    h = n(515344),
    b = n(371991),
    E = n(561308),
    C = n(813370),
    O = n(810568),
    v = n(567409),
    y = n(168524),
    x = n(592745),
    I = n(952164),
    j = n(829820),
    S = n(789407),
    T = n(314897),
    N = n(757266),
    P = n(831506),
    A = n(77498),
    w = n(283595),
    Z = n(293273),
    R = n(158776),
    D = n(885110),
    L = n(594174),
    M = n(417363),
    k = n(768581),
    U = n(823379),
    F = n(358085),
    B = n(804739),
    G = n(758371),
    H = n(276852),
    V = n(984211),
    z = n(620662),
    W = n(994339),
    K = n(275920),
    Y = n(561766),
    X = n(206074),
    q = n(884338),
    Q = n(404174),
    J = n(981631),
    $ = n(616922),
    ee = n(388032),
    et = n(581738);
function en(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, G.yy)({
            maxPartySize: i,
            partySize: o,
            activityActionType: a
        }),
        u = [...t];
    for (; u.length < n; ) u.push(q.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: et.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(q.ZP, {
                    guildId: l,
                    users: u,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: q.u8.SIZE_16,
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
function er(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === J.mFx.JOIN_REQUEST;
}
function ei(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function el(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function ea(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function eo(e) {
    var t, n, l, a, o;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: _, partyStatusElement: g, presenceActivity: h } = e,
        E = ea(u, h),
        C = (0, j.Lz)(h, p.author, 'Invite Embed'),
        O = !(0, W.Z)(h, p, c.id),
        v = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = C.label) ? t : ee.intl.string(ee.t.VJlc0d),
                    trackingArea: f.j_.SYNC,
                    onClick: () => {
                        C.onClick();
                    },
                    disabledReason: C.disabled ? C.tooltip : void 0
                });
            }
            return e;
        }, [E, C]),
        y = i.useMemo(() => {
            if (null != h) return () => (0, I.aG)(h);
        }, [h]),
        x = (0, G.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (O) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: et.description,
            color: 'none',
            lineClamp: 1,
            children: ee.intl.string(ee.t['84qx9v'])
        });
        return (0, r.jsx)(m.W, {
            header: x,
            title: c.name,
            iconSrc: S.r9.getWhiteIconURL(),
            info: e,
            actions: [],
            onClickContent: y,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: _
            }
        });
    }
    {
        let e =
                null != h && null != h.details && null != h.state
                    ? ee.intl.formatToPlainString(ee.t.JCvHt7, {
                          track: h.details,
                          artist: h.state
                      })
                    : c.name,
            t = null != (a = null == h || null == (n = h.timestamps) ? void 0 : n.start) ? a : null == h ? void 0 : h.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: et.timestampContainer,
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
                className: et.info,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        className: et.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : g
                ]
            });
        return (0, r.jsx)(m.W, {
            header: x,
            title: e,
            iconSrc: null != (o = (0, H.Z)(h, c.id)) ? o : void 0,
            info: u,
            actions: v,
            onClickContent: y,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: _
            }
        });
    }
}
function es(e, t) {
    return {
        openGameProfileModal: (0, y.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: O.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, o.e7)(
            [w.Z, x.Z, M.Z, N.Z],
            () =>
                (0, B.t)({
                    LibraryApplicationStore: w.Z,
                    LaunchableGameStore: x.Z,
                    DispatchApplicationStore: M.Z,
                    ConnectedAppsStore: N.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function ec(e) {
    let { presenceActivity: t } = e,
        n = (0, Y.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: J.M7m.DESKTOP
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case Y.Ol.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case Y.Ol.ANDROID:
                                return (0, r.jsx)(Q.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: 'currentColor'
                                });
                            case Y.Ol.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case Y.Ol.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case Y.Ol.XBOX:
                                return (0, r.jsx)(s.Mko, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(U.lm),
            [n]
        );
    return 0 === l.length
        ? null
        : (0, r.jsxs)('div', {
              className: et.footer,
              children: [
                  (0, r.jsx)('div', {
                      className: et.footerSupportedPlatformIconsContainer,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  className: et.footerSupportedPlatformIconContainer,
                                  children: e
                              },
                              t
                          )
                      )
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'currentColor',
                      className: et.footerSupportedPlatformText,
                      children: ee.intl.string(ee.t['4dGUPz'])
                  })
              ]
          });
}
function eu(e) {
    var t, n, a, _;
    let { analyticsLocations: O, application: y, channel: x, currentUserId: I, currentUserPresenceActivity: j, hideParty: S, message: T, onView: N, partyStatusElement: P, presenceActivity: w } = e,
        Z = (0, C.A)(y),
        R = (0, p.ye)(y),
        { bot: D } = y,
        L = k.ZP.getApplicationIconURL({
            id: y.id,
            icon: y.icon,
            bot: D
        }),
        { staticBannerSrc: M, videoBannerSrc: U, bannerAspectRatio: B } = (0, g.E)(y),
        H = !(0, W.Z)(w, T, y.id),
        Y = er(T),
        q = (0, o.e7)([A.Z], () => A.Z.getGameByName(y.name), [y.name]),
        { openGameProfileModal: Q, isGameLaunchable: $ } = es(y.id, T.author.id),
        { openGameProfileModal: en, isGameLaunchable: eo } = es(null == q ? void 0 : q.id, T.author.id),
        eu = (0, X.Z)({
            application: y,
            location: 'RichPresenceActivityInviteEmbed',
            analyticsLocations: O
        }),
        ed = i.useMemo(
            () =>
                null == eu
                    ? null
                    : {
                          label: ee.intl.string(ee.t['jaYS/v']),
                          icon: (0, r.jsx)(s.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: f.j_.CLOUD_PLAY,
                          onClick: eu
                      },
            [eu]
        ),
        ep = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isFrameApplication: o, isGameLaunchable: s } = e;
            if (i.author.id === r || !(0, W.Z)(t, i, l.id)) return !1;
            let c = (0, V._)(t);
            return !(!el(c) || ei(c) || ea(n, t) || er(i)) && ((!!a && !!o) || (!!F.isPlatformEmbedded && !!s));
        })({
            presenceActivity: w,
            currentUserPresenceActivity: j,
            currentUserId: I,
            message: T,
            application: y,
            isEmbeddedApplication: R,
            isFrameApplication: Z,
            isGameLaunchable: $
        }),
        em = !(null == w || !(0, W.Z)(w, T, y.id) || !(0, z.Z)(w, J.xjy.SYNC) || !F.isPlatformEmbedded || ea(j, w)),
        ef = ea(j, w),
        e_ = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, W.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== J.mFx.JOIN_REQUEST || !(0, z.Z)(e, J.xjy.JOIN)) return !1;
            let l = (0, V._)(e);
            return !(!el(l) || ei(l));
        })(w, T, y, I),
        eg = i.useMemo(
            () =>
                ep
                    ? {
                          label: ee.intl.string(ee.t.VJlc0d),
                          trackingArea: f.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: T.author.id,
                                  sessionId: w.session_id,
                                  applicationId: w.application_id,
                                  channelId: x.id,
                                  messageId: T.id,
                                  source: J.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, z.Z)(w, J.xjy.EMBEDDED)
                              }),
                                  (0, K.Z)({
                                      type: J.q5t.JOIN,
                                      source: J.Sbl.MESSAGE_EMBED,
                                      userId: T.author.id,
                                      guildId: x.guild_id,
                                      channelId: x.id,
                                      applicationId: w.application_id,
                                      partyId: null == (e = w.party) ? void 0 : e.id,
                                      messageId: T.id,
                                      analyticsLocations: O
                                  }));
                          }
                      }
                    : em
                      ? {
                            label: ee.intl.string(ee.t.VJlc0d),
                            trackingArea: f.j_.SYNC,
                            onClick: () => {
                                null != w && d.Z_(w, T.author.id);
                            }
                        }
                      : e_
                        ? {
                              label: ee.intl.string(ee.t['hC/Ze3']),
                              trackingArea: f.j_.INVITE,
                              onClick: () => {
                                  null != w &&
                                      c.Z.sendActivityInvite({
                                          type: J.mFx.JOIN,
                                          channelId: x.id,
                                          activity: w,
                                          location: J.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: T.author.id === I ? ee.intl.string(ee.t.IBl8IC) : void 0
                          }
                        : ef
                          ? {
                                label: ee.intl.string(ee.t.KC26NT),
                                trackingArea: f.j_.PLAY,
                                onClick: () => {},
                                disabledReason: ee.intl.string(ee.t.KC26NT)
                            }
                          : null != ed
                            ? ed
                            : void 0,
            [O, ep, e_, em, x.id, x.guild_id, I, ef, T.author.id, T.id, w, ed]
        ),
        eh = i.useMemo(
            () =>
                $
                    ? {
                          label: ee.intl.string(ee.t.RscU7O),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: y.id });
                          }
                      }
                    : eo && (null == q ? void 0 : q.id) != null
                      ? {
                            label: ee.intl.string(ee.t.RscU7O),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: q.id });
                            }
                        }
                      : null != ed
                        ? ed
                        : void 0,
            [y.id, $, eo, null == q ? void 0 : q.id, ed]
        ),
        eb = (0, h.G)(y),
        eE = i.useMemo(() => (null != Q ? Q : null != en ? en : null != eb && R ? eb : void 0), [R, Q, en, eb]),
        eC = i.useMemo(() => {
            let e = [];
            return (H || null == eg ? H && null != eh && e.push(eh) : e.push(eg), e);
        }, [eh, H, eg]),
        eO = (0, G.dQ)(y.name, null == (t = T.activity) ? void 0 : t.type),
        ev = (0, v.N)(y.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      ee.intl.string(ee.t.TsWCdX)
                  ]
              })
            : null,
        ey = (0, r.jsx)(ec, { presenceActivity: w });
    if (H) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: et.description,
            color: 'none',
            lineClamp: 3,
            children: (0, G.wR)(T, y, x, I)
        });
        return (0, r.jsx)(m.W, {
            header: eO,
            title: y.name,
            staticBannerSrc: M,
            videoBannerSrc: U,
            onClickBanner: eE,
            bannerAspectRatio: B,
            iconSrc: null != L ? L : void 0,
            info: e,
            actions: eC,
            onClickContent: eE,
            trackingConfig: {
                id: y.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: N
            }
        });
    }
    let ex = null != (_ = null == w || null == (n = w.timestamps) ? void 0 : n.start) ? _ : null == w ? void 0 : w.created_at,
        eI =
            null != ex
                ? (0, r.jsxs)('div', {
                      className: et.timestampContainer,
                      children: [
                          (0, r.jsx)(s.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: ex,
                                  end: null == w || null == (a = w.timestamps) ? void 0 : a.end
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
            className: et.tagline,
            color: 'none',
            lineClamp: 2,
            children: [Y ? (0, G.$v)(T, y, x, I, H) : eI, Y ? null : ev]
        }),
        eS = (0, r.jsxs)('div', {
            className: et.info,
            children: [ej, S || Y ? null : P]
        });
    return (0, r.jsx)(m.W, {
        header: eO,
        title: y.name,
        staticBannerSrc: M,
        videoBannerSrc: U,
        onClickBanner: eE,
        bannerAspectRatio: B,
        iconSrc: null != L ? L : void 0,
        info: eS,
        actions: eC,
        onClickContent: eE,
        trackingConfig: {
            id: y.id,
            linkType: f.Un.RICH_PRESENCE_INVITE,
            onView: N
        },
        footer: ey
    });
}
function ed(e) {
    var t, n;
    let { analyticsLocations: l, app: a, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, _.O)(a),
        m = (0, o.e7)([T.default], () => T.default.getId()),
        f = (0, o.e7)(
            [R.Z],
            () => {
                if (null == c.application) return R.Z.findActivity(c.author.id, (e) => e.type === J.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (er(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), R.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, s, m]
        ),
        g = (0, o.e7)(
            [Z.Z, D.Z],
            () => {
                var e;
                return null != (e = Z.Z.getApplicationActivity(p.id)) ? e : D.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        h = (0, o.Wu)(
            [P.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = P.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: b, maxPartySize: E } = (0, V._)(f),
        C = i.useMemo(
            () =>
                h.map((e) => {
                    let t = L.default.getUser(e);
                    return null != t ? t : q.ag;
                }),
            [h]
        ),
        O = (0, $.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === S.r9.id,
        v = (0, r.jsx)(en, {
            partyMembers: C,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return O
        ? (0, r.jsx)(eo, {
              application: p,
              currentUserPresenceActivity: g,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: f
          })
        : (0, r.jsx)(eu, {
              analyticsLocations: l,
              application: p,
              channel: s,
              currentUserId: m,
              currentUserPresenceActivity: g,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: f
          });
}
