r.d(t, { default: () => b }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(913527),
    c = r.n(i),
    l = r(755721),
    u = r(481060),
    a = r(388032),
    s = r(74450);
function b(e) {
    var t,
        r,
        { createReminder: i } = e,
        b = (function (e, t) {
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
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["createReminder"]);
    let [p, f] = o.useState(() => c()()),
        [O, y] = o.useState(() => c()()),
        d = o.useCallback(() => {
            i(p.toDate());
        }, [i, p]),
        j = (e) => {
            e.isValid() && f(e);
        };
    return (0, n.jsx)(
        u.ConfirmModal,
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
                header: a.intl.string(a.t.VKsXpY),
                confirmText: a.intl.string(a.t["R3BPH+"]),
                cancelText: a.intl.string(a.t["ETE/oC"]),
                confirmButtonColor: l.zx.Colors.BRAND,
                onConfirm: d,
            },
            b,
        )),
        (r = r =
            {
                children: (0, n.jsxs)("div", {
                    className: s.doubleInput,
                    children: [
                        (0, n.jsx)(u.Wrb, {
                            label: a.intl.string(a.t.pSZKvM),
                            required: !0,
                            value: p,
                            onSelect: j,
                            minDate: O,
                        }),
                        (0, n.jsx)(u.MGJ, {
                            label: a.intl.string(a.t.GOmEb8),
                            required: !0,
                            value: p,
                            onChange: j,
                        }),
                    ],
                }),
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
