"use strict";
n.d(t, { S: () => l });
var a = n(123633),
    r = n(624210),
    i = n(26279);
async function l(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let n = a.A.currentOrder;
    if (n?.id != null && n.status === i.Re.DRAFT)
        try {
            await (0, r.Nl)(n.id);
        } catch (e) {}
}
