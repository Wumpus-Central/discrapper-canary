v.d(g, { S: () => C });
var B = v(200651);
v(192379);
var t = v(979264),
    e = v(550271),
    f = v(308083),
    r = v(668271);
function C(A) {
    let g = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, B.jsx)('div', {
        className: r.badgeContainer,
        children: (0, B.jsx)(t.aG, {
            guildId: A.guildId,
            textClassName: r.tagText,
            clanTag: g,
            clanBadge: (0, B.jsx)(e.A, {
                className: r.badgePreview,
                badge: A.badge,
                width: f.NC.SIZE_12,
                height: f.NC.SIZE_12,
                primaryTintColor: A.primaryColor,
                secondaryTintColor: A.secondaryColor
            })
        })
    });
}
