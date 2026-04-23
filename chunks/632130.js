n.d(t, { A: () => E }), n(321073);
var i = n(339048),
    r = n(830382),
    a = n(800342),
    l = n(977445),
    s = n(143582),
    o = n(636401),
    d = n(994717),
    u = n(613057),
    c = n(652215);
async function A(e, t) {
    let n = t.filter((e) => e.type === c.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, s.vz)(e, t.id))),
        r = [];
    return (
        i.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let i = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    let r = n?.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let l = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: { amount: r, currency: c.Yri.USD },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: a.release_date ?? null,
                    };
                    i.push(l);
                });
            }),
                i.filter((e) => e?.price != null).forEach((e) => r.push(e));
        }),
        r
    );
}
async function h(e) {
    let { socket: t } = e;
    (0, d.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, l.F)(n)) {
        let e = await r.O1(n, !1),
            t = await A(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await a.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== c.Puh.SUBSCRIPTION_GROUP)
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
    if (null == n) throw new o.A({ errorCode: c.Lw6.INVALID_COMMAND }, "No application.");
    return i.LM(n);
}
let E = {
    [c.e$_.GET_SKUS]: { [u.sm.ANY]: [u.VH, u.hj], handler: h },
    [c.e$_.GET_ENTITLEMENTS]: { [u.sm.ANY]: [u.VH, u.hj], handler: _ },
    [c.e$_.GET_SKUS_EMBEDDED]: { [u.sm.ANY]: [u.VH, u.hj], handler: async (e) => ({ skus: await h(e) }) },
    [c.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [u.sm.ANY]: [u.VH, u.hj],
        handler: async (e) => ({ entitlements: await _(e) }),
    },
};
