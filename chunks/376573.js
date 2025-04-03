r.d(t, { default: () => d });
var n = r(200651);
r(192379);
var o = r(852229),
    c = r(399606),
    i = r(481060),
    a = r(239091),
    s = r(367907),
    l = r(496675),
    p = r(626135),
    O = r(934415),
    b = r(629481),
    u = r(981631),
    y = r(176505),
    f = r(388032);
function d(e) {
    let { guild: t, onSelect: r } = e,
        d = (0, c.e7)([l.Z], () => null != t && l.Z.can(u.Plq.ADMINISTRATOR, t));
    return (0, n.jsx)(i.v2r, {
        navId: 'guild-shop-context',
        'aria-label': f.NW.string(f.t.g3KvYG),
        onClose: a.Zy,
        onSelect: r,
        children: (0, n.jsx)(i.kSQ, {
            children: (0, n.jsx)(i.sNh, {
                id: 'role-subscription-copy-link',
                label: f.NW.string(f.t.WqhZsr),
                action: () => {
                    var e, r;
                    p.default.track(
                        u.rMx.GUILD_SHOP_COPY_LINK,
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, (0, s.hH)(t.id))),
                        (r = r =
                            {
                                is_admin_or_owner: d,
                                copy_location: b.xv.CHANNEL_ROW_CONTEXT_MENU
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(r)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                              }),
                        e)
                    ),
                        (0, o.J)((0, O.wR)(t.id, y.oC.GUILD_SHOP));
                }
            })
        })
    });
}
