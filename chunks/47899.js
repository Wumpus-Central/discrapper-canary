(n.d(t, {
    dD: () => w,
    rM: () => b,
    oF: () => k,
    _0: () => B,
    Ay: () => j,
    uW: () => x,
    pd: () => U,
    oo: () => P,
    Tc: () => V,
    mB: () => G,
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
    E = n(652215);
let A = new r.A(1e3, 6e4),
    h = {},
    f = null;
function I() {
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
let p = (0, i.h)(I),
    T = !1;
function m(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function g(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function S(e, t) {
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
function N(e, t) {
    return (e.candidates.delete(t.content), e);
}
function C(e, t) {
    let n = [...e.candidates.keys()].filter((e) => e !== t?.content);
    return S(g(e, e.shownFatigableCandidate), t, n);
}
async function O(e, t) {
    let n = e.filter(_.K5),
        i = e.filter((e) => !(0, _.K5)(e)).map((e) => ({ content: e, weight: 1 }));
    if (0 === n.length) return { context: t, candidates: i, outcome: "client-only" };
    if (A.pending) return { context: t, candidates: i, outcome: "server-backoff" };
    try {
        let e = await l.Bo.post({
                url: E.Rsh.DISMISSIBLE_CONTENT_ARBITRATE,
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
let R = new o.OC(
    async (e) => {
        let t = f;
        if (((f = null), null == t || t.epoch !== h)) return;
        if ("retry" === t.source && b()) return void A.succeed();
        let n = await O(e, t);
        if (n.context.epoch !== h) return;
        if ("retry" === n.context.source && b()) return void A.succeed();
        !(function (e) {
            if (
                (("client-only" === e.outcome || "server-success" === e.outcome) && A.succeed(),
                "server-failure" === e.outcome)
            ) {
                if (M(p.getState())) return A.succeed();
                A.fails >= 3
                    ? A.cancel()
                    : A.fail(() => {
                          D([...p.getState().candidates.keys()], "retry", e.context.epoch);
                      });
            }
        })(n);
        let i = !1;
        ((0, a.r)(() => {
            p.setState((e) => {
                let t = m(e),
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
                return A.pending && null == r ? t : ((i = null != r), C(t, r));
            });
        }),
            i && v());
    },
    { delay: 250, maxConcurrentInvocations: 1 },
);
function L(e, t) {
    if (0 === e.candidates.size) return { state: e, arbitration: { type: "settled" } };
    let n = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate &&
        !n
    )
        return R.isInvoking()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : {
                  state: C(
                      e,
                      null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
                  ),
                  arbitration: { type: "settled" },
              };
    return null == e.shownFatigableCandidate || n
        ? R.isPending()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : M(e)
              ? { state: e, arbitration: { type: "unchanged" } }
              : { state: e, arbitration: { type: "request", candidates: [...e.candidates.keys()] } }
        : { state: e, arbitration: { type: "settled" } };
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    ("settled" === e.arbitration.type || ("request" === e.arbitration.type && t) ? v() : t && A.succeed(),
        "request" === e.arbitration.type &&
            (R.isPending() || R.isInvoking() || !(A.fails >= 3) || A.succeed(),
            D(e.arbitration.candidates, "candidate")));
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
    n === h && (R.isPending() || (f = { epoch: n, source: t }), R.queue(e).catch(E.tEg));
}
function v() {
    ((h = {}), (f = null), A.succeed(), R.reset());
}
function b() {
    return M(p.getState());
}
function M(e) {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
}
function P(e) {
    let t = (0, _.a9)(e.content),
        n = null;
    ((0, a.r)(() => {
        p.setState((i) => {
            let r = m(i);
            return T ? r : t ? S(r, e) : (n = L((r.candidates.set(e.content, e), r), e.content)).state;
        });
    }),
        null != n && y(n));
}
function U(e, t) {
    let n = null,
        i = !1,
        r = !1;
    ((0, a.r)(() => {
        p.setState((a) => {
            let s = m(a);
            if (((i = s.shownFatigableCandidate?.content === e.content), t)) return (n = L(g(N(s, e), e), null)).state;
            {
                let t = g(N(s, e), e);
                return ((r = i || 0 === t.candidates.size), t);
            }
        });
    }),
        null != n ? y(n, i) : r && v());
}
function w(e) {
    return p.getState().currentlyShown.has(e);
}
function G(e) {
    return p((t) => t.currentlyShown.has(e));
}
function x(e) {
    return p((t) => e.some((e) => t.currentlyShown.has(e)));
}
function k() {
    let e = [...p.getState().currentlyShown].filter((e) => !(0, _.a9)(e)).length;
    return [p.getState().currentlyShown.size, e];
}
function F() {
    ((0, a.r)(() => {
        p.setState(() => {
            let e = I();
            return ((e.postConnectionOpen = !0), e);
        });
    }),
        v());
}
function B() {
    (0, a.r)(() => {
        p.setState((e) => {
            let t = m(e);
            return ((t.prevFatigableCandidate = null), (t.lastWinnerTime = 0), t);
        });
    });
}
function V() {
    return p.getState().postConnectionOpen;
}
class H extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        (this.waitFor(c.A, u.A), this.syncWith([c.A, u.A], () => this.setHasRequiredAction()));
    }
    setHasRequiredAction() {
        T = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(c.A, u.A);
    }
}
function j(e, t) {
    return p(e, t);
}
new H(d.h, { CONNECTION_OPEN: () => F(), LOGOUT: () => F() });
