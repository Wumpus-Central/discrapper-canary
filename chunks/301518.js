"use strict";
r.d(t, { S: () => s });
var n = r(123633),
    i = r(624210),
    a = r(26279);
async function s(e) {
    let { checkoutSucceeded: t } = e;
    if (t) return;
    let r = n.A.currentOrder;
    if (r?.id != null && r.status === a.Re.DRAFT)
        try {
            await (0, i.Nl)(r.id);
        } catch (e) {}
}
