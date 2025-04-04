n.d(t, {
    EO: () => l,
    JM: () => p,
    Lt: () => m,
    ND: () => y,
    PL: () => O,
    UY: () => x,
    YI: () => S,
    _F: () => N,
    h_: () => C,
    ji: () => u,
    lG: () => k,
    ls: () => E,
    pL: () => D,
    wK: () => f
}),
    n(611060),
    n(47120),
    n(411104),
    n(653041);
var r = n(230367),
    i = n(320215),
    o = n(240773),
    a = n(495852),
    s = n(397696),
    l = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.IMAGE = 1)] = 'IMAGE'), (e[(e.VIDEO = 2)] = 'VIDEO'), e;
    })({});
class c extends a.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    o.versions = s.L.internalBinaryRead(e, e.uint32(), n, o.versions);
                    break;
                case 2:
                    o.favoriteGifs = f.internalBinaryRead(e, e.uint32(), n, o.favoriteGifs);
                    break;
                case 3:
                    o.favoriteStickers = m.internalBinaryRead(e, e.uint32(), n, o.favoriteStickers);
                    break;
                case 4:
                    o.stickerFrecency = E.internalBinaryRead(e, e.uint32(), n, o.stickerFrecency);
                    break;
                case 5:
                    o.favoriteEmojis = y.internalBinaryRead(e, e.uint32(), n, o.favoriteEmojis);
                    break;
                case 6:
                    o.emojiFrecency = O.internalBinaryRead(e, e.uint32(), n, o.emojiFrecency);
                    break;
                case 7:
                    o.applicationCommandFrecency = S.internalBinaryRead(e, e.uint32(), n, o.applicationCommandFrecency);
                    break;
                case 8:
                    o.favoriteSoundboardSounds = C.internalBinaryRead(e, e.uint32(), n, o.favoriteSoundboardSounds);
                    break;
                case 9:
                    o.applicationFrecency = x.internalBinaryRead(e, e.uint32(), n, o.applicationFrecency);
                    break;
                case 10:
                    o.heardSoundFrecency = P.internalBinaryRead(e, e.uint32(), n, o.heardSoundFrecency);
                    break;
                case 11:
                    o.playedSoundFrecency = D.internalBinaryRead(e, e.uint32(), n, o.playedSoundFrecency);
                    break;
                case 12:
                    o.guildAndChannelFrecency = k.internalBinaryRead(e, e.uint32(), n, o.guildAndChannelFrecency);
                    break;
                case 13:
                    o.emojiReactionFrecency = O.internalBinaryRead(e, e.uint32(), n, o.emojiReactionFrecency);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, l);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && s.L.internalBinaryWrite(e.versions, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.favoriteGifs && f.internalBinaryWrite(e.favoriteGifs, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.favoriteStickers && m.internalBinaryWrite(e.favoriteStickers, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), e.stickerFrecency && E.internalBinaryWrite(e.stickerFrecency, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), e.favoriteEmojis && y.internalBinaryWrite(e.favoriteEmojis, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), e.emojiFrecency && O.internalBinaryWrite(e.emojiFrecency, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && S.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && C.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, r.TD.LengthDelimited).fork(), n).join(), e.applicationFrecency && x.internalBinaryWrite(e.applicationFrecency, t.tag(9, r.TD.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && P.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, r.TD.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && D.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, r.TD.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && k.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, r.TD.LengthDelimited).fork(), n).join(), e.emojiReactionFrecency && O.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FrecencyUserSettings', [
            {
                no: 1,
                name: 'versions',
                kind: 'message',
                T: () => s.L
            },
            {
                no: 2,
                name: 'favorite_gifs',
                kind: 'message',
                T: () => f
            },
            {
                no: 3,
                name: 'favorite_stickers',
                kind: 'message',
                T: () => m
            },
            {
                no: 4,
                name: 'sticker_frecency',
                kind: 'message',
                T: () => E
            },
            {
                no: 5,
                name: 'favorite_emojis',
                kind: 'message',
                T: () => y
            },
            {
                no: 6,
                name: 'emoji_frecency',
                kind: 'message',
                T: () => O
            },
            {
                no: 7,
                name: 'application_command_frecency',
                kind: 'message',
                T: () => S
            },
            {
                no: 8,
                name: 'favorite_soundboard_sounds',
                kind: 'message',
                T: () => C
            },
            {
                no: 9,
                name: 'application_frecency',
                kind: 'message',
                T: () => x
            },
            {
                no: 10,
                name: 'heard_sound_frecency',
                kind: 'message',
                T: () => P
            },
            {
                no: 11,
                name: 'played_sound_frecency',
                kind: 'message',
                T: () => D
            },
            {
                no: 12,
                name: 'guild_and_channel_frecency',
                kind: 'message',
                T: () => k
            },
            {
                no: 13,
                name: 'emoji_reaction_frecency',
                kind: 'message',
                T: () => O
            }
        ]);
    }
}
let u = new c();
class d extends a.C {
    create(e) {
        let t = {
            gifs: {},
            hideTooltip: !1
        };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(o.gifs, e, n);
                    break;
                case 2:
                    o.hideTooltip = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = p.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs');
            }
        }
        e[null != o ? o : ''] = null != a ? a : p.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.gifs)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), p.internalBinaryWrite(e.gifs[i], t, n), t.join().join();
        !1 !== e.hideTooltip && t.tag(2, r.TD.Varint).bool(e.hideTooltip);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteGIFs', [
            {
                no: 1,
                name: 'gifs',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => p
                }
            },
            {
                no: 2,
                name: 'hide_tooltip',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let f = new d();
class _ extends a.C {
    create(e) {
        let t = {
            format: 0,
            src: '',
            width: 0,
            height: 0,
            order: 0
        };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    o.format = e.int32();
                    break;
                case 2:
                    o.src = e.string();
                    break;
                case 3:
                    o.width = e.uint32();
                    break;
                case 4:
                    o.height = e.uint32();
                    break;
                case 5:
                    o.order = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.format && t.tag(1, r.TD.Varint).int32(e.format), '' !== e.src && t.tag(2, r.TD.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, r.TD.Varint).uint32(e.width), 0 !== e.height && t.tag(4, r.TD.Varint).uint32(e.height), 0 !== e.order && t.tag(5, r.TD.Varint).uint32(e.order);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteGIF', [
            {
                no: 1,
                name: 'format',
                kind: 'enum',
                T: () => ['discord_protos.discord_users.v1.GIFType', l]
            },
            {
                no: 2,
                name: 'src',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'width',
                kind: 'scalar',
                T: 13
            },
            {
                no: 4,
                name: 'height',
                kind: 'scalar',
                T: 13
            },
            {
                no: 5,
                name: 'order',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let p = new _();
class h extends a.C {
    create(e) {
        let t = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) o.stickerIds.push(e.fixed64().toString());
                else o.stickerIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        if (e.stickerIds.length) {
            t.tag(1, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteStickers', [
            {
                no: 1,
                name: 'sticker_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let m = new h();
class g extends a.C {
    create(e) {
        let t = { stickers: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.stickers, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.fixed64().toString();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers');
            }
        }
        e[null != o ? o : '0'] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.stickers)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.Bit64).fixed64(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.stickers[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.StickerFrecency', [
            {
                no: 1,
                name: 'stickers',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let E = new g();
class b extends a.C {
    create(e) {
        let t = { emojis: [] };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) o.emojis.push(e.string());
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.emojis[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteEmojis', [
            {
                no: 1,
                name: 'emojis',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let y = new b();
class v extends a.C {
    create(e) {
        let t = { emojis: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.emojis, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis');
            }
        }
        e[null != o ? o : ''] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.emojis)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.emojis[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.EmojiFrecency', [
            {
                no: 1,
                name: 'emojis',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let O = new v();
class I extends a.C {
    create(e) {
        let t = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.applicationCommands, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands');
            }
        }
        e[null != o ? o : ''] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applicationCommands)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.applicationCommands[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ApplicationCommandFrecency', [
            {
                no: 1,
                name: 'application_commands',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let S = new I();
class T extends a.C {
    create(e) {
        let t = {
            totalUses: 0,
            recentUses: [],
            frecency: 0,
            score: 0
        };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    o.totalUses = e.uint32();
                    break;
                case 2:
                    if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) o.recentUses.push(e.uint64().toString());
                    else o.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    o.frecency = e.int32();
                    break;
                case 4:
                    o.score = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        if ((0 !== e.totalUses && t.tag(1, r.TD.Varint).uint32(e.totalUses), e.recentUses.length)) {
            t.tag(2, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
            t.join();
        }
        0 !== e.frecency && t.tag(3, r.TD.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, r.TD.Varint).int32(e.score);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FrecencyItem', [
            {
                no: 1,
                name: 'total_uses',
                kind: 'scalar',
                T: 13
            },
            {
                no: 2,
                name: 'recent_uses',
                kind: 'scalar',
                repeat: 1,
                T: 4
            },
            {
                no: 3,
                name: 'frecency',
                kind: 'scalar',
                T: 5
            },
            {
                no: 4,
                name: 'score',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let N = new T();
class A extends a.C {
    create(e) {
        let t = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) o.soundIds.push(e.fixed64().toString());
                else o.soundIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    internalBinaryWrite(e, t, n) {
        if (e.soundIds.length) {
            t.tag(1, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteSoundboardSounds', [
            {
                no: 1,
                name: 'sound_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let C = new A();
class R extends a.C {
    create(e) {
        let t = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.heardSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds');
            }
        }
        e[null != o ? o : ''] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.heardSounds)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.heardSounds[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.HeardSoundFrecency', [
            {
                no: 1,
                name: 'heard_sounds',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let P = new R();
class w extends a.C {
    create(e) {
        let t = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.playedSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds');
            }
        }
        e[null != o ? o : ''] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.playedSounds)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.playedSounds[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.PlayedSoundFrecency', [
            {
                no: 1,
                name: 'played_sounds',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let D = new w();
class L extends a.C {
    create(e) {
        let t = { applications: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.applications, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.string();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications');
            }
        }
        e[null != o ? o : ''] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applications)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.LengthDelimited).string(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.applications[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.ApplicationFrecency', [
            {
                no: 1,
                name: 'applications',
                kind: 'map',
                K: 9,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let x = new L();
class M extends a.C {
    create(e) {
        let t = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(t, o.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let o = null != i ? i : this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(o.guildAndChannels, e, n);
            else {
                let a = n.readUnknownField;
                if ('throw' === a) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== a && (!0 === a ? r.z.onRead : a)(this.typeName, o, t, i, s);
            }
        }
        return o;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            o,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    o = t.fixed64().toString();
                    break;
                case 2:
                    a = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels');
            }
        }
        e[null != o ? o : '0'] = null != a ? a : N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guildAndChannels)) t.tag(1, r.TD.LengthDelimited).fork().tag(1, r.TD.Bit64).fixed64(i), t.tag(2, r.TD.LengthDelimited).fork(), N.internalBinaryWrite(e.guildAndChannels[i], t, n), t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super('discord_protos.discord_users.v1.GuildAndChannelFrecency', [
            {
                no: 1,
                name: 'guild_and_channels',
                kind: 'map',
                K: 6,
                V: {
                    kind: 'message',
                    T: () => N
                }
            }
        ]);
    }
}
let k = new M();
