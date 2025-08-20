n.d(t, { c: () => ep }), n(388685), n(539854), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(705512),
    o = n(267843),
    a = n(442837),
    s = n(481060),
    c = n(278323),
    u = n(224706),
    d = n(763472),
    p = n(783097),
    m = n(758199),
    f = n(914498),
    g = n(172109),
    _ = n(880251),
    h = n(515344),
    b = n(371991),
    E = n(561308),
    C = n(813370),
    v = n(810568),
    O = n(567409),
    y = n(168524),
    x = n(592745),
    j = n(956512),
    I = n(952164),
    S = n(829820),
    T = n(789407),
    P = n(314897),
    N = n(757266),
    A = n(831506),
    w = n(77498),
    Z = n(283595),
    R = n(293273),
    D = n(158776),
    L = n(885110),
    M = n(594174),
    k = n(417363),
    U = n(768581),
    F = n(823379),
    B = n(358085),
    G = n(804739),
    H = n(758371),
    V = n(931271),
    z = n(565201),
    W = n(276852),
    Y = n(150248),
    K = n(691731),
    X = n(984211),
    q = n(620662),
    J = n(994339),
    Q = n(275920),
    $ = n(561766),
    ee = n(206074),
    et = n(884338),
    en = n(404174),
    er = n(981631),
    ei = n(616922),
    el = n(388032),
    eo = n(723295);
