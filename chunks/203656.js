v.d(h, { M: () => t });
var l = v(477900);
v(582128);
var H = v(534400),
    M = v(620757),
    V = v(743981),
    Z = v(557682);
function t(A) {
    let h = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, l.jsx)("div", {
        className: Z.fC,
        children: (0, l.jsx)(H.o9, {
            guildId: A.guildId,
            textClassName: Z.em,
            guildTag: h,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, l.jsx)(M.J, {
                          className: Z.i6,
                          badge: A.badge,
                          width: V.Sl.SIZE_12,
                          height: V.Sl.SIZE_12,
                          primaryTintColor: A.primaryColor ?? void 0,
                          secondaryTintColor: A.secondaryColor ?? void 0,
                      }),
        }),
    });
}
