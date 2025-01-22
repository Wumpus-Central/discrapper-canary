n.d(t, {
    b: function () {
        return h;
    },
    t: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(44315),
    o = n(377171),
    s = n(981631),
    a = n(388032),
    u = n(383011);
function d(e) {
    let { label: t, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: s } = e;
    return (0, i.jsxs)('div', {
        className: u.badge,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: u.__invalid_badgeText,
                children: t
            }),
            (0, i.jsx)(l, {
                className: u.badgeIcon,
                color: null != s ? s : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function c() {
    return (0, i.jsx)(d, {
        label: a.intl.string(a.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: r.SparklesIcon
    });
}
function h() {
    return (0, i.jsx)(d, {
        label: a.intl.string(a.t.TgsPaG),
        icon: r.PencilIcon,
        iconColor: (0, l.Lq)(s.Ilk.PRIMARY_330)
    });
}
