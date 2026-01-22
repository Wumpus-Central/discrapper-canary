e.d(t, { M: () => h });
var g = e(627968);
e(64700);
var r = e(534400),
    v = e(81461),
    f = e(743981),
    B = e(197827);
function h(A) {
    let t = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, g.jsx)("div", {
        className: B.fC,
        children: (0, g.jsx)(r.o9, {
            guildId: A.guildId,
            textClassName: B.em,
            guildTag: t,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, g.jsx)(v.J, {
                          className: B.i6,
                          badge: A.badge,
                          width: f.Sl.SIZE_12,
                          height: f.Sl.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor,
                      }),
        }),
    });
}
