r.d(t, { default: () => u }), r(896048);
var a = r(627968),
    n = r(64700),
    c = r(397927),
    i = r(198982),
    o = r(997509),
    l = r(809505),
    s = r(242273),
    b = r(652215),
    f = r(985018);
function u(e) {
    var t, r;
    let { guild: u, onClose: d, hideColors: p } = e,
        [y, O] = n.useState(u.verificationLevel),
        [j, v] = n.useState(null),
        g = u.features.has(b.GuildFeatures.COMMUNITY),
        h = (0, l.vd)(g, p).filter((e) => !e.disabled),
        w = n.useCallback(async () => {
            null != j && v(null);
            try {
                await o.A.saveGuild(u.id, { verificationLevel: y }), o.A.updateGuild({ verificationLevel: y }), d();
            } catch (e) {
                v(new i.LG(e).getAnyErrorMessage());
            }
        }, [j, u.id, y, d]);
    return (0, a.jsx)(
        s.A,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({}, e)),
        (r = r =
            {
                title: f.intl.string(f.t.DpRdYK),
                description: f.intl.format(f.t.iuRk2j, {}),
                errorText: j,
                onConfirm: w,
                onCancel: d,
                children: (0, a.jsx)(c.z6M, {
                    value: y,
                    options: h,
                    onChange: (e) => O(e),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, a);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
