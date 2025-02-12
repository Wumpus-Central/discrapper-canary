n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(259580),
    r = n(528027),
    s = n(686807),
    o = n(113318),
    c = n(845025);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        u = (0, o.Z)(n, t.ref_id),
        m = (0, i.jsx)(r.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, i.jsxs)(l.P3F, {
        className: c.container,
        onClick: () => {
            null == u || u.navigateToChannel(), d();
        },
        'aria-label': null == u ? void 0 : u.ariaLabel,
        role: 'link',
        children: [
            (0, i.jsx)('div', {
                className: c.emojiContainer,
                children: m
            }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, s.Z)(t)
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, i.jsx)(a.Z, {
                direction: a.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
