var l = A(477900);
A(582128);
var H = A(534400),
    M = A(803484),
    V = A(743981),
    Z = A(557682);
A.d(
    v,
    {},
    {
        M: function (h) {
            let v = null === h.tag || 0 === h.tag.length ? "WUMP" : h.tag;
            return (0, l.jsx)("div", {
                className: Z.fC,
                children: (0, l.jsx)(H.o9, {
                    guildId: h.guildId,
                    textClassName: Z.em,
                    guildTag: v,
                    guildBadge:
                        "string" == typeof h.badge
                            ? h.badge
                            : (0, l.jsx)(M.J, {
                                  className: Z.i6,
                                  badge: h.badge,
                                  width: V.Sl.SIZE_12,
                                  height: V.Sl.SIZE_12,
                                  primaryTintColor: h.primaryColor ?? void 0,
                                  secondaryTintColor: h.secondaryColor ?? void 0,
                              }),
                }),
            });
        },
    },
);
