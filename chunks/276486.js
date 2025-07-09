n.d(t, {
    l: () => m,
    v: () => f
});
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    o = n(144114),
    s = n(489813),
    a = n(815660),
    c = n(388032),
    u = n(667084);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function m() {
    return (0, r.jsx)(s.PU, {
        className: u.editableRequirementContainer,
        icon: l.AtH,
        text: c.intl.string(c.t.woMjLS),
        footnote: c.intl.string(c.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.ua7, {
            text: c.intl.string(c.t.mGlP39),
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    i.zx,
                    ((t = d({}, e)),
                    (n = n =
                        {
                            size: i.zx.Sizes.SMALL,
                            disabled: !0,
                            children: c.intl.string(c.t['13ofGh'])
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
function f(e) {
    let { isUserVerified: t } = e,
        i = t ? c.intl.string(c.t.WWzQtb) : c.intl.string(c.t.woMjLS);
    return (0, r.jsx)(s.PU, {
        className: u.editableRequirementContainer,
        icon: l.AtH,
        text: i,
        footnote: c.intl.string(c.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(l.zxk, {
            variant: 'primary',
            size: 'sm',
            text: c.intl.string(c.t['13ofGh']),
            onClick: () => {
                (0, l.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('56898')]).then(n.bind(n, 607018));
                        return (t) => (0, r.jsx)(e, d({ reason: o.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: a.M }
                );
            }
        })
    });
}
