n.d(t, { Z: () => U }), n(539854);
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
    C = n(691731),
    A = n(935153),
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
    let u = null != n ? (0, A.V)(n) : j.intl.string(j.t["4dGUP0"]);
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
            applicationName: A,
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
            showAuthButton: X,
            startAuthorization: J,
        } = e,
        { enabled: $ } = m.Q.useConfig({ location: "rich_presence_game_invite" }),
        ee =
            null != (o = null == W || null == (t = W.timestamps) ? void 0 : t.start)
                ? o
                : null == W
                  ? void 0
                  : W.created_at,
        et = i.useMemo(() => {
            var e;
            return null != ee
                ? (0, r.jsxs)("div", {
                      className: M.timestampContainer,
                      children: [
                          (0, r.jsx)(c.iWm, {
                              size: "xxs",
                              color: $ ? c.TVs.colors.ICON_FEEDBACK_POSITIVE : "currentColor",
                          }),
                          (0, r.jsx)(h.x3, {
                              entry: {
                                  start: ee,
                                  end: null == W || null == (e = W.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [ee, null == W || null == (n = W.timestamps) ? void 0 : n.end, $]),
        en = (0, T.H)(s),
        er = (0, b.N)(O.id),
        ei = i.useMemo(
            () =>
                er.some((e) => (0, g.ig)(e) === a.o.GLOBAL)
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
            [er],
        ),
        ea = i.useMemo(
            () =>
                (0, r.jsxs)(c.Text, {
                    variant: "text-xs/normal",
                    className: M.tagline,
                    color: "none",
                    lineClamp: 2,
                    children: [en ? (0, v.$v)(s, A, R, U, !1) : et, en ? null : ei],
                }),
            [en, s, A, R, U, et, ei],
        ),
        eo = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: M.info,
                    children: [ea, z || en ? null : q],
                }),
            [ea, z, en, q],
        ),
        es = !!G,
        el = (0, E.A)(O),
        { canJoin: ec, remoteJoinPlatform: eu } = (0, S.h)({
            presenceActivity: W,
            currentUserPresenceActivity: K,
            currentUserId: U,
            message: s,
            application: O,
            isEmbeddedApplication: Z,
            isFrameApplication: el,
            isGameLaunchable: es,
        }),
        ed = (0, S.p)(W, K, s, O),
        ef = (0, I.L)(W, s, O, U),
        ep = (0, C.g)(K, W),
        e_ = (0, l.e7)(
            [y.Z],
            () => null != W && null != W.application_id && y.Z.getState(W.application_id, x.mFx.JOIN) === x.OcF.LOADING,
        ),
        em = i.useMemo(() => {
            let e = null,
                t = !0;
            ec
                ? (e = {
                      label: j.intl.string(j.t.VJlc0S),
                      trackingArea: _.j_.JOIN,
                      submitting: e_,
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
                              remotePartyId: null != eu ? (null == (e = W.party) ? void 0 : e.id) : void 0,
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
                                  remoteJoinPlatform: eu,
                              });
                      },
                  })
                : ed
                  ? ((e = {
                        label: j.intl.string(j.t.VJlc0S),
                        trackingArea: _.j_.SYNC,
                        onClick: () => {
                            null != W && f.Z_(W, s.author.id);
                        },
                    }),
                    (t = !1))
                  : ef
                    ? (e = {
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
                      })
                    : ep
                      ? (e = {
                            label: j.intl.string(j.t.KC26NR),
                            trackingArea: _.j_.PLAY,
                            onClick: () => {},
                            disabled: !0,
                        })
                      : null != B && ((e = B), (t = !1));
            let n = [];
            return (
                null != e &&
                    (n.push(e),
                    X &&
                        t &&
                        n.push({
                            label: j.intl.string(j.t.lw71Nf),
                            trackingArea: _.j_.CONNECT_ACCOUNT,
                            onClick: () => {
                                J({ analyticsLocations: Q });
                            },
                            icon: c.uIJ,
                            iconButton: !0,
                        })),
                n
            );
        }, [ec, ed, ef, ep, B, s.author.id, s.id, W, R.id, R.guild_id, Q, eu, U, e_, X, J]),
        eh = em.some((e) => e.trackingArea === _.j_.CLOUD_PLAY);
    (0, w.Z)(eh, Q);
    let eg = i.useMemo(
        () =>
            ep
                ? null
                : (0, r.jsx)(k, {
                      presenceActivity: W,
                      remoteJoinPlatform: eu,
                  }),
        [ep, W, eu],
    );
    return (0, r.jsx)(p.W, {
        header: D,
        title: A,
        staticBannerSrc: F,
        onClickBanner: V,
        bannerAspectRatio: p.u.ACTIVITY,
        iconSrc: null != H ? H : void 0,
        info: eo,
        actions: em,
        primaryActionFirst: !0,
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
        footer: eg,
    });
}
