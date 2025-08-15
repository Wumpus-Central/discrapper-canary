t.d(e, { S: () => s });
var n = t(255367);
t(73800);
var r = t(172751),
    l = t(510918),
    i = t(131085),
    a = t(215486);
function s(A) {
    let e = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, n.jsx)("div", {
        className: a.badgeContainer,
        children: (0, n.jsx)(r.m0, {
            guildId: A.guildId,
            textClassName: a.tagText,
            guildTag: e,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, n.jsx)(l.v, {
                          className: a.badgePreview,
                          badge: A.badge,
                          width: i.Gg.SIZE_12,
                          height: i.Gg.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor,
                      }),
        }),
    });
}
