n.d(t, { W: () => o });
var r = n(852015),
    i = n(124651),
    a = n(716115),
    s = n(960731);
class o {
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
    read(e, t, n, a) {
        this.prepare();
        let s = void 0 === a ? e.len : e.pos + a;
        for (; e.pos < s; ) {
            let [a, s] = e.tag(),
                o = this.fieldNoToField.get(a);
            if (!o) {
                let i = n.readUnknownField;
                if ("throw" == i) throw Error(`Unknown field ${a} (wire type ${s}) for ${this.info.typeName}`);
                let o = e.skip(s);
                !1 !== i && (!0 === i ? r.f$.onRead : i)(this.info.typeName, t, a, s, o);
                continue;
            }
            let l = t,
                c = o.repeat,
                u = o.localName;
            switch ((o.oneof && (l = l[o.oneof]).oneofKind !== u && (l = t[o.oneof] = { oneofKind: u }), o.kind)) {
                case "scalar":
                case "enum":
                    let d = "enum" == o.kind ? i.LN.INT32 : o.T,
                        f = "scalar" == o.kind ? o.L : void 0;
                    if (c) {
                        let t = l[u];
                        if (s == r.O0.LengthDelimited && d != i.LN.STRING && d != i.LN.BYTES) {
                            let n = e.uint32() + e.pos;
                            for (; e.pos < n; ) t.push(this.scalar(e, d, f));
                        } else t.push(this.scalar(e, d, f));
                    } else l[u] = this.scalar(e, d, f);
                    break;
                case "message":
                    if (c) {
                        let t = l[u],
                            r = o.T().internalBinaryRead(e, e.uint32(), n);
                        t.push(r);
                    } else l[u] = o.T().internalBinaryRead(e, e.uint32(), n, l[u]);
                    break;
                case "map":
                    let [p, _] = this.mapEntry(o, e, n);
                    l[u][p] = _;
            }
        }
    }
    mapEntry(e, t, n) {
        let r,
            a,
            o = t.uint32(),
            l = t.pos + o;
        for (; t.pos < l; ) {
            let [s, o] = t.tag();
            switch (s) {
                case 1:
                    r = e.K == i.LN.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.rO.STRING);
                    break;
                case 2:
                    switch (e.V.kind) {
                        case "scalar":
                            a = this.scalar(t, e.V.T, e.V.L);
                            break;
                        case "enum":
                            a = t.int32();
                            break;
                        case "message":
                            a = e.V.T().internalBinaryRead(t, t.uint32(), n);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${s} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === r) {
            let t = (0, s.V)(e.K);
            r = e.K == i.LN.BOOL ? t.toString() : t;
        }
        if (void 0 === a)
            switch (e.V.kind) {
                case "scalar":
                    a = (0, s.V)(e.V.T, e.V.L);
                    break;
                case "enum":
                    a = 0;
                    break;
                case "message":
                    a = e.V.T().create();
            }
        return [r, a];
    }
    scalar(e, t, n) {
        switch (t) {
            case i.LN.INT32:
                return e.int32();
            case i.LN.STRING:
                return e.string();
            case i.LN.BOOL:
                return e.bool();
            case i.LN.DOUBLE:
                return e.double();
            case i.LN.FLOAT:
                return e.float();
            case i.LN.INT64:
                return (0, a.l)(e.int64(), n);
            case i.LN.UINT64:
                return (0, a.l)(e.uint64(), n);
            case i.LN.FIXED64:
                return (0, a.l)(e.fixed64(), n);
            case i.LN.FIXED32:
                return e.fixed32();
            case i.LN.BYTES:
                return e.bytes();
            case i.LN.UINT32:
                return e.uint32();
            case i.LN.SFIXED32:
                return e.sfixed32();
            case i.LN.SFIXED64:
                return (0, a.l)(e.sfixed64(), n);
            case i.LN.SINT32:
                return e.sint32();
            case i.LN.SINT64:
                return (0, a.l)(e.sint64(), n);
        }
    }
}
