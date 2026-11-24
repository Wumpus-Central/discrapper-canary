var l = e(288106),
    u = e(604913),
    r = e(993408),
    i = e(623373);
function o(n) {
    return n?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
e.d(
    t,
    {},
    {
        Dj: o,
        PY: function (n, t) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (o(e)) return e;
            if (null == t || t.rewardStatus !== l.GM.EARNED || !o(t)) return null;
            let u = t.rewardConfig?.discount;
            return null == u ||
                (0, r.G0)(n) ||
                !n.isFirstParty ||
                ((0, r.aw)(n) && !t.includeBundles) ||
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
