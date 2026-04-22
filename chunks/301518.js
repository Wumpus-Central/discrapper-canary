"use strict";
a.d(t, { S: () => i });
var r = a(123633),
    l = a(624210),
    n = a(26279);
async function i(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let a = r.A.currentOrder;
    if (a?.id != null && a.status === n.Re.DRAFT)
        try {
            await (0, l.Nl)(a.id);
        } catch (e) {}
}
