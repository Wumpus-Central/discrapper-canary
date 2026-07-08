n.d(t, { s: () => s });
var r = n(688331),
    i = n(326447),
    o = n(272469),
    a = n(968072);
let s = (0, r._C)(() => {
    let e;
    return {
        name: "Dedupe",
        processEvent(t) {
            if (t.type) return t;
            try {
                var n, r, a, s, d, p;
                let h, f, m, g;
                if (
                    ((n = t),
                    (r = e) &&
                        ((a = n),
                        (s = r),
                        (h = a.message),
                        (f = s.message),
                        ((h || f) && (!h || f) && (h || !f) && h === f && c(a, s) && l(a, s) && 1) ||
                            ((d = n),
                            (p = r),
                            (m = u(p)),
                            (g = u(d)),
                            m && g && m.type === g.type && m.value === g.value && c(d, p) && l(d, p))))
                )
                    return (
                        i.T && o.vF.warn("Event dropped due to being a duplicate of previously captured event."), null
                    );
            } catch (e) {}
            return (e = t);
        },
    };
});
function l(e, t) {
    let n = (0, a.RV)(e),
        r = (0, a.RV)(t);
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
    for (let e = 0; e < r.length; e++) {
        let t = r[e],
            i = n[e];
        if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
            return !1;
    }
    return !0;
}
function c(e, t) {
    let n = e.fingerprint,
        r = t.fingerprint;
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    try {
        return n.join("") === r.join("");
    } catch (e) {
        return !1;
    }
}
function u(e) {
    return e.exception && e.exception.values && e.exception.values[0];
}
