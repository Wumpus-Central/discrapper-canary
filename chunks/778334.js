n.d(t, {
    cd: () =>
        function e(t, n = 3, r = 102400) {
            let i = a(t, n);
            return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? e(t, n - 1, r) : i;
        },
    S8: () => a,
});
var r = n(875565),
    i = n(690094),
    o = n(968072);
function a(e, t = 100, n = Infinity) {
    try {
        return (function e(
            t,
            n,
            a = Infinity,
            s = Infinity,
            l = (function () {
                let e = "function" == typeof WeakSet,
                    t = e ? new WeakSet() : [];
                return [
                    function (n) {
                        if (e) return !!t.has(n) || (t.add(n), !1);
                        for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
                        return t.push(n), !1;
                    },
                    function (n) {
                        if (e) t.delete(n);
                        else
                            for (let e = 0; e < t.length; e++)
                                if (t[e] === n) {
                                    t.splice(e, 1);
                                    break;
                                }
                    },
                ];
            })(),
        ) {
            let [c, u] = l;
            if (null == n || ["boolean", "string"].includes(typeof n) || ("number" == typeof n && Number.isFinite(n)))
                return n;
            let d = (function (e, t) {
                try {
                    var n;
                    let i;
                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                    if ("domainEmitter" === e) return "[DomainEmitter]";
                    if ("u" > typeof global && t === global) return "[Global]";
                    if ("u" > typeof window && t === window) return "[Window]";
                    if ("u" > typeof document && t === document) return "[Document]";
                    if ((0, r.L2)(t)) return "[VueViewModel]";
                    if ((0, r.mE)(t)) return "[SyntheticEvent]";
                    if ("number" == typeof t && !Number.isFinite(t)) return `[${t}]`;
                    if ("function" == typeof t) return `[Function: ${(0, o.qQ)(t)}]`;
                    if ("symbol" == typeof t) return `[${String(t)}]`;
                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                    let a = ((n = t), (i = Object.getPrototypeOf(n)) ? i.constructor.name : "null prototype");
                    if (/^HTML(\w*)Element$/.test(a)) return `[HTMLElement: ${a}]`;
                    return `[object ${a}]`;
                } catch (e) {
                    return `**non-serializable** (${e})`;
                }
            })(t, n);
            if (!d.startsWith("[object ")) return d;
            if (n.__sentry_skip_normalization__) return n;
            let p =
                "number" == typeof n.__sentry_override_normalization_depth__
                    ? n.__sentry_override_normalization_depth__
                    : a;
            if (0 === p) return d.replace("object ", "");
            if (c(n)) return "[Circular ~]";
            if (n && "function" == typeof n.toJSON)
                try {
                    let t = n.toJSON();
                    return e("", t, p - 1, s, l);
                } catch (e) {}
            let h = Array.isArray(n) ? [] : {},
                f = 0,
                m = (0, i.W4)(n);
            for (let t in m) {
                if (!Object.prototype.hasOwnProperty.call(m, t)) continue;
                if (f >= s) {
                    h[t] = "[MaxProperties ~]";
                    break;
                }
                let n = m[t];
                (h[t] = e(t, n, p - 1, s, l)), f++;
            }
            return u(n), h;
        })("", e, t, n);
    } catch (e) {
        return { ERROR: `**non-serializable** (${e})` };
    }
}
