"use strict";
n.d(t, { C: () => E, F: () => u });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(991023),
    d = n(330287),
    c = n(308588),
    u =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXPRESSIVE = 1)] = "EXPRESSIVE"),
        (i[(i.PRIMARY = 2)] = "PRIMARY"),
        i);
class _ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => c.$ },
            { no: 6, name: "help_article", kind: "message", T: () => d.O },
            { no: 7, name: "header_localized", kind: "message", T: () => o.X },
            { no: 8, name: "body_localized", kind: "message", T: () => o.X },
            {
                no: 9,
                name: "button_variant",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.MarketingPageBannerButtonVariant",
                    u,
                    "MARKETING_PAGE_BANNER_BUTTON_VARIANT_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", buttonVariant: 0 };
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
                    a.header = e.string();
                    break;
                case 3:
                    a.body = e.string();
                    break;
                case 4:
                    a.helpArticleId = e.string();
                    break;
                case 5:
                    a.button = c.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.helpArticle = d.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 7:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 8:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 9:
                    a.buttonVariant = e.int32();
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
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId),
            e.button && c.$.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && d.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.buttonVariant && t.tag(9, r.O0.Varint).int32(e.buttonVariant);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new _();
