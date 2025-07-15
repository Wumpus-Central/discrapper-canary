n.d(t, {
    l: () => u,
    v: () => d
});
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(144114),
    o = n(489813),
    s = n(815660),
    a = n(388032),
    c = n(667084);
function u() {
    return (0, r.jsx)(o.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: a.intl.string(a.t.woMjLS),
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(i.DY3, {
            text: a.intl.string(a.t.mGlP39),
            children: (0, r.jsx)(i.zxk, {
                variant: 'primary',
                size: 'sm',
                disabled: !0,
                text: a.intl.string(a.t['13ofGh'])
            })
        })
    });
}
function d(e) {
    let { isUserVerified: t } = e,
        u = t ? a.intl.string(a.t.WWzQtb) : a.intl.string(a.t.woMjLS);
    return (0, r.jsx)(o.PU, {
        className: c.editableRequirementContainer,
        icon: i.AtH,
        text: u,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(i.zxk, {
            variant: 'primary',
            size: 'sm',
            text: a.intl.string(a.t['13ofGh']),
            onClick: () => {
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('76540'), n.e('56898')]).then(n.bind(n, 607018));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
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
                                })({ reason: l.L.GUILD_PHONE_REQUIRED }, t)
                            );
                    },
                    { modalKey: s.M }
                );
            }
        })
    });
}
