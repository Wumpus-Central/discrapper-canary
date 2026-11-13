var i = n(620632),
    r = n(136857),
    a = n(626584),
    s = n(949192),
    l = n(679677),
    o = n(652215);
let d = new a.A("OrderActionCreators"),
    c = {
        [l.j.SPENDING_LIMIT_REACHED]: r.tG.BILLING_SPENDING_LIMIT_REACHED,
        [l.j.SPENDING_LIMIT_WILL_EXCEED]: r.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED,
    };
class u extends r.Ay {
    order;
    constructor(e) {
        (super(
            "Order signing failed due to unsatisfied constraints",
            (function (e) {
                for (let t of e.unsatisfied_constraints ?? []) {
                    let e = c[t.reason_code];
                    if (null != e) return e;
                }
                return null;
            })(e),
        ),
            (this.order = e));
    }
}
class _ extends r.Ay {
    constructor() {
        super("Order signed but entitlements not yet visible after polling");
    }
}
async function E(e) {
    try {
        let t = await i.Bo.get({ url: o.Rsh.ORDER_ENTITLEMENTS(e), rejectWithError: !1 });
        return null != t.body ? t.body : [];
    } catch (e) {
        return [];
    }
}
let A = [250, 500, 1e3, 1500, 2500, 4250];
n.d(
    t,
    {},
    {
        FY: u,
        Ub: async function (e) {
            let t,
                { orderId: n, expectedRevision: r, loadId: a, purchaseToken: s, gatewayCheckoutContext: l } = e,
                d = {};
            (null != r && (d.expected_revision = r),
                null != s && (d.purchase_token = s),
                null != l && (d.gateway_checkout_context = l));
            try {
                t = await i.Bo.post({
                    url: o.Rsh.ORDER_SIGN(n),
                    body: d,
                    context: null != a && "" !== a ? { load_id: a } : void 0,
                    rejectWithError: !0,
                });
            } catch (e) {
                var c;
                if (
                    e instanceof i.oh &&
                    400 === e.status &&
                    null != (c = e.body) &&
                    "object" == typeof c &&
                    "id" in c &&
                    "status" in c
                )
                    throw new u(e.body);
                throw e;
            }
            if (null == t.body) throw Error("Invalid sign order response");
            return t.body;
        },
        Vw: async function (e) {
            let t = await E(e);
            for (let n of A) {
                if (t.length > 0) break;
                (await new Promise((e) => setTimeout(e, n)), (t = await E(e)));
            }
            return t;
        },
        j2: _,
        r$: async function (e) {
            try {
                return (await i.Bo.get({ url: o.Rsh.ORDER_GET(e), rejectWithError: !0 })).body || null;
            } catch (t) {
                return (
                    d.error("failed to fetch order", { error: t, orderId: e }),
                    (0, s.pM)(t, { tags: { source: "OrderActionCreators_getOrder" }, extra: { orderId: e } }),
                    null
                );
            }
        },
    },
);
