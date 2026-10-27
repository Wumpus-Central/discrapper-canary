n.d(t, { m: () => eE });
var i,
    r = n(852015),
    a = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(174929),
    d = n(453360);
class c extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionClaimModalCard", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
        ]);
    }
    create(e) {
        let t = {};
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
            if (1 === t) a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
            else {
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
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let u = new c();
class _ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionPopover", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
        ]);
    }
    create(e) {
        let t = {};
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
            if (1 === t) a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
            else {
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
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let E = new _();
class A extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBentoBox", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
        ]);
    }
    create(e) {
        let t = {};
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
            if (1 === t) a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
            else {
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
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let h = new A();
class f extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumHomePerkCard", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
        ]);
    }
    create(e) {
        let t = {};
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
            if (1 === t) a.asset = d.i.internalBinaryRead(e, e.uint32(), n, a.asset);
            else {
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
        e.asset && d.i.internalBinaryWrite(e.asset, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let I = new f();
var p = n(991023);
class T extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "header_localized", kind: "message", T: () => p.X },
            { no: 5, name: "body_localized", kind: "message", T: () => p.X },
            { no: 6, name: "badge_text", kind: "scalar", T: 9 },
            { no: 7, name: "badge_text_localized", kind: "message", T: () => p.X },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 6:
                    a.badgeText = e.string();
                    break;
                case 7:
                    a.badgeTextLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.badgeTextLocalized);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeText && t.tag(6, r.O0.LengthDelimited).string(e.badgeText),
            e.badgeTextLocalized &&
                p.X.internalBinaryWrite(e.badgeTextLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeIcon && t.tag(8, r.O0.LengthDelimited).string(e.badgeIcon),
            "" !== e.badgeCountdownEndsAt && t.tag(9, r.O0.LengthDelimited).string(e.badgeCountdownEndsAt),
            !1 !== e.showHoverGradient && t.tag(10, r.O0.Varint).bool(e.showHoverGradient),
            e.hoverBackground &&
                d.i.internalBinaryWrite(e.hoverBackground, t.tag(11, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let m = new T();
var g = n(330287);
class S extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => p.X },
            { no: 3, name: "body_localized", kind: "message", T: () => p.X },
            { no: 4, name: "help_article", kind: "message", T: () => g.O },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let N = new S();
class C extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => p.X },
            { no: 3, name: "body_localized", kind: "message", T: () => p.X },
            { no: 4, name: "help_article", kind: "message", T: () => g.O },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let O = new C();
class R extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "header_localized", kind: "message", T: () => p.X },
            { no: 3, name: "body_localized", kind: "message", T: () => p.X },
            { no: 4, name: "help_article", kind: "message", T: () => g.O },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 3:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let L = new R();
var y = n(308588);
class D extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "button", kind: "message", T: () => y.$ },
            { no: 3, name: "help_article", kind: "message", T: () => g.O },
            { no: 4, name: "header_localized", kind: "message", T: () => p.X },
            { no: 5, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.button = y.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 3:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 4:
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
            e.button && y.$.internalBinaryWrite(e.button, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, r.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, r.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let v = new D();
var b = n(414525),
    P =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.FIRST = 1)] = "FIRST"),
        (i[(i.SECOND = 2)] = "SECOND"),
        i);
