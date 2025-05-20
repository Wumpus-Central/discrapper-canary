r.d(t, { default: () => a }), r(388685);
var n = r(255367),
    o = r(73800),
    i = r(913527),
    c = r.n(i),
    l = r(481060),
    u = r(388032),
    s = r(899779);
function a(e) {
    var t,
        r,
        { createReminder: i } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['createReminder']);
    let [p, b] = o.useState(() => c()()),
        [f, O] = o.useState(() => c()()),
        d = o.useCallback(() => {
            i(p.toDate());
        }, [i, p]),
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
                header: u.intl.string(u.t.VKsXpa),
                confirmText: u.intl.string(u.t.R3BPHx),
                cancelText: u.intl.string(u.t['ETE/oK']),
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
                            title: u.intl.string(u.t.pSZKvL),
                            required: !0,
                            children: (0, n.jsx)(l.Wrb, {
                                value: p,
                                onSelect: y,
                                minDate: f
                            })
                        }),
                        (0, n.jsx)(l.xJW, {
                            title: u.intl.string(u.t.GOmEb2),
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
