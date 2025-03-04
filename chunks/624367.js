n.d(t, { Z: () => P }), n(47120), n(266796), n(566702);
var r = n(200651);
n(192379);
var i = n(373793),
    a = n(399606),
    o = n(477690),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(606192),
    p = n(213459),
    m = n(321231),
    f = n(230171),
    h = n(835473),
    g = n(749681),
    _ = n(258971),
    b = n(914010),
    v = n(624138),
    y = n(135431),
    x = n(500832),
    E = n(365415),
    O = n(147865),
    j = n(778569),
    N = n(50523),
    C = n(49898),
    I = n(388032),
    S = n(587494);
let T = (0, v.Mg)(o.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function P(e) {
    var t, n, o, v;
    let { applicationId: P, customId: A, referrerId: w, embedUrl: Z, linkId: k } = e,
        { analyticsLocations: R } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [D] = (0, h.Z)([P]),
        L = (0, a.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        M = null == D ? void 0 : null === (t = D.bot) || void 0 === t ? void 0 : t.id,
        W = null != D && (0, d.ye)(D),
        F = (0, O.ZP)(null !== (o = null == D ? void 0 : D.maxParticipants) && void 0 !== o ? o : 0),
        U = (0, j.Z)({
            applicationId: P,
            size: T,
            names: ['embedded_cover']
        }),
        B = null !== (v = null == D ? void 0 : D.id) && void 0 !== v ? v : '0',
        G = (0, y.TK)(B, (0, p.PL)(!0, !1)),
        H = (0, y.TK)(B, (0, p.LD)(L, !1)),
        V = async () => {
            if (null != M && (null == D ? void 0 : D.id) != null)
                try {
                    await (0, u.W)({
                        appId: D.id,
                        botId: M,
                        analyticsLocations: R,
                        customId: A,
                        referrerId: w
                    });
                } catch (e) {}
        },
        { enabled: z } = m.G.useExperiment({ location: 'ActivityBookmarkEmbed' }),
        K = (0, x._)(k),
        { data: Y, error: X } = (0, E.h)(null == D ? void 0 : D.id, K);
    return null == D || !1 === W
        ? null
        : null != k && null == X
          ? null == Y
              ? null
              : (0, r.jsx)(N.b, {
                    application: D,
                    customId: A,
                    customLink: Y,
                    embedUrl: Z,
                    referrerId: w
                })
          : z
            ? (0, r.jsx)(c.Gt, {
                  value: R,
                  children: (0, r.jsx)(f.O, {
                      app: D,
                      embedUrl: Z,
                      linkType: f.U.ACTIVITY,
                      activityCustomId: A,
                      activityReferrerId: w
                  })
              })
            : (0, r.jsx)(c.Gt, {
                  value: R,
                  children: (0, r.jsxs)('div', {
                      className: S.container,
                      children: [
                          (0, r.jsx)('div', {
                              className: S.imgContainer,
                              children: (0, r.jsx)('img', {
                                  className: S.img,
                                  alt: D.name,
                                  src: U.url
                              })
                          }),
                          (0, r.jsxs)('div', {
                              className: S.content,
                              children: [
                                  (0, r.jsx)(l.X6q, {
                                      className: S.heading,
                                      variant: 'heading-xl/semibold',
                                      children: D.name
                                  }),
                                  (0, r.jsx)(l.X6q, {
                                      className: S.description,
                                      variant: 'heading-sm/medium',
                                      children: null === (n = D.description) || void 0 === n ? void 0 : n.trim()
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: S.cta,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: S.maxParticipants,
                                              children: [
                                                  (0, r.jsx)(l.BFJ, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: S.peopleIcon
                                                  }),
                                                  (0, r.jsx)(l.Text, {
                                                      variant: 'text-xs/semibold',
                                                      children: F
                                                  })
                                              ]
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: S.buttonWrapper,
                                              children: [
                                                  null != D &&
                                                      (0, r.jsx)(l.zxk, {
                                                          onClick: () => {
                                                              var e;
                                                              null != D &&
                                                                  (i.Y.USER_INSTALL in (null !== (e = D.integrationTypesConfig) && void 0 !== e ? e : {}) || G || H
                                                                      ? (0, d.X)(D.id)
                                                                      : (0, g.transitionToGlobalDiscovery)({
                                                                            tab: C.GlobalDiscoveryTab.APPS,
                                                                            applicationId: D.id,
                                                                            newSessionState: {
                                                                                entrypoint: { name: _.xF.OAUTH2_EMBED },
                                                                                guildId: L
                                                                            }
                                                                        }));
                                                          },
                                                          className: S.button,
                                                          color: l.Ttl.PRIMARY,
                                                          children: I.NW.string(I.t.fbcCzc)
                                                      }),
                                                  (0, r.jsx)(l.zxk, {
                                                      onClick: V,
                                                      className: S.button,
                                                      color: l.Ttl.GREEN,
                                                      children: I.NW.string(I.t.RscU7O)
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              });
}
