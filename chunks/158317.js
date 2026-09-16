n.d(t, { FY: () => d, Ub: () => u, Vw: () => h, j2: () => c, r$: () => _ });
var i = n(636537),
    r = n(136857),
    a = n(626584),
    s = n(739508),
    l = n(652215);
let o = new a.A("OrderActionCreators");
class d extends r.Ay {
    order;
    constructor(e) {
        (super("Order signing failed due to unsatisfied constraints"), (this.order = e));
    }
}
class c extends r.Ay {
    constructor() {
        super("Order signed but entitlements not yet visible after polling");
    }
}
async function u(e) {
    let t,
        { orderId: n, expectedRevision: r, loadId: a } = e,
        s = {};
    null != r && (s.expected_revision = r);
    try {
        t = await i.Bo.post({
            url: l.Rsh.ORDER_SIGN(n),
            body: s,
            context: null != a && "" !== a ? { load_id: a } : void 0,
            rejectWithError: !0,
        });
    } catch (e) {
        var o;
        if (
            e instanceof i.oh &&
            400 === e.status &&
            null != (o = e.body) &&
            "object" == typeof o &&
            "id" in o &&
            "status" in o
        )
            throw new d(e.body);
        throw e;
    }
    if (null == t.body) throw Error("Invalid sign order response");
    return t.body;
}
async function _(e) {
    try {
        return (await i.Bo.get({ url: l.Rsh.ORDER_GET(e), rejectWithError: !0 })).body || null;
    } catch (t) {
        return (
            o.error("failed to fetch order", { error: t, orderId: e }),
            (0, s.pM)(t, { tags: { source: "OrderActionCreators_getOrder" }, extra: { orderId: e } }),
            null
        );
    }
}
async function E(e) {
    try {
        let t = await i.Bo.get({ url: l.Rsh.ORDER_ENTITLEMENTS(e), rejectWithError: !1 });
        return null != t.body ? t.body : [];
    } catch (e) {
        return [];
    }
}
let A = [250, 500, 1e3, 1500, 2500, 4250];
async function h(e) {
    let t = await E(e);
    for (let n of A) {
        if (t.length > 0) break;
        (await new Promise((e) => setTimeout(e, n)), (t = await E(e)));
    }
    return t;
}
