g.d(v, { S: () => r });
var B = g(255367);
g(73800);
var t = g(172751),
    f = g(510918),
    C = g(131085),
    e = g(668271);
function r(A) {
    let v = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, B.jsx)('div', {
        className: e.badgeContainer,
        children: (0, B.jsx)(t.m0, {
            guildId: A.guildId,
            textClassName: e.tagText,
            guildTag: v,
            guildBadge:
                'string' == typeof A.badge
                    ? A.badge
                    : (0, B.jsx)(f.v, {
                          className: e.badgePreview,
                          badge: A.badge,
                          width: C.Gg.SIZE_12,
                          height: C.Gg.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor
                      })
        })
    });
}
