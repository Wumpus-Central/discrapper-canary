n.d(t, { Z: () => B }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    a = n(990547),
    l = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(778569),
    d = n(182906),
    p = n(100527),
    m = n(367907),
    f = n(906732),
    h = n(213609),
    g = n(915346),
    _ = n(783097),
    b = n(176412),
    x = n(213459),
    y = n(581364),
    E = n(220082),
    v = n(749681),
    O = n(258971),
    N = n(240991),
    j = n(592125),
    C = n(496675),
    I = n(944486),
    S = n(914010),
    T = n(768581),
    P = n(135431),
    A = n(728345),
    w = n(812206),
    Z = n(321231),
    k = n(230171),
    R = n(433534),
    D = n(981631),
    L = n(49898),
    M = n(388032),
    W = n(454351),
    U = n(413097),
    F = n(970952);
function B(e) {
    let { applicationId: t, embedUrl: n } = e,
        [a, l, s] = (0, o.Wu)([w.Z], () => [w.Z.getApplication(t), w.Z.isFetchingApplication(t), w.Z.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != a || l || s || A.ZP.fetchApplication(t);
    }, [a, l, s, t]),
    null != a &&
        (0, R.E)({
            customInstallUrl: a.customInstallUrl,
            installParams: a.installParams,
            integrationTypesConfig: a.integrationTypesConfig
        }))
        ? (0, r.jsx)(G, {
              application: a,
              embedUrl: n
          })
        : null;
}
function G(e) {
    var t;
    let { application: n, embedUrl: u } = e,
        d = null == (t = n.bot) ? void 0 : t.id,
        E = (0, _.ye)(n) && null != d,
        T = (0, o.e7)([S.Z], () => {
            var e;
            return null != (e = S.Z.getGuildId()) ? e : void 0;
        }),
        {
            iconURL: A,
            name: w,
            description: R
        } = i.useMemo(
            () =>
                (0, _.sl)(n, {
                    fakeAppIconURL: U,
                    size: 56
                }),
            [n]
        ),
        B = i.useMemo(() => (null != R ? (0, N.parseBioReact)(R) : null), [R]),
        [G, V] = i.useState(!1),
        z = i.useCallback((e) => {
            e && V(!0);
        }, []),
        K = (0, c.O)(z),
        Y = i.useCallback(() => {
            (0, h.h)({
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
        }, [n.id]);
    i.useEffect(() => {
        G && Y();
    }, [G, Y]);
    let X = (0, y.TK)(n.id, (0, x.PL)(!0, !1)),
        q = (0, y.TK)(n.id, (0, x.LD)(T, !1)),
        Q = X || q,
        J = n.isVerified && n.isDiscoverable,
        $ = (0, o.e7)([I.Z, j.Z], () => j.Z.getChannel(I.Z.getChannelId())),
        ee = (0, o.e7)([C.Z], () => (null == $ ? void 0 : $.isPrivate()) || C.Z.can(D.Plq.SEND_MESSAGES, $)),
        { analyticsLocations: et } = (0, f.ZP)(p.Z.APP_OAUTH2_LINK_EMBED),
        en = async () => {
            if (null != d)
                try {
                    await (0, g.W)({
                        appId: n.id,
                        botId: d,
                        analyticsLocations: et
                    });
                } catch (e) {}
        },
        { enabled: er } = Z.G.useExperiment({ location: 'ApplicationOAuth2Embed' });
    return er
        ? (0, r.jsx)(k.O, {
              app: n,
              embedUrl: u,
              linkType: k.U.OAUTH,
              onView: Y
          })
        : (0, r.jsxs)('div', {
              ref: K,
              className: W.embedContainer,
              children: [
                  (0, r.jsx)(H, {
                      application: n,
                      iconUrl: A
                  }),
                  (0, r.jsx)('img', {
                      className: W.icon,
                      alt: n.name,
                      src: null != A ? A : F,
                      'aria-hidden': !0,
                      draggable: !1
                  }),
                  (0, r.jsxs)('div', {
                      className: W.body,
                      children: [
                          (0, r.jsxs)('div', {
                              className: W.details,
                              children: [
                                  (0, r.jsx)(s.X6q, {
                                      variant: 'heading-lg/bold',
                                      color: 'interactive-active',
                                      children: w
                                  }),
                                  null != B &&
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: B
                                      })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: W.buttonContainer,
                              children: [
                                  E &&
                                      (0, r.jsx)(s.zxk, {
                                          color: s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: en,
                                          children: M.NW.string(M.t.RscU7O)
                                      }),
                                  (Q || J) &&
                                      ee &&
                                      (0, r.jsx)(s.zxk, {
                                          color: E ? s.zxk.Colors.PRIMARY : s.zxk.Colors.BRAND,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              var e;
                                              l.Y.USER_INSTALL in (null != (e = n.integrationTypesConfig) ? e : {}) || Q
                                                  ? (0, b.X)(n.id)
                                                  : (0, v.transitionToGlobalDiscovery)({
                                                        tab: L.GlobalDiscoveryTab.APPS,
                                                        applicationId: n.id,
                                                        newSessionState: {
                                                            guildId: T,
                                                            entrypoint: { name: O.xF.OAUTH2_EMBED }
                                                        }
                                                    });
                                          },
                                          children: M.NW.string(M.t.fbcCzc)
                                      }),
                                  !E &&
                                      !Q &&
                                      (0, r.jsx)(s.zxk, {
                                          color: s.zxk.Colors.PRIMARY,
                                          type: 'button',
                                          size: s.zxk.Sizes.MEDIUM,
                                          onClick: () => {
                                              m.ZP.trackWithMetadata(D.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                                  (0, P.L)({
                                                      applicationId: n.id,
                                                      customInstallUrl: n.customInstallUrl,
                                                      installParams: n.installParams,
                                                      integrationTypesConfig: n.integrationTypesConfig,
                                                      guildId: T,
                                                      source: 'app_oauth2_link_embed'
                                                  });
                                          },
                                          children: M.NW.string(M.t.NgXl3N)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function H(e) {
    let { application: t, iconUrl: n } = e,
        i = (0, u.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        a = (0, E.ZP)(n, ''),
        l = t.bot,
        o = null,
        s = {};
    if ((0, _.ye)(t))
        o = (0, r.jsx)(d.Z, {
            imageBackground: i,
            applicationName: t.name,
            imageClassName: W.bannerImage,
            imageNotFoundClassName: W.bannerImage
        });
    else if ((null == l ? void 0 : l.banner) != null) {
        let e = (0, T.aN)({
            id: l.id,
            banner: l.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, r.jsx)('img', {
            alt: t.name,
            src: e,
            className: W.bannerImage
        });
    } else s = { backgroundColor: a };
    return (0, r.jsx)('div', {
        className: W.banner,
        style: s,
        children: o
    });
}
