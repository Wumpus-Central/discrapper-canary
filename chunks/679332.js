r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(100527),
    s = r(906732),
    l = r(299206),
    u = r(785717),
    c = r(475413),
    d = r(388032);
function f(e) {
    let { user: n, viewProfileItem: r } = e,
        { trackUserProfileAction: f } = (0, u.KZ)(),
        { analyticsLocations: p } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        h = [
            [r],
            [
                (0, l.Z)({
                    id: n.id,
                    label: d.intl.string(d.t['/AXYnJ']),
                    onSuccess: () =>
                        f({
                            action: 'COPY_USER_ID',
                            analyticsLocations: p
                        })
                })
            ]
        ];
    return h.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(a.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(a.Menu, {
                      navId: 'non-user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: n,
                      'aria-label': d.intl.string(d.t.AXIHpa),
                      children: h.map((e, n) => (0, i.jsx)(a.MenuGroup, { children: e.map((e) => e) }, n))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: a.MoreHorizontalIcon,
                      tooltipText: d.intl.string(d.t.UKOtz8),
                      ...e
                  })
          });
}
