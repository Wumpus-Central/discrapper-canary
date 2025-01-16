r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(300284),
    l = r(314897),
    u = r(430824),
    c = r(785717),
    d = r(475413),
    f = r(388032),
    _ = r(283946);
function h(e) {
    let { user: n, guildId: r, fullWidth: h, onClose: p } = e,
        m = (0, a.e7)([l.default], () => l.default.getId() === n.id),
        g = (0, a.e7)([u.Z], () => (null != r ? u.Z.getGuild(r) : null)),
        E = (0, o.Z)({ guild: g }),
        v = (0, o.Z)(),
        { trackUserProfileAction: I } = (0, c.KZ)();
    return m
        ? null == g
            ? (0, i.jsx)(d.tG, {
                  action: 'EDIT_PROFILE',
                  text: f.intl.string(f.t.s5vZlZ),
                  icon: s.PencilIcon,
                  autoFocus: !0,
                  fullWidth: h,
                  onClick: () => {
                      null == p || p(), v();
                  }
              })
            : (0, i.jsx)(s.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsxs)(s.Menu, {
                          className: _.popoutMenu,
                          onSelect: void 0,
                          navId: 'edit-profile-popout',
                          onClose: () => {
                              n(), null == p || p();
                          },
                          'aria-label': f.intl.string(f.t.AXIHpa),
                          children: [
                              (0, i.jsx)(s.MenuItem, {
                                  id: 'edit-server-profile',
                                  label: f.intl.string(f.t['PKQB/P']),
                                  subtext: f.intl.string(f.t.VYHWKC),
                                  action: () => {
                                      I({ action: 'EDIT_GUILD_PROFILE' }), E();
                                  }
                              }),
                              (0, i.jsx)(s.MenuItem, {
                                  id: 'edit-main-profile',
                                  label: f.intl.string(f.t.HmFaFB),
                                  subtext: f.intl.string(f.t['+EERMj']),
                                  action: () => {
                                      I({ action: 'EDIT_PROFILE' }), v();
                                  }
                              })
                          ]
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(d.tG, {
                          text: f.intl.string(f.t.s5vZlZ),
                          icon: s.PencilIcon,
                          autoFocus: !0,
                          fullWidth: h,
                          ...e
                      })
              })
        : null;
}
