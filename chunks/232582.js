"use strict";
n.d(t, { dz: () => l, ih: () => I }), n(321073);
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(330287),
    l = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.OPEN_MARKETING_PAGE = 1)] = "OPEN_MARKETING_PAGE"),
            (e[(e.OPEN_TIER_2_PAYMENT_MODAL = 2)] = "OPEN_TIER_2_PAYMENT_MODAL"),
            (e[(e.OPEN_TIER_1_PAYMENT_MODAL = 3)] = "OPEN_TIER_1_PAYMENT_MODAL"),
            (e[(e.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4)] =
                "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER"),
            (e[(e.OPEN_PLAN_SELECTION_MODAL = 5)] = "OPEN_PLAN_SELECTION_MODAL"),
            (e[(e.OPEN_PREMIUM_GROUP_PAYMENT_MODAL = 6)] = "OPEN_PREMIUM_GROUP_PAYMENT_MODAL"),
            e
        );
    })({});
class u extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.FeatureCard", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "pill", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "image_link", kind: "scalar", T: 9 },
            { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { header: "", pill: "", body: "", imageLink: "", imageLinkLightTheme: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    s.pill = e.string();
                    break;
                case 3:
                    s.body = e.string();
                    break;
                case 4:
                    s.imageLink = e.string();
                    break;
                case 5:
                    s.imageLinkLightTheme = e.string();
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
            "" !== e.pill && t.tag(2, r.O0.LengthDelimited).string(e.pill),
            "" !== e.body && t.tag(3, r.O0.LengthDelimited).string(e.body),
            "" !== e.imageLink && t.tag(4, r.O0.LengthDelimited).string(e.imageLink),
            "" !== e.imageLinkLightTheme && t.tag(5, r.O0.LengthDelimited).string(e.imageLinkLightTheme);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let c = new u();
class d extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.SubscriptionButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", l, "BUTTON_ACTION_"],
            },
            { no: 3, name: "deeplink_section", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0, deeplinkSection: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
            "" !== e.deeplinkSection && t.tag(3, r.O0.LengthDelimited).string(e.deeplinkSection);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new d();
class f extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Variant1Storage", [
            {
                no: 1,
                name: "hero_art_localized_video_links_dark_theme",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
            },
            {
                no: 2,
                name: "hero_art_localized_video_links_light_theme",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
            },
            { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
        ]);
    }
    create(e) {
        let t = {
            heroArtLocalizedVideoLinksDarkTheme: {},
            heroArtLocalizedVideoLinksLightTheme: {},
            heroArtVideoSubtitleLinks: {},
        };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    this.binaryReadMap1(s.heroArtLocalizedVideoLinksDarkTheme, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(s.heroArtLocalizedVideoLinksLightTheme, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(s.heroArtVideoSubtitleLinks, e, n);
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
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme",
                    );
            }
        }
        e[s ?? ""] = a ?? "";
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme",
                    );
            }
        }
        e[s ?? ""] = a ?? "";
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links",
                    );
            }
        }
        e[s ?? ""] = a ?? "";
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksDarkTheme))
            t.tag(1, r.O0.LengthDelimited)
                .fork()
                .tag(1, r.O0.LengthDelimited)
                .string(n)
                .tag(2, r.O0.LengthDelimited)
                .string(e.heroArtLocalizedVideoLinksDarkTheme[n])
                .join();
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme))
            t.tag(2, r.O0.LengthDelimited)
                .fork()
                .tag(1, r.O0.LengthDelimited)
                .string(n)
                .tag(2, r.O0.LengthDelimited)
                .string(e.heroArtLocalizedVideoLinksLightTheme[n])
                .join();
        for (let n of Object.keys(e.heroArtVideoSubtitleLinks))
            t.tag(3, r.O0.LengthDelimited)
                .fork()
                .tag(1, r.O0.LengthDelimited)
                .string(n)
                .tag(2, r.O0.LengthDelimited)
                .string(e.heroArtVideoSubtitleLinks[n])
                .join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let p = new f();
