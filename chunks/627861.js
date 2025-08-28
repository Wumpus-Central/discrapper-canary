n.d(t, { c: () => eE }), n(388685), n(539854), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(990547),
    o = n(705512),
    s = n(267843),
    l = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(224706),
    f = n(763472),
    _ = n(213609),
    p = n(783097),
    h = n(758199),
    m = n(914498),
    g = n(172109),
    E = n(880251),
    b = n(515344),
    y = n(371991),
    O = n(561308),
    v = n(813370),
    I = n(810568),
    T = n(567409),
    S = n(168524),
    A = n(592745),
    C = n(956512),
    N = n(952164),
    R = n(829820),
    P = n(789407),
    w = n(314897),
    D = n(757266),
    x = n(831506),
    L = n(77498),
    j = n(283595),
    M = n(293273),
    k = n(158776),
    U = n(885110),
    G = n(594174),
    B = n(181106),
    Z = n(417363),
    F = n(768581),
    V = n(823379),
    H = n(358085),
    Y = n(804739),
    W = n(758371),
    K = n(931271),
    z = n(565201),
    q = n(276852),
    X = n(150248),
    Q = n(691731),
    J = n(984211),
    $ = n(620662),
    ee = n(994339),
    et = n(275920),
    en = n(561766),
    er = n(206074),
    ei = n(884338),
    ea = n(404174),
    eo = n(981631),
    es = n(616922),
    el = n(388032),
    ec = n(723295);
