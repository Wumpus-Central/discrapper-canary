n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(789020);
var i = n(200651);
n(192379);
var r = n(373793),
    l = n(399606),
    a = n(477690),
    o = n(481060),
    s = n(493683),
    c = n(100527),
    u = n(906732),
    d = n(213459),
    m = n(132871),
    h = n(147890),
    f = n(835473),
    p = n(914010),
    _ = n(585483),
    g = n(630388),
    E = n(624138),
    C = n(122613),
    I = n(147865),
    x = n(778569),
    N = n(981631),
    v = n(388032),
    T = n(258858);
let S = (0, E.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function A(e) {
    var t, n, a, E, A, b, j, R;
    let { applicationId: Z, customId: P, referrerId: L } = e,
        { analyticsLocations: y } = (0, u.ZP)(c.Z.ACTIVITY_BOOKMARK),
        [O] = (0, f.Z)([Z]),
        M = (0, l.e7)([p.Z], () => {
            var e;
            return null !== (e = p.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        k = null == O ? void 0 : null === (t = O.bot) || void 0 === t ? void 0 : t.id,
        D = (0, I.ZP)(null !== (A = null == O ? void 0 : O.maxParticipants) && void 0 !== A ? A : 0),
        B = (0, x.Z)({
            applicationId: Z,
            size: S,
            names: ['embedded_cover']
        }),
        U = null !== (b = null == O ? void 0 : O.id) && void 0 !== b ? b : 1 / 0,
        w = U in (null !== (j = null === (n = (0, d.PL)(!0, !1).result) || void 0 === n ? void 0 : n.sections) && void 0 !== j ? j : {}),
        F = U in (null !== (R = null === (a = (0, d.LD)(M, !1).result) || void 0 === a ? void 0 : a.sections) && void 0 !== R ? R : {}),
        G = async () => {
            if (null != k)
                try {
                    let e = await s.Z.openPrivateChannel(k);
                    await (0, C.Z)({
                        targetApplicationId: null == O ? void 0 : O.id,
                        channelId: e,
                        analyticsLocations: y,
                        customId: P,
                        referrerId: L
                    });
                } catch (e) {}
        };
    return null != O && (0, g.yE)(O.flags, N.udG.EMBEDDED)
        ? (0, i.jsx)(u.Gt, {
              value: y,
              children: (0, i.jsxs)('div', {
                  className: T.container,
                  children: [
                      (0, i.jsx)('div', {
                          className: T.imgContainer,
                          children: (0, i.jsx)('img', {
                              className: T.img,
                              alt: O.name,
                              src: B.url
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.content,
                          children: [
                              (0, i.jsx)(o.Heading, {
                                  className: T.heading,
                                  variant: 'heading-xl/semibold',
                                  children: O.name
                              }),
                              (0, i.jsx)(o.Heading, {
                                  className: T.description,
                                  variant: 'heading-sm/medium',
                                  children: null === (E = O.description) || void 0 === E ? void 0 : E.trim()
                              }),
                              (0, i.jsxs)('div', {
                                  className: T.cta,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: T.maxParticipants,
                                          children: [
                                              (0, i.jsx)(o.GroupIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: T.peopleIcon
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: 'text-xs/semibold',
                                                  children: D
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: T.buttonWrapper,
                                          children: [
                                              null != O &&
                                                  (0, i.jsx)(o.Button, {
                                                      onClick: () => {
                                                          var e;
                                                          if (null == O) return;
                                                          let t = w || F;
                                                          r.Y.USER_INSTALL in (null !== (e = O.integrationTypesConfig) && void 0 !== e ? e : {}) || t
                                                              ? _.S.dispatchToLastSubscribed(N.CkL.OPEN_APP_LAUNCHER, { applicationId: O.id })
                                                              : (0, h.goToAppDirectory)({
                                                                    guildId: M,
                                                                    view: m.ApplicationDirectoryViews.APPLICATION,
                                                                    applicationId: O.id,
                                                                    entrypoint: { name: m.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                                                });
                                                      },
                                                      className: T.button,
                                                      color: o.ButtonColors.PRIMARY,
                                                      children: v.intl.string(v.t.fbcCzc)
                                                  }),
                                              (0, i.jsx)(o.Button, {
                                                  onClick: G,
                                                  className: T.button,
                                                  color: o.ButtonColors.GREEN,
                                                  children: v.intl.string(v.t.RscU7O)
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          })
        : null;
}
