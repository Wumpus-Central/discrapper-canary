n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(896449),
    c = n(960870),
    u = n(510659),
    d = n(848966),
    f = n(388032);
function p(e) {
    var t;
    let {
            children: n,
            user: p,
            activity: _,
            entry: m,
            display: h,
            onSelect: g,
            onClose: E,
            appContext: b,
            targetElementRef: y,
        } = e,
        [O, v] = i.useState(!1),
        { analyticsLocations: S } = (0, s.ZP)(o.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        I = (0, c.Z)({
            display: h,
            user: p,
            activity: _,
            entry: m,
            analyticsLocations: S,
        }),
        T = (0, u.yi)(),
        C = i.useRef(null),
        A = null != (t = null == T ? void 0 : T.interactionPopoutTargetRef) ? t : C,
        N = (0, d.Z)({
            entry: m,
            activity: _,
            user: p,
            display: h,
            onClose: E,
            onAction: I,
            isMenuOpen: O,
            appContext: b,
        });
    return 0 === N.length || p.bot
        ? null
        : (0, r.jsx)(a.yRy, {
              targetElementRef: null != y ? y : A,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  I({ action: "OPEN_MENU" }), v(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)("div", {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, r.jsx)(a.v2r, {
                          navId: l.N,
                          onClose: () => {
                              t(), v(!1);
                          },
                          "aria-label": f.intl.string(f.t.PlAQz1),
                          onSelect: g,
                          children: (0, r.jsx)(a.kSQ, { children: N }),
                      }),
                  });
              },
              children: n,
          });
}
