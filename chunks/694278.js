n.d(t, { default: () => p }), n(47120);
var r = n(200651),
    a = n(192379),
    o = n(481060),
    i = n(881052),
    c = n(434404),
    l = n(78451),
    s = n(915509),
    d = n(981631),
    u = n(388032),
    b = n(20493);
function p(e) {
    var t, n;
    let { guild: p, onClose: m, hideColors: _ } = e,
        [g, y] = a.useState(p.verificationLevel),
        [x, h] = a.useState(null),
        f = p.hasFeature(d.oNc.COMMUNITY),
        j = (0, l.IF)(f, _).filter((e) => !e.disabled),
        C = a.useCallback(async () => {
            null != x && h(null);
            try {
                await c.Z.saveGuild(p.id, { verificationLevel: g }), c.Z.updateGuild({ verificationLevel: g }), m();
            } catch (e) {
                h(new i.Hx(e).getAnyErrorMessage());
            }
        }, [x, p.id, g, m]);
    return (0, r.jsx)(
        s.Z,
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
        })({}, e)),
        (n = n =
            {
                title: u.NW.string(u.t.DpRdYG),
                errorText: x,
                onConfirm: C,
                onCancel: m,
                children: (0, r.jsxs)(o.hjN, {
                    children: [
                        (0, r.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            className: b.marginBottom20,
                            children: u.NW.format(u.t.iuRk2t, {})
                        }),
                        (0, r.jsx)(o.FXm, {
                            value: g,
                            options: j,
                            onChange: (e) => y(e.value)
                        })
                    ]
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
