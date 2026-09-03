n.d(t, { l: () => c });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(991023),
    o = n(453360);
class d extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => o.i },
            { no: 5, name: "header_localized", kind: "message", T: () => l.X },
            { no: 6, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
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
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.assetUrl = e.string();
                    break;
                case 4:
                    a.asset = o.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 5:
                    a.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 6:
                    a.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let d = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, d);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, i.O0.LengthDelimited).string(e.assetUrl),
            e.asset && o.i.internalBinaryWrite(e.asset, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let c = new d();
