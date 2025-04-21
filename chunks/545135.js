n.d(t, { default: () => k });
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    s = n(442837),
    o = n(481060),
    a = n(239091),
    c = n(100527),
    u = n(906732),
    d = n(299206),
    g = n(894059),
    b = n(434404),
    p = n(340541),
    S = n(423589),
    f = n(837949),
    O = n(122074),
    h = n(314897),
    E = n(984933),
    y = n(594174),
    j = n(976192),
    _ = n(904483),
    N = n(429824),
    P = n(919815),
    v = n(858822),
    m = n(993356),
    x = n(58338),
    A = n(930538),
    L = n(422525),
    I = n(522762),
    Z = n(466330),
    D = n(981631),
    M = n(388032);
function T(e) {
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
function w(e, t) {
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
        G = E.ZP.getDefaultChannel(u),
        { entrypoints: k } = (0, p._k)({ location: 'guild_context_menu' }),
        U = (0, s.e7)(
            [y.default],
            () => {
                let e = y.default.getCurrentUser();
                return l()(null != e, 'GuildContextMenu: user cannot be undefined'), t.isOwner(e);
            },
            [t]
        ),
        C = (0, Z.Z)({
            guild: t,
            source: D.t4x.GUILD_CONTEXT_MENU,
            channel: k ? null : G
        }),
        R = (0, I.Z)(u),
        B = (0, v.Z)(t),
        Y = (0, m.Z)(t),
        Q = (0, L.Z)(t),
        F = (0, j.Z)({
            guildId: t.id,
            userId: h.default.getId(),
            analyticsLocation: {
                page: D.ZY5.GUILD_CHANNEL,
                section: D.jXE.CHAT_USERNAME,
                object: D.qAy.CONTEXT_MENU_ITEM
            }
        }),
        H = (0, _.Z)(t),
        V = (0, g.Z)(t.id),
        q = (0, d.Z)({
            id: t.id,
            label: M.intl.string(M.t['94lLDw'])
        }),
        W = (0, P.Z)(t, { section: D.jXE.GUILD_LIST }),
        X = (0, f.Z)(t.id),
        K = (0, x.Z)(t.id),
        z = (0, O.ng)(t.id, !1),
        J = (0, N.Z)(t),
        $ = (0, S.Mn)('GuildContextMenu'),
        ee = (0, A.p)(t);
    function et() {
        b.Z.leaveGuild(t.id, !0);
    }
    return t.hasFeature(D.oNc.HUB)
        ? (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': M.intl.string(M.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          C,
                          (0, i.jsx)(o.sNh, {
                              id: 'privacy',
                              label: M.intl.string(M.t.IlFwwc),
                              action: () =>
                                  (0, o.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('15483'), n.e('48157'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('27458'), n.e('78900'), n.e('74028'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('44114'), n.e('11252'), n.e('40419'), n.e('26011'), n.e('17512')]).then(n.bind(n, 241420));
                                      return (n) => (0, i.jsx)(e, w(T({}, n), { guild: t }));
                                  })
                          }),
                          F
                      ]
                  }),
                  U
                      ? null
                      : (0, i.jsx)(o.kSQ, {
                            children: (0, i.jsx)(o.sNh, {
                                id: 'leave-guild',
                                label: M.intl.string(M.t.Dv8gFR),
                                action: et,
                                color: 'danger'
                            })
                        }),
                  (0, i.jsx)(o.kSQ, { children: q })
              ]
          })
        : (0, i.jsxs)(o.v2r, {
              navId: 'guild-context',
              onClose: a.Zy,
              'aria-label': M.intl.string(M.t.HpQykZ),
              onSelect: r,
              children: [
                  (0, i.jsx)(o.kSQ, { children: W }),
                  (0, i.jsx)(o.kSQ, { children: C }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [B, $ || __OVERLAY__ ? null : Y, $ && !__OVERLAY__ ? K : null, z, R, X]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          c ? null : Q,
                          __OVERLAY__
                              ? null
                              : (0, i.jsx)(o.sNh, {
                                    id: 'privacy',
                                    label: M.intl.string(M.t.BayiAg),
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('22878'), n.e('13351'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('15483'), n.e('48157'), n.e('17938'), n.e('93602'), n.e('49508'), n.e('22646'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('27458'), n.e('78900'), n.e('74028'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('44114'), n.e('11252'), n.e('40419'), n.e('26011'), n.e('17512')]).then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, w(T({}, n), { guild: t }));
                                        })
                                }),
                          F
                      ]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [H, V]
                  }),
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          J,
                          !U &&
                              (0, i.jsx)(o.sNh, {
                                  id: 'leave-guild',
                                  label: M.intl.string(M.t.J2TBi4),
                                  action: et,
                                  color: 'danger'
                              })
                      ]
                  }),
                  (0, i.jsx)(o.kSQ, { children: ee }),
                  (0, i.jsx)(o.kSQ, { children: q })
              ]
          });
}
function k(e) {
    let { analyticsLocations: t } = (0, u.ZP)(c.Z.CONTEXT_MENU);
    return (0, i.jsx)(u.Gt, {
        value: t,
        children: (0, i.jsx)(G, T({}, e))
    });
}
