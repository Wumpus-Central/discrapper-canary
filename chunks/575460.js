n.d(t, { Z: () => d }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(259580),
    a = n(528027),
    s = n(686807),
    o = n(113318),
    c = n(604528);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        u = (0, o.Z)(n, t.ref_id),
        m = (0, r.jsx)(a.Z, {
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
                children: m
            }),
            (0, r.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, s.Z)(t)
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, r.jsx)(l.Z, {
                direction: l.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
