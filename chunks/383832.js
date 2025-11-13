n.d(t, {
    Z: () => o,
    y: () => c,
});
var a = n(951288);
n(647438);
var i = n(481060),
    r = n(570140),
    l = n(71509);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function o() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e("55944").then(n.bind(n, 266653));
            return (t) => (0, a.jsx)(e, s({}, t));
        },
        {
            onCloseCallback: () => {
                r.Z.dispatch({
                    type: "LOGIN_RESET",
                    isMultiAccount: !0,
                });
            },
            modalKey: l.Ui,
        },
    );
}
function c() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("52030"), n.e("41619"), n.e("24374")]).then(n.bind(n, 153069));
            return (t) => {
                var n, i;
                return (0, a.jsx)(
                    e,
                    ((n = s({}, t)),
                    (i = i = { onBackPressed: o }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                );
            };
        },
        {
            onCloseCallback: () => {
                r.Z.dispatch({
                    type: "LOGIN_RESET",
                    isMultiAccount: !0,
                });
            },
            modalKey: l._5,
        },
    );
}
