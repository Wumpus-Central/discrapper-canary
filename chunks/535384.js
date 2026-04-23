"use strict";
r.d(t, { G: () => R });
var n = r(96326);
class a {
    constructor(e) {
        var t;
        this.fields = null != (t = e.fields) ? t : [];
    }
    prepare() {
        if (this.data) return;
        let e = [],
            t = [],
            r = [];
        for (let n of this.fields)
            if (n.oneof) r.includes(n.oneof) || (r.push(n.oneof), e.push(n.oneof), t.push(n.oneof));
            else
                switch ((t.push(n.localName), n.kind)) {
                    case "scalar":
                    case "enum":
                        (!n.opt || n.repeat) && e.push(n.localName);
                        break;
                    case "message":
                        n.repeat && e.push(n.localName);
                        break;
                    case "map":
                        e.push(n.localName);
                }
        this.data = { req: e, known: t, oneofs: Object.values(r) };
    }
    is(e, t, r = !1) {
        if (t < 0) return !0;
        if (null == e || "object" != typeof e) return !1;
        this.prepare();
        let n = Object.keys(e),
            a = this.data;
        if (n.length < a.req.length || a.req.some((e) => !n.includes(e)) || (!r && n.some((e) => !a.known.includes(e))))
            return !1;
        if (t < 1) return !0;
        for (let n of a.oneofs) {
            let a = e[n];
            if (
                !(function (e) {
                    if ("object" != typeof e || null === e || !e.hasOwnProperty("oneofKind")) return !1;
                    switch (typeof e.oneofKind) {
                        case "string":
                            if (void 0 === e[e.oneofKind]) return !1;
                            return 2 == Object.keys(e).length;
                        case "undefined":
                            return 1 == Object.keys(e).length;
                        default:
                            return !1;
                    }
                })(a)
            )
                return !1;
            if (void 0 === a.oneofKind) continue;
            let s = this.fields.find((e) => e.localName === a.oneofKind);
            if (!s || !this.field(a[a.oneofKind], s, r, t)) return !1;
        }
        for (let n of this.fields) if (void 0 === n.oneof && !this.field(e[n.localName], n, r, t)) return !1;
        return !0;
    }
    field(e, t, r, a) {
        let s = t.repeat;
        switch (t.kind) {
            case "scalar":
                if (void 0 === e) return t.opt;
                if (s) return this.scalars(e, t.T, a, t.L);
                return this.scalar(e, t.T, t.L);
            case "enum":
                if (void 0 === e) return t.opt;
                if (s) return this.scalars(e, n.LN.INT32, a);
                return this.scalar(e, n.LN.INT32);
            case "message":
                if (void 0 === e) break;
                if (s) return this.messages(e, t.T(), r, a);
                return this.message(e, t.T(), r, a);
            case "map":
                if ("object" != typeof e || null === e) return !1;
                if (a < 2) break;
                if (!this.mapKeys(e, t.K, a)) return !1;
                switch (t.V.kind) {
                    case "scalar":
                        return this.scalars(Object.values(e), t.V.T, a, t.V.L);
                    case "enum":
                        return this.scalars(Object.values(e), n.LN.INT32, a);
                    case "message":
                        return this.messages(Object.values(e), t.V.T(), r, a);
                }
        }
        return !0;
    }
    message(e, t, r, n) {
        return r ? t.isAssignable(e, n) : t.is(e, n);
    }
    messages(e, t, r, n) {
        if (!Array.isArray(e)) return !1;
        if (n < 2) return !0;
        if (r) {
            for (let r = 0; r < e.length && r < n; r++) if (!t.isAssignable(e[r], n - 1)) return !1;
        } else for (let r = 0; r < e.length && r < n; r++) if (!t.is(e[r], n - 1)) return !1;
        return !0;
    }
    scalar(e, t, r) {
        let a = typeof e;
        switch (t) {
            case n.LN.UINT64:
            case n.LN.FIXED64:
            case n.LN.INT64:
            case n.LN.SFIXED64:
            case n.LN.SINT64:
                switch (r) {
                    case n.rO.BIGINT:
                        return "bigint" == a;
                    case n.rO.NUMBER:
                        return "number" == a && !isNaN(e);
                    default:
                        return "string" == a;
                }
            case n.LN.BOOL:
                return "boolean" == a;
            case n.LN.STRING:
                return "string" == a;
            case n.LN.BYTES:
                return e instanceof Uint8Array;
            case n.LN.DOUBLE:
            case n.LN.FLOAT:
                return "number" == a && !isNaN(e);
            default:
                return "number" == a && Number.isInteger(e);
        }
    }
    scalars(e, t, r, n) {
        if (!Array.isArray(e)) return !1;
        if (r < 2) return !0;
        if (Array.isArray(e)) {
            for (let a = 0; a < e.length && a < r; a++) if (!this.scalar(e[a], t, n)) return !1;
        }
        return !0;
    }
    mapKeys(e, t, r) {
        let a = Object.keys(e);
        switch (t) {
            case n.LN.INT32:
            case n.LN.FIXED32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
            case n.LN.UINT32:
                return this.scalars(
                    a.slice(0, r).map((e) => parseInt(e)),
                    t,
                    r,
                );
            case n.LN.BOOL:
                return this.scalars(
                    a.slice(0, r).map((e) => "true" == e || ("false" != e && e)),
                    t,
                    r,
                );
            default:
                return this.scalars(a, t, r, n.rO.STRING);
        }
    }
}
var s = r(467276),
    i = r(65412),
    o = r(82180);
