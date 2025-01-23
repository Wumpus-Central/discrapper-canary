n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(778569),
    d = n(182906),
    m = n(100527),
    h = n(367907),
    f = n(906732),
    p = n(213609),
    _ = n(783097),
    g = n(606192),
    E = n(213459),
    C = n(132871),
    I = n(147890),
    x = n(220082),
    N = n(240991),
    v = n(592125),
    T = n(496675),
    S = n(944486),
    A = n(914010),
    b = n(768581),
    j = n(135431),
    R = n(728345),
    Z = n(812206),
    P = n(321231),
    L = n(230171),
    y = n(981631),
    O = n(388032),
    M = n(363637),
    k = n(413097),
    D = n(970952);
function U(e) {
    let { applicationId: t, embedUrl: n } = e,
        [l, a, s] = (0, o.Wu)([Z.Z], () => [Z.Z.getApplication(t), Z.Z.isFetchingApplication(t), Z.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == l && !a && !s && R.ZP.fetchApplication(t);
    }, [l, a, s, t]),
    null != l &&
        (0, j.Eb)({
            customInstallUrl: l.customInstallUrl,
            installParams: l.installParams,
            integrationTypesConfig: l.integrationTypesConfig
        }))
        ? (0, i.jsx)(B, {
              application: l,
              embedUrl: n
          })
        : null;
}
function B(e) {
    var t;
    let { application: n, embedUrl: u } = e,
        d = null === (t = n.bot) || void 0 === t ? void 0 : t.id,
        x = (0, _.ye)(n) && null != d,
        b = (0, o.e7)([A.Z], () => {
            var e;
            return null !== (e = A.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: R,
            name: Z,
            description: U
        } = r.useMemo(
            () =>
                (0, _.sl)(n, {
                    fakeAppIconURL: k,
                    size: 56
                }),
            [n]
        ),
        B = r.useMemo(() => (null != U ? (0, N.parseBioReact)(U) : null), [U]),
        [F, G] = r.useState(!1),
        V = r.useCallback((e) => {
            e && G(!0);
        }, []),
        H = (0, c.O)(V);
    r.useEffect(() => {
        F &&
            (0, p.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [F, n]);
    let z = (0, j.TK)(n.id, (0, E.PL)(!0, !1)),
        W = (0, j.TK)(n.id, (0, E.LD)(b, !1)),
        K = z || W,
        Y = n.isVerified && n.isDiscoverable,
        X = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getChannelId())),
        Q = (0, o.e7)([T.Z], () => (null == X ? void 0 : X.isPrivate()) || T.Z.can(y.Plq.SEND_MESSAGES, X)),
        { analyticsLocations: q } = (0, f.ZP)(m.Z.APP_OAUTH2_LINK_EMBED),
        J = async () => {
            if (null != d)
                try {
                    await (0, g.W)({
                        appId: n.id,
                        botId: d,
                        analyticsLocations: q
                    });
                } catch (e) {}
        },
        { enabled: $ } = P.G.useExperiment({ location: 'ApplicationOAuth2Embed' });
    return $
        ? (0, i.jsx)(L.O, {
              app: n,
              embedUrl: u
          })
        : (0, i.jsxs)('div', {
              ref: H,
              className: M.embedContainer,
              children: [
                  (0, i.jsx)(w, {
                      application: n,
                      iconUrl: R
                  }),
                  (0, i.jsx)('img', {
                      className: M.icon,
                      alt: n.name,
                      src: null != R ? R : D,
                      'aria-hidden': !0,
                      draggable: !1
                  }),
                  (0, i.jsxs)('div', {
                      className: M.body,
                      children: [
                          (0, i.jsxs)('div', {
                              className: M.details,
                              children: [
                                  (0, i.jsx)(s.Heading, {
                                      variant: 'heading-lg/bold',
                                      color: 'interactive-active',
                                      children: Z
                                  }),
                                  null != B &&
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: B
                                      })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: M.buttonContainer,
                              children: [
                                  x &&
                                      (0, i.jsx)(s.Button, {
                                          color: s.Button.Colors.BRAND,
                                          type: 'button',
                                          size: s.Button.Sizes.MEDIUM,
                                          onClick: J,
                                          children: O.intl.string(O.t.RscU7O)
                                      }),
                                  (K || Y) &&
                                      Q &&
                                      (0, i.jsx)(s.Button, {
                                          color: x ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                          type: 'button',
                                          size: s.Button.Sizes.MEDIUM,
                                          onClick: () => {
                                              var e;
                                              a.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || K
                                                  ? (0, _.X)(n.id)
                                                  : (0, I.dx)({
                                                        guildId: b,
                                                        view: C.eN.APPLICATION,
                                                        applicationId: n.id,
                                                        entrypoint: { name: C.n3.OAUTH2_EMBED }
                                                    });
                                          },
                                          children: O.intl.string(O.t.fbcCzc)
                                      }),
                                  !x &&
                                      !K &&
                                      (0, i.jsx)(s.Button, {
                                          color: s.Button.Colors.PRIMARY,
                                          type: 'button',
                                          size: s.Button.Sizes.MEDIUM,
                                          onClick: () => {
                                              h.ZP.trackWithMetadata(y.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                                  (0, j.LO)({
                                                      applicationId: n.id,
                                                      customInstallUrl: n.customInstallUrl,
                                                      installParams: n.installParams,
                                                      integrationTypesConfig: n.integrationTypesConfig,
                                                      guildId: b,
                                                      source: 'app_oauth2_link_embed'
                                                  });
                                          },
                                          children: O.intl.string(O.t.NgXl3N)
                                      })
                              ]
                          })
                      ]
                  })
              ]
          });
}
function w(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, u.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, x.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, _.ye)(t))
        o = (0, i.jsx)(d.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: M.bannerImage,
            imageNotFoundClassName: M.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, b.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: M.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: M.banner,
        style: s,
        children: o
    });
}
