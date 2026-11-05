n.d(t, { m: () => em });
var i,
    r,
    a = n(852015),
    s = n(144367),
    l = n(428420),
    o = n(505816),
    d = n(308588),
    c = n(453360),
    u = n(991023);
class _ extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.CollectionPageMarketingBlock", [
            { no: 1, name: "title_localized", kind: "message", T: () => u.X },
            { no: 2, name: "title", kind: "scalar", T: 9 },
            { no: 3, name: "art", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => d.$ },
        ]);
    }
    create(e) {
        let t = { title: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.titleLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.titleLocalized);
                    break;
                case 2:
                    r.title = e.string();
                    break;
                case 3:
                    r.art = c.i.internalBinaryRead(e, e.uint32(), n, r.art);
                    break;
                case 4:
                    r.button = d.$.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.titleLocalized && u.X.internalBinaryWrite(e.titleLocalized, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.title && t.tag(2, a.O0.LengthDelimited).string(e.title),
            e.art && c.i.internalBinaryWrite(e.art, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(4, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let E = new _();
n(321073);
var A =
    (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
    (i[(i.MARKETING_PAGE = 1)] = "MARKETING_PAGE"),
    (i[(i.NITRO_HOME = 2)] = "NITRO_HOME"),
    i);
class f extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.NitroPerkCard", [
            { no: 1, name: "header_localized", kind: "message", T: () => u.X },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "description_localized", kind: "message", T: () => u.X },
            { no: 4, name: "description", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => d.$ },
            { no: 6, name: "background", kind: "message", T: () => c.i },
            { no: 7, name: "foreground", kind: "message", T: () => c.i },
            { no: 8, name: "third_party_logo", kind: "message", T: () => c.i },
            {
                no: 9,
                name: "placements",
                kind: "enum",
                repeat: 1,
                T: () => [
                    "discord_protos.premium_marketing.v1.NitroPerkCardPlacement",
                    A,
                    "NITRO_PERK_CARD_PLACEMENT_",
                ],
            },
        ]);
    }
    create(e) {
        let t = { header: "", description: "", placements: [] };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 2:
                    r.header = e.string();
                    break;
                case 3:
                    r.descriptionLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.descriptionLocalized);
                    break;
                case 4:
                    r.description = e.string();
                    break;
                case 5:
                    r.button = d.$.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 6:
                    r.background = c.i.internalBinaryRead(e, e.uint32(), n, r.background);
                    break;
                case 7:
                    r.foreground = c.i.internalBinaryRead(e, e.uint32(), n, r.foreground);
                    break;
                case 8:
                    r.thirdPartyLogo = c.i.internalBinaryRead(e, e.uint32(), n, r.thirdPartyLogo);
                    break;
                case 9:
                    if (i === a.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.placements.push(e.int32());
                    else r.placements.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(2, a.O0.LengthDelimited).string(e.header),
            e.descriptionLocalized &&
                u.X.internalBinaryWrite(e.descriptionLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.description && t.tag(4, a.O0.LengthDelimited).string(e.description),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.background && c.i.internalBinaryWrite(e.background, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.foreground && c.i.internalBinaryWrite(e.foreground, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.thirdPartyLogo &&
                c.i.internalBinaryWrite(e.thirdPartyLogo, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.placements.length)
        ) {
            t.tag(9, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.placements.length; n++) t.int32(e.placements[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let h = new f();
var I = n(174929);
class p extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionClaimModalCard", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let m = new p();
class T extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.OutboundPromotionPopover", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let g = new T();
class S extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MarketingPageBentoBox", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let N = new S();
class C extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumHomePerkCard", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            if (1 === t) r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let O = new C();
class R extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "header_localized", kind: "message", T: () => u.X },
            { no: 5, name: "body_localized", kind: "message", T: () => u.X },
            { no: 6, name: "badge_text", kind: "scalar", T: 9 },
            { no: 7, name: "badge_text_localized", kind: "message", T: () => u.X },
            { no: 8, name: "badge_icon", kind: "scalar", T: 9 },
            { no: 9, name: "badge_countdown_ends_at", kind: "scalar", T: 9 },
            { no: 10, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 11, name: "hover_background", kind: "message", T: () => c.i },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", badgeText: "", badgeIcon: "", badgeCountdownEndsAt: "", showHoverGradient: !1 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 6:
                    r.badgeText = e.string();
                    break;
                case 7:
                    r.badgeTextLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.badgeTextLocalized);
                    break;
                case 8:
                    r.badgeIcon = e.string();
                    break;
                case 9:
                    r.badgeCountdownEndsAt = e.string();
                    break;
                case 10:
                    r.showHoverGradient = e.bool();
                    break;
                case 11:
                    r.hoverBackground = c.i.internalBinaryRead(e, e.uint32(), n, r.hoverBackground);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeText && t.tag(6, a.O0.LengthDelimited).string(e.badgeText),
            e.badgeTextLocalized &&
                u.X.internalBinaryWrite(e.badgeTextLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.badgeIcon && t.tag(8, a.O0.LengthDelimited).string(e.badgeIcon),
            "" !== e.badgeCountdownEndsAt && t.tag(9, a.O0.LengthDelimited).string(e.badgeCountdownEndsAt),
            !1 !== e.showHoverGradient && t.tag(10, a.O0.Varint).bool(e.showHoverGradient),
            e.hoverBackground &&
                c.i.internalBinaryWrite(e.hoverBackground, t.tag(11, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let L = new R();
var y = n(330287);
class D extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostTabBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => u.X },
            { no: 3, name: "body_localized", kind: "message", T: () => u.X },
            { no: 4, name: "help_article", kind: "message", T: () => y.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let b = new D();
class v extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostMarketingPageBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => u.X },
            { no: 3, name: "body_localized", kind: "message", T: () => u.X },
            { no: 4, name: "help_article", kind: "message", T: () => y.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let P = new v();
class M extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildBoostCheckoutBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "header_localized", kind: "message", T: () => u.X },
            { no: 3, name: "body_localized", kind: "message", T: () => u.X },
            { no: 4, name: "help_article", kind: "message", T: () => y.O },
            { no: 5, name: "header", kind: "scalar", T: 9 },
            { no: 6, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 3:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 5:
                    r.header = e.string();
                    break;
                case 6:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(5, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(6, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let U = new M();
class w extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GuildHeaderCoachmark", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "button", kind: "message", T: () => d.$ },
            { no: 3, name: "help_article", kind: "message", T: () => y.O },
            { no: 4, name: "header_localized", kind: "message", T: () => u.X },
            { no: 5, name: "body_localized", kind: "message", T: () => u.X },
            { no: 6, name: "header", kind: "scalar", T: 9 },
            { no: 7, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.button = d.$.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 3:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 4:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 6:
                    r.header = e.string();
                    break;
                case 7:
                    r.body = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.header && t.tag(6, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(7, a.O0.LengthDelimited).string(e.body));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let G = new w();
var x = n(414525),
    k =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.FIRST = 1)] = "FIRST"),
        (r[(r.SECOND = 2)] = "SECOND"),
        r);
class F extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AdminEditorTestComponent", [
            { no: 1, name: "deprecated_field", kind: "scalar", T: 9 },
            { no: 2, name: "localized_text_field", kind: "message", T: () => u.X },
            { no: 3, name: "plain_text_field", kind: "scalar", T: 9 },
            { no: 4, name: "textarea_field", kind: "message", T: () => u.X },
            { no: 5, name: "checkbox_field", kind: "scalar", T: 8 },
            { no: 6, name: "asset_field", kind: "scalar", T: 9 },
            { no: 7, name: "themed_asset_field", kind: "message", T: () => c.i },
            { no: 8, name: "help_article_field", kind: "message", T: () => y.O },
            { no: 9, name: "cta_field", kind: "message", T: () => d.$ },
            { no: 10, name: "gradient_field", kind: "message", T: () => x.H },
            {
                no: 11,
                name: "select_field",
                kind: "enum",
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    k,
                    "ADMIN_EDITOR_TEST_SELECT_OPTION_",
                ],
            },
            {
                no: 12,
                name: "multi_select_field",
                kind: "enum",
                repeat: 1,
                T: () => [
                    "discord_protos.premium_marketing.v1.AdminEditorTestSelectOption",
                    k,
                    "ADMIN_EDITOR_TEST_SELECT_OPTION_",
                ],
            },
        ]);
    }
    create(e) {
        let t = {
            deprecatedField: "",
            plainTextField: "",
            checkboxField: !1,
            assetField: "",
            selectField: 0,
            multiSelectField: [],
        };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.deprecatedField = e.string();
                    break;
                case 2:
                    r.localizedTextField = u.X.internalBinaryRead(e, e.uint32(), n, r.localizedTextField);
                    break;
                case 3:
                    r.plainTextField = e.string();
                    break;
                case 4:
                    r.textareaField = u.X.internalBinaryRead(e, e.uint32(), n, r.textareaField);
                    break;
                case 5:
                    r.checkboxField = e.bool();
                    break;
                case 6:
                    r.assetField = e.string();
                    break;
                case 7:
                    r.themedAssetField = c.i.internalBinaryRead(e, e.uint32(), n, r.themedAssetField);
                    break;
                case 8:
                    r.helpArticleField = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticleField);
                    break;
                case 9:
                    r.ctaField = d.$.internalBinaryRead(e, e.uint32(), n, r.ctaField);
                    break;
                case 10:
                    r.gradientField = x.H.internalBinaryRead(e, e.uint32(), n, r.gradientField);
                    break;
                case 11:
                    r.selectField = e.int32();
                    break;
                case 12:
                    if (i === a.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.multiSelectField.push(e.int32());
                    else r.multiSelectField.push(e.int32());
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.deprecatedField && t.tag(1, a.O0.LengthDelimited).string(e.deprecatedField),
            e.localizedTextField &&
                u.X.internalBinaryWrite(e.localizedTextField, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.plainTextField && t.tag(3, a.O0.LengthDelimited).string(e.plainTextField),
            e.textareaField &&
                u.X.internalBinaryWrite(e.textareaField, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.checkboxField && t.tag(5, a.O0.Varint).bool(e.checkboxField),
            "" !== e.assetField && t.tag(6, a.O0.LengthDelimited).string(e.assetField),
            e.themedAssetField &&
                c.i.internalBinaryWrite(e.themedAssetField, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticleField &&
                y.O.internalBinaryWrite(e.helpArticleField, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaField && d.$.internalBinaryWrite(e.ctaField, t.tag(9, a.O0.LengthDelimited).fork(), n).join(),
            e.gradientField &&
                x.H.internalBinaryWrite(e.gradientField, t.tag(10, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.selectField && t.tag(11, a.O0.Varint).int32(e.selectField),
            e.multiSelectField.length)
        ) {
            t.tag(12, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.multiSelectField.length; n++) t.int32(e.multiSelectField[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let B = new F();
var V = n(406935);
class H extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.ShopNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", d.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => y.O },
            { no: 6, name: "body_localized", kind: "message", T: () => u.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => u.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => V.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.ctaLabel = e.string();
                    break;
                case 3:
                    r.ctaAction = e.int32();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 6:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 7:
                    r.ctaLabelLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.ctaLabelLocalized);
                    break;
                case 8:
                    r.navigableStorefrontApplicationId = V.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.navigableStorefrontApplicationId,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, a.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, a.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                u.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                V.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, a.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let j = new H();
var W = n(520361);
class Y extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PlanSelectCardBanner", [
            { no: 1, name: "asset", kind: "message", T: () => c.i },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "body_localized", kind: "message", T: () => u.X },
            { no: 4, name: "help_article", kind: "message", T: () => y.O },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 4:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.asset && c.i.internalBinaryWrite(e.asset, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(4, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let K = new Y();
class $ extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Nagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "cta_label", kind: "scalar", T: 9 },
            {
                no: 3,
                name: "cta_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", d.d, "BUTTON_ACTION_"],
            },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "help_article", kind: "message", T: () => y.O },
            { no: 6, name: "body_localized", kind: "message", T: () => u.X },
            { no: 7, name: "cta_label_localized", kind: "message", T: () => u.X },
            { no: 8, name: "navigable_storefront_application_id", kind: "message", T: () => V.ol },
        ]);
    }
    create(e) {
        let t = { body: "", ctaLabel: "", ctaAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.ctaLabel = e.string();
                    break;
                case 3:
                    r.ctaAction = e.int32();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 6:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                case 7:
                    r.ctaLabelLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.ctaLabelLocalized);
                    break;
                case 8:
                    r.navigableStorefrontApplicationId = V.ol.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.navigableStorefrontApplicationId,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            "" !== e.ctaLabel && t.tag(2, a.O0.LengthDelimited).string(e.ctaLabel),
            0 !== e.ctaAction && t.tag(3, a.O0.Varint).int32(e.ctaAction),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.ctaLabelLocalized &&
                u.X.internalBinaryWrite(e.ctaLabelLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.navigableStorefrontApplicationId &&
                V.ol
                    .internalBinaryWrite(e.navigableStorefrontApplicationId, t.tag(8, a.O0.LengthDelimited).fork(), n)
                    .join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let X = new $();
class z extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabPopover", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "button", kind: "message", T: () => d.$ },
            { no: 5, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 6, name: "help_article", kind: "message", T: () => y.O },
            { no: 7, name: "header_localized", kind: "message", T: () => u.X },
            { no: 8, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", helpArticleId: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.button = d.$.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 5:
                    r.helpArticleId = e.string();
                    break;
                case 6:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 7:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 8:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.helpArticleId && t.tag(5, a.O0.LengthDelimited).string(e.helpArticleId),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let q = new z();
class Q extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTabTooltip", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset", kind: "message", T: () => c.i },
            { no: 4, name: "header_localized", kind: "message", T: () => u.X },
            { no: 5, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 4:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Z = new Q();
class J extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderCoachmark", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "body", kind: "scalar", T: 9 },
            { no: 3, name: "asset_url", kind: "scalar", T: 9 },
            { no: 4, name: "asset", kind: "message", T: () => c.i },
            { no: 5, name: "header_localized", kind: "message", T: () => u.X },
            { no: 6, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { header: "", body: "", assetUrl: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.body = e.string();
                    break;
                case 3:
                    r.assetUrl = e.string();
                    break;
                case 4:
                    r.asset = c.i.internalBinaryRead(e, e.uint32(), n, r.asset);
                    break;
                case 5:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 6:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.header && t.tag(1, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(2, a.O0.LengthDelimited).string(e.body),
            "" !== e.assetUrl && t.tag(3, a.O0.LengthDelimited).string(e.assetUrl),
            e.asset && c.i.internalBinaryWrite(e.asset, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(6, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ee = new J();
class et extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftReminderNagbar", [
            { no: 1, name: "body", kind: "scalar", T: 9 },
            { no: 2, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.body = e.string();
                    break;
                case 2:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.body && t.tag(1, a.O0.LengthDelimited).string(e.body),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(2, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let en = new et();
var ei = n(959129),
    er = n(67948),
    ea = n(978656),
    es = n(720119);
class el extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.GiftIcon", [
            { no: 1, name: "box_animation_url", kind: "scalar", T: 9 },
            { no: 2, name: "trinket_animation_url", kind: "scalar", T: 9 },
            { no: 3, name: "trinket_glow_animation_url", kind: "scalar", T: 9 },
            { no: 4, name: "gradient", kind: "message", T: () => x.H },
            { no: 5, name: "trinket_rive_animation_url", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = {
            boxAnimationUrl: "",
            trinketAnimationUrl: "",
            trinketGlowAnimationUrl: "",
            trinketRiveAnimationUrl: "",
        };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.boxAnimationUrl = e.string();
                    break;
                case 2:
                    r.trinketAnimationUrl = e.string();
                    break;
                case 3:
                    r.trinketGlowAnimationUrl = e.string();
                    break;
                case 4:
                    r.gradient = x.H.internalBinaryRead(e, e.uint32(), n, r.gradient);
                    break;
                case 5:
                    r.trinketRiveAnimationUrl = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.boxAnimationUrl && t.tag(1, a.O0.LengthDelimited).string(e.boxAnimationUrl),
            "" !== e.trinketAnimationUrl && t.tag(2, a.O0.LengthDelimited).string(e.trinketAnimationUrl),
            "" !== e.trinketGlowAnimationUrl && t.tag(3, a.O0.LengthDelimited).string(e.trinketGlowAnimationUrl),
            e.gradient && x.H.internalBinaryWrite(e.gradient, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "" !== e.trinketRiveAnimationUrl && t.tag(5, a.O0.LengthDelimited).string(e.trinketRiveAnimationUrl));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eo = new el();
var ed = n(554146);
class ec extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.MobileBottomSheet", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "button", kind: "message", T: () => d.$ },
            {
                no: 6,
                name: "dismissible_content",
                kind: "enum",
                T: () => ["discord_protos.discord_users.v1.DismissibleContent", ed.M],
            },
            { no: 7, name: "help_article", kind: "message", T: () => y.O },
            { no: 8, name: "header_localized", kind: "message", T: () => u.X },
            { no: 9, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "", helpArticleId: "", dismissibleContent: 0 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.assetUrl = e.string();
                    break;
                case 2:
                    r.header = e.string();
                    break;
                case 3:
                    r.body = e.string();
                    break;
                case 4:
                    r.helpArticleId = e.string();
                    break;
                case 5:
                    r.button = d.$.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 6:
                    r.dismissibleContent = e.int32();
                    break;
                case 7:
                    r.helpArticle = y.O.internalBinaryRead(e, e.uint32(), n, r.helpArticle);
                    break;
                case 8:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 9:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.assetUrl && t.tag(1, a.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, a.O0.LengthDelimited).string(e.body),
            "" !== e.helpArticleId && t.tag(4, a.O0.LengthDelimited).string(e.helpArticleId),
            e.button && d.$.internalBinaryWrite(e.button, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            0 !== e.dismissibleContent && t.tag(6, a.O0.Varint).int32(e.dismissibleContent),
            e.helpArticle && y.O.internalBinaryWrite(e.helpArticle, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(9, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eu = new ec();
class e_ extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PaymentModalBanner", [
            { no: 1, name: "asset_url", kind: "scalar", T: 9 },
            { no: 2, name: "header", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "header_localized", kind: "message", T: () => u.X },
            { no: 5, name: "body_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { assetUrl: "", header: "", body: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.assetUrl = e.string();
                    break;
                case 2:
                    r.header = e.string();
                    break;
                case 3:
                    r.body = e.string();
                    break;
                case 4:
                    r.headerLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.headerLocalized);
                    break;
                case 5:
                    r.bodyLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.bodyLocalized);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.assetUrl && t.tag(1, a.O0.LengthDelimited).string(e.assetUrl),
            "" !== e.header && t.tag(2, a.O0.LengthDelimited).string(e.header),
            "" !== e.body && t.tag(3, a.O0.LengthDelimited).string(e.body),
            e.headerLocalized &&
                u.X.internalBinaryWrite(e.headerLocalized, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                u.X.internalBinaryWrite(e.bodyLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eE = new e_();
var eA = n(670474);
class ef extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumTab", [
            { no: 1, name: "badge_label", kind: "scalar", T: 9 },
            { no: 2, name: "acknowledged_badge_label", kind: "scalar", T: 9 },
            { no: 3, name: "show_hover_gradient", kind: "scalar", T: 8 },
            { no: 4, name: "deeplink_section", kind: "scalar", T: 9 },
            { no: 5, name: "badge_label_localized", kind: "message", T: () => u.X },
            { no: 6, name: "acknowledged_badge_label_localized", kind: "message", T: () => u.X },
        ]);
    }
    create(e) {
        let t = { badgeLabel: "", acknowledgedBadgeLabel: "", showHoverGradient: !1, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.badgeLabel = e.string();
                    break;
                case 2:
                    r.acknowledgedBadgeLabel = e.string();
                    break;
                case 3:
                    r.showHoverGradient = e.bool();
                    break;
                case 4:
                    r.deeplinkSection = e.string();
                    break;
                case 5:
                    r.badgeLabelLocalized = u.X.internalBinaryRead(e, e.uint32(), n, r.badgeLabelLocalized);
                    break;
                case 6:
                    r.acknowledgedBadgeLabelLocalized = u.X.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.acknowledgedBadgeLabelLocalized,
                    );
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.badgeLabel && t.tag(1, a.O0.LengthDelimited).string(e.badgeLabel),
            "" !== e.acknowledgedBadgeLabel && t.tag(2, a.O0.LengthDelimited).string(e.acknowledgedBadgeLabel),
            !1 !== e.showHoverGradient && t.tag(3, a.O0.Varint).bool(e.showHoverGradient),
            "" !== e.deeplinkSection && t.tag(4, a.O0.LengthDelimited).string(e.deeplinkSection),
            e.badgeLabelLocalized &&
                u.X.internalBinaryWrite(e.badgeLabelLocalized, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.acknowledgedBadgeLabelLocalized &&
                u.X.internalBinaryWrite(
                    e.acknowledgedBadgeLabelLocalized,
                    t.tag(6, a.O0.LengthDelimited).fork(),
                    n,
                ).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eh = new ef();
var eI = n(232582);
class ep extends o.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", oneof: "properties", T: 9 },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", oneof: "properties", T: () => eI.ih },
            { no: 4, name: "premium_tab", kind: "message", oneof: "properties", T: () => eh },
            { no: 5, name: "marketing_page_banner", kind: "message", oneof: "properties", T: () => eA.C },
            { no: 6, name: "payment_modal_banner", kind: "message", oneof: "properties", T: () => eE },
            { no: 7, name: "mobile_bottom_sheet", kind: "message", oneof: "properties", T: () => eu },
            { no: 8, name: "gift_icon", kind: "message", oneof: "properties", T: () => eo },
            { no: 9, name: "gift_icon_coachmark", kind: "message", oneof: "properties", T: () => es.l },
            { no: 10, name: "gift_plan_selection_card_banner", kind: "message", oneof: "properties", T: () => ea.s },
            { no: 11, name: "gift_customization_banner", kind: "message", oneof: "properties", T: () => er.E },
            { no: 12, name: "billing_settings_nitro_gift_banner", kind: "message", oneof: "properties", T: () => ei.v },
            { no: 13, name: "gift_reminder_nagbar", kind: "message", oneof: "properties", T: () => en },
            { no: 14, name: "gift_reminder_coachmark", kind: "message", oneof: "properties", T: () => ee },
            { no: 15, name: "premium_tab_tooltip", kind: "message", oneof: "properties", T: () => Z },
            { no: 16, name: "premium_tab_popover", kind: "message", oneof: "properties", T: () => q },
            { no: 17, name: "nagbar", kind: "message", oneof: "properties", T: () => X },
            { no: 19, name: "plan_select_card_banner", kind: "message", oneof: "properties", T: () => K },
            { no: 20, name: "billing_settings_banner", kind: "message", oneof: "properties", T: () => W.h },
            { no: 21, name: "shop_nagbar", kind: "message", oneof: "properties", T: () => j },
            { no: 22, name: "admin_editor_test_component", kind: "message", oneof: "properties", T: () => B },
            { no: 23, name: "guild_header_coachmark", kind: "message", oneof: "properties", T: () => G },
            { no: 24, name: "guild_boost_checkout_banner", kind: "message", oneof: "properties", T: () => U },
            { no: 25, name: "guild_boost_marketing_page_banner", kind: "message", oneof: "properties", T: () => P },
            { no: 26, name: "guild_boost_tab_banner", kind: "message", oneof: "properties", T: () => b },
            { no: 27, name: "shop_tab_tooltip", kind: "message", oneof: "properties", T: () => L },
            { no: 28, name: "premium_home_rewards_perk_card", kind: "message", oneof: "properties", T: () => O },
            { no: 29, name: "marketing_page_rewards_bento_box", kind: "message", oneof: "properties", T: () => N },
            { no: 30, name: "outbound_promotion_popover", kind: "message", oneof: "properties", T: () => g },
            { no: 31, name: "outbound_promotion_claim_modal_card", kind: "message", oneof: "properties", T: () => m },
            { no: 32, name: "shop_coachmark", kind: "message", oneof: "properties", T: () => I.I },
            { no: 33, name: "nitro_perk_card", kind: "message", oneof: "properties", T: () => h },
            { no: 34, name: "collection_page_marketing_block", kind: "message", oneof: "properties", T: () => E },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 },
            { no: 18, name: "is_default_base", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { properties: { oneofKind: void 0 }, contentIdentifier: "", isDefaultBase: !1 };
        return (
            globalThis.Object.defineProperty(t, l.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.properties = { oneofKind: "placeholder", placeholder: e.string() };
                    break;
                case 2:
                    r.properties = {
                        oneofKind: "announcementModalVariant1",
                        announcementModalVariant1: eI.ih.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.announcementModalVariant1,
                        ),
                    };
                    break;
                case 4:
                    r.properties = {
                        oneofKind: "premiumTab",
                        premiumTab: eh.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTab),
                    };
                    break;
                case 5:
                    r.properties = {
                        oneofKind: "marketingPageBanner",
                        marketingPageBanner: eA.C.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.marketingPageBanner,
                        ),
                    };
                    break;
                case 6:
                    r.properties = {
                        oneofKind: "paymentModalBanner",
                        paymentModalBanner: eE.internalBinaryRead(e, e.uint32(), n, r.properties.paymentModalBanner),
                    };
                    break;
                case 7:
                    r.properties = {
                        oneofKind: "mobileBottomSheet",
                        mobileBottomSheet: eu.internalBinaryRead(e, e.uint32(), n, r.properties.mobileBottomSheet),
                    };
                    break;
                case 8:
                    r.properties = {
                        oneofKind: "giftIcon",
                        giftIcon: eo.internalBinaryRead(e, e.uint32(), n, r.properties.giftIcon),
                    };
                    break;
                case 9:
                    r.properties = {
                        oneofKind: "giftIconCoachmark",
                        giftIconCoachmark: es.l.internalBinaryRead(e, e.uint32(), n, r.properties.giftIconCoachmark),
                    };
                    break;
                case 10:
                    r.properties = {
                        oneofKind: "giftPlanSelectionCardBanner",
                        giftPlanSelectionCardBanner: ea.s.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftPlanSelectionCardBanner,
                        ),
                    };
                    break;
                case 11:
                    r.properties = {
                        oneofKind: "giftCustomizationBanner",
                        giftCustomizationBanner: er.E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftCustomizationBanner,
                        ),
                    };
                    break;
                case 12:
                    r.properties = {
                        oneofKind: "billingSettingsNitroGiftBanner",
                        billingSettingsNitroGiftBanner: ei.v.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.billingSettingsNitroGiftBanner,
                        ),
                    };
                    break;
                case 13:
                    r.properties = {
                        oneofKind: "giftReminderNagbar",
                        giftReminderNagbar: en.internalBinaryRead(e, e.uint32(), n, r.properties.giftReminderNagbar),
                    };
                    break;
                case 14:
                    r.properties = {
                        oneofKind: "giftReminderCoachmark",
                        giftReminderCoachmark: ee.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.giftReminderCoachmark,
                        ),
                    };
                    break;
                case 15:
                    r.properties = {
                        oneofKind: "premiumTabTooltip",
                        premiumTabTooltip: Z.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTabTooltip),
                    };
                    break;
                case 16:
                    r.properties = {
                        oneofKind: "premiumTabPopover",
                        premiumTabPopover: q.internalBinaryRead(e, e.uint32(), n, r.properties.premiumTabPopover),
                    };
                    break;
                case 17:
                    r.properties = {
                        oneofKind: "nagbar",
                        nagbar: X.internalBinaryRead(e, e.uint32(), n, r.properties.nagbar),
                    };
                    break;
                case 19:
                    r.properties = {
                        oneofKind: "planSelectCardBanner",
                        planSelectCardBanner: K.internalBinaryRead(e, e.uint32(), n, r.properties.planSelectCardBanner),
                    };
                    break;
                case 20:
                    r.properties = {
                        oneofKind: "billingSettingsBanner",
                        billingSettingsBanner: W.h.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.billingSettingsBanner,
                        ),
                    };
                    break;
                case 21:
                    r.properties = {
                        oneofKind: "shopNagbar",
                        shopNagbar: j.internalBinaryRead(e, e.uint32(), n, r.properties.shopNagbar),
                    };
                    break;
                case 22:
                    r.properties = {
                        oneofKind: "adminEditorTestComponent",
                        adminEditorTestComponent: B.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.adminEditorTestComponent,
                        ),
                    };
                    break;
                case 23:
                    r.properties = {
                        oneofKind: "guildHeaderCoachmark",
                        guildHeaderCoachmark: G.internalBinaryRead(e, e.uint32(), n, r.properties.guildHeaderCoachmark),
                    };
                    break;
                case 24:
                    r.properties = {
                        oneofKind: "guildBoostCheckoutBanner",
                        guildBoostCheckoutBanner: U.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.guildBoostCheckoutBanner,
                        ),
                    };
                    break;
                case 25:
                    r.properties = {
                        oneofKind: "guildBoostMarketingPageBanner",
                        guildBoostMarketingPageBanner: P.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.guildBoostMarketingPageBanner,
                        ),
                    };
                    break;
                case 26:
                    r.properties = {
                        oneofKind: "guildBoostTabBanner",
                        guildBoostTabBanner: b.internalBinaryRead(e, e.uint32(), n, r.properties.guildBoostTabBanner),
                    };
                    break;
                case 27:
                    r.properties = {
                        oneofKind: "shopTabTooltip",
                        shopTabTooltip: L.internalBinaryRead(e, e.uint32(), n, r.properties.shopTabTooltip),
                    };
                    break;
                case 28:
                    r.properties = {
                        oneofKind: "premiumHomeRewardsPerkCard",
                        premiumHomeRewardsPerkCard: O.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.premiumHomeRewardsPerkCard,
                        ),
                    };
                    break;
                case 29:
                    r.properties = {
                        oneofKind: "marketingPageRewardsBentoBox",
                        marketingPageRewardsBentoBox: N.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.marketingPageRewardsBentoBox,
                        ),
                    };
                    break;
                case 30:
                    r.properties = {
                        oneofKind: "outboundPromotionPopover",
                        outboundPromotionPopover: g.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.outboundPromotionPopover,
                        ),
                    };
                    break;
                case 31:
                    r.properties = {
                        oneofKind: "outboundPromotionClaimModalCard",
                        outboundPromotionClaimModalCard: m.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.outboundPromotionClaimModalCard,
                        ),
                    };
                    break;
                case 32:
                    r.properties = {
                        oneofKind: "shopCoachmark",
                        shopCoachmark: I.I.internalBinaryRead(e, e.uint32(), n, r.properties.shopCoachmark),
                    };
                    break;
                case 33:
                    r.properties = {
                        oneofKind: "nitroPerkCard",
                        nitroPerkCard: h.internalBinaryRead(e, e.uint32(), n, r.properties.nitroPerkCard),
                    };
                    break;
                case 34:
                    r.properties = {
                        oneofKind: "collectionPageMarketingBlock",
                        collectionPageMarketingBlock: E.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.properties.collectionPageMarketingBlock,
                        ),
                    };
                    break;
                case 3:
                    r.contentIdentifier = e.string();
                    break;
                case 18:
                    r.isDefaultBase = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("placeholder" === e.properties.oneofKind && t.tag(1, a.O0.LengthDelimited).string(e.properties.placeholder),
            "announcementModalVariant1" === e.properties.oneofKind &&
                eI.ih
                    .internalBinaryWrite(
                        e.properties.announcementModalVariant1,
                        t.tag(2, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "premiumTab" === e.properties.oneofKind &&
                eh.internalBinaryWrite(e.properties.premiumTab, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            "marketingPageBanner" === e.properties.oneofKind &&
                eA.C.internalBinaryWrite(
                    e.properties.marketingPageBanner,
                    t.tag(5, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "paymentModalBanner" === e.properties.oneofKind &&
                eE
                    .internalBinaryWrite(e.properties.paymentModalBanner, t.tag(6, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "mobileBottomSheet" === e.properties.oneofKind &&
                eu.internalBinaryWrite(e.properties.mobileBottomSheet, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            "giftIcon" === e.properties.oneofKind &&
                eo.internalBinaryWrite(e.properties.giftIcon, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            "giftIconCoachmark" === e.properties.oneofKind &&
                es.l
                    .internalBinaryWrite(e.properties.giftIconCoachmark, t.tag(9, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftPlanSelectionCardBanner" === e.properties.oneofKind &&
                ea.s
                    .internalBinaryWrite(
                        e.properties.giftPlanSelectionCardBanner,
                        t.tag(10, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftCustomizationBanner" === e.properties.oneofKind &&
                er.E.internalBinaryWrite(
                    e.properties.giftCustomizationBanner,
                    t.tag(11, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsNitroGiftBanner" === e.properties.oneofKind &&
                ei.v
                    .internalBinaryWrite(
                        e.properties.billingSettingsNitroGiftBanner,
                        t.tag(12, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "giftReminderNagbar" === e.properties.oneofKind &&
                en
                    .internalBinaryWrite(e.properties.giftReminderNagbar, t.tag(13, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "giftReminderCoachmark" === e.properties.oneofKind &&
                ee
                    .internalBinaryWrite(e.properties.giftReminderCoachmark, t.tag(14, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "premiumTabTooltip" === e.properties.oneofKind &&
                Z.internalBinaryWrite(e.properties.premiumTabTooltip, t.tag(15, a.O0.LengthDelimited).fork(), n).join(),
            "premiumTabPopover" === e.properties.oneofKind &&
                q.internalBinaryWrite(e.properties.premiumTabPopover, t.tag(16, a.O0.LengthDelimited).fork(), n).join(),
            "nagbar" === e.properties.oneofKind &&
                X.internalBinaryWrite(e.properties.nagbar, t.tag(17, a.O0.LengthDelimited).fork(), n).join(),
            "planSelectCardBanner" === e.properties.oneofKind &&
                K.internalBinaryWrite(
                    e.properties.planSelectCardBanner,
                    t.tag(19, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "billingSettingsBanner" === e.properties.oneofKind &&
                W.h
                    .internalBinaryWrite(e.properties.billingSettingsBanner, t.tag(20, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopNagbar" === e.properties.oneofKind &&
                j.internalBinaryWrite(e.properties.shopNagbar, t.tag(21, a.O0.LengthDelimited).fork(), n).join(),
            "adminEditorTestComponent" === e.properties.oneofKind &&
                B.internalBinaryWrite(
                    e.properties.adminEditorTestComponent,
                    t.tag(22, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildHeaderCoachmark" === e.properties.oneofKind &&
                G.internalBinaryWrite(
                    e.properties.guildHeaderCoachmark,
                    t.tag(23, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostCheckoutBanner" === e.properties.oneofKind &&
                U.internalBinaryWrite(
                    e.properties.guildBoostCheckoutBanner,
                    t.tag(24, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostMarketingPageBanner" === e.properties.oneofKind &&
                P.internalBinaryWrite(
                    e.properties.guildBoostMarketingPageBanner,
                    t.tag(25, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "guildBoostTabBanner" === e.properties.oneofKind &&
                b
                    .internalBinaryWrite(e.properties.guildBoostTabBanner, t.tag(26, a.O0.LengthDelimited).fork(), n)
                    .join(),
            "shopTabTooltip" === e.properties.oneofKind &&
                L.internalBinaryWrite(e.properties.shopTabTooltip, t.tag(27, a.O0.LengthDelimited).fork(), n).join(),
            "premiumHomeRewardsPerkCard" === e.properties.oneofKind &&
                O.internalBinaryWrite(
                    e.properties.premiumHomeRewardsPerkCard,
                    t.tag(28, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "marketingPageRewardsBentoBox" === e.properties.oneofKind &&
                N.internalBinaryWrite(
                    e.properties.marketingPageRewardsBentoBox,
                    t.tag(29, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "outboundPromotionPopover" === e.properties.oneofKind &&
                g
                    .internalBinaryWrite(
                        e.properties.outboundPromotionPopover,
                        t.tag(30, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "outboundPromotionClaimModalCard" === e.properties.oneofKind &&
                m
                    .internalBinaryWrite(
                        e.properties.outboundPromotionClaimModalCard,
                        t.tag(31, a.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "shopCoachmark" === e.properties.oneofKind &&
                I.I.internalBinaryWrite(e.properties.shopCoachmark, t.tag(32, a.O0.LengthDelimited).fork(), n).join(),
            "nitroPerkCard" === e.properties.oneofKind &&
                h.internalBinaryWrite(e.properties.nitroPerkCard, t.tag(33, a.O0.LengthDelimited).fork(), n).join(),
            "collectionPageMarketingBlock" === e.properties.oneofKind &&
                E.internalBinaryWrite(
                    e.properties.collectionPageMarketingBlock,
                    t.tag(34, a.O0.LengthDelimited).fork(),
                    n,
                ).join(),
            "" !== e.contentIdentifier && t.tag(3, a.O0.LengthDelimited).string(e.contentIdentifier),
            !1 !== e.isDefaultBase && t.tag(18, a.O0.Varint).bool(e.isDefaultBase));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let em = new ep();
