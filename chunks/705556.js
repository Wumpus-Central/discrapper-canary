n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(549879),
    s = n(300284),
    l = n(314897),
    c = n(430824),
    u = n(785717),
    d = n(475413),
    f = n(388032),
    _ = n(206435);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { user: t, guildId: n, fullWidth: p, appContext: m, onClose: g } = e,
        E = (0, i.e7)([l.default], () => l.default.getId() === t.id),
        b = (0, i.e7)([c.Z], () => (null != n ? c.Z.getGuild(n) : null)),
        y = (0, s.Z)({ guild: b }),
        v = (0, s.Z)({}),
        { trackUserProfileAction: O } = (0, u.KZ)();
    return E
        ? null == b
            ? (0, r.jsx)(d.tG, {
                  action: 'EDIT_PROFILE',
                  text: f.NW.string(f.t.s5vZlZ),
                  icon: o.vdY,
                  autoFocus: !0,
                  fullWidth: p,
                  onClick: () => {
                      null == g || g(), v(), (0, a.i)(m);
                  }
              })
            : (0, r.jsx)(o.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(o.v2r, {
                          className: _.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == g || g();
                          },
                          'aria-label': f.NW.string(f.t.AXIHpa),
                          children: [
                              (0, r.jsx)(o.sNh, {
                                  id: 'edit-server-profile',
                                  label: f.NW.string(f.t['PKQB/P']),
                                  subtext: f.NW.string(f.t.VYHWKC),
                                  action: () => {
                                      O({ action: 'EDIT_GUILD_PROFILE' }), y(), (0, a.i)(m);
                                  }
                              }),
                              (0, r.jsx)(o.sNh, {
                                  id: 'edit-main-profile',
                                  label: f.NW.string(f.t.HmFaFB),
                                  subtext: f.NW.string(f.t['+EERMj']),
                                  action: () => {
                                      O({ action: 'EDIT_PROFILE' }), v(), (0, a.i)(m);
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          d.tG,
                          h(
                              {
                                  text: f.NW.string(f.t.s5vZlZ),
                                  icon: o.vdY,
                                  autoFocus: !0,
                                  fullWidth: p
                              },
                              e
                          )
                      )
              })
        : null;
}
