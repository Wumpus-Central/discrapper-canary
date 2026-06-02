t.d(r, { FY: () => i, Ub: () => u, j2: () => l });
var n = t(636537),
    o = t(136857),
    s = t(626584);
t(739508);
var a = t(652215);
new s.A("OrderActionCreators");
class i extends o.Ay {
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
        { orderId: t, expectedRevision: o, loadId: s } = e,
        l = {};
    null != o && (l.expected_revision = o);
    try {
        r = await n.Bo.post({
            url: a.Rsh.ORDER_SIGN(t),
            body: l,
            context: null != s && "" !== s ? { load_id: s } : void 0,
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
            throw new i(e.body);
        throw e;
    }
    if (null == r.body) throw Error("Invalid sign order response");
    return r.body;
}
