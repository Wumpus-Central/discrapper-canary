n.d(e, { default: () => l });
var r = n(255367);
n(73800);
var i = n(468026),
    a = n(434404),
    c = n(388032);
let l = (t) =>
    (0, r.jsx)(
        i.default,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                title: c.intl.string(c.t.aCAiGh),
                body: c.intl.format(c.t['4cJV9f'], { serverName: t.name }),
                cancelText: c.intl.string(c.t.J2TBi4),
                onCancel: () => {
                    a.Z.leaveGuild(t.guildId);
                },
                confirmText: c.intl.string(c.t.TyCVIi)
            },
            t
        )
    );
