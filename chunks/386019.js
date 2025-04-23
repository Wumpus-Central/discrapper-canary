n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(896449),
    c = n(960870),
    u = n(510659),
    d = n(848966),
    f = n(388032);
function _(e) {
    var t;
    let { children: n, user: _, activity: p, entry: h, display: m, onSelect: g, onClose: E, appContext: b, targetElementRef: y } = e,
        [v, O] = i.useState(!1),
        { analyticsLocations: I } = (0, s.ZP)(o.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        S = (0, c.Z)({
            display: m,
            user: _,
            activity: p,
            entry: h,
            analyticsLocations: I
        }),
        T = (0, u.yi)(),
        A = null != (t = null == T ? void 0 : T.interactionPopoutTargetRef) ? t : void 0,
        N = (0, d.Z)({
            entry: h,
            activity: p,
            user: _,
            display: m,
            onClose: E,
            onAction: S,
            isMenuOpen: v,
            appContext: b
        });
    return 0 === N.length || _.bot
        ? null
        : (0, r.jsx)(a.yRy, {
              targetElementRef: null != y ? y : A,
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  S({ action: 'OPEN_MENU' }), O(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)('div', {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(a.v2r, {
                          navId: l.N,
                          onClose: () => {
                              t(), O(!1);
                          },
                          'aria-label': f.intl.string(f.t.PlAQz8),
                          onSelect: g,
                          children: (0, r.jsx)(a.kSQ, { children: N })
                      })
                  });
              },
              children: n
          });
}
