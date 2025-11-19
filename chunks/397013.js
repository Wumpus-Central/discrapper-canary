n.d(t, { default: () => i });
var r = n(54381);
n(473749);
var o = n(755721),
    c = n(481060),
    a = n(313201),
    l = n(388032),
    s = n(806810);
let i = (e) => {
    var t, n;
    let { onClose: i } = e,
        d = (0, a.Dt)();
    return (0, r.jsxs)(
        c.Y0X,
        ((t = (function (e) {
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
        })({}, e)),
        (n = n =
            {
                "aria-labelledby": d,
                parentComponent: "QuarantineModeInfoModal",
                children: [
                    (0, r.jsxs)(c.xBx, {
                        separator: !1,
                        className: s.modalHeader,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                id: d,
                                variant: "heading-xl/extrabold",
                                children: l.intl.string(l.t.EouHwv),
                            }),
                            (0, r.jsx)(c.olH, {
                                className: s.closeButton,
                                onClick: i,
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.hzk, {
                        className: s.modalContent,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            className: s.contentText,
                            children: l.intl.string(l.t.zNPBMA),
                        }),
                    }),
                    (0, r.jsx)(c.mzw, {
                        children: (0, r.jsx)(o.zx, {
                            className: s.button,
                            size: o.zx.Sizes.MIN,
                            onClick: i,
                            children: l.intl.string(l.t.BddRzS),
                        }),
                    }),
                ],
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
        t),
    );
};
