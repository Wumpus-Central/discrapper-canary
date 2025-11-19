n.d(t, {
    Nt: () => g,
    R2: () => f,
    ZC: () => m,
    t6: () => _,
    tv: () => p,
    vY: () => h,
}),
    n(388685);
var r = n(473749);
n(525654);
var i = n(442837);
n(607070);
var a = n(594174);
n(451478);
var o = n(980463),
    s = n(823961),
    l = n(317951),
    c = n(111810),
    u = n(477931),
    d = n(981631);
function f(e) {
    let [t, n, a] = (0, i.Wu)([s.Z], () => [s.Z.isFetchingPrice(e), s.Z.getPrice(e), s.Z.getErrored(e)]);
    return (
        (0, r.useEffect)(() => {
            t || null != n || a || (0, o.Gq)(e);
        }, [t, n, a, e]),
        {
            price: n,
            fetchingPrice: t,
            error: a,
        }
    );
}
function _(e) {
    let t = (0, c.V1)("Utils.tsx"),
        [n, a, l, u, d] = (0, i.Wu)([s.Z], () => [
            s.Z.isEntitlementFetched(e),
            s.Z.fetchPotionCount(e),
            s.Z.isEntitlementFetching(e),
            s.Z.getEntitlement(e),
            s.Z.getErrored(e),
        ]);
    return (
        (0, r.useEffect)(() => {
            null != d || n || l || !t || (0, o.gA)(e);
        }, [n, l, e, t, d]),
        {
            entitlement: u,
            numPotions: a,
            fetchedEntitlement: n,
            error: d,
        }
    );
}
function p(e, t, n, r) {
    return !t && null == n && ("" !== e || (null != r && r.length > 0));
}
function h(e) {
    if (null != e)
        return {
            message_emoji: {
                id: e.emoji.id,
                name: (0, o.zI)(e.emoji),
            },
        };
}
function m(e) {
    if (null == e || null == e.potions || 0 === e.potions.length) return null;
    for (let r of e.potions) {
        var t, n;
        if (
            r.type === u.B.CONFETTI &&
            r.used_by === (null == (t = a.default.getCurrentUser()) ? void 0 : t.id) &&
            (null == (n = r.emoji) ? void 0 : n.length) > 0
        )
            return r.emoji[0];
    }
    return null;
}
let g = () => {
    let { entitlement: e, numPotions: t } = _(l.D1);
    return null != e && e.type === d.qc2.PURCHASE && null != t && t > 0;
};
