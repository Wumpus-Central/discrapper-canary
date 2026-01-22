n.d(t, { c: () => o });
var r = n(852015),
    i = n(124651),
    a = n(123789),
    s = n(82180);
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
            let s,
                o,
                l = r.repeat,
                c = r.localName;
            if (r.oneof) {
                let t = e[r.oneof];
                if (t.oneofKind !== c) continue;
                (s = t[c]), (o = !0);
            } else (s = e[c]), (o = !1);
            switch (r.kind) {
                case "scalar":
                case "enum":
                    let u = "enum" == r.kind ? i.LN.INT32 : r.T;
                    if (l)
                        if (((0, a.vA)(Array.isArray(s)), l == i.sA.PACKED)) this.packed(t, u, r.no, s);
                        else for (let e of s) this.scalar(t, u, r.no, e, !0);
                    else void 0 === s ? (0, a.vA)(r.opt) : this.scalar(t, u, r.no, s, o || r.opt);
                    break;
                case "message":
                    if (l) for (let e of ((0, a.vA)(Array.isArray(s)), s)) this.message(t, n, r.T(), r.no, e);
                    else this.message(t, n, r.T(), r.no, s);
                    break;
                case "map":
                    for (let [e, i] of ((0, a.vA)("object" == typeof s && null !== s), Object.entries(s)))
                        this.mapEntry(t, n, r, e, i);
            }
        }
        let s = n.writeUnknownFields;
        !1 !== s && (!0 === s ? r.f$.onWrite : s)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, s, o) {
        e.tag(n.no, r.O0.LengthDelimited), e.fork();
        let l = s;
        switch (n.K) {
            case i.LN.INT32:
            case i.LN.FIXED32:
            case i.LN.UINT32:
            case i.LN.SFIXED32:
            case i.LN.SINT32:
                l = Number.parseInt(s);
                break;
            case i.LN.BOOL:
                (0, a.vA)("true" == s || "false" == s), (l = "true" == s);
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
    message(e, t, n, i, a) {
        void 0 !== a && (n.internalBinaryWrite(a, e.tag(i, r.O0.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, n, r, i) {
        let [a, s, o] = this.scalarInfo(t, r);
        (!o || i) && (e.tag(n, a), e[s](r));
    }
    packed(e, t, n, s) {
        if (!s.length) return;
        (0, a.vA)(t !== i.LN.BYTES && t !== i.LN.STRING), e.tag(n, r.O0.LengthDelimited), e.fork();
        let [, o] = this.scalarInfo(t);
        for (let t = 0; t < s.length; t++) e[o](s[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let n,
            a = r.O0.Varint,
            o = void 0 === t,
            l = 0 === t;
        switch (e) {
            case i.LN.INT32:
                n = "int32";
                break;
            case i.LN.STRING:
                (l = o || !t.length), (a = r.O0.LengthDelimited), (n = "string");
                break;
            case i.LN.BOOL:
                (l = !1 === t), (n = "bool");
                break;
            case i.LN.UINT32:
                n = "uint32";
                break;
            case i.LN.DOUBLE:
                (a = r.O0.Bit64), (n = "double");
                break;
            case i.LN.FLOAT:
                (a = r.O0.Bit32), (n = "float");
                break;
            case i.LN.INT64:
                (l = o || s.h.from(t).isZero()), (n = "int64");
                break;
            case i.LN.UINT64:
                (l = o || s.e.from(t).isZero()), (n = "uint64");
                break;
            case i.LN.FIXED64:
                (l = o || s.e.from(t).isZero()), (a = r.O0.Bit64), (n = "fixed64");
                break;
            case i.LN.BYTES:
                (l = o || !t.byteLength), (a = r.O0.LengthDelimited), (n = "bytes");
                break;
            case i.LN.FIXED32:
                (a = r.O0.Bit32), (n = "fixed32");
                break;
            case i.LN.SFIXED32:
                (a = r.O0.Bit32), (n = "sfixed32");
                break;
            case i.LN.SFIXED64:
                (l = o || s.h.from(t).isZero()), (a = r.O0.Bit64), (n = "sfixed64");
                break;
            case i.LN.SINT32:
                n = "sint32";
                break;
            case i.LN.SINT64:
                (l = o || s.h.from(t).isZero()), (n = "sint64");
        }
        return [a, n, o || l];
    }
}
