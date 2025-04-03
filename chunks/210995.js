r.d(t, { default: () => o });
var n = r(200651);
r(192379);
var i = r(468026),
    a = r(434404),
    c = r(388032);
let o = (e) =>
    (0, n.jsx)(
        i.default,
        (function (e) {
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
                title: c.NW.string(c.t.aCAiGh),
                body: c.NW.format(c.t['4cJV9f'], { serverName: e.name }),
                cancelText: c.NW.string(c.t.J2TBi4),
                onCancel: () => {
                    a.Z.leaveGuild(e.guildId);
                },
                confirmText: c.NW.string(c.t.TyCVIi)
            },
            e
        )
    );
