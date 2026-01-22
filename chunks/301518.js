n.d(t, { S: () => s });
var r = n(224771),
    i = n(624210),
    a = n(224949);
async function s(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = a.A.currentOrder;
    if ((null == n ? void 0 : n.id) != null && n.status === r.Re.DRAFT)
        try {
            await (0, i.Nl)(n.id);
        } catch (e) {}
}
