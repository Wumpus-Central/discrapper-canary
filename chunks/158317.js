var i = n(620632),
    r = n(136857),
    a = n(626584),
    s = n(949192),
    l = n(392226),
    o = n(679677),
    d = n(652215),
    c = n(792996),
    u = n(379912);
let _ = new a.A("OrderActionCreators"),
    E = {
        [o.j.SPENDING_LIMIT_REACHED]: r.tG.BILLING_SPENDING_LIMIT_REACHED,
        [o.j.SPENDING_LIMIT_WILL_EXCEED]: r.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED,
    };
class A extends r.Ay {
    order;
    constructor(e) {
        let t = e.unsatisfied_constraints?.some((e) => {
            let { reason_code: t } = e;
            return t === o.j.PURCHASE_RESTRICTED;
        })
            ? (0, l.i)(e)
            : null;
        (super(
            t?.message ?? "Order signing failed due to unsatisfied constraints",
            t?.code ??
                (function (e) {
                    for (let t of e.unsatisfied_constraints ?? []) {
                        let e = E[t.reason_code];
                        if (null != e) return e;
                    }
                    return null;
                })(e),
        ),
            (this.order = e));
    }
}
class f extends A {
    constructor(e) {
        let t =
            e.unsatisfied_constraints?.some((e) => {
                let { name: t } = e;
                return "order_hydration_drift.storefront_promotions_unchanged" === t;
            }) === !0;
        (super(e), (this.message = c.intl.string(t ? u.default.vfMgld : u.default["Wq++Jf"])));
    }
}
class h extends r.Ay {
    constructor() {
        super("Order signed but entitlements not yet visible after polling");
    }
}
function I(e) {
    return null != e && "object" == typeof e && "id" in e && "status" in e;
}
async function p(e) {
    try {
        let t = await i.Bo.get({ url: d.Rsh.ORDER_ENTITLEMENTS(e), rejectWithError: !1 });
        return null != t.body ? t.body : [];
    } catch (e) {
        return [];
    }
}
let m = [250, 500, 1e3, 1500, 2500, 4250];
n.d(
    t,
    {},
    {
        FY: A,
        Ub: async function (e) {
            let t,
                { orderId: n, expectedRevision: r, loadId: a, purchaseToken: s, gatewayCheckoutContext: l } = e,
                o = {};
            (null != r && (o.expected_revision = r),
                null != s && (o.purchase_token = s),
                null != l && (o.gateway_checkout_context = l));
            try {
                t = await i.Bo.post({
                    url: d.Rsh.ORDER_SIGN(n),
                    body: o,
                    context: null != a && "" !== a ? { load_id: a } : void 0,
                    rejectWithError: !0,
                });
            } catch (e) {
                if (e instanceof i.oh && 409 === e.status && I(e.body)) throw new f(e.body);
                throw (
                    (null != e && "object" == typeof e && "status" in e && 400 === e.status && "body" in e && I(e.body)
                        ? new A(e.body)
                        : null) ?? e
                );
            }
            if (null == t.body) throw Error("Invalid sign order response");
            return t.body;
        },
        Vw: async function (e) {
            let t = await p(e);
            for (let n of m) {
                if (t.length > 0) break;
                (await new Promise((e) => setTimeout(e, n)), (t = await p(e)));
            }
            return t;
        },
        j2: h,
        r$: async function (e) {
            try {
                return (await i.Bo.get({ url: d.Rsh.ORDER_GET(e), rejectWithError: !0 })).body || null;
            } catch (t) {
                return (
                    _.error("failed to fetch order", { error: t, orderId: e }),
                    (0, s.gr)(t) ||
                        (0, s.pM)(t, { tags: { source: "OrderActionCreators_getOrder" }, extra: { orderId: e } }),
                    null
                );
            }
        },
    },
);
