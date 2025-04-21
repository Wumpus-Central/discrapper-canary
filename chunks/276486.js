n.d(t, {
    l: () => d,
    v: () => m
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(144114),
    o = n(489813),
    s = n(815660),
    a = n(388032),
    c = n(667084);
function u(e) {
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
function d() {
    return (0, r.jsx)(o.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: a.intl.string(a.t.woMjLS),
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(i.ua7, {
            text: a.intl.string(a.t.mGlP39),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    i.zxk,
                    ((t = u({}, e)),
                    (n = n =
                        {
                            size: i.zxk.Sizes.SMALL,
                            disabled: !0,
                            children: a.intl.string(a.t['13ofGh'])
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        d = t ? a.intl.string(a.t.WWzQtb) : a.intl.string(a.t.woMjLS);
    return (0, r.jsx)(o.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: d,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(i.zxk, {
            size: i.zxk.Sizes.SMALL,
            onClick: () => {
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('56898')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, u({ reason: l.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: s.M }
                );
            },
            children: a.intl.string(a.t['13ofGh'])
        })
    });
}
