var t = s(477900);
s(582128);
var i = s(734660),
    o = s(369163),
    c = s(359286),
    a = s(652215);
s.d(
    r,
    {},
    {
        A: function (e) {
            let { tier: r, ...s } = e;
            switch (r) {
                case a.TVA.NONE:
                case a.TVA.TIER_1:
                    return (0, t.jsx)(i.BoostTier1SimpleIcon, { ...s });
                case a.TVA.TIER_2:
                    return (0, t.jsx)(o.BoostTier2SimpleIcon, { ...s });
                case a.TVA.TIER_3:
                    return (0, t.jsx)(c.BoostTier3SimpleIcon, { ...s });
                default:
                    throw Error("Not a valid tier type");
            }
        },
    },
);
