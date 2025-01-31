n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(129861),
    d = n(700582),
    u = n(600164),
    h = n(158776),
    p = n(51144),
    m = n(22078);
function f(e) {
    let { user: t, row: n, hideDiscriminator: l, comparator: f, selected: g, checked: _, onClick: C, onMouseEnter: x, 'aria-setsize': v, 'aria-posinset': E } = e,
        I = (0, s.e7)([h.Z], () => h.Z.getStatus(t.id)),
        b = (0, r.JA)(String(t.id));
    return (0, i.jsx)(o.P3F, {
        id: 'user-row-'.concat(n),
        className: m.friendWrapper,
        onClick: () => {
            null != C && C(t.id);
        },
        onMouseEnter: () => {
            null != x && x(n);
        },
        ...b,
        role: 'option',
        'aria-selected': _,
        'aria-setsize': v,
        'aria-posinset': E,
        children: (0, i.jsxs)(u.Z, {
            align: u.Z.Align.CENTER,
            className: a()(m.friend, { [m.friendSelected]: g }),
            children: [
                (0, i.jsx)(d.Z, {
                    user: t,
                    status: I,
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
                (0, i.jsx)(o.XZJ, {
                    displayOnly: !0,
                    size: 22,
                    value: _,
                    className: m.checkbox
                })
            ]
        })
    });
}
