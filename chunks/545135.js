n.d(t, { default: () => w });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    c = n(100527),
    u = n(906732),
    d = n(299206),
    g = n(894059),
    b = n(423589),
    p = n(837949),
    S = n(122074),
    f = n(314897),
    O = n(984933),
    N = n(594174),
    h = n(241851),
    E = n(976192),
    y = n(904483),
    j = n(429824),
    _ = n(919815),
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
function G(e) {
    let { guild: t, onSelect: r, hideSettings: c } = e,
        u = t.id,
        G = O.ZP.getDefaultChannel(u),
        w = (0, l.e7)(
            [N.default],
            () => {
                let e = N.default.getCurrentUser();
                return s()(null != e, 'GuildContextMenu: user cannot be undefined'), t.isOwner(e);
            },
            [t]
        ),
        k = (0, I.Z)({
            guild: t,
            source: Z.t4x.GUILD_CONTEXT_MENU,
            channel: G
        }),
        U = (0, L.Z)(u),
        C = (0, P.Z)(t),
        R = (0, v.Z)(t),
        W = (0, A.Z)(t),
        B = (0, E.Z)({
            guildId: t.id,
            userId: f.default.getId(),
            analyticsLocation: {
                page: Z.ZY5.GUILD_CHANNEL,
                section: Z.jXE.CHAT_USERNAME,
                object: Z.qAy.CONTEXT_MENU_ITEM
            }
        }),
        Y = (0, y.Z)(t),
        Q = (0, g.Z)(t.id),
        F = (0, d.Z)({
            id: t.id,
            label: D.NW.string(D.t['94lLDw'])
        }),
        H = (0, _.Z)(t, { section: Z.jXE.GUILD_LIST }),
        V = (0, p.Z)(t.id),
        q = (0, m.Z)(t.id),
        K = (0, S.ng)(t.id, !1),
        X = (0, j.Z)(t),
        z = (0, b.Mn)('GuildContextMenu'),
        J = (0, x.p)(t);
    function $() {
        (0, o.h7j)((e) => (0, i.jsx)(h.g, T(M({}, e), { guild: t })));
    }
    return t.hasFeature(Z.oNc.HUB)
        ? (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': D.NW.string(D.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          k,
                          (0, i.jsx)(o.sNh, {
                              id: 'privacy',
                              label: D.NW.string(D.t.IlFwwc),
                              action: () =>
                                  (0, o.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('23491'), n.e('76540'), n.e('85574'), n.e('37658'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('27458'), n.e('41851'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('89730'), n.e('32'), n.e('19948'), n.e('38299'), n.e('82501')]).then(n.bind(n, 241420));
                                      return (n) => (0, i.jsx)(e, T(M({}, n), { guild: t }));
                                  })
                          }),
                          B
                      ]
                  }),
                  w
                      ? null
                      : (0, i.jsx)(o.kSQ, {
                            children: (0, i.jsx)(o.sNh, {
                                id: 'leave-guild',
                                label: D.NW.string(D.t.Dv8gFR),
                                action: $,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(o.kSQ, { children: F })
              ]
          })
        : (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': D.NW.string(D.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsx)(o.kSQ, { children: H }),
                  (0, i.jsx)(o.kSQ, { children: k }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [C, z || __OVERLAY__ ? null : R, z && !__OVERLAY__ ? q : null, K, U, V]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          c ? null : W,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(o.sNh, {
                                    id: 'privacy',
                                    label: D.NW.string(D.t.BayiAg),
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('23491'), n.e('76540'), n.e('85574'), n.e('37658'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('27458'), n.e('41851'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('89730'), n.e('32'), n.e('19948'), n.e('38299'), n.e('82501')]).then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, T(M({}, n), { guild: t }));
                                        })
                                }),
                          B
                      ]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [Y, Q]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          X,
                          !w &&
                              (0, i.jsx)(o.sNh, {
                                  id: 'leave-guild',
                                  label: D.NW.string(D.t.J2TBi4),
                                  action: $,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(o.kSQ, { children: J }),
                  (0, i.jsx)(o.kSQ, { children: F })
              ]
          });
}
function w(e) {
    let { analyticsLocations: t } = (0, u.ZP)(c.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(G, M({}, e))
    });
}
