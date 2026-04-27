n.d(t, { S: () => s });
var i = n(123633),
    l = n(624210),
    a = n(26279);
async function s(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = i.A.currentOrder;
    if (n?.id != null && n.status === a.Re.DRAFT)
        try {
            await (0, l.Nl)(n.id);
        } catch (e) {}
}
