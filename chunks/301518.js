a.d(t, { S: () => s });
var l = a(224771),
    r = a(624210),
    n = a(224949);
async function s(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let a = n.A.currentOrder;
    if (a?.id != null && a.status === l.Re.DRAFT)
        try {
            await (0, r.Nl)(a.id);
        } catch (e) {}
}
