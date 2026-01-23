r.d(t, {
    default: () => u,
});
var n = r(627968),
    o = r(64700),
    c = r(397927),
    a = r(442433),
    i = r(545059);

function u(e) {
    let { groupId: t, onSelect: u } = e,
        l = o.useCallback(() => {
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
        p = o.useCallback(() => {
            i.A.deleteGroup(t), (0, a.Z_)();
        }, [t]);
    return (0, n.jsxs)(c.W1t, {
        "data-menu-migration-ready": !0,
        "aria-label": "Group Context Menu",
        navId: "group-context-menu",
        onClose: a.Z_,
        onSelect: u,
        children: [
            (0, n.jsx)(c.Drp, {
                id: "edit",
                label: "Edit Group",
                action: l,
            }),
            (0, n.jsx)(c.Drp, {
                id: "delete",
                label: "Delete Group",
                action: p,
                color: "danger",
            }),
        ],
    });
}
