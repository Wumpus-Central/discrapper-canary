r.d(t, { default: () => c });
var n = r(255367),
    l = r(73800),
    i = r(82659),
    o = r(434404),
    a = r(388032);
let c = (e) => {
    var { name: t, guildId: r, onClose: c } = e,
        u = (function (e, t) {
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
            (null == c || c(), o.Z.leaveGuild(r));
        }, [r, c]),
        f = l.useMemo(
            () => [
                {
                    variant: 'secondary',
                    text: a.intl.string(a.t.J2TBi4),
                    onClick: s
                },
                {
                    text: a.intl.string(a.t.TyCVIi),
                    onClick: c
                }
            ],
            [s, c]
        );
    return (0, n.jsx)(
        i.Modal,
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
                title: a.intl.string(a.t.aCAiGh),
                subtitle: a.intl.format(a.t['4cJV9f'], { serverName: t }),
                actions: f,
                onClose: c
            },
            u
        )
    );
};
