n.d(t, {
    Wc: function () {
        return i;
    },
    xY: function () {
        return E;
    }
}),
    n(47120),
    n(411104),
    n(653041);
var i,
    r,
    l = n(230367),
    a = n(320215),
    s = n(240773),
    o = n(495852);
((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (r[(r.OPEN_MARKETING_PAGE = 1)] = 'OPEN_MARKETING_PAGE'), (r[(r.OPEN_TIER_2_PAYMENT_MODAL = 2)] = 'OPEN_TIER_2_PAYMENT_MODAL');
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
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.pill = e.string();
                    break;
                case 3:
                    r.body = e.string();
                    break;
                case 4:
                    r.imageLink = e.string();
                    break;
                case 5:
                    r.imageLinkLightTheme = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, l.TD.LengthDelimited).string(e.header), '' !== e.pill && t.tag(2, l.TD.LengthDelimited).string(e.pill), '' !== e.body && t.tag(3, l.TD.LengthDelimited).string(e.body), '' !== e.imageLink && t.tag(4, l.TD.LengthDelimited).string(e.imageLink), '' !== e.imageLinkLightTheme && t.tag(5, l.TD.LengthDelimited).string(e.imageLinkLightTheme);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, t), t;
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
let d = new c();
class u extends o.C {
    create(e) {
        let t = {
            copy: '',
            buttonAction: 0
        };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.copy = e.string();
                    break;
                case 2:
                    r.buttonAction = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.copy && t.tag(1, l.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, l.TD.Varint).int32(e.buttonAction);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, t), t;
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
                T: () => ['discord_protos.premium_marketing.v1.ButtonAction', i, 'BUTTON_ACTION_']
            }
        ]);
    }
}
let h = new u();
class m extends o.C {
    create(e) {
        let t = {
            heroArtLocalizedVideoLinksDarkTheme: {},
            heroArtLocalizedVideoLinksLightTheme: {},
            heroArtVideoSubtitleLinks: {}
        };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.heroArtLocalizedVideoLinksDarkTheme, e, n);
                    break;
                case 2:
                    this.binaryReadMap2(r.heroArtLocalizedVideoLinksLightTheme, e, n);
                    break;
                case 3:
                    this.binaryReadMap3(r.heroArtVideoSubtitleLinks, e, n);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            l,
            a;
        for (; t.pos < r; ) {
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
        let i = t.uint32(),
            r = t.pos + i,
            l,
            a;
        for (; t.pos < r; ) {
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
        let i = t.uint32(),
            r = t.pos + i,
            l,
            a;
        for (; t.pos < r; ) {
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
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksDarkTheme)) t.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(n).tag(2, l.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksDarkTheme[n]).join();
        for (let n of Object.keys(e.heroArtLocalizedVideoLinksLightTheme)) t.tag(2, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(n).tag(2, l.TD.LengthDelimited).string(e.heroArtLocalizedVideoLinksLightTheme[n]).join();
        for (let n of Object.keys(e.heroArtVideoSubtitleLinks)) t.tag(3, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(n).tag(2, l.TD.LengthDelimited).string(e.heroArtVideoSubtitleLinks[n]).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, t), t;
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
let p = new m();
class g extends o.C {
    create(e) {
        let t = {
            link: '',
            locale: '',
            isDefault: !1
        };
        return (
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.link = e.string();
                    break;
                case 2:
                    r.locale = e.string();
                    break;
                case 3:
                    r.isDefault = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.link && t.tag(1, l.TD.LengthDelimited).string(e.link), '' !== e.locale && t.tag(2, l.TD.LengthDelimited).string(e.locale), !1 !== e.isDefault && t.tag(3, l.TD.Varint).bool(e.isDefault);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, t), t;
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
let f = new g();
class _ extends o.C {
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
            globalThis.Object.defineProperty(t, s.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, a.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.header = e.string();
                    break;
                case 2:
                    r.subheader = e.string();
                    break;
                case 3:
                    r.videoLink = e.string();
                    break;
                case 4:
                    r.helpArticleId = e.string();
                    break;
                case 5:
                    r.featureCards.push(d.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 6:
                    r.button = h.internalBinaryRead(e, e.uint32(), n, r.button);
                    break;
                case 7:
                    r.dismissKey = e.string();
                    break;
                case 8:
                    r.heroArtVideoLinkLightTheme = e.string();
                    break;
                case 9:
                    r.heroArtImageLinkDarkTheme = e.string();
                    break;
                case 10:
                    r.heroArtImageLinkLightTheme = e.string();
                    break;
                case 11:
                    r.modalTopPill = e.string();
                    break;
                case 12:
                    r.body = e.string();
                    break;
                case 13:
                    r.heroArtVideoSubtitles.push(f.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 14:
                    r.storage = p.internalBinaryRead(e, e.uint32(), n, r.storage);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        '' !== e.header && t.tag(1, l.TD.LengthDelimited).string(e.header), '' !== e.subheader && t.tag(2, l.TD.LengthDelimited).string(e.subheader), '' !== e.videoLink && t.tag(3, l.TD.LengthDelimited).string(e.videoLink), '' !== e.helpArticleId && t.tag(4, l.TD.LengthDelimited).string(e.helpArticleId);
        for (let i = 0; i < e.featureCards.length; i++) d.internalBinaryWrite(e.featureCards[i], t.tag(5, l.TD.LengthDelimited).fork(), n).join();
        e.button && h.internalBinaryWrite(e.button, t.tag(6, l.TD.LengthDelimited).fork(), n).join(), '' !== e.dismissKey && t.tag(7, l.TD.LengthDelimited).string(e.dismissKey), '' !== e.heroArtVideoLinkLightTheme && t.tag(8, l.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), '' !== e.heroArtImageLinkDarkTheme && t.tag(9, l.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), '' !== e.heroArtImageLinkLightTheme && t.tag(10, l.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), '' !== e.modalTopPill && t.tag(11, l.TD.LengthDelimited).string(e.modalTopPill), '' !== e.body && t.tag(12, l.TD.LengthDelimited).string(e.body);
        for (let i = 0; i < e.heroArtVideoSubtitles.length; i++) f.internalBinaryWrite(e.heroArtVideoSubtitles[i], t.tag(13, l.TD.LengthDelimited).fork(), n).join();
        e.storage && p.internalBinaryWrite(e.storage, t.tag(14, l.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, t), t;
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
                T: () => d
            },
            {
                no: 6,
                name: 'button',
                kind: 'message',
                T: () => h
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
                T: () => f
            },
            {
                no: 14,
                name: 'storage',
                kind: 'message',
                T: () => p
            }
        ]);
    }
}
let E = new _();
