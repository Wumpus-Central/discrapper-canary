"use strict";
n.d(t, { m: () => Q });
var i,
    r = n(852015),
    s = n(144367),
    a = n(428420),
    o = n(535384),
    l = n(991023),
    u = n(330287),
    c = n(232582);
class d extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", c.dz, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => u.O },
            { no: 6, name: "body_localized", kind: "message", T: () => l.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                case 4:
                    s.deeplinkSection = e.string();
                    break;
                case 5:
                    s.helpArticle = u.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 6:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                case 7:
                    s.ctaLabelLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.ctaLabelLocalized);
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
            0 !== e.ctaAction && t.tag(3, r.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && u.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                l.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new d();
class h extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ThemeAwareAsset", [
            { no: 1, name: "light_url", kind: "scalar", T: 9 },
            { no: 2, name: "dark_url", kind: "scalar", T: 9 },
            { no: 3, name: "light_static_url", kind: "scalar", T: 9 },
            { no: 4, name: "dark_static_url", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { lightUrl: "", darkUrl: "", lightStaticUrl: "", darkStaticUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.lightUrl = e.string();
                    break;
                case 2:
                    s.darkUrl = e.string();
                    break;
                case 3:
                    s.lightStaticUrl = e.string();
                    break;
                case 4:
                    s.darkStaticUrl = e.string();
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
        "" !== e.lightUrl && t.tag(1, r.O0.LengthDelimited).string(e.lightUrl),
            "" !== e.darkUrl && t.tag(2, r.O0.LengthDelimited).string(e.darkUrl),
            "" !== e.lightStaticUrl && t.tag(3, r.O0.LengthDelimited).string(e.lightStaticUrl),
            "" !== e.darkStaticUrl && t.tag(4, r.O0.LengthDelimited).string(e.darkStaticUrl);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new h();
class p extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopoverCTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", c.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                l.X.internalBinaryWrite(e.copyLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new p();
class m extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => f },
            { no: 4, name: "button", kind: "message", T: () => E },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => u.O },
            { no: 7, name: "header_localized", kind: "message", T: () => l.X },
            { no: 8, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.button = E.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 5:
                    s.helpArticleId = e.string();
                    break;
                case 6:
                    s.helpArticle = u.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 7:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 8:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.button && E.internalBinaryWrite(e.button, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, r.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && u.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let g = new m();
class A extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => f },
            { no: 4, name: "header_localized", kind: "message", T: () => l.X },
            { no: 5, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 4:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 5:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => f },
            { no: 5, name: "header_localized", kind: "message", T: () => l.X },
            { no: 6, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.assetUrl = e.string();
                    break;
                case 4:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 5:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 6:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, r.O0.LengthDelimited).string(e.assetUrl),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let S = new T();
class y extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new y();
n(321073);
class v extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Gradient", [
            { no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "angle", kind: "scalar", T: 2 },
        ]);
    }
    create(e) {
        let t = { colors: [], angle: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.colors.push(e.string());
                    break;
                case 2:
                    s.angle = e.float();
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
        for (let n = 0; n < e.colors.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.colors[n]);
        0 !== e.angle && t.tag(2, r.O0.Bit32).float(e.angle);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let C = new v();
class R extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.BillingSettingsNitroGiftBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 5, name: "gradient", kind: "message", T: () => C },
            { no: 6, name: "text_color", kind: "scalar", T: 9 },
            { no: 7, name: "additional_terms", kind: "scalar", T: 9 },
            { no: 8, name: "asset", kind: "message", T: () => f },
            { no: 9, name: "background_asset", kind: "message", T: () => f },
            { no: 10, name: "header_localized", kind: "message", T: () => l.X },
            { no: 11, name: "body_localized", kind: "message", T: () => l.X },
            { no: 12, name: "additional_terms_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", backgroundAssetUrl: "", textColor: "", additionalTerms: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.backgroundAssetUrl = e.string();
                    break;
                case 5:
                    s.gradient = C.internalBinaryRead(e, e.uint32(), n, s.gradient);
                    break;
                case 6:
                    s.textColor = e.string();
                    break;
                case 7:
                    s.additionalTerms = e.string();
                    break;
                case 8:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 9:
                    s.backgroundAsset = f.internalBinaryRead(e, e.uint32(), n, s.backgroundAsset);
                    break;
                case 10:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 11:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
                    break;
                case 12:
                    s.additionalTermsLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.additionalTermsLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.backgroundAssetUrl && t.tag(4, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.gradient && C.internalBinaryWrite(e.gradient, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.textColor && t.tag(6, r.O0.LengthDelimited).string(e.textColor),
            "" !== e.additionalTerms && t.tag(7, r.O0.LengthDelimited).string(e.additionalTerms),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                f.internalBinaryWrite(e.backgroundAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.additionalTermsLocalized &&
                l.X.internalBinaryWrite(e.additionalTermsLocalized, t.tag(12, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let O = new R();
var b =
    (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.NORMAL = 1)] = "NORMAL"),
    (i[(i.LARGE_TILTED = 2)] = "LARGE_TILTED"),
    i);
class D extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftCustomizationBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
            { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => C },
            { no: 5, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 6, name: "asset", kind: "message", T: () => f },
            { no: 7, name: "background_asset", kind: "message", T: () => f },
            { no: 8, name: "mobile_background_asset", kind: "message", T: () => f },
            {
                no: 9,
                name: "asset_variant",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.GiftCustomizationBanner.AssetVariant",
                    b,
                    "ASSET_VARIANT_",
                ],
            },
            { no: 10, name: "desktop_body_localized", kind: "message", T: () => l.X },
            { no: 11, name: "mobile_body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", desktopBody: "", mobileBody: "", backgroundAssetUrl: "", assetVariant: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.desktopBody = e.string();
                    break;
                case 3:
                    s.mobileBody = e.string();
                    break;
                case 4:
                    s.gradient = C.internalBinaryRead(e, e.uint32(), n, s.gradient);
                    break;
                case 5:
                    s.backgroundAssetUrl = e.string();
                    break;
                case 6:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 7:
                    s.backgroundAsset = f.internalBinaryRead(e, e.uint32(), n, s.backgroundAsset);
                    break;
                case 8:
                    s.mobileBackgroundAsset = f.internalBinaryRead(e, e.uint32(), n, s.mobileBackgroundAsset);
                    break;
                case 9:
                    s.assetVariant = e.int32();
                    break;
                case 10:
                    s.desktopBodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.desktopBodyLocalized);
                    break;
                case 11:
                    s.mobileBodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.mobileBodyLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.gradient && C.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.backgroundAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                f.internalBinaryWrite(e.backgroundAsset, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBackgroundAsset &&
                f.internalBinaryWrite(e.mobileBackgroundAsset, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.assetVariant && t.tag(9, r.O0.Varint).int32(e.assetVariant),
            e.desktopBodyLocalized &&
                l.X.internalBinaryWrite(e.desktopBodyLocalized, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBodyLocalized &&
                l.X.internalBinaryWrite(e.mobileBodyLocalized, t.tag(11, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftPlanSelectionCardBanner", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "desktop_body", kind: "scalar", T: 9 },
            { no: 3, name: "mobile_body", kind: "scalar", T: 9 },
            { no: 4, name: "avatar_asset", kind: "message", T: () => f },
            { no: 5, name: "banner_asset_url", kind: "scalar", T: 9 },
            { no: 6, name: "background_asset_url", kind: "scalar", T: 9 },
            { no: 7, name: "card_asset_url", kind: "scalar", T: 9 },
            { no: 8, name: "gradient", kind: "message", T: () => C },
            { no: 9, name: "banner_asset", kind: "message", T: () => f },
            { no: 10, name: "background_asset", kind: "message", T: () => f },
            { no: 11, name: "card_asset", kind: "message", T: () => f },
            { no: 12, name: "mobile_banner_asset", kind: "message", T: () => f },
            { no: 13, name: "header_localized", kind: "message", T: () => l.X },
            { no: 14, name: "desktop_body_localized", kind: "message", T: () => l.X },
            { no: 15, name: "mobile_body_localized", kind: "message", T: () => l.X },
        ]);
    }
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.desktopBody = e.string();
                    break;
                case 3:
                    s.mobileBody = e.string();
                    break;
                case 4:
                    s.avatarAsset = f.internalBinaryRead(e, e.uint32(), n, s.avatarAsset);
                    break;
                case 5:
                    s.bannerAssetUrl = e.string();
                    break;
                case 6:
                    s.backgroundAssetUrl = e.string();
                    break;
                case 7:
                    s.cardAssetUrl = e.string();
                    break;
                case 8:
                    s.gradient = C.internalBinaryRead(e, e.uint32(), n, s.gradient);
                    break;
                case 9:
                    s.bannerAsset = f.internalBinaryRead(e, e.uint32(), n, s.bannerAsset);
                    break;
                case 10:
                    s.backgroundAsset = f.internalBinaryRead(e, e.uint32(), n, s.backgroundAsset);
                    break;
                case 11:
                    s.cardAsset = f.internalBinaryRead(e, e.uint32(), n, s.cardAsset);
                    break;
                case 12:
                    s.mobileBannerAsset = f.internalBinaryRead(e, e.uint32(), n, s.mobileBannerAsset);
                    break;
                case 13:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 14:
                    s.desktopBodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.desktopBodyLocalized);
                    break;
                case 15:
                    s.mobileBodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.mobileBodyLocalized);
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
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.desktopBody && t.tag(2, r.O0.LengthDelimited).string(e.desktopBody),
            "" !== e.mobileBody && t.tag(3, r.O0.LengthDelimited).string(e.mobileBody),
            e.avatarAsset && f.internalBinaryWrite(e.avatarAsset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.bannerAssetUrl && t.tag(5, r.O0.LengthDelimited).string(e.bannerAssetUrl),
            "" !== e.backgroundAssetUrl && t.tag(6, r.O0.LengthDelimited).string(e.backgroundAssetUrl),
            "" !== e.cardAssetUrl && t.tag(7, r.O0.LengthDelimited).string(e.cardAssetUrl),
            e.gradient && C.internalBinaryWrite(e.gradient, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bannerAsset && f.internalBinaryWrite(e.bannerAsset, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.backgroundAsset &&
                f.internalBinaryWrite(e.backgroundAsset, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.cardAsset && f.internalBinaryWrite(e.cardAsset, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBannerAsset &&
                f.internalBinaryWrite(e.mobileBannerAsset, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            e.desktopBodyLocalized &&
                l.X.internalBinaryWrite(e.desktopBodyLocalized, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.mobileBodyLocalized &&
                l.X.internalBinaryWrite(e.mobileBodyLocalized, t.tag(15, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let M = new w();
class P extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIconCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => f },
            { no: 5, name: "header_localized", kind: "message", T: () => l.X },
            { no: 6, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.header = e.string();
                    break;
                case 2:
                    s.body = e.string();
                    break;
                case 3:
                    s.assetUrl = e.string();
                    break;
                case 4:
                    s.asset = f.internalBinaryRead(e, e.uint32(), n, s.asset);
                    break;
                case 5:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 6:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, r.O0.LengthDelimited).string(e.assetUrl),
            e.asset && f.internalBinaryWrite(e.asset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new P();
class k extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => C },
        ]);
    }
    create(e) {
        let t = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.boxAnimationUrl = e.string();
                    break;
                case 2:
                    s.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    s.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    s.gradient = C.internalBinaryRead(e, e.uint32(), n, s.gradient);
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
        "" !== e.boxAnimationUrl && t.tag(1, r.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, r.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, r.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && C.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let U = new k();
var G = n(554146);
class F extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CTAButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", c.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                l.X.internalBinaryWrite(e.copyLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let V = new F();
class B extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => V },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", G.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => u.O },
            { no: 8, name: "header_localized", kind: "message", T: () => l.X },
            { no: 9, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.helpArticleId = e.string();
                    break;
                case 5:
                    s.button = V.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 6:
                    s.dismissibleContent = e.int32();
                    break;
                case 7:
                    s.helpArticle = u.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 8:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 9:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId),
            e.button && V.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, r.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && u.O.internalBinaryWrite(e.helpArticle, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let H = new B();
class j extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => l.X },
            { no: 5, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 5:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Y = new j();
class W extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => z },
            { no: 6, name: "help_article", kind: "message", T: () => u.O },
            { no: 7, name: "header_localized", kind: "message", T: () => l.X },
            { no: 8, name: "body_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.assetUrl = e.string();
                    break;
                case 2:
                    s.header = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.helpArticleId = e.string();
                    break;
                case 5:
                    s.button = z.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 6:
                    s.helpArticle = u.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                case 7:
                    s.headerLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.headerLocalized);
                    break;
                case 8:
                    s.bodyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.bodyLocalized);
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
        "" !== e.assetUrl && t.tag(1, r.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId),
            e.button && z.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && u.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                l.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                l.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let K = new W();
class $ extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBannerButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", c.dz, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 4, name: "copy_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.copy = e.string();
                    break;
                case 2:
                    s.buttonAction = e.int32();
                    break;
                case 3:
                    s.deeplinkSection = e.string();
                    break;
                case 4:
                    s.copyLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.copyLocalized);
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
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction),
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.copyLocalized &&
                l.X.internalBinaryWrite(e.copyLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let z = new $();
class q extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => l.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => l.X },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.badgeLabel = e.string();
                    break;
                case 2:
                    s.acknowledgedBadgeLabel = e.string();
                    break;
                case 3:
                    s.showHoverGradient = e.bool();
                    break;
                case 4:
                    s.deeplinkSection = e.string();
                    break;
                case 5:
                    s.badgeLabelLocalized = l.X.internalBinaryRead(e, e.uint32(), n, s.badgeLabelLocalized);
                    break;
                case 6:
                    s.acknowledgedBadgeLabelLocalized = l.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        s.acknowledgedBadgeLabelLocalized,
                    );
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
        "" !== e.badgeLabel && t.tag(1, r.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, r.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, r.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                l.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                l.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let X = new q();
class Z extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => c.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => X },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => K },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => Y },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => H },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => U },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => x },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => M },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => L },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => O },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => N },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => S },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => I },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => g },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => _ },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
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
                    s.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    s.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: c.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    s.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: X.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTab),
                    };
                    break;
                case 5:
                    s.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: K.internalBinaryRead(e, e.uint32(), n, s.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    s.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: Y.internalBinaryRead(e, e.uint32(), n, s.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    s.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: H.internalBinaryRead(e, e.uint32(), n, s.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    s.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: U.internalBinaryRead(e, e.uint32(), n, s.properties.giftIcon),
                    };
                    break;
                case 9:
                    s.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: x.internalBinaryRead(e, e.uint32(), n, s.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    s.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: M.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    s.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: L.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    s.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: O.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    s.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: N.internalBinaryRead(e, e.uint32(), n, s.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    s.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: S.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            s.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    s.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: I.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    s.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: g.internalBinaryRead(e, e.uint32(), n, s.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    s.properties = {
                        oneofKind: "nagbar",
                        nagbar: _.internalBinaryRead(e, e.uint32(), n, s.properties.nagbar),
                    };
                    break;
                case 3:
                    s.contentIdentifier = e.string();
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
        "placeholder" === e.properties.oneofKind && t.tag(1, r.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                c.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                X.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                K.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                Y.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                H.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                U.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                x.internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                M.internalBinaryWrite(
                    e.properties.giftPlanSelectionCardBanner,
                    t.tag(10, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                L.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                O.internalBinaryWrite(
                    e.properties.billingSettingsNitroGiftBanner,
                    t.tag(12, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                N.internalBinaryWrite(
                    e.properties.giftReminderNagbar,
                    t.tag(13, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                S.internalBinaryWrite(
                    e.properties.giftReminderCoachmark,
                    t.tag(14, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                I.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                g.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                _.internalBinaryWrite(e.properties.nagbar, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new Z();
