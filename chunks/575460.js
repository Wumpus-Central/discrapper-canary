n.d(t, { Z: () => u }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(259580),
    a = n(528027),
    o = n(686807),
    s = n(113318),
    c = n(604528);
function u(e) {
    let { benefit: t, guildId: n, onClick: u } = e,
        d = (0, s.Z)(n, t.ref_id),
        m = (0, r.jsx)(a.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, r.jsxs)(i.P3F, {
        className: c.container,
        onClick: () => {
            null == d || d.navigateToChannel(), u();
        },
        'aria-label': null == d ? void 0 : d.ariaLabel,
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
                        children: (0, o.Z)(t)
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
