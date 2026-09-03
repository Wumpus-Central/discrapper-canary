n.d(t, { E: () => E, u: () => u });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(991023),
    d = n(453360),
    c = n(414525),
    u =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.NORMAL = 1)] = "NORMAL"),
        (i[(i.LARGE_TILTED = 2)] = "LARGE_TILTED"),
        i);
class _ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftCustomizationBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
            { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => c.H },
            { no: 5, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 6, name: "asset", kind: "message", T: () => d.i },
            { no: 7, name: "background_asset", kind: "message", T: () => d.i },
            { no: 8, name: "mobile_background_asset", kind: "message", T: () => d.i },
            {
                no: 9,
                name: "asset_variant",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant",
                    u,
                    "ASSET_VARIANT_",
                ],
            },
            { no: 10, name: "desktop_body_localized", kind: "message", T: () => o.X },
            { no: 11, name: "mobile_body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "", assetVariant: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.assetUrl = e.string();
                    break;
                case 2:
                    a.desktopBody = e.string();
                    break;
                case 3:
                    a.mobileBody = e.string();
                    break;
                case 4:
                    a.gradient = c.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 5:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 6:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 7:
                    a.backgroundAsset = d.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 8:
                    a.mobileBackgroundAsset = d.i.internalBinaryRead(e, e.uint32(), n, a.mobileBackgroundAsset);
                    break;
                case 9:
                    a.assetVariant = e.int32();
                    break;
                case 10:
                    a.desktopBodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.desktopBodyLocalized);
                    break;
                case 11:
                    a.mobileBodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.mobileBodyLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.gradient && c.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.backgroundAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                d.i.internalBinaryWrite(e.backgroundAsset, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBackgroundAsset &&
                d.i.internalBinaryWrite(e.mobileBackgroundAsset, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.assetVariant && t.tag(9, r.O0.Varint).int32(e.assetVariant),
            e.desktopBodyLocalized &&
                o.X.internalBinaryWrite(e.desktopBodyLocalized, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBodyLocalized &&
                o.X.internalBinaryWrite(e.mobileBodyLocalized, t.tag(11, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new _();
