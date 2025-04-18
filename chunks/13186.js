n.d(t, {
    U: () => h,
    Z: () => p
});
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(990547),
    c = n(481060),
    u = n(213609),
    d = n(341402),
    h = (((r = {}).TOP = 'top'), (r.BOTTOM = 'bottom'), r);
let p = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: l, buttonText: o, onClose: h, art: p, align: f } = e;
    return (
        (0, u.Z)({
            type: a.ImpressionTypes.POPOUT,
            name: a.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK
        }),
        (0, i.jsx)('div', {
            className: d.tooltip,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: d.content,
                children: [
                    (0, i.jsx)('div', {
                        className: l,
                        children: p
                    }),
                    (0, i.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, i.jsx)(c.X6q, {
                                className: d.header,
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: r
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: d.buttonContainer,
                        children: (0, i.jsx)(c.zxk, {
                            className: d.button,
                            onClick: (e) => {
                                null == h || h(e);
                            },
                            color: c.zxk.Colors.BRAND,
                            children: o
                        })
                    }),
                    (0, i.jsx)('div', { className: s()(d.pointer, { [d.pointerBottom]: 'bottom' === f }) })
                ]
            })
        })
    );
});
