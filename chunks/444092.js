var i = n(158390),
    r = n(927813),
    a = n(811091),
    s = n(955817);
let l = Date.UTC(2021, 0, 1),
    o = 15 * r.A.Millis.MINUTE;
class d extends Error {}
let c = new Set([400, 403, 404]);
function u(e) {
    if (e instanceof d) return !0;
    let t = "object" == typeof e && null != e && "status" in e ? e.status : void 0;
    return "number" == typeof t && c.has(t);
}
function _() {
    let e = new Map(),
        t = new Map(),
        n = new Set(),
        a = new Map(),
        l = new Map();
    function o(e) {
        let t = l.get(e);
        null != t && (l.delete(e), t.forEach((e) => e()));
    }
    function c(e, t) {
        let n = a.get(e);
        for (a.delete(e), a.set(e, n?.request === t ? n : { startedAt: Date.now(), request: t }); a.size > 1024;) {
            let e = a.keys().next().value;
            if (null == e) break;
            a.delete(e);
        }
    }
    function _(e, n) {
        for (t.delete(e), t.set(e, n); t.size > 1024;) {
            let e = t.keys().next().value;
            if (null == e) break;
            (t.get(e)?.cancel(), t.delete(e), o(e));
        }
    }
    return {
        guard: function (l, E, A) {
            let { priority: f = "background" } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                h = `${l}/${E}`,
                I = e.get(h);
            if (null != I && ("background" === f || "foreground" === I.priority))
                return ("foreground" === f && c(h, I.request), I.request);
            let p = a.get(h);
            if ("foreground" === f && null != p && Date.now() - p.startedAt < 2e3) return (c(h, p.request), p.request);
            if ("background" === f && n.has(h)) return Promise.reject(new d("guild event is unavailable"));
            let m = t.get(h);
            if (null != m && (_(h, m), "background" === f && m.pending))
                return Promise.reject(Error("guild event fetch is backing off"));
            if ("background" === f && e.size >= 1024)
                return Promise.reject(Error("too many pending guild event fetches"));
            function g() {
                return e.get(h)?.request === T;
            }
            let T = Promise.resolve()
                .then(A)
                .then((e) => (g() && (t.get(h)?.succeed(), t.delete(h), n.delete(h)), e))
                .catch((e) => {
                    if (e instanceof s.wH || !g()) throw e;
                    if (u(e)) {
                        for (t.get(h)?.cancel(), t.delete(h), n.delete(h), n.add(h); n.size > 1024;) {
                            let e = n.values().next().value;
                            if (null == e) break;
                            n.delete(e);
                        }
                        throw e;
                    }
                    let a = m ?? new i.A(10 * r.A.Millis.SECOND, 10 * r.A.Millis.MINUTE, !0);
                    throw (_(h, a), a.cancel(), a.fail(() => queueMicrotask(() => o(h))), e);
                })
                .finally(() => {
                    g() && e.delete(h);
                });
            return (e.set(h, { request: T, priority: f }), "foreground" === f && c(h, T), T);
        },
        onRetryable: function (e, t) {
            let n = l.get(e);
            return (
                null == n && ((n = new Set()), l.set(e, n)),
                n.add(t),
                () => {
                    (n.delete(t), 0 === n.size && l.get(e) === n && l.delete(e));
                }
            );
        },
        forgetTransientFailures: function () {
            let e = [...t.keys()];
            for (let e of t.values()) e.cancel();
            (t.clear(), e.forEach(o));
        },
        reset: function () {
            for (let i of (e.clear(), a.clear(), n.clear(), l.clear(), t.values())) i.cancel();
            t.clear();
        },
    };
}
let E = _(),
    A = _(),
    f = A.guard;
n.d(
    t,
    {},
    {
        FU: f,
        G9: function () {
            (E.forgetTransientFailures(), A.forgetTransientFailures());
        },
        aI: u,
        bL: function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (i.priority ?? "background") === "background" &&
                !(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                    if (!a.default.isProbablyAValidSnowflake(e) || !a.default.isProbablyAValidSnowflake(t)) return !1;
                    let i = a.default.extractTimestamp(t);
                    return i >= l && i <= n + o;
                })(e, t)
                ? Promise.reject(new d("guild event id is not plausible"))
                : E.guard(e, t, n, i);
        },
        lX: function (e, t, n) {
            return E.onRetryable(`${e}/${t}`, n);
        },
    },
);
