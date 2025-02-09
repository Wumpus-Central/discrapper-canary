n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(549879),
    o = n(300284),
    l = n(314897),
    u = n(430824),
    c = n(785717),
    d = n(475413),
    f = n(388032),
    _ = n(808733);
function p(e) {
    let { user: t, guildId: n, fullWidth: p, appContext: h, onClose: m } = e,
        g = (0, r.e7)([l.default], () => l.default.getId() === t.id),
        E = (0, r.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
        v = (0, o.Z)({ guild: E }),
        y = (0, o.Z)({}),
        { trackUserProfileAction: I } = (0, c.KZ)();
    return g
        ? null == E
            ? (0, i.jsx)(d.tG, {
                  action: 'EDIT_PROFILE',
                  text: f.intl.string(f.t.s5vZlZ),
                  icon: a.vdY,
                  autoFocus: !0,
                  fullWidth: p,
                  onClick: () => {
                      null == m || m(), y(), (0, s.i)(h);
                  }
              })
            : (0, i.jsx)(a.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsxs)(a.v2r, {
                          className: _.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == m || m();
                          },
                          'aria-label': f.intl.string(f.t.AXIHpa),
                          children: [
                              (0, i.jsx)(a.sNh, {
                                  id: 'edit-server-profile',
                                  label: f.intl.string(f.t['PKQB/P']),
                                  subtext: f.intl.string(f.t.VYHWKC),
                                  action: () => {
                                      I({ action: 'EDIT_GUILD_PROFILE' }), v(), (0, s.i)(h);
                                  }
                              }),
                              (0, i.jsx)(a.sNh, {
                                  id: 'edit-main-profile',
                                  label: f.intl.string(f.t.HmFaFB),
                                  subtext: f.intl.string(f.t['+EERMj']),
                                  action: () => {
                                      I({ action: 'EDIT_PROFILE' }), y(), (0, s.i)(h);
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(d.tG, {
                          text: f.intl.string(f.t.s5vZlZ),
                          icon: a.vdY,
                          autoFocus: !0,
                          fullWidth: p,
                          ...e
                      })
              })
        : null;
}
