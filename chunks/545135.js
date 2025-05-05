n.d(t, { default: () => k });
var i = n(255367);
n(73800);
var r = n(512722),
    l = n.n(r),
    s = n(442837),
    o = n(481060),
    a = n(239091),
    c = n(100527),
    u = n(906732),
    d = n(299206),
    g = n(894059),
    b = n(340541),
    p = n(423589),
    f = n(837949),
    S = n(122074),
    O = n(314897),
    h = n(984933),
    E = n(594174),
    y = n(976192),
    j = n(904483),
    _ = n(429824),
    N = n(919815),
    P = n(858822),
    v = n(993356),
    m = n(58338),
    x = n(930538),
    A = n(422525),
    L = n(522762),
    I = n(466330),
    Z = n(981631),
    D = n(388032);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { guild: t, onSelect: r, hideSettings: c } = e,
        u = t.id,
        w = h.ZP.getDefaultChannel(u),
        { entrypoints: k } = (0, b._k)({ location: 'guild_context_menu' }),
        G = (0, s.e7)(
            [E.default],
            () => {
                let e = E.default.getCurrentUser();
                return l()(null != e, 'GuildContextMenu: user cannot be undefined'), t.isOwner(e);
            },
            [t]
        ),
        U = (0, I.Z)({
            guild: t,
            source: Z.t4x.GUILD_CONTEXT_MENU,
            channel: k ? null : w
        }),
        C = (0, L.Z)(u),
        R = (0, P.Z)(t),
        B = (0, v.Z)(t),
        Y = (0, A.Z)(t),
        Q = (0, y.Z)({
            guildId: t.id,
            userId: O.default.getId(),
            analyticsLocation: {
                page: Z.ZY5.GUILD_CHANNEL,
                section: Z.jXE.CHAT_USERNAME,
                object: Z.qAy.CONTEXT_MENU_ITEM
            }
        }),
        F = (0, j.Z)(t),
        H = (0, g.Z)(t.id),
        V = (0, d.Z)({
            id: t.id,
            label: D.intl.string(D.t['94lLDw'])
        }),
        q = (0, N.Z)(t, { section: Z.jXE.GUILD_LIST }),
        W = (0, f.Z)(t.id),
        X = (0, m.Z)(t.id),
        K = (0, S.ng)(t.id, !1),
        z = (0, _.Z)(t),
        J = (0, p.Mn)('GuildContextMenu'),
        $ = (0, x.p)(t);
    function ee() {
        (0, o.ZDy)(async () => {
            let { default: e } = await n.e('53961').then(n.bind(n, 402979));
            return (n) => (0, i.jsx)(e, T(M({}, n), { guild: t }));
        });
    }
    return t.hasFeature(Z.oNc.HUB)
        ? (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': D.intl.string(D.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          U,
                          (0, i.jsx)(o.sNh, {
                              id: 'privacy',
                              label: D.intl.string(D.t.IlFwwc),
                              action: () =>
                                  (0, o.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('94342'), n.e('68856'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('15483'), n.e('2900'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('27458'), n.e('78900'), n.e('74028'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('44114'), n.e('11252'), n.e('30588'), n.e('43498'), n.e('92241')]).then(n.bind(n, 241420));
                                      return (n) => (0, i.jsx)(e, T(M({}, n), { guild: t }));
                                  })
                          }),
                          Q
                      ]
                  }),
                  G
                      ? null
                      : (0, i.jsx)(o.kSQ, {
                            children: (0, i.jsx)(o.sNh, {
                                id: 'leave-guild',
                                label: D.intl.string(D.t.Dv8gFR),
                                action: ee,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(o.kSQ, { children: V })
              ]
          })
        : (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': D.intl.string(D.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsx)(o.kSQ, { children: q }),
                  (0, i.jsx)(o.kSQ, { children: U }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [R, J || __OVERLAY__ ? null : B, J && !__OVERLAY__ ? X : null, K, C, W]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          c ? null : Y,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(o.sNh, {
                                    id: 'privacy',
                                    label: D.intl.string(D.t.BayiAg),
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('94342'), n.e('68856'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('15483'), n.e('2900'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('27458'), n.e('78900'), n.e('74028'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('44114'), n.e('11252'), n.e('30588'), n.e('43498'), n.e('92241')]).then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, T(M({}, n), { guild: t }));
                                        })
                                }),
                          Q
                      ]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [F, H]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          z,
                          !G &&
                              (0, i.jsx)(o.sNh, {
                                  id: 'leave-guild',
                                  label: D.intl.string(D.t.J2TBi4),
                                  action: ee,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(o.kSQ, { children: $ }),
                  (0, i.jsx)(o.kSQ, { children: V })
              ]
          });
}
function k(e) {
    let { analyticsLocations: t } = (0, u.ZP)(c.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(w, M({}, e))
    });
}
