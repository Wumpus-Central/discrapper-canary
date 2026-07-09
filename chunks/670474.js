"use strict";
n.d(t, { CZ: () => A, FF: () => _ });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(406935),
    d = n(232582),
    c = n(991023),
    u = n(330287),
    _ =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXPRESSIVE = 1)] = "EXPRESSIVE"),
        (i[(i.PRIMARY = 2)] = "PRIMARY"),
        i);
class E extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => I },
            { no: 6, name: "help_article", kind: "message", T: () => u.O },
            { no: 7, name: "header_localized", kind: "message", T: () => c.X },
            { no: 8, name: "body_localized", kind: "message", T: () => c.X },
            {
                no: 9,
                name: "button_variant",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.MarketingPageBannerButtonVariant",
                    _,
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
                    a.button = I.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.helpArticle = u.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 7:
                    a.headerLocalized = c.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 8:
                    a.bodyLocalized = c.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
            e.button && I.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && u.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                c.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                c.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.buttonVariant && t.tag(9, r.O0.Varint).int32(e.buttonVariant);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let A = new E();
class h extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBannerButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", d.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => c.X },
            { no: 5, name: "navigable_storefront_application_id", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
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
                    a.copy = e.string();
                    break;
                case 2:
                    a.buttonAction = e.int32();
                    break;
                case 3:
                    a.deeplinkSection = e.string();
                    break;
                case 4:
                    a.copyLocalized = c.X.internalBinaryRead(e, e.uint32(), n, a.copyLocalized);
                    break;
                case 5:
                    a.navigableStorefrontApplicationId = o.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.navigableStorefrontApplicationId,
                    );
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                c.X.internalBinaryWrite(e.copyLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                o.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(5, r.O0.LengthDelimited).fork(), n)
                    .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new h();
