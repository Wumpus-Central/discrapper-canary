n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(549879),
    l = n(300284),
    c = n(314897),
    u = n(430824),
    d = n(785717),
    f = n(475413),
    _ = n(388032),
    p = n(206435);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    let { user: t, guildId: n, fullWidth: h, appContext: g, onClose: E } = e,
        b = (0, a.e7)([c.default], () => c.default.getId() === t.id),
        y = (0, a.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        O = (0, l.Z)({ guild: y }),
        v = (0, l.Z)({}),
        { trackUserProfileAction: I } = (0, d.KZ)(),
        T = i.useRef(null);
    return b
        ? null == y
            ? (0, r.jsx)(f.tG, {
                  action: 'EDIT_PROFILE',
                  text: _.intl.string(_.t.s5vZlZ),
                  icon: o.vdY,
                  autoFocus: !0,
                  fullWidth: h,
                  onClick: () => {
                      null == E || E(), v(), (0, s.i)(g);
                  }
              })
            : (0, r.jsx)(o.yRy, {
                  targetElementRef: T,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsxs)(o.v2r, {
                          className: p.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == E || E();
                          },
                          'aria-label': _.intl.string(_.t.AXIHpa),
                          children: [
                              (0, r.jsx)(o.sNh, {
                                  id: 'edit-server-profile',
                                  label: _.intl.string(_.t['PKQB/P']),
                                  subtext: _.intl.string(_.t.VYHWKC),
                                  action: () => {
                                      I({ action: 'EDIT_GUILD_PROFILE' }), O(), (0, s.i)(g);
                                  }
                              }),
                              (0, r.jsx)(o.sNh, {
                                  id: 'edit-main-profile',
                                  label: _.intl.string(_.t.HmFaFB),
                                  subtext: _.intl.string(_.t['+EERMj']),
                                  action: () => {
                                      I({ action: 'EDIT_PROFILE' }), v(), (0, s.i)(g);
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, r.jsx)(
                          f.tG,
                          m(
                              {
                                  ref: T,
                                  text: _.intl.string(_.t.s5vZlZ),
                                  icon: o.vdY,
                                  autoFocus: !0,
                                  fullWidth: h
                              },
                              e
                          )
                      )
              })
        : null;
}