class M extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => p.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => p.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => d.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => g.O },
            { no: 9, name: "cta_field", kind: "message", T: () => y.$ },
            { no: 10, name: "gradient_field", kind: "message", T: () => b.H },
            {
                no: 11,
                name: "select_field",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    P,
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
                    a.localizedTextField = p.X.internalBinaryRead(e, e.uint32(), n, a.localizedTextField);
                    break;
                case 3:
                    a.plainTextField = e.string();
                    break;
                case 4:
                    a.textareaField = p.X.internalBinaryRead(e, e.uint32(), n, a.textareaField);
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
                    a.helpArticleField = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticleField);
                    break;
                case 9:
                    a.ctaField = y.$.internalBinaryRead(e, e.uint32(), n, a.ctaField);
                    break;
                case 10:
                    a.gradientField = b.H.internalBinaryRead(e, e.uint32(), n, a.gradientField);
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
                p.X.internalBinaryWrite(e.localizedTextField, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, r.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                p.X.internalBinaryWrite(e.textareaField, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, r.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, r.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                d.i.internalBinaryWrite(e.themedAssetField, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                g.O.internalBinaryWrite(e.helpArticleField, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && y.$.internalBinaryWrite(e.ctaField, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.gradientField &&
                b.H.internalBinaryWrite(e.gradientField, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.selectField && t.tag(11, r.O0.Varint).int32(e.selectField));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let U = new M();
var w = n(406935);
class G extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", y.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => g.O },
            { no: 6, name: "body_localized", kind: "message", T: () => p.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => p.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => w.ol },
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
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = w.ol.internalBinaryRead(
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
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                p.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                w.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let x = new G();
var k = n(520361);
class F extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => d.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => p.X },
            { no: 4, name: "help_article", kind: "message", T: () => g.O },
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
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 4:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let B = new F();
class V extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", y.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => g.O },
            { no: 6, name: "body_localized", kind: "message", T: () => p.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => p.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => w.ol },
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
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 6:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 7:
                    a.ctaLabelLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.ctaLabelLocalized);
                    break;
                case 8:
                    a.navigableStorefrontApplicationId = w.ol.internalBinaryRead(
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
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                p.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                w.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, r.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let H = new V();
class j extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "button", kind: "message", T: () => y.$ },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => g.O },
            { no: 7, name: "header_localized", kind: "message", T: () => p.X },
            { no: 8, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.button = y.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 5:
                    a.helpArticleId = e.string();
                    break;
                case 6:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 7:
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 8:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
            e.button && y.$.internalBinaryWrite(e.button, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, r.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let W = new j();
class Y extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => d.i },
            { no: 4, name: "header_localized", kind: "message", T: () => p.X },
            { no: 5, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let K = new Y();
class $ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => d.i },
            { no: 5, name: "header_localized", kind: "message", T: () => p.X },
            { no: 6, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 6:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let z = new $();
class X extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let q = new X();
var Z = n(959129),
    Q = n(67948),
    J = n(978656),
    ee = n(720119);
class et extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => b.H },
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
                    a.gradient = b.H.internalBinaryRead(e, e.uint32(), n, a.gradient);
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
            e.gradient && b.H.internalBinaryWrite(e.gradient, t.tag(4, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let en = new et();
var ei = n(554146);
class er extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => y.$ },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", ei.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => g.O },
            { no: 8, name: "header_localized", kind: "message", T: () => p.X },
            { no: 9, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.button = y.$.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 6:
                    a.dismissibleContent = e.int32();
                    break;
                case 7:
                    a.helpArticle = g.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 8:
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 9:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
            e.button && y.$.internalBinaryWrite(e.button, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, r.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && g.O.internalBinaryWrite(e.helpArticle, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ea = new er();
class es extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => p.X },
            { no: 5, name: "body_localized", kind: "message", T: () => p.X },
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
                    a.headerLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 5:
                    a.bodyLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
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
                p.X.internalBinaryWrite(e.headerLocalized, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                p.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let el = new es();
var eo = n(670474);
class ed extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => p.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => p.X },
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
                    a.badgeLabelLocalized = p.X.internalBinaryRead(e, e.uint32(), n, a.badgeLabelLocalized);
                    break;
                case 6:
                    a.acknowledgedBadgeLabelLocalized = p.X.internalBinaryRead(
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
                p.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                p.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, r.O0.LengthDelimited).fork(),
                    n,
                ).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ec = new ed();
var eu = n(232582);
class e_ extends l.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => eu.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => ec },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => eo.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => el },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => ea },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => en },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => ee.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => J.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => Q.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => Z.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => q },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => z },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => K },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => W },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => H },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => B },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => k.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => x },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => U },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => v },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => L },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => O },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => N },
            { no: 27, name: "shop_tab_tooltip", kind: "message", oneof: "properties", T: () => m },
            { no: 28, name: "premium_home_rewards_perk_card", kind: "message", oneof: "properties", T: () => I },
            { no: 29, name: "marketing_page_rewards_bento_box", kind: "message", oneof: "properties", T: () => h },
            { no: 30, name: "outbound_promotion_popover", kind: "message", oneof: "properties", T: () => E },
            { no: 31, name: "outbound_promotion_claim_modal_card", kind: "message", oneof: "properties", T: () => u },
            { no: 32, name: "shop_coachmark", kind: "message", oneof: "properties", T: () => o.I },
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
                        announcementModalVariant1: eu.ih.internalBinaryRead(
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
                        premiumTab: ec.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTab),
                    };
                    break;
                case 5:
                    a.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: eo.C.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.marketingPageBanner,
                        ),
                    };
                    break;
                case 6:
                    a.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: el.internalBinaryRead(e, e.uint32(), n, a.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    a.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: ea.internalBinaryRead(e, e.uint32(), n, a.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    a.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: en.internalBinaryRead(e, e.uint32(), n, a.properties.giftIcon),
                    };
                    break;
                case 9:
                    a.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: ee.l.internalBinaryRead(e, e.uint32(), n, a.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    a.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: J.s.internalBinaryRead(
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
                        giftCustomizationBanner: Q.E.internalBinaryRead(
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
                        billingSettingsNitroGiftBanner: Z.v.internalBinaryRead(
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
                        giftReminderNagbar: q.internalBinaryRead(e, e.uint32(), n, a.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    a.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: z.internalBinaryRead(
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
                        premiumTabTooltip: K.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    a.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: W.internalBinaryRead(e, e.uint32(), n, a.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    a.properties = {
                        oneofKind: "nagbar",
                        nagbar: H.internalBinaryRead(e, e.uint32(), n, a.properties.nagbar),
                    };
                    break;
                case 19:
                    a.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: B.internalBinaryRead(e, e.uint32(), n, a.properties.planSelectCardBanner),
                    };
                    break;
                case 20:
                    a.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: k.h.internalBinaryRead(
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
                        shopNagbar: x.internalBinaryRead(e, e.uint32(), n, a.properties.shopNagbar),
                    };
                    break;
                case 22:
                    a.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: U.internalBinaryRead(
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
                        guildHeaderCoachmark: v.internalBinaryRead(e, e.uint32(), n, a.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    a.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: L.internalBinaryRead(
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
                        guildBoostMarketingPageBanner: O.internalBinaryRead(
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
                        guildBoostTabBanner: N.internalBinaryRead(e, e.uint32(), n, a.properties.guildBoostTabBanner),
                    };
                    break;
                case 27:
                    a.properties = {
                        oneofKind: "shopTabTooltip",
                        shopTabTooltip: m.internalBinaryRead(e, e.uint32(), n, a.properties.shopTabTooltip),
                    };
                    break;
                case 28:
                    a.properties = {
                        oneofKind: "premiumHomeRewardsPerkCard",
                        premiumHomeRewardsPerkCard: I.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.premiumHomeRewardsPerkCard,
                        ),
                    };
                    break;
                case 29:
                    a.properties = {
                        oneofKind: "marketingPageRewardsBentoBox",
                        marketingPageRewardsBentoBox: h.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.marketingPageRewardsBentoBox,
                        ),
                    };
                    break;
                case 30:
                    a.properties = {
                        oneofKind: "outboundPromotionPopover",
                        outboundPromotionPopover: E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.outboundPromotionPopover,
                        ),
                    };
                    break;
                case 31:
                    a.properties = {
                        oneofKind: "outboundPromotionClaimModalCard",
                        outboundPromotionClaimModalCard: u.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.properties.outboundPromotionClaimModalCard,
                        ),
                    };
                    break;
                case 32:
                    a.properties = {
                        oneofKind: "shopCoachmark",
                        shopCoachmark: o.I.internalBinaryRead(e, e.uint32(), n, a.properties.shopCoachmark),
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
                eu.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                ec.internalBinaryWrite(e.properties.premiumTab, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                eo.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                el
                    .internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                ea.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                en.internalBinaryWrite(e.properties.giftIcon, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                ee.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                J.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                Q.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                Z.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                q
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                z
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                K.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                W.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                H.internalBinaryWrite(e.properties.nagbar, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                B.internalBinaryWrite(
                    e.properties.planSelectCardBanner,
                    t.tag(19, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                k.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                x.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, r.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                U.internalBinaryWrite(
                    e.properties.adminEditorTestComponent,
                    t.tag(22, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                v
                    .internalBinaryWrite(e.properties.guildHeaderCoachmark, t.tag(23, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                L.internalBinaryWrite(
                    e.properties.guildBoostCheckoutBanner,
                    t.tag(24, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                O.internalBinaryWrite(
                    e.properties.guildBoostMarketingPageBanner,
                    t.tag(25, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                N.internalBinaryWrite(
                    e.properties.guildBoostTabBanner,
                    t.tag(26, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "shopTabTooltip" === e.properties.oneofKind &&
                m.internalBinaryWrite(e.properties.shopTabTooltip, t.tag(27, r.O0.LengthDelimited).fork(), n).join(),
            "premiumHomeRewardsPerkCard" === e.properties.oneofKind &&
                I.internalBinaryWrite(
                    e.properties.premiumHomeRewardsPerkCard,
                    t.tag(28, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "marketingPageRewardsBentoBox" === e.properties.oneofKind &&
                h
                    .internalBinaryWrite(
                        e.properties.marketingPageRewardsBentoBox,
                        t.tag(29, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "outboundPromotionPopover" === e.properties.oneofKind &&
                E.internalBinaryWrite(
                    e.properties.outboundPromotionPopover,
                    t.tag(30, r.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "outboundPromotionClaimModalCard" === e.properties.oneofKind &&
                u
                    .internalBinaryWrite(
                        e.properties.outboundPromotionClaimModalCard,
                        t.tag(31, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "shopCoachmark" === e.properties.oneofKind &&
                o.I.internalBinaryWrite(e.properties.shopCoachmark, t.tag(32, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.contentIdentifier && t.tag(3, r.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, r.O0.Varint).bool(e.isDefaultBase));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eE = new e_();
