r.d(t, { default: () => a });
var n = r(255367),
    l = r(73800),
    i = r(82659),
    o = r(434404),
    u = r(388032);
let a = (e) => {
    var { name: t, guildId: r, onClose: a } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]));
            }
            return l;
        })(e, ['name', 'guildId', 'onClose']);
    let s = l.useCallback(() => {
            (null == a || a(), o.Z.leaveGuild(r));
        }, [r, a]),
        f = l.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: u.intl.string(u.t.J2TBi4),
                    onClick: s
                },
                {
                    text: u.intl.string(u.t.TyCVIi),
                    onClick: a
                }
            ],
            [s, a]
        );
    return (0, n.jsx)(
        i.u,
        (function (e) {
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
        })(
            {
                title: u.intl.string(u.t.aCAiGh),
                subtitle: u.intl.format(u.t['4cJV9f'], { serverName: t }),
                actions: f,
                onClose: a
            },
            c
        )
    );
};
