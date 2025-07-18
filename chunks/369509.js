t.d(e, { S: () => a });
var n = t(255367);
t(73800);
var r = t(172751),
    l = t(510918),
    i = t(131085),
    s = t(668271);
function a(A) {
    let e = null === A.tag || 0 === A.tag.length ? 'WUMP' : A.tag;
    return (0, n.jsx)('div', {
        className: s.badgeContainer,
        children: (0, n.jsx)(r.m0, {
            guildId: A.guildId,
            textClassName: s.tagText,
            guildTag: e,
            guildBadge:
                'string' == typeof A.badge
                    ? A.badge
                    : (0, n.jsx)(l.v, {
                          className: s.badgePreview,
                          badge: A.badge,
                          width: i.Gg.SIZE_12,
                          height: i.Gg.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor
                      })
        })
    });
}
