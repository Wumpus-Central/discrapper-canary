n.d(t, { c: () => eu }), n(388685), n(539854), n(953529);
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
    h = n(758199),
    g = n(914498),
    _ = n(172109),
    b = n(880251),
    x = n(208444),
    y = n(371991),
    E = n(561308),
    v = n(810568),
    C = n(567409),
    O = n(168524),
    j = n(592745),
    S = n(952164),
    I = n(829820),
    T = n(789407),
    N = n(598077),
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
    B = n(63063),
    G = n(358085),
    H = n(804739),
    V = n(276852),
    z = n(620662),
    W = n(994339),
    K = n(275920),
    Y = n(884338),
    q = n(981631),
    X = n(616922),
    Q = n(388032),
    J = n(581738);
function $(e) {
    let t,
        { partyMembers: n, partySize: i, maxPartySize: l, guildId: a, activityActionType: s } = e,
        c = Math.max(i, n.length);
    t =
        s === q.mFx.LISTEN
            ? l > 0
                ? Q.intl.formatToPlainString(Q.t.Zogooq, {
                      partySize: c,
                      maxPartySize: l
                  })
                : Q.intl.formatToPlainString(Q.t.UGei0t, { partySize: c })
            : l > 0
              ? Q.intl.formatToPlainString(Q.t.gLu7NT, {
                    partySize: c,
                    maxPartySize: l
                })
              : Q.intl.formatToPlainString(Q.t['65JnWF'], { partySize: c });
    let u = [...n];
    for (; u.length < i; ) u.push(new N.Z({ discriminator: '0005' }));
    for (; u.length < l; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: J.partyStatusWrapper,
        children: [
            (0, r.jsx)(Y.Z, {
                guildId: a,
                users: u,
                max: l > 0 ? Math.min(l, 8) : 8,
                size: Y.u.SIZE_16,
                dimEmptyUsers: !0
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function ee(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === q.mFx.JOIN_REQUEST;
}
function et(e) {
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
function en(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > 0 && t >= n;
}
function er(e) {
    let { partySize: t, maxPartySize: n } = e;
    return t > -1 && n > -1;
}
function ei(e, t) {
    var n, r;
    return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id;
}
function el(e, t) {
    switch (t) {
        case q.mFx.LISTEN:
            return Q.intl.formatToPlainString(Q.t['/8czHx'], { name: e });
        case q.mFx.WATCH:
            return Q.intl.formatToPlainString(Q.t.BBJXVl, { name: e });
        case q.mFx.JOIN:
            return Q.intl.string(Q.t.pkq6Vl);
        case q.mFx.JOIN_REQUEST:
        default:
            return Q.intl.string(Q.t.Ckxb6u);
    }
}
function ea(e) {
    var t, n, l, a, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: _ } = e,
        b = ei(u, _),
        x = (0, I.Lz)(_, p.author, 'Invite Embed'),
        E = !(0, W.Z)(_, p, c.id),
        v = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = x.label) ? t : Q.intl.string(Q.t.VJlc0d),
                    trackingArea: g.j_.SYNC,
                    onClick: () => {
                        x.onClick();
                    },
                    disabledReason: x.disabled ? x.tooltip : void 0
                });
            }
            return (
                null != _ &&
                    e.push({
                        label: Q.intl.string(Q.t['HO/oXl']),
                        trackingArea: g.j_.VIEW,
                        onClick() {
                            (0, S.aG)(_);
                        }
                    }),
                e
            );
        }, [b, _, x]),
        C = el(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (E) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: J.description,
            color: 'none',
            lineClamp: 1,
            children: Q.intl.string(Q.t['84qx9v'])
        });
        return (0, r.jsx)(h.W, {
            header: C,
            title: c.name,
            iconSrc: T.r9.getWhiteIconURL(),
            infoUrl: B.Z.getArticleURL(q.BhN.SPOTIFY_CONNECTION),
            info: e,
            actions: [],
            trackingConfig: {
                id: c.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: m
            }
        });
    }
    {
        let e =
                null != _ && null != _.details && null != _.state
                    ? Q.intl.formatToPlainString(Q.t.JCvHt7, {
                          track: _.details,
                          artist: _.state
                      })
                    : c.name,
            t = null != (a = null == _ || null == (n = _.timestamps) ? void 0 : n.start) ? a : null == _ ? void 0 : _.created_at,
            i =
                null != t
                    ? (0, r.jsxs)('div', {
                          className: J.timestampContainer,
                          children: [
                              (0, r.jsx)(o.RZG, { size: 'xxs' }),
                              (0, r.jsx)(y.x3, {
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
            u = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        className: J.tagline,
                        color: 'none',
                        lineClamp: 1,
                        children: i
                    }),
                    d ? null : f
                ]
            });
        return (0, r.jsx)(h.W, {
            header: C,
            title: e,
            iconSrc: null != (s = (0, V.Z)(_, c.id)) ? s : void 0,
            infoUrl: B.Z.getArticleURL(q.BhN.SPOTIFY_CONNECTION),
            info: u,
            actions: v,
            trackingConfig: {
                id: c.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
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
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, a.e7)(
            [R.Z, j.Z, U.Z, A.Z],
            () =>
                (0, H.t)({
                    LibraryApplicationStore: R.Z,
                    LaunchableGameStore: j.Z,
                    DispatchApplicationStore: U.Z,
                    ConnectedAppsStore: A.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function es(e, t, n, r, i) {
    if (e.author.id === r) {
        if (n.isPrivate()) {
            let e = M.default.getUser(n.getRecipientId());
            if (null != e)
                return i
                    ? Q.intl.formatToPlainString(Q.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name
                      })
                    : Q.intl.formatToPlainString(Q.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name
                      });
        }
        return i ? Q.intl.formatToPlainString(Q.t['2N1kNT'], { appName: t.name }) : Q.intl.formatToPlainString(Q.t.IA6uDQ, { appName: t.name });
    }
    return i
        ? Q.intl.formatToPlainString(Q.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name
          })
        : Q.intl.formatToPlainString(Q.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name
          });
}
function ec(e) {
    var t, n, _, v;
    let { analyticsLocations: O, application: j, channel: S, currentUserId: I, currentUserPresenceActivity: T, hideParty: N, message: P, onView: A, partyStatusElement: w, presenceActivity: R } = e,
        k = (0, p.ye)(j),
        { bot: L } = j,
        D = F.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: L
        }),
        { staticBannerSrc: M, videoBannerSrc: U, bannerAspectRatio: H } = (0, b.E)(j),
        V = !(0, W.Z)(R, P, j.id),
        Y = ee(P),
        X = (0, a.e7)([Z.Z], () => Z.Z.getGameByName(j.name), [j.name]),
        { openGameProfileModal: $, isGameLaunchable: ea } = eo(j.id, P.author.id),
        { openGameProfileModal: ec, isGameLaunchable: eu } = eo(null == X ? void 0 : X.id, P.author.id),
        ed = j.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === q.GQo.NVIDIA_GDN_APP;
        }),
        ep = null == ed ? void 0 : ed.id,
        { data: em } = (0, m.IX)(ep),
        { bot: ef } = null != em ? em : { bot: null },
        eh = i.useMemo(
            () =>
                null != ep && null != ef && null != em && (0, p.ye)(em)
                    ? {
                          label: 'Play via Cloud',
                          icon: (0, r.jsx)(o.v3n, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: g.j_.CLOUD_PLAY,
                          onClick: () => {
                              (0, d.W)({
                                  appId: ep,
                                  botId: ef.id,
                                  analyticsLocations: O
                              });
                          }
                      }
                    : null,
            [O, em, ep, ef]
        ),
        eg = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, W.Z)(t, i, l.id)) return !1;
            let s = et(t);
            return !(!er(s) || en(s) || ei(n, t) || ee(i)) && (!!a || (!!G.isPlatformEmbedded && !!o));
        })({
            presenceActivity: R,
            currentUserPresenceActivity: T,
            currentUserId: I,
            message: P,
            application: j,
            isEmbeddedApplication: k,
            isGameLaunchable: ea
        }),
        e_ = !(null == R || !(0, W.Z)(R, P, j.id) || !(0, z.Z)(R, q.xjy.SYNC) || !G.isPlatformEmbedded || ei(T, R)),
        eb = ei(T, R),
        ex = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, W.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== q.mFx.JOIN_REQUEST || !(0, z.Z)(e, q.xjy.JOIN)) return !1;
            let l = et(e);
            return !(!er(l) || en(l));
        })(R, P, j, I),
        ey = i.useMemo(
            () =>
                eg
                    ? {
                          label: Q.intl.string(Q.t.VJlc0d),
                          trackingArea: g.j_.JOIN,
                          onClick: () => {
                              var e;
                              c.Z.join({
                                  userId: P.author.id,
                                  sessionId: R.session_id,
                                  applicationId: R.application_id,
                                  channelId: S.id,
                                  messageId: P.id,
                                  source: q.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, z.Z)(R, q.xjy.EMBEDDED)
                              }),
                                  (0, K.Z)({
                                      type: q.q5t.JOIN,
                                      source: q.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: S.guild_id,
                                      channelId: S.id,
                                      applicationId: R.application_id,
                                      partyId: null == (e = R.party) ? void 0 : e.id,
                                      messageId: P.id,
                                      analyticsLocations: O
                                  });
                          }
                      }
                    : e_
                      ? {
                            label: Q.intl.string(Q.t.VJlc0d),
                            trackingArea: g.j_.SYNC,
                            onClick: () => {
                                null != R && u.Z_(R, P.author.id);
                            }
                        }
                      : ex
                        ? {
                              label: Q.intl.string(Q.t['hC/Ze3']),
                              trackingArea: g.j_.INVITE,
                              onClick: () => {
                                  null != R &&
                                      s.Z.sendActivityInvite({
                                          type: q.mFx.JOIN,
                                          channelId: S.id,
                                          activity: R,
                                          location: q.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: P.author.id === I ? Q.intl.string(Q.t.IBl8IC) : void 0
                          }
                        : eb
                          ? {
                                label: Q.intl.string(Q.t.KC26NT),
                                trackingArea: g.j_.PLAY,
                                onClick: () => {},
                                disabledReason: Q.intl.string(Q.t.KC26NT)
                            }
                          : null != eh
                            ? eh
                            : void 0,
            [O, eg, ex, e_, S.id, S.guild_id, I, eb, P.author.id, P.id, R, eh]
        ),
        eE = i.useMemo(
            () =>
                ea
                    ? {
                          label: Q.intl.string(Q.t.RscU7O),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              c.Z.launch({ applicationId: j.id });
                          }
                      }
                    : eu && (null == X ? void 0 : X.id) != null
                      ? {
                            label: Q.intl.string(Q.t.RscU7O),
                            trackingArea: g.j_.PLAY,
                            onClick: () => {
                                c.Z.launch({ applicationId: X.id });
                            }
                        }
                      : null != eh
                        ? eh
                        : void 0,
            [j.id, ea, eu, null == X ? void 0 : X.id, eh]
        ),
        ev = (0, x.z)(j),
        eC = i.useMemo(
            () =>
                null != $
                    ? {
                          label: Q.intl.string(Q.t['HO/oXl']),
                          trackingArea: g.j_.VIEW,
                          onClick: (e) => {
                              $(e);
                          }
                      }
                    : null != ec
                      ? {
                            label: Q.intl.string(Q.t['HO/oXl']),
                            trackingArea: g.j_.VIEW,
                            onClick: (e) => {
                                ec(e);
                            }
                        }
                      : null != ev && k
                        ? ev
                        : void 0,
            [k, $, ec, ev]
        ),
        eO = i.useMemo(() => {
            let e = [];
            return V || null == ey ? V && null != eE && e.push(eE) : e.push(ey), null != eC && e.push(eC), e;
        }, [eE, V, ey, eC]),
        ej = el(j.name, null == (t = P.activity) ? void 0 : t.type),
        eS = k
            ? (0, f.H)({
                  applicationId: j.id,
                  referrerId: I
              })
            : void 0,
        eI = (0, C.N)(j.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.YqE, {
                          size: 'xxs',
                          color: 'currentColor'
                      }),
                      Q.intl.string(Q.t.TsWCdX)
                  ]
              })
            : null;
    if (V) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: J.description,
            color: 'none',
            lineClamp: 3,
            children: (function (e, t, n, r) {
                var i;
                switch (null == (i = e.activity) ? void 0 : i.type) {
                    case q.mFx.LISTEN:
                    case q.mFx.WATCH:
                    case q.mFx.JOIN:
                        return Q.intl.string(Q.t.x1UXGR);
                    case q.mFx.JOIN_REQUEST:
                    default:
                        return es(e, t, n, r, !0);
                }
            })(P, j, S, I)
        });
        return (0, r.jsx)(h.W, {
            header: ej,
            title: j.name,
            staticBannerSrc: M,
            videoBannerSrc: U,
            bannerAspectRatio: H,
            iconSrc: null != D ? D : void 0,
            embedUrl: eS,
            infoUrl: B.Z.getArticleURL(q.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: eO,
            trackingConfig: {
                id: j.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: A
            }
        });
    }
    let eT = null != (v = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? v : null == R ? void 0 : R.created_at,
        eN =
            null != eT
                ? (0, r.jsxs)('div', {
                      className: J.timestampContainer,
                      children: [
                          (0, r.jsx)(o.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eT,
                                  end: null == R || null == (_ = R.timestamps) ? void 0 : _.end
                              },
                              textColor: 'currentColor',
                              textTabularNumbers: !1,
                              textFontCode: !1
                          })
                      ]
                  })
                : null,
        eP = (0, r.jsxs)(o.Text, {
            variant: 'text-xs/normal',
            className: J.tagline,
            color: 'none',
            lineClamp: 2,
            children: [Y ? es(P, j, S, I, V) : eN, Y ? null : eI]
        }),
        eA = (0, r.jsxs)(r.Fragment, {
            children: [eP, N || Y ? null : w]
        });
    return (0, r.jsx)(h.W, {
        header: ej,
        title: j.name,
        staticBannerSrc: M,
        videoBannerSrc: U,
        bannerAspectRatio: H,
        iconSrc: null != D ? D : void 0,
        embedUrl: eS,
        infoUrl: B.Z.getArticleURL(q.BhN.RICH_PRESENCE_INTRODUCTION),
        info: eA,
        actions: eO,
        trackingConfig: {
            id: j.id,
            linkType: g.Un.RICH_PRESENCE_INVITE,
            onView: A
        }
    });
}
function eu(e) {
    var t, n;
    let { analyticsLocations: l, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, _.O)(o),
        m = (0, a.e7)([P.default], () => P.default.getId()),
        f = (0, a.e7)(
            [L.Z],
            () => {
                if (null == c.application) return L.Z.findActivity(c.author.id, (e) => e.type === q.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return ee(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), L.Z.getApplicationActivity(e, c.application.id);
                }
            },
            [c, s, m]
        ),
        h = (0, a.e7)(
            [k.Z, D.Z],
            () => {
                var e;
                return null != (e = k.Z.getApplicationActivity(p.id)) ? e : D.Z.getApplicationActivity(p.id, !0);
            },
            [p.id]
        ),
        g = (0, a.Wu)(
            [w.Z],
            () => {
                var e;
                return null == f || null == f.party ? [] : Array.from(null != (e = w.Z.getParty(f.party.id)) ? e : []);
            },
            [f]
        ),
        { partySize: b, maxPartySize: x } = et(f),
        y = i.useMemo(
            () =>
                g.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : new N.Z({ discriminator: '0005' });
                }),
            [g]
        ),
        E = (0, X.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === T.r9.id,
        v = (0, r.jsx)($, {
            partyMembers: y,
            partySize: b,
            maxPartySize: x,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return E
        ? (0, r.jsx)(ea, {
              application: p,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
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
              partyStatusElement: v,
              presenceActivity: f
          });
}
