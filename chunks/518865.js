var u = e(288106),
    r = e(604913),
    l = e(993408),
    i = e(623373);
function o(n) {
    return n?.tenantMetadata?.collectibles?.type === r.hE.TARGETED_OFFER;
}
e.d(
    t,
    {},
    {
        Dj: o,
        PY: function (n, t) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (o(e)) return e;
            if (null == t || t.rewardStatus !== u.GM.EARNED || !o(t)) return null;
            let r = t.rewardConfig?.discount;
            return null == r ||
                (0, l.G0)(n) ||
                !n.isFirstParty ||
                ((0, l.aw)(n) && !t.includeBundles) ||
                !(r.fiatEnabled && (0, i.go)(n))
                ? null
                : t;
        },
        aJ: function (n) {
            return n === r.Pz.NITRO ? "nitro-pink" : "collectibles";
        },
        lG: function (n) {
            return n === r.Pz.NITRO ? "nitro-pink" : "purple";
        },
    },
);
