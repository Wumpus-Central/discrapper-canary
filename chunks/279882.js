n.d(t, { V: () => c }), n(980754), n(388685), n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(7883);
class l extends o.C {
    create(e) {
        let t = {
            assetUrl: "",
            headerKey: "",
            bodyKey: "",
            backgroundAssetUrl: "",
            textColor: "",
            additionalTermsKey: "",
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
                    a.assetUrl = e.string();
                    break;
                case 2:
                    a.headerKey = e.string();
                    break;
                case 3:
                    a.bodyKey = e.string();
                    break;
                case 4:
                    a.backgroundAssetUrl = e.string();
                    break;
                case 5:
                    a.gradient = s.p.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                case 6:
                    a.textColor = e.string();
                    break;
                case 7:
                    a.additionalTermsKey = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, r.TD.LengthDelimited).string(e.assetUrl),
            "" !== e.headerKey && t.tag(2, r.TD.LengthDelimited).string(e.headerKey),
            "" !== e.bodyKey && t.tag(3, r.TD.LengthDelimited).string(e.bodyKey),
            "" !== e.backgroundAssetUrl && t.tag(4, r.TD.LengthDelimited).string(e.backgroundAssetUrl),
            e.gradient && s.p.internalBinaryWrite(e.gradient, t.tag(5, r.TD.LengthDelimited).fork(), n).join(),
            "" !== e.textColor && t.tag(6, r.TD.LengthDelimited).string(e.textColor),
            "" !== e.additionalTermsKey && t.tag(7, r.TD.LengthDelimited).string(e.additionalTermsKey);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", [
            {
                no: 1,
                name: "asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 2,
                name: "header_key",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "body_key",
                kind: "scalar",
                T: 9,
            },
            {
                no: 4,
                name: "background_asset_url",
                kind: "scalar",
                T: 9,
            },
            {
                no: 5,
                name: "gradient",
                kind: "message",
                T: () => s.p,
            },
            {
                no: 6,
                name: "text_color",
                kind: "scalar",
                T: 9,
            },
            {
                no: 7,
                name: "additional_terms_key",
                kind: "scalar",
                T: 9,
            },
        ]);
    }
}
let c = new l();
