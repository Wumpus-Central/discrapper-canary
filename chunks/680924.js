n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(388032);
function a(e, t, n) {
    (0, i.h7j)((a) => {
        var l, o;
        return (0, r.jsx)(
            i.ConfirmModal,
            ((l = (function (e) {
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
            })(
                {
                    header: e,
                    confirmText: s.NW.string(s.t.BddRzc),
                    cancelText: s.NW.string(s.t['ETE/oK']),
                    onConfirm: n
                },
                a
            )),
            (o = o =
                {
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: t
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            l)
        );
    });
}
