n.d(t, { x: () => o });
var r = n(197550),
    i = n(711959),
    a = n(877820);
async function o(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = a.Z.currentOrder;
    if ((null == n ? void 0 : n.id) != null && n.status === r.iF.DRAFT)
        try {
            await (0, i.J0)(n.id);
        } catch (e) {}
}
