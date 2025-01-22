r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(100527),
    u = r(906732),
    c = r(960870),
    d = r(848966),
    f = r(388032);
function p(e) {
    let { children: n, user: r, activity: i, entry: p, display: h, onSelect: _, onClose: m } = e,
        [g, E] = o.useState(!1),
        { analyticsLocations: v } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        y = (0, c.Z)({
            display: h,
            user: r,
            activity: i,
            entry: p,
            analyticsLocations: v
        }),
        b = (0, d.Z)({
            entry: p,
            activity: i,
            user: r,
            display: h,
            onClose: m,
            onAction: y,
            isMenuOpen: g
        });
    return 0 === b.length || r.bot
        ? null
        : (0, a.jsx)(s.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  y({ action: 'OPEN_MENU' }), E(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(s.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          n(), E(!1);
                      },
                      'aria-label': f.intl.string(f.t.PlAQz8),
                      onSelect: _,
                      children: (0, a.jsx)(s.MenuGroup, { children: b })
                  });
              },
              children: n
          });
}
