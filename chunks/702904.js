n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function s() {
    function e() {
        (0, l.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
            return (t) => (0, r.jsx)(e, a({ source: "Screenshare Unavailable" }, t));
        });
    }
    (0, l.mMO)(async () => {
        let { default: t } = await n.e("11487").then(n.bind(n, 792866));
        return (n) => {
            var l, s;
            return (0, r.jsx)(
                t,
                ((l = a({}, n)),
                (s = s =
                    {
                        header: i.intl.string(i.t.GFr0GR),
                        body: i.intl.string(i.t.QSk6E8),
                        confirmText: i.intl.string(i.t["BK8LK+"]),
                        onConfirm: e,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                l),
            );
        };
    });
}
