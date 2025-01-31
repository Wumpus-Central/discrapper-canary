n.d(t, {
    b: () => h,
    t: () => c
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(44315),
    s = n(377171),
    a = n(981631),
    o = n(388032),
    d = n(383011);
function u(e) {
    let { label: t, backgroundColor: n = s.Z.BUTTON_SECONDARY_BACKGROUND, icon: r, iconColor: a } = e;
    return (0, i.jsxs)('div', {
        className: d.badge,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: d.__invalid_badgeText,
                children: t
            }),
            (0, i.jsx)(r, {
                className: d.badgeIcon,
                color: null != a ? a : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function c() {
    return (0, i.jsx)(u, {
        label: o.intl.string(o.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: l.T$Z
    });
}
function h() {
    return (0, i.jsx)(u, {
        label: o.intl.string(o.t.TgsPaG),
        icon: l.vdY,
        iconColor: (0, r.Lq)(a.Ilk.PRIMARY_330)
    });
}
