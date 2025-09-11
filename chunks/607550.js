n.d(t, {
    iI: () => o,
    ny: () => l,
    yj: () => s,
}),
    n(388685);
var r = n(879690),
    i = n(731965);
let a = (0, r.U)((e, t) => ({
    skuIds: new Set(),
    addSku: (t) => {
        (0, i.j)(() => {
            e((e) => ({
                skuIds: new Set([...e.skuIds, t]),
            }));
        });
    },
    removeSku: (t) => {
        (0, i.j)(() => {
            e((e) => {
                let n = new Set(e.skuIds);
                return n.delete(t), { skuIds: n };
            });
        });
    },
    hasSkuId: (e) => t().skuIds.has(e),
    getSkuIds: () => Array.from(t().skuIds),
    clearWishlist: () => {
        (0, i.j)(() => {
            e({ skuIds: new Set() });
        });
    },
}));
function o(e) {
    a.getState().addSku(e);
}
function s(e) {
    a.getState().removeSku(e);
}
function l(e) {
    return a((t) => t.skuIds.has(e));
}
