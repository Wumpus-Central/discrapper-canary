n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(299206),
    c = n(785717),
    u = n(475413),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { user: t, viewProfileItem: n } = e,
        f = i.useRef(null),
        { trackUserProfileAction: p } = (0, c.KZ)(),
        { analyticsLocations: h } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
        m = [
            [n],
            [
                (0, l.Z)({
                    id: t.id,
                    label: d.NW.string(d.t['/AXYnJ']),
                    onSuccess: () =>
                        p({
                            action: 'COPY_USER_ID',
                            analyticsLocations: h
                        })
                })
            ]
        ];
    return m.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(o.yRy, {
              targetElementRef: f,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.v2r, {
                      navId: 'non-user-bot-profile-overflow-menu',
                      onSelect: void 0,
                      onClose: t,
                      'aria-label': d.NW.string(d.t.AXIHpa),
                      children: m.map((e, t) => (0, r.jsx)(o.kSQ, { children: e.map((e) => e) }, t))
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      u.oY,
                      _(
                          {
                              ref: f,
                              action: 'PRESS_OPTIONS',
                              icon: o.xhG,
                              tooltipText: d.NW.string(d.t.UKOtz8)
                          },
                          e
                      )
                  )
          });
}
