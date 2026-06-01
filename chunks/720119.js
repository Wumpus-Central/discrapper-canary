"use strict";
n.d(t, { l: () => c });
var i = n(852015),
    r = n(144367),
    s = n(428420),
    a = n(535384),
    o = n(991023),
    l = n(453360);
class u extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => l.i },
            { no: 5, name: "header_localized", kind: "message", T: () => o.X },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.assetUrl = e.string();
                    break;
                case 4:
                    s.asset = l.i.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 5:
                    s.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 6:
                    s.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let u = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, u);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, i.O0.LengthDelimited).string(e.assetUrl),
            e.asset && l.i.internalBinaryWrite(e.asset, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let c = new u();
