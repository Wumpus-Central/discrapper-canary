"use strict";
n.d(t, { O: () => d });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(991023);
class o extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.HelpArticle", [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "link_text", kind: "scalar", T: 9 },
            { no: 3, name: "link_text_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { id: "", linkText: "" };
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
                    a.id = e.string();
                    break;
                case 2:
                    a.linkText = e.string();
                    break;
                case 3:
                    a.linkTextLocalized = l.X.internalBinaryRead(e, e.uint32(), n, a.linkTextLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.id && t.tag(1, i.O0.LengthDelimited).string(e.id),
            "" !== e.linkText && t.tag(2, i.O0.LengthDelimited).string(e.linkText),
            e.linkTextLocalized &&
                l.X.internalBinaryWrite(e.linkTextLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let d = new o();
