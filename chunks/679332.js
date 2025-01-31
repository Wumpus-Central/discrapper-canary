n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(299206),
    l = n(785717),
    u = n(475413),
    c = n(388032);
function d(e) {
    let { user: t, viewProfileItem: n } = e,
        { trackUserProfileAction: d } = (0, l.KZ)(),
        { analyticsLocations: f } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        _ = [
            [n],
            [
                (0, o.Z)({
                    id: t.id,
                    label: c.intl.string(c.t['/AXYnJ']),
                    onSuccess: () =>
                        d({
                            action: 'COPY_USER_ID',
                            analyticsLocations: f
                        })
                })
            ]
        ];
    return _.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(r.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(r.v2r, {
                      navId: 'non-user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': c.intl.string(c.t.AXIHpa),
                      children: _.map((e, t) => (0, i.jsx)(r.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, i.jsx)(u.oY, {
                      action: 'PRESS_OPTIONS',
                      icon: r.xhG,
                      tooltipText: c.intl.string(c.t.UKOtz8),
                      ...e
                  })
          });
}
