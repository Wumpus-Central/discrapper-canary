n.d(t, { c: () => eg }), n(388685), n(539854), n(953529);
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
    E = n(515344),
    b = n(371991),
    y = n(561308),
    O = n(813370),
    v = n(810568),
    I = n(567409),
    T = n(168524),
    S = n(956512),
    A = n(171516),
    C = n(952164),
    N = n(829820),
    R = n(789407),
    P = n(314897),
    w = n(831506),
    D = n(293273),
    L = n(158776),
    x = n(885110),
    M = n(594174),
    j = n(181106),
    k = n(768581),
    U = n(823379),
    G = n(358085),
    B = n(139212),
    Z = n(758371),
    F = n(931271),
    V = n(565201),
    H = n(276852),
    Y = n(150248),
    W = n(691731),
    K = n(984211),
    z = n(146248),
    q = n(935153),
    X = n(620662),
    Q = n(994339),
    J = n(275920),
    $ = n(561766),
    ee = n(206074),
    et = n(884338),
    en = n(404174),
    er = n(981631),
    ei = n(967249),
    ea = n(616922),
    eo = n(388032),
    es = n(723295);
let el = 8;
function ec(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, Z.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < el; ) u.push(et.ag);
    for (; u.length < i && u.length < el; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: es.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(et.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, el) : el,
                    size: et.u8.SIZE_16,
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
function eu(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === er.mFx.STREAM_REQUEST;
}
function ed(e, t, n, r) {
    return !(
        null == e ||
        !(0, Q.Z)(e, n, r.id) ||
        !(0, X.Z)(e, er.xjy.SYNC) ||
        !G.isPlatformEmbedded ||
        (0, W.g)(t, e)
    );
}
function ef(e) {
    var t, n, a, o, s;
    let {
            application: l,
            currentUserPresenceActivity: u,
            hideParty: d,
            message: f,
            onView: _,
            partyStatusElement: p,
            presenceActivity: g,
            guildId: E,
        } = e,
        y = (0, W.g)(u, g),
        O = (0, N.Lz)(g, f.author, "Invite Embed"),
        v = !(0, Q.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!y) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : eo.intl.string(eo.t.VJlc0d),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        O.onClick();
                    },
                    disabled: O.disabled,
                    disabledReason: O.disabled ? O.tooltip : void 0,
                });
            }
            return e;
        }, [y, O]),
        S = i.useMemo(() => {
            if (null != g) return () => (0, C.aG)(g);
        }, [g]),
        A = (0, Z.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: es.description,
            color: "none",
            lineClamp: 1,
            children: eo.intl.string(eo.t["84qx9v"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: R.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ei.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
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
                          className: es.timestampContainer,
                          children: [
                              (0, r.jsx)(c.RZG, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(b.x3, {
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
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: es.tagline,
                        color: "none",
                        lineClamp: 1,
                        children: i,
                    }),
                    d ? null : p,
                ],
            });
        return (0, r.jsx)(h.W, {
            header: A,
            title: e,
            iconSrc: null != (s = (0, H.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ei.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function e_(e, t) {
    let n = (0, A.h)(e);
    return {
        openGameProfileModal: (0, T.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: v.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function ep(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, $.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: er.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case $.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.ANDROID:
                                return (0, r.jsx)(en.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case $.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case $.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(U.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let l = null != n ? (0, q.V)(n) : eo.intl.string(eo.t["4dGUPz"]);
    return (0, r.jsxs)("div", {
        className: es.footer,
        children: [
            (0, r.jsx)("div", {
                className: es.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
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
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: es.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function eh(e) {
    let { messageId: t, presenceActivity: n, application: r } = e;
    return (0, l.e7)(
        [B.Z],
        () =>
            (0, z.O)({
                messageId: t,
                presenceActivity: n,
                application: r,
            }),
        [t, n, r],
    );
}
function em(e) {
    var t, n, s, g, v;
    let {
            analyticsLocations: T,
            application: S,
            channel: A,
            currentUserId: C,
            currentUserPresenceActivity: N,
            hideParty: R,
            message: P,
            onView: w,
            partyStatusElement: D,
            presenceActivity: L,
        } = e,
        x = (0, O.A)(S),
        M = (0, p.ye)(S),
        { bot: U } = S,
        G = k.ZP.getApplicationIconURL({
            id: S.id,
            icon: S.icon,
            bot: U,
        }),
        B =
            null !=
            (g = eh({
                messageId: P.id,
                presenceActivity: L,
                application: S,
            }))
                ? g
                : void 0,
        H = h.u.ACTIVITY,
        K = !(0, Q.Z)(L, P, S.id),
        z = (0, Y.H)(P),
        { openGameProfileModal: q, launchableAppId: $ } = e_(S.id, P.author.id),
        et = !!$,
        en = (0, ee.Z)({
            application: S,
            analyticsLocations: T,
        }),
        ea = i.useMemo(
            () =>
                null == en
                    ? null
                    : {
                          label: eo.intl.string(eo.t["jaYS/v"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: en,
                      },
            [en],
        ),
        { canJoin: el, remoteJoinPlatform: ec } = (0, F.h)({
            presenceActivity: L,
            currentUserPresenceActivity: N,
            currentUserId: C,
            message: P,
            application: S,
            isEmbeddedApplication: M,
            isFrameApplication: x,
            isGameLaunchable: et,
        }),
        eu = ed(L, N, P, S),
        ef = (0, W.g)(N, L),
        em = (0, V.L)(L, P, S, C),
        eg = (0, l.e7)(
            [j.Z],
            () =>
                null != L && null != L.application_id && j.Z.getState(L.application_id, er.mFx.JOIN) === er.OcF.LOADING,
        ),
        eE = i.useMemo(
            () =>
                el
                    ? {
                          label: eo.intl.string(eo.t.VJlc0d),
                          trackingArea: m.j_.JOIN,
                          submitting: eg,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: P.author.id,
                                  sessionId: L.session_id,
                                  applicationId: L.application_id,
                                  channelId: A.id,
                                  messageId: P.id,
                                  source: er.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: T,
                                  embedded: (0, X.Z)(L, er.xjy.EMBEDDED),
                                  remotePartyId: null != ec ? (null == (e = L.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, J.Z)({
                                      type: er.q5t.JOIN,
                                      source: er.Sbl.MESSAGE_EMBED,
                                      userId: P.author.id,
                                      guildId: A.guild_id,
                                      channelId: A.id,
                                      applicationId: L.application_id,
                                      partyId: null == (t = L.party) ? void 0 : t.id,
                                      messageId: P.id,
                                      analyticsLocations: T,
                                      remoteJoinPlatform: ec,
                                  });
                          },
                      }
                    : eu
                      ? {
                            label: eo.intl.string(eo.t.VJlc0d),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != L && f.Z_(L, P.author.id);
                            },
                        }
                      : em
                        ? {
                              label: eo.intl.string(eo.t["hC/Ze3"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != L &&
                                      u.Z.sendActivityInvite({
                                          type: er.mFx.JOIN,
                                          channelId: A.id,
                                          activity: L,
                                          location: er.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: P.author.id === C,
                              disabledReason: P.author.id === C ? eo.intl.string(eo.t.IBl8IC) : void 0,
                          }
                        : ef
                          ? {
                                label: eo.intl.string(eo.t.KC26NT),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != ea
                            ? ea
                            : void 0,
            [el, eu, em, ef, ea, P.author.id, P.id, L, A.id, A.guild_id, T, ec, C, eg],
        ),
        eb = i.useMemo(
            () =>
                et && null != $
                    ? {
                          label: eo.intl.string(eo.t.RscU7O),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: $,
                                  embedded: M,
                              });
                          },
                      }
                    : null != ea
                      ? ea
                      : void 0,
            [M, et, $, ea],
        ),
        ey = (0, E.G)(S),
        eO = i.useMemo(() => (null != q ? q : null != ey && M ? ey : void 0), [M, q, ey]),
        ev = i.useMemo(() => {
            let e = [];
            return K || null == eE ? K && null != eb && e.push(eb) : e.push(eE), e;
        }, [eb, K, eE]),
        eI = i.useMemo(() => ev.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [ev]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: T },
        },
        { disableTrack: !eI },
    );
    let eT = (0, Z.dQ)(S.name, null == (t = P.activity) ? void 0 : t.type),
        eS = (0, I.N)(S.id).some((e) => (0, y.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      eo.intl.string(eo.t.TsWCdX),
                  ],
              })
            : null,
        eA = ef
            ? null
            : (0, r.jsx)(ep, {
                  presenceActivity: L,
                  remoteJoinPlatform: ec,
              });
    if (K) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: es.description,
            color: "none",
            lineClamp: 3,
            children: (0, Z.wR)(P, S, A, C),
        });
        return (0, r.jsx)(h.W, {
            header: eT,
            title: S.name,
            staticBannerSrc: B,
            onClickBanner: eO,
            bannerAspectRatio: H,
            iconSrc: null != G ? G : void 0,
            info: e,
            actions: ev,
            onClickContent: eO,
            trackingConfig: {
                id: S.id,
                linkType: ei.U.RICH_PRESENCE_INVITE,
                onView: w,
                referrerId: P.author.id,
                guildId: A.guild_id,
                channelId: P.channel_id,
                messageId: P.id,
            },
        });
    }
    let eC =
            null != (v = null == L || null == (n = L.timestamps) ? void 0 : n.start)
                ? v
                : null == L
                  ? void 0
                  : L.created_at,
        eN =
            null != eC
                ? (0, r.jsxs)("div", {
                      className: es.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(b.x3, {
                              entry: {
                                  start: eC,
                                  end: null == L || null == (s = L.timestamps) ? void 0 : s.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        eR = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: es.tagline,
            color: "none",
            lineClamp: 2,
            children: [z ? (0, Z.$v)(P, S, A, C, K) : eN, z ? null : eS],
        }),
        eP = (0, r.jsxs)("div", {
            className: es.info,
            children: [eR, R || z ? null : D],
        });
    return (0, r.jsx)(h.W, {
        header: eT,
        title: S.name,
        staticBannerSrc: B,
        onClickBanner: eO,
        bannerAspectRatio: H,
        iconSrc: null != G ? G : void 0,
        info: eP,
        actions: ev,
        onClickContent: eO,
        trackingConfig: {
            id: S.id,
            linkType: ei.U.RICH_PRESENCE_INVITE,
            onView: w,
            referrerId: P.author.id,
            guildId: A.guild_id,
            channelId: P.channel_id,
            messageId: P.id,
        },
        footer: eA,
    });
}
function eg(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([P.default], () => P.default.getId()),
        p = (0, l.e7)([L.Z], () => {
            if (null == c.application) return L.Z.findActivity(c.author.id, (e) => e.type === er.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, Y.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    L.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([D.Z, x.Z], () => {
            var e;
            return null != (e = D.Z.getApplicationActivity(f.id)) ? e : x.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([w.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, K._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = M.default.getUser(e);
                    return null != t ? t : et.ag;
                }),
            [m],
        ),
        O = (0, ea.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === R.r9.id,
        v = (0, r.jsx)(ec, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(ef, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : eu(c)
          ? (0, r.jsx)(S.Z, {
                analyticsLocations: a,
                application: f,
                channel: s,
                currentUserId: _,
                message: c,
            })
          : (0, r.jsx)(em, {
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
