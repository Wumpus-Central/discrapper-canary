(n.d(t, { $9: () => u }), n(980754), n(388685), n(539854), n(415506));
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(381499),
    l = (function (e) {
        return ((e[(e.UNSPECIFIED = 0)] = 'UNSPECIFIED'), (e[(e.EXCLUDE = 1)] = 'EXCLUDE'), (e[(e.OVERRIDE = 2)] = 'OVERRIDE'), (e[(e.REQUIRE = 3)] = 'REQUIRE'), e);
    })({});
class c extends o.C {
    create(e) {
        let t = {
            type: 0,
            filters: [],
            isSunsetRule: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.type = e.int32();
                    break;
                case 2:
                    a.filters.push(p.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    a.override = _.internalBinaryRead(e, e.uint32(), n, a.override);
                    break;
                case 4:
                    a.isSunsetRule = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, r.TD.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++) p.internalBinaryWrite(e.filters[i], t.tag(2, r.TD.LengthDelimited).fork(), n).join();
        (e.override && _.internalBinaryWrite(e.override, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), !1 !== e.isSunsetRule && t.tag(4, r.TD.Varint).bool(e.isSunsetRule));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Rule', [
            {
                no: 1,
                name: 'type',
                kind: 'enum',
                T: () => ['discord_protos.discord_experimentation.v1.Rule.Type', l]
            },
            {
                no: 2,
                name: 'filters',
                kind: 'message',
                repeat: 1,
                T: () => p
            },
            {
                no: 3,
                name: 'override',
                kind: 'message',
                T: () => _
            },
            {
                no: 4,
                name: 'is_sunset_rule',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let u = new c();
class d extends o.C {
    create(e) {
        let t = { variantId: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.variantId = e.int32();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variantId && t.tag(1, r.TD.Varint).int32(e.variantId);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Override', [
            {
                no: 1,
                name: 'variant_id',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let _ = new d();
class f extends o.C {
    create(e) {
        let t = { filter: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    a.filter = {
                        oneofKind: 'clientVersion',
                        clientVersion: W.internalBinaryRead(e, e.uint32(), n, a.filter.clientVersion)
                    };
                    break;
                case 3:
                    a.filter = {
                        oneofKind: 'clientOs',
                        clientOs: k.internalBinaryRead(e, e.uint32(), n, a.filter.clientOs)
                    };
                    break;
                case 4:
                    a.filter = {
                        oneofKind: 'staff',
                        staff: m.internalBinaryRead(e, e.uint32(), n, a.filter.staff)
                    };
                    break;
                case 5:
                    a.filter = {
                        oneofKind: 'userInGuild',
                        userInGuild: E.internalBinaryRead(e, e.uint32(), n, a.filter.userInGuild)
                    };
                    break;
                case 6:
                    a.filter = {
                        oneofKind: 'userIds',
                        userIds: y.internalBinaryRead(e, e.uint32(), n, a.filter.userIds)
                    };
                    break;
                case 7:
                    a.filter = {
                        oneofKind: 'clientLocale',
                        clientLocale: T.internalBinaryRead(e, e.uint32(), n, a.filter.clientLocale)
                    };
                    break;
                case 8:
                    a.filter = {
                        oneofKind: 'clientLocation',
                        clientLocation: A.internalBinaryRead(e, e.uint32(), n, a.filter.clientLocation)
                    };
                    break;
                case 9:
                    a.filter = {
                        oneofKind: 'clientIp',
                        clientIp: x.internalBinaryRead(e, e.uint32(), n, a.filter.clientIp)
                    };
                    break;
                case 10:
                    a.filter = {
                        oneofKind: 'userLocale',
                        userLocale: v.internalBinaryRead(e, e.uint32(), n, a.filter.userLocale)
                    };
                    break;
                case 11:
                    a.filter = {
                        oneofKind: 'bot',
                        bot: en.internalBinaryRead(e, e.uint32(), n, a.filter.bot)
                    };
                    break;
                case 12:
                    a.filter = {
                        oneofKind: 'userAgeRange',
                        userAgeRange: ei.internalBinaryRead(e, e.uint32(), n, a.filter.userAgeRange)
                    };
                    break;
                case 13:
                    a.filter = {
                        oneofKind: 'userIdRange',
                        userIdRange: el.internalBinaryRead(e, e.uint32(), n, a.filter.userIdRange)
                    };
                    break;
                case 14:
                    a.filter = {
                        oneofKind: 'userHasFlag',
                        userHasFlag: eu.internalBinaryRead(e, e.uint32(), n, a.filter.userHasFlag)
                    };
                    break;
                case 15:
                    a.filter = {
                        oneofKind: 'unitIdInRangeByHash',
                        unitIdInRangeByHash: e_.internalBinaryRead(e, e.uint32(), n, a.filter.unitIdInRangeByHash)
                    };
                    break;
                case 16:
                    a.filter = {
                        oneofKind: 'clientReleaseChannel',
                        clientReleaseChannel: ep.internalBinaryRead(e, e.uint32(), n, a.filter.clientReleaseChannel)
                    };
                    break;
                case 17:
                    a.filter = {
                        oneofKind: 'always',
                        always: em.internalBinaryRead(e, e.uint32(), n, a.filter.always)
                    };
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('clientVersion' === e.filter.oneofKind && W.internalBinaryWrite(e.filter.clientVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), 'clientOs' === e.filter.oneofKind && k.internalBinaryWrite(e.filter.clientOs, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), 'staff' === e.filter.oneofKind && m.internalBinaryWrite(e.filter.staff, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), 'userInGuild' === e.filter.oneofKind && E.internalBinaryWrite(e.filter.userInGuild, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), 'userIds' === e.filter.oneofKind && y.internalBinaryWrite(e.filter.userIds, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), 'clientLocale' === e.filter.oneofKind && T.internalBinaryWrite(e.filter.clientLocale, t.tag(7, r.TD.LengthDelimited).fork(), n).join(), 'clientLocation' === e.filter.oneofKind && A.internalBinaryWrite(e.filter.clientLocation, t.tag(8, r.TD.LengthDelimited).fork(), n).join(), 'clientIp' === e.filter.oneofKind && x.internalBinaryWrite(e.filter.clientIp, t.tag(9, r.TD.LengthDelimited).fork(), n).join(), 'userLocale' === e.filter.oneofKind && v.internalBinaryWrite(e.filter.userLocale, t.tag(10, r.TD.LengthDelimited).fork(), n).join(), 'bot' === e.filter.oneofKind && en.internalBinaryWrite(e.filter.bot, t.tag(11, r.TD.LengthDelimited).fork(), n).join(), 'userAgeRange' === e.filter.oneofKind && ei.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, r.TD.LengthDelimited).fork(), n).join(), 'userIdRange' === e.filter.oneofKind && el.internalBinaryWrite(e.filter.userIdRange, t.tag(13, r.TD.LengthDelimited).fork(), n).join(), 'userHasFlag' === e.filter.oneofKind && eu.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, r.TD.LengthDelimited).fork(), n).join(), 'unitIdInRangeByHash' === e.filter.oneofKind && e_.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, r.TD.LengthDelimited).fork(), n).join(), 'clientReleaseChannel' === e.filter.oneofKind && ep.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, r.TD.LengthDelimited).fork(), n).join(), 'always' === e.filter.oneofKind && em.internalBinaryWrite(e.filter.always, t.tag(17, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Filter', [
            {
                no: 2,
                name: 'client_version',
                kind: 'message',
                oneof: 'filter',
                T: () => W
            },
            {
                no: 3,
                name: 'client_os',
                kind: 'message',
                oneof: 'filter',
                T: () => k
            },
            {
                no: 4,
                name: 'staff',
                kind: 'message',
                oneof: 'filter',
                T: () => m
            },
            {
                no: 5,
                name: 'user_in_guild',
                kind: 'message',
                oneof: 'filter',
                T: () => E
            },
            {
                no: 6,
                name: 'user_ids',
                kind: 'message',
                oneof: 'filter',
                T: () => y
            },
            {
                no: 7,
                name: 'client_locale',
                kind: 'message',
                oneof: 'filter',
                T: () => T
            },
            {
                no: 8,
                name: 'client_location',
                kind: 'message',
                oneof: 'filter',
                T: () => A
            },
            {
                no: 9,
                name: 'client_ip',
                kind: 'message',
                oneof: 'filter',
                T: () => x
            },
            {
                no: 10,
                name: 'user_locale',
                kind: 'message',
                oneof: 'filter',
                T: () => v
            },
            {
                no: 11,
                name: 'bot',
                kind: 'message',
                oneof: 'filter',
                T: () => en
            },
            {
                no: 12,
                name: 'user_age_range',
                kind: 'message',
                oneof: 'filter',
                T: () => ei
            },
            {
                no: 13,
                name: 'user_id_range',
                kind: 'message',
                oneof: 'filter',
                T: () => el
            },
            {
                no: 14,
                name: 'user_has_flag',
                kind: 'message',
                oneof: 'filter',
                T: () => eu
            },
            {
                no: 15,
                name: 'unit_id_in_range_by_hash',
                kind: 'message',
                oneof: 'filter',
                T: () => e_
            },
            {
                no: 16,
                name: 'client_release_channel',
                kind: 'message',
                oneof: 'filter',
                T: () => ep
            },
            {
                no: 17,
                name: 'always',
                kind: 'message',
                oneof: 'filter',
                T: () => em
            }
        ]);
    }
}
let p = new f();
class h extends o.C {
    create(e) {
        let t = {
            workAccounts: !1,
            personalAccounts: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.workAccounts = e.bool();
                    break;
                case 2:
                    a.personalAccounts = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (!1 !== e.workAccounts && t.tag(1, r.TD.Varint).bool(e.workAccounts), !1 !== e.personalAccounts && t.tag(2, r.TD.Varint).bool(e.personalAccounts));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.StaffUsers', [
            {
                no: 1,
                name: 'work_accounts',
                kind: 'scalar',
                T: 8
            },
            {
                no: 2,
                name: 'personal_accounts',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let m = new h();
class g extends o.C {
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.guildIds.push(e.fixed64().toString());
                else a.guildIds.push(e.fixed64().toString());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserInGuild', [
            {
                no: 1,
                name: 'guild_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let E = new g();
class b extends o.C {
    create(e) {
        let t = { userIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.TD.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t; ) a.userIds.push(e.fixed64().toString());
                else a.userIds.push(e.fixed64().toString());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserIds', [
            {
                no: 1,
                name: 'user_ids',
                kind: 'scalar',
                repeat: 1,
                T: 6
            }
        ]);
    }
}
let y = new b();
class O extends o.C {
    create(e) {
        let t = { locales: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.locales.push(e.string());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserLocale', [
            {
                no: 1,
                name: 'locales',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let v = new O();
class I extends o.C {
    create(e) {
        let t = { locales: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.locales.push(e.string());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientLocale', [
            {
                no: 1,
                name: 'locales',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let T = new I();
class S extends o.C {
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.locations.push(D.internalBinaryRead(e, e.uint32(), n));
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++) D.internalBinaryWrite(e.locations[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientLocation', [
            {
                no: 1,
                name: 'locations',
                kind: 'message',
                repeat: 1,
                T: () => D
            }
        ]);
    }
}
let A = new S();
class N extends o.C {
    create(e) {
        let t = {
            city: '',
            subdivision: '',
            country: ''
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.city = e.string();
                    break;
                case 2:
                    a.subdivision = e.string();
                    break;
                case 3:
                    a.country = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('' !== e.city && t.tag(1, r.TD.LengthDelimited).string(e.city), '' !== e.subdivision && t.tag(2, r.TD.LengthDelimited).string(e.subdivision), '' !== e.country && t.tag(3, r.TD.LengthDelimited).string(e.country));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientLocation.Place', [
            {
                no: 1,
                name: 'city',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'subdivision',
                kind: 'scalar',
                T: 9
            },
            {
                no: 3,
                name: 'country',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let C = new N();
class R extends o.C {
    create(e) {
        let t = {
            isoCountry: '',
            isoSubdivision: ''
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.isoCountry = e.string();
                    break;
                case 2:
                    a.isoSubdivision = e.string();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('' !== e.isoCountry && t.tag(1, r.TD.LengthDelimited).string(e.isoCountry), '' !== e.isoSubdivision && t.tag(2, r.TD.LengthDelimited).string(e.isoSubdivision));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientLocation.ISORegion', [
            {
                no: 1,
                name: 'iso_country',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'iso_subdivision',
                kind: 'scalar',
                T: 9
            }
        ]);
    }
}
let P = new R();
class w extends o.C {
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.location = {
                        oneofKind: 'isoRegion',
                        isoRegion: P.internalBinaryRead(e, e.uint32(), n, a.location.isoRegion)
                    };
                    break;
                case 2:
                    a.location = {
                        oneofKind: 'isEu',
                        isEu: e.bool()
                    };
                    break;
                case 3:
                    a.location = {
                        oneofKind: 'place',
                        place: C.internalBinaryRead(e, e.uint32(), n, a.location.place)
                    };
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('isoRegion' === e.location.oneofKind && P.internalBinaryWrite(e.location.isoRegion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), 'isEu' === e.location.oneofKind && t.tag(2, r.TD.Varint).bool(e.location.isEu), 'place' === e.location.oneofKind && C.internalBinaryWrite(e.location.place, t.tag(3, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientLocation.Location', [
            {
                no: 1,
                name: 'iso_region',
                kind: 'message',
                oneof: 'location',
                T: () => P
            },
            {
                no: 2,
                name: 'is_eu',
                kind: 'scalar',
                oneof: 'location',
                T: 8
            },
            {
                no: 3,
                name: 'place',
                kind: 'message',
                oneof: 'location',
                T: () => C
            }
        ]);
    }
}
let D = new w();
class L extends o.C {
    create(e) {
        let t = { blocks: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.blocks.push(e.string());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientIP', [
            {
                no: 1,
                name: 'blocks',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let x = new L();
class M extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.iosVersion = U.internalBinaryRead(e, e.uint32(), n, a.iosVersion);
                    break;
                case 2:
                    a.androidVersion = U.internalBinaryRead(e, e.uint32(), n, a.androidVersion);
                    break;
                case 3:
                    a.macosVersion = U.internalBinaryRead(e, e.uint32(), n, a.macosVersion);
                    break;
                case 4:
                    a.windowsVersion = U.internalBinaryRead(e, e.uint32(), n, a.windowsVersion);
                    break;
                case 5:
                    a.playstationVersion = U.internalBinaryRead(e, e.uint32(), n, a.playstationVersion);
                    break;
                case 6:
                    a.xboxVersion = U.internalBinaryRead(e, e.uint32(), n, a.xboxVersion);
                    break;
                case 7:
                    a.linuxVersion = U.internalBinaryRead(e, e.uint32(), n, a.linuxVersion);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.iosVersion && U.internalBinaryWrite(e.iosVersion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.androidVersion && U.internalBinaryWrite(e.androidVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.macosVersion && U.internalBinaryWrite(e.macosVersion, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), e.windowsVersion && U.internalBinaryWrite(e.windowsVersion, t.tag(4, r.TD.LengthDelimited).fork(), n).join(), e.playstationVersion && U.internalBinaryWrite(e.playstationVersion, t.tag(5, r.TD.LengthDelimited).fork(), n).join(), e.xboxVersion && U.internalBinaryWrite(e.xboxVersion, t.tag(6, r.TD.LengthDelimited).fork(), n).join(), e.linuxVersion && U.internalBinaryWrite(e.linuxVersion, t.tag(7, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientOperatingSystem', [
            {
                no: 1,
                name: 'ios_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 2,
                name: 'android_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 3,
                name: 'macos_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 4,
                name: 'windows_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 5,
                name: 'playstation_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 6,
                name: 'xbox_version',
                kind: 'message',
                T: () => U
            },
            {
                no: 7,
                name: 'linux_version',
                kind: 'message',
                T: () => U
            }
        ]);
    }
}
let k = new M();
class j extends o.C {
    create(e) {
        let t = {
            ranges: [],
            workAroundPyotoBug: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.ranges.push(B.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    a.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++) B.internalBinaryWrite(e.ranges[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, r.TD.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.SDKVersion', [
            {
                no: 1,
                name: 'ranges',
                kind: 'message',
                repeat: 1,
                T: () => B
            },
            {
                no: 2,
                name: 'work_around_pyoto_bug',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let U = new j();
class G extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.lowerBound = F.internalBinaryRead(e, e.uint32(), n, a.lowerBound);
                    break;
                case 2:
                    a.upperBound = F.internalBinaryRead(e, e.uint32(), n, a.upperBound);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.lowerBound && F.internalBinaryWrite(e.lowerBound, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.upperBound && F.internalBinaryWrite(e.upperBound, t.tag(2, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.SDKVersionRange', [
            {
                no: 1,
                name: 'lower_bound',
                kind: 'message',
                T: () => F
            },
            {
                no: 2,
                name: 'upper_bound',
                kind: 'message',
                T: () => F
            }
        ]);
    }
}
let B = new G();
class V extends o.C {
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.version = H.internalBinaryRead(e, e.uint32(), n, a.version);
                    break;
                case 2:
                    a.inclusive = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.version && H.internalBinaryWrite(e.version, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), !1 !== e.inclusive && t.tag(2, r.TD.Varint).bool(e.inclusive));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.SDKVersionRangeBound', [
            {
                no: 1,
                name: 'version',
                kind: 'message',
                T: () => H
            },
            {
                no: 2,
                name: 'inclusive',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let F = new V();
class Z extends o.C {
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.version = e.int32();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, r.TD.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.SDKVersionSpecifier', [
            {
                no: 1,
                name: 'version',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let H = new Z();
class Y extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.iosVersion = z.internalBinaryRead(e, e.uint32(), n, a.iosVersion);
                    break;
                case 2:
                    a.androidVersion = z.internalBinaryRead(e, e.uint32(), n, a.androidVersion);
                    break;
                case 3:
                    a.webVersion = z.internalBinaryRead(e, e.uint32(), n, a.webVersion);
                    break;
                case 4:
                    a.nativeVersion = z.internalBinaryRead(e, e.uint32(), n, a.nativeVersion);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.iosVersion && z.internalBinaryWrite(e.iosVersion, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.androidVersion && z.internalBinaryWrite(e.androidVersion, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.webVersion && z.internalBinaryWrite(e.webVersion, t.tag(3, r.TD.LengthDelimited).fork(), n).join(), e.nativeVersion && z.internalBinaryWrite(e.nativeVersion, t.tag(4, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientPlatform', [
            {
                no: 1,
                name: 'ios_version',
                kind: 'message',
                T: () => z
            },
            {
                no: 2,
                name: 'android_version',
                kind: 'message',
                T: () => z
            },
            {
                no: 3,
                name: 'web_version',
                kind: 'message',
                T: () => z
            },
            {
                no: 4,
                name: 'native_version',
                kind: 'message',
                T: () => z
            }
        ]);
    }
}
let W = new Y();
class K extends o.C {
    create(e) {
        let t = {
            ranges: [],
            workAroundPyotoBug: !1
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.ranges.push(X.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    a.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++) X.internalBinaryWrite(e.ranges[i], t.tag(1, r.TD.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, r.TD.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.PlatformVersion', [
            {
                no: 1,
                name: 'ranges',
                kind: 'message',
                repeat: 1,
                T: () => X
            },
            {
                no: 2,
                name: 'work_around_pyoto_bug',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let z = new K();
class q extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.lowerBound = J.internalBinaryRead(e, e.uint32(), n, a.lowerBound);
                    break;
                case 2:
                    a.upperBound = J.internalBinaryRead(e, e.uint32(), n, a.upperBound);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.lowerBound && J.internalBinaryWrite(e.lowerBound, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.upperBound && J.internalBinaryWrite(e.upperBound, t.tag(2, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.PlatformVersionRange', [
            {
                no: 1,
                name: 'lower_bound',
                kind: 'message',
                T: () => J
            },
            {
                no: 2,
                name: 'upper_bound',
                kind: 'message',
                T: () => J
            }
        ]);
    }
}
let X = new q();
class Q extends o.C {
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.version = ee.internalBinaryRead(e, e.uint32(), n, a.version);
                    break;
                case 2:
                    a.inclusive = e.bool();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.version && ee.internalBinaryWrite(e.version, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), !1 !== e.inclusive && t.tag(2, r.TD.Varint).bool(e.inclusive));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.PlatformVersionRangeBound', [
            {
                no: 1,
                name: 'version',
                kind: 'message',
                T: () => ee
            },
            {
                no: 2,
                name: 'inclusive',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let J = new Q();
class $ extends o.C {
    create(e) {
        let t = { major: 0 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.major = e.uint32();
                    break;
                case 2:
                    a.minor = s.yC.internalBinaryRead(e, e.uint32(), n, a.minor);
                    break;
                case 3:
                    a.build = s.wA.internalBinaryRead(e, e.uint32(), n, a.build);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.major && t.tag(1, r.TD.Varint).uint32(e.major), e.minor && s.yC.internalBinaryWrite(e.minor, t.tag(2, r.TD.LengthDelimited).fork(), n).join(), e.build && s.wA.internalBinaryWrite(e.build, t.tag(3, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.PlatformVersionSpecifier', [
            {
                no: 1,
                name: 'major',
                kind: 'scalar',
                T: 13
            },
            {
                no: 2,
                name: 'minor',
                kind: 'message',
                T: () => s.yC
            },
            {
                no: 3,
                name: 'build',
                kind: 'message',
                T: () => s.wA
            }
        ]);
    }
}
let ee = new $();
class et extends o.C {
    create(e) {
        let t = { isBot: !1 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.isBot = e.bool();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, r.TD.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserIsBot', [
            {
                no: 1,
                name: 'is_bot',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let en = new et();
class er extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.minAgeYears = s.yC.internalBinaryRead(e, e.uint32(), n, a.minAgeYears);
                    break;
                case 2:
                    a.maxAgeYears = s.yC.internalBinaryRead(e, e.uint32(), n, a.maxAgeYears);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.minAgeYears && s.yC.internalBinaryWrite(e.minAgeYears, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.maxAgeYears && s.yC.internalBinaryWrite(e.maxAgeYears, t.tag(2, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserAgeRange', [
            {
                no: 1,
                name: 'min_age_years',
                kind: 'message',
                T: () => s.yC
            },
            {
                no: 2,
                name: 'max_age_years',
                kind: 'message',
                T: () => s.yC
            }
        ]);
    }
}
let ei = new er();
class ea extends o.C {
    create(e) {
        let t = { value: '0' };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.fixed64().toString();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.value && t.tag(1, r.TD.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Fixed64Value', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let eo = new ea();
class es extends o.C {
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.minId = eo.internalBinaryRead(e, e.uint32(), n, a.minId);
                    break;
                case 2:
                    a.maxId = eo.internalBinaryRead(e, e.uint32(), n, a.maxId);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        (e.minId && eo.internalBinaryWrite(e.minId, t.tag(1, r.TD.LengthDelimited).fork(), n).join(), e.maxId && eo.internalBinaryWrite(e.maxId, t.tag(2, r.TD.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserIDRange', [
            {
                no: 1,
                name: 'min_id',
                kind: 'message',
                T: () => eo
            },
            {
                no: 2,
                name: 'max_id',
                kind: 'message',
                T: () => eo
            }
        ]);
    }
}
let el = new es();
class ec extends o.C {
    create(e) {
        let t = { mask: '0' };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.mask = e.fixed64().toString();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.mask && t.tag(1, r.TD.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UserHasFlag', [
            {
                no: 1,
                name: 'mask',
                kind: 'scalar',
                T: 6
            }
        ]);
    }
}
let eu = new ec();
class ed extends o.C {
    create(e) {
        let t = {
            hashKey: '',
            target: 0
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.hashKey = e.string();
                    break;
                case 2:
                    a.target = e.uint32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        ('' !== e.hashKey && t.tag(1, r.TD.LengthDelimited).string(e.hashKey), 0 !== e.target && t.tag(2, r.TD.Varint).uint32(e.target));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.UnitIdInRangeByHash', [
            {
                no: 1,
                name: 'hash_key',
                kind: 'scalar',
                T: 9
            },
            {
                no: 2,
                name: 'target',
                kind: 'scalar',
                T: 13
            }
        ]);
    }
}
let e_ = new ed();
class ef extends o.C {
    create(e) {
        let t = { releaseChannels: [] };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.releaseChannels.push(e.string());
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, r.TD.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.ClientReleaseChannel', [
            {
                no: 1,
                name: 'release_channels',
                kind: 'scalar',
                repeat: 2,
                T: 9
            }
        ]);
    }
}
let ep = new ef();
class eh extends o.C {
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, i.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o; ) {
            let [t, i] = e.tag();
            if (1 === t) a.value = e.bool();
            else {
                let o = n.readUnknownField;
                if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                let s = e.skip(i);
                !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, r.TD.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t);
    }
    constructor() {
        super('discord_protos.discord_experimentation.v1.Always', [
            {
                no: 1,
                name: 'value',
                kind: 'scalar',
                T: 8
            }
        ]);
    }
}
let em = new eh();
