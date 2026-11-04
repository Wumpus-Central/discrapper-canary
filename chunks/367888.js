var i = n(682901);
function r(e) {
    return e.find((e) => {
        let t = i.hd[e.planId];
        return null != t && null != t.premiumType;
    });
}
n.d(
    t,
    {},
    {
        _1: r,
        a9: function (e, t, n) {
            let a = r(e);
            if (null == a) {
                if (e.length > 0) {
                    let r = i.hd[e[0].planId];
                    ((t = r.interval), (n = r.intervalCount));
                }
                return (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return (
                        Object.keys(i.hd).find((n) => {
                            let r = i.hd[n];
                            return null != r && r.skuId === i.pe.NONE && r.interval === e && r.intervalCount === t;
                        }) ?? i.gD.NONE_MONTH
                    );
                })(t, n);
            }
            return a.planId;
        },
    },
);
