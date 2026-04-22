"use strict";
n.d(t, { R7: () => u }), n(321073);
var r = n(357758),
    i = n(39304),
    s = n(52133),
    a = n(954571),
    o = n(652215);
function l(e, t) {
    return (function e(t, n, i, s) {
        if (t === n || (s && void 0 === t && null === n)) return !0;
        if ("object" != typeof t || "object" != typeof n || null === t || null === n) return !1;
        if (i.has(t)) return i.get(t) === n;
        if ((i.set(t, n), t instanceof Date && n instanceof Date)) return t.getTime() === n.getTime();
        if (t instanceof Set && n instanceof Set) return (0, r._)(t, n);
        if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return !1;
            for (let r = 0; r < t.length; r++) if (!e(t[r], n[r], i, !1)) return !1;
            return !0;
        }
        if (Array.isArray(t) || Array.isArray(n)) return !1;
        let a = Object.keys(t),
            o = Object.keys(n);
        if (a.length !== o.length) return !1;
        for (let r of a) if (!Object.prototype.hasOwnProperty.call(n, r) || !e(t[r], n[r], i, !1)) return !1;
        return !0;
    })(e, t, new Map(), !0);
}
function u(e, t, n) {
    let r = [];
    n((e, t) => {
        var n = r,
            i = e,
            s = t;
        i.derived.length !== s.derived.length &&
            n.push({ type: "length-mismatch", primaryLength: i.derived.length, shadowLength: s.derived.length });
        let a = Object.keys(i.root),
            o = Object.keys(s.root);
        for (let e of a) {
            if (!Object.prototype.hasOwnProperty.call(s.root, e)) {
                n.push({ type: "missing-record", key: e });
                continue;
            }
            let t = (function (e, t, n) {
                let r = [];
                for (let e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) {
                        let i = t[e];
                        if (!Object.prototype.hasOwnProperty.call(n, e)) {
                            r.push({ type: "field-missing", field: e });
                            continue;
                        }
                        let s = n[e];
                        l(i, s) || r.push({ type: "value-mismatch", field: e, primaryValue: i, shadowValue: s });
                    }
                if (r.length > 0)
                    return { type: "record-mismatch", key: e, primaryRecord: t, shadowRecord: n, mismatches: r };
            })(e, i.root[e], s.root[e]);
            null != t && n.push(t);
        }
        for (let e of o) Object.prototype.hasOwnProperty.call(i.root, e) || n.push({ type: "extra-record", key: e });
    }),
        (function (e, t, n) {
            if (0 === n.length) return;
            console.groupCollapsed(`[${t}Store:${e}] Dual-read validation found ${n.length} error(s)`),
                console.info("Last Few Actions: ", i.lK());
            let r = [],
                s = [],
                a = 0;
            n.forEach((e) => {
                if (!(a >= 5))
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
                                    if ("field-missing" === e.type) console.info(`Field missing: ${String(e.field)}`);
                                    else {
                                        var t, n;
                                        let r;
                                        console.groupCollapsed(`Field "${String(e.field)}" value mismatch`),
                                            (t = e.primaryValue),
                                            (n = e.shadowValue),
                                            (r = new Map()),
                                            (function e(t, n) {
                                                if (!l(t, n)) {
                                                    if (
                                                        "object" == typeof t &&
                                                        null !== t &&
                                                        "object" == typeof n &&
                                                        null !== n
                                                    ) {
                                                        if (r.has(t))
                                                            return void (r.get(t) === n
                                                                ? console.info("Cycle detected, already compared")
                                                                : console.info(
                                                                      "Cycle detected but different corresponding object",
                                                                  ));
                                                        r.set(t, n);
                                                    }
                                                    if (t instanceof Date && n instanceof Date)
                                                        return void console.info(
                                                            `Date mismatch: primary ${t}, shadow ${n}`,
                                                        );
                                                    if (t instanceof Set && n instanceof Set) {
                                                        let e = [...t].filter((e) => !n.has(e)),
                                                            r = [...n].filter((e) => !t.has(e));
                                                        e.length > 0 && console.info("Only in primary: ", e),
                                                            r.length > 0 && console.info("Only in shadow: ", r);
                                                        return;
                                                    }
                                                    if (Array.isArray(t) && Array.isArray(n)) {
                                                        let r = Math.min(t.length, n.length);
                                                        for (let i = 0; i < r; i++)
                                                            l(t[i], n[i]) ||
                                                                (console.group(`Array index ${i} mismatch:`),
                                                                e(t[i], n[i]),
                                                                console.groupEnd());
                                                        t.length > n.length
                                                            ? console.info("Extra in primary: ", t.slice(n.length))
                                                            : n.length > t.length &&
                                                              console.info("Extra in shadow: ", n.slice(t.length));
                                                        return;
                                                    }
                                                    if (d(t) && d(n)) {
                                                        let r = new Set(Object.keys(t)),
                                                            i = new Set(Object.keys(n));
                                                        for (let s of Array.from(new Set([...r, ...i])).sort())
                                                            r.has(s)
                                                                ? i.has(s)
                                                                    ? l(t[s], n[s]) ||
                                                                      (console.group(`Field ${s} mismatch:`),
                                                                      e(t[s], n[s]),
                                                                      console.groupEnd())
                                                                    : console.info(
                                                                          `Missing field in shadow: ${s} = `,
                                                                          t[s],
                                                                      )
                                                                : console.info(`Extra field in shadow: ${s} = `, n[s]);
                                                        return;
                                                    }
                                                    console.info("Value mismatch: primary ", t, " shadow ", n);
                                                }
                                            })(t, n),
                                            console.groupEnd();
                                    }
                                }),
                                console.groupEnd();
                    }
            }),
                a < n.length && console.info(`... and ${n.length - a} more error(s) not shown`),
                r.length > 0 && console.info(`Missing records in shadow state: ${r.join(", ")}`),
                s.length > 0 && console.info(`Extra records in shadow state: ${s.join(", ")}`),
                console.groupEnd();
        })(e, t, r),
        (function (e, t) {
            if (0 === t.length) return;
            let n = i.HV();
            if (null == n) return console.error("Trying to log mismatches, but no last dispatched action found");
            let r = c.get(e) ?? {
                mismatchesReported: 0,
                mismatchesByLastAction: new Map(),
                visitedEntries: new WeakSet(),
                seenMismatches: new Set(),
            };
            if ((c.set(e, r), r.mismatchesReported >= 15)) return;
            let l = r.mismatchesByLastAction.get(n) ?? 0;
            if (l >= 3) return;
            let u = (function (e, t) {
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
                                            primaryType: _(s.primaryRecord[t.field]),
                                            shadowType: "missing",
                                        });
                                        break;
                                    case "value-mismatch":
                                        null !== t.primaryValue &&
                                        null !== t.shadowValue &&
                                        "object" == typeof t.primaryValue &&
                                        "object" == typeof t.shadowValue
                                            ? Array.isArray(t.primaryValue) && Array.isArray(t.shadowValue)
                                                ? i(e, t.primaryValue, t.shadowValue)
                                                : (function e(t, n, s) {
                                                      let a =
                                                          arguments.length > 3 && void 0 !== arguments[3]
                                                              ? arguments[3]
                                                              : new Set();
                                                      for (let o of Object.keys(n)) {
                                                          let l = `${t}.${o}`,
                                                              u = n[o];
                                                          if (!Object.prototype.hasOwnProperty.call(s, o)) {
                                                              r({
                                                                  fieldName: l,
                                                                  primaryType: _(u),
                                                                  shadowType: "missing",
                                                              });
                                                              continue;
                                                          }
                                                          let d = s[o];
                                                          u !== d &&
                                                              ("object" == typeof u && "object" == typeof d
                                                                  ? Array.isArray(u) && Array.isArray(d)
                                                                      ? i(l, u, d)
                                                                      : null == u ||
                                                                        null == d ||
                                                                        a.has(u) ||
                                                                        (a.add(u), e(l, u, d, a))
                                                                  : r({
                                                                        fieldName: l,
                                                                        primaryType: _(u),
                                                                        shadowType: _(d),
                                                                    }));
                                                      }
                                                  })(e, t.primaryValue, t.shadowValue)
                                            : r({
                                                  fieldName: e,
                                                  primaryType: _(t.primaryValue),
                                                  shadowType: _(t.shadowValue),
                                              });
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
                    (0, s.v)(t, n) ||
                        r({
                            fieldName: e,
                            primaryType: "array",
                            shadowType: "array",
                            primaryArrayLength: t.length,
                            secondaryArrayLength: n.length,
                        });
                }
            })(r, t);
            null != u &&
                (r.mismatchesByLastAction.set(n, l + 1),
                r.mismatchesReported++,
                a.default.track(o.HAw.LIBDISCORE_KV_DUAL_READ_ERROR, {
                    store_name: e,
                    action_type: n,
                    num_missing_keys: u.numMissingKeys,
                    num_extra_keys: u.numExtraKeys,
                    mismatched_fields: JSON.stringify(u.mismatchedFields),
                }));
        })(e, r);
}
function d(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e) && !(e instanceof Date) && !(e instanceof Set);
}
let c = new Map();
function _(e) {
    return null === e ? "null" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : "object";
}
