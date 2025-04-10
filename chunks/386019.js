n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(896449),
    c = n(960870),
    u = n(510659),
    d = n(848966),
    f = n(388032);
function _(e) {
    var t;
    let { children: n, user: _, activity: p, entry: h, display: m, onSelect: g, onClose: E, appContext: b } = e,
        [y, v] = i.useState(!1),
        { analyticsLocations: O } = (0, s.ZP)(a.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        I = (0, c.Z)({
            display: m,
            user: _,
            activity: p,
            entry: h,
            analyticsLocations: O
        }),
        S = (0, u.yi)(),
        T = (0, d.Z)({
            entry: h,
            activity: p,
            user: _,
            display: m,
            onClose: E,
            onAction: I,
            isMenuOpen: y,
            appContext: b
        });
    return 0 === T.length || _.bot
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: null != (t = null == S ? void 0 : S.interactionPopoutTargetRef) ? t : void 0,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  I({ action: 'OPEN_MENU' }), v(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)('div', {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(o.v2r, {
                          navId: l.N,
                          onClose: () => {
                              t(), v(!1);
                          },
                          'aria-label': f.NW.string(f.t.PlAQz8),
                          onSelect: g,
                          children: (0, r.jsx)(o.kSQ, { children: T })
                      })
                  });
              },
              children: n
          });
}
