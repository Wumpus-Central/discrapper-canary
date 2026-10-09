n.d(t, { m: () => er });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(991023),
    d = n(453360);
class c extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
            { no: 6, name: "badge_text", kind: "scalar", T: 9 },
            { no: 7, name: "badge_text_localized", kind: "message", T: () => o.X },
            { no: 8, name: "badge_icon", kind: "scalar", T: 9 },
            { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 },
            { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 11, name: "hover_background", kind: "message", T: () => d.i },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", badgeText: "", badgeIcon: "", badgeCountdownEndsAt: "", showHoverGradient: !1 };
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 6:
                    a.badgeText = e.string();
                    break;
                case 7:
                    a.badgeTextLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.badgeTextLocalized);
                    break;
                case 8:
                    a.badgeIcon = e.string();
                    break;
                case 9:
                    a.badgeCountdownEndsAt = e.string();
                    break;
                case 10:
                    a.showHoverGradient = e.bool();
                    break;
                case 11:
                    a.hoverBackground = d.i.internalBinaryRead(e, e.uint32(), n, a.hoverBackground);
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
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeText && t.tag(6, r.O0.LengthDelimited).string(e.badgeText),
            e.badgeTextLocalized &&
                o.X.internalBinaryWrite(e.badgeTextLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeIcon && t.tag(8, r.O0.LengthDelimited).string(e.badgeIcon),
            "" !== e.badgeCountdownEndsAt && t.tag(9, r.O0.LengthDelimited).string(e.badgeCountdownEndsAt),
            !1 !== e.showHoverGradient && t.tag(10, r.O0.Varint).bool(e.showHoverGradient),
            e.hoverBackground &&
                d.i.internalBinaryWrite(e.hoverBackground, t.tag(11, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let u = new c();
var _ = n(330287);
class E extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => _.O },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let A = new E();
class h extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => _.O },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let f = new h();
class I extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => o.X },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => _.O },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.headerLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let p = new I();
var T = n(308588);
class m extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "button", kind: "message", T: () => T.$ },
            { no: 3, name: "help_article", kind: "message", T: () => _.O },
            { no: 4, name: "header_localized", kind: "message", T: () => o.X },
            { no: 5, name: "body_localized", kind: "message", T: () => o.X },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.button = T.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 3:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.button && T.$.internalBinaryWrite(e.button, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let g = new m();
var S = n(414525),
    N =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.FIRST = 1)] = "FIRST"),
        (i[(i.SECOND = 2)] = "SECOND"),
        i);
