n.d(t, { c: () => em }), n(388685), n(539854), n(953529);
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
    x = n(371991),
    y = n(561308),
    v = n(810568),
    O = n(567409),
    j = n(168524),
    C = n(592745),
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
    L = n(885110),
    M = n(594174),
    U = n(417363),
    F = n(768581),
    B = n(63063),
    G = n(358085),
    H = n(804739),
    V = n(774226),
    z = n(566620),
    W = n(276852),
    K = n(574952),
    Y = n(620662),
    X = n(994339),
    q = n(275920),
    Q = n(884338),
    J = n(981631),
    $ = n(616922),
    ee = n(388032),
    et = n(581738);
function en(e) {
    let t,
        { partyMembers: n, partySize: i, maxPartySize: l, guildId: a, activityActionType: s } = e,
        c = Math.max(i, n.length);
    t =
        s === J.mFx.LISTEN
            ? l > 0
                ? ee.intl.formatToPlainString(ee.t.Zogooq, {
                      partySize: c,
                      maxPartySize: l
                  })
                : ee.intl.formatToPlainString(ee.t.UGei0t, { partySize: c })
            : l > 0
              ? ee.intl.formatToPlainString(ee.t.gLu7NT, {
                    partySize: c,
                    maxPartySize: l
                })
              : ee.intl.formatToPlainString(ee.t['65JnWF'], { partySize: c });
    let u = [...n];
    for (; u.length < l; ) u.push(null);
    return (0, r.jsxs)('div', {
        className: et.partyStatusWrapper,
        children: [
            (0, r.jsx)(Q.Z, {
                guildId: a,
                users: u,
                max: l > 0 ? Math.min(l, 8) : 8,
                size: Q.u.SIZE_16
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'none',
                children: t
            })
        ]
    });
}
function er(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === J.mFx.JOIN_REQUEST;
}
function ei(e) {
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
function es(e, t) {
    switch (t) {
        case J.mFx.LISTEN:
            return ee.intl.formatToPlainString(ee.t['/8czHx'], { name: e });
        case J.mFx.WATCH:
            return ee.intl.formatToPlainString(ee.t.BBJXVl, { name: e });
        case J.mFx.JOIN:
            return ee.intl.string(ee.t.pkq6Vl);
        case J.mFx.JOIN_REQUEST:
        default:
            return ee.intl.string(ee.t.Ckxb6u);
    }
}
function ec(e) {
    var t, n, l, a, s;
    let { application: c, currentUserPresenceActivity: u, hideParty: d, message: p, onView: m, partyStatusElement: f, presenceActivity: _ } = e,
        b = eo(u, _),
        E = (0, I.Lz)(_, p.author, 'Invite Embed'),
        y = !(0, X.Z)(_, p, c.id),
        v = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = E.label) ? t : ee.intl.string(ee.t.VJlc0d),
                    trackingArea: g.j_.PLAY,
                    onClick: () => {
                        E.onClick();
                    },
                    disabledReason: E.disabled ? E.tooltip : void 0
                });
            }
            return (
                null != _ &&
                    e.push({
                        label: ee.intl.string(ee.t['HO/oXl']),
                        trackingArea: g.j_.VIEW,
                        onClick() {
                            (0, S.aG)(_);
                        }
                    }),
                e
            );
        }, [b, _, E]),
        O = es(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (y) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: et.description,
            color: 'none',
            lineClamp: 1,
            children: ee.intl.string(ee.t['84qx9v'])
        });
        return (0, r.jsx)(h.W, {
            header: O,
            title: c.name,
            iconSrc: N.r9.getWhiteIconURL(),
            infoUrl: B.Z.getArticleURL(J.BhN.SPOTIFY_CONNECTION),
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
                    ? ee.intl.formatToPlainString(ee.t.JCvHt7, {
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
                              (0, r.jsx)(x.x3, {
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
                        className: et.tagline,
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
            iconSrc: null != (s = (0, W.Z)(_, c.id)) ? s : void 0,
            infoUrl: B.Z.getArticleURL(J.BhN.SPOTIFY_CONNECTION),
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
function eu(e, t) {
    return {
        openGameProfileModal: (0, j.Z)({
            location: 'Rich Presence Activity Invite Embed',
            applicationId: e,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t
        }),
        isGameLaunchable: (0, a.e7)(
            [R.Z, C.Z, U.Z, A.Z],
            () =>
                (0, H.t)({
                    LibraryApplicationStore: R.Z,
                    LaunchableGameStore: C.Z,
                    DispatchApplicationStore: U.Z,
                    ConnectedAppsStore: A.Z,
                    applicationId: null != e ? e : ''
                }),
            [e]
        )
    };
}
function ed(e, t, n, r, i) {
    if (e.author.id === r) {
        if (n.isPrivate()) {
            let e = M.default.getUser(n.getRecipientId());
            if (null != e)
                return i
                    ? ee.intl.formatToPlainString(ee.t.JddpNz, {
                          username: e.globalName,
                          appName: t.name
                      })
                    : ee.intl.formatToPlainString(ee.t.gYVkSU, {
                          username: e.globalName,
                          appName: t.name
                      });
        }
        return i ? ee.intl.formatToPlainString(ee.t['2N1kNT'], { appName: t.name }) : ee.intl.formatToPlainString(ee.t.IA6uDQ, { appName: t.name });
    }
    return i
        ? ee.intl.formatToPlainString(ee.t.XE8axM, {
              username: e.author.globalName,
              appName: t.name
          })
        : ee.intl.formatToPlainString(ee.t.hgcjOj, {
              username: e.author.globalName,
              appName: t.name
          });
}
function ep(e) {
    var t, n, _, v;
    let { analyticsLocations: j, application: C, channel: S, currentUserId: I, currentUserPresenceActivity: N, hideParty: T, message: P, onView: A, partyStatusElement: w, presenceActivity: R } = e,
        k = (0, p.ye)(C),
        { bot: D } = C,
        L = F.ZP.getApplicationIconURL({
            id: C.id,
            icon: C.icon,
            bot: D
        }),
        { staticBannerSrc: M, videoBannerSrc: U, bannerAspectRatio: H } = (0, b.E)(C),
        W = (0, V.GK)(C),
        Q = (0, K.Z)(),
        $ = !(0, X.Z)(R, P, C.id),
        en = er(P),
        ec = (0, a.e7)([Z.Z], () => Z.Z.getGameByName(C.name), [C.name]),
        { openGameProfileModal: ep, isGameLaunchable: em } = eu(C.id, P.author.id),
        { openGameProfileModal: ef, isGameLaunchable: eh } = eu(null == ec ? void 0 : ec.id, P.author.id),
        eg = C.thirdPartySkus.find((e) => {
            let { distributor: t } = e;
            return t === J.GQo.NVIDIA_GDN_APP;
        }),
        e_ = null == eg ? void 0 : eg.id,
        { data: eb } = (0, m.IX)(e_),
        { bot: eE } = null != eb ? eb : { bot: null },
        ex = i.useMemo(
            () =>
                null != e_ && null != eE && null != eb && (0, p.ye)(eb)
                    ? {
                          label: 'Play via Cloud',
                          icon: (0, r.jsx)(o.nMW, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              (0, d.W)({
                                  appId: e_,
                                  botId: eE.id,
                                  analyticsLocations: j
                              });
                          }
                      }
                    : null,
            [j, eb, e_, eE]
        ),
        ey = (function (e) {
            let { presenceActivity: t, currentUserPresenceActivity: n, currentUserId: r, message: i, application: l, isEmbeddedApplication: a, isGameLaunchable: o } = e;
            if (i.author.id === r || !(0, X.Z)(t, i, l.id)) return !1;
            let s = ei(t);
            return !(!ea(s) || el(s) || eo(n, t) || er(i)) && (!!a || (!!G.isPlatformEmbedded && !!o));
        })({
            presenceActivity: R,
            currentUserPresenceActivity: N,
            currentUserId: I,
            message: P,
            application: C,
            isEmbeddedApplication: k,
            isGameLaunchable: em
        }),
        ev = !(null == R || !(0, X.Z)(R, P, C.id) || !(0, Y.Z)(R, J.xjy.SYNC) || !G.isPlatformEmbedded || eo(N, R)),
        eO = eo(N, R),
        ej = (function (e, t, n, r) {
            var i;
            if (t.author.id === r || !(0, X.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== J.mFx.JOIN_REQUEST || !(0, Y.Z)(e, J.xjy.JOIN)) return !1;
            let l = ei(e);
            return !(!ea(l) || el(l));
        })(R, P, C, I),
        eC = i.useMemo(
            () =>
                ey
                    ? {
                          label: ee.intl.string(ee.t.VJlc0d),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              var e;
                              c.Z.join({
                                  userId: P.author.id,
                                  sessionId: R.session_id,
                                  applicationId: R.application_id,
                                  channelId: S.id,
                                  messageId: P.id,
                                  source: J.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: j,
                                  embedded: (0, Y.Z)(R, J.xjy.EMBEDDED)
                              }),
                                  (0, q.Z)({
                                      type: J.q5t.JOIN,
                                      source: J.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: S.guild_id,
                                      channelId: S.id,
                                      applicationId: R.application_id,
                                      partyId: null == (e = R.party) ? void 0 : e.id,
                                      messageId: P.id,
                                      analyticsLocations: j
                                  });
                          }
                      }
                    : ev
                      ? {
                            label: ee.intl.string(ee.t.VJlc0d),
                            trackingArea: g.j_.PLAY,
                            onClick: () => {
                                null != R && u.Z_(R, P.author.id);
                            }
                        }
                      : ej
                        ? {
                              label: ee.intl.string(ee.t['hC/Ze3']),
                              trackingArea: g.j_.PLAY,
                              onClick: () => {
                                  null != R &&
                                      s.Z.sendActivityInvite({
                                          type: J.mFx.JOIN,
                                          channelId: S.id,
                                          activity: R,
                                          location: J.Sbl.MESSAGE_EMBED
                                      });
                              },
                              disabledReason: P.author.id === I ? ee.intl.string(ee.t.IBl8IC) : void 0
                          }
                        : eO
                          ? {
                                label: ee.intl.string(ee.t.VJlc0d),
                                trackingArea: g.j_.PLAY,
                                onClick: () => {},
                                disabledReason: ee.intl.string(ee.t.KC26NT)
                            }
                          : null != ex
                            ? ex
                            : void 0,
            [j, ey, ej, ev, S.id, S.guild_id, I, eO, P.author.id, P.id, R, ex]
        ),
        eS = i.useMemo(
            () =>
                k && W
                    ? {
                          label: ee.intl.string(ee.t.RscU7O),
                          trackingArea: g.j_.PLAY,
                          onClick: () => {
                              (0, z.G6)({
                                  channelId: S.id,
                                  applicationId: C.id,
                                  isStart: !0,
                                  embeddedActivitiesManager: Q,
                                  customId: void 0,
                                  referrerId: void 0,
                                  analyticsLocations: j
                              });
                          }
                      }
                    : em
                      ? {
                            label: ee.intl.string(ee.t.RscU7O),
                            trackingArea: g.j_.PLAY,
                            onClick: () => {
                                c.Z.launch({ applicationId: C.id });
                            }
                        }
                      : eh && (null == ec ? void 0 : ec.id) != null
                        ? {
                              label: ee.intl.string(ee.t.RscU7O),
                              trackingArea: g.j_.PLAY,
                              onClick: () => {
                                  c.Z.launch({ applicationId: ec.id });
                              }
                          }
                        : null != ex
                          ? ex
                          : void 0,
            [j, W, C.id, S.id, Q, k, em, eh, null == ec ? void 0 : ec.id, ex]
        ),
        eI = (0, E.z)(C),
        eN = i.useMemo(
            () =>
                null != ep
                    ? {
                          label: ee.intl.string(ee.t['HO/oXl']),
                          trackingArea: g.j_.VIEW,
                          onClick: (e) => {
                              ep(e);
                          }
                      }
                    : null != ef
                      ? {
                            label: ee.intl.string(ee.t['HO/oXl']),
                            trackingArea: g.j_.VIEW,
                            onClick: (e) => {
                                ef(e);
                            }
                        }
                      : null != eI
                        ? eI
                        : void 0,
            [eI, ep, ef]
        ),
        eT = i.useMemo(() => {
            let e = [];
            return $ || null == eC ? $ && null != eS && e.push(eS) : e.push(eC), null != eN && e.push(eN), e;
        }, [eS, $, eC, eN]),
        eP = es(C.name, null == (t = P.activity) ? void 0 : t.type),
        eA = k
            ? (0, f.H)({
                  applicationId: C.id,
                  referrerId: I
              })
            : void 0;
    (0, O.Ns)(C.id).some((e) => (0, y.ig)(e) === l.o.GLOBAL);
    let ew = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.YqE, {
                size: 'xxs',
                color: 'currentColor'
            }),
            ee.intl.string(ee.t.TsWCdX)
        ]
    });
    if ($) {
        let e = (0, r.jsx)(o.Text, {
            variant: 'text-xs/medium',
            className: et.description,
            color: 'none',
            lineClamp: 3,
            children: (function (e, t, n, r) {
                var i;
                switch (null == (i = e.activity) ? void 0 : i.type) {
                    case J.mFx.LISTEN:
                    case J.mFx.WATCH:
                    case J.mFx.JOIN:
                        return ee.intl.string(ee.t.x1UXGR);
                    case J.mFx.JOIN_REQUEST:
                    default:
                        return ed(e, t, n, r, !0);
                }
            })(P, C, S, I)
        });
        return (0, r.jsx)(h.W, {
            header: eP,
            title: C.name,
            staticBannerSrc: M,
            videoBannerSrc: U,
            bannerAspectRatio: H,
            iconSrc: null != L ? L : void 0,
            embedUrl: eA,
            infoUrl: B.Z.getArticleURL(J.BhN.RICH_PRESENCE_INTRODUCTION),
            info: e,
            actions: eT,
            trackingConfig: {
                id: C.id,
                linkType: g.Un.RICH_PRESENCE_INVITE,
                onView: A
            }
        });
    }
    let eZ = null != (v = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? v : null == R ? void 0 : R.created_at,
        eR =
            null != eZ
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.iWm, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(x.x3, {
                              entry: {
                                  start: eZ,
                                  end: null == R || null == (_ = R.timestamps) ? void 0 : _.end
                              },
                              bold: !0
                          })
                      ]
                  })
                : null,
        ek = (0, r.jsxs)(o.Text, {
            variant: 'text-xs/normal',
            className: et.tagline,
            color: 'none',
            lineClamp: 2,
            children: [en ? ed(P, C, S, I, $) : eR, en ? null : ew]
        }),
        eD = (0, r.jsxs)(r.Fragment, {
            children: [ek, T || en ? null : w]
        });
    return (0, r.jsx)(h.W, {
        header: eP,
        title: C.name,
        staticBannerSrc: M,
        videoBannerSrc: U,
        bannerAspectRatio: H,
        iconSrc: null != L ? L : void 0,
        embedUrl: eA,
        infoUrl: B.Z.getArticleURL(J.BhN.RICH_PRESENCE_INTRODUCTION),
        info: eD,
        actions: eT,
        trackingConfig: {
            id: C.id,
            linkType: g.Un.RICH_PRESENCE_INVITE,
            onView: A
        }
    });
}
function em(e) {
    var t, n;
    let { analyticsLocations: l, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        p = (0, _.O)(o),
        m = (0, a.e7)([P.default], () => P.default.getId()),
        f = (0, a.e7)(
            [D.Z],
            () => {
                if (null == c.application) return D.Z.findActivity(c.author.id, (e) => e.type === J.IIU.LISTENING);
                {
                    let e = c.author.id;
                    return er(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), D.Z.getApplicationActivity(e, c.application.id);
                }
            },
            [c, s, m]
        ),
        h = (0, a.e7)(
            [k.Z, L.Z],
            () => {
                var e;
                return null != (e = k.Z.getApplicationActivity(p.id)) ? e : L.Z.getApplicationActivity(p.id, !0);
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
        { partySize: b, maxPartySize: E } = ei(f),
        x = i.useMemo(
            () =>
                g.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : new T.Z({ discriminator: '0005' });
                }),
            [g]
        ),
        y = (0, $.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === N.r9.id,
        v = (0, r.jsx)(en, {
            partyMembers: x,
            partySize: b,
            maxPartySize: E,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type
        });
    return y
        ? (0, r.jsx)(ec, {
              application: p,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: f
          })
        : (0, r.jsx)(ep, {
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
