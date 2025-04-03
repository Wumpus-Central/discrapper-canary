B.d(g, { S: () => E });
var C = B(200651);
B(192379);
var Q = B(979264),
    w = B(550271),
    D = B(308083),
    f = B(668271);
function E(A) {
    let g = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, C.jsx)('div', {
        className: f.badgeContainer,
        children: (0, C.jsx)(Q.aG, {
            guildId: A.guildId,
            textClassName: f.tagText,
            clanTag: g,
            clanBadge: (0, C.jsx)(w.A, {
                className: f.badgePreview,
                badge: A.badge,
                width: D.NC.SIZE_12,
                height: D.NC.SIZE_12,
                primaryTintColor: A.primaryColor,
                secondaryTintColor: A.secondaryColor
            })
        })
    });
}
