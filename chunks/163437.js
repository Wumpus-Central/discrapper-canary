(e(938796), e(284009));
var u = e(665260);
e(67480);
var r = e(722178),
    i = e(652215);
function l(t) {
    return !1 === t.available;
}
function o(t, n) {
    if (t.type === i.Puh.SUBSCRIPTION) {
        let e = n.getForSKU(t.id);
        if (e.length > 0) {
            let t = e[0];
            return (0, r.y8)(t.id).amount;
        }
    }
    return t.price?.amount ?? 0;
}
e.d(
    n,
    {},
    {
        PJ: function (t) {
            return (0, u.Lt)(t, i.d68.APPLICATION_GUILD_SUBSCRIPTION);
        },
        Se: l,
        Uo: function (t, n) {
            let e = n?.deleted ?? !1,
                u = null != n && l(n);
            return t.status === i.Dmq.CANCELED || e || u;
        },
        bg: function (t) {
            return (0, u.Lt)(t, i.d68.APPLICATION_USER_SUBSCRIPTION);
        },
        oC: function (t, n, e) {
            return t.slice().sort((t, u) => {
                let r = n.get(t.skuId),
                    i = null != r ? o(r, e) : 0,
                    l = n.get(u.skuId);
                return i - (null != l ? o(l, e) : 0);
            });
        },
    },
);
