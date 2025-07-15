(r.d(e, { default: () => b }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(481060),
    o = r(881052),
    c = r(434404),
    l = r(78451),
    s = r(915509),
    u = r(981631),
    d = r(388032),
    p = r(20493);
function b(t) {
    var e, r;
    let { guild: b, onClose: g, hideColors: y } = t,
        [f, _] = a.useState(b.verificationLevel),
        [m, O] = a.useState(null),
        j = b.features.has(u.oNc.COMMUNITY),
        v = (0, l.IF)(j, y).filter((t) => !t.disabled),
        h = a.useCallback(async () => {
            null != m && O(null);
            try {
                (await c.Z.saveGuild(b.id, { verificationLevel: f }), c.Z.updateGuild({ verificationLevel: f }), g());
            } catch (t) {
                O(new o.Hx(t).getAnyErrorMessage());
            }
        }, [m, b.id, f, g]);
    return (0, n.jsx)(
        s.Z,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        ((n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n));
                    }));
            }
            return t;
        })({}, t)),
        (r = r =
            {
                title: d.intl.string(d.t.DpRdYG),
                errorText: m,
                onConfirm: h,
                onCancel: g,
                children: (0, n.jsxs)(i.hjN, {
                    children: [
                        (0, n.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            className: p.marginBottom20,
                            children: d.intl.format(d.t.iuRk2t, {})
                        }),
                        (0, n.jsx)(i.FXm, {
                            value: f,
                            options: v,
                            onChange: (t) => _(t.value)
                        })
                    ]
                })
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
        e)
    );
}
