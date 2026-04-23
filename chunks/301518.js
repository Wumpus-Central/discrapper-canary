n.d(t, { S: () => a });
var i = n(123633),
    l = n(624210),
    s = n(26279);
async function a(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = i.A.currentOrder;
    if (n?.id != null && n.status === s.Re.DRAFT)
        try {
            await (0, l.Nl)(n.id);
        } catch (e) {}
}
