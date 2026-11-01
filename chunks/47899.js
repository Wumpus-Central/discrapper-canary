(n.d(t, {
    dD: () => G,
    rM: () => P,
    oF: () => F,
    _0: () => V,
    Ay: () => W,
    uW: () => k,
    pd: () => w,
    oo: () => U,
    Tc: () => H,
    mB: () => x,
}),
    n(667532));
var i = n(882035),
    r = n(158390),
    a = n(121894),
    s = n(17928),
    l = n(636537),
    o = n(451988),
    d = n(73153),
    c = n(715314),
    u = n(870570),
    _ = n(655227),
    E = n(199773),
    A = n(652215);
let h = new r.A(1e3, 6e4),
    f = {},
    I = null;
function p() {
    return {
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    };
}
let T = (0, i.h)(p),
    m = !1;
function g(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function S(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter((e) => e !== t.content);
    return (
        i.unshift(t.content),
        i.splice(5),
        (e.recentlyShown = i),
        null != t.groupName && e.currentlyShownGroup.add(t.groupName),
        (0, _.a9)(t.content) ||
            ((e.shownFatigableCandidate = t),
            e.prevFatigableCandidate?.content !== t.content &&
                ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
        t.onAdded?.(n),
        e
    );
}
function C(e, t) {
    return (e.candidates.delete(t.content), e);
}
function O(e, t) {
    let n = [...e.candidates.keys()].filter((e) => e !== t?.content);
    return N(S(e, e.shownFatigableCandidate), t, n);
}
async function R(e, t) {
    let n = e.filter(_.K5),
        i = e.filter((e) => !(0, _.K5)(e)).map((e) => ({ content: e, weight: 1 }));
    if (0 === n.length) return { context: t, candidates: i, outcome: "client-only" };
    if (h.pending) return { context: t, candidates: i, outcome: "server-backoff" };
    try {
        let e = await l.Bo.post({
                url: A.Rsh.DISMISSIBLE_CONTENT_ARBITRATE,
                body: { candidates: n.map((e) => ({ content: e })) },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            r = (function (e, t) {
                let n = t.map((e) => e.content),
                    i = n.filter((e, t) => n.indexOf(e) !== t);
                if (i.length > 0)
                    throw Error(`Duplicate content in dismissible content arbitration response: ${i.join(", ")}`);
                let r = n.filter((t) => !e.includes(t));
                if (r.length > 0)
                    throw Error(`Unexpected content in dismissible content arbitration response: ${r.join(", ")}`);
                return t;
            })(n, e.body.candidates);
        return { context: t, candidates: [...i, ...r], outcome: "server-success" };
    } catch {
        return { context: t, candidates: i, outcome: "server-failure" };
    }
}
let L = new o.OC(
    async (e) => {
        let t = I;
        if (((I = null), null == t || t.epoch !== f)) return;
        if ("retry" === t.source && P()) return void h.succeed();
        let n = await R(e, t);
        if (n.context.epoch !== f) return;
        if ("retry" === n.context.source && P()) return void h.succeed();
        !(function (e) {
            if (
                (("client-only" === e.outcome || "server-success" === e.outcome) && h.succeed(),
                "server-failure" === e.outcome)
            ) {
                if (M(T.getState())) return h.succeed();
                h.fails >= 3
                    ? h.cancel()
                    : h.fail(() => {
                          v([...T.getState().candidates.keys()], "retry", e.context.epoch);
                      });
            }
        })(n);
        let i = !1;
        ((0, a.r)(() => {
            T.setState((e) => {
                let t = g(e),
                    r = (function (e, t) {
                        let n = t.filter((t) => {
                            let { content: n, weight: i } = t;
                            return e.candidates.has(n) && i > 0;
                        });
                        null !== e.prevFatigableCandidate &&
                            e.candidates.has(e.prevFatigableCandidate.content) &&
                            n.length > 1 &&
                            (n = n.filter((t) => {
                                let { content: n } = t;
                                return n !== e.prevFatigableCandidate?.content;
                            }));
                        let i = n.reduce((e, t) => e + t.weight, 0);
                        if (!Number.isFinite(i) || i <= 0) return;
                        let r = Math.random() * i;
                        for (let t of n) if ((r -= t.weight) < 0) return e.candidates.get(t.content);
                    })(t, n.candidates);
                return h.pending && null == r ? t : ((i = null != r), O(t, r));
            });
        }),
            i && b());
    },
    { delay: 250, maxConcurrentInvocations: 1 },
);
function y(e, t) {
    if (0 === e.candidates.size) return { state: e, arbitration: { type: "settled" } };
    let n = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate &&
        !n
    )
        return L.isInvoking()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : {
                  state: O(
                      e,
                      null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
                  ),
                  arbitration: { type: "settled" },
              };
    return null == e.shownFatigableCandidate || n
        ? L.isPending()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : M(e)
              ? { state: e, arbitration: { type: "unchanged" } }
              : { state: e, arbitration: { type: "request", candidates: [...e.candidates.keys()] } }
        : { state: e, arbitration: { type: "settled" } };
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    ("settled" === e.arbitration.type || ("request" === e.arbitration.type && t) ? b() : t && h.succeed(),
        "request" === e.arbitration.type &&
            (L.isPending() || L.isInvoking() || !(h.fails >= 3) || h.succeed(),
            v(e.arbitration.candidates, "candidate")));
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
    n === f && (L.isPending() || (I = { epoch: n, source: t }), L.queue(e).catch(A.tEg));
}
function b() {
    ((f = {}), (I = null), h.succeed(), L.reset());
}
function P() {
    return M(T.getState());
}
function M(e) {
    if (E.A.upsellBackoffOverridden) return !1;
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
}
function U(e) {
    let t = (0, _.a9)(e.content),
        n = null;
    ((0, a.r)(() => {
        T.setState((i) => {
            let r = g(i);
            return m ? r : t ? N(r, e) : (n = y((r.candidates.set(e.content, e), r), e.content)).state;
        });
    }),
        null != n && D(n));
}
function w(e, t) {
    let n = null,
        i = !1,
        r = !1;
    ((0, a.r)(() => {
        T.setState((a) => {
            let s = g(a);
            if (((i = s.shownFatigableCandidate?.content === e.content), t)) return (n = y(S(C(s, e), e), null)).state;
            {
                let t = S(C(s, e), e);
                return ((r = i || 0 === t.candidates.size), t);
            }
        });
    }),
        null != n ? D(n, i) : r && b());
}
function G(e) {
    return T.getState().currentlyShown.has(e);
}
function x(e) {
    return T((t) => t.currentlyShown.has(e));
}
function k(e) {
    return T((t) => e.some((e) => t.currentlyShown.has(e)));
}
function F() {
    let e = [...T.getState().currentlyShown].filter((e) => !(0, _.a9)(e)).length;
    return [T.getState().currentlyShown.size, e];
}
function B() {
    ((0, a.r)(() => {
        T.setState(() => {
            let e = p();
            return ((e.postConnectionOpen = !0), e);
        });
    }),
        b());
}
function V() {
    (0, a.r)(() => {
        T.setState((e) => {
            let t = g(e);
            return ((t.prevFatigableCandidate = null), (t.lastWinnerTime = 0), t);
        });
    });
}
function H() {
    return T.getState().postConnectionOpen;
}
class j extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        (this.waitFor(E.A, c.A, u.A), this.syncWith([c.A, u.A], () => this.setHasRequiredAction()));
    }
    setHasRequiredAction() {
        m = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(c.A, u.A);
    }
}
function W(e, t) {
    return T(e, t);
}
new j(d.h, { CONNECTION_OPEN: () => B(), LOGOUT: () => B() });
