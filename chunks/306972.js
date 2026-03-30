"use strict";
n.d(t, { I: () => u });
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(232582);
class l extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", o.dz, "BUTTON_ACTION_"],
            },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0 };
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
                    s.body = e.string();
                    break;
                case 2:
                    s.ctaLabel = e.string();
                    break;
                case 3:
                    s.ctaAction = e.int32();
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
        "" !== e.body && t.tag(1, r.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, r.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, r.O0.Varint).int32(e.ctaAction);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let u = new l();
