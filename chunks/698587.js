n.d(t, { C: () => u }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(7883),
    l = n(60814);
class c extends o.C {
    create(e) {
        let t = {
            header: "",
            desktopBody: "",
            mobileBody: "",
            bannerAssetUrl: "",
            backgroundAssetUrl: "",
            cardAssetUrl: "",
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.desktopBody = e.string();
                    break;
                case 3:
                    a.mobileBody = e.string();
                    break;
                case 4:
                    a.avatarAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.avatarAsset);
                    break;
                case 5:
                    a.bannerAssetUrl = e.string();
                    break;
                case 6:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 7:
                    a.cardAssetUrl = e.string();
                    break;
                case 8:
                    a.gradient = s.p.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 9:
                    a.bannerAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.bannerAsset);
                    break;
                case 10:
                    a.backgroundAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.backgroundAsset);
                    break;
                case 11:
                    a.cardAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.cardAsset);
                    break;
                case 12:
                    a.mobileCardAsset = l.F.internalBinaryRead(e, e.uint32(), n, a.mobileCardAsset);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let c = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.TD.LengthDelimited).string(e.header),
            "" !== e.desktopBody && t.tag(2, r.TD.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.TD.LengthDelimited).string(e.mobileBody),
            e.avatarAsset && l.F.internalBinaryWrite(e.avatarAsset, t.tag(4, r.TD.LengthDelimited).fork(), n).join(),
            "" !== e.bannerAssetUrl && t.tag(5, r.TD.LengthDelimited).string(e.bannerAssetUrl),
            "" !== e.backgroundAssetUrl && t.tag(6, r.TD.LengthDelimited).string(e.backgroundAssetUrl),
            "" !== e.cardAssetUrl && t.tag(7, r.TD.LengthDelimited).string(e.cardAssetUrl),
            e.gradient && s.p.internalBinaryWrite(e.gradient, t.tag(8, r.TD.LengthDelimited).fork(), n).join(),
            e.bannerAsset && l.F.internalBinaryWrite(e.bannerAsset, t.tag(9, r.TD.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                l.F.internalBinaryWrite(e.backgroundAsset, t.tag(10, r.TD.LengthDelimited).fork(), n).join(),
            e.cardAsset && l.F.internalBinaryWrite(e.cardAsset, t.tag(11, r.TD.LengthDelimited).fork(), n).join(),
            e.mobileCardAsset &&
                l.F.internalBinaryWrite(e.mobileCardAsset, t.tag(12, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [
            {
                no: 1,
                name: "header",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "desktop_body",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "mobile_body",
                kind: "scalar",
                T: 9,
            },
            {
                no: 4,
                name: "avatar_asset",
                kind: "message",
                T: () => l.F,
            },
            {
                no: 5,
                name: "banner_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 6,
                name: "background_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 7,
                name: "card_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 8,
                name: "gradient",
                kind: "message",
                T: () => s.p,
            },
            {
                no: 9,
                name: "banner_asset",
                kind: "message",
                T: () => l.F,
            },
            {
                no: 10,
                name: "background_asset",
                kind: "message",
                T: () => l.F,
            },
            {
                no: 11,
                name: "card_asset",
                kind: "message",
                T: () => l.F,
            },
            {
                no: 12,
                name: "mobile_card_asset",
                kind: "message",
                T: () => l.F,
            },
        ]);
    }
}
let u = new c();
