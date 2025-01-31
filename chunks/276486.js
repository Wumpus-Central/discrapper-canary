n.d(t, {
    l: () => u,
    v: () => c
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(144114),
    s = n(489813),
    o = n(815660),
    a = n(388032);
function u() {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            icon: l.AtH,
            text: a.intl.string(a.t.woMjLS),
            footnote: a.intl.string(a.t['jMh+TU']),
            meetsRequirement: !1,
            children: (0, i.jsx)(l.ua7, {
                text: a.intl.string(a.t.mGlP39),
                children: (e) =>
                    (0, i.jsx)(l.zxk, {
                        ...e,
                        size: l.zxk.Sizes.SMALL,
                        disabled: !0,
                        children: a.intl.string(a.t['13ofGh'])
                    })
            })
        })
    });
}
function c(e) {
    let { isUserVerified: t } = e,
        u = t ? a.intl.string(a.t.WWzQtb) : a.intl.string(a.t.woMjLS);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            icon: l.AtH,
            text: u,
            footnote: a.intl.string(a.t['jMh+TU']),
            meetsRequirement: t,
            children: (0, i.jsx)(l.zxk, {
                size: l.zxk.Sizes.SMALL,
                onClick: () => {
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('76540'), n.e('47528')]).then(n.bind(n, 607018));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    reason: r.L.GUILD_PHONE_REQUIRED,
                                    ...t
                                });
                        },
                        { modalKey: o.M }
                    );
                },
                children: a.intl.string(a.t['13ofGh'])
            })
        })
    });
}
