n.d(t, {
    b: () => p,
    t: () => d
});
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(44315),
    a = n(377171),
    o = n(981631),
    s = n(388032),
    c = n(28651);
function u(e) {
    let { label: t, backgroundColor: n = a.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: o } = e;
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
                color: null != o ? o : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, r.jsx)(u, {
        label: s.intl.string(s.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: i.T$Z
    });
}
function p() {
    return (0, r.jsx)(u, {
        label: s.intl.string(s.t.TgsPaG),
        icon: i.vdY,
        iconColor: (0, l.Lq)(o.Ilk.PRIMARY_330)
    });
}
