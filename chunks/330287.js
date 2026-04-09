"use strict";
n.d(t, { O: () => l });
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281);
class o extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.HelpArticle", [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "link_text", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { id: "", linkText: "" };
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
                    s.id = e.string();
                    break;
                case 2:
                    s.linkText = e.string();
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
        "" !== e.id && t.tag(1, r.O0.LengthDelimited).string(e.id),
            "" !== e.linkText && t.tag(2, r.O0.LengthDelimited).string(e.linkText);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let l = new o();
