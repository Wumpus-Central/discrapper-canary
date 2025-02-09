n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(990547),
    r = n(373793),
    s = n(399606),
    o = n(481060),
    c = n(434650),
    d = n(778569),
    u = n(182906),
    m = n(100527),
    _ = n(367907),
    h = n(906732),
    p = n(213609),
    g = n(783097),
    f = n(606192),
    x = n(213459),
    C = n(132871),
    v = n(147890),
    E = n(220082),
    I = n(240991),
    N = n(592125),
    S = n(496675),
    T = n(944486),
    b = n(914010),
    A = n(768581),
    j = n(135431),
    y = n(728345),
    Z = n(812206),
    R = n(321231),
    L = n(230171),
    P = n(981631),
    k = n(388032),
    M = n(828707),
    O = n(413097),
    D = n(970952);
function w(e) {
    let { applicationId: t, embedUrl: n } = e,
        [a, r, o] = (0, s.Wu)([Z.Z], () => [Z.Z.getApplication(t), Z.Z.isFetchingApplication(t), Z.Z.didFetchingApplicationFail(t)], [t]);
    return (l.useEffect(() => {
        null != a || r || o || y.ZP.fetchApplication(t);
    }, [a, r, o, t]),
    null != a &&
        (0, j.Eb)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }))
        ? (0, i.jsx)(F, {
              application: a,
              embedUrl: n
          })
        : null;
}
function F(e) {
    var t;
    let { application: n, embedUrl: d } = e,
        u = null === (t = n.bot) || void 0 === t ? void 0 : t.id,
        E = (0, g.ye)(n) && null != u,
        A = (0, s.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: y,
            name: Z,
            description: w
        } = l.useMemo(
            () =>
                (0, g.sl)(n, {
                    fakeAppIconURL: O,
                    size: 56
                }),
            [n]
        ),
        F = l.useMemo(() => (null != w ? (0, I.parseBioReact)(w) : null), [w]),
        [B, G] = l.useState(!1),
        H = l.useCallback((e) => {
            e && G(!0);
        }, []),
        V = (0, c.O)(H);
    l.useEffect(() => {
        B &&
            (0, p.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [B, n]);
    let z = (0, j.TK)(n.id, (0, x.PL)(!0, !1)),
        W = (0, j.TK)(n.id, (0, x.LD)(A, !1)),
        K = z || W,
        Y = n.isVerified && n.isDiscoverable,
        X = (0, s.e7)([T.Z, N.Z], () => N.Z.getChannel(T.Z.getChannelId())),
        q = (0, s.e7)([S.Z], () => (null == X ? void 0 : X.isPrivate()) || S.Z.can(P.Plq.SEND_MESSAGES, X)),
        { analyticsLocations: Q } = (0, h.ZP)(m.Z.APP_OAUTH2_LINK_EMBED),
        J = async () => {
            if (null != u)
                try {
                    await (0, f.W)({
                        appId: n.id,
                        botId: u,
                        analyticsLocations: Q
                    });
                } catch (e) {}
        },
        { enabled: $ } = R.G.useExperiment({ location: 'ApplicationOAuth2Embed' });
    return $
        ? (0, i.jsx)(L.O, {
              app: n,
              embedUrl: d
          })
        : (0, i.jsxs)('div', {
              ref: V,
              className: M.embedContainer,
              children: [
                  (0, i.jsx)(U, {
                      application: n,
                      iconUrl: y
                  }),
                  (0, i.jsx)('img', {
                      className: M.icon,
                      alt: n.name,
                      src: null != y ? y : D,
                      'aria-hidden': !0,
                      draggable: !1
                  }),
                  (0, i.jsxs)('div', {
                      className: M.body,
                      children: [
                          (0, i.jsxs)('div', {
                              className: M.details,
                              children: [
                                  (0, i.jsx)(o.X6q, {
                                      variant: 'heading-lg/bold',
                                      color: 'interactive-active',
                                      children: Z
                                  }),
                                  null != F &&
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: F
                                      })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: M.buttonContainer,
                              children: [
                                  E &&
                                      (0, i.jsx)(o.zxk, {
                                          color: o.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: o.zxk.Sizes.MEDIUM,
                                          onClick: J,
                                          children: k.intl.string(k.t.RscU7O)
                                      }),
                                  (K || Y) &&
                                      q &&
                                      (0, i.jsx)(o.zxk, {
                                          color: E ? o.zxk.Colors.PRIMARY : o.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: o.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              var e;
                                              r.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || K
                                                  ? (0, g.X)(n.id)
                                                  : (0, v.dx)({
                                                        guildId: A,
                                                        view: C.eN.APPLICATION,
                                                        applicationId: n.id,
                                                        entrypoint: { name: C.n3.OAUTH2_EMBED }
                                                    });
                                          },
                                          children: k.intl.string(k.t.fbcCzc)
                                      }),
                                  !E &&
                                      !K &&
                                      (0, i.jsx)(o.zxk, {
                                          color: o.zxk.Colors.PRIMARY,
                                          type: 'button',
                                          size: o.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              _.ZP.trackWithMetadata(P.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                                  (0, j.LO)({
                                                      applicationId: n.id,
                                                      customInstallUrl: n.customInstallUrl,
                                                      installParams: n.installParams,
                                                      integrationTypesConfig: n.integrationTypesConfig,
                                                      guildId: A,
                                                      source: 'app_oauth2_link_embed'
                                                  });
                                          },
                                          children: k.intl.string(k.t.NgXl3N)
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
        l = (0, d.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        a = (0, E.ZP)(n, ''),
        r = t.bot,
        s = null,
        o = {};
    if ((0, g.ye)(t))
        s = (0, i.jsx)(u.Z, {
            imageBackground: l,
            applicationName: t.name,
            imageClassName: M.bannerImage,
            imageNotFoundClassName: M.bannerImage
        });
    else if ((null == r ? void 0 : r.banner) != null) {
        let e = (0, A.aN)({
            id: r.id,
            banner: r.banner,
            size: 280,
            canAnimate: !1
        });
        s = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: M.bannerImage
        });
    } else o = { backgroundColor: a };
    return (0, i.jsx)('div', {
        className: M.banner,
        style: o,
        children: s
    });
}
