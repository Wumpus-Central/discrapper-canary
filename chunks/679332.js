n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(100527),
    a = n(906732),
    s = n(299206),
    l = n(785717),
    c = n(475413),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { user: t, viewProfileItem: n } = e,
        { trackUserProfileAction: d } = (0, l.KZ)(),
        { analyticsLocations: p } = (0, a.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        _ = [
            [n],
            [
                (0, s.Z)({
                    id: t.id,
                    label: u.NW.string(u.t['/AXYnJ']),
                    onSuccess: () =>
                        d({
                            action: 'COPY_USER_ID',
                            analyticsLocations: p
                        })
                })
            ]
        ];
    return _.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(i.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(i.v2r, {
                      navId: 'non-user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': u.NW.string(u.t.AXIHpa),
                      children: _.map((e, t) => (0, r.jsx)(i.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      c.oY,
                      f(
                          {
                              action: 'PRESS_OPTIONS',
                              icon: i.xhG,
                              tooltipText: u.NW.string(u.t.UKOtz8)
                          },
                          e
                      )
                  )
          });
}
