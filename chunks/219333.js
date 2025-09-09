n.d(t, { j: () => o }), n(388685), n(415506);
var r = n(704215),
    i = n(266454);
let a = new Map([[n(304426).m.NITRO_DROP, r.z.NITRO_DROP_REWARD]]),
    o = (e) => {
        let { campaignID: t } = e,
            n = a.get(t);
        if (void 0 === n)
            throw Error("reward redemptions for the campaign with ID ".concat(t, " is not supported through DCF"));
        (0, i.Q3)(n);
    };