let eu = 8;
function ed(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, W.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < eu; ) u.push(ei.ag);
    for (; u.length < i && u.length < eu; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: ec.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(ei.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, eu) : eu,
                    size: ei.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l,
            }),
        ],
    });
}
function ef(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === eo.mFx.STREAM_REQUEST;
}
function e_(e, t, n, r) {
    return !(
        null == e ||
        !(0, ee.Z)(e, n, r.id) ||
        !(0, $.Z)(e, eo.xjy.SYNC) ||
        !H.isPlatformEmbedded ||
        (0, Q.g)(t, e)
    );
}
function ep(e) {
    var t, n, a, o, s;
    let {
            application: l,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: _,
            partyStatusElement: p,
            presenceActivity: g,
        } = e,
        E = (0, Q.g)(u, g),
        b = (0, R.Lz)(g, f.author, "Invite Embed"),
        O = !(0, ee.Z)(g, f, l.id),
        v = [],
        I = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = b.label) ? t : el.intl.string(el.t.VJlc0d),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        b.onClick();
                    },
                    disabledReason: b.disabled ? b.tooltip : void 0,
                });
            }
            return e;
        }, [E, b]),
        T = i.useMemo(() => {
            if (null != g) return () => (0, N.aG)(g);
        }, [g]),
        S = (0, W.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (O) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ec.description,
            color: "none",
            lineClamp: 1,
            children: el.intl.string(el.t["84qx9v"]),
        });
        return (0, r.jsx)(h.W, {
            header: S,
            title: l.name,
            iconSrc: P.r9.getWhiteIconURL(),
            info: e,
            actions: v,
            onClickContent: T,
            trackingConfig: {
                id: l.id,
                linkType: m.Un.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
            },
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? el.intl.formatToPlainString(el.t.JCvHt7, {
                          track: g.details,
                          artist: g.state,
                      })
                    : l.name,
            t =
                null != (o = null == g || null == (n = g.timestamps) ? void 0 : n.start)
                    ? o
                    : null == g
                      ? void 0
                      : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: ec.timestampContainer,
                          children: [
                              (0, r.jsx)(c.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(y.x3, {
                                  entry: {
                                      start: t,
                                      end: null == g || null == (a = g.timestamps) ? void 0 : a.end,
                                  },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            u = (0, r.jsxs)("div", {
                className: ec.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: ec.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    d ? null : p,
                ],
            });
        return (0, r.jsx)(h.W, {
            header: S,
            title: e,
            iconSrc: null != (s = (0, q.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: I,
            onClickContent: T,
            trackingConfig: {
                id: l.id,
                linkType: m.Un.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
            },
        });
    }
}
function eh(e, t) {
    return {
        openGameProfileModal: (0, S.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: e,
            source: I.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        isGameLaunchable: (0, l.e7)(
            [j.Z, A.Z, Z.Z, D.Z],
            () =>
                (0, Y.t)({
                    LibraryApplicationStore: j.Z,
                    LaunchableGameStore: A.Z,
                    DispatchApplicationStore: Z.Z,
                    ConnectedAppsStore: D.Z,
                    applicationId: null != e ? e : "",
                }),
            [e],
        ),
    };
}
function em(e) {
    let { presenceActivity: t } = e,
        n = (0, en.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: eo.M7m.DESKTOP,
        }),
        a = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case en.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.ANDROID:
                                return (0, r.jsx)(ea.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case en.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case en.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(V.lm),
            [n],
        );
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: ec.footer,
              children: [
                  (0, r.jsx)("div", {
                      className: ec.footerSupportedPlatformIconsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: ec.footerSupportedPlatformIconContainer,
                                  children: e,
                              },
                              t,
                          ),
                      ),
                  }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: ec.footerSupportedPlatformText,
                      children: el.intl.string(el.t["4dGUPz"]),
                  }),
              ],
          });
}
function eg(e) {
    var t, n, s, g;
    let {
            analyticsLocations: I,
            application: S,
            channel: A,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: w,
            partyStatusElement: D,
            presenceActivity: x,
        } = e,
        j = (0, v.A)(S),
        M = (0, p.ye)(S),
        { bot: k } = S,
        U = F.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: k,
        }),
        { staticBannerSrc: G, videoBannerSrc: Z, bannerAspectRatio: V } = (0, E.E)(S),
        H = !(0, ee.Z)(x, P, S.id),
        Y = (0, X.H)(P),
        q = (0, l.e7)([L.Z], () => L.Z.getGameByName(S.name), [S.name]),
        { openGameProfileModal: J, isGameLaunchable: en } = eh(S.id, P.author.id),
        { openGameProfileModal: ei, isGameLaunchable: ea } = eh(null == q ? void 0 : q.id, P.author.id),
        es = (0, er.Z)({
            application: S,
            analyticsLocations: I,
        }),
        eu = i.useMemo(
            () =>
                null == es
                    ? null
                    : {
                          label: el.intl.string(el.t["jaYS/v"]),
                          icon: (0, r.jsx)(c.v3n, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: es,
                      },
            [es],
        ),
        { canJoin: ed, remoteJoinPlatform: ef } = (0, K.h)({
            presenceActivity: x,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: j,
            isGameLaunchable: en,
        }),
        ep = e_(x, N, P, S),
        eg = (0, Q.g)(N, x),
        eE = (0, z.L)(x, P, S, C),
        eb = (0, l.e7)(
            [B.Z],
            () =>
                null != x && null != x.application_id && B.Z.getState(x.application_id, eo.mFx.JOIN) === eo.OcF.LOADING,
        ),
        ey = i.useMemo(
            () =>
                ed
                    ? {
                          label: el.intl.string(el.t.VJlc0d),
                          trackingArea: m.j_.JOIN,
                          submitting: eb,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: P.author.id,
                                  sessionId: x.session_id,
                                  applicationId: x.application_id,
                                  channelId: A.id,
                                  messageId: P.id,
                                  source: eo.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: I,
                                  embedded: (0, $.Z)(x, eo.xjy.EMBEDDED),
                                  remotePartyId: null != ef ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, et.Z)({
                                      type: eo.q5t.JOIN,
                                      source: eo.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: I,
                                  });
                          },
                      }
                    : ep
                      ? {
                            label: el.intl.string(el.t.VJlc0d),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, P.author.id);
                            },
                        }
                      : eE
                        ? {
                              label: el.intl.string(el.t["hC/Ze3"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != x &&
                                      u.Z.sendActivityInvite({
                                          type: eo.mFx.JOIN,
                                          channelId: A.id,
                                          activity: x,
                                          location: eo.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabledReason: P.author.id === C ? el.intl.string(el.t.IBl8IC) : void 0,
                          }
                        : eg
                          ? {
                                label: el.intl.string(el.t.KC26NT),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabledReason: el.intl.string(el.t.KC26NT),
                            }
                          : null != eu
                            ? eu
                            : void 0,
            [ed, ep, eE, eg, eu, P.author.id, P.id, x, A.id, A.guild_id, I, ef, C, eb],
        ),
        eO = i.useMemo(
            () =>
                en
                    ? {
                          label: el.intl.string(el.t.RscU7O),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({ applicationId: S.id });
                          },
                      }
                    : ea && (null == q ? void 0 : q.id) != null
                      ? {
                            label: el.intl.string(el.t.RscU7O),
                            trackingArea: m.j_.PLAY,
                            onClick: () => {
                                d.Z.launch({ applicationId: q.id });
                            },
                        }
                      : null != eu
                        ? eu
                        : void 0,
            [S.id, en, ea, null == q ? void 0 : q.id, eu],
        ),
        ev = (0, b.G)(S),
        eI = i.useMemo(() => (null != J ? J : null != ei ? ei : null != ev && M ? ev : void 0), [M, J, ei, ev]),
        eT = i.useMemo(() => {
            let e = [];
            return H || null == ey ? H && null != eO && e.push(eO) : e.push(ey), e;
        }, [eO, H, ey]),
        eS = i.useMemo(() => eT.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eT]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: I },
        },
        { disableTrack: !eS },
    );
    let eA = (0, W.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type),
        eC = (0, T.N)(S.id).some((e) => (0, O.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      el.intl.string(el.t.TsWCdX),
                  ],
              })
            : null,
        eN = (0, r.jsx)(em, { presenceActivity: x });
    if (H) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: ec.description,
            color: "none",
            lineClamp: 3,
            children: (0, W.wR)(P, S, A, C),
        });
        return (0, r.jsx)(h.W, {
            header: eA,
            title: S.name,
            staticBannerSrc: G,
            videoBannerSrc: Z,
            onClickBanner: eI,
            bannerAspectRatio: V,
            iconSrc: null != U ? U : void 0,
            info: e,
            actions: eT,
            onClickContent: eI,
            trackingConfig: {
                id: S.id,
                linkType: m.Un.RICH_PRESENCE_INVITE,
                onView: w,
                referrerId: P.author.id,
            },
        });
    }
    let eR =
            null != (g = null == x || null == (n = x.timestamps) ? void 0 : n.start)
                ? g
                : null == x
                  ? void 0
                  : x.created_at,
        eP =
            null != eR
                ? (0, r.jsxs)("div", {
                      className: ec.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: eR,
                                  end: null == x || null == (s = x.timestamps) ? void 0 : s.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        ew = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: ec.tagline,
            color: "none",
            lineClamp: 2,
            children: [Y ? (0, W.$v)(P, S, A, C, H) : eP, Y ? null : eC],
        }),
        eD = (0, r.jsxs)("div", {
            className: ec.info,
            children: [ew, R || Y ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eA,
        title: S.name,
        staticBannerSrc: G,
        videoBannerSrc: Z,
        onClickBanner: eI,
        bannerAspectRatio: V,
        iconSrc: null != U ? U : void 0,
        info: eD,
        actions: eT,
        onClickContent: eI,
        trackingConfig: {
            id: S.id,
            linkType: m.Un.RICH_PRESENCE_INVITE,
            onView: w,
            referrerId: P.author.id,
        },
        footer: eN,
    });
}
function eE(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([w.default], () => w.default.getId()),
        p = (0, l.e7)([k.Z], () => {
            if (null == c.application) return k.Z.findActivity(c.author.id, (e) => e.type === eo.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, X.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    k.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([M.Z, U.Z], () => {
            var e;
            return null != (e = M.Z.getApplicationActivity(f.id)) ? e : U.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([x.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = x.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, J._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = G.default.getUser(e);
                    return null != t ? t : ei.ag;
                }),
            [m],
        ),
        O = (0, es.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === P.r9.id,
        v = (0, r.jsx)(ed, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ep, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
          })
        : ef(c)
          ? (0, r.jsx)(C.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(eg, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                currentUserPresenceActivity: h,
                hideParty: u,
                message: c,
                onView: d,
                partyStatusElement: v,
                presenceActivity: p,
            });
}
