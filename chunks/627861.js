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
    E = n(880251),
    b = n(515344),
    y = n(371991),
    O = n(561308),
    v = n(813370),
    I = n(810568),
    T = n(567409),
    S = n(168524),
    A = n(956512),
    C = n(171516),
    N = n(952164),
    R = n(829820),
    P = n(789407),
    w = n(314897),
    D = n(831506),
    L = n(293273),
    x = n(158776),
    M = n(885110),
    j = n(594174),
    k = n(181106),
    U = n(81063),
    G = n(768581),
    B = n(823379),
    Z = n(358085),
    F = n(921948),
    V = n(758371),
    H = n(931271),
    Y = n(565201),
    W = n(276852),
    K = n(150248),
    z = n(691731),
    q = n(984211),
    X = n(935153),
    Q = n(620662),
    J = n(994339),
    $ = n(275920),
    ee = n(561766),
    et = n(206074),
    en = n(884338),
    er = n(404174),
    ei = n(981631),
    ea = n(967249),
    eo = n(616922),
    es = n(388032),
    el = n(723295);
let ec = 8;
function eu(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        s = Math.max(n, t.length),
        l = (0, V.yy)({
            maxPartySize: i,
            partySize: s,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < ec; ) u.push(en.ag);
    for (; u.length < i && u.length < ec; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: el.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(en.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, ec) : ec,
                    size: en.u8.SIZE_16,
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
function ed(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === ei.mFx.STREAM_REQUEST;
}
function ef(e, t, n, r) {
    return !(
        null == e ||
        !(0, J.Z)(e, n, r.id) ||
        !(0, Q.Z)(e, ei.xjy.SYNC) ||
        !Z.isPlatformEmbedded ||
        (0, z.g)(t, e)
    );
}
function e_(e) {
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
        b = (0, z.g)(u, g),
        O = (0, R.Lz)(g, f.author, "Invite Embed"),
        v = !(0, J.Z)(g, f, l.id),
        I = [],
        T = i.useMemo(() => {
            let e = [];
            if (!b) {
                var t;
                e.push({
                    label: null != (t = O.label) ? t : es.intl.string(es.t.VJlc0d),
                    trackingArea: m.j_.SYNC,
                    onClick: () => {
                        O.onClick();
                    },
                    disabled: O.disabled,
                    disabledReason: O.disabled ? O.tooltip : void 0,
                });
            }
            return e;
        }, [b, O]),
        S = i.useMemo(() => {
            if (null != g) return () => (0, N.aG)(g);
        }, [g]),
        A = (0, V.dQ)(l.name, null == (t = f.activity) ? void 0 : t.type);
    if (v) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: el.description,
            color: "none",
            lineClamp: 1,
            children: es.intl.string(es.t["84qx9v"]),
        });
        return (0, r.jsx)(h.W, {
            header: A,
            title: l.name,
            iconSrc: P.r9.getWhiteIconURL(),
            info: e,
            actions: I,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
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
                    ? es.intl.formatToPlainString(es.t.JCvHt7, {
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
                          className: el.timestampContainer,
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
                className: el.info,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: el.tagline,
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
            iconSrc: null != (s = (0, W.Z)(g, l.id)) ? s : void 0,
            info: u,
            actions: T,
            onClickContent: S,
            trackingConfig: {
                id: l.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
                onView: _,
                referrerId: f.author.id,
                guildId: E,
                channelId: f.channel_id,
                messageId: f.id,
            },
        });
    }
}
function ep(e, t) {
    let n = (0, C.h)(e);
    return {
        openGameProfileModal: (0, S.Z)({
            location: "Rich Presence Activity Invite Embed",
            applicationId: null != n ? n : void 0,
            source: I.m1.Embed,
            trackEntryPointImpression: !0,
            sourceUserId: t,
        }),
        launchableAppId: n,
    };
}
function eh(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, ee.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: ei.M7m.DESKTOP,
        }),
        o = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case ee.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.ANDROID:
                                return (0, r.jsx)(er.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case ee.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case ee.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(B.lm),
            [a],
        );
    if (!(null != n || o.length > 0)) return null;
    let l = null != n ? (0, X.V)(n) : es.intl.string(es.t["4dGUPz"]);
    return (0, r.jsxs)("div", {
        className: el.footer,
        children: [
            (0, r.jsx)("div", {
                className: el.footerSupportedPlatformIconsContainer,
                children: o.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: el.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: el.footerSupportedPlatformText,
                children: l,
            }),
        ],
    });
}
function em(e) {
    var t, n, s, g, I;
    let {
            analyticsLocations: S,
            application: A,
            channel: C,
            currentUserId: N,
            currentUserPresenceActivity: R,
            hideParty: P,
            message: w,
            onView: D,
            partyStatusElement: L,
            presenceActivity: x,
        } = e,
        M = (0, v.A)(A),
        j = (0, p.ye)(A),
        { bot: B } = A,
        Z = G.ZP.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
            bot: B,
        }),
        { staticBannerSrc: W, videoBannerSrc: q, bannerAspectRatio: X } = (0, E.E)(A),
        ee = i.useMemo(() => {
            var e;
            return (null == x || null == (e = x.assets) ? void 0 : e.invite_cover_image) != null
                ? (0, U.xF)(x.application_id, x.assets.invite_cover_image, 600 * (0, F.Z)())
                : null;
        }, [
            null == x || null == (t = x.assets) ? void 0 : t.invite_cover_image,
            null == x ? void 0 : x.application_id,
        ]),
        en = null != ee ? ee : W,
        er = null != ee ? void 0 : q,
        eo = null != ee ? h.u.ACTIVITY : X,
        ec = !(0, J.Z)(x, w, A.id),
        eu = (0, K.H)(w),
        { openGameProfileModal: ed, launchableAppId: e_ } = ep(A.id, w.author.id),
        em = !!e_,
        eg = (0, et.Z)({
            application: A,
            analyticsLocations: S,
        }),
        eE = i.useMemo(
            () =>
                null == eg
                    ? null
                    : {
                          label: es.intl.string(es.t["jaYS/v"]),
                          icon: c.v3n,
                          trackingArea: m.j_.CLOUD_PLAY,
                          onClick: eg,
                      },
            [eg],
        ),
        { canJoin: eb, remoteJoinPlatform: ey } = (0, H.h)({
            presenceActivity: x,
            currentUserPresenceActivity: R,
            currentUserId: N,
            message: w,
            application: A,
            isEmbeddedApplication: j,
            isFrameApplication: M,
            isGameLaunchable: em,
        }),
        eO = ef(x, R, w, A),
        ev = (0, z.g)(R, x),
        eI = (0, Y.L)(x, w, A, N),
        eT = (0, l.e7)(
            [k.Z],
            () =>
                null != x && null != x.application_id && k.Z.getState(x.application_id, ei.mFx.JOIN) === ei.OcF.LOADING,
        ),
        eS = i.useMemo(
            () =>
                eb
                    ? {
                          label: es.intl.string(es.t.VJlc0d),
                          trackingArea: m.j_.JOIN,
                          submitting: eT,
                          onClick: () => {
                              var e, t;
                              d.Z.join({
                                  userId: w.author.id,
                                  sessionId: x.session_id,
                                  applicationId: x.application_id,
                                  channelId: C.id,
                                  messageId: w.id,
                                  source: ei.Sbl.MESSAGE_EMBED,
                                  analyticsLocations: S,
                                  embedded: (0, Q.Z)(x, ei.xjy.EMBEDDED),
                                  remotePartyId: null != ey ? (null == (e = x.party) ? void 0 : e.id) : void 0,
                              }),
                                  (0, $.Z)({
                                      type: ei.q5t.JOIN,
                                      source: ei.Sbl.MESSAGE_EMBED,
                                      userId: w.author.id,
                                      guildId: C.guild_id,
                                      channelId: C.id,
                                      applicationId: x.application_id,
                                      partyId: null == (t = x.party) ? void 0 : t.id,
                                      messageId: w.id,
                                      analyticsLocations: S,
                                      remoteJoinPlatform: ey,
                                  });
                          },
                      }
                    : eO
                      ? {
                            label: es.intl.string(es.t.VJlc0d),
                            trackingArea: m.j_.SYNC,
                            onClick: () => {
                                null != x && f.Z_(x, w.author.id);
                            },
                        }
                      : eI
                        ? {
                              label: es.intl.string(es.t["hC/Ze3"]),
                              trackingArea: m.j_.INVITE,
                              onClick: () => {
                                  null != x &&
                                      u.Z.sendActivityInvite({
                                          type: ei.mFx.JOIN,
                                          channelId: C.id,
                                          activity: x,
                                          location: ei.Sbl.MESSAGE_EMBED,
                                      });
                              },
                              disabled: w.author.id === N,
                              disabledReason: w.author.id === N ? es.intl.string(es.t.IBl8IC) : void 0,
                          }
                        : ev
                          ? {
                                label: es.intl.string(es.t.KC26NT),
                                trackingArea: m.j_.PLAY,
                                onClick: () => {},
                                disabled: !0,
                            }
                          : null != eE
                            ? eE
                            : void 0,
            [eb, eO, eI, ev, eE, w.author.id, w.id, x, C.id, C.guild_id, S, ey, N, eT],
        ),
        eA = i.useMemo(
            () =>
                em && null != e_
                    ? {
                          label: es.intl.string(es.t.RscU7O),
                          trackingArea: m.j_.PLAY,
                          onClick: () => {
                              d.Z.launch({
                                  applicationId: e_,
                                  embedded: j,
                              });
                          },
                      }
                    : null != eE
                      ? eE
                      : void 0,
            [j, em, e_, eE],
        ),
        eC = (0, b.G)(A),
        eN = i.useMemo(() => (null != ed ? ed : null != eC && j ? eC : void 0), [j, ed, eC]),
        eR = i.useMemo(() => {
            let e = [];
            return ec || null == eS ? ec && null != eA && e.push(eA) : e.push(eS), e;
        }, [eA, ec, eS]),
        eP = i.useMemo(() => eR.some((e) => e.trackingArea === m.j_.CLOUD_PLAY), [eR]);
    (0, _.Z)(
        {
            name: a.ImpressionNames.CLOUD_PLAY_CTA,
            type: a.ImpressionTypes.VIEW,
            properties: { location_stack: S },
        },
        { disableTrack: !eP },
    );
    let ew = (0, V.dQ)(A.name, null == (n = w.activity) ? void 0 : n.type),
        eD = (0, T.N)(A.id).some((e) => (0, O.ig)(e) === o.o.GLOBAL)
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c.YqE, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                      es.intl.string(es.t.TsWCdX),
                  ],
              })
            : null,
        eL = ev
            ? null
            : (0, r.jsx)(eh, {
                  presenceActivity: x,
                  remoteJoinPlatform: ey,
              });
    if (ec) {
        let e = (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: el.description,
            color: "none",
            lineClamp: 3,
            children: (0, V.wR)(w, A, C, N),
        });
        return (0, r.jsx)(h.W, {
            header: ew,
            title: A.name,
            staticBannerSrc: en,
            videoBannerSrc: er,
            onClickBanner: eN,
            bannerAspectRatio: eo,
            iconSrc: null != Z ? Z : void 0,
            info: e,
            actions: eR,
            onClickContent: eN,
            trackingConfig: {
                id: A.id,
                linkType: ea.U.RICH_PRESENCE_INVITE,
                onView: D,
                referrerId: w.author.id,
                guildId: C.guild_id,
                channelId: w.channel_id,
                messageId: w.id,
            },
        });
    }
    let ex =
            null != (I = null == x || null == (s = x.timestamps) ? void 0 : s.start)
                ? I
                : null == x
                  ? void 0
                  : x.created_at,
        eM =
            null != ex
                ? (0, r.jsxs)("div", {
                      className: el.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(y.x3, {
                              entry: {
                                  start: ex,
                                  end: null == x || null == (g = x.timestamps) ? void 0 : g.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null,
        ej = (0, r.jsxs)(c.Text, {
            variant: "text-xs/normal",
            className: el.tagline,
            color: "none",
            lineClamp: 2,
            children: [eu ? (0, V.$v)(w, A, C, N, ec) : eM, eu ? null : eD],
        }),
        ek = (0, r.jsxs)("div", {
            className: el.info,
            children: [ej, P || eu ? null : L],
        });
    return (0, r.jsx)(h.W, {
        header: ew,
        title: A.name,
        staticBannerSrc: en,
        videoBannerSrc: er,
        onClickBanner: eN,
        bannerAspectRatio: eo,
        iconSrc: null != Z ? Z : void 0,
        info: ek,
        actions: eR,
        onClickContent: eN,
        trackingConfig: {
            id: A.id,
            linkType: ea.U.RICH_PRESENCE_INVITE,
            onView: D,
            referrerId: w.author.id,
            guildId: C.guild_id,
            channelId: w.channel_id,
            messageId: w.id,
        },
        footer: eL,
    });
}
function eg(e) {
    var t, n;
    let { analyticsLocations: a, app: o, channel: s, message: c, hideParty: u, onView: d } = e,
        f = (0, g.O)(o),
        _ = (0, l.e7)([w.default], () => w.default.getId()),
        p = (0, l.e7)([x.Z], () => {
            if (null == c.application) return x.Z.findActivity(c.author.id, (e) => e.type === ei.IIU.LISTENING);
            {
                let e = c.author.id;
                return (
                    (0, K.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _),
                    x.Z.getApplicationActivity(e, c.application.id)
                );
            }
        }, [c, s, _]),
        h = (0, l.e7)([L.Z, M.Z], () => {
            var e;
            return null != (e = L.Z.getApplicationActivity(f.id)) ? e : M.Z.getApplicationActivity(f.id, !0);
        }, [f.id]),
        m = (0, l.Wu)([D.Z], () => {
            var e;
            return null == p || null == p.party ? [] : Array.from(null != (e = D.Z.getParty(p.party.id)) ? e : []);
        }, [p]),
        { partySize: E, maxPartySize: b } = (0, q._)(p),
        y = i.useMemo(
            () =>
                m.map((e) => {
                    let t = j.default.getUser(e);
                    return null != t ? t : en.ag;
                }),
            [m],
        ),
        O = (0, eo.Ps)(null == p || null == (t = p.party) ? void 0 : t.id) || f.id === P.r9.id,
        v = (0, r.jsx)(eu, {
            partyMembers: y,
            partySize: E,
            maxPartySize: b,
            guildId: s.guild_id,
            activityActionType: null == (n = c.activity) ? void 0 : n.type,
        });
    return O
        ? (0, r.jsx)(e_, {
              application: f,
              currentUserPresenceActivity: h,
              hideParty: u,
              message: c,
              onView: d,
              partyStatusElement: v,
              presenceActivity: p,
              guildId: s.guild_id,
          })
        : ed(c)
          ? (0, r.jsx)(A.Z, {
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