function ea(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: l, activityActionType: o } = e,
        a = Math.max(n, t.length),
        c = (0, H.yy)({
            maxPartySize: i,
            partySize: a,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < 8; ) u.push(et.ag);
    for (; u.length < i && u.length < 8; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: eo.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(et.ZP, {
                    guildId: l,
                    users: u,
                    max: i > 0 ? Math.min(i, 8) : 8,
                    size: et.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: c,
            }),
        ],
    });
}
function es(e) {
    var t, n, l, o, a;
    let {
            application: c,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: p,
            onView: g,
            partyStatusElement: _,
            presenceActivity: h,
        } = e,
        E = (0, K.g)(u, h),
        C = (0, S.Lz)(h, p.author, "Invite Embed"),
        v = !(0, J.Z)(h, p, c.id),
        O = i.useMemo(() => {
            let e = [];
            if (!E) {
                var t;
                e.push({
                    label: null != (t = C.label) ? t : el.intl.string(el.t.VJlc0d),
                    trackingArea: f.j_.SYNC,
                    onClick: () => {
                        C.onClick();
                    },
                    disabledReason: C.disabled ? C.tooltip : void 0,
                });
            }
            return e;
        }, [E, C]),
        y = i.useMemo(() => {
            if (null != h) return () => (0, I.aG)(h);
        }, [h]),
        x = (0, H.dQ)(c.name, null == (t = p.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            className: eo.description,
            color: "none",
            lineClamp: 1,
            children: el.intl.string(el.t["84qx9v"]),
        });
        return (0, r.jsx)(m.W, {
            header: x,
            title: c.name,
            iconSrc: T.r9.getWhiteIconURL(),
            info: e,
            actions: [],
            onClickContent: y,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g,
            },
        });
    }
    {
        let e =
                null != h && null != h.details && null != h.state
                    ? el.intl.formatToPlainString(el.t.JCvHt7, {
                          track: h.details,
                          artist: h.state,
                      })
                    : c.name,
            t =
                null != (o = null == h || null == (n = h.timestamps) ? void 0 : n.start)
                    ? o
                    : null == h
                      ? void 0
                      : h.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: eo.timestampContainer,
                          children: [
                              (0, r.jsx)(s.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(b.x3, {
                                  entry: {
                                      start: t,
                                      end: null == h || null == (l = h.timestamps) ? void 0 : l.end,
                                  },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            u = (0, r.jsxs)("div", {
                className: eo.info,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        className: eo.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    d ? null : _,
                ],
            });
        return (0, r.jsx)(m.W, {
            header: x,
            title: e,
            iconSrc: null != (a = (0, W.Z)(h, c.id)) ? a : void 0,
            info: u,
            actions: O,
            onClickContent: y,
            trackingConfig: {
                id: c.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: g,
            },
        });
    }
}
function ec(e, t) {
    return {
        openGameProfileModal: (0, y.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: e,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        isGameLaunchable: (0, a.e7)(
            [Z.Z, x.Z, k.Z, N.Z],
            () =>
                (0, G.t)({
                    LibraryApplicationStore: Z.Z,
                    LaunchableGameStore: x.Z,
                    DispatchApplicationStore: k.Z,
                    ConnectedAppsStore: N.Z,
                    applicationId: null != e ? e : "",
                }),
            [e],
        ),
    };
}
function eu(e) {
    let { presenceActivity: t } = e,
        n = (0, $.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: er.M7m.DESKTOP,
        }),
        l = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case $.Ol.MOBILE:
                                return (0, r.jsx)(s.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.ANDROID:
                                return (0, r.jsx)(en.j, {
                                    width: o.Z.xxs,
                                    height: o.Z.xxs,
                                    color: "currentColor",
                                });
                            case $.Ol.IOS:
                                return (0, r.jsx)(s.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.PLAYSTATION:
                                return (0, r.jsx)(s.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.XBOX:
                                return (0, r.jsx)(s.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(F.lm),
            [n],
        );
    return 0 === l.length
        ? null
        : (0, r.jsxs)("div", {
              className: eo.footer,
              children: [
                  (0, r.jsx)("div", {
                      className: eo.footerSupportedPlatformIconsContainer,
                      children: l.map((e, t) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: eo.footerSupportedPlatformIconContainer,
                                  children: e,
                              },
                              t,
                          ),
                      ),
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: eo.footerSupportedPlatformText,
                      children: el.intl.string(el.t["4dGUPz"]),
                  }),
              ],
          });
}
function ed(e) {
    var t, n, o, g;
    let {
            analyticsLocations: v,
            application: y,
            channel: x,
            currentUserId: j,
            currentUserPresenceActivity: I,
            hideParty: S,
            message: T,
            onView: P,
            partyStatusElement: N,
            presenceActivity: A,
        } = e,
        Z = (0, C.A)(y),
        R = (0, p.ye)(y),
        { bot: D } = y,
        L = U.ZP.getApplicationIconURL({
            id: y.id,
            icon: y.icon,
            bot: D,
        }),
        { staticBannerSrc: M, videoBannerSrc: k, bannerAspectRatio: F } = (0, _.E)(y),
        G = !(0, J.Z)(A, T, y.id),
        W = (0, Y.H)(T),
        X = (0, a.e7)([w.Z], () => w.Z.getGameByName(y.name), [y.name]),
        { openGameProfileModal: $, isGameLaunchable: et } = ec(y.id, T.author.id),
        { openGameProfileModal: en, isGameLaunchable: ei } = ec(null == X ? void 0 : X.id, T.author.id),
        ea = (0, ee.Z)({
            application: y,
            location: "RichPresenceActivityInviteEmbed",
            analyticsLocations: v,
        }),
        es = i.useMemo(
            () =>
                null == ea
                    ? null
                    : {
                          label: el.intl.string(el.t["jaYS/v"]),
                          icon: (0, r.jsx)(s.v3n, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                          trackingArea: f.j_.CLOUD_PLAY,
                          onClick: ea,
                      },
            [ea],
        ),
        ed = (0, V.h)({
            presenceActivity: A,
            currentUserPresenceActivity: I,
            currentUserId: j,
            message: T,
            application: y,
            isEmbeddedApplication: R,
            isFrameApplication: Z,
            isGameLaunchable: et,
        }),
        ep = !(
            null == A ||
            !(0, J.Z)(A, T, y.id) ||
            !(0, q.Z)(A, er.xjy.SYNC) ||
            !B.isPlatformEmbedded ||
            (0, K.g)(I, A)
        ),
        em = (0, K.g)(I, A),
        ef = (0, z.L)(A, T, y, j),
        eg = i.useMemo(
            () =>
                ed
                    ? {
                          label: el.intl.string(el.t.VJlc0d),
                          trackingArea: f.j_.JOIN,
                          onClick: () => {
                              var e;
                              u.Z.join({
                                  userId: T.author.id,
                                  sessionId: A.session_id,
                                  applicationId: A.application_id,
                                  channelId: x.id,
                                  messageId: T.id,
                                  source: er.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: v,
                                  embedded: (0, q.Z)(A, er.xjy.EMBEDDED),
                              }),
                                  (0, Q.Z)({
                                      type: er.q5t.JOIN,
                                      source: er.Sbl.MESSAGE_EMBED,
                                      userId: T.author.id,
                                      guildId: x.guild_id,
                                      channelId: x.id,
                                      applicationId: A.application_id,
                                      partyId: null == (e = A.party) ? void 0 : e.id,
                                      messageId: T.id,
                                      analyticsLocations: v,
                                  });
                          },
                      }
                    : ep
                      ? {
                            label: el.intl.string(el.t.VJlc0d),
                            trackingArea: f.j_.SYNC,
                            onClick: () => {
                                null != A && d.Z_(A, T.author.id);
                            },
                        }
                      : ef
                        ? {
                              label: el.intl.string(el.t["hC/Ze3"]),
                              trackingArea: f.j_.INVITE,
                              onClick: () => {
                                  null != A &&
                                      c.Z.sendActivityInvite({
                                          type: er.mFx.JOIN,
                                          channelId: x.id,
                                          activity: A,
                                          location: er.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabledReason: T.author.id === j ? el.intl.string(el.t.IBl8IC) : void 0,
                          }
                        : em
                          ? {
                                label: el.intl.string(el.t.KC26NT),
                                trackingArea: f.j_.PLAY,
                                onClick: () => {},
                                disabledReason: el.intl.string(el.t.KC26NT),
                            }
                          : null != es
                            ? es
                            : void 0,
            [v, ed, ef, ep, x.id, x.guild_id, j, em, T.author.id, T.id, A, es],
        ),
        e_ = i.useMemo(
            () =>
                et
                    ? {
                          label: el.intl.string(el.t.RscU7O),
                          trackingArea: f.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: y.id });
                          },
                      }
                    : ei && (null == X ? void 0 : X.id) != null
                      ? {
                            label: el.intl.string(el.t.RscU7O),
                            trackingArea: f.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: X.id });
                            },
                        }
                      : null != es
                        ? es
                        : void 0,
            [y.id, et, ei, null == X ? void 0 : X.id, es],
        ),
        eh = (0, h.G)(y),
        eb = i.useMemo(() => (null != $ ? $ : null != en ? en : null != eh && R ? eh : void 0), [R, $, en, eh]),
        eE = i.useMemo(() => {
            let e = [];
            return G || null == eg ? G && null != e_ && e.push(e_) : e.push(eg), e;
        }, [e_, G, eg]),
        eC = (0, H.dQ)(y.name, null == (t = T.activity) ? void 0 : t.type),
        ev = (0, O.N)(y.id).some((e) => (0, E.ig)(e) === l.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      el.intl.string(el.t.TsWCdX),
                  ],
              })
            : null,
        eO = (0, r.jsx)(eu, { presenceActivity: A });
    if (G) {
        let e = (0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            className: eo.description,
            color: "none",
            lineClamp: 3,
            children: (0, H.wR)(T, y, x, j),
        });
        return (0, r.jsx)(m.W, {
            header: eC,
            title: y.name,
            staticBannerSrc: M,
            videoBannerSrc: k,
            onClickBanner: eb,
            bannerAspectRatio: F,
            iconSrc: null != L ? L : void 0,
            info: e,
            actions: eE,
            onClickContent: eb,
            trackingConfig: {
                id: y.id,
                linkType: f.Un.RICH_PRESENCE_INVITE,
                onView: P,
            },
        });
    }
    let ey =
            null != (g = null == A || null == (n = A.timestamps) ? void 0 : n.start)
                ? g
                : null == A
                  ? void 0
                  : A.created_at,
        ex =
            null != ey
                ? (0, r.jsxs)("div", {
                      className: eo.timestampContainer,
                      children: [
                          (0, r.jsx)(s.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: ey,
                                  end: null == A || null == (o = A.timestamps) ? void 0 : o.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        ej = (0, r.jsxs)(s.Text, {
            variant: "text-xs/normal",
            className: eo.tagline,
            color: "none",
            lineClamp: 2,
            children: [W ? (0, H.$v)(T, y, x, j, G) : ex, W ? null : ev],
        }),
        eI = (0, r.jsxs)("div", {
            className: eo.info,
            children: [ej, S || W ? null : N],
        });
    return (0, r.jsx)(m.W, {
        header: eC,
        title: y.name,
        staticBannerSrc: M,
        videoBannerSrc: k,
        onClickBanner: eb,
        bannerAspectRatio: F,
        iconSrc: null != L ? L : void 0,
        info: eI,
        actions: eE,
        onClickContent: eb,
        trackingConfig: {
            id: y.id,
            linkType: f.Un.RICH_PRESENCE_INVITE,
            onView: P,
        },
        footer: eO,
    });
}
function ep(e) {
    var t, n, l;
    let { analyticsLocations: o, app: s, channel: c, message: u, hideParty: d, onView: p } = e,
        m = (0, g.O)(s),
        f = (0, a.e7)([P.default], () => P.default.getId()),
        _ = (0, a.e7)([D.Z], () => {
            if (null == u.application) return D.Z.findActivity(u.author.id, (e) => e.type === er.IIU.LISTENING);
            {
                let e = u.author.id;
                return (
                    (0, Y.H)(u) && (e = e === f && c.isPrivate() ? c.getRecipientId() : f),
                    D.Z.getApplicationActivity(e, u.application.id)
                );
            }
        }, [u, c, f]),
        h = (0, a.e7)([R.Z, L.Z], () => {
            var e;
            return null != (e = R.Z.getApplicationActivity(m.id)) ? e : L.Z.getApplicationActivity(m.id, !0);
        }, [m.id]),
        b = (0, a.Wu)([A.Z], () => {
            var e;
            return null == _ || null == _.party ? [] : Array.from(null != (e = A.Z.getParty(_.party.id)) ? e : []);
        }, [_]),
        { partySize: E, maxPartySize: C } = (0, X._)(_),
        v = i.useMemo(
            () =>
                b.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : et.ag;
                }),
            [b],
        ),
        O = (0, ei.Ps)(null == _ || null == (t = _.party) ? void 0 : t.id) || m.id === T.r9.id,
        y = (0, r.jsx)(ea, {
            partyMembers: v,
            partySize: E,
            maxPartySize: C,
            guildId: c.guild_id,
            activityActionType: null == (n = u.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(es, {
              application: m,
              currentUserPresenceActivity: h,
              hideParty: d,
              message: u,
              onView: p,
              partyStatusElement: y,
              presenceActivity: _,
          })
        : (null == (l = u.activity) ? void 0 : l.type) === er.mFx.STREAM_REQUEST
          ? (0, r.jsx)(j.Z, {
                analyticsLocations: o,
                application: m,
                channel: c,
                currentUserId: f,
                message: u,
            })
          : (0, r.jsx)(ed, {
                analyticsLocations: o,
                application: m,
                channel: c,
                currentUserId: f,
                currentUserPresenceActivity: h,
                hideParty: d,
                message: u,
                onView: p,
                partyStatusElement: y,
                presenceActivity: _,
            });
}
