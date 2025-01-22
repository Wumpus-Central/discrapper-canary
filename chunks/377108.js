r.d(n, {
    EO: function () {
        return i;
    },
    JM: function () {
        return E;
    },
    Lt: function () {
        return y;
    },
    ND: function () {
        return S;
    },
    PL: function () {
        return C;
    },
    UY: function () {
        return B;
    },
    YI: function () {
        return R;
    },
    _F: function () {
        return D;
    },
    h_: function () {
        return L;
    },
    ji: function () {
        return h;
    },
    lG: function () {
        return Z;
    },
    ls: function () {
        return I;
    },
    pL: function () {
        return k;
    },
    wK: function () {
        return m;
    }
});
var i,
    a = r(47120);
var o = r(411104);
var s = r(653041);
var l = r(230367),
    u = r(320215),
    c = r(240773),
    d = r(495852),
    f = r(397696);
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.IMAGE = 1)] = 'IMAGE'), (e[(e.VIDEO = 2)] = 'VIDEO');
})(i || (i = {}));
class p extends d.C {
    create(e) {
        let n = {};
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.versions = f.L.internalBinaryRead(e, e.uint32(), r, a.versions);
                    break;
                case 2:
                    a.favoriteGifs = m.internalBinaryRead(e, e.uint32(), r, a.favoriteGifs);
                    break;
                case 3:
                    a.favoriteStickers = y.internalBinaryRead(e, e.uint32(), r, a.favoriteStickers);
                    break;
                case 4:
                    a.stickerFrecency = I.internalBinaryRead(e, e.uint32(), r, a.stickerFrecency);
                    break;
                case 5:
                    a.favoriteEmojis = S.internalBinaryRead(e, e.uint32(), r, a.favoriteEmojis);
                    break;
                case 6:
                    a.emojiFrecency = C.internalBinaryRead(e, e.uint32(), r, a.emojiFrecency);
                    break;
                case 7:
                    a.applicationCommandFrecency = R.internalBinaryRead(e, e.uint32(), r, a.applicationCommandFrecency);
                    break;
                case 8:
                    a.favoriteSoundboardSounds = L.internalBinaryRead(e, e.uint32(), r, a.favoriteSoundboardSounds);
                    break;
                case 9:
                    a.applicationFrecency = B.internalBinaryRead(e, e.uint32(), r, a.applicationFrecency);
                    break;
                case 10:
                    a.heardSoundFrecency = P.internalBinaryRead(e, e.uint32(), r, a.heardSoundFrecency);
                    break;
                case 11:
                    a.playedSoundFrecency = k.internalBinaryRead(e, e.uint32(), r, a.playedSoundFrecency);
                    break;
                case 12:
                    a.guildAndChannelFrecency = Z.internalBinaryRead(e, e.uint32(), r, a.guildAndChannelFrecency);
                    break;
                case 13:
                    a.emojiReactionFrecency = C.internalBinaryRead(e, e.uint32(), r, a.emojiReactionFrecency);
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        e.versions && f.L.internalBinaryWrite(e.versions, n.tag(1, l.TD.LengthDelimited).fork(), r).join(), e.favoriteGifs && m.internalBinaryWrite(e.favoriteGifs, n.tag(2, l.TD.LengthDelimited).fork(), r).join(), e.favoriteStickers && y.internalBinaryWrite(e.favoriteStickers, n.tag(3, l.TD.LengthDelimited).fork(), r).join(), e.stickerFrecency && I.internalBinaryWrite(e.stickerFrecency, n.tag(4, l.TD.LengthDelimited).fork(), r).join(), e.favoriteEmojis && S.internalBinaryWrite(e.favoriteEmojis, n.tag(5, l.TD.LengthDelimited).fork(), r).join(), e.emojiFrecency && C.internalBinaryWrite(e.emojiFrecency, n.tag(6, l.TD.LengthDelimited).fork(), r).join(), e.applicationCommandFrecency && R.internalBinaryWrite(e.applicationCommandFrecency, n.tag(7, l.TD.LengthDelimited).fork(), r).join(), e.favoriteSoundboardSounds && L.internalBinaryWrite(e.favoriteSoundboardSounds, n.tag(8, l.TD.LengthDelimited).fork(), r).join(), e.applicationFrecency && B.internalBinaryWrite(e.applicationFrecency, n.tag(9, l.TD.LengthDelimited).fork(), r).join(), e.heardSoundFrecency && P.internalBinaryWrite(e.heardSoundFrecency, n.tag(10, l.TD.LengthDelimited).fork(), r).join(), e.playedSoundFrecency && k.internalBinaryWrite(e.playedSoundFrecency, n.tag(11, l.TD.LengthDelimited).fork(), r).join(), e.guildAndChannelFrecency && Z.internalBinaryWrite(e.guildAndChannelFrecency, n.tag(12, l.TD.LengthDelimited).fork(), r).join(), e.emojiReactionFrecency && C.internalBinaryWrite(e.emojiReactionFrecency, n.tag(13, l.TD.LengthDelimited).fork(), r).join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FrecencyUserSettings', [
            {
                no: 1,
                name: 'versions',
                kind: 'message',
                T: () => f.L
            },
            {
                no: 2,
                name: 'favorite_gifs',
                kind: 'message',
                T: () => m
            },
            {
                no: 3,
                name: 'favorite_stickers',
                kind: 'message',
                T: () => y
            },
            {
                no: 4,
                name: 'sticker_frecency',
                kind: 'message',
                T: () => I
            },
            {
                no: 5,
                name: 'favorite_emojis',
                kind: 'message',
                T: () => S
            },
            {
                no: 6,
                name: 'emoji_frecency',
                kind: 'message',
                T: () => C
            },
            {
                no: 7,
                name: 'application_command_frecency',
                kind: 'message',
                T: () => R
            },
            {
                no: 8,
                name: 'favorite_soundboard_sounds',
                kind: 'message',
                T: () => L
            },
            {
                no: 9,
                name: 'application_frecency',
                kind: 'message',
                T: () => B
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
                T: () => k
            },
            {
                no: 12,
                name: 'guild_and_channel_frecency',
                kind: 'message',
                T: () => Z
            },
            {
                no: 13,
                name: 'emoji_reaction_frecency',
                kind: 'message',
                T: () => C
            }
        ]);
    }
}
let h = new p();
class _ extends d.C {
    create(e) {
        let n = {
            gifs: {},
            hideTooltip: !1
        };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    this.binaryReadMap1(a.gifs, e, r);
                    break;
                case 2:
                    a.hideTooltip = e.bool();
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = E.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs');
            }
        }
        e[null != o ? o : ''] = null != s ? s : E.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.gifs)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), E.internalBinaryWrite(e.gifs[i], n, r), n.join().join();
        !1 !== e.hideTooltip && n.tag(2, l.TD.Varint).bool(e.hideTooltip);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => E
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
let m = new _();
class g extends d.C {
    create(e) {
        let n = {
            format: 0,
            src: '',
            width: 0,
            height: 0,
            order: 0
        };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.format = e.int32();
                    break;
                case 2:
                    a.src = e.string();
                    break;
                case 3:
                    a.width = e.uint32();
                    break;
                case 4:
                    a.height = e.uint32();
                    break;
                case 5:
                    a.order = e.uint32();
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        0 !== e.format && n.tag(1, l.TD.Varint).int32(e.format), '' !== e.src && n.tag(2, l.TD.LengthDelimited).string(e.src), 0 !== e.width && n.tag(3, l.TD.Varint).uint32(e.width), 0 !== e.height && n.tag(4, l.TD.Varint).uint32(e.height), 0 !== e.order && n.tag(5, l.TD.Varint).uint32(e.order);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('discord_protos.discord_users.v1.FavoriteGIF', [
            {
                no: 1,
                name: 'format',
                kind: 'enum',
                T: () => ['discord_protos.discord_users.v1.GIFType', i]
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
let E = new g();
class v extends d.C {
    create(e) {
        let n = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) {
                if (i === l.TD.LengthDelimited) for (let n = e.int32() + e.pos; e.pos < n; ) a.stickerIds.push(e.fixed64().toString());
                else a.stickerIds.push(e.fixed64().toString());
            } else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        if (e.stickerIds.length) {
            n.tag(1, l.TD.LengthDelimited).fork();
            for (let r = 0; r < e.stickerIds.length; r++) n.fixed64(e.stickerIds[r]);
            n.join();
        }
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
let y = new v();
class b extends d.C {
    create(e) {
        let n = { stickers: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.stickers, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.fixed64().toString();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers');
            }
        }
        e[null != o ? o : '0'] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.stickers)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.Bit64).fixed64(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.stickers[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let I = new b();
class T extends d.C {
    create(e) {
        let n = { emojis: [] };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) a.emojis.push(e.string());
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        for (let r = 0; r < e.emojis.length; r++) n.tag(1, l.TD.LengthDelimited).string(e.emojis[r]);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
let S = new T();
class A extends d.C {
    create(e) {
        let n = { emojis: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.emojis, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis');
            }
        }
        e[null != o ? o : ''] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.emojis)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.emojis[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let C = new A();
class N extends d.C {
    create(e) {
        let n = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.applicationCommands, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands');
            }
        }
        e[null != o ? o : ''] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.applicationCommands)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.applicationCommands[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let R = new N();
class O extends d.C {
    create(e) {
        let n = {
            totalUses: 0,
            recentUses: [],
            frecency: 0,
            score: 0
        };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.totalUses = e.uint32();
                    break;
                case 2:
                    if (i === l.TD.LengthDelimited) for (let n = e.int32() + e.pos; e.pos < n; ) a.recentUses.push(e.uint64().toString());
                    else a.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    a.frecency = e.int32();
                    break;
                case 4:
                    a.score = e.int32();
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        if ((0 !== e.totalUses && n.tag(1, l.TD.Varint).uint32(e.totalUses), e.recentUses.length)) {
            n.tag(2, l.TD.LengthDelimited).fork();
            for (let r = 0; r < e.recentUses.length; r++) n.uint64(e.recentUses[r]);
            n.join();
        }
        0 !== e.frecency && n.tag(3, l.TD.Varint).int32(e.frecency), 0 !== e.score && n.tag(4, l.TD.Varint).int32(e.score);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
let D = new O();
class x extends d.C {
    create(e) {
        let n = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) {
                if (i === l.TD.LengthDelimited) for (let n = e.int32() + e.pos; e.pos < n; ) a.soundIds.push(e.fixed64().toString());
                else a.soundIds.push(e.fixed64().toString());
            } else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        if (e.soundIds.length) {
            n.tag(1, l.TD.LengthDelimited).fork();
            for (let r = 0; r < e.soundIds.length; r++) n.fixed64(e.soundIds[r]);
            n.join();
        }
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
let L = new x();
class w extends d.C {
    create(e) {
        let n = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.heardSounds, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds');
            }
        }
        e[null != o ? o : ''] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.heardSounds)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.heardSounds[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let P = new w();
class M extends d.C {
    create(e) {
        let n = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.playedSounds, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds');
            }
        }
        e[null != o ? o : ''] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.playedSounds)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.playedSounds[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let k = new M();
class U extends d.C {
    create(e) {
        let n = { applications: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.applications, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.string();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications');
            }
        }
        e[null != o ? o : ''] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.applications)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.LengthDelimited).string(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.applications[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let B = new U();
class G extends d.C {
    create(e) {
        let n = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(n, c.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, u.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            if (1 === n) this.binaryReadMap1(a.guildAndChannels, e, r);
            else {
                let o = r.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? l.z.onRead : o)(this.typeName, a, n, i, s);
            }
        }
        return a;
    }
    binaryReadMap1(e, n, r) {
        let i = n.uint32(),
            a = n.pos + i,
            o,
            s;
        for (; n.pos < a; ) {
            let [e, i] = n.tag();
            switch (e) {
                case 1:
                    o = n.fixed64().toString();
                    break;
                case 2:
                    s = D.internalBinaryRead(n, n.uint32(), r);
                    break;
                default:
                    throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels');
            }
        }
        e[null != o ? o : '0'] = null != s ? s : D.create();
    }
    internalBinaryWrite(e, n, r) {
        for (let i of Object.keys(e.guildAndChannels)) n.tag(1, l.TD.LengthDelimited).fork().tag(1, l.TD.Bit64).fixed64(i), n.tag(2, l.TD.LengthDelimited).fork(), D.internalBinaryWrite(e.guildAndChannels[i], n, r), n.join().join();
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? l.z.onWrite : i)(this.typeName, e, n), n;
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
                    T: () => D
                }
            }
        ]);
    }
}
let Z = new G();
