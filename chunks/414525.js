"use strict";
n.d(t, { H: () => l }), n(321073);
var i = n(852015),
    r = n(144367),
    s = n(428420),
    a = n(535384);
class o extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Gradient", [
            { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "angle", kind: "scalar", T: 2 },
        ]);
    }
    create(e) {
        let t = { colors: [], angle: 0 };
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
                    s.colors.push(e.string());
                    break;
                case 2:
                    s.angle = e.float();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, i.O0.LengthDelimited).string(e.colors[n]);
        0 !== e.angle && t.tag(2, i.O0.Bit32).float(e.angle);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let l = new o();
