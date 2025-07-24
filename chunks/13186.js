n.d(t, {
    U: () => p,
    Z: () => f
});
var r,
    i = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(990547),
    c = n(755721),
    u = n(481060),
    d = n(213609),
    h = n(341402),
    p = (((r = {}).TOP = 'top'), (r.BOTTOM = 'bottom'), r);
let f = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: l, buttonText: o, onClose: p, art: f, align: g } = e;
    return (
        (0, d.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK
        }),
        (0, i.jsx)('div', {
            className: h.tooltip,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: h.content,
                children: [
                    (0, i.jsx)('div', {
                        className: l,
                        children: f
                    }),
                    (0, i.jsxs)('div', {
                        className: h.body,
                        children: [
                            (0, i.jsx)(u.X6q, {
                                className: h.header,
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: r
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: h.buttonContainer,
                        children: (0, i.jsx)(c.zx, {
                            className: h.button,
                            onClick: (e) => {
                                null == p || p(e);
                            },
                            color: c.zx.Colors.BRAND,
                            children: o
                        })
                    }),
                    (0, i.jsx)('div', { className: a()(h.pointer, { [h.pointerBottom]: 'bottom' === g }) })
                ]
            })
        })
    );
});
