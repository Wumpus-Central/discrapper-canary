n.d(t, { sY: () => f, RJ: () => I, c$: () => m, A: () => h, O4: () => A, RQ: () => p, Wv: () => g, AP: () => T });
var i = n(73153),
    r = n(181658),
    a = n(195880),
    s = n(46653),
    l = n(620632);
function o(e) {
    return { balance: e.balance, totalBurned: e.total_burned };
}
var d = n(475489);
let c = { failImmediatelyWhenRateLimited: !0 };
var u = n(422533),
    _ = n(164562);
function E(e) {
    return e instanceof r.A ? e : new r.A(e);
}
function A() {
    i.h.dispatch({ type: "ORB_VOID_MODAL_OPEN" });
}
function f() {
    i.h.dispatch({ type: "ORB_VOID_MODAL_CLOSE" });
}
function h() {
    i.h.dispatch({ type: "ORB_VOID_CONSENT_GRANT" });
}
async function I() {
    let e = s.default.getId();
    try {
        let t = await (async function () {
            var e;
            let t;
            try {
                t = (await l.Bo.get({ url: d.ir.VOID, ...c, rejectWithError: !1 })).body;
            } catch (e) {
                throw new r.A(e);
            }
            return {
                snapshot: o((e = t).snapshot),
                eligible: e.eligible,
                config: { maxBatchQuantity: e.max_batch_quantity },
            };
        })();
        i.h.dispatch({ type: "ORB_VOID_STATE_FETCH_SUCCESS", userId: e, state: t });
    } catch (t) {
        i.h.dispatch({ type: "ORB_VOID_STATE_FETCH_FAIL", userId: e, error: E(t) });
    }
}
function p(e) {
    let t;
    if (!u.A.canSpend(e)) return null;
    let n = u.A.getDisplayedTotal() ?? 0,
        r = n + e;
    return (
        i.h.dispatch({
            type: "ORB_VOID_CLICK",
            amount: e,
            flushNow: ((t = (0, _.ol)()), 0 === n || (0, _.VL)(t, r) > (0, _.VL)(t, n)),
        }),
        r
    );
}
function m() {
    i.h.dispatch({ type: "ORB_VOID_FLUSH", sinkId: (0, a.m)(), batchTimestamp: new Date().toISOString() });
}
async function g() {
    let e = u.A.getBatchToSend();
    if (null == e) return;
    let t = s.default.getId(),
        { sinkId: n } = e;
    i.h.dispatch({ type: "ORB_VOID_BURN_BEGIN" });
    try {
        let a = await (async function (e) {
            let t;
            try {
                t = (
                    await l.Bo.post({
                        url: d.ir.VOID,
                        body: { sink_id: e.sinkId, quantity: e.quantity, batch_timestamp: e.batchTimestamp },
                        ...c,
                        rejectWithError: !1,
                    })
                ).body;
            } catch (e) {
                throw new r.A(e);
            }
            return o(t.snapshot);
        })(e);
        i.h.dispatch({ type: "ORB_VOID_BURN_SUCCESS", userId: t, sinkId: n, snapshot: a });
    } catch (r) {
        let e = E(r);
        i.h.dispatch({
            type: "ORB_VOID_BURN_FAILURE",
            userId: t,
            sinkId: n,
            retryable: (function (e) {
                let { status: t } = e;
                return null == t || t >= 500 || 429 === t;
            })(e),
            error: e,
        });
    }
}
function T(e) {
    i.h.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e });
}
