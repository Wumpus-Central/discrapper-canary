r.d(e, { default: () => g }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(538534),
    o = r(481060),
    c = r(881052),
    l = r(434404),
    s = r(78451),
    d = r(915509),
    u = r(981631),
    p = r(388032),
    b = r(10198);
function g(t) {
    var e, r;
    let { guild: g, onClose: y, hideColors: f } = t,
        [_, m] = a.useState(g.verificationLevel),
        [O, j] = a.useState(null),
        h = g.features.has(u.oNc.COMMUNITY),
        v = (0, s.IF)(h, f).filter((t) => !t.disabled),
        x = a.useCallback(async () => {
            null != O && j(null);
            try {
                await l.Z.saveGuild(g.id, { verificationLevel: _ }), l.Z.updateGuild({ verificationLevel: _ }), y();
            } catch (t) {
                j(new c.Hx(t).getAnyErrorMessage());
            }
        }, [O, g.id, _, y]);
    return (0, n.jsx)(
        d.Z,
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
        })({}, t)),
        (r = r =
            {
                title: p.intl.string(p.t.DpRdYG),
                errorText: O,
                onConfirm: x,
                onCancel: y,
                children: (0, n.jsxs)(o.hjN, {
                    children: [
                        (0, n.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            className: b.marginBottom20,
                            children: p.intl.format(p.t.iuRk2t, {}),
                        }),
                        (0, n.jsx)(i.E, {
                            value: _,
                            options: v,
                            onChange: (t) => m(t),
                        }),
                    ],
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
