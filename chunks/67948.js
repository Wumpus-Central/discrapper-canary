"use strict";
n.d(t, { E: () => c });
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(453360),
    l = n(414525);
class u extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftCustomizationBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
            { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => l.H },
            { no: 5, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 6, name: "asset", kind: "message", T: () => o.i },
            { no: 7, name: "background_asset", kind: "message", T: () => o.i },
            { no: 8, name: "mobile_background_asset", kind: "message", T: () => o.i },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    a.gradient = l.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 5:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 6:
                    a.asset = o.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 7:
                    a.backgroundAsset = o.i.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 8:
                    a.mobileBackgroundAsset = o.i.internalBinaryRead(e, e.uint32(), n, a.mobileBackgroundAsset);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let u = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, u);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.gradient && l.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.backgroundAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.asset && o.i.internalBinaryWrite(e.asset, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                o.i.internalBinaryWrite(e.backgroundAsset, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBackgroundAsset &&
                o.i.internalBinaryWrite(e.mobileBackgroundAsset, t.tag(8, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let c = new u();
