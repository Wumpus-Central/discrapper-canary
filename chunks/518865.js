var e = r(288106),
    u = r(604913),
    i = r(993408),
    l = r(623373),
    a = r(792996);
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
                    ? a.intl.string(a.t["302tKP"])
                    : a.intl.string(a.t["7EGhnE"])
                : null;
        },
        PY: function (n, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (o(r)) return r;
            if (null == t || t.rewardStatus !== e.GM.EARNED || !o(t)) return null;
            let u = t.rewardConfig?.discount;
            return null == u ||
                (0, i.G0)(n) ||
                !n.isFirstParty ||
                ((0, i.aw)(n) && !t.includeBundles) ||
                !(u.fiatEnabled && (0, l.go)(n))
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
