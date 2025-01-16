r.d(t, {
    Z: function () {
        return C;
    }
});
var i = r(200651);
r(192379);
var s = r(120356),
    a = r.n(s),
    n = r(481060),
    l = r(518950),
    o = r(667499);
function C(e) {
    var t;
    let { user: r, checked: s, onChange: C, disabled: d } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            user: r,
            size: n.AvatarSizes.SIZE_32
        }),
        f = null !== (t = r.globalName) && void 0 !== t ? t : r.username;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsxs)('div', {
                className: o.user,
                children: [
                    (0, i.jsx)(n.Avatar, {
                        className: a()({ [o.muted]: d }),
                        src: c,
                        'aria-label': f,
                        size: n.AvatarSizes.SIZE_32,
                        ...x
                    }),
                    (0, i.jsx)(n.Text, {
                        color: d ? 'text-muted' : 'text-normal',
                        variant: 'text-md/semibold',
                        children: f
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o.checkbox,
                children: (0, i.jsx)(n.Checkbox, {
                    disabled: d,
                    value: s,
                    onChange: (e, t) => C(r, t)
                })
            })
        ]
    });
}
