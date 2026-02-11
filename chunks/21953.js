"use strict";
n.d(t, { jO: () => d }), n(321073);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(406935),
    l = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.EXCLUDE = 1)] = "EXCLUDE"),
            (e[(e.OVERRIDE = 2)] = "OVERRIDE"),
            (e[(e.REQUIRE = 3)] = "REQUIRE"),
            e
        );
    })({}),
    u = (function (e) {
        return (e[(e.REGULAR = 0)] = "REGULAR"), (e[(e.HOLDOUT = 1)] = "HOLDOUT"), e;
    })({});
class c extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", l] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => p },
            { no: 3, name: "override", kind: "message", T: () => f },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", u],
            },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], isSunsetRule: !1, subtype: 0 };
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
                    a.type = e.int32();
                    break;
                case 2:
                    a.filters.push(p.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    a.override = f.internalBinaryRead(e, e.uint32(), n, a.override);
                    break;
                case 4:
                    a.isSunsetRule = e.bool();
                    break;
                case 5:
                    a.subtype = e.int32();
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
        0 !== e.type && t.tag(1, r.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            p.internalBinaryWrite(e.filters[i], t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        e.override && f.internalBinaryWrite(e.override, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, r.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, r.O0.Varint).int32(e.subtype);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let d = new c();
class _ extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
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
            if (1 === t) a.variationId = e.int32();
            else {
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
        0 !== e.variationId && t.tag(1, r.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new _();
class h extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => X },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => V },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => E },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => I },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => y },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => b },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => D },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => G },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => v },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => el },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => ec },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eh },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => em },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => eE },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => eI },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => ey },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => R },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => ev },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => eb },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => eR },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => eD },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => ew },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => eP },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 } };
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
                case 2:
                    a.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: X.internalBinaryRead(e, e.uint32(), n, a.filter.clientVersion),
                    };
                    break;
                case 3:
                    a.filter = {
                        oneofKind: "clientOs",
                        clientOs: V.internalBinaryRead(e, e.uint32(), n, a.filter.clientOs),
                    };
                    break;
                case 4:
                    a.filter = { oneofKind: "staff", staff: E.internalBinaryRead(e, e.uint32(), n, a.filter.staff) };
                    break;
                case 5:
                    a.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: I.internalBinaryRead(e, e.uint32(), n, a.filter.userInGuild),
                    };
                    break;
                case 6:
                    a.filter = {
                        oneofKind: "userIds",
                        userIds: y.internalBinaryRead(e, e.uint32(), n, a.filter.userIds),
                    };
                    break;
                case 7:
                    a.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: b.internalBinaryRead(e, e.uint32(), n, a.filter.clientLocale),
                    };
                    break;
                case 8:
                    a.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: D.internalBinaryRead(e, e.uint32(), n, a.filter.clientLocation),
                    };
                    break;
                case 9:
                    a.filter = {
                        oneofKind: "clientIp",
                        clientIp: G.internalBinaryRead(e, e.uint32(), n, a.filter.clientIp),
                    };
                    break;
                case 10:
                    a.filter = {
                        oneofKind: "userLocale",
                        userLocale: v.internalBinaryRead(e, e.uint32(), n, a.filter.userLocale),
                    };
                    break;
                case 11:
                    a.filter = { oneofKind: "bot", bot: el.internalBinaryRead(e, e.uint32(), n, a.filter.bot) };
                    break;
                case 12:
                    a.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: ec.internalBinaryRead(e, e.uint32(), n, a.filter.userAgeRange),
                    };
                    break;
                case 13:
                    a.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eh.internalBinaryRead(e, e.uint32(), n, a.filter.userIdRange),
                    };
                    break;
                case 14:
                    a.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: em.internalBinaryRead(e, e.uint32(), n, a.filter.userHasFlag),
                    };
                    break;
                case 15:
                    a.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: eE.internalBinaryRead(e, e.uint32(), n, a.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    a.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: eI.internalBinaryRead(e, e.uint32(), n, a.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    a.filter = {
                        oneofKind: "always",
                        always: ey.internalBinaryRead(e, e.uint32(), n, a.filter.always),
                    };
                    break;
                case 18:
                    a.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: R.internalBinaryRead(e, e.uint32(), n, a.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    a.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: ev.internalBinaryRead(e, e.uint32(), n, a.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    a.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: eb.internalBinaryRead(e, e.uint32(), n, a.filter.userPremiumType),
                    };
                    break;
                case 21:
                    a.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: eR.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            a.filter.unitIdMatchesFilterSnapshot,
                        ),
                    };
                    break;
                case 22:
                    a.filter = {
                        oneofKind: "guildIds",
                        guildIds: eD.internalBinaryRead(e, e.uint32(), n, a.filter.guildIds),
                    };
                    break;
                case 25:
                    a.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: ew.internalBinaryRead(e, e.uint32(), n, a.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    a.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: eP.internalBinaryRead(e, e.uint32(), n, a.filter.guildHasFeature),
                    };
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
        "clientVersion" === e.filter.oneofKind &&
            X.internalBinaryWrite(e.filter.clientVersion, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                V.internalBinaryWrite(e.filter.clientOs, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                E.internalBinaryWrite(e.filter.staff, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                I.internalBinaryWrite(e.filter.userInGuild, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                y.internalBinaryWrite(e.filter.userIds, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                b.internalBinaryWrite(e.filter.clientLocale, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                D.internalBinaryWrite(e.filter.clientLocation, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                G.internalBinaryWrite(e.filter.clientIp, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                v.internalBinaryWrite(e.filter.userLocale, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                el.internalBinaryWrite(e.filter.bot, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                ec.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eh.internalBinaryWrite(e.filter.userIdRange, t.tag(13, r.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                em.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, r.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                eE.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, r.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                eI.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, r.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                ey.internalBinaryWrite(e.filter.always, t.tag(17, r.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                R.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, r.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                ev.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, r.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                eb.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, r.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                eR
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, r.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                eD.internalBinaryWrite(e.filter.guildIds, t.tag(22, r.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                ew
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, r.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                eP.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let p = new h();
class g extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.StaffUsers",
            [
                { no: 1, name: "work_accounts", kind: "scalar", T: 8 },
                { no: 2, name: "personal_accounts", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { workAccounts: !1, personalAccounts: !1 };
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
                    a.workAccounts = e.bool();
                    break;
                case 2:
                    a.personalAccounts = e.bool();
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
        !1 !== e.workAccounts && t.tag(1, r.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, r.O0.Varint).bool(e.personalAccounts);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new g();
class A extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserInGuild",
            [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { guildIds: [] };
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
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.guildIds.push(e.fixed64().toString());
                else a.guildIds.push(e.fixed64().toString());
            else {
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
        if (e.guildIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIds",
            [{ no: 1, name: "user_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { userIds: [] };
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
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.userIds.push(e.fixed64().toString());
                else a.userIds.push(e.fixed64().toString());
            else {
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
        if (e.userIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new T();
class S extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locales: [] };
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
            if (1 === t) a.locales.push(e.string());
            else {
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
        for (let n = 0; n < e.locales.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let v = new S();
class C extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locales: [] };
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
            if (1 === t) a.locales.push(e.string());
            else {
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
        for (let n = 0; n < e.locales.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let b = new C();
class N extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientSystemLocale",
            [{ no: 1, name: "locales", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locales: [] };
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
            if (1 === t) a.locales.push(e.string());
            else {
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
        for (let n = 0; n < e.locales.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let R = new N();
class O extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => k }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
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
            if (1 === t) a.locations.push(k.internalBinaryRead(e, e.uint32(), n));
            else {
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
        for (let i = 0; i < e.locations.length; i++)
            k.internalBinaryWrite(e.locations[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let D = new O();
class L extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Place", [
            { no: 1, name: "city", kind: "scalar", T: 9 },
            { no: 2, name: "subdivision", kind: "scalar", T: 9 },
            { no: 3, name: "country", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { city: "", subdivision: "", country: "" };
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
                    a.city = e.string();
                    break;
                case 2:
                    a.subdivision = e.string();
                    break;
                case 3:
                    a.country = e.string();
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
        "" !== e.city && t.tag(1, r.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, r.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, r.O0.LengthDelimited).string(e.country);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let w = new L();
class x extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
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
                    a.isoCountry = e.string();
                    break;
                case 2:
                    a.isoSubdivision = e.string();
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
        "" !== e.isoCountry && t.tag(1, r.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, r.O0.LengthDelimited).string(e.isoSubdivision);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new x();
class M extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => P },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => w },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
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
                    a.location = {
                        oneofKind: "isoRegion",
                        isoRegion: P.internalBinaryRead(e, e.uint32(), n, a.location.isoRegion),
                    };
                    break;
                case 2:
                    a.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    a.location = {
                        oneofKind: "place",
                        place: w.internalBinaryRead(e, e.uint32(), n, a.location.place),
                    };
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
        "isoRegion" === e.location.oneofKind &&
            P.internalBinaryWrite(e.location.isoRegion, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, r.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                w.internalBinaryWrite(e.location.place, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let k = new M();
class U extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientIP",
            [{ no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { blocks: [] };
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
            if (1 === t) a.blocks.push(e.string());
            else {
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
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let G = new U();
class F extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => j },
                { no: 2, name: "android_version", kind: "message", T: () => j },
                { no: 3, name: "macos_version", kind: "message", T: () => j },
                { no: 4, name: "windows_version", kind: "message", T: () => j },
                { no: 5, name: "playstation_version", kind: "message", T: () => j },
                { no: 6, name: "xbox_version", kind: "message", T: () => j },
                { no: 7, name: "linux_version", kind: "message", T: () => j },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
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
                    a.iosVersion = j.internalBinaryRead(e, e.uint32(), n, a.iosVersion);
                    break;
                case 2:
                    a.androidVersion = j.internalBinaryRead(e, e.uint32(), n, a.androidVersion);
                    break;
                case 3:
                    a.macosVersion = j.internalBinaryRead(e, e.uint32(), n, a.macosVersion);
                    break;
                case 4:
                    a.windowsVersion = j.internalBinaryRead(e, e.uint32(), n, a.windowsVersion);
                    break;
                case 5:
                    a.playstationVersion = j.internalBinaryRead(e, e.uint32(), n, a.playstationVersion);
                    break;
                case 6:
                    a.xboxVersion = j.internalBinaryRead(e, e.uint32(), n, a.xboxVersion);
                    break;
                case 7:
                    a.linuxVersion = j.internalBinaryRead(e, e.uint32(), n, a.linuxVersion);
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
        e.iosVersion && j.internalBinaryWrite(e.iosVersion, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                j.internalBinaryWrite(e.androidVersion, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && j.internalBinaryWrite(e.macosVersion, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                j.internalBinaryWrite(e.windowsVersion, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                j.internalBinaryWrite(e.playstationVersion, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && j.internalBinaryWrite(e.xboxVersion, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && j.internalBinaryWrite(e.linuxVersion, t.tag(7, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let V = new F();
class B extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => Y },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
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
                    a.ranges.push(Y.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    a.workAroundPyotoBug = e.bool();
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
        for (let i = 0; i < e.ranges.length; i++)
            Y.internalBinaryWrite(e.ranges[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, r.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let j = new B();
class H extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => K },
            { no: 2, name: "upper_bound", kind: "message", T: () => K },
        ]);
    }
    create(e) {
        let t = {};
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
                    a.lowerBound = K.internalBinaryRead(e, e.uint32(), n, a.lowerBound);
                    break;
                case 2:
                    a.upperBound = K.internalBinaryRead(e, e.uint32(), n, a.upperBound);
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
        e.lowerBound && K.internalBinaryWrite(e.lowerBound, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && K.internalBinaryWrite(e.upperBound, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Y = new H();
class W extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => z },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
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
                    a.version = z.internalBinaryRead(e, e.uint32(), n, a.version);
                    break;
                case 2:
                    a.inclusive = e.bool();
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
        e.version && z.internalBinaryWrite(e.version, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, r.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let K = new W();
class $ extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
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
            if (1 === t) a.version = e.int32();
            else {
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
        0 !== e.version && t.tag(1, r.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let z = new $();
class q extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => Q },
                { no: 2, name: "android_version", kind: "message", T: () => Q },
                { no: 3, name: "web_version", kind: "message", T: () => Q },
                { no: 4, name: "native_version", kind: "message", T: () => Q },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => es },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
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
                    a.iosVersion = Q.internalBinaryRead(e, e.uint32(), n, a.iosVersion);
                    break;
                case 2:
                    a.androidVersion = Q.internalBinaryRead(e, e.uint32(), n, a.androidVersion);
                    break;
                case 3:
                    a.webVersion = Q.internalBinaryRead(e, e.uint32(), n, a.webVersion);
                    break;
                case 4:
                    a.nativeVersion = Q.internalBinaryRead(e, e.uint32(), n, a.nativeVersion);
                    break;
                case 6:
                    a.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    a.clientRequiredChanges = es.internalBinaryRead(e, e.uint32(), n, a.clientRequiredChanges);
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
        e.iosVersion && Q.internalBinaryWrite(e.iosVersion, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                Q.internalBinaryWrite(e.androidVersion, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && Q.internalBinaryWrite(e.webVersion, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && Q.internalBinaryWrite(e.nativeVersion, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, r.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                es.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let X = new q();
class Z extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => ee },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
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
                    a.ranges.push(ee.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    a.workAroundPyotoBug = e.bool();
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
        for (let i = 0; i < e.ranges.length; i++)
            ee.internalBinaryWrite(e.ranges[i], t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, r.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let Q = new Z();
class J extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => en },
            { no: 2, name: "upper_bound", kind: "message", T: () => en },
        ]);
    }
    create(e) {
        let t = {};
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
                    a.lowerBound = en.internalBinaryRead(e, e.uint32(), n, a.lowerBound);
                    break;
                case 2:
                    a.upperBound = en.internalBinaryRead(e, e.uint32(), n, a.upperBound);
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
        e.lowerBound && en.internalBinaryWrite(e.lowerBound, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && en.internalBinaryWrite(e.upperBound, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ee = new J();
class et extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => ei },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
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
                    a.version = ei.internalBinaryRead(e, e.uint32(), n, a.version);
                    break;
                case 2:
                    a.inclusive = e.bool();
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
        e.version && ei.internalBinaryWrite(e.version, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, r.O0.Varint).bool(e.inclusive);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let en = new et();
class er extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => o.ZQ },
            { no: 3, name: "build", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { major: 0 };
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
                    a.major = e.uint32();
                    break;
                case 2:
                    a.minor = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.minor);
                    break;
                case 3:
                    a.build = o.ol.internalBinaryRead(e, e.uint32(), n, a.build);
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
        0 !== e.major && t.tag(1, r.O0.Varint).uint32(e.major),
            e.minor && o.ZQ.internalBinaryWrite(e.minor, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.build && o.ol.internalBinaryWrite(e.build, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ei = new er();
class ea extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
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
                    a.commitHashes.push(e.string());
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.prNumbers.push(e.int32());
                    else a.prNumbers.push(e.int32());
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
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let es = new ea();
class eo extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIsBot",
            [{ no: 1, name: "is_bot", kind: "scalar", T: 8 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { isBot: !1 };
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
            if (1 === t) a.isBot = e.bool();
            else {
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
        !1 !== e.isBot && t.tag(1, r.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let el = new eo();
class eu extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => o.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => o.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
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
                    a.minAgeYears = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.minAgeYears);
                    break;
                case 2:
                    a.maxAgeYears = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.maxAgeYears);
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
        e.minAgeYears && o.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && o.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ec = new eu();
class ed extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
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
            if (1 === t) a.value = e.fixed64().toString();
            else {
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
        "0" !== e.value && t.tag(1, r.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let e_ = new ed();
class ef extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => e_ },
                { no: 2, name: "max_id", kind: "message", T: () => e_ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
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
                    a.minId = e_.internalBinaryRead(e, e.uint32(), n, a.minId);
                    break;
                case 2:
                    a.maxId = e_.internalBinaryRead(e, e.uint32(), n, a.maxId);
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
        e.minId && e_.internalBinaryWrite(e.minId, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.maxId && e_.internalBinaryWrite(e.maxId, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eh = new ef();
class ep extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserHasFlag",
            [{ no: 1, name: "mask", kind: "scalar", T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { mask: "0" };
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
            if (1 === t) a.mask = e.fixed64().toString();
            else {
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
        "0" !== e.mask && t.tag(1, r.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let em = new ep();
class eg extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInRangeByHash",
            [
                { no: 1, name: "hash_key", kind: "scalar", T: 9 },
                { no: 2, name: "stop_ring_position", kind: "scalar", T: 13 },
                { no: 3, name: "start_ring_position", kind: "scalar", T: 13 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { hashKey: "", stopRingPosition: 0, startRingPosition: 0 };
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
                    a.hashKey = e.string();
                    break;
                case 2:
                    a.stopRingPosition = e.uint32();
                    break;
                case 3:
                    a.startRingPosition = e.uint32();
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
        "" !== e.hashKey && t.tag(1, r.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, r.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, r.O0.Varint).uint32(e.startRingPosition);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eE = new eg();
class eA extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientReleaseChannel",
            [{ no: 1, name: "release_channels", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { releaseChannels: [] };
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
            if (1 === t) a.releaseChannels.push(e.string());
            else {
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
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eI = new eA();
class eT extends s.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
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
            if (1 === t) a.value = e.bool();
            else {
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
        !1 !== e.value && t.tag(1, r.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ey = new eT();
class eS extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
            [
                { no: 1, name: "experiment_id", kind: "scalar", T: 6 },
                { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { experimentId: "0", variationIds: [] };
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
                    a.experimentId = e.fixed64().toString();
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.variationIds.push(e.int32());
                    else a.variationIds.push(e.int32());
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
        if (("0" !== e.experimentId && t.tag(1, r.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ev = new eS();
class eC extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserPremiumType",
            [{ no: 1, name: "premium_types", kind: "scalar", repeat: 1, T: 5 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { premiumTypes: [] };
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
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.premiumTypes.push(e.int32());
                else a.premiumTypes.push(e.int32());
            else {
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
        if (e.premiumTypes.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eb = new eC();
class eN extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdMatchesFilterSnapshot",
            [
                { no: 1, name: "filter_snapshot_name", kind: "scalar", T: 9 },
                { no: 2, name: "target_filter_values", kind: "scalar", repeat: 1, T: 6 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY" },
        );
    }
    create(e) {
        let t = { filterSnapshotName: "", targetFilterValues: [] };
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
                    a.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.targetFilterValues.push(e.fixed64().toString());
                    else a.targetFilterValues.push(e.fixed64().toString());
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
        if (
            ("" !== e.filterSnapshotName && t.tag(1, r.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eR = new eN();
class eO extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIds",
            [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD" },
        );
    }
    create(e) {
        let t = { guildIds: [] };
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
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.guildIds.push(e.fixed64().toString());
                else a.guildIds.push(e.fixed64().toString());
            else {
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
        if (e.guildIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eD = new eO();
class eL extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => o.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => o.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD" },
        );
    }
    create(e) {
        let t = {};
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
                    a.minCount = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.minCount);
                    break;
                case 2:
                    a.maxCount = o.ZQ.internalBinaryRead(e, e.uint32(), n, a.maxCount);
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
        e.minCount && o.ZQ.internalBinaryWrite(e.minCount, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && o.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let ew = new eL();
class ex extends s.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildHasFeature",
            [{ no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD" },
        );
    }
    create(e) {
        let t = { features: [] };
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
            if (1 === t) a.features.push(e.string());
            else {
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
        for (let n = 0; n < e.features.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let eP = new ex();
