v.d(g, { S: () => C });
var B = v(200651);
v(192379);
var t = v(172751),
    e = v(510918),
    f = v(131085),
    r = v(668271);
function C(A) {
    let g = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, B.jsx)('div', {
        className: r.badgeContainer,
        children: (0, B.jsx)(t.m0, {
            guildId: A.guildId,
            textClassName: r.tagText,
            guildTag: g,
            guildBadge: (0, B.jsx)(e.v, {
                className: r.badgePreview,
                badge: A.badge,
                width: f.Gg.SIZE_12,
                height: f.Gg.SIZE_12,
                primaryTintColor: A.primaryColor,
                secondaryTintColor: A.secondaryColor
            })
        })
    });
}
