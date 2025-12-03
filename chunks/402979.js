r.d(t, { default: () => c });
var n = r(54381),
    i = r(473749),
    a = r(793030),
    l = r(434404),
    o = r(981631),
    u = r(388032);
function c(e) {
    var { guild: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["guild"]);
    let c = t.id,
        f = i.useCallback(() => {
            l.Z.leaveGuild(c, !0);
        }, [c]);
    return (0, n.jsx)(
        a.ConfirmModal,
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
                subtitle: t.features.has(o.GuildFeatures.HUB)
                    ? u.intl.format(u.t.ZHTXVD, { name: t.name })
                    : u.intl.format(u.t.ZEXC0r, { name: t.name }),
                confirmText: t.features.has(o.GuildFeatures.HUB)
                    ? u.intl.string(u.t.Dv8gFT)
                    : u.intl.string(u.t.J2TBi3),
                onConfirm: f,
            },
            r,
        ),
    );
}
