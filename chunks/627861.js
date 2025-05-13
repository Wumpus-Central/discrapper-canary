n.d(t, { c: () => ed }), n(388685), n(539854), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(705512),
    a = n(442837),
    o = n(481060),
    s = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(783097),
    p = n(311819),
    m = n(758199),
    f = n(914498),
    h = n(172109),
    g = n(880251),
    _ = n(208444),
    b = n(371991),
    E = n(561308),
    y = n(810568),
    x = n(567409),
    v = n(168524),
    O = n(592745),
    j = n(952164),
    C = n(829820),
    S = n(789407),
    I = n(598077),
    N = n(314897),
    T = n(757266),
    P = n(831506),
    A = n(77498),
    w = n(283595),
    Z = n(293273),
    R = n(158776),
    k = n(885110),
    D = n(594174),
    L = n(417363),
    M = n(768581),
    U = n(63063),
    F = n(358085),
    B = n(804739),
    G = n(774226),
    H = n(566620),
    V = n(276852),
    z = n(574952),
    W = n(620662),
    K = n(994339),
    Y = n(275920),
    X = n(884338),
    q = n(981631),
    Q = n(616922),
    J = n(388032),
    $ = n(581738);
function ee(e) {
    let t,
        { partyMembers: n, partySize: i, maxPartySize: l, guildId: a, activityActionType: s } = e,
        c = Math.max(i, n.length);
    t =
        s === q.mFx.LISTEN
            ? l > 0
                ? J.intl.formatToPlainString(J.t.Zogooq, {
                      partySize: c,
                      maxPartySize: l
                  })
                : J.intl.formatToPlainString(J.t.UGei0t, { partySize: c })
            : l > 0
              ? J.intl.formatToPlainString(J.t.gLu7NT, {
                    partySize: c,
                    maxPartySize: l
                })
              : J.intl.formatToPlainString(J.t['65JnWF'], { partySize: c });
    let u = [...n];
    for (; u.length < l; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: $.partyStatusWrapper,
        children: [
            (0, r.jsx)(X.Z, {
                guildId: a,
                users: u,
                max: l > 0 ? Math.min(l, 8) : 8,
                size: X.u.SIZE_16
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function et(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === q.mFx.JOIN_REQUEST;
}
function en(e) {
    if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2)
        return {
            partySize: -1,
            maxPartySize: -1
        };
    let [t, n] = e.party.size;
    return {
        partySize: t,
        maxPartySize: n
    };
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
function ea(e, t) {
    switch (t) {
        case q.mFx.LISTEN:
            return J.intl.formatToPlainString(J.t['/8czHx'], { name: e });
        case q.mFx.WATCH:
            return J.intl.formatToPlainString(J.t.BBJXVl, { name: e });
        case q.mFx.JOIN:
            return J.intl.string(J.t['hC/Ze3']);
        case q.mFx.JOIN_REQUEST:
        default:
            return J.intl.string(J.t.Ckxb6u);
    }
}
function eo(e) {
    var t, n, l, a, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: h, partyStatusElement: g, presenceActivity: _ } = e,
        E = el(u, _),
        y = (0, C.Lz)(_, p.author, 'Invite Embed'),
        x = !(0, K.Z)(_, p, c.id),
        v = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = y.label) ? t : J.intl.string(J.t.VJlc0d),
                    trackingArea: f.j_.PLAY,
                    onClick: () => {
                        y.onClick();
                    },
                    disabledReason: y.disabled ? y.tooltip : void 0
                });
            }
            return (
                null != _ &&
                    e.push({
                        label: J.intl.string(J.t['HO/oXl']),
                        trackingArea: f.j_.VIEW,
                        onClick() {
                            (0, j.aG)(_);
                        }
                    }),
                e
            );
        }, [E, _, y]),
        O = ea(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (x) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: $.description,
            color: 'none',
            lineClamp: 1,
            children: J.intl.string(J.t['84qx9v'])
        });
        return (0, r.jsx)(m.W, {
            header: O,
            title: c.name,
            iconSrc: S.r9.getWhiteIconURL(),
            infoUrl: U.Z.getArticleURL(q.BhN.SPOTIFY_CONNECTION),
            info: e,
            actions: [],
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: h
            }
        });
    }
    {
        let e =
                null != _ && null != _.details && null != _.state
                    ? J.intl.formatToPlainString(J.t.JCvHt7, {
                          track: _.details,
                          artist: _.state
                      })
                    : c.name,
            t = null != (a = null == _ || null == (n = _.timestamps) ? void 0 : n.start) ? a : null == _ ? void 0 : _.created_at,
            i =
                null != t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.RZG, { size: 'xxs' }),
                              (0, r.jsx)(b.x3, {
                                  entry: {
                                      start: t,
                                      end: null == _ || null == (l = _.timestamps) ? void 0 : l.end
                                  },
                                  bold: !0
                              })
                          ]
                      })
                    : null,
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        className: $.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : g
                ]
            });
        return (0, r.jsx)(m.W, {
            header: O,
            title: e,
            iconSrc: null != (s = (0, V.Z)(_, c.id)) ? s : void 0,
            infoUrl: U.Z.getArticleURL(q.BhN.SPOTIFY_CONNECTION),
            info: u,
            actions: v,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: h
            }
        });
    }
}
function es(e, t) {
    return {
        openGameProfileModal: (0, v.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: y.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, a.e7)(
            [w.Z, O.Z, L.Z, T.Z],
            () =>
                (0, B.t)({
                    LibraryApplicationStore: w.Z,
                    LaunchableGameStore: O.Z,
                    DispatchApplicationStore: L.Z,
                    ConnectedAppsStore: T.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function ec(e, t, n, r, i) {
    if (e.author.id === r) {
        if (n.isPrivate()) {
            let e = D.default.getUser(n.getRecipientId());
            if (null != e)
                return i
                    ? J.intl.formatToPlainString(J.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name
                      })
                    : J.intl.formatToPlainString(J.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name
                      });
        }
        return i ? J.intl.formatToPlainString(J.t['2N1kNT'], { appName: t.name }) : J.intl.formatToPlainString(J.t.IA6uDQ, { appName: t.name });
    }
    return i
        ? J.intl.formatToPlainString(J.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name
          })
        : J.intl.formatToPlainString(J.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name
          });
}
function eu(e) {
    var t, n, h, y;
    let { analyticsLocations: v, application: O, channel: j, currentUserId: C, currentUserPresenceActivity: S, hideParty: I, message: N, onView: T, partyStatusElement: P, presenceActivity: w } = e,
        Z = (0, d.ye)(O),
        { bot: R } = O,
        k = M.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: R
        }),
        { staticBannerSrc: D, videoBannerSrc: L, bannerAspectRatio: B } = (0, g.E)(O),
        V = (0, G.GK)(O),
        X = (0, z.Z)(),
        Q = !(0, K.Z)(w, N, O.id),
        ee = et(N),
        eo = (0, a.e7)([A.Z], () => A.Z.getGameByName(O.name), [O.name]),
        { openGameProfileModal: eu, isGameLaunchable: ed } = es(O.id, N.author.id),
        { openGameProfileModal: ep, isGameLaunchable: em } = es(null == eo ? void 0 : eo.id, N.author.id),
        ef = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, K.Z)(t, i, l.id)) return !1;
            let s = en(t);
            return !(!ei(s) || er(s) || el(n, t) || et(i)) && (!!a || (!!F.isPlatformEmbedded && !!o));
        })({
            presenceActivity: w,
            currentUserPresenceActivity: S,
            currentUserId: C,
            message: N,
            application: O,
            isEmbeddedApplication: Z,
            isGameLaunchable: ed
        }),
        eh = !(null == w || !(0, K.Z)(w, N, O.id) || !(0, W.Z)(w, q.xjy.SYNC) || !F.isPlatformEmbedded || el(S, w)),
        eg = el(S, w),
        e_ = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, K.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== q.mFx.JOIN_REQUEST || !(0, W.Z)(e, q.xjy.JOIN)) return !1;
            let l = en(e);
            return !(!ei(l) || er(l));
        })(w, N, O, C),
        eb = i.useMemo(
            () =>
                ef
                    ? {
                          label: J.intl.string(J.t.VJlc0d),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              var e;
                              c.Z.join({
                                  userId: N.author.id,
                                  sessionId: w.session_id,
                                  applicationId: w.application_id,
                                  channelId: j.id,
                                  messageId: N.id,
                                  source: q.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: v,
                                  embedded: (0, W.Z)(w, q.xjy.EMBEDDED)
                              }),
                                  (0, Y.Z)({
                                      type: q.q5t.JOIN,
                                      source: q.Sbl.MESSAGE_EMBED,
                                      userId: N.author.id,
                                      guildId: j.guild_id,
                                      channelId: j.id,
                                      applicationId: w.application_id,
                                      partyId: null == (e = w.party) ? void 0 : e.id,
                                      messageId: N.id,
                                      analyticsLocations: v
                                  });
                          }
                      }
                    : eh
                      ? {
                            label: J.intl.string(J.t.VJlc0d),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                null != w && u.Z_(w, N.author.id);
                            }
                        }
                      : e_
                        ? {
                              label: J.intl.string(J.t['hC/Ze3']),
                              trackingArea: f.j_.PLAY,
                              onClick: () => {
                                  null != w &&
                                      s.Z.sendActivityInvite({
                                          type: q.mFx.JOIN,
                                          channelId: j.id,
                                          activity: w,
                                          location: q.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: N.author.id === C ? J.intl.string(J.t.IBl8IC) : void 0
                          }
                        : eg
                          ? {
                                label: J.intl.string(J.t.VJlc0d),
                                trackingArea: f.j_.PLAY,
                                onClick: () => {},
                                disabledReason: J.intl.string(J.t.KC26NT)
                            }
                          : void 0,
            [v, ef, e_, eh, j.id, j.guild_id, C, eg, N.author.id, N.id, w]
        ),
        eE = i.useMemo(
            () =>
                Z && V
                    ? {
                          label: J.intl.string(J.t.RscU7O),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              (0, H.G6)({
                                  channelId: j.id,
                                  applicationId: O.id,
                                  isStart: !0,
                                  embeddedActivitiesManager: X,
                                  customId: void 0,
                                  referrerId: void 0,
                                  analyticsLocations: v
                              });
                          }
                      }
                    : ed
                      ? {
                            label: J.intl.string(J.t.RscU7O),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                c.Z.launch({ applicationId: O.id });
                            }
                        }
                      : em && (null == eo ? void 0 : eo.id) != null
                        ? {
                              label: J.intl.string(J.t.RscU7O),
                              trackingArea: f.j_.PLAY,
                              onClick: () => {
                                  c.Z.launch({ applicationId: eo.id });
                              }
                          }
                        : void 0,
            [v, V, O.id, j.id, X, Z, ed, em, null == eo ? void 0 : eo.id]
        ),
        ey = (0, _.z)(O),
        ex = i.useMemo(
            () =>
                null != ey
                    ? ey
                    : null != eu
                      ? {
                            label: J.intl.string(J.t['HO/oXl']),
                            trackingArea: f.j_.VIEW,
                            onClick: (e) => {
                                eu(e);
                            }
                        }
                      : null != ep
                        ? {
                              label: J.intl.string(J.t['HO/oXl']),
                              trackingArea: f.j_.VIEW,
                              onClick: (e) => {
                                  ep(e);
                              }
                          }
                        : void 0,
            [ey, eu, ep]
        ),
        ev = i.useMemo(() => {
            let e = [];
            return Q || null == eb ? Q && null != eE && e.push(eE) : e.push(eb), null != ex && e.push(ex), e;
        }, [eE, Q, eb, ex]),
        eO = ea(O.name, null == (t = N.activity) ? void 0 : t.type),
        ej = Z
            ? (0, p.H)({
                  applicationId: O.id,
                  referrerId: C
              })
            : void 0;
    (0, x.Ns)(O.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL);
    let eC = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.YqE, {
                size: 'xxs',
                color: 'currentColor'
            }),
            J.intl.string(J.t.TsWCdX)
        ]
    });
    if (Q) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: $.description,
            color: 'none',
            lineClamp: 3,
            children: (function (e, t, n, r) {
                var i;
                switch (null == (i = e.activity) ? void 0 : i.type) {
                    case q.mFx.LISTEN:
                    case q.mFx.WATCH:
                    case q.mFx.JOIN:
                        return J.intl.string(J.t.cX9uLS);
                    case q.mFx.JOIN_REQUEST:
                    default:
                        return ec(e, t, n, r, !0);
                }
            })(N, O, j, C)
        });
        return (0, r.jsx)(m.W, {
            header: eO,
            title: O.name,
            staticBannerSrc: D,
            videoBannerSrc: L,
            bannerAspectRatio: B,
            iconSrc: null != k ? k : void 0,
            embedUrl: ej,
            infoUrl: U.Z.getArticleURL(q.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: ev,
            trackingConfig: {
                id: O.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: T
            }
        });
    }
    let eS = null != (y = null == w || null == (n = w.timestamps) ? void 0 : n.start) ? y : null == w ? void 0 : w.created_at,
        eI =
            null != eS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.jje, { size: 'xxs' }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: eS,
                                  end: null == w || null == (h = w.timestamps) ? void 0 : h.end
                              },
                              bold: !0
                          })
                      ]
                  })
                : null,
        eN = (0, r.jsxs)(o.Text, {
            variant: 'text-xs/normal',
            className: $.tagline,
            color: 'none',
            lineClamp: 2,
            children: [ee ? ec(N, O, j, C, Q) : eI, ee ? null : eC]
        }),
        eT = (0, r.jsxs)(r.Fragment, {
            children: [eN, I || ee ? null : P]
        });
    return (0, r.jsx)(m.W, {
        header: eO,
        title: O.name,
        staticBannerSrc: D,
        videoBannerSrc: L,
        bannerAspectRatio: B,
        iconSrc: null != k ? k : void 0,
        embedUrl: ej,
        infoUrl: U.Z.getArticleURL(q.BhN.RICH_PRESENCE_INTRODUCTION),
        info: eT,
        actions: ev,
        trackingConfig: {
            id: O.id,
            linkType: f.Un.RICH_PRESENCE_INVITE,
            onView: T
        }
    });
}
function ed(e) {
    var t, n;
    let { analyticsLocations: l, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, h.O)(o),
        m = (0, a.e7)([N.default], () => N.default.getId()),
        f = (0, a.e7)(
            [R.Z],
            () => {
                if (null == c.application) return R.Z.findActivity(c.author.id, (e) => e.type === q.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return et(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), R.Z.getApplicationActivity(e, c.application.id);
                }
            },
            [c, s, m]
        ),
        g = (0, a.e7)(
            [Z.Z, k.Z],
            () => {
                var e;
                return null != (e = Z.Z.getApplicationActivity(p.id)) ? e : k.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        _ = (0, a.Wu)(
            [P.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = P.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: b, maxPartySize: E } = en(f),
        y = i.useMemo(
            () =>
                _.map((e) => {
                    let t = D.default.getUser(e);
                    return null != t ? t : new I.Z({ discriminator: '0005' });
                }),
            [_]
        ),
        x = (0, Q.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === S.r9.id,
        v = (0, r.jsx)(ee, {
            partyMembers: y,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return x
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
