i.d(t, { S: () => s });
var a = i(123633),
    c = i(624210),
    e = i(26279);
async function s(r) {
    let { checkoutSucceeded: t } = r;
    if (t) return;
    let i = a.A.currentOrder;
    if (i?.id != null && i.status === e.Re.DRAFT)
        try {
            await (0, c.Nl)(i.id);
        } catch (r) {}
}
