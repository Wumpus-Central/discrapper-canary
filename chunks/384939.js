n.d(t, { m: () => en });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(330287),
    d = n(991023),
    c = n(453360);
class u extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => o.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
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
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let _ = new u();
class E extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => o.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
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
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let A = new E();
class h extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => d.X },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => o.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
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
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let I = new h();
var f = n(308588);
class p extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "button", kind: "message", T: () => f.$ },
            { no: 3, name: "help_article", kind: "message", T: () => o.O },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
            { no: 6, name: "header", kind: "scalar", T: 9 },
            { no: 7, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
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
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.button = f.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 3:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 4:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.button && f.$.internalBinaryWrite(e.button, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let T = new p();
var m = n(414525),
    g =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.FIRST = 1)] = "FIRST"),
        (i[(i.SECOND = 2)] = "SECOND"),
        i);
class S extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => d.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => d.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => c.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => o.O },
            { no: 9, name: "cta_field", kind: "message", T: () => f.$ },
            { no: 10, name: "gradient_field", kind: "message", T: () => m.H },
            {
                no: 11,
                name: "select_field",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    g,
                    "ADMIN_EDITOR_TEST_SELECT_OPTION_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { deprecatedField: "", plainTextField: "", checkboxField: !1, assetField: "", selectField: 0 };
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
                    a.deprecatedField = e.string();
                    break;
                case 2:
                    a.localizedTextField = d.X.internalBinaryRead(e, e.uint32(), n, a.localizedTextField);
                    break;
                case 3:
                    a.plainTextField = e.string();
                    break;
                case 4:
                    a.textareaField = d.X.internalBinaryRead(e, e.uint32(), n, a.textareaField);
                    break;
                case 5:
                    a.checkboxField = e.bool();
                    break;
                case 6:
                    a.assetField = e.string();
                    break;
                case 7:
                    a.themedAssetField = c.i.internalBinaryRead(e, e.uint32(), n, a.themedAssetField);
                    break;
                case 8:
                    a.helpArticleField = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticleField);
                    break;
                case 9:
                    a.ctaField = f.$.internalBinaryRead(e, e.uint32(), n, a.ctaField);
                    break;
                case 10:
                    a.gradientField = m.H.internalBinaryRead(e, e.uint32(), n, a.gradientField);
                    break;
                case 11:
                    a.selectField = e.int32();
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
        ("" !== e.deprecatedField && t.tag(1, r.O0.LengthDelimited).string(e.deprecatedField),
            e.localizedTextField &&
                d.X.internalBinaryWrite(e.localizedTextField, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, r.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                d.X.internalBinaryWrite(e.textareaField, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, r.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, r.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                c.i.internalBinaryWrite(e.themedAssetField, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                o.O.internalBinaryWrite(e.helpArticleField, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && f.$.internalBinaryWrite(e.ctaField, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.gradientField &&
                m.H.internalBinaryWrite(e.gradientField, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.selectField && t.tag(11, r.O0.Varint).int32(e.selectField));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let N = new S();
var C = n(406935);
class O extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", f.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => o.O },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => d.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => C.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
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
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = C.ol.internalBinaryRead(
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
        ("" !== e.body && t.tag(1, r.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, r.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, r.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                d.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                C.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let R = new O();
var L = n(520361);
class y extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => d.X },
            { no: 4, name: "help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = { body: "" };
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
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let D = new y();
class v extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", f.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => o.O },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => d.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => C.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
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
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = C.ol.internalBinaryRead(
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
        ("" !== e.body && t.tag(1, r.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, r.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, r.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                d.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                C.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let b = new v();
class M extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => f.$ },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => o.O },
            { no: 7, name: "header_localized", kind: "message", T: () => d.X },
            { no: 8, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
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
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.button = f.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 5:
                    a.helpArticleId = e.string();
                    break;
                case 6:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 7:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 8:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
        ("" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.button && f.$.internalBinaryWrite(e.button, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, r.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let P = new M();
class U extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
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
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
        ("" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let w = new U();
class G extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => c.i },
            { no: 5, name: "header_localized", kind: "message", T: () => d.X },
            { no: 6, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
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
                    a.header = e.string();
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.assetUrl = e.string();
                    break;
                case 4:
                    a.asset = c.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 5:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 6:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
        ("" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, r.O0.LengthDelimited).string(e.assetUrl),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let x = new G();
class k extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
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
                    a.body = e.string();
                    break;
                case 2:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
        ("" !== e.body && t.tag(1, r.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let F = new k();
var B = n(959129),
    V = n(67948),
    H = n(978656),
    j = n(720119);
class W extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => m.H },
        ]);
    }
    create(e) {
        let t = { boxAnimationUrl: "", trinketAnimationUrl: "", trinketGlowAnimationUrl: "" };
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
                    a.boxAnimationUrl = e.string();
                    break;
                case 2:
                    a.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    a.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    a.gradient = m.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
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
        ("" !== e.boxAnimationUrl && t.tag(1, r.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, r.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, r.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && m.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Y = new W();
var K = n(554146);
class $ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => f.$ },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", K.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => o.O },
            { no: 8, name: "header_localized", kind: "message", T: () => d.X },
            { no: 9, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
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
                    a.helpArticleId = e.string();
                    break;
                case 5:
                    a.button = f.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.dismissibleContent = e.int32();
                    break;
                case 7:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 8:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 9:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId),
            e.button && f.$.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, r.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let z = new $();
class X extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => d.X },
            { no: 5, name: "body_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "" };
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
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let q = new X();
var Z = n(670474);
class Q extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => d.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
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
                    a.badgeLabelLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.badgeLabelLocalized);
                    break;
                case 6:
                    a.acknowledgedBadgeLabelLocalized = d.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        a.acknowledgedBadgeLabelLocalized,
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
        ("" !== e.badgeLabel && t.tag(1, r.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, r.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, r.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, r.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                d.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                d.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let J = new Q();
var ee = n(232582);
class et extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => ee.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => J },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => Z.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => q },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => z },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => Y },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => j.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => H.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => V.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => B.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => F },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => x },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => w },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => P },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => b },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => D },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => L.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => R },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => N },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => T },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => I },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => A },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => _ },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
            { no: 18, name: "is_default_base", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "", isDefaultBase: !1 };
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
                    a.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    a.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: ee.ih.internalBinaryRead(
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
                        premiumTab: J.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: Z.C.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: q.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: z.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: Y.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: j.l.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: H.s.internalBinaryRead(
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
                        giftCustomizationBanner: V.E.internalBinaryRead(
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
                        billingSettingsNitroGiftBanner: B.v.internalBinaryRead(
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
                        giftReminderNagbar: F.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: x.internalBinaryRead(
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
                        premiumTabTooltip: w.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    a.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: P.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    a.properties = {
                        oneofKind: "nagbar",
                        nagbar: b.internalBinaryRead(e, e.uint32(), n, a.properties.nagbar),
                    };
                    break;
                case 19:
                    a.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: D.internalBinaryRead(e, e.uint32(), n, a.properties.planSelectCardBanner),
                    };
                    break;
                case 20:
                    a.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: L.h.internalBinaryRead(
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
                        shopNagbar: R.internalBinaryRead(e, e.uint32(), n, a.properties.shopNagbar),
                    };
                    break;
                case 22:
                    a.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: N.internalBinaryRead(
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
                        guildHeaderCoachmark: T.internalBinaryRead(e, e.uint32(), n, a.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    a.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: I.internalBinaryRead(
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
                        guildBoostMarketingPageBanner: A.internalBinaryRead(
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
                        guildBoostTabBanner: _.internalBinaryRead(e, e.uint32(), n, a.properties.guildBoostTabBanner),
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ("placeholder" === e.properties.oneofKind && t.tag(1, r.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                ee.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                J.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                Z.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                q.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                z.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                Y.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                j.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                H.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                V.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                B.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                F.internalBinaryWrite(
                    e.properties.giftReminderNagbar,
                    t.tag(13, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                x
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                w.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                P.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                b.internalBinaryWrite(e.properties.nagbar, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                D.internalBinaryWrite(
                    e.properties.planSelectCardBanner,
                    t.tag(19, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                L.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                R.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                N.internalBinaryWrite(
                    e.properties.adminEditorTestComponent,
                    t.tag(22, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                T.internalBinaryWrite(
                    e.properties.guildHeaderCoachmark,
                    t.tag(23, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                I.internalBinaryWrite(
                    e.properties.guildBoostCheckoutBanner,
                    t.tag(24, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                A.internalBinaryWrite(
                    e.properties.guildBoostMarketingPageBanner,
                    t.tag(25, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                _.internalBinaryWrite(
                    e.properties.guildBoostTabBanner,
                    t.tag(26, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, r.O0.Varint).bool(e.isDefaultBase));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let en = new et();
