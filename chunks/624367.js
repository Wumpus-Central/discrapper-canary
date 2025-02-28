n.d(t, { Z: () => T }), n(47120), n(266796), n(566702);
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
    m = n(132871),
    f = n(147890),
    h = n(321231),
    g = n(230171),
    _ = n(835473),
    b = n(914010),
    v = n(624138),
    y = n(135431),
    x = n(500832),
    O = n(365415),
    E = n(147865),
    j = n(778569),
    N = n(50523),
    C = n(388032),
    I = n(587494);
let S = (0, v.Mg)(o.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function T(e) {
    var t, n, o, v;
    let { applicationId: T, customId: P, referrerId: A, embedUrl: w, linkId: Z } = e,
        { analyticsLocations: k } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [R] = (0, _.Z)([T]),
        L = (0, a.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        D = null == R ? void 0 : null === (t = R.bot) || void 0 === t ? void 0 : t.id,
        M = null != R && (0, d.ye)(R),
        W = (0, E.ZP)(null !== (o = null == R ? void 0 : R.maxParticipants) && void 0 !== o ? o : 0),
        F = (0, j.Z)({
            applicationId: T,
            size: S,
            names: ['embedded_cover']
        }),
        U = null !== (v = null == R ? void 0 : R.id) && void 0 !== v ? v : '0',
        B = (0, y.TK)(U, (0, p.PL)(!0, !1)),
        G = (0, y.TK)(U, (0, p.LD)(L, !1)),
        H = async () => {
            if (null != D && (null == R ? void 0 : R.id) != null)
                try {
                    await (0, u.W)({
                        appId: R.id,
                        botId: D,
                        analyticsLocations: k,
                        customId: P,
                        referrerId: A
                    });
                } catch (e) {}
        },
        { enabled: V } = h.G.useExperiment({ location: 'ActivityBookmarkEmbed' }),
        z = (0, x._)(Z),
        { data: K, error: Y } = (0, O.h)(null == R ? void 0 : R.id, z);
    return null == R || !1 === M
        ? null
        : null != Z && null == Y
          ? null == K
              ? null
              : (0, r.jsx)(N.b, {
                    application: R,
                    customId: P,
                    customLink: K,
                    embedUrl: w,
                    referrerId: A
                })
          : V
            ? (0, r.jsx)(c.Gt, {
                  value: k,
                  children: (0, r.jsx)(g.O, {
                      app: R,
                      embedUrl: w,
                      linkType: g.U.ACTIVITY,
                      activityCustomId: P,
                      activityReferrerId: A
                  })
              })
            : (0, r.jsx)(c.Gt, {
                  value: k,
                  children: (0, r.jsxs)('div', {
                      className: I.container,
                      children: [
                          (0, r.jsx)('div', {
                              className: I.imgContainer,
                              children: (0, r.jsx)('img', {
                                  className: I.img,
                                  alt: R.name,
                                  src: F.url
                              })
                          }),
                          (0, r.jsxs)('div', {
                              className: I.content,
                              children: [
                                  (0, r.jsx)(l.X6q, {
                                      className: I.heading,
                                      variant: 'heading-xl/semibold',
                                      children: R.name
                                  }),
                                  (0, r.jsx)(l.X6q, {
                                      className: I.description,
                                      variant: 'heading-sm/medium',
                                      children: null === (n = R.description) || void 0 === n ? void 0 : n.trim()
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: I.cta,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: I.maxParticipants,
                                              children: [
                                                  (0, r.jsx)(l.BFJ, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: I.peopleIcon
                                                  }),
                                                  (0, r.jsx)(l.Text, {
                                                      variant: 'text-xs/semibold',
                                                      children: W
                                                  })
                                              ]
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: I.buttonWrapper,
                                              children: [
                                                  null != R &&
                                                      (0, r.jsx)(l.zxk, {
                                                          onClick: () => {
                                                              var e;
                                                              null != R &&
                                                                  (i.Y.USER_INSTALL in (null !== (e = R.integrationTypesConfig) && void 0 !== e ? e : {}) || B || G
                                                                      ? (0, d.X)(R.id)
                                                                      : (0, f.dx)({
                                                                            guildId: L,
                                                                            view: m.eN.APPLICATION,
                                                                            applicationId: R.id,
                                                                            entrypoint: { name: m.n3.OAUTH2_EMBED }
                                                                        }));
                                                          },
                                                          className: I.button,
                                                          color: l.Ttl.PRIMARY,
                                                          children: C.NW.string(C.t.fbcCzc)
                                                      }),
                                                  (0, r.jsx)(l.zxk, {
                                                      onClick: H,
                                                      className: I.button,
                                                      color: l.Ttl.GREEN,
                                                      children: C.NW.string(C.t.RscU7O)
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
