n.d(e, {
    b: function () {
        return f;
    },
    t: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(44315),
    o = n(377171),
    u = n(981631),
    a = n(388032),
    s = n(383011);
function c(t) {
    let { label: e, backgroundColor: n = o.Z.BUTTON_SECONDARY_BACKGROUND, icon: l, iconColor: u } = t;
    return (0, i.jsxs)('div', {
        className: s.badge,
        style: { backgroundColor: n },
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                className: s.__invalid_badgeText,
                children: e
            }),
            (0, i.jsx)(l, {
                className: s.badgeIcon,
                color: null != u ? u : 'currentColor',
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
        iconColor: (0, l.Lq)(u.Ilk.PRIMARY_330)
    });
}
