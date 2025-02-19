r.d(t, { default: () => l });
var n = r(200651);
r(192379);
var o = r(481060),
    c = r(65912),
    i = r(388032);
function l(e) {
    var t,
        r,
        { ruleName: l, onConfirm: a } = e,
        f = (function (e, t) {
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
        })(e, ['ruleName', 'onConfirm']);
    let { setEditingRule: u } = (0, c.V)(),
        p = null != l ? l : i.NW.string(i.t.ffR2cH);
    return (0, n.jsx)(
        o.ConfirmModal,
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
        })({}, f)),
        (r = r =
            {
                header: i.NW.string(i.t.kknTmJ),
                cancelText: i.NW.string(i.t['ETE/oK']),
                confirmText: i.NW.string(i.t['cY+Ooa']),
                onConfirm: () => {
                    u(null), null == a || a();
                },
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: i.NW.format(i.t['ff/gx8'], { ruleName: p })
                })
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
