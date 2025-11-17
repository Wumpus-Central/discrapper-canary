n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(471253),
    o = n(146085),
    c = n(496675),
    s = n(388032);
function u(e, t) {
    let n = (0, r.e7)([c.Z], () => c.Z.can(o.yP, e), [e]);
    return null != t && n
        ? (0, i.jsx)(l.sNh, {
              id: "end-stage",
              label: s.intl.string(s.t.saZaRb),
              color: "danger",
              action: function () {
                  (0, l.h7j)((t) => {
                      var n, r;
                      return (0, i.jsx)(
                          l.ConfirmModal,
                          ((n = (function (e) {
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
                          })({}, t)),
                          (r = r =
                              {
                                  header: s.intl.string(s.t.gW9je1),
                                  confirmText: s.intl.string(s.t.saZaRb),
                                  cancelText: s.intl.string(s.t["ETE/oC"]),
                                  onConfirm: () => (0, a.NZ)(e),
                                  children: (0, i.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      color: "header-secondary",
                                      children: s.intl.string(s.t.mT7jwN),
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          n),
                      );
                  });
              },
          })
        : null;
}
