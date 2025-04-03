n.d(t, { default: () => C });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    c = n(100527),
    u = n(906732),
    d = n(299206),
    g = n(894059),
    b = n(423589),
    p = n(837949),
    f = n(122074),
    S = n(314897),
    N = n(984933),
    O = n(594174),
    E = n(241851),
    h = n(94953),
    y = n(976192),
    j = n(904483),
    _ = n(429824),
    P = n(919815),
    v = n(858822),
    A = n(993356),
    m = n(58338),
    x = n(930538),
    L = n(422525),
    I = n(522762),
    Z = n(466330),
    M = n(981631),
    T = n(388032);
function D(e) {
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
function G(e, t) {
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
        w = N.ZP.getDefaultChannel(u),
        C = (0, l.e7)(
            [O.default],
            () => {
                let e = O.default.getCurrentUser();
                return s()(null != e, 'GuildContextMenu: user cannot be undefined'), t.isOwner(e);
            },
            [t]
        ),
        U = (0, Z.Z)({
            guild: t,
            source: M.t4x.GUILD_CONTEXT_MENU,
            channel: w
        }),
        k = (0, I.Z)(u),
        R = (0, v.Z)(t),
        W = (0, A.Z)(t),
        B = (0, L.Z)(t),
        Y = (0, y.Z)({
            guildId: t.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: M.ZY5.GUILD_CHANNEL,
                section: M.jXE.CHAT_USERNAME,
                object: M.qAy.CONTEXT_MENU_ITEM
            }
        }),
        Q = (0, h.Z)({
            guildId: t.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: M.ZY5.GUILD_CHANNEL,
                section: M.jXE.CHAT_USERNAME,
                object: M.qAy.CONTEXT_MENU_ITEM
            }
        }),
        F = (0, j.Z)(t),
        H = (0, g.Z)(t.id),
        V = (0, d.Z)({
            id: t.id,
            label: T.NW.string(T.t['94lLDw'])
        }),
        q = (0, P.Z)(t, { section: M.jXE.GUILD_LIST }),
        K = (0, p.Z)(t.id),
        X = (0, m.Z)(t.id),
        z = (0, f.ng)(t.id, !1),
        J = (0, _.Z)(t),
        $ = (0, b.Mn)('GuildContextMenu'),
        ee = (0, x.p)(t);
    function et() {
        (0, a.h7j)((e) => (0, i.jsx)(E.g, G(D({}, e), { guild: t })));
    }
    return t.hasFeature(M.oNc.HUB)
        ? (0, i.jsxs)(a.v2r, {
              navId: 'guild-context',
              onClose: o.Zy,
              'aria-label': T.NW.string(T.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          U,
                          (0, i.jsx)(a.sNh, {
                              id: 'privacy',
                              label: T.NW.string(T.t.IlFwwc),
                              action: () =>
                                  (0, a.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('6208'), n.e('85574'), n.e('68631'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('74669'), n.e('32'), n.e('19948'), n.e('50150'), n.e('82501')]).then(n.bind(n, 241420));
                                      return (n) => (0, i.jsx)(e, G(D({}, n), { guild: t }));
                                  })
                          }),
                          Y
                      ]
                  }),
                  C
                      ? null
                      : (0, i.jsx)(a.kSQ, {
                            children: (0, i.jsx)(a.sNh, {
                                id: 'leave-guild',
                                label: T.NW.string(T.t.Dv8gFR),
                                action: et,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(a.kSQ, { children: V })
              ]
          })
        : (0, i.jsxs)(a.v2r, {
              navId: 'guild-context',
              onClose: o.Zy,
              'aria-label': T.NW.string(T.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsx)(a.kSQ, { children: q }),
                  (0, i.jsx)(a.kSQ, { children: U }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [R, $ || __OVERLAY__ ? null : W, $ && !__OVERLAY__ ? X : null, z, k, K]
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          c ? null : B,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(a.sNh, {
                                    id: 'privacy',
                                    label: T.NW.string(T.t.BayiAg),
                                    action: () =>
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('6208'), n.e('85574'), n.e('68631'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('74669'), n.e('32'), n.e('19948'), n.e('50150'), n.e('82501')]).then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, G(D({}, n), { guild: t }));
                                        })
                                }),
                          Y,
                          Q
                      ]
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [F, H]
                  }),
                  (0, i.jsxs)(a.kSQ, {
                      children: [
                          J,
                          !C &&
                              (0, i.jsx)(a.sNh, {
                                  id: 'leave-guild',
                                  label: T.NW.string(T.t.J2TBi4),
                                  action: et,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(a.kSQ, { children: ee }),
                  (0, i.jsx)(a.kSQ, { children: V })
              ]
          });
}
function C(e) {
    let { analyticsLocations: t } = (0, u.ZP)(c.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(w, D({}, e))
    });
}
