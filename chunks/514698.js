r.d(e, { default: () => u });
var n = r(54381);
r(473749);
var o = r(793030),
    i = r(442837),
    c = r(481060),
    l = r(933557),
    a = r(592125),
    s = r(388032);
function u(t) {
    var e,
        r,
        { onConfirm: u, channelId: p } = t,
        b = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["onConfirm", "channelId"]);
    let O = (0, i.e7)([a.Z], () => (null != p ? a.Z.getChannel(p) : null)),
        f = (0, l.ZP)(O, !0);
    return (0, n.jsx)(
        o.Modal,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        }),
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })({}, b)),
        (r = r =
            {
                title: s.intl.string(s.t.S2eoq8),
                actions: [
                    {
                        variant: "secondary",
                        text: s.intl.string(s.t["ETE/oC"]),
                        onClick: b.onClose,
                    },
                    {
                        variant: "critical-primary",
                        text: s.intl.string(s.t.N86XcP),
                        onClick: u,
                    },
                ],
                children: (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: null != O ? s.intl.format(s.t["1KT3Fp"], { channelName: f }) : s.intl.string(s.t.VOPUVy),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e),
    );
}
