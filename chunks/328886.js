n.d(t, { Z: () => U });
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
    p = n(758199),
    _ = n(914498),
    m = n(368176),
    h = n(371991),
    g = n(561308),
    E = n(813370),
    b = n(567409),
    y = n(181106),
    O = n(823379),
    v = n(758371),
    S = n(931271),
    I = n(565201),
    T = n(150248),
    A = n(691731),
    C = n(935153),
    N = n(620662),
    P = n(275920),
    R = n(561766),
    D = n(404174),
    w = n(691991),
    x = n(981631),
    L = n(967249),
    j = n(388032),
    M = n(837262);
function k(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, R.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: x.M7m.DESKTOP,
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
                                return (0, r.jsx)(D.j, {
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
                    .filter(O.lm),
            [a],
        );
    if (!(null != n || l.length > 0)) return null;
    let u = null != n ? (0, C.V)(n) : j.intl.string(j.t["4dGUP0"]);
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
function U(e) {
    var t, n, o;
    let {
            message: s,
            application: O,
            applicationName: C,
            channel: R,
            header: D,
            currentUserId: U,
            launchableAppId: G,
            isEmbeddedApplication: Z,
            tryWithGdnAction: B,
            staticBannerSrc: F,
            onClickContent: V,
            iconSrc: H,
            onView: Y,
            presenceActivity: W,
            currentUserPresenceActivity: K,
            hideParty: z,
            partyStatusElement: q,
            analyticsLocations: Q,
        } = e,
        { enabled: X } = m.Q.useConfig({ location: "rich_presence_game_invite" }),
        J =
            null != (o = null == W || null == (t = W.timestamps) ? void 0 : t.start)
                ? o
                : null == W
                  ? void 0
                  : W.created_at,
        $ = i.useMemo(() => {
            var e;
            return null != J
                ? (0, r.jsxs)("div", {
                      className: M.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: X ? c.TVs.colors.ICON_FEEDBACK_POSITIVE : "currentColor",
                          }),
                          (0, r.jsx)(h.x3, {
                              entry: {
                                  start: J,
                                  end: null == W || null == (e = W.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [J, null == W || null == (n = W.timestamps) ? void 0 : n.end, X]),
        ee = (0, T.H)(s),
        et = (0, b.N)(O.id),
        en = i.useMemo(
            () =>
                et.some((e) => (0, g.ig)(e) === a.o.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(c.YqE, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              j.intl.string(j.t.TsWCdW),
                          ],
                      })
                    : null,
            [et],
        ),
        er = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: M.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [ee ? (0, v.$v)(s, C, R, U, !1) : $, ee ? null : en],
                }),
            [ee, s, C, R, U, $, en],
        ),
        ei = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: M.info,
                    children: [er, z || ee ? null : q],
                }),
            [er, z, ee, q],
        ),
        ea = !!G,
        eo = (0, E.A)(O),
        { canJoin: es, remoteJoinPlatform: el } = (0, S.h)({
            presenceActivity: W,
            currentUserPresenceActivity: K,
            currentUserId: U,
            message: s,
            application: O,
            isEmbeddedApplication: Z,
            isFrameApplication: eo,
            isGameLaunchable: ea,
        }),
        ec = (0, S.p)(W, K, s, O),
        eu = (0, I.L)(W, s, O, U),
        ed = (0, A.g)(K, W),
        ef = (0, l.e7)(
            [y.Z],
            () => null != W && null != W.application_id && y.Z.getState(W.application_id, x.mFx.JOIN) === x.OcF.LOADING,
        ),
        ep = i.useMemo(
            () =>
                es
                    ? [
                          {
                              label: j.intl.string(j.t.VJlc0S),
                              trackingArea: _.j_.JOIN,
                              submitting: ef,
                              onClick: () => {
                                  var e, t;
                                  d.Z.join({
                                      userId: s.author.id,
                                      sessionId: W.session_id,
                                      applicationId: W.application_id,
                                      channelId: R.id,
                                      messageId: s.id,
                                      source: x.Sbl.MESSAGE_EMBED,
                                      analyticsLocations: Q,
                                      embedded: (0, N.Z)(W, x.xjy.EMBEDDED),
                                      remotePartyId: null != el ? (null == (e = W.party) ? void 0 : e.id) : void 0,
                                  }),
                                      (0, P.Z)({
                                          type: x.q5t.JOIN,
                                          source: x.Sbl.MESSAGE_EMBED,
                                          userId: s.author.id,
                                          guildId: R.guild_id,
                                          channelId: R.id,
                                          applicationId: W.application_id,
                                          partyId: null == (t = W.party) ? void 0 : t.id,
                                          messageId: s.id,
                                          analyticsLocations: Q,
                                          remoteJoinPlatform: el,
                                      });
                              },
                          },
                      ]
                    : ec
                      ? [
                            {
                                label: j.intl.string(j.t.VJlc0S),
                                trackingArea: _.j_.SYNC,
                                onClick: () => {
                                    null != W && f.Z_(W, s.author.id);
                                },
                            },
                        ]
                      : eu
                        ? [
                              {
                                  label: j.intl.string(j.t["hC/Zey"]),
                                  trackingArea: _.j_.INVITE,
                                  onClick: () => {
                                      null != W &&
                                          u.Z.sendActivityInvite({
                                              type: x.mFx.JOIN,
                                              channelId: R.id,
                                              activity: W,
                                              location: x.Sbl.MESSAGE_EMBED,
                                          });
                                  },
                                  disabled: s.author.id === U,
                                  disabledReason: s.author.id === U ? j.intl.string(j.t.IBl8ID) : void 0,
                              },
                          ]
                        : ed
                          ? [
                                {
                                    label: j.intl.string(j.t.KC26NR),
                                    trackingArea: _.j_.PLAY,
                                    onClick: () => {},
                                    disabled: !0,
                                },
                            ]
                          : null != B
                            ? [B]
                            : [],
            [es, ec, eu, ed, B, s.author.id, s.id, W, R.id, R.guild_id, Q, el, U, ef],
        ),
        e_ = ep.some((e) => e.trackingArea === _.j_.CLOUD_PLAY);
    (0, w.Z)(e_, Q);
    let em = i.useMemo(
        () =>
            ed
                ? null
                : (0, r.jsx)(k, {
                      presenceActivity: W,
                      remoteJoinPlatform: el,
                  }),
        [ed, W, el],
    );
    return (0, r.jsx)(p.W, {
        header: D,
        title: C,
        staticBannerSrc: F,
        onClickBanner: V,
        bannerAspectRatio: p.u.ACTIVITY,
        iconSrc: null != H ? H : void 0,
        info: ei,
        actions: ep,
        onClickContent: V,
        trackingConfig: {
            id: O.id,
            linkType: L.U.RICH_PRESENCE_INVITE,
            onView: Y,
            referrerId: s.author.id,
            guildId: R.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
        footer: em,
    });
}
