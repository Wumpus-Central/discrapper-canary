var e = r(288106),
    u = r(604913),
    i = r(993408),
    a = r(623373),
    l = r(792996);
function o(n) {
    return n?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
r.d(
    t,
    {},
    {
        Dj: o,
        Jl: function (n) {
            if (!o(n)) return !1;
            let t = n?.rewardConfig?.discount;
            return null != t && t.fiatEnabled;
        },
        MX: function (n) {
            return o(n) && n?.rewardConfig?.discount != null
                ? n.rewardConfig?.discount?.type === e.RP.PERCENT && 100 === n.rewardConfig.discount.amount
                    ? l.intl.string(l.t["302tKP"])
                    : l.intl.string(l.t["7EGhnE"])
                : null;
        },
        PY: function (n, t) {
            if (null == t || t.rewardStatus !== e.GM.EARNED || !o(t)) return null;
            let r = t.rewardConfig?.discount;
            return null == r ||
                (0, i.G0)(n) ||
                !n.isFirstParty ||
                ((0, i.aw)(n) && !t.includeBundles) ||
                !(r.fiatEnabled && (0, a.go)(n))
                ? null
                : t;
        },
        aJ: function (n) {
            return n === u.Pz.NITRO ? "nitro-pink" : "collectibles";
        },
        lG: function (n) {
            return n === u.Pz.NITRO ? "nitro-pink" : "purple";
        },
    },
);
