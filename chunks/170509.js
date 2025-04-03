n.d(t, { default: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(933557),
    o = n(388032),
    a = n(331884);
function s(e) {
    var t,
        n,
        { channel: s, category: c } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'category']);
    let d = (0, l.ZP)(s, !0),
        p = (0, l.ZP)(c);
    return (0, r.jsx)(
        i.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                header: o.NW.string(o.t.YWMtRU),
                confirmText: o.NW.string(o.t.eW8Gy8),
                cancelText: o.NW.string(o.t.s4uM3d),
                confirmButtonColor: i.zxk.Colors.BRAND
            },
            u
        )),
        (n = n =
            {
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    className: a.message,
                    selectable: !1,
                    children: o.NW.format(o.t['iKW+jY'], {
                        channelName: d,
                        categoryName: p
                    })
                })
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
}
