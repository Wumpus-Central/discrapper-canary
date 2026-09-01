"use strict";
n.d(t, { m: () => ee });
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(330287),
    o = n(991023),
    d = n(453360);
class c extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => l.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 5:
                    a.header = e.string();
                    break;
                case 6:
                    a.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, i.O0.LengthDelimited).string(e.body);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let u = new c();
class _ extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => l.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 5:
                    a.header = e.string();
                    break;
                case 6:
                    a.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, i.O0.LengthDelimited).string(e.body);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let E = new _();
class A extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => l.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 5:
                    a.header = e.string();
                    break;
                case 6:
                    a.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, i.O0.LengthDelimited).string(e.body);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new A();
var I = n(308588);
class f extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "button", kind: "message", T: () => I.$ },
            { no: 3, name: "help_article", kind: "message", T: () => l.O },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
            { no: 6, name: "header", kind: "scalar", T: 9 },
            { no: 7, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.button = I.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 3:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 4:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 6:
                    a.header = e.string();
                    break;
                case 7:
                    a.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.button && I.$.internalBinaryWrite(e.button, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, i.O0.LengthDelimited).string(e.body);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let p = new f();
class T extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => o.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => o.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => d.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => l.O },
            { no: 9, name: "cta_field", kind: "message", T: () => I.$ },
        ]);
    }
    create(e) {
        let t = { deprecatedField: "", plainTextField: "", checkboxField: !1, assetField: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.deprecatedField = e.string();
                    break;
                case 2:
                    a.localizedTextField = o.X.internalBinaryRead(e, e.uint32(), n, a.localizedTextField);
                    break;
                case 3:
                    a.plainTextField = e.string();
                    break;
                case 4:
                    a.textareaField = o.X.internalBinaryRead(e, e.uint32(), n, a.textareaField);
                    break;
                case 5:
                    a.checkboxField = e.bool();
                    break;
                case 6:
                    a.assetField = e.string();
                    break;
                case 7:
                    a.themedAssetField = d.i.internalBinaryRead(e, e.uint32(), n, a.themedAssetField);
                    break;
                case 8:
                    a.helpArticleField = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticleField);
                    break;
                case 9:
                    a.ctaField = I.$.internalBinaryRead(e, e.uint32(), n, a.ctaField);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.deprecatedField && t.tag(1, i.O0.LengthDelimited).string(e.deprecatedField),
            e.localizedTextField &&
                o.X.internalBinaryWrite(e.localizedTextField, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, i.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                o.X.internalBinaryWrite(e.textareaField, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, i.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, i.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                d.i.internalBinaryWrite(e.themedAssetField, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                l.O.internalBinaryWrite(e.helpArticleField, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && I.$.internalBinaryWrite(e.ctaField, t.tag(9, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let m = new T();
var g = n(406935);
class S extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", I.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => l.O },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => o.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => g.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.body = e.string();
                    break;
                case 2:
                    a.ctaLabel = e.string();
                    break;
                case 3:
                    a.ctaAction = e.int32();
                    break;
                case 4:
                    a.deeplinkSection = e.string();
                    break;
                case 5:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = g.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.navigableStorefrontApplicationId,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let d = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, d);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.body && t.tag(1, i.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, i.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, i.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                o.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                g.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, i.O0.LengthDelimited).fork(), n)
                    .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let N = new S();
var C = n(520361);
class O extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => l.O },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let R = new O();
class L extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", I.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => l.O },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => o.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => g.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.body = e.string();
                    break;
                case 2:
                    a.ctaLabel = e.string();
                    break;
                case 3:
                    a.ctaAction = e.int32();
                    break;
                case 4:
                    a.deeplinkSection = e.string();
                    break;
                case 5:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = g.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.navigableStorefrontApplicationId,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let d = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, d);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.body && t.tag(1, i.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, i.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, i.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                o.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                g.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, i.O0.LengthDelimited).fork(), n)
                    .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let y = new L();
class D extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "button", kind: "message", T: () => I.$ },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => l.O },
            { no: 7, name: "header_localized", kind: "message", T: () => o.X },
            { no: 8, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.button = I.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 5:
                    a.helpArticleId = e.string();
                    break;
                case 6:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 7:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 8:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let c = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, c);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.button && I.$.internalBinaryWrite(e.button, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, i.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let v = new D();
class b extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let M = new b();
class P extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => d.i },
            { no: 5, name: "header_localized", kind: "message", T: () => o.X },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.assetUrl = e.string();
                    break;
                case 4:
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 5:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, i.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, i.O0.LengthDelimited).string(e.assetUrl),
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let U = new P();
class w extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.body = e.string();
                    break;
                case 2:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.body && t.tag(1, i.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let G = new w();
var x = n(959129),
    k = n(67948),
    F = n(978656),
    V = n(720119),
    B = n(414525);
class H extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => B.H },
        ]);
    }
    create(e) {
        let t = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.boxAnimationUrl = e.string();
                    break;
                case 2:
                    a.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    a.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    a.gradient = B.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.boxAnimationUrl && t.tag(1, i.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, i.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, i.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && B.H.internalBinaryWrite(e.gradient, t.tag(4, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let j = new H();
var W = n(554146);
class Y extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => I.$ },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", W.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => l.O },
            { no: 8, name: "header_localized", kind: "message", T: () => o.X },
            { no: 9, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
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
                    a.button = I.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.dismissibleContent = e.int32();
                    break;
                case 7:
                    a.helpArticle = l.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 8:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 9:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let d = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, d);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, i.O0.LengthDelimited).string(e.helpArticleId),
            e.button && I.$.internalBinaryWrite(e.button, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, i.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && l.O.internalBinaryWrite(e.helpArticle, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let K = new Y();
class $ extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
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
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.assetUrl && t.tag(1, i.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, i.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let z = new $();
var q = n(670474);
class Z extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => o.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => o.X },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.badgeLabel = e.string();
                    break;
                case 2:
                    a.acknowledgedBadgeLabel = e.string();
                    break;
                case 3:
                    a.showHoverGradient = e.bool();
                    break;
                case 4:
                    a.deeplinkSection = e.string();
                    break;
                case 5:
                    a.badgeLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.badgeLabelLocalized);
                    break;
                case 6:
                    a.acknowledgedBadgeLabelLocalized = o.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.acknowledgedBadgeLabelLocalized,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.badgeLabel && t.tag(1, i.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, i.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, i.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, i.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                o.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                o.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, i.O0.LengthDelimited).fork(),
                    n,
                ).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let X = new Z();
var Q = n(232582);
class J extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => Q.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => X },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => q.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => z },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => K },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => j },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => V.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => F.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => k.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => x.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => G },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => U },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => M },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => v },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => y },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => R },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => C.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => N },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => m },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => p },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => h },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => E },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => u },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
            { no: 18, name: "is_default_base", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "", isDefaultBase: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = r ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    a.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: Q.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    a.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: X.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: q.C.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: z.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: K.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: j.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: V.l.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: F.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    a.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: k.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    a.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: x.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    a.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: G.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: U.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    a.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: M.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    a.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: v.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    a.properties = {
                        oneofKind: "nagbar",
                        nagbar: y.internalBinaryRead(e, e.uint32(), n, a.properties.nagbar),
                    };
                    break;
                case 19:
                    a.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: R.internalBinaryRead(e, e.uint32(), n, a.properties.planSelectCardBanner),
                    };
                    break;
                case 20:
                    a.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: C.h.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.billingSettingsBanner,
                        ),
                    };
                    break;
                case 21:
                    a.properties = {
                        oneofKind: "shopNagbar",
                        shopNagbar: N.internalBinaryRead(e, e.uint32(), n, a.properties.shopNagbar),
                    };
                    break;
                case 22:
                    a.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: m.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.adminEditorTestComponent,
                        ),
                    };
                    break;
                case 23:
                    a.properties = {
                        oneofKind: "guildHeaderCoachmark",
                        guildHeaderCoachmark: p.internalBinaryRead(e, e.uint32(), n, a.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    a.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: h.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.guildBoostCheckoutBanner,
                        ),
                    };
                    break;
                case 25:
                    a.properties = {
                        oneofKind: "guildBoostMarketingPageBanner",
                        guildBoostMarketingPageBanner: E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.guildBoostMarketingPageBanner,
                        ),
                    };
                    break;
                case 26:
                    a.properties = {
                        oneofKind: "guildBoostTabBanner",
                        guildBoostTabBanner: u.internalBinaryRead(e, e.uint32(), n, a.properties.guildBoostTabBanner),
                    };
                    break;
                case 3:
                    a.contentIdentifier = e.string();
                    break;
                case 18:
                    a.isDefaultBase = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "placeholder" === e.properties.oneofKind && t.tag(1, i.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                Q.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                X.internalBinaryWrite(e.properties.premiumTab, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                q.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                z.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                K.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                j.internalBinaryWrite(e.properties.giftIcon, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                V.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, i.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                F.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                k.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                x.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                G.internalBinaryWrite(
                    e.properties.giftReminderNagbar,
                    t.tag(13, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                U.internalBinaryWrite(
                    e.properties.giftReminderCoachmark,
                    t.tag(14, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                M.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, i.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                v.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, i.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                y.internalBinaryWrite(e.properties.nagbar, t.tag(17, i.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                R.internalBinaryWrite(
                    e.properties.planSelectCardBanner,
                    t.tag(19, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                C.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, i.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                N.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, i.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                m
                    .internalBinaryWrite(
                        e.properties.adminEditorTestComponent,
                        t.tag(22, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                p
                    .internalBinaryWrite(e.properties.guildHeaderCoachmark, t.tag(23, i.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                h
                    .internalBinaryWrite(
                        e.properties.guildBoostCheckoutBanner,
                        t.tag(24, i.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                E.internalBinaryWrite(
                    e.properties.guildBoostMarketingPageBanner,
                    t.tag(25, i.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                u
                    .internalBinaryWrite(e.properties.guildBoostTabBanner, t.tag(26, i.O0.LengthDelimited).fork(), n)
                    .join(),
            "" !== e.contentIdentifier && t.tag(3, i.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, i.O0.Varint).bool(e.isDefaultBase);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ee = new J();
