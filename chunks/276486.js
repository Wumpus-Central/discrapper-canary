r.d(t, {
    l: () => d,
    v: () => f
});
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(144114),
    l = r(489813),
    s = r(815660),
    u = r(388032),
    c = r(667084);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function d() {
    return (0, n.jsx)(l.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: u.NW.string(u.t.woMjLS),
        footnote: u.NW.string(u.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, n.jsx)(i.ua7, {
            text: u.NW.string(u.t.mGlP39),
            children: (e) => {
                var t, r;
                return (0, n.jsx)(
                    i.zxk,
                    ((t = a({}, e)),
                    (r = r =
                        {
                            size: i.zxk.Sizes.SMALL,
                            disabled: !0,
                            children: u.NW.string(u.t['13ofGh'])
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
                    t)
                );
            }
        })
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        d = t ? u.NW.string(u.t.WWzQtb) : u.NW.string(u.t.woMjLS);
    return (0, n.jsx)(l.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: d,
        footnote: u.NW.string(u.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, n.jsx)(i.zxk, {
            size: i.zxk.Sizes.SMALL,
            onClick: () => {
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([r.e('76540'), r.e('56898')]).then(r.bind(r, 607018));
                        return (t) => (0, n.jsx)(e, a({ reason: o.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: s.M }
                );
            },
            children: u.NW.string(u.t['13ofGh'])
        })
    });
}
