r.d(t, { default: () => l });
var n = r(200651);
r(192379);
var c = r(481060),
    o = r(313201),
    a = r(388032),
    s = r(281373);
let l = (e) => {
    var t, r;
    let { onClose: l } = e,
        i = (0, o.Dt)();
    return (0, n.jsxs)(
        c.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, e)),
        (r = r =
            {
                'aria-labelledby': i,
                children: [
                    (0, n.jsxs)(c.xBx, {
                        separator: !1,
                        className: s.modalHeader,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                id: i,
                                variant: 'heading-xl/extrabold',
                                children: a.NW.string(a.t.EouHws)
                            }),
                            (0, n.jsx)(c.olH, {
                                className: s.closeButton,
                                onClick: l
                            })
                        ]
                    }),
                    (0, n.jsx)(c.hzk, {
                        className: s.modalContent,
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            className: s.contentText,
                            children: a.NW.string(a.t.zNPBMD)
                        })
                    }),
                    (0, n.jsx)(c.mzw, {
                        children: (0, n.jsx)(c.zxk, {
                            className: s.button,
                            size: c.zxk.Sizes.MIN,
                            onClick: l,
                            children: a.NW.string(a.t.BddRzc)
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
