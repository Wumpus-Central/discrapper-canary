n.d(t, { Z: () => k }), n(539854);
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
    C = n(935153),
    A = n(620662),
    N = n(275920),
    P = n(561766),
    R = n(404174),
    w = n(691991),
    D = n(981631),
    x = n(967249),
    L = n(388032),
    j = n(927997);
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
    let u = null != n ? (0, C.V)(n) : L.intl.string(L.t["4dGUP0"]);
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
            applicationName: C,
            channel: P,
            header: R,
            currentUserId: k,
            launchableAppId: U,
            isEmbeddedApplication: G,
            tryWithGdnAction: Z,
            staticBannerSrc: F,
            onClickContent: B,
            iconSrc: V,
            onView: H,
            presenceActivity: Y,
            currentUserPresenceActivity: W,
            hideParty: K,
            partyStatusElement: z,
            analyticsLocations: q,
            showAuthButton: Q,
            startAuthorization: X,
        } = e,
        J =
            null != (o = null == Y || null == (t = Y.timestamps) ? void 0 : t.start)
                ? o
                : null == Y
                  ? void 0
                  : Y.created_at,
        $ = i.useMemo(() => {
            var e;
            return null != J
                ? (0, r.jsxs)("div", {
                      className: j.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(m.x3, {
                              entry: {
                                  start: J,
                                  end: null == Y || null == (e = Y.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [J, null == Y || null == (n = Y.timestamps) ? void 0 : n.end]),
        ee = (0, I.H)(s),
        et = (0, E.N)(y.id),
        en = i.useMemo(
            () =>
                et.some((e) => (0, h.ig)(e) === a.o.GLOBAL)
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
            [et],
        ),
        er = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: j.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [ee ? (0, O.$v)(s, C, P, k, !1) : $, ee ? null : en],
                }),
            [ee, s, C, P, k, $, en],
        ),
        ei = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: j.info,
                    children: [er, K || ee ? null : z],
                }),
            [er, K, ee, z],
        ),
        ea = !!U,
        eo = (0, g.A)(y),
        { canJoin: es, remoteJoinPlatform: el } = (0, v.h)({
            presenceActivity: Y,
            currentUserPresenceActivity: W,
            currentUserId: k,
            message: s,
            application: y,
            isEmbeddedApplication: G,
            isFrameApplication: eo,
            isGameLaunchable: ea,
        }),
        ec = (0, v.p)(Y, W, s, y),
        eu = (0, S.L)(Y, s, y, k),
        ed = (0, T.g)(W, Y),
        ef = (0, l.e7)(
            [b.Z],
            () => null != Y && null != Y.application_id && b.Z.getState(Y.application_id, D.mFx.JOIN) === D.OcF.LOADING,
        ),
        ep = i.useMemo(() => {
            let e = null,
                t = !0;
            es
                ? (e = {
                      label: L.intl.string(L.t.VJlc0S),
                      trackingArea: _.j_.JOIN,
                      submitting: ef,
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
                              embedded: (0, A.Z)(Y, D.xjy.EMBEDDED),
                              remotePartyId: null != el ? (null == (e = Y.party) ? void 0 : e.id) : void 0,
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
                                  remoteJoinPlatform: el,
                              });
                      },
                  })
                : ec
                  ? ((e = {
                        label: L.intl.string(L.t.VJlc0S),
                        trackingArea: _.j_.SYNC,
                        onClick: () => {
                            null != Y && f.Z_(Y, s.author.id);
                        },
                    }),
                    (t = !1))
                  : eu
                    ? (e = {
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
                      })
                    : ed
                      ? (e = {
                            label: L.intl.string(L.t.KC26NR),
                            trackingArea: _.j_.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != Z && ((e = Z), (t = !1));
            let n = [];
            return (
                null != e &&
                    (n.push(e),
                    Q &&
                        t &&
                        n.push({
                            label: L.intl.string(L.t.lw71Nf),
                            trackingArea: _.j_.CONNECT_ACCOUNT,
                            onClick: () => {
                                X({ analyticsLocations: q });
                            },
                            icon: c.uIJ,
                            iconButton: !0,
                        })),
                n
            );
        }, [es, ec, eu, ed, Z, s.author.id, s.id, Y, P.id, P.guild_id, q, el, k, ef, Q, X]),
        e_ = ep.some((e) => e.trackingArea === _.j_.CLOUD_PLAY);
    (0, w.Z)(e_, q);
    let em = i.useMemo(
        () =>
            ed
                ? null
                : (0, r.jsx)(M, {
                      presenceActivity: Y,
                      remoteJoinPlatform: el,
                  }),
        [ed, Y, el],
    );
    return (0, r.jsx)(p.W, {
        header: R,
        title: C,
        staticBannerSrc: F,
        onClickBanner: B,
        bannerAspectRatio: p.u.ACTIVITY,
        iconSrc: null != V ? V : void 0,
        info: ei,
        actions: ep,
        primaryActionFirst: !0,
        onClickContent: B,
        trackingConfig: {
            id: y.id,
            linkType: x.U.RICH_PRESENCE_INVITE,
            onView: H,
            referrerId: s.author.id,
            guildId: P.guild_id,
            channelId: s.channel_id,
            messageId: s.id,
        },
        footer: em,
    });
}
