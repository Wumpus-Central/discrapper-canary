n.d(t, { ih: () => T }), n(321073);
var i = n(852015),
    r = n(144367),
    a = n(428420),
    s = n(535384),
    l = n(308588),
    o = n(330287),
    d = n(991023);
class c extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.FeatureCard", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "pill", kind: "scalar", T: 9 },
            { no: 3, name: "body", kind: "scalar", T: 9 },
            { no: 4, name: "image_link", kind: "scalar", T: 9 },
            { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 },
            { no: 6, name: "header_localized", kind: "message", T: () => d.X },
            { no: 7, name: "pill_localized", kind: "message", T: () => d.X },
            { no: 8, name: "body_localized", kind: "message", T: () => d.X },
            { no: 9, name: "help_article", kind: "message", T: () => o.O },
        ]);
    }
    create(e) {
        let t = { header: "", pill: "", body: "", imageLink: "", imageLinkLightTheme: "" };
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
                case 6:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 7:
                    a.pillLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.pillLocalized);
                    break;
                case 8:
                    a.bodyLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.bodyLocalized);
                    break;
                case 9:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
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
            "" !== e.pill && t.tag(2, i.O0.LengthDelimited).string(e.pill),
            "" !== e.body && t.tag(3, i.O0.LengthDelimited).string(e.body),
            "" !== e.imageLink && t.tag(4, i.O0.LengthDelimited).string(e.imageLink),
            "" !== e.imageLinkLightTheme && t.tag(5, i.O0.LengthDelimited).string(e.imageLinkLightTheme),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.pillLocalized &&
                d.X.internalBinaryWrite(e.pillLocalized, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.bodyLocalized &&
                d.X.internalBinaryWrite(e.bodyLocalized, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(9, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let u = new c();
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
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
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
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
        let i = t.uint32(),
            r = t.pos + i,
            a,
            s;
        for (; t.pos < r; ) {
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
            t.tag(1, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.LengthDelimited)
                .string(e.heroArtLocalizedVideoLinksDarkTheme[n])
                .join();
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme))
            t.tag(2, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.LengthDelimited)
                .string(e.heroArtLocalizedVideoLinksLightTheme[n])
                .join();
        for (let n of Object.keys(e.heroArtVideoSubtitleLinks))
            t.tag(3, i.O0.LengthDelimited)
                .fork()
                .tag(1, i.O0.LengthDelimited)
                .string(n)
                .tag(2, i.O0.LengthDelimited)
                .string(e.heroArtVideoSubtitleLinks[n])
                .join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let E = new _();
class A extends s.G {
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let l = e.skip(r);
                    !1 !== s && (!0 === s ? i.f$.onRead : s)(this.typeName, a, t, r, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.link && t.tag(1, i.O0.LengthDelimited).string(e.link),
            "" !== e.locale && t.tag(2, i.O0.LengthDelimited).string(e.locale),
            !1 !== e.isDefault && t.tag(3, i.O0.Varint).bool(e.isDefault);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new A();
class I extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.Disclaimer", [
            { no: 1, name: "disclaimer_text", kind: "scalar", T: 9 },
            { no: 2, name: "disclaimer_help_article", kind: "message", T: () => o.O },
            { no: 3, name: "disclaimer_text_localized", kind: "message", T: () => d.X },
        ]);
    }
    create(e) {
        let t = { disclaimerText: "" };
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
                    a.disclaimerText = e.string();
                    break;
                case 2:
                    a.disclaimerHelpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.disclaimerHelpArticle);
                    break;
                case 3:
                    a.disclaimerTextLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.disclaimerTextLocalized);
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
        "" !== e.disclaimerText && t.tag(1, i.O0.LengthDelimited).string(e.disclaimerText),
            e.disclaimerHelpArticle &&
                o.O.internalBinaryWrite(e.disclaimerHelpArticle, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.disclaimerTextLocalized &&
                d.X.internalBinaryWrite(e.disclaimerTextLocalized, t.tag(3, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let f = new I();
class p extends s.G {
    constructor() {
        super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [
            { no: 1, name: "header", kind: "scalar", T: 9 },
            { no: 2, name: "subheader", kind: "scalar", T: 9 },
            { no: 3, name: "video_link", kind: "scalar", T: 9 },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 },
            { no: 5, name: "feature_cards", kind: "message", repeat: 1, T: () => u },
            { no: 6, name: "button", kind: "message", T: () => l.$ },
            { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 },
            { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 },
            { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 },
            { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 },
            { no: 13, name: "hero_art_video_subtitles", kind: "message", repeat: 1, T: () => h },
            { no: 14, name: "storage", kind: "message", T: () => E },
            { no: 15, name: "disclaimer", kind: "message", T: () => f },
            { no: 18, name: "help_article", kind: "message", T: () => o.O },
            { no: 19, name: "header_localized", kind: "message", T: () => d.X },
            { no: 20, name: "subheader_localized", kind: "message", T: () => d.X },
            { no: 21, name: "modal_top_pill_localized", kind: "message", T: () => d.X },
            { no: 7, name: "dismiss_key", kind: "scalar", T: 9 },
            { no: 12, name: "body", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = {
            header: "",
            subheader: "",
            videoLink: "",
            helpArticleId: "",
            featureCards: [],
            heroArtVideoLinkLightTheme: "",
            heroArtImageLinkDarkTheme: "",
            heroArtImageLinkLightTheme: "",
            modalTopPill: "",
            heroArtVideoSubtitles: [],
            dismissKey: "",
            body: "",
        };
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
                    a.button = l.$.internalBinaryRead(e, e.uint32(), n, a.button);
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
                case 13:
                    a.heroArtVideoSubtitles.push(h.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    a.storage = E.internalBinaryRead(e, e.uint32(), n, a.storage);
                    break;
                case 15:
                    a.disclaimer = f.internalBinaryRead(e, e.uint32(), n, a.disclaimer);
                    break;
                case 18:
                    a.helpArticle = o.O.internalBinaryRead(e, e.uint32(), n, a.helpArticle);
                    break;
                case 19:
                    a.headerLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.headerLocalized);
                    break;
                case 20:
                    a.subheaderLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.subheaderLocalized);
                    break;
                case 21:
                    a.modalTopPillLocalized = d.X.internalBinaryRead(e, e.uint32(), n, a.modalTopPillLocalized);
                    break;
                case 7:
                    a.dismissKey = e.string();
                    break;
                case 12:
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
        "" !== e.header && t.tag(1, i.O0.LengthDelimited).string(e.header),
            "" !== e.subheader && t.tag(2, i.O0.LengthDelimited).string(e.subheader),
            "" !== e.videoLink && t.tag(3, i.O0.LengthDelimited).string(e.videoLink),
            "" !== e.helpArticleId && t.tag(4, i.O0.LengthDelimited).string(e.helpArticleId);
        for (let r = 0; r < e.featureCards.length; r++)
            u.internalBinaryWrite(e.featureCards[r], t.tag(5, i.O0.LengthDelimited).fork(), n).join();
        e.button && l.$.internalBinaryWrite(e.button, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.heroArtVideoLinkLightTheme && t.tag(8, i.O0.LengthDelimited).string(e.heroArtVideoLinkLightTheme),
            "" !== e.heroArtImageLinkDarkTheme && t.tag(9, i.O0.LengthDelimited).string(e.heroArtImageLinkDarkTheme),
            "" !== e.heroArtImageLinkLightTheme && t.tag(10, i.O0.LengthDelimited).string(e.heroArtImageLinkLightTheme),
            "" !== e.modalTopPill && t.tag(11, i.O0.LengthDelimited).string(e.modalTopPill);
        for (let r = 0; r < e.heroArtVideoSubtitles.length; r++)
            h.internalBinaryWrite(e.heroArtVideoSubtitles[r], t.tag(13, i.O0.LengthDelimited).fork(), n).join();
        e.storage && E.internalBinaryWrite(e.storage, t.tag(14, i.O0.LengthDelimited).fork(), n).join(),
            e.disclaimer && f.internalBinaryWrite(e.disclaimer, t.tag(15, i.O0.LengthDelimited).fork(), n).join(),
            e.helpArticle && o.O.internalBinaryWrite(e.helpArticle, t.tag(18, i.O0.LengthDelimited).fork(), n).join(),
            e.headerLocalized &&
                d.X.internalBinaryWrite(e.headerLocalized, t.tag(19, i.O0.LengthDelimited).fork(), n).join(),
            e.subheaderLocalized &&
                d.X.internalBinaryWrite(e.subheaderLocalized, t.tag(20, i.O0.LengthDelimited).fork(), n).join(),
            e.modalTopPillLocalized &&
                d.X.internalBinaryWrite(e.modalTopPillLocalized, t.tag(21, i.O0.LengthDelimited).fork(), n).join(),
            "" !== e.dismissKey && t.tag(7, i.O0.LengthDelimited).string(e.dismissKey),
            "" !== e.body && t.tag(12, i.O0.LengthDelimited).string(e.body);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let T = new p();
