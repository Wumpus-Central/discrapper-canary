r.d(t, { Z: () => o });
var a = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    n = r(481060),
    l = r(518950),
    C = r(667499);
function o(e) {
    var t;
    let { user: r, checked: s, onChange: o, disabled: d } = e,
        { avatarSrc: c, eventHandlers: x } = (0, l.Z)({
            user: r,
            size: n.EFr.SIZE_32
        }),
        h = null !== (t = r.globalName) && void 0 !== t ? t : r.username;
    return (0, a.jsxs)('div', {
        className: C.container,
        children: [
            (0, a.jsxs)('div', {
                className: C.user,
                children: [
                    (0, a.jsx)(n.qEK, {
                        className: i()({ [C.muted]: d }),
                        src: c,
                        'aria-label': h,
                        size: n.EFr.SIZE_32,
                        ...x
                    }),
                    (0, a.jsx)(n.Text, {
                        color: d ? 'text-muted' : 'text-normal',
                        variant: 'text-md/semibold',
                        children: h
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: C.checkbox,
                children: (0, a.jsx)(n.XZJ, {
                    disabled: d,
                    value: s,
                    onChange: (e, t) => o(r, t)
                })
            })
        ]
    });
}
