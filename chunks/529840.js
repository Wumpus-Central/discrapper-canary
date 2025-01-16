r.d(t, {
    Z: function () {
        return o;
    }
});
var s = r(200651);
r(192379);
var i = r(120356),
    a = r.n(i),
    n = r(481060),
    l = r(518950),
    C = r(667499);
function o(e) {
    var t;
    let { user: r, checked: i, onChange: o, disabled: d } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            user: r,
            size: n.AvatarSizes.SIZE_32
        }),
        f = null !== (t = r.globalName) && void 0 !== t ? t : r.username;
    return (0, s.jsxs)('div', {
        className: C.container,
        children: [
            (0, s.jsxs)('div', {
                className: C.user,
                children: [
                    (0, s.jsx)(n.Avatar, {
                        className: a()({ [C.muted]: d }),
                        src: c,
                        'aria-label': f,
                        size: n.AvatarSizes.SIZE_32,
                        ...x
                    }),
                    (0, s.jsx)(n.Text, {
                        color: d ? 'text-muted' : 'text-normal',
                        variant: 'text-md/semibold',
                        children: f
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: C.checkbox,
                children: (0, s.jsx)(n.Checkbox, {
                    disabled: d,
                    value: i,
                    onChange: (e, t) => o(r, t)
                })
            })
        ]
    });
}
