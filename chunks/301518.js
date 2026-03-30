n.d(t, { S: () => r });
var a = n(123633),
    l = n(624210),
    i = n(26279);
async function r(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = a.A.currentOrder;
    if (n?.id != null && n.status === i.Re.DRAFT)
        try {
            await (0, l.Nl)(n.id);
        } catch (e) {}
}
