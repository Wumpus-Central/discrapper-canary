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
    p = n(915346),
    m = n(783097),
    f = n(728345),
    _ = n(758199),
    g = n(914498),
    h = n(172109),
    b = n(880251),
    E = n(515344),
    y = n(371991),
    x = n(561308),
    C = n(810568),
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
    L = n(158776),
    D = n(885110),
    M = n(594174),
    k = n(417363),
    U = n(768581),
    F = n(823379),
    B = n(358085),
    G = n(804739),
    H = n(133340),
    V = n(758371),
    z = n(276852),
    W = n(984211),
    K = n(620662),
    Y = n(994339),
    X = n(275920),
    q = n(561766),
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
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: h } = e,
        b = eo(u, h),
        E = (0, S.Lz)(h, p.author, 'Invite Embed'),
        x = !(0, Y.Z)(h, p, c.id),
        C = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = E.label) ? t : et.intl.string(et.t.VJlc0d),
                    trackingArea: g.j_.SYNC,
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
    if (x) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 1,
            children: et.intl.string(et.t['84qx9v'])
        });
        return (0, r.jsx)(_.W, {
            header: O,
            title: c.name,
            iconSrc: T.r9.getWhiteIconURL(),
            info: e,
            actions: [],
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: m
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
                    d ? null : f
                ]
            });
        return (0, r.jsx)(_.W, {
            header: O,
            title: e,
            iconSrc: null != (o = (0, z.Z)(h, c.id)) ? o : void 0,
            info: u,
            actions: C,
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
}
function ec(e, t) {
    return {
        openGameProfileModal: (0, O.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: C.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, o.e7)(
            [Z.Z, j.Z, k.Z, P.Z],
            () =>
                (0, G.t)({
                    LibraryApplicationStore: Z.Z,
                    LaunchableGameStore: j.Z,
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
        n = (0, q.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: $.M7m.DESKTOP
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case q.Ol.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.ANDROID:
                                return (0, r.jsx)(J.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: 'currentColor'
                                });
                            case q.Ol.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.XBOX:
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
    var t, n, a, h;
    let { analyticsLocations: C, application: O, channel: j, currentUserId: I, currentUserPresenceActivity: S, hideParty: T, message: N, onView: P, partyStatusElement: A, presenceActivity: Z } = e,
        R = (0, m.ye)(O),
        { bot: L } = O,
        D = U.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: L
        }),
        { staticBannerSrc: M, videoBannerSrc: k, bannerAspectRatio: F } = (0, b.E)(O),
        { enabled: G } = H.t.useExperiment({ location: 'RichPresenceActivityInviteEmbed' }, { autoTrackExposure: !0 }),
        z = !(0, Y.Z)(Z, N, O.id),
        q = ei(N),
        Q = (0, o.e7)([w.Z], () => w.Z.getGameByName(O.name), [O.name]),
        { openGameProfileModal: J, isGameLaunchable: ee } = ec(O.id, N.author.id),
        { openGameProfileModal: er, isGameLaunchable: es } = ec(null == Q ? void 0 : Q.id, N.author.id),
        ed = O.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === $.GQo.NVIDIA_GDN_APP;
        }),
        ep = null == ed ? void 0 : ed.id,
        { data: em } = (0, f.IX)(ep),
        { bot: ef } = null != em ? em : { bot: null },
        e_ = i.useMemo(
            () =>
                G && null != ep && null != ef && null != em && (0, m.ye)(em)
                    ? {
                          label: 'Play via Cloud',
                          icon: (0, r.jsx)(s.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: g.j_.CLOUD_PLAY,
                          onClick: () => {
                              (0, p.W)({
                                  appId: ep,
                                  botId: ef.id,
                                  analyticsLocations: C
                              });
                          }
                      }
                    : null,
            [C, G, em, ep, ef]
        ),
        eg = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, Y.Z)(t, i, l.id)) return !1;
            let s = (0, W._)(t);
            return !(!ea(s) || el(s) || eo(n, t) || ei(i)) && (!!a || (!!B.isPlatformEmbedded && !!o));
        })({
            presenceActivity: Z,
            currentUserPresenceActivity: S,
            currentUserId: I,
            message: N,
            application: O,
            isEmbeddedApplication: R,
            isGameLaunchable: ee
        }),
        eh = !(null == Z || !(0, Y.Z)(Z, N, O.id) || !(0, K.Z)(Z, $.xjy.SYNC) || !B.isPlatformEmbedded || eo(S, Z)),
        eb = eo(S, Z),
        eE = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, Y.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== $.mFx.JOIN_REQUEST || !(0, K.Z)(e, $.xjy.JOIN)) return !1;
            let l = (0, W._)(e);
            return !(!ea(l) || el(l));
        })(Z, N, O, I),
        ey = i.useMemo(
            () =>
                eg
                    ? {
                          label: et.intl.string(et.t.VJlc0d),
                          trackingArea: g.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: N.author.id,
                                  sessionId: Z.session_id,
                                  applicationId: Z.application_id,
                                  channelId: j.id,
                                  messageId: N.id,
                                  source: $.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: C,
                                  embedded: (0, K.Z)(Z, $.xjy.EMBEDDED)
                              }),
                                  (0, X.Z)({
                                      type: $.q5t.JOIN,
                                      source: $.Sbl.MESSAGE_EMBED,
                                      userId: N.author.id,
                                      guildId: j.guild_id,
                                      channelId: j.id,
                                      applicationId: Z.application_id,
                                      partyId: null == (e = Z.party) ? void 0 : e.id,
                                      messageId: N.id,
                                      analyticsLocations: C
                                  }));
                          }
                      }
                    : eh
                      ? {
                            label: et.intl.string(et.t.VJlc0d),
                            trackingArea: g.j_.SYNC,
                            onClick: () => {
                                null != Z && d.Z_(Z, N.author.id);
                            }
                        }
                      : eE
                        ? {
                              label: et.intl.string(et.t['hC/Ze3']),
                              trackingArea: g.j_.INVITE,
                              onClick: () => {
                                  null != Z &&
                                      c.Z.sendActivityInvite({
                                          type: $.mFx.JOIN,
                                          channelId: j.id,
                                          activity: Z,
                                          location: $.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: N.author.id === I ? et.intl.string(et.t.IBl8IC) : void 0
                          }
                        : eb
                          ? {
                                label: et.intl.string(et.t.KC26NT),
                                trackingArea: g.j_.PLAY,
                                onClick: () => {},
                                disabledReason: et.intl.string(et.t.KC26NT)
                            }
                          : null != e_
                            ? e_
                            : void 0,
            [C, eg, eE, eh, j.id, j.guild_id, I, eb, N.author.id, N.id, Z, e_]
        ),
        ex = i.useMemo(
            () =>
                ee
                    ? {
                          label: et.intl.string(et.t.RscU7O),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: O.id });
                          }
                      }
                    : es && (null == Q ? void 0 : Q.id) != null
                      ? {
                            label: et.intl.string(et.t.RscU7O),
                            trackingArea: g.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: Q.id });
                            }
                        }
                      : null != e_
                        ? e_
                        : void 0,
            [O.id, ee, es, null == Q ? void 0 : Q.id, e_]
        ),
        eC = (0, E.G)(O),
        ev = i.useMemo(() => (null != J ? J : null != er ? er : null != eC && R ? eC : void 0), [R, J, er, eC]),
        eO = i.useMemo(() => {
            let e = [];
            return (z || null == ey ? z && null != ex && e.push(ex) : e.push(ey), e);
        }, [ex, z, ey]),
        ej = (0, V.dQ)(O.name, null == (t = N.activity) ? void 0 : t.type),
        eI = (0, v.N)(O.id).some((e) => (0, x.ig)(e) === l.o.GLOBAL)
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
        eS = (0, r.jsx)(eu, { presenceActivity: Z });
    if (z) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 3,
            children: (0, V.wR)(N, O, j, I)
        });
        return (0, r.jsx)(_.W, {
            header: ej,
            title: O.name,
            staticBannerSrc: M,
            videoBannerSrc: k,
            onClickBanner: ev,
            bannerAspectRatio: F,
            iconSrc: null != D ? D : void 0,
            info: e,
            actions: eO,
            onClickContent: ev,
            trackingConfig: {
                id: O.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: P
            }
        });
    }
    let eT = null != (h = null == Z || null == (n = Z.timestamps) ? void 0 : n.start) ? h : null == Z ? void 0 : Z.created_at,
        eN =
            null != eT
                ? (0, r.jsxs)('div', {
                      className: en.timestampContainer,
                      children: [
                          (0, r.jsx)(s.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eT,
                                  end: null == Z || null == (a = Z.timestamps) ? void 0 : a.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        eP = (0, r.jsxs)(s.Text, {
            variant: 'text-xs/normal',
            className: en.tagline,
            color: 'none',
            lineClamp: 2,
            children: [q ? (0, V.$v)(N, O, j, I, z) : eN, q ? null : eI]
        }),
        eA = (0, r.jsxs)('div', {
            className: en.info,
            children: [eP, T || q ? null : A]
        });
    return (0, r.jsx)(_.W, {
        header: ej,
        title: O.name,
        staticBannerSrc: M,
        videoBannerSrc: k,
        onClickBanner: ev,
        bannerAspectRatio: F,
        iconSrc: null != D ? D : void 0,
        info: eA,
        actions: eO,
        onClickContent: ev,
        trackingConfig: {
            id: O.id,
            linkType: g.Un.RICH_PRESENCE_INVITE,
            onView: P
        },
        footer: eS
    });
}
function ep(e) {
    var t, n;
    let { analyticsLocations: l, app: a, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, h.O)(a),
        m = (0, o.e7)([N.default], () => N.default.getId()),
        f = (0, o.e7)(
            [L.Z],
            () => {
                if (null == c.application) return L.Z.findActivity(c.author.id, (e) => e.type === $.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (ei(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), L.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, s, m]
        ),
        _ = (0, o.e7)(
            [R.Z, D.Z],
            () => {
                var e;
                return null != (e = R.Z.getApplicationActivity(p.id)) ? e : D.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        g = (0, o.Wu)(
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
                g.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : Q.ag;
                }),
            [g]
        ),
        x = (0, ee.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === T.r9.id,
        C = (0, r.jsx)(er, {
            partyMembers: y,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return x
        ? (0, r.jsx)(es, {
              application: p,
              currentUserPresenceActivity: _,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: C,
              presenceActivity: f
          })
        : (0, r.jsx)(ed, {
              analyticsLocations: l,
              application: p,
              channel: s,
              currentUserId: m,
              currentUserPresenceActivity: _,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: C,
              presenceActivity: f
          });
}
