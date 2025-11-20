n.d(t, { Z: () => k });
var r = n(54381),
    i = n(473749),
    a = n(705512),
    o = n(267843),
    s = n(442837),
    l = n(481060),
    c = n(278323),
    u = n(224706),
    d = n(763472),
    f = n(758199),
    _ = n(914498),
    p = n(371991),
    h = n(561308),
    m = n(813370),
    g = n(567409),
    E = n(181106),
    b = n(823379),
    y = n(758371),
    O = n(931271),
    v = n(565201),
    I = n(150248),
    T = n(691731),
    S = n(935153),
    A = n(620662),
    C = n(275920),
    N = n(561766),
    R = n(404174),
    P = n(691991),
    D = n(981631),
    w = n(967249),
    L = n(388032),
    x = n(837262);
function M(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, N.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: D.M7m.DESKTOP,
        }),
        s = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case N.Ol.MOBILE:
                                return (0, r.jsx)(l.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case N.Ol.ANDROID:
                                return (0, r.jsx)(R.j, {
                                    width: o.Z.xxs,
                                    height: o.Z.xxs,
                                    color: "currentColor",
                                });
                            case N.Ol.IOS:
                                return (0, r.jsx)(l.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case N.Ol.PLAYSTATION:
                                return (0, r.jsx)(l.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case N.Ol.XBOX:
                                return (0, r.jsx)(l.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            default:
                                return null;
                        }
                    })
                    .filter(b.lm),
            [a],
        );
    if (!(null != n || s.length > 0)) return null;
    let c = null != n ? (0, S.V)(n) : L.intl.string(L.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: x.footer,
        children: [
            (0, r.jsx)("div", {
                className: x.footerSupportedPlatformIconsContainer,
                children: s.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: x.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: x.footerSupportedPlatformText,
                children: c,
            }),
        ],
    });
}
function k(e) {
    var t, n, o;
    let {
            message: b,
            application: S,
            applicationName: N,
            channel: R,
            header: k,
            currentUserId: j,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: B,
            staticBannerSrc: Z,
            onClickContent: F,
            iconSrc: V,
            onView: H,
            presenceActivity: Y,
            currentUserPresenceActivity: W,
            hideParty: K,
            partyStatusElement: z,
            analyticsLocations: q,
        } = e,
        X =
            null != (o = null == Y || null == (t = Y.timestamps) ? void 0 : t.start)
                ? o
                : null == Y
                  ? void 0
                  : Y.created_at,
        Q = i.useMemo(() => {
            var e;
            return null != X
                ? (0, r.jsxs)("div", {
                      className: x.timestampContainer,
                      children: [
                          (0, r.jsx)(l.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(p.x3, {
                              entry: {
                                  start: X,
                                  end: null == Y || null == (e = Y.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [X, null == Y || null == (n = Y.timestamps) ? void 0 : n.end]),
        J = (0, I.H)(b),
        $ = (0, g.N)(S.id),
        ee = i.useMemo(
            () =>
                $.some((e) => (0, h.ig)(e) === a.o.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.YqE, {
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                              L.intl.string(L.t.TsWCdW),
                          ],
                      })
                    : null,
            [$],
        ),
        et = i.useMemo(
            () =>
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/normal",
                    className: x.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [J ? (0, y.$v)(b, N, R, j, !1) : Q, J ? null : ee],
                }),
            [J, b, N, R, j, Q, ee],
        ),
        en = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: x.info,
                    children: [et, K || J ? null : z],
                }),
            [et, K, J, z],
        ),
        er = !!U,
        ei = (0, m.A)(S),
        { canJoin: ea, remoteJoinPlatform: eo } = (0, O.h)({
            presenceActivity: Y,
            currentUserPresenceActivity: W,
            currentUserId: j,
            message: b,
            application: S,
            isEmbeddedApplication: G,
            isFrameApplication: ei,
            isGameLaunchable: er,
        }),
        es = (0, O.p)(Y, W, b, S),
        el = (0, v.L)(Y, b, S, j),
        ec = (0, T.g)(W, Y),
        eu = (0, s.e7)(
            [E.Z],
            () => null != Y && null != Y.application_id && E.Z.getState(Y.application_id, D.mFx.JOIN) === D.OcF.LOADING,
        ),
        ed = i.useMemo(
            () =>
                ea
                    ? [
                          {
                              label: L.intl.string(L.t.VJlc0S),
                              trackingArea: _.j_.JOIN,
                              submitting: eu,
                              onClick: () => {
                                  var e, t;
                                  u.Z.join({
                                      userId: b.author.id,
                                      sessionId: Y.session_id,
                                      applicationId: Y.application_id,
                                      channelId: R.id,
                                      messageId: b.id,
                                      source: D.Sbl.MESSAGE_EMBED,
                                      analyticsLocations: q,
                                      embedded: (0, A.Z)(Y, D.xjy.EMBEDDED),
                                      remotePartyId: null != eo ? (null == (e = Y.party) ? void 0 : e.id) : void 0,
                                  }),
                                      (0, C.Z)({
                                          type: D.q5t.JOIN,
                                          source: D.Sbl.MESSAGE_EMBED,
                                          userId: b.author.id,
                                          guildId: R.guild_id,
                                          channelId: R.id,
                                          applicationId: Y.application_id,
                                          partyId: null == (t = Y.party) ? void 0 : t.id,
                                          messageId: b.id,
                                          analyticsLocations: q,
                                          remoteJoinPlatform: eo,
                                      });
                              },
                          },
                      ]
                    : es
                      ? [
                            {
                                label: L.intl.string(L.t.VJlc0S),
                                trackingArea: _.j_.SYNC,
                                onClick: () => {
                                    null != Y && d.Z_(Y, b.author.id);
                                },
                            },
                        ]
                      : el
                        ? [
                              {
                                  label: L.intl.string(L.t["hC/Zey"]),
                                  trackingArea: _.j_.INVITE,
                                  onClick: () => {
                                      null != Y &&
                                          c.Z.sendActivityInvite({
                                              type: D.mFx.JOIN,
                                              channelId: R.id,
                                              activity: Y,
                                              location: D.Sbl.MESSAGE_EMBED,
                                          });
                                  },
                                  disabled: b.author.id === j,
                                  disabledReason: b.author.id === j ? L.intl.string(L.t.IBl8ID) : void 0,
                              },
                          ]
                        : ec
                          ? [
                                {
                                    label: L.intl.string(L.t.KC26NR),
                                    trackingArea: _.j_.PLAY,
                                    onClick: () => {},
                                    disabled: !0,
                                },
                            ]
                          : null != B
                            ? [B]
                            : [],
            [ea, es, el, ec, B, b.author.id, b.id, Y, R.id, R.guild_id, q, eo, j, eu],
        ),
        ef = ed.some((e) => e.trackingArea === _.j_.CLOUD_PLAY);
    (0, P.Z)(ef, q);
    let e_ = i.useMemo(
        () =>
            ec
                ? null
                : (0, r.jsx)(M, {
                      presenceActivity: Y,
                      remoteJoinPlatform: eo,
                  }),
        [ec, Y, eo],
    );
    return (0, r.jsx)(f.W, {
        header: k,
        title: N,
        staticBannerSrc: Z,
        onClickBanner: F,
        bannerAspectRatio: f.u.ACTIVITY,
        iconSrc: null != V ? V : void 0,
        info: en,
        actions: ed,
        onClickContent: F,
        trackingConfig: {
            id: S.id,
            linkType: w.U.RICH_PRESENCE_INVITE,
            onView: H,
            referrerId: b.author.id,
            guildId: R.guild_id,
            channelId: b.channel_id,
            messageId: b.id,
        },
        footer: e_,
    });
}
