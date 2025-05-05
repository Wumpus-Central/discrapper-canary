n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(549879),
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
        O = (0, s.Z)({}),
        { trackUserProfileAction: v } = (0, u.KZ)();
    return E
        ? null == b
            ? (0, r.jsx)(d.tG, {
                  action: 'EDIT_PROFILE',
                  text: f.intl.string(f.t.s5vZlZ),
                  icon: a.vdY,
                  autoFocus: !0,
                  fullWidth: p,
                  onClick: () => {
                      null == g || g(), O(), (0, o.i)(m);
                  }
              })
            : (0, r.jsx)(a.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(a.v2r, {
                          className: _.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == g || g();
                          },
                          'aria-label': f.intl.string(f.t.AXIHpa),
                          children: [
                              (0, r.jsx)(a.sNh, {
                                  id: 'edit-server-profile',
                                  label: f.intl.string(f.t['PKQB/P']),
                                  subtext: f.intl.string(f.t.VYHWKC),
                                  action: () => {
                                      v({ action: 'EDIT_GUILD_PROFILE' }), y(), (0, o.i)(m);
                                  }
                              }),
                              (0, r.jsx)(a.sNh, {
                                  id: 'edit-main-profile',
                                  label: f.intl.string(f.t.HmFaFB),
                                  subtext: f.intl.string(f.t['+EERMj']),
                                  action: () => {
                                      v({ action: 'EDIT_PROFILE' }), O(), (0, o.i)(m);
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
                                  text: f.intl.string(f.t.s5vZlZ),
                                  icon: a.vdY,
                                  autoFocus: !0,
                                  fullWidth: p
                              },
                              e
                          )
                      )
              })
        : null;
}