function l(e, t) {
    if (!e) throw Error(t);
}
function u(e) {
    if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > 0x7fffffff || e < -0x80000000) throw Error("invalid int 32: " + e);
}
function c(e) {
    if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > 0xffffffff || e < 0) throw Error("invalid uint 32: " + e);
}
function d(e) {
    if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
        throw Error("invalid float 32: " + e);
}
function f(e, t) {
    switch (t) {
        case n.rO.BIGINT:
            return e.toBigInt();
        case n.rO.NUMBER:
            return e.toNumber();
        default:
            return e.toString();
    }
}
class p {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (void 0 === this.fMap)
            for (let t of ((this.fMap = {}), null != (e = this.info.fields) ? e : []))
                (this.fMap[t.name] = t), (this.fMap[t.jsonName] = t), (this.fMap[t.localName] = t);
    }
    assert(e, t, r) {
        if (!e) {
            let e = (0, s.V)(r);
            throw (
                (("number" == e || "boolean" == e) && (e = r.toString()),
                Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`))
            );
        }
    }
    read(e, t, r) {
        this.prepare();
        let a = [];
        for (let [i, o] of Object.entries(e)) {
            let e,
                l = this.fMap[i];
            if (!l) {
                if (!r.ignoreUnknownFields)
                    throw Error(
                        `Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${i}`,
                    );
                continue;
            }
            let u = l.localName;
            if (l.oneof) {
                if (a.includes(l.oneof))
                    throw Error(
                        `Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`,
                    );
                a.push(l.oneof), (e = t[l.oneof] = { oneofKind: u });
            } else e = t;
            if ("map" == l.kind) {
                if (null === o) continue;
                this.assert((0, s.O)(o), l.name, o);
                let t = e[u];
                for (let [e, a] of Object.entries(o)) {
                    let s;
                    switch ((this.assert(null !== a, l.name + " map value", null), l.V.kind)) {
                        case "message":
                            s = l.V.T().internalJsonRead(a, r);
                            break;
                        case "enum":
                            if (!1 === (s = this.enum(l.V.T(), a, l.name, r.ignoreUnknownFields))) continue;
                            break;
                        case "scalar":
                            s = this.scalar(a, l.V.T, l.V.L, l.name);
                    }
                    this.assert(void 0 !== s, l.name + " map value", a);
                    let i = e;
                    l.K == n.LN.BOOL && (i = "true" == i || ("false" != i && i)),
                        (t[(i = this.scalar(i, l.K, n.rO.STRING, l.name).toString())] = s);
                }
            } else if (l.repeat) {
                if (null === o) continue;
                this.assert(Array.isArray(o), l.name, o);
                let t = e[u];
                for (let e of o) {
                    let n;
                    switch ((this.assert(null !== e, l.name, null), l.kind)) {
                        case "message":
                            n = l.T().internalJsonRead(e, r);
                            break;
                        case "enum":
                            if (!1 === (n = this.enum(l.T(), e, l.name, r.ignoreUnknownFields))) continue;
                            break;
                        case "scalar":
                            n = this.scalar(e, l.T, l.L, l.name);
                    }
                    this.assert(void 0 !== n, l.name, o), t.push(n);
                }
            } else
                switch (l.kind) {
                    case "message":
                        if (null === o && "google.protobuf.Value" != l.T().typeName) {
                            this.assert(void 0 === l.oneof, l.name + " (oneof member)", null);
                            continue;
                        }
                        e[u] = l.T().internalJsonRead(o, r, e[u]);
                        break;
                    case "enum":
                        let c = this.enum(l.T(), o, l.name, r.ignoreUnknownFields);
                        if (!1 === c) continue;
                        e[u] = c;
                        break;
                    case "scalar":
                        e[u] = this.scalar(o, l.T, l.L, l.name);
                }
        }
    }
    enum(e, t, r, n) {
        if (
            ("google.protobuf.NullValue" == e[0] &&
                l(null === t, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} only accepts null.`),
            null === t)
        )
            return 0;
        switch (typeof t) {
            case "number":
                return (
                    l(
                        Number.isInteger(t),
                        `Unable to parse field ${this.info.typeName}#${r}, enum can only be integral number, got ${t}.`,
                    ),
                    t
                );
            case "string":
                let a = t;
                e[2] && t.substring(0, e[2].length) === e[2] && (a = t.substring(e[2].length));
                let s = e[1][a];
                if (void 0 === s && n) return !1;
                return (
                    l(
                        "number" == typeof s,
                        `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} has no value for "${t}".`,
                    ),
                    s
                );
        }
        l(!1, `Unable to parse field ${this.info.typeName}#${r}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, r, a) {
        let s;
        try {
            switch (t) {
                case n.LN.DOUBLE:
                case n.LN.FLOAT:
                    if (null === e) return 0;
                    if ("NaN" === e) return NaN;
                    if ("Infinity" === e) return 1 / 0;
                    if ("-Infinity" === e) return -1 / 0;
                    if ("" === e) {
                        s = "empty string";
                        break;
                    }
                    if ("string" == typeof e && e.trim().length !== e.length) {
                        s = "extra whitespace";
                        break;
                    }
                    if ("string" != typeof e && "number" != typeof e) break;
                    let a = Number(e);
                    if (Number.isNaN(a)) {
                        s = "not a number";
                        break;
                    }
                    if (!Number.isFinite(a)) {
                        s = "too large or small";
                        break;
                    }
                    return t == n.LN.FLOAT && d(a), a;
                case n.LN.INT32:
                case n.LN.FIXED32:
                case n.LN.SFIXED32:
                case n.LN.SINT32:
                case n.LN.UINT32:
                    let l;
                    if (null === e) return 0;
                    if (
                        ("number" == typeof e
                            ? (l = e)
                            : "" === e
                              ? (s = "empty string")
                              : "string" == typeof e &&
                                (e.trim().length !== e.length ? (s = "extra whitespace") : (l = Number(e))),
                        void 0 === l)
                    )
                        break;
                    return t == n.LN.UINT32 ? c(l) : u(l), l;
                case n.LN.INT64:
                case n.LN.SFIXED64:
                case n.LN.SINT64:
                    if (null === e) return f(o.h.ZERO, r);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return f(o.h.from(e), r);
                case n.LN.FIXED64:
                case n.LN.UINT64:
                    if (null === e) return f(o.e.ZERO, r);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return f(o.e.from(e), r);
                case n.LN.BOOL:
                    if (null === e) return !1;
                    if ("boolean" != typeof e) break;
                    return e;
                case n.LN.STRING:
                    if (null === e) return "";
                    if ("string" != typeof e) {
                        s = "extra whitespace";
                        break;
                    }
                    try {
                        encodeURIComponent(e);
                    } catch (e) {
                        break;
                    }
                    return e;
                case n.LN.BYTES:
                    if (null === e || "" === e) return new Uint8Array(0);
                    if ("string" != typeof e) break;
                    return (0, i.A)(e);
            }
        } catch (e) {
            s = e.message;
        }
        this.assert(!1, a + (s ? " - " + s : ""), e);
    }
}
class h {
    constructor(e) {
        var t;
        this.fields = null != (t = e.fields) ? t : [];
    }
    write(e, t) {
        let r = {};
        for (let n of this.fields) {
            if (!n.oneof) {
                let a = this.field(n, e[n.localName], t);
                void 0 !== a && (r[t.useProtoFieldName ? n.name : n.jsonName] = a);
                continue;
            }
            let a = e[n.oneof];
            if (a.oneofKind !== n.localName) continue;
            let s =
                    "scalar" == n.kind || "enum" == n.kind
                        ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
                        : t,
                i = this.field(n, a[n.localName], s);
            l(void 0 !== i), (r[t.useProtoFieldName ? n.name : n.jsonName] = i);
        }
        return r;
    }
    field(e, t, r) {
        let n;
        if ("map" == e.kind) {
            l("object" == typeof t && null !== t);
            let a = {};
            switch (e.V.kind) {
                case "scalar":
                    for (let [r, n] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, n, e.name, !1, !0);
                        l(void 0 !== t), (a[r.toString()] = t);
                    }
                    break;
                case "message":
                    let s = e.V.T();
                    for (let [n, i] of Object.entries(t)) {
                        let t = this.message(s, i, e.name, r);
                        l(void 0 !== t), (a[n.toString()] = t);
                    }
                    break;
                case "enum":
                    let i = e.V.T();
                    for (let [n, s] of Object.entries(t)) {
                        l(void 0 === s || "number" == typeof s);
                        let t = this.enum(i, s, e.name, !1, !0, r.enumAsInteger);
                        l(void 0 !== t), (a[n.toString()] = t);
                    }
            }
            (r.emitDefaultValues || Object.keys(a).length > 0) && (n = a);
        } else if (e.repeat) {
            l(Array.isArray(t));
            let a = [];
            switch (e.kind) {
                case "scalar":
                    for (let r = 0; r < t.length; r++) {
                        let n = this.scalar(e.T, t[r], e.name, e.opt, !0);
                        l(void 0 !== n), a.push(n);
                    }
                    break;
                case "enum":
                    let s = e.T();
                    for (let n = 0; n < t.length; n++) {
                        l(void 0 === t[n] || "number" == typeof t[n]);
                        let i = this.enum(s, t[n], e.name, e.opt, !0, r.enumAsInteger);
                        l(void 0 !== i), a.push(i);
                    }
                    break;
                case "message":
                    let i = e.T();
                    for (let n = 0; n < t.length; n++) {
                        let s = this.message(i, t[n], e.name, r);
                        l(void 0 !== s), a.push(s);
                    }
            }
            (r.emitDefaultValues || a.length > 0 || r.emitDefaultValues) && (n = a);
        } else
            switch (e.kind) {
                case "scalar":
                    n = this.scalar(e.T, t, e.name, e.opt, r.emitDefaultValues);
                    break;
                case "enum":
                    n = this.enum(e.T(), t, e.name, e.opt, r.emitDefaultValues, r.enumAsInteger);
                    break;
                case "message":
                    n = this.message(e.T(), t, e.name, r);
            }
        return n;
    }
    enum(e, t, r, n, a, s) {
        return "google.protobuf.NullValue" == e[0]
            ? null
            : void 0 === t
              ? void l(n)
              : 0 !== t || a || n
                ? (l("number" == typeof t), l(Number.isInteger(t)), s || !e[1].hasOwnProperty(t))
                    ? t
                    : e[2]
                      ? e[2] + e[1][t]
                      : e[1][t]
                : void 0;
    }
    message(e, t, r, n) {
        return void 0 === t ? (n.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, n);
    }
    scalar(e, t, r, a, s) {
        if (void 0 === t) return void l(a);
        let f = s || a;
        switch (e) {
            case n.LN.INT32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
                if (0 === t) return f ? 0 : void 0;
                return u(t), t;
            case n.LN.FIXED32:
            case n.LN.UINT32:
                if (0 === t) return f ? 0 : void 0;
                return c(t), t;
            case n.LN.FLOAT:
                d(t);
            case n.LN.DOUBLE:
                if (0 === t) return f ? 0 : void 0;
                if ((l("number" == typeof t), Number.isNaN(t))) return "NaN";
                if (t === 1 / 0) return "Infinity";
                if (t === -1 / 0) return "-Infinity";
                return t;
            case n.LN.STRING:
                if ("" === t) return f ? "" : void 0;
                return l("string" == typeof t), t;
            case n.LN.BOOL:
                if (!1 === t) return !f && void 0;
                return l("boolean" == typeof t), t;
            case n.LN.UINT64:
            case n.LN.FIXED64:
                l("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let p = o.e.from(t);
                if (p.isZero() && !f) return;
                return p.toString();
            case n.LN.INT64:
            case n.LN.SFIXED64:
            case n.LN.SINT64:
                l("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let h = o.h.from(t);
                if (h.isZero() && !f) return;
                return h.toString();
            case n.LN.BYTES:
                if ((l(t instanceof Uint8Array), !t.byteLength)) return f ? "" : void 0;
                return (0, i.C)(t);
        }
    }
}
var m = r(852015);
function _(e, t = n.rO.STRING) {
    switch (e) {
        case n.LN.BOOL:
            return !1;
        case n.LN.UINT64:
        case n.LN.FIXED64:
            return f(o.e.ZERO, t);
        case n.LN.INT64:
        case n.LN.SFIXED64:
        case n.LN.SINT64:
            return f(o.h.ZERO, t);
        case n.LN.DOUBLE:
        case n.LN.FLOAT:
            return 0;
        case n.LN.BYTES:
            return new Uint8Array(0);
        case n.LN.STRING:
            return "";
        default:
            return 0;
    }
}
class g {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (!this.fieldNoToField) {
            let t = null != (e = this.info.fields) ? e : [];
            this.fieldNoToField = new Map(t.map((e) => [e.no, e]));
        }
    }
    read(e, t, r, a) {
        this.prepare();
        let s = void 0 === a ? e.len : e.pos + a;
        for (; e.pos < s; ) {
            let [a, s] = e.tag(),
                i = this.fieldNoToField.get(a);
            if (!i) {
                let n = r.readUnknownField;
                if ("throw" == n) throw Error(`Unknown field ${a} (wire type ${s}) for ${this.info.typeName}`);
                let i = e.skip(s);
                !1 !== n && (!0 === n ? m.f$.onRead : n)(this.info.typeName, t, a, s, i);
                continue;
            }
            let o = t,
                l = i.repeat,
                u = i.localName;
            switch ((i.oneof && (o = o[i.oneof]).oneofKind !== u && (o = t[i.oneof] = { oneofKind: u }), i.kind)) {
                case "scalar":
                case "enum":
                    let c = "enum" == i.kind ? n.LN.INT32 : i.T,
                        d = "scalar" == i.kind ? i.L : void 0;
                    if (l) {
                        let t = o[u];
                        if (s == m.O0.LengthDelimited && c != n.LN.STRING && c != n.LN.BYTES) {
                            let r = e.uint32() + e.pos;
                            for (; e.pos < r; ) t.push(this.scalar(e, c, d));
                        } else t.push(this.scalar(e, c, d));
                    } else o[u] = this.scalar(e, c, d);
                    break;
                case "message":
                    if (l) {
                        let t = o[u],
                            n = i.T().internalBinaryRead(e, e.uint32(), r);
                        t.push(n);
                    } else o[u] = i.T().internalBinaryRead(e, e.uint32(), r, o[u]);
                    break;
                case "map":
                    let [f, p] = this.mapEntry(i, e, r);
                    o[u][f] = p;
            }
        }
    }
    mapEntry(e, t, r) {
        let a,
            s,
            i = t.uint32(),
            o = t.pos + i;
        for (; t.pos < o; ) {
            let [i, o] = t.tag();
            switch (i) {
                case 1:
                    a = e.K == n.LN.BOOL ? t.bool().toString() : this.scalar(t, e.K, n.rO.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case "scalar":
                            s = this.scalar(t, e.V.T, e.V.L);
                            break;
                        case "enum":
                            s = t.int32();
                            break;
                        case "message":
                            s = e.V.T().internalBinaryRead(t, t.uint32(), r);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${i} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === a) {
            let t = _(e.K);
            a = e.K == n.LN.BOOL ? t.toString() : t;
        }
        if (void 0 === s)
            switch (e.V.kind) {
                case "scalar":
                    s = _(e.V.T, e.V.L);
                    break;
                case "enum":
                    s = 0;
                    break;
                case "message":
                    s = e.V.T().create();
            }
        return [a, s];
    }
    scalar(e, t, r) {
        switch (t) {
            case n.LN.INT32:
                return e.int32();
            case n.LN.STRING:
                return e.string();
            case n.LN.BOOL:
                return e.bool();
            case n.LN.DOUBLE:
                return e.double();
            case n.LN.FLOAT:
                return e.float();
            case n.LN.INT64:
                return f(e.int64(), r);
            case n.LN.UINT64:
                return f(e.uint64(), r);
            case n.LN.FIXED64:
                return f(e.fixed64(), r);
            case n.LN.FIXED32:
                return e.fixed32();
            case n.LN.BYTES:
                return e.bytes();
            case n.LN.UINT32:
                return e.uint32();
            case n.LN.SFIXED32:
                return e.sfixed32();
            case n.LN.SFIXED64:
                return f(e.sfixed64(), r);
            case n.LN.SINT32:
                return e.sint32();
            case n.LN.SINT64:
                return f(e.sint64(), r);
        }
    }
}
class v {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        if (!this.fields) {
            let e = this.info.fields ? this.info.fields.concat() : [];
            this.fields = e.sort((e, t) => e.no - t.no);
        }
    }
    write(e, t, r) {
        for (let a of (this.prepare(), this.fields)) {
            let s,
                i,
                o = a.repeat,
                u = a.localName;
            if (a.oneof) {
                let t = e[a.oneof];
                if (t.oneofKind !== u) continue;
                (s = t[u]), (i = !0);
            } else (s = e[u]), (i = !1);
            switch (a.kind) {
                case "scalar":
                case "enum":
                    let c = "enum" == a.kind ? n.LN.INT32 : a.T;
                    if (o)
                        if ((l(Array.isArray(s)), o == n.sA.PACKED)) this.packed(t, c, a.no, s);
                        else for (let e of s) this.scalar(t, c, a.no, e, !0);
                    else void 0 === s ? l(a.opt) : this.scalar(t, c, a.no, s, i || a.opt);
                    break;
                case "message":
                    if (o) for (let e of (l(Array.isArray(s)), s)) this.message(t, r, a.T(), a.no, e);
                    else this.message(t, r, a.T(), a.no, s);
                    break;
                case "map":
                    for (let [e, n] of (l("object" == typeof s && null !== s), Object.entries(s)))
                        this.mapEntry(t, r, a, e, n);
            }
        }
        let a = r.writeUnknownFields;
        !1 !== a && (!0 === a ? m.f$.onWrite : a)(this.info.typeName, e, t);
    }
    mapEntry(e, t, r, a, s) {
        e.tag(r.no, m.O0.LengthDelimited), e.fork();
        let i = a;
        switch (r.K) {
            case n.LN.INT32:
            case n.LN.FIXED32:
            case n.LN.UINT32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
                i = Number.parseInt(a);
                break;
            case n.LN.BOOL:
                l("true" == a || "false" == a), (i = "true" == a);
        }
        switch ((this.scalar(e, r.K, 1, i, !0), r.V.kind)) {
            case "scalar":
                this.scalar(e, r.V.T, 2, s, !0);
                break;
            case "enum":
                this.scalar(e, n.LN.INT32, 2, s, !0);
                break;
            case "message":
                this.message(e, t, r.V.T(), 2, s);
        }
        e.join();
    }
    message(e, t, r, n, a) {
        void 0 !== a && (r.internalBinaryWrite(a, e.tag(n, m.O0.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, r, n, a) {
        let [s, i, o] = this.scalarInfo(t, n);
        (!o || a) && (e.tag(r, s), e[i](n));
    }
    packed(e, t, r, a) {
        if (!a.length) return;
        l(t !== n.LN.BYTES && t !== n.LN.STRING), e.tag(r, m.O0.LengthDelimited), e.fork();
        let [, s] = this.scalarInfo(t);
        for (let t = 0; t < a.length; t++) e[s](a[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let r,
            a = m.O0.Varint,
            s = void 0 === t,
            i = 0 === t;
        switch (e) {
            case n.LN.INT32:
                r = "int32";
                break;
            case n.LN.STRING:
                (i = s || !t.length), (a = m.O0.LengthDelimited), (r = "string");
                break;
            case n.LN.BOOL:
                (i = !1 === t), (r = "bool");
                break;
            case n.LN.UINT32:
                r = "uint32";
                break;
            case n.LN.DOUBLE:
                (a = m.O0.Bit64), (r = "double");
                break;
            case n.LN.FLOAT:
                (a = m.O0.Bit32), (r = "float");
                break;
            case n.LN.INT64:
                (i = s || o.h.from(t).isZero()), (r = "int64");
                break;
            case n.LN.UINT64:
                (i = s || o.e.from(t).isZero()), (r = "uint64");
                break;
            case n.LN.FIXED64:
                (i = s || o.e.from(t).isZero()), (a = m.O0.Bit64), (r = "fixed64");
                break;
            case n.LN.BYTES:
                (i = s || !t.byteLength), (a = m.O0.LengthDelimited), (r = "bytes");
                break;
            case n.LN.FIXED32:
                (a = m.O0.Bit32), (r = "fixed32");
                break;
            case n.LN.SFIXED32:
                (a = m.O0.Bit32), (r = "sfixed32");
                break;
            case n.LN.SFIXED64:
                (i = s || o.h.from(t).isZero()), (a = m.O0.Bit64), (r = "sfixed64");
                break;
            case n.LN.SINT32:
                r = "sint32";
                break;
            case n.LN.SINT64:
                (i = s || o.h.from(t).isZero()), (r = "sint64");
        }
        return [a, r, s || i];
    }
}
var b = r(428420),
    y = r(144367);
let E = { emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0 },
    S = { ignoreUnknownFields: !1 },
    T = Object.values;
function x(e, t, r) {
    if (t === r) return !0;
    if (e !== n.LN.BYTES || t.length !== r.length) return !1;
    for (let e = 0; e < t.length; e++) if (t[e] != r[e]) return !1;
    return !0;
}
function w(e, t, r) {
    if (t.length !== r.length) return !1;
    for (let n = 0; n < t.length; n++) if (!x(e, t[n], r[n])) return !1;
    return !0;
}
function C(e, t, r) {
    if (t.length !== r.length) return !1;
    for (let n = 0; n < t.length; n++) if (!e.equals(t[n], r[n])) return !1;
    return !0;
}
var D = r(679314);
let O = { writeUnknownFields: !0, writerFactory: () => new A() };
class A {
    constructor(e) {
        (this.stack = []), (this.textEncoder = null != e ? e : new TextEncoder()), (this.chunks = []), (this.buf = []);
    }
    finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
        let t = new Uint8Array(e),
            r = 0;
        for (let e = 0; e < this.chunks.length; e++) t.set(this.chunks[e], r), (r += this.chunks[e].length);
        return (this.chunks = []), t;
    }
    fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), (this.chunks = []), (this.buf = []), this;
    }
    join() {
        let e = this.finish(),
            t = this.stack.pop();
        if (!t) throw Error("invalid state, fork stack empty");
        return (this.chunks = t.chunks), (this.buf = t.buf), this.uint32(e.byteLength), this.raw(e);
    }
    tag(e, t) {
        return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
        return (
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])), this.chunks.push(e), this
        );
    }
    uint32(e) {
        for (c(e); e > 127; ) this.buf.push((127 & e) | 128), (e >>>= 7);
        return this.buf.push(e), this;
    }
    int32(e) {
        return u(e), (0, D.f7)(e, this.buf), this;
    }
    bool(e) {
        return this.buf.push(+!!e), this;
    }
    bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
    }
    string(e) {
        let t = this.textEncoder.encode(e);
        return this.uint32(t.byteLength), this.raw(t);
    }
    float(e) {
        d(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
    }
    double(e) {
        let t = new Uint8Array(8);
        return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
    }
    fixed32(e) {
        c(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
    }
    sfixed32(e) {
        u(e);
        let t = new Uint8Array(4);
        return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
    }
    sint32(e) {
        return u(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), (0, D.f7)(e, this.buf), this;
    }
    sfixed64(e) {
        let t = new Uint8Array(8),
            r = new DataView(t.buffer),
            n = o.h.from(e);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t);
    }
    fixed64(e) {
        let t = new Uint8Array(8),
            r = new DataView(t.buffer),
            n = o.e.from(e);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t);
    }
    int64(e) {
        let t = o.h.from(e);
        return (0, D.cV)(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
        let t = o.h.from(e),
            r = t.hi >> 31,
            n = (t.lo << 1) ^ r,
            a = ((t.hi << 1) | (t.lo >>> 31)) ^ r;
        return (0, D.cV)(n, a, this.buf), this;
    }
    uint64(e) {
        let t = o.e.from(e);
        return (0, D.cV)(t.lo, t.hi, this.buf), this;
    }
}
var M = r(638504);
class R {
    constructor(e, t, r) {
        (this.defaultCheckDepth = 16),
            (this.typeName = e),
            (this.fields = t.map(n.mS)),
            (this.options = null != r ? r : {}),
            (this.refTypeCheck = new a(this)),
            (this.refJsonReader = new p(this)),
            (this.refJsonWriter = new h(this)),
            (this.refBinReader = new g(this)),
            (this.refBinWriter = new v(this));
    }
    create(e) {
        let t = (function (e) {
            let t = {};
            for (let r of (Object.defineProperty(t, b.$, { enumerable: !1, value: e }), e.fields)) {
                let e = r.localName;
                if (!r.opt)
                    if (r.oneof) t[r.oneof] = { oneofKind: void 0 };
                    else if (r.repeat) t[e] = [];
                    else
                        switch (r.kind) {
                            case "scalar":
                                t[e] = _(r.T, r.L);
                                break;
                            case "enum":
                                t[e] = 0;
                                break;
                            case "map":
                                t[e] = {};
                        }
            }
            return t;
        })(this);
        return void 0 !== e && (0, y.x)(this, t, e), t;
    }
    clone(e) {
        let t = this.create();
        return (0, y.x)(this, t, e), t;
    }
    equals(e, t) {
        return (function (e, t, r) {
            if (t === r) return !0;
            if (!t || !r) return !1;
            for (let a of e.fields) {
                let e = a.localName,
                    s = a.oneof ? t[a.oneof][e] : t[e],
                    i = a.oneof ? r[a.oneof][e] : r[e];
                switch (a.kind) {
                    case "enum":
                    case "scalar":
                        let o = "enum" == a.kind ? n.LN.INT32 : a.T;
                        if (!(a.repeat ? w(o, s, i) : x(o, s, i))) return !1;
                        break;
                    case "map":
                        if (
                            !("message" == a.V.kind
                                ? C(a.V.T(), T(s), T(i))
                                : w("enum" == a.V.kind ? n.LN.INT32 : a.V.T, T(s), T(i)))
                        )
                            return !1;
                        break;
                    case "message":
                        let l = a.T();
                        if (!(a.repeat ? C(l, s, i) : l.equals(s, i))) return !1;
                }
            }
            return !0;
        })(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
        return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
        (0, y.x)(this, e, t);
    }
    fromBinary(e, t) {
        let r = (0, M.e)(t);
        return this.internalBinaryRead(r.readerFactory(e), e.byteLength, r);
    }
    fromJson(e, t) {
        return this.internalJsonRead(e, t ? Object.assign(Object.assign({}, S), t) : S);
    }
    fromJsonString(e, t) {
        let r = JSON.parse(e);
        return this.fromJson(r, t);
    }
    toJson(e, t) {
        return this.internalJsonWrite(e, t ? Object.assign(Object.assign({}, E), t) : E);
    }
    toJsonString(e, t) {
        var r;
        return JSON.stringify(this.toJson(e, t), null, null != (r = null == t ? void 0 : t.prettySpaces) ? r : 0);
    }
    toBinary(e, t) {
        let r = t ? Object.assign(Object.assign({}, O), t) : O;
        return this.internalBinaryWrite(e, r.writerFactory(), r).finish();
    }
    internalJsonRead(e, t, r) {
        if (null !== e && "object" == typeof e && !Array.isArray(e)) {
            let n = null != r ? r : this.create();
            return this.refJsonReader.read(e, n, t), n;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, s.V)(e)}.`);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, r) {
        return this.refBinWriter.write(e, t, r), t;
    }
    internalBinaryRead(e, t, r, n) {
        let a = null != n ? n : this.create();
        return this.refBinReader.read(e, a, r, t), a;
    }
}
