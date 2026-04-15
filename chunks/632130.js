n.d(t, { A: () => m }), n(321073);
var i = n(339048),
    l = n(830382),
    a = n(800342),
    r = n(977445),
    s = n(143582),
    o = n(636401),
    d = n(994717),
    c = n(613057),
    u = n(652215);
async function A(e, t) {
    let n = t.filter((e) => e.type === u.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, s.vz)(e, t.id))),
        l = [];
    return (
        i.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let i = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    let l = n?.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let r = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: { amount: l, currency: u.Yri.USD },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: a.release_date ?? null,
                    };
                    i.push(r);
                });
            }),
                i.filter((e) => e?.price != null).forEach((e) => l.push(e));
        }),
        l
    );
}
async function h(e) {
    let { socket: t } = e;
    (0, d.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new o.A({ errorCode: u.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, r.F)(n)) {
        let e = await l.O1(n, !1),
            t = await A(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await a.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== u.Puh.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await A(
            n,
            i.map((e) => e.sku),
        )),
    ];
}
function _(e) {
    let { socket: t } = e;
    (0, d.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new o.A({ errorCode: u.Lw6.INVALID_COMMAND }, "No application.");
    return i.LM(n);
}
let m = {
    [u.e$_.GET_SKUS]: { [c.sm.ANY]: [c.VH, c.hj], handler: h },
    [u.e$_.GET_ENTITLEMENTS]: { [c.sm.ANY]: [c.VH, c.hj], handler: _ },
    [u.e$_.GET_SKUS_EMBEDDED]: { [c.sm.ANY]: [c.VH, c.hj], handler: async (e) => ({ skus: await h(e) }) },
    [u.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [c.sm.ANY]: [c.VH, c.hj],
        handler: async (e) => ({ entitlements: await _(e) }),
    },
};
