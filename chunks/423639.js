r.d(t, { default: () => a }), r(47120);
var n = r(200651),
    o = r(192379),
    c = r(913527),
    i = r.n(c),
    l = r(481060),
    u = r(388032),
    s = r(899779);
function a(e) {
    var t,
        r,
        { createReminder: c } = e,
        a = (function (e, t) {
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
        })(e, ['createReminder']);
    let [p, b] = o.useState(() => i()()),
        [f, O] = o.useState(() => i()()),
        d = o.useCallback(() => {
            c(p.toDate());
        }, [c, p]),
        y = (e) => {
            e.isValid() && b(e);
        };
    return (0, n.jsx)(
        l.ConfirmModal,
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
                header: u.NW.string(u.t.VKsXpa),
                confirmText: u.NW.string(u.t.R3BPHx),
                cancelText: u.NW.string(u.t['ETE/oK']),
                confirmButtonColor: l.zxk.Colors.BRAND,
                onConfirm: d
            },
            a
        )),
        (r = r =
            {
                children: (0, n.jsxs)('div', {
                    className: s.doubleInput,
                    children: [
                        (0, n.jsx)(l.xJW, {
                            title: u.NW.string(u.t.pSZKvL),
                            required: !0,
                            children: (0, n.jsx)(l.Wrb, {
                                value: p,
                                onSelect: y,
                                minDate: f
                            })
                        }),
                        (0, n.jsx)(l.xJW, {
                            title: u.NW.string(u.t.GOmEb2),
                            required: !0,
                            children: (0, n.jsx)(l.MGJ, {
                                value: p,
                                onChange: y
                            })
                        })
                    ]
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
