function r(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
(n.d(t, { S: () => i }), n(388685));
let i = (0, n(97519).U)((e) => ({
    itemTypeFilters: new Set(),
    colorFilters: new Set(),
    themeFilters: new Set(),
    onToggleItemType: (t) => {
        e((e) => {
            let n = new Set(e.itemTypeFilters);
            return (n.has(t) ? n.delete(t) : n.add(t), l(r({}, e), { itemTypeFilters: n }));
        });
    },
    onToggleColor: (t) => {
        e((e) => {
            let n = new Set(e.colorFilters);
            return (n.has(t) ? n.delete(t) : n.add(t), l(r({}, e), { colorFilters: n }));
        });
    },
    onToggleTheme: (t) => {
        e((e) => {
            let n = new Set(e.themeFilters);
            return (n.has(t) ? n.delete(t) : n.add(t), l(r({}, e), { themeFilters: n }));
        });
    }
}));