class h extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Subtitle", [
            { no: 1, name: "link", kind: "scalar", T: 9 },
            { no: 2, name: "locale", kind: "scalar", T: 9 },
            { no: 3, name: "is_default", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { link: "", locale: "", isDefault: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    s.link = e.string();
                    break;
                case 2:
                    s.locale = e.string();
                    break;
                case 3:
                    s.isDefault = e.bool();
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
        "" !== e.link && t.tag(1, r.O0.LengthDelimited).string(e.link),
            "" !== e.locale && t.tag(2, r.O0.LengthDelimited).string(e.locale),
            !1 !== e.isDefault && t.tag(3, r.O0.Varint).bool(e.isDefault);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let m = new h();
class E extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Disclaimer", [
            { no: 1, name: "disclaimer_text", kind: "scalar", T: 9 },
            { no: 2, name: "disclaimer_help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = { disclaimerText: "" };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    s.disclaimerText = e.string();
                    break;
                case 2:
                    s.disclaimerHelpArticle = o.O.internalBinaryRead(e, e.uint32(), n, s.disclaimerHelpArticle);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.disclaimerText && t.tag(1, r.O0.LengthDelimited).string(e.disclaimerText),
            e.disclaimerHelpArticle &&
                o.O.internalBinaryWrite(e.disclaimerHelpArticle, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let g = new E();
class A extends a.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "subheader", kind: "scalar", T: 9 },
            { no: 3, name: "video_link", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "feature_cards", kind: "message", repeat: 1, T: () => c },
            { no: 6, name: "button", kind: "message", T: () => _ },
            { no: 7, name: "dismiss_key", kind: "scalar", T: 9 },
            { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 },
            { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 },
            { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 },
            { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 },
            { no: 12, name: "body", kind: "scalar", T: 9 },
            { no: 13, name: "hero_art_video_subtitles", kind: "message", repeat: 1, T: () => m },
            { no: 14, name: "storage", kind: "message", T: () => p },
            { no: 15, name: "disclaimer", kind: "message", T: () => g },
            { no: 18, name: "help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = {
            header: "",
            subheader: "",
            videoLink: "",
            helpArticleId: "",
            featureCards: [],
            dismissKey: "",
            heroArtVideoLinkLightTheme: "",
            heroArtImageLinkDarkTheme: "",
            heroArtImageLinkLightTheme: "",
            modalTopPill: "",
            body: "",
            heroArtVideoSubtitles: [],
        };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    s.subheader = e.string();
                    break;
                case 3:
                    s.videoLink = e.string();
                    break;
                case 4:
                    s.helpArticleId = e.string();
                    break;
                case 5:
                    s.featureCards.push(c.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 6:
                    s.button = _.internalBinaryRead(e, e.uint32(), n, s.button);
                    break;
                case 7:
                    s.dismissKey = e.string();
                    break;
                case 8:
                    s.heroArtVideoLinkLightTheme = e.string();
                    break;
                case 9:
                    s.heroArtImageLinkDarkTheme = e.string();
                    break;
                case 10:
                    s.heroArtImageLinkLightTheme = e.string();
                    break;
                case 11:
                    s.modalTopPill = e.string();
                    break;
                case 12:
                    s.body = e.string();
                    break;
                case 13:
                    s.heroArtVideoSubtitles.push(m.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    s.storage = p.internalBinaryRead(e, e.uint32(), n, s.storage);
                    break;
                case 15:
                    s.disclaimer = g.internalBinaryRead(e, e.uint32(), n, s.disclaimer);
                    break;
                case 18:
                    s.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, s.helpArticle);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.subheader && t.tag(2, r.O0.LengthDelimited).string(e.subheader),
            "" !== e.videoLink && t.tag(3, r.O0.LengthDelimited).string(e.videoLink),
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId);
        for (let i = 0; i < e.featureCards.length; i++)
            c.internalBinaryWrite(e.featureCards[i], t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        e.button && _.internalBinaryWrite(e.button, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.dismissKey && t.tag(7, r.O0.LengthDelimited).string(e.dismissKey),
            "" !== e.heroArtVideoLinkLightTheme && t.tag(8, r.O0.LengthDelimited).string(e.heroArtVideoLinkLightTheme),
            "" !== e.heroArtImageLinkDarkTheme && t.tag(9, r.O0.LengthDelimited).string(e.heroArtImageLinkDarkTheme),
            "" !== e.heroArtImageLinkLightTheme && t.tag(10, r.O0.LengthDelimited).string(e.heroArtImageLinkLightTheme),
            "" !== e.modalTopPill && t.tag(11, r.O0.LengthDelimited).string(e.modalTopPill),
            "" !== e.body && t.tag(12, r.O0.LengthDelimited).string(e.body);
        for (let i = 0; i < e.heroArtVideoSubtitles.length; i++)
            m.internalBinaryWrite(e.heroArtVideoSubtitles[i], t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        e.storage && p.internalBinaryWrite(e.storage, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            e.disclaimer && g.internalBinaryWrite(e.disclaimer, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(18, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
