r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    c = r(755721),
    i = r(481060),
    l = r(153867),
    s = r(388032),
    a = r(412335);
function b(e) {
    var t,
        r,
        { onSubmit: b, onClose: u } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (n = 0; n < c.length; n++)
                    (r = c[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["onSubmit", "onClose"]);
    let [f, O] = o.useState(!1);
    return (0, n.jsxs)(
        i.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: s.intl.string(s.t.HlAPoq),
                confirmButtonColor: c.zx.Colors.GREEN,
                confirmText: s.intl.string(s.t.rimG2R),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                onConfirm: b,
                onClose: () => (f && l.ZP.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), u()),
            },
            p,
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: s.intl.string(s.t.Jz3oqA),
                    }),
                    (0, n.jsx)("div", {
                        className: a.checkbox,
                        children: (0, n.jsx)(i.Checkbox, {
                            checked: f,
                            onChange: (e) => O(e),
                            label: s.intl.string(s.t["JdIQ/Y"]),
                            labelType: "secondary",
                        }),
                    }),
                ],
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
        t),
    );
}
