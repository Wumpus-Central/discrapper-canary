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
    E = n(208444),
    y = n(371991),
    x = n(561308),
    v = n(810568),
    O = n(567409),
    C = n(168524),
    j = n(592745),
    S = n(952164),
    I = n(829820),
    N = n(789407),
    T = n(598077),
    P = n(314897),
    A = n(757266),
    w = n(831506),
    Z = n(77498),
    R = n(283595),
    k = n(293273),
    D = n(158776),
    M = n(885110),
    L = n(594174),
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
    X = n(981631),
    q = n(616922),
    Q = n(388032),
    J = n(581738);
function $(e) {
    let t,
        { partyMembers: n, partySize: i, maxPartySize: l, guildId: a, activityActionType: s } = e,
        c = Math.max(i, n.length);
    t =
        s === X.mFx.LISTEN
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
    for (; u.length < i; ) u.push(new T.Z({ discriminator: '0005' }));
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
    return (null == (t = e.activity) ? void 0 : t.type) === X.mFx.JOIN_REQUEST;
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
        case X.mFx.LISTEN:
            return Q.intl.formatToPlainString(Q.t['/8czHx'], { name: e });
        case X.mFx.WATCH:
            return Q.intl.formatToPlainString(Q.t.BBJXVl, { name: e });
        case X.mFx.JOIN:
            return Q.intl.string(Q.t.pkq6Vl);
        case X.mFx.JOIN_REQUEST:
        default:
            return Q.intl.string(Q.t.Ckxb6u);
    }
}
function ea(e) {
    var t, n, l, a, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: _ } = e,
        b = ei(u, _),
        E = (0, I.Lz)(_, p.author, 'Invite Embed'),
        x = !(0, W.Z)(_, p, c.id),
        v = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = E.label) ? t : Q.intl.string(Q.t.VJlc0d),
                    trackingArea: g.j_.SYNC,
                    onClick: () => {
                        E.onClick();
                    },
                    disabledReason: E.disabled ? E.tooltip : void 0
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
        }, [b, _, E]),
        O = el(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (x) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: J.description,
            color: 'none',
            lineClamp: 1,
            children: Q.intl.string(Q.t['84qx9v'])
        });
        return (0, r.jsx)(h.W, {
            header: O,
            title: c.name,
            iconSrc: N.r9.getWhiteIconURL(),
            infoUrl: B.Z.getArticleURL(X.BhN.SPOTIFY_CONNECTION),
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
            header: O,
            title: e,
            iconSrc: null != (s = (0, V.Z)(_, c.id)) ? s : void 0,
            infoUrl: B.Z.getArticleURL(X.BhN.SPOTIFY_CONNECTION),
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
        openGameProfileModal: (0, C.Z)({
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
            let e = L.default.getUser(n.getRecipientId());
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
    let { analyticsLocations: C, application: j, channel: S, currentUserId: I, currentUserPresenceActivity: N, hideParty: T, message: P, onView: A, partyStatusElement: w, presenceActivity: R } = e,
        k = (0, p.ye)(j),
        { bot: D } = j,
        M = F.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: D
        }),
        { staticBannerSrc: L, videoBannerSrc: U, bannerAspectRatio: H } = (0, b.E)(j),
        V = !(0, W.Z)(R, P, j.id),
        Y = ee(P),
        q = (0, a.e7)([Z.Z], () => Z.Z.getGameByName(j.name), [j.name]),
        { openGameProfileModal: $, isGameLaunchable: ea } = eo(j.id, P.author.id),
        { openGameProfileModal: ec, isGameLaunchable: eu } = eo(null == q ? void 0 : q.id, P.author.id),
        ed = j.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === X.GQo.NVIDIA_GDN_APP;
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
                                  analyticsLocations: C
                              });
                          }
                      }
                    : null,
            [C, em, ep, ef]
        ),
        eg = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, W.Z)(t, i, l.id)) return !1;
            let s = et(t);
            return !(!er(s) || en(s) || ei(n, t) || ee(i)) && (!!a || (!!G.isPlatformEmbedded && !!o));
        })({
            presenceActivity: R,
            currentUserPresenceActivity: N,
            currentUserId: I,
            message: P,
            application: j,
            isEmbeddedApplication: k,
            isGameLaunchable: ea
        }),
        e_ = !(null == R || !(0, W.Z)(R, P, j.id) || !(0, z.Z)(R, X.xjy.SYNC) || !G.isPlatformEmbedded || ei(N, R)),
        eb = ei(N, R),
        eE = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, W.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== X.mFx.JOIN_REQUEST || !(0, z.Z)(e, X.xjy.JOIN)) return !1;
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
                                  source: X.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: C,
                                  embedded: (0, z.Z)(R, X.xjy.EMBEDDED)
                              }),
                                  (0, K.Z)({
                                      type: X.q5t.JOIN,
                                      source: X.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: S.guild_id,
                                      channelId: S.id,
                                      applicationId: R.application_id,
                                      partyId: null == (e = R.party) ? void 0 : e.id,
                                      messageId: P.id,
                                      analyticsLocations: C
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
                      : eE
                        ? {
                              label: Q.intl.string(Q.t['hC/Ze3']),
                              trackingArea: g.j_.INVITE,
                              onClick: () => {
                                  null != R &&
                                      s.Z.sendActivityInvite({
                                          type: X.mFx.JOIN,
                                          channelId: S.id,
                                          activity: R,
                                          location: X.Sbl.MESSAGE_EMBED
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
            [C, eg, eE, e_, S.id, S.guild_id, I, eb, P.author.id, P.id, R, eh]
        ),
        ex = i.useMemo(
            () =>
                ea
                    ? {
                          label: Q.intl.string(Q.t.RscU7O),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              c.Z.launch({ applicationId: j.id });
                          }
                      }
                    : eu && (null == q ? void 0 : q.id) != null
                      ? {
                            label: Q.intl.string(Q.t.RscU7O),
                            trackingArea: g.j_.PLAY,
                            onClick: () => {
                                c.Z.launch({ applicationId: q.id });
                            }
                        }
                      : null != eh
                        ? eh
                        : void 0,
            [j.id, ea, eu, null == q ? void 0 : q.id, eh]
        ),
        ev = (0, E.z)(j),
        eO = i.useMemo(
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
        eC = i.useMemo(() => {
            let e = [];
            return V || null == ey ? V && null != ex && e.push(ex) : e.push(ey), null != eO && e.push(eO), e;
        }, [ex, V, ey, eO]),
        ej = el(j.name, null == (t = P.activity) ? void 0 : t.type),
        eS = k
            ? (0, f.H)({
                  applicationId: j.id,
                  referrerId: I
              })
            : void 0,
        eI = (0, O.N)(j.id).some((e) => (0, x.ig)(e) === l.o.GLOBAL)
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
                    case X.mFx.LISTEN:
                    case X.mFx.WATCH:
                    case X.mFx.JOIN:
                        return Q.intl.string(Q.t.x1UXGR);
                    case X.mFx.JOIN_REQUEST:
                    default:
                        return es(e, t, n, r, !0);
                }
            })(P, j, S, I)
        });
        return (0, r.jsx)(h.W, {
            header: ej,
            title: j.name,
            staticBannerSrc: L,
            videoBannerSrc: U,
            bannerAspectRatio: H,
            iconSrc: null != M ? M : void 0,
            embedUrl: eS,
            infoUrl: B.Z.getArticleURL(X.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: eC,
            trackingConfig: {
                id: j.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: A
            }
        });
    }
    let eN = null != (v = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? v : null == R ? void 0 : R.created_at,
        eT =
            null != eN
                ? (0, r.jsxs)('div', {
                      className: J.timestampContainer,
                      children: [
                          (0, r.jsx)(o.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eN,
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
            children: [Y ? es(P, j, S, I, V) : eT, Y ? null : eI]
        }),
        eA = (0, r.jsxs)(r.Fragment, {
            children: [eP, T || Y ? null : w]
        });
    return (0, r.jsx)(h.W, {
        header: ej,
        title: j.name,
        staticBannerSrc: L,
        videoBannerSrc: U,
        bannerAspectRatio: H,
        iconSrc: null != M ? M : void 0,
        embedUrl: eS,
        infoUrl: B.Z.getArticleURL(X.BhN.RICH_PRESENCE_INTRODUCTION),
        info: eA,
        actions: eC,
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
            [D.Z],
            () => {
                if (null == c.application) return D.Z.findActivity(c.author.id, (e) => e.type === X.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return ee(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), D.Z.getApplicationActivity(e, c.application.id);
                }
            },
            [c, s, m]
        ),
        h = (0, a.e7)(
            [k.Z, M.Z],
            () => {
                var e;
                return null != (e = k.Z.getApplicationActivity(p.id)) ? e : M.Z.getApplicationActivity(p.id, !0);
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
        { partySize: b, maxPartySize: E } = et(f),
        y = i.useMemo(
            () =>
                g.map((e) => {
                    let t = L.default.getUser(e);
                    return null != t ? t : new T.Z({ discriminator: '0005' });
                }),
            [g]
        ),
        x = (0, q.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === N.r9.id,
        v = (0, r.jsx)($, {
            partyMembers: y,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return x
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
