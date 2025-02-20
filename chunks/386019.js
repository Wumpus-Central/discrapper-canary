n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(960870),
    c = n(848966),
    u = n(388032);
function d(e) {
    let { children: t, user: n, activity: d, entry: f, display: p, onSelect: _, onClose: h, appContext: m } = e,
        [g, E] = i.useState(!1),
        { analyticsLocations: v } = (0, s.ZP)(a.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        b = (0, l.Z)({
            display: p,
            user: n,
            activity: d,
            entry: f,
            analyticsLocations: v
        }),
        y = (0, c.Z)({
            entry: f,
            activity: d,
            user: n,
            display: p,
            onClose: h,
            onAction: b,
            isMenuOpen: g,
            appContext: m
        });
    return 0 === y.length || n.bot
        ? null
        : (0, r.jsx)(o.yRy, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  b({ action: 'OPEN_MENU' }), E(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)('div', {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(o.v2r, {
                          navId: 'content-inventory-context',
                          onClose: () => {
                              t(), E(!1);
                          },
                          'aria-label': u.NW.string(u.t.PlAQz8),
                          onSelect: _,
                          children: (0, r.jsx)(o.kSQ, { children: y })
                      })
                  });
              },
              children: t
          });
}
