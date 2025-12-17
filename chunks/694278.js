r.d(t, { default: () => d }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(481060),
    o = r(881052),
    c = r(434404),
    l = r(78451),
    b = r(915509),
    s = r(981631),
    u = r(388032);
function d(e) {
    var t, r;
    let { guild: d, onClose: p, hideColors: g } = e,
        [f, y] = a.useState(d.verificationLevel),
        [O, m] = a.useState(null),
        v = d.features.has(s.GuildFeatures.COMMUNITY),
        j = (0, l.IF)(v, g).filter((e) => !e.disabled),
        C = a.useCallback(async () => {
            null != O && m(null);
            try {
                await c.Z.saveGuild(d.id, { verificationLevel: f }), c.Z.updateGuild({ verificationLevel: f }), p();
            } catch (e) {
                m(new o.Hx(e).getAnyErrorMessage());
            }
        }, [O, d.id, f, p]);
    return (0, n.jsx)(
        b.Z,
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
        })({}, e)),
        (r = r =
            {
                title: u.intl.string(u.t.DpRdYK),
                description: u.intl.format(u.t.iuRk2j, {}),
                errorText: O,
                onConfirm: C,
                onCancel: p,
                children: (0, n.jsx)(i.FXm, {
                    value: f,
                    options: j,
                    onChange: (e) => y(e),
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
