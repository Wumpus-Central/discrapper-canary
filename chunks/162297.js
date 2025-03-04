n.d(t, { Z: () => W }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(990547),
    o = n(373793),
    l = n(399606),
    s = n(481060),
    c = n(434650),
    d = n(778569),
    u = n(182906),
    p = n(100527),
    m = n(367907),
    f = n(906732),
    h = n(213609),
    g = n(783097),
    _ = n(606192),
    b = n(213459),
    v = n(220082),
    y = n(749681),
    x = n(258971),
    E = n(240991),
    O = n(592125),
    j = n(496675),
    N = n(944486),
    C = n(914010),
    I = n(768581),
    S = n(135431),
    T = n(728345),
    P = n(812206),
    A = n(321231),
    w = n(230171),
    Z = n(981631),
    k = n(49898),
    R = n(388032),
    D = n(149723),
    L = n(413097),
    M = n(970952);
function W(e) {
    let { applicationId: t, embedUrl: n } = e,
        [a, o, s] = (0, l.Wu)([P.Z], () => [P.Z.getApplication(t), P.Z.isFetchingApplication(t), P.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != a || o || s || T.ZP.fetchApplication(t);
    }, [a, o, s, t]),
    null != a &&
        (0, S.Eb)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }))
        ? (0, r.jsx)(F, {
              application: a,
              embedUrl: n
          })
        : null;
}
function F(e) {
    var t;
    let { application: n, embedUrl: d } = e,
        u = null === (t = n.bot) || void 0 === t ? void 0 : t.id,
        v = (0, g.ye)(n) && null != u,
        I = (0, l.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: T,
            name: P,
            description: W
        } = i.useMemo(
            () =>
                (0, g.sl)(n, {
                    fakeAppIconURL: L,
                    size: 56
                }),
            [n]
        ),
        F = i.useMemo(() => (null != W ? (0, E.parseBioReact)(W) : null), [W]),
        [B, G] = i.useState(!1),
        H = i.useCallback((e) => {
            e && G(!0);
        }, []),
        V = (0, c.O)(H);
    i.useEffect(() => {
        B &&
            (0, h.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [B, n]);
    let z = (0, S.TK)(n.id, (0, b.PL)(!0, !1)),
        K = (0, S.TK)(n.id, (0, b.LD)(I, !1)),
        Y = z || K,
        X = n.isVerified && n.isDiscoverable,
        q = (0, l.e7)([N.Z, O.Z], () => O.Z.getChannel(N.Z.getChannelId())),
        Q = (0, l.e7)([j.Z], () => (null == q ? void 0 : q.isPrivate()) || j.Z.can(Z.Plq.SEND_MESSAGES, q)),
        { analyticsLocations: J } = (0, f.ZP)(p.Z.APP_OAUTH2_LINK_EMBED),
        $ = async () => {
            if (null != u)
                try {
                    await (0, _.W)({
                        appId: n.id,
                        botId: u,
                        analyticsLocations: J
                    });
                } catch (e) {}
        },
        { enabled: ee } = A.G.useExperiment({ location: 'ApplicationOAuth2Embed' });
    return ee
        ? (0, r.jsx)(w.O, {
              app: n,
              embedUrl: d,
              linkType: w.U.OAUTH
          })
        : (0, r.jsxs)('div', {
              ref: V,
              className: D.embedContainer,
              children: [
                  (0, r.jsx)(U, {
                      application: n,
                      iconUrl: T
                  }),
                  (0, r.jsx)('img', {
                      className: D.icon,
                      alt: n.name,
                      src: null != T ? T : M,
                      'aria-hidden': !0,
                      draggable: !1
                  }),
                  (0, r.jsxs)('div', {
                      className: D.body,
                      children: [
                          (0, r.jsxs)('div', {
                              className: D.details,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/bold',
                                      color: 'interactive-active',
                                      children: P
                                  }),
                                  null != F &&
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: F
                                      })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: D.buttonContainer,
                              children: [
                                  v &&
                                      (0, r.jsx)(s.zxk, {
                                          color: s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: $,
                                          children: R.NW.string(R.t.RscU7O)
                                      }),
                                  (Y || X) &&
                                      Q &&
                                      (0, r.jsx)(s.zxk, {
                                          color: v ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              var e;
                                              o.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || Y
                                                  ? (0, g.X)(n.id)
                                                  : (0, y.transitionToGlobalDiscovery)({
                                                        tab: k.GlobalDiscoveryTab.APPS,
                                                        applicationId: n.id,
                                                        newSessionState: {
                                                            guildId: I,
                                                            entrypoint: { name: x.xF.OAUTH2_EMBED }
                                                        }
                                                    });
                                          },
                                          children: R.NW.string(R.t.fbcCzc)
                                      }),
                                  !v &&
                                      !Y &&
                                      (0, r.jsx)(s.zxk, {
                                          color: s.zxk.Colors.PRIMARY,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              m.ZP.trackWithMetadata(Z.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                                  (0, S.LO)({
                                                      applicationId: n.id,
                                                      customInstallUrl: n.customInstallUrl,
                                                      installParams: n.installParams,
                                                      integrationTypesConfig: n.integrationTypesConfig,
                                                      guildId: I,
                                                      source: 'app_oauth2_link_embed'
                                                  });
                                          },
                                          children: R.NW.string(R.t.NgXl3N)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function U(e) {
    let { application: t, iconUrl: n } = e,
        i = (0, d.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        a = (0, v.ZP)(n, ''),
        o = t.bot,
        l = null,
        s = {};
    if ((0, g.ye)(t))
        l = (0, r.jsx)(u.Z, {
            imageBackground: i,
            applicationName: t.name,
            imageClassName: D.bannerImage,
            imageNotFoundClassName: D.bannerImage
        });
    else if ((null == o ? void 0 : o.banner) != null) {
        let e = (0, I.aN)({
            id: o.id,
            banner: o.banner,
            size: 280,
            canAnimate: !1
        });
        l = (0, r.jsx)('img', {
            alt: t.name,
            src: e,
            className: D.bannerImage
        });
    } else s = { backgroundColor: a };
    return (0, r.jsx)('div', {
        className: D.banner,
        style: s,
        children: l
    });
}
