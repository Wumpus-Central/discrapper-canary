"use strict";
n.d(t, { R7: () => f }), n(321073);
var r = n(357758),
    i = n(39304),
    s = n(52133),
    a = n(954571),
    o = n(652215);
let l = 15,
    u = 3,
    c = 5;
function d(e, t, n, i) {
    if (e === t || (i && void 0 === e && null === t)) return !0;
    if ("object" != typeof e || "object" != typeof t || null === e || null === t) return !1;
    if (n.has(e)) return n.get(e) === t;
    if ((n.set(e, t), e instanceof Date && t instanceof Date)) return e.getTime() === t.getTime();
    if (e instanceof Set && t instanceof Set) return (0, r._)(e, t);
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++) if (!d(e[r], t[r], n, !1)) return !1;
        return !0;
    }
    if (Array.isArray(e) || Array.isArray(t)) return !1;
    let s = Object.keys(e),
        a = Object.keys(t);
    if (s.length !== a.length) return !1;
    for (let r of s) if (!Object.prototype.hasOwnProperty.call(t, r) || !d(e[r], t[r], n, !1)) return !1;
    return !0;
}
function _(e, t) {
    return d(e, t, new Map(), !0);
}
function f(e, t, n) {
    let r = [];
    n((e, t) => {
        p(r, e, t);
    }),
        g(e, t, r),
        I(e, r);
}
function p(e, t, n) {
    t.derived.length !== n.derived.length &&
        e.push({ type: "length-mismatch", primaryLength: t.derived.length, shadowLength: n.derived.length });
    let r = Object.keys(t.root),
        i = Object.keys(n.root);
    for (let i of r) {
        if (!Object.prototype.hasOwnProperty.call(n.root, i)) {
            e.push({ type: "missing-record", key: i });
            continue;
        }
        let r = h(i, t.root[i], n.root[i]);
        null != r && e.push(r);
    }
    for (let n of i) Object.prototype.hasOwnProperty.call(t.root, n) || e.push({ type: "extra-record", key: n });
}
function h(e, t, n) {
    let r = [];
    for (let e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) {
            let i = t[e];
            if (!Object.prototype.hasOwnProperty.call(n, e)) {
                r.push({ type: "field-missing", field: e });
                continue;
            }
            let s = n[e];
            _(i, s) || r.push({ type: "value-mismatch", field: e, primaryValue: i, shadowValue: s });
        }
    if (r.length > 0) return { type: "record-mismatch", key: e, primaryRecord: t, shadowRecord: n, mismatches: r };
}
function m(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e) && !(e instanceof Date) && !(e instanceof Set);
}
function E(e, t) {
    let n = new Map();
    function r(e, t) {
        if (!_(e, t)) {
            if ("object" == typeof e && null !== e && "object" == typeof t && null !== t) {
                if (n.has(e))
                    return void (n.get(e) === t
                        ? console.info("Cycle detected, already compared")
                        : console.info("Cycle detected but different corresponding object"));
                n.set(e, t);
            }
            if (e instanceof Date && t instanceof Date)
                return void console.info(`Date mismatch: primary ${e}, shadow ${t}`);
            if (e instanceof Set && t instanceof Set) {
                let n = [...e].filter((e) => !t.has(e)),
                    r = [...t].filter((t) => !e.has(t));
                n.length > 0 && console.info("Only in primary: ", n),
                    r.length > 0 && console.info("Only in shadow: ", r);
                return;
            }
            if (Array.isArray(e) && Array.isArray(t)) {
                let n = Math.min(e.length, t.length);
                for (let i = 0; i < n; i++)
                    _(e[i], t[i]) || (console.group(`Array index ${i} mismatch:`), r(e[i], t[i]), console.groupEnd());
                e.length > t.length
                    ? console.info("Extra in primary: ", e.slice(t.length))
                    : t.length > e.length && console.info("Extra in shadow: ", t.slice(e.length));
                return;
            }
            if (m(e) && m(t)) {
                let n = new Set(Object.keys(e)),
                    i = new Set(Object.keys(t));
                for (let s of Array.from(new Set([...n, ...i])).sort())
                    n.has(s)
                        ? i.has(s)
                            ? _(e[s], t[s]) ||
                              (console.group(`Field ${s} mismatch:`), r(e[s], t[s]), console.groupEnd())
                            : console.info(`Missing field in shadow: ${s} = `, e[s])
                        : console.info(`Extra field in shadow: ${s} = `, t[s]);
                return;
            }
            console.info("Value mismatch: primary ", e, " shadow ", t);
        }
    }
    r(e, t);
}
function g(e, t, n) {
    if (0 === n.length) return;
    console.groupCollapsed(`[${t}Store:${e}] Dual-read validation found ${n.length} error(s)`),
        console.info("Last Few Actions: ", i.lK());
    let r = [],
        s = [],
        a = 0;
    n.forEach((e) => {
        if (!(a >= c))
            switch ((a++, e.type)) {
                case "length-mismatch":
                    console.info(`Length mismatch → primary = ${e.primaryLength}, shadow = ${e.shadowLength}`);
                    break;
                case "missing-record":
                    r.push(e.key);
                    break;
                case "extra-record":
                    s.push(e.key);
                    break;
                case "record-mismatch":
                    console.groupCollapsed(`Record mismatch for key "${e.key}"`),
                        e.mismatches.forEach((e) => {
                            "field-missing" === e.type
                                ? console.info(`Field missing: ${String(e.field)}`)
                                : (console.groupCollapsed(`Field "${String(e.field)}" value mismatch`),
                                  E(e.primaryValue, e.shadowValue),
                                  console.groupEnd());
                        }),
                        console.groupEnd();
            }
    }),
        a < n.length && console.info(`... and ${n.length - a} more error(s) not shown`),
        r.length > 0 && console.info(`Missing records in shadow state: ${r.join(", ")}`),
        s.length > 0 && console.info(`Extra records in shadow state: ${s.join(", ")}`),
        console.groupEnd();
}
let A = new Map();
function I(e, t) {
    if (0 === t.length) return;
    let n = i.HV();
    if (null == n) return void console.error("Trying to log mismatches, but no last dispatched action found");
    let r = A.get(e) ?? {
        mismatchesReported: 0,
        mismatchesByLastAction: new Map(),
        visitedEntries: new WeakSet(),
        seenMismatches: new Set(),
    };
    if ((A.set(e, r), r.mismatchesReported >= l)) return;
    let s = r.mismatchesByLastAction.get(n) ?? 0;
    if (s >= u) return;
    let c = S(r, t);
    null != c &&
        (r.mismatchesByLastAction.set(n, s + 1),
        r.mismatchesReported++,
        a.default.track(o.HAw.LIBDISCORE_KV_DUAL_READ_ERROR, {
            store_name: e,
            action_type: n,
            num_missing_keys: c.numMissingKeys,
            num_extra_keys: c.numExtraKeys,
            mismatched_fields: JSON.stringify(c.mismatchedFields),
        }));
}
function T(e) {
    return null === e ? "null" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : "object";
}
function S(e, t) {
    let n = { numExtraKeys: 0, numMissingKeys: 0, mismatchedFields: [] };
    for (let s of t)
        switch (s.type) {
            case "extra-record":
                n.numExtraKeys++;
                break;
            case "missing-record":
                n.numMissingKeys++;
                break;
            case "record-mismatch":
                if (e.visitedEntries.has(s.primaryRecord)) continue;
                for (let t of (e.visitedEntries.add(s.primaryRecord), s.mismatches)) {
                    let e = t.field.toString();
                    switch (t.type) {
                        case "field-missing":
                            n.mismatchedFields.push({
                                fieldName: e,
                                primaryType: T(s.primaryRecord[t.field]),
                                shadowType: "missing",
                            });
                            break;
                        case "value-mismatch":
                            null !== t.primaryValue &&
                            null !== t.shadowValue &&
                            "object" == typeof t.primaryValue &&
                            "object" == typeof t.shadowValue
                                ? Array.isArray(t.primaryValue) && Array.isArray(t.shadowValue)
                                    ? a(e, t.primaryValue, t.shadowValue)
                                    : i(e, t.primaryValue, t.shadowValue)
                                : r({ fieldName: e, primaryType: T(t.primaryValue), shadowType: T(t.shadowValue) });
                    }
                }
        }
    if (n.mismatchedFields.length + n.numExtraKeys + n.numMissingKeys === 0) return null;
    return n;
    function r() {
        for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
        for (let t of r) {
            let r = `${t.fieldName}:${t.primaryType}:${t.shadowType}`;
            e.seenMismatches.has(r) || (e.seenMismatches.add(r), n.mismatchedFields.push(t));
        }
    }
    function i(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Set();
        for (let o of Object.keys(t)) {
            let l = `${e}.${o}`,
                u = t[o];
            if (!Object.prototype.hasOwnProperty.call(n, o)) {
                r({ fieldName: l, primaryType: T(u), shadowType: "missing" });
                continue;
            }
            let c = n[o];
            u !== c &&
                ("object" == typeof u && "object" == typeof c
                    ? Array.isArray(u) && Array.isArray(c)
                        ? a(l, u, c)
                        : null == u || null == c || s.has(u) || (s.add(u), i(l, u, c, s))
                    : r({ fieldName: l, primaryType: T(u), shadowType: T(c) }));
        }
    }
    function a(e, t, n) {
        (0, s.v)(t, n) ||
            r({
                fieldName: e,
                primaryType: "array",
                shadowType: "array",
                primaryArrayLength: t.length,
                secondaryArrayLength: n.length,
            });
    }
}
