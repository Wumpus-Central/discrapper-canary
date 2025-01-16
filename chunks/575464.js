n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(129861),
    d = n(700582),
    u = n(600164),
    h = n(158776),
    p = n(51144),
    m = n(22078);
function f(e) {
    let { user: t, row: n, hideDiscriminator: l, comparator: f, selected: g, checked: C, onClick: x, onMouseEnter: v, 'aria-setsize': _, 'aria-posinset': I } = e,
        E = (0, s.e7)([h.Z], () => h.Z.getStatus(t.id)),
        b = (0, a.JA)(String(t.id));
    return (0, i.jsx)(o.Clickable, {
        id: 'user-row-'.concat(n),
        className: m.friendWrapper,
        onClick: () => {
            null != x && x(t.id);
        },
        onMouseEnter: () => {
            null != v && v(n);
        },
        ...b,
        role: 'option',
        'aria-selected': C,
        'aria-setsize': _,
        'aria-posinset': I,
        children: (0, i.jsxs)(u.Z, {
            align: u.Z.Align.CENTER,
            className: r()(m.friend, { [m.friendSelected]: g }),
            children: [
                (0, i.jsx)(d.Z, {
                    user: t,
                    status: E,
                    className: m.avatar
                }),
                (0, i.jsxs)(u.Z, {
                    className: m.match,
                    align: u.Z.Align.BASELINE,
                    children: [
                        (0, i.jsx)(o.Text, {
                            tag: 'strong',
                            className: m.nickname,
                            'aria-hidden': !0,
                            variant: 'text-md/medium',
                            children: null != f && f === t.tag ? p.ZP.getName(t) : null != f && '' !== f ? f : p.ZP.getName(t)
                        }),
                        (0, i.jsx)(c.Z, {
                            user: t,
                            hideDiscriminator: l,
                            className: m.discordTag,
                            usernameClass: m.__invalid_weightMedium,
                            discriminatorClass: m.__invalid_weightMedium,
                            forceUsername: !0
                        })
                    ]
                }),
                (0, i.jsx)(o.Checkbox, {
                    displayOnly: !0,
                    size: 22,
                    value: C,
                    className: m.checkbox
                })
            ]
        })
    });
}
