n.d(t, { FY: () => l, Ub: () => d, Vw: () => _, j2: () => o });
var i = n(636537),
    r = n(136857),
    a = n(626584);
n(739508);
var s = n(652215);
new a.A("OrderActionCreators");
class l extends r.Ay {
    order;
    constructor(e) {
        super("Order signing failed due to unsatisfied constraints"), (this.order = e);
    }
}
class o extends r.Ay {
    constructor() {
        super("Order signed but entitlements not yet visible after polling");
    }
}
async function d(e) {
    let t,
        { orderId: n, expectedRevision: r, loadId: a } = e,
        o = {};
    null != r && (o.expected_revision = r);
    try {
        t = await i.Bo.post({
            url: s.Rsh.ORDER_SIGN(n),
            body: o,
            context: null != a && "" !== a ? { load_id: a } : void 0,
            rejectWithError: !0,
        });
    } catch (e) {
        var d;
        if (
            e instanceof i.oh &&
            400 === e.status &&
            null != (d = e.body) &&
            "object" == typeof d &&
            "id" in d &&
            "status" in d
        )
            throw new l(e.body);
        throw e;
    }
    if (null == t.body) throw Error("Invalid sign order response");
    return t.body;
}
async function c(e) {
    try {
        let t = await i.Bo.get({ url: s.Rsh.ORDER_ENTITLEMENTS(e), rejectWithError: !1 });
        return null != t.body ? t.body : [];
    } catch (e) {
        return [];
    }
}
let u = [250, 500, 1e3, 1500, 2500, 4250];
async function _(e) {
    let t = await c(e);
    for (let n of u) {
        if (t.length > 0) break;
        await new Promise((e) => setTimeout(e, n)), (t = await c(e));
    }
    return t;
}
