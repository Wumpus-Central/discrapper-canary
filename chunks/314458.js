var r = i(313217),
    e = i(818296),
    o = i(248180),
    s = i(518865),
    a = i(792996);
i.d(
    t,
    {},
    {
        K: function (n) {
            let t = (0, e.g)(n),
                i = (0, r.s)("collectibles_discount_promotion_purchase_cta");
            return t?.rewardConfig?.discount == null || (i && !(0, s.Dj)(t))
                ? null
                : 100 === (0, o.G)(t)
                  ? a.intl.string(a.t["302tKP"])
                  : a.intl.string(a.t["7EGhnE"]);
        },
    },
);
