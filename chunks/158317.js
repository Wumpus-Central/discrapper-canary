t.d(r, { FY: () => a, Ub: () => u, j2: () => l, pI: () => d });
var n = t(636537),
    o = t(136857),
    i = t(626584);
t(739508);
var s = t(652215);
new i.A("OrderActionCreators");
class a extends o.Ay {
    order;
    constructor(e) {
        super("Order signing failed due to unsatisfied constraints"), (this.order = e);
    }
}
class l extends o.Ay {
    constructor() {
        super("Order signed but entitlements not yet visible after polling");
    }
}
async function u(e) {
    let r,
        { orderId: t, expectedRevision: o, loadId: i } = e,
        l = {};
    null != o && (l.expected_revision = o);
    try {
        r = await n.Bo.post({
            url: s.Rsh.ORDER_SIGN(t),
            body: l,
            context: null != i && "" !== i ? { load_id: i } : void 0,
            rejectWithError: !0,
        });
    } catch (e) {
        var u;
        if (
            e instanceof n.oh &&
            400 === e.status &&
            null != (u = e.body) &&
            "object" == typeof u &&
            "id" in u &&
            "status" in u
        )
            throw new a(e.body);
        throw e;
    }
    if (null == r.body) throw Error("Invalid sign order response");
    return r.body;
}
async function d(e) {
    try {
        let r = await n.Bo.get({ url: s.Rsh.ORDER_ENTITLEMENTS(e), rejectWithError: !1 });
        return null != r.body ? r.body : [];
    } catch (e) {
        return [];
    }
}
