var i = n(855986),
    r = n(287809),
    a = n(615405),
    s = n(652215);
let l = new Set(["US"]);
function o() {
    return r.default.getCurrentUser()?.storeCountry?.country ?? a.A.ipCountryCode;
}
n.d(
    t,
    {},
    {
        ME: function (e) {
            let t = null != e?.id,
                n = null != e && e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
            return t || n;
        },
        Z1: function () {
            let e = o();
            return null != e && l.has(e);
        },
        oS: function () {
            return (0, i.bG)([r.default, a.A], () => {
                let e = o();
                return null != e && l.has(e);
            });
        },
    },
);
