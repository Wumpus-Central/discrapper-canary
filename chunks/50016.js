"use strict";
n.d(t, { W: () => o });
var r = n(852015),
    i = n(124651),
    s = n(716115),
    a = n(960731);
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
    read(e, t, n, s) {
        this.prepare();
        let a = void 0 === s ? e.len : e.pos + s;
        for (; e.pos < a; ) {
            let [s, a] = e.tag(),
                o = this.fieldNoToField.get(s);
            if (!o) {
                let i = n.readUnknownField;
                if ("throw" == i) throw Error(`Unknown field ${s} (wire type ${a}) for ${this.info.typeName}`);
                let o = e.skip(a);
                !1 !== i && (!0 === i ? r.f$.onRead : i)(this.info.typeName, t, s, a, o);
                continue;
            }
            let l = t,
                u = o.repeat,
                c = o.localName;
            switch ((o.oneof && (l = l[o.oneof]).oneofKind !== c && (l = t[o.oneof] = { oneofKind: c }), o.kind)) {
                case "scalar":
                case "enum":
                    let d = "enum" == o.kind ? i.LN.INT32 : o.T,
                        _ = "scalar" == o.kind ? o.L : void 0;
                    if (u) {
                        let t = l[c];
                        if (a == r.O0.LengthDelimited && d != i.LN.STRING && d != i.LN.BYTES) {
                            let n = e.uint32() + e.pos;
                            for (; e.pos < n; ) t.push(this.scalar(e, d, _));
                        } else t.push(this.scalar(e, d, _));
                    } else l[c] = this.scalar(e, d, _);
                    break;
                case "message":
                    if (u) {
                        let t = l[c],
                            r = o.T().internalBinaryRead(e, e.uint32(), n);
                        t.push(r);
                    } else l[c] = o.T().internalBinaryRead(e, e.uint32(), n, l[c]);
                    break;
                case "map":
                    let [f, p] = this.mapEntry(o, e, n);
                    l[c][f] = p;
            }
        }
    }
    mapEntry(e, t, n) {
        let r,
            s,
            o = t.uint32(),
            l = t.pos + o;
        for (; t.pos < l; ) {
            let [a, o] = t.tag();
            switch (a) {
                case 1:
                    r = e.K == i.LN.BOOL ? t.bool().toString() : this.scalar(t, e.K, i.rO.STRING);
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
                            s = e.V.T().internalBinaryRead(t, t.uint32(), n);
                    }
                    break;
                default:
                    throw Error(`Unknown field ${a} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
        if (void 0 === r) {
            let t = (0, a.V)(e.K);
            r = e.K == i.LN.BOOL ? t.toString() : t;
        }
        if (void 0 === s)
            switch (e.V.kind) {
                case "scalar":
                    s = (0, a.V)(e.V.T, e.V.L);
                    break;
                case "enum":
                    s = 0;
                    break;
                case "message":
                    s = e.V.T().create();
            }
        return [r, s];
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
                return (0, s.l)(e.int64(), n);
            case i.LN.UINT64:
                return (0, s.l)(e.uint64(), n);
            case i.LN.FIXED64:
                return (0, s.l)(e.fixed64(), n);
            case i.LN.FIXED32:
                return e.fixed32();
            case i.LN.BYTES:
                return e.bytes();
            case i.LN.UINT32:
                return e.uint32();
            case i.LN.SFIXED32:
                return e.sfixed32();
            case i.LN.SFIXED64:
                return (0, s.l)(e.sfixed64(), n);
            case i.LN.SINT32:
                return e.sint32();
            case i.LN.SINT64:
                return (0, s.l)(e.sint64(), n);
        }
    }
}
