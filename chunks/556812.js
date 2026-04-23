"use strict";
n.d(t, { c: () => o });
var r = n(852015),
    i = n(124651),
    s = n(123789),
    a = n(82180);
class o {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        if (!this.fields) {
            let e = this.info.fields ? this.info.fields.concat() : [];
            this.fields = e.sort((e, t) => e.no - t.no);
        }
    }
    write(e, t, n) {
        for (let r of (this.prepare(), this.fields)) {
            let a,
                o,
                l = r.repeat,
                u = r.localName;
            if (r.oneof) {
                let t = e[r.oneof];
                if (t.oneofKind !== u) continue;
                (a = t[u]), (o = !0);
            } else (a = e[u]), (o = !1);
            switch (r.kind) {
                case "scalar":
                case "enum":
                    let c = "enum" == r.kind ? i.LN.INT32 : r.T;
                    if (l)
                        if (((0, s.vA)(Array.isArray(a)), l == i.sA.PACKED)) this.packed(t, c, r.no, a);
                        else for (let e of a) this.scalar(t, c, r.no, e, !0);
                    else void 0 === a ? (0, s.vA)(r.opt) : this.scalar(t, c, r.no, a, o || r.opt);
                    break;
                case "message":
                    if (l) for (let e of ((0, s.vA)(Array.isArray(a)), a)) this.message(t, n, r.T(), r.no, e);
                    else this.message(t, n, r.T(), r.no, a);
                    break;
                case "map":
                    for (let [e, i] of ((0, s.vA)("object" == typeof a && null !== a), Object.entries(a)))
                        this.mapEntry(t, n, r, e, i);
            }
        }
        let a = n.writeUnknownFields;
        !1 !== a && (!0 === a ? r.f$.onWrite : a)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, a, o) {
        e.tag(n.no, r.O0.LengthDelimited), e.fork();
        let l = a;
        switch (n.K) {
            case i.LN.INT32:
            case i.LN.FIXED32:
            case i.LN.UINT32:
            case i.LN.SFIXED32:
            case i.LN.SINT32:
                l = Number.parseInt(a);
                break;
            case i.LN.BOOL:
                (0, s.vA)("true" == a || "false" == a), (l = "true" == a);
        }
        switch ((this.scalar(e, n.K, 1, l, !0), n.V.kind)) {
            case "scalar":
                this.scalar(e, n.V.T, 2, o, !0);
                break;
            case "enum":
                this.scalar(e, i.LN.INT32, 2, o, !0);
                break;
            case "message":
                this.message(e, t, n.V.T(), 2, o);
        }
        e.join();
    }
    message(e, t, n, i, s) {
        void 0 !== s && (n.internalBinaryWrite(s, e.tag(i, r.O0.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, n, r, i) {
        let [s, a, o] = this.scalarInfo(t, r);
        (!o || i) && (e.tag(n, s), e[a](r));
    }
    packed(e, t, n, a) {
        if (!a.length) return;
        (0, s.vA)(t !== i.LN.BYTES && t !== i.LN.STRING), e.tag(n, r.O0.LengthDelimited), e.fork();
        let [, o] = this.scalarInfo(t);
        for (let t = 0; t < a.length; t++) e[o](a[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let n,
            s = r.O0.Varint,
            o = void 0 === t,
            l = 0 === t;
        switch (e) {
            case i.LN.INT32:
                n = "int32";
                break;
            case i.LN.STRING:
                (l = o || !t.length), (s = r.O0.LengthDelimited), (n = "string");
                break;
            case i.LN.BOOL:
                (l = !1 === t), (n = "bool");
                break;
            case i.LN.UINT32:
                n = "uint32";
                break;
            case i.LN.DOUBLE:
                (s = r.O0.Bit64), (n = "double");
                break;
            case i.LN.FLOAT:
                (s = r.O0.Bit32), (n = "float");
                break;
            case i.LN.INT64:
                (l = o || a.h.from(t).isZero()), (n = "int64");
                break;
            case i.LN.UINT64:
                (l = o || a.e.from(t).isZero()), (n = "uint64");
                break;
            case i.LN.FIXED64:
                (l = o || a.e.from(t).isZero()), (s = r.O0.Bit64), (n = "fixed64");
                break;
            case i.LN.BYTES:
                (l = o || !t.byteLength), (s = r.O0.LengthDelimited), (n = "bytes");
                break;
            case i.LN.FIXED32:
                (s = r.O0.Bit32), (n = "fixed32");
                break;
            case i.LN.SFIXED32:
                (s = r.O0.Bit32), (n = "sfixed32");
                break;
            case i.LN.SFIXED64:
                (l = o || a.h.from(t).isZero()), (s = r.O0.Bit64), (n = "sfixed64");
                break;
            case i.LN.SINT32:
                n = "sint32";
                break;
            case i.LN.SINT64:
                (l = o || a.h.from(t).isZero()), (n = "sint64");
        }
        return [s, n, o || l];
    }
}
