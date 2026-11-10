let i = "Localized";
function r(e) {
    return "object" == typeof e && null != e && "string" == typeof e.default && "object" == typeof e.localizations;
}
n.d(
    t,
    {},
    {
        v: function (e, t) {
            let n = (function e(t) {
                if (Array.isArray(t)) return t.map((t) => e(t));
                if (null == t || "object" != typeof t) return t;
                let n = Object.getPrototypeOf(t);
                if (n !== Object.prototype && null !== n) return t;
                let i = {};
                for (let [n, r] of Object.entries(t)) i[n] = e(r);
                return i;
            })(e);
            return (
                (function e(t, n) {
                    if (Array.isArray(t)) {
                        for (let i of t) e(i, n);
                        return;
                    }
                    if ("object" == typeof t && null != t)
                        for (let [a, s] of Object.entries(t)) {
                            if (a.endsWith(i) && r(s)) {
                                let e = a.slice(0, -i.length),
                                    r = s.localizations[n] ?? ("" !== s.default ? s.default : null);
                                null != r && e in t && (t[e] = r);
                                continue;
                            }
                            e(s, n);
                        }
                })(n, t),
                n
            );
        },
        x: function e(t, n) {
            if (Array.isArray(t)) {
                for (let i of t) e(i, n);
                return;
            }
            if ("object" == typeof t && null != t)
                for (let [a, s] of Object.entries(t)) {
                    if (a.endsWith(i) && r(s)) {
                        for (let e of Object.keys(s.localizations)) n.add(e);
                        continue;
                    }
                    e(s, n);
                }
        },
    },
);