class C extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => o.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => o.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => d.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => _.O },
            { no: 9, name: "cta_field", kind: "message", T: () => T.$ },
            { no: 10, name: "gradient_field", kind: "message", T: () => S.H },
            {
                no: 11,
                name: "select_field",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    N,
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
                    a.helpArticleField = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticleField);
                    break;
                case 9:
                    a.ctaField = T.$.internalBinaryRead(e, e.uint32(), n, a.ctaField);
                    break;
                case 10:
                    a.gradientField = S.H.internalBinaryRead(e, e.uint32(), n, a.gradientField);
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
                o.X.internalBinaryWrite(e.localizedTextField, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, r.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                o.X.internalBinaryWrite(e.textareaField, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, r.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, r.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                d.i.internalBinaryWrite(e.themedAssetField, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                _.O.internalBinaryWrite(e.helpArticleField, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && T.$.internalBinaryWrite(e.ctaField, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.gradientField &&
                S.H.internalBinaryWrite(e.gradientField, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.selectField && t.tag(11, r.O0.Varint).int32(e.selectField));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let O = new C();
var R = n(406935);
class L extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", T.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => _.O },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => o.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => R.ol },
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
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = R.ol.internalBinaryRead(
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
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                o.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                R.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let y = new L();
var D = n(520361);
class v extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => o.X },
            { no: 4, name: "help_article", kind: "message", T: () => _.O },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 2:
                    a.body = e.string();
                    break;
                case 3:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
        (e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(2, r.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let b = new v();
class M extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", T.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => _.O },
            { no: 6, name: "body_localized", kind: "message", T: () => o.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => o.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => R.ol },
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
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = R.ol.internalBinaryRead(
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
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                o.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                R.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let P = new M();
class U extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "button", kind: "message", T: () => T.$ },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => _.O },
            { no: 7, name: "header_localized", kind: "message", T: () => o.X },
            { no: 8, name: "body_localized", kind: "message", T: () => o.X },
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
                    a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
                    break;
                case 4:
                    a.button = T.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 5:
                    a.helpArticleId = e.string();
                    break;
                case 6:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.button && T.$.internalBinaryWrite(e.button, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, r.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let w = new U();
class G extends l.G {
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
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let x = new G();
class k extends l.G {
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
            e.asset && d.i.internalBinaryWrite(e.asset, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let F = new k();
class B extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => o.X },
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
                    a.bodyLocalized = o.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let V = new B();
var H = n(959129),
    j = n(67948),
    W = n(978656),
    Y = n(720119);
class K extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => S.H },
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
                    a.gradient = S.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
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
            e.gradient && S.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let $ = new K();
var z = n(554146);
class X extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => T.$ },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", z.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => _.O },
            { no: 8, name: "header_localized", kind: "message", T: () => o.X },
            { no: 9, name: "body_localized", kind: "message", T: () => o.X },
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
                    a.button = T.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.dismissibleContent = e.int32();
                    break;
                case 7:
                    a.helpArticle = _.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
            e.button && T.$.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, r.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && _.O.internalBinaryWrite(e.helpArticle, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                o.X.internalBinaryWrite(e.headerLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Z = new X();
class q extends l.G {
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
                o.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Q = new q();
var J = n(670474);
class ee extends l.G {
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
                o.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                o.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let et = new ee();
var en = n(232582);
class ei extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => en.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => et },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => J.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => Q },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => Z },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => $ },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => Y.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => W.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => j.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => H.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => V },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => F },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => x },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => w },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => P },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => b },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => D.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => y },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => O },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => g },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => p },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => f },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => A },
            { no: 27, name: "shop_tab_tooltip", kind: "message", oneof: "properties", T: () => u },
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
                        announcementModalVariant1: en.ih.internalBinaryRead(
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
                        premiumTab: et.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: J.C.internalBinaryRead(e, e.uint32(), n, a.properties.marketingPageBanner),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: Q.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: Z.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: $.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: Y.l.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: W.s.internalBinaryRead(
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
                        giftCustomizationBanner: j.E.internalBinaryRead(
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
                        billingSettingsNitroGiftBanner: H.v.internalBinaryRead(
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
                        giftReminderNagbar: V.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: F.internalBinaryRead(
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
                        premiumTabTooltip: x.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    a.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: w.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    a.properties = {
                        oneofKind: "nagbar",
                        nagbar: P.internalBinaryRead(e, e.uint32(), n, a.properties.nagbar),
                    };
                    break;
                case 19:
                    a.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: b.internalBinaryRead(e, e.uint32(), n, a.properties.planSelectCardBanner),
                    };
                    break;
                case 20:
                    a.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: D.h.internalBinaryRead(
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
                        shopNagbar: y.internalBinaryRead(e, e.uint32(), n, a.properties.shopNagbar),
                    };
                    break;
                case 22:
                    a.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: O.internalBinaryRead(
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
                        guildHeaderCoachmark: g.internalBinaryRead(e, e.uint32(), n, a.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    a.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: p.internalBinaryRead(
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
                        guildBoostMarketingPageBanner: f.internalBinaryRead(
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
                        guildBoostTabBanner: A.internalBinaryRead(e, e.uint32(), n, a.properties.guildBoostTabBanner),
                    };
                    break;
                case 27:
                    a.properties = {
                        oneofKind: "shopTabTooltip",
                        shopTabTooltip: u.internalBinaryRead(e, e.uint32(), n, a.properties.shopTabTooltip),
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
                en.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                et.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                J.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                Q.internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                Z.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                $.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                Y.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                W.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                j.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                H.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                V.internalBinaryWrite(
                    e.properties.giftReminderNagbar,
                    t.tag(13, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                F.internalBinaryWrite(
                    e.properties.giftReminderCoachmark,
                    t.tag(14, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                x.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                w.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                P.internalBinaryWrite(e.properties.nagbar, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                b
                    .internalBinaryWrite(e.properties.planSelectCardBanner, t.tag(19, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                D.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                y.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                O.internalBinaryWrite(
                    e.properties.adminEditorTestComponent,
                    t.tag(22, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                g
                    .internalBinaryWrite(e.properties.guildHeaderCoachmark, t.tag(23, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                p
                    .internalBinaryWrite(
                        e.properties.guildBoostCheckoutBanner,
                        t.tag(24, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                f
                    .internalBinaryWrite(
                        e.properties.guildBoostMarketingPageBanner,
                        t.tag(25, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                A.internalBinaryWrite(
                    e.properties.guildBoostTabBanner,
                    t.tag(26, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "shopTabTooltip" === e.properties.oneofKind &&
                u.internalBinaryWrite(e.properties.shopTabTooltip, t.tag(27, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, r.O0.Varint).bool(e.isDefaultBase));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let er = new ei();
