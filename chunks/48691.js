n.d(t, {
    b: () => p,
    t: () => d
});
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(44315),
    o = n(377171),
    a = n(981631),
    u = n(388032),
    c = n(28651);
function s(e) {
    let { label: t, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: a } = e;
    return (0, r.jsxs)('div', {
        className: c.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: c.__invalid_badgeText,
                children: t
            }),
            (0, r.jsx)(l, {
                className: c.badgeIcon,
                color: null != a ? a : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, r.jsx)(s, {
        label: u.intl.string(u.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: i.T$Z
    });
}
function p() {
    return (0, r.jsx)(s, {
        label: u.intl.string(u.t.TgsPaG),
        icon: i.vdY,
        iconColor: (0, l.Lq)(a.Ilk.PRIMARY_330)
    });
}
