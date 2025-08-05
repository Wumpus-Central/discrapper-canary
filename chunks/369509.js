e.d(t, { S: () => B });
var r = e(255367);
e(73800);
var g = e(172751),
    v = e(510918),
    n = e(131085),
    f = e(668271);
function B(A) {
    let t = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, r.jsx)('div', {
        className: f.badgeContainer,
        children: (0, r.jsx)(g.m0, {
            guildId: A.guildId,
            textClassName: f.tagText,
            guildTag: t,
            guildBadge:
                'string' == typeof A.badge
                    ? A.badge
                    : (0, r.jsx)(v.v, {
                          className: f.badgePreview,
                          badge: A.badge,
                          width: n.Gg.SIZE_12,
                          height: n.Gg.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor
                      })
        })
    });
}
