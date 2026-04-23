"use strict";
n.d(t, { L: () => u });
var r = n(467276),
    i = n(65412),
    s = n(124651),
    a = n(82180),
    o = n(123789),
    l = n(716115);
class u {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (void 0 === this.fMap)
            for (let t of ((this.fMap = {}), null != (e = this.info.fields) ? e : []))
                (this.fMap[t.name] = t), (this.fMap[t.jsonName] = t), (this.fMap[t.localName] = t);
    }
    assert(e, t, n) {
        if (!e) {
            let e = (0, r.V)(n);
            throw (
                (("number" == e || "boolean" == e) && (e = n.toString()),
                Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`))
            );
        }
    }
    read(e, t, n) {
        this.prepare();
        let i = [];
        for (let [a, o] of Object.entries(e)) {
            let e,
                l = this.fMap[a];
            if (!l) {
                if (!n.ignoreUnknownFields)
                    throw Error(
                        `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${a}`,
                    );
                continue;
            }
            let u = l.localName;
            if (l.oneof) {
                if (i.includes(l.oneof))
                    throw Error(
                        `Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`,
                    );
                i.push(l.oneof), (e = t[l.oneof] = { oneofKind: u });
            } else e = t;
            if ("map" == l.kind) {
                if (null === o) continue;
                this.assert((0, r.O)(o), l.name, o);
                let t = e[u];
                for (let [e, r] of Object.entries(o)) {
                    let i;
                    switch ((this.assert(null !== r, l.name + " map value", null), l.V.kind)) {
                        case "message":
                            i = l.V.T().internalJsonRead(r, n);
                            break;
                        case "enum":
                            if (!1 === (i = this.enum(l.V.T(), r, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case "scalar":
                            i = this.scalar(r, l.V.T, l.V.L, l.name);
                    }
                    this.assert(void 0 !== i, l.name + " map value", r);
                    let a = e;
                    l.K == s.LN.BOOL && (a = "true" == a || ("false" != a && a)),
                        (t[(a = this.scalar(a, l.K, s.rO.STRING, l.name).toString())] = i);
                }
            } else if (l.repeat) {
                if (null === o) continue;
                this.assert(Array.isArray(o), l.name, o);
                let t = e[u];
                for (let e of o) {
                    let r;
                    switch ((this.assert(null !== e, l.name, null), l.kind)) {
                        case "message":
                            r = l.T().internalJsonRead(e, n);
                            break;
                        case "enum":
                            if (!1 === (r = this.enum(l.T(), e, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case "scalar":
                            r = this.scalar(e, l.T, l.L, l.name);
                    }
                    this.assert(void 0 !== r, l.name, o), t.push(r);
                }
            } else
                switch (l.kind) {
                    case "message":
                        if (null === o && "google.protobuf.Value" != l.T().typeName) {
                            this.assert(void 0 === l.oneof, l.name + " (oneof member)", null);
                            continue;
                        }
                        e[u] = l.T().internalJsonRead(o, n, e[u]);
                        break;
                    case "enum":
                        let c = this.enum(l.T(), o, l.name, n.ignoreUnknownFields);
                        if (!1 === c) continue;
                        e[u] = c;
                        break;
                    case "scalar":
                        e[u] = this.scalar(o, l.T, l.L, l.name);
                }
        }
    }
    enum(e, t, n, r) {
        if (
            ("google.protobuf.NullValue" == e[0] &&
                (0, o.vA)(
                    null === t,
                    `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`,
                ),
            null === t)
        )
            return 0;
        switch (typeof t) {
            case "number":
                return (
                    (0, o.vA)(
                        Number.isInteger(t),
                        `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`,
                    ),
                    t
                );
            case "string":
                let i = t;
                e[2] && t.substring(0, e[2].length) === e[2] && (i = t.substring(e[2].length));
                let s = e[1][i];
                if (void 0 === s && r) return !1;
                return (
                    (0, o.vA)(
                        "number" == typeof s,
                        `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`,
                    ),
                    s
                );
        }
        (0, o.vA)(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, n, r) {
        let u;
        try {
            switch (t) {
                case s.LN.DOUBLE:
                case s.LN.FLOAT:
                    if (null === e) return 0;
                    if ("NaN" === e) return NaN;
                    if ("Infinity" === e) return 1 / 0;
                    if ("-Infinity" === e) return -1 / 0;
                    if ("" === e) {
                        u = "empty string";
                        break;
                    }
                    if ("string" == typeof e && e.trim().length !== e.length) {
                        u = "extra whitespace";
                        break;
                    }
                    if ("string" != typeof e && "number" != typeof e) break;
                    let r = Number(e);
                    if (Number.isNaN(r)) {
                        u = "not a number";
                        break;
                    }
                    if (!Number.isFinite(r)) {
                        u = "too large or small";
                        break;
                    }
                    return t == s.LN.FLOAT && (0, o.wO)(r), r;
                case s.LN.INT32:
                case s.LN.FIXED32:
                case s.LN.SFIXED32:
                case s.LN.SINT32:
                case s.LN.UINT32:
                    let c;
                    if (null === e) return 0;
                    if (
                        ("number" == typeof e
                            ? (c = e)
                            : "" === e
                              ? (u = "empty string")
                              : "string" == typeof e &&
                                (e.trim().length !== e.length ? (u = "extra whitespace") : (c = Number(e))),
                        void 0 === c)
                    )
                        break;
                    return t == s.LN.UINT32 ? (0, o.e1)(c) : (0, o.bn)(c), c;
                case s.LN.INT64:
                case s.LN.SFIXED64:
                case s.LN.SINT64:
                    if (null === e) return (0, l.l)(a.h.ZERO, n);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return (0, l.l)(a.h.from(e), n);
                case s.LN.FIXED64:
                case s.LN.UINT64:
                    if (null === e) return (0, l.l)(a.e.ZERO, n);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return (0, l.l)(a.e.from(e), n);
                case s.LN.BOOL:
                    if (null === e) return !1;
                    if ("boolean" != typeof e) break;
                    return e;
                case s.LN.STRING:
                    if (null === e) return "";
                    if ("string" != typeof e) {
                        u = "extra whitespace";
                        break;
                    }
                    try {
                        encodeURIComponent(e);
                    } catch (e) {
                        break;
                    }
                    return e;
                case s.LN.BYTES:
                    if (null === e || "" === e) return new Uint8Array(0);
                    if ("string" != typeof e) break;
                    return (0, i.A)(e);
            }
        } catch (e) {
            u = e.message;
        }
        this.assert(!1, r + (u ? " - " + u : ""), e);
    }
}
