n.d(t, { C: () => c });
var r = n(660284),
    i = n(581282),
    a = n(36056),
    o = n(69122),
    s = n(17146),
    l = n(929412);
class c {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        var e;
        if (void 0 === this.fMap) for (let t of ((this.fMap = {}), null != (e = this.info.fields) ? e : [])) (this.fMap[t.name] = t), (this.fMap[t.jsonName] = t), (this.fMap[t.localName] = t);
    }
    assert(e, t, n) {
        if (!e) {
            let e = (0, r.Z)(n);
            throw (('number' == e || 'boolean' == e) && (e = n.toString()), Error(`Cannot parse JSON ${e} for ${this.info.typeName}#${t}`));
        }
    }
    read(e, t, n) {
        this.prepare();
        let i = [];
        for (let [o, s] of Object.entries(e)) {
            let e,
                l = this.fMap[o];
            if (!l) {
                if (!n.ignoreUnknownFields) throw Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${o}`);
                continue;
            }
            let c = l.localName;
            if (l.oneof) {
                if (i.includes(l.oneof)) throw Error(`Multiple members of the oneof group "${l.oneof}" of ${this.info.typeName} are present in JSON.`);
                i.push(l.oneof), (e = t[l.oneof] = { oneofKind: c });
            } else e = t;
            if ('map' == l.kind) {
                if (null === s) continue;
                this.assert((0, r.b)(s), l.name, s);
                let t = e[c];
                for (let [e, r] of Object.entries(s)) {
                    let i;
                    switch ((this.assert(null !== r, l.name + ' map value', null), l.V.kind)) {
                        case 'message':
                            i = l.V.T().internalJsonRead(r, n);
                            break;
                        case 'enum':
                            if (!1 === (i = this.enum(l.V.T(), r, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            i = this.scalar(r, l.V.T, l.V.L, l.name);
                    }
                    this.assert(void 0 !== i, l.name + ' map value', r);
                    let o = e;
                    l.K == a.wx.BOOL && (o = 'true' == o || ('false' != o && o)), (t[(o = this.scalar(o, l.K, a.pz.STRING, l.name).toString())] = i);
                }
            } else if (l.repeat) {
                if (null === s) continue;
                this.assert(Array.isArray(s), l.name, s);
                let t = e[c];
                for (let e of s) {
                    let r;
                    switch ((this.assert(null !== e, l.name, null), l.kind)) {
                        case 'message':
                            r = l.T().internalJsonRead(e, n);
                            break;
                        case 'enum':
                            if (!1 === (r = this.enum(l.T(), e, l.name, n.ignoreUnknownFields))) continue;
                            break;
                        case 'scalar':
                            r = this.scalar(e, l.T, l.L, l.name);
                    }
                    this.assert(void 0 !== r, l.name, s), t.push(r);
                }
            } else
                switch (l.kind) {
                    case 'message':
                        if (null === s && 'google.protobuf.Value' != l.T().typeName) {
                            this.assert(void 0 === l.oneof, l.name + ' (oneof member)', null);
                            continue;
                        }
                        e[c] = l.T().internalJsonRead(s, n, e[c]);
                        break;
                    case 'enum':
                        let u = this.enum(l.T(), s, l.name, n.ignoreUnknownFields);
                        if (!1 === u) continue;
                        e[c] = u;
                        break;
                    case 'scalar':
                        e[c] = this.scalar(s, l.T, l.L, l.name);
                }
        }
    }
    enum(e, t, n, r) {
        if (('google.protobuf.NullValue' == e[0] && (0, s.hu)(null === t, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), null === t)) return 0;
        switch (typeof t) {
            case 'number':
                return (0, s.hu)(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
            case 'string':
                let i = t;
                e[2] && t.substring(0, e[2].length) === e[2] && (i = t.substring(e[2].length));
                let a = e[1][i];
                if (void 0 === a && r) return !1;
                return (0, s.hu)('number' == typeof a, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), a;
        }
        (0, s.hu)(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, n, r) {
        let c;
        try {
            switch (t) {
                case a.wx.DOUBLE:
                case a.wx.FLOAT:
                    if (null === e) return 0;
                    if ('NaN' === e) return Number.NaN;
                    if ('Infinity' === e) return Number.POSITIVE_INFINITY;
                    if ('-Infinity' === e) return Number.NEGATIVE_INFINITY;
                    if ('' === e) {
                        c = 'empty string';
                        break;
                    }
                    if ('string' == typeof e && e.trim().length !== e.length) {
                        c = 'extra whitespace';
                        break;
                    }
                    if ('string' != typeof e && 'number' != typeof e) break;
                    let r = Number(e);
                    if (Number.isNaN(r)) {
                        c = 'not a number';
                        break;
                    }
                    if (!Number.isFinite(r)) {
                        c = 'too large or small';
                        break;
                    }
                    return t == a.wx.FLOAT && (0, s.E_)(r), r;
                case a.wx.INT32:
                case a.wx.FIXED32:
                case a.wx.SFIXED32:
                case a.wx.SINT32:
                case a.wx.UINT32:
                    let u;
                    if (null === e) return 0;
                    if (('number' == typeof e ? (u = e) : '' === e ? (c = 'empty string') : 'string' == typeof e && (e.trim().length !== e.length ? (c = 'extra whitespace') : (u = Number(e))), void 0 === u)) break;
                    return t == a.wx.UINT32 ? (0, s.fp)(u) : (0, s.ug)(u), u;
                case a.wx.INT64:
                case a.wx.SFIXED64:
                case a.wx.SINT64:
                    if (null === e) return (0, l._)(o.M.ZERO, n);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, l._)(o.M.from(e), n);
                case a.wx.FIXED64:
                case a.wx.UINT64:
                    if (null === e) return (0, l._)(o.p.ZERO, n);
                    if ('number' != typeof e && 'string' != typeof e) break;
                    return (0, l._)(o.p.from(e), n);
                case a.wx.BOOL:
                    if (null === e) return !1;
                    if ('boolean' != typeof e) break;
                    return e;
                case a.wx.STRING:
                    if (null === e) return '';
                    if ('string' != typeof e) {
                        c = 'extra whitespace';
                        break;
                    }
                    try {
                        encodeURIComponent(e);
                    } catch (e) {
                        e = 'invalid UTF8';
                        break;
                    }
                    return e;
                case a.wx.BYTES:
                    if (null === e || '' === e) return new Uint8Array(0);
                    if ('string' != typeof e) break;
                    return (0, i.c)(e);
            }
        } catch (e) {
            c = e.message;
        }
        this.assert(!1, r + (c ? ' - ' + c : ''), e);
    }
}
