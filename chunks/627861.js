(n.d(t, { c: () => eg }), n(388685), n(539854), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(705512),
    o = n(267843),
    s = n(442837),
    l = n(481060),
    c = n(278323),
    u = n(224706),
    d = n(763472),
    f = n(783097),
    _ = n(758199),
    p = n(914498),
    h = n(172109),
    m = n(880251),
    g = n(515344),
    E = n(371991),
    b = n(561308),
    y = n(813370),
    O = n(810568),
    v = n(567409),
    I = n(168524),
    T = n(592745),
    S = n(956512),
    A = n(952164),
    N = n(829820),
    C = n(789407),
    w = n(314897),
    R = n(757266),
    P = n(831506),
    D = n(77498),
    L = n(283595),
    x = n(293273),
    k = n(158776),
    j = n(885110),
    M = n(594174),
    U = n(417363),
    G = n(768581),
    B = n(823379),
    Z = n(358085),
    F = n(804739),
    V = n(758371),
    H = n(276852),
    Y = n(984211),
    W = n(620662),
    K = n(994339),
    z = n(275920),
    q = n(561766),
    $ = n(206074),
    X = n(884338),
    Q = n(404174),
    J = n(981631),
    ee = n(616922),
    et = n(388032),
    en = n(581738);
let er = 8;
function ei(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        c = (0, V.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o
        }),
        u = [...t];
    for (; u.length < n; ) u.push(X.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: en.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(X.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, er) : er,
                    size: X.u8.SIZE_16,
                    dimEmptyUsers: !0
                }),
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                color: 'none',
                children: c
            })
        ]
    });
}
function ea(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === J.mFx.JOIN_REQUEST;
}
function eo(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === J.mFx.STREAM_REQUEST;
}
function es(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function el(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function ec(e, t, n, r) {
    var i;
    if (t.author.id === r || !(0, K.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== J.mFx.JOIN_REQUEST || !(0, W.Z)(e, J.xjy.JOIN)) return !1;
    let a = (0, Y._)(e);
    return !(!el(a) || es(a));
}
function eu(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function ed(e) {
    let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: a, isEmbeddedApplication: o, isFrameApplication: s, isGameLaunchable: l } = e;
    if (i.author.id === r || !(0, K.Z)(t, i, a.id)) return !1;
    let c = (0, Y._)(t);
    return !(!el(c) || es(c) || eu(n, t) || ea(i)) && ((!!o && !!s) || (!!Z.isPlatformEmbedded && !!l));
}
function ef(e, t, n, r) {
    return !(null == e || !(0, K.Z)(e, n, r.id) || !(0, W.Z)(e, J.xjy.SYNC) || !Z.isPlatformEmbedded || eu(t, e));
}
function e_(e) {
    var t, n, a, o, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: f, onView: h, partyStatusElement: m, presenceActivity: g } = e,
        b = eu(u, g),
        y = (0, N.Lz)(g, f.author, 'Invite Embed'),
        O = !(0, K.Z)(g, f, c.id),
        v = [],
        I = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = y.label) ? t : et.intl.string(et.t.VJlc0d),
                    trackingArea: p.j_.SYNC,
                    onClick: () => {
                        y.onClick();
                    },
                    disabledReason: y.disabled ? y.tooltip : void 0
                });
            }
            return e;
        }, [b, y]),
        T = i.useMemo(() => {
            if (null != g) return () => (0, A.aG)(g);
        }, [g]),
        S = (0, V.dQ)(c.name, null == (t = f.activity) ? void 0 : t.type);
    if (O) {
        let e = (0, r.jsx)(l.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 1,
            children: et.intl.string(et.t['84qx9v'])
        });
        return (0, r.jsx)(_.W, {
            header: S,
            title: c.name,
            iconSrc: C.r9.getWhiteIconURL(),
            info: e,
            actions: v,
            onClickContent: T,
            trackingConfig: {
                id: c.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: h
            }
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? et.intl.formatToPlainString(et.t.JCvHt7, {
                          track: g.details,
                          artist: g.state
                      })
                    : c.name,
            t = null != (o = null == g || null == (n = g.timestamps) ? void 0 : n.start) ? o : null == g ? void 0 : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: en.timestampContainer,
                          children: [
                              (0, r.jsx)(l.RZG, {
                                  size: 'xxs',
                                  color: 'currentColor'
                              }),
                              (0, r.jsx)(E.x3, {
                                  entry: {
                                      start: t,
                                      end: null == g || null == (a = g.timestamps) ? void 0 : a.end
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
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        className: en.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : m
                ]
            });
        return (0, r.jsx)(_.W, {
            header: S,
            title: e,
            iconSrc: null != (s = (0, H.Z)(g, c.id)) ? s : void 0,
            info: u,
            actions: I,
            onClickContent: T,
            trackingConfig: {
                id: c.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: h
            }
        });
    }
}
function ep(e, t) {
    return {
        openGameProfileModal: (0, I.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: O.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, s.e7)(
            [L.Z, T.Z, U.Z, R.Z],
            () =>
                (0, F.t)({
                    LibraryApplicationStore: L.Z,
                    LaunchableGameStore: T.Z,
                    DispatchApplicationStore: U.Z,
                    ConnectedAppsStore: R.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function eh(e) {
    let { presenceActivity: t } = e,
        n = (0, q.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: J.M7m.DESKTOP
        }),
        a = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case q.Ol.MOBILE:
                                return (0, r.jsx)(l.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.ANDROID:
                                return (0, r.jsx)(Q.j, {
                                    width: o.Z.xxs,
                                    height: o.Z.xxs,
                                    color: 'currentColor'
                                });
                            case q.Ol.IOS:
                                return (0, r.jsx)(l.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.PLAYSTATION:
                                return (0, r.jsx)(l.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case q.Ol.XBOX:
                                return (0, r.jsx)(l.Mko, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(B.lm),
            [n]
        );
    return 0 === a.length
        ? null
        : (0, r.jsxs)('div', {
              className: en.footer,
              children: [
                  (0, r.jsx)('div', {
                      className: en.footerSupportedPlatformIconsContainer,
                      children: a.map((e, t) =>
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
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'currentColor',
                      className: en.footerSupportedPlatformText,
                      children: et.intl.string(et.t['4dGUPz'])
                  })
              ]
          });
}
function em(e) {
    var t, n, o, h;
    let { analyticsLocations: O, application: I, channel: T, currentUserId: S, currentUserPresenceActivity: A, hideParty: N, message: C, onView: w, partyStatusElement: R, presenceActivity: P } = e,
        L = (0, y.A)(I),
        x = (0, f.ye)(I),
        { bot: k } = I,
        j = G.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: k
        }),
        { staticBannerSrc: M, videoBannerSrc: U, bannerAspectRatio: B } = (0, m.E)(I),
        Z = !(0, K.Z)(P, C, I.id),
        F = ea(C),
        H = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]),
        { openGameProfileModal: Y, isGameLaunchable: q } = ep(I.id, C.author.id),
        { openGameProfileModal: X, isGameLaunchable: Q } = ep(null == H ? void 0 : H.id, C.author.id),
        ee = (0, $.Z)({
            application: I,
            location: 'RichPresenceActivityInviteEmbed',
            analyticsLocations: O
        }),
        er = i.useMemo(
            () =>
                null == ee
                    ? null
                    : {
                          label: et.intl.string(et.t['jaYS/v']),
                          icon: (0, r.jsx)(l.v3n, {
                              size: 'refresh_sm',
                              color: 'currentColor'
                          }),
                          trackingArea: p.j_.CLOUD_PLAY,
                          onClick: ee
                      },
            [ee]
        ),
        ei = ed({
            presenceActivity: P,
            currentUserPresenceActivity: A,
            currentUserId: S,
            message: C,
            application: I,
            isEmbeddedApplication: x,
            isFrameApplication: L,
            isGameLaunchable: q
        }),
        eo = ef(P, A, C, I),
        es = eu(A, P),
        el = ec(P, C, I, S),
        e_ = i.useMemo(
            () =>
                ei
                    ? {
                          label: et.intl.string(et.t.VJlc0d),
                          trackingArea: p.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: C.author.id,
                                  sessionId: P.session_id,
                                  applicationId: P.application_id,
                                  channelId: T.id,
                                  messageId: C.id,
                                  source: J.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, W.Z)(P, J.xjy.EMBEDDED)
                              }),
                                  (0, z.Z)({
                                      type: J.q5t.JOIN,
                                      source: J.Sbl.MESSAGE_EMBED,
                                      userId: C.author.id,
                                      guildId: T.guild_id,
                                      channelId: T.id,
                                      applicationId: P.application_id,
                                      partyId: null == (e = P.party) ? void 0 : e.id,
                                      messageId: C.id,
                                      analyticsLocations: O
                                  }));
                          }
                      }
                    : eo
                      ? {
                            label: et.intl.string(et.t.VJlc0d),
                            trackingArea: p.j_.SYNC,
                            onClick: () => {
                                null != P && d.Z_(P, C.author.id);
                            }
                        }
                      : el
                        ? {
                              label: et.intl.string(et.t['hC/Ze3']),
                              trackingArea: p.j_.INVITE,
                              onClick: () => {
                                  null != P &&
                                      c.Z.sendActivityInvite({
                                          type: J.mFx.JOIN,
                                          channelId: T.id,
                                          activity: P,
                                          location: J.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: C.author.id === S ? et.intl.string(et.t.IBl8IC) : void 0
                          }
                        : es
                          ? {
                                label: et.intl.string(et.t.KC26NT),
                                trackingArea: p.j_.PLAY,
                                onClick: () => {},
                                disabledReason: et.intl.string(et.t.KC26NT)
                            }
                          : null != er
                            ? er
                            : void 0,
            [O, ei, el, eo, T.id, T.guild_id, S, es, C.author.id, C.id, P, er]
        ),
        em = i.useMemo(
            () =>
                q
                    ? {
                          label: et.intl.string(et.t.RscU7O),
                          trackingArea: p.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: I.id });
                          }
                      }
                    : Q && (null == H ? void 0 : H.id) != null
                      ? {
                            label: et.intl.string(et.t.RscU7O),
                            trackingArea: p.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: H.id });
                            }
                        }
                      : null != er
                        ? er
                        : void 0,
            [I.id, q, Q, null == H ? void 0 : H.id, er]
        ),
        eg = (0, g.G)(I),
        eE = i.useMemo(() => (null != Y ? Y : null != X ? X : null != eg && x ? eg : void 0), [x, Y, X, eg]),
        eb = i.useMemo(() => {
            let e = [];
            return (Z || null == e_ ? Z && null != em && e.push(em) : e.push(e_), e);
        }, [em, Z, e_]),
        ey = (0, V.dQ)(I.name, null == (t = C.activity) ? void 0 : t.type),
        eO = (0, v.N)(I.id).some((e) => (0, b.ig)(e) === a.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      et.intl.string(et.t.TsWCdX)
                  ]
              })
            : null,
        ev = (0, r.jsx)(eh, { presenceActivity: P });
    if (Z) {
        let e = (0, r.jsx)(l.Text, {
            variant: 'text-xs/medium',
            className: en.description,
            color: 'none',
            lineClamp: 3,
            children: (0, V.wR)(C, I, T, S)
        });
        return (0, r.jsx)(_.W, {
            header: ey,
            title: I.name,
            staticBannerSrc: M,
            videoBannerSrc: U,
            onClickBanner: eE,
            bannerAspectRatio: B,
            iconSrc: null != j ? j : void 0,
            info: e,
            actions: eb,
            onClickContent: eE,
            trackingConfig: {
                id: I.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: w
            }
        });
    }
    let eI = null != (h = null == P || null == (n = P.timestamps) ? void 0 : n.start) ? h : null == P ? void 0 : P.created_at,
        eT =
            null != eI
                ? (0, r.jsxs)('div', {
                      className: en.timestampContainer,
                      children: [
                          (0, r.jsx)(l.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(E.x3, {
                              entry: {
                                  start: eI,
                                  end: null == P || null == (o = P.timestamps) ? void 0 : o.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        eS = (0, r.jsxs)(l.Text, {
            variant: 'text-xs/normal',
            className: en.tagline,
            color: 'none',
            lineClamp: 2,
            children: [F ? (0, V.$v)(C, I, T, S, Z) : eT, F ? null : eO]
        }),
        eA = (0, r.jsxs)('div', {
            className: en.info,
            children: [eS, N || F ? null : R]
        });
    return (0, r.jsx)(_.W, {
        header: ey,
        title: I.name,
        staticBannerSrc: M,
        videoBannerSrc: U,
        onClickBanner: eE,
        bannerAspectRatio: B,
        iconSrc: null != j ? j : void 0,
        info: eA,
        actions: eb,
        onClickContent: eE,
        trackingConfig: {
            id: I.id,
            linkType: p.Un.RICH_PRESENCE_INVITE,
            onView: w
        },
        footer: ev
    });
}
function eg(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: l, message: c, hideParty: u, onView: d } = e,
        f = (0, h.O)(o),
        _ = (0, s.e7)([w.default], () => w.default.getId()),
        p = (0, s.e7)(
            [k.Z],
            () => {
                if (null == c.application) return k.Z.findActivity(c.author.id, (e) => e.type === J.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (ea(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _), k.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, l, _]
        ),
        m = (0, s.e7)(
            [x.Z, j.Z],
            () => {
                var e;
                return null != (e = x.Z.getApplicationActivity(f.id)) ? e : j.Z.getApplicationActivity(f.id, !0);
            },
            [f.id]
        ),
        g = (0, s.Wu)(
            [P.Z],
            () => {
                var e;
                return null == p || null == p.party ? [] : Array.from(null != (e = P.Z.getParty(p.party.id)) ? e : []);
            },
            [p]
        ),
        { partySize: E, maxPartySize: b } = (0, Y._)(p),
        y = i.useMemo(
            () =>
                g.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : X.ag;
                }),
            [g]
        ),
        O = (0, ee.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === C.r9.id,
        v = (0, r.jsx)(ei, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: l.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return O
        ? (0, r.jsx)(e_, {
              application: f,
              currentUserPresenceActivity: m,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p
          })
        : eo(c)
          ? (0, r.jsx)(S.Z, {
                analyticsLocations: a,
                application: f,
                channel: l,
                currentUserId: _,
                message: c
            })
          : (0, r.jsx)(em, {
                analyticsLocations: a,
                application: f,
                channel: l,
                currentUserId: _,
                currentUserPresenceActivity: m,
                hideParty: u,
                message: c,
                onView: d,
                partyStatusElement: v,
                presenceActivity: p
            });
}
