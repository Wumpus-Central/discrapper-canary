n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    a = n(705512),
    o = n(657707),
    s = n(267843),
    l = n(442837),
    c = n(481060),
    u = n(278323),
    d = n(224706),
    f = n(763472),
    _ = n(758199),
    p = n(914498),
    h = n(371991),
    m = n(561308),
    g = n(813370),
    E = n(567409),
    b = n(181106),
    y = n(823379),
    O = n(758371),
    v = n(931271),
    I = n(565201),
    T = n(150248),
    S = n(691731),
    A = n(935153),
    C = n(620662),
    N = n(275920),
    R = n(561766),
    P = n(404174),
    D = n(691991),
    w = n(981631),
    L = n(967249),
    x = n(388032),
    M = n(837262);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, R.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: w.M7m.DESKTOP,
        }),
        l = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case R.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.Ol.ANDROID:
                                return (0, r.jsx)(P.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case R.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case R.Ol.VR:
                                return (0, r.jsx)(o.Pb9, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(y.lm),
            [a],
        );
    if (!(null != n || l.length > 0)) return null;
    let u = null != n ? (0, A.V)(n) : x.intl.string(x.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: M.footer,
        children: [
            (0, r.jsx)("div", {
                className: M.footerSupportedPlatformIconsContainer,
                children: l.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: M.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: M.footerSupportedPlatformText,
                children: u,
            }),
        ],
    });
}
function j(e) {
    var t, n, o;
    let {
            message: s,
            application: y,
            applicationName: A,
            channel: R,
            header: P,
            currentUserId: j,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: B,
            staticBannerSrc: Z,
            onClickContent: F,
            iconSrc: V,
            onView: H,
            presenceActivity: W,
            currentUserPresenceActivity: Y,
            hideParty: K,
            partyStatusElement: z,
            analyticsLocations: q,
        } = e,
        X =
            null != (o = null == W || null == (t = W.timestamps) ? void 0 : t.start)
                ? o
                : null == W
                  ? void 0
                  : W.created_at,
        Q = i.useMemo(() => {
            var e;
            return null != X
                ? (0, r.jsxs)("div", {
                      className: M.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(h.x3, {
                              entry: {
                                  start: X,
                                  end: null == W || null == (e = W.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [X, null == W || null == (n = W.timestamps) ? void 0 : n.end]),
        J = (0, T.H)(s),
        $ = (0, E.N)(y.id),
        ee = i.useMemo(
            () =>
                $.some((e) => (0, m.ig)(e) === a.o.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(c.YqE, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              x.intl.string(x.t.TsWCdW),
                          ],
                      })
                    : null,
            [$],
        ),
        et = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: M.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [J ? (0, O.$v)(s, A, R, j, !1) : Q, J ? null : ee],
                }),
            [J, s, A, R, j, Q, ee],
        ),
        en = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: M.info,
                    children: [et, K || J ? null : z],
                }),
            [et, K, J, z],
        ),
        er = !!U,
        ei = (0, g.A)(y),
        { canJoin: ea, remoteJoinPlatform: eo } = (0, v.h)({
            presenceActivity: W,
            currentUserPresenceActivity: Y,
            currentUserId: j,
            message: s,
            application: y,
            isEmbeddedApplication: G,
            isFrameApplication: ei,
            isGameLaunchable: er,
        }),
        es = (0, v.p)(W, Y, s, y),
        el = (0, I.L)(W, s, y, j),
        ec = (0, S.g)(Y, W),
        eu = (0, l.e7)(
            [b.Z],
            () => null != W && null != W.application_id && b.Z.getState(W.application_id, w.mFx.JOIN) === w.OcF.LOADING,
        ),
        ed = i.useMemo(
            () =>
                ea
                    ? [
                          {
                              label: x.intl.string(x.t.VJlc0S),
                              trackingArea: p.j_.JOIN,
                              submitting: eu,
                              onClick: () => {
                                  var e, t;
                                  d.Z.join({
                                      userId: s.author.id,
                                      sessionId: W.session_id,
                                      applicationId: W.application_id,
                                      channelId: R.id,
                                      messageId: s.id,
                                      source: w.Sbl.MESSAGE_EMBED,
                                      analyticsLocations: q,
                                      embedded: (0, C.Z)(W, w.xjy.EMBEDDED),
                                      remotePartyId: null != eo ? (null == (e = W.party) ? void 0 : e.id) : void 0,
                                  }),
                                      (0, N.Z)({
                                          type: w.q5t.JOIN,
                                          source: w.Sbl.MESSAGE_EMBED,
                                          userId: s.author.id,
                                          guildId: R.guild_id,
                                          channelId: R.id,
                                          applicationId: W.application_id,
                                          partyId: null == (t = W.party) ? void 0 : t.id,
                                          messageId: s.id,
                                          analyticsLocations: q,
                                          remoteJoinPlatform: eo,
                                      });
                              },
                          },
                      ]
                    : es
                      ? [
                            {
                                label: x.intl.string(x.t.VJlc0S),
                                trackingArea: p.j_.SYNC,
                                onClick: () => {
                                    null != W && f.Z_(W, s.author.id);
                                },
                            },
                        ]
                      : el
                        ? [
                              {
                                  label: x.intl.string(x.t["hC/Zey"]),
                                  trackingArea: p.j_.INVITE,
                                  onClick: () => {
                                      null != W &&
                                          u.Z.sendActivityInvite({
                                              type: w.mFx.JOIN,
                                              channelId: R.id,
                                              activity: W,
                                              location: w.Sbl.MESSAGE_EMBED,
                                          });
                                  },
                                  disabled: s.author.id === j,
                                  disabledReason: s.author.id === j ? x.intl.string(x.t.IBl8ID) : void 0,
                              },
                          ]
                        : ec
                          ? [
                                {
                                    label: x.intl.string(x.t.KC26NR),
                                    trackingArea: p.j_.PLAY,
                                    onClick: () => {},
                                    disabled: !0,
                                },
                            ]
                          : null != B
                            ? [B]
                            : [],
            [ea, es, el, ec, B, s.author.id, s.id, W, R.id, R.guild_id, q, eo, j, eu],
        ),
        ef = ed.some((e) => e.trackingArea === p.j_.CLOUD_PLAY);
    (0, D.Z)(ef, q);
    let e_ = i.useMemo(
        () =>
            ec
                ? null
                : (0, r.jsx)(k, {
                      presenceActivity: W,
                      remoteJoinPlatform: eo,
                  }),
        [ec, W, eo],
    );
    return (0, r.jsx)(_.W, {
        header: P,
        title: A,
        staticBannerSrc: Z,
        onClickBanner: F,
        bannerAspectRatio: _.u.ACTIVITY,
        iconSrc: null != V ? V : void 0,
        info: en,
        actions: ed,
        onClickContent: F,
        trackingConfig: {
            id: y.id,
            linkType: L.U.RICH_PRESENCE_INVITE,
            onView: H,
            referrerId: s.author.id,
            guildId: R.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
        footer: e_,
    });
}
