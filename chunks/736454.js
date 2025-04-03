r.d(t, { default: () => a }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(481060),
    i = r(153867),
    s = r(388032),
    l = r(903463);
function a(e) {
    var t,
        r,
        { onSubmit: a, onClose: u } = e,
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
                for (n = 0; n < c.length; n++) (r = c[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onSubmit', 'onClose']);
    let [b, f] = o.useState(!1);
    return (0, n.jsxs)(
        c.ConfirmModal,
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
        })(
            {
                header: s.NW.string(s.t.HlAPoq),
                confirmButtonColor: c.zxk.Colors.GREEN,
                confirmText: s.NW.string(s.t.rimG2d),
                cancelText: s.NW.string(s.t['ETE/oK']),
                onConfirm: a,
                onClose: () => (b && i.ZP.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), u())
            },
            p
        )),
        (r = r =
            {
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: s.NW.string(s.t.Jz3oqK)
                    }),
                    (0, n.jsx)(c.XZJ, {
                        type: c.XZJ.Types.INVERTED,
                        value: b,
                        onChange: (e, t) => f(t),
                        className: l.checkbox,
                        children: (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: s.NW.string(s.t['JdIQ/f'])
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
}
