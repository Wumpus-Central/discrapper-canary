t.d(n, {
    l: function () {
        return c;
    },
    v: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(144114),
    s = t(489813),
    o = t(815660),
    u = t(388032);
function c() {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: u.intl.string(u.t.woMjLS),
            footnote: u.intl.string(u.t['jMh+TU']),
            meetsRequirement: !1,
            children: (0, i.jsx)(r.Tooltip, {
                text: u.intl.string(u.t.mGlP39),
                children: (e) =>
                    (0, i.jsx)(r.Button, {
                        ...e,
                        size: r.Button.Sizes.SMALL,
                        disabled: !0,
                        children: u.intl.string(u.t['13ofGh'])
                    })
            })
        })
    });
}
function a(e) {
    let { isUserVerified: n } = e,
        c = n ? u.intl.string(u.t.WWzQtb) : u.intl.string(u.t.woMjLS);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            icon: r.MobilePhoneIcon,
            text: c,
            footnote: u.intl.string(u.t['jMh+TU']),
            meetsRequirement: n,
            children: (0, i.jsx)(r.Button, {
                size: r.Button.Sizes.SMALL,
                onClick: () => {
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e('76540'), t.e('98859')]).then(t.bind(t, 607018));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    reason: l.L.GUILD_PHONE_REQUIRED,
                                    ...n
                                });
                        },
                        { modalKey: o.M }
                    );
                },
                children: u.intl.string(u.t['13ofGh'])
            })
        })
    });
}
