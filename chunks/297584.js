r.d(n, {
    R: function () {
        return l;
    }
});
var i = r(230367),
    a = r(36056),
    o = r(17146),
    s = r(69122);
class l {
    constructor(e) {
        this.info = e;
    }
    prepare() {
        if (!this.fields) {
            let e = this.info.fields ? this.info.fields.concat() : [];
            this.fields = e.sort((e, n) => e.no - n.no);
        }
    }
    write(e, n, r) {
        for (let i of (this.prepare(), this.fields)) {
            let s,
                l,
                u = i.repeat,
                c = i.localName;
            if (i.oneof) {
                let n = e[i.oneof];
                if (n.oneofKind !== c) continue;
                (s = n[c]), (l = !0);
            } else (s = e[c]), (l = !1);
            switch (i.kind) {
                case 'scalar':
                case 'enum':
                    let d = 'enum' == i.kind ? a.wx.INT32 : i.T;
                    if (u) {
                        if (((0, o.hu)(Array.isArray(s)), u == a.P0.PACKED)) this.packed(n, d, i.no, s);
                        else for (let e of s) this.scalar(n, d, i.no, e, !0);
                    } else void 0 === s ? (0, o.hu)(i.opt) : this.scalar(n, d, i.no, s, l || i.opt);
                    break;
                case 'message':
                    if (u) for (let e of ((0, o.hu)(Array.isArray(s)), s)) this.message(n, r, i.T(), i.no, e);
                    else this.message(n, r, i.T(), i.no, s);
                    break;
                case 'map':
                    for (let [e, a] of ((0, o.hu)('object' == typeof s && null !== s), Object.entries(s))) this.mapEntry(n, r, i, e, a);
            }
        }
        let s = r.writeUnknownFields;
        !1 !== s && (!0 === s ? i.z.onWrite : s)(this.info.typeName, e, n);
    }
    mapEntry(e, n, r, s, l) {
        e.tag(r.no, i.TD.LengthDelimited), e.fork();
        let u = s;
        switch (r.K) {
            case a.wx.INT32:
            case a.wx.FIXED32:
            case a.wx.UINT32:
            case a.wx.SFIXED32:
            case a.wx.SINT32:
                u = Number.parseInt(s);
                break;
            case a.wx.BOOL:
                (0, o.hu)('true' == s || 'false' == s), (u = 'true' == s);
        }
        switch ((this.scalar(e, r.K, 1, u, !0), r.V.kind)) {
            case 'scalar':
                this.scalar(e, r.V.T, 2, l, !0);
                break;
            case 'enum':
                this.scalar(e, a.wx.INT32, 2, l, !0);
                break;
            case 'message':
                this.message(e, n, r.V.T(), 2, l);
        }
        e.join();
    }
    message(e, n, r, a, o) {
        void 0 !== o && (r.internalBinaryWrite(o, e.tag(a, i.TD.LengthDelimited).fork(), n), e.join());
    }
    scalar(e, n, r, i, a) {
        let [o, s, l] = this.scalarInfo(n, i);
        (!l || a) && (e.tag(r, o), e[s](i));
    }
    packed(e, n, r, s) {
        if (!s.length) return;
        (0, o.hu)(n !== a.wx.BYTES && n !== a.wx.STRING), e.tag(r, i.TD.LengthDelimited), e.fork();
        let [, l] = this.scalarInfo(n);
        for (let n = 0; n < s.length; n++) e[l](s[n]);
        e.join();
    }
    scalarInfo(e, n) {
        let r,
            o = i.TD.Varint,
            l = void 0 === n,
            u = 0 === n;
        switch (e) {
            case a.wx.INT32:
                r = 'int32';
                break;
            case a.wx.STRING:
                (u = l || !n.length), (o = i.TD.LengthDelimited), (r = 'string');
                break;
            case a.wx.BOOL:
                (u = !1 === n), (r = 'bool');
                break;
            case a.wx.UINT32:
                r = 'uint32';
                break;
            case a.wx.DOUBLE:
                (o = i.TD.Bit64), (r = 'double');
                break;
            case a.wx.FLOAT:
                (o = i.TD.Bit32), (r = 'float');
                break;
            case a.wx.INT64:
                (u = l || s.M.from(n).isZero()), (r = 'int64');
                break;
            case a.wx.UINT64:
                (u = l || s.p.from(n).isZero()), (r = 'uint64');
                break;
            case a.wx.FIXED64:
                (u = l || s.p.from(n).isZero()), (o = i.TD.Bit64), (r = 'fixed64');
                break;
            case a.wx.BYTES:
                (u = l || !n.byteLength), (o = i.TD.LengthDelimited), (r = 'bytes');
                break;
            case a.wx.FIXED32:
                (o = i.TD.Bit32), (r = 'fixed32');
                break;
            case a.wx.SFIXED32:
                (o = i.TD.Bit32), (r = 'sfixed32');
                break;
            case a.wx.SFIXED64:
                (u = l || s.M.from(n).isZero()), (o = i.TD.Bit64), (r = 'sfixed64');
                break;
            case a.wx.SINT32:
                r = 'sint32';
                break;
            case a.wx.SINT64:
                (u = l || s.M.from(n).isZero()), (r = 'sint64');
        }
        return [o, r, l || u];
    }
}
