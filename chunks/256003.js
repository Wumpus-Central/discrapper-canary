n.d(t, { Z: () => u }), n(47120);
var r = n(788347),
    l = n(372793),
    o = n(731965);
function a(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function i(e, t) {
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
let s = (0, l.F)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, r) => {
            var l;
            let { selectedUserIds: s } = t(),
                c = new Set([...(null != (l = s[n]) ? l : new Set()), ...r]);
            (0, o.j)(() => {
                e({ selectedUserIds: i(a({}, s), { [n]: c }) });
            });
        },
        removeUser: (n, r) => {
            let { selectedUserIds: l } = t(),
                s = l[n];
            if (null == s) return;
            let c = [...s].filter((e) => e !== r);
            (0, o.j)(() => {
                e({ selectedUserIds: i(a({}, l), { [n]: new Set(c) }) });
            });
        },
        clearSelection: (n) => {
            let { selectedUserIds: r } = t();
            null != r &&
                (0, o.j)(() => {
                    e({ selectedUserIds: i(a({}, r), { [n]: new Set() }) });
                });
        }
    })),
    c = new Set();
function u(e) {
    return s((t) => {
        var n;
        return {
            selectedUserIds: null != (n = t.selectedUserIds[e]) ? n : c,
            addUsers: (n) => {
                t.addUsers(e, n);
            },
            removeUser: (n) => {
                t.removeUser(e, n);
            },
            clearSelection: () => {
                t.clearSelection(e);
            }
        };
    }, r.X);
}
