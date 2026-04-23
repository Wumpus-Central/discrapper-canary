h.d(v, { M: () => H });
var g = h(627968);
h(64700);
var B = h(534400),
    C = h(659512),
    f = h(743981),
    M = h(166453);
function H(A) {
    let v = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, g.jsx)("div", {
        className: M.fC,
        children: (0, g.jsx)(B.o9, {
            guildId: A.guildId,
            textClassName: M.em,
            guildTag: v,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, g.jsx)(C.J, {
                          className: M.i6,
                          badge: A.badge,
                          width: f.Sl.SIZE_12,
                          height: f.Sl.SIZE_12,
                          primaryTintColor: A.primaryColor ?? void 0,
                          secondaryTintColor: A.secondaryColor ?? void 0,
                      }),
        }),
    });
}
