n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(726542),
    o = n(842146),
    s = n(293177),
    l = n(349407),
    c = n(49012),
    u = n(202120),
    d = n(981631);
function _(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function p(e) {
    var t;
    let { platformType: _, location: p, overrideUrl: h, successRedirect: m } = e;
    return (_ === d.ABu.LEAGUE_OF_LEGENDS && (_ = d.ABu.RIOT_GAMES), _ === d.ABu.CRUNCHYROLL)
        ? void o.K([null != p ? p : 'unknown'])
        : _ === d.ABu.XBOX
          ? void l.K([null != p ? p : 'unknown'])
          : _ === d.ABu.PLAYSTATION || _ === d.ABu.PLAYSTATION_STAGING
            ? void s.K([null != p ? p : 'unknown'], _)
            : _ === d.ABu.DOMAIN
              ? void (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('64941').then(n.bind(n, 907053));
                    return (t) => (0, r.jsx)(e, f({ analyticsLocation: [null != p ? p : 'unknown'] }, t));
                })
              : (null == (t = a.Z.get(_)) ? void 0 : t.isFederated) === !0
                ? void (0, i.ZDy)(async () => {
                      let { default: e } = await n.e('54934').then(n.bind(n, 701460));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              f(
                                  {
                                      platformType: _,
                                      location: p,
                                      successRedirect: m
                                  },
                                  t
                              )
                          );
                  })
                : null != h
                  ? void (0, c.q)({
                        shouldConfirm: !0,
                        href: h,
                        onConfirm: () => {
                            (0, u.H)(
                                _,
                                {
                                    location: p,
                                    successRedirect: m
                                },
                                h
                            );
                        }
                    })
                  : void (0, u.H)(_, {
                        location: p,
                        successRedirect: m
                    });
}
