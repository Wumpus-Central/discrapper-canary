n.d(t, { Z: () => d }), n(266796);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(259580),
    o = n(528027),
    l = n(686807),
    s = n(113318),
    c = n(604528);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        u = (0, s.Z)(n, t.ref_id),
        _ = (0, r.jsx)(o.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, r.jsxs)(i.P3F, {
        className: c.container,
        onClick: () => {
            null == u || u.navigateToChannel(), d();
        },
        'aria-label': null == u ? void 0 : u.ariaLabel,
        role: 'link',
        children: [
            (0, r.jsx)('div', {
                className: c.emojiContainer,
                children: _
            }),
            (0, r.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, l.Z)(t)
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)(a.Z, {
                direction: a.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
