var i = n(561573),
    r = n(828596),
    a = n(918467),
    s = n(288106),
    l = n(181170),
    o = n(652215);
function d() {
    return "loading" === a.A.getFetchState(o.FYj);
}
function c() {
    if ("success" !== a.A.getFetchState(o.FYj)) return;
    let e = Date.now(),
        t = (function (e, t) {
            let n = new Set();
            for (let i of e ?? [])
                if (null != i.skuIds && i.rewardStatus !== s.GM.CONSUMED && (0, l.us)(i, t))
                    for (let e of i.skuIds) n.add(e);
            return [...n];
        })(a.A.getPromotionsForApplication(o.FYj), e).filter((t) => !(0, l.h)(i.A.getFetchStateForSkuId(t), e));
    for (let e = 0; e < t.length; e += 50) (0, r.N4)({ skuIds: t.slice(e, e + 50) });
}
n.d(
    t,
    {},
    {
        X: c,
        s: async function () {
            (d() &&
                (await new Promise((e) => {
                    a.A.addChangeListener(function t() {
                        d() || (a.A.removeChangeListener(t), e());
                    });
                })),
                c());
        },
    },
);
