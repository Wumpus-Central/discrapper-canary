n.d(t, {
    H: () => l,
}),
    n(734808),
    n(896048),
    n(321073),
    n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281);
class o extends s.G {
    create(e) {
        let t = {
            colors: [],
            angle: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.$, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.colors.push(e.string());
                    break;
                case 2:
                    a.angle = e.float();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.colors.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.colors[n]);
        0 !== e.angle && t.tag(2, r.O0.Bit32).float(e.angle);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.Gradient", [
            {
                no: 1,
                name: "colors",
                kind: "scalar",
                repeat: 2,
                T: 9,
            },
            {
                no: 2,
                name: "angle",
                kind: "scalar",
                T: 2,
            },
        ]);
    }
}
let l = new o();
