n.d(t, { Z: () => k });
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
    m = n(371991),
    h = n(561308),
    g = n(813370),
    E = n(567409),
    b = n(181106),
    y = n(823379),
    O = n(758371),
    v = n(931271),
    S = n(565201),
    I = n(150248),
    T = n(691731),
    A = n(935153),
    C = n(620662),
    N = n(275920),
    P = n(561766),
    R = n(404174),
    w = n(691991),
    D = n(981631),
    x = n(967249),
    L = n(388032),
    j = n(837262);
function M(e) {
    let { presenceActivity: t, remoteJoinPlatform: n } = e,
        a = (0, P.Cx)({
            platforms: null == t ? void 0 : t.supported_platforms,
            currentPlatform: D.M7m.DESKTOP,
        }),
        l = i.useMemo(
            () =>
                a
                    .map((e) => {
                        switch (e) {
                            case P.Ol.MOBILE:
                                return (0, r.jsx)(c.AtH, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case P.Ol.ANDROID:
                                return (0, r.jsx)(R.j, {
                                    width: s.Z.xxs,
                                    height: s.Z.xxs,
                                    color: "currentColor",
                                });
                            case P.Ol.IOS:
                                return (0, r.jsx)(c.gLQ, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case P.Ol.PLAYSTATION:
                                return (0, r.jsx)(c.Tsp, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case P.Ol.XBOX:
                                return (0, r.jsx)(c.Mko, {
                                    size: "xxs",
                                    color: "currentColor",
                                });
                            case P.Ol.VR:
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
    let u = null != n ? (0, A.V)(n) : L.intl.string(L.t["4dGUP0"]);
    return (0, r.jsxs)("div", {
        className: j.footer,
        children: [
            (0, r.jsx)("div", {
                className: j.footerSupportedPlatformIconsContainer,
                children: l.map((e, t) =>
                    (0, r.jsx)(
                        "div",
                        {
                            className: j.footerSupportedPlatformIconContainer,
                            children: e,
                        },
                        t,
                    ),
                ),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "currentColor",
                className: j.footerSupportedPlatformText,
                children: u,
            }),
        ],
    });
}
function k(e) {
    var t, n, o;
    let {
            message: s,
            application: y,
            applicationName: A,
            channel: P,
            header: R,
            currentUserId: k,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: Z,
            staticBannerSrc: B,
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
                      className: j.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(m.x3, {
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
        J = (0, I.H)(s),
        $ = (0, E.N)(y.id),
        ee = i.useMemo(
            () =>
                $.some((e) => (0, h.ig)(e) === a.o.GLOBAL)
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(c.YqE, {
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
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: j.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [J ? (0, O.$v)(s, A, P, k, !1) : Q, J ? null : ee],
                }),
            [J, s, A, P, k, Q, ee],
        ),
        en = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: j.info,
                    children: [et, K || J ? null : z],
                }),
            [et, K, J, z],
        ),
        er = !!U,
        ei = (0, g.A)(y),
        { canJoin: ea, remoteJoinPlatform: eo } = (0, v.h)({
            presenceActivity: Y,
            currentUserPresenceActivity: W,
            currentUserId: k,
            message: s,
            application: y,
            isEmbeddedApplication: G,
            isFrameApplication: ei,
            isGameLaunchable: er,
        }),
        es = (0, v.p)(Y, W, s, y),
        el = (0, S.L)(Y, s, y, k),
        ec = (0, T.g)(W, Y),
        eu = (0, l.e7)(
            [b.Z],
            () => null != Y && null != Y.application_id && b.Z.getState(Y.application_id, D.mFx.JOIN) === D.OcF.LOADING,
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
                                  d.Z.join({
                                      userId: s.author.id,
                                      sessionId: Y.session_id,
                                      applicationId: Y.application_id,
                                      channelId: P.id,
                                      messageId: s.id,
                                      source: D.Sbl.MESSAGE_EMBED,
                                      analyticsLocations: q,
                                      embedded: (0, C.Z)(Y, D.xjy.EMBEDDED),
                                      remotePartyId: null != eo ? (null == (e = Y.party) ? void 0 : e.id) : void 0,
                                  }),
                                      (0, N.Z)({
                                          type: D.q5t.JOIN,
                                          source: D.Sbl.MESSAGE_EMBED,
                                          userId: s.author.id,
                                          guildId: P.guild_id,
                                          channelId: P.id,
                                          applicationId: Y.application_id,
                                          partyId: null == (t = Y.party) ? void 0 : t.id,
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
                                label: L.intl.string(L.t.VJlc0S),
                                trackingArea: _.j_.SYNC,
                                onClick: () => {
                                    null != Y && f.Z_(Y, s.author.id);
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
                                          u.Z.sendActivityInvite({
                                              type: D.mFx.JOIN,
                                              channelId: P.id,
                                              activity: Y,
                                              location: D.Sbl.MESSAGE_EMBED,
                                          });
                                  },
                                  disabled: s.author.id === k,
                                  disabledReason: s.author.id === k ? L.intl.string(L.t.IBl8ID) : void 0,
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
                          : null != Z
                            ? [Z]
                            : [],
            [ea, es, el, ec, Z, s.author.id, s.id, Y, P.id, P.guild_id, q, eo, k, eu],
        ),
        ef = ed.some((e) => e.trackingArea === _.j_.CLOUD_PLAY);
    (0, w.Z)(ef, q);
    let ep = i.useMemo(
        () =>
            ec
                ? null
                : (0, r.jsx)(M, {
                      presenceActivity: Y,
                      remoteJoinPlatform: eo,
                  }),
        [ec, Y, eo],
    );
    return (0, r.jsx)(p.W, {
        header: R,
        title: A,
        staticBannerSrc: B,
        onClickBanner: F,
        bannerAspectRatio: p.u.ACTIVITY,
        iconSrc: null != V ? V : void 0,
        info: en,
        actions: ed,
        onClickContent: F,
        trackingConfig: {
            id: y.id,
            linkType: x.U.RICH_PRESENCE_INVITE,
            onView: H,
            referrerId: s.author.id,
            guildId: P.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
        footer: ep,
    });
}
