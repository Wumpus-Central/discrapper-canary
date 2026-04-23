"use strict";
n.d(t, { i: () => l });
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281);
class o extends a.G {
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
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.lightUrl = e.string();
                    break;
                case 2:
                    s.darkUrl = e.string();
                    break;
                case 3:
                    s.lightStaticUrl = e.string();
                    break;
                case 4:
                    s.darkStaticUrl = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.lightUrl && t.tag(1, r.O0.LengthDelimited).string(e.lightUrl),
            "" !== e.darkUrl && t.tag(2, r.O0.LengthDelimited).string(e.darkUrl),
            "" !== e.lightStaticUrl && t.tag(3, r.O0.LengthDelimited).string(e.lightStaticUrl),
            "" !== e.darkStaticUrl && t.tag(4, r.O0.LengthDelimited).string(e.darkStaticUrl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let l = new o();
