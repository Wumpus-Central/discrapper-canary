r.d(t, {
    default: () => p,
});
var n = r(627968),
    o = r(64700),
    c = r(397927),
    a = r(442433),
    l = r(545059),
    u = r(810412),
    i = r(652215);

function p(e) {
    let { groupId: t, onSelect: p } = e,
        s = o.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await r.e("51080").then(r.bind(r, 519528));
                return (r) => {
                    var o, c;
                    return (0, n.jsx)(
                        e,
                        ((o = (function (e) {
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
                        })({}, r)),
                        (c = c =
                            {
                                groupId: t,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        o),
                    );
                };
            }),
                (0, a.Z_)();
        }, [t]),
        b = o.useCallback(() => {
            l.A.deleteGroup(t),
                (0, a.Z_)(),
                (0, u.YX)(i.uss.FRIENDS, {
                    type: u.Z5.GROUP_MANAGED,
                    value: u.IP.REMOVED_FROM_FAVORITES,
                });
        }, [t]);
    return (0, n.jsxs)(c.W1t, {
        "aria-label": "Group Context Menu",
        navId: "overlay-group-context-menu",
        onClose: a.Z_,
        onSelect: p,
        children: [
            (0, n.jsx)(c.Drp, {
                id: "edit",
                label: "Edit Group",
                action: s,
            }),
            (0, n.jsx)(c.Drp, {
                id: "delete",
                label: "Delete Group",
                action: b,
                color: "danger",
            }),
        ],
    });
}
