var r = e(288106),
    u = e(604913),
    l = e(993408),
    i = e(623373),
    o = e(248180),
    a = e(792996);
function s(n) {
    return n?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
e.d(
    t,
    {},
    {
        Dj: s,
        MX: function (n) {
            return s(n) && n?.rewardConfig?.discount != null
                ? 100 === (0, o.S)(n)
                    ? a.intl.string(a.t["302tKP"])
                    : a.intl.string(a.t["7EGhnE"])
                : null;
        },
        PY: function (n, t) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (s(e)) return e;
            if (null == t || t.rewardStatus !== r.GM.EARNED || !s(t)) return null;
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
