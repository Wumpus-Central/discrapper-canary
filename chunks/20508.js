r.d(t, { default: () => c });
var n = r(627968),
    l = r(64700),
    o = r(158954),
    a = r(997509),
    i = r(652215),
    u = r(985018);
function c(e) {
    let { guild: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.getOwnPropertyNames(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o;
        })(e, ["guild"]),
        c = t.id,
        f = l.useCallback(() => {
            a.A.leaveGuild(c, !0);
        }, [c]);
    return (0, n.jsx)(
        o.ConfirmModal,
        (function (e) {
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
        })(
            {
                title: u.intl.formatToPlainString(u.t["1GX6P/"], { name: t.name }),
                subtitle: t.features.has(i.GuildFeatures.HUB)
                    ? u.intl.format(u.t.ZHTXVD, { name: t.name })
                    : u.intl.format(u.t.ZEXC0r, { name: t.name }),
                confirmText: t.features.has(i.GuildFeatures.HUB)
                    ? u.intl.string(u.t.Dv8gFT)
                    : u.intl.string(u.t.J2TBi3),
                onConfirm: f,
            },
            r,
        ),
    );
}
