"use strict";
n.d(t, { jO: () => f }), n(321073);
var r,
    i,
    s = n(852015),
    a = n(144367),
    o = n(428420),
    l = n(324281),
    u = n(406935),
    c =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.EXCLUDE = 1)] = "EXCLUDE"),
        (r[(r.OVERRIDE = 2)] = "OVERRIDE"),
        (r[(r.REQUIRE = 3)] = "REQUIRE"),
        (r[(r.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        r),
    d = (((i = {})[(i.REGULAR = 0)] = "REGULAR"), (i[(i.HOLDOUT = 1)] = "HOLDOUT"), i);
class _ extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", c] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => m },
            { no: 3, name: "override", kind: "message", T: () => h },
            { no: 4, name: "is_sunset_rule", kind: "scalar", T: 8 },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", d],
            },
            { no: 6, name: "hash", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], isSunsetRule: !1, subtype: 0, hash: "" };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.type = e.int32();
                    break;
                case 2:
                    i.filters.push(m.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    i.override = h.internalBinaryRead(e, e.uint32(), n, i.override);
                    break;
                case 4:
                    i.isSunsetRule = e.bool();
                    break;
                case 5:
                    i.subtype = e.int32();
                    break;
                case 6:
                    i.hash = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, s.O0.Varint).int32(e.type);
        for (let r = 0; r < e.filters.length; r++)
            m.internalBinaryWrite(e.filters[r], t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        e.override && h.internalBinaryWrite(e.override, t.tag(3, s.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isSunsetRule && t.tag(4, s.O0.Varint).bool(e.isSunsetRule),
            0 !== e.subtype && t.tag(5, s.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, s.O0.LengthDelimited).string(e.hash);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let f = new _();
class p extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.variationId = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, s.O0.Varint).int32(e.variationId);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new p();
class E extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => et },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => W },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => A },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => T },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => y },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => O },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => L },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => B },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => v },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => ef },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => eh },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eA },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => eT },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => ey },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => ev },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => eO },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => b },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => eb },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => eL },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => eM },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => ex },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => eU },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => eF },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => F },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => j },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => eB },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 2:
                    i.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: et.internalBinaryRead(e, e.uint32(), n, i.filter.clientVersion),
                    };
                    break;
                case 3:
                    i.filter = {
                        oneofKind: "clientOs",
                        clientOs: W.internalBinaryRead(e, e.uint32(), n, i.filter.clientOs),
                    };
                    break;
                case 4:
                    i.filter = { oneofKind: "staff", staff: A.internalBinaryRead(e, e.uint32(), n, i.filter.staff) };
                    break;
                case 5:
                    i.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: T.internalBinaryRead(e, e.uint32(), n, i.filter.userInGuild),
                    };
                    break;
                case 6:
                    i.filter = {
                        oneofKind: "userIds",
                        userIds: y.internalBinaryRead(e, e.uint32(), n, i.filter.userIds),
                    };
                    break;
                case 7:
                    i.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: O.internalBinaryRead(e, e.uint32(), n, i.filter.clientLocale),
                    };
                    break;
                case 8:
                    i.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: L.internalBinaryRead(e, e.uint32(), n, i.filter.clientLocation),
                    };
                    break;
                case 9:
                    i.filter = {
                        oneofKind: "clientIp",
                        clientIp: B.internalBinaryRead(e, e.uint32(), n, i.filter.clientIp),
                    };
                    break;
                case 10:
                    i.filter = {
                        oneofKind: "userLocale",
                        userLocale: v.internalBinaryRead(e, e.uint32(), n, i.filter.userLocale),
                    };
                    break;
                case 11:
                    i.filter = { oneofKind: "bot", bot: ef.internalBinaryRead(e, e.uint32(), n, i.filter.bot) };
                    break;
                case 12:
                    i.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: eh.internalBinaryRead(e, e.uint32(), n, i.filter.userAgeRange),
                    };
                    break;
                case 13:
                    i.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eA.internalBinaryRead(e, e.uint32(), n, i.filter.userIdRange),
                    };
                    break;
                case 14:
                    i.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: eT.internalBinaryRead(e, e.uint32(), n, i.filter.userHasFlag),
                    };
                    break;
                case 15:
                    i.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: ey.internalBinaryRead(e, e.uint32(), n, i.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    i.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: ev.internalBinaryRead(e, e.uint32(), n, i.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    i.filter = {
                        oneofKind: "always",
                        always: eO.internalBinaryRead(e, e.uint32(), n, i.filter.always),
                    };
                    break;
                case 18:
                    i.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: b.internalBinaryRead(e, e.uint32(), n, i.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    i.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: eb.internalBinaryRead(e, e.uint32(), n, i.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    i.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: eL.internalBinaryRead(e, e.uint32(), n, i.filter.userPremiumType),
                    };
                    break;
                case 21:
                    i.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: eM.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            i.filter.unitIdMatchesFilterSnapshot,
                        ),
                    };
                    break;
                case 22:
                    i.filter = {
                        oneofKind: "guildIds",
                        guildIds: ex.internalBinaryRead(e, e.uint32(), n, i.filter.guildIds),
                    };
                    break;
                case 25:
                    i.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: eU.internalBinaryRead(e, e.uint32(), n, i.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    i.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: eF.internalBinaryRead(e, e.uint32(), n, i.filter.guildHasFeature),
                    };
                    break;
                case 27:
                    i.filter = {
                        oneofKind: "userLocation",
                        userLocation: F.internalBinaryRead(e, e.uint32(), n, i.filter.userLocation),
                    };
                    break;
                case 28:
                    i.filter = { oneofKind: "userIp", userIp: j.internalBinaryRead(e, e.uint32(), n, i.filter.userIp) };
                    break;
                case 29:
                    i.filter = {
                        oneofKind: "installationIds",
                        installationIds: eB.internalBinaryRead(e, e.uint32(), n, i.filter.installationIds),
                    };
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "clientVersion" === e.filter.oneofKind &&
            et.internalBinaryWrite(e.filter.clientVersion, t.tag(2, s.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                W.internalBinaryWrite(e.filter.clientOs, t.tag(3, s.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                A.internalBinaryWrite(e.filter.staff, t.tag(4, s.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                T.internalBinaryWrite(e.filter.userInGuild, t.tag(5, s.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                y.internalBinaryWrite(e.filter.userIds, t.tag(6, s.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                O.internalBinaryWrite(e.filter.clientLocale, t.tag(7, s.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                L.internalBinaryWrite(e.filter.clientLocation, t.tag(8, s.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                B.internalBinaryWrite(e.filter.clientIp, t.tag(9, s.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                v.internalBinaryWrite(e.filter.userLocale, t.tag(10, s.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                ef.internalBinaryWrite(e.filter.bot, t.tag(11, s.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                eh.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, s.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eA.internalBinaryWrite(e.filter.userIdRange, t.tag(13, s.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                eT.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, s.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                ey.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, s.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                ev.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, s.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                eO.internalBinaryWrite(e.filter.always, t.tag(17, s.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                b.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, s.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                eb.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, s.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                eL.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, s.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                eM
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, s.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                ex.internalBinaryWrite(e.filter.guildIds, t.tag(22, s.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                eU
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, s.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                eF.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, s.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                F.internalBinaryWrite(e.filter.userLocation, t.tag(27, s.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                j.internalBinaryWrite(e.filter.userIp, t.tag(28, s.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                eB.internalBinaryWrite(e.filter.installationIds, t.tag(29, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let m = new E();
class g extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.workAccounts = e.bool();
                    break;
                case 2:
                    i.personalAccounts = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.workAccounts && t.tag(1, s.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, s.O0.Varint).bool(e.personalAccounts);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let A = new g();
class I extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === s.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.guildIds.push(e.fixed64().toString());
                else i.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === s.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.userIds.push(e.fixed64().toString());
                else i.userIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let y = new S();
class N extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.locales[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let v = new N();
class C extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.locales[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let O = new C();
class R extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.locales[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let b = new R();
class D extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => U }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.locations.push(U.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.locations.length; r++)
            U.internalBinaryWrite(e.locations[r], t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.city = e.string();
                    break;
                case 2:
                    i.subdivision = e.string();
                    break;
                case 3:
                    i.country = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.city && t.tag(1, s.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, s.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, s.O0.LengthDelimited).string(e.country);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let M = new w();
class P extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.isoCountry = e.string();
                    break;
                case 2:
                    i.isoSubdivision = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.isoCountry && t.tag(1, s.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, s.O0.LengthDelimited).string(e.isoSubdivision);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let x = new P();
class k extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => x },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => M },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.location = {
                        oneofKind: "isoRegion",
                        isoRegion: x.internalBinaryRead(e, e.uint32(), n, i.location.isoRegion),
                    };
                    break;
                case 2:
                    i.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    i.location = {
                        oneofKind: "place",
                        place: M.internalBinaryRead(e, e.uint32(), n, i.location.place),
                    };
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "isoRegion" === e.location.oneofKind &&
            x.internalBinaryWrite(e.location.isoRegion, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, s.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                M.internalBinaryWrite(e.location.place, t.tag(3, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let U = new k();
class G extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => U },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locations: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.locations.push(U.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    i.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.locations.length; r++)
            U.internalBinaryWrite(e.locations[r], t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, s.O0.Varint).bool(e.preferClientIp);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let F = new G();
class V extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.blocks.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.blocks[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let B = new V();
class H extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIP",
            [
                { no: 1, name: "blocks", kind: "scalar", repeat: 2, T: 9 },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { blocks: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.blocks.push(e.string());
                    break;
                case 2:
                    i.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, s.O0.Varint).bool(e.preferClientIp);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let j = new H();
class Y extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => $ },
                { no: 2, name: "android_version", kind: "message", T: () => $ },
                { no: 3, name: "macos_version", kind: "message", T: () => $ },
                { no: 4, name: "windows_version", kind: "message", T: () => $ },
                { no: 5, name: "playstation_version", kind: "message", T: () => $ },
                { no: 6, name: "xbox_version", kind: "message", T: () => $ },
                { no: 7, name: "linux_version", kind: "message", T: () => $ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.iosVersion = $.internalBinaryRead(e, e.uint32(), n, i.iosVersion);
                    break;
                case 2:
                    i.androidVersion = $.internalBinaryRead(e, e.uint32(), n, i.androidVersion);
                    break;
                case 3:
                    i.macosVersion = $.internalBinaryRead(e, e.uint32(), n, i.macosVersion);
                    break;
                case 4:
                    i.windowsVersion = $.internalBinaryRead(e, e.uint32(), n, i.windowsVersion);
                    break;
                case 5:
                    i.playstationVersion = $.internalBinaryRead(e, e.uint32(), n, i.playstationVersion);
                    break;
                case 6:
                    i.xboxVersion = $.internalBinaryRead(e, e.uint32(), n, i.xboxVersion);
                    break;
                case 7:
                    i.linuxVersion = $.internalBinaryRead(e, e.uint32(), n, i.linuxVersion);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && $.internalBinaryWrite(e.iosVersion, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                $.internalBinaryWrite(e.androidVersion, t.tag(2, s.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && $.internalBinaryWrite(e.macosVersion, t.tag(3, s.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                $.internalBinaryWrite(e.windowsVersion, t.tag(4, s.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                $.internalBinaryWrite(e.playstationVersion, t.tag(5, s.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && $.internalBinaryWrite(e.xboxVersion, t.tag(6, s.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && $.internalBinaryWrite(e.linuxVersion, t.tag(7, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let W = new Y();
class K extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => q },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.ranges.push(q.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    i.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.ranges.length; r++)
            q.internalBinaryWrite(e.ranges[r], t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, s.O0.Varint).bool(e.workAroundPyotoBug);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let $ = new K();
class z extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => Q },
            { no: 2, name: "upper_bound", kind: "message", T: () => Q },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.lowerBound = Q.internalBinaryRead(e, e.uint32(), n, i.lowerBound);
                    break;
                case 2:
                    i.upperBound = Q.internalBinaryRead(e, e.uint32(), n, i.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && Q.internalBinaryWrite(e.lowerBound, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && Q.internalBinaryWrite(e.upperBound, t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let q = new z();
class X extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => J },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.version = J.internalBinaryRead(e, e.uint32(), n, i.version);
                    break;
                case 2:
                    i.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.version && J.internalBinaryWrite(e.version, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, s.O0.Varint).bool(e.inclusive);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let Q = new X();
class Z extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.version = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, s.O0.Varint).int32(e.version);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let J = new Z();
class ee extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => er },
                { no: 2, name: "android_version", kind: "message", T: () => er },
                { no: 3, name: "web_version", kind: "message", T: () => er },
                { no: 4, name: "native_version", kind: "message", T: () => er },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => ed },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.iosVersion = er.internalBinaryRead(e, e.uint32(), n, i.iosVersion);
                    break;
                case 2:
                    i.androidVersion = er.internalBinaryRead(e, e.uint32(), n, i.androidVersion);
                    break;
                case 3:
                    i.webVersion = er.internalBinaryRead(e, e.uint32(), n, i.webVersion);
                    break;
                case 4:
                    i.nativeVersion = er.internalBinaryRead(e, e.uint32(), n, i.nativeVersion);
                    break;
                case 6:
                    i.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    i.clientRequiredChanges = ed.internalBinaryRead(e, e.uint32(), n, i.clientRequiredChanges);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.iosVersion && er.internalBinaryWrite(e.iosVersion, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                er.internalBinaryWrite(e.androidVersion, t.tag(2, s.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && er.internalBinaryWrite(e.webVersion, t.tag(3, s.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && er.internalBinaryWrite(e.nativeVersion, t.tag(4, s.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, s.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                ed.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let et = new ee();
class en extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => es },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.ranges.push(es.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    i.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let r = 0; r < e.ranges.length; r++)
            es.internalBinaryWrite(e.ranges[r], t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, s.O0.Varint).bool(e.workAroundPyotoBug);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let er = new en();
class ei extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => eo },
            { no: 2, name: "upper_bound", kind: "message", T: () => eo },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.lowerBound = eo.internalBinaryRead(e, e.uint32(), n, i.lowerBound);
                    break;
                case 2:
                    i.upperBound = eo.internalBinaryRead(e, e.uint32(), n, i.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.lowerBound && eo.internalBinaryWrite(e.lowerBound, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && eo.internalBinaryWrite(e.upperBound, t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let es = new ei();
class ea extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eu },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.version = eu.internalBinaryRead(e, e.uint32(), n, i.version);
                    break;
                case 2:
                    i.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.version && eu.internalBinaryWrite(e.version, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, s.O0.Varint).bool(e.inclusive);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eo = new ea();
class el extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => u.ZQ },
            { no: 3, name: "build", kind: "message", T: () => u.ol },
        ]);
    }
    create(e) {
        let t = { major: 0 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.major = e.uint32();
                    break;
                case 2:
                    i.minor = u.ZQ.internalBinaryRead(e, e.uint32(), n, i.minor);
                    break;
                case 3:
                    i.build = u.ol.internalBinaryRead(e, e.uint32(), n, i.build);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.major && t.tag(1, s.O0.Varint).uint32(e.major),
            e.minor && u.ZQ.internalBinaryWrite(e.minor, t.tag(2, s.O0.LengthDelimited).fork(), n).join(),
            e.build && u.ol.internalBinaryWrite(e.build, t.tag(3, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eu = new el();
class ec extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.commitHashes.push(e.string());
                    break;
                case 2:
                    if (r === s.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.prNumbers.push(e.int32());
                    else i.prNumbers.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ed = new ec();
class e_ extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.isBot = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, s.O0.Varint).bool(e.isBot);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ef = new e_();
class ep extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => u.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => u.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.minAgeYears = u.ZQ.internalBinaryRead(e, e.uint32(), n, i.minAgeYears);
                    break;
                case 2:
                    i.maxAgeYears = u.ZQ.internalBinaryRead(e, e.uint32(), n, i.maxAgeYears);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.minAgeYears && u.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && u.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eh = new ep();
class eE extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, s.O0.Bit64).fixed64(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let em = new eE();
class eg extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => em },
                { no: 2, name: "max_id", kind: "message", T: () => em },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.minId = em.internalBinaryRead(e, e.uint32(), n, i.minId);
                    break;
                case 2:
                    i.maxId = em.internalBinaryRead(e, e.uint32(), n, i.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.minId && em.internalBinaryWrite(e.minId, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.maxId && em.internalBinaryWrite(e.maxId, t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eA = new eg();
class eI extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.mask = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, s.O0.Bit64).fixed64(e.mask);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eT = new eI();
class eS extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.hashKey = e.string();
                    break;
                case 2:
                    i.stopRingPosition = e.uint32();
                    break;
                case 3:
                    i.startRingPosition = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        "" !== e.hashKey && t.tag(1, s.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, s.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, s.O0.Varint).uint32(e.startRingPosition);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ey = new eS();
class eN extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.releaseChannels.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.releaseChannels[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ev = new eN();
class eC extends l.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, s.O0.Varint).bool(e.value);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eO = new eC();
class eR extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.experimentId = e.fixed64().toString();
                    break;
                case 2:
                    if (r === s.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.variationIds.push(e.int32());
                    else i.variationIds.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, s.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eb = new eR();
class eD extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === s.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.premiumTypes.push(e.int32());
                else i.premiumTypes.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eL = new eD();
class ew extends l.G {
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
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (r === s.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.targetFilterValues.push(e.fixed64().toString());
                    else i.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, s.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eM = new ew();
class eP extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIds",
            [{ no: 1, name: "guild_ids", kind: "scalar", repeat: 1, T: 6 }],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = { guildIds: [] };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === s.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.guildIds.push(e.fixed64().toString());
                else i.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let ex = new eP();
class ek extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => u.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => u.ZQ },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
            },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    i.minCount = u.ZQ.internalBinaryRead(e, e.uint32(), n, i.minCount);
                    break;
                case 2:
                    i.maxCount = u.ZQ.internalBinaryRead(e, e.uint32(), n, i.maxCount);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        e.minCount && u.ZQ.internalBinaryWrite(e.minCount, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && u.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eU = new ek();
class eG extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildHasFeature",
            [{ no: 1, name: "features", kind: "scalar", repeat: 2, T: 9 }],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_STICKY",
            },
        );
    }
    create(e) {
        let t = { features: [] };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) i.features.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, s.O0.LengthDelimited).string(e.features[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eF = new eG();
class eV extends l.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.InstallationIds",
            [{ no: 1, name: "installation_ids", kind: "scalar", repeat: 1, T: 6 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { installationIds: [] };
        return (
            globalThis.Object.defineProperty(t, o.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, a.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let i = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === s.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.installationIds.push(e.fixed64().toString());
                else i.installationIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? s.f$.onRead : a)(this.typeName, i, t, r, o);
            }
        }
        return i;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let eB = new eV();
