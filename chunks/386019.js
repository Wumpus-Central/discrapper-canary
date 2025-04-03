n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(960870),
    c = n(510659),
    u = n(848966),
    d = n(388032);
function f(e) {
    var t;
    let { children: n, user: f, activity: _, entry: p, display: h, onSelect: m, onClose: g, appContext: E } = e,
        [b, y] = i.useState(!1),
        { analyticsLocations: v } = (0, s.ZP)(a.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        O = (0, l.Z)({
            display: h,
            user: f,
            activity: _,
            entry: p,
            analyticsLocations: v
        }),
        I = (0, c.yi)(),
        S = (0, u.Z)({
            entry: p,
            activity: _,
            user: f,
            display: h,
            onClose: g,
            onAction: O,
            isMenuOpen: b,
            appContext: E
        });
    return 0 === S.length || f.bot
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: null != (t = null == I ? void 0 : I.interactionPopoutTargetRef) ? t : void 0,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  O({ action: 'OPEN_MENU' }), y(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)('div', {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(o.v2r, {
                          navId: 'content-inventory-context',
                          onClose: () => {
                              t(), y(!1);
                          },
                          'aria-label': d.NW.string(d.t.PlAQz8),
                          onSelect: m,
                          children: (0, r.jsx)(o.kSQ, { children: S })
                      })
                  });
              },
              children: n
          });
}
