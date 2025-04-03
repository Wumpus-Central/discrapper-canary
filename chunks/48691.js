n.d(t, {
    b: () => p,
    t: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(44315),
    o = n(377171),
    a = n(981631),
    u = n(388032),
    s = n(28651);
function c(e) {
    let { label: t, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: a } = e;
    return (0, r.jsxs)('div', {
        className: s.badge,
        style: { backgroundColor: n },
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: s.__invalid_badgeText,
                children: t
            }),
            (0, r.jsx)(l, {
                className: s.badgeIcon,
                color: null != a ? a : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, r.jsx)(c, {
        label: u.NW.string(u.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: i.T$Z
    });
}
function p() {
    return (0, r.jsx)(c, {
        label: u.NW.string(u.t.TgsPaG),
        icon: i.vdY,
        iconColor: (0, l.Lq)(a.Ilk.PRIMARY_330)
    });
}
