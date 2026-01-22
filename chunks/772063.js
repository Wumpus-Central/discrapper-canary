r.d(t, {
    default: () => p,
});
var n = r(627968);
r(64700);
var c = r(311907),
    o = r(397927),
    i = r(442433),
    a = r(576705),
    l = r(957565),
    s = r(652215),
    b = r(985018);
let p = function (e) {
    var t;
    let { guild: p, user: u, onSelect: d } = e,
        O = null != (t = null == p ? void 0 : p.id) ? t : s.dJq,
        y = (0, c.bG)([a.A], () => null != p && a.A.canManageUser(s.xBc.BAN_MEMBERS, u, p), [p, u]);
    return (0, n.jsx)(o.W1t, {
        navId: "member-application-context-menu",
        onClose: i.Z_,
        "aria-label": b.intl.string(b.t.liqwPJ),
        onSelect: d,
        children: (0, n.jsxs)(o.rXV, {
            children: [
                y &&
                    (0, n.jsx)(
                        o.Drp,
                        {
                            id: "ban",
                            label: b.intl.string(b.t["I+Cbum"]),
                            icon: o.wI0,
                            color: "danger",
                            action: () =>
                                (0, o.mMO)(async () => {
                                    let { default: e } = await r.e("80123").then(r.bind(r, 333179));
                                    return (t) => {
                                        var r, c;
                                        return (0, n.jsx)(
                                            e,
                                            ((r = (function (e) {
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
                                            })({}, t)),
                                            (c = c =
                                                {
                                                    guildId: O,
                                                    user: u,
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(c)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          r,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(c, e),
                                                      );
                                                  }),
                                            r),
                                        );
                                    };
                                }),
                        },
                        "ban",
                    ),
                (0, n.jsx)(
                    o.Drp,
                    {
                        id: "copyUserId",
                        label: "Copy User ID",
                        icon: o.L9S,
                        action: () => (0, l.C)(u.id),
                    },
                    "copyUserId",
                ),
            ],
        }),
    });
};
