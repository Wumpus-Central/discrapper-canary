n.d(t, { R: () => s });
var r = n(230367),
    i = n(36056),
    a = n(17146),
    o = n(69122);
class s {
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
            let o,
                s,
                l = r.repeat,
                c = r.localName;
            if (r.oneof) {
                let t = e[r.oneof];
                if (t.oneofKind !== c) continue;
                (o = t[c]), (s = !0);
            } else (o = e[c]), (s = !1);
            switch (r.kind) {
                case 'scalar':
                case 'enum':
                    let u = 'enum' == r.kind ? i.wx.INT32 : r.T;
                    if (l)
                        if (((0, a.hu)(Array.isArray(o)), l == i.P0.PACKED)) this.packed(t, u, r.no, o);
                        else for (let e of o) this.scalar(t, u, r.no, e, !0);
                    else void 0 === o ? (0, a.hu)(r.opt) : this.scalar(t, u, r.no, o, s || r.opt);
                    break;
                case 'message':
                    if (l) for (let e of ((0, a.hu)(Array.isArray(o)), o)) this.message(t, n, r.T(), r.no, e);
                    else this.message(t, n, r.T(), r.no, o);
                    break;
                case 'map':
                    for (let [e, i] of ((0, a.hu)('object' == typeof o && null !== o), Object.entries(o))) this.mapEntry(t, n, r, e, i);
            }
        }
        let o = n.writeUnknownFields;
        !1 !== o && (!0 === o ? r.z.onWrite : o)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, o, s) {
        e.tag(n.no, r.TD.LengthDelimited), e.fork();
        let l = o;
        switch (n.K) {
            case i.wx.INT32:
            case i.wx.FIXED32:
            case i.wx.UINT32:
            case i.wx.SFIXED32:
            case i.wx.SINT32:
                l = Number.parseInt(o);
                break;
            case i.wx.BOOL:
                (0, a.hu)('true' == o || 'false' == o), (l = 'true' == o);
        }
        switch ((this.scalar(e, n.K, 1, l, !0), n.V.kind)) {
            case 'scalar':
                this.scalar(e, n.V.T, 2, s, !0);
                break;
            case 'enum':
                this.scalar(e, i.wx.INT32, 2, s, !0);
                break;
            case 'message':
                this.message(e, t, n.V.T(), 2, s);
        }
        e.join();
    }
    message(e, t, n, i, a) {
        void 0 !== a && (n.internalBinaryWrite(a, e.tag(i, r.TD.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, n, r, i) {
        let [a, o, s] = this.scalarInfo(t, r);
        (!s || i) && (e.tag(n, a), e[o](r));
    }
    packed(e, t, n, o) {
        if (!o.length) return;
        (0, a.hu)(t !== i.wx.BYTES && t !== i.wx.STRING), e.tag(n, r.TD.LengthDelimited), e.fork();
        let [, s] = this.scalarInfo(t);
        for (let t = 0; t < o.length; t++) e[s](o[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let n,
            a = r.TD.Varint,
            s = void 0 === t,
            l = 0 === t;
        switch (e) {
            case i.wx.INT32:
                n = 'int32';
                break;
            case i.wx.STRING:
                (l = s || !t.length), (a = r.TD.LengthDelimited), (n = 'string');
                break;
            case i.wx.BOOL:
                (l = !1 === t), (n = 'bool');
                break;
            case i.wx.UINT32:
                n = 'uint32';
                break;
            case i.wx.DOUBLE:
                (a = r.TD.Bit64), (n = 'double');
                break;
            case i.wx.FLOAT:
                (a = r.TD.Bit32), (n = 'float');
                break;
            case i.wx.INT64:
                (l = s || o.M.from(t).isZero()), (n = 'int64');
                break;
            case i.wx.UINT64:
                (l = s || o.p.from(t).isZero()), (n = 'uint64');
                break;
            case i.wx.FIXED64:
                (l = s || o.p.from(t).isZero()), (a = r.TD.Bit64), (n = 'fixed64');
                break;
            case i.wx.BYTES:
                (l = s || !t.byteLength), (a = r.TD.LengthDelimited), (n = 'bytes');
                break;
            case i.wx.FIXED32:
                (a = r.TD.Bit32), (n = 'fixed32');
                break;
            case i.wx.SFIXED32:
                (a = r.TD.Bit32), (n = 'sfixed32');
                break;
            case i.wx.SFIXED64:
                (l = s || o.M.from(t).isZero()), (a = r.TD.Bit64), (n = 'sfixed64');
                break;
            case i.wx.SINT32:
                n = 'sint32';
                break;
            case i.wx.SINT64:
                (l = s || o.M.from(t).isZero()), (n = 'sint64');
        }
        return [a, n, s || l];
    }
}
