n.d(t, { Z: () => o });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(388032);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function o() {
    function e() {
        (0, r.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
            return (t) => (0, i.jsx)(e, a({ source: "Screenshare Unavailable" }, t));
        });
    }
    (0, r.ZDy)(async () => {
        let { default: t } = await n.e("67753").then(n.bind(n, 873809));
        return (n) => {
            var r, o;
            return (0, i.jsx)(
                t,
                ((r = a({}, n)),
                (o = o =
                    {
                        header: l.intl.string(l.t.GFr0GR),
                        body: l.intl.string(l.t.QSk6E8),
                        confirmText: l.intl.string(l.t["BK8LK+"]),
                        onConfirm: e,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                r),
            );
        };
    });
}
