g.d(v, { M: () => H });
var B = g(627968);
g(64700);
var C = g(534400),
    h = g(81461),
    f = g(743981),
    Q = g(197827);
function H(A) {
    let v = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, B.jsx)("div", {
        className: Q.fC,
        children: (0, B.jsx)(C.o9, {
            guildId: A.guildId,
            textClassName: Q.em,
            guildTag: v,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, B.jsx)(h.J, {
                          className: Q.i6,
                          badge: A.badge,
                          width: f.Sl.SIZE_12,
                          height: f.Sl.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor,
                      }),
        }),
    });
}
