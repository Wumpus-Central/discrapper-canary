n.d(t, { c: () => eh }), n(388685), n(539854), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(705512),
    a = n(267843),
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
    R = n(314897),
    P = n(757266),
    w = n(831506),
    D = n(77498),
    L = n(283595),
    x = n(293273),
    M = n(158776),
    j = n(885110),
    k = n(594174),
    U = n(417363),
    G = n(768581),
    B = n(823379),
    Z = n(358085),
    F = n(804739),
    V = n(758371),
    H = n(931271),
    Y = n(565201),
    W = n(276852),
    K = n(150248),
    z = n(691731),
    q = n(984211),
    X = n(620662),
    Q = n(994339),
    J = n(275920),
    $ = n(561766),
    ee = n(206074),
    et = n(884338),
    en = n(404174),
    er = n(981631),
    ei = n(616922),
    eo = n(388032),
    ea = n(723295);
let es = 8;
function el(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: o, activityActionType: a } = e,
        s = Math.max(n, t.length),
        c = (0, V.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: a,
        }),
        u = [...t];
    for (; u.length < n; ) u.push(et.ag);
    for (; u.length < i; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: ea.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(et.ZP, {
                    guildId: o,
                    users: u,
                    max: i > 0 ? Math.min(i, es) : es,
                    size: et.u8.SIZE_16,
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
function ec(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === er.mFx.STREAM_REQUEST;
}
function eu(e, t, n, r) {
    return !(
        null == e ||
        !(0, Q.Z)(e, n, r.id) ||
        !(0, X.Z)(e, er.xjy.SYNC) ||
        !Z.isPlatformEmbedded ||
        (0, z.g)(t, e)
    );
}
function ed(e) {
    var t, n, o, a, s;
    let {
            application: c,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: h,
            partyStatusElement: m,
            presenceActivity: g,
        } = e,
        b = (0, z.g)(u, g),
        y = (0, N.Lz)(g, f.author, "Invite Embed"),
        O = !(0, Q.Z)(g, f, c.id),
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
        S = (0, V.dQ)(c.name, null == (t = f.activity) ? void 0 : t.type);
    if (O) {
        let e = (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: ea.description,
            color: "none",
            lineClamp: 1,
            children: eo.intl.string(eo.t["84qx9v"]),
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
                onView: h,
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
                null != (a = null == g || null == (n = g.timestamps) ? void 0 : n.start)
                    ? a
                    : null == g
                      ? void 0
                      : g.created_at,
            i =
                null != t
                    ? (0, r.jsxs)("div", {
                          className: ea.timestampContainer,
                          children: [
                              (0, r.jsx)(l.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(E.x3, {
                                  entry: {
                                      start: t,
                                      end: null == g || null == (o = g.timestamps) ? void 0 : o.end,
                                  },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            u = (0, r.jsxs)("div", {
                className: ea.info,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        className: ea.tagline,
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
            iconSrc: null != (s = (0, W.Z)(g, c.id)) ? s : void 0,
            info: u,
            actions: I,
            onClickContent: T,
            trackingConfig: {
                id: c.id,
                linkType: p.Un.RICH_PRESENCE_INVITE,
                onView: h,
            },
        });
    }
}
function ef(e, t) {
    return {
        openGameProfileModal: (0, I.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: e,
            source: O.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        isGameLaunchable: (0, s.e7)(
            [L.Z, T.Z, U.Z, P.Z],
            () =>
                (0, F.t)({
                    LibraryApplicationStore: L.Z,
                    LaunchableGameStore: T.Z,
                    DispatchApplicationStore: U.Z,
                    ConnectedAppsStore: P.Z,
                    applicationId: null != e ? e : "",
                }),
            [e],
        ),
    };
}
function e_(e) {
    let { presenceActivity: t } = e,
        n = (0, $.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: er.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                n
                    .map((e) => {
                        switch (e) {
                            case $.Ol.MOBILE:
                                return (0, r.jsx)(l.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.ANDROID:
                                return (0, r.jsx)(en.j, {
                                    width: a.Z.xxs,
                                    height: a.Z.xxs,
                                    color: "currentColor",
                                });
                            case $.Ol.IOS:
                                return (0, r.jsx)(l.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.PLAYSTATION:
                                return (0, r.jsx)(l.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.XBOX:
                                return (0, r.jsx)(l.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(B.lm),
            [n],
        );
    return 0 === o.length
        ? null
        : (0, r.jsxs)("div", {
              className: ea.footer,
              children: [
                  (0, r.jsx)("div", {
                      className: ea.footerSupportedPlatformIconsContainer,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: ea.footerSupportedPlatformIconContainer,
                                  children: e,
                              },
                              t,
                          ),
                      ),
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "currentColor",
                      className: ea.footerSupportedPlatformText,
                      children: eo.intl.string(eo.t["4dGUPz"]),
                  }),
              ],
          });
}
function ep(e) {
    var t, n, a, h;
    let {
            analyticsLocations: O,
            application: I,
            channel: T,
            currentUserId: S,
            currentUserPresenceActivity: A,
            hideParty: N,
            message: C,
            onView: R,
            partyStatusElement: P,
            presenceActivity: w,
        } = e,
        L = (0, y.A)(I),
        x = (0, f.ye)(I),
        { bot: M } = I,
        j = G.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: M,
        }),
        { staticBannerSrc: k, videoBannerSrc: U, bannerAspectRatio: B } = (0, m.E)(I),
        Z = !(0, Q.Z)(w, C, I.id),
        F = (0, K.H)(C),
        W = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]),
        { openGameProfileModal: q, isGameLaunchable: $ } = ef(I.id, C.author.id),
        { openGameProfileModal: et, isGameLaunchable: en } = ef(null == W ? void 0 : W.id, C.author.id),
        ei = (0, ee.Z)({
            application: I,
            location: "RichPresenceActivityInviteEmbed",
            analyticsLocations: O,
        }),
        es = i.useMemo(
            () =>
                null == ei
                    ? null
                    : {
                          label: eo.intl.string(eo.t["jaYS/v"]),
                          icon: (0, r.jsx)(l.v3n, {
                              size: "refresh_sm",
                              color: "currentColor",
                          }),
                          trackingArea: p.j_.CLOUD_PLAY,
                          onClick: ei,
                      },
            [ei],
        ),
        el = (0, H.h)({
            presenceActivity: w,
            currentUserPresenceActivity: A,
            currentUserId: S,
            message: C,
            application: I,
            isEmbeddedApplication: x,
            isFrameApplication: L,
            isGameLaunchable: $,
        }),
        ec = eu(w, A, C, I),
        ed = (0, z.g)(A, w),
        ep = (0, Y.L)(w, C, I, S),
        eh = i.useMemo(
            () =>
                el
                    ? {
                          label: eo.intl.string(eo.t.VJlc0d),
                          trackingArea: p.j_.JOIN,
                          onClick: () => {
                              var e;
                              u.Z.join({
                                  userId: C.author.id,
                                  sessionId: w.session_id,
                                  applicationId: w.application_id,
                                  channelId: T.id,
                                  messageId: C.id,
                                  source: er.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: O,
                                  embedded: (0, X.Z)(w, er.xjy.EMBEDDED),
                              }),
                                  (0, J.Z)({
                                      type: er.q5t.JOIN,
                                      source: er.Sbl.MESSAGE_EMBED,
                                      userId: C.author.id,
                                      guildId: T.guild_id,
                                      channelId: T.id,
                                      applicationId: w.application_id,
                                      partyId: null == (e = w.party) ? void 0 : e.id,
                                      messageId: C.id,
                                      analyticsLocations: O,
                                  });
                          },
                      }
                    : ec
                      ? {
                            label: eo.intl.string(eo.t.VJlc0d),
                            trackingArea: p.j_.SYNC,
                            onClick: () => {
                                null != w && d.Z_(w, C.author.id);
                            },
                        }
                      : ep
                        ? {
                              label: eo.intl.string(eo.t["hC/Ze3"]),
                              trackingArea: p.j_.INVITE,
                              onClick: () => {
                                  null != w &&
                                      c.Z.sendActivityInvite({
                                          type: er.mFx.JOIN,
                                          channelId: T.id,
                                          activity: w,
                                          location: er.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabledReason: C.author.id === S ? eo.intl.string(eo.t.IBl8IC) : void 0,
                          }
                        : ed
                          ? {
                                label: eo.intl.string(eo.t.KC26NT),
                                trackingArea: p.j_.PLAY,
                                onClick: () => {},
                                disabledReason: eo.intl.string(eo.t.KC26NT),
                            }
                          : null != es
                            ? es
                            : void 0,
            [O, el, ep, ec, T.id, T.guild_id, S, ed, C.author.id, C.id, w, es],
        ),
        em = i.useMemo(
            () =>
                $
                    ? {
                          label: eo.intl.string(eo.t.RscU7O),
                          trackingArea: p.j_.PLAY,
                          onClick: () => {
                              u.Z.launch({ applicationId: I.id });
                          },
                      }
                    : en && (null == W ? void 0 : W.id) != null
                      ? {
                            label: eo.intl.string(eo.t.RscU7O),
                            trackingArea: p.j_.PLAY,
                            onClick: () => {
                                u.Z.launch({ applicationId: W.id });
                            },
                        }
                      : null != es
                        ? es
                        : void 0,
            [I.id, $, en, null == W ? void 0 : W.id, es],
        ),
        eg = (0, g.G)(I),
        eE = i.useMemo(() => (null != q ? q : null != et ? et : null != eg && x ? eg : void 0), [x, q, et, eg]),
        eb = i.useMemo(() => {
            let e = [];
            return Z || null == eh ? Z && null != em && e.push(em) : e.push(eh), e;
        }, [em, Z, eh]),
        ey = (0, V.dQ)(I.name, null == (t = C.activity) ? void 0 : t.type),
        eO = (0, v.N)(I.id).some((e) => (0, b.ig)(e) === o.o.GLOBAL)
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
        ev = (0, r.jsx)(e_, { presenceActivity: w });
    if (Z) {
        let e = (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            className: ea.description,
            color: "none",
            lineClamp: 3,
            children: (0, V.wR)(C, I, T, S),
        });
        return (0, r.jsx)(_.W, {
            header: ey,
            title: I.name,
            staticBannerSrc: k,
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
                onView: R,
            },
        });
    }
    let eI =
            null != (h = null == w || null == (n = w.timestamps) ? void 0 : n.start)
                ? h
                : null == w
                  ? void 0
                  : w.created_at,
        eT =
            null != eI
                ? (0, r.jsxs)("div", {
                      className: ea.timestampContainer,
                      children: [
                          (0, r.jsx)(l.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(E.x3, {
                              entry: {
                                  start: eI,
                                  end: null == w || null == (a = w.timestamps) ? void 0 : a.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eS = (0, r.jsxs)(l.Text, {
            variant: "text-xs/normal",
            className: ea.tagline,
            color: "none",
            lineClamp: 2,
            children: [F ? (0, V.$v)(C, I, T, S, Z) : eT, F ? null : eO],
        }),
        eA = (0, r.jsxs)("div", {
            className: ea.info,
            children: [eS, N || F ? null : P],
        });
    return (0, r.jsx)(_.W, {
        header: ey,
        title: I.name,
        staticBannerSrc: k,
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
            onView: R,
        },
        footer: ev,
    });
}
function eh(e) {
    var t, n;
    let { analyticsLocations: o, app: a, channel: l, message: c, hideParty: u, onView: d } = e,
        f = (0, h.O)(a),
        _ = (0, s.e7)([R.default], () => R.default.getId()),
        p = (0, s.e7)([M.Z], () => {
            if (null == c.application) return M.Z.findActivity(c.author.id, (e) => e.type === er.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, K.H)(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _),
                    M.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, l, _]),
        m = (0, s.e7)([x.Z, j.Z], () => {
            var e;
            return null != (e = x.Z.getApplicationActivity(f.id)) ? e : j.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        g = (0, s.Wu)([w.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, q._)(p),
        y = i.useMemo(
            () =>
                g.map((e) => {
                    let t = k.default.getUser(e);
                    return null != t ? t : et.ag;
                }),
            [g],
        ),
        O = (0, ei.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === C.r9.id,
        v = (0, r.jsx)(el, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: l.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ed, {
              application: f,
              currentUserPresenceActivity: m,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
          })
        : ec(c)
          ? (0, r.jsx)(S.Z, {
                analyticsLocations: o,
                application: f,
                channel: l,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(ep, {
                analyticsLocations: o,
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
