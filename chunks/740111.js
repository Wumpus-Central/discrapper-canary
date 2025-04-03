n.d(t, {
    Wc: () => s,
    xY: () => _
}),
    n(611060),
    n(47120),
    n(411104),
    n(653041);
var r,
    i = n(230367),
    l = n(320215),
    a = n(240773),
    o = n(495852),
    s = (((r = {})[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.OPEN_MARKETING_PAGE = 1)] = 'OPEN_MARKETING_PAGE'), (r[(r.OPEN_TIER_2_PAYMENT_MODAL = 2)] = 'OPEN_TIER_2_PAYMENT_MODAL'), (r[(r.OPEN_TIER_1_PAYMENT_MODAL = 3)] = 'OPEN_TIER_1_PAYMENT_MODAL'), (r[(r.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER = 4)] = 'OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER'), r);
class c extends o.C {
    create(e) {
        let t = {
            header: '',
            pill: '',
            body: '',
            imageLink: '',
            imageLinkLightTheme: ''
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    l.header = e.string();
                    break;
                case 2:
                    l.pill = e.string();
                    break;
                case 3:
                    l.body = e.string();
                    break;
                case 4:
                    l.imageLink = e.string();
                    break;
                case 5:
                    l.imageLinkLightTheme = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, i.TD.LengthDelimited).string(e.header), '' !== e.pill && t.tag(2, i.TD.LengthDelimited).string(e.pill), '' !== e.body && t.tag(3, i.TD.LengthDelimited).string(e.body), '' !== e.imageLink && t.tag(4, i.TD.LengthDelimited).string(e.imageLink), '' !== e.imageLinkLightTheme && t.tag(5, i.TD.LengthDelimited).string(e.imageLinkLightTheme);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.FeatureCard', [
            {
                no: 1,
                name: 'header',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'pill',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'body',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'image_link',
                kind: 'scalar',
                T: 9
            },
            {
                no: 5,
                name: 'image_link_light_theme',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let u = new c();
class d extends o.C {
    create(e) {
        let t = {
            copy: '',
            buttonAction: 0
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    l.copy = e.string();
                    break;
                case 2:
                    l.buttonAction = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.copy && t.tag(1, i.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, i.TD.Varint).int32(e.buttonAction);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.SubscriptionButton', [
            {
                no: 1,
                name: 'copy',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'button_action',
                kind: 'enum',
                T: () => ['discord_protos.premium_marketing.v1.ButtonAction', s, 'BUTTON_ACTION_']
            }
        ]);
    }
}
let p = new d();
class h extends o.C {
    create(e) {
        let t = {
            heroArtLocalizedVideoLinksDarkTheme: {},
            heroArtLocalizedVideoLinksLightTheme: {},
            heroArtVideoSubtitleLinks: {}
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(l.heroArtLocalizedVideoLinksDarkTheme, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(l.heroArtLocalizedVideoLinksLightTheme, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(l.heroArtVideoSubtitleLinks, e, n);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            l,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    l = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme');
            }
        }
        e[null != l ? l : ''] = null != a ? a : '';
    }
    binaryReadMap2(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            l,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    l = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme');
            }
        }
        e[null != l ? l : ''] = null != a ? a : '';
    }
    binaryReadMap3(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            l,
            a;
        for (; t.pos < i; ) {
            let [e, n] = t.tag();
            switch (e) {
                case 1:
                    l = t.string();
                    break;
                case 2:
                    a = t.string();
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links');
            }
        }
        e[null != l ? l : ''] = null != a ? a : '';
    }
    internalBinaryWrite(e, t, n) {
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksDarkTheme)) t.tag(1, i.TD.LengthDelimited).fork().tag(1, i.TD.LengthDelimited).string(n).tag(2, i.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksDarkTheme[n]).join();
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme)) t.tag(2, i.TD.LengthDelimited).fork().tag(1, i.TD.LengthDelimited).string(n).tag(2, i.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksLightTheme[n]).join();
        for (let n of Object.keys(e.heroArtVideoSubtitleLinks)) t.tag(3, i.TD.LengthDelimited).fork().tag(1, i.TD.LengthDelimited).string(n).tag(2, i.TD.LengthDelimited).string(e.heroArtVideoSubtitleLinks[n]).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.Variant1Storage', [
            {
                no: 1,
                name: 'hero_art_localized_video_links_dark_theme',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'scalar',
                    T: 9
                }
            },
            {
                no: 2,
                name: 'hero_art_localized_video_links_light_theme',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'scalar',
                    T: 9
                }
            },
            {
                no: 3,
                name: 'hero_art_video_subtitle_links',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'scalar',
                    T: 9
                }
            }
        ]);
    }
}
let f = new h();
class g extends o.C {
    create(e) {
        let t = {
            link: '',
            locale: '',
            isDefault: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    l.link = e.string();
                    break;
                case 2:
                    l.locale = e.string();
                    break;
                case 3:
                    l.isDefault = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.link && t.tag(1, i.TD.LengthDelimited).string(e.link), '' !== e.locale && t.tag(2, i.TD.LengthDelimited).string(e.locale), !1 !== e.isDefault && t.tag(3, i.TD.Varint).bool(e.isDefault);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.Subtitle', [
            {
                no: 1,
                name: 'link',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'locale',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'is_default',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let m = new g();
class b extends o.C {
    create(e) {
        let t = {
            header: '',
            subheader: '',
            videoLink: '',
            helpArticleId: '',
            featureCards: [],
            dismissKey: '',
            heroArtVideoLinkLightTheme: '',
            heroArtImageLinkDarkTheme: '',
            heroArtImageLinkLightTheme: '',
            modalTopPill: '',
            body: '',
            heroArtVideoSubtitles: []
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let l = null != r ? r : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    l.header = e.string();
                    break;
                case 2:
                    l.subheader = e.string();
                    break;
                case 3:
                    l.videoLink = e.string();
                    break;
                case 4:
                    l.helpArticleId = e.string();
                    break;
                case 5:
                    l.featureCards.push(u.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 6:
                    l.button = p.internalBinaryRead(e, e.uint32(), n, l.button);
                    break;
                case 7:
                    l.dismissKey = e.string();
                    break;
                case 8:
                    l.heroArtVideoLinkLightTheme = e.string();
                    break;
                case 9:
                    l.heroArtImageLinkDarkTheme = e.string();
                    break;
                case 10:
                    l.heroArtImageLinkLightTheme = e.string();
                    break;
                case 11:
                    l.modalTopPill = e.string();
                    break;
                case 12:
                    l.body = e.string();
                    break;
                case 13:
                    l.heroArtVideoSubtitles.push(m.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    l.storage = f.internalBinaryRead(e, e.uint32(), n, l.storage);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.z.onRead : a)(this.typeName, l, t, r, o);
            }
        }
        return l;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, i.TD.LengthDelimited).string(e.header), '' !== e.subheader && t.tag(2, i.TD.LengthDelimited).string(e.subheader), '' !== e.videoLink && t.tag(3, i.TD.LengthDelimited).string(e.videoLink), '' !== e.helpArticleId && t.tag(4, i.TD.LengthDelimited).string(e.helpArticleId);
        for (let r = 0; r < e.featureCards.length; r++) u.internalBinaryWrite(e.featureCards[r], t.tag(5, i.TD.LengthDelimited).fork(), n).join();
        e.button && p.internalBinaryWrite(e.button, t.tag(6, i.TD.LengthDelimited).fork(), n).join(), '' !== e.dismissKey && t.tag(7, i.TD.LengthDelimited).string(e.dismissKey), '' !== e.heroArtVideoLinkLightTheme && t.tag(8, i.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), '' !== e.heroArtImageLinkDarkTheme && t.tag(9, i.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), '' !== e.heroArtImageLinkLightTheme && t.tag(10, i.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), '' !== e.modalTopPill && t.tag(11, i.TD.LengthDelimited).string(e.modalTopPill), '' !== e.body && t.tag(12, i.TD.LengthDelimited).string(e.body);
        for (let r = 0; r < e.heroArtVideoSubtitles.length; r++) m.internalBinaryWrite(e.heroArtVideoSubtitles[r], t.tag(13, i.TD.LengthDelimited).fork(), n).join();
        e.storage && f.internalBinaryWrite(e.storage, t.tag(14, i.TD.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties', [
            {
                no: 1,
                name: 'header',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'subheader',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'video_link',
                kind: 'scalar',
                T: 9
            },
            {
                no: 4,
                name: 'help_article_id',
                kind: 'scalar',
                T: 9
            },
            {
                no: 5,
                name: 'feature_cards',
                kind: 'message',
                repeat: 1,
                T: () => u
            },
            {
                no: 6,
                name: 'button',
                kind: 'message',
                T: () => p
            },
            {
                no: 7,
                name: 'dismiss_key',
                kind: 'scalar',
                T: 9
            },
            {
                no: 8,
                name: 'hero_art_video_link_light_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 9,
                name: 'hero_art_image_link_dark_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 10,
                name: 'hero_art_image_link_light_theme',
                kind: 'scalar',
                T: 9
            },
            {
                no: 11,
                name: 'modal_top_pill',
                kind: 'scalar',
                T: 9
            },
            {
                no: 12,
                name: 'body',
                kind: 'scalar',
                T: 9
            },
            {
                no: 13,
                name: 'hero_art_video_subtitles',
                kind: 'message',
                repeat: 1,
                T: () => m
            },
            {
                no: 14,
                name: 'storage',
                kind: 'message',
                T: () => f
            }
        ]);
    }
}
let _ = new b();
