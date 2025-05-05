r.d(t, { default: () => d });
var n = r(255367);
r(73800);
var o = r(399606),
    c = r(481060),
    i = r(239091),
    l = r(367907),
    a = r(496675),
    s = r(626135),
    p = r(934415),
    O = r(572004),
    b = r(629481),
    u = r(981631),
    y = r(176505),
    f = r(388032);
function d(e) {
    let { guild: t, onSelect: r } = e,
        d = (0, o.e7)([a.Z], () => null != t && a.Z.can(u.Plq.ADMINISTRATOR, t));
    return (0, n.jsx)(c.v2r, {
        navId: 'guild-shop-context',
        'aria-label': f.intl.string(f.t.g3KvYG),
        onClose: i.Zy,
        onSelect: r,
        children: (0, n.jsx)(c.kSQ, {
            children: (0, n.jsx)(c.sNh, {
                id: 'role-subscription-copy-link',
                label: f.intl.string(f.t.WqhZsr),
                action: () => {
                    var e, r;
                    s.default.track(
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
                        })({}, (0, l.hH)(t.id))),
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
                        (0, O.JG)((0, p.wR)(t.id, y.oC.GUILD_SHOP));
                }
            })
        })
    });
}
