n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(273504),
    s = n(981631),
    o = n(388032);
function c(e) {
    let { rule: t, onChangeRule: n } = e,
        [c, d] = i.useState(t.name);
    return (0, r.jsx)(l.oil, {
        label: o.intl.string(o.t.WVAHxF),
        onChange: (e) => {
            var r, i;
            d(e),
                n(
                    ((r = (function (e) {
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
                    })({}, t)),
                    (i = i = { name: e }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                );
        },
        onClick: (e) => e.stopPropagation(),
        onKeyDown: (e) => {
            e.which === s.yXg.SPACE && e.stopPropagation();
        },
        placeholder: o.intl.string(o.t["5AO43K"]),
        maxLength: a.OU,
        value: c,
    });
}
