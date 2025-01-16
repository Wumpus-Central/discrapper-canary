n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(259580),
    a = n(528027),
    o = n(686807),
    s = n(113318),
    c = n(868202);
function d(e) {
    let { benefit: t, guildId: n, onClick: d } = e,
        u = (0, s.Z)(n, t.ref_id),
        m = (0, i.jsx)(a.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, i.jsxs)(r.Clickable, {
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
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, o.Z)(t)
                    }),
                    (0, i.jsx)(r.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, i.jsx)(l.Z, {
                direction: l.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
