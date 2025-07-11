n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    a = n(731722),
    l = n(172751),
    o = n(131085),
    c = n(729495);
let d = r.memo(function (e) {
    let { guildId: t, guildProfile: n } = e;
    return (0, i.jsx)('div', {
        className: c.tagContainer,
        children: (0, i.jsxs)('div', {
            className: c.tag,
            children: [
                null != n.badge &&
                    (0, i.jsx)(l.eI, {
                        src: (0, a.Ic)(t, n.badge, o.Gg.SIZE_32),
                        tag: n.tag,
                        size: o.Gg.SIZE_32,
                        className: c.badge
                    }),
                (0, i.jsx)(s.Text, {
                    tag: 'span',
                    variant: 'heading-xl/semibold',
                    children: n.tag
                })
            ]
        })
    });
});
