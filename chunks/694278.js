r.d(e, { default: () => p }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(481060),
    o = r(881052),
    c = r(434404),
    l = r(78451),
    s = r(915509),
    u = r(981631),
    d = r(388032);
function p(t) {
    var e, r;
    let { guild: p, onClose: b, hideColors: g } = t,
        [f, y] = a.useState(p.verificationLevel),
        [_, O] = a.useState(null),
        m = p.features.has(u.GuildFeatures.COMMUNITY),
        v = (0, l.IF)(m, g).filter((t) => !t.disabled),
        j = a.useCallback(async () => {
            null != _ && O(null);
            try {
                await c.Z.saveGuild(p.id, { verificationLevel: f }), c.Z.updateGuild({ verificationLevel: f }), b();
            } catch (t) {
                O(new o.Hx(t).getAnyErrorMessage());
            }
        }, [_, p.id, f, b]);
    return (0, n.jsx)(
        s.Z,
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
                title: d.intl.string(d.t.DpRdYK),
                description: d.intl.format(d.t.iuRk2j, {}),
                errorText: _,
                onConfirm: j,
                onCancel: b,
                children: (0, n.jsx)(i.FXm, {
                    value: f,
                    options: v,
                    onChange: (t) => y(t),
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
