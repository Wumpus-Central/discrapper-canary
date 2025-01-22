e.d(n, {
    b: function () {
        return f;
    },
    t: function () {
        return d;
    }
});
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(44315),
    u = e(377171),
    o = e(981631),
    a = e(388032),
    s = e(383011);
function c(t) {
    let { label: n, backgroundColor: e = u.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: o } = t;
    return (0, i.jsxs)('div', {
        className: s.badge,
        style: { backgroundColor: e },
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: s.__invalid_badgeText,
                children: n
            }),
            (0, i.jsx)(l, {
                className: s.badgeIcon,
                color: null != o ? o : 'currentColor',
                'aria-hidden': !0
            })
        ]
    });
}
function d() {
    return (0, i.jsx)(c, {
        label: a.intl.string(a.t['I+02Gh']),
        backgroundColor: '#207B8D',
        icon: r.SparklesIcon
    });
}
function f() {
    return (0, i.jsx)(c, {
        label: a.intl.string(a.t.TgsPaG),
        icon: r.PencilIcon,
        iconColor: (0, l.Lq)(o.Ilk.PRIMARY_330)
    });
}
