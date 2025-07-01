n.d(t, { default: () => l });
var r = n(255367);
n(73800);
var o = n(481060),
    c = n(313201),
    a = n(388032),
    s = n(281373);
let l = (e) => {
    var t, n;
    let { onClose: l } = e,
        i = (0, c.Dt)();
    return (0, r.jsxs)(
        o.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })({}, e)),
        (n = n =
            {
                'aria-labelledby': i,
                parentComponent: 'QuarantineModeInfoModal',
                children: [
                    (0, r.jsxs)(o.xBx, {
                        separator: !1,
                        className: s.modalHeader,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                id: i,
                                variant: 'heading-xl/extrabold',
                                children: a.intl.string(a.t.EouHws)
                            }),
                            (0, r.jsx)(o.olH, {
                                className: s.closeButton,
                                onClick: l
                            })
                        ]
                    }),
                    (0, r.jsx)(o.hzk, {
                        className: s.modalContent,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: s.contentText,
                            children: a.intl.string(a.t.zNPBMD)
                        })
                    }),
                    (0, r.jsx)(o.mzw, {
                        children: (0, r.jsx)(o.zxk, {
                            className: s.button,
                            size: o.zxk.Sizes.MIN,
                            onClick: l,
                            children: a.intl.string(a.t.BddRzc)
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
