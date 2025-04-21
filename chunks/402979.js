r.d(t, { default: () => u });
var n = r(200651),
    o = r(192379),
    i = r(481060),
    c = r(434404),
    a = r(981631),
    l = r(388032);
function u(e) {
    var t,
        r,
        { guild: u } = e,
        f = (function (e, t) {
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
        })(e, ['guild']);
    let s = u.id,
        b = o.useCallback(() => {
            c.Z.leaveGuild(s, !0);
        }, [s]);
    return (0, n.jsx)(
        i.ConfirmModal,
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
                header: l.intl.formatToPlainString(l.t['1GX6Pz'], { name: u.name }),
                confirmText: u.hasFeature(a.oNc.HUB) ? l.intl.string(l.t.Dv8gFR) : l.intl.string(l.t.J2TBi4),
                cancelText: l.intl.string(l.t['ETE/oK']),
                onConfirm: b
            },
            f
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: u.hasFeature(a.oNc.HUB) ? l.intl.format(l.t.ZHTXVF, { name: u.name }) : l.intl.format(l.t.ZEXC0t, { name: u.name })
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
