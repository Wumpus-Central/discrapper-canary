n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(388032);
function l(e, t, n) {
    (0, r.h7j)((l) => {
        var a, o;
        return (0, i.jsx)(
            r.ConfirmModal,
            ((a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    header: e,
                    confirmText: s.intl.string(s.t.BddRzc),
                    cancelText: s.intl.string(s.t['ETE/oK']),
                    onConfirm: n
                },
                l
            )),
            (o = o =
                {
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: t
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            a)
        );
    });
}
