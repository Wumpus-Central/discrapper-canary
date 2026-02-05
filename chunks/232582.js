"use strict";
n.d(t, { dz: () => o, ih: () => g }), n(321073);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.OPEN_MARKETING_PAGE = 1)] = "OPEN_MARKETING_PAGE"),
            (e[(e.OPEN_TIER_2_PAYMENT_MODAL = 2)] = "OPEN_TIER_2_PAYMENT_MODAL"),
            (e[(e.OPEN_TIER_1_PAYMENT_MODAL = 3)] = "OPEN_TIER_1_PAYMENT_MODAL"),
            (e[(e.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4)] =
                "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER"),
            (e[(e.OPEN_PLAN_SELECTION_MODAL = 5)] = "OPEN_PLAN_SELECTION_MODAL"),
            e
        );
    })({});
class l extends s.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    a.header = e.string();
                    break;
                case 2:
                    a.pill = e.string();
                    break;
                case 3:
                    a.body = e.string();
                    break;
                case 4:
                    a.imageLink = e.string();
                    break;
                case 5:
                    a.imageLinkLightTheme = e.string();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
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
let u = new l();
class c extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.SubscriptionButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 },
            {
                no: 2,
                name: "button_action",
                kind: "enum",
                T: () => ["discord_protos.premium_marketing.v1.ButtonAction", o, "BUTTON_ACTION_"],
            },
        ]);
    }
    create(e) {
        let t = { copy: "", buttonAction: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.copy && t.tag(1, r.O0.LengthDelimited).string(e.copy),
            0 !== e.buttonAction && t.tag(2, r.O0.Varint).int32(e.buttonAction);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let d = new c();
class _ extends s.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    this.binaryReadMap1(a.heroArtLocalizedVideoLinksDarkTheme, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(a.heroArtLocalizedVideoLinksLightTheme, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(a.heroArtVideoSubtitleLinks, e, n);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme",
                    );
            }
        }
        e[a ?? ""] = s ?? "";
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme",
                    );
            }
        }
        e[a ?? ""] = s ?? "";
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = t.string();
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links",
                    );
            }
        }
        e[a ?? ""] = s ?? "";
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
let f = new _();
class p extends s.G {
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    a.link = e.string();
                    break;
                case 2:
                    a.locale = e.string();
                    break;
                case 3:
                    a.isDefault = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.link && t.tag(1, r.O0.LengthDelimited).string(e.link),
            "" !== e.locale && t.tag(2, r.O0.LengthDelimited).string(e.locale),
            !1 !== e.isDefault && t.tag(3, r.O0.Varint).bool(e.isDefault);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let h = new p();
class m extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "subheader", kind: "scalar", T: 9 },
            { no: 3, name: "video_link", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "feature_cards", kind: "message", repeat: 1, T: () => u },
            { no: 6, name: "button", kind: "message", T: () => d },
            { no: 7, name: "dismiss_key", kind: "scalar", T: 9 },
            { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 },
            { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 },
            { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 },
            { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 },
            { no: 12, name: "body", kind: "scalar", T: 9 },
            { no: 13, name: "hero_art_video_subtitles", kind: "message", repeat: 1, T: () => h },
            { no: 14, name: "storage", kind: "message", T: () => f },
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
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
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
                    a.header = e.string();
                    break;
                case 2:
                    a.subheader = e.string();
                    break;
                case 3:
                    a.videoLink = e.string();
                    break;
                case 4:
                    a.helpArticleId = e.string();
                    break;
                case 5:
                    a.featureCards.push(u.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 6:
                    a.button = d.internalBinaryRead(e, e.uint32(), n, a.button);
                    break;
                case 7:
                    a.dismissKey = e.string();
                    break;
                case 8:
                    a.heroArtVideoLinkLightTheme = e.string();
                    break;
                case 9:
                    a.heroArtImageLinkDarkTheme = e.string();
                    break;
                case 10:
                    a.heroArtImageLinkLightTheme = e.string();
                    break;
                case 11:
                    a.modalTopPill = e.string();
                    break;
                case 12:
                    a.body = e.string();
                    break;
                case 13:
                    a.heroArtVideoSubtitles.push(h.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    a.storage = f.internalBinaryRead(e, e.uint32(), n, a.storage);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.header && t.tag(1, r.O0.LengthDelimited).string(e.header),
            "" !== e.subheader && t.tag(2, r.O0.LengthDelimited).string(e.subheader),
            "" !== e.videoLink && t.tag(3, r.O0.LengthDelimited).string(e.videoLink),
            "" !== e.helpArticleId && t.tag(4, r.O0.LengthDelimited).string(e.helpArticleId);
        for (let i = 0; i < e.featureCards.length; i++)
            u.internalBinaryWrite(e.featureCards[i], t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        e.button && d.internalBinaryWrite(e.button, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "" !== e.dismissKey && t.tag(7, r.O0.LengthDelimited).string(e.dismissKey),
            "" !== e.heroArtVideoLinkLightTheme && t.tag(8, r.O0.LengthDelimited).string(e.heroArtVideoLinkLightTheme),
            "" !== e.heroArtImageLinkDarkTheme && t.tag(9, r.O0.LengthDelimited).string(e.heroArtImageLinkDarkTheme),
            "" !== e.heroArtImageLinkLightTheme && t.tag(10, r.O0.LengthDelimited).string(e.heroArtImageLinkLightTheme),
            "" !== e.modalTopPill && t.tag(11, r.O0.LengthDelimited).string(e.modalTopPill),
            "" !== e.body && t.tag(12, r.O0.LengthDelimited).string(e.body);
        for (let i = 0; i < e.heroArtVideoSubtitles.length; i++)
            h.internalBinaryWrite(e.heroArtVideoSubtitles[i], t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        e.storage && f.internalBinaryWrite(e.storage, t.tag(14, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let g = new m();
