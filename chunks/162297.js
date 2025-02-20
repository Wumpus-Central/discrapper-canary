n.d(t, { Z: () => M }), n(47120), n(266796);
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
    v = n(132871),
    y = n(147890),
    x = n(220082),
    O = n(240991),
    E = n(592125),
    j = n(496675),
    N = n(944486),
    C = n(914010),
    I = n(768581),
    S = n(135431),
    P = n(728345),
    T = n(812206),
    A = n(321231),
    w = n(230171),
    Z = n(981631),
    k = n(388032),
    R = n(147743),
    L = n(413097),
    D = n(970952);
function M(e) {
    let { applicationId: t, embedUrl: n } = e,
        [a, o, s] = (0, l.Wu)([T.Z], () => [T.Z.getApplication(t), T.Z.isFetchingApplication(t), T.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != a || o || s || P.ZP.fetchApplication(t);
    }, [a, o, s, t]),
    null != a &&
        (0, S.Eb)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }))
        ? (0, r.jsx)(W, {
              application: a,
              embedUrl: n
          })
        : null;
}
function W(e) {
    var t;
    let { application: n, embedUrl: d } = e,
        u = null === (t = n.bot) || void 0 === t ? void 0 : t.id,
        x = (0, g.ye)(n) && null != u,
        I = (0, l.e7)([C.Z], () => {
            var e;
            return null !== (e = C.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: P,
            name: T,
            description: M
        } = i.useMemo(
            () =>
                (0, g.sl)(n, {
                    fakeAppIconURL: L,
                    size: 56
                }),
            [n]
        ),
        W = i.useMemo(() => (null != M ? (0, O.parseBioReact)(M) : null), [M]),
        [U, B] = i.useState(!1),
        G = i.useCallback((e) => {
            e && B(!0);
        }, []),
        H = (0, c.O)(G);
    i.useEffect(() => {
        U &&
            (0, h.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [U, n]);
    let V = (0, S.TK)(n.id, (0, b.PL)(!0, !1)),
        z = (0, S.TK)(n.id, (0, b.LD)(I, !1)),
        K = V || z,
        Y = n.isVerified && n.isDiscoverable,
        X = (0, l.e7)([N.Z, E.Z], () => E.Z.getChannel(N.Z.getChannelId())),
        q = (0, l.e7)([j.Z], () => (null == X ? void 0 : X.isPrivate()) || j.Z.can(Z.Plq.SEND_MESSAGES, X)),
        { analyticsLocations: Q } = (0, f.ZP)(p.Z.APP_OAUTH2_LINK_EMBED),
        J = async () => {
            if (null != u)
                try {
                    await (0, _.W)({
                        appId: n.id,
                        botId: u,
                        analyticsLocations: Q
                    });
                } catch (e) {}
        },
        { enabled: $ } = A.G.useExperiment({ location: 'ApplicationOAuth2Embed' });
    return $
        ? (0, r.jsx)(w.O, {
              app: n,
              embedUrl: d
          })
        : (0, r.jsxs)('div', {
              ref: H,
              className: R.embedContainer,
              children: [
                  (0, r.jsx)(F, {
                      application: n,
                      iconUrl: P
                  }),
                  (0, r.jsx)('img', {
                      className: R.icon,
                      alt: n.name,
                      src: null != P ? P : D,
                      'aria-hidden': !0,
                      draggable: !1
                  }),
                  (0, r.jsxs)('div', {
                      className: R.body,
                      children: [
                          (0, r.jsxs)('div', {
                              className: R.details,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/bold',
                                      color: 'interactive-active',
                                      children: T
                                  }),
                                  null != W &&
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: W
                                      })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: R.buttonContainer,
                              children: [
                                  x &&
                                      (0, r.jsx)(s.zxk, {
                                          color: s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: J,
                                          children: k.NW.string(k.t.RscU7O)
                                      }),
                                  (K || Y) &&
                                      q &&
                                      (0, r.jsx)(s.zxk, {
                                          color: x ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              var e;
                                              o.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || K
                                                  ? (0, g.X)(n.id)
                                                  : (0, y.dx)({
                                                        guildId: I,
                                                        view: v.eN.APPLICATION,
                                                        applicationId: n.id,
                                                        entrypoint: { name: v.n3.OAUTH2_EMBED }
                                                    });
                                          },
                                          children: k.NW.string(k.t.fbcCzc)
                                      }),
                                  !x &&
                                      !K &&
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
                                          children: k.NW.string(k.t.NgXl3N)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function F(e) {
    let { application: t, iconUrl: n } = e,
        i = (0, d.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        a = (0, x.ZP)(n, ''),
        o = t.bot,
        l = null,
        s = {};
    if ((0, g.ye)(t))
        l = (0, r.jsx)(u.Z, {
            imageBackground: i,
            applicationName: t.name,
            imageClassName: R.bannerImage,
            imageNotFoundClassName: R.bannerImage
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
            className: R.bannerImage
        });
    } else s = { backgroundColor: a };
    return (0, r.jsx)('div', {
        className: R.banner,
        style: s,
        children: l
    });
}
