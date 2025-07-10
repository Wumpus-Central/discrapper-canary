(r.d(t, { default: () => p }), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(481060),
    o = r(881052),
    l = r(434404),
    c = r(78451),
    s = r(915509),
    d = r(981631),
    u = r(388032),
    b = r(20493);
function p(e) {
    var t, r;
    let { guild: p, onClose: m, hideColors: y } = e,
        [_, g] = a.useState(p.verificationLevel),
        [x, f] = a.useState(null),
        h = p.features.has(d.oNc.COMMUNITY),
        j = (0, c.IF)(h, y).filter((e) => !e.disabled),
        v = a.useCallback(async () => {
            null != x && f(null);
            try {
                (await l.Z.saveGuild(p.id, { verificationLevel: _ }), l.Z.updateGuild({ verificationLevel: _ }), m());
            } catch (e) {
                f(new o.Hx(e).getAnyErrorMessage());
            }
        }, [x, p.id, _, m]);
    return (0, n.jsx)(
        s.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        ((n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n));
                    }));
            }
            return e;
        })({}, e)),
        (r = r =
            {
                title: u.intl.string(u.t.DpRdYG),
                errorText: x,
                onConfirm: v,
                onCancel: m,
                children: (0, n.jsxs)(i.hjN, {
                    children: [
                        (0, n.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            className: b.marginBottom20,
                            children: u.intl.format(u.t.iuRk2t, {})
                        }),
                        (0, n.jsx)(i.FXm, {
                            value: _,
                            options: j,
                            onChange: (e) => g(e.value)
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
