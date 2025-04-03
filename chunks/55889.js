n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(941524),
    l = n(563115),
    o = n(388032),
    c = n(85761);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let m = i.memo(function (e) {
    let { rule: t, onlyRoles: n = !1, onChangeRule: i } = e,
        m = (0, r.jsx)(a.Z, {
            guildId: t.guildId,
            selectedChannelIds: t.exemptChannels,
            selectedRoleIds: t.exemptRoles,
            onChange: (e, n) =>
                i(
                    u(d({}, t), {
                        exemptChannels: e,
                        exemptRoles: n
                    })
                ),
            disableEveryoneRole: !0,
            includeRoleRestrictedPrivateChannels: !0
        });
    return (
        n &&
            (m = (0, r.jsx)(l.Z, {
                guildId: t.guildId,
                selectedRoleIds: t.exemptRoles,
                onChange: (e) => i(u(d({}, t), { exemptRoles: e })),
                placeholder: o.NW.string(o.t.aFO1Iy),
                disableEveryoneRole: !0
            })),
        (0, r.jsxs)(s.xJW, {
            children: [
                m,
                (0, r.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-xs/normal',
                    className: c.exemptionHint,
                    children: o.NW.string(o.t.GKlYaW)
                })
            ]
        })
    );
});
