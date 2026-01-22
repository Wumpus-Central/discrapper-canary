r.d(t, { default: () => s }), r(896048);
var n = r(627968),
    o = r(64700),
    l = r(158954),
    i = r(954571),
    a = r(399925),
    c = r(652215),
    p = r(985018);
function s(e) {
    var t, r;
    let { onClose: s, onBeforeDelete: f, onAfterDelete: u, clips: b } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["onClose", "onBeforeDelete", "onAfterDelete", "clips"]),
        [O, g] = o.useState(!1),
        j = b.length,
        w = o.useCallback(async () => {
            g(!0);
            try {
                null == f || f(),
                    await Promise.all(
                        b.map(async (e) => {
                            await a.oH(e.filepath), i.default.track(c.HAw.CLIP_DELETED);
                        }),
                    ),
                    u();
            } finally {
                g(!1);
            }
        }, [b, f, u]);
    return (0, n.jsx)(
        l.Modal,
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
        })({}, y)),
        (r = r =
            {
                onClose: s,
                title: p.intl.formatToPlainString(p.t.lprb7n, { count: j }),
                subtitle: p.intl.formatToPlainString(p.t.NInqer, { count: j }),
                actions: [
                    {
                        variant: "secondary",
                        text: p.intl.string(p.t["ETE/oC"]),
                        onClick: s,
                    },
                    {
                        variant: "critical-primary",
                        text: p.intl.string(p.t.oyYWHE),
                        onClick: w,
                        loading: O,
                        disabled: O,
                    },
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
