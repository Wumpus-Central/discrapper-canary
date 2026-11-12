var e = r(288106),
    u = r(604913),
    l = r(993408),
    i = r(623373),
    a = r(248180),
    o = r(792996);
function c(n) {
    return n?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
r.d(
    t,
    {},
    {
        Dj: c,
        Jl: function (n) {
            if (!c(n)) return !1;
            let t = n?.rewardConfig?.discount;
            return null != t && t.fiatEnabled;
        },
        MX: function (n) {
            return c(n) && n?.rewardConfig?.discount != null
                ? 100 === (0, a.S)(n)
                    ? o.intl.string(o.t["302tKP"])
                    : o.intl.string(o.t["7EGhnE"])
                : null;
        },
        PY: function (n, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (c(r)) return r;
            if (null == t || t.rewardStatus !== e.GM.EARNED || !c(t)) return null;
            let u = t.rewardConfig?.discount;
            return null == u ||
                (0, l.G0)(n) ||
                !n.isFirstParty ||
                ((0, l.aw)(n) && !t.includeBundles) ||
                !(u.fiatEnabled && (0, i.go)(n))
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
