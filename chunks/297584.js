n.d(t, { R: () => o });
var i = n(230367),
    r = n(36056),
    a = n(17146),
    s = n(69122);
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
        for (let i of (this.prepare(), this.fields)) {
            let s,
                o,
                l = i.repeat,
                u = i.localName;
            if (i.oneof) {
                let t = e[i.oneof];
                if (t.oneofKind !== u) continue;
                (s = t[u]), (o = !0);
            } else (s = e[u]), (o = !1);
            switch (i.kind) {
                case 'scalar':
                case 'enum':
                    let c = 'enum' == i.kind ? r.wx.INT32 : i.T;
                    if (l) {
                        if (((0, a.hu)(Array.isArray(s)), l == r.P0.PACKED)) this.packed(t, c, i.no, s);
                        else for (let e of s) this.scalar(t, c, i.no, e, !0);
                    } else void 0 === s ? (0, a.hu)(i.opt) : this.scalar(t, c, i.no, s, o || i.opt);
                    break;
                case 'message':
                    if (l) for (let e of ((0, a.hu)(Array.isArray(s)), s)) this.message(t, n, i.T(), i.no, e);
                    else this.message(t, n, i.T(), i.no, s);
                    break;
                case 'map':
                    for (let [e, r] of ((0, a.hu)('object' == typeof s && null !== s), Object.entries(s))) this.mapEntry(t, n, i, e, r);
            }
        }
        let s = n.writeUnknownFields;
        !1 !== s && (!0 === s ? i.z.onWrite : s)(this.info.typeName, e, t);
    }
    mapEntry(e, t, n, s, o) {
        e.tag(n.no, i.TD.LengthDelimited), e.fork();
        let l = s;
        switch (n.K) {
            case r.wx.INT32:
            case r.wx.FIXED32:
            case r.wx.UINT32:
            case r.wx.SFIXED32:
            case r.wx.SINT32:
                l = Number.parseInt(s);
                break;
            case r.wx.BOOL:
                (0, a.hu)('true' == s || 'false' == s), (l = 'true' == s);
        }
        switch ((this.scalar(e, n.K, 1, l, !0), n.V.kind)) {
            case 'scalar':
                this.scalar(e, n.V.T, 2, o, !0);
                break;
            case 'enum':
                this.scalar(e, r.wx.INT32, 2, o, !0);
                break;
            case 'message':
                this.message(e, t, n.V.T(), 2, o);
        }
        e.join();
    }
    message(e, t, n, r, a) {
        void 0 !== a && (n.internalBinaryWrite(a, e.tag(r, i.TD.LengthDelimited).fork(), t), e.join());
    }
    scalar(e, t, n, i, r) {
        let [a, s, o] = this.scalarInfo(t, i);
        (!o || r) && (e.tag(n, a), e[s](i));
    }
    packed(e, t, n, s) {
        if (!s.length) return;
        (0, a.hu)(t !== r.wx.BYTES && t !== r.wx.STRING), e.tag(n, i.TD.LengthDelimited), e.fork();
        let [, o] = this.scalarInfo(t);
        for (let t = 0; t < s.length; t++) e[o](s[t]);
        e.join();
    }
    scalarInfo(e, t) {
        let n,
            a = i.TD.Varint,
            o = void 0 === t,
            l = 0 === t;
        switch (e) {
            case r.wx.INT32:
                n = 'int32';
                break;
            case r.wx.STRING:
                (l = o || !t.length), (a = i.TD.LengthDelimited), (n = 'string');
                break;
            case r.wx.BOOL:
                (l = !1 === t), (n = 'bool');
                break;
            case r.wx.UINT32:
                n = 'uint32';
                break;
            case r.wx.DOUBLE:
                (a = i.TD.Bit64), (n = 'double');
                break;
            case r.wx.FLOAT:
                (a = i.TD.Bit32), (n = 'float');
                break;
            case r.wx.INT64:
                (l = o || s.M.from(t).isZero()), (n = 'int64');
                break;
            case r.wx.UINT64:
                (l = o || s.p.from(t).isZero()), (n = 'uint64');
                break;
            case r.wx.FIXED64:
                (l = o || s.p.from(t).isZero()), (a = i.TD.Bit64), (n = 'fixed64');
                break;
            case r.wx.BYTES:
                (l = o || !t.byteLength), (a = i.TD.LengthDelimited), (n = 'bytes');
                break;
            case r.wx.FIXED32:
                (a = i.TD.Bit32), (n = 'fixed32');
                break;
            case r.wx.SFIXED32:
                (a = i.TD.Bit32), (n = 'sfixed32');
                break;
            case r.wx.SFIXED64:
                (l = o || s.M.from(t).isZero()), (a = i.TD.Bit64), (n = 'sfixed64');
                break;
            case r.wx.SINT32:
                n = 'sint32';
                break;
            case r.wx.SINT64:
                (l = o || s.M.from(t).isZero()), (n = 'sint64');
        }
        return [a, n, o || l];
    }
}
