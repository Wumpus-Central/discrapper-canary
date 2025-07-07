(n.d(t, { c: () => ef }), n(388685), n(539854), n(953529));
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
    g = n(311819),
    _ = n(758199),
    h = n(914498),
    b = n(172109),
    E = n(880251),
    y = n(515344),
    C = n(371991),
    x = n(561308),
    v = n(810568),
    O = n(567409),
    j = n(168524),
    I = n(592745),
    S = n(952164),
    T = n(829820),
    N = n(789407),
    P = n(314897),
    A = n(757266),
    w = n(831506),
    Z = n(77498),
    R = n(283595),
    k = n(293273),
    L = n(158776),
    D = n(885110),
    M = n(594174),
    U = n(417363),
    F = n(768581),
    B = n(823379),
    G = n(63063),
    H = n(358085),
    V = n(804739),
    z = n(133340),
    W = n(758371),
    K = n(276852),
    Y = n(984211),
    X = n(620662),
    q = n(994339),
    Q = n(275920),
    J = n(561766),
    $ = n(884338),
    ee = n(404174),
    et = n(981631),
    en = n(616922),
    er = n(388032),
    ei = n(581738);
function el(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: a } = e,
        o = Math.max(n, t.length),
        c = (0, W.yy)({
            maxPartySize: i,
            partySize: o,
            activityActionType: a
        }),
        u = [...t];
    for (; u.length < n; ) u.push($.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: ei.partyStatusWrapper,
        children: [
            (0, r.jsx)($.ZP, {
                guildId: l,
                users: u,
                max: i > 0 ? Math.min(i, 8) : 8,
                size: $.u8.SIZE_16,
                dimEmptyUsers: !0
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: c
            })
        ]
    });
}
function ea(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === et.mFx.JOIN_REQUEST;
}
function eo(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function es(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function ec(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function eu(e) {
    var t, n, l, a, o;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: g } = e,
        b = ec(u, g),
        E = (0, T.Lz)(g, p.author, 'Invite Embed'),
        y = !(0, q.Z)(g, p, c.id),
        x = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = E.label) ? t : er.intl.string(er.t.VJlc0d),
                    trackingArea: h.j_.SYNC,
                    onClick: () => {
                        E.onClick();
                    },
                    disabledReason: E.disabled ? E.tooltip : void 0
                });
            }
            return e;
        }, [b, E]),
        v = i.useMemo(() => {
            if (null != g) return () => (0, S.aG)(g);
        }, [g]),
        O = (0, W.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (y) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: ei.description,
            color: 'none',
            lineClamp: 1,
            children: er.intl.string(er.t['84qx9v'])
        });
        return (0, r.jsx)(_.W, {
            header: O,
            title: c.name,
            iconSrc: N.r9.getWhiteIconURL(),
            infoUrl: G.Z.getArticleURL(et.BhN.SPOTIFY_CONNECTION),
            info: e,
            actions: [],
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: h.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? er.intl.formatToPlainString(er.t.JCvHt7, {
                          track: g.details,
                          artist: g.state
                      })
                    : c.name,
            t = null != (a = null == g || null == (n = g.timestamps) ? void 0 : n.start) ? a : null == g ? void 0 : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: ei.timestampContainer,
                          children: [
                              (0, r.jsx)(s.RZG, { size: 'xxs' }),
                              (0, r.jsx)(C.x3, {
                                  entry: {
                                      start: t,
                                      end: null == g || null == (l = g.timestamps) ? void 0 : l.end
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
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        className: ei.tagline,
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
            iconSrc: null != (o = (0, K.Z)(g, c.id)) ? o : void 0,
            infoUrl: G.Z.getArticleURL(et.BhN.SPOTIFY_CONNECTION),
            info: u,
            actions: x,
            onClickContent: v,
            trackingConfig: {
                id: c.id,
                linkType: h.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
}
function ed(e, t) {
    return {
        openGameProfileModal: (0, j.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, o.e7)(
            [R.Z, I.Z, U.Z, A.Z],
            () =>
                (0, V.t)({
                    LibraryApplicationStore: R.Z,
                    LaunchableGameStore: I.Z,
                    DispatchApplicationStore: U.Z,
                    ConnectedAppsStore: A.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function ep(e) {
    let { presenceActivity: t } = e,
        n = (0, J.C)({
            presenceActivity: t,
            currentPlatform: et.M7m.DESKTOP
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case J.O.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case J.O.ANDROID:
                                return (0, r.jsx)(ee.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: 'currentColor'
                                });
                            case J.O.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case J.O.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: 'xxs',
                                    color: 'currentColor'
                                });
                            case J.O.XBOX:
                                return (0, r.jsx)(s.Mko, {
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
    return 0 === l.length
        ? null
        : (0, r.jsxs)('div', {
              className: ei.footer,
              children: [
                  (0, r.jsx)('div', {
                      className: ei.footerSupportedPlatformIconsContainer,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              'div',
                              {
                                  className: ei.footerSupportedPlatformIconContainer,
                                  children: e
                              },
                              t
                          )
                      )
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'currentColor',
                      className: ei.footerSupportedPlatformText,
                      children: er.intl.string(er.t['4dGUPz'])
                  })
              ]
          });
}
function em(e) {
    var t, n, a, b;
    let { analyticsLocations: v, application: j, channel: I, currentUserId: S, currentUserPresenceActivity: T, hideParty: N, message: P, onView: A, partyStatusElement: w, presenceActivity: R } = e,
        k = (0, m.ye)(j),
        { bot: L } = j,
        D = F.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: L
        }),
        { staticBannerSrc: M, videoBannerSrc: U, bannerAspectRatio: B } = (0, E.E)(j),
        { enabled: V } = z.t.useExperiment({ location: 'RichPresenceActivityInviteEmbed' }, { autoTrackExposure: !0 }),
        K = !(0, q.Z)(R, P, j.id),
        J = ea(P),
        $ = (0, o.e7)([Z.Z], () => Z.Z.getGameByName(j.name), [j.name]),
        { openGameProfileModal: ee, isGameLaunchable: en } = ed(j.id, P.author.id),
        { openGameProfileModal: el, isGameLaunchable: eu } = ed(null == $ ? void 0 : $.id, P.author.id),
        em = j.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === et.GQo.NVIDIA_GDN_APP;
        }),
        ef = null == em ? void 0 : em.id,
        { data: eg } = (0, f.IX)(ef),
        { bot: e_ } = null != eg ? eg : { bot: null },
        eh = i.useMemo(
            () =>
                V && null != ef && null != e_ && null != eg && (0, m.ye)(eg)
                    ? {
                          label: 'Play via Cloud',
                          icon: (0, r.jsx)(s.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: h.j_.CLOUD_PLAY,
                          onClick: () => {
                              (0, p.W)({
                                  appId: ef,
                                  botId: e_.id,
                                  analyticsLocations: v
                              });
                          }
                      }
                    : null,
            [v, V, eg, ef, e_]
        ),
        eb = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, q.Z)(t, i, l.id)) return !1;
            let s = (0, Y._)(t);
            return !(!es(s) || eo(s) || ec(n, t) || ea(i)) && (!!a || (!!H.isPlatformEmbedded && !!o));
        })({
            presenceActivity: R,
            currentUserPresenceActivity: T,
            currentUserId: S,
            message: P,
            application: j,
            isEmbeddedApplication: k,
            isGameLaunchable: en
        }),
        eE = !(null == R || !(0, q.Z)(R, P, j.id) || !(0, X.Z)(R, et.xjy.SYNC) || !H.isPlatformEmbedded || ec(T, R)),
        ey = ec(T, R),
        eC = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, q.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== et.mFx.JOIN_REQUEST || !(0, X.Z)(e, et.xjy.JOIN)) return !1;
            let l = (0, Y._)(e);
            return !(!es(l) || eo(l));
        })(R, P, j, S),
        ex = i.useMemo(
            () =>
                eb
                    ? {
                          label: er.intl.string(er.t.VJlc0d),
                          trackingArea: h.j_.JOIN,
                          onClick: () => {
                              var e;
                              (u.Z.join({
                                  userId: P.author.id,
                                  sessionId: R.session_id,
                                  applicationId: R.application_id,
                                  channelId: I.id,
                                  messageId: P.id,
                                  source: et.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: v,
                                  embedded: (0, X.Z)(R, et.xjy.EMBEDDED)
                              }),
                                  (0, Q.Z)({
                                      type: et.q5t.JOIN,
                                      source: et.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: I.guild_id,
                                      channelId: I.id,
                                      applicationId: R.application_id,
                                      partyId: null == (e = R.party) ? void 0 : e.id,
                                      messageId: P.id,
                                      analyticsLocations: v
                                  }));
                          }
                      }
                    : eE
                      ? {
                            label: er.intl.string(er.t.VJlc0d),
                            trackingArea: h.j_.SYNC,
                            onClick: () => {
                                null != R && d.Z_(R, P.author.id);
                            }
                        }
                      : eC
                        ? {
                              label: er.intl.string(er.t['hC/Ze3']),
                              trackingArea: h.j_.INVITE,
                              onClick: () => {
                                  null != R &&
                                      c.Z.sendActivityInvite({
                                          type: et.mFx.JOIN,
                                          channelId: I.id,
                                          activity: R,
                                          location: et.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: P.author.id === S ? er.intl.string(er.t.IBl8IC) : void 0
                          }
                        : ey
                          ? {
                                label: er.intl.string(er.t.KC26NT),
                                trackingArea: h.j_.PLAY,
                                onClick: () => {},
                                disabledReason: er.intl.string(er.t.KC26NT)
                            }
                          : null != eh
                            ? eh
                            : void 0,
            [v, eb, eC, eE, I.id, I.guild_id, S, ey, P.author.id, P.id, R, eh]
        ),
        ev = i.useMemo(
            () =>
                en
                    ? {
                          label: er.intl.string(er.t.RscU7O),
                          trackingArea: h.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: j.id });
                          }
                      }
                    : eu && (null == $ ? void 0 : $.id) != null
                      ? {
                            label: er.intl.string(er.t.RscU7O),
                            trackingArea: h.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: $.id });
                            }
                        }
                      : null != eh
                        ? eh
                        : void 0,
            [j.id, en, eu, null == $ ? void 0 : $.id, eh]
        ),
        eO = (0, y.G)(j),
        ej = i.useMemo(() => (null != ee ? ee : null != el ? el : null != eO && k ? eO : void 0), [k, ee, el, eO]),
        eI = i.useMemo(() => {
            let e = [];
            return (K || null == ex ? K && null != ev && e.push(ev) : e.push(ex), e);
        }, [ev, K, ex]),
        eS = (0, W.dQ)(j.name, null == (t = P.activity) ? void 0 : t.type),
        eT = k
            ? (0, g.H)({
                  applicationId: j.id,
                  referrerId: S
              })
            : void 0,
        eN = (0, O.N)(j.id).some((e) => (0, x.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      er.intl.string(er.t.TsWCdX)
                  ]
              })
            : null,
        eP = (0, r.jsx)(ep, { presenceActivity: R });
    if (K) {
        let e = (0, r.jsx)(s.Text, {
            variant: 'text-xs/medium',
            className: ei.description,
            color: 'none',
            lineClamp: 3,
            children: (0, W.wR)(P, j, I, S)
        });
        return (0, r.jsx)(_.W, {
            header: eS,
            title: j.name,
            staticBannerSrc: M,
            videoBannerSrc: U,
            bannerAspectRatio: B,
            iconSrc: null != D ? D : void 0,
            embedUrl: eT,
            infoUrl: G.Z.getArticleURL(et.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: eI,
            onClickContent: ej,
            trackingConfig: {
                id: j.id,
                linkType: h.Un.RICH_PRESENCE_INVITE,
                onView: A
            }
        });
    }
    let eA = null != (b = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? b : null == R ? void 0 : R.created_at,
        ew =
            null != eA
                ? (0, r.jsxs)('div', {
                      className: ei.timestampContainer,
                      children: [
                          (0, r.jsx)(s.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(C.x3, {
                              entry: {
                                  start: eA,
                                  end: null == R || null == (a = R.timestamps) ? void 0 : a.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        eZ = (0, r.jsxs)(s.Text, {
            variant: 'text-xs/normal',
            className: ei.tagline,
            color: 'none',
            lineClamp: 2,
            children: [J ? (0, W.$v)(P, j, I, S, K) : ew, J ? null : eN]
        }),
        eR = (0, r.jsxs)(r.Fragment, {
            children: [eZ, N || J ? null : w]
        });
    return (0, r.jsx)(_.W, {
        header: eS,
        title: j.name,
        staticBannerSrc: M,
        videoBannerSrc: U,
        bannerAspectRatio: B,
        iconSrc: null != D ? D : void 0,
        embedUrl: eT,
        infoUrl: G.Z.getArticleURL(et.BhN.RICH_PRESENCE_INTRODUCTION),
        info: eR,
        actions: eI,
        onClickContent: ej,
        trackingConfig: {
            id: j.id,
            linkType: h.Un.RICH_PRESENCE_INVITE,
            onView: A
        },
        footer: eP
    });
}
function ef(e) {
    var t, n;
    let { analyticsLocations: l, app: a, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, b.O)(a),
        m = (0, o.e7)([P.default], () => P.default.getId()),
        f = (0, o.e7)(
            [L.Z],
            () => {
                if (null == c.application) return L.Z.findActivity(c.author.id, (e) => e.type === et.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return (ea(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), L.Z.getApplicationActivity(e, c.application.id));
                }
            },
            [c, s, m]
        ),
        g = (0, o.e7)(
            [k.Z, D.Z],
            () => {
                var e;
                return null != (e = k.Z.getApplicationActivity(p.id)) ? e : D.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        _ = (0, o.Wu)(
            [w.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = w.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: h, maxPartySize: E } = (0, Y._)(f),
        y = i.useMemo(
            () =>
                _.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : $.ag;
                }),
            [_]
        ),
        C = (0, en.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === N.r9.id,
        x = (0, r.jsx)(el, {
            partyMembers: y,
            partySize: h,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return C
        ? (0, r.jsx)(eu, {
              application: p,
              currentUserPresenceActivity: g,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: x,
              presenceActivity: f
          })
        : (0, r.jsx)(em, {
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
