r.d(t, { default: () => u });
var n = r(54381),
    o = r(473749),
    i = r(481060),
    a = r(434404),
    c = r(981631),
    l = r(388032);
function u(e) {
    var t,
        r,
        { guild: u } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["guild"]);
    let f = u.id,
        b = o.useCallback(() => {
            a.Z.leaveGuild(f, !0);
        }, [f]);
    return (0, n.jsx)(
        i.ConfirmModal,
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
        })(
            {
                header: l.intl.formatToPlainString(l.t["1GX6P/"], { name: u.name }),
                confirmText: u.features.has(c.GuildFeatures.HUB)
                    ? l.intl.string(l.t.Dv8gFT)
                    : l.intl.string(l.t.J2TBi3),
                cancelText: l.intl.string(l.t["ETE/oC"]),
                onConfirm: b,
            },
            s,
        )),
        (r = r =
            {
                children: (0, n.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: u.features.has(c.GuildFeatures.HUB)
                        ? l.intl.format(l.t.ZHTXVD, { name: u.name })
                        : l.intl.format(l.t.ZEXC0r, { name: u.name }),
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
