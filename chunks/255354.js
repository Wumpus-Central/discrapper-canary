n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(938078),
    a = n(57222),
    c = n(985018),
    o = n(877228);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = i.memo(function (e) {
    let { rule: t, onlyRoles: n = !1, onChangeRule: i } = e,
        f = (0, r.jsx)(s.A, {
            guildId: t.guildId,
            selectedChannelIds: t.exemptChannels,
            selectedRoleIds: t.exemptRoles,
            onChange: (e, n) =>
                i(
                    u(d({}, t), {
                        exemptChannels: e,
                        exemptRoles: n,
                    }),
                ),
            disableEveryoneRole: !0,
            includeRoleRestrictedPrivateChannels: !0,
        });
    return (
        n &&
            (f = (0, r.jsx)(a.A, {
                guildId: t.guildId,
                selectedRoleIds: t.exemptRoles,
                onChange: (e) =>
                    i(
                        u(d({}, t), {
                            exemptRoles: e,
                        }),
                    ),
                placeholder: c.intl.string(c.t.aFO1I6),
                disableEveryoneRole: !0,
            })),
        (0, r.jsxs)("div", {
            children: [
                f,
                (0, r.jsx)(l.Text, {
                    color: "text-default",
                    variant: "text-xs/normal",
                    className: o.d,
                    children: c.intl.string(c.t.GKlYaS),
                }),
            ],
        })
    );
});
