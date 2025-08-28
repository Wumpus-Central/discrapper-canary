n.d(t, { c: () => em }), n(388685), n(539854), n(953529);
var r = n(951288),
    i = n(647438),
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
    C = n(829820),
    N = n(789407),
    R = n(314897),
    P = n(757266),
    w = n(831506),
    D = n(77498),
    x = n(283595),
    L = n(293273),
    j = n(158776),
    M = n(885110),
    k = n(594174),
    U = n(181106),
    G = n(417363),
    B = n(768581),
    Z = n(823379),
    F = n(358085),
    V = n(804739),
    H = n(758371),
    Y = n(931271),
    W = n(565201),
    K = n(276852),
    z = n(150248),
    q = n(691731),
    X = n(984211),
    Q = n(620662),
    J = n(994339),
    $ = n(275920),
    ee = n(561766),
    et = n(206074),
    en = n(884338),
    er = n(404174),
    ei = n(981631),
    ea = n(616922),
    eo = n(388032),
    es = n(723295);
let el = 8;
function ec(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        c = (0, H.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < el; ) u.push(en.ag);
    for (; u.length < i && u.length < el; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: es.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(en.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, el) : el,
                    size: en.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: c,
            }),
        ],
    });
}
function eu(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === ei.mFx.STREAM_REQUEST;
}
function ed(e, t, n, r) {
    return !(
        null == e ||
        !(0, J.Z)(e, n, r.id) ||
        !(0, Q.Z)(e, ei.xjy.SYNC) ||
        !F.isPlatformEmbedded ||
        (0, q.g)(t, e)
    );
}
function ef(e) {
    var t, n, a, o, s;
    let {
            application: c,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: h,
            partyStatusElement: m,
            presenceActivity: g,
        } = e,
        b = (0, q.g)(u, g),
        y = (0, C.Lz)(g, f.author, "Invite Embed"),
        O = !(0, J.Z)(g, f, c.id),
        v = [],
        I = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = y.label) ? t : eo.intl.string(eo.t.VJlc0d),
                    trackingArea: p.j_.SYNC,
                    onClick: () => {
                        y.onClick();
                    },
                    disabledReason: y.disabled ? y.tooltip : void 0,
                });
            }
            return e;
        }, [b, y]),
        T = i.useMemo(() => {
            if (null != g) return () => (0, A.aG)(g);
        }, [g]),
        S = (0, H.dQ)(c.name, null == (t = f.activity) ? void 0 : t.type);
    if (O) {
        let e = (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: es.description,
            color: "none",
            lineClamp: 1,
            children: eo.intl.string(eo.t["84qx9v"]),
        });
        return (0, r.jsx)(_.W, {
            header: S,
            title: c.name,
            iconSrc: N.r9.getWhiteIconURL(),
            info: e,
            actions: v,
            onClickContent: T,
            trackingConfig: {
                id: c.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: h,
                referrerId: f.author.id,
            },
        });
    }
    {
        let e =
                null != g && null != g.details && null != g.state
                    ? eo.intl.formatToPlainString(eo.t.JCvHt7, {
                          track: g.details,
                          artist: g.state,
                      })
                    : c.name,
            t =
                null != (o = null == g || null == (n = g.timestamps) ? void 0 : n.start)
                    ? o
                    : null == g
                      ? void 0
                      : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: es.timestampContainer,
                          children: [
                              (0, r.jsx)(l.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(E.x3, {
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
                className: es.info,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        className: es.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    d ? null : m,
                ],
            });
        return (0, r.jsx)(_.W, {
            header: S,
            title: e,
            iconSrc: null != (s = (0, K.Z)(g, c.id)) ? s : void 0,
            info: u,
            actions: I,
            onClickContent: T,
            trackingConfig: {
                id: c.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: h,
                referrerId: f.author.id,
            },
        });
    }
}
function e_(e, t) {
    return {
        openGameProfileModal: (0, I.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: e,
            source: O.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        isGameLaunchable: (0, s.e7)(
            [x.Z, T.Z, G.Z, P.Z],
            () =>
                (0, V.t)({
                    LibraryApplicationStore: x.Z,
                    LaunchableGameStore: T.Z,
                    DispatchApplicationStore: G.Z,
                    ConnectedAppsStore: P.Z,
                    applicationId: null != e ? e : "",
                }),
            [e],
        ),
    };
}
function ep(e) {
    let { presenceActivity: t } = e,
        n = (0, ee.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: ei.M7m.DESKTOP,
        }),
        a = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case ee.Ol.MOBILE:
                                return (0, r.jsx)(l.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.ANDROID:
                                return (0, r.jsx)(er.j, {
                                    width: o.Z.xxs,
                                    height: o.Z.xxs,
                                    color: "currentColor",
                                });
                            case ee.Ol.IOS:
                                return (0, r.jsx)(l.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.PLAYSTATION:
                                return (0, r.jsx)(l.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.XBOX:
                                return (0, r.jsx)(l.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(Z.lm),
            [n],
        );
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: es.footer,
              children: [
                  (0, r.jsx)("div", {
                      className: es.footerSupportedPlatformIconsContainer,
                      children: a.map((e, t) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: es.footerSupportedPlatformIconContainer,
                                  children: e,
                              },
                              t,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: es.footerSupportedPlatformText,
                      children: eo.intl.string(eo.t["4dGUPz"]),
                  }),
              ],
          });
}
function eh(e) {
    var t, n, o, h;
    let {
            analyticsLocations: O,
            application: I,
            channel: T,
            currentUserId: S,
            currentUserPresenceActivity: A,
            hideParty: C,
            message: N,
            onView: R,
            partyStatusElement: P,
            presenceActivity: w,
        } = e,
        x = (0, y.A)(I),
        L = (0, f.ye)(I),
        { bot: j } = I,
        M = B.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: j,
        }),
        { staticBannerSrc: k, videoBannerSrc: G, bannerAspectRatio: Z } = (0, m.E)(I),
        F = !(0, J.Z)(w, N, I.id),
        V = (0, z.H)(N),
        K = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]),
        { openGameProfileModal: X, isGameLaunchable: ee } = e_(I.id, N.author.id),
        { openGameProfileModal: en, isGameLaunchable: er } = e_(null == K ? void 0 : K.id, N.author.id),
        ea = (0, et.Z)({
            application: I,
            location: "RichPresenceActivityInviteEmbed",
            analyticsLocations: O,
        }),
        el = i.useMemo(
            () =>
                null == ea
                    ? null
                    : {
                          label: eo.intl.string(eo.t["jaYS/v"]),
                          icon: (0, r.jsx)(l.v3n, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                          trackingArea: p.j_.CLOUD_PLAY,
                          onClick: ea,
                      },
            [ea],
        ),
        { canJoin: ec, remoteJoinPlatform: eu } = (0, Y.h)({
            presenceActivity: w,
            currentUserPresenceActivity: A,
            currentUserId: S,
            message: N,
            application: I,
            isEmbeddedApplication: L,
            isFrameApplication: x,
            isGameLaunchable: ee,
        }),
        ef = ed(w, A, N, I),
        eh = (0, q.g)(A, w),
        em = (0, W.L)(w, N, I, S),
        eg = (0, s.e7)(
            [U.Z],
            () =>
                null != w && null != w.application_id && U.Z.getState(w.application_id, ei.mFx.JOIN) === ei.OcF.LOADING,
        ),
        eE = i.useMemo(
            () =>
                ec
                    ? {
                          label: eo.intl.string(eo.t.VJlc0d),
                          trackingArea: p.j_.JOIN,
                          submitting: eg,
                          onClick: () => {
                              var e, t;
                              u.Z.join({
                                  userId: N.author.id,
                                  sessionId: w.session_id,
                                  applicationId: w.application_id,
                                  channelId: T.id,
                                  messageId: N.id,
                                  source: ei.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, Q.Z)(w, ei.xjy.EMBEDDED),
                                  remotePartyId: null != eu ? (null == (e = w.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, $.Z)({
                                      type: ei.q5t.JOIN,
                                      source: ei.Sbl.MESSAGE_EMBED,
                                      userId: N.author.id,
                                      guildId: T.guild_id,
                                      channelId: T.id,
                                      applicationId: w.application_id,
                                      partyId: null == (t = w.party) ? void 0 : t.id,
                                      messageId: N.id,
                                      analyticsLocations: O,
                                  });
                          },
                      }
                    : ef
                      ? {
                            label: eo.intl.string(eo.t.VJlc0d),
                            trackingArea: p.j_.SYNC,
                            onClick: () => {
                                null != w && d.Z_(w, N.author.id);
                            },
                        }
                      : em
                        ? {
                              label: eo.intl.string(eo.t["hC/Ze3"]),
                              trackingArea: p.j_.INVITE,
                              onClick: () => {
                                  null != w &&
                                      c.Z.sendActivityInvite({
                                          type: ei.mFx.JOIN,
                                          channelId: T.id,
                                          activity: w,
                                          location: ei.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabledReason: N.author.id === S ? eo.intl.string(eo.t.IBl8IC) : void 0,
                          }
                        : eh
                          ? {
                                label: eo.intl.string(eo.t.KC26NT),
                                trackingArea: p.j_.PLAY,
                                onClick: () => {},
                                disabledReason: eo.intl.string(eo.t.KC26NT),
                            }
                          : null != el
                            ? el
                            : void 0,
            [ec, ef, em, eh, el, N.author.id, N.id, w, T.id, T.guild_id, O, eu, S, eg],
        ),
        eb = i.useMemo(
            () =>
                ee
                    ? {
                          label: eo.intl.string(eo.t.RscU7O),
                          trackingArea: p.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: I.id });
                          },
                      }
                    : er && (null == K ? void 0 : K.id) != null
                      ? {
                            label: eo.intl.string(eo.t.RscU7O),
                            trackingArea: p.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: K.id });
                            },
                        }
                      : null != el
                        ? el
                        : void 0,
            [I.id, ee, er, null == K ? void 0 : K.id, el],
        ),
        ey = (0, g.G)(I),
        eO = i.useMemo(() => (null != X ? X : null != en ? en : null != ey && L ? ey : void 0), [L, X, en, ey]),
        ev = i.useMemo(() => {
            let e = [];
            return F || null == eE ? F && null != eb && e.push(eb) : e.push(eE), e;
        }, [eb, F, eE]),
        eI = (0, H.dQ)(I.name, null == (t = N.activity) ? void 0 : t.type),
        eT = (0, v.N)(I.id).some((e) => (0, b.ig)(e) === a.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      eo.intl.string(eo.t.TsWCdX),
                  ],
              })
            : null,
        eS = (0, r.jsx)(ep, { presenceActivity: w });
    if (F) {
        let e = (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: es.description,
            color: "none",
            lineClamp: 3,
            children: (0, H.wR)(N, I, T, S),
        });
        return (0, r.jsx)(_.W, {
            header: eI,
            title: I.name,
            staticBannerSrc: k,
            videoBannerSrc: G,
            onClickBanner: eO,
            bannerAspectRatio: Z,
            iconSrc: null != M ? M : void 0,
            info: e,
            actions: ev,
            onClickContent: eO,
            trackingConfig: {
                id: I.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: R,
                referrerId: N.author.id,
            },
        });
    }
    let eA =
            null != (h = null == w || null == (n = w.timestamps) ? void 0 : n.start)
                ? h
                : null == w
                  ? void 0
                  : w.created_at,
        eC =
            null != eA
                ? (0, r.jsxs)("div", {
                      className: es.timestampContainer,
                      children: [
                          (0, r.jsx)(l.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(E.x3, {
                              entry: {
                                  start: eA,
                                  end: null == w || null == (o = w.timestamps) ? void 0 : o.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eN = (0, r.jsxs)(l.Text, {
            variant: "text-xs/normal",
            className: es.tagline,
            color: "none",
            lineClamp: 2,
            children: [V ? (0, H.$v)(N, I, T, S, F) : eC, V ? null : eT],
        }),
        eR = (0, r.jsxs)("div", {
            className: es.info,
            children: [eN, C || V ? null : P],
        });
    return (0, r.jsx)(_.W, {
        header: eI,
        title: I.name,
        staticBannerSrc: k,
        videoBannerSrc: G,
        onClickBanner: eO,
        bannerAspectRatio: Z,
        iconSrc: null != M ? M : void 0,
        info: eR,
        actions: ev,
        onClickContent: eO,
        trackingConfig: {
            id: I.id,
            linkType: p.Un.RICH_PRESENCE_INVITE,
            onView: R,
            referrerId: N.author.id,
        },
        footer: eS,
    });
}
function em(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: l, message: c, hideParty: u, onView: d } = e,
        f = (0, h.O)(o),
        _ = (0, s.e7)([R.default], () => R.default.getId()),
        p = (0, s.e7)([j.Z], () => {
            if (null == c.application) return j.Z.findActivity(c.author.id, (e) => e.type === ei.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, z.H)(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _),
                    j.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, l, _]),
        m = (0, s.e7)([L.Z, M.Z], () => {
            var e;
            return null != (e = L.Z.getApplicationActivity(f.id)) ? e : M.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        g = (0, s.Wu)([w.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, X._)(p),
        y = i.useMemo(
            () =>
                g.map((e) => {
                    let t = k.default.getUser(e);
                    return null != t ? t : en.ag;
                }),
            [g],
        ),
        O = (0, ea.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === N.r9.id,
        v = (0, r.jsx)(ec, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: l.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ef, {
              application: f,
              currentUserPresenceActivity: m,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
          })
        : eu(c)
          ? (0, r.jsx)(S.Z, {
                analyticsLocations: a,
                application: f,
                channel: l,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(eh, {
                analyticsLocations: a,
                application: f,
                channel: l,
                currentUserId: _,
                currentUserPresenceActivity: m,
                hideParty: u,
                message: c,
                onView: d,
                partyStatusElement: v,
                presenceActivity: p,
            });
}
