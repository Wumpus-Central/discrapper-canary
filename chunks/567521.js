n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(471253),
    c = n(146085),
    a = n(496675),
    s = n(388032);
function u(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.can(c.yP, e), [e]);
    return null != t && n
        ? (0, r.jsx)(l.sNh, {
              id: 'end-stage',
              label: s.NW.string(s.t.saZaRU),
              color: 'danger',
              action: function () {
                  (0, l.h7j)((t) => {
                      var n, i;
                      return (0, r.jsx)(
                          l.ConfirmModal,
                          ((n = (function (e) {
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
                          })({}, t)),
                          (i = i =
                              {
                                  header: s.NW.string(s.t.gW9je3),
                                  confirmText: s.NW.string(s.t.saZaRU),
                                  cancelText: s.NW.string(s.t['ETE/oK']),
                                  onConfirm: () => (0, o.NZ)(e),
                                  children: (0, r.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-secondary',
                                      children: s.NW.string(s.t.mT7jwM)
                                  })
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n)
                      );
                  });
              }
          })
        : null;
}
