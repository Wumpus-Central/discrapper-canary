n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(300284),
    o = n(314897),
    l = n(430824),
    u = n(785717),
    c = n(475413),
    d = n(388032),
    f = n(283946);
function _(e) {
    let { user: t, guildId: n, fullWidth: _, onClose: p } = e,
        h = (0, r.e7)([o.default], () => o.default.getId() === t.id),
        m = (0, r.e7)([l.Z], () => (null != n ? l.Z.getGuild(n) : null)),
        g = (0, s.Z)({ guild: m }),
        E = (0, s.Z)(),
        { trackUserProfileAction: v } = (0, u.KZ)();
    return h
        ? null == m
            ? (0, i.jsx)(c.tG, {
                  action: 'EDIT_PROFILE',
                  text: d.intl.string(d.t.s5vZlZ),
                  icon: a.vdY,
                  autoFocus: !0,
                  fullWidth: _,
                  onClick: () => {
                      null == p || p(), E();
                  }
              })
            : (0, i.jsx)(a.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsxs)(a.v2r, {
                          className: f.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              t(), null == p || p();
                          },
                          'aria-label': d.intl.string(d.t.AXIHpa),
                          children: [
                              (0, i.jsx)(a.sNh, {
                                  id: 'edit-server-profile',
                                  label: d.intl.string(d.t['PKQB/P']),
                                  subtext: d.intl.string(d.t.VYHWKC),
                                  action: () => {
                                      v({ action: 'EDIT_GUILD_PROFILE' }), g();
                                  }
                              }),
                              (0, i.jsx)(a.sNh, {
                                  id: 'edit-main-profile',
                                  label: d.intl.string(d.t.HmFaFB),
                                  subtext: d.intl.string(d.t['+EERMj']),
                                  action: () => {
                                      v({ action: 'EDIT_PROFILE' }), E();
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(c.tG, {
                          text: d.intl.string(d.t.s5vZlZ),
                          icon: a.vdY,
                          autoFocus: !0,
                          fullWidth: _,
                          ...e
                      })
              })
        : null;
}
