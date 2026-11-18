var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(505816),
    o = n(991023),
    d =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.BLURPLE = 1)] = "BLURPLE"),
        (i[(i.NITRO_PINK = 2)] = "NITRO_PINK"),
        i);
class c extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
            {
                no: 6,
                name: "gradient",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.PaymentModalBannerGradient",
                    d,
                    "PAYMENT_MODAL_BANNER_GRADIENT_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", gradient: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.assetUrl = e.string();
                    break;
                case 2:
                    a.header = e.string();
                    break;
                case 3:
                    a.body = e.string();
                    break;
                case 4:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 6:
                    a.gradient = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.gradient && t.tag(6, r.O0.Varint).int32(e.gradient));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let u = new c();
n.d(t, {}, { Y: u, y: d });
