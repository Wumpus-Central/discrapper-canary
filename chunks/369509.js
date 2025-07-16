v.d(g, { S: () => C });
var t = v(255367);
v(73800);
var B = v(172751),
    e = v(510918),
    f = v(131085),
    r = v(668271);
function C(A) {
    let g = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, t.jsx)('div', {
        className: r.badgeContainer,
        children: (0, t.jsx)(B.m0, {
            guildId: A.guildId,
            textClassName: r.tagText,
            guildTag: g,
            guildBadge:
                'string' == typeof A.badge
                    ? A.badge
                    : (0, t.jsx)(e.v, {
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
