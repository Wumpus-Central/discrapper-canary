n.d(t, { i: () => o });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384);
class l extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ThemeAwareAsset", [
            { no: 1, name: "light_url", kind: "scalar", T: 9 },
            { no: 2, name: "dark_url", kind: "scalar", T: 9 },
            { no: 3, name: "light_static_url", kind: "scalar", T: 9 },
            { no: 4, name: "dark_static_url", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { lightUrl: "", darkUrl: "", lightStaticUrl: "", darkStaticUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.lightUrl = e.string();
                    break;
                case 2:
                    a.darkUrl = e.string();
                    break;
                case 3:
                    a.lightStaticUrl = e.string();
                    break;
                case 4:
                    a.darkStaticUrl = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.lightUrl && t.tag(1, i.O0.LengthDelimited).string(e.lightUrl),
            "" !== e.darkUrl && t.tag(2, i.O0.LengthDelimited).string(e.darkUrl),
            "" !== e.lightStaticUrl && t.tag(3, i.O0.LengthDelimited).string(e.lightStaticUrl),
            "" !== e.darkStaticUrl && t.tag(4, i.O0.LengthDelimited).string(e.darkStaticUrl);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let o = new l();
