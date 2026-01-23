r.d(t, {
    default: () => f,
});
var n = r(627968);
r(64700);
var o = r(417597),
    c = r(397927),
    i = r(442433),
    a = r(58149),
    l = r(576705),
    s = r(954571),
    p = r(147036),
    b = r(957565),
    O = r(634654),
    u = r(652215),
    y = r(746080),
    d = r(985018);

function f(e) {
    let { guild: t, onSelect: r } = e,
        f = (0, o.bG)([l.A], () => null != t && l.A.can(u.xBc.ADMINISTRATOR, t));
    return (0, n.jsx)(c.W1t, {
        "data-menu-migration-ready": !0,
        navId: "guild-shop-context",
        "aria-label": d.intl.string(d.t.g3KvYF),
        onClose: i.Z_,
        onSelect: r,
        children: (0, n.jsx)(c.rXV, {
            children: (0, n.jsx)(c.Drp, {
                id: "role-subscription-copy-link",
                label: d.intl.string(d.t.WqhZss),
                action: () => {
                    var e, r;
                    s.default.track(
                        u.HAw.GUILD_SHOP_COPY_LINK,
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, (0, a.H$)(t.id))),
                        (r = r =
                            {
                                is_admin_or_owner: f,
                                copy_location: O.lJ.CHANNEL_ROW_CONTEXT_MENU,
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
                        e),
                    ),
                        (0, b.C)((0, p.n)(t.id, y.VV.GUILD_SHOP));
                },
            }),
        }),
    });
}
