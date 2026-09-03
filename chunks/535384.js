r.d(t, { G: () => I });
var n = r(96326);
class i {
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
            i = this.data;
        if (n.length < i.req.length || i.req.some((e) => !n.includes(e)) || (!r && n.some((e) => !i.known.includes(e))))
            return !1;
        if (t < 1) return !0;
        for (let n of i.oneofs) {
            let i = e[n];
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
                })(i)
            )
                return !1;
            if (void 0 === i.oneofKind) continue;
            let o = this.fields.find((e) => e.localName === i.oneofKind);
            if (!o || !this.field(i[i.oneofKind], o, r, t)) return !1;
        }
        for (let n of this.fields) if (void 0 === n.oneof && !this.field(e[n.localName], n, r, t)) return !1;
        return !0;
    }
    field(e, t, r, i) {
        let o = t.repeat;
        switch (t.kind) {
            case "scalar":
                if (void 0 === e) return t.opt;
                if (o) return this.scalars(e, t.T, i, t.L);
                return this.scalar(e, t.T, t.L);
            case "enum":
                if (void 0 === e) return t.opt;
                if (o) return this.scalars(e, n.LN.INT32, i);
                return this.scalar(e, n.LN.INT32);
            case "message":
                if (void 0 === e) break;
                if (o) return this.messages(e, t.T(), r, i);
                return this.message(e, t.T(), r, i);
            case "map":
                if ("object" != typeof e || null === e) return !1;
                if (i < 2) break;
                if (!this.mapKeys(e, t.K, i)) return !1;
                switch (t.V.kind) {
                    case "scalar":
                        return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                    case "enum":
                        return this.scalars(Object.values(e), n.LN.INT32, i);
                    case "message":
                        return this.messages(Object.values(e), t.V.T(), r, i);
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
        let i = typeof e;
        switch (t) {
            case n.LN.UINT64:
            case n.LN.FIXED64:
            case n.LN.INT64:
            case n.LN.SFIXED64:
            case n.LN.SINT64:
                switch (r) {
                    case n.rO.BIGINT:
                        return "bigint" == i;
                    case n.rO.NUMBER:
                        return "number" == i && !isNaN(e);
                    default:
                        return "string" == i;
                }
            case n.LN.BOOL:
                return "boolean" == i;
            case n.LN.STRING:
                return "string" == i;
            case n.LN.BYTES:
                return e instanceof Uint8Array;
            case n.LN.DOUBLE:
            case n.LN.FLOAT:
                return "number" == i && !isNaN(e);
            default:
                return "number" == i && Number.isInteger(e);
        }
    }
    scalars(e, t, r, n) {
        if (!Array.isArray(e)) return !1;
        if (r < 2) return !0;
        if (Array.isArray(e)) {
            for (let i = 0; i < e.length && i < r; i++) if (!this.scalar(e[i], t, n)) return !1;
        }
        return !0;
    }
    mapKeys(e, t, r) {
        let i = Object.keys(e);
        switch (t) {
            case n.LN.INT32:
            case n.LN.FIXED32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
            case n.LN.UINT32:
                return this.scalars(
                    i.slice(0, r).map((e) => parseInt(e)),
                    t,
                    r,
                );
            case n.LN.BOOL:
                return this.scalars(
                    i.slice(0, r).map((e) => "true" == e || ("false" != e && e)),
                    t,
                    r,
                );
            default:
                return this.scalars(i, t, r, n.rO.STRING);
        }
    }
}
var o = r(467276),
    a = r(65412),
    s = r(82180);
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
function f(e) {
    if ("number" != typeof e) throw Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
        throw Error("invalid float 32: " + e);
}
function d(e, t) {
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
            let e = (0, o.V)(r);
            throw (
                (("number" == e || "boolean" == e) && (e = r.toString()),
                Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`))
            );
        }
    }
    read(e, t, r) {
        this.prepare();
        let i = [];
        for (let [a, s] of Object.entries(e)) {
            let e,
                l = this.fMap[a];
            if (!l) {
                if (!r.ignoreUnknownFields)
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
                if (null === s) continue;
                this.assert((0, o.O)(s), l.name, s);
                let t = e[u];
                for (let [e, i] of Object.entries(s)) {
                    let o;
                    switch ((this.assert(null !== i, l.name + " map value", null), l.V.kind)) {
                        case "message":
                            o = l.V.T().internalJsonRead(i, r);
                            break;
                        case "enum":
                            if (!1 === (o = this.enum(l.V.T(), i, l.name, r.ignoreUnknownFields))) continue;
                            break;
                        case "scalar":
                            o = this.scalar(i, l.V.T, l.V.L, l.name);
                    }
                    this.assert(void 0 !== o, l.name + " map value", i);
                    let a = e;
                    l.K == n.LN.BOOL && (a = "true" == a || ("false" != a && a)),
                        (t[(a = this.scalar(a, l.K, n.rO.STRING, l.name).toString())] = o);
                }
            } else if (l.repeat) {
                if (null === s) continue;
                this.assert(Array.isArray(s), l.name, s);
                let t = e[u];
                for (let e of s) {
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
                    this.assert(void 0 !== n, l.name, s), t.push(n);
                }
            } else
                switch (l.kind) {
                    case "message":
                        if (null === s && "google.protobuf.Value" != l.T().typeName) {
                            this.assert(void 0 === l.oneof, l.name + " (oneof member)", null);
                            continue;
                        }
                        e[u] = l.T().internalJsonRead(s, r, e[u]);
                        break;
                    case "enum":
                        let c = this.enum(l.T(), s, l.name, r.ignoreUnknownFields);
                        if (!1 === c) continue;
                        e[u] = c;
                        break;
                    case "scalar":
                        e[u] = this.scalar(s, l.T, l.L, l.name);
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
                let i = t;
                e[2] && t.substring(0, e[2].length) === e[2] && (i = t.substring(e[2].length));
                let o = e[1][i];
                if (void 0 === o && n) return !1;
                return (
                    l(
                        "number" == typeof o,
                        `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} has no value for "${t}".`,
                    ),
                    o
                );
        }
        l(!1, `Unable to parse field ${this.info.typeName}#${r}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, r, i) {
        let o;
        try {
            switch (t) {
                case n.LN.DOUBLE:
                case n.LN.FLOAT:
                    if (null === e) return 0;
                    if ("NaN" === e) return NaN;
                    if ("Infinity" === e) return 1 / 0;
                    if ("-Infinity" === e) return -1 / 0;
                    if ("" === e) {
                        o = "empty string";
                        break;
                    }
                    if ("string" == typeof e && e.trim().length !== e.length) {
                        o = "extra whitespace";
                        break;
                    }
                    if ("string" != typeof e && "number" != typeof e) break;
                    let i = Number(e);
                    if (Number.isNaN(i)) {
                        o = "not a number";
                        break;
                    }
                    if (!Number.isFinite(i)) {
                        o = "too large or small";
                        break;
                    }
                    return t == n.LN.FLOAT && f(i), i;
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
                              ? (o = "empty string")
                              : "string" == typeof e &&
                                (e.trim().length !== e.length ? (o = "extra whitespace") : (l = Number(e))),
                        void 0 === l)
                    )
                        break;
                    return t == n.LN.UINT32 ? c(l) : u(l), l;
                case n.LN.INT64:
                case n.LN.SFIXED64:
                case n.LN.SINT64:
                    if (null === e) return d(s.h.ZERO, r);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return d(s.h.from(e), r);
                case n.LN.FIXED64:
                case n.LN.UINT64:
                    if (null === e) return d(s.e.ZERO, r);
                    if ("number" != typeof e && "string" != typeof e) break;
                    return d(s.e.from(e), r);
                case n.LN.BOOL:
                    if (null === e) return !1;
                    if ("boolean" != typeof e) break;
                    return e;
                case n.LN.STRING:
                    if (null === e) return "";
                    if ("string" != typeof e) {
                        o = "extra whitespace";
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
                    return (0, a.A)(e);
            }
        } catch (e) {
            o = e.message;
        }
        this.assert(!1, i + (o ? " - " + o : ""), e);
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
                let i = this.field(n, e[n.localName], t);
                void 0 !== i && (r[t.useProtoFieldName ? n.name : n.jsonName] = i);
                continue;
            }
            let i = e[n.oneof];
            if (i.oneofKind !== n.localName) continue;
            let o =
                    "scalar" == n.kind || "enum" == n.kind
                        ? Object.assign(Object.assign({}, t), { emitDefaultValues: !0 })
                        : t,
                a = this.field(n, i[n.localName], o);
            l(void 0 !== a), (r[t.useProtoFieldName ? n.name : n.jsonName] = a);
        }
        return r;
    }
    field(e, t, r) {
        let n;
        if ("map" == e.kind) {
            l("object" == typeof t && null !== t);
            let i = {};
            switch (e.V.kind) {
                case "scalar":
                    for (let [r, n] of Object.entries(t)) {
                        let t = this.scalar(e.V.T, n, e.name, !1, !0);
                        l(void 0 !== t), (i[r.toString()] = t);
                    }
                    break;
                case "message":
                    let o = e.V.T();
                    for (let [n, a] of Object.entries(t)) {
                        let t = this.message(o, a, e.name, r);
                        l(void 0 !== t), (i[n.toString()] = t);
                    }
                    break;
                case "enum":
                    let a = e.V.T();
                    for (let [n, o] of Object.entries(t)) {
                        l(void 0 === o || "number" == typeof o);
                        let t = this.enum(a, o, e.name, !1, !0, r.enumAsInteger);
                        l(void 0 !== t), (i[n.toString()] = t);
                    }
            }
            (r.emitDefaultValues || Object.keys(i).length > 0) && (n = i);
        } else if (e.repeat) {
            l(Array.isArray(t));
            let i = [];
            switch (e.kind) {
                case "scalar":
                    for (let r = 0; r < t.length; r++) {
                        let n = this.scalar(e.T, t[r], e.name, e.opt, !0);
                        l(void 0 !== n), i.push(n);
                    }
                    break;
                case "enum":
                    let o = e.T();
                    for (let n = 0; n < t.length; n++) {
                        l(void 0 === t[n] || "number" == typeof t[n]);
                        let a = this.enum(o, t[n], e.name, e.opt, !0, r.enumAsInteger);
                        l(void 0 !== a), i.push(a);
                    }
                    break;
                case "message":
                    let a = e.T();
                    for (let n = 0; n < t.length; n++) {
                        let o = this.message(a, t[n], e.name, r);
                        l(void 0 !== o), i.push(o);
                    }
            }
            (r.emitDefaultValues || i.length > 0 || r.emitDefaultValues) && (n = i);
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
    enum(e, t, r, n, i, o) {
        return "google.protobuf.NullValue" == e[0]
            ? null
            : void 0 === t
              ? void l(n)
              : 0 !== t || i || n
                ? (l("number" == typeof t), l(Number.isInteger(t)), o || !e[1].hasOwnProperty(t))
                    ? t
                    : e[2]
                      ? e[2] + e[1][t]
                      : e[1][t]
                : void 0;
    }
    message(e, t, r, n) {
        return void 0 === t ? (n.emitDefaultValues ? null : void 0) : e.internalJsonWrite(t, n);
    }
    scalar(e, t, r, i, o) {
        if (void 0 === t) return void l(i);
        let d = o || i;
        switch (e) {
            case n.LN.INT32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
                if (0 === t) return d ? 0 : void 0;
                return u(t), t;
            case n.LN.FIXED32:
            case n.LN.UINT32:
                if (0 === t) return d ? 0 : void 0;
                return c(t), t;
            case n.LN.FLOAT:
                f(t);
            case n.LN.DOUBLE:
                if (0 === t) return d ? 0 : void 0;
                if ((l("number" == typeof t), Number.isNaN(t))) return "NaN";
                if (t === 1 / 0) return "Infinity";
                if (t === -1 / 0) return "-Infinity";
                return t;
            case n.LN.STRING:
                if ("" === t) return d ? "" : void 0;
                return l("string" == typeof t), t;
            case n.LN.BOOL:
                if (!1 === t) return !d && void 0;
                return l("boolean" == typeof t), t;
            case n.LN.UINT64:
            case n.LN.FIXED64:
                l("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let p = s.e.from(t);
                if (p.isZero() && !d) return;
                return p.toString();
            case n.LN.INT64:
            case n.LN.SFIXED64:
            case n.LN.SINT64:
                l("number" == typeof t || "string" == typeof t || "bigint" == typeof t);
                let h = s.h.from(t);
                if (h.isZero() && !d) return;
                return h.toString();
            case n.LN.BYTES:
                if ((l(t instanceof Uint8Array), !t.byteLength)) return d ? "" : void 0;
                return (0, a.C)(t);
        }
    }
}
var m = r(852015);
function v(e, t = n.rO.STRING) {
    switch (e) {
        case n.LN.BOOL:
            return !1;
        case n.LN.UINT64:
        case n.LN.FIXED64:
            return d(s.e.ZERO, t);
        case n.LN.INT64:
        case n.LN.SFIXED64:
        case n.LN.SINT64:
            return d(s.h.ZERO, t);
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
class y {
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
    read(e, t, r, i) {
        this.prepare();
        let o = void 0 === i ? e.len : e.pos + i;
        for (; e.pos < o; ) {
            let [i, o] = e.tag(),
                a = this.fieldNoToField.get(i);
            if (!a) {
                let n = r.readUnknownField;
                if ("throw" == n) throw Error(`Unknown field ${i} (wire type ${o}) for ${this.info.typeName}`);
                let a = e.skip(o);
                !1 !== n && (!0 === n ? m.f$.onRead : n)(this.info.typeName, t, i, o, a);
                continue;
            }
            let s = t,
                l = a.repeat,
                u = a.localName;
            switch ((a.oneof && (s = s[a.oneof]).oneofKind !== u && (s = t[a.oneof] = { oneofKind: u }), a.kind)) {
                case "scalar":
                case "enum":
                    let c = "enum" == a.kind ? n.LN.INT32 : a.T,
                        f = "scalar" == a.kind ? a.L : void 0;
                    if (l) {
                        let t = s[u];
                        if (o == m.O0.LengthDelimited && c != n.LN.STRING && c != n.LN.BYTES) {
                            let r = e.uint32() + e.pos;
                            for (; e.pos < r; ) t.push(this.scalar(e, c, f));
                        } else t.push(this.scalar(e, c, f));
                    } else s[u] = this.scalar(e, c, f);
                    break;
                case "message":
                    if (l) {
                        let t = s[u],
                            n = a.T().internalBinaryRead(e, e.uint32(), r);
                        t.push(n);
                    } else s[u] = a.T().internalBinaryRead(e, e.uint32(), r, s[u]);
                    break;
                case "map":
                    let [d, p] = this.mapEntry(a, e, r);
                    s[u][d] = p;
            }
        }
    }
    mapEntry(e, t, r) {
        let i,
            o,
            a = t.uint32(),
            s = t.pos + a;
        for (; t.pos < s; ) {
            let [a, s] = t.tag();
            switch (a) {
                case 1:
                    i = e.K == n.LN.BOOL ? t.bool().toString() : this.scalar(t, e.K, n.rO.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case "scalar":
                            o = this.scalar(t, e.V.T, e.V.L);
                            break;
                        case "enum":
                            o = t.int32();
                            break;
                        case "message":
                            o = e.V.T().internalBinaryRead(t, t.uint32(), r);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${a} (wire type ${s}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === i) {
            let t = v(e.K);
            i = e.K == n.LN.BOOL ? t.toString() : t;
        }
        if (void 0 === o)
            switch (e.V.kind) {
                case "scalar":
                    o = v(e.V.T, e.V.L);
                    break;
                case "enum":
                    o = 0;
                    break;
                case "message":
                    o = e.V.T().create();
            }
        return [i, o];
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
                return d(e.int64(), r);
            case n.LN.UINT64:
                return d(e.uint64(), r);
            case n.LN.FIXED64:
                return d(e.fixed64(), r);
            case n.LN.FIXED32:
                return e.fixed32();
            case n.LN.BYTES:
                return e.bytes();
            case n.LN.UINT32:
                return e.uint32();
            case n.LN.SFIXED32:
                return e.sfixed32();
            case n.LN.SFIXED64:
                return d(e.sfixed64(), r);
            case n.LN.SINT32:
                return e.sint32();
            case n.LN.SINT64:
                return d(e.sint64(), r);
        }
    }
}
class g {
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
        for (let i of (this.prepare(), this.fields)) {
            let o,
                a,
                s = i.repeat,
                u = i.localName;
            if (i.oneof) {
                let t = e[i.oneof];
                if (t.oneofKind !== u) continue;
                (o = t[u]), (a = !0);
            } else (o = e[u]), (a = !1);
            switch (i.kind) {
                case "scalar":
                case "enum":
                    let c = "enum" == i.kind ? n.LN.INT32 : i.T;
                    if (s)
                        if ((l(Array.isArray(o)), s == n.sA.PACKED)) this.packed(t, c, i.no, o);
                        else for (let e of o) this.scalar(t, c, i.no, e, !0);
                    else void 0 === o ? l(i.opt) : this.scalar(t, c, i.no, o, a || i.opt);
                    break;
                case "message":
                    if (s) for (let e of (l(Array.isArray(o)), o)) this.message(t, r, i.T(), i.no, e);
                    else this.message(t, r, i.T(), i.no, o);
                    break;
                case "map":
                    for (let [e, n] of (l("object" == typeof o && null !== o), Object.entries(o)))
                        this.mapEntry(t, r, i, e, n);
            }
        }
        let i = r.writeUnknownFields;
        !1 !== i && (!0 === i ? m.f$.onWrite : i)(this.info.typeName, e, t);
    }
    mapEntry(e, t, r, i, o) {
        e.tag(r.no, m.O0.LengthDelimited), e.fork();
        let a = i;
        switch (r.K) {
            case n.LN.INT32:
            case n.LN.FIXED32:
            case n.LN.UINT32:
            case n.LN.SFIXED32:
            case n.LN.SINT32:
                a = Number.parseInt(i);
                break;
            case n.LN.BOOL:
                l("true" == i || "false" == i), (a = "true" == i);
        }
        switch ((this.scalar(e, r.K, 1, a, !0), r.V.kind)) {
            case "scalar":
                this.scalar(e, r.V.T, 2, o, !0);
                break;
            case "enum":
                this.scalar(e, n.LN.INT32, 2, o, !0);
                break;
            case "message":
                this.message(e, t, r.V.T(), 2, o);
        }
        e.join();
    }
    message(e, t, r, n, i) {
        void 0 !== i && (r.internalBinaryWrite(i, e.tag(n, m.O0.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, r, n, i) {
        let [o, a, s] = this.scalarInfo(t, n);
        (!s || i) && (e.tag(r, o), e[a](n));
    }
    packed(e, t, r, i) {
        if (!i.length) return;
        l(t !== n.LN.BYTES && t !== n.LN.STRING), e.tag(r, m.O0.LengthDelimited), e.fork();
        let [, o] = this.scalarInfo(t);
        for (let t = 0; t < i.length; t++) e[o](i[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let r,
            i = m.O0.Varint,
            o = void 0 === t,
            a = 0 === t;
        switch (e) {
            case n.LN.INT32:
                r = "int32";
                break;
            case n.LN.STRING:
                (a = o || !t.length), (i = m.O0.LengthDelimited), (r = "string");
                break;
            case n.LN.BOOL:
                (a = !1 === t), (r = "bool");
                break;
            case n.LN.UINT32:
                r = "uint32";
                break;
            case n.LN.DOUBLE:
                (i = m.O0.Bit64), (r = "double");
                break;
            case n.LN.FLOAT:
                (i = m.O0.Bit32), (r = "float");
                break;
            case n.LN.INT64:
                (a = o || s.h.from(t).isZero()), (r = "int64");
                break;
            case n.LN.UINT64:
                (a = o || s.e.from(t).isZero()), (r = "uint64");
                break;
            case n.LN.FIXED64:
                (a = o || s.e.from(t).isZero()), (i = m.O0.Bit64), (r = "fixed64");
                break;
            case n.LN.BYTES:
                (a = o || !t.byteLength), (i = m.O0.LengthDelimited), (r = "bytes");
                break;
            case n.LN.FIXED32:
                (i = m.O0.Bit32), (r = "fixed32");
                break;
            case n.LN.SFIXED32:
                (i = m.O0.Bit32), (r = "sfixed32");
                break;
            case n.LN.SFIXED64:
                (a = o || s.h.from(t).isZero()), (i = m.O0.Bit64), (r = "sfixed64");
                break;
            case n.LN.SINT32:
                r = "sint32";
                break;
            case n.LN.SINT64:
                (a = o || s.h.from(t).isZero()), (r = "sint64");
        }
        return [i, r, o || a];
    }
}
var b = r(428420),
    w = r(144367);
let _ = { emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0 },
    S = { ignoreUnknownFields: !1 },
    x = Object.values;
function E(e, t, r) {
    if (t === r) return !0;
    if (e !== n.LN.BYTES || t.length !== r.length) return !1;
    for (let e = 0; e < t.length; e++) if (t[e] != r[e]) return !1;
    return !0;
}
function k(e, t, r) {
    if (t.length !== r.length) return !1;
    for (let n = 0; n < t.length; n++) if (!E(e, t[n], r[n])) return !1;
    return !0;
}
function C(e, t, r) {
    if (t.length !== r.length) return !1;
    for (let n = 0; n < t.length; n++) if (!e.equals(t[n], r[n])) return !1;
    return !0;
}
var T = r(679314);
let M = { writeUnknownFields: !0, writerFactory: () => new P() };
class P {
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
        return u(e), (0, T.f7)(e, this.buf), this;
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
        f(e);
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
        return u(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), (0, T.f7)(e, this.buf), this;
    }
    sfixed64(e) {
        let t = new Uint8Array(8),
            r = new DataView(t.buffer),
            n = s.h.from(e);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t);
    }
    fixed64(e) {
        let t = new Uint8Array(8),
            r = new DataView(t.buffer),
            n = s.e.from(e);
        return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(t);
    }
    int64(e) {
        let t = s.h.from(e);
        return (0, T.cV)(t.lo, t.hi, this.buf), this;
    }
    sint64(e) {
        let t = s.h.from(e),
            r = t.hi >> 31,
            n = (t.lo << 1) ^ r,
            i = ((t.hi << 1) | (t.lo >>> 31)) ^ r;
        return (0, T.cV)(n, i, this.buf), this;
    }
    uint64(e) {
        let t = s.e.from(e);
        return (0, T.cV)(t.lo, t.hi, this.buf), this;
    }
}
var A = r(638504);
class I {
    constructor(e, t, r) {
        (this.defaultCheckDepth = 16),
            (this.typeName = e),
            (this.fields = t.map(n.mS)),
            (this.options = null != r ? r : {}),
            (this.refTypeCheck = new i(this)),
            (this.refJsonReader = new p(this)),
            (this.refJsonWriter = new h(this)),
            (this.refBinReader = new y(this)),
            (this.refBinWriter = new g(this));
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
                                t[e] = v(r.T, r.L);
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
        return void 0 !== e && (0, w.x)(this, t, e), t;
    }
    clone(e) {
        let t = this.create();
        return (0, w.x)(this, t, e), t;
    }
    equals(e, t) {
        return (function (e, t, r) {
            if (t === r) return !0;
            if (!t || !r) return !1;
            for (let i of e.fields) {
                let e = i.localName,
                    o = i.oneof ? t[i.oneof][e] : t[e],
                    a = i.oneof ? r[i.oneof][e] : r[e];
                switch (i.kind) {
                    case "enum":
                    case "scalar":
                        let s = "enum" == i.kind ? n.LN.INT32 : i.T;
                        if (!(i.repeat ? k(s, o, a) : E(s, o, a))) return !1;
                        break;
                    case "map":
                        if (
                            !("message" == i.V.kind
                                ? C(i.V.T(), x(o), x(a))
                                : k("enum" == i.V.kind ? n.LN.INT32 : i.V.T, x(o), x(a)))
                        )
                            return !1;
                        break;
                    case "message":
                        let l = i.T();
                        if (!(i.repeat ? C(l, o, a) : l.equals(o, a))) return !1;
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
        (0, w.x)(this, e, t);
    }
    fromBinary(e, t) {
        let r = (0, A.e)(t);
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
        return this.internalJsonWrite(e, t ? Object.assign(Object.assign({}, _), t) : _);
    }
    toJsonString(e, t) {
        var r;
        return JSON.stringify(this.toJson(e, t), null, null != (r = null == t ? void 0 : t.prettySpaces) ? r : 0);
    }
    toBinary(e, t) {
        let r = t ? Object.assign(Object.assign({}, M), t) : M;
        return this.internalBinaryWrite(e, r.writerFactory(), r).finish();
    }
    internalJsonRead(e, t, r) {
        if (null !== e && "object" == typeof e && !Array.isArray(e)) {
            let n = null != r ? r : this.create();
            return this.refJsonReader.read(e, n, t), n;
        }
        throw Error(`Unable to parse message ${this.typeName} from JSON ${(0, o.V)(e)}.`);
    }
    internalJsonWrite(e, t) {
        return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, r) {
        return this.refBinWriter.write(e, t, r), t;
    }
    internalBinaryRead(e, t, r, n) {
        let i = null != n ? n : this.create();
        return this.refBinReader.read(e, i, r, t), i;
    }
}
